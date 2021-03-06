import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MdDialogRef<DeleteDialogComponent>) {

  }

  close() {
    this.dialogRef.close(false);
  }

  delete() {
    this.dialogRef.close(true);
  }

}
