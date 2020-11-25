<template>
  <v-row justify="center">
    <v-data-table
      :headers="headers"
      :items="$store.state.team"
      :items-per-page="5"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:[`item.img`]="{ item }">
        <v-avatar>
          <v-img :src="item.hero.ename | toImgUrl"></v-img>
        </v-avatar>
      </template>
      <template v-slot:[`item.player`]="{ item }">
        <v-avatar>
          <v-img :src="item.player.img"></v-img>
        </v-avatar>
        <span>{{ item.player.name }}</span>
      </template>
      <template v-slot:[`item.hero_type`]="{ item }">
        <v-chip
          label
          small
          dark
          :color="item.hero.hero_type | toHeroTypeName | toHeroTypeColor"
          >{{ item.hero.hero_type | toHeroTypeName }}</v-chip
        >
      </template>
      <template v-slot:[`item.rank`]="{ item }">
        <v-rating :value="item.rank"></v-rating>
      </template>
    </v-data-table>
  </v-row>
</template>

<script>
//介绍一下slot
//介绍一下VuetifyTable
export default {
  data: () => ({
    headers: [
      {
        align: "left",
        text: "Position",
        value: "pos",
      },
      {
        text: "avatar",
        value: "img",
      },
      {
        text: "Name",
        value: "hero.cname",
      },
      {
        text: "Title",
        value: "hero.title",
      },
      {
        text: "Type",
        value: "hero_type",
      },
      {
        text: "PlayerName",
        value: "player",
      },

      {
        text: "Rank",
        value: "rank",
      },
    ],
  }),
};
</script>

<style>
</style>
