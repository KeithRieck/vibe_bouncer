Hosted at: https://keithrieck.github.io/vibe_bouncer/index.html

# vibe_bouncer
This was a very quick test of [vibe coding](https://youtu.be/1A6uPztchXk) in [Google Antigravity](https://antigravity.google/).  I generated a quick, meaningless graphics app.

1. First Prompt:
    * Create a project in [ES2020](https://www.w3schools.com/js/js_2020.asp) and using the [Phaser game library](https://phaser.io/) that displays 64 small circles that bounce around the screen.  The project should not depend on any server side code and should be execute entirely in a browser.  It should easily display on tablets as well as web browsers.
2. Second Prompt:
    * It should be more object oriented.
        * There should be one Phaser Scene object
        * There should be a `Bouncer` class that extends the Phaser `Sprite` class, where Bouncer encapsulates the bouncing behavior.
        * There  should be a `Circle` class that extends `Bouncer`.  Later, we may have other `Bouncer` objects on the screen
3. Third Prompt:
    * Make this a [Progressive Web App](https://web.dev/progressive-web-apps/) so it will cache files locally and execute on a browser or phone or tablet even if it has no internet connection.

## Installing Progressive Web Apps

* On Mac Safari, navigate to the website.  Under the File menu, select **Add to Dock**.  You can then launch the app from the dock.
* On Chrome or Edge, navigate to the website.  Click the **install icon** (square with down arrow) in the address bar.
* On iPadOS or iOS, navigate to the website in Safari.  Tap the Share buttons and select **Add to Home Screen**.
