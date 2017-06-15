app.service('RandomService', function($http){
console.log('RandomService');

rs = this;



rs.randomGif = function (){
  var randomUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';

  return $http.get(randomUrl).then(function(response){
    console.log('back from random', response);
  return response.data.data.image_url;
  })//end http
}//end randomGif

});//end service
