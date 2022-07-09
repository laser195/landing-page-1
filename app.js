$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items: 1,
      loop:true,
      margin:10,
      autoHeight:true,
      autoplay:true,
      autoplayTimeout:2000,
      animatout:'backOutDown',
      nav:false
      
    
});
$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1000,
    });
  });
  const cardsOne = document.querySelector('frist-cards')
  const navOne = document.querySelector('#nav-2')

   let llist = document.querySelector('#dropdown')
      let btn = document.querySelector('#dropdownMenuButton1')
      let list = document.querySelector('#dropdown-menu')
      console.log(llist);
      llist.addEventListener('mouseover',()=>{
        console.log(111);
        btn.classList.add('show')
        list.classList.add('show')
      })
      llist.addEventListener('mouseleave',()=>{
        console.log(111);
        btn.classList.remove('show')
        list.classList.remove('show')
      })

      ScrollOut({
        targets: ".sticky-header",
        offset: 1000,
      });

      if(navOne.getElementsByClassName.position=='fixed'){
        cardsOne.getElementsByClassName.position='absolute'
      }