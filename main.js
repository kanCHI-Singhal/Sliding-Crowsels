<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
const swiper = new Swiper('.swiper', {
loop: true,
pagination: {
  el: '.swiper-pagination',
},
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
});
