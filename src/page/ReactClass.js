import axios from "axios";
import React, { Component } from "react";

export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'ABC',
            password: 'XYZ'
        }
    }

    render() {
        return (
            <>
                <input value={this.state.username} type="text" onChange={(event) => {this.setState({username: event.target.value})}} />
                <input value={this.state.password} type="text" />
            </>
        )
    }
}
