This is the Friendly JavaScript Library v1.0
============================================

This JS library has been created as an Open Source project. It may be changed, shared, and sold freely.

To read more about licence, please open LICENCE.md
#
You may visit my (author's) [personal web site] (http://felp.website/).
#
This library has been created to help different people make their JavaScript coding easier by adding some easy-to-use functions. If you want to improve the library you can commit changes on [GitHub] (https://github.com/sharpvik/friendly-js/).

All the functions were organized as keys of a single Friendly object.

To add a new function:

1. Add a new key, give it a name and assign it to a function. 
2. Do not give a name to the function iside the key. 
3. Put your key in an alphabet order.

If your function needs any variables to work with, you can pass them inside the brackets after function declaration *function(variables)*.
When using variables, please add an error check.

Take into account an example shown below:
```
inText: function(selector) {
    if (typeof selector == "string") { 
        return Friendly.getEl(selector).innerText; // returns TEXT from inside the object with the SELECTOR you input
    } else { console.log('SELECTOR IS UNDEFINED OR DEFINED INCORRECTLY'); }
},
```
Keys myst be separated with the comma.

When write a console.log message for an error case, please do it using the UPPERCASE.
#
If you want to contact me personally, use the form on the bottom of my [personal website] (http://felp.website/).

Your message will be sent straight to my e-mail account.
#
I hope you will enjoy the Friendly experience! 
#
Date 11-23-2016.
#
# Author Victor Rozenko.
# Copyright MillerDesign Company.