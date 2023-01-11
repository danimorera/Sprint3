
class Marcador {

    //dos campos opcionales
    static instance; //no poner private mejora compatibilidad con navegadores
    nombre= ''; //propiedad global


    constructor(player, score) {


        if (!!Marcador.instance) {
            return Marcador.instance;
        }

        Marcador.instance = this;
        this.player = player;
        this.score = score;

        return this;
    }
}

module.exports = Marcador;