const receiveMessage = function (event) {
  // 引数のオリジンの URL のチェック
  if (event.origin !== "https://hiroki-yoneda.github.io") {
    console.warn("INVALID ORIGIN");
    return;
  }

  const s_time = event.data[1];
  const time_ele = document.getElementById("time");
  const date = new Date();
  const time = date.getTime() - s_time
  console.log(time)
  time_ele.innerHTML = "time " + time + " millisec (web message)";

  const reader = new FileReader();
  reader.onload = function (e) {
      const preview = document.getElementById("preview");
      preview.src = e.target.result;
      preview.width = 100;

      const load_time_ele = document.getElementById("load_time");
      const load_date = new Date();
      const load_time = load_date.getTime() - s_time
      load_time_ele.innerHTML = "time " + load_time + " millisec (onload)";
  }
  reader.readAsDataURL(event.data[0][0]);

  // 選択したファイルのサイズ(byte)を表示
  const size = document.getElementById("size");
  size.innerHTML = "file size " + event.data[0][0].size + " byte";
};

window.addEventListener("message", receiveMessage, false);
