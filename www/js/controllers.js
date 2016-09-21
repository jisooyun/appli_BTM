angular.module('starter.controllers', [])

.controller("AuthController",
  function($scope, $state) {

    $scope.addUser = function() {
        pseudo = this.pseudo;
        mail = this.email;
        mdp = this.mdp;
        mdpConf = this.mdpConf;
        firebase.auth().createUserWithEmailAndPassword(mail, mdp).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          });
          console.log("Pas d'eurreur GG t'es Inscrit ma gueule ;-)");
          // $state.go("homepage");
      }
  }
)

.controller("ConnexionController",
  function($scope, $state) {

    $scope.userConnexion = function() {
        mail = this.mail;
        mdp = this.mdp;
        firebase.auth().signInWithEmailAndPassword(mail, mdp).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          });
          console.log("Pas d'eurreur GG t'es CONNECTER ma gueule ;-)");
          // $state.go("homepage");
      }
  }
)

    .controller('listCtrl', function($scope) {

        var products = firebase.database().ref('products');
        products.once('value', function(snapshot) {
            $scope.products = snapshot.val();
            console.log($scope.products)
        });

    })

    .controller('addCtrl', function ($scope, $state) {
        $scope.add = function (e) {
            // A product entry.
            var postData = {
                name: e.name,
                categorie: e.categorie,
                desc: e.desc,
                src: e.src
            };

            // Get a key for a new product.
            var newPostKey = firebase.database().ref().child('products').push().key;

            // Write the new product's data simultaneously in the posts list and the user's post list.
            var updates = {};
            updates['/products/' + newPostKey] = postData;

            $state.go('homepage');

            return firebase.database().ref().update(updates);
        };
    });
>>>>>>> 199d24bf081dee493a46521f8436b0759b32b03c
