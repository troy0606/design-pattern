import { Todo } from "./todo";
import { TodoList } from "./todoList";

export class Project implements TodoList {
    title: string;
    todos: TodoList[];
    constructor(title: string, todos: TodoList[]) {
        this.title = title;
        this.todos = todos;
    }
    getHtml(): string {
        let html = "<h1>";
        html += this.title;
        html += '</h1><ul>';

        this.todos.forEach(todo => {
            html += '<li>';
            html += todo.getHtml();
            html += '</li>'
        })

        html += '<ul>'
        return html;
    }

}

const todos = [new Todo('list 1'),new Todo('list 2')];
const todos2 = [...todos, new Project('title2', todos)]
const project = new Project('title1', todos2)
console.log(project.getHtml())