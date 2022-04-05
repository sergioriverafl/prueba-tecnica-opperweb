<template>
<div class="bg-black">
        <div class="grid grid-cols-1 md:grid-cols-2">

            <div class="flex flex-col h-min-screen px-4">

                <div class="flex gap-3 items-center pl-6 pt-5">
                    <img src="@/assets/img/animeyabu.png" alt="" class="h-10">
                    <h1 class="font-bold text-2xl text-white">anime<span class="text-primary">yabu</span></h1>
                </div>

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

                    <div class="w-full md:w-80">
                        <div class="flex flex-wrap gap-3 items-center justify-center">
                            <div class="w-8 md:w-12 h-1 bg-white border border-white"></div>
                            <h6 class="text-white text-center">Registrate también con</h6>
                            <div class="w-8 md:w-12 h-1 bg-white border border-white"></div>
                        </div>
                        <div class="flex items-center justify-around">

                            <div class="flex gap-4 items-center mt-5">

                                <div class="bg-silver border-2 border-white rounded-lg p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                                            fill="rgba(255,255,255,1)" />
                                    </svg>
                                </div>




                                <div class="bg-silver border-2 border-white rounded-lg p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                                            fill="rgba(255,255,255,1)" />
                                    </svg>
                                </div>

                                <div class="bg-silver border-2 border-white rounded-lg p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                                            fill="rgba(255,255,255,1)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

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

  export default {
    name: 'Register',
    components: {
        slideAnimeyabu  
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