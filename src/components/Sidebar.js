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
												<a className="nav-link isActive" href=""> <i className="fa fa-th-large"></i> Dashboard <span className="sr-only">(current)</span></a>
											</li>
										
											<li className="nav-item ">
											</li>
												<a className="nav-link" href=""> <i className="fa fa-clock-o"></i> Operations </a>
											<li className="nav-item ">
												<a className="nav-link" href=""> <i className="fa fa-file"></i> Records</a>
											</li>
											<li className="nav-item ">
												<a className="nav-link" href=""> <i className="fa fa-shopping-cart"></i> Supply Store </a>
											</li>
  
											<li className="nav-item ">
												<a className="nav-link" href=""> <i className="fa fa-dropbox"></i> Marketplace </a>
											</li>
										
											<li className="nav-item ">
											</li>
												<a className="nav-link" href=""> <i className="fa fa-comments"></i> Forums</a>
											
										</ul>
                    </div>
									</div>
								</div>

    )
  }
}
export default Sidebar