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

})(jQuery);