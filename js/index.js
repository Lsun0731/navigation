$(document).ready(function () {

    // changeBackground()
    $('#show-tool-btn').on('click', function (params) {
        $('.tool-box').css('width', '300px')
    })

    $('#close-tool-btn').on('click', function (params) {
        $('.tool-box').css('width', '0')
    })






})


// function changeBackground(){
//     let day=new Date().getDay()
//     switch (day) {
//         case 1:
//             $('.le-customize-body').css('background-image','url(./images/div.jpg)')
//             break;

//         default:
//             break;
//     }
// }