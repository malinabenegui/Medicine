import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-content',
  template: `
    <div class="modal-body">
      <form>
        <h3>Add Caregiver:</h3>
        <hr>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter name">
        </div>

        <div class="form-group">
          <label for="birthDate">Birth Date:</label>
          <input type="date" class="form-control" id="birthDate">
        </div>

        <div class="form-group">
          <label for="address">Address:</label>
          <input type="text" class="form-control" id="address" placeholder="Enter your address">
        </div>

        <div class="form-group">
          <p style="margin-bottom: 0">Gender:</p>
          <input type="radio" id="male" name="gender" value="male">
          <label for="male" style="margin-left: 3px">Male</label><br>
          <input type="radio" id="female" name="gender" value="female">
          <label for="female" style="margin-left: 3px">Female</label><br>
          <input type="radio" id="other" name="gender" value="other">
          <label for="other" style="margin-left: 3px">Other</label><br><br>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  `
})
export class NgbdModalContentComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-ngbd-modal-component',
  templateUrl: 'caregiver.component.html',
  styleUrls: ['caregiver.component.css']
})
export class CaregiverComponent {
  constructor(private modalService: NgbModal) {}

  open(): void {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }
}
