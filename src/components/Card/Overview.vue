<template>
  <div :class="`movie__desc ${details?'movie__desc__details':''}`">
    <p
      class="text"
      v-show="overview"
    >{{details? overview : overview.substring(0,170)}} </p>
    <span v-if="!details" class="read__more"> Mais informações</span>
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
};
</script>