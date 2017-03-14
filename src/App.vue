<template>
  <div class="app">
    <v-header :seller="seller"></v-header>
    <div class="top border-1px">
      <div class="tab-item">
      <a v-link="{path:'/goods'}">商品</a>
    </div>
    <div class="tab-item">
      <a v-link="{path:'/ratings'}">评论</a>
    </div>
    <div class="tab-item">
      <a v-link="{path:'/seller'}">商家</a>
    </div>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
    import header from './components/header/header';
    const ERR_OK=0;
    export default {
        data() {
          return {
            seller:{}
          };
        },
        created () {
          this.$http.get('/api/seller').then((response) => {
            response=response.body;
            if(response.errno===ERR_OK){
               this.seller=response.data;
              console.log(this.seller); 
              // this.seller = Object.assign({}, this.seller, response.data);
            }
          });
        },
        components: {
            'v-header': header
        }
    };
</script>

<style lang="less">
    @import './common/less/mixin.less';
    @import './common/css/app.less';
    @import './common/less/icon.less';
    @import './common/less/base.less';
</style>