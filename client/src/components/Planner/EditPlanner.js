import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class EditPlanner extends Component {
  state = {
    planner: {
      modal: false,
      first_name: '',
      last_name: '',
      wedding_date: ''
    },
    redirectToPrevious: false,
  }

  handleChange = (e) => {
    const attribute = e.target.name
    const clonedPlanner = {...this.state.planner}
    clonedPlanner[attribute] = e.target.value
    this.setState({
      planner: clonedPlanner
    })
    console.log(this.state.planner)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const plannerId = this.props.match.params.plannerId
    const res = await axios.patch(`http://localhost:5000/planners/${plannerId}`,{planner: this.state.planner})
    this.setState({redirectToPrevious: true})
    console.log("Its a string")
    
  }

  componentDidMount() {
    this.getPlanner()
  }


  getPlanner = async () => {
    const plannerId = this.props.match.params.plannerId
    const planner = await axios.get(`http://localhost:5000/planners/${plannerId}`)
    this.setState({
      planner: planner.data.planner
    })
    console.log(planner.data)
    console.log(this.state.planner)
  }

  deletePlanner = async() => {
    const plannerId = this.props.match.params.plannerId
    await axios.delete(`http://localhost:5000/planners/${plannerId}`)
    this.setState({redirectToPrevious:true})
  }

  render() {
    if(this.state.redirectToPrevious){
      return <Redirect to={`/`} />
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          First Name: <input type="text" name="first_name" onKeyUp={this.handleChange} placeholder={this.state.planner.first_name} /><br /><br />
          Last Name: <input name="last_name" onKeyUp={this.handleChange} placeholder={this.state.planner.last_name}></input><br /><br />
          Wedding Date: <input type="text" name="wedding_date" onKeyUp={this.handleChange} placeholder={this.state.planner.wedding_date} />

          <input type="submit" value="submit" />
          
        </form>
        <button onClick={this.deletePlanner}>Delete This Planner</button>
      </div>
    )
  }
}
