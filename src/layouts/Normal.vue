<template lang="pug">
  div
    b-navbar(toggleable='md' type='dark' variant='dark' fixed='top')
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav='')
        b-navbar-nav
          b-nav-item(href='/') Top
          b-nav-item(href='/#about') About
          b-nav-item(href='/#recruit') Recruit
          b-nav-item(href='/gallery') Gallery
      a#instagram-link(
        href='https://www.instagram.com/trattoriaporto'
        target='_blank'
      )
        font-awesome-icon(:icon="['fab', 'instagram']")
    slot
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
        content: '山梨県にある北イタリア料理居酒屋です。'
      },
      {
        property: 'og:image',
        content:
          'https://trattoria-e-bar-porto-yamanashi.netlify.com/ogpimg.jpg'
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
  // navbar用
  padding-top: 56px;
}
</style>
