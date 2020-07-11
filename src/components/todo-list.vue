<template lang="html">
  <div>
    <TodoItem 
      class="mb-3" 
      v-for="(item,i) in todos" 
      :key="'TodoItems-'+i"
      :item="item"
      :index="i" />
    <p 
      class="animate__animated animate__fadeIn animate__fast"
      v-if="todos.length === 0" 
      style="text-align: center;" > No Items Found </p>
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';
import Todo from '@/models/todo'

export default {
  components: {
    TodoItem,
  },
  computed: {
     /**
     * Fetch all Todo records.
     * @return {Object} all todo list.
     */
    todos () {
      return Todo.all()
    }
  },
}
</script>

<style lang="css">
</style>
