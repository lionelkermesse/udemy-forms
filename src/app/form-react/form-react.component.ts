import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "./custom.validator";

@Component({
  selector: 'app-form-react',
  templateUrl: './form-react.component.html',
  styleUrls: ['./form-react.component.css']
})
export class FormReactComponent implements OnInit {
  projectForm: FormGroup;
  submitted: boolean = false;
  defaultStatus: string = 'stable';
  statusList: string[] = ['stable', 'critical', 'finished'];
  projectData: { projectName: string, email: string, status: string };

  isNotValidProject = (): boolean => {
    const control = this.projectForm.get('projectName');
    const isNotValidMinLength = (): boolean => control.invalid && control.getError('minlenght');
    const isNotValidRequired = (): boolean => control.invalid && control.touched && control.getError('required');

    return isNotValidMinLength() || isNotValidRequired()
  };

  isNotValidProjectName = (): boolean => this.projectForm.get('projectName').getError('invalidProjectName');

  isNotValidEmail = (): boolean => this.projectForm.get('email').invalid && this.projectForm.get('email').touched;


  constructor() {
  }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null,
        [
          Validators.required, Validators.minLength(3),
          CustomValidator.invalidProjectName.bind(this)
        ],
        CustomValidator.asyncInvalidProjectName.bind(this)
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(this.defaultStatus)
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    this.submitted = true;
    this.projectData = this.projectForm.value;
    console.log(this.projectData);
    this.projectForm.reset();
  }
}
