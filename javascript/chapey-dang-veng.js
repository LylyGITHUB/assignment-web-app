
        // function​ slider
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

        // function​ btn go to top
        window.onscroll = function () {

            var mybutton = document.getElementById("myBtn");

            if (document.documentElement.scrollTop > 200) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        function getParameters() {
            const searchParams = new URLSearchParams(window.location.search);
            const detail = searchParams.get("detail");
            const about = searchParams.get("about");
            if (detail || about) {
                console.log(`success chapey detail`);
            } else {
                window.location.href ='/html/login-form.html'
            }
        }
        getParameters();