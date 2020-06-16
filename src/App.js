import React, { Component } from 'react';
import './App.css';
import SMSForm from './SMSForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>LIZTEXT</h1>
          <p>Send friends your Lizt  from this form:</p>
          <SMSForm />
          <a href='http://localhost:3000/' >Back to MyLizt</a>
        </header>
      </div>
    );
  }
}

export default App;
