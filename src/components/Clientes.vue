<template>
    <!--INICIO DEL BODDY-->    
    <body class="hold-transition sidebar-mini">

        <!-- INICIO WEAPPER-->
        <div class="wrapper">

            <!-- NAVBAR O BARRA DE NAVEGACIÓN  -->
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <!-- LINKS DE LA BARRA DE NAVEGACION DE LA IZQUIERDA-->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                       <router-link to="/" class="nav-link">Inicio</router-link>
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
                     <router-link to="/" class="nav-link">
                        <i class="nav-icon fas fa-home"></i>
                        <p>
                            Inicio
                            <span class="badge badge-info right">New</span>
                        </p>
                    </router-link>
                   
               </li>
               <li class="nav-item">
                     <router-link to="/usuarios" class="nav-link" exact>
                        <i class="nav-icon fas fa-user-astronaut"></i>
                        <p>
                            Usuarios
                            <span class="badge badge-info right">New</span>
                        </p>
                    </router-link>
                   
               </li>
                
                <li class="nav-item">
                    <router-link to="/categorias" class="nav-link">
                        <i class="nav-icon fas fa-th"></i>
                        <p>
                            Categorias  
                            <span class="badge badge-info right">New</span>
                        </p>
                   </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Productos" class="nav-link">
                        <i class="nav-icon fas fa-truck-loading"></i>
                        <p>
                            Productos
                            <span class="badge badge-info right">New</span>
                        </p>
                   </router-link>
                </li>
                 <li class="nav-item">
                    <router-link to="/clientes" class="nav-link">
                        <i class="nav-icon fas fa-user-tie"></i>
                        <p>
                            Clientes  
                            <span class="badge badge-info right">New</span>
                        </p>
                   </router-link>
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
                     <router-link to="/contacto" class="nav-link">
                    <i class="nav-icon fas fa-id-card"></i>
                    <p>
                        Contacto
                        <span class="right badge badge-danger">New</span>
                    </p>
                     </router-link>
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
                                <h1>Clientes</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><router-link to="/" class="small-box-footer">Inicio</router-link></li>
                                    <li class="breadcrumb-item active">Clientes</li>
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
                            <button class="btn btn-primary" @click="modificar=false; abrirModal()">
                                Agregar Cliente
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
                        <div class="card-body table-responsive">
                            <table id="example1" class="table table-bordered table-striped table-responsive-lg">
                                <thead>
                                    <tr>
                                        <th>id_cliente</th>
                                        <th>nombre</th>
                                        <th>documento</th>
                                        <th>email</th>
                                        <th>telefono</th>
                                        <th>dirección</th>
                                        <th>fecha_nacimiento</th>
                                        <th>compras</th>
                                         <th>compras</th>
                                        <th colspan="2" class="text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for= "cli in clientes" :key="cli.id_cliente">
                                        <th>{{cli.id_cliente}}</th>
                                        <td>{{cli.nombre}}</td>
                                        <td>{{cli.documento}}</td>
                                        <td>{{cli.email}}</td>
                                        <td>{{cli.telefono}}</td>
                                        <td>{{cli.direccion}}</td>
                                        <td>{{cli.fecha_nacimiento}}</td>
                                        <td>{{cli.compras}}</td>
                                        <td>{{cli.Ultima_compra}}</td>
                                        <td class="text-center">
                                            <button @click="modificar=true; abrirModal(cli)" type="button" class="editar btn btn-primary"><i class = "fa fa-pencil-alt"></i></button>
                                        </td>
                                        <td class="text-center">
                                            <button @click="eliminar(cli.id_cliente,cli.nombre)" type="button" class="eliminar btn btn-danger" data-toggle="modal" data-target="#modalEliminar"><i class="fas fa-dumpster-fire"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>id_cliente</th>
                                        <th>nombre</th>
                                        <th>documento</th>
                                        <th>email</th>
                                        <th>telefono</th>
                                        <th>dirección</th>
                                        <th>fecha_nacimiento</th>
                                        <th>compras</th>
                                         <th>compras</th>
                                        <th colspan="2" class="text-center">Acciones</th>
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

