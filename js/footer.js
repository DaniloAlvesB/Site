footer.innerHTML = `
    <div class="container p-4 bg-realy-dark text-light">
      <section class="mb-4">
        <!-- WhatsApp -->
        <a href="https://api.whatsapp.com/send?phone=5516997066673&text=Ol%C3%A1!" class="m-2"><img style="cursor: pointer;" height="40rem" src="/king_NEs/imagens/Logo/social-media-logo-collection/3x/Ativo 5@3x.png" alt=""></a>
  
        <!-- Twitter -->
        <a href="" class="m-2"><img style="cursor: pointer;" height="40rem" src="/king_NEs/imagens/Logo/social-media-logo-collection/3x/Ativo 6@3x.png" alt=""></a>
  
      <section class="mb-4 text-light">
        <p>Encontre todo tipo de produto para sua dieta e treino aqui no nosso site!</p>
      </section>

      <section class="">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase text-warning">Páginas</h5>
  
            <ul class="list-unstyled mb-0">
              <li>
                <a href="/king_NEs/index.html" class="text-white">Página Inicial</a>
              </li>
              <li>
                <a href="/king_NEs/html/usuario.html" class="text-white">Usuário</a>
              </li>
            </ul>
          </div>


          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase text-warning">Alimentos</h5>
  
            <ul class="list-unstyled mb-0">
              <li>
                <a href="/king_NEs/html/ProteinaAnimal.html" class="text-white">Proteína Animal</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase text-warning">Suplementos</h5>
  
            <ul class="list-unstyled mb-0">
              <li>
                <a href="/king_NEs/html/Suplemento.html" class="text-white">Suplemento</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase text-warning">Outros</h5>
  
            <ul class="list-unstyled mb-0">
              <li>
                <a href="" class="text-white">...</a>
              </li>
            </ul>
          </div>

          </div>
        </div>
    
      </section>
     
    </div>

  
    <!-- Copyright -->
    <div class="text-center p-3 text-warning">
      © 2022 Copyright:
      <a class="text-white" href="#">King Nutrição Esportiva</a>
    </div>

`

if(!localStorage.getItem('name')){
    localStorage.setItem('name', "Nome");
}

if(!localStorage.getItem('endereco')){
    localStorage.setItem('endereco', "Endereço com número");
}

if(!localStorage.getItem('telefone')){
    localStorage.setItem('telefone', "Telefone para contato");
}