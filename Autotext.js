var i = 0;

var text = "Røyken Videregående Skole";

var speed = 50;



function changeBtn() {

  if (i < text.length) {

    document.getElementById("test").innerHTML += text.charAt(i);

    i++;

    setTimeout(changeBtn, speed);

  } else if (i >= text.length) {

      i = 0;

      clearTimeout(changeBtn);

      setTimeout(changeBtn, speed);

      document.getElementById("test").innerHTML = "";

      speed = 50;

  }

}