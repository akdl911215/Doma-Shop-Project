<template>
  <div>
    <h3>Todo 입력창</h3>
    <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo" />
    <button v-on:click="addTodo">추가</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
        console.log("addTodo");
        this.$emit("addTodo", value);
        this.clearInput();
      }
    },
    clearImput() {
      this.newTodoItem = "";
    },
  },
};
</script>
