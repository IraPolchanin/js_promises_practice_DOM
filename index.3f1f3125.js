var e=function(e,n){var t=document.createElement("div");t.className=n,t.setAttribute("data-qa","notification"),t.textContent=e,document.body.append(t)};new Promise(function(e,n){var t=function(n){0===n.button&&(document.removeEventListener("mousedown",t),e("First promise was resolved"))};document.addEventListener("mousedown",t),setTimeout(function(){document.removeEventListener("mousedown",t),n(Error("First promise was rejected"))},3e3)}).then(function(n){return e(n,"success")}).catch(function(n){return e(n.message,"error")}),new Promise(function(e){var n=function(t){(0===t.button||2===t.button)&&(document.removeEventListener("mousedown",n),e("Second promise was resolved"))};document.addEventListener("mousedown",n)}).then(function(n){return e(n,"success")}).catch(function(n){return e(n.message,"error")}),new Promise(function(e){var n=!1,t=!1,o=function(r){0===r.button&&(n=!0),2===r.button&&(t=!0),n&&t&&(document.removeEventListener("mousedown",o),e("Third promise was resolved"))};document.addEventListener("mousedown",o)}).then(function(n){return e(n,"success")}).catch(function(n){return e(n.message,"error")}),document.addEventListener("contextmenu",function(e){return e.preventDefault()});
//# sourceMappingURL=index.3f1f3125.js.map