<template>
	<div id="app">
        <input type="text" class="normal-input" placeholder="银行借记卡卡号">
        <input type="text" class="normal-input" placeholder="银行预留手机号">
        <div class="phoneDiv"> <!--获取手机号-->
            <input type="text" class="Independentlong-input" placeholder="填写短信验证码">
            <div class="Independentsmall-input">短信验证码</div>
        </div>
        <div class="confirmButton">确认</div>
	</div>
</template>
<script>
export default {

  data() {
    return {

    };
  },
  methods: {

  },
  mounted(){

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

$rem:1rem/40; //rem配置   

#app{
    padding: 0 37*$rem;
    background: #f5f5f5;
}

// 普通表单长度
.normal-input{
    margin-top: 24*$rem;
    width: 100%;
    height: 100*$rem;
    background: #ccc;
    padding: 0 24*$rem;
    font-size: 32*$rem;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #d6d7dc;
}

//手机号码
.phoneDiv{
    margin-top: 24*$rem;
    width: 100%;
    height: auto;
    overflow: hidden;
}
.Independentlong-input{
    width: 450*$rem;
    height: 100*$rem;
    background: #ccc;
    padding: 0 24*$rem;
    font-size: 32*$rem;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #d6d7dc;
}
.Independentsmall-input{
    float: right ;
    width: 210*$rem;
    height: 100*$rem;
    line-height: 100*$rem;
    background: #ccc;
    padding: 0 22*$rem;
    font-size: 32*$rem;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #d6d7dc;
    text-align: center;
    color: #666;
}

.confirmButton{
    margin-top:30*$rem;
    width: 100%;
    height: 105*$rem;
    line-height: 105*$rem;
    font-size: 40*$rem;
    overflow: hidden;
    text-align: center;
    background: #d1d1d1;
    color: #fff;
}
</style>