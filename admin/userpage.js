$(document).ready(function () {
  $.ajax({
    url: "http://159.65.21.42:9000/users",
    type: "GET",
    success: function (response) {
      $.each(response, function (index, users) {
          var userDetailsContainer = $("<table class='users'></table>");
          userDetailsContainer.append(`
         <tr class="row">
           <th>s/n</th>
           <th>name</th>
           <th>email</th>
           <th>phone</th>
           <th>password</th>
         <th>action</th>
          </tr>
          <tr class="details">
             <td>${users.id}</td>
             <td>${users.name}</td>
             <td>${users.email}</td>
             <td>${users.phone}</td>
             <td>${users.password}</td>
             <td> <ul class="action">
             <li><button class="editBtn">Edit</button></li>
             <li><button class="deleteBtn">Delete</button></li>
             </ul>
             </td>
          </tr>
     `);

          $(".userDetailsContainer").append(userDetailsContainer);
        
      });
    },
  });
  });
