const view = {}

view.setActiveScreen= (screen,data)=>{
    switch(screen)
    {
        case "logup":
            {
                let screen= document.getElementById('app')
                screen.innerHTML = components.logup
                let register = document.getElementById('register-form')
                let gotoLogin  = document.getElementById('go-to-login')
                register.addEventListener('submit',(x)=>{
                    x.preventDefault()
                    let check = null;
                    register.isTeacher.checked == register.isStudent.checked? check = "":check = register.isTeacher.checked
                    const data = {
                        firstName: {
                            value:register.firstName.value,
                            name: 'First name'
                        },
                        lastName: {
                            value:register.lastName.value,
                            name: 'Last name'
                        },
                        email: {
                            value:register.email.value,
                            name: 'Email'
                        },
                        password: {
                            value: register.password.value,
                            name: 'Password'
                        },
                        confirmPassword: {
                            value: register.confirmPassword.value,
                            name: 'Confirm password'
                        },
                        isTeacher:{
                            value:`${check}`,
                            name: "checking to Teacher or Student",
                          },
                    }
                    controller.checkNull(data)
                    controller.logup(data)
                })
                let isTeacher = document.getElementById('isTeacher-input')
                let isStudent = document.getElementById('isStudent-input')
                isTeacher.addEventListener('change',(e)=>{
                  isTeacher.checked == true? isStudent.disabled = true: isStudent.disabled = false
                })
                isStudent.addEventListener('change',(e)=>{
                  isStudent.checked == true? isTeacher.disabled = true: isTeacher.disabled = false
                })
                gotoLogin.addEventListener('click',()=>{
                    view.setActiveScreen('login')
                })
                break;
            }
        case "login":
            {
                let screen= document.getElementById('app')
                screen.innerHTML = components.login
                let login = document.getElementById('login-form')
                let gotoLogup = document.getElementById('go-to-logup')
                login.addEventListener('submit',(x)=>{
                    x.preventDefault()
                    login.email.value = login.email.value.trim();
                    const data = {
                        email:{
                            value: login.email.value,
                            name: 'Email'
                        },
                        password: {
                            value:login.password.value,
                            name:'Password'
                        }
                    }
                    controller.checkNull(data)
                    controller.login(data)
                })
                gotoLogup.addEventListener('click',()=>{
                   view.setActiveScreen('logup')
                })
                break;
            }
        case 'updatePageScreen':{
            document.getElementById("app").innerHTML = components.updateProfileScreen;
            document.querySelector('.log-out-bnt').addEventListener('click',()=>{
                firebase.auth().signOut()
            })
            console.log('hello ae');
            view.setNavbarInfoUser()
            view.setUpProfilePage()
            view.listenOnUpdateImage()
            break;
            }
    }
}
view.setNavbarInfoUser = ()=>{
    let imgUser = document.querySelector('.nav-bar-info-User img')
    let userName = document.querySelector('.nav-bar-info-User .user-name')
    let img = document.querySelector('.upload-img img').src = firebase.auth().currentUser.photoURL
    userName.innerHTML = `${firebase.auth().currentUser.displayName}`
    imgUser.src=`${firebase.auth().currentUser.photoURL}`
}
view.setProfileDefault = async ()=>{
    document.getElementById('profile-name').innerHTML = `Name: ${firebase.auth().currentUser.displayName}`
    document.getElementById('profile-email').innerHTML =  `Email: ${firebase.auth().currentUser.email}`
    let isTeacher = document.getElementById('is-teacher');
    let workAt = document.getElementById('work-at')
    let aboutMe = document.getElementById('about-me')
    let data = await model.getDataFireStore('users');
    data.isTeacher?isTeacher.innerHTML = "Job: Teacher":isTeacher.innerHTML ="Job: Student"
    data.workAt == undefined? workAt.innerHTML = ``:workAt.innerHTML = `Working at:  ${data.workAt}` 
    data.aboutMe == undefined? aboutMe.innerHTML =``: aboutMe.innerHTML = data.aboutMe
}
view.setUpProfilePage = ()=>{
    document.querySelector('.profile-box').innerHTML = components.profileBox
    view.setProfileDefault()
    view.listenChangeToEditProfile()
}
view.listenChangeToEditProfile = ()=>{
    let profileBox = document.querySelector('.profile-box')
    let profileBnt = document.getElementById('profile-bnt')
    let editProfileBnt = document.getElementById('edit-profile-bnt')
    let editPasswordBnt = document.getElementById('edit-password-bnt')
    
    profileBnt.addEventListener('click',()=>{
      profileBnt.classList = 'active-bnt'
      editProfileBnt.classList=''
      editPasswordBnt.classList=''
      profileBox.innerHTML = components.profileBox
      let title = document.querySelector('.menu-div .title')
      title.innerHTML = 'Profile'
      view.setProfileDefault()
    })
    editProfileBnt.addEventListener('click',()=>{
      profileBnt.classList = ''
      editProfileBnt.classList='active-bnt'
      editPasswordBnt.classList=''

      profileBox.innerHTML = components.editProfileBox
      let emailProfile = document.querySelector('.email-profile')
      emailProfile.innerHTML = `${firebase.auth().currentUser.email}`
      let title = document.querySelector('.menu-div .title')
      let isTeacher = document.getElementById('isTeacher')
      let isStudent = document.getElementById('isStudent')

      title.innerHTML = 'Edit Profile'
      isTeacher.addEventListener('change',(e)=>{
        isTeacher.checked == true? isStudent.disabled = true: isStudent.disabled = false
      })
      isStudent.addEventListener('change',(e)=>{
        isStudent.checked == true? isTeacher.disabled = true: isTeacher.disabled = false
      })
      view.setEventListenEditProfile()
    })
    editPasswordBnt.addEventListener('click',()=>{
      profileBnt.classList = ''
      editProfileBnt.classList=''
      editPasswordBnt.classList='active-bnt'
      profileBox.innerHTML = components.editPasswordBox
      let title = document.querySelector('.menu-div .title')
      title.innerHTML = 'Edit Password'
      let resetPasswordForm = document.getElementById('reset-password-form')
      let currentPasswordError = document.getElementById('currentPassword')
      resetPasswordForm.addEventListener('submit', async (e)=>{
        e.preventDefault()
        let data ={
            currentPassword:{
                value: resetPasswordForm.currentPassword.value,
                name:'currentPassword'
            },
            password:{
                value: resetPasswordForm.password.value,
                name:'New Password'
            },
            confirmPassword:{
                value: resetPasswordForm.confirmPassword.value,
                name:'confirmPassword'
            }
        }
        controller.checkNull(data)
        let dataUser = await model.getDataFireStore('users')
        if(resetPasswordForm.currentPassword.value == dataUser.password){
            controller.resetPassword(data)
        }
        else{
            currentPasswordError.innerHTML ="Current password is not correct"
        }
      })
    })
}
view.setEventListenEditProfile = ()=>{
   let updateForm = document.getElementById('edit-profile-form') 
   updateForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        let isTeacher = false;
        updateForm.isTeacher.checked == updateForm.isStudent.checked? isTeacher = "":isTeacher = updateForm.isTeacher.checked; 
        const data = {}
        if(updateForm.workAt.value !== "") data.workAt = updateForm.workAt.value;
        if(isTeacher !== "") data.isTeacher = isTeacher;
        if(updateForm.aboutMe.value !== "") data.aboutMe = updateForm.aboutMe.value;
        model.updateDataToFireStore('users',data)
        let name = `${updateForm.firstName.value} ${updateForm.lastName.value}`
        if(name !== " ") {
            firebase.auth().currentUser.updateProfile({
                displayName:name
            })
            let userName = document.querySelector('.nav-bar-info-User .user-name')
            userName.innerHTML = `${name}`
        }
        alert('update profile successfully')
   })
}
view.listenOnUpdateImage =  ()=>{
    let uploadImg = document.getElementById('upload')
    uploadImg.addEventListener('change',async(e)=>{
        let img = document.querySelector('.upload-img img')
        let navImg = document.querySelector('.nav-bar-info-User img')
        let storageRef = firebase.storage().ref();
        let imgName = e.target.value.slice(e.target.value.lastIndexOf("th")+3,e.target.value.length);
        let uploadTask = await storageRef.child(`${imgName}`).put(e.target.files[0])
        let linkImg = await uploadTask.ref.getDownloadURL()
        img.src= linkImg
        navImg.src= linkImg
        firebase.auth().currentUser.updateProfile({
            photoURL: linkImg
        }).then((res)=>{
            console.log(res);
            alert('Upload Image successful')
        })

    })
}
