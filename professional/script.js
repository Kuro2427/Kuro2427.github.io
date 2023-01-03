function scrollTowards(x){
    document.getElementById(x).scrollIntoView(true);
}

function scrollToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Copy to clipboard
function copyDiscord(){
    var text = "Kuro2427#2427";
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
      alert("Discord ID copied to clipboard!")
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
    }

function bun(){
  document.getElementById("theDude").textContent = '[ò.ó]';
}

function bun2(){
  document.getElementById("theDude").textContent = '[o.o]';
}