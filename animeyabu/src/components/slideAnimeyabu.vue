<template>
    <div class="hidden md:flex h-screen bg-terciary p-16 sticky top-0">

        <div class="hidden md:flex flex-col items-center justify-around gap-16 w-full ">

            <slideA v-if="imageSelected === 1" />
            <slideB v-if="imageSelected === 2" />
            <slideC v-if="imageSelected === 3" />            

            <div class="flex gap-3">
                <div :class="[ imageSelected === 1 ? 'bg-white' : 'bg-gray-400']" class="rounded-lg w-8 h-2 cursor-pointer" @click="imageSelected = 1"></div>
                <div :class="[ imageSelected === 2 ? 'bg-white' : 'bg-gray-400']" class="rounded-lg w-8 h-2 cursor-pointer" @click="imageSelected = 2"></div>
                <div :class="[ imageSelected === 3 ? 'bg-white' : 'bg-gray-400']" class="rounded-lg w-8 h-2 cursor-pointer" @click="imageSelected = 3"></div>
            </div>

        </div>

    </div>
</template>

<script>

import slideA from "@/components/slides/slideA.vue" 
import slideB from "@/components/slides/slideB" 
import slideC from "@/components/slides/slideC" 

    export default {
        name: 'slideAnimeyabu',
        components:{
            slideA,
            slideB,
            slideC
        },
        data(){
            return{
                imageSelected: 1,
                nIntervId: '',    
            }
        },
        mounted: function(){

            this.changeImage()
        },
        unmounted: function(){

            clearInterval(this.nIntervId)

        },
        methods:{
            changeImage(){
                this.nIntervId = setInterval(this.execSlide, 5000);
            },
            execSlide: function(){

                if( this.imageSelected == 3 ){

                    this.imageSelected = 1;

                } else {

                    this.imageSelected ++;
                }              
            }
        }
    }
</script>