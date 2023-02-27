<template>
    <tr class="px-5 py-3  rounded-xl  items-center border">

        <td><strong>{{ num + 1 }}</strong></td>
        <td class="text-lg">{{ item.name }}</td>
        <td class="text-lg">{{ item.email }}</td>
        <td>
            <button @click="openModal(item.id)"
                class="bg-cyan-600 focus:ring-2 focus:ring-cyan-200 px-4 py-2 duration-200 text-white rounded-2xl">
                Edit
            </button>
        </td>
        <td>
            <button @click="removeUser(item.id)"
                class="bg-red-600 focus:ring-2 focus:ring-red-200 px-4 py-2 duration-200 text-white rounded-2xl">
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
        removeUser: Function,
    },
    data() {
        return {
           
        }
    },
    methods: {
        openModal(id) {
            this.$emit('open', id)
        }
    },
    updated() {
        console.log("ListItem updated")
    }
};
</script>
<style>
.router-link-active {
  color: rgb(193, 198, 245) !important;
  text-decoration: underline;
  font-weight: 900;
}
tr {
    padding: 9px !important;
    height: 35px !important;
}
</style>
