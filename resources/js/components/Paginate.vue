<template>
  <div class="text-center">
    <v-pagination
      v-model="currentPage"
      :length="lastPage"
      :total-visible="5"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  watch: {
    currentPage(newVal, oldVal) {
      if(newVal !== oldVal) {
        this.$store.dispatch('user/getUsers', newVal);
      }
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.$store.state.user.users.current_page;
      },
      set(value) {
        this.$store.commit('user/setCurrentPage', value)
      }
    },
    lastPage: {
      get() {
        return this.$store.state.user.users.last_page;
      }
    }
  },
}
</script>