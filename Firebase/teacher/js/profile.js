$(document).ready(function() {
    database.collection('profile').get().then( (data) => {
        var result = "";
        data.forEach( el=> {
            result += `
                <div class="card shadow-lg mt-4">
                    <div class="card-header">
                        <img src="${el.data().image_profile}" width="50" height="50" style="border-radius:50%">
                        ${el.data().name}
                    </div>
                    <div class="card-body">
                        <img src="${el.data().post}" class="img-fluid">
                    </div>
                </div>
            `;
        });
        $('#result').append(result);
    })
});