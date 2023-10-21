import React from 'react';
import './index.css'

const UserForm = () => {
  return (
    <div className="row gutters">
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
          <div className="card-body">
            <div className="user-profile">
              <div className="user-avatar">
                <img src="../../dist/img/avatar.png" height={100} width={100} alt="User profile picture" />
              </div>
              <h5 className="user-name">Yuki Hayashi</h5>
              <h6 className="text-primary">Userku</h6>
            </div>
            <div className="about">
              <div className="btn-group btn-group-sm">
              <a href="/" className="btn btn-danger"><i className="fas fa-trash" /> Delete Account</a>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-9">
        <div className="card h-100">
          <div className="card-body">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mb-2 text-primary">Personal Details</h6>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="userName">User Name</label>
                  <input type="text" className="form-control" id="userName" placeholder="Enter User Name" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="eMail">Email</label>
                  <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <input type="text" className="form-control" id="role" placeholder="Enter Your Role" />
                </div>
              </div>
            </div>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mt-3 mb-2 text-primary">Update Password</h6>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="password">Old Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter Old Password" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="password">New Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter New Password" />
                </div>
              </div>
            </div>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-right">
                  <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                  <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default UserForm;
