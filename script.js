let nameplates=['assets/name1.png','assets/name2.png','assets/name3.png','assets/name4.png'];
let captions=['random caption goes here','this website goes so hard, feel free to bookmark','aaaaa','we kinning','awww the scringly...',
'home of swag','also try trickmint.gay','also try elisttm.space','nominated for Forbes \"fucking website ever 2003\" award',
'never trust a bitch who\'s seen lain','jet set ratio download free no virus punjabi','fuck wordpress all my homies hate wordpress',
'css more like cs ass :trollface:','hi skedgy if you\'re reading this i love you!!!!','yea it\'s a perfect blue reference','best viewed on desktop',
'\"lily, this is a legitimate thread, please keep it on-topic /srs\"','i miss flash','mobile more like mogetoffmywebsiteitisbestviewedondesktop'];

var randomnum = Math.floor(Math.random() * captions.length);
finalcaption = captions[randomnum];
let div = document.getElementById('cap');
div.textContent = finalcaption;

function scrollTowards(x){
    document.getElementById(x).scrollIntoView(true);
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

function refreshCap(){
  var randomnum = Math.floor(Math.random() * captions.length);
  finalcaption = captions[randomnum];
  let div = document.getElementById('cap');
  div.textContent = finalcaption;

  //:3
  var fun=Math.floor(Math.random() * 420);

  if (fun==0){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
}