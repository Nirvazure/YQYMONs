const team = [{
    player: {
        name: 'SandM影',
        img: require('@/assets/1.jpg'),
        summary: "YQYMONs上单",
        heros: ["106", "107", "108", "109"],
        tags: ["上单霸主", "单打之王"]
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
        summary: "YQYMONs打野",
        heros: ["111", "107", "123", "176"],
        tags: ["节奏大师", "野区主宰"]
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
        summary: "YQYMONs中单",
        heros: ["106", "107", "108", "109"],
        tags: ["团队大脑", "AP法王"]
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
        summary: "YQYMONsAD钙奶",
        heros: ["106", "107", "108", "109"],
        tags: ["输出稳健", "颜值担当"]
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
        summary: "YQYMONs辅助",
        heros: ["106", "107", "108", "109"],
        tags: ["开团机器", "团队之盾"]
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
    metrics,
    relateGraphData
}

const relateGraphData = {
    "nodes": [{
            "id": "lcb",
            "name": "SandM",
            "symbolSize": 40,
            "x": 0,
            "y": -7,
            "value": 4,
            "category": 0
        },
        {
            "id": "by",
            "name": "Hybarain",
            "symbolSize": 40,
            "x": -6,
            "y": -2,
            "value": 4,
            "category": 1
        },
        {
            "id": "lfr",
            "name": "Nirvazure",
            "symbolSize": 40,
            "x": 6,
            "y": -2,
            "value": 4,
            "category": 2
        },
        {
            "id": "ly",
            "name": "TinyRed",
            "symbolSize": 40,
            "x": -3,
            "y": 4,
            "value": 4,
            "category": 3
        },
        {
            "id": "yf",
            "name": "YF",
            "symbolSize": 40,
            "x": 3,
            "y": 4,
            "value": 4,
            "category": 4
        },
        {
            "id": "0",
            "name": "上官婉儿",
            "symbolSize": 20,
            "x": 10,
            "y": -4,
            "value": 4,
            "category": 5
        },
        {
            "id": "1",
            "name": "gjmy",
            "symbolSize": 20,
            "x": 9,
            "y": -5,
            "value": 4,
            "category": 5
        },
        {
            "id": "2",
            "name": "lx",
            "symbolSize": 20,
            "x": -2,
            "y": -10,
            "value": 4,
            "category": 5
        },

    ],
    "links": [{
            "source": "lfr",
            "target": "0"
        }, {
            "source": "lfr",
            "target": "1"
        },
        {
            "source": "lfr",
            "target": "yf"
        },
        {
            "source": "lfr",
            "target": "lcb"
        },
        {
            "source": "lfr",
            "target": "ly"
        }, {
            "source": "lfr",
            "target": "by"
        }, {
            "source": "ly",
            "target": "lcb"
        },
        {
            "source": "ly",
            "target": "by"
        },
        {
            "source": "yf",
            "target": "lcb"
        },
        {
            "source": "lcb",
            "target": "2"
        },
        {
            "source": "yf",
            "target": "2"
        },
    ],
    "categories": [{
            "name": "TOP"
        },
        {
            "name": "JUG"
        },
        {
            "name": "MID"
        },
        {
            "name": "ADC"
        },
        {
            "name": "SUP"
        },
        {
            "name": "Mage"
        },
    ]
}