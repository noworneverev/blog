---
slug: sumif
title: 【VBA】 Add symbols next to selected cells and show the result of the sum with one click
authors: mike
tags: [vba, excel]
---

## Download 
[Sumif.xlam](https://github.com/noworneverev/noworneverev.github.io/releases/download/2.2/sumif.xlam)

<!--truncate-->

## Demo 
![](https://i.imgur.com/Zblrcke.gif)

If you don't know how to use xlam file, here's the [tutorial](./excel-customized-ribbon).

It's quite often to use Excel Sumif function when we need to sum some specific values, and now you can speed up that work with one click.

There are 4 combinations in the userform, that's adding the symbols to the right or left next to the selected cells and either storing them in Cells or in Textboxes. After you press OK, it'll pop up an input box to let you select where the result would be put.
The default symbol is "A", you can customize it by changing the text in the userform.

Noted that when you select the option that symbols are stored in Cells, it'll only sum up that column's value, because I use <code>=Sumif</code> function here, however, there's no limitation when you select the "Textboxes" option, I simply use <code>=Sum</code> to sum values up in this situation.