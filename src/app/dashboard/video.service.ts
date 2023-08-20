import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../common/types';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http: HttpClient) { }

  loadVideos() {
    return this.http.get<Video[]>('/assets/videos.json');
  }
}
