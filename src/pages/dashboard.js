import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div className="content-wrapper">
      {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Dashbord</h1>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>

        {/* Main content */}
        
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img className="profile-user-img img-fluid img-circle" src="../../dist/img/avatar.png" alt="User profile picture" />
                    </div>
                    <h3 className="profile-username text-center">Userku</h3>
                    <p className="text-muted text-center">Software Engineer</p>
                    <a href="/user" className="btn btn-primary btn-block"><b>Edit User</b></a>
                  </div>
                </div>
                <div className="card card-danger card-outline">
                  <div className="card-body box-profile">
                  <div className="card-header">
                    <h3 className="card-title">Login History</h3>
                  </div>
                    <table className="table table-hover table-striped">
                      <tbody>
                        <tr>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-date">5 mins ago</td>
                        </tr>
                        <tr>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-date">28 mins ago</td>
                        </tr>
                        <tr>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-date">11 hours ago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header">
                    <div className="col-md-12">
                        <div className="card-header">
                          <h3 className="card-title">Pages Edit</h3>
                        </div>
                        <div className="card-body">
                          <div id="accordion">
                            <div className="card card-primary">
                              <div className="card-header">
                                <h4 className="card-title w-100">
                                  <a className="d-block w-100" data-toggle="collapse" href="#collapseOne">
                                    Banner
                                  </a>
                                </h4>
                              </div>
                              <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                  3
                                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                  laborum
                                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                  nulla
                                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                  beer
                                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                  labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                            <div className="card card-danger">
                              <div className="card-header">
                                <h4 className="card-title w-100">
                                  <a className="d-block w-100" data-toggle="collapse" href="#collapseTwo">
                                    Portfolio
                                  </a>
                                </h4>
                              </div>
                              <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                  3
                                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                  laborum
                                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                  nulla
                                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                  beer
                                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                  labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                            <div className="card card-success">
                              <div className="card-header">
                                <h4 className="card-title w-100">
                                  <a className="d-block w-100" data-toggle="collapse" href="#collapseThree">
                                    Services
                                  </a>
                                </h4>
                              </div>
                              <div id="collapseThree" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                  3
                                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                  laborum
                                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                  nulla
                                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                  beer
                                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                  labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                            <div className="card card-warning">
                              <div className="card-header">
                                <h4 className="card-title w-100">
                                  <a className="d-block w-100" data-toggle="collapse" href="#collapseFour">
                                    About
                                  </a>
                                </h4>
                              </div>
                              <div id="collapseFour" className="collapse show" data-parent="#accordion">
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                  3
                                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                  laborum
                                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                  nulla
                                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                  beer
                                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                  labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
