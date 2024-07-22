import React, {Component} from "react";
import WrappedComponent from "./wrappedcomponent";

const WithPost = (WrappedComponent, postType) => {

    const apiurl ="https://newsapi.org/v2/top-headlines?apiKey=22da1bd49c7a4d0485caff0cd6ab9cc1";


    return class extends Component{
        constructor(props){
            super(props);
            this.state= {
                posts : [],
                isLoading:false,
                error:null
            };
        }

            componentDidMount = async() =>{
                this.setState({isLoading:true});

                //Simualte fetch the news according to catagory
               await fetch(apiurl+'&sources='+postType)
                    .then(response => {
                        console.log('inside response',response);
                        //console.log(response.json());
                        return response.json();
                    }).then(data => {
                        console.log('inside data',data.articles);
                        this.setState({posts : data.articles, isLoading:false})
                    })
                    .catch(error => this.setState({error, isLoading:false}));

            }
        
            render(){
                const{posts,isLoading,error} = this.state;

                return(
                    <div>
                        {isLoading ? (
                            <p>Loading the sources ...</p>
                        ) : error ? (
                            <p>Error in fetching the sources :{error.message} </p>
                        ):
                        <WrappedComponent posts={posts} {...this.props} />
                    }
                    </div>
                )
            }
    }
}


export default WithPost;