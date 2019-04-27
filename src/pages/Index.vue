<template lang="pug">
  layout
    b-container
      b-row.centered
        b-col(lg="12")
          h1 TRATTORIA e BAR PORTO
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
  h1 {
    font-size: 80px;
    color: #e53935;
    font-family: "Raleway";
    font-weight: 300;
  }
}
</style>
