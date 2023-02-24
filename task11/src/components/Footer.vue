<template>
<div>
    <div>
        <div class="w-full h-[250px] bg-[#EAE6FF] relative">
            <img class="absolute top-[0px] left-[0px] ellipse1" src="../assets/images/ellipse.png" alt="">
            <img class="absolute top-[0px] right-[0px] ellipse2" src="../assets/images/ellipse.png" alt="">
            <div class="w-[46px] h-[46px] bg-[#FFAA45] rounded-full absolute left-20 top-20"></div>
            <img src="../assets/images/iphone.png" class="absolute left-44 bottom-0 hidden lg:block" alt="">
            <div class="absolute w-[420px] top-[42px] right-[120px]">
                <h2 class="text-3xl font-semibold mb-3">Download the izzi mobile app</h2>
                <p class=" text-sm text-[#222222]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took</p>
                <div class="flex gap-[29px] mt-[30px]">
                    <a href="#"><img src="../assets/images/appstore.png" alt=""></a>
                    <a href="#"><img src="../assets/images/googleplay.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
  <div class="max-w-full w-[1300px] mx-auto">
    <footer class="w-full h-[392px]">
        <div class="flex flex-col gap-10 md:gap-0 md:flex-row justify-between px-6 py-16">
            <div class="w-[200px]">
                <img src="../assets/images/logo.png" alt="">
                <p class="opacity-80">izzi is the major platform in Azerbaijan to request help from taskers</p>
            </div>
            <div>
                <h4 class="mb-3">izzi Ltd.</h4>
                <ul class="flex flex-col gap-3 opacity-80">
                    <li>Location address</li>
                    <li>info@izzi.com</li>
                    <li>+994 (50) XX XXXX</li>
                    <li>NR21465161</li>
                </ul>
            </div>
            <div>
                <h4 class="mb-3">Book a service</h4>
                <ul class="flex flex-col gap-3 opacity-80">
                    <li>Browse Services</li>
                    <li>Find Taskers</li>
                    <li>How does it work?</li>
                </ul>
            </div>
            <div>
                <h4 class="mb-3">Extra links</h4>
                <ul class="flex flex-col gap-3 opacity-80">
                    <li>About us</li>
                    <li>FAQ</li>
                    <li>Contact us</li>
                    <li>Become a Task</li>
                </ul>
            </div>
        </div>
        <hr class="mb-8">
        <div class="flex justify-between">
            <div class="whitespace-nowrap">
                <i class="bi bi-facebook opacity-70 text-xl mr-10"></i>
                <i class="bi bi-twitter opacity-70 text-xl mr-10"></i>
                <i class="bi bi-instagram opacity-70 text-xl mr-10"></i>
                <i class="bi bi-youtube opacity-70 text-xl mr-10"></i>
            </div>
            <div>
                <span class="mr-6">izzi Ltd. 2021</span>
                <span class="mr-6">Privacy Policy</span>
                <span class="mr-6">Terms and conditions</span>
            </div>
        </div>
    </footer>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.ellipse1{
  transform: matrix(1, 0, 0, -1, 0, 0);
}
.ellipse2{
  transform: matrix(-1, 0, 0, -1, 0, 0);
}
</style>
