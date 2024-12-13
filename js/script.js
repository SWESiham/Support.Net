const swiper = new Swiper(".swiper", {
  // Optional parameters
  // spaceBetween:10,
  loop: true,
  speed: 6500,
  slidesPerView: "auto",
  freeMode:true,
  autoplay: {
    delay:0,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Default parameters
  slidesPerView: 1,
  // spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    
    // when window width is >= 1670px
    1670:{
      slidesPerView: 3,
      // spaceBetween: 40,
    },
    906:{
      slidesPerView: 2,
      // spaceBetween: 40,
    },
    
  },
});



const boxes = document.querySelectorAll('.box');
const header = document.querySelector('.headers-sec-2 h1');
const paragraph = document.querySelector('.headers-sec-2 p');
const image = document.querySelector('.img img');

const contentData = {
  'con-1': {
    header: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae, aspernatur Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: './img/working-1.jpg'
  },
  'con-2': {
    header: 'Unde omnis iste natus error sit voluptatem.',
    paragraph: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    image: './img/working-2.jpg'
  },
  'con-3': {
    header: 'Et harum quidem rerum facilis est et expedita.',
    paragraph: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.',
    image: './img/working-3.jpg'
  },
  'con-4': {
    header: 'Nemo enim ipsam voluptatem quia voluptas sit.',
    paragraph: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur.',
    image: './img/working-4.jpg'
  }
};

boxes.forEach(box => {
  box.addEventListener('click', () => {
   
    const boxClass = box.classList[1];

    
    if (contentData[boxClass]) {
      header.textContent = contentData[boxClass].header;
      paragraph.textContent = contentData[boxClass].paragraph;
      image.src = contentData[boxClass].image;
    }

    
    boxes.forEach(b => b.classList.remove('con-1'));
    box.classList.add('con-1');
  });
});
