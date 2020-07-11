<template lang="html">
  <v-card>
    <span class="todo-num">{{ '#' + (index + 1) }}</span>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">
          {{ item.title }}
        </h3>
      </div>
    </v-card-title>
    <v-btn>
      Complete
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
      this.$store.state.TodoItems.splice(this.index,1);
    },
    UpdateItem:function() { // to push current todo item to the form to update it
      this.$store.state.UpdateItem = {...this.item,index:this.index};
    },
  }
    
}
</script>

<style lang="css">
  .todo-num{
    font-size: 24px;
    margin: 10px;
    float: right;
  }
</style>
