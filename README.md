## Automatic CV Download Script

### Introduction

This repository presents a JavaScript script aimed at streamlining the download process of a CV (Curriculum Vitae) document from a webpage. The script leverages a technique that initiates the download request within the context of the website itself. By making the request appear as if it originates from the website, the script effectively convinces the API that the action is permitted. This grants users the ability to capture screenshots of their CVs without any associated charges.

### How It Works

The script follows these steps to achieve its functionality:

1. Utilizing the `document.createElement()` method, the script dynamically generates a new `button` element seamlessly integrated into the Document Object Model (DOM) of the webpage.
2. The button's `innerText` property is set to 'CV'.
3. An event listener is attached to the button using the `addEventListener()` method. This listener focuses on detecting a 'click' event and promptly triggers a designated function.
4. Within the click event function, the script capitalizes on the unique technique: It simulates the request for CV download directly from the website's environment. By doing so, the script causes the API to interpret the request as internal and permissible.
5. This convincing behavior prompts the API to treat the download request as authorized, granting users the right to access their CVs without any associated payment obligations.

### Usage

To implement this script, follow these simple steps:

1. Identify the webpage containing the target CV.
2. Open the Developer Console in your browser. You can typically access this by right-clicking on the webpage and selecting 'Inspect' or 'Inspect Element'.
3. Navigate to the 'Console' tab within the Developer Console.
4. Copy and paste the provided script into the console.
5. Press 'Enter' to execute the script. Subsequently, a 'CV' button will be seamlessly integrated into the webpage's interface.
6. A simple click on the 'CV' button is all it takes to activate the script's ingenious technique, triggering the CV to open in a new window for convenient screenshotting.

Please bear in mind that the efficacy of the script may vary based on the webpage's structure and security measures. Furthermore, ensure that you have the necessary permissions to access and download the CV from the specific webpage.

Feel free to contribute to this project by reporting any issues or suggesting improvements.
