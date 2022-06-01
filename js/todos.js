export default () => ({

  newTodo: '',
  todos: [],

  addTodo () {
    this.todos.push({
      todo: this.newTodo,
      completed: false,
    });

    this.newTodo = '';
  },

   /**
     * Delete Todo
     */
    deleteTodo(index) {
      this.todos.splice(this.todos.findIndex(todo => todo.field === "id"), 1)
    },

    /**
     * Toggle todo complete
     */
    toggleTodoCompleted(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },

    /**
     * Todo completed
     */
    todosCompleted() {
      return this.todos.filter(todo => todo.completed).length;
    },

    /**
     * Todo count
     */
    todosCount() {
      return this.todos.length;
    },

    /**
     * Last Todo
     */
    isLastTodo(index) {
      return this.todos.length - 1 === index;
    }
});