<template>
    <!--INICIO DEL BODDY-->    
    <body class="hold-transition sidebar-mini">

        <!-- INICIO WEAPPER-->
        <div class="wrapper">
            <!--PRECARGA DE LA PAGINA-->
           <!-- <div class="preloader flex-column justify-content-center align-items-center">
                <img class="animation__shake" src="../../src/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
                -->
                <!--FIN DE LA PRECARGA-->
            <!--</div>-->
            <!--FIN WRAPPER-->

            <!-- NAVBAR O BARRA DE NAVEGACIÓN  -->
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <!-- LINKS DE LA BARRA DE NAVEGACION DE LA IZQUIERDA-->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="" class="nav-link">Inicio</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">Contacto</a>
                    </li>
                </ul>

                <!-- LINKS DE LA BARRA DE NAVEGACION DE ARRIBA -->
                <ul class="navbar-nav ml-auto">
                    <!-- BUSCAR EN LA BARRA DE NAVEGACIÓN -->
                    <li class="nav-item">
                        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                            <i class="fas fa-search"></i>
                        </a>
                        <div class="navbar-search-block">
                            <form class="form-inline">
                                <div class="input-group input-group-sm">
                                    <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                                    <div class="input-group-append">
                                        <button class="btn btn-navbar" type="submit">
                                            <i class="fas fa-search"></i>
                                        </button>
                                        <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- FIN BUSCAR EN LA BARRA DE NAVEGACIÓN -->
                    </li>
                    <!--BOTON DE FULL SCREEM -->
                    <li class="nav-item">
                        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i class="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                     <!-- FIN BOTON DE FULL SCREEM -->
                    <!--USUARIO -->
                    <li class="nav-item dropdown user-menu">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="../../src/dist/img/user2-160x160.jpg" class="user-image img-circle elevation-2" alt="User Image">
                        <span class="d-none d-md-inline">Thomas Alexander Doe</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <!-- IMAGEN USUARIO -->
                        <li class="user-header bg-primary">
                            <img src="../../src/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">

                            <p>
                            Thomas Alexander Doe - Administrador
                            <small>Member since Nov. 2012</small>
                            </p>
                        </li>
                        <!-- MENU -->
                        <li class="user-body">
                            <div class="row">
                            <div class="col-4 text-center">
                                <a href="#">Ventas</a>
                            </div>
                            <div class="col-4 text-center">
                                <a href="#"></a>
                            </div>
                            <div class="col-4 text-center">
                                <a href="#">Reportes</a>
                            </div>
                            </div>
                            <!-- FIN MENU -->
                        </li>
                        <!-- MENU PIE DE PAGINA-->
                        <li class="user-footer">
                            <a href="#" class="btn btn-default btn-flat">Perfil</a>
                            <a href="#" class="btn btn-default btn-flat float-right">Salir</a>
                        </li>
                        <!--FIN DE PIE DE PAGINA-->
                        </ul>
                    </li>
                    <!---FIN USUARIO-->
                   
                </ul>
            </nav>
            <!-- FIN DEL LA BARRA DE NAVEGACION -->

            <!-- CONTENEDOR DE LA BARRA LATERAL PRINCIPAL-->
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <!--LOGO -->
                <a href="#" class="brand-link">
                    <img src="../../src/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                    <span class="brand-text font-weight-light">Sistema de Inventario</span>
                </a>
                <!--LOGO-->

                <!-- BARRA LATERAL -->
                <div class="sidebar">
                    <!-- USUARIO -->
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src="../../src/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                        </div>
                        <div class="info">
                            <a href="#" class="d-block">Thomas Alexander Doe</a>
                            <a style="font-size:12px"><i class="fa fa-circle text-success" ></i> Online</a>
                        </div>
                    </div>
                    <!-- FIN USUARIO -->

                    <!-- FORMULARIO - BARRA LATERAL DE BUSQUEDA -->
                    <div class="form-inline">
                        <div class="input-group" data-widget="sidebar-search">
                            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                            <div class="input-group-append">
                                <button class="btn btn-sidebar">
                                    <i class="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- MENÚ DE LA BARRA LATERAL-->
                  <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library -->

                <li class="header1">NAVEGACIÓN PRINCIPAL</li>
               <li class="nav-item">
                     <router-link to="/" class="nav-link" exact>
                        <i class="nav-icon fas fa-user-astronaut"></i>
                        <p>
                            Usuarios
                            <span class="badge badge-info right">New</span>
                        </p>
                    </router-link>
                   
               </li>
                <li class="nav-item">
                     <router-link to="/" class="nav-link">
                        <i class="nav-icon fas fa-home"></i>
                        <p>
                            Inicio
                            <span class="badge badge-info right">New</span>
                        </p>
                    </router-link>
                   
               </li>
                
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-th"></i>
                        <p>
                            Categorias  
                            <span class="badge badge-info right">New</span>
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class=" nav-icon fas fa-truck-loading"> </i>
                        <p>
                            Productos  
                            <span class="badge badge-info right">New</span>
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class=" nav-icon fas fa-user-tie"> </i>
                        <p>
                            Clientes  
                            <span class="badge badge-info right">New</span>
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-cash-register"></i>
                    <p>
                        Ventas
                        <i class="right fas fa-angle-left"></i>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                        <i class="fas fa-file-invoice-dollar nav-icon"></i>
                        <p>Administrar Ventas </p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                        <i class="fas fa-dolly nav-icon"></i>
                        <p>Crear Venta </p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                        <i class="fas fa-chart-line nav-icon"></i>
                        <p>Reporte de Venta</p>
                        </a>
                    </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-id-card"></i>
                    <p>
                        Contacto
                        <span class="right badge badge-danger">New</span>
                    </p>
                    </a>
                </li>
        </ul>
            </nav>
            <!-- FIN MENÚ DE LA BARRA LATERAL -->
            </div>
            <!-- FIN BARRA LATERAL -->
        </aside>
            <!-- ENVOLTURA DE CONTENIDO. CONTIENE EL CONTENIDO DE LA PÁGINA-->
            <div class="content-wrapper">
                <!-- CONTENIDO DEL HEADER -->
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Categorias</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                                    <li class="breadcrumb-item active">Categorias</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- FIN CONTENIDO DEL HEADER  -->

                <!-- CONTENIDO PRINCIPAL -->
                <section class="content">

                    <!-- TARJETA PRINCIPAL -->
                    <div class="card">
                        <div class="card-header">
                            <button class="btn btn-primary" data-toggle="modal" data-target="#modalAgregarCategoria">
                                Agregar Categorías
                            </button>

                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <!---TARJETA DEL CUERPO -->
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped responsive">
                                <thead>
                                    <tr>
                                        <th>Id_categoria</th>
                                        <th>Categoria</th>
                                        <th>Fecha(s)</th>
                                        <th>Editar</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Id_categoria</th>
                                        <th>Categoria</th>
                                        <th>Fecha(s)</th>
                                         <th>Editar</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </tfoot>
                                </table>
                        </div>
                        <!--- FIN TARJETA DEL CUERPO -->
                        <!---TARJETA DEL PIE DE PAGINA -->
                        <div class="card-footer">
                            Footer
                        </div>
                        <!---FIN TARJETA DEL PIE DE PAGINA -->
                    </div>
                    <!-- FIN DE LA TARJETA -->
                </section>
                <!-- FIN DEL CONTENIDO PRINCIPAL -->
            </div>
            <!-- FIN ENVOLTURA DE CONTENIDO.-->
            <!--FOOTER-->

            
            <footer class="main-footer">
                <div class="float-right d-none d-sm-block">
                    <b>Version</b> 1.0
                </div>
                <strong>Copyright &copy; 2014-2021 <a href="#">Maicol Rojas</a>.</strong> All rights reserved.
            </footer>
            <!--FIN DEL FOOTER-->

            <!-- BARRA LATERAL DEL CONTROL -->
            <aside class="control-sidebar control-sidebar-dark">
                <!-- El contenido de la barra lateral de control va aquí -->
            </aside>
            <!-- FIN BARRA LATERAL DEL CONTRO -->
        </div>


