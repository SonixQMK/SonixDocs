# [Sonix Docs](https://sonix-docs.github.io/)
Documentation for flashing QMK on sonix keyboards 

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

## Development:
We use eleventy to reduce the usage of boilerplate code. Since eleventy is built ontop of nodejs you will need to install that on your platform. Run ``npm install`` in the cloned directory to install eleventy. Once eleventy is installed, you can run ``eleventy --serve`` and it will run a web server which will live update when you edit a file.

## Adding boards:
If you have a board already ported to SonixQMK, make a new directory with the manufacturers name if there is not one already (ex: womier, redragon). In that folder make another one with the model number (ex: k66, k552), you can just copy another boards docs and edit it from there. We require documentation for Windows, Mac and Linux. They are all pretty similar though.

## Thank you to:
- LegendEffects for rewriting the website to look much better from the source to the browser
- Sonix QMK community for porting tons of sonix boards
