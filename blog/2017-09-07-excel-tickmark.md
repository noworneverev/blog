---
slug: excel-tickmark
title: 【VB】 Excel Tickmark, an add-in for auditors and accountants
authors: mike
tags: [vb.net, excel]
---

## Main page 
[https://noworneverev.github.io/TickMark/](https://noworneverev.github.io/TickMark)

## Download
[Click me](https://github.com/noworneverev/TickMark/releases/download/1.0.0/Tick.Mark.msi)

## Repo
[https://github.com/noworneverev/TickMark](https://github.com/noworneverev/TickMark)

<!--truncate-->

## Install
Execute the msi set-up file, and keep clicking next step til end. Then open your Excel, there should pop out a window asking your permission to install the program. Click yes or ok and wait a minute. If you want to remove this add-in, go to control panel to remove this Excel Ribbon like any other software.

## Screenshot
![Screenshot](https://noworneverev.github.io/TickMark/images/gallery/fulls/cover.png)

## Demo
<iframe width="680" height="400" src="https://www.youtube.com/embed/Hi4jG4As_h8" frameborder="0" allowfullscreen></iframe>

## Before start
This was my first Visual Basic program. Before I wrote this Visual Basic based add-in, I only had some basic knowledge of VBA. I spent the whole March building this add-in and self-learning Visual Basic simultaneously.

## Why and Purpose
I had an internship in one of the Big 4 when I was in college, and from that experience I knew that there's customized tool called tickmark embedded in firm's Excel which is designed to help auditors to deal with working papers. In that month, I heard a senior staff said she would miss this add-in when she left. Therefore, after 2 years, when I prepared for the boring CPA exam, I suddenly had an idea that maybe I could create an Tickmark Excel add-in on my own, and there it is.

## Details 
### 1. PBC text-box
![PBC](https://noworneverev.github.io/TickMark/images/gallery/fulls/0.png)

Pressing PBC button would add a text-box with "PBC" texting in your worksheet's top-left corner. "PBC" is abbreviated from "prepared by client".

### 2. Font-Family
![Font-Family](https://noworneverev.github.io/TickMark/images/gallery/fulls/1.png)
I isolated some commonly-used fonts, including "Arial", "Book Antiqua", "Calibri", "標楷體", "微軟正黑體", "新細明體". You could save some time from selecting these fonts from the drop-down.

### 3. Electronic working paper mark
![Electronic working paper mark](https://noworneverev.github.io/TickMark/images/gallery/fulls/2.png)
As far as I know, every accounting firm has its oftenly used mark, so I made some marks that maybe you could use. (These marks came from two of the Big 4.)

### 4. Graphic Symbol, Greek Alphabet &amp; Roman Numerals
![Graphic Symbol](https://noworneverev.github.io/TickMark/images/gallery/fulls/3.png)
![Greek Alphabet](https://noworneverev.github.io/TickMark/images/gallery/fulls/4.png)
![Roman Numerals](https://noworneverev.github.io/TickMark/images/gallery/fulls/5.png)

Several symbols that you could used to represent specific cells.

### 5. Sum a b c
![Sum a b c](https://noworneverev.github.io/TickMark/images/gallery/fulls/6.png)
These symbols could be useful when your need to sum some cells' value up, but they are scattering in the worksheet.

### 6. Down &amp; right arrow
![Down arrow](https://noworneverev.github.io/TickMark/images/gallery/fulls/7.png)
![Right arrow](https://noworneverev.github.io/TickMark/images/gallery/fulls/8.png)
Select a range and you can draw an arrow that you need.

### 7. Arrow &amp; textbox
![Arrow textbox](https://noworneverev.github.io/TickMark/images/gallery/fulls/9.png)
Select a cell to add a connecting arrow and a textbox to the corner.

### 8. Range arrow
![Range arrow](https://noworneverev.github.io/TickMark/images/gallery/fulls/10.png)
Select a range to draw an arrow connecting with multiple lines in the corner.

### 9. Others
![Others](https://noworneverev.github.io/TickMark/images/gallery/fulls/11.png)
Open the calendar pane, add a checkbox to the selected cell, the bottom double line, and the format with a thousands separator.

### 10. Fill Color
![Fill Color](https://noworneverev.github.io/TickMark/images/gallery/fulls/12.png)
5 fill colors that you could choose and one button to remove fill color.

### 11. Direction
![Direction](https://noworneverev.github.io/TickMark/images/gallery/fulls/13.png)
Create two boxes pointing to each other. You could use this to imply that two selected cells are related.

### 12. Note
![note](https://noworneverev.github.io/TickMark/images/gallery/fulls/note.png)
Simply auditor's nightmare.

### 13. Left Brace
![Left Brace](https://noworneverev.github.io/TickMark/images/gallery/fulls/14.png)
Select a range to draw an entry brace.

### 14. Insert Column
![Insert Column](https://noworneverev.github.io/TickMark/images/gallery/fulls/15.png)
Insert a narrow column to let you put some marks.

### 15. Cell Link
![Cell Link](https://noworneverev.github.io/TickMark/images/gallery/fulls/16.png)
Create boxes linked with hyperlinks to the corner of both selected cells. This function is the most complicated and also the main reason why I created this add-in. 

### 16. HyperLink
![HyperLink](https://noworneverev.github.io/TickMark/images/gallery/fulls/17.png)
Build hyperlinks on both of the selected cells and remove the default hyperlink format.

### 17. Signature
![Signature](https://noworneverev.github.io/TickMark/images/gallery/fulls/18.png)
To set up your name, go to File &gt; Options &gt; General &gt; User name.

### 18. Marker
![Marker](https://noworneverev.github.io/TickMark/images/gallery/fulls/19.png)
For in-charge, manager or partner to review the working paper.

### 19. Get Motivated Every Day!
![Get Motivated Every Day!](https://noworneverev.github.io/TickMark/images/gallery/fulls/20.png)
900 motivated quotes I collected from Reddit, fb/the idealist and other internet sources. I aimed at encouraging those who are also suffering in Big 4 by making this. I used rnd function to generate the quote you will see, so you might see the same quotes sometimes, and also some you might never see. 😊
<!-- <i class="fa fa-smile-o" aria-hidden="true"></i> -->

I will add other quotes which I read after I completed this project to a VBA based function. Stay tuned on my my blog!

> There will always be a space between the alt right and alt left.