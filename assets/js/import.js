/* eslint-disable space-before-blocks */
/* eslint-disable object-shorthand */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
jQuery(document).on('click', '#wp-admin-bar-importbtn a', (e) => {
    e.preventDefault();
    jQuery.ajax({
        type: "post",
        url: ajaxurl,
        data: '&action=import_chapters',
        beforeSend: () => {
            jQuery('body.wp-admin').css({
                opacity: '0.3',
                pointerEvents: 'none'
            });
        },
        success: function (response) {
            console.log(response);

            jQuery('body.wp-admin').css({
                opacity: '1',
                pointerEvents: 'auto'
            });
        }
    });
});