import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Video } from '../../common/types';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  @Input() video?: Video;
}
