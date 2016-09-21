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
// //SE CONNECTER VIA FACEBOOK
// .controller("UserController", ["$scope", "Auth", "$state",
//     function($scope, Auth, $state) {
//         $scope.auth = Auth;
//         // any time auth status updates, add the user data to scope
//         $scope.auth.$onAuth(function(authData) {
//             $scope.authData = authData;
//         });
//
//         // we would probably save a profile when we register new users on our site
//         // we could also read the profile to see if it's null
//         // here we will just simulate this with an isNewUser boolean
//         var isNewUser = false;
//
//         var ref = new Firebase("https://btmr-5b07b.firebaseio.com/");
//
//
//
//
//
//         ref.onAuth(function(authData) {
//           ref.once('value', function(snapshot) {
//           var test = getName(authData)
//           var test2 = authData.provider
//           console.log(snapshot)
//           if (snapshot.hasChild(test)) {
//             console.log('test')
//             var isNewUser = true;
//           }else{
//             $state.go("homepage");
//             console.log('??')
//           }
//         });
//             if (authData && isNewUser) {
//                 var favoris = [0];
//                 var titres = [0];
//                 var titre = "Inscit";
//                 // save the user's profile into the database so we can list users,
//                 // use them in Security and Firebase Rules, and show profiles
//                 ref.child("users").child(authData.uid).set({
//                     provider: authData.provider,
//                     name: getName(authData),
//                     fav: favoris,
//                     sucre: 0,
//                     sel: 0,
//                     titres: titres,
//                     titre: titre
//                 });
//                 $state.go("homepage");
//
//             }
//         });
//
//         // find a suitable name based on the meta info given by each provider
//         function getName(authData) {
//             switch(authData.provider) {
//                 case 'password':
//                     return authData.password.email.replace(/@.*/, '');
//                 case 'twitter':
//                     return authData.twitter.displayName;
//                 case 'facebook':
//                     return authData.facebook.displayName;
//             }
//         }
//     }
//
// ])
// .controller('ConnexionController', function($scope, $state, $firebaseAuth) {
//
//     $scope.userConnexion = function() {
//         var ref = new Firebase("https://btmr-5b07b.firebaseio.com/");
//
//         mail = this.mail;
//         mdp = this.mdp;
//         ref.authWithPassword({
//         "email": this.mail,
//         "password": this.mdp
// }       , function(error, authData) {
//         if (error) {
//           console.log("Login Failed!", error);
//         } else {
//           console.log("Authenticated successfully with payload:", authData);
//         }
//       });
//     }
// })
// //SE CONNECTER VIA FACEBOOK
// .controller("UserController", ["$scope", "Auth", "$state",
//     function($scope, Auth, $state) {
//         $scope.auth = Auth;
//
//         // any time auth status updates, add the user data to scope
//         $scope.auth.$onAuth(function(authData) {
//             $scope.authData = authData;
//         });
//
//         // we would probably save a profile when we register new users on our site
//         // we could also read the profile to see if it's null
//         // here we will just simulate this with an isNewUser boolean
//         var isNewUser = false;
//
//         var ref = new Firebase("https://btmr-5b07b.firebaseio.com/");
//
//
//
//
//         ref.onAuth(function(authData) {
//           ref.once('value', function(snapshot) {
//           var test = getName(authData)
//           var test2 = authData.provider
//           console.log(snapshot)
//           if (snapshot.hasChild(test)) {
//             console.log('test')
//             var isNewUser = true;
//           }else{
//             $state.go("homepage");
//             console.log('??')
//           }
//         });
//             if (authData && isNewUser) {
//                 var favoris = [0];
//                 var titres = [0];
//                 var titre = "Inscit";
//                 // save the user's profile into the database so we can list users,
//                 // use them in Security and Firebase Rules, and show profiles
//                 ref.child("users").child(authData.uid).set({
//                     provider: authData.provider,
//                     name: getName(authData),
//                     fav: favoris,
//                     sucre: 0,
//                     sel: 0,
//                     titres: titres,
//                     titre: titre
//                 });
//                 $state.go("homepage");
//
//             }
//         });
//
//         // find a suitable name based on the meta info given by each provider
//         function getName(authData) {
//             switch(authData.provider) {
//                 case 'password':
//                     return authData.password.email.replace(/@.*/, '');
//                 case 'twitter':
//                     return authData.twitter.displayName;
//                 case 'facebook':
//                     return authData.facebook.displayName;
//             }
//         }
//     }
//
// ])
// //authInscription
// .controller('AuthController', function($scope, authProvider, $state) {
//
//     $scope.addUser = function() {
//         var ref = new Firebase("https://btmr-5b07b.firebaseio.com/");
//         pseudo = this.pseudo;
//         mail = this.email;
//         mdp = this.mdp;
//         mdpConf = this.mdpConf;
//
//         if(mdp == mdpConf) {
//           console.log(1);
//             // ref.createUser({
//             //     "email": mail,
//             //     "password": mdp
//             // }, function (error, userData) {
//             //     if (error) {
//             //         console.log("Error creating user:", error);
//             //     } else {
//             //
//             //         console.log(userData);
//             //         console.log("Successfully created user account with uid:", userData.uid);
//             //         var ref = new Firebase("https://swaltyapp.firebaseio.com");
//             //         ref.child("users").child(userData.uid).set({
//             //         provider: "password",
//             //         name: pseudo,
//             //         fav: favoris,
//             //         sucre: 0,
//             //         sel: 0,
//             //         titres: titres,
//             //         titre: titre
//             //     });
//             //         $state.go("homepage");
//             //     }
//             // });
//         }
//
//     }
//
//
// })
