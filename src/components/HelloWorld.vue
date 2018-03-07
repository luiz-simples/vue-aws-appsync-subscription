<template>
  <div class="hello">
    <h1>{{msg}}</h1>

    <ul>
      <li>
        <router-link to="/events">
          Events
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  h1 {font-weight: normal}

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {color: #42b983}
</style>
