import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-jewellery',
    templateUrl: './jewellery.component.html',
    styleUrls: ['./jewellery.component.scss'],
    animations: [routerTransition()]
})
export class JewelleryComponent implements OnInit {
    
    constructor() {
    }

    ngOnInit() {
    }
}
