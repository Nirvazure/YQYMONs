import { defineStore } from "pinia";
import { getWebImg } from "@/utils/Index";

interface MenuItem {
  text: string;
  icon: string;
}

export const useShopStore = defineStore("shop", {
  state: () => ({
    menuItems: [
      { text: "T-Shirts", icon: "mdi-tshirt-crew" },
      { text: "Signs", icon: "mdi-draw" },
      { text: "TeamCard", icon: "mdi-card" },
    ] as Array<MenuItem>,
    shirts: [
      {
        name: "干将莫邪",
        img: getWebImg("ts1.jpg"),
        color: "pink lighten-3",
      },
      {
        name: "女娲",
        img: getWebImg("ts2.jpg"),
        color: "yellow lighten-3",
      },
      {
        name: "墨子",
        img: getWebImg("ts3.jpg"),
        color: "green darken-2",
      },
    ],
    teamCards: [
      {
        name: "草堂大当家",
        img: getWebImg("c1.jpg"),
        color: "#b4ffa7",
      },
      {
        name: "NIrvazure",
        img: getWebImg("c2.jpg"),
        color: "#cea3f4",
      },
      {
        name: "SVIP",
        img: getWebImg("c3.jpg"),
        color: "#fc7fa5",
      },
      {
        name: "霸天霸地",
        img: getWebImg("c4.jpg"),
        color: "#59b9e1",
      },
    ],
    signs: [
      {
        name: "草堂大当家",
        img: getWebImg("signs.jpg"),
        color: "#b4ffa7",
      },
    ],
  }),
});
