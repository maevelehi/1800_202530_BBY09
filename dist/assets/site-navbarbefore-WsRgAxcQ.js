import{o as s,l as e,a as i}from"./app-BiaT0_M0.js";class o extends HTMLElement{constructor(){super(),this.renderNavbar(),this.renderAuthControls()}renderNavbar(){this.innerHTML=`
  <nav class="navbar bg-body-tertiary bg-info">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home.html">
        <img src="/images/transparent-logo.png" height="36">
      
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
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
          </ul>
        
          <div id="authControls" class="auth-controls d-flex align-items-center gap-2 my-2 my-lg-0">              
            <!-- populated by JS -->
          </div>
        </div>
      </div>
    </div>
  </nav>
  `}renderAuthControls(){const a=this.querySelector("#authControls");a.innerHTML='<div class="btn btn-outline-light" style="visibility: hidden; min-width: 80px;">Log out</div>',s(i,n=>{let t;y,n?(t='<button class="btn btn-outline-dark" id="signOutBtn" type="button" style="min-width: 80px;">Log out</button>',a.innerHTML=t,a.querySelector("#signOutBtn")?.addEventListener("click",e)):(t='<a class="btn btn-outline-dark" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>',a.innerHTML=t)})}}customElements.define("site-navbar",o);
