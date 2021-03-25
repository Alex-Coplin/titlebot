import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetUrl: '',
      titleList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTargetTitle = this.getTargetTitle.bind(this);
  }

  handleChange(event) {
    this.setState({targetUrl: event.target.value});
  }

  getTargetTitle() {
    return axios.get('http://localhost:1234/targetUrl', {
      params: {
        target: this.state.targetUrl
      }
    })
    .then((res) => {
      const oldList = this.state.titleList;
      const newItem = `${this.state.targetUrl}: ${res.data}`;
      const joinedList = oldList.concat(newItem);
      this.setState({ titleList: joinedList });
    })
    .catch((error) => {
      console.log(error, 'not a valid url');
    });
  };

  handleSubmit(event) {
    this.getTargetTitle();
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <h1>Title Bot</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Copy/Paste a url here to see the website's title
            <input type="text"  name="targetUrl" value={this.state.targetUrl}   onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Get Title" />
        </form>
        <h2>{this.state.titleList}</h2>
      </div>
    )
  }
}

export default App;