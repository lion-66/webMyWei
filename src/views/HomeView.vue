<template>
  <div class="home">
    <button @click="handleClick">点击</button>
    <el-button type="primary">主要按钮</el-button>
    <p v-for="item in date" :key="item.name">{{ item.name }}</p>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      date: [],
      value: true
    };
  },
  methods: {
    async handleClick() {
      const res = await this.$api.getMuisc();
      this.date = res.data.result;
    },
  },
  mounted() {
    // console.log(music);
  },
};
</script>

<style lang="less">
  .home{
    width: 100%;
    height: 100%;
  }
</style>
