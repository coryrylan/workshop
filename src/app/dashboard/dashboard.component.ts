import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { Video } from '../common/types';
import { VideoService } from './video.service';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, VideoListComponent, VideoPlayerComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  search = new FormControl('');
  filteredVideos: Observable<Video[]>;
  selectedVideo?: Video;

  constructor(private videoService: VideoService) {
    const loadedVideos = this.videoService.loadVideos().pipe(tap(videos => this.selectedVideo = videos[0]));
    const searchChanges = this.search.valueChanges.pipe(startWith(this.search.value));

    this.filteredVideos = combineLatest([loadedVideos, searchChanges]).pipe(
      map(([videos, query]) => filterVideos(videos, query as string)),
    );
  }
}

function filterVideos(videos: Video[], query: string) {
  return videos.filter(v => v.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}
