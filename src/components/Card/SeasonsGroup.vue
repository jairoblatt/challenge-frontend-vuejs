<template>
  <div class="seasons__container">
    <div class="info__section seasons__Card">
       <CardLoading :loading="loading"/>
      <div class="container-fluid mt-2 p-5">
        <div class="row">
          <div class="col-12 m-2">
            <h2>Temporadas ({{seasons.length}})</h2>
          </div>
          <figure class="col-xs-3 col-sm-3 col-md-4 col-lg-2 col-xl-2 seasons__content" v-for="season in seasons" :key="season.id">
            <img
              alt="picture"
              v-if="season.poster_path"
              :src="`http://image.tmdb.org/t/p/w1280/${season.poster_path}`"
              class="img-fluid seasons__img "
            />
            <p class="seasons__title ">{{season.name || season.title}}</p>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    seasons: {
      type: Array,
      required: true,
    },
    details: Boolean,
  },
  data:() => ({
    loading: true
  }),
  mounted(){
    this.loading = false
  }
};
</script>