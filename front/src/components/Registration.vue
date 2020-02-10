<template>
  <div>
    <div>
      <h1>Registration</h1>
    </div>
    <div>
      {{alert}}
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
      <button @click="register()">Register</button>
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
      alert: '',
      error: '',
      name: '',
      password: ''
    }
  },
  methods: {
    register: function () {
      this.error = ''
      const data = { userName: this.name, password: this.password }
      axios
        .post('http://localhost:3000/register', data)
        .then(response => {
          this.alert = 'Now you can "Log in"'
          console.log(response)
        }).catch(error => {
          if (error.response.data.error.code === 11000) {
            this.error = 'User exist'
          } else {
            this.error = error.response.data.error
          }
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
