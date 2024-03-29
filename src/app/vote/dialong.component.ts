import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  styleUrl: './vote.component.scss',
  selector: 'app-your-dialog',
  template: `
<div class="d-flex justify-content-center align-items-center" [@slideIn]="true">
  <div class="text-center" style="width: 100%;">
    <h1 mat-dialog-title style="text-align: center;">{{data.winnername}} Winner!!!</h1>
  <img [src]="data.winnerImageSrc" alt="Winner Image" class="equal-image" style="display: block;width: 80%;height: auto;margin: 0 auto;">
    <h3 style="text-align: center;">Chance Win</h3>
    <h5 style="text-indent: 30px;">RWinng : <span class="red-text">{{data.winnerScore}}</span> | RLoser : <span class="red-text">{{data.loserScore}}</span></h5>
    <h5 style="text-indent: 30px;">kFactorWinner : <span class="red-text">{{data.kFactorWinner}}</span> | kFactorLoser : <span class="red-text">{{data.kFactorLoser}}</span></h5>
    <h5 class="red-text" style="text-indent: 30px;">{{data.winnerpop}}</h5>

    <h3 style="text-align: center;">Points</h3>
    <h5 class="red-text" style="text-indent: 30px;">{{data.pointpop}}</h5>
    <h5 class="red-text" style="text-indent: 30px;"><span>{{data.winnerScore}}</span> + {{data.Winnerrat}}</h5>
    <h3 style="text-align: center;">Newscore => <span class="red-text">{{data.winnerScore + data.Winnerrat}}</span></h3>
  </div>
</div>
  `,
})
export class DialogComponent  {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { winnerScore: number , winnerImageSrc: string
                                            , Winnerrat : number ,winnername : string,winnerpop :string 
                                            , pointpop:string,loserScore:number,kFactorWinner:number,kFactorLoser:number}
  ) {}
  
}