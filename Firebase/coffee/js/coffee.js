
database.collection('coffee').get().then(
    (data) => {
        data.forEach(item => {
            console.log(item.data().location)
        })
    }
);