<!--=====================================
MODAL AGREGAR USUARIO
======================================-->

<div id="modalAgregarCategoria" class="modal" role="dialog">
  
  <div class="modal-dialog" role="document">

    <div class="modal-content">

      <form role="form" method="#">

        <!--=====================================
        CABEZA DEL MODAL
        ======================================-->

        <div class="modal-header" style="background:#3c8dbc; color:white">
            <h5 class="modal-title">Agregar Categorías</h5>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!--=====================================
        CUERPO DEL MODAL
        ======================================-->

        <div class="modal-body">

          <div class="box-body">

            <!-- ENTRADA PARA EL NOMBRE -->
            
            <div class="form-group">
              <div class="input-group mb-3">
                  <span class="input-group-text"><i class="nav-icon fas fa-th"></i></span> 
                <input type="text" class="form-control input-lg" name="nuevoCategoria" placeholder="Ingresar Categoría" required>

              </div>
            </div>

          </div>

        </div>

           
        <!--=====================================
        PIE DEL MODAL
        ======================================-->

        <div class="modal-footer">

          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Salir</button>

          <button type="submit" class="btn btn-primary">Guardar Categoría</button>

        </div>

      </form>

    </div>

  </div>

</div>

    
</body>

    
     <router-view/>
</template>





/*import '../plugins/datatables/jquery.dataTables.min.js'
import '../plugins/datatables-bs4/js/dataTables.bootstrap4.min.js'
import '../plugins/datatables-responsive/js/dataTables.responsive.min.js'
import '../plugins/datatables-responsive/js/responsive.bootstrap4.min.js'
import '../plugins/datatables-buttons/js/dataTables.buttons.min.js'
import '../plugins/datatables-buttons/js/buttons.bootstrap4.min.js'
import '../plugins/datatables-buttons/js/buttons.html5.min.js'
import '../plugins/datatables-buttons/js/buttons.print.min.js'
import '../plugins/datatables-buttons/js/buttons.colVis.min.js'


import"../plugins/pdfmake/pdfmake.min.js"
import"../plugins/pdfmake/vfs_fonts.js"

import axios from 'axios';
//import $ from 'jquery'

const $ = require('jquery')


export default {
   
}
*/


