import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './EditPlanner.css'


class EditPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      first_name: props.planner.first_name,
      last_name: props.planner.last_name,
      wedding_date: props.planner.wedding_date
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange = (e)=>{
      this.setState({
          [e.currentTarget.name] : e.currentTarget.value
      })
      console.log(this.state);
  }

  handleSubmit = async(e) => {
      e.preventDefault();
      console.log("Ready to update");
      const validUpdate = await this.props.updatePlanner(this.props.planner.id, this.state)
      console.log(validUpdate)
      if (validUpdate === true){
        this.toggle();
      }
      
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>Edit {this.props.planner.first_name}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Editing {this.props.planner.first_name}</ModalHeader>
          <ModalBody className='modalbody'>
            <form onSubmit={this.handleSubmit}>
                First Name: <input type="text" name="first_name" onChange={this.handleChange} placeholder={this.props.planner.first_name} /><br/><br/>
                Last Name: <input name="last_name" onChange={this.handleChange} placeholder={this.props.planner.last_name}></input><br/><br/>
                Wedding Date: <input type="text" name="wedding_date" onChange={this.handleChange} placeholder={this.props.planner.wedding_date} />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Edit Planner</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditPlanner;