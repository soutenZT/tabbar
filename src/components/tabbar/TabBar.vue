<template>
  <div>
    <div id="tab-bar">
     <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -1px 1px rgb(100,100,100，.1);
  }
</style>
