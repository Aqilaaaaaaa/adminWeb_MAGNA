import React from 'react';

const Table = ({title, namaLengkap, uname, email}) => {
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
                <th>{namaLengkap}</th>
                <th>{uname}</th>
                <th>{email}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bakso Cuanki</td>
                <td>yoursides</td>
                <td>yoursides@pppmail.lite</td>
                <td className="text-right py-0 align-middle">
                  <div className="btn-group btn-group-sm">
                    <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
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

export default Table;
