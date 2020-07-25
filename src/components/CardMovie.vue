<template>
  <div :class="`movie__card  mt-5 ${ details ?' movie__card__details ':' movie__card__mini' }`">
    <CardLoading :loading="loading"/>
    <div class="info__section">
      <Head 
      :title="item.title"
      :name="item.name"
      :posterPath="item.poster_path"
      :releaseDate="item.release_date"
      :genres="item.genres"
      :productionCountries="item.production_countries"
      :details="details" 
      />

      <Info 
      :popularity="item.popularity"
      :imdb="item.imdb_id"
      :voteAverage="item.vote_average"
      :voteCount="item.vote_count"
      :details="details" 
      />
      <Overview 
        :overview="item.overview"
        :details="details" 
      />
      <Company 
      :item="item" 
      :companies="item.production_companies"
      :details="details"
       />
    </div>
      <BlurBackground 
      :item="item" 
      :details="details"
      />
  </div>
</template>
<script>
import Info from "@/components/Card/Info";
import Overview from "@/components/Card/Overview";
import Head from "@/components/Card/Head";
import Company from "@/components/Card/Company";
import BlurBackground from "@/components/Card/BlurBackground";

export default {
  components: {
    Head,
    Info,
    Overview,
    Company,
    BlurBackground
  },
  data:()=>({
    loading:true
  }),
  props: {
    item: {
      type: Object,
      required: true,
    },
    details: Boolean,
  },
  mounted(){
    this.loading = false
  }
};
  
</script>