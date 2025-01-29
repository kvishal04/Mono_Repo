import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';


interface Comments {
  comment: string;
  username: string
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {

  @Input() items: Comments[] = []; // decorate the property with @Input()
  ngOnInit(): void {
    initFlowbite()
  } 

  doSOmeFunction (Comments: Comments[]){
    this.items = Comments
  }
}
