import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Video } from '../../common/types';
import { VideoThumbnailComponent } from '../video-thumbnail/video-thumbnail.component';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, NgFor, NgClass, VideoThumbnailComponent],
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent {
  @Input() videos?: Video[];

  @Input() selectedVideo?: Video;

  @Output() videoChange = new EventEmitter<Video>();
}
