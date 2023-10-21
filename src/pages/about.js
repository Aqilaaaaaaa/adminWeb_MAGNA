import AboutForm from "components/aboutForm";

const About = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>About Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">About</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <AboutForm mainContent="About" title="Title" desc="Descripsion" />
            <AboutForm mainContent="Vision & Goal" title="Title" desc="Descripsion" category="Category"/>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
