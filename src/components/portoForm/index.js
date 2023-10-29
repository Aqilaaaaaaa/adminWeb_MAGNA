import './index.css' 

const PortoForm = ({mainContent, title, desc, file, url}) => {
  return (
    <>
       <div className="col-md-8">
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
            {url?
              <>
                <label htmlFor="inputUrl">{url}</label>
                <input type="text" id="inputUrl" className="form-control" />
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
            <div className="form-group">
              {file?
                <>
                  <label htmlFor="exampleInputFile">{file}</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="exampleInputFile" />
                      <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text">Upload</span>
                    </div>
                  </div>
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

export default PortoForm;
