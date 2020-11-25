
<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
//Echart
//props 父子组件传值
//Echart有Vue封装，代码简单点，但是功能和性能都要差一些
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

export default {
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "500px",
    },
  },
  data: () => ({
    chart: null,
    options: {
      radar: {
        indicator: [
          { name: "输出", max: 100 },
          { name: "坦度", max: 100 },
          { name: "推线", max: 100 },
          { name: "团战", max: 100 },
          { name: "支援", max: 100 },
          { name: "控制", max: 100 },
        ],
      },
      series: [
        {
          type: "radar",
          symbolSize: 20,
          data: [
            {
              value: [],
            },
          ],
        },
      ],
    },
  }),
  mounted() {
    console.log(
      this.$store.state.metrics.map((v) => {
        return v["value"];
      })
    );
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      window.addEventListener("resize", this.chart.resize);
      this.options.series[0].data[0].value = this.metricsRaddarValue;
      this.chart.setOption(this.options);
    },
  },
  computed: {
    metricsRaddarValue() {
      return this.$store.state.metrics.map((v) => {
        return v["value"];
      });
    },
  },
  watch: {
    metricsRaddarValue: {
      handler(newValue, oldValue) {
        if (newValue) {
          this.options.series[0].data[0].value = newValue;
          this.chart.setOption(this.options);
        } else {
          this.options.series[0].data[0].value = oldValue;
          this.chart.setOption(this.options);
        }
      },
    },
  },
};
</script>

<style>
</style>