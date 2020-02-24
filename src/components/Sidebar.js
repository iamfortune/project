import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css'
const navLinks = [
	{ url: '/about-us', name: 'Dashboard', icon:'fa fa-th-large'},
	{ url: '/projects', name: '	Operations', icon:'fa fa-clock-o'},
	{ url: '/services', name: 'Records', icon:'fa fa-file'},
	{ url: '/contact-us', name: 'Contact Us' },
  ];
  

class Sidebar extends React.Component {
	constructor(){
		super();
		this.state = {
		  style:"menu",
		  menuStatus:"open"
		};
		this.handleClick = this.handleClick.bind(this);
	  };
	
	  handleClick() {
		switch(this.state.menuStatus)
		{
		  case "open":
			this.setState({
			  menuStatus:"close",
			  style:"menu active"
			});
			break;
		  case "close":
			this.setState({
			  menuStatus:"open",
			  style:"menu"
			});
			break;
		}        
	  }

  render() {
    return (
      <div id="nav-sidebar" className="container-fluid">
		        <div>
        <button onClick={this.handleClick} className="menu_toggle">menu</button>
        <div className={this.state.style}>               
          <ul className="nav nav-pills flex-column">
            {navLinks.map(({ url, name, icon }) => (
              <li className="nav-item ">
                <a href={url} className="nav-link"><i className={icon}></i>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
       	{/* <div className="sidebar-brand">
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
									</div> */}
								</div>

    )
  }
}
export default Sidebar