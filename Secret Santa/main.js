var datos =  new Array(new Array(6), 5);
 var cont = 0;
function pullUsers(){
    if (cont < 6) {
        for (let j = 0; j < 5; j++) {
            var user = document.getElementById("usuario");
            var direc = document.getElementById("direc");
            var autor = document.getElementById("autor");
            var juego = document.getElementById("juego");
            var comida = document.getElementById("comida");
            var otro = document.getElementById("otro");
            switch (j) {
                case 0:
                    datos[i][j] = user.value;
                    break;
                case 1:
                    datos[i][j] = direc.value;
                    break;
                case 2:
                    datos[i][j] = autor.value;
                    break;
                case 3:
                    datos[i][j] = juego.value;
                    break;
                case 4:
                    datos[i][j] = comida.value;
                    break;
                case 5:
                    datos[i][j] = otro.value;
                    break;
            }
            console.log();
        }
    }
    cont++;
}

