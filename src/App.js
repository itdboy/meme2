import React from 'react'; 
import './App.css';
import Header from './Header';
import MemeGernerator from './MemeGernerator';

class App extends React.Component{

  render(){

    return(
      <div> 
        <Header/>
        <MemeGernerator/>
      </div>
    )
  }
}

export default App;
