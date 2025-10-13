const incidencies = [
    {
        id: 1,
        comentario: "Error d'inici de sessió",
    },
    {
        id: 2,
        comentario: "Problema amb la impressora",
    },
    {
        id: 3,
        comentario: "Actualització de programari",
    },
];
console.log(incidencies);
//paso de objecte a text i de text a objecte
const textoObj = JSON.stringify(incidencies);
console.log(textoObj);
//paso de text a objecte
const objTexto = JSON.parse(textoObj);
console.log(objTexto);

