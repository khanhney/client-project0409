import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../types';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit {
  @Input() story: Story;
  @Input() userId: string;
  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  likeStory() {
    this.storyService.toggleLike(this.story._id, this.isLiked);
  }

  get isLiked(): boolean {
    return this.story.fans.findIndex(id => id === this.userId) !== -1;
  }
}
