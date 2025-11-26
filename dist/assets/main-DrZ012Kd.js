import{o as d,d as o,b as i,g as l,a as u,l as v,m as f,c as g,n as h}from"./app-7i-ascS-.js";class b extends HTMLElement{constructor(){super(),this.renderNavbar(),this.setupAuthListener()}renderNavbar(){this.innerHTML=`
  <nav class="navbar bg-body-tertiary bg-info">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home.html">
        <img src="/images/transparent-logo.png" height="43">
      </a>

      <div class="d-flex align-items-center">
        <img
          id="userAvatar"
          src="/images/profilePicture.png"
          alt="User Avatar"
          style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; margin-right: 10px;"
        />
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">FlipIt</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/profile.html">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/progress-tracking.html">Progress Tracking</a>
            </li>
          </ul>
        
          <div id="authControls" class="auth-controls d-flex align-items-center gap-2 my-2 my-lg-0">              
            <!-- populated by JS -->
          </div>
        </div>
      </div>
    </div>
  </nav>
  `}setupAuthListener(){d(u,async a=>{if(a){console.log("Get the ID:",a.uid);try{const t=o(i,"users",a.uid),e=await l(t);if(e.exists()){const n=e.data();if(console.log("user data:",n),n.avatarUrl){console.log("Find the URL:",n.avatarUrl);const r=this.querySelector("#userAvatar");r?(r.src=n.avatarUrl,console.log("The picture already set")):console.log("Can't find the picture element in navbar")}else{console.log("The user didn't set the picture");const r=this.querySelector("#userAvatar");r&&(r.src="/images/profilePicture.png")}}else console.log("The user document does not exist")}catch(t){console.error("Error in obtaining user data:",t)}this.updateAuthControls(!0)}else console.log("The user is not logged in"),this.setDefaultAvatar(),this.updateAuthControls(!1)})}setDefaultAvatar(){const a=this.querySelector("#userAvatar");a&&(a.src="/images/profilePicture.png")}updateAuthControls(a){const t=this.querySelector("#authControls");if(!t)return;let e;a?(e='<button class="btn btn-outline-dark" id="signOutBtn" type="button" style="min-width: 80px;">Log out</button>',t.innerHTML=e,t.querySelector("#signOutBtn")?.addEventListener("click",v)):(e='<a class="btn btn-outline-dark" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>',t.innerHTML=e)}}customElements.define("site-navbar",b);function c(){const s=document.getElementById("name-goes-here");g(async a=>{if(!a){location.href="index.html";return}try{const t=await l(o(i,"users",a.uid)),e=t.exists()?t.data().name:a.displayName||a.email;s&&(s.textContent=`Hello, ${e}!`)}catch(t){console.error("Error fetching user:",t),s&&(s.textContent=`Hello, ${a.email}!`)}h()})}function m(){c(),f()}document.addEventListener("DOMContentLoaded",m);c();
