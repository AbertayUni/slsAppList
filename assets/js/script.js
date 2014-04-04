$(document).ready(function() {
	$.ajax({
		url: 'assets/xml/apps.xml',
		cache: 'false',
		dataType: 'xml',
		success: function(xml) {
			var str = '';
			$(xml).find('app').each(function() {
				str += '<div><div>';
				str += '<h4>' + $(this).find('appName').text() + '</h4>';
				str += '<img src="' + $(this).find('appImage').text() + '" alt="'+ $(this).find('appName').text() +' logo"/>';
				str += '<p class="cat">' + $(this).find('category').text() + '</p>';
				str += '<p class="appPrice">' + $(this).find('appPrice').text() + '</p>';
				str += '<p class="desc">' + $(this).find('appDesc').text() + '</p>';
				str += '<p>';
				$(this).find('appLink').each(function() {
					var ios = 0;
					var android = 0;
					if ($(this).children("ios").text()) {
						ios = 1;
					}
					if ($(this).children("android").text()) {
						android = 1;
					}
					if(ios && android) {
						str += '<a class="link-ios-half" href="' + $(this).children('ios').text() + '">iOS</a>';
						str += '<a class="link-android-half" href="' + $(this).children('android').text() + '">Android</a>';
					} else if (ios) {
						str += '<a class="link-ios" href="' + $(this).children('ios').text() + '">iOS</a>';
					} else if (android) {
						str += '<a class="link-android" href="' + $(this).children('android').text() + '">Android</a>';
					}
				});
				str += '</p>';
				str += '</div></div>';
			});
			$('#inner').html(str);
		},
		error: function(xhr, status, error) {
			console.log("fail: "+status+", "+error);
		}
	})
});


// var ios = 0;
// 	var android = 0;
	
// 	if($(this).children("ios").length > 0 {
// 		ios = 1;			
// 	}
			
// 	if($(this).children("android").length > 0) {
// 		android = 1;			
// 	}
	
// 	if(ios && android) {
// 		// code to do both
// 	}
// 	else if(ios) {
// 		// code for ios
// 	}
// 	else if(android) {
// 		// code for android
// 	}