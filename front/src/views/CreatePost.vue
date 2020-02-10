<template>
  <div>
    <div>
      {{error}}
    </div>
    <div class="custom_input">
      <span>Title</span>
      <input type="text" v-model="title">
    </div>
    <div class="custom_input">
      <span>Description</span>
      <textarea type="text" v-model="description"/>
    </div>
    <div>
      <button @click="post">Post</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      title: '',
      description: '',
      error: ''
    }
  },
  methods: {
    post: function () {
      if (this.title.length <= 0 || this.description.length <= 0) {
        this.error = 'Empty some fields'
        return
      }
      const data = {
        title: this.title,
        description: this.description,
        author: localStorage.getItem('user')
      }
      axios
        .post('http://localhost:3000/createpost', data)
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

<style>
  .custom_input {
    width: 300px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
  }
</style>
