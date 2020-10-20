<template>
  <div>
    <input :value="value" @input="handleInput" v-bind="$attrs" >
  </div>
</template>

<script>
export default {
  inheritAttrs:false,
  name:'AlInput',
  props:{
    value:{
      type:String,
      default:''
    }
  },
  methods:{
    handleInput(e){
      this.$emit('input',e.target.value)
    }
  }
}
</script>