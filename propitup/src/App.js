import React from 'react';
import './App.css';
import MyNewComponents from './components/MyNewComponents.js';

function App() {
  return (
    <div className="App">
        <Header firstName="Bill" lastName="Justice" Age="45" hair="Brown" />
        <Header firstName="Smith" lastName="John" Age="88" hair="Brown" />
        <Header firstName="Fillmore" lastName="Millard" Age="50" hair="Brown" />
        <Header firstName="Smith" lastName="Maria" Age="62" hair="Brown" />

      
      </div>
  );
}

export default App;
class Header extends React.Component {
      render() {
          const {firstName, lastName, Age, hair} = this.props;
          return (
              <div>
                  <h1>  {lastName}, {firstName}</h1>
                  <p>Age: {Age}</p>
                  <p>Hair Color: {hair}</p>
              </div>
          );
      }
  }

