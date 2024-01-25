function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}

function closeGallery() {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function (popup) {
        popup.style.display = 'none';
    });
}

function handleKeyPress(event) {
    if (event.key === "Escape") {
        closeGallery();
    }
}

document.addEventListener("keydown", handleKeyPress);


$(function(){
    var url = window.location.href; 
    $("#sub-header a").each(function() {
        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var currentPage = window.location.href;
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        if (link.href === currentPage) {
            link.classList.add('active');
        }
    });
});


