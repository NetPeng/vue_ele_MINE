<template>
  <div class="star" :class="starType">
      <span v-for="item in itemClasses" :class="item" class="star-item" track-by="$index"></span>
  </div>
</template>
<script>
  const LENGTH=5;
  const CLS_ON='on';
  const CLS_OFF='off';
  const CLS_HALF='half';
  export default {
      props:{
          size:{
              type:Number
          },
          score:{
              type:Number
          }
      },
      computed:{
          starType(){
              return 'star-' + this.size;
          },
          itemClasses(){
              let result=[];
              let score=Math.floor( this.score * 2 ) / 2;
              let hashDecimal=score % 1 !== 0;
              let integer=Math.floor(score);
              for(let i=0;i<integer;i++){
                  result.push(CLS_ON);
              }
              if(hashDecimal){
                  result.push(CLS_HALF);
              }
              while(result.length<LENGTH){
                  result.push(CLS_OFF);
              }
            //   console.log(result);
              return result;
          }
      }
  };
</script>
<style lang="less">
@import '../../common/less/mixin.less';
@import '../../common/css/star.less';
</style>
