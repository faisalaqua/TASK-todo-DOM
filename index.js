// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
// tasks = [
//   { id: 0, title: "GYM - 6AM", category: "", done: false },
//   { id: 1, title: "Work - 7AM", category: "", done: false },
//   { id: 2, title: "CODED - 4PM", category: "", done: false },
//   { id: 3, title: "Netflix- 9PM", category: "", done: false },
//   { id: 4, title: "Sleep- 10PM", category: "", done: false },
// ];

// categories = ["Work", "Groceries", "Movies", "Books"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  // GHADA FAISAL USE THIS FOR PART 5!
  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // continue the code here
  let iteration = 0;
  iteration = iteration + 1;
  const taskInput = {
    id: iteration,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  };
  tasks.push(taskInput);
  renderTasks(tasks, "tasks-list");
  // alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  // continue the code here
  alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  // REMOVE ME: sample alert
  alert(`Category: ${selectedCategory} | done: ${done}`);
}
