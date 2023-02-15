<template>
  <div class="max-w-full w-[1300px] mx-auto py-5 flex gap-20">
    <div class="w-[16%]">
      <p class="font-extrabold mb-4 text-xl">Filters</p>
      <div class="flex flex-col gap-3 mb-4">
        <div><label for=""><input class="mr-2 accent-[#5920BC]" type="radio" @change="filtered" v-model='filter' value='All' checked />All</label></div>
        <div><label for=""><input class="mr-2 accent-[#5920BC]" type="radio" @change="filtered" v-model='filter' value='supervisor' />Supervisors</label></div>
        <div><label for=""><input class="mr-2 accent-[#5920BC]" type="radio" @change="filtered" v-model='filter' value='eliteTasker' />EliteTasker</label></div>
        <div><label for=""><input class="mr-2 accent-[#5920BC]" type="radio" @change="filtered" v-model='filter' value='Newbie' />NewBie</label></div>
      </div>
      <div class="flex flex-col">
      <p class="font-extrabold mb-4 text-xl">Sorting</p>
      <span class="mb-2">By Rating</span>
      <select @change="sortingAverageRating" v-model='averageRatings' name="rating" id="rating" class="border border-[#C7C9CB] focus:outline focus:outline-[#C7C9CB] py-1 px-3 rounded-md">
        <option value="Descending">Descending</option>
        <option value="Ascending">Ascending</option>
      </select>
      <span class="mt-4 mb-2">By Tasks Count</span>
       <select @change="sortingTaskCount" v-model='tasksCount' name="rating" id="rating" class="border border-[#C7C9CB] focus:outline focus:outline-[#C7C9CB] py-1 px-3 rounded-md">
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
      </div>
    </div>
    <div class="h-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-16">
            <div v-for="tasker in taskers" :key="tasker.id" class="w-[406px] h-auto rounded-md border border-[rgba(199, 201, 203, 0.5)] p-7">
                <div class="flex items-center">
                    <div class="mr-3">
                        <img class="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
                    </div>
                    <div>
                        <div>
                            <p>{{tasker.user.name+' '+tasker.user.surname}}</p>
                            <i v-for="i in tasker.averageRating" :key="i" class="bi bi-star-fill text-yellow-400 text-xs mr-1">{{averageRating}}</i>
                            <span class="text-[#FFC107] text-xs mr-2">{{tasker.averageRating}}</span>
                            <span class="text-[#979797] text-xs">(24)</span>
                        </div>
                    </div>                    
                </div>
                <div class="mt-4">
                <i class="bi bi-check-circle-fill text-[#5920BC] mr-2"></i>
                <span class="text-sm mr-10">{{tasker.completedTasks}} Tasks</span>
                <i class="bi bi-collection-play text-[#5920BC] mr-2"></i>
                <span class="text-sm">{{tasker.supervisor?"Supervisor":tasker.eliteTasker?'EliteTasker':"Newbie"}}</span>
                <p class="text-sm my-7 opacity-70">{{tasker.bio}}</p>
                </div>
                <div class="flex justify-between items-center">
                    <div><span class="text-[#5920BC] opacity-80">view profile</span></div>
                    <div class="text-[#5920BC]">
                        <span class="mr-5">$35</span>
                        <button class="px-3 py-1 border rounded-md border-gray-400">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import {taskers} from '../../src/data'
export default {
    data(){
        return{
            taskers,
            tasksCount:'Ascending',
            averageRatings:'Descending',
            filter:''
        }
    },
    computed:{
        sortingTaskCount(){
            this.tasksCount=='Ascending'?this.taskers.sort((a,b)=>a.completedTasks-b.completedTasks):this.taskers.sort((a,b)=>b.completedTasks-a.completedTasks)
        },
        sortingAverageRating(){
            this.averageRatings=='Ascending'?this.taskers.sort((a,b)=>a.averageRating-b.averageRating):this.taskers.sort((a,b)=>b.averageRating-a.averageRating)
        },
        filtered(){
            if(this.filter=='supervisor'){
                this.taskers=taskers;
                this.taskers = this.taskers.filter(item=>{
                    return item.supervisor===true&&item.eliteTasker == false
                })
            }
            else if(this.filter=='eliteTasker'){
                this.taskers=taskers;
                this.taskers = this.taskers.filter(item=>{
                    return item.eliteTasker == true && item.supervisor == false;
                })
            }
            else if(this.filter=='Newbie'){
                this.taskers=taskers;
                this.taskers = this.taskers.filter(item=>{
                    return item.eliteTasker == false && item.supervisor == false;
                })
            }
            else{
                this.taskers=taskers;
            }
        }
    }
};
</script>

<style scoped>
select{
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
}
</style>