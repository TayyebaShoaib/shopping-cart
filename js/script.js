var shopping_cart = {
    products: [
        { Name: "Desktop", Description: "Dell Desktop", Price: 599, Quantity: 2 },
        { Name: "Laptop", Description: "HP Laptop", Price: 799, Quantity: 1 },
        { Name: "Pad", Description: "Samsung Pad", Price: 499, Quantity: 3 }
    ],
    cart: [],
    addToCart: function(index) {
        this.cart.push(this.products[index]);
    },
    removeFromCart: function(index) {
        cart.splice(index, 1);
    }
};

// function addToCart(index)
// {
//     var product = products[index];
//     shoppingCart.push(product);
//     console.log(shoppingCart);
//     renderHTML(shoppingCart, "shoppingCart");
// }

function changeQuantity(number)
{
    console.log("Quantity Change")
}

// function removeFromCart() 
// {
//     var index = this.id;
//     shoppingCart.splice(index, 1);
//     renderHTML(shoppingCart, "shoppingCart");
//     console.log(shoppingCart);
// }

function calculateTotal() 
{
    let totalAmount = 0;
    for(var i = 0; i < shoppingCart.length; i++)
    {
        totalAmount += shoppingCart[i].price * shoppingCart[i].quantity;
    }
}

function renderHTML(arr, div) 
{
    let  html = "";
    for(var i = 0; i < arr.length; i++) 
    {
        html += "<div class='product' id='" + i + "'>";
        html += "<img src='images/push-pin.svg'>";
        for(var key in arr[i])
        {
            html +=  "<p><span class='name'>" + key + "</span>" + ": "+ arr[i][key] + "</p>";
        }
        if (div == "shoppingCart")
        {
            html += "<a id='"+ i + "' onclick='removeFromCart()'>Delete</a>";
        }
        html += "</div>";
    }
    document.getElementById(div).innerHTML = html;
}

renderHTML(products, "products");
var productsDivs = document.querySelectorAll("#products div");
console.log(productsDivs);
// attach a click event to the product divs
for(let i = 0; i < productsDivs.length; i++)
{
    productsDivs[i].addEventListener("click", function() {
        addToCart(this.id);
    });
}