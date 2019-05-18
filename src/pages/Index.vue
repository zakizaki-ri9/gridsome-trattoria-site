<template lang="pug">
  layout
    section#top
      h1
        | TRATTORIA
        br
        | PORTO
    about-section
    access-section
    blank-section
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
};
</script>

<style lang="scss" scoped>
#top {
  background-image: url('../img/top_background_min.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  text-align: center;
  padding-top: 175px;
  padding-bottom: 175px;
  @media screen and (max-width: 500px) {
    padding-top: 135px;
    padding-bottom: 135px;
  }
  h1 {
    font-size: 14vw;
    color: #d50000;
    font-weight: 300;
    @media screen and (min-width: 500px) {
      font-size: 70px;
    }
  }
}
</style>
