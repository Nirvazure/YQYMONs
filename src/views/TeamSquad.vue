<template>
  <div>
    <RelateChart />
    <TeamPreview :team="teamStore.team" class="my-10" />
    <div class="text-center">
      <v-btn color="success" @click="teamStore.shuffler" width="400" size="large">
        <span class="font-weight-black">更换阵容</span>
      </v-btn>
    </div>
    <RaddarChart :metrics="metrics.map((item) => item.value)" />
    <v-row justify="center">
      <div v-for="(v, i) in metrics" :key="i" class="text-center ma-4">
        <v-progress-circular
          class="text-center title"
          rotate="360"
          size="100"
          width="10"
          :model-value="v.value"
          :color="v.color"
          >{{ v.value }}</v-progress-circular
        >
        <h4 class="title font-weight-thin">{{ v.name }}</h4>
      </div>
    </v-row>
    <v-divider class="my-5" />
    <TeamTable :team="teamStore.team" />
  </div>
</template>

<script>
import { useTeamStore } from "@/store/app.ts";
import RaddarChart from "@/components/RaddarChart.vue";
import RelateChart from "@/components/RelateChart.vue";
import TeamPreview from "@/components/TeamPreview.vue";
import TeamTable from "@/components/TeamTable.vue";
export default {
  setup() {
    const teamStore = useTeamStore();
    return { teamStore };
  },
  computed: {
    metrics() {
      return this.teamStore.metrics;
    },
  },
  components: {
    RaddarChart,
    TeamPreview,
    RelateChart,
    TeamTable,
  },
};
</script>
