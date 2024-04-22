
export const getRandomInArray = (array: Array<any>) => {
    return array[Math.floor(Math.random() * array.length)]
}

export const randomArrayUtil = (arr: Array<any>, num: number) => {
    const temp_array = [];
    for (const index in arr) {
        temp_array.push(arr[index]);
    }
    const return_array = [];
    for (let i = 0; i < num; i++) {
        if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
        } else {
            break;
        }
    }
    return return_array;
}

export function getImage(url: string | URL) {
    return new URL(url, import.meta.url).href
}

export function getWebImg(pic: string) {
    return `http://yqymons-bank.oss-cn-beijing.aliyuncs.com/YQYMONs/images/${pic}`
}