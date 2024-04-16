<template>
  <div class="show">
    <v-parallax class="mb-10" height="690" :src="ppt"></v-parallax>

    <v-row justify="center">
      <v-col cols="2" class=".d-sm-none .d-md-flex">
        <v-list nav class="rounded-lg" @update:selected="selectItems" color="teal">
          <v-list-item
            v-for="(item, i) in shopStore.menuItems"
            :key="i"
            :value="item.text"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="8">
        <v-row justify="center" v-if="selectedItem === 'T-Shirts'">
          <v-col md="4" xs="12" v-for="(v, i) in shopStore.shirts" :key="i">
            <div class="mx-1">
              <v-hover v-slot:default="{ isHovering, props }">
                <v-card
                  class="rounded-xl"
                  v-bind="props"
                  :elevation="isHovering ? 12 : 2"
                  :color="isHovering ? v.color : null"
                >
                  <v-img cover :src="v.img" aspect-ratio="01"></v-img>
                  <v-card-title>YQYMONsT恤-{{ v.name }}</v-card-title>
                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>

                      <div class="grey--text ms-4">4.5 (413)</div>
                    </v-row>
                    <div class="my-4 text-subtitle-1">￥ 100.00</div>
                  </v-card-text>
                  <v-divider class="mx-4"></v-divider>
                  <v-card-text>
                    <v-chip-group
                      v-model="selection"
                      active-class="deep-purple accent-4 white--text"
                      column
                    >
                      <v-chip>S</v-chip>
                      <v-chip>M</v-chip>
                      <v-chip>L</v-chip>
                      <v-chip>XL</v-chip>
                    </v-chip-group>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" v-if="selectedItem === 'Signs'">
          <v-col md="3" xs="12" v-for="(v, i) in shopStore.signs" :key="i">
            <v-hover v-slot:default="{ isHovering, props }">
              <v-card
                class="rounded-xl"
                v-bind="props"
                :elevation="isHovering ? 12 : 2"
                :color="isHovering ? v.color : null"
                :class="{ 'text-white': isHovering }"
              >
                <v-img cover :src="v.img" aspect-ratio="1.6"></v-img>
                <v-card-title>签名卡-{{ v.name }}</v-card-title>
                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    />
                    <div class="grey--text ms-4">4.5 (413)</div>
                  </v-row>
                  <div class="my-4 text-subtitle-1">￥ 100.00</div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useShopStore } from "@/store/shop";
import { getImage } from "@/utils/Index";
export default {
  setup() {
    const shopStore = useShopStore();
    const ppt = getImage("../assets/images/signs.jpg");
    return { shopStore, ppt };
  },
  data: () => {
    return {
      selectedItem: "T-Shirts",
    };
  },
  methods: {
    selectItems(items) {
      this.selectedItem = items[0];
    },
  },
};
</script>

<style scoped>
.search {
  width: 1500;
}
</style>
