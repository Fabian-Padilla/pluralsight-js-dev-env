/*
  This file contains references to the vendor libraries we are using in this project.
  This is used by webpack in the production build only*. A sparate bundle for vendor
  code is usefull since it is unlikely to change as often as the application's code.
  So all the libraries we reference here will be written to vendor.js so they can
  be cached un until one of them change. So basicaly, this avoids customers having
  to download a huge JS file anytime a line of code changes. They only have to download
  vendor.js when a vendor library changes which should be less frequent.
  Any files that aren't referenced here will be bundled into main.js for the production buil.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch'; // this is a library that we are using in this demo  what working group for fetch polyfill,
                                  //  so we can list in this file any other libraries such as bootstrap, angular, react, jquery, and so on.


                                  //  just remember, everything here is going to be packed into vendor.js
                                  //  if we whant to make another pack we must add another entry in webpack.config.prod.js
