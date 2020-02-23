import React from 'react'
import Sidebar from './components/Sidebar'
import Topnav from './components/Topnav'
import './App.css'
import $ from 'jquery';
class App extends React.Component {
  componentDidMount() {
    $(document).ready(function() {

      $('.sidebar-expand i').click(function() {
        $('#nav-sidebar').toggleClass("active");
      });
      
      $('.sidebar-expand i').click(function() {
        $('#appMain').toggleClass("active");
      });
      //Customize Bootstrap dropdown speed
      $('.dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
      });

      $('.dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
				<div className="row">
        <Sidebar/>
        <main id="appMain" className="appMain">
        <Topnav/>
        <h1>Main</h1>
        </main>
        </div>
        </div>
     
      </div>
    )
  }
}
export default App