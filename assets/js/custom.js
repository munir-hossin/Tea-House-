


$(document).ready(function() {
    $('.slider-container').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 2,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-right"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-chevron-left"></i></button>',
    });
})


var mixer = mixitup('.gallery_container');

new VenoBox({
  selector: ".my-image-links"
});
















// $(document).ready(function(){

    
//   function myItem() {
//     return ` <div class="col-lg-4 tea mt-2">
//                 <img src="assets/images/food-1.png" alt="img">
//             </div>
//             <div class="col-lg-4 tea mt-2">
//                 <img src="assets/images/food-1.png" alt="img">
//             </div>
//             <div class="col-lg-4 tea mt-2">
//                 <img src="assets/images/food-1.png" alt="img">
//             </div>
//         </div>`
//   }

//   myItem();

//  console.log( myItem());
// // document.querySelector(".house").innerHTML = myItem();
 




//     $(".myBtn1").click(function() {
//         // document.querySelector(".house").innerHTML = myItem();
//         $(".house").html(document.querySelector(".house").innerHTML = myItem());
//     })


//     // $("button").click(function() {
//     //     $(".house").append("myItem()")
//     // })


//     // $(".my_btn").click(function() {
//     //     var value = this.innerHTML;
//     //     $(".house").html(value + "is clicked")
//     // })
    
  
//   });


