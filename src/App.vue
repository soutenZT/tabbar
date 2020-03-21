<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="./assets/img/home.svg" alt="" slot="item-icon">
        <img src="./assets/img/home-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/catgory">
         <img src="./assets/img/catgory.svg" alt="" slot="item-icon">
         <img src="./assets/img/catgory-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
         <img src="./assets/img/cat.svg" alt="" slot="item-icon">
         <img src="./assets/img/cat-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/mine">
        <img src="./assets/img/mine.svg" alt="" slot="item-icon">
        <img src="./assets/img/mine-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
      <!-- <div class="tab-bar-item">
        <img src="../../assets/img/home.svg" alt="">
        <div>首页</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/catgory.svg" alt="">
        <div>分类</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/cat.svg" alt="">
        <div>购物车</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/mine.svg" alt="">
        <div>我的</div>
      </div> -->
    </tab-bar>

    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar';
import TabBarItem from './components/tabbar/TabBarItem';
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem,
  }
}
</script>

<style>
 /*在style里面使用@import导入模块   相当于在js中require()*/
  @import './assets/css/bass.css';  
</style>
