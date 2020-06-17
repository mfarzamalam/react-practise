import React, { Component } from 'react'

class Student extends Component {
    // with constructor
    
    constructor(props){
        super(props);
        this.state = {
            name: "Tom bishop",
            role: this.props.role
        }
    }

    // Without constructor 

    // this.state = {
    //     name: "Tom bishop",
    //     role: this.props.role
    // }

    render() {
        return <div>
                   <p>Nathan recruit {this.state.name} is also one of those many amazing things i've
                        watched in the past couple of years
                   </p>
                   <p>
                        Their work is to {this.state.role}
                   </p>
                </div>
    }
}

export default Student;