<template>
  <div id="app">
    <!-- 头部固定栏 -->
    <mt-header class="app-top" fixed title="vue-冰冰"></mt-header>

    <!-- 中间内容区域 -->
    <transition name="cont">
      <router-view></router-view>
    </transition>

    <!-- 底部导航栏 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-control-item-a" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-control-item-a" to="/news">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-control-item-a" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-control-item-a" to="/prolife">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss">
body{
  // background:#fff !important;
}

#app{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .app-top {
    z-index: 999;
  }
  .cont-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .cont-leave-to{
    transform: translateX(-100%);
  }
  .cont-enter-active,
  .cont-leave-active{
    transition: all 0.6s ease;
  }
  .cont-leave-active{
    position: absolute;
  }
}

.mui-bar-tab .mui-control-item-a {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-control-item-a .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-control-item-a {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-control-item-a .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab .mui-control-item-a {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-control-item-a.mui-active{
  color: #007AFF;
}
</style>
