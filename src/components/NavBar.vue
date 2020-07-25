<template>
  <nav class="navbar__container w-100 p-2 ">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 d-flex align-content-center justify-content-center p-2">
          <btn
            v-for="(button, key) in buttons"
            :key="key"
            :title="button.title"
            :route="button.route"
            :isActive="currentRoute === button.route"
          />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 d-none ">
          <router-link tag="a" :to="{name:'movie'}">
            <i class="fas fa-play"></i>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import btn from "./Button";
export default {
  components: { btn },
  data: () => ({
    buttons: [
      {
        title: "Filmes",
        route: "movie",
      },
      {
        title: "Series",
        route: "tv",
      },
    ],
  }),
  computed: {
    //verify if route params is equal current route path
    currentRoute() {
      const { type } = this.$route.params;
      if (type) return type;
      return false;
    },
  },
};
</script>
