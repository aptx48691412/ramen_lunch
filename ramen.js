//requestIdleCallback(() => {
//    var i = 0
//    document.body.innerHTML = document.body.innerHTML.replaceAll("。", () => (i++, i % 2 ? "&#x1f35c;" : "&#x1f35c;"))
//    var i = 0
//    document.body.innerHTML = document.body.innerHTML.replaceAll("<br>", () => (i++, i % 2 ? "&#x1f35c;<p style='margin:0;'></p>" : "&#x1f35c;<p style='margin:0;'></p>"))
//    document.body.innerHTML = document.body.innerHTML.replaceAll("、", "&#x1f35c;")
//    //document.body.innerHTML = document.body.innerHTML.replaceAll("<br>", () => (i++, i % 2 ? "&#x1f35c;<span style='font-size:small;'>" : "&#x1f35c;<span style='font-size:small;'>"))
//    document.body.innerHTML = document.body.innerHTML.replaceAll("・", () => (i++, i % 2 ? "&#x1f35c;" : "&#x1f35c;"))
//  })
  

  requestIdleCallback(() => {
    var i = 0
    document.body.innerHTML = document.body.innerHTML.replaceAll(",", () => (i++, i % 2 ? "&#x1f35c;" : "&#x1f35c;"))
    var i = 0
    document.body.innerHTML = document.body.innerHTML.replaceAll("<br>", () => (i++, i % 2 ? "&#x1f35c;<p style='margin:0;'></p>" : "&#x1f35c;<p style='margin:0;'></p>"))
    document.body.innerHTML = document.body.innerHTML.replaceAll(".", "&#x1f35c;")
    //document.body.innerHTML = document.body.innerHTML.replaceAll("<br>", () => (i++, i % 2 ? "&#x1f35c;<span style='font-size:small;'>" : "&#x1f35c;<span style='font-size:small;'>"))
    document.body.innerHTML = document.body.innerHTML.replaceAll("“", () => (i++, i % 2 ? "&#x1f35c;" : "&#x1f35c;"))
    document.body.innerHTML = document.body.innerHTML.replaceAll("(", () => (i++, i % 2 ? "&#x1f35c;" : "&#x1f35c;"))
    document.body.innerHTML = document.body.innerHTML.replaceAll(")", () => (i++, i % 2 ? "&#x1f35c;" : "&#x1f35c;"))
    document.body.innerHTML = document.body.innerHTML.replaceAll(":", () => (i++, i % 2 ? "&#x1f35c;" : "&#x1f35c;"))
  })
  