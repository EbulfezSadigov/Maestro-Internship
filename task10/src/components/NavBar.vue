<template>
  <div>
    <div id="nav" class="max-w-full w-[1300px] mx-auto py-5 flex justify-between items-center">
      <div class="w-1/2 flex gap-12 items-center">
        <img src="../assets/images/logo.png" alt="">
        <ul class="flex gap-12 pb-4 whitespace-nowrap">
          <li>My Orders</li>
          <li>Services</li>
          <li>Help</li>
        </ul>
      </div>
      <div class="flex items-center gap-10 pb-4 whitespace-nowrap">
        <button class="uppercase bg-[#5920BC] px-6 py-1 text-white rounded-md"><i class="bi bi-lightning-charge-fill mr-3"></i>urgent</button>
        <div class="flex gap-2 items-center">
          <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
          <p class="">Elon Musk</p>
        </div>
        <i class="bi bi-flag-fill"></i>
      </div>
    </div>
    <div class="w-full h-[275px] bg-[#EAE6FF] relative">
      <img class="absolute bottom-[0px] left-[0px]" src="../assets/images/ellipse.png" alt="">
      <img class="absolute bottom-[0px] right-[0px] ellipse" src="../assets/images/ellipse.png" alt="">
      <div class="w-[46px] h-[46px] bg-[#FFAA45] rounded-full absolute right-20 bottom-20"></div>
      <p class="absolute text-3xl font-semibold bottom-6 left-[140px]">All Pros</p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.ellipse{
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>
