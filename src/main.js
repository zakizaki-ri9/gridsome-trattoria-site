// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import AboutSection from '~/components/section/About.vue';
import RecruitSection from '~/components/section/Recruit.vue';
import AccessSection from '~/components/section/Access.vue';
import YahooMap from '~/components/map/Yahoo.vue';
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
  Vue.component('Layout', DefaultLayout);
  Vue.component('AboutSection', AboutSection);
  Vue.component('RecruitSection', RecruitSection);
  Vue.component('AccessSection', AccessSection);
  Vue.component('YahooMap', YahooMap);

  Vue.component('font-awesome-icon', FontAwesomeIcon);

  Vue.use(BootstrapVue);
}
