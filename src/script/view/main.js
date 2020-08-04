import "../component/MovieList.js";
import "../component/SearchBar.js";
import Api from "../data/api.js";
import $ from "jquery";
import moment from "moment";

const main = () => {
  const movieSearch = async () => {
    try {
      const result = await Api.getData($("#search-input").val());
      result.forEach((movie) => {
        $("#movie-list").append(`
          <div class=" col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="card">
              <img src="${movie.poster_path == null ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg" : "https://image.tmdb.org/t/p/original/" + movie.poster_path}"class="card-img-top" alt="Poster ${movie.title} "/>
              <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${moment(movie.release_date).format("YYYY")}<br>
                 &#9734; ${movie.vote_average}
                </p>
                <!-- Button trigger modal -->
                <a href="#" id="moviedetail" data-id="${movie.id}"  data-toggle="modal" data-target="#exampleModal">See detail</a>
              </div>
            </div>
          </div>
        `);

        document.querySelectorAll("#moviedetail").forEach((item) => {
          item.addEventListener("click", function () {
            const dataID = item.dataset.id;
            detailMovie(dataID);
          });
        });
      });

      async function detailMovie(id) {
        try {
          const resultDetail = await Api.getDataById(id);

          const production = [];

          resultDetail.production_companies.forEach((item) => {
            production.push(item.name);
          });

          const genre = [];
          resultDetail.genres.forEach((item) => {
            genre.push(item.name);
          });

          $('.modal-body').html(`
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-5">
                        <img src="${ resultDetail.poster_path == null ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg" : "https://image.tmdb.org/t/p/original/" + resultDetail.poster_path} "class="img-fluid" alt="Poster ${resultDetail.title} "/>
                      </div>
                      <div class="col-md-7">
                        <ul class="list-group">
                          <li class="list-group-item">${resultDetail.title}</li>
                          <li class="list-group-item">Genre : ${genre}</li>
                          <li class="list-group-item">Release Date : ${moment(resultDetail.release_date).format("DD MMMM YYYY")}</li>
                          <li class="list-group-item">Producer : ${production}</li>
                          <li class="list-group-item">Sinopsis : ${ resultDetail.overview}</li>
                        </ul>
                      </div>
                  </div>
              </div>
            `);


        } catch (message) {
          console.log(message);
        }
      }


    } catch (message) {
      $("#movie-list").html(`
      <h3 class="mt-5 mx-auto">${message}</h3>
      `);
    }
  };

  $("#search-button").click(() => {
    $("#movie-list").html("");
    movieSearch();
  });

  $("#search-input").keyup((event) => {
    if (event.keyCode === 13) {
      $("#movie-list").html("");
      movieSearch();
      event.preventDefault();
    }
  });
};



export default main;
