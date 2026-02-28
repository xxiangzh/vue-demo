<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome Vue'
    }
  }
}
</script>

<style scoped>
.hello {
  margin-top: 20px;
}
h1 {
  font-weight: normal;
  color: #42b983;
}
</style>