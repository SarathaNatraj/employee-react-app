import React, {Component}from "react";
import WrappedComponent from "./wrappedcomponent";

const withDataFetching = (WrappedComponent, dataSource) => {
    return class extends Component{
        state = {
            data:[],
            loading:false,
            error:null
        };

        componentDidMount(){
            this.setState({loading:true});
            fetch(dataSource)
                .then(response =>{
                    if(!response.ok){
                      //  throw new Error('Failed to fetch data from ${dataSource}');
                      console.log('Error in fetching data :',dataSource);
                    }
                return response.json();

            })
            .then(data => {
                this.setState({data, loading:false});
            })
            .catch(error=>{
                this.setState({error, loading:false});
            })
        }
        render(){
            const{data,loading,error} = this.state;
            return (
                <WrappedComponent 
                    data={data}
                    loading={loading}
                    error={error}
                    {...this.props}
                ></WrappedComponent>
            )
        }
    }
}
//Normal Class component


//Usage of HOC
const DataComponentWithFetching = withDataFetching(WrappedComponent, 'https://jsonplaceholder.typicode.com/posts') ;
export default DataComponentWithFetching;