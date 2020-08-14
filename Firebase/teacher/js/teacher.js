$(document).ready(function() {
    database.collection('teacher').get().then( (data) => {
        var table = $('table');
        var result = "";
        data.forEach( item => {
            result += `
                <tr>
                    <td>${item.data().name}</td>
                    <td>${item.data().age}</td>
                    <td>
                        <i class="material-icons text-danger"
                        style="cursor:pointer"
                        id="${item.id}" onclick="delTeacher('${item.id}')">delete</i>
                    </td>
                </tr>
            `;
        });
        table.append(result);
    }); 
   $('button').on('click', function() {
    var name = document.getElementById('name').value; 
        var age = document.getElementById('age').value; 
        database.collection('teacher').add({
            name: name,
            age: age
        });
   });
});
function delTeacher(teaId) {
    database.collection('teacher').doc(teaId).delete();
}