database.collection('student').get().then( (data) => {
    const table = document.querySelector('.table');
    data.forEach( (el) => {
        table.innerHTML += `
            <tr>
                <td>${el.data().name}</td>
                <td>${el.data().age}</td>
                <td>${el.data().province}</td>
                <td>
                    <i class="material-icons text-danger" 
                       id="${el.id}" style="cursor:pointer" 
                       onclick="deleteStudent('${el.id}')">delete</i>
                   
                </td>
            </tr>
        `;
        
    });
});

function deleteStudent(student) {
    database.collection('student').doc(student).delete();
}
function editStudent(student) {
    database.collection('student').doc(student).update({})
}
const btnAdd = document.querySelector('button');
btnAdd.addEventListener('click', function() {
    var name = document.querySelector('#name').value;
    var age = document.querySelector('#age').value;
    var province = document.querySelector('#province').value;

    database.collection('student').add({
        name: name,
        age: age,
        province: province
    });
});

