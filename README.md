# sample-wca-form-components

This repository contains a set of sample site components to showcase how to integrate Watson Campaign Automation (WCA) forms into the Watson Content Hub Sites feature. The samples include two techniques: iFrame inclusion, and copying a WCA form into a new WCH component.

## Table of contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Sample Screenshots](#sample-screenshots)
- [Prerequisites](#prerequisites)
- [Install and deploy the sample](#install-and-deploy-the-sample)
  - [Configure your wchtools](#configure-your-wchtools)
  - [Install the package content-artifacts and  site-application-files](#clone-and-install-the-sample-content-artifacts-and-site-application-files)
  - [Build and Deploy your components](#build-and-deploy-your-components)
- [Add an iFrame form to a page](#add-an-iframe-form-to-a-page)
- [Add a native form to a page](#add-a-native-form-to-a-page)
  - [1. Parse the WCA form](#1-parse-the-wca-form)
  - [2. Update the sample form with your WCA information](#2-update-the-sample-form-with-your-wca-information)
  - [3. Deploy your WCA form component](#3-deploy-your-wca-form-component)
  - [4. Add your WCA form component to a page](#4-add-your-wca-form-component-to-a-page)
- [Samples go live](#samples-go-live)
- [License](#license)

## Introduction
This sample repository provides two example plugin components for your WCH site. It includes an iFrame component, and a native WCA form component. With the iFrame component, you can display any WCA website in a customized iframe window. With the native form component, you can create your WCA forms in a new WCH component.  To enable these 3 components, you have to install the packages `content-artifacts` and package `site-application-files` by following the steps below.

## Sample screenshots
You can see what example plugin components look like here:
### iFrame component
![iFrame example](/doc/images/iframeExample.png)
### Native form component
![native example](/doc/images/nativeExample.png)

## Prerequisites
* A WCH tenant in Trial or Standard Tier
* Latest wch-site-application source (see: https://github.com/ibm-wch/wch-site-application)
* wchtools-cli v2.0.3 or above
* Node.js v6.11.1 or above

## Install and deploy the sample

### Configure your wchtools
1. Get your WCH tenant API URL. Go to your WCH homepage -> YOUR USERNAME tab on top bar -> Hub information -> API URL. Copy the URL.
2. Run `wchtools init` in your command line. Enter your username and API URL to configure the wchtools

### Clone and install the sample content-artifacts and site-application-files
1. Change the command line directory to site application's root directory (i.e. wch-site-application). If you haven't already done so, perform all of the required installation steps for the site application repository.
2. Using the Git URL to the sample-wca-form-components repository, run this command to copy the needed sample site-application-files and update the layout settings for the new components.
```
npm run install-layouts-from-git https://github.com/ibm-wch/sample-wca-form-components.git
```

### Build and deploy your components
1. From within the wch-site-application directory run:
2. `npm run build` to compile the project. Make sure there is no error during the build process.
3. `npm run deploy` to your WCH tenant. After that, you can see your changes in your WCH live site.

## Add an iFrame form to a page
1. Copy the URL to your form from WCA:

![copy form URL](/doc/images/copyFormURL.png)

2. [Create a new page](https://developer.ibm.com/customer-engagement/tutorials/creating-pages-website/) or edit an existing one
3. Create and configure a new **native WCA form** on the page

![configure iframe](/doc/images/configureIframe.png)

4. Publish your changes to view the form on your live site

![iFrame example](/doc/images/iframeExample.png)

## Add a native form to a page

Embed a WCA form directly into a WCH page by adding the form directly to a component. Once you have the POST action URL and parameters from your WCA form, just replace the sample form in _src/app/layouts/native-wca-form/nativeWcaFormLayout.html_, using the following steps:

### 1. Parse the WCA form
1. Go directly to your WCA form in a browser:

![form](/doc/images/form.png)

2. Inspect the form using your developer tools, to get the POST action url (ignore URL parameters):

![POST URL](/doc/images/postURL.png)

3. Inspect the form input fields, and gather the type, name and value for each one:

![form inputs](/doc/images/formInputs.png)

The sample form information:
* action URL: _/org/sports/sign-up_
* form input elements:

| Type     | Name      | Value                |
| -------- |:---------:|:--------------------:|
| text     | COLUMN22  | N/A                  |
| text     | COLUMN28  | N/A                  |
| text     | EMAIL     | N/A                  |
| radio    | COLUMN92  | Yes                  |
| radio    | COLUMN92  | No                   |
| checkbox | COLUMN111 | Team Sports          |
| checkbox | COLUMN111 | Roller Sports        |
| checkbox | COLUMN111 | Fishing & Hunting    |
| checkbox | COLUMN111 | Games & Toys         |
| checkbox | COLUMN111 | Golf & Racket Sports |

### 2. Update the sample form with your WCA information
1. TODO

### 3. Deploy your WCA form component
1. From within the wch-site-application directory run `npm run build-deploy`

### 4. Add your WCA form component to a page
1. [Create a new page](https://developer.ibm.com/customer-engagement/tutorials/creating-pages-website/) or edit an existing one

2. Create a new **native WCA form** on the page

![configure native](/doc/images/configureNative.png)

3. Publish your changes to view the form on your live site

![native example](/doc/images/nativeExample.png)

## Samples go live
1. Go to Your WCH homepage -> YOUR USERNAME on the top bar -> Hub information.
2. You could view your newest site by clicking "Live site".

## License
See the included license file [License](license.txt) .

[back to top](#sample-wca-form-components)
