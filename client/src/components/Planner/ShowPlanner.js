import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Provider } from 'react-redux'


import ToDoList from '../ToDoList/ToDoList'
import Venues from '../Venues/Venues'
import Comments from '../Comments/Comments'
import CommentForm from '../Comments/CommentForm'
import store from '../Comments/store'


import './ShowPlanner.css'





export default class ShowPlanner extends Component {
    state = {
        planner: {
            first_name: '',
            last_name: '',
            wedding_date: '',

        }
    }
    componentDidMount() {
        this.showPlanner()
    }

    showPlanner = async () => {
        const plannerId = this.props.match.params.plannerId
        const planner = await axios.get(`http://localhost:5000/planners/${plannerId}`)
        this.setState({
            planner: planner.data.planner
        })
        console.log(this.state.planner)
    }



    render() {

        return (
            <Provider store={store}>
                <div className="plannerContainer">
                    <div className="showbridename" >
                        <h1 > {this.state.planner.first_name} {this.state.planner.last_name} </h1>
                        <h3>***{this.state.planner.wedding_date}***</h3>
                    </div>
                    <div className='container'>
                    
                            <div className="venueList">
                                <Venues />
                            </div>

                            <div className="todoList">
                                <ToDoList />
                            </div>

                            <div className="commentsForm">
                                <CommentForm />
                            </div>
                            <div className='comments'>     
                                <Comments />
                            </div>
                        
                    </div>


                </div>
            </Provider>
        )
    }


}