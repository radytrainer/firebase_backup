$(document).ready(function() {
    db.collection('student').get().then( (snapshot) => {
        var result = "";
        snapshot.forEach(e => {
            result += `
                <div class="card shadow-lg mt-4">
                    <div class="card-header">
                        <img src="${e.data().profile_image}" style="border-radius:50%" width="50" height="50">
                        ${e.data().name}
                        <button class="btn btn-danger float-right"
                        onclick="deletePicture('${e.id}')" type="button">Delete Picture</button>
                    </div>
                    <div class="card-body">
                        <img src="${e.data().post_image}" class="img-fluid">
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary float-right" type="button" data-toggle="modal" data-target="#v${e.id}">view</button>
                    </div>
                </div>



                <!-- The Modal -->
  <div class="modal fade" id="v${e.id}">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Modal Heading</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
            <img src="${e.data().post_image}" class="img-fluid">
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
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

        db.collection('student').add({
            name: name,
            profile_image: profile,
            post_image: post,
        });
    });
});

function deletePicture(pId) {
    db.collection('student').doc(pId).delete();
}