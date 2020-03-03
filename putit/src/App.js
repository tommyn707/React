import React from 'react';
import './App.css';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div className="App">
        <Header firstName="Bill" lastName="Justice" Age="45" hair="Brown" />
        <NewComponent/>
        <Header firstName="Smith" lastName="John" Age="88" hair="Brown" />
        <NewComponent/>
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

