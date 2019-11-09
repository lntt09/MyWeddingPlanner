import React, {Component} from 'react';
import ToDoList from '../ToDoList/ToDoList'
import './Planners.css'

class Planners extends Component{
    constructor(){
        super()
        this.state = {
            planners: []
        }
    }

    componentDidMount(){
        this.getPlanners()
    }

    // getPlanners = async() =>{
    //     const planners = await fetch('http://localhost:4000/planners');
    //     const parsedResponse = await planners.id.json()
    //     console.log(parsedResponse);
    //     this.setState({
    //         planners: parsedResponse.planners.id
    //     })
    // }

    render(){
        const planners = this.state.planners.map((planner)=>{
            return(
                <div id key={planner.id}>
                    <h3>{planner.first_name} {planner.last_name}</h3>
                    
                </div>
            )
        })
        return(
            <div className='myplanner'>
                <h1 className="planner_H1">My Wedding Planner</h1>
                {planners.id}
                <ToDoList />
            </div>
        )
    }
}

export default Planners;