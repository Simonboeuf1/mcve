import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchState: 'loading'
    }
  }
  componentDidMount() {
    try {
      fetch("/").then(() => this.setState({fetchState: 'success'}))
    }
    catch {
      this.setState({fetchState: 'error'})
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.fetchState}
      </div>
    );
  }

}

export default App;
