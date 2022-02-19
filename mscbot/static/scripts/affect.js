const hamburgur = document.querySelector('.header .nav-bar .nav-list .hamburgur');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');


hamburgur.addEventListener('click' , () =>{
        hamburgur.classList.toggle('active');
        mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll' ,()=>{
        var scroll_position = window.scrollY;
        if (scroll_position > 300){
                header.style.backgroundColor = '#080742';
        }else{
                header.style.backgroundColor = 'transparent';             
        }
});


const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
