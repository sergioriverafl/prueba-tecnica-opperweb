<template>
<div x-data="{ sidemenu: true }" class="h-screen flex overflow-hidden">
        <div class="print-none md:hidden ">
            <div
                class="fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300">
            </div>
            <div
                class="fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full transform ease-in-out duration-300 translate-x-0 bg-terciary -translate-x-full">
                <a href="#/inicio" class="flex items-center px-6 py-3 h-16 gap-2">
                    <img src="@/assets/img/animeyabu.png" alt="" class="h-10">
                    <h1 class="font-bold text-2xl text-white">anime<span class="text-primary">yabu</span></h1>
                </a>
                <div class="px-4 py-2 flex-1 h-0 overflow-y-auto">
                    <ul class="flex flex-col justify-between">
                        <div>
                            <li><a href="#/"
                                    class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-white hover:text-gray-50 hover:bg-my-secondary"
                                    aria-current="page"><svg xmlns="http://www.w3.org/2000/svg"
                                        class="mr-4 h-5 w-5 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                        </path>
                                    </svg> Inicio </a></li>
                            <li><a href="#/entradas-de-cafe-inicio/"
                                    class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-white hover:text-gray-50 hover:bg-my-secondary"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="mr-4 h-5 w-5 md:h-7 md:w-7"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4">
                                        </path>
                                    </svg> Entradas de café </a></li>
                            <li><a href="#/laboratorio-inicio/"
                                    class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-white hover:text-gray-50 hover:bg-my-secondary"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="mr-4 h-5 w-5 md:h-7 md:w-7"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                                        </path>
                                    </svg> Laboratorios </a></li>
                            <li><a href="#/pagos/"
                                    class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-white hover:text-gray-50 hover:bg-my-secondary"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="mr-4 h-5 w-5 md:h-7 md:w-7"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                    </svg> Pagos </a></li>
                            <li><a href="#/inventario/"
                                    class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-white hover:text-gray-50 hover:bg-my-secondary"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="mr-4 h-5 w-5 md:h-7 md:w-7"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                                        </path>
                                    </svg> Inventario </a></li>
                            <li><a href="#/precios/"
                                    class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-white hover:text-gray-50 hover:bg-my-secondary"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="mr-4 h-5 w-5 md:h-7 md:w-7"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg> Precios </a></li>
                            <li><a href="#/productores-inicio/"
                                    class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-white hover:text-gray-50 hover:bg-my-secondary"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="mr-4 h-5 w-5 md:h-7 md:w-7"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                        </path>
                                    </svg> Productores </a></li>
                            <li><a href="#/app/"
                                    class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-white hover:text-gray-50 hover:bg-my-secondary"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="mr-4 h-5 w-5 md:h-7 md:w-7"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z">
                                        </path>
                                    </svg> App Occicafe </a></li>
                            <li><a href="#/avanzados/"
                                    class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-white hover:text-gray-50 hover:bg-my-secondary"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="mr-4 h-5 w-5 md:h-7 md:w-7"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                        </path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg> Avanzados </a></li>
                            <li><a href="#/sistema/"
                                    class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-white hover:text-gray-50 hover:bg-my-secondary"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="mr-4 h-5 w-5 md:h-7 md:w-7"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
                                        </path>
                                    </svg> Sistema </a></li>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
        <div class="print-none bg-terciary w-72 min-h-screen overflow-y-auto hidden md:block shadow relative z-1">
            <a href="#/inicio" class="flex items-center px-6 py-3 h-16 gap-2 mb-8">
                <img src="@/assets/img/animeyabu.png" alt="" class="h-10">
                <h1 class="font-bold text-2xl text-white">anime<span class="text-primary">yabu</span></h1>
            </a>

            <div class="px-4 py-2">
                <div class="flex flex-col gap-5 justify-between">

                    <div class="text-white px-2">
                        <router-link to="lista-categorias"
                            class="mb-1 py-2 rounded-lg flex items-center font-bold hover:text-gray-50 hover:bg-my-secondary"
                            aria-current="page">
                            Categorías
                        </router-link>

                        <ul class="flex flex-col gap-1">
                            <li class="text-sm appearance hover:underline"><router-link to="lista-categorias">Ver todas</router-link></li>
                            <li class="text-sm appearance hover:underline"><router-link to="lista-categorias">Crear</router-link></li>
                        </ul>

                    </div>






                    <div class="text-white px-2">
                        <a href="#/"
                            class="mb-1 py-2 rounded-lg flex items-center font-bold hover:text-gray-50 hover:bg-my-secondary"
                            aria-current="page">
                            Cerrar sesión
                        </a>
                    </div>




                </div>
            </div>
        </div>

        <div class="flex-1 flex-col relative z-0 overflow-y-auto bg-black">
            <div class="print-none px-4 md:px-4 py-2 h-16 flex justify-between items-center sticky top-0 left-0 z-30">
                <div class="flex items-center">
                    <div class="pr-2 text-gray-700 hover:text-color-text-ui cursor-pointer hidden md:block"><svg
                            xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg></div>

                    <div class="pr-2 text-gray-700 hover:text-color-text-ui cursor-pointer md:hidden"><svg
                            xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg></div>

                </div>

            </div>


            <div class="container mx-auto">

    <!-- <router-view/> -->


                <!-- CONTENIDO -->


                <!-- --> 
              

            </div>
        </div>
    </div>
    </template>

<script>
export default {
  name: 'HomeMenuGlobal',
  props: {
  }
}
</script>
