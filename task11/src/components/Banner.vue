<template>
    <div class="max-w-full mx-auto py-5 w-[90%]">
        <div class="md:hidden">
            <i class="bi bi-hand-thumbs-up-fill text-xl text-yellow-400 mr-[6px]"></i>
            <span class="text-[#22222] opacity-70">All Services</span>
        </div>
        <div class="mt-[17px]">
            <h1 class="text-[30px] font-semibold">Find your best</h1>
            <p class=" text-sm opacity-70 md:hidden">Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer.</p>
        </div>
        <div class="hidden md:grid grid-cols-1  md:grid-cols-3 mt-8 justify-center items-center gap-y-6 md:gap-y-4 md:gap-x-4">
            <div v-for="(item,index) in data" :key='index'>
                <div class="w-full h-full relative">
                    <div class="text-xl w-full h-full text-center">
                        <img class="block md:hidden max-w-full w-full h-auto object-cover" src="../assets/images/smallimage3.png" alt="">
                        <img class="hidden md:block max-w-full w-full h-auto object-cover" src="../assets/images/image2.png" alt="">
                    </div>
                    <div class="w-[85%] cursor-pointer md:cursor-default h-[70%] py-4 px-6 text-xl bg-white rounded-md left-8 bottom-7 sm:left-12 sm:bottom-[36px] md:left-4 md:bottom-3 lg:left-4 lg:bottom-3 absolute lg:w-[270px] lg:h-[80px] md:w-[220px] md:h-[80px] effect">
                        <h2 class="mb-[10px] md:mb-0">{{item.title}}</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                        <span class="opacity-75 text-base">Starts from 10$/h</span>
                    </div>
                </div>
                <div class="bg-white py-6 hidden md:block">
                    <ul class="flex flex-col gap-8 px-8 text-sm">
                        <li>Gather all your cleaning tools</li>
                        <li>Clear the clutter</li>
                        <li>Dust and vacuum</li>
                        <li>Focus on tubs, sinks and toilets</li>
                        <li>Focus on tubs, sinks and toilets</li>
                        <li>Sweep, then mop</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="grid md:hidden grid-cols-1 md:grid-cols-3 mt-8 justify-center items-center gap-y-6 md:gap-y-4 md:gap-x-4">
            <div v-for="(item,index) in data" :key='index'>
                <div class="w-full h-full relative">
                    <div class="text-xl w-full h-full text-center">
                        <img class="block md:hidden max-w-full w-full h-auto object-cover" src="../assets/images/smallimage3.png" alt="">
                        <img class="hidden md:block max-w-full w-full h-auto object-cover" src="../assets/images/image2.png" alt="">
                    </div>
                    <div @click="closed($event)" class="w-[85%] cursor-pointer md:cursor-default h-[70%] py-4 px-6 text-xl bg-white rounded-md left-8 bottom-7 sm:left-12 sm:bottom-[36px] md:left-4 md:bottom-3 lg:left-4 lg:bottom-3 absolute lg:w-[270px] lg:h-[80px] md:w-[220px] md:h-[80px] effect">
                        <h2 class="mb-[10px] md:mb-0 pointer-events-none">{{item.title}}</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-2 pointer-events-none">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                        <span class="opacity-75 text-base pointer-events-none">Starts from 10$/h</span>
                    </div>
                </div>
                <div class="bg-white py-6 hidden z-50">
                    <ul class="flex flex-col gap-8 px-8 text-sm">
                        <li>Gather all your cleaning tools</li>
                        <li>Clear the clutter</li>
                        <li>Dust and vacuum</li>
                        <li>Focus on tubs, sinks and toilets</li>
                        <li>Focus on tubs, sinks and toilets</li>
                        <li>Sweep, then mop</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:[
                {title:'Babysitter',src:'smallimage1.png'},
                {title:'Beauty',src:'../assets/images/smallimage2.png'},
                {title:'Cleaning',src:'../assets/images/smallimage3.png'},
                {title:'Babysitter',src:'../assets/images/smallimage1.png'},
                {title:'Beauty',src:'../assets/images/smallimage2.png'},
                {title:'Cleaning',src:'../assets/images/smallimage3.png'}
            ],
            close:true
        }
    },
    methods:{
        closed(event){
            // this.close=!this.close
            if(event.target.parentElement.parentElement.lastElementChild.style.display=='block'){
                event.target.parentElement.parentElement.lastElementChild.style.display='none'
            }
            else{
                event.target.parentElement.parentElement.lastElementChild.style.display='block'
            }
        }
    }
}
</script>

<style>

</style>