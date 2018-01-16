<template>
  <div class="loading-panda">
    <div class="top">
        <img src="~@/assets/toppic.png" class="top-pic">
    </div>
    <div class="buttom">
        <div>
            <input class="phone-input" placeholder="请填写注册手机号" v-model="phone"/>
            <input type="button" class="code-button" v-bind:class="{cantClick:is_show}" :value="count+codeButtonText"  @click="getCode()"/>
        </div>
        <div>
            <input class="code-input" placeholder="请填写短信验证码" v-model="smsCode"/>
        </div>
        <div v-if="picCode">
            <input class="phone-input" placeholder="请填写验证码" v-model="imaCode"/>
            <img :src="imageCode" id="captchaImage" alt="" width="100" height="100" @click="getImageCode">
        </div>
        <div>
            <input type="button" class="comfirm-button" v-bind:class="{canClick:is_click}" value="立即借款" @click="comfirm()"/>
        </div>
        <div class="text-hint">
            <span class="text-left">点击立即借款既表示同意</span><span class="text-right">《熊猫元宝平台服务协议》</span>
        </div>
        <div class="download">
            <div class="down">
                <div class="pic"><img src="~@/assets/apple.png"></div>
                <div class="download-text">去App Store下载</div>
            </div>
            <div class="down">
                <div class="pic"><img src="~@/assets/google.png"></div>
                <div class="download-text">去Google Play下载</div>
            </div>
        </div>
    </div>
    <div class="footer">
        Copyright © 2017 熊猫元宝 All Rights Reserved
    </div>
  </div>
</template>

<script>
    import resources from "../resources";

    const versionQuery = `
        query (
            $platformId: Byte
            $channelId: Int
            $packageName: String 
            $versionCode: Int
        ) {
            version(
                platformId: $platformId 
                channelId: $channelId
                packageName: $packageName
                versionCode: $versionCode
            ) {
                name
                logoUrl
            }
        }`;
        
    export default {
        data() {
            return {
                picCode: false,
                is_show: false,
                is_click: false,
                codeButtonText: '获取验证码',
                show: true,
                count: '',
                timer: null,
                flagNum: 0,
                imageCode: '',
                phone: '',
                smsCode: '',
                imaCode: ''
            };
        },
        methods: {
            getCode(){
                //如果输入的手机号不符合格式直接返回，不走下面的逻辑
                if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))){ 
                    return ;
                }
                //获取验证码
                this.smsCaptcha();
                //倒计时开始
                this.is_show = true;
                this.is_click = true;
                this.codeButtonText = "S";
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                            this.count = '';
                            this.codeButtonText = '获取验证码';
                            this.is_show = false;
                        }
                    }, 1000)
                }
            },
            
            smsCaptcha()
            {
                // 普通的ajax接口
                // 使用 application/x-www-form-urlencoded 格式化 
                // 参考：http://blog.csdn.net/fantian001/article/details/70193938
                let url = resources.smsCaptcha();
                let params = new URLSearchParams();
                params.append('phone',this.phone)
                this.$ajax.post(url, params)
                    .then(res => {
                        console.log(res)
                    });
            },    

            comfirm(){
                this.flagNum ++ ;
                this.picCode = true;
                this.getImageCode();
                if (this.flagNum === 3) {
                    //this.picCode = true;
                    //this.getImageCode();
                    if (this.phone == '' || this.imaCode == '' || this.smsCode == '') {
                        return ;
                    }
                } else {
                    if (this.phone == '' || this.smsCode == '') {
                        return ;
                    }


                }
                
            },

            getImageCode(){
                // 普通的ajax接口
                // 使用 application/x-www-form-urlencoded 格式化 
                // 参考：http://blog.csdn.net/fantian001/article/details/70193938
                let url = resources.imageCode();
                this.$ajax({
                    method: 'post',
                    url: url,
                    timeout: 10000,
                    headers: {
                        'Version': "1",
                        'User-Id':'0',
                        'Package-Name':'',
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        'Device-Id': '123',
                        'Channel-Id': '1',
                        'Long-lat':''

                    }
                }).then((res) => {
                    //console.log(res)
                    console.log(res)
                    this.imageCode = res;
                });
                // }, (resolve, reject, response) => {
                //     console.log(resolve, reject, response)
                //     this.$message({
                //         message: '登录失败',
                //         type: 'error'
                //     });
                // });
                
                // let url = resources.imageCode();

                // //this.imageCode = url + "?" + Math.random();
                
                // let params = new URLSearchParams();
                // this.$ajax.post(url, params)
                //     .then(res => {
                //     });
            }
        },
        mounted: function () {

		}
    };
    
</script>

<style lang="scss">
    .loading-panda{
        position: absolute;
        width: 100%;
        top: 1px;
        bottom: 1px;
        .top{
            height: 34%;
            background: white;
            .top-pic{
                width: 100%;
                height: 100%;
            }
        }
        .buttom{
            height: 66%;
            background: white;
            .phone-input{
                background: #FFFFFF;
                height: 2.2rem;
                width: 10.5rem;
                margin-left: 1.5rem; 
                margin-top: 0.6rem;
                background: #f2f3f9;
                padding-left: 1rem;
            }
            .code-button{
                background: #2CCAD4;
                color: #FFFFFF;
                font-size: 0.7rem;
                height: 2.2rem;
                width: 4.75rem;
                margin-left: 0.3rem; 
                margin-top: 0.6rem;
            }
            .cantClick{
                background: #d3d3d6;
            }
            .code-input{
                background: #FFFFFF;
                height: 2.2rem;
                width: 15.75rem;
                margin-left: 1.5rem;
                margin-top: 0.5rem;
                background: #f2f3f9;
                padding-left: 1rem;
            }
            .comfirm-button{
                background: #d3d3d6;
                color: #FFFFFF;
                font-size: 0.8rem;
                height: 2.2rem;
                width: 15.75rem;
                border-radius: 1rem;
                margin-left: 1.5rem; 
                margin-top: 0.6rem;
            }
            .canClick{
                background: #2CCAD4; 
            }
            .phone-input::-webkit-input-placeholder{
                text-align: left;
                color: #d3d3d6;
                font-size: 0.7rem;
            }
            .code-input::-webkit-input-placeholder{
                text-align: left;
                color: #d3d3d6;
                font-size: 0.7rem;
            }
            .text-hint{
                margin-top: 1rem;
                margin-left: 2.8rem;
                .text-left{
                    color: #202020;
                    font-size: 0.6rem;
                }
                .text-right{
                    color: #00abf3;
                    font-size: 0.6rem;
                }
            }
            .download{
                margin-top: 1.7rem;
                .down{
                    margin-left: 1.5rem;
                    background: #333333;
                    float: left;
                    width: 7.5rem;
                    height: 3rem;
                    border-radius: 0.2rem;
                    .pic{
                        text-align: center;
                        margin-top: 0.4rem;
                    }
                    .download-text{
                        text-align: center;
                        color: #FFFFFF;
                        font-size: 0.7rem;
                        margin-top: 0.3rem;
                    }
                }
            }
        }
        
        .footer{ 
            margin-top:-1.3rem;
            height:0.6rem;
            text-align: center;
            color: #d9dadd;
            font-size: 0.6rem;
        }
    }
</style>