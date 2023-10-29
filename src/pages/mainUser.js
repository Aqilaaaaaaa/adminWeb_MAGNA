import UserTable from "components/userTable";

const MainUser = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>User Data Page </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">User</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <UserTable no="1" namaLengkap="Bakso Cuanki" uname="yoursides" email="yoursides@pppmail.lite"/>
        </div>
      </div>
    </>
  );
}

export default MainUser;
