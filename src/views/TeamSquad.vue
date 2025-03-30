<template>
  <div>
    <TeamPreview :team="teamStore.team" class="my-5" />
    <div class="text-center">
      <v-btn
        class="text-white"
        color="#46b685"
        @click="teamStore.shuffler"
        width="400"
        size="large"
      >
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
    <RelateChart class="my-6" />
  </div>
</template>

<script setup>
import { useTeamStore } from "@/store/app.ts";
import RaddarChart from "@/components/RaddarChart.vue";
import TeamPreview from "@/components/TeamPreview.vue";
import { computed } from "vue";

const teamStore = useTeamStore();

const metrics = computed(() => {
  return teamStore.metrics;
});
</script>
