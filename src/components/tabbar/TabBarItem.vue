<template>
   <div class="tab-bar-item" @click="itemClick">
       <!-- 这里使用div包装slot是为了能设置属性，如果没有div，外层传进来的标签直接替换slot，
                所以写在slot里面的所有属性就没有用了
        -->
       <div v-if="!isActive"><slot name="item-icon"></slot></div>
       <div v-else> <slot name="item-icon-active"></slot></div>
       <div :style="activeText"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor: {
      type:String,
      default:"red"
    }
  },
  data() {
      return {
          // isActive: false,
      }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeText(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-bar-item {
    flex:1;  
    text-align: center;
    height: 49px;
    font-size: 10px;
  }
  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 5px;
    /* 消除图片下默认自带的几个像素 */
    vertical-align: middle; 
  }
</style>
