/*
*Esta secuencia de comandos está ejecutando una función de inicio
*que crea una instancia del enrutador y proporciona dos rutas,
*configurando el inicio como el predeterminado.
*/

'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
            new Route('search', 'search.html')
        ]);
    }
    init();
}());

/*config(function($routeProvider){
  $routeProvider
  .when("/",{
    controller: "ReposController",
    templateUrl: "templates/home.html"
  })
  .when("/repo/:name",{
    controller: "RepoController",
    templateUrl: "templates/repo.html"
  })
});*/