// Add to Cart
function addToCart(name, price){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name:name, price:price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " Added to Cart");
}

// Display Cart
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
    localStorage.setItem("totalAmount", total);
}

// Apply Coupon
function applyCoupon(){
    let code = document.getElementById("coupon").value;
    let total = parseInt(localStorage.getItem("totalAmount")) || 0;

    if(code === "GLOW10"){
        total = total - (total * 0.10);
        alert("10% Discount Applied ✅");
    }
    else if(code === "FEST20"){
        total = total - (total * 0.20);
        alert("20% Discount Applied 🎉");
    }
    else{
        alert("Invalid Coupon ❌");
        return;
    }

    document.getElementById("total").innerText = "Total After Discount: ₹" + total;
}

// Buy 1 Get 1 Free
function buyOneGetOne(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(cart.length > 0){
        cart.push({name: cart[0].name + " (FREE)", price:0});
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Buy 1 Get 1 Applied 🎁");
        displayCart();
    }else{
        alert("Add product first!");
    }
}
