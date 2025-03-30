import "animate.css/animate.min.css";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
// import animate from "animate.css";
import "./assets/main.css";
import router from "./router";

//粒子效果
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { Engine } from "@tsparticles/engine";

const app = createApp(App);

registerPlugins(app);

app.use(Particles as any, {
  init: async (engine: Engine) => {
    await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
  },
});
app.use(router);

app.mount("#app");
