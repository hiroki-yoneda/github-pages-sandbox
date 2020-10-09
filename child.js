const button = document.getElementById("btn");
const infile = document.getElementById("infile");

button.addEventListener('click', event => {
    const files = infile.files;
    console.log(files)
    // get time
    date = new Date();
    start_time = date.getTime();

    // ここに#buttonをクリックしたら発生させる処理を記述する
    // 親へメッセージを送信
    // postMessage(<送信する値>, <送信先のドメイン>)
    window.parent.postMessage([files, start_time], 'https://hiroki-yoneda.github.io');
});