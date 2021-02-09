
var sliderDivs=document.getElementsByClassName('slider-content');

var index=0;
  document.getElementsByClassName('slider')[0].addEventListener("click",function(event){
  sliderDivs[index].classList.add('not-active');
  sliderDivs[index].classList.remove('active');
  index++;

  if(index==sliderDivs.length) index=0;

  sliderDivs[index].classList.remove('not-active');
  sliderDivs[index].classList.add('active');
 


})
  

