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

                    <div class="flex flex-col gap-3 items-center justify-center">

                        <img src="@/assets/img/welcome.png" alt="" class="h-24">


                        <h2 class="font-bold text-xl text-white">ひさしぶり!</h2>

                        <h5 class="italic font-semibol text-white">¡Hola, te hemos extrañado!</h5>

                    </div>

                    <div>
                        <form action="" autocomplete="off" class="flex flex-col gap-4 w-full md:w-80">
                            <div class="flex flex-col">
                                <label for="user" class="text-white text-sm">Email</label>
                                <input type="email" id="user" placeholder="usuario@" v-model="email"
                                    class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>
                                <span class="text-right text-error">Email inválido</span>
                            </div>

                            <div class="">
                                <label for="password" class="text-white text-sm">Contraseña</label>
                                <input :type="typePassword" id="password" placeholder="• • • • • • •" v-model="password"
                                    class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                                    required>

                                <div @click="viewPassword()" class="min-mt-36 mr-2 text-gray-50 cursor-pointer z-10 relative float-right">

                                    <svg v-if="typePassword === 'password'" class="h-7 w-7" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="eye fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g>
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path></g></svg>

                                    <svg v-else  class="h-7 w-7" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="eye slash fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g>
                                        <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z"></path>
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z"></path></g></svg>

                                </div>
                                
                                <div class="flex justify-end">
                                    <a href="#" class="text-right text-secondary mt-1">¿Olvido su contraseña?</a>
                                </div>
                            </div>

                            <button type="button" @click="loguinUser"
                                class="flex items-center justify-center text-purple-900 bg-secondary w-full h-14 px-4 rounded-md border-2 border-white font-semibold">
                                Acceder
                            </button>
                        </form>
                    </div>

                    <socialMedia />

                    <div class="w-full md:w-80">
                        <h6 class="text-white text-center">Quieres registrarte? <router-link to="/registro" class="text-secondary">Registrate</router-link></h6>
                    </div>
                </div>
            </div>


            <slideAnimeyabu />
            
        </div>
    </div>

</template>

<script>

import axios from 'axios';
import CONSTANS from '@/costants'
const sha256 = require ("js-sha256").sha256
import Swal from 'sweetalert2'
import slideAnimeyabu from '@/components/slideAnimeyabu'
import socialMedia from '@/components/socialMedia.vue'
import headerAnimeyabu from '@/components/headerAnimeyabu.vue'






  export default {
    name: 'Login',
    components: {
        slideAnimeyabu,
        socialMedia,
        headerAnimeyabu
    },
    data(){
        return{
            email: '',
            password: '',
            typePassword: 'password'
        }
    }, 
    mounted: function(){

    }, 
    methods:{
        viewPassword: function(){
            this.typePassword = this.typePassword == 'password' ? 'text' : 'password'
        },

        loguinUser: function () {

            let utcTimeStamp = new Date().toISOString();

            let signature = sha256(CONSTANS.PRIVATE_KEY +','+ CONSTANS.PUBLIC_KEY +','+ utcTimeStamp);    

            axios.post(`${CONSTANS.API_ROUTE}/${CONSTANS.API_VERSION}/login`, {                         
                email: this.email,
                password: this.password,
                apiKey: CONSTANS.API_KEY,
                utcTimeStamp: utcTimeStamp,
                signature: signature,
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((response) => {     
                
                response.data.message && Swal.fire({ title: response.data.message, icon: 'error', confirmButtonText: 'Salir' })

            }).catch(()=>{

                Swal.fire({ title: 'Error', icon: 'error', text: error, confirmButtonText: 'Salir' })
                
            })
        },
    }
  }
</script>