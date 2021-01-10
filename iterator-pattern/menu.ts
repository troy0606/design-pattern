import { Iterator } from './Iterator';

// 可以取得一個反覆器, 取得菜單內容
export interface Menu {
    createIterator(): Iterator
}