import * as React from 'react';
import './ContactForm.css';
import { Form } from 'react-bootstrap';
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import swal from 'sweetalert2';
import axios from 'axios';


const ContactForm = (props) => {

  const [guestName, setGuestName] = React.useState('');
  const [guestEmail, setGuestEmail] = React.useState('');
  const [guestMessage, setGuestMessage] = React.useState('');
  
  const onNameChange = (event) => {
    setGuestName(event.target.value);
  }

  const onEmailChange = (event) => {
    setGuestEmail(event.target.value);
  }

  const onMessageChange = (event) => {
    setGuestMessage(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    init("user_ZuCRyzWfalPE8iWX4tLWc");

    if (guestName.length === 0 || guestEmail.length === 0 || guestMessage.length <= 10) {
      swal.fire("Error!", "Please enter your name, email and a message with at least 10 characters!", "error");
    }
    else {
      var emailParams = {
        from_name: guestName,
        to_name: "Khoa Pham",
        from_email: guestEmail,
        message: guestMessage,
      };

      var data = {
        service_id: 'service_ox9rv0q',
        template_id: 'template_dqz39gi',
        user_id: 'gIi0YzKS7bjtdnCiN',
        template_params: emailParams
    };

      axios.post('https://api.emailjs.com/api/v1.0/email/send', data).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        swal.fire("Success", "Your message has been sent!", "success");
        setGuestEmail('');
        setGuestMessage('');
        setGuestName('');
      }, function (error) {
        console.log('FAILED...', error);
        swal.fire("Uh oh!", "An error occured! Please try again later.", "error");
      });
    }
  }

  return(
    <div className='contact_form'>
      <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group controlId="formName">
        <Form.Label> Name: </Form.Label>
        <Form.Control type="name" onChange={onNameChange} />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label> Email: </Form.Label>
        <Form.Control type="email" onChange={onEmailChange} />
      </Form.Group>
      <Form.Group controlId="formMessage">
        <Form.Label> Message: </Form.Label>
        <Form.Control as="textarea" type="message" rows={3} onChange={onMessageChange} />
      </Form.Group>
        <button className="button" type="submit">Submit</button>
        <p className="form_actions"> or email to cody.pham14@gmail.com</p>
      </Form>
    </div>
  );
}

export default ContactForm;

