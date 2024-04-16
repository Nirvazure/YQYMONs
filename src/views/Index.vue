<template>
  <v-container class="show100">
    <v-row justify="center" no-gutters>
      <v-col v-for="(v, i) in teamStore.team" :key="i" xl="2">
        <v-hover v-slot:default="{ isHovering, props }" open-delay="100">
          <v-img
            v-bind="props"
            :class="{ 'animate__animated animate__pulse': isHovering }"
            :src="isHovering ? v.player.bgimg : v.player.bgbimg"
          />
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useTeamStore } from "@/store/app";
import { gatewayAPI } from "@/api";
export default {
  setup() {
    const teamStore = useTeamStore();
    return { teamStore };
  },
  name: "Index",
  data: () => ({
    memberList: [],
  }),
  mounted() {
    this.getMemberList();
  },
  methods: {
    getMemberList() {
      gatewayAPI("member.list", { level: 0 }).then((res) => {
        this.memberList = res.data.result.data;
      });
    },
  },
};
</script>

<style>
.show100 {
  height: 70vh;
}
</style>
