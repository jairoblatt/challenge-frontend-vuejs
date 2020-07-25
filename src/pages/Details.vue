<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 pt-4 m-0">
          <CardMovie :item="selected" :details="true" />
          <SeasonsGroup v-if="selected.seasons" :seasons="selected.seasons" />
        </div>
      </div>
    </div>
</template>

<script>
import CardMovie from "@/components/CardMovie";
import SeasonsGroup from "@/components/Card/SeasonsGroup";
import { mapGetters } from "vuex";
export default {
  components: {
    CardMovie,
    SeasonsGroup
  },
  middleware:['guest'],
  computed: {
    ...mapGetters({ selected: "details/selected" }),
  },
  created() {
    //Send request for the Api by the vuex
    this.$store.dispatch("details/search", this.$route.params);
  }
};
</script>