import ServiceForm from "components/serviceForm";
import AboutForm from "components/aboutForm";

const Services = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Services Page </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Services</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <ServiceForm mainContent="Edit Main Content" title="Icon Title" iconName="FA Icon Name" title1="Main Title" desc="Descripsion" />
            <ServiceForm mainContent="Edit What We Do Content" title="Title (We Make Every)" url="Show Url" desc="Descripsion" file="Upload Image" desc1="Descripsion Image"/>
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
