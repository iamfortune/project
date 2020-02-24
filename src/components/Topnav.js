import React from 'react'
class Topnav extends React.Component {

  render() {
    return (

      <nav className="navbar navbar-expand topbar ">
{/* <span className="sidebar-expand mobile">
            Menu
          </span>  */}
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
            <a href="#" className="btn dash_btn">Download <i className="ti-download"></i></a>
          </li>
          <li className="nav-item">
            <span className="bal nav-link"> <i className="ti-wallet"></i><em> ₦</em> 2,478</span>
          </li>

          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle  hide_arrow" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 user">Hello User</span>
              <span className="ti-user"></span>
            </a>
          
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item dropDownLink" href="notifications.html">
                <i className="ti-bell"></i> Notifications
              </a>
              <div className="dropdown-divider"></div>
                          <a className="dropdown-item dropDownLink" href="login.html">
                <i className="ti-power-off"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Topnav