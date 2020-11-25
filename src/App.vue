<template>
  <v-app>
    <div class="text-center">
      <p class="display-4 font-weight-bold">YQYMONs</p>
      <p class="display-1 font-weight-thin">KPL Legend Team</p>
      <v-btn-toggle>
        <v-btn :color="mode ? 'red' : 'green'" @click="mode = !mode" dark
          >Mode</v-btn
        >
        <v-btn @click="getRandomTeam" outlined color="success">更换阵容</v-btn>
      </v-btn-toggle>
    </div>
    <TeamPreview />
    <TeamMetrics />
    <TeamTable />
  </v-app>
</template>

<script>
import TeamPreview from "@/components/TeamPreview";
import TeamMetrics from "@/components/TeamMetrics";
import TeamTable from "@/components/TeamTable";
export default {
  name: "App",
  data: () => ({
    mode: true,
  }),
  components: {
    TeamPreview,
    TeamMetrics,
    TeamTable,
  },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
