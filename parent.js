const receiveMessage = function (event) {
  // 引数のオリジンの URL のチェック
  if (event.origin !== "http://hiroki-yoneda.github.io") {
    console.warn("INVALID ORIGIN");
    return;
  }

  const s_time = event.data[1]
  const reader = new FileReader();
  reader.onload = function (e) {
      const preview = document.getElementById("preview");
      preview.src = e.target.result
      preview.width = 100

      const time = document.getElementById("time");
      const date = new Date();
      time.innerHTML = date.getTime() - s_time + " millisec"
  }
  reader.readAsDataURL(event.data[0][0])

  // 受け取ったデータの出力。
};

window.addEventListener("message", receiveMessage, false);
