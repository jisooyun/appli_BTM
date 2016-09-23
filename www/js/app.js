// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic', 'starter.controllers', 'ui.router', 'firebase'])


.run(function($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

    })
})

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('pre_home', {
            url: '/pre_home',
            templateUrl: 'templates/prehome.html'
            // controller : 'UserController'
        })
        .state('homepage', {
            url: '/homepage',
            templateUrl: 'templates/home.html'
        })

        .state('profil', {
            url: '/profil',
            templateUrl: 'templates/profil.html'
        })

        .state('edit_profil', {
            url: '/edit_profil',
            templateUrl: 'templates/edit_profil.html',
            controller: 'UpdateUserCtrl'
        })

        .state('inscription', {
            url: '/inscription',
            templateUrl: 'templates/inscription.html'
        })

        .state('connexion', {
            url: '/connexion',
            templateUrl: 'templates/connexion.html'
        })

        .state('categorie', {
            url: '/categorie',
            templateUrl: 'templates/categorie.html'
        })

        .state('list_produits', {
            url: '/produits_list',
            templateUrl: 'templates/listProducts.html',
            controller: 'listCtrl'
        })

        .state('ajouter_produits', {
            url: '/produits_ajout',
            templateUrl: 'templates/addProduct.html',
            controller: 'addCtrl'
        })

        .state('spec_produit', {
            url: '/spec_produit',
            templateUrl: 'templates/spec_produit.html',
            controller: 'specCtrl',
            params: {
              productData: null
            }
        })
        .state('register', {
          url: "/register",
          templateUrl : 'templates/register.html'
        })
        .state('login',{
          url: "/login",
          templateUrl : 'templates/login.html'
        })



      //   $urlRouterProvider.rule(function ($injector, $location){
      //
      //   })
      //   firebase.auth().onAuthStateChanged(function(user) {
      //     if (1==2) {
      // // User is signed in.
      //       $urlRouterProvider('/homepage');
      //       console.log(1);
      //   } else {
      // // No user is signed in.
      // console.log(2)
      //     $urlRouterProvider.otherwise('/pre_home');
      //   }
      //   });
          $urlRouterProvider.otherwise('/pre_home')
});
