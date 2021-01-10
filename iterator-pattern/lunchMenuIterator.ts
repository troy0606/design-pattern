import { Iterator } from "./Iterator";
import { MenuItem } from "./menuItems";

export class LunchMenuIterator implements Iterator {
  private mPosition: number = 0; // 紀錄目前走訪的位置
  private mItems: MenuItem[];

  constructor(items) {
    this.mItems = items;
  }

  hasNext(): boolean {
    if (
      this.mPosition >= this.mItems.length ||
      this.mItems[this.mPosition] === null
    ) {
      return false;
    } else {
      return true;
    }
  }

  getNext(): MenuItem {
    const menuItem = this.mItems[this.mPosition];
    this.mPosition++;
    return menuItem;
  }
}
