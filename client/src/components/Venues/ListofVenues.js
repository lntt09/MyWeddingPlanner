import React, { Component } from 'react'
import './ListofVenues.css'

export default class ListofVenues extends Component {
    render() {
        return (
            <div className="venueList">
                <h2>Possible Venues</h2>
                <a href="http://www.pristinechapel.co/?utm_channel=search" target='blank'><h3>Pristine Chapel</h3></a>
                <p>180 Mt. Zion Blvd <br/>Morrow, GA 30260</p>
               
                <a href="https://www.warrenhouse.net" target='blank'><h3>The Warren House</h3></a>
                <p>102 W Mimosa Dr.<br/>Jonesboro, GA 30236</p>


            </div>
        )
    }
}
