import { Component, OnInit } from '@angular/core';
import { SetsService } from '../shared/services/sets.service';
import { Set } from '../shared/set';

const emptySet: Set = {
  id: null,
  name: '',
  year: '',
  inserts: '',
  total: '',
};

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss'],
})
export class SetsComponent implements OnInit {
  sets = [];
  selectedSet = emptySet;
  originalName = '';

  constructor(private setsService: SetsService) {}

  ngOnInit(): void {
    this.fetchSets();
  }

  selectSet(set) {
    this.selectedSet = set;
  }

  fetchSets() {
    this.setsService.all().subscribe((result: any) => (this.sets = result));
  }

  saveSet(set) {
    if (set.id) {
      this.updateSet(set);
    } else {
      this.createSet(set);
    }
  }

  createSet(set) {
    this.setsService.create(set).subscribe((result) => this.fetchSets());
  }

  updateSet(set) {
    this.setsService.update(set).subscribe((result) => this.fetchSets());
  }

  deleteSet(setId) {
    console.log('Delete Set', setId);
  }

  reset() {
    this.selectSet({ ...emptySet });
  }
}
