<template>
  <div class="time" :class="navclass">
    {{ tipText }}<span class="styleAll" v-if="isDay === true">{{ day }}</span
    ><span class="timeTxt">{{ dayText }}</span
    ><span class="styleAll">{{ hour }}</span
    ><span class="timeTxt">{{ hourText }}</span
    ><span class="styleAll">{{ minute }}</span
    ><span class="timeTxt">{{ minuteText }}</span
    ><span class="styleAll">{{ second }}</span
    ><span class="timeTxt">{{ secondText }}</span>
  </div>
</template>
<script>
export default {
  name: "CountDown",
  props: {
    navclass: {
      type: String,
      default: ""
    },
    //距离开始提示文字
    tipText: {
      type: String,
      default: ""
    },
    dayText: {
      type: String,
      default: ""
    },
    hourText: {
      type: String,
      default: ":"
    },
    minuteText: {
      type: String,
      default: ":"
    },
    secondText: {
      type: String,
      default: ""
    },
    datatime: {
      type: Number,
      default: 0
    },
    currenttime: {
      type: Number,
      default: 0
    },
    isDay: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      day: "00",
      hour: "00",
      minute: "00",
      currentTime: this.currenttime,
      second: "00"
    };
  },
  created: function() {
    this.show_time();
    let intDiff = (this.datatime - this.currentTime) * 1000 //获取数据中的时间戳的时间差；
    console.log(intDiff)

  },
  mounted: function() {},
  methods: {
    show_time: function() {
      let that = this;
      function runTime() {
        //时间函数
        let intDiff = (that.datatime - that.currentTime) * 1000 //获取数据中的时间戳的时间差；
        that.currentTime++;
        let day = 0,
          hour = 0,
          minute = 0,
          second = 0;
        if (intDiff > 0) {
          //转换时间
          //计算出相差天数

          if (that.isDay === true) {
            day = Math.floor(intDiff / (24 * 3600 * 1000));
          } else {
            day = 0;
          }
          //计算出小时数
          let leave1 = intDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
          hour = Math.floor(leave1 / (3600 * 1000));

          //计算相差分钟数
          let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
          minute = Math.floor(leave2 / (60 * 1000));

          //计算相差秒数
          let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
          second = Math.round(leave3 / 1000);
          
          if (hour <= 9) hour = "0" + hour;
          if (minute <= 9) minute = "0" + minute;
          if (second <= 9) second = "0" + second;
          that.day = day;
          that.hour = hour;
          that.minute = minute;
          that.second = second;
        } else {
          that.day = "00";
          that.hour = "00";
          that.minute = "00";
          that.second = "00";
        }
      }
      runTime();
      setInterval(runTime, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
.on {
  .styleAll {
    color: #ffffff;
    background: #fd563a;
    height: 5.33vw;
    line-height: 5.33vw;
    margin: 0 1vw;
    min-width: 5.33vw;
    display: inline-block;
    text-align: center;
    font-size: 3.2vw;
    border-radius: 4px;
  }
  .timeTxt {
    color: #fd563a;
  }
}
.on_1 {
  color: #fff;
  font-size: 3.47vw;
  line-height: 8vw;
}
</style>
