class FooterApp extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="text-center mt-5">
            <div class="row">
                <div class="col">
                <p>&copy; 2020 | Ilzam Afif.</p>
                </div>
            </div>
        </footer>
       `;
    }
}

customElements.define("footer-app", FooterApp);