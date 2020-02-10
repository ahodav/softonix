<template>
<div>
  <div class="block" v-for="(item, index) in list" :key="index">
    <h1>{{item.title}}</h1>
    <div>
      <span>{{item.description}}</span>
    </div>
    <div class="footer">
      <span><b>{{item.author}}</b></span>
      <span>{{item.date}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .block {
    border: 1px solid black;
    border-radius: 10px;
    width: 400px;
    margin: 10px auto;
  }

  .footer {
    margin: 5px 0;
    display: flex;
    justify-content: space-around;
  }
</style>
