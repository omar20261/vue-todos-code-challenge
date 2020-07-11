<template lang="html">
  <v-card>
    <span class="todo-num">{{ '#' + (index + 1) }}</span>
    <v-card-title primary-title>
      <div>
        <h3 
          class="headline mb-0" 
          :class="{'Completed-task':this.item.isDone}">
          {{ item.title }}
        </h3>
      </div>
    </v-card-title>

    <v-btn
      @click="CompleteToggle">
      <span v-if="this.item.isDone" >Completed</span>
      <span v-else >Complete</span>
    </v-btn>

    <v-btn 
      color="info" 
      @click="UpdateItem">
      Update
    </v-btn>

    <v-btn 
      color="error"
      @click="RemoveItem">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
import Todo from '@/models/todo'

export default {
  props: {
    item: {
      type: Object,
      default:function() { }
    },
    index: {
      type: Number,
      default:-1
    }
  },
  methods:{
    RemoveItem:function() { // to remove todo item
      Todo.delete(this.item.id);
    },
    UpdateItem:function() { // to push current todo item to the form to update it
      this.$store.state.UpdateItem = {...this.item};
    },
    CompleteToggle:function() {
      Todo.update({
        where: this.item.id,
        data: {
          isDone: !this.item.isDone
        }
      });
    }
  }
    
}
</script>

<style lang="css">
  .todo-num{
    font-size: 24px;
    margin: 10px;
    float: right;
  }
  .Completed-task{
    text-decoration: line-through;
  }
</style>
