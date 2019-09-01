$(() => {

    $("#submitForm").on('click', (e) => {
        e.preventDefault();

        let name = $.trim($("#name").val());
        let email = $.trim($("#email").val());
        let mobile = $.trim($("#mobile").val());
        let branch = $.trim($("#branch").val());
        let role_team = $.trim($("#role_team").val());
        let resume_link = $.trim($("#resume").val());

        let q1 = $.trim($("#reason").val());
        let q2 = $.trim($("#hardest_challenge").val());
        let q3 = $.trim($("#hardest_team").val());

        let github_link = $.trim($("#github").val());
        let linkedin_link = $.trim($("#linkedin").val());

        console.log(branch, role_team, github_link, linkedin_link);

        const url = `docs.google.com/forms/d/e/1FAIpQLSe4dsJ-fveIk-iTZ25cSlzSuFi31sslGXZXECDn8KfVULzrJQ/formResponse?usp=pp_url&entry.1821348361=${name}&entry.1663120441=${email}&entry.609147553=${mobile}&entry.113314376=${branch}&entry.1370152404=${role_team}&entry.2061758602=${q1}&entry.1973063140=${q2}&entry.1609758082=${q3}&entry.1892787611=${resume_link}&submit=Submit`;
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
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/'+url,
            method: 'GET',
            cors: true,
            secure: true,
            success: function(data) {
                console.log(data);
                $.toast({
                    heading: 'Success',
                    text: 'Your application is submitted',
                    icon: 'success',
                    position: 'bottom-right',
                    stack: false,
                    showHideTransition: 'slide',
                });
            },
            error: function(err) {
                $("#submitForm").attr("disabled", false);
                console.log(err);
                $.toast({
                    heading: 'Error',
                    text: 'Error occurred while submitting form',
                    icon: 'error',
                    position: 'bottom-right',
                    stack: false,
                    showHideTransition: 'slide',
                });
            }
        });
    });
});