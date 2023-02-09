import React,  { Component } from "react";
import './App.css';
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Content from './components/Content/Content'

class App extends Component {
  carttonsData = [
      {
      id : 1,
      value : 'The little Mermaide'
      },
      {
      id : 2,
      value : 'Peter Pan'
      },
      {
      id : 3,
      value : 'Mulan'
      },
      {
      id : 4,
      value : 'Alladin'
      },
      {
      id : 5,
      value : 'The aristocats'
      },
      {
      id : 6,
      value : 'Lion King'
      }
    ]
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Navigation participants={this.carttonsData} />
          <Content />
        </main>
      </div>
    )
  }
}
export default App;
