<template lang="html">
  <form 
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
</template>

<script>
export default {
  data () {
      return { title:'' }
    },
  methods:{ 
    addItem:function() { // to add todo item 
      if(!this.title){return;}
      this.$store.state.TodoItems.push({ title:this.title,isDone:false});
      this.title = "";
    },
  }
}
</script>

<style lang="css">
</style>
