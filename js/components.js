const components = {}

components.logup = `
<div class="log-container">
    <div class="symbol absolute">Online Class</div>
    <div class="introduce-text">
        <p>
            Everyone is welcome.
        </p>
        <p>
            Online class Where helps you save time and  always opens for free
        </p>
    </div>
    <div class="main-log-container">
        <div class="img-left">
            <img src="../image/Healthy-Positive-Classroom.jpg" alt="">
        </div>
        <div class="form-log-up">
            <form id="register-form" action="">
                <div class="input-wrap">
                    <input placeholder="First Name" type="text" name="firstName">
                    <div class="error" id="firstName"></div>
                </div>
                <div class="input-wrap">
                    <input placeholder="Last Name" type="text" name="lastName">
                    <div class="error" id="lastName"></div>
                </div>
                <div class="input-wrap">
                    <input placeholder="Email" type="email" name="email">
                    <div class="error" id="email"></div>
                </div>
                <div class="input-wrap">
                    <input placeholder="Password" type="password" name="password">
                    <div class="error" id="password"></div>
                </div>
                <div class="input-wrap">
                    <input placeholder="Confirm Password" type="password" name="confirmPassword">
                    <div class="error" id="confirmPassword"></div>
                </div>
                <div class="check-is-teacher-box">
                    <div class="input-wrap">
                        <div class="check-box">
                            <input type="checkbox" id="isTeacher-input" name='isTeacher'>
                            <label for="isTeacher-input">Teacher</label>
                        </div>
                        <div class="check-box">
                            <input type="checkbox" id="isStudent-input" name='isStudent'>
                            <label for="isStudent-input">Student</label>
                        </div>
                    </div>
                    <div class="error" id="isTeacher"></div>
                </div>
                <div class="row">
                    <span>Do you already have an account? <div id="go-to-login">Login</div> </span>
                    <button class="bnt" type="submit">Logup</button>
                </div>
            </form>
        </div>
    </div>
</div>
`
components.login  = `
<div class="log-container">
    <div class="symbol absolute">Online Class</div>
    <div class="introduce-text">
        <p>
            Everyone is welcome.
        </p>
        <p>
            Online class Where helps you save time and  always opens for free
        </p>
    </div>
    <div class="main-log-container">
        <div class="img-left">
            <img src="../image/Healthy-Positive-Classroom.jpg" alt="">
        </div>
        <div class="form-log-up">
            <form id="login-form" action="">
                <div class="input-wrap">
                    <input placeholder="Email" type="text" name="email">
                    <div class="error" id="email"></div>
                </div>
                <div class="input-wrap">
                    <input placeholder="Password" type="password" name="password">
                    <div class="error" id="password"></div>
                </div>
                <div class="row">
                    <span>You don't have an account? <div id="go-to-logup">Logup</div> </span>
                    <button class="bnt" type="submit">Logup</button>
                </div>
            </form>
        </div>
    </div>
</div>
`
components.updateProfileScreen = `
<div class="container">
<div class="nav-bar">
    <a href="">
        <div class="symbol">Online Class</div>
    </a>
    <div class="search-bar">
        <div>
            <input placeholder="Search..." type="text" name="" id="">
            <i class="fas fa-search"></i>
        </div>
    </div>
    <div class="nav-bar-info-User">
        <div><img src="" alt=""></div>
        <div class="user-name"></div>
        <div class="notification">
            <i class="far fa-envelope"></i>
        </div>
        <div class="log-out-bnt">
            <i class="fas fa-sign-out-alt"></i>
        </div>
    </div>
</div>
<div class="main-container">
    <div class="upload-img">
        <div>
            <img src="https://static.thenounproject.com/png/558475-200.png" alt="">
            <label for="upload">
                <i class="fas fa-camera"></i>
            </label>
            <input type="file" accept="image/png ,image/jpeg,image/gif" id="upload" class="display-none">
        </div>
    </div>
    <div class="menu-div">
        <h1 class="title"> Profile</h1>
        <div class="menu-bnt">
            <div>
                <button id="profile-bnt" class="active-bnt">Profile</button>
                <button id="edit-profile-bnt" >Edit profile</button>
                <button id="edit-password-bnt">Edit password</button>
            </div>
        </div>
    </div>
    <div class="profile-box">
        
    </div>
</div>
</div>
`
components.profileBox = `
<div class="profile-row pd-t-2">
<div class="info-profile">
    <div id="profile-name">Name:Đỗ Hải Nam</div>
    <div id="profile-email">Email:dohainamhn@gmail.com</div>
</div>
<div class="info-profile">
    <div id="is-teacher"></div>
    <div id="work-at"></div>
</div>
</div>
<div class="about-me-profile">
<label>About Me:</label>
<p id="about-me">
    
</p>
</div>`
components.editProfileBox=`  
<form id="edit-profile-form" >
<div class="update-profile-bnt">
    <button type="submit" class="bnt" id="update-profile-bnt">Update</button>
</div>
<div class="profile-row">
    <div class="input-bar">
       <span class="label">First name</span>
       <input type="text" name="firstName">
    </div>
    <div class="check-is-teacher">
       <div class="inner-check">
           <input type="checkbox" name="isTeacher" id="isTeacher">
           <span class="label">Teacher</span">
       </div>
       <div class="inner-check">
        <input type="checkbox" name="isStudent" id="isStudent">
           <span class="label">Student</span>
       </div>
    </div>
</div>
<div class="profile-row">
<div class="input-bar">
    <span class="label">Last name</span>
    <input type="text" name="lastName">
</div>
<div class="work-at input-bar">
    <span class="label">Work/Study At</span>
    <input type="text" name="workAt">
</div>
</div>
<div class="profile-row">
<div class="profile-column">
    <div class="input-bar">
        <span class="label">Email</span>
        <div class="email-profile"></div>
    </div>
    <div class="input-bar mrt-2">
        <span class="label">Password</span>
        <div class="password-profile">************</div>
    </div>
</div>
    <div class="input-bar about-me">
        <span class="label">About me</span>
        <textarea name="aboutMe"  cols="30" rows="10"></textarea>
    </div>
</div>
</form>`
components.editPasswordBox =`
<form id="reset-password-form">
    <div class="input-bar mr-t-2">
        <span class="label">Current Password</span>
        <input type="password" name="currentPassword">
        <span class="error" id="currentPassword" ></span>
    </div>
    
    <div class="input-bar mr-t-2">
        <span class="label">New Password</span>
        <input type="password" name="password">
        <span class="error" id="password"></span>
    </div>
    <div class="input-bar mr-t-2">
        <span class="label">Confirm Password</span>
        <input type="password" name="confirmPassword">
        <span class="error" id="confirmPassword"></span>
    </div>
    <button type=submit" class="bnt">Confirm</button>
</form>
`