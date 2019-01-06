<template>
  <div id="app">
    <!-- 头部固定栏 -->
    <mt-header fixed title="vue-冰冰"></mt-header>


    <!-- 中间内容区域 -->
    <transition name="cont">
      <router-view></router-view>
    </transition>

    <!-- 底部导航栏 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/news">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/prolife">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

  </div>
</template>

<style>
#app{
  padding-top: 40px;
  overflow-x: hidden;
 
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

</style>
