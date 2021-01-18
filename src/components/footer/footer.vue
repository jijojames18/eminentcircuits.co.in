<template>
  <footer class="site-footer">
    <b-container class="footer-container" fluid>
      <nav class="social-nav">
        <b-row>
          <b-col>
            <a href="/home">Home</a>
          </b-col>
          <b-col>
            <a href="/about">About Us</a>
          </b-col>
          <b-col>
            <a href="/products">Products</a>
          </b-col>
          <b-col>
            <a href="/facilities">Facilities</a>
          </b-col>
          <b-col>
            <a href="/contact">Contact</a>
          </b-col>
        </b-row>
      </nav>
      <b-container fluid>
        <b-col md="12">
          <p class="copyright">Copyright &copy; {{ copyrightDate }} EminentCircuits</p>
        </b-col>
      </b-container>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'footer-component',
  data() {
    return {
      copyrightDate: new Date().getFullYear()
    };
  }
};
</script>

<style scoped lang="scss">
.site-footer {
  width: 100%;
  color: #aaaaaa;
  background-color: #f1f4f5;
  padding: 25px 0 0px 0;
  .social-nav {
    display: flex;
    justify-content: center;
    .row {
      display: flex;
      justify-content: space-around;
      padding: 0;
      margin: 0;
      .col {
        margin: 0 16px;
        min-width: 100px;
        a {
          color: #aaaaaa;
          font-size: 14px;
          text-transform: uppercase;
          font-weight: 700;
          text-decoration: none;
          &:hover {
            color: #00a8d6;
          }
        }
      }
    }
  }
  .copyright {
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    padding-top: 8px;
  }
}
</style>
