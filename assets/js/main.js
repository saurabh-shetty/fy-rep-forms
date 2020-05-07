$(() => {

    $("#year").on('change', () => {
        let year = $("#year").val();
        if (year === 'FY') {
            $('.sy').hide();
            $('.coordinator').removeClass('col-sm-offset-5');
        } else {
            $('.sy').show();
            $('.coordinator').addClass('col-sm-offset-5');
        }
    });

    $("#submitForm").on('click', (e) => {
        e.preventDefault();

        swal("Registered Sucessfully", "Your application has been submitted", "success");

        let name = $.trim($("#name").val());
        let email = $.trim($("#email").val());
        let mobile = $.trim($("#mobile").val());
        let branch = $.trim($("#branch").val());
        let positions = $.map($("input[name='positions[]']:checked"), function(e, i) {
            return e.value;
        });
        console.log(positions);
        let resume_link = $.trim($("#resume").val());
        let cover_link = $.trim($("#cover").val());

        let q1 = $.trim($("#reason").val());
        let q2 = $.trim($("#hardest_challenge").val());
        let q3 = $.trim($("#hardest_team").val());

        let codechef_link = $.trim($("#codechef").val());
        let github_link = $.trim($("#github").val());
        let linkedin_link = $.trim($("#linkedin").val());

        // console.log(branch, role_team, github_link, linkedin_link);

        let url = `docs.google.com/forms/d/e/1FAIpQLSe4dsJ-fveIk-iTZ25cSlzSuFi31sslGXZXECDn8KfVULzrJQ/formResponse?usp=pp_url&entry.1821348361=${name}&entry.1663120441=${email}&entry.609147553=${mobile}&entry.113314376=${branch}&entry.1370152404=${role_team}&entry.1892787611=${resume_link}`;
        if (github_link) {
            url = url + `&entry.1245110826=${github_link}`;
        }
        if (linkedin_link) {
            url = url + `&entry.1787624373=${linkedin_link}`;
        }
        url = url + `&entry.2061758602=${q1}&entry.1973063140=${q2}&entry.1609758082=${q3}&submit=Submit`;
        console.log(url);
        // try {
        //     fetch(url, {
        //             method: "POST",
        //             mode: "cors",
        //             cache: "no-cache",
        //             credentials: "same-origin",
        //             redirect: "follow",
        //             referrer: "no-referrer"
        //         }).then(resp => resp.text()).then(
        //         (res) => {
        //         console.log(res);
        //     });
        // } catch (err) {
        //     console.log(err);
        // }
        var $valid = $('.wizard-card form').valid();
        console.log($valid);
        if (!$valid) {
            return false;
        }
        $("#submitForm").attr("disabled", true);
        // $.ajax({
        //     url: 'https://cors-anywhere.herokuapp.com/'+url,
        //     method: 'GET',
        //     cors: true,
        //     secure: true,
        //     success: function(data) {
        //         console.log(data);
        //         $.toast({
        //             heading: 'Success',
        //             text: 'Your application is submitted',
        //             icon: 'success',
        //             position: 'bottom-right',
        //             stack: false,
        //             showHideTransition: 'slide',
        //         });
        //     },
        //     error: function(err) {
        //         $("#submitForm").attr("disabled", false);
        //         console.log(err);
        //         $.toast({
        //             heading: 'Error',
        //             text: 'Error occurred while submitting form',
        //             icon: 'error',
        //             position: 'bottom-right',
        //             stack: false,
        //             showHideTransition: 'slide',
        //         });
        //     }
        // });
    });
});