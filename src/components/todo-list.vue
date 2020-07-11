<template lang="html">
  <div>
    <TodoItem 
      class="mb-3" 
      v-for="(item,i) in todos" 
      :key="'TodoItems-'+i"
      :item="item"
      :index="i" />
    <p 
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
    todos () {
      // Fetch all Todo records.
      return Todo.all()
    }
  },
}
</script>

<style lang="css">
</style>
