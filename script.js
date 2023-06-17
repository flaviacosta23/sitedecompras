const cartItems = []

let isTotalHidden = true;

const backpack = {
    name: "Backpack",
    price: 200
};

const camera = {
    name: "Camera",
    price: 450
};

const barraca = {
    name: "Barraca",
    price: 800
};

function showTotal() { //essa função define o subtotal, o frete e o valor somado
    const orderTotal = document.getElementById("orderTotal");
    orderTotal.innerHTML = "";

    if (isTotalHidden === false) {
        let total = 0;

        for (let i = 0; i < cartItems.length; i++) {
            total  += cartItems[i].price; // loop para calcular somatorio dos produtos comprados

        }
        orderTotal.innerHTML = "Subtotal: $" + total; // subtotal dos produtos comprados

        const enviar = document.getElementById("envio");
        enviar.innerHTML = "Envio: $" + calculateTotal(total); //valor do frete
        

        let soma = total + calculateTotal(total);

        const totalEnvio = document.getElementById("pedidoFinal");
        totalEnvio.innerHTML = "Total: $" + soma; // valor total = subtotal + frete

    }

    
}

function addToCart(item) { //função para add o produto no carrinho
    cartItems.push(item);

    document.getElementById("itemCounter").innerHTML = cartItems.length;
    showTotal();
    
}

function clickCart() { // funçao para esconder/mostrar os valores do carrinho
    isTotalHidden = !isTotalHidden; //ao ativar a função o valor novo é o antigo negado
    showTotal();

}



function calculateTotal(totalvar) { //função que calcula o valor do frete / se nao tiver produto, frete igual a zero
    let shipping;
    if (totalvar == 0) {
        shipping = 0;
    }
    else if (totalvar >= 700) {
        shipping = 30;
    } else {
        shipping = 50;
    }
    return shipping;
}

