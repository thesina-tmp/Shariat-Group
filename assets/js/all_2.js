// Modal gallery image
var images = document.querySelectorAll('.gallery a');
var lightboxImg = document.getElementById('lightbox-img');
var currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    showImage(currentIndex);
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showImage(index) {
    lightboxImg.src = images[index].href;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (e) {
        e.preventDefault();
        openLightbox(Array.prototype.indexOf.call(images, this));
    });
}

document.getElementById("lightbox").addEventListener('click', function (e) {
    if (e.target === this) {
        closeLightbox();
    }
});


// Typewriter
var Typewriter = function (element, texts, period) {
    this.element = element;
    this.texts = texts;
    this.period = parseInt(period, 10) || 2000;
    this.currentText = '';
    this.isDeleting = false;
    this.textIndex = 0;
    this.type();
};

Typewriter.prototype.type = function () {
    var self = this;
    var fullText = this.texts[this.textIndex];

    if (this.isDeleting) {
        this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
        this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    var textElement = this.element.querySelector('.text');
    var textToDisplay = '';

    if (this.textIndex === 0) {
        textToDisplay = '<span class="gold">' + this.currentText.substring(0, 13) + '</span>' + '<span class="white">' + this.currentText.substring(13); + '</span>'
    } else if (this.textIndex === 1) {
        textToDisplay = '<span class="white">' + this.currentText.substring(0, 13) + '</span>' + '<span class="gold">' + this.currentText.substring(13); + '</span>'
    }

    textElement.innerHTML = textToDisplay;

    var typingSpeed = 75;

    if (this.isDeleting) {
        typingSpeed /= 2;
    }

    if (!this.isDeleting && this.currentText === fullText) {
        typingSpeed = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
        this.isDeleting = false;
        this.textIndex++;
        if (this.textIndex >= this.texts.length) {
            this.textIndex = 0;
        }
        fullText = this.texts[this.textIndex];
    }

    setTimeout(function () {
        self.type();
    }, typingSpeed);
};


var typewriterElement = document.getElementById('typewriter');
var texts = ['Shariat Group Construction Company', 'شرکت ساختمانی گروه شریعت'];
var typewriter = new Typewriter(typewriterElement, texts, 3000);
