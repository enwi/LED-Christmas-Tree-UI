# LED-Christmas-Tree-WebUI

This repo contains the source code for the web user interface for https://github.com/enwi/LED-Christmas-Tree 
The build is automatic (via github actions) and the header to include in the webserver code is in the `cpp` folder.
The header contains the gziped build of the vuejs project 

## Screenshot
![chrome 2022-01-02 214555](https://user-images.githubusercontent.com/25170066/147889063-e68401ad-701c-4c55-8483-d66af68f47b8.png)
![chrome_2021-12-13_18-39-04](https://user-images.githubusercontent.com/17061996/145861297-a6b258ae-130a-4cdd-856d-9475546481e0.png)

## Contribute
The app has a mock api of the esp when it's started in development mode (see `src/esp-api-mock.js`).
This allows for testing the ui / ux without having the tree
