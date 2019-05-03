<template lang="pug">
  layout
    section#top
      h1
        | TRATTORIA
        br
        | PORTO
    about-section
    recruit-section
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
  background-image: url('../img/top_background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  padding-top: 170px;
  padding-bottom: 170px;
  @media screen and (max-width: 500px) {
    padding-top: 130px;
    padding-bottom: 130px;
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
