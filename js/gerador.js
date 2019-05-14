$(document).ready(function () {
  $('.gerar-metatag').submit( function(e){
    e.preventDefault();
    var input_title        = $('#input_title').val();
    var input_site_name    = $('#input_site_name').val();
    var input_url          = $('#input_url').val();
    var input_description  = $('#input_description').val();
    var input_image        = $('#input_image').val();
    var input_image_type   = $('#input_image_type').val();
    var input_image_width  = $('#input_image_width').val();
    var input_image_height = $('#input_image_height').val();
    var input_type_site    = $('#input_type_site').val();
    $("#codigo").html("<textarea><meta property='og:title' content='"+input_title+"'><meta property='og:site_name' content='"+input_site_name+"'><meta property='og:url' content='"+input_url+"'><meta property='og:description' content='"+input_description+"'><meta property='og:image' content='image/"+input_image +"'><meta property='og:image:type' content='"+input_image_type+"'><meta property='og:image:width' content='"+input_image_width+"'><meta property='og:image:height' content='"+input_image_height+"'><meta property='og:type' content='"+input_type_site+"'></textarea>");
  });
});
