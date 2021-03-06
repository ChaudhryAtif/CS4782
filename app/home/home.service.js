(function () {
    'use strict';
    angular.module('csApp').service('HomeService', home);

    home.$inject = ['$http', '$q'];
    function home($http, $q) {
        return {
            getIndustriesAndFrameworks: getIndustriesAndFrameworks,
            getFrameworkDetails: getFrameworkDetails
        };

        function getIndustriesAndFrameworks() {
            var deferred = $q.defer();
            return $http.get("asset/frameworks.json")
                .then(callSuccess)
                .catch(callError);

            function callSuccess(response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }
            function callError() {
                deferred.reject("Error getting frameworks.");
                return deferred.promise;
            }
        }

        function getFrameworkDetails(frameworkName) {
            var deferred = $q.defer();
            return $http.get("http://localhost:3000/api/frameworks/" + frameworkName)
                .then(callSuccess)
                .catch(callError);

            function callSuccess(response) {
                deferred.resolve(response.data);

                return deferred.promise;
            }
            function callError() {
                deferred.reject("Error getting framework details.");
                return deferred.promise;
            }
        }
    }
})();