function StaffController(){
  this.name = "george"
  this.email = "test@mail.com"
  this.phone = "0123456789"
};
angular
.module('app')
.controller('StaffController', StaffController)