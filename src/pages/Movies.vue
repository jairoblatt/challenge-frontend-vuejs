<template>
  <div class="container-fluid" v-scroll="handleScroll">
    <div class="row">
      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-4"
        v-for="(movie,key) in movies"
        :key="key"
      >
        <router-link
          tag="span"
          class="route__card"
          :to="{  name:'details', params: { type:'movie', id:movie.id   }}"
        >
          <CardMovie :item="movie" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "@/components/CardMovie";
import { mapGetters } from "vuex";
export default {
  name: "movies",
  components: {
    CardMovie,
  },
  data: () => ({
    page: 1,
    pageSize: 620,
  }),
   middleware:['guest'],
  computed: mapGetters({ movies: "movies/list" }),
  created() {
    this.$store.dispatch("movies/search", this.page);
  },
  methods: {

    //Infinite scroll
    handleScroll(evt, el) {
      if (window.scrollY >= window.screen.height + this.pageSize) {
        this.pageSize += this.pageSize * 1.4;
        this.$store.dispatch("movies/paginate", ++this.page);
      }
    },
  },
};
</script>