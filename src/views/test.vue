<template>
    <div style="text-align:center;margin-top：10rem">
        <div style="margin-top: 6px">
            <button @click="num1" class="button">点我1</button>
        </div>
        <div style="margin-top: 6px">
            <button @click="num2" class="button" style="background-color: orange">点我2</button>
        </div>
        <div style="margin-top: 6px">
            <button @click="num3" class="button" style="background-color: yellow">点我3</button>
        </div>
        <div style="margin-top: 6px">
            <button @click="num4" class="button" style="background-color: green">点我4</button>
        </div>
        <div style="margin-top: 6px">
            <button @click="num5" class="button" style="background-color: cyan">点我5</button>
        </div>
        <div style="margin-top: 6px">
            <button @click="num6" class="button" style="background-color: blue">点我6</button>
        </div>
        <div style="margin-top: 6px">
            <button @click="num7" class="button" style="background-color: purple">点我7</button>
        </div>
        <div style="margin-top: 6px">
            <button @click="num8" class="button" style="background-color: black">点我8</button>
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
            num1(){
                for (var i = 0;i < 20;i ++) {
                    var s = Math.random() * 10;
                    var p = Math.random() * 123;
                    setTimeout(api.onEvent("test10",{"abc": String(s),"bcd": "1","first": String(p)}), 2000);  
                }
            },
            num2(){
                for (var i = 0;i < 20;i ++) {
                    var s = Math.random() * 10;
                    var p = Math.random() * 123;
                    setTimeout(api.onEvent("test111",{"abc": String(s),"bcd": "2","first": String(p)}), 2000);  
                }
            },
            num3(){
                for (var i = 0;i < 20;i ++) {
                    var s = Math.random() * 10;
                    var p = Math.random() * 123;
                    setTimeout(api.onEvent("test222",{"abc": String(s),"bcd": "3","first": String(p)}), 2000);  
                }
            },
            num4(){
                for (var i = 0;i < 20;i ++) {
                    var s = Math.random() * 10;
                    var p = Math.random() * 123;
                    setTimeout(api.onEvent("test333",{"abc": String(s),"bcd": "21","first": String(p)}), 2000);  
                }
            },
            num5(){
                for (var i = 0;i < 20;i ++) {
                    var s = Math.random() * 10;
                    var p = Math.random() * 123;
                    setTimeout(api.onEvent("test444",{"abc": String(s),"bcd": "23","first": String(p)}), 2000);  
                }
            },
            num6(){
                for (var i = 0;i < 20;i ++) {
                    var s = Math.random() * 10;
                    var p = Math.random() * 123;
                    setTimeout(api.onEvent("test555",{"abc": String(s),"bcd": "22","first": String(p)}), 2000);  
                }
            },
            num7(){
                for (var i = 0;i < 20;i ++) {
                    var s = Math.random() * 10;
                    var p = Math.random() * 123;
                    setTimeout(api.onEvent("test666",{"abc": String(s),"bcd": "2133","first": String(p)}), 2000);  
                }
            },
            num8(){
                for (var i = 0;i < 20;i ++) {
                    var s = Math.random() * 10;
                    var p = Math.random() * 123;
                    setTimeout(api.onEvent("test777",{"abc": String(s),"bcd": "223232","first": String(p)}), 2000);  
                }
                //window.location.href = "pandaloan://panda.loan:80/gps?id=1&p=3";
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
<style lang="scss" scoped>
    .button{
        width: 3rem;
        background-color:red;
        height:3rem;
        border: 2px,solid,black;
    }
</style>

