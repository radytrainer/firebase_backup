db.collection('homework').get().then(
    (data) => {
        var result = document.querySelector('#result');
        data.forEach( e => {
            result.innerHTML += `
                <div class="card shadow-lg mt-4">
                    <div class="card-header">
                        <img src="${e.data().profile}"  width="40" height="40" style="border-radius: 50%">
                        ${e.data().name}
                        <button class="btn btn-info  float-right" type="button" data-toggle="modal" data-target="#v${e.id}">View</button>
                    </div>
                    <div class="card-body">
                        <img src="${e.data().post}" class="img-fluid">
                        <hr>
                        ${e.data().text}
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-danger btn-sm float-right" type="button" onclick="deletePicture('${e.id}')">Delete</button>
                    </div>
                </div>

                <!-- The Modal -->
                <div class="modal fade" id="v${e.id}">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    
                        <!-- Modal Header -->
                        <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <!-- Modal body -->
                        <div class="modal-body">
                            <img src="${e.data().post}" class="img-fluid">
                        </div>
                    </div>
                    </div>
                </div> 
            `;
        })
    }
);

const btn = document.querySelector('#add');
btn.addEventListener('click', function() {
    var name = document.querySelector('#name').value;
    var profile = document.querySelector('#profile').value;
    var post = document.querySelector('#post').value;
    var text = document.querySelector('#text').value;
    var form = document.querySelector('#add-form');
    db.collection('homework').add({
        name: name,
        profile: profile,
        post: post,
        text: text,
    });
    
   form.reset();

});

function deletePicture(uId) {
    db.collection('homework').doc(uId).delete();
}