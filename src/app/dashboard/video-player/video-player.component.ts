import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Video } from '../../common/types';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  @Input() video?: Video;

  videoUrl?: SafeUrl;

  // constructor(private domSanitizer: DomSanitizer) {}

  // ngOnChanges({video}: SimpleChanges) {
  //   if (video && video.currentValue) {
  //     // todo: convert to @angular/yoututbe-player
  //     // https://bitbucket.org/od-training/abc-20230522/src/10d1f3162bea4bcb491975a0158c33a6bc63a5ec/package.json
  //     // https://github.com/angular/components/blob/main/src/youtube-player/README.md
  //     const currentVideo = video.currentValue;
  //     this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + currentVideo.id);
  //   }
  // }
}
