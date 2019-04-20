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

<style>
body {
  padding-top: 56px;
}
</style>
