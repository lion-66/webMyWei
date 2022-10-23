<template>
  <div id="app">
    <header class="header-top">
      <van-icon name="wap-nav" color="#fff" size="35" />
      <van-search
        v-model="value"
        shape="round"
        background="red"
        placeholder="请输入搜索关键词"
      />
      <van-icon name="music" color="#fff" size="35" />
    </header>
    <div class="container">
      <!-- <About/> -->
      <router-view></router-view>
    </div>
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
      fixed
      
    >
        <van-tabbar-item route="true"
          :icon="item.icon"
          v-for="item in vanTiem"
          :key="item.title"
          :to="item.path"
          >{{ item.title }}</van-tabbar-item>
          
       
    </van-tabbar>
  </div>
</template>
<script>
// import About from '@/views/AboutView.vue'
export default {
  // components:{About},
  data() {
    return {
      active: "",
      value: "",
      vanTiem: [
        {
          icon: "home-o",
          title: "发现",
          path:'/home'
        },
        {
          icon: "search",
          title: "播客",
          path:'/about'
        },
        {
          icon: "search",
          title: "我的",
          path:'/search'
        },
        {
          icon: "friends-o",
          title: "关注",
          path:'/home'
        },
        {
          icon: "setting-o",
          title: "社区",
          path:'/about'
        },
      ],
    };
  },
};
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
.header-top {
  width: 100%;
  height: 9%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.container {
  width: 100%;
  height: 81%;
  
  // background-color: skyblue;
}
.van-tabbar {
  height: 60px !important;
}
.van-search {
  width: 70% !important;
}
</style>
