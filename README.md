# This is the Friendly JavaScript Library v1.0
This JS library has been created as an Open Source project
It may be changed, shared, and sold freely
To reed more about licence, please open LICENCE.md.txt
#
You may visit my (author's) personal web site http://felp.website/
#
This library has been created to help different people make their JavaScript coding easier by addin some easy-to-use functions
If you want to improve the library you can commit changes on GitHub *place for link*
All the functions were organized as a keys of a single Friendly object
To add a new function just add a new key, give it a name and assign it to a function
Do not give a name to a function iside the key
Put your key in an alphabet order 
If your function needs any variables to work with, you can pass them inside the brackets after function declaration *function(variables)*
When using variables, please add an error check
Take into account an example shown below
#
inBetween: function(num, min, max) {
    if ((typeof num == "number") && (typeof min == "number") && (typeof max == "number")) { 
        if ((num > min) && (num < max)) { return true; } else { return false; } // checks if the number (NUM) is placed in between MIN and MAX and returns TRUE if so of FALSE if not so
    } else { console.log('ONE OF THE VARIABLES IS UNDEFINED OR DEFINED INCORRECTLY'); }
  },
 ^
 |
 |
Keys myst be separated with the comma 
When write a console.log message for an error case, please do it using the UPPERCASE 
#
If you want to contact me personally you can you the form on the bottom of my personal website http://felp.website/
Your message will be sent straight to my e-mail account
#
I hope you will enjoy the Friendly experience! 
#
# Date 11-23-2016
#
# Author Victor Rozenko
# Copyright MillerDesign Company