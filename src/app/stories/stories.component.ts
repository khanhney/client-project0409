import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoryService } from '../services/story.service';
import { AppState, Story } from '../types';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  providers: [StoryService]
})

export class StoriesComponent implements OnInit {
  stories: Observable<Story[]>;
  constructor(
    private store: Store<AppState>,
    private storyService: StoryService) { }

  ngOnInit() {
    this.stories = this.store.select('stories');
    this.storyService.getAllStory();
  }

}