<script>

import axios from "axios";

import $  from 'jquery';


export default {
   
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("https://sistema-control-inventario.herokuapp.com/categoria/")
        .then((response) => {
           $("#example1").DataTable({
               "responsive": true, "lengthChange": true, "autoWidth": false,
                "buttons": [/*"copy",*/ "csv", "excel",  "print"],
           "language":lenguaje_español,
            data: response.data,
            columns: [
              { data : "id_categoria",},
              { data: "categoria" },
              { data: "fecha" },
              {
                  data : "id_categoria",
                  render : function(data){
                      return '<button data-id="" type="button" class="editar btn btn-primary"><i class = "fa fa-pencil-alt"></i></button>';
                         
                      
                  },
              },
              {
                  data : "id_categoria",
                  render : function(data){
                      return '<button type="button" class="eliminar btn btn-danger" data-toggle="modal" data-target="#modalEliminar"><i class="fas fa-dumpster-fire"></i></button>';
                         
                      
                  },
              }
              //{ defaultContent : '<button type="button" class="editar btn btn-primary"><i class = "fa fa-pencil-alt"></i></button> &nbsp;&nbsp;&nbsp;<button type="button" class="eliminar btn btn-danger" data-toggle="modal" data-target="#modalEliminar"><i class="fas fa-dumpster-fire"></i></button>'},
              
            ],
          }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)')
           //obtener_data_editar('',table);
        }).catch((error) => console.log(error.response));
       
    },
    
  },
};

var obtener_data_editar = function(tbody,table){
    $(tbody).on("click", "button.editar", function(){
        var data = table.row($(this).parent('tr')).data();
        console.log(data)
    })
}

var lenguaje_español = {
     sProcessing:     "Procesando...",
                sLengthMenu:     "Mostrar _MENU_ registros",
                sZeroRecords:    "No se encontraron resultados",
                sEmptyTable:     "Ningún dato disponible en esta tabla",
                sInfo:           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                sInfoEmpty:      "Mostrando registros del 0 al 0 de un total de 0",
                sInfoFiltered:   "(filtrado de un total de _MAX_ registros)",
                sInfoPostFix:    "",
                sSearch:         "Buscar:",
                sUrl:           "",
                sInfoThousands:  ",",
                sLoadingRecords: "Cargando...",
                oPaginate: {
                sFirst:    "Primero",
                sLast:     "Último",
                sNext:     "Siguiente",
                sPrevious: "Anterior"
                },
}
</script>



<style scoped>

@import url('../../src/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css');
@import url('../../src/plugins/datatables-responsive/css/responsive.bootstrap4.min.css');
@import url("../../src/plugins/datatables-buttons/css/buttons.bootstrap4.min.css");




@import '../../src/plugins/fontawesome-free/css/all.min.css';
@import '../../src/dist/css/adminlte.min.css';
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");

.header1{
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    line-height: 1.42857143;
    font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: 400;
    list-style: none;
    box-sizing: border-box;
    position: relative;
    margin: 0;
    padding: 10px 25px 10px 15px;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    color: #4b646f;
    background: #1a2226;
}
</style>


