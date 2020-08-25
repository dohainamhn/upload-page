const model = {}
model.register = (data)=>{
    firebase.auth().createUserWithEmailAndPassword(data.email.value, data.password.value)
    .then((res)=>{
            firebase.auth().currentUser.updateProfile({
                displayName: data.lastName.value + data.firstName.value,
                photoURL: "https://firebasestorage.googleapis.com/v0/b/chat-app-bc2a8.appspot.com/o/user.png?alt=media&token=28e24cc2-86bd-43f8-aa54-2a62ef76650a"
                }).then(()=>{
                    let check = false
                    data.isTeacher.value == 'true'? check = true:check=false
                    model.addFireStore("users",
                    {
                        name: res.user.displayName,
                        email: res.user.email,
                        isTeacher: check,
                        password:data.password.value
                    });
                })
                firebase.auth().currentUser.sendEmailVerification()
                alert("Congratulation! you have successfully registed\n please check your email to verify your account. ")
                view.setActiveScreen("login",data)
            })
    .catch(function(error) {
        console.log(error);
        controller.authenticate(error)
    });
}
model.login = (data)=>{
    firebase.auth().signInWithEmailAndPassword(data.email.value,data.password.value)
    .then((res)=>{
        if(!res.user.emailVerified){
            
            alert( 'please verify your email')
        }
        
    })
    .catch(function(error) {
        console.log(error);
        controller.authenticate(error)
    });
}
model.addFireStore = (collection,data)=>{
    var db = firebase.firestore();
    db.collection(collection).add(data)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        model.key = docRef.id
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
model.resetPassword = (data)=>{
    var user = firebase.auth().currentUser;
    var credentials = firebase.auth.EmailAuthProvider.credential(
        user.email,
        data.currentPassword.value
      );
    user.reauthenticateWithCredential(credentials).then(function() {
        user.updatePassword(data.password.value).then(function() {
            model.updateDataToFireStore('users',{password:data.password.value})
            alert('update successfully');
            firebase.auth().signOut()
          }).catch(function(error) {
              controller.authenticate(error)
            console.log(error);
          });
      }).catch(function(error) {
        console.log(error);
      });
    
}
model.getDataFireStore = async (collection)=>{
    let db = firebase.firestore()
    let data = await db.collection(`${collection}`)
    .where("email", "==", firebase.auth().currentUser.email)
    .get()
    return data.docs[0].data()
}
model.updateDataToFireStore = async (collection,data)=>{;
    let db = firebase.firestore()
    let doc = await db.collection(`${collection}`)
    .where("email", "==", firebase.auth().currentUser.email)
    .get()
    db.collection(`${collection}`).doc(`${doc.docs[0].id}`).update(data)
}
