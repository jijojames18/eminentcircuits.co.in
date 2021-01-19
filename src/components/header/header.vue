<template>
  <header class="site-header clearfix">
    <b-container>
      <b-row>
        <b-col md="12">
          <div class="pull-left logo">
            <a href="/">
              <img src="" alt="" />
            </a>
          </div>
          <div class="main-navigation pull-right">
            <nav class="main-nav visible-md visible-lg">
              <ul class="sf-menu">
                <li :class="{ active: isActivePage('index') }"><a href="/">Home</a></li>
                <li :class="{ active: isActivePage('about') }"><a href="/about">About Us</a></li>
                <li :class="{ active: isActivePage('products') }"><a href="/products">Products</a></li>
                <li :class="{ active: isActivePage('facilities') }"><a href="/facilities">Facilities</a></li>
                <li :class="{ active: isActivePage('contact') }"><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <div class="responsive-navigation visible-sm visible-xs">
              <a href="#nogo" class="menu-toggle-btn">
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 3px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 3px;
  z-index: 9999;
  padding: 35px 0;
  overflow: visible;
  transition: padding 0.3s ease-in-out;
  -moz-transition: padding 0.3s ease-in-out;
  -webkit-transition: padding 0.3s ease-in-out;

  .pull-left {
    float: left;
  }

  .pull-right {
    float: right;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      float: left;
      display: block;
      margin-left: 20px;
      position: relative;

      &.active {
        a {
          color: #00a8d6;
          background-color: #f1f4f5;
        }
      }

      a {
        color: #31373a;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        font-family: 'Raleway', sans-serif;
        padding: 5px 15px;
        display: block;
        text-decoration: none;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -ms-border-radius: 3px;
        -o-border-radius: 3px;
        border-radius: 3px;
      }
    }
  }

  .menu-toggle-btn {
    float: right;
    margin-right: 20px;
    color: #31373a;
    font-size: 14px;
    display: block;
  }
}
</style>
