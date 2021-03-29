import React from 'react';
import axios from 'axios';
import ListContainer from './ListContainer.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

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
    return axios.get('/targetUrl', {
      params: {
        target: this.state.targetUrl
      }
    })
    .then((res) => {
      const urlList = this.state.urlList;
      const titleList = this.state.titleList;
      urlList.unshift(this.state.targetUrl);
      titleList.unshift(res.data);

      this.setState({
        urlList: urlList,
        titleList: titleList,
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
        <Container fluid="sm">
        <div>
          <Jumbotron>
          <h1>
            <Badge variant="info">Title Bot</Badge>
          </h1>
          <h5>The bot that finds website titles for you</h5>
          </Jumbotron>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formTargetUrl">
              <Form.Label size="lg">
                Copy/Paste a url here to see the website's title
              </Form.Label>
                <Form.Control size="lg" type="text" name="targetUrl" value=  {this.state.targetUrl} onChange={this.handleChange} />
            </Form.Group>
            <Button variant="primary" size="lg" type="submit" block>Get Title</Button>
          </Form>
        </div>
        <div>
          <ListContainer urls={this.state.urlList} titles={this.state.titleList} />
        </div>
        </Container>
      </div>
    );
  }
}

export default App;
