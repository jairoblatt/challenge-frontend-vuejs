<template>
  <div
    :class="`movie__header col-md-12 ${details? 'movie__header__details': 'movie__header__movie'}`"
  >
    <img :class="`img__poster ${ details?'img__poster__details':''}`" :src="posterPath" />
    <h1>
      {{title || name}}
      <h4 v-if="releaseDate">{{releaseDate.substring(0,4)}}</h4>
    </h1>
    <div class="p-2  production__card">
        <h6 class="ml-1" v-for="country in productionCountries" :key="country.id">{{country.name}}</h6>
      </div>
      <div class="genre__card mr-3 mb-4 mt-3">
        <h4 class="ml-1" v-for="(genre,key) in genres" :key="key">{{genre.name}}</h4>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    posterPath:String,
    releaseDate:String,
    genres:Array,
    name:String,
    title:String,
    productionCountries:Array,
    details: Boolean,
  },
};
</script>