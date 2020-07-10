<template>
  <section class="container pt-5">
    <h2 class="text-center mb-5">Todo Application</h2>
    <b-card v-for="todo in todoes" :key="todo.id" class="mb-3">
      <div class="d-flex justify-content-between">
        <div class="custom-control custom-checkbox">
          <input
            :id="`todo-${todo.id}`"
            :value="todo.finish"
            :true-value="1"
            :false-value="0"
            @change="markTodo(todo.id)"
            type="checkbox"
            class="custom-control-input"
          />
          <label :for="`todo-${todo.id}`" class="custom-control-label">{{ todo.title }}</label>
        </div>

        <b-button @click.prevent="removeTodo(todo.id)" variant="danger" size="sm">X</b-button>
      </div>
    </b-card>
    <b-card>
      <form @submit.prevent="addTodo">
        <b-input-group>
          <b-form-input v-model="newTodo"></b-form-input>
          <b-input-group-append>
            <b-button type="submit" variant="info">Add</b-button>
          </b-input-group-append>
        </b-input-group>
      </form>
    </b-card>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      newTodo: "",
      checkValue: []
    };
  },

  created() {
    this.$store.dispatch("fetchTodo");
  },

  watch: {
    todoes: {
      deep: true,
      handler(val, oldVal) {}
    }
  },

  computed: {
    ...mapGetters({
      todoes: "todo"
    })
  },

  methods: {
    async addTodo() {
      const { data } = await this.$axios.post(`/api/todo`, {
        title: this.newTodo
      });
      this.$store.commit("updateTodo", data);
    },
    async markTodo(id) {
      const { data } = await this.$axios.post(`/api/todo/${id}/toggle`);
      this.$store.commit("updateTodo", data);
    },
    async removeTodo(id) {
      const { data } = await this.$axios.delete(`/api/todo/${id}`);
      this.$store.commit("updateTodo", data);
    }
  }
};
</script>
