<template>
  <span class="icon" :class="classMap[supports.type]"></span>
  <span class="text">{{supports.description}}</span>
</template>

<script>
  export default {
      props:{
          index:{
              type:Number
          },
          supports:{
              type:Object
          }
      },
      created(){
          this.classMap=['decrease','discount','guarantee','invoice','special'];
      }
  }
</script>

<style lang="less">
</style>
