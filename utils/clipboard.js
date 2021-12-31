export default function copyToClipboard(textToCopy, element) {
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
          navigator.clipboard.writeText(textToCopy).then(function() {
            element.innerText = "COPIED";
            setTimeout(()=>{element.innerText = "COPY"}, 1000);
          }, function() {
            alert("Clipboard write failed.")
          });
        }
        else {
            alert("Clipboard permission denied.")
        }
    });

}
