<template>
    <div id="content">
        <div class="header" v-show="noHeader"> <!--头部信息-->
            <Xheader v-if="showBack" :showBack="showBack" :nameText="nameText" :backone="backone"></Xheader>
        </div>
        <div class="backgeound-img" :class="{ newBackgroundimg: newBackgroundimg,appleBackgroundimg:appleBackgroundimg,kaBackgroundimg:kaBackgroundimg,jijinBack:jijinBack}">
            <div class="pageloadmorewrapper" :class="{jijinTop:jijinTop,pageloadmorewrapper:pageloadmorewrapper}">
                <div class="page-infinite">
                    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
                        <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" >
                            <li v-for="(item,index) in list" class="page-infinite-listitem"><span v-text=""></span>{{ item }}</li>
                        </ul>
                        <p v-show="loading" class="page-infinite-loading">
                            <mt-spinner type="fading-circle"></mt-spinner>
                            加载中...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script type="text/babel">
import api from '../../api' //测试数据
import resources from '../../resources'
import Xheader from '../common/X-header'
    const recommendProductQuery = `
        query(
            $productTypeId: Long
            $packageName: String
            $channelId: Long
        ){
            recommendProducts(
                productTypeId: $productTypeId
                packageName: $packageName
                channelId: $channelId
            ){
                id
                title
                isNew
                firstTags
                secondTags
                description
                imgUrl
                url
                minAmount
                maxAmount
                dayRate
                creditAuth
                maxTerm
                minTerm
            }
    }`

  export default {
      components: {
            Xheader
        },
    data() {
      return {
        showBottom:true,
        list: [],
        loading: true,
        allLoaded: false,//这个
        wrapperHeight: 0,
        allProduct: [],
        pageSize: 6,
        pageNumber: 1,
        tophint:true,
        nomore:false,
        noHeader:true,
        showBack:true,
        liwushow:false,
        product:true,
        loadingIf:true,
        productthree:false,
        pageloadmorewrapper:true,
        // 切换背景
        newBackgroundimg:false,
        appleBackgroundimg:false,
        kaBackgroundimg:false,
        jijinBack:false,
        loading:'正在加载',
        nameText:'商品列表',
        backone:true,
        jijinTop:false,
        list: [], //数组
        showLoading:true, //底部显示加载还是到底
        loading: false, //加载中
        wrapperHeight: 0,
        currentPage:0,
        productListArrar:[
            {
                title:'新品推荐',
                id:'',
                imgUrl:require("../../assets/new@2x.png")
            },
            {
                title:'苹果专区',
                id:'',
                imgUrl:require("../../assets/apple@2x.png")
            },
            {
                title:'用信用卡贷',
                id:'',
                imgUrl:require("../../assets/xinyong@2x.png")
            },
            {
                title:'用公积金贷',
                id:'',
                imgUrl:require("../../assets/gongjijin@2x.png")
            },
        ],
      };
    },
    methods: {
        SetProduct(){ //添加数据
          this.pageNumber ++;
          this.getProduct()
        },
        loadMore() { //底部判断
        console.log('加载中')
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 500);
        },
        getUrl(pid,index){ //点击跳转第三方的注册页面
            let url = resources.recordUrl();
            let params = {
                'userId': sessionStorage.getItem("userId"),
                'pid': pid,
            }
            console.log(pid)
            var qs = require('qs');
            this.$ajax.post(url,qs.stringify(params),{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Version': '1',
                    'User-Id': sessionStorage.getItem("userId"),
                    'Channel-Id': '14',
                    'Device-Id': '111',
                    'Request-Uri': this.allProduct[index].url,
                    'Package-Name': 'com.h5'
                },
            }).then(res => {
                console.log(res.data)
                window.location.href = res.data //新标签页
                // this.$router.push({path: '/Detailspage?url=' +  res.data + '&title=' +   this.allProduct[index].title}); 本vue
            })
        },
        getRecommendProduct() {
            this.$ajax.get(api.getmoments(this.currentPage,7)).then((res) => {
                 this.allProduct = this.allProduct.concat(res.data.obj.object.list);
                if(res.data.obj.object.list.length==0){ //如果没有数据了
                    this.showLoading = false
                    return
                }else{ //有数据的话
                    this.list = this.list.concat(res.data.obj.object.list);
                    this.loading = false;
              }
            })
            // let params = {
            //     "productTypeId": this.$route.query.id,
            //     "packageName": "com.h5",
            //     "channelId": "14"
            // }
            // this.$ajax.post(`${resources.graphQlApi}`,{
            //     'query': `${recommendProductQuery}`,
            //     variables:params,
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //         'Version': '1',
            //         'User-Id': sessionStorage.getItem("userId"),
            //         'Channel-Id': '14',
            //         'Device-Id': '111',
            //         'Request-Uri': 'https://api.pinganzhiyuan.com/panda_loan/graphql/query',
            //         'Package-Name': 'com.h5'
            //     }
            //     }).then(res => {
            //         console.log(res)
            //         this.loadingIf = false
            //         this.loading = '点击加载'
            //         console.log(res.data.data.recommendProducts)
            //         var array = res.data.data.recommendProducts;
            //         for (var i = 0; i < array.length ;i ++) {
            //             array[i].firstTagArray = array[i].firstTags.split("|");
            //         }
            //         this.showBottom = false
            //         this.nomore = true
            //         this.allProduct = this.allProduct.concat(array);
            //         this.allProduct.forEach(item => {
            //             if (item.maxAmount > 10000) {
            //                 item.edu = item.maxAmount/10000 + '万';
            //             } else {
            //                 item.edu = item.maxAmount;
            //             }
            //             if (item.firstTags === '') {
            //                 item.isFirstTags = false;
            //             } else {
            //                 item.isFirstTags = true;
            //             }
            //         });
            //         if(this.$route.query.id==2){
            //             this.liwushow = true
            //         }

            //     })
            },
        toClassification(index){ //跳转商品分类详情
            this.$router.push({
             path: '/DetailsOfclassification?title=' + this.productListArrar[index].title
            });
         },
        getTitle(){
            console.log(this.$route.query.title)
            this.nameText = this.$route.query.title
        },
        demo(index){  //测试跳转
            this.$router.push({
                path: '/Detailspage?url=' +  this.allProduct[index].url +  '&title=' + this.allProduct[index].title
            });
        }
    },
    mounted() {
          this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      for (let i = 1; i <= 25; i++) {
        this.list.push(i);
      }
    //   this.getRecommendProduct() //首次请求
      this.getTitle()
    },
    created(){ //背景切换
        if(this.$route.query.id==1){
            this.newBackgroundimg = true
        }else if(this.$route.query.id==4){
            this.appleBackgroundimg = true
        }else if(this.$route.query.id==3){
            this.productthree = true,
            this.product = false
            this.kaBackgroundimg = true
        }else if(this.$route.query.id==2){
            this.jijinBack = true
            this.pageloadmorewrapper = false,
            this.jijinTop = true
        }
    }

  };
