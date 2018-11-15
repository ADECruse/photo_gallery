// Get all 'img' elements
const imgElem = document.querySelectorAll("img");

for (let i = 0; i < imgElem.length; i++) {
  // Add "mImg" class to all img elements, except the modal img
  if (imgElem[i].className != "modal-content") {
    imgElem[i].classList.add("myImg");
  };
}

// Get the modal
const modal = document.getElementById('myModal');

// const img = document.getElementsByClassName('myImg');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
const photos = [];

photos.forEach.call(document.getElementsByClassName('myImg'), function(photo) {
  photo.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});
