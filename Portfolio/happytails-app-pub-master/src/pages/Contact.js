import React from 'react'
import {form,button} from 'react-bootstrap';


function Contact() {
    return (
        <div className="wrapper">
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', color: 'grey' }}>
                Contact</h1>

               
            </div>

  )
}

export class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
          <div className="wrapper">
        <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
        </div>
      );
    }
  }

export default Contact

