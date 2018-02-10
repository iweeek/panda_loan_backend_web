<template>
	<div class="scroll-wrapper">
        <Xheader v-if="showBack" :showBack="showBack" :nameText="title" :backone="backone"></Xheader>
        <!-- <iframe ref="iframe" :src="htmlUrl" width="100%" height="100%"></iframe> -->
        <frameset>
            <frame :src="htmlUrl">
        </frameset>
        <!-- <div>{{htmlUrl}}</div> -->
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
            htmlUrl:'',
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
        // htmlUrl: function (newUrl,oldUrl) {
        //     alert(newUrl)
        //     if (newUrl.indexOf("itunes") != -1) {
        //         window.location = newUrl;
        //     }
        // },
    },
    methods: {
        getUrl(){
            this.htmlUrl = this.$route.query.url
            console.log(  this.htmlUrl)
            this.title = this.$route.query.title
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
        .scroll-wrapper {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        top: 0;
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll;
    }

    .scroll-wrapper iframe {
        height: 100%;
        width: 100%;
        border: none;
    }
</style>