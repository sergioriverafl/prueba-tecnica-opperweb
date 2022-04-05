<template>
    <div class="flex flex-col">

        <h1 class="text-white text-5xl my-14 font-bold">Lista de categorías</h1>


        <div class="flex flex-wrap gap-12 max-w-5xl">

            <div class="flex flex-col gap-2 justify-end bg-terciary rounded-md font-semibold text-white p-3 w-60 h-28">

                <div class="text-center">ACCIÓN</div>

                <router-link :to="'/app/actualizar-categoria'" class="text-right underline">Editar</router-link>
            </div>

            <div class="flex flex-col gap-2 justify-end bg-terciary rounded-md font-semibold text-white p-3 w-60 h-28">

                <div class="text-center">AVENTURA</div>

                <router-link :to="'/app/actualizar-categoria'" class="text-right underline">Editar</router-link>
            </div>

            <div class="flex flex-col gap-2 justify-end bg-terciary rounded-md font-semibold text-white p-3 w-60 h-28">

                <div class="text-center">COMEDIA</div>

                <router-link :to="'/app/actualizar-categoria'" class="text-right underline">Editar</router-link>
            </div>

            <div class="flex flex-col gap-2 justify-end bg-terciary rounded-md font-semibold text-white p-3 w-60 h-28">

                <div class="text-center">TERROR</div>

                <router-link :to="'/app/actualizar-categoria'" class="text-right underline">Editar</router-link>
            </div>


            <div class="flex flex-col gap-2 justify-end bg-terciary rounded-md font-semibold text-white p-3 w-60 h-28">

                <div class="text-center">ROMANCE</div>

                <router-link :to="'/app/actualizar-categoria'" class="text-right underline">Editar</router-link>
            </div>

            <div class="flex flex-col gap-2 justify-end bg-terciary rounded-md font-semibold text-white p-3 w-60 h-28">

                <div class="text-center">MISTERIO</div>

                <router-link :to="'/app/actualizar-categoria'" class="text-right underline">Editar</router-link>
            </div>



        </div>

    </div>
</template>

<script>


    export default {
        name: 'CategoriesList',
        components: {

        },
        data() {
            return{
                
            }

        },
        mounted: function () {

        },
        methods: {
            //   GetListFarmer: function (id_user_get) {
            //     this.SearchingFarmers = true;
            //     axios.post(API_ROUTER.API_APLICATION_MOVIL + "farms/farms_by_user.php", {
            //       id_user: id_user_get,
            //     }).then((response) => {
            //         this.SearchingFarmers = false;
            //         this.ArrayFincas = response.data;
            //       });
            //   },
        }
    }
</script>