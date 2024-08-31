document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-button');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none'; 
                }
            });
        });
    });

   
    document.querySelector('.filter-button[data-filter="all"]').click();
});




const slidebar = document.querySelector('.slidebar');
const leftButton = document.getElementById('leftbutton');
const rightButton = document.getElementById('rightbutton');

const scrollAmount = 1500; 


function scrollLeft() {
    slidebar.scrollBy({
        left: -scrollAmount, 
        behavior: 'smooth'
    });
}


function scrollRight() {
    slidebar.scrollBy({
        left: scrollAmount, 
        behavior: 'smooth'
    });
}

leftButton.addEventListener('click', scrollLeft);
rightButton.addEventListener('click', scrollRight);



function addToCart(name, price) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name: name, price: price });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Item added to cart!');
}
