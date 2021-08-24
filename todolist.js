var user = [];

function insertableau() {
    if (document.getElementById('nom').value && document.getElementById('prenom').value && document.getElementById('age').value) {
        user.push({
            nom: document.getElementById('nom').value,
            prenom: document.getElementById('prenom').value,
            age: document.getElementById('age').value
        })
    }
    affiche()
    rest()
}

function affiche() {
    document.getElementById("montableau").innerHTML = ""
    user.forEach((value, i,) => {
        document.getElementById("montableau").innerHTML += `<tr>
        <td>${value.nom}</td>
        <td>${value.prenom}</td>
        <td>${value.age}</td>
        <td>
            <button onclick="supprimer(${i})">Supprimer</button>
            <button onclick="achiche2()">Détails</button>
        </td>`

    })
}
function supprimer(i) {

    user.splice(i, 1)
    affiche()
}
function rest() {
    document.querySelector('#nom').value = '';
    document.querySelector('#prenom').value = '';
    document.querySelector('#age').value = '';

}
function detaille(i) {
    const found = user.find((element, index) => index == i)
    console.log(found)

}
