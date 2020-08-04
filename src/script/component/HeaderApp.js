class HeaderApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       <nav class="navbar navbar-expand-lg navbar-light bg-primary">
          <div class="container">
              <a class="navbar-brand" href="#">Quick Film</a>
          </div>
      </nav>
       `;
  }
}

customElements.define("header-app", HeaderApp);