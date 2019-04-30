<template lang="pug">
  div
    b-navbar(toggleable='md' type='dark' variant='dark' fixed='top')
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav='')
        b-navbar-nav
          b-nav-item(href='/') Top
          b-nav-item(href='#about') About
          b-nav-item(href='#recruit') Recruit
          b-nav-item(href='#access') Access
      
      a#instagram-link(
        href='https://www.instagram.com/trattoriaporto'
        target='_blank'
      )
        font-awesome-icon(:icon="['fab', 'instagram']")
    .mask
    slot
</template>

<script>
export default {
  metaInfo: {
    meta: [
      { property: 'og:site_name', content: 'TRATTORIA e BAR PORTO' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: 'https://trattoria-e-bar-porto-yamanashi.netlify.com/'
      },
      { property: 'og:title', content: 'TRATTORIA e BAR PORTO' },
      {
        property: 'og:description',
        content: '山梨県にある北イタリア料理居酒屋です。'
      },
      {
        property: 'og:image',
        content:
          'https://trattoria-e-bar-porto-yamanashi.netlify.com/ogpimg.jpg'
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
// 白透過用のマスクスタイル
.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($color: white, $alpha: 0.5);
  z-index: -1;
}
#instagram-link {
  position: absolute;
  top: 0;
  right: 10px;
  color: white;
  cursor: pointer;
  font-family: 'Pacifico', cursive;
  font-size: 30px;
}
</style>
