import { Iterator } from "./Iterator";
import { LunchMenuIterator } from "./lunchMenuIterator";
import { Menu } from "./menu";
import { MenuItem } from "./menuItems";

export class LunchMenu implements Menu {
    private static MAX_ITEMS = 6;
    public mMenuItems: MenuItem[];

    constructor(items) {
        this.mMenuItems = items;
    }

    createIterator(): Iterator {
        return new LunchMenuIterator(this.mMenuItems);
    }
    
}