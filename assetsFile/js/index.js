var detailsSection =  document.getElementsByClassName('details-section');

ShowDetails  =(e)=>{
  detailsSection[0].style.display = 'flex';
    detailsSection[0].previousElementSibling.style.display = 'block';

 
}

hideDetails = e=>{
    detailsSection[0].style.display='none'
    detailsSection[0].previousElementSibling.style.display = 'none';
 
}

let smallImageList = document.getElementsByClassName('small-image-list')[0];

let img = smallImageList.children;
for (let i = 0; i < smallImageList.childElementCount; i++) {
img[i].addEventListener('click',()=>{SetImage(img[i].src)})
}


SetImage = (e)=>{
  document.getElementsByClassName('big-image')[0].firstElementChild.src=e;
  
  }

  /*small imge icon*/

  
  let simallImageIcon = document.getElementsByClassName('simall-image-icon')[0];
  let index = 0;
  simallImageIcon.children[0].onclick = ()=>{
    index--;
  HandleSlide(index);
}
simallImageIcon.children[1].onclick = ()=>{
  index++;
  HandleSlide(index);
}

HandleSlide = (e)=>{
let smallImageList = document.getElementsByClassName("small-image-list")[0].children;
for (const iterator of smallImageList) {
iterator.style.cssText =`display:none`;  
}

for (let i = e-1; i < e+2; i++) {
   smallImageList[i].style.cssText = `display:block`;
  
}




}

var showingBitSection =  document.getElementsByClassName('showing-bit-section');

showBit = ()=>{
  showingBitSection[0].style.display = 'flex';
  showingBitSection[0].previousElementSibling.style.display = 'block';
}

hideShowBit= ()=>{
  showingBitSection[0].style.display = 'none';
  showingBitSection[0].previousElementSibling.style.display = 'none';
}
var inptBitingOfferSection =  document.getElementsByClassName('inpt-biting-offer-section');

showInputBit = ()=>{
  inptBitingOfferSection[0].style.display = 'flex';
  inptBitingOfferSection[0].previousElementSibling.style.display = 'block';
}

hideInpuBit = ()=>{
  inptBitingOfferSection[0].style.display = 'none';
  inptBitingOfferSection[0].previousElementSibling.style.display = 'none';
}
var shareSocialMediaContainer =  document.getElementsByClassName('share-social-media-container');

showSocialIcon = ()=>{
  shareSocialMediaContainer[0].style.display = 'block';
  shareSocialMediaContainer[0].previousElementSibling.style.display = 'block';
}
HideSocialIcon = ()=>{
  shareSocialMediaContainer[0].style.display = 'none';
  shareSocialMediaContainer[0].previousElementSibling.style.display = 'none';
}


