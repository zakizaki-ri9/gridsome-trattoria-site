<template lang="pug">
  layout
    b-container
      b-row.centered
        b-col(lg="12")
          h1
            | TRATTORIA
            br
            | e
            br
            | BAR PORTO
    about-section
    recruit-section
    access-section
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
    meta: [
      {
        name: "fb:app_id",
        content: process.env.FACEBOOK_APP_ID
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
.centered {
  text-align: center;
  padding-top: 140px;
  padding-bottom: 140px;
  @media screen and (max-width: 500px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  h1 {
    font-size: 14vw;
    color: #e53935;
    font-weight: 300;

    @media screen and (min-width: 500px) {
      font-size: 70px;
    }
  }
}
</style>
