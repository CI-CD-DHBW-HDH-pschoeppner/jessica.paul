import { writable } from "svelte/store";

export class TodoItem {
  id = "";
  value = "";
  done = false;
}

// this function must return a unique ID every time it is called
export function generateID(): string {
  return Math.random().toString(36).substr(2, 10);
}

// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  if (!todo.value || todo.value.length > 255) {
    return false;
  }
  for (const todoItem of todos) {
    if (todo.value.toLowerCase() === todoItem.value.toLowerCase()) {
      return false;
    }
  }
  return true;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  todo.value = todo.value.charAt(0).toUpperCase() + todo.value.slice(1);
  return todo;
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
export function generateColor(): string {
  const r = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
  const g = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
  const b = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
  return "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
}

export const todoList = writable<TodoItem[]>([]);
