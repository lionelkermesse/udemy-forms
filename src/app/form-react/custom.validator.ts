import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class CustomValidator {
  static invalidProjectName = (control: FormControl): { [s: string]: boolean } =>
    (control.value && control.value.toLowerCase() === 'test') ? {'invalidProjectName': true} : null;

  static asyncInvalidProjectName = (control: FormControl): Promise<{[s: string]: boolean}> | Observable<{[s: string]: boolean}> | {[s: string]: boolean} => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value && control.value.toLowerCase() === 'project'){
          resolve({'invalidProjectName': true})
        } else {
          resolve(null)
        }
      }, 2000);
    });
  }
}
