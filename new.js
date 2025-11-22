  document.getElementById('getLocBtn').addEventListener('click', showLocation);

        function showLocation() {
            const map = document.getElementById('map');
            const msg = document.getElementById('mapMessage');

            if (!navigator.geolocation) {
                msg.innerText = 'Geolocation is not supported by your browser.';
                return;
            }

            msg.innerText = 'Requesting location — please allow the browser to share your location...';
            console.log('Requesting geolocation...');

            const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

            navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

            function onSuccess(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                console.log('Got position', lat, lng);

                // Replace map content with responsive iframe
                map.innerHTML = `
          <iframe
            width="100%"
            height="450"
            style="border:0;"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed">
          </iframe>
          <div class="p-2 text-center small-note">Latitude: ${lat.toFixed(6)}, Longitude: ${lng.toFixed(6)}</div>
        `;
            }

            function onError(err) {
                console.warn('Geolocation error', err);
                let text;
                switch (err.code) {
                    case err.PERMISSION_DENIED:
                        text = 'Permission denied. You must allow location access to show the map.';
                        break;
                    case err.POSITION_UNAVAILABLE:
                        text = 'Location information is unavailable.';
                        break;
                    case err.TIMEOUT:
                        text = 'The request to get your location timed out. Try again.';
                        break;
                    default:
                        text = 'An unknown error occurred.';
                        break;
                }

                // Provide a helpful fallback: let user open Google Maps search (no coords)
                map.innerHTML = `
          <div class="p-3 text-center">
            <p>${text}</p>
            <p class="small-note">If you prefer, open Google Maps and search for your address or allow location in browser settings.</p>
            <button id="tryAgain" class="btn btn-outline-primary btn-sm mt-2">Try again</button>
          </div>
        `;

                document.getElementById('tryAgain').addEventListener('click', showLocation);
            }
        }