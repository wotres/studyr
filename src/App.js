import React, { Component } from 'react';
// import ReactLifeCycle from './reactLifeCycle/ReactLifeCycle';
import './App.css';

class App extends Component {
  renderSeparate() {
    return (
      <div> 코드 분리 </div>
    )
  }
  render() {
    return (
      <div>
        <span>gkgk</span>
        {this.renderSeparate()}
      </div>
    );
  }
}

export default App;
