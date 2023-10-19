import { Link } from "react-router-dom";
import Form from "utils/form";

const Contact = () => {
  return (
   <>
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Contact Page</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Contact</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="row">
          <Form mainContent="Contact Edit" title="Phone" email="Email" desc="Address" />
          <Form mainContent="Link Edit" categoryLink="Sosmed Link Edit" link1="Instagram" link2="Whatsapp" title="Link"/>
        </div>
      </section>
    </div>
   </>
  );
}

export default Contact;
