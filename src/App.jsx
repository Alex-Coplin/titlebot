import React from 'react';
import axios from 'axios';
import ListContainer from './ListContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetUrl: '',
      urlList: [],
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
      const oldUrlList = this.state.urlList;
      const oldTitleList = this.state.titleList;
      const joinedUrlList = oldUrlList.concat([this.state.targetUrl]);
      const joinedTitleList = oldTitleList.concat([res.data]);

      this.setState({
        urlList: joinedUrlList,
        titleList: joinedTitleList,
        targetUrl: ''
      });
    })
    .catch((error) => {
      alert('not a valid url');
      this.setState({ targetUrl: '' });
    });
  };

  handleSubmit(event) {
    this.getTargetTitle();
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <h1>Title Bot</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <h3>Copy/Paste a url here to see the website's title</  h3>
              <input type="text"  name="targetUrl" value={this.state.  targetUrl} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Get Title" />
          </form>
        </div>
        <div>
          <ListContainer urls={this.state.urlList} titles={this.state.titleList} />
        </div>
      </div>
    );
  }
}

export default App;