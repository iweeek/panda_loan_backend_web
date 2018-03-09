<template>
    <div style="text-align:center;height:50rem">
        <div style="margin-top：30rem;">
            <button @click="num" class="button">测试退出</button>
        </div>
        <div class="weixintarget">
            <button>
                <a href="http://weixin://">测试微信跳转</a>
            </button>
        </div>
        <button @click="num" style="background-color:red;height:3rem;width:3rem;" v-if="show">点我</button>
    </div>
</template>
<script>
    import api from '../myjs/UMAnalytics'
    export default {
        data() {
            return {
                show: false
            };
        },
        methods: {
            num(){
                //api.onEvent("aaa",{"abc": "111","bcd": "222"});  
                //console.log(api.onEvent)
                //window.location.href = "lima://quit?1";
                window.webkit.messageHandlers.logout.postMessage("abc");
            },
            ppp(){
                alert("123")
            },
            pandaloanGPS(a,b,c) {
                this.show = true;
                alert( a + '   ' + b + '   ' + c);
            }
        },
        mounted: function () {
            //api.test();
            console.log(api.test1())
            // //alert(this.Uid)
            // this.phoneType();
            // this.createSid();
            // this.enterMes();
            //alert(this.Sid)
		}
    }
</script>
<style lang="scss">
    .button{
        background-color:green;
        height:3rem;
        width: 3rem;
    }
    .weixintarget{
        margin-top:30px;
        button{
            background:#ccc;
            height:3rem;
            width: 3rem;
        }
    }
</style>