<template>
  <div class="sidebar">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-submenu class="menuItem"index="1">
        <template slot="title">导航一</template>
        <el-menu-item-group class="menuItem" title="分组一">
          <el-menu-item class="menuItem" index="1-1">选项1</el-menu-item>
          <el-menu-item class="menuItem" index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group class="menuItem" title="分组2">
          <el-menu-item class="menuItem" index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu class="menuItem" index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item class="menuItem" index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item class="menuItem" index="2">导航二</el-menu-item>
      <el-menu-item class="menuItem" index="3">导航三</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default{
    name: 'sidebar',
    data(){
      return{

      };
    },
    methods:{

    }
  }
</script>
<style>

</style>
