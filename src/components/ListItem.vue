<template>
    <div class="container">
      <div class="row">
            <div class="col-xs-12 col-md-offset-3 col-md-6">
            <h2> You đang search với từ khóa {{ keyword }} </h2>
                <div id="custom-search-input">
                    <div class="input-group col-md-12">
                        <input @input='update' id="keyword" type="text" class="form-control input-lg" placeholder="Buscar" />
                    </div>
                    
                    <div v-if="emptyItems"  id="noResult">
                        <span>Không có kết quả phù hợp</span>
                    </div>
                    <div id="result" class="list-group" v-else>
                      <p v-if="loading">Đang load nhé</p>
                       <Item v-else  v-for="item in items" :item="item" ></Item>
                    </div>
                </div>
                
            </div>
      </div>
    </div>
        
</template>


<script>
import _ from 'lodash'
import Item from './Item.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'ListItem',
  data () {
    return {
      a: ''
    }
  },
  components:{
    Item: Item
  },
  computed: {
    items() {
      return this.$store.state.result
    },
    loading () {
      return this.$store.state.loading
    },
    emptyItems () {
      // console.log(this.$store.state.result)
      return this.$store.state.result === [] && this.$store.state.keyword && this.$store.state.loading
    },
    keyword() {
      return this.$store.state.keyword
    }
  },
  methods: {
     update: _.debounce(function (e) {
       // chay action de thay doi keyword
      this.$store.dispatch('CHANGE_KEYWORD',{
        value : e.target.value
      }).then(() => {
        if(this.$store.state.keyword == ''){
          // neu keyword la trong thi clear cai result
          this.$store.dispatch('CLEAR_RESULT')
        }else{
          // neu co thi set result moi
          this.$store.dispatch('FETCH_RESULT')
        }
      })
    }, 300),
  }
} 

</script>

<style lang="css">
#custom-search-input{
    padding: 3px;
    border: solid 1px #E4E4E4;
    border-radius: 6px;
    background-color: #fff;
    position: relative;
}

#custom-search-input input{
    border: 0;
    box-shadow: none;
}

#custom-search-input button{
    margin: 2px 0 0 0;
    background: none;
    box-shadow: none;
    border: 0;
    color: #666666;
    padding: 0 8px 0 10px;
    border-left: solid 1px #ccc;
}

#custom-search-input button:hover{
    border: 0;
    box-shadow: none;
    border-left: solid 1px #ccc;
}

#custom-search-input .glyphicon-search{
    font-size: 23px;
}
#result{
  position: absolute;
  top: 101%;
  left: 0;
  width: 100%;

}
#result li{
  margin: 0;
  border-radius: 0;
  border-top: 0
}
#noResult{
  padding: 20px;
}
</style>