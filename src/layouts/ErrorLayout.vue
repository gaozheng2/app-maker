<!--  【布局】/【404页面】  -->
<script setup lang="ts">
import {onDeactivated, ref} from 'vue'

// 是否悬浮在火箭或按钮上
const isHover = ref(false)

// 切换页面后，重置悬浮状态
onDeactivated(() => {
  isHover.value = false
})
</script>

<template>
  <div class="center flex flex-col justify-center items-center text-primary bg-body-bg select-none
              dark:!text-title">
    
    <div class="-mt-10 font-bold text-[15vw] tracking-widest text-primary">
      404
    </div>
    <img class="-mt-48 w-96" src="@/assets/images/error/404.svg" alt="404"/>
    
    <div class="text-second mt-10 text-3xl opacity-50">
      You are lost in space ...
    </div>
    
    <div class="my-8 flex flex-col items-center">
      <div class="group cursor-pointer flex flex-col items-center"
           @click="$router.push('/')">
        
        <!--  火箭图标  -->
        <EIcon name="rocket" size="48px"
               class="peer mb-3 text-primary hover:brightness-110 hover:-translate-y-1 group-hover:-translate-y-1 duration-300"
               :class="{ '-translate-y-1': isHover }"
        />
        
        <!--  火箭的火焰效果  -->
        <div class="group-hover:visible container invisible"
             :class="{ '!visible': isHover }">
          <div class="red flame"></div>
          <div class="orange flame"></div>
          <div class="yellow flame"></div>
          <div class="white flame"></div>
        </div>
      </div>
      
      <el-button type="primary"
                 class="relative -top-6 !font-bold"
                 @click="$router.push('/')"
                 @mouseenter="isHover = true"
                 @mouseleave="isHover = false"
      >
        返回主页
      </el-button>
    
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  top: -32px;
  margin: auto;
  width: 60px;
  height: 40px;
  transform-origin: center bottom;
  animation-name: flicker;
  animation-duration: 3ms;
  animation-delay: 200ms;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.flame {
  top: 0;
  position: absolute;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  transform: rotate(135deg) scale(.3, .3);
}

.yellow {
  left: 15px;
  top: 2px;
  width: 30px;
  height: 30px;
  background: gold;
  box-shadow: 0px 0px 9px 4px gold;
}

.orange {
  left: 10px;
  top: 2px;
  width: 40px;
  height: 40px;
  background: orange;
  box-shadow: 0px 0px 9px 4px orange;
}

.red {
  left: 5px;
  width: 50px;
  height: 50px;
  background: OrangeRed;
  box-shadow: 0px 0px 5px 4px OrangeRed;
}

.white {
  left: 15px;
  top: 2px;
  width: 30px;
  height: 30px;
  background: white;
  box-shadow: 0px 0px 9px 4px white;
}

.circle {
  border-radius: 50%;
  position: absolute;
}

@keyframes flicker {
  0% {
    transform: rotate(-1deg);
  }
  
  20% {
    transform: rotate(1deg);
  }
  
  40% {
    transform: rotate(-1deg);
  }
  
  60% {
    transform: rotate(1deg) scaleY(1.04);
  }
  
  80% {
    transform: rotate(-2deg) scaleY(0.92);
  }
  
  100% {
    transform: rotate(1deg);
  }
}
</style>
