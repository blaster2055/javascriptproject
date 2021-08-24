var user = [];
var index;

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
    user.forEach((value, i) => {
        document.getElementById("montableau").innerHTML += `<tr>
        <td>${value.nom}</td>
        <td>${value.prenom}</td>
        <td>${value.age}</td>
        <td>
            <button onclick="supprimer(${i})">Supprimer</button>
            <button onclick="detaille(${i})">Détails</button>
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

function detaille(i){
    index=i
    const found = user[i]
    document.getElementById('nom').value=found.nom
    document.getElementById('prenom').value=found.prenom
    document.getElementById('age').value=found.age
}

function update(){
    const updatedUser = {
        nom:document.getElementById('nom').value,
        prenom:document.getElementById('prenom').value,
        age:document.getElementById('age').value
    }
    
    user.splice(index,1,updatedUser)
    affiche()
    rest()
}
