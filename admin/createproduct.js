$(document).ready(function(){
$("#createProductBtn").on("click", function(event){
 event.preventDefault();
 var productDetails = new FormData();
 productDetails.append("name", $("#name").val());
 productDetails.append("price", $("#price").val());
 productDetails.append("category", $("#category").val());
 productDetails.append("quantity", $("#quantity").val());
 productDetails.append("image", $("#image")[0].files[0]);
 productDetails.append("description", $("#description").val());

 $.ajax({
   url: "http://159.65.21.42:9000/create/product",
   type: "POST",
   data: productDetails,
   processData: false,
   contentType: false,
   success: function(response){
    console.log(response);
    alert("Your product has been added");
   },            
   error: function(error){
    console.log(eoor);
    alert("An error occored");
   }
 });
$("form")[0].reset();
});

$("#removeProduct").on("click", function (event) {
  event.preventDefault();
  var iDoFproductToBeRemove = "657b32a23b88d36925ae0b99";
  $.ajax({
    url:  "http://159.65.21.42:9000/product" + iDoFproductToBeRemove,
    type: "DELETE",
    success: function (response) {
      console.log(response);
      alert("Product deleted successfully");
    },
    error: function (error) {
      console.log(error);
      alert("Error deleting product");
    },
  });
});
});