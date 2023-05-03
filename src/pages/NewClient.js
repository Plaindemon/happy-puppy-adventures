import React, {useState} from 'react';
// import "../styles/NewClient.css";
import { FormPage } from '../components/Form';
import { NewClientForm } from '../components/NewClientForm';

function NewClient() {
  return (
    <section className="new-client">
      <div id="new-client-div">
        <h2 className="new-client-header">New Client?</h2>
        <h4 className="new-client-header"> Send me an email below and I will reach out as soon as possible</h4>
        {/* <FormPage /> */}
        <NewClientForm />
      </div>
    </section>
  );
}

export default NewClient;