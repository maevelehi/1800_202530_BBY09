class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <!-- Footer: single source of truth -->
            <footer class="fixed-bottom bg-info">
              <div class="container d-flex justify-content-around py-3 border-top">
                <span class="material-icons" id="home">home</span>
                <span class="material-icons" id="settings">settings</span>
		          </div>
                
            </footer>
        `;

    this.addEventListener("click", (event) => {
      if (event.target.id === "home") {
        window.location.href = "home.html";
      } else if (event.target.id === "settings") {
        window.location.href = "settings.html";
      }
    });
  }
}
customElements.define("site-footer", SiteFooter);
