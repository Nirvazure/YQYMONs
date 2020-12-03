<template>
  <v-container>
    <v-row justify="center">
      <v-col v-for="(v, i) in $store.state.team" :key="i" cols="12" md="2">
        <v-hover v-slot="{ hover }">
          <v-card
            class="d-flex"
            :elevation="hover ? 24 : 6"
            :class="{ 'animate__animated animate__pulse': hover }"
            :img="v.player.img"
            height="500"
          >
            <v-card-title class="d-flex align-self-start">{{
              v.pos
            }}</v-card-title>
            <v-row class="d-flex align-self-end mb-4 mr-4" justify="end">
              <v-avatar right size="100" class="d-flex justify-end">
                <v-img aspect-ratio="1" :src="v.hero.ename | toImgUrl"></v-img>
              </v-avatar>
            </v-row>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>