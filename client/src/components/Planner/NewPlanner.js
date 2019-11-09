import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import './NewPlanner.css'



class NewPlanner extends Component {

    state = {
        planner: {
            first_name: '',
            last_name: '',
            wedding_date: ''
        },
        modal: false,
        redirectToPrevious: false
    }


    handleChange = (e) => {
        const updatePlanner = {
            ...this.state.planner
        }
        updatePlanner[e.target.name] = e.target.value
        this.setState({planner: updatePlanner})
      }

    handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000/planners`, {planner:this.state.planner})
        this.setState({redirectToPrevious: true})
        console.log(this.state.planner)
    }

    render() {
        if (this.state.redirectToPrevious) {
            return <Redirect to={`/`} />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Welcome bride...create your planner</h3>
                    <label htmlFor="first_name">First Name:</label>
                    <input type="text" name="first_name" onChange={this.handleChange} value={this.state.planner.first_name} />
                    <br />
                    <br />
                    <label htmlFor="last_name">Last Name:</label>
                    <input name="last_name" onChange={this.handleChange} value={this.state.planner.last_name}></input>
                    <br />
                    <br />
                    <label htmlFor="wedding_date">Wedding Date:</label>
                    <input type="text" name="wedding_date" onChange={this.handleChange} value={this.state.planner.wedding_date} />
                    <br />
                    <br />

                    <input type="submit" value="submit" />

                </form>

            </div>
        )
    }
}

export default NewPlanner;