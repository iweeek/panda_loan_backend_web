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
                    <span >{{versionNumber}}</span>
                    <!-- <i class="fa fa-angle-right"></i> -->
                </div>
			</div>
            <div class="mes">
				<div class="letf-text">
                    <span>微信公众号</span>
                </div>
				<div class="right-text">
                    <span >熊猫元宝</span>
                    <!-- <i class="fa fa-angle-right"></i> -->
                </div>
			</div>
            <div class="mes">
				<div class="letf-text">
                    <span>客服QQ</span>
                </div>
				<div class="right-text">
                    <span >{{QQNumber}}</span>
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