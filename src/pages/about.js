import React from 'react';
import Form from 'utils/form';
import Header from 'components/reusable/parts/Header';

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
            <Form mainContent="About" title="Title" desc="Descripsion" />
            <Form mainContent="Vision & Goal" title="Title" desc="Descripsion" category="Category"/>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
