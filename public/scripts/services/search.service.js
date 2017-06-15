app.service('SearchService', function($http){
  console.log('searchservice');

  ss = this;

  ss.searchGif = function(url){

  return $http.get(url).then(function(response){
      console.log('back from search', response);

    return response.data.data;
    })//end searchUrl
  }//end searchGif



});//end SearchService
