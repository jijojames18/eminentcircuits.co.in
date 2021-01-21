<template>
  <div>
    <header-component :page="'contact'" />
    <b-container class="contact-page">
      <b-row class="justify-content-md-center title-row">
        <b-col md="12">
          <h3 class="section-title">Get In Touch With Us</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="8">
          <map-component />
        </b-col>
      </b-row>
      <b-row class="contact-page-header">
        <b-col md="12">
          <h3 class="section-title">Send a Direct Message</h3>
        </b-col>
      </b-row>
      <b-form v-on:submit.prevent="onSubmit" class="contact-form">
        <b-row>
          <b-col md="12">
            <b-alert
              :show="alert.visible"
              :variant="alert.type"
              :dismissible="alert.type === 'info'"
              @dismissed="setAlert(false, null, null)"
            >
              {{ alert.message }}
            </b-alert>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <b-alert></b-alert>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <b-form-group label-for="contact-name" :label-align="'left'" label="Your Name:">
              <b-form-input
                :state="nameState"
                @change="inputChanged('name')"
                v-model="name"
                id="contact-name"
                type="text"
                name="name"
              />
              <b-form-invalid-feedback id="contact-name-feedback">Please provide a name.</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label-for="contact-email" :label-align="'left'" label="Email Address:">
              <b-form-input
                id="contact-email"
                v-model="email"
                :state="emailState"
                @change="inputChanged('email')"
                type="email"
                name="email"
              />
              <b-form-invalid-feedback id="email-feedback">
                Please provide a valid email address.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label-for="contact-subject" :label-align="'left'" label="Subject:">
              <b-form-input
                :state="subjectState"
                v-model="subject"
                @change="inputChanged('subject')"
                id="contact-subject"
                type="text"
                name="subject"
              />
              <b-form-invalid-feedback id="subject-feedback">
                Please provide a subject.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <b-form-group label-for="contact-comments" :label-align="'left'" label="Your message">
              <b-form-textarea
                :state="commentsState"
                v-model="comments"
                @change="inputChanged('comments')"
                id="textarea-no-resize"
                rows="6"
                no-resize
              ></b-form-textarea>
              <b-form-invalid-feedback id="comments-feedback">
                Please provide your comments.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <vue-recaptcha :sitekey="recaptchaSiteKey" @verify="onCaptchaCheck"></vue-recaptcha>
          </b-col>
        </b-row>
        <b-row class="submit-button">
          <b-col md="4">
            <b-button variant="primary" type="submit">
              Submit
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
    <footer-component />
  </div>
</template>

<script>
import Axios from 'axios';
import headerComponent from '../components/header/header';
import mapComponent from '../components/map/map';
import VueRecaptcha from 'vue-recaptcha';
import footerComponent from '../components/footer/footer';
export default {
  components: { headerComponent, mapComponent, VueRecaptcha, footerComponent },
  props: {
    recaptchaSiteKey: {
      type: String
    },
    restEndPoint: {
      type: String
    }
  },
  data() {
    return {
      captchaAlertMessage: 'Please prove you are a human. Check the captcha button',
      successfulAlertMessage: 'Your message has been sent. We will get back to you as soon as possible.',
      errorInSendingAlertMessage:
        'An internal error occurred. We are looking into this. In the mean time, please contact Eminent Circuits directly.',
      captchaResponse: null,
      alert: {
        visible: false,
        type: 'warning',
        message: null
      },
      name: '',
      email: '',
      subject: '',
      comments: '',
      nameState: null,
      emailState: null,
      subjectState: null,
      commentsState: null
    };
  },
  methods: {
    onCaptchaCheck(captcha) {
      this.captchaResponse = captcha;
      this.setAlert(false, null, null);
    },
    setAlert(visible, type, message) {
      this.alert = { visible, type, message };
    },
    onSubmit(event) {
      const isValidationSuccessful = this.validateInput();
      if (isValidationSuccessful) {
        Axios.post(
          this.restEndPoint,
          JSON.stringify({
            formData: { name: this.name, email: this.email, subject: this.subject, comments: this.comments },
            captchaResponse: this.captchaResponse,
            site: 'eminentcircuits.co.in'
          }),
          {
            headers: {
              'content-type': 'application/json'
            }
          }
        )
          .then(
            function() {
              this.setAlert(true, 'info', this.successfulAlertMessage);
              this.name = this.email = this.subject = this.comments = '';
            }.bind(this)
          )
          .catch(
            function() {
              this.setAlert(true, 'danger', this.errorInSendingAlertMessage);
            }.bind(this)
          );
      }
    },
    inputChanged(field) {
      switch (field) {
        case 'name':
          this.nameState = null;
          break;
        case 'email':
          this.emailState = null;
          break;
        case 'subject':
          this.subjectState = null;
          break;
        case 'comments':
          this.commentsState = null;
          break;
      }
    },
    validateInput() {
      let isValidationSuccessful = true;

      if (!this.captchaResponse) {
        this.setAlert(true, 'warning', this.captchaAlertMessage);
        isValidationSuccessful = false;
      }

      if (this.name === '') {
        this.nameState = false;
        isValidationSuccessful = false;
      }

      if (this.email === '') {
        this.emailState = false;
        isValidationSuccessful = false;
      }

      if (this.subject === '') {
        this.subjectState = false;
        isValidationSuccessful = false;
      }

      if (this.comments === '') {
        this.commentsState = false;
        isValidationSuccessful = false;
      }

      return isValidationSuccessful;
    }
  }
};
</script>
<style lang="scss" scoped>
.contact-page {
  margin-top: 14px;

  .section-title {
    float: left;
  }

  .title-row {
    margin-top: 14px;
    margin-bottom: 14px;
  }

  .contact-page-header {
    margin-top: 50px;
    padding-top: 14px;
    border-top: 1px solid #4f565f;
  }

  .contact-form {
    margin-top: 14px;

    .invalid-feedback {
      text-align: left;
    }

    .submit-button {
      margin-top: 14px;
      margin-bottom: 14px;

      button {
        float: left;
      }
    }

    .btn-primary {
      background-color: #0054ad;
      border-color: #0054ad;
    }
  }
}
</style>
