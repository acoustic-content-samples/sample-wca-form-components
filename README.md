# sample-wca-form-components

This repository contains a set of sample site components to showcase how to integrate Watson Campaign Automation (WCA) forms into the Watson Content Hub Sites feature. The samples include two techniques: iframe inclusion, and embedding a WCA form into a native WCH component.

## Table of contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Sample screenshots](#sample-screenshots)
- [Prerequisites](#prerequisites)
- [Install and deploy the sample](#install-and-deploy-the-sample)
  - [Configure your wchtools](#configure-your-wchtools)
  - [Clone and install the sample content-artifacts and site-application-files](#clone-and-install-the-sample-content-artifacts-and-site-application-files)
  - [Build and deploy your components](#build-and-deploy-your-components)
- [Add an iframe form to a page](#add-an-iframe-form-to-a-page)
- [Add an embedded form to a page](#add-an-embedded-form-to-a-page)
- [Samples go live](#samples-go-live)
- [Advanced customization of the WCA form component](#advanced-customization-of-the-wca-form-component)
- [License](#license)

## Introduction
This sample repository provides two example plugin components for your WCH site. It includes iframe and embedded WCA form components. With the iframe component, you can display any WCA form in an iframe window. With the embedded form component, you can build your WCA forms using WCH content items.  To enable these 2 components, just install the packages from this repository by following the steps below.

## Sample screenshots
See the end result for each of the two samples:
### WCA iframe form component
![iframe example](/doc/images/iframeExample.png)
### WCA embed form component
![embed example](/doc/images/embedExample.png)

## Prerequisites
* A WCH tenant in Trial or Standard Tier
* **Latest** [wch-site-application source](https://github.com/ibm-wch/wch-site-application)
* wchtools-cli v2.0.3 or above
* Node.js v6.11.1 or above

## Install and deploy the sample

### Configure your wchtools
1. Open the "Hub information" for your tenant and copy the API URL.
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
**Note**: Use `ibm-wch-sdk-ng` instead of `@ibm-wch-sdk/ng` in the WCA form component (_src/app/components/wca-*/*.ts_), element (_src/app/elements/wca-*/wca*Type.ts_) and layout (_src/app/layouts/wca-*/wca*Layout.ts_) imports, if you are using Angular 5.

## Add an iframe form to a page
1. Copy the URL to your form from WCA:

![copy form URL](/doc/images/copyFormURL.png)

2. [Create a new page](https://developer.ibm.com/customer-engagement/tutorials/creating-pages-website/) or edit an existing one.
3. Create and configure a new **WCA iframe form** on the page.
**Important**: Use `https` so the cross-origin iframe can be served from within your WCH site:

![configure iframe](/doc/images/configureIframe.png)

4. Publish your changes to view the form on your live site:

![iframe example](/doc/images/iframeExample.png)

## Add an embedded form to a page

1. [Create a new page](https://developer.ibm.com/customer-engagement/tutorials/creating-pages-website/) or edit an existing one.

2. Create a new **WCA embed form** content item on the page.
**Important**: Use a fully qualified `http` link for the "Action URL", so WCA will accept the request:

![configure embed](/doc/images/configureEmbed.png)

3. **Optional**: If you want the form to display the results from WCA in a new browser tab upon form submission, turn on the "Open results tab" toggle:

![Open results in a new tab](/doc/images/openResultsPage.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Leaving the toggle off displays the results in the current browser window. Due to cross-site security limitations in WCA, displaying this results page (either in the current or a new tab) cannot be prevented altogether. In order to make this flow more user-friendly, a best practice would be to include a link back to WCH from the WCA results page:

![Link to go back to WCH](/doc/images/goBack.png)

4. To create your WCA form elements, you will need to inspect your WCA form in a browser. This is the same URL used for the form's Action URL:

![form](/doc/images/form.png)

5. Inspect the form using your developer tools to get the form input fields and options:

![form inputs](/doc/images/formInputs.png)

6. For each form element, compose a new **WCA form element** in your **WCA embed form** content item:

	- Text input:
```
<input name="COLUMN22" type="text" label="First Name">
```

![text example](/doc/images/textExample.png)

	- A required email input with a placeholder:
```
<input name="EMAIL" type="email" label="Email" placeholder="name@domain.com" required>
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Note**: The placeholder field can be used for any text-based input.

![email example](/doc/images/emailExample.png)

	- Add an option in the **WCA form element** for each radio button `value` in the group:
```
<table>
  <tbody>
    <tr>
      <td>
        <input name="COLUMN92" type="radio" label="New Player" value="Yes" checked="">
      </td>
      <td>Yes</td>
      <td>
        <input name="COLUMN92" type="radio" label="New Player" value="No">
      </td>
      <td>No</td>
    </tr>
  </tbody>
</table>
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Note**: To make one of your radio buttons selected by default, set its `value` in the **WCA form element**. For example, here the radio button with the "Yes" `value` is `checked`, so "Yes" should be the `value` for the radio button group:

![radio example](/doc/images/radioExample.png)

	- Add an option for each `value` in the `select` drop-down:
```
<select name="COLUMN94" label="Age Range">
  <option>Select one</option>
  <option value="18-34">18-34</option>
  <option value="35-50">35-50</option>
  <option value="51-65">51-65</option>
  <option value="66-80">66-80</option>
  <option value="81+">81+</option>
</select>
```

![select example](/doc/images/selectExample.png)

	- Add an option for each `value` in the group of checkboxes:
```
<table>
  <tbody>
    <tr>
      <td>
        <input name="COLUMN111" type="checkbox" label="Interests" value="Team Sports">
        <label>Team Sports</label>
      </td>
    </tr>
    <tr>
      <td>
        <input name="COLUMN111" type="checkbox" label="Interests" value="Roller Sports">
        <label>Roller Sports</label>
      </td>
    </tr>
    <tr>
      <td>
        <input name="COLUMN111" type="checkbox" label="Interests" value="Fishing & Hunting">
        <label>Fishing & Hunting</label>
      </td>
    </tr>
    <tr>
      <td>
        <input name="COLUMN111" type="checkbox" label="Interests" value="Games & Toys">
        <label>Games & Toys</label>
      </td>
    </tr>
    <tr>
      <td>
        <input name="COLUMN111" type="checkbox" label="Interests" value="Golf & Racket Sports">
        <label>Golf & Racket Sports</label>
      </td>
    </tr>
  </tbody>
</table>
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Note**: The required field can be used for all input types except checkbox groups.

![checkbox example](/doc/images/checkboxExample.png)

7. Publish your changes to view the form on your live site:

![embed example](/doc/images/embedExample.png)

## Samples go live
1. Ensure your new pages and content items are published.
2. Open the "Hub information" for your tenant.
3. View your published site by clicking "Live site".

### Advanced customization of the WCA form component
If you would like to add additional features or updated styling to your WCA form:
1. Open _src/app/layouts/wca-embed-form_ in the _wch-site-application_ directory.
2. Edit the html, scss and ts files.
3. Use the [development server](https://github.com/ibm-wch/wch-site-application#changing-the-tenant), if desired.
4. When you're done editing, run `npm run build-deploy` from within the wch-site-application directory.

## License
See the included license file [License](license.txt).

[back to top](#sample-wca-form-components)
