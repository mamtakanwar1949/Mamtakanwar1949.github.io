// Add to Cart
function addToCart(name, price){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name:name, price:price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " Added to Cart");
}

// Show Cart
function displayCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cartItems");
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{
        total += item.price;
        cartItems.innerHTML += `
        <p>${item.name} - ₹${item.price}</p>
        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

// Clear Cart after Payment
function clearCart(){
    localStorage.removeItem("cart");
}
music.mp3
