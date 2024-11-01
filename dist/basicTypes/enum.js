"use strict";
var Cores;
(function (Cores) {
    Cores[Cores["VERMELHO"] = 0] = "VERMELHO";
    Cores[Cores["AZUL"] = 1] = "AZUL";
    Cores[Cores["AMARELO"] = 2] = "AMARELO";
})(Cores || (Cores = {}));
(function (Cores) {
    Cores["ROXO"] = "ROXO";
    Cores[Cores["VERDE"] = 201] = "VERDE";
    Cores[Cores["ROSA"] = 202] = "ROSA";
})(Cores || (Cores = {}));
function escolhaCor(cor) {
    console.log(Cores[cor]);
}
escolhaCor(Cores.ROXO);
//# sourceMappingURL=enum.js.map