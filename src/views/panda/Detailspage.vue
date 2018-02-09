<template>
	<div style="height:32rem">
        <Xheader v-if="showBack" :showBack="showBack" :nameText="title" :backone="backone"></Xheader>
        <iframe ref="iframe" :src="htmlUrl" width="100%" height="100%"></iframe>
        <div>{{htmlUrl}}</div>
	</div>
</template>
<script>
    import Xheader from '../common/X-header'

export default {
    components: {
        Xheader
    },
    data() {
        return {
            htmlUrl:'https://www.baidu.com',
            showAlert: false, //显示提示组件
            alertText: null, //提示的内容
            tabs: ["对我感兴趣", "看过我"], //tab数据
            num:0, 		//tab选种值
            showBack:true,
            nameText:'123',
            backone:true,
            title:''
        };
    },
    watch: {
        htmlUrl: function (newUrl,oldUrl) {
            alert(newUrl)
            if (newUrl.indexOf("itunes") != -1) {
                window.location = newUrl;
            }
        },
    },
    methods: {
        getUrl(){
            this.htmlUrl = this.$route.query.url
        }
    },
    mounted(){
        this.getUrl()
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    $rem:1rem/40; //rem配置   

</style>