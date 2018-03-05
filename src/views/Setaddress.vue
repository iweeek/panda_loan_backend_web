<template>
    <div class="tianjiaaddress">
        <div class="boxInput"> 
            <span>收件人</span><input type="text"  placeholder="请输入姓名" v-model="name" maxlength="15">
        </div>
        <div class="boxInput"> 
            <span>联系电话</span><input type="text"  placeholder="请输入11位手机号" v-model="phone" maxlength="11">
        </div>
        <div class="boxInput"> 
            <span>详细地址</span><input type="text"  placeholder="街道门牌信息" v-model="detailedAddress" maxlength="50">
        </div>
        <div class="setAddress" @click="saveAddress">
            保存
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                detailedAddress:'',
                name:'',
                phone:'',
                serise:[]
            };
        },
        methods: {
            saveAddress(){  //跳转到添加页面
                if(localStorage.getItem('addressData')==null){
                    this.serise = this.serise.concat({name:this.name,phone:this.phone,detailedAddress:this.detailedAddress})
                    localStorage.setItem('addressData',JSON.stringify(this.serise))
                    this.$router.push({ path: '/Address'})
                }else{
                    var str = localStorage.getItem('addressData')
                    this.serise = JSON.parse(str)
                    this.serise = this.serise.concat({name:this.name,phone:this.phone,detailedAddress:this.detailedAddress})
                    localStorage.setItem('addressData',JSON.stringify( this.serise))
                    this.$router.push({ path: '/Address'})
                }

            }
        },
        mounted() {

        },
        created(){
          
        }
    };

</script>

<style lang="scss" scoped>
    // 底部下载样式
    $rem:1rem/40;

    .tianjiaaddress{
        width: 100%;
        height:100%;
        background: #f5f5f5;
    }
    // 表单样式
    .boxInput{
        width: 750*$rem;
        height: 100*$rem;
        line-height: 100*$rem;
        border-bottom: 2*$rem solid #d6d7dc;
        overflow: hidden;
      
        span{
            float: left;
            display: block;
            width: 150*$rem;
            height: 100*$rem;
            background: #FFF;
            padding-left: 23*$rem;
            font-size: 30*$rem;
            color: #666;
            text-align: left;
        }
        input{
            float: left;
            padding-left: 55*$rem;
            width: 600*$rem;
            background: #FFF;
            height: 100*$rem;
            // line-height: 100*$rem;
            font-size: 28*$rem ;
            color: #999;
        }
    }
    // 添加地址按钮
    .setAddress{
        margin: 0 auto;
        margin-top: 50*$rem;
        width: 700*$rem;
        height: 88*$rem;
        line-height: 88*$rem;
        color: #000002;
        text-align: center;
        background: #fddb31;
        border-radius: 5px;
        font-size: 30*$rem;
    }
</style>
