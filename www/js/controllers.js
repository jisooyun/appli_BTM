angular.module('starter.controllers', [])

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