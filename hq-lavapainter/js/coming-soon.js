(function($) {
  "use strict"; // Start of use strict

  // Vide - Video Background Settings
  $('body').vide({
    mp4: "mp4/bg.mp4",
    poster: "img/bg-mobile-fallback.jpg"
  }, {
    posterType: 'jpg'
  });

  // Twitter social media
  $('.open-twitter').on('click', function (event) {
  	// console.log(event.currentTarget.href);
  	handleOutboundLinkClicks('Open Twitter', event);
  });

  // Newsleter submit button
  $('#mc-embedded-subscribe').on('click', function (event) {
  	handleOutboundLinkClicks('Newsletter Submited', event);
  });

})(jQuery); // End of use strict


function handleOutboundLinkClicks(action, event) {
	console.log(action)
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: action,
    eventLabel: event.currentTarget.href
  });
}