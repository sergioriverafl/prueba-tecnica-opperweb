<template>
<div class="bg-black">
        <div class="grid grid-cols-1 md:grid-cols-2">

            <div class="flex flex-col h-min-screen px-4">

                <headerAnimeyabu />

                <div class="flex items-start pl-6 pt-5">
                    <a href="javascript:history.back()">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75403 1.87703L3.75403 26.2791C3.75403 27.3157 2.71742 28.1561 1.877 28.1561C0.840393 28.1561 -2.62392e-05 27.3157 -2.61939e-05 26.2791L-2.51272e-05 1.87703C-2.50819e-05 0.840418 1.03658 -1.18783e-07 1.877 -8.20474e-08C2.91361 -3.67358e-08 3.75403 0.840418 3.75403 1.87703V1.87703Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3661 8.88789C17.1454 8.1064 17.1448 6.84137 16.3663 6.06069C15.5873 5.2798 14.3252 5.28 13.5465 6.06069L6.48982 13.135C5.97013 13.6558 5.97053 14.5008 6.48982 15.0215L13.5465 22.0958C14.3258 22.877 15.5875 22.8764 16.3663 22.0958C17.145 21.3149 17.1448 20.0494 16.3661 19.2685L13.1637 16.0589L26.0071 16.0589C27.1069 16.0589 28 15.1639 28 14.0597C28 12.9555 27.1077 12.0607 26.0071 12.0607L13.2004 12.0607L16.3661 8.88789Z" fill="white"/>
                        </svg>
                    </a>
                </div>

                <div class="flex flex-col gap-8 items-center justify-center h-full py-8">

                    <div class="flex flex-row gap-3 items-end justify-center">

                        <img src="@/assets/img/yabu-register.png" alt="" class="h-24">

                        <div class="flex flex-col gap-1">
                            <h2 class="font-bold text-xl text-white">ようこそ!</h2>

                            <h5 class="italic font-semibol text-white">¡Hola, te hemos extrañado!</h5>
                        </div>                     

                    </div>

                    <div>
                        <form action="" autocomplete="off" class="flex flex-col gap-4 w-full md:w-80">

                            <div class="flex justify-between items-center text-white">
                                Tipo de persona 
                                <label class="text-sm font-regular">
                                    <input type="radio" required="required" class="mt-1 mr-2" name="type_person" value="natural" v-model="typePerson">
                                    Natural
                                </label>    

                                <label class="text-sm font-regular">
                                    <input type="radio" required="required" class="mt-1 mr-2" name="type_person" value="juridica" v-model="typePerson">
                                    Jurídica
                                </label>  
                            </div> 

                            <div class="flex flex-col" v-if="typePerson == 'natural'">
                                <label for="name" class="text-white text-sm">Nombre</label>
                                <input type="text" id="name" class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>
                            </div>

                            <div class="flex flex-col" v-if="typePerson == 'natural'">
                                <label for="last-name" class="text-white text-sm">Apellido</label>
                                <input type="text" id="last-name" class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>
                            </div>

                            <div class="flex flex-col" v-if="typePerson == 'natural'">
                                <label for="phone" class="text-white text-sm">Teléfono</label>
                                <input type="number" id="phone" class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>
                            </div>

                            <div class="flex flex-col" v-if="typePerson == 'natural'">
                                <label for="number-identification" class="text-white text-sm">Número de identificación</label>
                                <input type="number" id="number-identification" class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>
                            </div>

                            <div class="flex flex-col" v-if="typePerson == 'juridica'">
                                <label for="name" class="text-white text-sm">Razón social</label>
                                <input type="text" id="name" class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>
                            </div>

                            <div class="flex flex-col" v-if="typePerson == 'juridica'">
                                <label for="number-identification" class="text-white text-sm">Nit</label>
                                <input type="number" id="number-identification" class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>
                            </div>

                            

                            <div class="flex flex-col">
                                <label for="user" class="text-white text-sm">Email</label>
                                <input type="email" id="user" placeholder="usuario@yabu.com" class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>
                            </div>

                            <div class="flex flex-col">
                                <label for="password" class="text-white text-sm">Contraseña</label>
                                <input type="password" id="password" placeholder="• • • • • • •"
                                    class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>
                            </div>

                            <div class="flex flex-col">
                                <label for="password-confirm" class="text-white text-sm">Confirmar contraseña</label>
                                <input type="password" id="password-confirm" placeholder="• • • • • • •"
                                    class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>
                            </div>

                            <button type="button"
                                class="flex items-center justify-center text-purple-900 bg-secondary w-full h-14 px-4 rounded-md border-2 border-white font-semibold">
                                Registrar
                            </button>
                        </form>
                    </div>

                   <socialMedia />

                    <div class="w-full md:w-80">
                        <h6 class="text-white text-center">Ya estas registrado? <router-link to="/login" class="text-secondary">Acceder</router-link></h6>
                    </div>
                </div>
            </div>


            <slideAnimeyabu />

        </div>
    </div>
</template>

<script>

import slideAnimeyabu from '@/components/slideAnimeyabu.vue'
import socialMedia from '@/components/socialMedia.vue'
import headerAnimeyabu from '@/components/headerAnimeyabu.vue'


  export default {
    name: 'Register',
    components: {
        slideAnimeyabu,
        socialMedia,
        headerAnimeyabu
        
    },
    data(){
        return{
            typePerson: 'natural'

        }
    }, 
    mounted: function(){

    }, 
    methods:{
    }
  }
</script>