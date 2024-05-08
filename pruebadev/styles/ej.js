function myFunction() {
  let text = document.getElementById("descHtml").innerHTML;
  let text1 = document.getElementById("descCss").innerHTML;
  let text2 = document.getElementById("descJs").innerHTML;
  document.getElementById("descHtml").innerHTML = text.replace(
      "Lorem ipsum",
      "HTML Lenguaje de Marcado de Hipertexto Estandar- para crear y estructurar contenido web usando etiquetas y elementos")
  document.getElementById("descJs").innerHTML = text.replace(
    "Lorem ipsum",
    "JavaScript: Lenguaje de programacion para web que permite interactividad y dinamismo en paginas. Se ejecuta en el navegador.");
  document.getElementById("descCss").innerHTML = text.replace(
      "Lorem ipsum",
      "CSS -Hojas de Estilo en Cascada- Define la presentacion y estilo de paginas web, controla dise&ntilde;o, colores y formato para una mejor apariencia.");
    }
    