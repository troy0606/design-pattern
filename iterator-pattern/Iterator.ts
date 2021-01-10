export interface Iterator {
    // 得知是否還有更多元素
    hasNext(): boolean;
    // 取得下一個元素
    getNext(): object;
}