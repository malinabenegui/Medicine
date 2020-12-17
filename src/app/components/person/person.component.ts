import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-content',
  template: `
    <div class="modal-body">
      <form>
        <h3>Add Person:</h3>
        <hr>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter name">
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email">
        </div>

        <div class="form-group">
          <label for="address">Address:</label>
          <input type="text" class="form-control" id="address" placeholder="Enter your address">
        </div>

        <div class="form-group">
          <label for="age">Age:</label>
          <input type="number" class="form-control" id="age" placeholder="Enter your age">
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
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent {
  constructor(private modalService: NgbModal) {}

  open(): void {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }
}
