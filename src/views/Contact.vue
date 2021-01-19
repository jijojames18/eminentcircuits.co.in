<template>
  <div>
    <header-component :page="'contact'" />
    <footer-component />
  </div>
</template>

<script>
import headerComponent from '../components/header/header';
import footerComponent from '../components/footer/footer';
export default {
  components: { headerComponent, footerComponent }
};
</script>
