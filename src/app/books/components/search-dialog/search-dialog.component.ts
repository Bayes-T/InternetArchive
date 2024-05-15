import { Component, Inject, Input } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent {

  constructor(
    public dialogRef:MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {books: string[]}
  ){}


  onNoClick(): void {
    this.dialogRef.close();
  }

}
