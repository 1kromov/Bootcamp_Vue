<template>
  <div>
    <h1 class="text-center m-5 font-bold uppercase text-2xl">Post</h1>
    <ul class="shadow w-2/3 mx-auto" v-if="isLoading">
      <li  v-for="item in post">
        <RouterLink class="shadow p-4 my-1 border block" :to="`/post/${item.id}`">
            {{ item.id }} {{ item.title }}
        </RouterLink>
      </li> 
    </ul>
    <h1 v-else="isLoading">LOADING...</h1>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import axios from "@/service/axios";
export default {
  name: "post",
  data() {
    return {
      post: [],
      isLoading: false,
    };
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get("/posts");
        if (response.status === 200) {
          this.post = response.data;
          this.isLoading = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
<style lang="css"></style>
