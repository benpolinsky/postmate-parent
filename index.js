import Postmate from 'postmate'

Postmate.debug = true

// Kick off the handshake with the iFrame
const handshake = new Postmate({
  container: document.getElementById('frameContainer'),
  url: 'http://localhost:6789'
});


handshake.then(child => {
  child.on('hello-from', pageTitle => {
    
    console.log(`The ${pageTitle} page says hello`)

    // child.call("replaceText", {
    //   querySelector: "#spaceToAppend",
    //   newText: "Here is replacement text"
    // })

  });

  child.call("replaceText", {
    querySelector: "#spaceToAppend",
    newText: "Here is replacement text"
  })
});