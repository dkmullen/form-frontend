import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-forms';
  subscribeForm: FormGroup;

  ngOnInit() {
    this.subscribeForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      readEULA: new FormControl()
    })
  }

  onReset() {
    this.subscribeForm.reset()
  }

  onSubmit(formData: any, formDirective: FormGroupDirective): void {
    console.log(this.subscribeForm.value);
    formDirective.resetForm();
    this.subscribeForm.reset()
  }

}
