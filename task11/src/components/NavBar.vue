<template>
    <div id="nav" class="max-w-full mx-auto py-5 w-[90%] grid grid-cols-3 justify-center grid-rows-1 md:flex md:justify-between md:items-center">
      <div class="flex items-center gap-10 col-start-2 relative">
        <img src="../assets/images/logo.png" alt="logo" class="mx-auto">
        <ul class="hidden left-[-200px] top-[100px] absolute md:static bg-black text-white md:text-black md:bg-white md:flex gap-10 pb-5">
          <li>My Orders</li>
          <li>Help</li>
          <li>Services</li>
        </ul>
      </div>
      <div class="col-start-1 row-start-1 pt-3">
        <div class="w-8 mb-[6px] h-[3px] rounded-md cursor-pointer bg-gray-600 block md:hidden"></div>
        <div class="w-[23px] h-[3px] rounded-md cursor-pointer bg-gray-600 block md:hidden"></div>
      </div>
      <div class="relative">
          <div class="whitespace-nowrap md:flex gap-10 items-center pb-5 hidden">
          <i class="bi bi-search"></i>
          <button class="text-sm">Sign in</button>
          <button class="px-5 py-2 bg-[#5920BC] text-white rounded text-sm"><i class="bi bi-lock mr-2"></i>Sign up</button>
          </div>
          <img class="w-14 h-14 block md:hidden text-left rounded-full object-cover absolute right-0" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
      </div>
    </div>
</template>

<script>
export default{
  data(){
    return{
      menu:true
    }
  }
}
</script>

<style scoped>
.ellipse{
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>
