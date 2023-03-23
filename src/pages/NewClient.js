import React from 'react';
// import "../styles/NewClient.css";
import { FormPage } from '../components/Form';
import { NewClientForm } from '../components/NewClientForm';

function NewClient() {
  return (
    <section className="NewClient">
      <div id="NewClient-div">
        <h2 className="NewClient-header">New Client? Send me a request below</h2>
        {/* <FormPage /> */}
        <NewClientForm />
      </div>
    </section>
  );
}

export default NewClient;