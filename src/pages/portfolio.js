import PortoForm from 'components/portoForm';

const Portfolio = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Portfolio Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Portfolio</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <PortoForm title="Title" url="Link" desc="Deskripsi" file="Upload Asset"/>
          </div>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
