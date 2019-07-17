import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = 'jp';
  }

  setup() {
    /*
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */
   if (this.currentLocale === 'jp') {
     this.polyglot.extend({
       "hello": "こんにちは、世界"
     });
   } else if (this.currentLocale === 'en') {
     this.polyglot.extend({
       "hello": "Hello World"
     });
   }
  }

  updateLocale(e) {
    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */
  //  this.currentLocale = e.;
  console.log(e.dataset.locale);
  }

  showMessage() {
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。
    */
   const mainEl = document.getElementById('main');
   const message = this.polyglot.t("hello");
   mainEl.innerHTML = `<h1>${message}</h1>`;
  }

}

const app = new TranslationApp({});
app.setup();
app.showMessage();

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);

  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}
