///scrooll effect
window.addEventListener("scroll", () => {
  const navbar1 = document.querySelector(".navbar1");
  const navbar = document.querySelector(".navbar");
  const height = window.getComputedStyle(navbar1).height;
  if (window.scrollY >= parseInt(height)) {
    navbar1.style.cssText = `
      position:fixed;
      background:#CCD1E4;
      top:0;
      left:0;
      box-shadow:var(--shadow);
    `;
    navbar.classList.add("container");
  } else {
    navbar1.style.cssText = `
    position:static;
    backgorund:white;
    box-shadow:none;
  `;
    navbar.classList.remove("container");
  }
});
//navbar toggleer
function navToggle() {
  const bars = document.querySelector(".bars");
  const navbar2 = document.querySelector(".navbar2");
  bars.addEventListener("click", () => {
    navbar2.classList.toggle("active");
    bars.classList.toggle("x");
    document.body.classList.toggle("body-scroll");
  });
}
navToggle();
//profile toggle
const profile = document.querySelector(".navbar1 .profile button");
const profileoptions = document.querySelector(
  ".navbar1 .profile .profile-options"
);

profile.addEventListener("click", () => {
  profileoptions.classList.toggle("active");
});

//usereditortoggle
const edituserbtn = document.querySelector('.profile-edit');
const editForm = document.querySelector('.edit-form');
edituserbtn.addEventListener('click', ()=>{
  editForm.classList.toggle('active');
});


const $cart = doument.querySelector('.prod-cart');

$cart.addEventListener('click', (e)=>{
  if(e.target.classList.contains('remove-prod')){
    const prodId = e.target.dataset.id;
    fetch('/cart/delete', {
      method:'delete'
    })
      .then(res=>res.json())
      .then(cart=>{
        console.log(cart);
      })
      .catch(err=>console.log(err))
  }
})


