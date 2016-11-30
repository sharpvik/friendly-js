/*!
 * Friendly JavaScript Library v1.0
 * You may visit my (author's) personal web site http://felp.website/ 
 *
 * Copyright MillerDesign Company
 * Released under the MIT license
 * https://opensource.org/licenses/mit-license.php
 * To read more about licence, please open LICENCE.md
 *
 * Date: 11-23-2016
 *
 * Author Victor Rozenko
 */

var Friendly = (function() {
    return {
        biAnswer: function() {
            var x = Friendly.biRandom();
            if (x == 0) { return "no"; } else { return "yes"; } // randomly returns YES or NO
        },
        biBool: function() {
            var x = Friendly.biRandom();
            if (x == 0) { return false; } else { return true; } // randomly returns TRUE or FALSE
        },
        biRandom: function() {
            return Math.floor(Math.random() * 2); // randomly returns 1 or 0
        },
        bottomHTML: function(selector, add, apparatus) {
            if ((typeof selector == "string") && (typeof add == "string")) {
                if (apparatus == true) {
                    var add = Friendly.replacer(add);
                }
                var target = Friendly.getEl(selector);
                target.innerHTML = target.innerHTML + add; // puts the value of your input in the bottom of the element with the given SELECTOR * if you define last variable as true it will allow you to use special embedded text functions *
            } else if (typeof selector !== "string") {
                console.log("SELECTOR IS UNDEFINED OR DEFINED INCORRECTLY");
            } else if (typeof add !== "string") {
                console.log("ADDITIONAL VALUE IS UNDEFINED OR DEFINED INCORRECTLY");
            } 
        },
        cleanEl: function(selector) {
            if (typeof selector == "string") {
                Friendly.html(selector, ""); // makes innerHTML of the selected element (SELECTOR) empty
            } else if (typeof selector == "undefined") {
                Friendly.html("body","");
            } else {
                console.log("SELECTOR HAS BEEN DEFINED INCORRECTRLY");
            }
        },
        clone: function(selector, num, what) {
            if (typeof selector == "string") {
                if (typeof what == "string") {
                    if (typeof num == "number") {
                        for (i = 0; i < num; i++) {
                            Friendly.bottomHTML(selector, what); // puts the value of your input inside the element with the given SELECTOR certain amount of times
                        }
                    } else if (typeof num == "string") {
                        var Num = parseInt(num);
                        for (i = 0; i < Num; i++) {
                            Friendly.bottomHTML(selector, what);
                        }
                    } else if (typeof num == "undefined") {
                        console.log("NUMBER OF MULTIPLICATIONS IS UNDEFINED");
                    } else {
                        console.log("NUMBER OF MULTIPLICATIONS DEFINED INCORRECTLY");
                    }
                } else if (typeof what == "undefined") {
                    console.log("VALUE OF MULTIPLIER IS UNDEFINED");
                } else {
                    console.log("VALUE OF MULTIPLIER DEFINED INCORRECTLY");
                }
            } else if (typeof selector == "undefined") {
                console.log("SELECTOR IS UNDEFINED");
            } else {
                console.log("SELECTOR DEFINED INCORRECTLY");
            }
        },
        css: function(selector, style) {
            if ((typeof selector == "string") && (typeof style == "string")) {
                var headSearch = Friendly.html("head").search("<style>");
                if (headSearch == (-1)) {
                    var add = selector + " " + "{" + style + "}"; // applies STYLEs to the element with the given SELECTOR
                    Friendly.bottomHTML("head", "<style></style>");
                    Friendly.bottomHTML("style", add);
                } else {
                    var add = selector + " " + "{" + style + "}"; 
                    Friendly.bottomHTML("style", add);
                }
            } else {
                console.log("ONE OF THE VALUES IS UNDEFINED OR DEFINED INCORRECTLY");
            }
        },
        delEl: function(parent, child) {
            if ((typeof child == "string") && (typeof parent == "string")) {
                var Child = Friendly.getEl(child); // removes CHILD from the PARENT
                var Parent = Friendly.getEl(parent);
                Parent.removeChild(Child);
            } else {
                console.log("ONE OF THE VALUES IS UNDEFINED OR DEFINED INCORRECTLY");
            }
        },
        getEl: function(selector) {
            if (typeof selector == "string") { 
                return document.querySelector(selector); // gets element by SELECTOR so you can apply actions to it
            } else { console.log("SELECTOR IS UNDEFINED OR DEFINED INCORRECTLY"); }
        },
        html: function(selector, replace, apparatus) {
            if (typeof selector == "string") { 
                if (typeof replace == "string") {
                    if (apparatus == true) {
                        var replace = Friendly.replacer(replace);
                    }
                    Friendly.getEl(selector).innerHTML = replace; // replaces the innerHTML value of the element with given SELECTOR with the value of your input * if you define last variable as true it will allow you to use special embedded text functions *
                } else if (typeof replace == "undefined") {
                    return Friendly.getEl(selector).innerHTML; // returns HTML from inside the object with the SELECTOR you input
                } else {
                    console.log("REPLACE VALUE DEFINED INCORRECTLY");
                }
            } else { console.log('SELECTOR IS UNDEFINED OR DEFINED INCORRECTLY'); }
        },
        ifEven: function(num) {
            if (typeof num == "number") {
                var dev = num / 2, // checks if number (NUM) your input is even and if so returns TRUE if so or FALSE if not so
                    devDec = dev - Math.floor(dev);
                if (devDec > 0) {
                    return false;
                } else {
                    return true;
                }
            } else if (typeof num == "undefined") {
                console.log("PLEASE PASS FUNCTION A VALUE");
            } else {
                console.log("VALUE DEFINED INCORRECTLY");
            }
        },
        ifOdd: function(num) {
            if (typeof num == "number") {
                var dev = num / 2, // checks if number (NUM) your input is odd and if so returns TRUE if so or FALSE if not so
                    devDec = dev - Math.floor(dev);
                if (devDec > 0) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof num == "undefined") {
                console.log("PLEASE PASS FUNCTION A VALUE");
            } else {
                console.log("VALUE DEFINED INCORRECTLY");
            }
        },
        ifPrime: function(num) {
            if (typeof num == "number") {
                var x = 1, counter = 0; // checks if number (NUM) you input is prime and if so returns TRUE if so or FALSE if not so
                while ((x <= num) && (counter < 3)) {
                    var dev = num / x,
                        devDec = dev - Math.floor(dev);
                    if (devDec == 0) {
                        counter++;
                    }
                    x++;
                }
                if (counter == 2) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof num == "undefined") {
                console.log("PLEASE PASS FUNCTION A NUMBER");
            } else {
                console.log("VALUE OF INPUT IS INCORRECT");
            }
        },
        ifSqr: function(num) {
            if (typeof num == "number") {
                var dev = Math.sqrt(num), // checks if the number (NUM) of your input is a square of any rational number and if so returns TRUE, if not so reutrns FALSE
                    devDec = dev - Math.floor(dev);
                if (devDec == 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.log("VALUE OF INPUT IS INCORRECT");
            }
        },
        inText: function(selector) {
            if (typeof selector == "string") { 
                return Friendly.getEl(selector).innerText; // returns TEXT from inside the object with the SELECTOR you input
            } else { console.log('SELECTOR IS UNDEFINED OR DEFINED INCORRECTLY'); }
        },
        getValue: function(selector) {
            if (typeof selector == "string") { 
                return Friendly.getEl(selector).value; // returns the value of the element with specified SELECTOR *SELECTOR must be given inside quotation marks*
            } else { console.log('SELECTOR IS UNDEFINED OR DEFINED INCORRECTLY'); }
        },
        inBetween: function(num, min, max) {
            if ((typeof num == "number") && (typeof min == "number") && (typeof max == "number")) { 
                if ((num > min) && (num < max)) { return true; } else { return false; } // checks if the number (NUM) is placed in between MIN and MAX and returns TRUE if so or FALSE if not so
            } else { console.log('ONE OF THE VARIABLES IS UNDEFINED OR DEFINED INCORRECTLY'); }
        },
        multiRandom: function(min, max) {
            if ((typeof min == "number") && (typeof max == "number")) { 
                return (Math.random() * (max - min)) + min; // randomly returns number in between MIN and MAX excluding MAX
            } else { console.log('ONE OF THE VARIABLES IS UNDEFINED OR DEFINED INCORRECTLY'); }
        },
        multiWholeRandom: function(min, max) {
            if ((typeof min == "number") && (typeof max == "number")) { 
                return Math.floor(Math.random() * (max - min)) + min; // randomly returns whole number in betwen MIN and MAX excluding MAX
            } else { console.log('ONE OF THE VARIABLES IS UNDEFINED OR DEFINED INCORRECTLY'); }
        },
        replacer: function(string) {
            return string.replace("*","<b>").replace("**","</b>").replace("^","<i>").replace("^^","</i>").replace("_|","<br>"); // function used to run all the specialised text apparatus
        },
        roundDown: function(num) {
            if (typeof num == "number") {
                return Math.floor(num); // returns the largest integer less than or equal to the number (NUM) * FF.roundUp(1.3); --> 1 *
            } else {
                console.log("NUMBER IS UNDEFINED OR DEFINED INCORRECTLY");
            }
        },
        roundUp: function(num) {
            if (typeof num == "number") {
                return Math.ceil(num); // returns the smallest integer greater than or equal to the number (NUM) * FF.roundUp(0.02); --> 1 *
            } else {
                console.log("NUMBER IS UNDEFINED OR DEFINED INCORRECTLY");
            }
        },
        textApp: function(selector) {
            if (typeof selector == "string") {
                var replace = Friendly.replacer(Friendly.html(selector)); // applies special embedded text functions to the element with the specified SELECTOR if given, if not, applies those to the whole <body> element
                Friendly.html(selector, replace);
            } else if (typeof selector == "undefined") {
                var replace = Friendly.replacer(Friendly.html("body"));
                Friendly.html("body", replace);
            } else {
                console.log("SELECTOR HAS BEEN DEFINED INCORRECTLY");
            }
        },
        topHTML: function(selector, add, apparatus) {
            if ((typeof selector == "string") && (typeof add == "string")) {
                if (apparatus == true) {
                    var add = Friendly.replacer(add);
                }
                var target = Friendly.getEl(selector);
                target.innerHTML = add + target.innerHTML; // puts the value of your input in the top of the element with the given  SELECTOR * if you define last variable as true it will allow you to use special embedded text functions *
            } else if (typeof selector !== "string") {
                console.log("SELECTOR IS UNDEFINED OR DEFINED INCORRECTLY");
            } else if (typeof add !== "string") {
                console.log("ADDITIONAL VALUE IS UNDEFINED OR DEFINED INCORRECTLY");
            } 
        },



        // help module
        help: {
            biAnswer: "() // rando,ly returns YES or NO",
            biBool: "() // randomly returns TRUE or FALSE",
            biRandom: "() // randomly returns 1 or 0",
            bottomHTML: "(selector, add, apparatus) // puts the value of your input (ADD) in the bottom of the element with the given SELECTOR * if you define last variable as true it will allow you to use special embedded text functions *",
            cleanEl: "(selector) // makes innerHTML of the selected element (SELECTOR) empty *if SELECTOR is undefined makes <body>'s innerHTML empty*",
            clone: "(selector, num, what) // puts the value of your input (WHAT) inside the element with the given SELECTOR certain amount (NUM) of times",
            css: "(selector, style) // // applies STYLEs to the element with the given SELECTOR",
            delEl: "(parent, child) // removes CHILD from the PARENT",
            getEl: "(selector) // gets element by SELECTOR so you can apply actions to it",
            ifPrime: "(num) // checks if number (NUM) you input is prime and if so returns TRUE, if not so, retuns FALSE",
            ifSqr: "(num) // checks if the number (NUM) of your input is a square of any rational number and if so returns TRUE, if not so reutrns FALSE",
            html: "(selector, replace, apparatus) // replaces the innerHTML value of the element with given SELECTOR with the value of your input (REPLACE) or returns HTML from inside the object with the selector you input if REPLACE is undefined * if you define last variable as true it will allow you to use special embedded text functions *",
            inText: "(selector) // returns innerText from inside the object with the SELECTOR you input",
            getValue: "(selector) // returns the value of the element with specified SELECTOR *SELECTOR must be given inside quotation*",
            inBetween: "(num, min, max) // checks if the number (NUM) is placed in between MIN and MAX *excluding MIN and MAX* and returns TRUE if so of FALSE if not so",
            multiRandom: "(min, max) // randomly returns number in between MIN and MAX excluding MAX",
            multiWholeRandom: "(min, max) // randomly returns whole number in betwen MIN and MAX excluding MAX",
            roundDown: "(num) // returns the largest integer less than or equal to the number (NUM) * FF.roundDown(1.3); --> 1 *",
            roundUp: "(num) // returns the smallest integer greater than or equal to the number (NUM) * FF.roundUp(0.02); --> 1 *",
            textApp: "(selector) // applies special embedded text functions to the element with the specified SELECTOR if given, if not, applies those to the whole <body> element",
            topHTML: "(selector, add, apparatus) // puts the value of your input (ADD) in the top of the element with the given SELECTOR * if you define last variable as true it will allow you to use special embedded text functions *",
        }
    }
})();

var FF = Friendly; // use FF to refer to the Friendly library and its set of functions