

// ------------------------- menu-bar toggle -----------------------------------

const menu=document.querySelector('.menu-icon')

const li=document.querySelector('nav ul')
li.style.maxHeight='0px'
menu.addEventListener('click',()=>{
    if(li.style.maxHeight=='0px'){
        li.style.maxHeight='300px'
       
     
    
       
    }
    else{
        li.style.maxHeight='0px'
        
    }
})


// ------------------------- single product details img change -----------------------------------

const product = document.querySelector('#productimg');
const smallImages = document.querySelectorAll('.small-img-row img');

smallImages.forEach(img => {
    img.addEventListener('click', () => {
        product.src = img.src;
    });
});


// ------------------------- login form toggle -----------------------------------

// buttons
const loginbtn=document.getElementById('login')
const registerbtn=document.getElementById('register')

// form container
const formbtn=document.querySelectorAll('.form-btn')

// form indicator
const indicator=document.getElementById('indicator')

// form content
const login=document.getElementById('login-form')
const register= document.getElementById('register-form')


formbtn.forEach(btn=>{
    btn.addEventListener('click',(event)=>{

        if(event.target==loginbtn){
           
            login.style.transform='translate(300px)'
            register.style.transform='translate(300px)'
            indicator.style.transform='translate(0px)'

            // save in storage
            sessionStorage.setItem('mode','login')
           
         
        }
        else{

            register.style.transform='translate(0px)'
            login.style.transform='translate(0px)'       
            indicator.style.transform='translate(100px)'

            // save in storage
            sessionStorage.setItem('mode','register')
           
  
        }
    })
})

// Restore the last selected form when the page reloads
window.addEventListener('load', () => {
    const mode = sessionStorage.getItem('mode');
    if (mode === 'register') {
        register.style.transform = 'translate(0px)';
        login.style.transform = 'translate(0px)';
        indicator.style.transform = 'translate(100px)';
     
    } 
    else {
        login.style.transform = 'translate(300px)';
        register.style.transform = 'translate(300px)';
        indicator.style.transform = 'translate(0px)';
        
    }

});



// ------------------- navicate to product details page ----------------------------



document.addEventListener("DOMContentLoaded", () => {
   const productbtn=document.getElementById('product_1')
productbtn.addEventListener('click',()=>{
    window.location.href='product_details.html'
})
});
// ------------------------- navigate to cart page -----------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const cartbtn = document.getElementById('cart');
    cartbtn.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });
});

// ------------------------- smooth scrolling -----------------------------------

var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 1000,
            speedAsDuration: true
        });

// ------------------------- Products Subtotal calculation -----------------------------------

function updateAllPrice(){
    document.querySelectorAll(".carts").forEach(row=>{
 const mrp=Number(row.querySelector('.mrp').innerText)
const quantityInput=Number(row.querySelector('.quantity').value)
const subtotal=row.querySelector('.price')
subtotal.innerText=(mrp * quantityInput).toFixed(2)
    })
}
   
updateAllPrice()

document.querySelectorAll('.quantity').forEach(input=>{
    input.addEventListener('input',updateAllPrice)
})


// ------------------------- calculate Total  -----------------------------------




// ------------------------- smooth scrolling -----------------------------------


// ------------------------- smooth scrolling -----------------------------------
