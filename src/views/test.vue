<template>

 <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore  :bottom-method="loadBottom" 
    :bottom-all-loaded="bottomAllLoaded" 
    ref="loadmore" @bottom-status-change="handleBottomChange" 
    :auto-fill="false">
        <div  v-for="item in topics">
            <h4> {{item.title}}</h4>
        </div>
    </mt-loadmore>
 </div>

</template>

<script>

import Vue from 'vue'

import axios from 'axios'

import qs from 'qs'

export default {
  name: 'app',
  data () {
    return {
      searchKey: {
          page: 1,
          limit: 50,
          tab: 'all',
          mdrender: true
      },
      topics:[],
      bottomAllLoaded:false,
      wrapperHeight: 0
    }
  },
  methods:{
    handleBottomChange(status) {
        this.bottomStatus = status;
      },
    loadBottom() {
        setTimeout(() => {
          this.searchKey.page++;
          this.getTopics();
          this.$refs.loadmore.onBottomLoaded();
        }, 1000);
      },
            getTopics() {
                let params = qs.stringify(this.searchKey);
                console.log("params",params);
                axios.get('https://cnodejs.org/api/v1/topics?' + params).then(response => {
                  console.log(response.data)
                  this.topics = this.topics.concat(response.data.data);
                  if(response.data.data.length<this.searchKey.limit){
                    this.bottomAllLoaded=true;
                  }
                }).catch(error => {
                  console.log(error)
                })
              }
            },
          mounted:function(){
            this.getTopics();    
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
          },
        }

</script>

<style>
.page-loadmore-wrapper {
    overflow: scroll
}

</style>