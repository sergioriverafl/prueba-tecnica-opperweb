<template>
  <div class="flex flex-col">

                    <h1 class="text-white text-5xl my-14">Hola, <span class="font-bold">Pedro Perez</span></h1>


                    <h1 class="text-white mb-5">Selecciona una opción:</h1>


                    <div class="flex flex-col gap-y-6">

                        <router-link to="lista-categorias" class="flex items-center justify-center bg-secondary rounded-md font-semibold text-terciary px-4 py-1 w-64 h-14">
                            Ver todas las categorías
                        </router-link>

                        <router-link to="crear-categoria" class="flex items-center justify-center bg-secondary rounded-md font-semibold text-terciary px-4 py-1 w-64 h-14">
                            Crear categorías
                        </router-link>

                        <button class="flex items-center justify-center bg-secondary rounded-md font-semibold text-terciary px-4 py-1 w-64 h-14">
                            Cerrar sesión
                        </button>                    

                    </div>

                </div> 
</template>

<script>


import HomeMenuGlobal from '@/components/HomeMenuGlobal.vue';

export default {
  name: 'Home',
  components: {
    HomeMenuGlobal  
  }
}
</script>
