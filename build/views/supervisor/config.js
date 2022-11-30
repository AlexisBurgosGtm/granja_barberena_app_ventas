function getView(){
    let view = {
        body : ()=>{
            return `
                <div class="card card-rounded shadow">
                    <div class="card-header bg-secondary text-white">
                        <h3 class="negrita">Configuraciones</h3>
                    </div>
                    <div class="card-body">

                            <div class="table-responsive" id="tblUsuarios"></div>

                    </div>
                </div>
               
            `
        },
        modalCambiarPass: ()=>{
            return `
                <div class="modal fade" id="modalCambiarPass" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <label class="modal-title h3" id="">Cambie su Contraseña de Usuario</label>
                            </div>

                            <div class="modal-body">
                                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div class="form-group">
                                        <label class="negrita">Nueva Clave</label>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <button class="btn btn-outline-success btn-lg" id="btnActualizarPass">
                                    <i class="fal fa-save"></i>
                                    Cambiar Clave
                                </button>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            `
        }
    }

    root.innerHTML = view.body() + view.modalCambiarPass();

};

function addListeners(){

      

        getListaUsuarios();
};


function initView(){
    
    getView();
    addListeners();

};






function getListaUsuarios(){

    let container = document.getElementById('tblUsuarios');
        container.innerHTML = GlobalLoader;
        
      
        let strdata = '';
        let tbl = `<table class="table table-responsive table-hover table-striped">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Usuario</td>
                                <td>Clave</td>
                                <td>Tipo</td>
                                <td>Coddoc</td>
                            </tr>
                        </thead>
                        <tbody>`;

        let tblfoot = `</tbody></table>`;

        axios.post('/config/listado', {
            sucursal:GlobalSistema
        })
        .then((response) => {
            const data = response.data.recordset;

            data.map((rows)=>{

                    strdata = strdata + `<tr>
                                            <td>
                                                ${rows.NOMBRE}
                                            </td>
                                            <td>
                                                ${rows.PASS}
                                            </td>
                                            <td>
                                                ${rows.TIPO}
                                            </td>
                                            <td>
                                                ${rows.CODDOC}
                                            </td>
                                           
                                        </tr>`
            })
            container.innerHTML = tbl + strdata + tblfoot;
            //lbTotal.innerHTML = `<h3 class="negrita text-danger">Importe: ${funciones.setMoneda(total,'Q ')}`;
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
            container.innerHTML = '';
            //lbTotal.innerHTML = '-- --';
        });

};


function update_clave(){
      //cambio de clave de usuario
        //--------------------------------
        let txtPassNueva = document.getElementById('txtPassNueva');
        txtPassNueva.value = GlobalPassUsuario;

        let btnActualizarPass = document.getElementById('btnActualizarPass');
        btnActualizarPass.addEventListener('click',()=>{
            funciones.Confirmacion('¿Está seguro que desea cambiar su clave de inicio, esto también aplica a la app de censo?')
            .then((value)=>{
                if(value==true){

                    btnActualizarPass.disabled = true;
                    btnActualizarPass.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                    apigen.config_cambiar_clave(GlobalCodSucursal,GlobalSelectedId,txtPassNueva.value)
                    .then((data)=>{
                    
                        funciones.Aviso('Clave actualizada exitosamente !!');
                        
                        btnActualizarPass.disabled = false;
                        btnActualizarPass.innerHTML = `<i class="fal fa-save"></i> Cambiar Clave`;
                        GlobalPassUsuario = txtPassNueva.value;
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo cambiar la clave de usuario');
                        btnActualizarPass.disabled = false;
                        btnActualizarPass.innerHTML = `<i class="fal fa-save"></i> Cambiar Clave`;
                    })


                }
            })
        });
}