import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



import '../src/plugins/jquery/jquery.min.js'
import '../src/plugins/bootstrap/js/bootstrap.bundle.min.js'
import '../src/dist/js/adminlte.min.js'
import './dist/js/demo.js'




import swal from 'sweetalert2';
window.Swal = swal;



createApp(App).use(router).mount('#app')
