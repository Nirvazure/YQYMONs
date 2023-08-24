<template>
  <v-app>
    <div class="myapp">
      <div class="text-center my-5">
        <p
          @click="$router.push(`/`)"
          class="text-h1 font-weight-bold animate__animated animate__zoomIn forte"
          id="h1"
        >
          <span class="title1 forte">YQY</span><span class="forte">MONs</span>
        </p>
        <p class="text-h4 font-weight-thin my-5">KPL Legend Team</p>

        <v-btn
          variant="text"
          :color="this.$router.currentRoute.path === '/squad' ? '#46b685' : undefined"
          @click="$router.push(`/squad`)"
          >Squad </v-btn
        >|
        <v-btn
          variant="text"
          :color="this.$router.currentRoute.path === '/show' ? '#46b685' : undefined"
          class="mx-5 tabLink"
          @click="$router.push(`/show`)"
          >TeamShow </v-btn
        >|
        <v-btn
          variant="text"
          :color="this.$router.currentRoute.path === '/shop' ? '#46b685' : undefined"
          class="mx-5 tabLink"
          @click="$router.push(`/shop`)"
          >Shop</v-btn
        >
      </div>
      <router-view></router-view>
      <v-footer>
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
  }),
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
</style>
