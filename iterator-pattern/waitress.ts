import { Iterator } from './Iterator';
import { LunchMenu } from './lunchMenu';
import { Menu } from './menu';
import { MenuItem } from './menuItems';
export class Waitress {
    private mBreakfast: Menu;
    private mLunch: Menu;

    constructor(breakfast: Menu, lunch: Menu) {
        this.mBreakfast = breakfast;
        this.mLunch = lunch;
    }

    // 假函式多載
    public printMenu(iterator?: Iterator): void {
        if(arguments.length) {
            while(iterator.hasNext())
            {
                const menuItem = iterator.getNext() as MenuItem;
                console.log(`dish: ${menuItem.dishesName}, price: ${menuItem.price}`)
            }
        }else{
            const breakfastItarator: Iterator = this.mBreakfast.createIterator();
            const lunchItarator: Iterator = this.mLunch.createIterator();
            this.printMenu(breakfastItarator);
            this.printMenu(lunchItarator);
        }
    }
}

const breakfast: MenuItem[] = [{dishesName: 'lemon-fish', price: 150}, {dishesName: 'big-mac', price: 127}];
const lunch: MenuItem[] = [{dishesName: 'coco-milk', price: 30}, {dishesName: 'steak', price: 450}];

const watitress = new Waitress(new LunchMenu(breakfast), new LunchMenu(lunch));

watitress.printMenu()