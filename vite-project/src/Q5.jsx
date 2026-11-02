//create an application for any kind of variable using react that explores the react component lifecycle by logging  lifecycle methods at different stages

import {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);

        this.state={
            count:0
        }
        console.log('Constructor called');
    }

    componentDidMount(){
        console.log("Component Mounted");
    }
    componentDidUpdate(){
        console.log("Component Updated");
    }
    componentWillUnmount(){
        console.log("Component Unmounted");
    }

    render(){
        console.log("Render called");

        return(
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-5">Counter Application</h1>
                <h2 className="text-2xl mb-5">Count:{this.state.count}</h2>
                <button 
                    className="bg-amber-600 text-white p-3 rounded"
                    onClick={()=>this.setState({count:this.state.count+1})}>
                    Increment
                </button>
            </div>
        )
    }
}

export default class Q5 extends Component{
    render(){
        return <Counter/>
    }
}