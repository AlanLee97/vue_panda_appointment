<template>
  <div>
    <div class="al-border-left-color-light-green al-m-top-20px"
         :class="borderColor"
    >
      <span class="al-title-h2 al-m-left-10px">{{titleText}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TitleNode",
        props:{
            titleText: String,
            borderColor: String

        }
    }
</script>

<style scoped>

</style>
