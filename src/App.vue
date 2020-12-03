<template>
  <v-app>
    <div class="text-center">
      <p class="display-4 font-weight-bold">{{ title }}</p>
      <p class="display-1 font-weight-thin">{{ description }}</p>
      <v-btn-toggle>
        <v-btn :color="mode ? 'red' : 'green'" @click="mode = !mode" dark
          >Mode</v-btn
        >
        <v-btn @click="getRandomTeam" outlined color="success">更换阵容</v-btn>
        <v-btn @click="seen = !seen">kanwo</v-btn>
      </v-btn-toggle>
    </div>
    <TeamPreview v-if="seen" />
    <TeamMetrics />
    <TeamTable />
  </v-app>
</template>

<script>
import axios from "axios";
import TeamPreview from "@/components/TeamPreview";
import TeamMetrics from "@/components/TeamMetrics";
import TeamTable from "@/components/TeamTable";
export default {
  name: "App",
  data: () => ({
    mode: true,
    title: "YQYMONs",
    seen: true,
    description: "KPL Legend Team",
  }),
  components: {
    TeamPreview,
    TeamMetrics,
    TeamTable,
  },
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      axios.get("heros/web201605/js/herolist.json").then((res) => {
        this.heroes = res.data;
      });
    },
    randomArrayUtil(arr, num) {
      //传入要乱序的数组，和数组长度，用另一个数组接收
      const temp_array = [];
      for (let index in arr) {
        temp_array.push(arr[index]);
      }
      const return_array = [];
      for (let i = 0; i < num; i++) {
        if (temp_array.length > 0) {
          const arrIndex = Math.floor(Math.random() * temp_array.length);
          return_array[i] = temp_array[arrIndex];
          temp_array.splice(arrIndex, 1);
        } else {
          break;
        }
      }
      return return_array;
    },
    getRandomTeam() {
      let a = [0, 1, 2, 3, 4];
      a = this.randomArrayUtil(a, 5);
      let tempTeam = [];
      a.map((v) => {
        tempTeam.push(this.$store.state.team[v]);
      });
      let b = this.randomArrayUtil(this.heroes, this.heroes.length);
      console.log("b", b.slice(5));
      console.log(tempTeam);
      let tempMetrics = [];
      this.$store.commit("updateTeam", tempTeam);

      let c = ["推线", "输出", "坦度", "团战", "控制", "支援"];
      for (let i = 0; i < 6; i++) {
        let tempMetricsItem = {};
        tempMetricsItem["name"] = c[i];
        tempMetricsItem["value"] = Math.ceil(Math.random() * 100);
        tempMetrics.push(tempMetricsItem);
      }
      this.$store.commit("updateMetrics", tempMetrics);
    },
  },
};
</script>

<style>
</style>
