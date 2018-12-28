<template>
  <div id="app">
	<top v-if="$store.state.isTopShow"></top>
    <router-view></router-view>    
    <bottom v-if="$store.state.isBottomShow"></bottom>  
</div>
</template>

<script>
	import top from "./components/top"
	import bottom from "./components/bottom"
export default {
	components:{
      top,
      bottom
    }
}

</script>

<style>
*{
    margin: 0px;
    padding: 0px;
  }

  html,body{
    height: 100%;
    overflow: auto
  }

  li{
    list-style: none;
  }


</style>
