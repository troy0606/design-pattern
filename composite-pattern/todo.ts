import { TodoList } from "./todoList";

export class Todo implements TodoList {
    text: string;
    constructor(text: string) {
        this.text = text;
    }
    // 只返回不包含html標籤純字串
    getHtml(): string {
        return this.text;
    }
}