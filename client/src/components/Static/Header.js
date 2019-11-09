import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap'



export default class Header extends Component {
    render() {
        return (
            <div>
                <a className="active" href="/">Home</a>
                <a href="https://www.tripadvisor.com/Search?geo=60898&pid=3826&redirect=&startTime=&uiOrigin=&q=florist&supportedSearchTypes=find_near_stand_alone_query&enableNearPage=true&returnTo=__2F__&searchSessionId=F4C4C944BD5B265DEF2284464264209C1571497024945ssid&social_typeahead_2018_feature=true&sid=F4C4C944BD5B265DEF2284464264209C1571497082269&blockRedirect=true&ssrc=a" target="blank">Vendors</a>
                <a href="https://www.tripadvisor.com/Search?geo=60898&searchNearby=&pid=3826&redirect=&startTime=&uiOrigin=&q=wedding%20venues&supportedSearchTypes=find_near_stand_alone_query&enableNearPage=true&returnTo=__2F__&searchSessionId=F4C4C944BD5B265DEF2284464264209C1571497024945ssid&social_typeahead_2018_feature=true&sid=F4C4C944BD5B265DEF2284464264209C1571497040526&blockRedirect=true" target="blank">Venues</a>
                <a href="#joinus">Join Us</a>
                <Link to={'./planner/create'}>Add New Planner</Link>

                <div className="login-container">
                    <form action="">
                        <input type="text" placeholder="Username" name="username" />
                        <input type="text" placeholder="Password" name="psw" />
                        <button type="submit">Login</button>
                    </form>
                </div>

    
            </div>
        )
    }
}


