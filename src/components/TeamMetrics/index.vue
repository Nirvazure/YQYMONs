<template>
  <div>
    <RaddarChart />
    <v-row justify="center">
      <v-col
        class="text-center"
        v-for="(v, i) in $store.state.metrics"
        :key="i"
        cols="12"
        md="1"
      >
        <v-progress-circular
          rotate="360"
          size="100"
          width="15"
          :value="v.value"
          :color="v.name | getColorByMetricName"
          >{{ v.value }}</v-progress-circular
        >
        <h4>{{ v.name }}</h4>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//介绍Echart
//filters
import RaddarChart from "./components/RaddarChart";
export default {
  components: {
    RaddarChart,
  },
  filters: {
    getColorByMetricName: (metricsName) => {
      switch (metricsName) {
        case "坦度":
          return "blue-grey  darken-1";
        case "输出":
          return "deep-orange darken-1";
        case "团战":
          return "green darken-1";
        case "推线":
          return "blue darken-1";
        case "支援":
          return "indigo  darken-1";
        default:
          return "yellow darken-1";
      }
    },
  },
};
</script>

<style>
</style>