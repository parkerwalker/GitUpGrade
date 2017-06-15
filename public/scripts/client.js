console.log('js');
var app = angular.module('app', []);

app.controller('GiphyController', function(RandomService, SearchService){
  var vm = this;


  vm.randomClick = function(){
    RandomService.randomGif().then(function(data){
      vm.returnRandom = data;
    });
  };//randomCLick

  vm.searchClick = function(){
    var searchInput = vm.search;
    vm.search = '';
    var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=' + searchInput + '&api_key=dc6zaTOxFJmzC'

    SearchService.searchGif(searchUrl).then(function(data){
    vm.returnSearch = data;
    })

  };//end searchClick

});//end controller
