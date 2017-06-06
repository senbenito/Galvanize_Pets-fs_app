$('#submitBtn').on("click", function (){
  preventDefault();
  obj.key = $('#name').val();
});

var options = {
  contentType: 'app.json',
  type: POST,
  url: '/pets',
  data: petsObj
};

$.ajax(options);
