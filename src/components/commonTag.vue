<template>
    <div class="tabs">
  <el-tag
   v-for="(item,index) in tags"
  :key="item.path"
  :closable="item.name !== 'home'"
   :effect="$route.name === item.name ? 'dark':'plain'"
   @click="clickMenu(item)"
   @close="handleClose(item,index)"
   size="small">
  {{item.label}}
</el-tag>
</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
  name:'myCommontag',
  data(){
    return{
      
    }
  },
  computed:{
    ...mapState({
        tags:state=>state.tab.tabsList
    })
  },
  methods:{
    ...mapMutations(['closeTag']),
    clickMenu(item){
        this.$router.push({name:item.name})
    },
    // 点击删除，删除的是tabslist里面的数据
    handleClose(item,index){
        // 调用store中的mutation
        this.closeTag(item)
        const length = this.tags.length
        // 删除之后的跳转逻辑
        // 删除的是高亮之前的tab
        if(item.name!==this.$route.name){
            return
        }
        // 表示的是删除的最后一项
        // 删除的是当前tab （后面没有tab）   
        if(index === length){
            this.$router.push({
                name:this.tags[index-1].name
            })
            // 删除的是高亮（之后还有tab）
        }else{
            this.$router.push({
                name:this.tags[index].name
                
            })
      
        }
    }
  },
}
</script>

<style lang="less" scoped>
.tabs { 
    padding:20px;
    .el-tag{
        margin-right: 15px;
        cursor:pointer
    }
}
</style>