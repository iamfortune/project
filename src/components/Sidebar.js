import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';

class Sidebar extends React.Component {

  render() {
    return (
      <div id="nav-sidebar" className="container-fluid">
       	<div className="sidebar-brand">
         <span className="sidebar-expand">
										<i className="fa fa-bars"></i>
									</span>
           <div>
										<ul className="nav nav-pills flex-column">
											<li className="nav-item ">
												<a className="nav-link isActive" href=""> <img src={require('./1.png')} /> Dashboard <span className="sr-only">(current)</span></a>
											</li>
										
											<li className="nav-item ">
											</li>
												<a className="nav-link" href=""><img src={require('./2.png')} />   Operations </a>
											<li className="nav-item ">
												<a className="nav-link" href=""> <img src={require('./3.png')} />  Records</a>
											</li>
											<li className="nav-item ">
												<a className="nav-link" href=""> <img src={require('./4x.png')} /> Supply Store </a>
											</li>
  
											<li className="nav-item ">
												<a className="nav-link" href=""> <img src={require('./4.png')} />  Marketplace </a>
											</li>
										
											<li className="nav-item ">
											</li>
												<a className="nav-link" href=""> <img src={require('./5.png')} /> Forums</a>
											
										</ul>
                    </div>
									</div>
								</div>

    )
  }
}
export default Sidebar