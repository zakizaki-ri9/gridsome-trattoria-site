<template lang="pug">
  layout
    #headerwrap
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

<style scoped>
.centered {
  text-align: center;
}
#headerwrap {
  background: url(../img/top.jpg) no-repeat center top;
  background-attachment: relative;
  background-position: center center;
  min-height: 600px;
  width: 100%;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
