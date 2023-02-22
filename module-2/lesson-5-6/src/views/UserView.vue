<template>
  <div
    class="bg-white pt-5 w-1/2 mx-auto min-h-[300px] shadow-lg px-10 container"
  >
    <h1 class="text-cyan-400 text-center text-2xl uppercase font-semibold">
      User List
    </h1>
    <table class="list bg-cyan-50 table-auto w-full border-separate">
      <thead class="p-5 rounded-xl w-full">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <h1 class="text-center" v-if="!userList.length">USER LIST IS EMPTY</h1>
      <span class="loader" v-if="isLoading"></span>
      <tbody class="w-full border-spacing-2">
        <ListItem
          v-if="!isLoading"
          v-for="(item, index) in userList"
          :key="item.id"
          :num="index"
          :item="item"
          :removeUser="removeUser"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "@/service/axios";
import ListItem from "../ui/ListItem.vue";
export default {
  name: "UserView",
  components: { ListItem },
  data() {
    return {
      userList: [],
      isLoading: true,
    };
  },
  methods: {
    async getAllUser() {
      try {
        const user = await axios.get("/user");
        console.log(user);
        if (user.status === 200) {
          this.userList = user.data;
          setTimeout(() => {
            this.isLoading = false;
          }, 3000);
        }
      } catch (error) {
        console.log(error);
      }
    },
    removeUser(id) {
        axios.delete(`/user/${id}`,{})
        location.reload();
      }
  },
  mounted() {
    this.getAllUser();
  },
  components: { ListItem },
};
</script>
<style>
.loader {
  width: 8px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  color: rgb(64, 220, 231);
  box-sizing: border-box;
  animation: animloader 0.6s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 20px -10px, 40px 10px, 60px 0px;
  }
  25% {
    box-shadow: 20px 0px, 40px 0px, 60px 10px;
  }
  50% {
    box-shadow: 20px 10px, 40px -10px, 60px 0px;
  }
  75% {
    box-shadow: 20px 0px, 40px 0px, 60px -10px;
  }
  100% {
    box-shadow: 20px -10px, 40px 10px, 60px 0px;
  }
}
</style>
