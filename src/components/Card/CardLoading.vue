<template>
<transition  mode="in-out">
  <div v-if="loading" class="loading"></div>
</transition>
</template>
<script>
export default {
  name: "CardLoading",

  props:{
	  loading:{
		  type:Boolean,
		  default:true
	  }
  },

};
</script>

<style>
.loading {
  z-index: 3;
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(-45deg, #091222, #131821, #091222, #131821);
  background-size: 400% 400%;
  animation: gradient 2s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 29%;
  }
  100% {
    background-position: 0% 100%;
  }
}
.fadeout {
  color: #ffffff;
  font-size: large;
  font-family: helvetica;
  text-align: center;
  opacity: 0;
  animation: fadeout 1s;
}

@keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}
</style>