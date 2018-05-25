# sample-wca-form-components

This repository contains a set of sample site components to showcase how to integrate Watson Campaign Automation (WCA) forms into the Watson Content Hub Sites feature. The samples include two techniques: iframe inclusion, and embedding a WCA form into a native WCH component.

## Table of contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Sample Screenshots](#sample-screenshots)
- [Prerequisites](#prerequisites)
- [Install and deploy the sample](#install-and-deploy-the-sample)
  - [Configure your wchtools](#configure-your-wchtools)
  - [Install the package content-artifacts and  site-application-files](#clone-and-install-the-sample-content-artifacts-and-site-application-files)
  - [Build and Deploy your components](#build-and-deploy-your-components)
- [Add an iframe form to a page](#add-an-iframe-form-to-a-page)
- [Add an embedded form to a page](#add-an-embedded-form-to-a-page)
- [Samples go live](#samples-go-live)
- [Advanced customization of the WCA form component](#advanced-customization-of-the-wca-form-component)
- [License](#license)

## Introduction
This sample repository provides two example plugin components for your WCH site. It includes an iframe component, and an embedded WCA form component. With the iframe component, you can display any WCA form in an iframe window. With the embedded form component, you can build your WCA forms using WCH content items.  To enable these 2 components, just install the packages from this repository by following the steps below.

## Sample screenshots
See the end result for each of the two samples:
### WCA iframe form component
![iframe example](/doc/images/iframeExample.png)
### WCA embed form component
![embed example](/doc/images/embedExample.png)

## Prerequisites
* A WCH tenant in Trial or Standard Tier
* Latest wch-site-application source (see: https://github.com/ibm-wch/wch-site-application)
* wchtools-cli v2.0.3 or above
* Node.js v6.11.1 or above

## Install and deploy the sample

### Configure your wchtools
1. Get your WCH tenant API URL by copying it from your WCH homepage -> **your username** on the header -> Hub information -> API URL -> Copy to clipboard
2. Run `wchtools init` in your command line. Enter your username and API URL to configure wchtools.

### Clone and install the sample content-artifacts and site-application-files
1. Change the command line working directory to the _wch-site-application_ root folder. If you haven't already done so, perform all of the required installation steps for the site application repository.
2. Using the git URL to the _sample-wca-form-components_ repository, run this command to copy the needed sample and update the layout settings for the new components:
```
npm run install-layouts-from-git https://github.com/ibm-wch/sample-wca-form-components.git
```

### Build and deploy your components
1. From within the _wch-site-application_ directory run:
	- `npm run build` to compile the project. Make sure there is no error during the build process.
	- `npm run deploy` to your WCH tenant.

## Add an iframe form to a page
1. Copy the URL to your form from WCA:

![copy form URL](/doc/images/copyFormURL.png)

2. [Create a new page](https://developer.ibm.com/customer-engagement/tutorials/creating-pages-website/) or edit an existing one.
3. Create and configure a new **WCA iframe form** on the page. **Note**: Use `https` so the cross-origin iframe can be served from within your WCH site:

![configure iframe](/doc/images/configureIframe.png)

4. Publish your changes to view the form on your live site:

![iframe example](/doc/images/iframeExample.png)

## Add an embedded form to a page

1. Go directly to your WCA form in a browser:

![form](/doc/images/form.png)

2. Inspect the form using your developer tools to get the POST action url (ignore URL parameters), the form input fields, and corresponding options:

![form inputs](/doc/images/formInputs.png)

The sample form information:
* **Title**: Sign up here!
* **Action URL**: _http://www.sample.net/org/sports/sign-up_
* **Submit button label**: Sign up
* **Terms**: Sign up to get the best deals with our weekly email newsletter.
* **Error message**: Sorry! We could not sign you up, please try again.
* **Form elements** and **option**s:

| **name**  | **type**  | **label**   | **value** | **placeholder** | **Is required**? | **Is email**? | **option**           |
| --------- | --------- | ----------- | --------- | --------------- | ---------------- | ------------- | -------------------- |
| COLUMN22  | text      | First Name  |           |                 |                  |               |                      |
| EMAIL     | email     | Email       |           | name@domain.com | yes              | yes           |                      |
| COLUMN92  | radio     | New Player  | Yes       |                 |                  |               | Yes                  |
| "         | "         | "           |           |                 |                  |               | No                   |
| COLUMN94  | select    | Age Range   |           |                 |                  |               | 18-24                |
| "         | "         | "           |           |                 |                  |               | 35-50                |
| "         | "         | "           |           |                 |                  |               | 51-65                |
| "         | "         | "           |           |                 |                  |               | 66-80                |
| "         | "         | "           |           |                 |                  |               | 81+                  |
| COLUMN111 | checkbox  | Interests   |           |                 |                  |               | Team Sports          |
| "         | "         | "           |           |                 |                  |               | Roller Sports        |
| "         | "         | "           |           |                 |                  |               | Fishing & Hunting    |
| "         | "         | "           |           |                 |                  |               | Games & Toys         |
| "         | "         | "           |           |                 |                  |               | Golf & Racket Sports |

3. [Create a new page](https://developer.ibm.com/customer-engagement/tutorials/creating-pages-website/) or edit an existing one.

4. Create a new **WCA embed form** content item on the page. **Note**: Use `http` for the "Action URL", so WCA will accept the request:

![configure embed](/doc/images/configureEmbed.png)

5. Compose a new **WCA form element** to the content item, for each form element:

- text input:

![text example](/doc/images/textExample.png)

- email input:

![email example](/doc/images/emailExample.png)

- radio group input:

![radio example](/doc/images/radioExample.png)

- select dropdown input:

![select example](/doc/images/selectExample.png)

- checkbox inputs (**Note**: The required field does not work for groups of checkboxes):

![checkbox example](/doc/images/checkboxExample.png)

6. Publish your changes to view the form on your live site:

![embed example](/doc/images/embedExample.png)

## Samples go live
1. Go to Your WCH homepage -> YOUR USERNAME on the top bar -> Hub information.
2. You could view your newest site by clicking "Live site".

### Advanced customization of the WCA form component
If you would like to add additional features or updated styling to your WCA form:
1. Open _src/app/layouts/wca-embed-form_ in the _wch-site-application_ directory.
2. Edit the html, scss and ts files.
3. Use the [development server](https://github.com/ibm-wch/wch-site-application#changing-the-tenant), if desired.
4. From within the wch-site-application directory run `npm run build-deploy`

## License
See the included license file [License](license.txt).

[back to top](#sample-wca-form-components)
