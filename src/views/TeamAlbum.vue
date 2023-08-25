<template>
  <v-container>
    <v-row justify="center">
      <v-col md="2">
        <div class="d-flex imgBox">
          <v-img
            alt="Vue logo"
            class="logo"
            src="@/assets/images/album.jpg"
            width="200"
            height="200"
          />
        </div>
      </v-col>
      <v-col md="6">
        <SingleItem v-for="(single, index) in album" :key="single.id">
          <template #icon> {{ single.id }} </template>
          <template #heading>{{ index + single.style }}</template>
          <template #title>{{ single.name }}</template>
          As an independent project, Vue relies on community backing for its
          sustainability. You can help us by
        </SingleItem>
      </v-col>
    </v-row>
    <v-divider class="my-5" />
  </v-container>
</template>

<script>
import SingleItem from "@/components/SingleItem.vue";
export default {
  components: {
    SingleItem,
  },
  data() {
    return {
      album: [
        {
          id: 0,
          name: "回不去的门球场",
          style: "OldSchool",
          beat: "",
        },
        {
          id: 1,
          name: "编号637",
          style: "Boombap",
          beat: "",
        },
        { id: 2, name: "", style: "Melody", beat: "" },
        { id: 3, name: "图灵丘比特", style: "Trap", beat: "" },
        {
          id: 4,
          name: "拉也拉不多",
          style: "Drill",
          beat: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.imgBox {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
