import React, {Component}from "react";

class WrappedComponent extends Component{
    render(){
        const{data,loading,error} = this.props;

        if(loading){
            return <p>Loading....</p>
        }
        if(error){
            return <p>Error : {error.message}</p>
        }
        return (
            <div>
                <h2>Data Component</h2>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default WrappedComponent;
