let totalCost = 0;

function addToCart(productName, productPrice) {
	const cart = document.querySelector(".cart-items");
	const p = document.createElement("p");
	p.innerHTML = `${productName} - $${productPrice} <button class="button_delete" onclick="removeFromCart(this)">Удалить</button>`;
	cart.appendChild(p);
	totalCost += productPrice;
	document.querySelector(".total").textContent = `Total: $${totalCost}`;
}

function removeFromCart(item) {
	const productPrice = parseInt(item.parentNode.textContent.split("$")[1]);
	totalCost -= productPrice;
	document.querySelector(".total").textContent = `Total: $${totalCost}`;
	item.parentNode.remove();
}