 //when the search button is clicked.
 $(document).ready(function(){

  alert("connected");
    $("#search").on("click", function() {

       //ajax call            
       $.ajax({
          method: "GET",
            url: "https://pixabay.com/api/?key=15451226-748d708b832ac6ef8a248a904",
            dataType: "json",
            data: {'q': $("#keyword").val(), 
            'orientation': $("#orientation").val()
             },
              success: function(result){

                  if($("#orientation").val() == "h"){
                    $(".img1").html(` <br><img id= "horizon" src='${result.hits[0].webformatURL}'>
                         Like: ${result.hits[0].likes}`);
                    $(".img2").html(` <br><img id= "horizon" src='${result.hits[1].webformatURL}'>
                           Like: ${result.hits[1].likes}`);
                    $(".img3").html(` <br><img id= "horizon" src='${result.hits[2].webformatURL}'>
                              Like: ${result.hits[2].likes}`);
                    $(".img4").html(` <br><img id= "horizon" src='${result.hits[3].webformatURL}'>
                              Like: ${result.hits[3].likes}`);
                  }
                  else{
                     $(".img1").html(` <br><img id= "vertical" src='${result.hits[0].webformatURL}'>
                         Like: ${result.hits[0].likes}`);
                    $(".img2").html(` <br><img id= "vertical" src='${result.hits[1].webformatURL}'>
                           Like: ${result.hits[1].likes}`);
                    $(".img3").html(` <br><img id= "vertical" src='${result.hits[2].webformatURL}'>
                              Like: ${result.hits[2].likes}`);
                    $(".img4").html(` <br><img id= "vertical" src='${result.hits[3].webformatURL}'>
                              Like: ${result.hits[3].likes}`);

                  }
              
            },
            error: function(err){
            console.log(err);
            }

        });
    });

 });
   
 $(".container").html("").hide();
      $(".loading").show();