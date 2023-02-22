<template>
  <tr class="px-5 py-3 bg-cyan-300 rounded-xl  items-center border">
    <td>
      <strong>{{ num + 1 }}</strong>
    </td>
    <td>{{ item.name }}</td>
    <td>{{ item.email }}</td>
    <td>
      <button
        class="bg-cyan-600 focus:ring-2 focus:ring-cyan-200 px-4 py-2 duration-200 text-white rounded-2xl"
      >
        Edit
      </button>
    </td>
    <td>
      <button 
        class="bg-red-600 focus:ring-2 focus:ring-red-200 px-4 py-2 duration-200 text-white rounded-2xl"
        @click="removeUser(item.id)">
        Remove
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  name: "ListItem",
  props: {
    num: [String, Number],
    item: Object,
    removeUser:Function,
  },
  updated() {
    console.log("list updated");
  }
};
</script>
<style lang="scss"></style>
