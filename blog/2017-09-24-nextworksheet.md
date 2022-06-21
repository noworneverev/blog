---
slug: nextworksheet
title: 【VBA】 Custom previous and next sheet button
authors: mike
tags: [vba, excel]
---

## Download
[Nextworksheet.xlam](https://github.com/noworneverev/noworneverev.github.io.old/releases/download/1.1/NextWorksheet.xlam)

<!--truncate-->

## Demo 
![](https://i.imgur.com/nBuWG6R.gif)

If you don't know how to use xlam file, here's the [tutorial](./excel-customized-ribbon).

This is a basic customized Excel add-in to emulate browser's previous and next button.

Firstly, you can record a macro to see how Excel execute this simple function: 


```
Sub NextWorksheet()

  ActiveSheet.Next.Select

End Sub
```

If you've selected the last worksheet and then exectue the code above, there would be an error popping out. To prevent this situation, I add an if...else statement to fix it.


```vbnet
Sub NextWorksheet()

  Dim NumberOfSheet As Integer

  NumberOfSheet = ActiveWorkbook.Worksheets.Count

  If Not ActiveSheet.Index = NumberOfSheet Then
      ActiveSheet.Next.Select
  Else
    Exit Sub
  End If

End Sub
```