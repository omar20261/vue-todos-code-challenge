<template lang="html">
  <div>
    <form 
      @submit.prevent="updateItem" 
      v-if="$store.state.UpdateItem">

      <v-text-field
        label="Todo"
        placeholder="What do you have to do?"
        v-model="$store.state.UpdateItem.title"
        solo
      />

      <v-btn
        @click="cancelUpdateItem">
        Cancel
      </v-btn>

      <v-btn 
        color="info" 
        @click="updateItem">
        Update
      </v-btn>
    </form>

    <form 
      v-else
      @submit.prevent="addItem">

      <v-text-field
        label="Todo"
        placeholder="What do you have to do?"
        v-model="title"
        solo
      />

      <v-btn 
        color="success" 
        @click="addItem">
        Add
      </v-btn>

    </form>
  </div>
</template>

<script>
import Todo from '@/models/todo'

export default {
  data () {
      return { title:'' }
    },
  methods:{ 
    addItem:function() { // to add todo item 
      if(!this.title){return;}
      Todo.insert({ data: { title:this.title,isDone:false} })
      this.title = "";
    },
    updateItem:function() { // to Update todo Item
      if(!this.$store.state.UpdateItem.title){return;}
      Todo.update({
        where: this.$store.state.UpdateItem.id,
        data: this.$store.state.UpdateItem
      });
      this.cancelUpdateItem()
    },
    cancelUpdateItem:function() { // to cancel Update todo Item
      this.$store.state.UpdateItem=null;
    }
  }
}
</script>

<style lang="css">
</style>
