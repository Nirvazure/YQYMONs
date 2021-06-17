<template>
  <v-app>
    <div class="text-center">
      <p class="display-4 font-weight-bold">{{ title }}</p>
      <p class="display-1 font-weight-thin">{{ description }}</p>
      <v-row justify="center" no-gutters>
        <v-col v-for="(player, i) in team" :key="i">
          <v-hover v-slot="{ hover }" open-delay="100">
            <v-img
              :class="{ 'animate__animated animate__pulse': hover }"
              :src="hover ? player.player.bgimg : player.player.bgbimg"
            ></v-img>
          </v-hover>
        </v-col>
        <!-- <v-sheet width="80%">
          <v-img :src="bg"></v-img>
        </v-sheet> -->
      </v-row>
    </div>

    <RelatedGraph class="my-4" />
    <div class="text-center">
      <v-btn-toggle>
        <v-btn :color="mode ? 'red' : 'green'" @click="mode = !mode" dark>
          Mode
        </v-btn>
        <v-btn @click="getRandomTeam" outlined color="success">更换阵容</v-btn>
      </v-btn-toggle>
    </div>
    <TeamPreview />
    <TeamMetrics />

    <div class="text-center mt-10">
      <p class="display-1 font-weight-thin">Team Show</p>
      <v-row justify="center">
        <v-sheet width="700" class="elevation-10">
          <video
            width="100%"
            height="100%"
            :src="video"
            controls
            autoplay
          ></video>
        </v-sheet>
      </v-row>
    </div>

    <TeamTable />
  </v-app>
</template>

<script>
import axios from "axios";
import { team } from "@/api/mock.js";
import RelatedGraph from "@/components/RelatedGraph";
import TeamPreview from "@/components/TeamPreview";
import TeamMetrics from "@/components/TeamMetrics";
import TeamTable from "@/components/TeamTable";
export default {
  name: "App",
  data: () => ({
    mode: true,
    title: "YQYMONs",
    description: "KPL Legend Team",
    team: team,
    video: require("@/assets/1.mp4"),
    bg: require("@/assets/bg.png"),
  }),
  components: {
    TeamPreview,
    TeamMetrics,
    TeamTable,
    RelatedGraph,
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