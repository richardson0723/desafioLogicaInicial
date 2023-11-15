let personagem = "batman";
let XP = 15000;


let nivel;

if (XP < 1000) {
     = "Ferro";
} else if (XP >= 1001 && pontosXP <= 2000) {
    nive = "Bronze";
} else if (XP >= 2001 && pontosXP <= 5000) {
    nivel = "Prata";
} else if (XP >= 5001 && pontosXP <= 7000) {
    nivel = "Ouro";
} else if (XP >= 7001 && pontosXP <= 8000) {
    nivel= "Platina";
} else if (XP >= 8001 && pontosXP <= 9000) {
    nivel = "Ascendente";
} else if (XP >= 9001 && pontosXP <= 10000) {
    nivel = "Imortal";
} else {
   XP = "Radiante";
}
}
console.log("O " + personagem + " esta no nivel " + XP)
