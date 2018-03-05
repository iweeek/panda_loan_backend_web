<template>
    <div class="myReceivingaddress">
        <div class="haveBeensaved" v-for="(item,index) in haveBeensavedArrar" :key="index">
            {{item}}
        </div>
        <div class="setAddress" @click="setAddress">
           +    新增收货地址
        </div>
    </div>
</template>

<script>
    import resources from "../resources";
    export default {
        data() {
            return {
                haveBeensavedArrar:[]
            };
        },
        methods: {
            setAddress(){
                //跳转到添加页面
                this.$router.push({ path: '/Setaddress' })
            }
        },
        mounted() {

        },
        created(){
            var str = localStorage.getItem('addressData')
            this.haveBeensavedArrar = JSON.parse(str)
            console.log( this.haveBeensavedArrar);//[{a: 1}, {b: 2}]
        }
    };

</script>

<style lang="scss" scoped>
    // 底部下载样式
    $rem:1rem/40;

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
