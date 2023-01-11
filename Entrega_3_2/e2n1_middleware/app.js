const Middleware = require("./Middlewares");
const Calculator = require("./Calculator");
const data = require("./data.json")

app = new Middleware();
calc = new Calculator();






/* Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió 
entre 2 dels operands inicials en cadascuna de les operacions. 
Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la 
consola les modificacions que es van fent als valors abans del resultat final.  */


app.use((req, next) => {
    
    next();
})