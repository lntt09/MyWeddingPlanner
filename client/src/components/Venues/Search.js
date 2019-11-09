import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ""
        }
    }


    changeHandler = (e) => {
        this.setState({ searchInput: e.target.value })
    }

    render() {
        return (
            <div>
                {/* <form onSubmit={this.props.getVenues.bind(null, this.state.searchInput)}> */}
                    <input onChange={this.changeHandler} type="text" placeholder="search venues" name="searchInput" id="searchInput" />
                    {/* <button type="submit" >Search</button> */}
                    <button onClick={this.props.getVenues.bind(null,this.state.searchInput)}>Search</button>
                {/* </form> */}
            </div>
        )
    }
}
