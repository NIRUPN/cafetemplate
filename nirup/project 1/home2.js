document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalItems = document.getElementById('total-items');
    const totalPrice = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');
    const clearItemsButton = document.getElementById('clear-items');

    function updateCart() {
        let items = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        cartItemsContainer.innerHTML = ''; 

        let itemCount = 0;
        let priceSum = 0;

        items.forEach(item => {
            itemCount++;
            priceSum += item.price;

            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        totalItems.textContent = itemCount;
        totalPrice.textContent = `$${priceSum.toFixed(2)}`;
    }

    function clearCart() {
        localStorage.removeItem('cartItems'); 
        updateCart(); 
    }

    checkoutButton.addEventListener('click', function() {
        clearCart();
        alert('Checked out successfully!');
    });

    clearItemsButton.addEventListener('click', clearCart);

    updateCart(); 
});





    
