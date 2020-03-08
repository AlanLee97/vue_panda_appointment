<template>
    <div>
        <img :src="src"
             :alt="alt"
             :style="{'object-fit': fit}"
             style="width: 100%; height: 100%"
        >
    </div>
</template>

<script>
    export default {
        name: "ALImage",
        props: {
            src: String,
            alt: String,
            fit: String
        },

        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    .fit-cover{
        object-fit: cover;
    }

    .fit-contain{
        object-fit: contain;
    }

    .fit-fill{
        object-fit: fill;
    }

    .fit-none{
        object-fit: none;
    }

</style>
