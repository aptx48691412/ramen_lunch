requestIdleCallback(() => {
  var i = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("。", () => (i++, i % 2 ? "&#x1f35c;" : "&#x1f32d;"))
  var i = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("<br>", () => (i++, i % 2 ? "&#x1f354;<p style='margin:0;'></p>" : "&#x1f356;<p style='margin:0;'></p>"))
  document.body.innerHTML = document.body.innerHTML.replaceAll("、", "&#x1f35b;")
  //document.body.innerHTML = document.body.innerHTML.replaceAll("<br>", () => (i++, i % 2 ? "&#x1f359;<span style='font-size:small;'>" : "&#x1f363;<span style='font-size:small;'>"))
  document.body.innerHTML = document.body.innerHTML.replaceAll("・", () => (i++, i % 2 ? "&#x1f363;" : "&#x1f359;"))
})

