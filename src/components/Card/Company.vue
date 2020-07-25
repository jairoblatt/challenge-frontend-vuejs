<template>
  <div class="movie_social mt-4" v-if="details">
    <ul>
      <li
        class="production__companies"
        v-for="companie in companies"
        :key="companie.id"
      >
        <div>
          <img
            v-if="companie.logo_path"
            :src="`https://image.tmdb.org/t/p/original/${companie.logo_path}`"
            alt
          />
          <!-- <small v-else>{{companie.name}}</small> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    companies: Array,
    details: Boolean,
  },
};
</script>