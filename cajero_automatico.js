let saldo = 1000;
let deposito = 0;
let retiros = 0;
let opcion;

do{

    opcion = Number(prompt(
        "CAJERO AUTOMATICO\n" +
        "1. Consultar saldo\n" +
        "2. Depositar dinero\n" +
        "3. Retirar dinero\n" +
        "4. Salir"

    ));

    if(opcion == 1){

        document.write("saldo disponible: Q" + saldo + "<br>");

    }
    else if (opcion == 2){

        let deposito = Number(prompt("Ingrese la cantidad a depositar"));

        while(deposito <= 0){
            deposito = Number(prompt("Ingrese una catidad valida"));
        }

        saldo = saldo + deposito;
        depositos = depositos + 1; 

    }

    else if(opcion === 3){

        let retiro = Number(prompt("Ingrese la cantidad a retirar"));

        while(retiro <= 0){
            retiro = Number(prompt("Ingrese una catidad valida"));
        }

        while(retiro > saldo){
            retiro = Number(prompt("No tiene sufuciente saldo. Ingrse otra cantidad"));
        }

        saldo = saldo  - retiro;
        retiros = retiros  + 1;

    }
    else if(opcion == 4){
        document.write("Saldo final: Q" + saldo + "<br>");
        document.write("Cantidad  de depositos:" + retiros + "<br>");
        document.write("Gracias por utlizar nuestro cajero. <br> ");
    }


}while(opcion !=4);