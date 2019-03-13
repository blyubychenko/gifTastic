
				var getCartoon = "";
				$("#addCartoon").on("click", function(event) {
						event.preventDefault();
						getCartoon = $("#findCartoon").val().trim();
						var cartoon = $("<p>");
						cartoon.attr("id", "item-");
						cartoon.append(+ getCartoon);
						var cartoonGif = $("<button>");
						cartoonGif.text($("#findCartoon").val())
						cartoonGif.attr("data-cartoonImage");
						cartoon = cartoon.prepend(cartoonGif);
						$("#theCartoon").append(cartoon);
						$("#findCartoon").val("");
					
				});

					$(document.body).on("click", function() {
						var cartoonNumber = $(this).attr("data-cartoonImage");
						$("#item-" + cartoonNumber).remove();
						$("button").on("click", function() {
						var cartoon  = $(this).attr("cartoon");
						var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + getCartoon +
					 "&api_key=dc6zaTOxFJmzC&limit=10";
							$.ajax({
							url: queryURL,
							method: "GET"
						})
							.done(function(response) {
							var results = response.data;
							for (var i = 0; i < results.length; i++) {
								var gifDiv = $("<div class='item'>");
								var rating = results[i].rating;
								var p = $("<p>").text("Rating: " + rating);
								var cartoonImage = $("<img>");
								cartoonImage.attr("src", results[i].images.fixed_height.url);
								gifDiv.prepend(p);
								gifDiv.prepend(cartoonImage);
								$("#gifs-appear-here").prepend(gifDiv);
							}
						});
				});
				});
			