<template>
  <div class="container-fluid ">
    <div class="row mb-5">
      <nav-bar />
    </div>
    <div class="row mt-2">
      <child />
    </div>
    <div class="row footer__container">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default {
  name: "MainLayout",
  components: {
    NavBar,
    Footer,
  }
};
</script>
