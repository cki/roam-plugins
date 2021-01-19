# roam-plugins

## 30-60-90

### Install

* Open roam/js. You can also open any other page. But this is more organized.

* Create a block with following text

```
{{[[roam/js]]}}
```

* Copy paste as a child of above block as code (using  3 "`" around the text)

```
var old = document.getElementById("30-60-90");
if (old) {
  old.remove();
}

var s = document.createElement("script");
s.src = "https://cki.github.io/roam-plugins/30-60-90.js";
s.id = "30-60-90";
s.async = false;
s.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(s);
```

* Trust: Click "Yes I know what I am doing



### Usage

* Type at the start of a Block: **30
* Type in that Block: Shift+Enter


### Debug version

* Something is not working right?

* Make sure you paste the code into the page: roam/js

* Please use following instructions to turn on debug information

* Create a block with following text

```
{{[[roam/js]]}}
```

* Copy paste as a child of above block as code (using  3 "`" around the text)

```
var old = document.getElementById("30-60-90");
if (old) {
  old.remove();
}

var s = document.createElement("script");
s.src = "https://cki.github.io/roam-plugins/30-60-90-debug.js";
s.id = "30-60-90";
s.async = false;
s.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(s);
```

* Trust: Click "Yes I know what I am doing

* Open your javascript console (rightclick + inspect element in your browser)

* Create a new block

** Type: **30 

** Type: Shift + Enter

* Look in the javascript console for text starting with: "30-60-90:"

* Send me a screenshot
