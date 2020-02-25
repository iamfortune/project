import React from 'react';
import Sidebar from './components/Sidebar';
import Topnav from './components/Topnav';
import Table from './components/Table';
import './App.css';
import $ from 'jquery';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
				<div className="row">
        <Sidebar/>
        <main id="appMain" className="appMain">
        <Topnav/>
     <div className="dashboard_area c_padding">
       <div className="ds_heading">
     <h4> <img src={require('./components/prod.png')} /> Production House</h4>
     </div>


     <Table />
    
     </div>
        </main>
        </div>
        </div>
      </div>
    )
    
  }
}
export default App