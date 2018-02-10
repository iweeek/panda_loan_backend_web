<template>
	<div>
		<div class="componey">
			<div class="back" v-if="backSs">
				<img src="../../assets/ll_btn_back_pressed.png" alt="" />
			</div>
			<div class="back" v-if="backSss" @click="goBack">
				<img src="../../assets/backto.png" alt="" />
			</div>
			<h3>{{nameText}}</h3>
			<!-- <h2>{{backone}}</h2> -->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				mydemo: '公司全称',
				backSs:false,
				backSss:this.backone
			}
		},
		props: ['nameText','backone'],
		methods: {
			handleclick() { //提交公司名称函数
				alert("测试")
			},
			goBack(){
				this.$router.go(-1);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    $rem:1rem/40;

	.componey{
		width:100%;
		height: 88*$rem;
		line-height: 88*$rem;
		background:#fff;	
		position:relative;
	}
	.componey .back{
		width: auto;
		height:88*$rem;
		line-height: 88*$rem;
		position:absolute;
		left: 24*$rem;
	}
	.componey .back img{
		width: 19*$rem;
		height: 36*$rem;
		vertical-align:middle;
	}
	.componey h3{
		font-family: "微软雅黑";
		line-height: 88*$rem;
		font-size:32*$rem;
		color:#000;
		text-align: center;
	}
	
	.detail{
		flex:1;
		background:#eee;
		padding-top:30*$rem;
	}
	.detail .square{
		display: block;
		padding-top: 10px;
		margin: 0 auto;
		width:710*$rem;
		height:267*$rem;
		line-height:40*$rem ;
		background:#fff;
		font-size:10*$rem;
		color:black;
		/*margin-top:30*$rem;*/
	}
	
	.detail input{
		display: block;
		margin:0 auto;
		margin-top:126*$rem;
		width:710*$rem;
		height:85*$rem;
		line-height:85*$rem;
		background: #1992f5;
		border-radius: 10*$rem;
		/*@include font-dpr(27px,#fff);*/
		font-size:27*$rem;
		color:#fff;
	}
</style>