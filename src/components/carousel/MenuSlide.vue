<template lang="pug">
  b-carousel-slide(style='text-align: center;')
    //- g-image(
    //-   slot='img'
    //-   v-bind:src='src'
    //-   fit='inside'
    //-   width='350'
    //-   height='500'
    //-   style='text-align: center;'
    //- )
    b-img-lazy(
      slot='img'
      :src='src'
      fluid-grow
    )
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
