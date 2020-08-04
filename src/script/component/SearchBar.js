class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="container">
                <div class="row mt-3 justify-content-center">
                    <div class="col-md-10 col-sm-8col-xs-6">
                        <h1 class="text-center">Search Movie</h1>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Judul Film" id="search-input">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" id="search-button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
       `;
  }
}

customElements.define("search-bar", SearchBar);