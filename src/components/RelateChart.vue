<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from "echarts";
import { relateGraphData as graph } from "@/api/mock.js";

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
      tooltip: {},
      series: [
        {
          name: "Les Miserables",
          type: "graph",
          layout: "circular",
          data: graph.nodes,
          links: graph.links,
          categories: graph.categories,
          roam: true,
          label: {
            show: true,
            position: "right",
            formatter: "{b}",
          },
          labelLayout: {
            hideOverlap: true,
          },
          scaleLimit: {
            min: 0.4,
            max: 2,
          },
          lineStyle: {
            color: "source",
            curveness: 0.3,
          },
        },
      ],
    },
  }),
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "dark");
      window.addEventListener("resize", this.chart.resize);
      this.chart.setOption(this.options);
    },
  },
};
</script>

<style></style>
