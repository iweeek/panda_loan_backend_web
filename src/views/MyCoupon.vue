<template>
	<div id="app">
        <div class="myCouponexternal">
            <div class="titleName">
            使用规则
            </div>
            <div class="titleNameson">
                <div class="titleCircular">●</div> 优惠券一经使用立即生效。
            </div>
            <div class="titleNameson">
                <div class="titleCircular">●</div> 如何申请X贷款
            </div>
            <div class="titleNameson">
                <div class="titleCircular">●</div> 如何申请X贷款
            </div>
            <div class="titleNameson" style="border:none">
                <div class="titleCircular">●</div> 如何申请X贷款
            </div>
        </div>
	</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$rem: 1rem/40; //rem配置

#app {
  //页面颜色
  background: #f5f5f5;
}

.myCouponexternal{
    width: auto;
    height: auto;
    background: #fff;
}
.titleName {
  width: 100%;
  height: 80*$rem;
  line-height: 80*$rem;
  font-size: 26*$rem;
  color: #000;
  border-bottom: 1px solid #d6d7dc;
  padding-left: 24*$rem;
  overflow: hidden;
}

.titleCircular {
  margin-right: 12*$rem;
  vertical-align: middle;
  margin-top: .1*$rem;
  font-size: 10*$rem;
  display: inline;
  color: #fec946;
}
.titleNameson {
  width: 100%;
  height: 80*$rem;
  line-height: 80*$rem;
  font-size: 26*$rem;
  color: #111;
  border-bottom: 1px solid #d6d7dc;
  margin-left: 24*$rem;
  overflow: hidden;
}
</style>