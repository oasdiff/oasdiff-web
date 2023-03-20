import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-breaking-changes',
  templateUrl: './breaking-changes.component.html',
  styleUrls: ['./breaking-changes.component.scss']
})
export class BreakingChangesComponent {
  response:any;
  constructor(private api: ApiService) {

  }
  async submitBreakingChanges(_original: any, _revision: any) {

    if(_original.length > 100 && _revision.length > 100) {
      // this.api.sendBreakingChanges(_original, _revision)
      //     .subscribe((data:any) =>
      //       {
      //         const t = data;
      //       })
      try {
        this.response = await lastValueFrom(this.api.sendBreakingChanges(_original, _revision));

      }
      catch (error) {
        console.log(error);
      }
    } else {
        alert('Original Spec and Revised Spec must contain specs');
    }

  }
}
