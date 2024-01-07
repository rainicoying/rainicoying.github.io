import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
	ssr: true,
	theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#D7ECFA",
          secondary: "#BAA280"
        }
      },
    },
  },
})


createApp(App).use(vuetify).mount('#app')
