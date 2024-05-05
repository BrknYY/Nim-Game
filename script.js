function diziOlustur(sayi) {
    var dizi = [];

    for (var i = sayi - 5; i >= 1; i -= 4) {
        dizi.push(i);
    }

    // Diziyi küçükten büyüğe sırala
    dizi.sort(function(a, b){return a - b});

    var diziMetni = "";
    for (var i = 0; i < dizi.length; i++) {
        diziMetni += dizi[i] + ", ";
    }

    return diziMetni.substring(0, diziMetni.length - 2); // Son virgülü siler
}

function popupAc() {
    var sayi = prompt("Oyunun biteceği sayıyı giriniz");
    if (sayi === null || sayi === "") {
        return; // İptal edildi veya boş giriş yapıldıysa fonksiyondan çık
    }
    sayi = parseInt(sayi);

    var diziMetni = diziOlustur(sayi);
    var popupcuk = alert("Sırasıyla söylemeniz gereken sayılar : " + diziMetni + "\nBuradaki sayılardan sonrasını rakibin söylediği sayılara bağlı yinede her türlü kazanıyorsunuz");

}