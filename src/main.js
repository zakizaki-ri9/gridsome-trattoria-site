// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import IndexLayout from '~/layouts/Default.vue';
import NormalLayout from '~/layouts/Normal.vue';
import AboutSection from '~/components/section/About.vue';
import GallerySection from '~/components/section/Gallery.vue';
import AccessSection from '~/components/section/Access.vue';
import BlankSection from '~/components/section/Blank.vue';
import MenuSlide from '~/components/carousel/MenuSlide.vue';
import SocialLinkButton from '~/components/footer/SocialLinkButton.vue';
import '~/assets/style.scss';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far, fab);

export default function(Vue) {
  Vue.component('Layout', IndexLayout);
  Vue.component('NormalLayout', NormalLayout);

  Vue.component('AboutSection', AboutSection);
  Vue.component('GallerySection', GallerySection);
  Vue.component('AccessSection', AccessSection);
  Vue.component('BlankSection', BlankSection);

  Vue.component('MenuSlide', MenuSlide);

  Vue.component('SocialLinkButton', SocialLinkButton);

  Vue.component('font-awesome-icon', FontAwesomeIcon);

  Vue.use(BootstrapVue);
}
