# Basic Alert

Kullanımı oldukça kolay bir o kadar da basit uyarılar için kullanabilirsiniz.

## Kullanım

Css dosyamızı ve javascript dosyamızı sayfaya dahil ettikten sonra;
Önce sınıfımızı çağırıyoruz

    const  alert  =  new  Alert();

Sonra uyarı baloncuğumuz oluşturuyoruz.

    alert.create(
      'How quickly daft jumping zebras vex. Alert Link.',
      'error',
      7000
    );

İlk parametre göstereceğimiz mesaj parametresi, ikinci parametre css tarafında tanımdaığımız stil parametresi (daha fazla stil tanımlayabiliriz.) ve üçüncü parametre de zaman parametresi. Belirlenmiş zaman yoksa uyarı baloncuğu sadece üzerine tıklanarak kapatılabilir.
