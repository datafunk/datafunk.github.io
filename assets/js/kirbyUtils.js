var BP = BP || {};
var console = window.console || {
    log: function() {},
    error: function() {},
    info: function() {}
};
BP.kirbyUtils = (function() {

    var isMobile = false;

    var checkScreen = (function()  {
        // console.log([$(window).width(), $(window).height()]);
        // if (navigator.userAgent.match(/Android|BlackBerry|Mobile|iPhone|iPod|iPad|Opera Mini|IEMobile|PlayBook/i) || $(window).width() < 736) {
        if (navigator.userAgent.match(/Android|BlackBerry|Mobile|iPhone|iPod|iPad|Opera Mini|IEMobile|PlayBook/i)) {
            // isMobile = true;
            $('body').addClass('mobile');
            // $('header.header.cf a.logo').addClass('mobile');
            isMobile = true;
        } else {
            $('body').removeClass('mobile');
            // $('header.header.cf a.logo').removeClass('mobile');
            isMobile = false;
        }
    })();
    // checkScreen();
    $(window).on('resize', checkScreen);


    $('a').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
            $(this).click(function(event) {
                event.preventDefault();
                event.stopPropagation();
                window.open(this.href, '_blank');
            });
        }
    });

    // var isHome = false;
    // if (window.location.hostname.match('borbely.info')) {
    //     isHome = true;
    // } else if (isMobile === false) {
    //     $('header.header.cf div span')[0].textContent = window.location.hostname;
    //     $('header.header.cf div small')[0].textContent = ' aka';
    // }



    return {
        isMobile: isMobile
        // isHome: isHome
    };

});

//
// BP.email = (function() {
//
//     var email = '';
//     var php_path = '/static/';
//
//     function validateEmail(email) {
//         var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//         return re.test(email);
//     }
//
//     var emailMsg = function() {
//         email = $('#semail').val();
//
//         var test = false;
//
//         if (email === '' || validateEmail(email) === false) {
//             $('#semail').addClass('error');
//             $($("label[for='semail']")[0]).addClass('error');
//             $($("label[for='semail']")[0]).html('Please provide a valid email address');
//             test = false;
//         } else {
//             $('#semail').removeClass('error');
//             $($("label[for='semail']")[0]).removeClass('error');
//             $($("label[for='semail']")[0]).html('Your email *');
//             test = true;
//         }
//
//         return test;
//     };
//
//     var nameMsg = function() {
//
//         var test = false;
//
//         if ($('#sname').val() === '') {
//             $('#sname').addClass('error');
//             $($("label[for='sname']")[0]).addClass('error');
//             $($("label[for='sname']")[0]).html('Please let me know your name');
//             test = false;
//         } else {
//             $('#sname').removeClass('error');
//             $($("label[for='sname']")[0]).removeClass('error');
//             $($("label[for='sname']")[0]).html('Your name *');
//             test = true;
//         }
//
//         return test;
//     };
//
//     function processResponse(response) {
//         console.log([response, response.status]);
//         if (response.status === "sent") {
//             $('#BP_email_response').removeClass('error');
//             $('#BP_email_response').html('Thank you. Your email has been sent.');
//         } else {
//             $('#BP_email_response').addClass('error');
//             $('#BP_email_response').html('Something went wrong. Your email has not been sent.');
//         }
//     }
//
//     function sendMail() {
//
//         var $form = $('#BP_mail');
//         var $inputs = $form.find('input, radio, textarea, button');
//         var serializedData = $form.serialize();
//
//         // disabling inputs while AJAX is in progress
//         $inputs.prop("disabled", true);
//
//         var request = $.ajax({
//             url: php_path + 'sendmail.php',
//             type: 'post',
//             data: serializedData,
//             beforeSend: function() {
//                 if (nameMsg() === false || emailMsg() === false) {
//                     console.error('missing info, terminating');
//                     $('#BP_email_response').addClass('error');
//                     $('#BP_email_response').html('Please fill out all fields marked with an * asterisk! ');
//                     return false;
//                 }
//             }
//         });
//
//         request.done(function(response, textStatus, jqXHR) {
//             console.info('== done ==\n');
//             console.info(response, textStatus, jqXHR);
//             processResponse(response);
//         });
//
//         request.fail(function(jqXHR, textStatus, errorThrown) {
//             console.error('== error ==\n');
//             console.error(jqXHR, textStatus, errorThrown);
//             $('#BP_email_response').addClass('error');
//             $('#BP_email_response').html('Sorry, Something went wrong.');
//         });
//
//         request.always(function() {
//             // console.info('== always ==\n');
//             $inputs.prop("disabled", false);
//         });
//
//         // event.preventDefault();
//
//     }
//     //  END sendMail()
//
//     $('#sname').on('blur', function() {
//         nameMsg();
//     });
//
//     $('#semail').on('blur', function() {
//         emailMsg();
//     });
//
//     $('#submit').on('click', function(event) {
//         event.preventDefault();
//         // event.defaultPrevented();
//         sendMail();
//     });
//
//     return {
//         nameMsg: nameMsg,
//         emailMsg: emailMsg
//     };
//
//
// });



document.addEventListener('DOMContentLoaded', function() {
    BP.kirbyUtils();
    // if (window.location.href.indexOf('/contact') !== -1) {
    //     BP.email();
    // }
}, false);
