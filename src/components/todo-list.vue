<template lang="html">
  <div>
    <TodoItem 
      class="mb-3" 
      v-for="(item,i) in $store.state.TodoItems" 
      :key="'TodoItems-'+i"
      :item="item"
      :index="i" />
    <p 
      v-if="$store.state.TodoItems.length === 0" 
      style="text-align: center;" > No Items Found </p>
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
