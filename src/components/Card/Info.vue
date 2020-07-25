<template>
  <div class="info__card">

    <span class="minutes">
      <i class="fas fa-eye"></i>
      {{popularity}}
    </span>

    <span class="type pl-2">
      <span v-for="vote in votes" :key="vote"  class="fa fa-star checked"></span>
      {{voteAverage}} ({{voteCount}})
    </span>
    
    <span v-if="details" class="imdb__card m-2 p-0 pl-2">
      <a target="_blank" v-if="imdb" :href="`https://www.imdb.com/title/${imdb}`">
        <i class="fab fa-imdb"></i>
      </a>
    </span>
    
  </div>
</template>

<script>
export default {
  props: {
    popularity:{
      type:Number,
      required:false
    },
    imdb:{
      type:String,
      required:false
    },
    voteAverage:{
      type:Number,
      default:0
    },
    voteCount:{
      type:Number,
      default:0
    },
    details:{
      type:Boolean
    },
  },
  computed: {
      votes(){
        if(this.voteAverage){
          return  Math.round(this.voteAverage / 2) ;
        }
        return;
      }
  },
};
</script>