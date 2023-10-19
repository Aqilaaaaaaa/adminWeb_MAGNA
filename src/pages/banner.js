import Form from 'utils/form'

export default function banner() {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Banner Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Banner</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <Form mainContent="Banner" title="Title" desc="Subtitle" file="Background Added"/>
            <Form mainContent="Link Edit" categoryLink="Sosmed Link category" link1="Button Label" link2="Button URL" title="Label" title1="Isi url"/>
          </div>
        </section>
      </div>
    </>
  )
}
