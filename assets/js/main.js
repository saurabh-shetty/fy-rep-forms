$(() => {

    $("#rep-form").on('submit', (e) => {

        $.toast({
            heading: 'Success',
            text: 'Your application is submitted',
            icon: 'success',
            position: 'bottom-right',
            stack: false,
            showHideTransition: 'slide',
        });

        window.location = "http://fy-rep.surge.sh/";
    });
});