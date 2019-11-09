import React, { Component } from 'react'
import axios from 'axios'
import Search from './Search'
import ListofVenues from './ListofVenues';

import './Venues.css'

export default class Venues extends Component {
    constructor() {
        super();
        this.state = {
            latlong: '',
            venues: []
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition(response => {
            console.log(response)

            this.setState({
                latlong: response.coords.latitude + "," + response.coords.longitude
            }, () => {
                console.log(this.state)
                this.getVenues("")
            })
        })
    }

    getVenues = (query) => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?";
        const params = {
            client_id: "DNUTD4524VMKVMH4JQKVGX3MTG2FY0W05FF4EB2AITOUAM4F",
            client_secret: "YYFUBYL2V13OO5C0YQEKDBDNW0UX2KLEGQG4SYXMSXFVS2ZQ",
            ll: this.state.latlong,
            query: query,
            limit: 10,
            v: "20190101"
        }
        axios.get(endPoint + new URLSearchParams(params)).then(response => {
            this.setState({
                venues: response.data.response.groups[0].items
            })
            console.log(response.data.response.groups[0].items)

        })
    }

    render() {
        return (
            <div className='venueContainer'>
                <div className='searchvenue'>
                    <Search getVenues={this.getVenues} />
                </div>
                <div className='fakedata'>
                    <ul>
                        {this.state.venues.map(venue => {
                            return (
                                <li key={venue.venue.name}>{venue.venue.name} <br/>Location: {venue.venue.location.formattedAddress} </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='listofvenue'>
                    <ListofVenues />
                </div>
            </div>
        )
    }
}
