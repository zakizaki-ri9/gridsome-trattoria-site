// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/fontawesome-free-5.8.2-web/css/all.min.css'
import '~/assets/style.scss'

import IndexLayout from '~/layouts/Default.vue'
import NormalLayout from '~/layouts/Normal.vue'
import AboutSection from '~/components/section/About.vue'
import GallerySection from '~/components/section/Gallery.vue'
import AccessSection from '~/components/section/Access.vue'
import BlankSection from '~/components/section/Blank.vue'
import MenuSlide from '~/components/carousel/MenuSlide.vue'
import SocialLinkButton from '~/components/footer/SocialLinkButton.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function (Vue) {
  Vue.component('Layout', IndexLayout)
  Vue.component('NormalLayout', NormalLayout)

  Vue.component('AboutSection', AboutSection)
  Vue.component('GallerySection', GallerySection)
  Vue.component('AccessSection', AccessSection)
  Vue.component('BlankSection', BlankSection)

  Vue.component('MenuSlide', MenuSlide)

  Vue.component('SocialLinkButton', SocialLinkButton)

  Vue.use(BootstrapVue)
}
