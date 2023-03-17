


window.addEventListener("load", () => {
  let button = document.getElementById("the-button");
  let counterElement = document.getElementById("the-counter");
  
  let totalCount = 0;  


  button.addEventListener("click", () => {
    totalCount += 1;
    counterElement.innerText = totalCount;
    let savedClicks = totalCount;
    localStorage.setItem("progress", savedClicks + "");
    let recoveredRawValue = localStorage.getItem("progress");
    let progress = parseInt(recoveredRawValue); 

  });


  document.getElementById("btn-reset").onclick = function() {
    totalCount=0;
    document.getElementById("the-counter").innerHTML = totalCount;

  }


});
