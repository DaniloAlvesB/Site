footer.innerHTML = `
    <div class="container p-4 bg-realy-dark text-light">
      <section class="mb-4">
        <!-- WhatsApp -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i class="fab fa-facebook-f"></i>
        </a>
  
        <!-- Twitter -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i class="fab fa-twitter"></i>
        </a>
  
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
                <a href="/king_NEs/usuario.html" class="text-white">Usuário</a>
              </li>
            </ul>
          </div>


          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase text-warning">Alimentos</h5>
  
            <ul class="list-unstyled mb-0">
              <li>
                <a href="/king_NEs/ProteinaAnimal.html" class="text-white">Proteína Animal</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase text-warning">Suplementos</h5>
  
            <ul class="list-unstyled mb-0">
              <li>
                <a href="/king_NEs/Suplemento.html" class="text-white">Suplemento</a>
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