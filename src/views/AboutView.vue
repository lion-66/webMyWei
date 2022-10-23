<template>
  <div class="about">
    <van-button type="primary">主要按钮</van-button>
    <img :src="item" v-for="item in url" :key="item.pic">
  </div>
</template>

<script>

export default {
  data() {
    return {
      url:[]
    }
  },
  methods: {
    
  },
 async mounted() {
    const res = await this.$api.getBanner()
    res.data.banners.forEach(item => {
      this.url.push(item.pic)
    });
  },
}
</script>
<style lang="less">
  .about{
    width: 100%;
    height: 100%;
    // overflow: ;
   overflow-y: auto;
   overflow-x: hidden;
  // padding-right: 10px;
  }
  img{
    width: 100%;
  }
</style>