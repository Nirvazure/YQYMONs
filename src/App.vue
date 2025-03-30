<template>
  <v-app>
    <div class="bg">
      <vue-particles
        v-if="route.name === 'Index'"
        id="tsparticles"
        @particles-loaded="particlesLoaded"
        :options="{
          background: {
            color: {
              value: '#fff',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.9,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ccc',
            },
            links: {
              color: '#ccc',
              distance: 150,
              enable: true,
              opacity: 0.8,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: 'bounce',
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }"
      />

      <div class="text-center mt-10">
        <p
          @click="$router.push(`/`)"
          class="text-h1 font-weight-bold animate__animated animate__zoomIn forte mb-2 mt-10 d-xs-none"
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
      <v-footer class="d-none d-lg-flex d-xl-none">
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

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const particlesLoaded = async (myapp: any) => {
  console.log("Particles container loaded", myapp);
};

const icons = [
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
];

const btns = [{ text: "SQUAD" }, { text: "TEAMSHOW" }, { text: "SHOP" }];
const model = null;

const router = useRouter();
const route = useRoute();

const btnChange = (url: string, toggle: any) => {
  router.push(url);
  toggle();
};
</script>

<style scoped>
.title1 {
  color: #46b685;
  font-family: "Forte";
}
.forte {
  font-family: "Forte";
}
.bgCeramic {
  background-color: #f6f6f6;
}
.selectBtn {
  background-color: #46b685;
}
</style>
