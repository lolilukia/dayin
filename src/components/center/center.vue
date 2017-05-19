<template>
  <div class="center">
    <el-row class="tac">
      <el-col :span="3" :offset="2">
        <sidebar></sidebar>
      </el-col>
      <el-col :span="16">
        <information></information>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import sidebar from './sidebar/sidebar.vue';
  import information from './information/information.vue';
  export default{
    name: 'center',
    components: {
      sidebar: sidebar,
      information: information
    },
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
