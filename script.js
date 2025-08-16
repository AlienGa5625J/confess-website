function goToPage(pageNumber) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelector("#page" + pageNumber).classList.add("active");
  }
  
  function shrinkNo(button) {
    let currentSize = parseFloat(window.getComputedStyle(button).fontSize);
    if (currentSize > 5) {
      button.style.fontSize = (currentSize - 2) + "px";
    } else {
      button.style.display = "none"; // ilang kalau udah kecil banget
    }
  }
  