<template>
  <div class="identity">
    <div class="identity-info-top">
      <input type="text" v-model="presonName" placeholder="请填写您的姓名" class="info-top-item preson-name">
      <input type="text" v-model="presonCard" placeholder="请填写您的身份证号" class="info-top-item preson-card">
    </div>
    <div class="identity-info-bottom">
      <h3 class="info-bottom-title">留下您的个人信息，方便更好地为您服务</h3>
      <div class="info-bottom-item">
        <label for="">职业身份</label>
        <div class="item-select" @click="open('picker1')">{{picker1Value}}</div>
        <mt-picker v-if="picker1" showToolbar :slots="profession" @change="onValuesChange">
          <div class="picker-header">
            <div class="picker-cancel" @click="open('picker1')">取消</div>
            <div class="picker-confirm" @click="changePickerValue('picker1')">确定</div>
          </div>
        </mt-picker>
      </div>
      <div class="info-bottom-item">
        <label for="">信用资质</label>
        <div class="item-select" @click="open('picker2')">{{picker2Value}}</div>
        <mt-picker v-if="picker2" showToolbar :slots="credit" @change="onValuesChange">
          <div class="picker-header">
            <div class="picker-cancel" @click="open('picker2')">取消</div>
            <div class="picker-confirm" @click="changePickerValue('picker2')">确定</div>
          </div>
        </mt-picker>
      </div>
      <div class="info-bottom-item">
        <label for="">学历</label>
        <div class="item-select" @click="open('picker3')">{{picker3Value}}</div>
        <mt-picker v-if="picker3" showToolbar :slots="education" @change="onValuesChange">
          <div class="picker-header">
            <div class="picker-cancel" @click="open('picker3')">取消</div>
            <div class="picker-confirm" @click="changePickerValue('picker3')">确定</div>
          </div>
        </mt-picker>
      </div>
    </div>
    <div class="identity-info-button" @click="applyNow">立即申请</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      presonName: '',
      presonCard: '',
      picker1: false,
      picker2: false,
      picker3: false,
      picker1Value: '请选择',
      picker2Value: '请选择',
      picker3Value: '请选择',
      currentValue: null,
      profession: [{
        values: ['授薪人士', '私营业主', '自由职业', '在校大学生']
      }],
      credit: [{
        values: ['信用卡', '芝麻分', '公积金']
      }],
      education: [{
        values: ['博士及以上', '硕士', '大学本科', '大学专科', '高中/中专/技校', '初中', '初中以下']
      }],
    }
  },
  methods: {
      open (picker) {
        this[picker] = !this[picker]
      },
      onValuesChange (picker, value) {
        this.currentValue = value
      },
      changePickerValue (picker) {
        if (picker == 'picker1') {
          this.picker1Value = this.currentValue[0]
          this.picker1 = false
        }
        if (picker == 'picker2') {
          this.picker2Value = this.currentValue[0]
          this.picker2 = false
        }
        if (picker == 'picker3') {
          this.picker3Value = this.currentValue[0]
          this.picker3 = false
        }
      },
      applyNow () {
        this.$ajax({
          url: 'https://api.creditm.cn/tags/v2/idCardAuth',
          method: 'get',
          params: {
            name: this.presonName,
            idCard: this.presonCard,
            type: 'noPhoto', // photo 返回照片, noPhoto 不返回照片
          },
          // token value 获取请联系魔蝎数据为合作机构分配
          headers: {'Authorization': 'token'},
        }).then(res=>{
          this.$toast('获取成功!')
        })
    }
  }
}
</script>

<style lang="scss">
  .identity {
    .identity-info-top {
      background: #fff;
      padding: 0 32px;
      margin-bottom: 24px;
      .info-top-item {
        height: 98px;
        line-height: 98px;
        display: block;
        width: 100%;
        padding-left: 52px;
      }
      .preson-name {
        background: url('../assets/images/icon-name.png') no-repeat left center;
        background-size: 32px 32px;
        border-bottom: #E7E8F1 solid 1px; /*no*/
      }
      .preson-card {
        background: url('../assets/images/icon-card.png') no-repeat left center;
        background-size: 32px 32px;
      }
    }
    .identity-info-bottom {
      background: #fff;
      padding: 0 32px;
      .info-bottom-title {
        height: 75px;
        line-height: 75px;
        font-size: 24px;
        color: #5F606D;
        border-bottom: #E7E8F1 solid 1px; /*no*/
        font-weight: normal;
      }
      .info-bottom-item {
        height: 98px;
        line-height: 98px;
        width: 100%;
        border-bottom: #E7E8F1 solid 1px; /*no*/
        &:last-child {
          border-bottom: none;
        }
        label {
          font-size: 28px;
          float: left;
          color: #202020;
          display: block;
        }
        .item-select {
          color: #5F606D;
          font-size: 28px;
          float: right;
          height: 97px;
          line-height: 97px;
          background: #fff url('../assets/images/arrow-down.png') no-repeat right center;
          background-size: 25px 16px;
          min-width: 200px;
          text-align: right;
          padding-right: 34px;
        }
        .picker {
          position: absolute;
          width: 100%;
          left: 0;
          background: #fff;
          bottom: 0;
          .picker-toolbar {
            height: 80px;
          }
          .picker-header {
            height: 80px;
            padding: 0 32px;
            line-height: 80px;
            border-bottom: #E7E8F1 solid 1px; /*no*/
            .picker-cancel {
              width: 50%;
              float: left;
              font-size: 24px;
              color: #5F606D;
            }
            .picker-confirm {
              width: 50%;
              float: right;
              text-align: right;
              font-size: 24px;
              color: #5F606D;
            }
          }
        }
      }
    }
    .identity-info-button {
      width: 200px;
      height: 68px;
      line-height: 68px;
      border-radius: 34px;
      background: #00ABF3;
      margin: 32px auto 0;
      color: #fff;
      font-size: 28px;
      text-align: center;
    }
  }
</style>
