<template>
	<div id="app">
        <div class="companyDiv">
            <div class="companyCount">
                <div class="companyLogo"> <!--logo文字-->
                    <img src="../assets/logoAboutpic2.png" alt="">
                    <div class="companyName">
                        宜人借款
                    </div>
                    <p>v1.0.0</p>
                </div>
                <div class="companyIntroduction"> <!--公司介绍-->
                    <p>
                        福建泰宁晋农商大金湖村镇银行股份有限公司(简称:福建泰宁)是一家依托强大数据分析能力，为用户提供互联网消费金融服务的金融科技公司。
                    </p>
                    <p>
                        宜人借款是福建泰宁推出的互联网无抵押、无担保的信用贷款APP产品，致力于为年轻用户群体提供小额借贷服务。
                    </p>
                    
                    福建泰宁以旗下产品“信用卡代还”和“精英贷”切入消费信贷互联网金融服务，累计为数十万用户提供高品质的消费金融服务，践行普惠金融，创造更加美好便捷的生活方式。
                </div>
            </div>
            <div class="companyFoot"> <!--底部-->
                <div class="companyaddress"> <!--公司地址-->
                    福建泰宁晋农商大金湖村镇银行股份有限公司
                </div>
                <div class="companyaddress"> <!--公司版权-->
                    All Rights Reserved
                </div>
            </div>
        </div>
	</div>
</template>
<script>
export default {

  data() {
    return {

    };
  },
  methods: {

  },
  mounted(){

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

$rem:1rem/40; //rem配置   

.companyDiv{
    width: 100%;
    height: 100%;
}

.companyCount{
    width: 100%;
    height: 90%;
    overflow: hidden;
}

.companyLogo{
    margin-top: 45*$rem;
    margin-bottom: 65*$rem;
    width: 100;
    height: auto;
    overflow: hidden;
    text-align: center;
}

.companyLogo img{
    width: 225*$rem;
}

.companyName{
    width: 100%;
    height: 70*$rem;
    line-height: 70*$rem;
    font-size: 34*$rem;
    color:#333;
    text-align: center;
    font-family:微软雅黑,Arial, Helvetica, sans-serif,
}

.companyLogo p{
    font-size: 24*$rem;
    color:#666;
}

.companyIntroduction{ 
    padding:0 33*$rem;
    width:auto;
    height: auto;
    overflow: hidden;
    font-size: 28*$rem;
    line-height: 45*$rem;
    color:#333;
    text-align: left;
}

.companyFoot{

}

.companyaddress{
    width:100%;
    height: auto;
    font-size: 28*$rem;
    line-height: 45*$rem;
    color:#666;
    text-align: center;
    overflow: hidden;
}



</style>