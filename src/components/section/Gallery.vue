<template lang="pug">
  section#gallery(name='gallery')
    b-container
      h2 Menu
      br
      b-row
        b-col(
          lg="6"
        )
          b-carousel(
            controls
            indicators
            center
            :interval='0'
            background='#ababab'
          )
            //- TODO: いずれは以下の形で実装したい
            //- b-carousel-slide(style='text-align: center;')
            //-   g-image(
            //-     slot='img'
            //-     src='../../img/gallery/menu/01.jpg'
            //-     fit='inside'
            //-     width='350'
            //-     height='600'
            //-     style='text-align: center;'
            //-   )
            template(v-for='url in menu.url')
              menu-slide(:src="url")
      br
      h2 Landscape
      b-row
        b-col(
          lg="6"
        )
          h4 Sorry, please wait ...
</template>

<script>
export default {
  data() {
    return {
      //TODO: 以下をv-forで回して利用するように修正したい
      menu: {
        src: [
          '../../img/gallery/menu/01.jpg',
          '../../img/gallery/menu/02-drink.jpg',
          '../../img/gallery/menu/03-antipast.jpg',
          '../../img/gallery/menu/04-pasta.jpg',
          '../../img/gallery/menu/05-second.jpg',
          '../../img/gallery/menu/06-doruttie.jpg',
          '../../img/gallery/menu/07-lunch.jpg',
        ],
        url: [
          'https://trattoria-e-bar-porto-yamanashi.netlify.com/menu/01.jpg',
          'https://trattoria-e-bar-porto-yamanashi.netlify.com/menu/02-drink.jpg',
          'https://trattoria-e-bar-porto-yamanashi.netlify.com/menu/03-antipast.jpg',
          'https://trattoria-e-bar-porto-yamanashi.netlify.com/menu/04-pasta.jpg',
          'https://trattoria-e-bar-porto-yamanashi.netlify.com/menu/05-second.jpg',
          'https://trattoria-e-bar-porto-yamanashi.netlify.com/menu/06-doruttie.jpg',
          'https://trattoria-e-bar-porto-yamanashi.netlify.com/menu/07-lunch.jpg',
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
