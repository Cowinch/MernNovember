import React, { Component } from 'react'

class PersonCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            age: this.props.age
        }
    }

    birthday = (e) => {
        var age = this.state.age+1
        this.setState({age:age})
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.birthday}>Happy birthday!</button>
            </div>
        );
    }
}

export default PersonCard