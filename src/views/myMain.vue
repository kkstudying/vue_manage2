<template>
  <div>
    <el-container>
  <el-aside width="auto">
    <common-aside/>
  </el-aside>
  <el-container>
    <el-header>
      <common-header/>
    </el-header>
    <common-tag/>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import commonAside from '../components/commonAside.vue'
import commonHeader from '../components/commonHeader.vue'
import commonTag from '@/components/commonTag.vue'
export default {
  data() {
    return {
        
    }
  },
  components:{commonAside,commonHeader,commonTag},
}
</script>

<style lang="less" scoped>
html,body{
  height: 100%;
}
.el-header{
  height: 100%;
}
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>

