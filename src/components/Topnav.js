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
            <img src={require('./mg.png')} />
               <i className="ti-credit-card"></i></a>
          </li>
          <li className="nav-item isHiddenOnMobile">
            <a href="#" className="btn dash_btn"> <img src={require('./msg.png')} /> Messsage<i className="ti-download"></i></a>
          </li>
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle  hide_arrow" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 user"><img src={require('./cart.png')} /> Market Place</span></a>
          </li>
          <li className="nav-item isHiddenOnMobile">
            <a href="#" className="btn dash_btn"> <i class="fas fa-list-ul"></i> Notifications<i className="ti-download"></i></a>
          </li>
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle  hide_arrow" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 user"><img src={require('./pro.svg')} /> Me</span></a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Topnav;