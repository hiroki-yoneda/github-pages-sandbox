const receiveMessage = function (event) {
  // 引数のオリジンの URL のチェック
  if (event.origin !== "https://hiroki-yoneda.github.io") {
    console.warn("INVALID ORIGIN");
    return;
  }

  const s_time = event.data[1]
  const reader = new FileReader();
  reader.onload = function (e) {
      const preview = document.getElementById("preview");
      preview.src = e.target.result
      preview.width = 100

      // 子から送られてきたデータをロードするまでの時間
      const time = document.getElementById("time");
      const date = new Date();
      time.innerHTML = date.getTime() - s_time + " millisec"
  }
  reader.readAsDataURL(event.data[0][0])

  // 選択したファイルのサイズ(byte)を表示
  const size = document.getElementById("size");
  size.innerHTML = "file size " + event.data[0][0].size + " byte";
};

window.addEventListener("message", receiveMessage, false);
