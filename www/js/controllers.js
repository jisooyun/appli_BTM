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
          $state.go("homepage");
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
          $state.go("homepage");
      }
  }
)
.controller('gmailAuth', function($scope, $state){
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  $scope.gmailAoth = function(){
      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.

      var user = result.user;

      $state.go("homepage");
      console.log(1);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
})
    .controller('listCtrl', function($scope, $state) {

        var products = firebase.database().ref('products');
        products.on('value', function(snapshot) {
            $scope.products = snapshot.val();
            console.log($scope.products)
        });

        $scope.show = function () {
           console.log($scope.i.id);
        }
        $scope.selectProduct = function(id){
          //console.log($scope.singleProduct);
          $state.go('spec_produit', {productData: id});
        }

      
    })

    .controller('OneCtrl', function($scope) {

        var products = firebase.database().ref('products');
        products.on('value', function(snapshot) {
            $scope.products = snapshot.val();
            console.log($scope.products)
        });
    })
    .controller('specCtrl', function($scope, $stateParams) {
      $scope.singleProduct = $stateParams.productData;
      if($scope.singleProduct.price === undefined) $scope.singleProduct.price = 15.99;
      console.log($scope.singleProduct);
    })
    .controller('addCtrl', function ($scope, $state) {
        $scope.add = function (e) {
            // Get a key for a new product.
            var newPostKey = firebase.database().ref().child('products').push().key;

            // A product entry.
            var postData = {
                name: e.name,
                id: newPostKey,
                categorie: e.categorie,
                desc: e.desc,
                price: e.price,
                src: e.src
            };

            // Write the new product's data simultaneously in the posts list and the user's post list.
            var updates = {};
            updates['/products/' + newPostKey] = postData;

            $state.go('homepage');

            return firebase.database().ref().update(updates);
        };
    });
