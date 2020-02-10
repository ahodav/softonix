<template>
  <div class="home">
    <div v-if="!login">
      <router-link to="/auth">Auth</router-link>
    </div>
    <div v-else>
      <router-link to="/createpost">Create post</router-link>
      <br>
      <button @click="logout()">Logout</button>
    </div>
    <PostList :list="posts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    PostList
  },
  data () {
    return {
      posts: [],
      login: false
    }
  },
  async created () {
    await axios
      .get('http://localhost:3000/posts')
      .then(response => {
        this.posts = response.data
      })
    if (localStorage.getItem('token') === null) {
      this.login = false
    } else {
      this.login = localStorage.getItem('token')
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.login = false
    }
  }

}
</script>