<div class="modal" :class="{mostrar:modal}">
  
  <div class="modal-dialog" >

    <div class="modal-content">

        <!--=====================================
        CABEZA DEL MODAL
        ======================================-->

        <div class="modal-header" style="background:#3c8dbc; color:white">
            <h5 class="modal-title ">{{tituloModal}}</h5>

          <button @click="cerrarModal();" type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!--=====================================
        CUERPO DEL MODAL
        ======================================-->

        <div class="modal-body">

          <div class="box-body">

            <!-- ENTRADA PARA EL NOMBRE -->

          <div class="form-group">
            
            <div class="input-group">
            
            <span class="input-group-text" for="nombre"><i class="fa fa-user"></i></span>

            <input v-model="clientedatos.nombre" class="form-control input-lg" type="txt" name="nuevoNombre" placeholder="Ingresar Nombre" id="nombre" required>

            </div> 

          </div>

            <!-- ENTRADA PARA EL DOCUMENTO -->
            
            <div class="form-group">
              
              <div class="input-group">
              
                <span class="input-group-text" for ="documento"><i class="fa fa-key"></i></span> 

                <input  v-model="clientedatos.documento"  id="documento" type="number"  class="form-control input-lg" name="nuevoDocumentoId" placeholder="Ingresar Documento" required>

              </div>

            </div>

            <!-- ENTRADA PARA EL EMAIL -->
            
            <div class="form-group">
              
              <div class="input-group">
              
                <span class="input-group-text" for="email"><i class="fa fa-envelope"></i></span> 

                <input   v-model="clientedatos.email" id="email" type="email" class="form-control input-lg" name="nuevoEmail" placeholder="Ingresar Email" required>

              </div>

            </div>

            <!-- ENTRADA PARA EL TELEFONO -->
            
            <div class="form-group">
              
              <div class="input-group">
              
                <span class="input-group-text" for="telefono"><i class="fa fa-phone"></i></span> 

                <input  v-model="clientedatos.telefono" type="text" id= "telefo" class="form-control input-lg" name="nuevoTelefono" placeholder="Ingresar Telefono" data-inputmask="'mask':'(999) 999-999'" data-mask required>

              </div>

            </div>

             <!-- ENTRADA PARA LA DIRECCION -->
            
            <div class="form-group">
              
              <div class="input-group">
              
                <span class="input-group-text" for="direccion"><i class="fa fa-map-marker"></i></span> 

                <input t v-model="clientedatos.direccion" ype="text" id="direccion" class="form-control input-lg" name="nuevaDireccion" placeholder="Ingresar Direccion" required>

              </div>

            </div>

            <!-- ENTRADA PARA LA FECHA DE NACIMIENTO -->
            
            <div class="form-group">
              
              <div class="input-group">
              
                <span class="input-group-text" for="fecha_nacimiento"><i class="fa fa-calendar"></i></span> 

                <input  v-model="clientedatos.fecha_nacimiento" type="date" id="fecha_nacimiento" class="form-control input-lg" name="nuevaFechaNacimiento" placeholder="Ingresar Fecha de Nacimiento" data-inputmask="'alias':'yyyy/mm/dd'" data-mask required>

              </div>

            </div>


          </div>
        </div>

           
        <!--=====================================
        PIE DEL MODAL
        ======================================-->

        <div class="modal-footer">

          <button @click="cerrarModal();" type="button" class="btn btn-default pull-left" data-dismiss="modal">Salir</button>

          <button @submit="checkForm" @click="guardar();" type="submit" class="btn btn-primary">Guardar cliente</button>

        </div>

    </div>

  </div>

</div>




    
</body>

     <router-view/>
</template>



<script>

import axios from "axios";

import $  from 'jquery';



export default {
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'Clientes';
            }
        },
    },
    data() {
        return{
            clientedatos:{
                nombre: "",
                documento: "",
                email: "",
                telefono: "",
                direccion: "",
                fecha_nacimiento:"",

            },
         
            id: 0,
            modificar: true,
            modal: 0,
            tituloModal: '',
            clientes:[],
            

        }
    },
    methods: {
        async listar(){
            const res = await axios.get('https://sistema-control-inventario.herokuapp.com/clientes/');
            this.clientes = res.data;

        },
        async eliminar(id, clientes){
            Swal.fire({
                title: '¿Está seguro de borrar el Usuario: '+clientes+' ?',
                text: "¡Si no lo está puede cancelar la accíón!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si!, Eliminar el Cliente!',
                cancelButtonText: '¡Cancelar!'
                }).then((result) => {
                    this.listar();
                if (result.isConfirmed) {
                    Swal.fire(
                    'El Cliente ha sido borrado correctamente!',
                    '',
                    'success'
                    )
                     const res =  axios.delete('https://sistema-control-inventario.herokuapp.com/clientes/'+id+"/");
                     this.listar();
                }
                 this.listar();
                })
        },
        async guardar(){
            try{
                if(this.modificar){

                    const res = await axios.put('https://sistema-control-inventario.herokuapp.com/clientes/'+this.id+' /',this.clientedatos)
                    Swal.fire({
                    position: '',
                        icon: 'success',
                        title: 'Usuario Editado correctamente',
                        showConfirmButton: true,
                    }).then((result) => {
                        this.usuarios = res.data;
                        this.cerrarModal();
                        this.listar();
                    })

                }else{
                    const res = await  axios.post('https://sistema-control-inventario.herokuapp.com/clientes/',
                    this.clientedatos);
                    Swal.fire({
                    position: '',
                        icon: 'success',
                        title: 'Usuario Agregado correctamente',
                        showConfirmButton: true,
                    }).then((result) => {
                        this.ususarips = res.data;
                        this.cerrarModal();
                        this.listar();
                    })
                     this.listar();
                      
                }
            }catch(error){
                Swal.fire({
                    position: '',
                        icon: 'info',
                        title: '¡' + error + "!",
                        showConfirmButton: true,
                    })
            }
           
        },
        abrirModal(data={}){
            this.modal = 1;
            if(this.modificar){
                this.id = data.id_cliente
                this.tituloModal = "Modificar Clientes"
                this.clientedatos.nombre = data.nombre
                this.clientedatos.documento = data.documento
                this.clientedatos.email = data.email
                this.clientedatos.telefono = data.telefono
                this.clientedatos.direccion = data.direccion
                this.clientedatos.fecha_nacimiento =  data.fecha_nacimiento
               

            }else{
                this.id = 0
                this.tituloModal = "Agregar clientes"
                this.clientedatos.nombre = ""
                this.clientedatos.documento = ""
                this.clientedatos.email = ""
                this.clientedatos.telefono = ""
                this.clientedatos.direccion = ""
                this.clientedatos.fecha_nacimiento =  ""
               
            }
        },
        cerrarModal(){
            this.modal = 0;
        }


    },

    created() {
        this.listar();
    }
   
}
</script>



<style scoped>

@import url('../../src/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css');
@import url('../../src/plugins/datatables-responsive/css/responsive.bootstrap4.min.css');
@import url("../../src/plugins/datatables-buttons/css/buttons.bootstrap4.min.css");




@import '../../src/plugins/fontawesome-free/css/all.min.css';
@import '../../src/dist/css/adminlte.min.css';
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");

.mostrar{
    display: list-item;
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
    
}

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


