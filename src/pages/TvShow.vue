<template>
  <div class="container-fluid" v-scroll="handleScroll">
    <div class="row">
      <div
        class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-4"
        v-for="(tvShow,key) in tvShows"
        :key="key"
      >
        <router-link
          tag="span"
          class="route__card"
          active-class="button__active"
          :to="{ name:'details', params: { type:'tv', id:tvShow.id  }}"
        >
          <CardMovie :item="tvShow" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "@/components/CardMovie";
import { mapGetters } from "vuex";
export default {
  name: "tv",
  components: {
    CardMovie,
  }, 
  data: () => ({
    page: 1,
    pageSize: 620,
  }),
   middleware:['guest'],
  computed: {
    ...mapGetters({ tvShows: "tv/list" }),
  },
  created() {
    this.$store.dispatch("tv/search",3);
  },
    methods: {

    //Infinite scroll
    handleScroll(evt, el) {
      if (window.scrollY >= window.screen.height + this.pageSize) {
        this.pageSize += this.pageSize * 1.4;
        this.$store.dispatch("tv/paginate", ++this.page);
      }
    },
  },
};
</script>
