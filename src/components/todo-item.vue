<template lang="html" >
  <transition 
    appear 
    enter-active-class="animate__animated animate__fadeIn animate__fast" 
    leave-active-class="animate__animated animate__fadeOut animate__faster" 
    mode="out-in">
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
  </transition>
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
    /**
     * this function for removing todo items from vuex-orm
     * 
     */
    RemoveItem:function() {
      Todo.delete(this.item.id);
    },
    /**
     * this function for pushing current todo item to the form to update it
     * 
     */
    UpdateItem:function() { 
      this.$store.state.UpdateItem = {...this.item};
    },
    /**
     * this function for Toggling todo items if it is Completed or not 
     * 
     */
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

  .fade-in {
    opacity: 1;
    transition:opacity 1s linear;
    -webkit-transition: opacity 1.0s linear;
    -moz-transition: opacity 1.0s linear;
    -o-transition: opacity 1.0s linear;
  }
</style>
