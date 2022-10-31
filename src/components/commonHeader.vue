<template>
  <div class="header-container">
    <div class="l-content">
    <el-button icon="el-icon-menu" style="margin-right:20px" size="mini" @click="handleMenu()"></el-button>
      <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item) in tags" :key="item.path" :to="{ path: item.path }"
      >{{item.label}}</el-breadcrumb-item>
   </el-breadcrumb>
   </div>
   <div class="r-content">
    <el-dropdown @command="handleClick">
  <span class="el-dropdown-link">
    <img class="user" src="../assets/1.png" alt="">
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人中心</el-dropdown-item>
    <el-dropdown-item command="cancel">退出</el-dropdown-item>
  </el-dropdown-menu>
  </el-dropdown>
   </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Cookie from 'js-cookie'
export default {
  data(){
     return{
      
     }
  },
   methods:{
    handleMenu(){
        this.$store.commit('collpaseMenu')
    },
    handleClick(command){
      if(command === 'cancel'){
       // 清除cookie中的token
      Cookie.remove('token')
      // 清除cookie中的menu
      Cookie.remove('menu')

      this.$router.push('/login')
      }
    
    },

   },
   computed:{
    ...mapState({
      // 声明一个变量接收
      tags: state => state.tab.tabsList
    })
   },
   mounted() {
    console.log(this.tags,'tags11111');
   },
}
</script>

<style lang="less" scoped>
  .header-container{
    height: 60px;
    background-color: #333;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text{
     color: #fff;
     padding: 0 20px;
    }
    .r-content{

        .user{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    .l-content{
      display: flex;
      align-items: center;
      /deep/.el-breadcrumb__item{
        .el-breadcrumb__inner{
          font-weight:normal;
          &.is-link{
            color: #666;
          }
        }
        &:last-child{
          .el-breadcrumb__inner.is-link{
            color:#fff
            
          }
        }
        .el-breadcrumb__inner:hover{
          color: #409EFF;
        }
      }
    }
  }
</style>