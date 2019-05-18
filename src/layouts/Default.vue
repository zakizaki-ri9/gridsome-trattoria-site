<template lang="pug">
  div
    b-navbar(toggleable='md' type='dark' variant='dark' fixed='top')
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav='')
        b-navbar-nav
          b-nav-item(href='/') Top
          b-nav-item(href='/#about') About
          b-nav-item(href='/#access') Access
          b-nav-item(href='/gallery/' target='_blank') Gallery
      .sns-link-box
        ul
          li
            a(
              href='https://www.facebook.com/Trattoria-Porto-2008761036085611'
              target='_blank'
            )
              font-awesome-icon(:icon="['fab', 'facebook-square']")
          li
            a(
              href='https://www.instagram.com/trattoriaporto'
              target='_blank'
            )
              font-awesome-icon(:icon="['fab', 'instagram']")
    slot
    #footer
      social-link-button
</template>

<script>
export default {
  metaInfo: {
    meta: [
      { property: 'og:site_name', content: 'TRATTORIA PORTO' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: 'https://trattoria-e-bar-porto-yamanashi.netlify.com'
      },
      { property: 'og:title', content: 'TRATTORIA PORTO' },
      {
        property: 'og:description',
        content: '山梨県にある北イタリア料理店（レストラン＆バー）です！'
      },
      {
        property: 'og:image',
        content:
          'https://trattoria-e-bar-porto-yamanashi.netlify.com/ogpimg2.jpg'
      },
      {
        property: 'fb:app_id',
        content: '445473682878964' //TODO: dot-envで取得するように修正する
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
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
  #footer {
    position: fixed;
    bottom: 10px;
    left: 0px;
    right: 0px;
    margin: auto;
    padding: auto;
  }
}
.sns-link-box {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 35px;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 10px;
      border-radius: 5px;
    }
  }
}
</style>
