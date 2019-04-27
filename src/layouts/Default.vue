<template lang="pug">
  div
    b-navbar(toggleable='md' type='dark' variant='info' fixed='top')
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav='')
        b-navbar-nav(right)
          b-nav-item(href='/') Home
          b-nav-item(href='about') About
          b-nav-item(href='recruit') Recruit
    slot
    .background
    .mask
</template>

<script>
export default {
  metaInfo: {
    meta: [
      {
        property: "fb:app_id",
        content: process.env.FACEBOOK_APP_ID
      }
    ]
  }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  padding-top: 56px;
}
.background {
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  margin: auto;
  width: 90vw;
  min-height: 90vh;
  background-image: url("../img/top.jpg");
  background-size: cover;
  background-position: top;
  opacity: 0.5;
  z-index: -2;
}
.mask {
  position: absolute;
  top: 56px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($color: #ffffff, $alpha: 0.3);
  z-index: -1;
}
// .background-mask {
//   position: absolute;
//   top: 56px;
//   left: 0;
//   right: 0;
//   margin: auto;
//   opacity: 0.5;
// }
</style>
