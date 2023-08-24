<template>
  <!-- <pre>{{ JSON.stringify(team, "", "\t") }}</pre> -->
  <v-data-table :headers="headers" :items="team" class="elevation-1">
    <!-- <template v-slot:[`item.img`]="{ item }">
            <v-avatar>
              <v-img :src="item.hero.ename | toImgUrl"></v-img>
            </v-avatar>
          </template> -->
    <!-- <template v-slot:[`item.player`]="{ item }">
      <v-avatar>
        <v-img :src="item.player.img"></v-img>
      </v-avatar>
      <span>{{ item.player.name }}</span>
    </template> -->
    <!-- <template v-slot:[`item.hero_type`]="{ item }">
            <v-chip
              label
              small
              dark
              :color="item.hero.hero_type | toHeroTypeName | toHeroTypeColor"
              >{{ item.hero.hero_type | toHeroTypeName }}</v-chip
            >
          </template> -->
    <!-- <template v-slot:[`item.rank`]="{ item }">
      <v-rating :value="item.rank"></v-rating>
      <h2>222</h2>
    </template> -->
  </v-data-table>
</template>

<script>
export default {
  props: {
    team: Array,
  },
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

<style></style>
