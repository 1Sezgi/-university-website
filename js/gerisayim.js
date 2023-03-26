    var countDownDate = new Date("June 1, 2023 17:00:00").getTime();

    // Geri sayımı her 1 saniyede bir g�ncelleyin
    var countdownfunction = setInterval(function () {


           // Bugünün tarihini ve saatini al
            var now = new Date().getTime();


    // �imdi ile geri sayım tarihi aras�ndaki mesafeyi bulun
    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //ortaya çıkacak sonuç(demo id ile)
    document.getElementById("demo").innerHTML = days + "g " + hours + "h "
    + minutes + "d " + seconds + "s ";

     //geri sayım bittiğinde metin yazılsın
    if (distance < 0) {
        clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "Başvurular sona ermiştir";
            }
        }, 1000);
