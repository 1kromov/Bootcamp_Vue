<template>
  <div class="container mx-auto p-28 flex justify-center items-center">
    <form action="#" class="shadow-lg p-12 w-2/3" @submit="addUser">
      <Input
        labelId="username"
        inputType="text"
        placeholder="Enter username"
        :value="name"
        @input="($event) => (name = $event.target.value)"
      />
      <Input
        labelId="email"
        inputType="email"
        placeholder="Enter user email"
        :value="email"
        @input="($event) => (email = $event.target.value)"
      />
      <Button
        btnType="submit"
        textContent="ADD NEW USER"
        class="bg-cyan-500 text-white"
      />
    </form>
  </div>
</template>
<script>
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";
import UserView from "./UserView.vue";
import { v4 as uuid4 } from "uuid";
import axios from "@/service/axios";
import { toast } from "vue3-toastify";

export default {
  name: "HomeView",
  components: {
    Input,
    UserView,
    Button,
  },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    addUser(e) {
      e.preventDefault();
      const newUser = {
        id: uuid4(),
        name: this.name,
        email: this.email,
      };
      if (newUser.name.length === 0 || newUser.email.length === 0) {
        toast.error("please fill the inputs", {
          autoClose: 400,
          position: "bottom-right",
          theme: "colored",
        });
      } else {
        axios.post("/user", newUser);
        toast.info("user added succesfully", {
          autoClose: 1000,
          theme: "colored",
        });
        this.name = "",
        this.email = ""
      }
      console.log(newUser);
    },
  },
};
</script>
<style lang="scss"></style>
