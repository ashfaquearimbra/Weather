function loadCoupon(){
    document.getElementsByClassName("coupon")[0] .style.display='block';
    document.getElementById("intel").style.opacity='0.7';
   

}
function  couponClose() {
    document.getElementsByClassName("coupon")[0] .style.display='none';
    document.getElementById("intel").style.opacity='1';

}
function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}
const url = "http://3.17.216.66:4000";