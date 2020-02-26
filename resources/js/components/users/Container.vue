<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col>
      <h1>Users</h1>

      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
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
    ],
    users: [],
  }),
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('/users')
      .then(res => {
        this.users = res.data;
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
}
</script>