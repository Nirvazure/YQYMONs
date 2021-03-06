const team = [{
    player: {
        name: 'SandM影',
        img: require('@/assets/1.jpg'),
    },
    pos: 'TOP',
    hero: {
        cname: "鲁班七号",
        ename: 112,
        hero_type: 5,
        new_type: 0,
        skin_name: "机关造物|木偶奇遇记|福禄兄弟|电玩小子|星空梦想",
        title: "机关造物",
    },
    rank: 2
}, {
    player: {
        name: 'HyBarain',
        img: require('@/assets/2.jpg'),
    },
    pos: 'JUG',
    hero: {
        cname: "小乔",
        ename: 106,
        hero_type: 2,
        new_type: 0,
        skin_name: "恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽",
        title: "恋之微风"
    },
    rank: 3
}, {
    player: {
        name: 'Nirvazure',
        img: require('@/assets/3.jpg'),
    },
    pos: 'MID',
    hero: {
        cname: "项羽",
        ename: 135,
        hero_type: 3,
        new_type: 0,
        skin_name: "霸王|帝国元帅|苍穹之光|海滩派对|职棒王牌|霸王别姬|科学大爆炸",
        title: "霸王",
    },
    rank: 4
}, {
    player: {
        name: 'TinyRed',
        img: require('@/assets/4.jpg'),
    },
    pos: 'ADC',
    hero: {
        cname: "阿古朵",
        ename: 533,
        hero_type: 3,
        hero_type2: 6,
        new_type: 0,
        skin_name: "山林之子",
        title: "山林之子"
    },
    rank: 5
}, {
    player: {
        name: 'Uncle',
        img: require('@/assets/5.jpg'),
    },
    pos: 'SUP',
    hero: {
        cname: "米莱狄",
        ename: 504,
        hero_type: 2,
        new_type: 0,
        skin_name: "筑城者|精准探案法|御霄",
        title: "筑城者",
    },
    rank: 3
}]

const metrics = [{
        name: '推线',
        value: 10
    },
    {
        name: '输出',
        value: 10
    },
    {
        name: '坦度',
        value: 10
    },
    {
        name: '团战',
        value: 10
    },
    {
        name: '控制',
        value: 10
    },
    {
        name: '支援',
        value: 10
    },
]

export {
    team,
    metrics
}