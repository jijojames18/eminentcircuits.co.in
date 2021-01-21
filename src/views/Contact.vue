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
      <b-form class="contact-form" noValidate>
        <b-row>
          <b-col md="12">
            <b-alert></b-alert>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <b-form-group label-for="contact-name" :label-align="'left'" label="Your Name:">
              <b-form-input :state="nameState" id="contact-name" type="text" name="name" />
              <b-form-invalid-feedback id="contact-name-feedback">Please provide a name.</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label-for="contact-email" :label-align="'left'" label="Email Address:">
              <b-form-input id="contact-email" :state="emailState" type="email" name="email" />
              <b-form-invalid-feedback id="email-feedback">
                Please provide a valid email address.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label-for="contact-subject" :label-align="'left'" label="Subject:">
              <b-form-input :state="subjectState" id="contact-subject" type="text" name="subject" />
              <b-form-invalid-feedback id="subject-feedback">
                Please provide a subject.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <b-form-group label-for="contact-comments" :label-align="'left'" label="Your message">
              <b-form-textarea :state="commentsState" id="textarea-no-resize" rows="6" no-resize></b-form-textarea>
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
import headerComponent from '../components/header/header';
import mapComponent from '../components/map/map';
import VueRecaptcha from 'vue-recaptcha';
import footerComponent from '../components/footer/footer';
export default {
  components: { headerComponent, mapComponent, VueRecaptcha, footerComponent },
  props: {
    recaptchaSiteKey: {
      type: String
    }
  },
  data() {
    return {
      nameState: null,
      emailState: null,
      subjectState: null,
      commentsState: null
    };
  },
  methods: {
    onCaptchaCheck(captcha) {}
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
