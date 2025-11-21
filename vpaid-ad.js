// VPAID Ad JavaScript file: vpaid-ad.js

var VpaidAd = function() {
    var player;
    var adContainer;
    var adDuration = 10; // Duration of the ad (in seconds)
    var adUrl = 'aHR0cHM6Ly9jb21tdW5pY2F0ZWZyaWN0aW9uLmNvbS9qdG1nNHFtMHg5P2tleT0zNWI3ZmI2Mzk2ZTlhOTNhZGU0Y2NjMzVmNzQ4Mzk0ZQ=='; // Ad URL (to load content)

    this.init = function(adParameters, videoPlayer) {
        player = videoPlayer;
        adContainer = document.createElement('div');
        adContainer.style.position = 'absolute';
        adContainer.style.top = '0';
        adContainer.style.left = '0';
        adContainer.style.width = '100%';
        adContainer.style.height = '100%';
        adContainer.style.zIndex = '1000';
        adContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        adContainer.style.display = 'flex';
        adContainer.style.alignItems = 'center';
        adContainer.style.justifyContent = 'center';

        // Ad URL (pass it as parameter or load a URL)
        adUrl = atob(adParameters.adUrl);  // Decode the URL if base64 encoded
        
        // Insert ad content (it can be an HTML page, image, or video)
        var adIframe = document.createElement('iframe');
        adIframe.src = adUrl;
        adIframe.style.width = '100%';
        adIframe.style.height = '100%';
        adIframe.style.border = 'none';

        // Append iframe to ad container
        adContainer.appendChild(adIframe);
        document.body.appendChild(adContainer);

        // Track impressions (fire a pixel)
        var impressionPixel = new Image();
        impressionPixel.src = adParameters.impressionUrl;  // Send impression to the ad network
    };

    this.startAd = function() {
        // Play the ad, interact with player
        console.log("Ad started");

        // Optional: Trigger ad behavior (i.e., start countdown, show message)
        setTimeout(this.closeAd, adDuration * 1000);  // Close after duration
    };

    this.closeAd = function() {
        console.log("Ad ended");

        // Remove the ad container and resume video
        document.body.removeChild(adContainer);
        player.play();  // Resume the video
    };

    this.skipAd = function() {
        console.log("Ad skipped");

        // Close the ad early and resume video
        this.closeAd();
    };
};

// Register the VPAID JS ad
var vpaidAd = new VpaidAd();
