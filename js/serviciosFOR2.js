var texto_h3 = [ "Riegos" , "Parques y Jardines" , "Siembra de Césped", "Control de Malezas" , "Huertas" , "Poda y Extracción"];
var img_src = [ "estamosinstalandoPDL.jpg" , "parquesyjardines2.jpg" , "cesped.jpg", "malezas.jpg" , "HUERTApdl.jpg" , "podayextraccion.jpg"];
var img_alt = [ "Riegos" , "Parques y Jardines" , "Siembra de Césped", "Control de Malezas" , "Huertas" , "Poda y Extracción"];
var texto_p = [ "Armado de sistemas de riego, por aspersión y por goteo" , "Diseño, construcción y mantenimiento de parques y jardines " , "Siembra de césped en panes y de semillas", "Control de malezas, insectos y enfermedades" , "Armado, seguimiento y asesoramiento en huertas hogareñas" , "Poda y extracción de árboles"];

/*
var texto_servicios_html = `
<section class="servicios">
            <h1><a href="servicios.html" class="text-link">Nuestros Servicios</a></h1>
            <!--<p>Enterate de nuestros servicios</p>-->
            <div class="row">
                <div class="servicio-col">
                    <h3>Riegos</h3>
                    <img src="./images/estamosinstalandoPDL.jpg">
                    <div class="layer">
                        <h3>Riegos</h3>
                        <p>Armado de sistemas de riego, por aspersión y por goteo</p>
                    </div>
                </div>
                <div class="servicio-col">
                    <h3>Parques y Jardines</h3>
                    <img src="./images/parquesyjardines2.jpg">
                    <div class="layer">
                        <h3>Parques y Jardines</h3>
                        <p>Diseño, construcción y mantenimiento de parques y jardines </p>
                    </div>
                </div>
                <div class="servicio-col">
                    <h3>Siembra de Césped</h3>
                    <img src="./images/cesped.jpg">
                    <div class="layer">
                        <h3>Siembra de Césped</h3>
                        <p>Siembra de césped en panes y de semillas</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="servicio-col">
                    <h3>Control de Malezas</h3>
                    <img src="images/malezas.jpg">
                    <div class="layer">
                        <h3>Control de Malezas</h3>
                        <p>Control de malezas, insectos y enfermedades </p>
                    </div>
                    
                </div>
                <div class="servicio-col">
                    <h3>Huertas</h3>
                    <img src="./images/HUERTApdl.jpg">
                    <div class="layer">
                        <h3>Huertas</h3>
                        <p>Armado, seguimiento y asesoramiento en huertas hogareñas</p>
                    </div>
                    
                </div>
                <div class="servicio-col">
                    <h3>Poda y Extracción</h3>                    
                    <img src="./images/podayextraccion.jpg">
                    <div class="layer">
                        <h3>Poda y Extracción</h3>                    
                        <p>Poda y extracción de árboles </p>
                    </div>
                    
                </div>
             </div>
        </section>
`;
*/

var texto_html_main = "" ;
var cant_servicios = 3;
var i=0;

for (i=0; i<cant_servicios; i++){

    texto_html_main = texto_html_main + `
    <div class="servicio-col">
        <h3> ${texto_h3[i]}</h3>                    
            <img src="./images/${img_src[i]}" alt="${img_alt[i]}">
            <div class="layer">
                <h3>${texto_h3[i]}</h3>                    
                <p>${texto_p[i]}</p>
            </div>
    
    </div>`;
    
}





document.getElementById("serviciosMain").innerHTML = texto_html_main;