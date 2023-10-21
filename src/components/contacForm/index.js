import React from 'react';

const ContactForm = ({mainContent, title, email, categoryLink, link1, link2, link3, desc }) => {
  return (
    <>
    <div className="col-md-6">
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">{mainContent}</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i className="fas fa-minus" />
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="form-group">
          {title?
            <>
              <label htmlFor="inputUser">{title}</label>
              <input type="text" id="inputUser" className="form-control" />
            </>
            :''}
          </div>
          <div className="form-group">
            {email?
            <>
              <label htmlFor="inputEmail">{email}</label>
              <input type="email" id="inputEmail" className="form-control" />
            </>
            :''}
          </div>
          <div class="form-group">
            {categoryLink? 
            <>
              <label for="inputStatus">{categoryLink}</label>
              <select id="inputStatus" class="form-control custom-select">
                <option selected disabled>Select one</option>
                <option>{link1}</option>
                <option>{link2}</option>
                <option>{link3}</option>
              </select>
            </>
            :''}
          </div>
          <div className="form-group">
            {desc?
              <>
                <label htmlFor="inputDescription">{desc}</label>
                <textarea id="inputDescription" className="form-control" rows={4} defaultValue={""} />
              </>
              :''}
          </div> 
          <div className="row">
          <div className="col-12">
            <a href="#" className="btn btn-secondary">Cancel</a>
            <button type="submit" class="btn btn-primary float-right">Submit</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default ContactForm;
