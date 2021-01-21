<template>
  <div>
    <header-component :page="'contact'" />
    <b-container class="contact-form">
      <b-row class="justify-content-md-center title-row">
        <b-col md="12">
          <h3 className="section-title">Get In Touch With Us</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="8">
          <map-component />
        </b-col>
      </b-row>
      <b-row class="contact-form-header">
        <b-col md="12">
          <h3 className="section-title">Send a Direct Message</h3>
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
            <b-form-group label-for="contact-name" label="Your Name:">
              <b-form-input required id="contact-name" type="text" name="name" />
              <b-form-invalid-feedback id="input-live-feedback">Please provide a name.</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label-for="contact-email" label="Email Address:">
              <b-form-input required id="contact-email" type="email" name="email" />
              <b-form-invalid-feedback id="input-live-feedback">
                Please provide a valid email address.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label-for="contact-subject" label="Subject:">
              <b-form-input required id="contact-subject" type="text" name="subject" />
              <b-form-invalid-feedback id="input-live-feedback">
                Please provide a subject.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <b-form-group label-for="contact-comments" label="Your message:">
              <b-form-textarea id="textarea-no-resize" rows="6" no-resize></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <vue-recaptcha :sitekey="recaptchaSiteKey" @verify="onCaptchaCheck"></vue-recaptcha>
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
  methods: {
    onCaptchaCheck(captcha) {}
  }
};
</script>
<style lang="scss" scoped>
.contact {
  margin-top: 16px;
  .title-row {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
</style>
