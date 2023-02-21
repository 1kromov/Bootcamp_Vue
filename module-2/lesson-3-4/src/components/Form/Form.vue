<template>
  <div>
    <h1 class="text-center text-indigo-900">Form elements</h1>
    <Input inputType="text" placeholder="Enter username" labelId="username" />
    <Input
      inputType="password"
      placeholder="Enter password"
      labelId="userpassword"
    />

    <Button
      btnType="button"
      textContent="Sign Up"
      class="bg-green-500 text-white"
    />
    <Card>
      <img src="https:picsum.photos/id/356/320/210" alt="cover" />
      <div class="card-body p-3">
        <h1 class="card-title font-semibold text-xl my-2">Card title lorem ipsum ...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          architecto esse magni ducimus quo exercitationem quis beatae quam
          corrupti corporis!
        </p>
        <div class="flex gap-x-2 my-3">
          <Button
            btnType="button"
            textContent="DIS LIKE"
            class="bg-red-500 text-white"
          />
          <Button
            btnType="button"
            textContent="LIKE"
            class="bg-green-500 text-white"
          />
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Button from "../../ui/Button.vue";
import Input from "../../ui/Input.vue";
import Card from "../../ui/Card.vue";
export default {
  name: "Form",
  components: {
    Input,
    Button,
    Card,
  },
};
</script>

<style lang="scss"></style>
