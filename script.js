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

function showTotal() {
    const orderTotal = document.getElementById("orderTotal");
    orderTotal.innerHTML = "";

    if (isTotalHidden === false) {
        let total = 0;

        for (let i = 0; i < cartItems.length; i++) {
            total  += cartItems[i].price;
            //total = total + cartItems[i].price;
        }
        orderTotal.innerHTML += "Total: $" + total;

    }
    
}

function addToCart(item) {
    cartItems.push(item);

    document.getElementById("itemCounter").innerHTML = cartItems.length;
    showTotal();
    
}

function clickCart() {
    isTotalHidden = !isTotalHidden;
    showTotal();
    
}


