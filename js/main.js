"use strict";

{
  // フェードイン用スクリプト

  // ページリソース（画像など）がすべて読み込まれた後に実行
  window.addEventListener("load", () => {
    // 1秒後 (壁紙表示)
    setTimeout(() => {
      // ヘッダーを1秒かけて表示
      document.querySelector(".header").classList.add("is-visible");
    }, 1000); // 1000ミリ秒 = 1秒

    // 4秒後 (ヘッダー表示完了+1.5秒後)
    setTimeout(() => {
      // メインコンテンツとフッターを1秒かけて表示
      document.querySelectorAll("main, footer").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 4000); // 2000ミリ秒 = 3秒
  });
}

{
  // DOMが完全に読み込まれてからスクリプトを実行
  document.addEventListener("DOMContentLoaded", () => {
    // テーマ切り替えボタンをすべて取得
    const themeButtons = document.querySelectorAll(".btns .btn");
    const body = document.body;

    themeButtons.forEach(button => {
      button.addEventListener("click", () => {
        // 既存のtheme-クラスをすべて削除
        // bodyのクラスリストをループして 'theme-' で始まるクラスを削除します
        body.classList.forEach(className => {
          if (className.startsWith("theme-")) {
            body.classList.remove(className);
          }
        });

        // クリックされたボタンのクラス名からテーマ番号を取得 (例: "btn-2" -> "2")
        const themeNumber = button.className.match(/btn-(\d+)/)[1];

        // 新しいテーマクラスを追加 (例: "theme-2")
        body.classList.add("theme-" + themeNumber);
      });
    });
  });
}
