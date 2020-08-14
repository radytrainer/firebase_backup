$(document).ready(function() {
    database.collection('profile').get().then( (data) => {
        var result = "";
        data.forEach( e => {
            result += `
            <div class="card shadow-lg mt-4">
                <div class="card-header">
                    <img src="${e.data().img_profile}" style="border-radius:50%" width="50" height="50">
                    ${e.data().name}
                    <button class="btn btn-danger btn-sm float-right"
                    onclick="deleteUser('${e.id}')">delete</button>

                </div> 
                <div class="card-body">
                    <img src="${e.data().post_img}" class="img-fluid">
                </div>
            </div>
            `;
        });
        $('#result').append(result);
    });


    $('button').on('click', function() {
        var name = $('#name').val();
        var profile = $('#profile').val();
        var post = $('#post').val();
        database.collection('profile').add({
            name: name,
            img_profile: profile,
            post_img: post,
        });
    });

});

function deleteUser(uid) {
    database.collection('profile').doc(uid).delete();
}