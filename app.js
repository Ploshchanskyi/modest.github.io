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


closeBtn.setAttribute("style", "cursor:pointer");
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function(e) {
	if (e.target === modal) {
		closeModal()
	}
})


let html = document.documentElement;
let body = document.body;

window.onscroll = function() {
	if (html.scrollTop > 2736) {
		modal.classList.add("show");
		modal.classList.remove("hide");
	} else {
		modal.classList.add("hide");
		modal.classList.remove("show");
	}
}



