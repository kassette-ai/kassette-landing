import { createApp } from 'vue'
// import './style.css'
import './main.css'
import App from './App.vue'
import * as FullStory from '@fullstory/browser';

FullStory.init({orgId: 'o-1N86YB-na1'})

const app = createApp(App)
app.config.globalProperties.$FullStory = FullStory;
app.mount('#app')
