let versionapp = 'Modif 07.03.2024';

let root = document.getElementById('root');
let rootMenu = document.getElementById('rootMenu');
let rootMenuFooter = document.getElementById('rootMenuFooter');
let rootErrores = document.getElementById('rootErrores');

let lbMenuTitulo = document.getElementById('lbMenuTitulo');
let rootMenuLateral = document.getElementById('rootMenuLateral');
const showMenuLateral =(titulo)=>{ $("#modalMenu").modal('show'); lbMenuTitulo.innerText = titulo;};
const hideMenuLateral =()=>{ $("#modalMenu").modal('hide'); lbMenuTitulo.innerText = '';};

let divUsuario = document.getElementById('divUsuario');
let lbTipo = document.getElementById('lbTipo');

divUsuario.innerText = "DESCONECTADO";
lbTipo.innerText = "Inicie sesión";


let GlobalSelectedDiaUpdated  = 0;
let GlobalObjetivoVenta = 0;
let GlobalCodUsuario = 99999;
let GlobalUsuario = 'DESTASERSA';
let GlobalPassUsuario = '';
let GlobalNivelUser = 0;
let GlobalTipoUsuario ='';
let GlobalSelectedDia ='';
let GlobalBool = false;

let GlobalSelectedForm = '';

let map; //mapa de leaflet
let GlobalGpsLat = 0;
let GlobalGpsLong = 0;
let GlobalSelectedLat = ''; let GlobalSelectedLong='';
let GlobalMarkerId = 0;
let GlobalSelectedId;
let GlobalSelectedCodigo;
let GlobalSelectedFecha;
let GlobalCoddoc = 'PED01';
let GlobalTotalDocumento = 0;
let GlobalTotalCostoDocumento = 0;
let GlobalCodBodega = '01';
let GlobalTipoCobro = 'TERMINAR';

let GlobalSelectedCodven = 0;



let GlobalSelectedCodCliente;
let GlobalSelectedNomCliente;
let GlobalSelectedDirCliente;

// global vars para cantidad producto
let GlobalSelectedCodprod = '';
let GlobalSelectedDesprod = '';
let GlobalSelectedCodmedida = '';
let GlobalSelectedEquivale = 0;
let GlobalSelectedCantidad = 0;
let GlobalSelectedExento = 0;
let GlobalSelectedCosto = 0;
let GlobalSelectedPrecio = 0;
let GlobalSelectedExistencia = 0;
// global vars para cantidad producto

let GlobalSelectedCodEmbarque ='';
let GlobalSelectedStatus=0;
let GlobalSelectedSt = 'O';
let GlobalSelectedCoddoc = '';
let GlobalSelectedCorrelativo = '';

let GlobalSelectedApp = '';

let GlobalSistema = 'ISC';


let GlobalLoaderMini = `<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>`;

let GlobalLoader = `
                <div>
                    <div class="spinner-grow text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-secondary" role="status"><span class="sr-only">Loading...</span></div>             
                </div>
                `

let GlobalUrl = document.location.origin.toString();

let nowhatsapp = '50257255092';


let FEL = {
    CodigoEstablecimiento:"3",
    NITEmisor:"98110462",
    NombreComercial:"DESTASERSA SANTA CRUZ",
    NombreEmisor:"DESTASERSA SANTA CRUZ",
    Direccion:"CALLEJON SANTOS ALDEA DON GREGORIO ZONA 0",
    CodigoPostal:"06012",
    Municipio:"SANTA CRUZ NARANJO",
    Departamento:"SANTA ROSA",
    ACCESO_REQ_NOMBRE:"98110462",
    ACCESO_REQ_CLAVE:"6DD51D2CBE93D0F612FC803919589D15",
    ACCESO_FIRMA_USUARIO:"98110462",
    ACCESO_FIRMA_CLAVE:"8839be349a79af19f44325cb45e1fcf2",
    URL_REPORT_INFILE: "https://report.feel.com.gt/ingfacereport/ingfacereport_documento?uuid=",
    CONFIG_FEL_HABILITADO: 'SI'
};

function showWaitForm(){
    $('#modalWait').modal('show');
};


function hideWaitForm(){
    //esta linea ayuda a que las modales cierren
    if ($('.modal-backdrop').is(':visible')) {
        $('body').removeClass('modal-open'); 
        $('.modal-backdrop').remove(); 
    };

    //$('#modalWait').modal('hide');
    document.getElementById('btnCerrarModalWait').click();

};


//elimina los mensajes de console (  logger.disableLogger()  )
var logger = function()
{
    var oldConsoleLog = null;
    var pub = {};

    pub.enableLogger =  function enableLogger() 
                        {
                            if(oldConsoleLog == null)
                                return;

                            window['console']['log'] = oldConsoleLog;
                        };

    pub.disableLogger = function disableLogger()
                        {
                            oldConsoleLog = console.log;
                            window['console']['log'] = function() {};
                        };

    return pub;
}();


