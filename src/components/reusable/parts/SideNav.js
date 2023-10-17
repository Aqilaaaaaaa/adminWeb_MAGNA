import React from 'react';
import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary">
        {/* Brand Logo */}
        <div className="brand-link">
          <img height={80} width={80} src="/dist/img/logo.png" alt="Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <h6 className="brand-text font-weight-light">MAGNA JUARA KREASI</h6>
        </div>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 grid row-gap-5">
            <div className="image">
              <img src="/dist/img/default-150x150.png" className="img-circle elevation-2 obj" height={25} width={25} alt="User Image" />
              <span className="text-light"> Userku</span>
            </div>
            {/* <div className="info">
              <img src="/dist/img/avatar.png" height={25} width={25} className="d-block" alt="img"/>
            </div> */}
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar d-flex flex-column align-items-start " data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library */}
              <li className="nav-item menu-open container">
                <a href="#" className="nav-link active ">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                  </p>
                </a>
              </li>
              <li className="nav-item container">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Blog
                  </p>
                </a>
              </li>
              <li className="nav-item container">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    User
                  </p>
                </a>
              </li>

              {/* Section management */}
              <li className="nav-header container">SECTION MANAGEMENT</li>
              <li className="nav-item container">
                <a href="./pages/banner" className="nav-link">
                  <i className="nav-icon fas fa-tree" />
                  <p>
                    Banner
                  </p>
                </a>
              </li>
              <li className="nav-item container">
                {/* <Link to='/about'> */}
                  <a className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>
                      About
                    </p>
                  </a>
                {/* </Link> */}
              </li>
              <li className="nav-item container">
                <a href="./pages/vision.js" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Vision & Goal
                  </p>
                </a>
              </li>
              <li className="nav-item container">
                <a href="./pages/portfolio.js" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>
                    Portfolio / Projects
                  </p>
                </a>
              </li>
              <li className="nav-item container">
                <a href="./pages/services.js" className="nav-link">
                  <i className="nav-icon fas fa-columns" />
                  <p>
                    Services
                  </p>
                </a>
              </li>
              <li className="nav-item container">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>
                    Contact
                  </p>
                </a>
              </li>
              <li className="nav-item container">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-search" />
                  <p>
                    Search
                  </p>
                </a>

              </li>
            </ul>
          </nav>
        </div>
      </aside>

    </>
  )
}
