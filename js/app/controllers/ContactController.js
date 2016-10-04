function ContactController() {
  var vm = this;

 	vm.name = 'Andrew';
	vm.email = 'test@test.com';
	vm.phone = '0987654321';

 
  this.changeName = function () {
    vm.name = 'Pete'
  }
}

angular
	.module('app')
	.controller('ContactController', ContactController);