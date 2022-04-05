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

import axios from "axios";


    export default {
        name: 'CategoriesList',
        components: {

        },
        data() {
            return{
                
            }

        },
        mounted: function () {

            this.getCategories();

        },
        methods: {
            getCategories: function () {

                let API_KEY = 'RtYujtghf4534TThglUY6556tyuGHJGHHGH'

                axios.get("https://texxt.tk/api/v1/categoria", {
                    params:{
                        apiKey: API_KEY,
                        utcTimeStamp: new Date(),
                        signature: "756403b52606111ee553e75e927bc0d92cc376d2aa63d469ee6d851e2cc04e9a"
                    }
                    
                }).then((response) => {
                    console.table(response)
                });
            },
        }
    }
</script>