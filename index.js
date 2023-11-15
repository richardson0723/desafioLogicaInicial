let personagem = "batman";
let XP = 15000;

switch (XP) {
    case XP <= 1001, XP = "ferro":
        console.log("O " + personagem + " esta no nivel " + XP)
        break;
    case XP <= 2001, XP = "bronze":
        console.log("O " + personagem + " esta no nivel " + XP)
        break;
    case XP <= 5001, XP = "prata":
        console.log("O " + personagem + " esta no nivel " + XP)
        break;
    case XP <= 7000, XP = "ouro":
        console.log("O " + personagem + " esta no nivel " + XP)
        break;
    case XP <= 8000, XP = "platina":
        console.log("O " + personagem + " esta no nivel " + XP)
        break;
    case XP <= 9000, XP = "Ascendente":
        console.log("O " + personagem + " esta no nivel " + XP)
        break;
    case XP < 10000, XP = "Imortal":
        console.log("O " + personagem + " esta no nivel " + XP)
        break;
    case XP >= 10001, XP = "Radiante":
        console.log("O " + personagem + " esta no nivel " + XP)
        break;
}
console.log("O " + personagem + " esta no nivel " + XP)
