import './index.css' 

const userTable = ({title, no, namaLengkap, uname, email}) => {
  return (
    <>
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i className="fas fa-minus" />
            </button>
          </div>
        </div>
        <div className="card-body p-0">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Lengkap</th>
                <th>User Name</th>
                <th>Email</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{no}</td>
                <td>{namaLengkap}</td>
                <td>{uname}</td>
                <td>{email}</td>
                <td className="text-right py-0 align-middle">
                  <div className="btn-group btn-group-sm">
                    <a href="/user" className="btn btn-info"><i className="fas fa-eye" /></a>
                    <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default userTable;
