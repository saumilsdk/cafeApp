/**
 * Created by sdkapadi on 10/3/14.
 */
var app = angular.module('samApp',[]);
app.controller('samController',
    function() {
        this.firstname = 'saumil';
        this.lastname = 'kapadia';
        this.fullname = function() { return this.firstname + this.lastname;};
        this.setName = function(fn,ln) {
            this.firstname = fn;
            this.lastname = ln;
        };
    });
