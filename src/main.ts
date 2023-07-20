import { createApp } from 'vue';
import { create, NButton, NGi, NGrid, NGridItem, NInput } from 'naive-ui';

const naive = create({ components: [NButton, NInput, NGi, NGrid, NGridItem] });

import App from './App.vue';
import router from './router';
import  store from './store';

// import bootstrap
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faYoutube,
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

/* import specific icons */
import {
  faDownload,
  faPhone,
  faSignature,
  faAddressCard,
  faFile,
  faStarHalfStroke,
  faBriefcase,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faGithub,
  faDownload,
  faPhone,
  faSignature,
  faAddressCard,
  faBriefcase,
  faPhoneVolume,
  faFile,
  faStarHalfStroke
);

createApp(App)
  .use(store)
  .use(router)
  .use(naive)
  .use(BootstrapVue3)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
