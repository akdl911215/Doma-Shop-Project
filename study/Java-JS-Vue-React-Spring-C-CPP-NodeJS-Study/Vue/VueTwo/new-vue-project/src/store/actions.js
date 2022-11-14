import { ADD_TODO, REMOVE_TODO, EDIT_TODO, CLEAR_ALL, TOGGLE_TODO_STATUS } from './mutation-types';

export default {
    addTodo(context, payload) {
        context.commit(ADD_TODO, payload);
    },
    save({ state }) {
        const data = {
            todoItems: state.todoItems,
            nextTodoId: state.nextTodoId,
        };

        // DB 대신 임시적으로 사용
        localStorage.setItem('todo-app-data', JSON.stringify(data));
    },
    removeTodo(context, payload) {
        context.commit(REMOVE_TODO, payload);
    },
    editTodo({ commit }, payload) {
        commit(EDIT_TODO, payload);
    },
    clearAll(context) {
        context.commit(CLEAR_ALL);
    },
    toggleTodoStatus({ commit }, id) {
        commit(TOGGLE_TODO_STATUS, id);
    },
};
