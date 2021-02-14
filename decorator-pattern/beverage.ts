export abstract class Beverage {
    name: string;
    description: string;
    abstract get cost(): number;

    getName(): string { return this.name; }
    getDescription(): string { return this.description; }
}