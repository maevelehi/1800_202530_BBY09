class SiteFooter extends HTMLElement {
  constructor() {
    super();
    this.renderFooter();
  }

  renderFooter() {
    this.innerHTML = `
    <footer class="fixed-bottom w-100 d-flex justify-content-center">
      <div class="bg-primary rounded-pill shadow-lg d-flex w-100 justify-content-around align-items-center" 
           style="max-width: 1600px; padding: 35px 16px; height: 62px;">
        <!-- Progress -->
        <a href="/progress-tracking.html" class="nav-link d-flex flex-column align-items-center px-3 py-1 rounded-pill">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="small fw-medium mt-1" style="font-size: 0.7rem;">Progress</span>
        </a>

                <!-- Home -->
        <a href="/home.html" class="nav-link d-flex flex-column align-items-center px-3 py-1 rounded-pill">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="small fw-medium mt-1" style="font-size: 0.7rem;">Home</span>
        </a>

        <!-- Profile -->
        <a href="/profile.html" class="nav-link d-flex flex-column align-items-center px-3 py-1 rounded-pill">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="small fw-medium mt-1" style="font-size: 0.7rem;">Profile</span>
        </a>
      </div>
    </footer>
    `;

    this.addActiveState();
  }

  addActiveState() {
    const currentPath = window.location.pathname;
    const navItems = this.querySelectorAll(".nav-link");

    navItems.forEach((item) => {
      const href = item.getAttribute("href");
      const itemPath = href.replace(".html", "");

      if (
        currentPath === itemPath ||
        (currentPath.includes(itemPath.replace("/", "")) && itemPath !== "/")
      ) {
        item.classList.add("active", "bg-white", "text-primary");
        item.classList.remove("text-light");

        const svg = item.querySelector("svg");
        if (svg) {
          svg.style.stroke = "#006af7"; // Bootstrap primary color
        }
      } else {
        item.classList.add("text-light");
        item.classList.remove("active", "bg-white", "text-primary");
        const svg = item.querySelector("svg");
        if (svg) {
          svg.style.stroke = "#e9ecef"; // Light gray color
        }
      }
    });
  }
}

customElements.define("site-footer", SiteFooter);
