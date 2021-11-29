<template>
      <!-- 弹出框 -->
    <div>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >

        <span>检测到您还未登录，请先登录后再进入个人中心</span>

        <span slot="footer" class="dialog-footer">
          <el-button @click="routerEnroll">注册</el-button>
          <el-button type="primary" @click="routerLogin">登录</el-button>
        </span>

      </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'DialogCom',
    data() {
        return {
        // 弹出框需要数据
        dialogVisible: false,
        }
    },
    methods: {
        // 弹出框关闭方法
        handleClose(done) {
        done();
        },
        // 编辑式路由导航
        routerLogin() {
        this.$router.push({name: 'login'})
        },
        routerEnroll() {
        this.$router.push({name: 'enroll'})
        },
    },
    mounted() {
      // 注册全局事件总线
      this.$bus.$on('dialogVisible', (data) => {
        this.dialogVisible = data
      })
    },
}
</script>

<style>

</style>