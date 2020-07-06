let send_btn = document.querySelector(".send_form_btn");
let modal_send = document.querySelector(".send_form");
let closeBtn = document.querySelector(".button_close");
let modal = document.querySelector(".modal");


send_btn.addEventListener("click", function() {
	modal_send.classList.add("show");
	modal_send.classList.remove("hide");	
})

function closeModal () {
	modal.classList.add("hide");
	modal.classList.remove("show");
}

function openModal () {
	modal.classList.add("show");
	modal.classList.remove("hide");
}


closeBtn.setAttribute("style", "cursor:pointer");
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function(e) {
	if (e.target === modal) {
		closeModal()
	}
})


let html = document.documentElement;

 function openModalByScroll() {
	if (window.pageYOffset > html.scrollHeight/2) {
		openModal();
		window.removeEventListener("scroll", openModalByScroll)
	} else {
		closeModal()
	}
}

window.addEventListener("scroll",openModalByScroll)





$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  freeScroll: true,
  wrapAround: true,
  autoPlay: true,
  

});

AOS.init();



