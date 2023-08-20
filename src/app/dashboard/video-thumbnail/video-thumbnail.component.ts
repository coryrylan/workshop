import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../../common/types';

@Component({
  selector: 'app-video-thumbnail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent {
  @Input() video: Video = { title: '', author: '', id: '' };

  @Input() selected = false;
}
