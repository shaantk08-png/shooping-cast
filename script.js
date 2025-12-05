fetch("http://localhost:5000/products")
  .then(res => res.json())
  .then(products => {
    const box = document.getElementById("products");

    products.forEach(item => {
      box.innerHTML += `
        <div class="card">
          <img src="${item.image}">
          <h2>${item.name}</h2>
          <p class="price">₹${item.price}</p>
          <button class="btn" onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
      `;
    });
  });

function addToCart(id) {
  fetch("http://localhost:5000/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  })
    .then(res => res.json())
    .then(data => alert("Added to cart!"));
}
