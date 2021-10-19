import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



import '../src/plugins/jquery/jquery.min.js'
import '../src/plugins/bootstrap/js/bootstrap.bundle.min.js'
import '../src/dist/js/adminlte.min.js'
import './dist/js/demo.js'



import"../src/plugins/datatables/jquery.dataTables.min.js"
//import"../src/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"
//import"../src/plugins/datatables-responsive/js/dataTables.responsive.min.js"
//import"../src/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"
import"../src/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"


import '../src/plugins/datatables/jquery.dataTables.min.js';
import '../src/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js';
import '../src/plugins/datatables-responsive/js/dataTables.responsive.min.js';
import '../src/plugins/datatables-responsive/js/responsive.bootstrap4.min.js';
import '../src/plugins/datatables-buttons/js/dataTables.buttons.min.js';
import '../src/plugins/datatables-buttons/js/buttons.bootstrap4.min.js';
import '../src/plugins/jszip/jszip.min.js';
import '../src/plugins/pdfmake/pdfmake.min.js';
import '../src/plugins/pdfmake/vfs_fonts.js';
import '../src/plugins/datatables-buttons/js/buttons.html5.min.js';
import '../src/plugins/datatables-buttons/js/buttons.print.min.js';
import '../src/plugins/datatables-buttons/js/buttons.colVis.min.js';
import '../src/plugins/fontawesome-free/css/all.min.css';
import '../src/plugins/datatables-responsive/css/responsive.bootstrap4.min.css';
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";





createApp(App).use(router).mount('#app')
