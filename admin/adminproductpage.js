$(document).ready(function () {
  $.ajax({
    url: "http://159.65.21.42:9000/products",
    type: "GET",
    success: function (response) {
      $.each(response, function (index, product) {
        if (product.category == "allbirds") {
          var productContainer = $("<div class='product'></div>");
          productContainer.append(`<div class="productBoard" id=${product.id}>
        <img src="http://159.65.21.42:9000${product.image}" alt="" />
        </div>
         <div class="text-and-button">
        <P class="name">${product.name}</p>
        <p class="price"> <span>₦</span> ${product.price} </p>
          <button class="deleteProductBtn"> Delete</button>
        <button class="editProductBtn"> Edit</button>
        </div>
      <div class="little-box-holder">
      <div class="little-boxes"></div>
      <div class="little-boxes"></div>
      <div class="little-boxes"></div>
      <div class="little-boxes"></div>
     <div class="little-boxes"></div>
     <div class="little-boxes"></div>
   </div>
  <div class="disappear-sec">
    <p class="holder-text">quick add</p>
    <div class="size-boxes-holder">
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    <div class="size-boxes"></div>
    </div>
    </div>
</div>
        </div>`);

          $(".productContainer").append(productContainer);
        }
      });
    },
  });

  let deleteProductBtn = $(".deleteProductBtn");
  $.each(deleteProductBtn, function(i, btnz){
    $(btnz).click(function (e) {
      let parentElement = $(btnz).parent();
      let id = $(parentElement).attr("id");
      $.ajax({
        method: "DELETE",
        url: "http://159.65.21.42:9000/products",
        success: function (data) {
          console.log(data);
        },
        error: function (error) {
          console.log(error);
        },
      });
    });
  })
});
