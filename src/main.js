import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);

app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key:"AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k", // Reemplaza con tu API key de Google Maps
  },
});

app.mount('#app');