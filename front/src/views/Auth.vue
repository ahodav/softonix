<template>
  <div class="block">
    <div>
      <Login/>
    </div>
    <div>
      <Registrarion/>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Registrarion from '@/components/Registration.vue'

export default {
  components: {
    Login,
    Registrarion
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .block {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
