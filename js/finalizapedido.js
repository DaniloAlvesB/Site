function pedido(list){

    let pedido = ""
    let max_produtos = 500;

    for(let i = 0; i < list.length; i++){
        if(localStorage.getItem(list[i][0])){
            var quant = localStorage.getItem(list[i][0]);
            pedido += `<li>-  ${list[i][0]} x${quant}`
            pedido += `;       ]`
        }
    }
    
    return pedido;
}

function finaliza(pedido){

    let name = localStorage.getItem('name');

    let base = "https://api.whatsapp.com/send?phone=5516992659359&text=";

    let pedido2 = `${name}.<ul>    ${pedido}</ul>`
    pedido2 = pedido2.replace(/]/g, "<p>");

    return pedido2;
}
function envia(pedido){

    let name = "Nome: " + localStorage.getItem('name') + "%0A";

    let base = "https://api.whatsapp.com/send?phone=5516992659359&text=";

    let pedido2 = `${base}${name}.]${pedido}`

    pedido2 = pedido2.replace(/ /g, "%20");
    pedido2 = pedido2.replace(/]/g, "%0A");
    pedido2 = pedido2.replace(/<li>/g, "");

    let local = localStorage.getItem('endereco');
    let tel = localStorage.getItem('telefone');

    pedido2 += `%0A%0A Endereço: ${local}`
    pedido2 += `%0A Telefone para contato: ${tel}`

    window.location.href = pedido2;
}