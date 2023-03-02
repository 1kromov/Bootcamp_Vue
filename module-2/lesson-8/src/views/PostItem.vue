<template>
  <div class="p-5 w-full shadow mx-auto border m-4">
    <div v-if="isLoad">
      <h1 class="px-5 font-semibold">
        {{ $route.params.id }} {{ post.title }}
      </h1>
      <p class="px-5 my-3">
        {{ post.body }}
      </p>
      <div class="w-full p-2">
        <button @click="$router.back()"
          class="bg-slate-400 px-3 py-1 rounded-lg text-white font-bold focus:ring-2 focus:ring-slate-400"
        >
          All Posts
        </button>
      </div>
    </div>
    <div v-else="isLoad">
      <h1>LOADING...</h1>
    </div>
  </div>
</template>
<script>
import axios from "@/service/axios";
import router from "../router";
export default {
  name: "postitem",
  data() {
    return {
      post: [],
      isLoad: false,
    };
  },
  methods: {
    async getPostItem() {
      try {
        const postItem = await axios.get(`/posts/${this.$route.params.id}`);
        if (postItem.status === 200) {
          this.post = postItem.data;
          this.isLoad = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getId() {
      console.log(this.$route.params.id);
    },

  },
  mounted() {
    this.getId();
    this.getPostItem();
  },
};
</script>
<style lang="css">

</style>
