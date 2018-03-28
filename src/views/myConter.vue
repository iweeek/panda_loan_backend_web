<template>
	<div id="app">
        <h1>手机号：{{phone}}</h1>
        <h1>名字：{{name}}</h1>
        <h1>认证：{{authentication}}</h1>
	</div>
</template>
<script>
export default {

  data() {
    return {
        phone:'',
        name:'',
        authentication:''
    };
  },
  methods: {
      getMycenterdata(){ //获取客户端传参
        this.phone = this.$route.query.phone
        this.name = this.$route.query.name
        this.authentication = this.$route.query.authentication
      }
  },
  mounted(){
    this.getMycenterdata()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

$rem:1rem/40; //rem配置   

#app{ //页面颜色
 
}

</style>