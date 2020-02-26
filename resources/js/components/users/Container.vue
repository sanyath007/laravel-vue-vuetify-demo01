<template>
  <div>
    <h1>Users</h1>

    <v-card
      class="d-flex pa-2"
      outlined
      tile
      width="100%"
    >
      <v-container fluid>
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="5"
          hide-default-footer
          class="elevation-0"
        >

          <template slot="no-data">
            No users found.
          </template>

        </v-data-table>

        <Paginate />

      </v-container>
    </v-card>
  </div>
</template>

<script>
import Paginate from '../Paginate';

export default {
  components: {
    Paginate
  },
  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Email', value: 'email' },
      { text: 'Created At', value: 'created_at' },
    ]
  }),
  computed: {
    users: {
      get() {
        return this.$store.state.user.users.data;
      }
    }
  },
  created() {
    this.$store.dispatch('user/getUsers');
  },
}
</script>

<style scoped>
  div {
    width: 100%;
  }
</style>