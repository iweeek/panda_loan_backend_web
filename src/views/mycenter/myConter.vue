<template>
	<div id="app">
        <!-- <h1>手机号：{{phone}}</h1>
        <h1>名字：{{name}}</h1>
        <h1>版本{{versionCode}}</h1>
        <h1>认证状态：{{isCertified}}</h1> -->
      
	</div>
</template>
<script>
export default {

  data() {
    return {
        phone:'',
        name:'',
        versionCode:'',
        isCertified:'',
    };
  },
  methods: {
      getMycenterdata(){ //获取客户端传参
        this.phone = this.$route.query.phone //手机号码
        this.name = this.$route.query.name //名称
        this.versionCode = this.$route.query.versionCode //版本号
        this.isCertified = this.$route.query.isCertified //认证状态
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