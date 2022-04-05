<template>
  <div class="h-screen flex overflow-hidden">

    <div class="print-none bg-terciary w-72 min-h-screen overflow-y-auto block shadow relative z-1" v-if="sidemenu">

      <router-link to="/app/inicio" class="flex items-center px-6 py-3 h-16 gap-2 mb-8">
        <img src="@/assets/img/animeyabu.png" alt="" class="h-10">
        <h1 class="font-bold text-2xl text-white">anime<span class="text-primary">yabu</span></h1>
      </router-link>

      <div class="px-4 py-2">
        <div class="flex flex-col gap-5 justify-between">

          <div class="text-white px-2">
            <h2 class="mb-1 py-2 rounded-lg flex items-center font-bold hover:text-gray-50 hover:bg-my-secondary"
              aria-current="page">
              Categorías
            </h2>

            <ul class="flex flex-col gap-1">
              <li class="text-sm appearance hover:underline">
                <router-link to="/app/lista-categorias">Ver todas</router-link>
              </li>
              <li class="text-sm appearance hover:underline">
                <router-link to="/app/crear-categoria">Crear</router-link>
              </li>
            </ul>

          </div>

          <div class="text-white px-2">
            <button @click="closeSession" class="mb-1 py-2 rounded-lg flex items-center font-bold hover:text-gray-50 hover:bg-my-secondary" aria-current="page">
              Cerrar sesión
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="flex-1 flex-col relative z-0 overflow-y-auto bg-black">
      <div class="print-none px-4 md:px-4 py-2 h-16 flex justify-between items-center  left-0 z-30">
        <div class="flex items-center">
          <div class="pr-2 text-gray-700 hover:text-color-text-ui cursor-pointer block"
            @click="sidemenu = !sidemenu">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>


      <div class="container mx-auto px-4">
        <router-view />
      </div>

    </div>
  </div>



</template>

<script>




  export default {
    name: 'AppHome',
    components: {
      
    },
    data() {
      return {
        sidemenu: true,

      }
    },
    mounted: function () {

    },
    methods: {
      closeSession: function(){
        this.$router.push("/loguin/");
      },
    }
  }
</script>