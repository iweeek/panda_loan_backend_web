<template>
    <div class="tianjiaaddress">
        <input type="text" class="addressInput" placeholder="收件人姓名" v-model="name">
        <input type="text" class="addressInput" placeholder="收件人手机号" v-model="phone">
        <input type="text" class="addressInput" placeholder="详细地址（门牌号码）" v-model="detailedAddress">
        <div class="setAddress" @click="saveAddress">
            保存
        </div>
    </div>
</template>


<script>
    import resources from "../resources";
    export default {
        data() {
            return {
                detailedAddress:'',
                name:'',
                phone:'',
            };
        },
        methods: {
            saveAddress(){
                //跳转到添加页面
                // var dataKey =  {name:this.name,phone:this.phone,detailedAddress:this.detailedAddress}
                // console.log(dataKey)
                // var arr = []
                // arr = arr.concat(dataKey)
                // console.log(arr)
                // console.log('concat')
                // console.log(dataKey)
                // var storageArrar = [{name:this.name,phone:this.phone,detailedAddress:this.detailedAddress}]
                // console.log(storageArrar)
                // var str =JSON.stringify(storageArrar)
                // localStorage.setItem('addressData',str)
                // this.$router.push({ path: '/Address'})
                var serise = []
            
                serise = serise.push({name:this.name,phone:this.phone,detailedAddress:this.detailedAddress})
                console.log(serise)
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
        padding:25*$rem 50*$rem;
    }
    // 表单样式
    .addressInput{
        margin-bottom: 20*$rem;
        width: 660*$rem;
        border:1px solid #ccc;
        background: #FFFFFF;
        height: 70*$rem;
        padding-left:30*$rem;
        border-radius: 0.2rem;
        font-size: 28*$rem;
        line-height: 70*$rem;

    }
    // 添加地址按钮
    .setAddress{
        margin: 0 auto;
        margin-top: 50*$rem;
        width: 565*$rem;
        height: 50*$rem;
        line-height: 50*$rem;
        color: #fff;
        text-align: center;
        background: #2ba7cf;
    }
</style>
