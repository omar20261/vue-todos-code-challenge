<template lang="html">
  <div >
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
     /**
     * this function for adding todo item to vuex-orm
     * 
     */
    addItem:function() {
      if(!this.title){return;}
      Todo.insert({ data: { title:this.title,isDone:false} })
      this.title = "";
    },
     /**
     * this function for Updating todo item 
     * 
     */
    updateItem:function() { 
      if(!this.$store.state.UpdateItem.title){return;}
      Todo.update({
        where: this.$store.state.UpdateItem.id,
        data: this.$store.state.UpdateItem
      });
      this.cancelUpdateItem()
    },
    /**
     * cancel Update todo Item
     * 
     */
    cancelUpdateItem:function() { 
      this.$store.state.UpdateItem=null;
    }
  }
}
</script>

<style lang="css">
</style>
