"use strict";
/*
$(function() {
    var mapStyle =
    				[
				    {
				        "featureType": "water",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#e9e9e9"
				            },
				            {
				                "lightness": 17
				            }
				        ]
				    },
				    {
				        "featureType": "landscape",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#f5f5f5"
				            },
				            {
				                "lightness": 20
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 17
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "geometry.stroke",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 29
				            },
				            {
				                "weight": 0.2
				            }
				        ]
				    },
				    {
				        "featureType": "road.arterial",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 18
				            }
				        ]
				    },
				    {
				        "featureType": "road.local",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 16
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#f5f5f5"
				            },
				            {
				                "lightness": 21
				            }
				        ]
				    },
				    {
				        "featureType": "poi.park",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#dedede"
				            },
				            {
				                "lightness": 21
				            }
				        ]
				    },
				    {
				        "elementType": "labels.text.stroke",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 16
				            }
				        ]
				    },
				    {
				        "elementType": "labels.text.fill",
				        "stylers": [
				            {
				                "saturation": 36
				            },
				            {
				                "color": "#333333"
				            },
				            {
				                "lightness": 40
				            }
				        ]
				    },
				    {
				        "elementType": "labels.icon",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "transit",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#f2f2f2"
				            },
				            {
				                "lightness": 19
				            }
				        ]
				    },
				    {
				        "featureType": "administrative",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "color": "#fefefe"
				            },
				            {
				                "lightness": 20
				            }
				        ]
				    },
				    {
				        "featureType": "administrative",
				        "elementType": "geometry.stroke",
				        "stylers": [
				            {
				                "color": "#fefefe"
				            },
				            {
				                "lightness": 17
				            },
				            {
				                "weight": 1.2
				            }
				        ]
				    }
				]

    // Create the map
    var map = new google.maps.Map($('.map-canvas')[0], {
        zoom: 18,
        styles: mapStyle,
        scrollwheel: false,
        center: new google.maps.LatLng(-12.069106, -77.121123)
    });

    // Add a marker
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(-12.069106, -77.121123)
    });
});
*/
var map = L.map('map').setView([-12.069145, -77.121164], 16);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([-12.069145, -77.121164]).addTo(map)
        .bindPopup('GLOBALDESK <br>Av. Santa Rosa 425-429 La Perla-Callao<br><a href="https://goo.gl/maps/iddgJTgTobqvCUvf6" target="_blank">Ir a Google Maps.</a> ')
	.openPopup();
