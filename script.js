/* Example-1 Program 0-100 arasında rasgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. Her yanlista hakkini bir dusurecek ve ARTTIR/AZALT diyerek kullaniciyi yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa "Uzgunuz kaybettiniz" eger bildi ise "Tebrikler ... denemede bildiniz" yazacaktir. */

let randomNum = Math.floor(Math.random() * 11);
tahmin = +prompt("Tahmininizi yazınız: ");
let i = 1;
while (i < 5) {
  if (tahmin === randomNum) {
    console.log(`tebrikler ${i}. denemede bildiniz`);
    break;
  } else if (randomNum < tahmin) {
    console.log("azaltın");
    tahmin = +prompt("Tahmininizi yazınız: ");
  } else if (randomNum > tahmin) {
    console.log("arttırın");
    tahmin = +prompt("Tahmininizi yazınız: ");
  }
  i+=1;
}
if (i == 5) {
  console.log("Üzgünüz kaybettiniz.");
}
console.log(`random sayı ${randomNum}`);