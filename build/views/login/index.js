function getView(){
    let view = {
        login : ()=>{
            return `
        <div class="row">
     
            <div class="col-md-3 col-sm-12 col-lg-3 col-lx-4">
                
            </div>

            <div class="col-md-6 col-sm-12 col-lg-6 col-lx-4">
   
                <div class="card shadow p-2 card-rounded border-secondary">

                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img src="./favicon.png" width="100" height="100">                            
                            </div>    
                        </div>
                        <form class="" id="frmLogin" autocomplete="off">
                            <div class="form-group">
                                <label class="negrita text-secondary">Empresa:</label>
                                <select class="negrita form-control" id="cmbSucursal">
                                    ${funciones.getComboSucursales()}
                                </select>
                                
                            </div>
                            <div class="form-group">
                                <label class="negrita text-secondary">Usuario:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fal fa-user"></i>
                                        </span>
                                    </div>
                                    <input class="form-control" type="text" id="txtUser" placeholder="Escriba su usuario" required="true">
                                </div>
                                
                            </div>

                            <div class="form-group">
                                <label class="negrita text-secondary">Clave:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fal fa-lock"></i>
                                        </span>
                                    </div>
                                    <input class="form-control" type="password" id="txtPass" placeholder="Escriba su contraseña" required="true">
                                </div>
                                        
                            </div>

                            <div class="form-group" align="right">
                                <button class="btn btn-secondary btn-xl shadow btn-circle"  type="submit" id="btnIniciar">
                                    <i class="fal fa-unlock"></i>  
                                </button>
                            </div>

                            <div class="form-group" align="left">  
                                <small class="text-secondary">Grupo Buena Vista v02.2024</small>
                            </div>
                        </form>
                    </div>

                
    

                </div>
            </div>

            <div class="col-md-3 col-sm-12 col-lg-3 col-lx-4"></div>

            
     
            `
        }
    };

    root.innerHTML = view.login();
};



function addListeners(){
    
    //carga las sucursales directamente desde código
    //document.getElementById('cmbSucursal').innerHTML = funciones.getComboSucursales();

      
    let frmLogin = document.getElementById('frmLogin');
    let btnIniciar = document.getElementById('btnIniciar');
    frmLogin.addEventListener('submit',(e)=>{
        e.preventDefault();

        almacenarCredenciales();

        btnIniciar.innerHTML = '<i class="fal fa-unlock fa-spin"></i>';
        btnIniciar.disabled = true;
        apigen.empleadosLogin(frmLogin.cmbSucursal.value,frmLogin.txtUser.value.trim(),frmLogin.txtPass.value.trim())
        .then(()=>{
            //document.body.requestFullscreen();
            //por lo visto se deshabilitan las scroll bars en fullscreen
            selectDateDownload();
        })
        .catch(()=>{
            btnIniciar.disabled = false;
            btnIniciar.innerHTML = '<i class="fal fa-unlock"></i>'
        });
    });


  
    selectDateDownload() //carga la info inicial
    .then(()=>{
        try {
            if(GlobalCodSucursal==''){}else{
                document.getElementById('cmbSucursal').value = GlobalCodSucursal;
            }
        } catch (error) {

            console.log('error al cargar sucursal')
            console.log(error)
        }
    })
   
  
};


function InicializarVista(){
   getView();
   addListeners();

   //getCredenciales();
    
   document.getElementById('btnPedidosPend').style ="visibility:hidden";

};


async function almacenarCredenciales(){
    const cred = new PasswordCredential({
        id: document.getElementById('txtUser').value,
        name: document.getElementById('cmbSucursal').value,
        password: document.getElementById('txtPass').value
    })

    await navigator.credentials.store(cred)

};

function getCredenciales(){
   if ('credentials' in navigator) {
  navigator.credentials.get({password: true})
  .then(function(creds) {

      console.log(creds);
    //Do something with the credentials.
    document.getElementById('txtUser').value = creds.id;
    document.getElementById('cmbSucursal').value = creds.name;
    document.getElementById('txtPass').value = creds.password;

  });
    } else {
    //Handle sign-in the way you did before.
    };
}