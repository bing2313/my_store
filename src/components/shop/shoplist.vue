<template>
  <div class="shoplist-box">
      <ul>
        <li>
          <img src="https://oscimg.oschina.net/oscnet/up-f93bbbb6991e88df62329a9b1d63ea29.jpeg!/both/50x50" alt="">
          <div class="title"></div>
          <div class="price">
            <span class="newprice">123</span>
            <span class="oldprice">456</span>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageindex: 1,
      shoplist: []
    };
  },
  created(){
    this.getshoplist();
  },
  methods: {
    getshoplist(){
      this.$http.get('api/getgoods?pageindex' + this.pageindex).then(res=>{
        console.log(res.body);
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>