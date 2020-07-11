<template lang="html">
  <div>
    <TodoItem 
      class="mb-3" 
      v-for="(item,i) in $store.state.TodoItems" 
      :key="'TodoItems-'+i"
      :item="item"
      :index="i" />
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';

export default {
  components: {
    TodoItem,
  }
}
</script>

<style lang="css">
</style>
