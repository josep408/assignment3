//when the search button is clicked.
 $(document).ready(function(){

  alert("ready for query");
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
                    $(".img5").html(` <br><img id= "horizon" src='${result.hits[0].webformatURL}'>
                         Like: ${result.hits[4].likes}`);
                    $(".img6").html(` <br><img id= "horizon" src='${result.hits[1].webformatURL}'>
                           Like: ${result.hits[5].likes}`);
                    $(".img7").html(` <br><img id= "horizon" src='${result.hits[2].webformatURL}'>
                              Like: ${result.hits[6].likes}`);
                    $(".img8").html(` <br><img id= "horizon" src='${result.hits[3].webformatURL}'>
                              Like: ${result.hits[7].likes}`);
                  }
                  else{
                     $(".img1").html(` <br><img id= "horizon" src='${result.hits[0].webformatURL}'>
                         Like: ${result.hits[0].likes}`);
                    $(".img2").html(` <br><img id= "horizon" src='${result.hits[1].webformatURL}'>
                           Like: ${result.hits[1].likes}`);
                    $(".img3").html(` <br><img id= "horizon" src='${result.hits[2].webformatURL}'>
                              Like: ${result.hits[2].likes}`);
                    $(".img4").html(` <br><img id= "horizon" src='${result.hits[3].webformatURL}'>
                              Like: ${result.hits[3].likes}`);
                    $(".img5").html(` <br><img id= "horizon" src='${result.hits[0].webformatURL}'>
                         Like: ${result.hits[4].likes}`);
                    $(".img6").html(` <br><img id= "horizon" src='${result.hits[1].webformatURL}'>
                           Like: ${result.hits[5].likes}`);
                    $(".img7").html(` <br><img id= "horizon" src='${result.hits[2].webformatURL}'>
                              Like: ${result.hits[6].likes}`);
                    $(".img8").html(` <br><img id= "horizon" src='${result.hits[3].webformatURL}'>
                              Like: ${result.hits[7].likes}`);
                  }
              
            },
            error: function(err){
            console.log(err);
            }

        });
    });

    $(".pagination-button-num").on("click", function(event) {
    
    var clickedPageNum = event.target.innerText;
    window.currentPage = parseInt(clickedPageNum); 
    $pagNumButtons.each(function(index, pag) {
      pag.classList.remove("active-pag");
    });
    event.target.classList.toggle("active-pag");
    requestJSONData(URL, currentPageAPI);
  });

  $(".pagination-button-arrow").on("click", function(event) {
    // get the clicked arrow..
    // resetSearch();
    var clickedArrow = event.target.innerText;
    
    if (clickedArrow == "»") {
      
      if ($(".pagination-button-num:last").text() > window.currentPage) {
        // if the current page is greater than the last patination button value...
        
        // increment currentPage
        window.currentPage = parseInt(window.currentPage) + 1;
        // alert('window.currentPage: ' + window.currentPage);

        window.currentPageAPI = "&page=" + window.currentPage.toString();
        // alert('window.currentPageAPI: ' + window.currentPageAPI);

        var nextPag = $($(".active-pag")[0]).next(".pagination-button-num")[0];
        console.log(nextPag);
        $pagNumButtons.each(function(index, pag) {
          if (pag.classList.contains("active-pag")) {
            pag.classList.toggle("active-pag");
          }
        });
        nextPag.classList.add("active-pag");
        requestJSONData(URL, currentPageAPI);
        return null;
      } 
      else if ($(".pagination-button-num:last").text() == currentPage) {
        var stepSize = 4;
        // alert(currentPage);
        
        $pagNumButtons.each(function(index, pag) {
          // relabel each link to current value + step size
          pag.innerText = parseInt(pag.innerText) + stepSize;
        });
        $(".pagination-button-num:last").toggleClass("active-pag");
        $(".pagination-button-num:first").toggleClass("active-pag");
      }
      // alert("window.currentPage: " + window.currentPage);
      window.currentPage = parseInt($(".pagination-button-num:first").text());
      window.currentPageAPI = "&page=" + currentPage.toString();
      requestJSONData(URL, window.currentPageAPI);
    } 
    else if (clickedArrow == "«") {
      // if the currentPage is already the lowest page in our range...
      if (currentPage == 1) {
        alert("cant go below 1..");
        return null;
      } 
      else if (window.currentPage == $(".pagination-button-num:first").text()) {
        // alert('lower bound detected');
        var stepSize = 4;
        window.currentPage = parseInt($(".pagination-button-num:first").text()) - 1;
        window.currentPageAPI = ("&page=" + window.currentPage).toString();
        // alert(window.currentPage);
        // alert(window.currentPageAPI);

        $pagNumButtons.each(function(index, pag) {
          // relabel each link to current value + step size
          pag.innerText = parseInt(pag.innerText) - stepSize;
        });

        requestJSONData(URL, currentPageAPI);
        $(".pagination-button-num:first").removeClass("active-pag");
        $(".pagination-button-num:last").addClass("active-pag");
      } 
      else {
        window.currentPage--;
        window.currentPageAPI = ("&page=" + window.currentPage).toString();
        console.log("URL from « logic:" + window.URL);
        var prevPag = $($(".active-pag")[0]).prev(".pagination-button-num")[0];

        $pagNumButtons.each(function(index, pag) {
          if (pag.classList.contains("active-pag")) {
            pag.classList.toggle("active-pag");
          }
        });
        
        prevPag.classList.toggle("active-pag");
        requestJSONData(URL, currentPageAPI);
      }
    }
  });

 });

   

