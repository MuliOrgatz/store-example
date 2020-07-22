import React, { Component } from "react";
import validator from "validator";
import emailjs from "emailjs-com";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import "./contact.styles.scss";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        fullName: "",
        email: "",
        massage: "",
      },
      errors: {},
      mesSent: false,
      errorToSend: false,
      loading: false,
    };
  }

  checkValidtion = () => {
    const { formData } = this.state;
    let erorMesName = "";
    let erorMesEmail = "";
    let erorMesMessage = "";

    if (validator.isEmpty(formData.email)) {
      erorMesEmail = "Plase enter a Email address";
    } else if (!validator.isEmail(formData.email)) {
      erorMesEmail = "Please enter a valid Email address";
    }

    if (!formData.fullName) {
      erorMesName = "Please enter a name";
    } else if (formData.fullName.length < 2) {
      erorMesName = "Please enter a valid name";
    }

    if (!formData.massage) {
      erorMesMessage = "Please enter a message";
    } else if (formData.massage.length < 4) {
      erorMesMessage = "Please enter a valid message";
    }

    if (erorMesMessage || erorMesName || erorMesEmail) {
      this.setState({
        errors: {
          fullName: erorMesName,
          massage: erorMesMessage,
          email: erorMesEmail,
        },
      });
      return false;
    } else {
      this.setState({ errors: {} });
    }
    return true;
  };

  sendEmail = (e, variables) => {
    e.preventDefault();

    emailjs
      .send(
        "gmail",
        "template_wRPjbmTK",
        variables,
        "user_uCwwAT8ziQG7RljzlXBUF"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
          this.setState({ loading: false });
          this.setState({ mesSent: true });
        },
        (error) => {
          console.log(error.text);
          this.setState({ errorToSend: true });
        }
      );
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = this.checkValidtion();
    if (isValid) {
      this.setState({ loading: true });
      this.sendEmail(event, {
        message_html: this.state.formData.massage,
        to_name: this.state.formData.fullName,
        email: this.state.formData.email,
      });
    } else {
      this.setState({ mesSent: false });
    }
  };

  handleChange = (event) => {
    const { formData } = this.state;
    const { name, value } = event.target;
    this.setState({
      formData: {
        ...formData,
        [name]: value,
      },
    });
  };

  massageSendSucces = () => (
    <div className="container">
      <div className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          The message was sent successfully!
        </h2>
        <h3 className="text-muted">We will get back to you soon</h3>
      </div>
    </div>
  );

  contactSendingMassage = () => (
    <div className="container">
      <div className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact</h2>
        <h3 className="text-muted">
          Leave a message and I will get back to you
        </h3>
      </div>
      <form
        id="contactForm"
        name="sentMessage"
        noValidate="noValidate"
        onSubmit={this.handleSubmit}
      >
        <div className="row mt-5 row-sty">
          <div className="col-md-6">
            <div className="form-group">
              <input
                name="fullName"
                className="form-control"
                id="fullName"
                type="text"
                placeholder="Full name"
                style={
                  this.state.errors.fullName
                    ? { border: "2px solid #dc3545" }
                    : null
                }
                required
                value={this.state.formData.fullName}
                onChange={this.handleChange}
              />
              <p className="help-block text-danger">
                {this.state.errors.fullName}
              </p>
            </div>
            <div className="form-group">
              <input
                name="email"
                className="form-control"
                id="email"
                type="email"
                required
                style={
                  this.state.errors.email
                    ? { border: "2px solid #dc3545" }
                    : null
                }
                placeholder="*Email address"
                value={this.state.formData.email}
                onChange={this.handleChange}
              />
              <p className="help-block text-danger">
                {this.state.errors.email}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group-textarea mb-md-0">
              <textarea
                name="massage"
                className="form-control textarea-control"
                id="message"
                placeholder="*message"
                required="required"
                style={
                  this.state.errors.massage
                    ? { border: "2px solid #dc3545" }
                    : null
                }
                value={this.state.formData.massage}
                onChange={this.handleChange}
              ></textarea>
              <p className="help-block text-danger">
                {this.state.errors.massage}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  render() {
    const { mesSent, errorToSend, loading } = this.state;
    return (
      <section className="m-md-5">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={mesSent}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div className="container">
              {errorToSend ? (
                <div class="alert alert-danger" role="alert">
                  There was a problem sending the message, please try again
                  later
                </div>
              ) : null}
              {mesSent
                ? this.massageSendSucces()
                : this.contactSendingMassage()}
              <div
                className="text-center mt-5"
                style={mesSent ? { display: "none" } : { display: "" }}
              >
                <button
                  onClick={this.handleSubmit}
                  className="btn btn-dark btn-xl text-uppercase"
                  id="sendMessageButton"
                  type="submit"
                >
                  {loading ? (
                    <div class="spinner-border text-light" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Send message"
                  )}
                </button>
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </section>
    );
  }
}

export default Contact;
