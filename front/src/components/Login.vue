<template>
  <div>
    <div>
      <h1>Log in</h1>
    </div>
    <div class="custom_input">
      <span>Name:</span>
      <input type="text" v-model="name">
    </div>
    <div class="custom_input">
      <span>Password:</span>
      <input type="password" v-model="password">
    </div>
    <div>
      <button @click="login()">Log in</button>
    </div>
    <div class="error">
      {{error}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      error: '',
      name: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.error = ''
      const data = { name: this.name, password: this.password }
      axios
        .post('http://localhost:3000/login', data)
        .then(response => {
          localStorage.setItem('user', response.data.user)
          localStorage.setItem('token', response.data.token)
          this.$router.push('/')
        }).catch(error => {
          this.error = error.response.data.error
        })
    }
  }
}
</script>

<style scoped>
  .custom_input {
    width: 300px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
  }
  .error {
    color: red;
  }
</style>
