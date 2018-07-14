Mobile Web Development - ReadMe

The Concept:
A reimagining of VRLA(Virtual Reality LA)'s Expo website. 

*Important note: the website was built using chrome and is responsive for the following screen widths: 1440px (works above this but may want another breakpoint for increase in font size), 1024px, 768px, 425px, 375px and 320px. 

Assignment Requirements


1) Scalable boxes and elements with browser resizing:

(style.css)

Line 48 (nav menu width resizes depending on mobile phone size + tablet, static menu width on desktop)

Line 103 (outer container affects the gradient container and content container)

Line 123 (artwork container resizes)

Line 178 (on desktop, the pricing table resizes according to width of screen)

Line 229 (width of pricing tables resizes depending on mobile phone size + tablet until a maximum of 500px is achieved) *Note: this works on chrome and safari but not on Firefox currently

Line 282 (width of the day list element resizes with screen size)

Line 297 (collapsible has a width of 100% on mobile)

Line 383 (width of figure containers resize until they reach a max width of 6.5em)

Line 391 (width of images in figure containers resize until they reach the max width of 6.5em)

Line 459 (the width of the gradient container changes depending on desktop screen size)

Line 472 - 473 (for design reasons the width of the content container is made flexible for desktop)

Line 490 (width of the collapsible button changes depending on desktop screen size)

Line 495 (width of the day list container changes depending on desktop screen size)

Line 502 (left margin of the day list container resizes with browser resize)

Line 515 (for design reasons the title containers width changes on tablet)

Line 529 (specific changes for design reasons)

Line 545 (specific changes for design reasons)


2) Examples of the use of relative scaling of fonts and/or heights (em and/or rem):

Font of the body changes from 16px mobile to 18px desktop

(style.css)
Line 56
Line 132
Line 138
Line 164
Line 173
Line 188
Line 205
Line 242
Line 248
Line 270
Line 300
Line 329
Line 335
Line 468

3) An example of scalable HTML5 media:

Sponsor icons 

Line 379 - 384 (figure tag)

Line 390 - 392 (img tag)


At least 2 JS library components:

(main.js)
Line 5 - 11 (hand-coded collapsible)

Line 13 -16 (hand-coded nav menu toggle)

Line 18 - 81 (additional hand-coded animation using GSAP)


Current known bugs: 
1) Only in Firefox do the mobile pricing tables not resize as they are supposed to.
2) If you reload while in the mobile view of chromes inspector, the menu icon disappears - this appears to be a bug with chrome as it does not happen when tested on a real phone.
3)The font weight of body text changes in Firefox and safari. 








