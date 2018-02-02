<template>
	<div id="app1">

        <!-- 时间 -->
        <div class="thisTime" v-model="time">
            {{time}}
        </div>
        <!-- 机主消息 -->
        <div class="myInfo" v-if="news">
            <div class="myImg">
                <img src="../assets/boy.png" alt="">
            </div>
            <div class="myInfodata" v-html="myData">
            </div>
        </div>

        <!-- 反馈消息 -->
        <div class="outherInfo" v-if="outher">
            <div class="outherImg">
                <img src="../assets/girl.png" alt="">
            </div>
            <div class="outherInfodata">
                感谢您的反馈，对于您的意见和建议，我们将认真对待，并视情况予以回复！请您保持电话畅通，客服同事可能会与您联系。
            </div>
        </div>

        <!-- 底部 -->
        <div class="feedback-foot" v-if="submitIf"> 
            <input type="text" class="feedback-input" v-model="inputData" placeholder="输入意见内容">
            <div class="feedback-button" @click="submit">
                发送
            </div>
        </div>
	</div>
</template>
<script>
export default {

  data() {
    return {
        submitIf:true,  //提交按钮
        news:false,  //消息显示
        inputData:'', //内容数据
        myData:'',  //显示内容数据
        outher:false,   //系统反馈
        time:'',    //当前会话时间
    };
  },
  methods: {
    submit(){ //提交
        if(this.inputData==''){
            alert('请输入内容哦')
        }else{
            this.news = true;
            this.myData =  this.inputData;
            this.submitIf = false;
            this.outherShow()
        }
    },
    outherShow(){ //系统反馈显示
        var _this = this;
        setTimeout(function(){
            _this.outher = true
        },2000);
    },
    getTime(){ //获取当前时间
        var myDate = new Date();    
        var toLocaleDateString = myDate.toLocaleDateString()    //可以获取当前日期
        var toLocaleTimeString = myDate.toLocaleTimeString()    //可以获取当前时间
        var dataTime = toLocaleDateString + '  '  +toLocaleTimeString
        this.time = dataTime
    }
  },
  mounted(){
      this.getTime()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/mixin'; /*引入配置scss*/

// 底部样式

.feedback-foot{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 135*$rem;
    line-height: 135*$rem;
    background: #f5f5f5;
    padding: 30*$rem;
}

.feedback-input{
    -web-kit-appearance:none;
    -moz-appearance: none;
    float: left;
    display: block;
    width: 500*$rem;
    height: 75*$rem;
    padding-left: 20*$rem;
    background: #fff;
    border-radius: 10px;
}

.feedback-button{
    text-align: center;
    float: left;
    margin-left: 20*$rem;
    display: block;
    width: 160*$rem;
    height: 75*$rem;
    line-height: 75*$rem;
    background: #81b0fb;
    border-radius: 10px;
    color: #fff;
    font-size: 28*$rem;
}

// 我发送的消息样式
.myInfo{
    float: right;
    width:auto;
    height: auto;
    margin-bottom: 55*$rem;
    margin-right: 30*$rem;
    overflow: hidden;
}

.myImg{
    float: right;
    width:90*$rem;
    height: auto;
    text-align: center;
    font-size: 28*$rem;
    margin-left: 15*$rem;
}

.myImg img{
    text-align: center;
    width:75*$rem;
    height: 75*$rem;
    border-radius: 100%;
}

.myImg p{
    width: auto;
    font-size: 40*$rem;
    margin-top: 30*$rem; 
    overflow: hidden;
}

.myInfodata{
    position: relative;
    float: left;
    margin-right: 15*$rem;
    width: auto;
    height: auto;
    max-width: 500*$rem;
    word-break: break-all;
    padding: 25*$rem;
    border-radius: 20px;
    background  : #81b0fb;
    color:#fff;
    font-size: 25*$rem;
    text-align: left;
}

// 消息三角样式
.myInfodata::after{
    content: '';
    display: block;
    position: absolute;
    top: 8*$rem; /*向下偏移量是矩形边框宽度的1.4（根号2）倍，即8.4，top值为-26-（-8.4）*/
    right:-14*$rem;
    border-top: 30*$rem solid transparent;
    border-left: 30*$rem solid #81b0fb;
    border-bottom: 30*$rem solid transparent;
}

// 系统显示消息
.outherInfo{
    clear: both;
    margin-left: 30*$rem;
    width:auto;
    height: auto;
    overflow: hidden;
}

.outherImg{
    float: left;
    width:90*$rem;
    height: auto;
    text-align: center;
    font-size: 28*$rem;
    margin-right: 15*$rem;
}

.outherImg img{
    text-align: center;
    width:75*$rem;
    height: 75*$rem;
    border-radius: 100%;
}

.outherImg p{
    font-size: 40*$rem;
    margin-top: 30*$rem; 
}

.outherInfodata{
    position: relative;
    float: left;
    margin-right: 15*$rem;
    margin-left: 15*$rem;
    width: auto;
    height: auto;
    max-width: 500*$rem;
    word-break: break-all;
    border-radius: 20px;
    background  : #81b0fb;
    color: #fff;
    font-size: 25*$rem;
    padding: 25*$rem;
    text-align: left;
    line-height: 40*$rem;
}

// 消息三角样式
.outherInfodata::after{
    content: '';
    display: block;
    position: absolute;
    top: 23*$rem; /*向下偏移量是矩形边框宽度的1.4（根号2）倍，即8.4，top值为-26-（-8.4）*/
    left:-14*$rem;
    border-top:30*$rem solid transparent;
    border-right: 30*$rem solid #81b0fb;
    border-bottom: 30*$rem solid transparent;
}

// 时间样式
.thisTime{
    width: 100%;
    height: 100*$rem;
    line-height: 100*$rem;
    font-size: 26*$rem;
    text-align: center;
    color:#666;
}
</style>