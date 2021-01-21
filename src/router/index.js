import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactView from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    props: {
      recaptchaSiteKey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
      restEndPoint: process.env.VUE_APP_POST_FEEDBACK_ENDPOINT
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
