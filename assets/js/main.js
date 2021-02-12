function sleepAWhile(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
$(() => {
	$(".sy").hide();
    /* $(".posdiv").hide();
    $("#year").on("change", () => {
        let year = $("#year").val();
        if (year === "FY") {
            $(".posdiv").show();
            $(".sy").hide();
        } else if (year === "SY") {
            $(".posdiv").show();
            $(".sy").show();
        } else {
            $(".posdiv").hide();
        }
    }); */

    $("#submitForm").on("click", (e) => {
        e.preventDefault();

        // swal(
        //     "Registered Sucessfully",
        //     "Your application has been submitted",
        //     "success"
        // );

        let name = $.trim($("#name").val());
        let email = $.trim($("#email").val());
        let mobile = $.trim($("#mobile").val());
        let year = $.trim($("#year").val());
        let branch = $.trim($("#branch").val());
        let positions = $.map($("input[name='positions[]']:checked"), function (
            e,
            i
        ) {
            return e.value;
        });
        console.log(positions);
        var positions_new=""
        for(var i=0;i<positions.length;i++)
        {
          positions_new=positions_new+positions_new[i];
        }
        // postions_new="nothing";
        console.log(positions_new);
        let resume_link = $.trim($("#resume").val());
        let cover_link = $.trim($("#cover").val());

        let q1 = btoa($.trim($("#reason").val()));
        let q2 = "";
        let q3 = "";

        let codechef_link = $.trim($("#codechef").val());
        let github_link = $.trim($("#github").val());
        let linkedin_link = $.trim($("#linkedin").val());

        // console.log(branch, role_team, github_link, linkedin_link);

        var $valid = $(".wizard-card form").valid();
        console.log($valid);
        if (!$valid) {
            return false;
        }
        $("#submitForm").attr("disabled", true);
        $("#submitForm").attr("value", "Submitting");

        let urlInit = `https://script.google.com/macros/s/AKfycby1H2rCDFlS0SwXlWRJZHmE-MAs3NgJ658m8rhLB_TrPYufj94NQF-L/exec?name=${name}&email=${email}&mobile=${mobile}&year=${year}&branch=${branch}&positions=${positions_new}&resume_link=${resume_link}&cover_link=${cover_link}&codechef_link=${codechef_link}&github_link=${github_link}&linkedin_link=${linkedin_link}&q1=${q1}`;
        let allData = {
            email,
            name,
            phone: mobile,
            year,
            branch,
            positions,
            resume: resume_link,
            cover: cover_link,
            codechef: codechef_link,
            github: github_link,
            linkedin: linkedin_link,
            q1: q1,
			q2: q2,
			q3: q3,
            url: urlInit,
        };
        let url = urlInit;
        console.log(url);

        fetch(url);
        fetch(" https://cors-fix.nishit.workers.dev/?" + url, {
			method:'get'
		}

		)
		.then((res) => {
                if (res.status == 200) {
                    console.log("success");
                    fetch(
                        "https://us-central1-codecell-interviews.cloudfunctions.net/sendMail/",
                        {
                            method: "POST",
                            body: JSON.stringify({
                                email: email,
                                data: allData,
                            }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                            mode: "cors",
                            cache: "no-cache",
                        }
                    )
                        .then((resp) => resp.text())
                        .then((res) => {
                            console.log(res);
                            if (res === "Yayay") {
                                swal(
                                    "Registered Sucessfully",
                                    "Your application has been submitted",
                                    "success"
                                );
                            } else if (res === "Email already exists.") {
                                swal(
                                    "Failed to submit",
                                    "An application has already been submitted for this email",
                                    "error"
                                );
                            } else {
                                swal(
                                    "Failed to submit",
                                    "Something went wrong",
                                    "error"
                                );
                            }
                        })
                        .catch(() => {
                            swal(
                                "Failed to submit",
                                "An application has already been submitted for this email",
                                "error"
                            );
                        })
                        .finally(() => {
                            $("#submitForm").attr("disabled", false);
                            $("#submitForm").attr("value", "Submit");
                        });
                }
            })
            .finally(() => {
                // sleepAWhile(5000).then(()=>{
                //     $("#submitForm").attr("disabled", false);
                // })
                
            });
        try {
            fetch(url, {
                    method: "GET",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    redirect: "follow",
                    referrer: "no-referrer"
                }).then(resp => resp.text()).then(
                (res) => {
                console.log(res);
            });
        } catch (err) {
            console.log(err);
        }

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
