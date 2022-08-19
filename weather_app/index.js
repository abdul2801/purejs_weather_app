$(document).ready(() => {
    $(".submit").click(() => {
        if ($(".input").val()) {
            backend()
        }
    })
    // jQuery methods go here...
    function backend(params) {
        $.get(`http://api.weatherapi.com/v1/current.json?key=354e8d06483242d3b90145112221405&q=${$(".input").val()}&aqi=no`, (data,status) => {
            $(".weather")
                .text(data.current.temp_c + "°C")
            $(".location")
                .text($(".input").val())
                .css("text-transform","capitalize")

        })
    }
}); 