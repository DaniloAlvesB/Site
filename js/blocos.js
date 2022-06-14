function card1(list, bg_color, text_color, bt1, bt2) {
        for(let i = 0; i < list.length; i++){

            if(!localStorage.getItem(list[i][0])){
                localStorage.setItem(list[i][0], 0);
            }

            let item = localStorage.getItem(list[i][0]);
            if(item > 0){
                item = `Quantidade atual: ${item}Kg`
            }else{
                item = "_";
            }

            if(list[i][4] == 0){
                conteudo.innerHTML += `
                    <div class="card ${text_color} ${bg_color} m-1" style="min-width: 18rem; max-width: 18rem; min-height: 20rem, max-height: 20rem">
                        <img src="${list[i][3]}" class="card-img-top" height="150rem">
                        <div class="card-body">
                            <h5 class="card-title text-left">${list[i][0]}</h5>
                            <p class="card-text text-left">${list[i][1]}</p>
                            <p class=" text-right text-primary ml-2" style="font-weight: bold;">R$ ${list[i][2].toFixed(2)}</p>
                            <a href="#" id="compra${list[i][0]}" class="btn ${bt1} btn-block" onclick="mensagem_compra('Frangão Brabo')">Comprar</a>
                            <a onclick="AdicionaCarrinho('${list[i][0]}')" id="carrinho${list[i][0]}" class="btn ${bt2} btn-block">Adicionar ao carrinho</a>
                            <p style="margin-bottom: -15px">${item}</p>
                        </div>
                    </div>
                `

            }else{
                conteudo.innerHTML += `
                    <div class="card ${text_color} ${bg_color} m-1" style="min-width: 18rem; max-width: 18rem; min-height: 20rem, max-height: 20rem">
                        <img src="${list[i][3]}" class="card-img-top" height="150rem">
                        <div class="card-body">
                            <h5 class="card-title  text-left">${list[i][0]}</h5>
                            <p class="card-text  text-left">${list[i][1]}</p>
                            <p class=" text-right ml-2 text-primary" style="font-weight: bold;">De <s class="text-primary">R$ ${list[i][2].toFixed(2)}</s> por <c class="text-danger" style="font-weight: bold;">R$ ${list[i][2].toFixed(2)}</c></p>
                            <a href="#" id="compra${list[i][0]}" class="btn ${bt1} btn-block" onclick="mensagem_compra('Frangão Brabo')">Comprar</a>
                            <a onclick="AdicionaCarrinho('${list[i][0]}')" id="carrinho${list[i][0]}" class="btn ${bt2} btn-block">Adicionar ao carrinho</a>
                            <p style="margin-bottom: -15px">${item}</p>
                        </div>
                    </div>
                `
            }

        }
  }

  function AdicionaCarrinho(item){
    var aValue = localStorage.getItem(item);
    localStorage.setItem(item, parseInt(aValue)+1);
    document.location.reload(true);
  }