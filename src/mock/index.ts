import type { HERO, VISUAL_ITEM } from "@/interface";

const heros: Array<HERO> = [
  {
    ename: 105,
    cname: "廉颇",
    title: "正义爆轰",
    new_type: 0,
    hero_type: 3,
    skin_name: "正义爆轰|地狱岩魂",
    moss_id: 3627,
  },
  {
    ename: 106,
    cname: "小乔",
    title: "恋之微风",
    new_type: 0,
    hero_type: 2,
    skin_name: "恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽",
    moss_id: 3644,
  },
  {
    ename: 107,
    cname: "赵云",
    title: "苍天翔龙",
    new_type: 0,
    hero_type: 1,
    hero_type2: 4,
    skin_name: "苍天翔龙|忍●炎影|未来纪元|皇家上将|嘻哈天王|白执事|引擎之心",
    moss_id: 3661,
  },
  {
    ename: 108,
    cname: "墨子",
    title: "和平守望",
    new_type: 0,
    hero_type: 2,
    hero_type2: 1,
    skin_name: "和平守望|金属风暴|龙骑士|进击墨子号",
    moss_id: 3547,
  },
  {
    ename: 109,
    cname: "妲己",
    title: "魅力之狐",
    pay_type: 11,
    new_type: 0,
    hero_type: 2,
    skin_name: "魅惑之狐|女仆咖啡|魅力维加斯|仙境爱丽丝|少女阿狸|热情桑巴",
    moss_id: 3663,
  },
  {
    ename: 110,
    cname: "嬴政",
    title: "王者独尊",
    new_type: 0,
    hero_type: 2,
    skin_name: "王者独尊|摇滚巨星|暗夜贵公子|优雅恋人|白昼王子",
    moss_id: 3680,
  },
  {
    ename: 111,
    cname: "孙尚香",
    title: "千金重弩",
    new_type: 0,
    hero_type: 5,
    skin_name:
      "千金重弩|火炮千金|水果甜心|蔷薇恋人|杀手不太冷|末日机甲|沉稳之力",
    moss_id: 3577,
  },
  {
    ename: 112,
    cname: "鲁班七号",
    title: "机关造物",
    new_type: 0,
    hero_type: 5,
    skin_name: "机关造物|木偶奇遇记|福禄兄弟|电玩小子|星空梦想",
    moss_id: 3697,
  },
  {
    ename: 113,
    cname: "庄周",
    title: "逍遥梦幻",
    new_type: 0,
    hero_type: 6,
    hero_type2: 3,
    skin_name: "逍遥幻梦|鲤鱼之梦|蜃楼王|云端筑梦师",
    moss_id: 3594,
  },
  {
    ename: 114,
    cname: "刘禅",
    title: "暴走机关",
    new_type: 0,
    hero_type: 6,
    hero_type2: 3,
    skin_name: "暴走机关|英喵野望|绅士熊喵|天才门将",
    moss_id: 3714,
  },
  {
    ename: 115,
    cname: "高渐离",
    title: "叛逆吟游",
    new_type: 0,
    hero_type: 2,
    skin_name: "叛逆吟游|金属狂潮|死亡摇滚",
    moss_id: 3611,
  },
  {
    ename: 116,
    cname: "阿轲",
    title: "信念之刃",
    new_type: 0,
    hero_type: 4,
    skin_name: "信念之刃|爱心护理|暗夜猫娘|致命风华|节奏热浪",
    moss_id: 3731,
  },
  {
    ename: 117,
    cname: "钟无艳",
    title: "野蛮之锤",
    new_type: 0,
    hero_type: 1,
    hero_type2: 3,
    skin_name: "野蛮之锤|生化警戒|王者之锤|海滩丽影",
    moss_id: 3628,
  },
  {
    ename: 118,
    cname: "孙膑",
    title: "逆流之时",
    new_type: 0,
    hero_type: 6,
    hero_type2: 2,
    skin_name: "逆流之时|未来旅行|天使之翼|妖精王",
    moss_id: 3645,
  },
  {
    ename: 119,
    cname: "扁鹊",
    title: "善恶怪医",
    new_type: 0,
    hero_type: 2,
    skin_name: "善恶怪医|救世之瞳|化身博士|炼金王",
    moss_id: 3662,
  },
  {
    ename: 120,
    cname: "白起",
    title: "最终兵器",
    new_type: 0,
    hero_type: 3,
    skin_name: "最终兵器|白色死神|狰|星夜王子",
    moss_id: 3679,
  },
  {
    ename: 121,
    cname: "芈月",
    title: "永恒之月",
    new_type: 0,
    hero_type: 2,
    hero_type2: 3,
    skin_name: "永恒之月|红桃皇后|大秦宣太后|重明",
    moss_id: 3696,
  },
  {
    ename: 123,
    cname: "吕布",
    title: "无双之魔",
    new_type: 0,
    hero_type: 1,
    hero_type2: 3,
    skin_name: "无双之魔|圣诞狂欢|天魔缭乱|末日机甲|猎兽之王",
    moss_id: 3713,
  },
  {
    ename: 124,
    cname: "周瑜",
    title: "铁血都督",
    pay_type: 10,
    new_type: 0,
    hero_type: 2,
    skin_name: "铁血都督|海军大将|真爱至上",
    moss_id: 3784,
  },
  {
    ename: 126,
    cname: "夏侯惇",
    title: "不羁之风",
    new_type: 0,
    hero_type: 3,
    hero_type2: 1,
    skin_name: "不羁之风|战争骑士|乘风破浪|无限飓风号",
    moss_id: 3730,
  },
  {
    ename: 127,
    cname: "甄姬",
    title: "洛神降临",
    new_type: 0,
    hero_type: 2,
    skin_name: "洛神降临|冰雪圆舞曲|花好人间|游园惊梦",
    moss_id: 3747,
  },
  {
    ename: 128,
    cname: "曹操",
    title: "鲜血枭雄",
    pay_type: 10,
    new_type: 0,
    hero_type: 1,
    skin_name: "鲜血枭雄|超能战警|幽灵船长|死神来了|烛龙",
    moss_id: 3765,
  },
  {
    ename: 129,
    cname: "典韦",
    title: "狂战士",
    new_type: 0,
    hero_type: 1,
    skin_name: "狂战士|黄金武士|穷奇",
    moss_id: 3782,
  },
  {
    ename: 130,
    cname: "宫本武藏",
    title: "剑圣",
    new_type: 0,
    hero_type: 1,
    skin_name: "剑圣|鬼剑武藏|未来纪元|万象初新|地狱之眼|霸王丸",
    moss_id: 3799,
  },
  {
    ename: 131,
    cname: "李白",
    title: "青莲剑仙",
    new_type: 0,
    hero_type: 4,
    skin_name: "青莲剑仙|范海辛|千年之狐|凤求凰|敏锐之力",
    moss_id: 3816,
  },
  {
    ename: 132,
    cname: "马可波罗",
    title: "远游之枪",
    new_type: 0,
    hero_type: 5,
    skin_name: "远游之枪|激情绿茵|逐梦之星",
    moss_id: 3764,
  },
  {
    ename: 133,
    cname: "狄仁杰",
    title: "断案大师",
    new_type: 0,
    hero_type: 5,
    skin_name: "断案大师|锦衣卫|魔术师|超时空战士|阴阳师",
    moss_id: 3781,
  },
  {
    ename: 134,
    cname: "达摩",
    title: "拳僧",
    new_type: 0,
    hero_type: 1,
    hero_type2: 3,
    skin_name: "拳僧|大发明家|拳王",
    moss_id: 3798,
  },
  {
    ename: 135,
    cname: "项羽",
    title: "霸王",
    new_type: 0,
    hero_type: 3,
    hero_type2: 1,
    skin_name: "霸王|帝国元帅|苍穹之光|海滩派对|职棒王牌|霸王别姬|科学大爆炸",
    moss_id: 3815,
  },
  {
    ename: 136,
    cname: "武则天",
    title: "女帝",
    new_type: 0,
    hero_type: 2,
    skin_name: "女帝|东方不败|海洋之心",
    moss_id: 3832,
  },
  {
    ename: 139,
    cname: "老夫子",
    title: "万古长明",
    new_type: 0,
    hero_type: 1,
    skin_name: "万古长明|潮流仙人|圣诞老人|功夫老勺",
    moss_id: 3849,
  },
  {
    ename: 140,
    cname: "关羽",
    title: "一骑当千",
    new_type: 0,
    hero_type: 1,
    skin_name: "一骑当千|天启骑士|冰锋战神|龙腾万里",
    moss_id: 3866,
  },
  {
    ename: 141,
    cname: "貂蝉",
    title: "绝世舞姬",
    new_type: 0,
    hero_type: 2,
    hero_type2: 4,
    skin_name: "绝世舞姬|异域舞娘|圣诞恋歌|逐梦之音|仲夏夜之梦",
    moss_id: 3883,
  },
  {
    ename: 142,
    cname: "安琪拉",
    title: "暗夜萝莉",
    new_type: 0,
    hero_type: 2,
    skin_name: "暗夜萝莉|玩偶对对碰|魔法小厨娘|心灵骇客|如懿",
    moss_id: 3900,
  },
  {
    ename: 144,
    cname: "程咬金",
    title: "热烈之斧",
    new_type: 0,
    hero_type: 3,
    hero_type2: 1,
    skin_name: "热烈之斧|爱与正义|星际陆战队|华尔街大亨|功夫厨神",
    moss_id: 3917,
  },
  {
    ename: 146,
    cname: "露娜",
    title: "月光之女",
    new_type: 0,
    hero_type: 1,
    hero_type2: 2,
    skin_name: "月光之女|哥特玫瑰|绯红之刃|紫霞仙子|一生所爱",
    moss_id: 3934,
  },
  {
    ename: 148,
    cname: "姜子牙",
    title: "太古魔导",
    new_type: 0,
    hero_type: 2,
    skin_name: "太古魔导|时尚教父",
    moss_id: 3951,
  },
  {
    ename: 149,
    cname: "刘邦",
    title: "双面君主",
    new_type: 0,
    hero_type: 3,
    skin_name: "双面君主|圣殿之光|德古拉伯爵",
    moss_id: 3978,
  },
  {
    ename: 150,
    cname: "韩信",
    title: "国士无双",
    new_type: 0,
    hero_type: 4,
    skin_name: "国士无双|街头霸王|教廷特使|白龙吟|逐梦之影",
    moss_id: 3985,
  },
  {
    ename: 152,
    cname: "王昭君",
    title: "冰雪之华",
    new_type: 0,
    hero_type: 2,
    skin_name: "冰雪之华|精灵公主|偶像歌手|凤凰于飞|幻想奇妙夜",
    moss_id: 4002,
  },
  {
    ename: 153,
    cname: "兰陵王",
    title: "暗影刀锋",
    new_type: 0,
    hero_type: 4,
    skin_name: "暗影刀锋|隐刃|暗隐猎兽者",
    moss_id: 4019,
  },
  {
    ename: 154,
    cname: "花木兰",
    title: "传说之刃",
    pay_type: 10,
    new_type: 0,
    hero_type: 1,
    hero_type2: 4,
    skin_name: "传说之刃|剑舞者|兔女郎|水晶猎龙者|青春决赛季|冠军飞将|瑞麟志",
    moss_id: 4036,
  },
  {
    ename: 156,
    cname: "张良",
    title: "言灵之书",
    pay_type: 10,
    new_type: 0,
    hero_type: 2,
    skin_name: "言灵之书|天堂福音|一千零一夜|幽兰居士",
    moss_id: 4053,
  },
  {
    ename: 157,
    cname: "不知火舞",
    title: "明媚烈焰",
    new_type: 0,
    hero_type: 2,
    hero_type2: 4,
    skin_name: "明媚烈焰",
    moss_id: 4070,
  },
  {
    ename: 162,
    cname: "娜可露露",
    title: "鹰之守护",
    new_type: 0,
    hero_type: 4,
    skin_name: "鹰之守护",
    moss_id: 4087,
  },
  {
    ename: 163,
    cname: "橘右京",
    title: "神梦一刀",
    new_type: 0,
    hero_type: 4,
    hero_type2: 1,
    skin_name: "神梦一刀",
    moss_id: 4104,
  },
  {
    ename: 166,
    cname: "亚瑟",
    title: "圣骑之力",
    pay_type: 11,
    new_type: 0,
    hero_type: 1,
    hero_type2: 3,
    skin_name: "圣骑之力|死亡骑士|狮心王|心灵战警",
    moss_id: 4121,
  },
  {
    ename: 167,
    cname: "孙悟空",
    title: "齐天大圣",
    new_type: 0,
    hero_type: 4,
    hero_type2: 1,
    skin_name: "齐天大圣|地狱火|西部大镖客|美猴王|至尊宝|全息碎影|大圣娶亲",
    moss_id: 4138,
  },
  {
    ename: 168,
    cname: "牛魔",
    title: "精英酋长",
    new_type: 0,
    hero_type: 6,
    hero_type2: 3,
    skin_name: "精英酋长|西部大镖客|制霸全明星",
    moss_id: 4155,
  },
  {
    ename: 169,
    cname: "后羿",
    title: "半神之弓",
    new_type: 0,
    hero_type: 5,
    skin_name: "半神之弓|精灵王|阿尔法小队|辉光之辰|黄金射手座",
    moss_id: 4172,
  },
  {
    ename: 170,
    cname: "刘备",
    title: "仁德义枪",
    new_type: 0,
    hero_type: 1,
    skin_name: "仁德义枪|万事如意|纽约教父|汉昭烈帝",
    moss_id: 4189,
  },
  {
    ename: 171,
    cname: "张飞",
    title: "禁血狂兽",
    new_type: 0,
    hero_type: 3,
    hero_type2: 6,
    skin_name: "禁血狂兽|五福同心|乱世虎臣",
    moss_id: 4206,
  },
  {
    ename: 173,
    cname: "李元芳",
    title: "王都密探",
    pay_type: 10,
    new_type: 0,
    hero_type: 5,
    skin_name: "王都密探|特种部队|黑猫爱糖果|逐浪之夏",
    moss_id: 4223,
  },
  {
    ename: 174,
    cname: "虞姬",
    title: "森之风灵",
    new_type: 0,
    hero_type: 5,
    skin_name: "森之风灵|加勒比小姐|霸王别姬|凯尔特女王",
    moss_id: 4240,
  },
  {
    ename: 175,
    cname: "钟馗",
    title: "虚灵城判",
    new_type: 0,
    hero_type: 6,
    hero_type2: 2,
    skin_name: "虚灵城判|地府判官",
    moss_id: 4257,
  },
  {
    ename: 177,
    cname: "成吉思汗",
    title: "苍狼末裔",
    new_type: 0,
    hero_type: 5,
    skin_name: "苍狼末裔|维京掠夺者",
    moss_id: 4274,
  },
  {
    ename: 178,
    cname: "杨戬",
    title: "根源之目",
    new_type: 0,
    hero_type: 1,
    skin_name: "根源之目|埃及法老|永曜之星",
    moss_id: 4291,
  },
  {
    ename: 183,
    cname: "雅典娜",
    title: "圣域余晖",
    new_type: 0,
    hero_type: 1,
    skin_name: "圣域余晖|战争女神|冰冠公主|神奇女侠",
    moss_id: 4308,
  },
  {
    ename: 184,
    cname: "蔡文姬",
    title: "天籁弦音",
    new_type: 0,
    hero_type: 6,
    skin_name: "天籁弦音|蔷薇王座|舞动绿茵|奇迹圣诞",
    moss_id: 4325,
  },
  {
    ename: 186,
    cname: "太乙真人",
    title: "炼金大师",
    new_type: 0,
    hero_type: 6,
    hero_type2: 3,
    skin_name: "炼金大师|圆桌骑士|饕餮|华丽摇滚",
    moss_id: 4342,
  },
  {
    ename: 180,
    cname: "哪吒",
    title: "桀骜炎枪",
    new_type: 0,
    hero_type: 1,
    skin_name: "桀骜炎枪|三太子|逐梦之翼",
    moss_id: 4359,
  },
  {
    ename: 190,
    cname: "诸葛亮",
    title: "绝代智谋",
    new_type: 0,
    hero_type: 2,
    skin_name: "绝代智谋|星航指挥官|黄金分割率|武陵仙君|掌控之力",
    moss_id: 4376,
  },
  {
    ename: 192,
    cname: "黄忠",
    title: "燃魂重炮",
    new_type: 0,
    hero_type: 5,
    skin_name: "燃魂重炮|芝加哥教父",
    moss_id: 4393,
  },
  {
    ename: 191,
    cname: "大乔",
    title: "沧海之曜",
    pay_type: 10,
    new_type: 0,
    hero_type: 6,
    hero_type2: 2,
    skin_name: "沧海之曜|伊势巫女|守护之力|猫狗日记",
    moss_id: 4410,
  },
  {
    ename: 187,
    cname: "东皇太一",
    title: "噬灭日蚀",
    new_type: 0,
    hero_type: 6,
    hero_type2: 3,
    skin_name: "噬灭日蚀|东海龙王|逐梦之光",
    moss_id: 4427,
  },
  {
    ename: 182,
    cname: "干将莫邪",
    title: "淬命双剑",
    new_type: 0,
    hero_type: 2,
    skin_name: "淬命双剑|第七人偶|冰霜恋舞曲",
    moss_id: 4444,
  },
  {
    ename: 189,
    cname: "鬼谷子",
    title: "万物有灵",
    new_type: 0,
    hero_type: 6,
    skin_name: "万物有灵|阿摩司公爵|幻乐之宴",
    moss_id: 4461,
  },
  {
    ename: 193,
    cname: "铠",
    title: "破灭刃锋",
    new_type: 0,
    hero_type: 1,
    hero_type2: 3,
    skin_name: "破灭刃锋|龙域领主|曙光守护者|青龙志",
    moss_id: 3564,
  },
  {
    ename: 196,
    cname: "百里守约",
    title: "静谧之眼",
    new_type: 0,
    hero_type: 5,
    hero_type2: 4,
    skin_name: "静谧之眼|绝影神枪|特工魅影|朱雀志",
    moss_id: 4478,
  },
  {
    ename: 195,
    cname: "百里玄策",
    title: "嚣狂之镰",
    new_type: 0,
    hero_type: 4,
    skin_name: "嚣狂之镰|威尼斯狂欢|白虎志",
    moss_id: 4495,
  },
  {
    ename: 194,
    cname: "苏烈",
    title: "不屈铁壁",
    new_type: 0,
    hero_type: 3,
    hero_type2: 6,
    skin_name: "不屈铁壁|爱与和平|坚韧之力|玄武志",
    moss_id: 4521,
  },
  {
    ename: 198,
    cname: "梦奇",
    title: "入梦之灵",
    new_type: 0,
    hero_type: 1,
    hero_type2: 2,
    skin_name: "入梦之灵|美梦成真|胖达荣荣",
    moss_id: 4529,
  },
  {
    ename: 179,
    cname: "女娲",
    title: "至高创世",
    new_type: 0,
    hero_type: 2,
    skin_name: "至高创世|尼罗河女神",
    moss_id: 4546,
  },
  {
    ename: 501,
    cname: "明世隐",
    title: "灵魂劫卜",
    new_type: 0,
    hero_type: 6,
    skin_name: "灵魂劫卜|占星术士|虹云星官",
    moss_id: 4563,
  },
  {
    ename: 199,
    cname: "公孙离",
    title: "幻舞玲珑",
    new_type: 0,
    hero_type: 5,
    skin_name: "幻舞玲珑|花间舞|蜜橘之夏",
    moss_id: 4580,
  },
  {
    ename: 176,
    cname: "杨玉环",
    title: "霓裳风华",
    new_type: 0,
    hero_type: 2,
    skin_name: "风华霓裳|霓裳曲|遇见飞天",
    moss_id: 4597,
  },
  {
    ename: 502,
    cname: "裴擒虎",
    title: "六合虎拳",
    new_type: 0,
    hero_type: 4,
    hero_type2: 1,
    skin_name: "六合虎拳|街头霸王|梅西",
    moss_id: 3581,
  },
  {
    ename: 197,
    cname: "弈星",
    title: "天元之弈",
    new_type: 0,
    hero_type: 2,
    skin_name: "天元之弈|踏雪寻梅",
    moss_id: 3598,
  },
  {
    ename: 503,
    cname: "狂铁",
    title: "战车意志",
    new_type: 0,
    hero_type: 1,
    skin_name: "战车意志|命运角斗场|御狮",
    moss_id: 3615,
  },
  {
    ename: 504,
    cname: "米莱狄",
    title: "筑城者",
    new_type: 0,
    hero_type: 2,
    skin_name: "筑城者|精准探案法|御霄",
    moss_id: 3632,
  },
  {
    ename: 125,
    cname: "元歌",
    title: "无间傀儡",
    new_type: 0,
    hero_type: 4,
    skin_name: "无间傀儡|午夜歌剧院",
    moss_id: 3649,
  },
  {
    ename: 510,
    cname: "孙策",
    title: "光明之海",
    new_type: 0,
    hero_type: 3,
    hero_type2: 1,
    skin_name: "光明之海|海之征途|猫狗日记",
    moss_id: 3666,
  },
  {
    ename: 137,
    cname: "司马懿",
    title: "寂灭之心",
    new_type: 0,
    hero_type: 4,
    hero_type2: 2,
    skin_name: "寂灭之心|魇语军师",
    moss_id: 3683,
  },
  {
    ename: 509,
    cname: "盾山",
    title: "无尽之盾",
    new_type: 0,
    hero_type: 6,
    hero_type2: 3,
    skin_name: "无尽之盾|极冰防御线",
    moss_id: 3700,
  },
  {
    ename: 508,
    cname: "伽罗",
    title: "破魔之箭",
    new_type: 0,
    hero_type: 5,
    skin_name: "破魔之箭|花见巫女",
    moss_id: 3717,
  },
  {
    ename: 312,
    cname: "沈梦溪",
    title: "爆弹怪猫",
    new_type: 0,
    hero_type: 2,
    skin_name: "爆弹怪猫|棒球奇才",
    moss_id: 3734,
  },
  {
    ename: 507,
    cname: "李信",
    title: "谋世之战",
    new_type: 0,
    hero_type: 1,
    skin_name: "谋世之战|灼热之刃",
    moss_id: 3751,
  },
  {
    ename: 513,
    cname: "上官婉儿",
    title: "惊鸿之笔",
    new_type: 0,
    hero_type: 2,
    hero_type2: 4,
    skin_name: "惊鸿之笔|修竹墨客",
    moss_id: 4614,
  },
  {
    ename: 515,
    cname: "嫦娥",
    title: "寒月公主",
    new_type: 0,
    hero_type: 2,
    hero_type2: 3,
    skin_name: "寒月公主|露花倒影",
    moss_id: 4631,
  },
  {
    ename: 511,
    cname: "猪八戒",
    title: "无忧猛士",
    new_type: 0,
    hero_type: 3,
    skin_name: "无忧猛士|年年有余",
    moss_id: 4648,
  },
  {
    ename: 529,
    cname: "盘古",
    title: "破晓之神",
    new_type: 0,
    hero_type: 1,
    skin_name: "破晓之神",
    moss_id: 4665,
  },
  {
    ename: 505,
    cname: "瑶",
    title: "鹿灵守心",
    new_type: 0,
    hero_type: 6,
    skin_name: "森",
    moss_id: 4682,
  },
  {
    ename: 506,
    cname: "云中君",
    title: "流云之翼",
    new_type: 0,
    hero_type: 4,
    hero_type2: 1,
    skin_name: "荷鲁斯之眼",
    moss_id: 4699,
  },
  {
    ename: 522,
    cname: "曜",
    title: "星辰之子",
    new_type: 0,
    hero_type: 1,
    skin_name: "归虚梦演",
    moss_id: 4716,
  },
  {
    ename: 518,
    cname: "马超",
    title: "冷晖之枪",
    new_type: 0,
    hero_type: 1,
    hero_type2: 4,
    moss_id: 433,
  },
  {
    ename: 523,
    cname: "西施",
    title: "幻纱之灵",
    new_type: 0,
    hero_type: 2,
    skin_name: "幻纱之灵|归虚梦演",
    moss_id: 4750,
  },
  {
    ename: 525,
    cname: "鲁班大师",
    title: "神匠",
    new_type: 0,
    hero_type: 6,
    skin_name: "神匠|归虚梦演",
    moss_id: 3768,
  },
  {
    ename: 524,
    cname: "蒙犽",
    title: "烈炮小子",
    new_type: 0,
    hero_type: 5,
    skin_name: "烈炮小子|归虚梦演",
    moss_id: 4767,
  },
  {
    ename: 531,
    cname: "镜",
    title: "破镜之刃",
    new_type: 0,
    hero_type: 4,
    skin_name: "破镜之刃|冰刃幻境",
    moss_id: 4784,
  },
  {
    ename: 527,
    cname: "蒙恬",
    title: "秩序统将",
    new_type: 0,
    hero_type: 1,
    hero_type2: 3,
    skin_name: "秩序统将|秩序猎龙将",
    moss_id: 4801,
  },
  {
    ename: 533,
    cname: "阿古朵",
    title: "山林之子",
    new_type: 0,
    hero_type: 3,
    skin_name: "山林之子",
    moss_id: 3785,
  },
  {
    ename: 536,
    cname: "夏洛特",
    title: "玫瑰剑士",
    new_type: 0,
    hero_type: 1,
    skin_name: "玫瑰剑士",
    moss_id: 3802,
  },
  {
    ename: 528,
    cname: "澜",
    title: "鲨之猎刃",
    pay_type: 10,
    new_type: 0,
    hero_type: 4,
    skin_name: "鲨之猎刃|孤猎",
    moss_id: 3819,
  },
  {
    ename: 537,
    cname: "司空震",
    title: "雷霆之王",
    new_type: 0,
    hero_type: 1,
    hero_type2: 2,
    skin_name: "雷霆之王|启蛰",
    moss_id: 3836,
  },
  {
    ename: 155,
    cname: "艾琳",
    title: "精灵之舞",
    new_type: 0,
    hero_type: 5,
    skin_name: "精灵之舞|女武神",
    moss_id: 3853,
  },
  {
    ename: 538,
    cname: "云缨",
    title: "燎原之心",
    new_type: 0,
    hero_type: 1,
    hero_type2: 4,
    skin_name: "燎原之心|赤焰之缨",
    moss_id: 3870,
  },
  {
    ename: 540,
    cname: "金蝉",
    title: "渡世行者",
    new_type: 0,
    hero_type: 2,
    skin_name: "渡世行者|前尘",
    moss_id: 3887,
  },
  {
    ename: 542,
    cname: "暃",
    title: "玉城之子",
    new_type: 0,
    hero_type: 4,
    hero_type2: 1,
    skin_name: "玉城之子|碧珀绯影",
    moss_id: 4818,
  },
  {
    ename: 534,
    cname: "桑启",
    title: "萤火之旅",
    new_type: 0,
    hero_type: 6,
    skin_name: "萤火之旅|画中游",
    moss_id: 4835,
  },
  {
    ename: 548,
    cname: "戈娅",
    title: "沙海飞舟",
    new_type: 0,
    hero_type: 5,
    skin_name: "沙海飞舟",
    moss_id: 4852,
  },
  {
    ename: 521,
    cname: "海月",
    title: "永夜之子",
    new_type: 0,
    hero_type: 2,
    skin_name: "永夜之子",
    moss_id: 4937,
  },
  {
    ename: 544,
    cname: "赵怀真",
    title: "自在之心",
    new_type: 0,
    hero_type: 1,
    skin_name: "自在之心",
    moss_id: 5122,
  },
  {
    ename: 545,
    cname: "莱西奥",
    title: "火鹰船长",
    new_type: 0,
    hero_type: 5,
    skin_name: "火鹰船长",
    moss_id: 5138,
  },
  {
    ename: 564,
    cname: "姬小满",
    title: "武道奇才",
    new_type: 0,
    hero_type: 1,
    skin_name: "武道奇才",
    moss_id: 5753,
  },
  {
    ename: 514,
    cname: "亚连",
    title: "追忆之刃",
    new_type: 1,
    hero_type: 1,
    skin_name: "追忆之刃",
    moss_id: 5560,
  },
];

const metrics: Array<VISUAL_ITEM> = [
  { name: "坦度", value: 0, color: "blue-grey  darken-1" },
  { name: "输出", value: 0, color: "deep-orange darken-1" },
  { name: "团战", value: 0, color: "green darken-1" },
  { name: "推线", value: 0, color: "blue darken-1" },
  { name: "支援", value: 0, color: "indigo  darken-1" },
  { name: "上限", value: 0, color: "yellow darken-1" },
];

export { heros, metrics };
