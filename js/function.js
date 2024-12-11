(function ($) {
    "use strict";

    var $window = $(window); 
    var $body = $('body'); 

    /* slick nav */
    $('#main-menu').slicknav({
        prependTo: '#responsive-menu',
        label: '',
        closeOnClick: true
    });

    // Password visibility toggle
    $(document).ready(function () {
        $('#toggle-password').on('click', function () {
            var $passwordField = $('#password');
            var isPasswordVisible = $passwordField.attr('type') === 'text';
            $passwordField.attr('type', isPasswordVisible ? 'password' : 'text');

            // Optional: Toggle the SVG icon appearance
            $(this).css('fill', isPasswordVisible ? 'none' : 'currentColor');
        });
    });

    // 360 Degree Rotation Using Circular Control
    const productImage = document.getElementById("productImage");
    const circularSlider = document.getElementById("circularSlider");

    circularSlider.addEventListener("input", (event) => {
        const rotationValue = event.target.value; // Get slider value (0 to 360)
        updateRotation(rotationValue);
    });

    function updateRotation(rotationValue) {
        productImage.style.transform = `rotateY(${rotationValue}deg)`; // Rotate the image
    }

    //Plus Minus Value of Cart Item
    function increaseValue() {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').value = value;
    }
        
    function decreaseValue() {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById('number').value = value;
    }
    

})(jQuery);