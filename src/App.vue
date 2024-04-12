<template>
  <v-app>
    <div class="myapp">
      <div class="text-center my-5">
        <p
          @click="$router.push(`/`)"
          class="text-h1 font-weight-bold animate__animated animate__zoomIn forte mb-2"
          id="h1"
        >
          <span class="title1 forte">YQY</span><span class="forte">MONs</span>
        </p>
        <p class="text-h5 font-weight-thin mb-5">KPL Legend Team</p>

        <v-item-group v-model="model" class="mb-8">
          <v-item v-for="(v, i) in btns" :key="i">
            <template v-slot:default="{ toggle }">
              <v-btn
                class="mx-3"
                :active="model == i"
                color="#46b685"
                :class="{
                  selectBtn: model == i,
                  'text-white': model == i,
                }"
                variant="text"
                @click="btnChange(v.text, toggle)"
                >{{ v.text }}</v-btn
              >
              <span v-if="i < btns.length - 1"> |</span>
            </template>
          </v-item>
        </v-item-group>
      </div>
      <router-view></router-view>
      <v-footer class=".d-sm-none .d-md-flex">
        <v-card flat tile width="100%" class="text-center ma-0">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon.name"
              class="mx-4"
              icon
              :color="icon.color"
            >
              <v-icon size="24px">
                {{ icon.name }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text>
            {{ new Date().getFullYear() }} — <strong>YQYMONs</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => ({
    icons: [
      {
        name: "mdi-music",
        color: "red",
      },
      {
        name: "mdi-video",
        color: "pink",
      },
      {
        name: "mdi-sina-weibo",
        color: "red",
      },
      {
        name: "mdi-wechat",
        color: "green",
      },
    ],
    btns: [
      // { text: "INDEX", url: "" },
      { text: "SQUAD" },
      { text: "TEAMSHOW" },
      { text: "SHOP" },
      { text: "ALBUM" },
    ],
    model: null,
  }),
  created() {
    console.log("4", this.$route, this.$router);
  },
  methods: {
    btnChange(url: string, toggle) {
      console.log("4", this.$route, this.$router);
      this.$router.push(url);
      toggle();
    },
  },
};
</script>

<style scoped>
.tabLink {
  margin-left: 5;
  margin-right: 5;
}
.tabLink:hover {
  color: #46b685;
  margin-left: 5;
  margin-right: 5;
}
.title1 {
  color: #46b685;
  font-family: "Forte";
}
.forte {
  font-family: "Forte";
}
.myapp {
  background-color: #f6f6f6;
}

.tab {
  color: #46b685;
  margin-left: 5;
  margin-right: 5;
}

.selectBtn {
  background-color: #46b685;
}
</style>
