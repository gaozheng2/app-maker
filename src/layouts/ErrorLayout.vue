<!--  【布局】/【404页面】  -->
<template>
  <div class="fullscreen text-primary bg-body-bg dark:!text-title">
    <div class="absolute-center flex flex-col justify-center items-center">
      
      <div class="-mt-10 font-bold text-[15vw] tracking-widest text-primary">
        404
      </div>
      <img class="-mt-48 w-96" src="@/assets/images/error/404.svg" alt="404"/>
      
      <div class="text-second mt-10 text-3xl opacity-50">
        You are lost in space ...
      </div>
      
      <div class="my-8 flex flex-col items-center">
        <EIcon name="rocket" class="mb-3 text-5xl text-primary cursor-pointer hover:brightness-110"
               @click="$router.push('/')"/>
        <el-button type="primary" @click="$router.push('/')" class="!font-bold">返回主页</el-button>
      </div>
    </div>
  </div>
</template>
