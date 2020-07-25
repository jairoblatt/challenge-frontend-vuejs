<template>
  <div :class="`movie__desc ${details?'movie__desc__details':''}`">
    <p class="text" v-show="overview">{{details? overview : text}}</p>
    <span v-if="!details" class="read__more">Mais informações</span>
  </div>
</template>

<script>
export default {
  props: {
    overview: {
      type: String,
      required: false,
    },
    details: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    text() {
      let overview = this.overview;
      if (this.overview && overview.length >= 170) {
        return `${overview.substring(0, 170)} ...`;
      }
      return overview;
    },
  },
};
</script>
