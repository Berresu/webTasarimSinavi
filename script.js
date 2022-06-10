let girilenSayi=document.getElementById("sayiTahmin");
let sonuc=document.getElementById("sonuc");
let oyna=document.getElementById("btnOyna");
let sifirla=document.getElementById("btnSifirla");
let hak=0;

let sayi=Math.floor(Math.random()*100);
console.log(sayi);
console.log(girilenSayi);

oyna.addEventListener("click", ()=>{
    if(sayi==girilenSayi.value){
        sonuc.innerHTML="Tebrikler Doğru Tahmin Ettiniz.";
    }
    else if(sayi>girilenSayi.value){
        sonuc.innerHTML="Yanlış Tahmin Ettiniz Daha BÜYÜK Bir Sayı Tahmin Ediniz.";
    }
    else if(girilenSayi.value>sayi){
        sonuc.innerHTML="Yanlış Tahmin Ettiniz Daha KÜÇÜK Bir Sayı Tahmin Ediniz.";
    }

    if(hak<10){
        hak=hak+1;
    }
    else if(hak==10){
        sonuc.innerHTML="Tahmin Hakkınız Dolmuştur."
    }

    console.log(hak);
})

sifirla.addEventListener("click",()=>{
    sayi=Math.floor(Math.random()*100);
    hak=0;
    sonuc.innerHTML="";
    girilenSayi.value="";
})
