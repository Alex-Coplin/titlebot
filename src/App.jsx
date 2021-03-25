import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetUrl: '',
      titleList: []
    }
  }

  render() {
    return(
      <div>
        <div>This is an app</div>
      </div>
    )
  }
}

export default App;