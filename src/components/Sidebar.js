import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css'
const navLinks = [
	{ url: '/about-us', name: 'Dashboard', icon:'fa fa-th-large'},
	{ url: '/projects', name: '	Operations', icon:'fa fa-clock-o'},
	{ url: '/services', name: 'Records', icon:'fa fa-file'},
	{ url: '/contact-us', name: 'Supply Store', icon: 'fa fa-shopping-cart'},
	{ url: '/contact-us', name: 'Market Place', icon: 'fa fa-dropbox'},
	{ url: '/contact-us', name: 'Forums', icon: 'fa fa-comments'},
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
	  </div>
       
    )
  }
}
export default Sidebar