import { BlackCoffee } from "./blackCoffee";
import { Caramel } from "./caramel";
import { Chocolate } from "./chocolate";

const blackCoffee = new BlackCoffee();
const caramel_blackCoffee = new Caramel(blackCoffee);
const chocolate_caramel_blackCoffee = new Chocolate(caramel_blackCoffee);
console.log(caramel_blackCoffee.cost);
console.log(chocolate_caramel_blackCoffee.cost);
