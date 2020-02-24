import React from 'react'
class Topnav extends React.Component {

  render() {
    return (

      <nav className="navbar navbar-expand topbar ">
        <a className="navbar-brand" href="#"> 
          <img src={require('./logo.png')} />
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item isHiddenOnMobile">
            <a href="deposit.html" className="btn dash_btn">
            <img src={require('./mg.png')} className="navIcon"/>
             </a>
          </li>
          <li className="nav-item isHiddenOnMobile">
            <a href="#" className="btn dash_btn"> <img src={require('./msg.png')} className="navIcon"/> Messsage</a>
          </li>
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle  hide_arrow" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 user"><img src={require('./cart.png')}  className="navIcon"/> Market Place</span></a>
          </li>
          <li className="nav-item isHiddenOnMobile">
            <a href="#" className="btn dash_btn"><i className="fa fa-list"></i> Notifications</a>
          </li>
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle  hide_arrow" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 user"><img src={require('./pro.svg')} className="navIcon"/> Me</span></a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Topnav;