<template>
    <div class="flex flex-col">

        <h1 class="text-white text-5xl my-14 font-bold">Actualizar categoría</h1>

        <form class="flex flex-col gap-12 w-80">
            <div class="flex flex-col">
                <label for="category-name" class="text-white text-sm">Nombre de la categoría</label>
                <input type="text" id="category-name"
                    class="bg-gray-400 px-4 py-1 rounded-md border-2 border-white placeholder:text-white text-white w-full h-14"
                    required>
            </div>
            <button type="submit"
                class="flex items-center justify-center text-purple-900 bg-secondary w-full h-14 px-4 rounded-md border-2 border-white font-semibold">
                Actualizar
            </button>
        </form>

    </div>
</template>

<script>


    export default {
        name: 'CategoriesUpdate',
        components: {

        }
    }
</script>