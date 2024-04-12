<template>
  <v-container>
    <v-row justify="center">
      <v-hover v-for="(v, i) in this.team" :key="i">
        <template v-slot:default="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="d-sm-none d-md-flex ma-2"
            :elevation="isHovering ? 24 : 6"
            :class="{ 'animate__animated animate__pulse': isHovering }"
            height="360"
            width="200"
            @click="$router.push({ name: 'Member', params: { name: v.name } })"
          >
            <v-img :src="v.player.img" cover>
              <div class="d-felx"></div>
              <v-card-title class="d-flex align-self-start">{{ v.pos }}</v-card-title>
              <v-row class="d-flex align-self-end mb-4 mr-4" justify="end">
                <v-avatar right size="100" border="warning lg" class="d-flex justify-end">
                  <v-img aspect-ratio="1" :src="getHeroImg(v.hero.ename)"></v-img>
                </v-avatar>
              </v-row>
              <v-fade-transition>
                <v-overlay v-if="isHovering">
                  <template #activator="{ isHovering, props }">
                    <h2 class="text-center text-white" v-bind="props">
                      {{ v.player.name }}
                    </h2>
                  </template>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </v-card>
        </template>
      </v-hover>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    team: Array,
  },
  data: () => ({
    index: null,
  }),
  methods: {
    getHeroImg(ename) {
      return (
        "https://game.gtimg.cn/images/yxzj/img201606/heroimg/" +
        String(ename) +
        "/" +
        String(ename) +
        ".jpg"
      );
    },
  },
};
</script>
