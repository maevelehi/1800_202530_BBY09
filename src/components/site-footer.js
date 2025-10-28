class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <!-- Footer: single source of truth -->
            <footer class="fixed-bottom bg-info">
              <div class="container d-flex justify-content-around py-3 border-top">
                <span class="material-icons" id="home">home</span>
                <span class="material-icons" id="settings">settings</span>
                <span class="material-icons" id="group">group</span>
		          </div>
                
            </footer>
        `;
  }
}

customElements.define("site-footer", SiteFooter);
