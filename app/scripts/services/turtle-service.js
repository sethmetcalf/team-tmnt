'use strict';

angular.module('teamTmntApp')
  .service('TurtleService', function TurtleService($q, $http) {
    return {
      getTeams: function() {
        var deferred = $q.defer();

        $http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team'}).success(function(data) {
            deferred.resolve(data);
          }
        );
        return deferred.promise;
      },
      getTeam: function(id) {
        var deferred = $q.defer();

        $http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team/'+id}).success(function(data) {
            deferred.resolve(data[0]);
          }
        );
        return deferred.promise;
      },
      getCharacter: function(id) {

        var deferred = $q.defer();

        $http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/character/'+id}).success(function(data) {
            deferred.resolve(data);
          }
        );
        return deferred.promise;
      }
    };
  });


  // 'use strict';

// angular.module('teamTmntApp')
//   .service('TurtleService', function TurtleService($q, $http) {
//   	return{
//   		getTeam: function() {
//   			var deferred = $q.defer();

//   			$http({method: 'GET', url:'http://pure-ocean-3603.herokuapp.com/team' + teamId}}).success(function(data, status, headers, config) {
//   				if(Array.isArray(data)) {
//   				deferred.resolve(data[0]);
//   			} else {
//   				deferred.resolve(data);
//   			}
  		
//   		}).error(function (data, status, headers, config) {
//   			deferred.reject(data);
//   		});

//   		return deferred.promise;

//   		},

//   		getTeams: function() {
//   			var deferred = $q.defer();

//   			$http({method: 'GET', url:'http://pure-ocean-3603.herokuapp.com/team').success(function(data, status, headers, config) {
//   				if(Array.isArray(data)) {
//   				deferred.resolve(data[0]);
//   			} else {
//   				deferred.resolve(data);
//   			}
  		
//   		}).error(function (data, status, headers, config) {
//   			deferred.reject(data);
//   		  }
//   		);
  		
//   		return deferred.promise;

//   		}
//   	};
    
//   });