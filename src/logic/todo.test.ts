import {
  formatTodo,
  generateColor,
  generateID,
  TodoItem,
  validateTodo,
} from "./todo";

describe("generateID", () => {
  test("returns a unique ID every time it is called", () => {
    const id1 = generateID();
    const id2 = generateID();
    expect(id1).not.toBe(id2);
  });
});

describe("validateTodo", () => {
  test("returns false if the todo value is longer than 255 characters", () => {
    const todo = new TodoItem();
    todo.value = "a".repeat(256);
    expect(validateTodo(todo, [])).toBe(false);
  });

  test("returns false if the todo value is empty", () => {
    const todo = new TodoItem();
    todo.value = "";
    expect(validateTodo(todo, [])).toBe(false);
  });

  test("returns false if the todo is already in the todos array", () => {
    const todo = new TodoItem();
    todo.value = "test";
    const todos = [new TodoItem(), new TodoItem()];
    todos[0].value = "foo";
    todos[1].value = "test";
    expect(validateTodo(todo, todos)).toBe(false);
  });

  test("returns true if the todo is valid", () => {
    const todo = new TodoItem();
    todo.value = "test";
    const todos = [new TodoItem(), new TodoItem()];
    todos[0].value = "foo";
    todos[1].value = "bar";
    expect(validateTodo(todo, todos)).toBe(true);
  });
});

describe("formatTodo", () => {
  test("capitalizes the first letter of the todo", () => {
    const todo = new TodoItem();
    todo.value = "test";
    const formattedTodo = formatTodo(todo);
    expect(formattedTodo.value).toBe("Test");
  });
});

describe("generateColor", () => {
  test("returns a string with three numbers between 50 and 150, separated by commas and enclosed in parentheses", () => {
    const color1 = generateColor();
    const regex =
      /^rgb\([5-9][0-9],|1[0-4][0-9],|150,\)\([5-9][0-9],|1[0-4][0-9],|150,\)\([5-9][0-9],|1[0-4][0-9],|150,\)$/;
    expect(regex.test(color1)).toBe(true);
    const color2 = generateColor();
    expect(color1).not.toBe(color2);
  });
});
