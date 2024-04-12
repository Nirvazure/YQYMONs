<template>
  <div class="show100">
    <v-row justify="center">
      <v-col md="2">
        <div class="imgBox rotateAlbum">
          <v-img
            class="border-xl rounded-circle"
            alt="Vue logo"
            aspect-ratio="1"
            src="@/assets/images/album.jpg"
          />
        </div>
      </v-col>
      <v-col cols="5" offset="1">
        <SingleItem v-for="single in album" :key="single.id">
          <template #icon> {{ single.id }} </template>
          <template #heading>{{ single.style }}</template>
          <template #title>{{ single.name }}</template>
          As an independent project, Vue relies on community backing for its
        </SingleItem>
      </v-col>
    </v-row>
  </div>
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
}
.rotateAlbum {
  animation: rotate 5s infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.show100 {
  height: 100vh;
}
</style>
