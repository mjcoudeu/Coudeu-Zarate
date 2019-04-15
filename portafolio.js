// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/IMG_6373.JPG",
    title: "Hibiscus 1",
    about: "Hibiscus, mejor llamada \"La rosa de Jamaica\" es una de mis flores favoritas. · Feña - 2018",
}, {
    figure: "media/WhatsApp Image 2018-12-20 at 19.0s7.56 copy.jpeg",
    title: "Ángel 1",
    about: "Dibujo de carboncillo sobre acrílico. 90 x 90 cm · Cote - 2018",
}, {
    figure: "media/FullSizeRender 30 copy.jpg",
    title: "León",
    about: "Dibujo a grafito sobre papel. · Cote - 2019",
}, {
    figure: "media/IMG_6374.JPG",
    title: "Girasol 1",
    about: "Tira líneas sobre papel · Feña - 2017",
}, {
    figure: "media/IMG_6375.JPG",
    title: "Mujer cubierta",
    about: "Lápiz grafito sobre papel · Feña - 2015",
}, {
    figure: "media/IMG_0072 copy.jpg",
    title: "Griega 1",
    about: "Dibujo en grafito de escultura de la Diosa de Milo con terminación en acrílico. · Cote - 2019 ",
}, {
    figure: "media/WhatsApp Image 2018-12-20 at 19.07.56 copy.jpeg",
    title: "Escultura 2",
    about: "Dibujo en grafito de escultura de Gladiador Muriendo, sobre acrílico en tela. · Cote - 2018",
}, {
    figure: "media/ojocolor.jpg",
    title: "Muchas miradas",
    about: "Mosaico de ojos de distintas criaturas del mundo. Acrílico sobre madera. 60 x 60 cm · Cote - 2015",
}, {
  figure: "media/muchasflor.jpg",
  title: "Flor 1",
  about: "Encuadre de un mismo tipo de flor. · Feña - 2017",
}, {
    figure: "media/3flores.jpg",
    title: "Flor 2",
    about: "Detalle de 3 flores. Feña - 2017",
}, {
    figure: "media/caracolor.jpg",
    title: "Mujer bicolor",
    about: "Dibujo pequeño de lápiz de color sobre papel. · Cote - 2016",
}, {
    figure: "media/muchasflores.jpg",
    title: "Flor 3",
    about: "Vistas de una misma flor. · Feña - 2017",
}, {
    figure: "media/davidchico.jpg",
    title: "David 2",
    about: "Dibujo de perfil del David de Miguel ángel. Representación de la percepción de la memoria. · Cote - 2017",
}, {
    figure: "media/girasol2.jpg",
    title: "Girasol 2",
    about: "Girasol mirando el sol. Tira líneas sobre papel. · Feña - 2017",
}, {
    figure: "media/luna.jpg",
    title: "Luna",
    about: "Dibujo a grafito de mi perro, la Luna. · Cote - 2016",
}, {
    figure: "media/caballo.jpg",
    title: "Caballo 1",
    about: "Dibujo a grafito sobre papel. · Cote - 2018",
}, {
    figure: "media/IMG_3765.jpeg",
    title: "David 1",
    about: "Dibujo a carboncillo sobre tela. \"David de Miguel ángel.\" · Cote - 2016",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
