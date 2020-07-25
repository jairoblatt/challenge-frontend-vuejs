<template>

    <div
      v-if="details"
      class="blur__back"
      :style="`background: url(${item.backdrop_path} );`"
    ></div>

    <div
     v-else 
     class="blur__back" 
     :style="`background: url(${item.poster_path} );`"
     ></div>

</template>
<script>
export default {
  props: {
    item: {
      item: Object,
      required: true,
    },
    details: Boolean
  },
};
</script>