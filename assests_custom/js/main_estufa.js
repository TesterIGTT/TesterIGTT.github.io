$(document).ready(function () {
  getData();
});

var intervalId = window.setInterval(function () {
  getData();
}, 1000);

function getData() {
  $.getJSON("https://timelapseigt-default-rtdb.firebaseio.com/.json", function (data) {
    console.log(data.S1_0);
    document.getElementById("valor_1").innerHTML = data.S2_1;
    document.getElementById("valor_2").innerHTML = data.S2_0;
    document.getElementById("valor_3").innerHTML = data.S3_0;
    document.getElementById("valor_4").innerHTML = data.S1_1;
    document.getElementById("valor_5").innerHTML = data.S1_0;

    document.getElementById("valor_6").innerHTML = data.S5_0;
    document.getElementById("valor_7").innerHTML = data.S4_0;
  });
}
