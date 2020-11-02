# Information about "Ugly responsive layout"

About HTML File:
  - Import Vue.JS in `<head>`
  - Original idea is showing the image with different heights. But based on my exp., images in column usually has same height and same width. Because original size of images are different, so we need to use `div` with `backgroundImage` to sovle the problem, image will be cropped, not stretched.
  - Uncomment lines 25 - 27, comment lines 23, if you want to check out using `<img>`
  - `v-for` to loop all `cats` in `script.js` then we don't need to re-write the code many times.
  - `<div :style="{ height: headingHeight }" class="name-hover" ref="nameHover">`, the height of this class is dynamic, since the task request "Cat image's top should be at the same level in each box as well as the title and main text, even if there is a **long title** or a bit higher image". `ref` is for pointing in `script.js` with Vue.

About JS File:
  - functions mentioned in `mounted()` will run when page loaded.
  - `setHeight()`: get all heights of `<div :style="{ height: headingHeight }" class="name-hover" ref="nameHover">`. Loop through all heights to find the biggest value then set it for all other `div`.
  - `imgHeight()`: similar to `setHeight()` function. This is used in case you want to try `<img>` in `html`
  - `changeWidthListen()`: I found a bugs that if web browser start the page in the width that: `div.name-hover` of "I am the one with long name" showing in only 1 line (For example in: 654px), then they change the screen size to 3 columns, that `div` mentioned above will be showed badly. Therefore, I use this function to detect screen width change. Everytime the user modify the screen width, `changeWidthHandle()` will run and - page will show the loading screen, set suitable height for `div.name-hover`.