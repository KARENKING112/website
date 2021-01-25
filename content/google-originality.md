---
title: "Google Docs originality reports are broken"
date: 2021-01-24
---

![](https://insider.fiu.edu/wp-content/uploads/2019/07/Insider-Posts.png)

>Plagiarism is taking someone's work and saying it's yours.

# Background

Google Classroom has a feature called "originality reports" which will scan
student work in the form of Google Docs for content that was plagiarised from
placed on the internet. 

Read more about it [here](https://edu.google.com/products/originality/).

# Testing it out

I like to tinker with things and see how they work, and thus how they can be
improved. So naturally, when one of my teachers gave me an assignment in Google
Classroom with originality reports enabled, I immediately wanted to see if I
could get past it. I didn't want to plagarise or cheat, I was just curious how
good the system really was.

To get started, I got some articles and resources from the web and copied them
into the document. I verified first that they showed up on Google, so I was
definitely expecting them to be picked up.

* [Source #1](https://www.coursehero.com/file/64148441/essay-1docx/)
* [Source #2](https://en.wikisource.org/wiki/Lorem_ipsum_(unsourced))
* [Source #3](https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/writing-sample-essays.html?page=0&chapter=0)
* [Source #4](https://en.wikipedia.org/wiki/Linux)
* [Source #5](https://www.gnu.org/philosophy/open-source-misses-the-point.en.html)

Once I was done, I submitted my first test document.

![](https://i.imgur.com/a0izbLz.png)
>It was even able to display the domains of which the content was from.

Unsurprisingly, it found everything I copied. Looking good so far! Time to see
if I can trip it up somehow.

# The fun part

To begin with that, I wrote a pretty simple script in Node.js that would read in
a file to a string, split the characters into an array, and then join them. In
between each character, I insert a random number (between 32 and 256) of unicode
zero-width space characters (U+200B). These characters aren't visible, so there
is no visual difference in the document.

I included the code I used below.

```js
const fs = require("fs");
let data = fs.readFileSync("input.txt");

let out = "";
for (const char of data.toString().split("")) {
        out += char;
        out += "\u200b".repeat(Math.floor(Math.random() * 224) + 32);
}

fs.writeFileSync("output.txt", out);
```

![](https://i.imgur.com/qDGSsB4.png)

Interestingly enough, that seemed to work.

# Conclusion

This is probably fine. No, really. The average high school student doesn't know
what Unicode or a zero-width space is. 

The problem here is that we put way too much trust into Google, to the point
where it's deeply rooted in almost every public school in the US in some way
(think Chromebooks, Docs, etc.). Are we fine with letting Google have control
over that?

Why are we giving up our privacy, and our freedom by forcing the children to
use this terrible propriatary software.. for this crap?