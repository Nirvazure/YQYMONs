const toImgUrl = ename => {
    return (
        "https://game.gtimg.cn/images/yxzj/img201606/heroimg/" +
        String(ename) +
        "/" +
        String(ename) +
        ".jpg"
    );
};

const toHeroTypeName = hero_type => {
    let heroNameDict = {
        "1": "战士",
        "2": "法师",
        "3": "坦克",
        "4": "刺客",
        "5": "射手",
        "6": "辅助",
    }
    return heroNameDict[hero_type]
}

const toHeroTypeColor = value => {
    if (value == "坦克") {
        return "blue-grey  darken-1";
    } else if (value == "刺客") {
        return "green darken-1";
    } else if (value == "法师") {
        return "blue darken-1";
    } else if (value == "辅助") {
        return "indigo  darken-1";
    } else if (value == "射手") {
        return "yellow darken-1";
    } else {
        return "deep-orange darken-1";
    }
}

export default {
    toImgUrl,
    toHeroTypeColor,
    toHeroTypeName
}