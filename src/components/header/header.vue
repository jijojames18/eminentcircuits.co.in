<template>
  <header class="site-header">
    <b-navbar toggleable="lg" variant="faded" type="light" sticky>
      <b-navbar-brand href="/"> <img src="" alt=""/></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :active="isActivePage('index')" href="/">Home</b-nav-item>
          <b-nav-item :active="isActivePage('about')" href="/about">About Us</b-nav-item>
          <b-nav-item :active="isActivePage('products')" href="/products">Products</b-nav-item>
          <b-nav-item :active="isActivePage('facilities')" href="/facilities">Facilities</b-nav-item>
          <b-nav-item :active="isActivePage('contact')" href="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
export default {
  name: 'header-component',
  props: {
    page: {
      type: String,
      required: true
    }
  },
  methods: {
    isActivePage(linkPage) {
      return linkPage === this.page;
    }
  }
};
</script>

<style scoped lang="scss">
.site-header {
  margin: 16px;
  .navbar-collapse {
    .nav-item {
      .nav-link {
        &.active {
          color: #00a8d6;
          background-color: #ffffff;
        }
      }
    }
  }
  .nav-item {
    .nav-link {
      color: #31373a;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      font-family: 'Raleway', sans-serif;
      padding: 5px 15px;

      &.active {
        color: #00a8d6;
        background-color: #f1f4f5;
      }
    }

    &:hover {
      .nav-link {
        color: #00a8d6;
      }
    }
  }
}
</style>