</script>
<style> /*组件样式*/
    .page-infinite-loading{
        text-align: center;
        height: 1.8rem;
        line-height: 1.8rem;
        background: #fff;
    }
    .page-infinite-loading div{
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
    }
</style>
<style lang="scss" scoped>
    $rem:1rem/40; //配置rem比例
    .page-infinite{
        text-align: center;
        color: #666;
        overflow: hidden;
    }
    .page-infinite-wrapper{
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }
    .newBackgroundimg{ //新品推荐
        width:100%;
        height: auto;
        background: url("../../assets/new.png")  no-repeat;
        background-size:100%;
        background-color:#f6d085;
        margin-top: 88*$rem;
        position: relative;
        overflow:hidden;
    }
    .lasttime{
        font-size: 38*$rem;
        color: #fff;
        position: absolute;
        top:380*$rem;
        left:280*$rem;
    }
    .appleBackgroundimg{    //苹果专区
        width:100%;
        height: auto;
        background: url("../../assets/appleBack.png")  no-repeat;
        background-size:100%;
        background-color:#3b8dfb;
        margin-top: 88*$rem;
        overflow:hidden;
    }
    .kaBackgroundimg{    //信用卡
        width:100%;
        height: auto;
        background: url("../../assets/xinyongka.png")  no-repeat;
        background-size:100%;
        background-color:#3d4ca9;
        margin-top: 88*$rem;
        overflow:hidden;
    }
    .jijinBack{ //基金
        width:100%;
        height: auto;
        background: url("../../assets/jiben.png")  no-repeat;
        background-size:100%;
        background-color:#fb264a;
        margin-top: 50*$rem;
        overflow:hidden;
    }
    .jijinBottom{ //基金底部
        width: 100%;
        height: auto;
        overflow: hidden;
    }
    .jijinBottom img{
        display: block;
        width: 100%;
    }
    .jijinTop{
        margin-top: 666*$rem !important;
    }

    .header{  //顶部header
        position: fixed;
        top: 0;
        z-index: 20;
        width: 100%;
        background: #fff;
        height:auto;
        border-bottom: 1*$rem  solid #ececef;
        overflow: hidden;
    }

    .productList-header{ //头部滑动菜单
        width: 100%;
        height: 200*$rem;
        background: #fff;
        border-bottom: 10*$rem solid #f5f5f5
    }

    .productListHeader-list{
        float: left;
        width: 25%;
        height: 200*$rem;
        text-align: center;
        padding-top: 50*$rem;
    }

    .productListHeader-list img{
        width: 50*$rem
    }

    .productListHeader-list p{
        font-size: 24*$rem;
        margin-top: 20*$rem;
        color:rgb(102, 102, 102)
    }

    // 加载更多
    // .page-infinite-loading{
    //     text-align: center;
    //     height: 100px;
    //     line-height: 100px;
    //     font-size: 0.6rem;
    //     background: #f5f5f5;
    //     div {
    //       display: inline-block;
    //       vertical-align: middle;
    //       margin-right: 5px;
    //     }
    // }
    // .page-infinite-loading img{
    //     width: 0.7rem
    // }

    .page-infinite-listitem{
         height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
    }

    .nomore{
        padding-top: 0.6rem;
        height: 2rem;
        // background: #f5f5f5;

        text-align: center;
        .nomore-border{
            color: #fff;
            font-size: 0.7rem;
        }
        .nomore-text{
            color: #fff;
            padding-right: 0.2rem;
            padding-left: 0.2rem;
            font-size: 0.7rem;
        }
    }
    .top{
        background: #ffffff;
        height: 2.5rem;
        border-bottom: 0.5rem solid #f5f5f5;
        .hint-pic{
            margin-left: 0.8rem;
            padding-top: 0.3rem;
            width: 1.6rem;
        }
        .vertical{
            margin-left: 0.8rem;
            margin-top: 0.3rem;
            vertical-align: top;
            display: inline-block;
            width: 0.05rem;
            height: 1.4rem;
            background: rgb(214, 214, 214)
        }
        .hint-text{
            margin-left: 0.8rem;
            color: rgb(51, 51, 51);
            font-size: 0.7rem;
            display: inline-block;
            //top:40%;
            transform:translateY(-70%);
        }
        .cancel{
            margin-left: 2.4rem;
            width: 0.8rem;
            display: inline-block;
            transform:translateY(-30%);
            //padding-top: 0.1rem;
        }
    }

    .productthree{
         border: 7*$rem  solid #005edd !important;
    }
    .pageloadmorewrapper{
        overflow: scroll;
        -webkit-overflow-scrolling: touch; //ios加载缓慢
        margin-top: 485*$rem;
        .product{
            margin: 0 auto;
            width:630*$rem;
            background: #ffffff;
            height: auto;
            border: 7*$rem  solid rgb(245, 228, 88);
            margin-bottom: 20*$rem;
            border-radius: 10*$rem;
            .title{
                height: 2rem;
                padding-left: 0.9rem;
                padding-top: 0.625rem;
                .avatar{
                    border-radius: 50%;
                    width: 1.4rem;
                    height: 1.4rem;
                    border: 1px solid #f5f5f5;
                }
                .title-word{
                    padding-left: 0.25rem;
                    padding-bottom: 1rem;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 0.6rem;
                }
                .isNew{
                    padding-left: 0.25rem;
                    padding-bottom: 1rem;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 0.4rem;
                    .isNew-border{
                        padding: 0.07rem 0.1rem 0 0.1rem;
                        color: rgb(236, 18, 16);
                        border: 1px solid rgb(236, 18, 16);
                    }
                }
                .firstTages{
                    padding-left: 0.2rem;
                    padding-bottom: 1rem;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 0.4rem;
                    .firstTages-border{
                        padding: 0.07rem 0.1rem 0 0.1rem;
                        color: rgb(111, 143, 120);
                        border: 1px solid rgb(111, 143, 120);
                    }
                }
            }
            .main-mes{
                margin-left: 0.9rem;
                margin-top: 0.625rem;
                margin-bottom: 0.625rem;
                .left-block{
                    width: 4.5rem;
                    vertical-align: top;
                    display: inline-block;
                    .left-top{
                        display: inline-block;
                        color: rgb(236, 18, 16);
                        font-size: 0.8rem;
                    }
                    .left-bottom{
                        padding-top: 0.25rem;
                        display: inline-block;
                        color: rgb(102, 102, 102);
                        font-size: 0.55rem;
                    }
                }
                .middle-block{
                    margin-left: 1.3rem;
                    vertical-align: top;
                    display: inline-block;
                    width: 0.05rem;
                    height: 1.4rem;
                    background: rgb(214, 214, 214)
                }
                .right-block{
                    width: 200*$rem;;
                    margin-left: 1rem;
                    vertical-align: top;
                    display: inline-block;
                    .right-top{
                        display: inline-block;
                        font-size: 0.6rem;
                        color: rgb(153, 153, 153);
                    }
                    .right-bottom{
                        width: 5rem;
                        height: 40*$rem;
                        word-break: break-all;
                        text-overflow: ellipsis;
                        line-height: 0.7rem;
                        padding-top: 0.3rem;
                        font-size: 0.6rem;
                        color: rgb(153, 153, 153);
                        overflow: hidden;
                    }
                }
                .iconlist{
                    vertical-align: center;
                    display: inline-block;
                    .click-icon{
                        margin-top: 0.5rem;
                        width:0.4rem;
                    }
                }
            }
        }
    }


</style>
