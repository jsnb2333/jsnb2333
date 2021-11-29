<template>
  <header>
    <div class="w">

      <!-- logo -->
      <div class="hand" @click="routerHome">
        <img src="../assets/img/pz-logo.jpg" alt="" />
      </div>

      <!-- 头部最右 -->
      <div class="header-r">
        <div>
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
          ></el-input>
        </div>
        <div>
          <el-button
            type="primary"
            icon="el-icon-user-solid"
            @click="Visible"
            >个人中心</el-button
          >
        </div>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "HeadCom",
  methods: {
    // 发送事件总线数据
    Visible() {
      this.$bus.$emit('dialogVisible', true)
    },
    // 编辑式路由导航
    routerHome() {
      if(this.$route.fullPath === '/home') {
        location.reload()
        return
      }
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped>
header {
  height: 56px;
  font-size: 17px;
  background-color: #004ea1;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 33%);
  div {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 100%;
    }
  }
  .header-r {
    div {
      margin-left: 20px;
    }
  }
  .hand {
    cursor: pointer;
  }
}
</style>