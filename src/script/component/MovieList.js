class MovieList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       <div class="conatiner">
          <div class="row mt-3 justify-content-center">
              <div class="col">
                  <div class="row" id="movie-list">

                  </div>
              </div>
          </div>
      </div>
       `;
  }
}

customElements.define("movie-list", MovieList);