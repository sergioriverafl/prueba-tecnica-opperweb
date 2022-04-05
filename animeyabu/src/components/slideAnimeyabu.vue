<template>
    <div class="hidden md:flex h-screen bg-terciary p-16 sticky top-0">

        <div class="hidden md:flex flex-col items-center justify-around gap-16 w-full ">

            <div class="flex items-center justify-center">
                <div class="rounded-full w-80 h-80 bg-secondary" >
                    <img v-if="imageSelected === 1" src="./../assets/img/img-slide-1.png" alt="" class="h-96 pt-10">
                    <img v-if="imageSelected === 2" src="./../assets/img/img-slide-2.png" alt="" class="h-96 pt-10">
                    <img v-if="imageSelected === 3" src="./../assets/img/img-slide-3.png" alt="" class="h-96 pt-10">
                </div>

            </div>

            <div class="flex flex-col gap-8 items-center">
                <h1 class="font-bold text-5xl text-white">anime<span class="text-primary">yabu.</span></h1>
                <p class="text-white text-center w-80">
                    Ver anime en línea en HD, subtitulado o doblado,
                    en tu celular o computadora.
                    ¡Animeyabu, tu portal de anime en línea! 
                </p>
            </div>

            <div class="flex gap-3">
                <div :class="[ imageSelected === 1 ? 'bg-white' : 'bg-gray-400']" class="rounded-lg w-8 h-2 cursor-pointer" @click="imageSelected = 1"></div>
                <div :class="[ imageSelected === 2 ? 'bg-white' : 'bg-gray-400']" class="rounded-lg w-8 h-2 cursor-pointer" @click="imageSelected = 2"></div>
                <div :class="[ imageSelected === 3 ? 'bg-white' : 'bg-gray-400']" class="rounded-lg w-8 h-2 cursor-pointer" @click="imageSelected = 3"></div>
            </div>

        </div>

    </div>
</template>

<script>

    export default {
        name: 'slideAnimeyabu',
        data(){
            return{
                imageSelected: 1,
            }
        },
        mounted: function(){
        },
        methods:{
        }
    }
</script>