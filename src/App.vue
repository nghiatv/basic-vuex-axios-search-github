<template>
  <div id="app">
  <ListItem></ListItem>
        
  </div>
</template>

<script>
import ListItem from './components/ListItem.vue'
import _ from 'lodash'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      a: ''
    }
  },
  components:{
    ListItem: ListItem
  },
  computed: {
   
  },
  methods: {
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
