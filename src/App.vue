<template>
  <v-app>
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
  data: () => ({}),
  components: {
    TeamPreview,
    TeamMetrics,
    TeamTable,
  },
  mounted() {
    console.log(this.$store.state.team);
  },
};
</script>

<style>
</style>
