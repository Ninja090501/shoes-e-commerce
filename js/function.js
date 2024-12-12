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

    circularSlider?.addEventListener("input", (event) => {
        const rotationValue = event.target.value; // Get slider value (0 to 360)
        updateRotation(rotationValue);
    });

    function updateRotation(rotationValue) {
        if (productImage) {
            productImage.style.transform = `rotateY(${rotationValue}deg)`; // Rotate the image
        }
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

    //Hide and Show Email Form and Details
    $(document).ready(() => {
        console.log("Document ready");

        // Debug logs for element existence
        const editBtn = $('.edit-btn');
        const form = $('.email-detail form');
        const emailHeading = $('.email-detail h3');
        const emailParagraph = $('.email-detail p');
        const saveButton = form.find('button');
        const c_editBtn = $('.contact-btn');
        const c_form = $('.contact-detail form');
        const c_heading = $('.contact-detail h3');
        const c_paragraph = $('.contact-detail p');
        const c_saveButton = c_form.find('button');

        console.log({ editBtn, form, emailHeading, emailParagraph, saveButton, c_editBtn, c_form, c_heading, c_paragraph, c_saveButton });

        // Safety check
        if (editBtn.length && form.length && emailHeading.length && emailParagraph.length && saveButton.length && c_editBtn.length && c_form.length && c_heading.length && c_paragraph.length && c_saveButton.length) {
            console.log('All elements found');

            // Show the form and hide h3/p
            editBtn.on('click', function (e) {
                e.preventDefault();
                form.show();
                emailHeading.hide();
                emailParagraph.hide();
            });

            c_editBtn.on('click', function (e) {
                e.preventDefault();
                c_form.show();
                c_heading.hide();
                c_paragraph.hide();
            });

            // Hide the form and show h3/p
            saveButton.on('click', function (e) {
                e.preventDefault();
                const emailInput = form.find('input').val();
                
                if ($.trim(emailInput) !== '') {
                    emailHeading.text(emailInput); // Update the email
                }

                form.hide();
                emailHeading.show();
                emailParagraph.show();
            });

            c_saveButton.on('click', function (e) {
                e.preventDefault();
                const contactInput = c_form.find('input').val();

                if ($.trim(contactInput) !== ''){
                    c_heading.text(contactInput); // Update the contact
                }

                c_form.hide();
                c_heading.show();
                c_paragraph.show();
            });
        } else {
            console.error("One or more elements are missing.");
            if (!editBtn.length) console.error("Edit button (.edit-btn) not found.");
            if (!form.length) console.error("Form (.email-detail form) not found.");
            if (!emailHeading.length) console.error("Email heading (.email-detail h3) not found.");
            if (!emailParagraph.length) console.error("Email paragraph (.email-detail p) not found.");
            if (!saveButton.length) console.error("Save button in the form not found.");
            if (!c_editBtn.length) console.error("Edit button for contact (.contact-btn) not found.");
            if (!c_form.length) console.error("Form for contact (.contact-detail form) not found.");
            if (!c_heading.length) console.error("Contact heading (.contact-detail h3) not found.");
            if (!c_paragraph.length) console.error("Contact paragraph (.contact-detail p) not found.");
            if (!c_saveButton.length) console.error("Contact save button in the form not found.");
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        // Select the checkout button and popup modal
        const checkoutBtn = document.querySelector('.checkout-btn');
        const popupModal = document.querySelector('.popup-model');
        const closeModalBtn = popupModal?.querySelector('.close-btn'); // Optional close button inside the modal
    
        // Ensure the elements exist
        if (checkoutBtn && popupModal) {
            // Add a click event to show the popup
            checkoutBtn.addEventListener('click', () => {
                popupModal.style.display = 'block'; // Show the modal
            });
    
            // Optional: Add a close event to hide the popup
            if (closeModalBtn) {
                closeModalBtn.addEventListener('click', () => {
                    popupModal.style.display = 'none'; // Hide the modal
                });
            }
    
            // Optional: Close the popup when clicking outside the modal
            window.addEventListener('click', (event) => {
                if (event.target === popupModal) {
                    popupModal.style.display = 'none';
                }
            });
        } else {
            console.error("Either .checkout-btn or .popup-model element is missing.");
        }
    });
    

})(jQuery);
