<template>
  <router-link
    tag="span"
    :to="{ name:route }"
    :active-class="isActive?'button__active':''"
    exact-active-class="button__active"
  >
    <button class="btn button__navbar color__primary ml-2" type="button">{{title}}</button>
  </router-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>