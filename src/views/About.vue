<template>
    <div class="panda">
        <div class="panda-img">
            <div class="panda-pic">
                <img src="~@/assets/logoAboutpic.png">
            </div>
        </div>

        <div class="mes-list">
            <div class="mes">
				<div class="letf-text">
                    <span>版本</span>
                </div>
				<div class="right-text">
                    <span class="gray">{{versionNumber}}</span>
                    <!-- <i class="fa fa-angle-right"></i> -->
                </div>
			</div>
            <div class="mes">
				<div class="letf-text">
                    <span>微信公众号</span>
                </div>
				<div class="right-text" style="color:#999">
                    <span class="gray">熊猫元宝</span>
                    <!-- <i class="fa fa-angle-right"></i> -->
                </div>
			</div>
            <div class="mes">
				<div class="letf-text">
                    <span>客服QQ</span>
                </div>
				<div class="right-text">
                    <span class="gray">{{QQNumber}}</span>
                    <!-- <i class="fa fa-angle-right"></i> -->
                </div>
			</div>
            <!-- <div class="mes">
				<div class="letf-text">
                    <span>4008-XXX-XXX</span>
                </div>
				<div class="right-text">
                    <span></span>
                    <i class="fa fa-angle-right"></i>
                </div>
			</div> -->
        </div>

        <div class="bottom">

        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                versionNumber:this.$route.query.version,
                QQNumber:'617149963'
            }
        },
        methods: {
        },
        mounted: function () {
		}
    }
    
</script>

<style lang="scss">
    .panda{
        background: #f2f3f9;
        position: absolute;
        width: 100%;
        color: #fff;
        top: 1px;
        bottom: 1px;
        .panda-img{
            height: 6.6rem;
            .panda-pic{
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                //上面三行垂直居中
                text-align:center;
            }
        }
        .mes-list{
            background: #fff;
            color: #000000;
            .mes{
                font-family: "微软雅黑";
                padding: 0.6rem 0.5rem;
                height: 2rem;
                border-bottom: 1px solid #dfdfdf;
                .letf-text{
                    float: left;
                    width: 49%;
                    text-align: left;
                    font-size: 0.8rem
                }
                .right-text{
                    float: left;
                    width: 49%;
                    text-align: right;
                    font-size: 0.8rem;
                    .gray{
                        color: #999999
                    }
                }
            }
        }
        .bottom{
            margin-bottom: 1px;
        }
    }
</style>
