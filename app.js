var url= 'http://bcw.blob.core.windows.net/public/img/sounds/scale-0'

var boombox= document.getElementById('boombox')

function playTune(num){
  
  if(num < 10){
    tuneUrl += '0'
    
  }
  tuneUrl + Url += num + '.mp3'
  
  var tuneUrl = url + num + '.mp3'
  console.log(tuneUrl)
  
  boombox.src= tuneUrl
  boombox.play()
  
}
