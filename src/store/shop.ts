import { defineStore } from 'pinia'
import { getImage } from '@/utils/Index'

interface MenuItem {
    text: string,
    icon: string
}

export const useShopStore = defineStore('shop', {
    state: () => ({
        menuItems: [
            { text: "T-Shirts", icon: "mdi-tshirt-crew" },
            { text: "Signs", icon: "mdi-draw" },
            { text: "TeamCard", icon: "mdi-card" },
        ] as Array<MenuItem>,
        shirts: [
            {
                name: "干将莫邪",
                img: getImage("../assets/ts1.jpg"),
                color: "pink lighten-3",
            },
            {
                name: "女娲",
                img: getImage("../assets/ts2.jpg"),
                color: "yellow lighten-3",
            },
            {
                name: "墨子",
                img: getImage("../assets/ts3.jpg"),
                color: "#4db76c"
            },
        ],
    })
})