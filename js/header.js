
var nmb = localStorage.length-3;

if(nmb > 0){
    nmb = `
        <button class="btn btn-danger" style="border-radius: 50px">${nmb}</button>
    `
}else{
    nmb = `
        <button class="btn bg-realy-dark text-dark" style="border-radius: 50px">${nmb}</button>
    `
}

function detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }

let celular = detectar_mobile();

if(celular == true) {
    console.log("Celular")
    header.innerHTML = `
        <div class="navbar navbar-expand-lg navbar-fixed-top justify-content-around bg-realy-dark d-flex flex-column">
            <div style="min-width: 10rem;">
            <h2 id="logo" style="color: rgb(255, 255, 255); " class="d-flex flex-column tex-center"> <p style="margin-left: 2.7rem;" class="text-dourado">King</p> <p style="color: rgb(255, 255, 255); font-size: 0.6em; margin-top: -1rem;">Nutrição Esportiva</p></h2>
            </div>

            <div class="navbar-nav navbar-right d-flex flex-wrap">

            </div>

            <div class="navbar-nav navbar-right d-flex flex-row">
                <a href="https://api.whatsapp.com/send?phone=5516997066673&text=Ol%C3%A1!" class="m-2"><img style="cursor: pointer;" height="40rem" src="/king_NEs/imagens/Logo/social-media-logo-collection/3x/Ativo 5@3x.png" alt=""></a>
                <a href="" class="m-2"><img style="cursor: pointer;" height="40rem" src="/king_NEs/imagens/Logo/social-media-logo-collection/3x/Ativo 6@3x.png" alt=""></a>
                <a href="/king_NEs/html/usuario.html" class="a_txt ml-5" style="margin-top: 5%"><img src="/king_NEs/imagens/Logo/social-media-logos-and-icons-set/3x/user.png" height="25rem"></a>
                <a href="/king_NEs/html/Carrinho.html" target="_blank" class="a_txt mt-2 ml-3"><img src="/king_NEs/imagens/Logo/shopping-icons-collection/3x/market.png" height="25rem"> ${nmb}</a>
            </div>
            <div class="btn-group">
                <a class="btn bg-realy-dark dropdown-toggle text-light" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                |||
                </a>
                <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                <h5>Menus</h5>
                <li><a href="/king_NEs/index.html" class="a_txt m-2 text-dark">Página inical</a></li>
                <h5>Produtos</h5>
                <li><a class="dropdown-item" href="/king_NEs/html/ProteinaAnimal.html">Proteína animal</a></li>
                <li><a class="dropdown-item" href="/king_NEs/html/Suplementos.html">Suplementos</a></li>
                </ul>
            </div>
        </div>
        
    `
}else{
    console.log("PC")
    header.innerHTML = `
        <div class="navbar navbar-expand-lg navbar-fixed-top justify-content-around bg-realy-dark">
            <div style="min-width: 10rem;">
            <h2 id="logo" style="color: rgb(255, 255, 255); " class="d-flex flex-column tex-center"> <p style="margin-left: 2.7rem;" class="text-dourado">King</p> <p style="color: rgb(255, 255, 255); font-size: 0.6em; margin-top: -1rem;">Nutrição Esportiva</p></h2>
            </div>

            <div class="navbar-nav navbar-right d-flex flex-wrap">
            <a href="/king_NEs/index.html" class="a_txt m-2">Página inical</a>

            <div class="btn-group">
                <a class="btn bg-realy-dark dropdown-toggle text-light" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                Produtos
                </a>
                <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                <li><a class="dropdown-item" href="/king_NEs/html/ProteinaAnimal.html">Proteína animal</a></li>
                <!-- <li><a class="dropdown-item" href="#">Proteína vegetal</a></li> -->
                <li><a class="dropdown-item" href="/king_NEs/html/Suplementos.html">Suplementos</a></li>
                <!-- <li><a class="dropdown-item" href="#">Dia do lixo</a></li> -->
                </ul>
            </div>

            </div>

            <div class="navbar-nav navbar-right d-flex flex-wrap">
                <a href="https://api.whatsapp.com/send?phone=5516997066673&text=Ol%C3%A1!" class="m-2"><img style="cursor: pointer;" height="40rem" src="/king_NEs/imagens/Logo/social-media-logo-collection/3x/Ativo 5@3x.png" alt=""></a>
                <a href="" class="m-2"><img style="cursor: pointer;" height="40rem" src="/king_NEs/imagens/Logo/social-media-logo-collection/3x/Ativo 6@3x.png" alt=""></a>
                <a href="/king_NEs/html/usuario.html" class="a_txt ml-5" style="margin-top: 5%"><img src="/king_NEs/imagens/Logo/social-media-logos-and-icons-set/3x/user.png" height="25rem"></a>
                <a href="/king_NEs/html/Carrinho.html" target="_blank" class="a_txt mt-2 ml-3"><img src="/king_NEs/imagens/Logo/shopping-icons-collection/3x/market.png" height="25rem"> ${nmb}</a>
            </div>

        </div>
    `
}

if(!localStorage.getItem('name')){
    localStorage.setItem('name', "Nome");
}

if(!localStorage.getItem('endereco')){
    localStorage.setItem('endereco', "Endereço com número");
}

if(!localStorage.getItem('telefone')){
    localStorage.setItem('telefone', "Telefone para contato");
}