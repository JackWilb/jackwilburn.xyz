# My Personal Website: [JackWilburn.xyz](https://jackwilburn.xyz)

![Lint and build test](https://github.com/JackWilb/jackwilburn.xyz/workflows/Lint%20and%20build%20test/badge.svg) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/faf6278f-253d-4de2-b929-86f64904ce1f/deploy-status)](https://app.netlify.com/sites/jackwilburn-xyz/deploys)


## Table Of Contents

- [Tools I Used](#tools-i-used)
- [Setup A Development Environment](#setup-a-development-environment)
- [Building For Production](#building-for-production)


## Tools I Used

Since this project leverages many tools, I figured I'd make a list. This is both for my bookkeeping and as a resource for anyone else who would like to build something similar.

- [Yarn](https://yarnpkg.com/)
- [Vue.js](https://vuejs.org) (webpack, typescript, eslint, eslint-formatter)
- [Tailwindcss](https://tailwindcss.com/)
- [Netlify](https://www.netlify.com/)
- [Netlify forms](https://www.netlify.com/products/forms/)


## Setup A Development Environment

Setting up a development environment should be relatively straight forward for those with js experience. I use `yarn` as my preferred package manager, so you'll need to install that first. Once you have yarn installed, clone the repo, and run the following:

``` {bash}
# Install dependencies
yarn

# Start the development server
yarn serve
```


## Building For Production

To build for production we utilize another yarn command:

``` {bash}
yarn build
```

This command builds the bundle and minifies it using the vue.js cli. I run this command on Netlify when the site is built for deployment.
