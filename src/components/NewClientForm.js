import React from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import "../styles/NewClientForm.css";

import DatePickerComponent from "./DatePicker";

const initialFormData = Object.freeze({
  username: "",
  email: "",
  mobile: "",
  query: "",
  my_file: [],
  dates: ""
});

export const NewClientForm = (props) => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("There has been an Error.", err));
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message. Your query has been forwarded.`);
    const templateId = "template_uosd5gv";
    const serviceID = "service_yd2rq9k";
    sendFeedback(serviceID, templateId, {
      from_name: formData.name,
      mobile: formData.mobile,
      message_html: formData.query,
      email: formData.email,
      dates: formData.dates,
      my_file: formData.my_file
    });

    console.log(formData);
  };

  return (
    <Form className="form-container">
      <Form.Group
        as={Col}
        controlId="formGridName"
        className="form-group-container"
      >
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          className="form-input"
          name="name"
          type="name"
          placeholder="Name"
        />
      </Form.Group>

      <Form.Group
        as={Col}
        controlId="formGridEmail"
        className="form-group-container"
      >
        <Form.Label className="form-label">Email</Form.Label>
        <Form.Control
          onChange={handleChange}
          className="form-input"
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group
        as={Col}
        controlId="formGridMobile"
        className="form-group-container"
      >
        <Form.Label className="form-label">Mobile no.</Form.Label>
        <Form.Control onChange={handleChange}
      className="form-input" name="mobile" placeholder="" />
      </Form.Group>
      {/* <Form.Group as={Col} id="formGridQuery" className="form-group-container">
        <Form.Label className="form-label">Request Dates & Times</Form.Label>

        <DatePickerComponent
          onChange={handleChange}
          className="form-input"
          name="dates"
          as="textarea"
          rows={3}
        />
      </Form.Group> */}
      <Form.Group as={Col} id="formGridQuery" className="form-group-container">
        <Form.Label className="form-label">Message</Form.Label>
        <Form.Control
          onChange={handleChange}
          className="form-input"
          name="query"
          as="textarea"
          rows={4}
        />
      </Form.Group>

      {/* <Form.Group
        as={Col}
        controlId="formGridEmail"
        encType="multipart/form-data"
        method="post"
        onSubmit={handleSubmit}
        className="form-group-container"
      > */}
        {/* <Form.Label className="form-label">Attach file:</Form.Label> */}
        {/* <Form.Control
          onChange={handleChange}
          className="form-input"
          name="email"
          type="email"
          placeholder="Enter email"
        /> */}
        {/* <input type="file" name="my_file" /> */}
        {/* <input type="submit" value="Submit" /> */}
      {/* </Form.Group> */}

      <Button onClick={handleSubmit} className="form-submit-button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
