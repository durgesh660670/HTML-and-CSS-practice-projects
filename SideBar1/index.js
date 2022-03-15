const toggleSidebar = () => {



    if ($('#side-bar').is(":visible")) {


        $('#side-bar').css("display", "none")
        $('#content').css("margin-left", "20px")
    }
    else {

        $('#side-bar').css("display", "block")
        $('#content').css("margin-left", "25%")

    }

}