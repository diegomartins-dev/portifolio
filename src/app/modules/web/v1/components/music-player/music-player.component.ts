import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MusicTrack {
  file: string;
  title: string;
  artist?: string;
  cover?: string;
}

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  tracks: MusicTrack[] = [];
  currentIndex = 0;
  audio = new Audio();
  isPlaying = false;
  expanded = false;
  currentTime = 0;
  duration = 0;
  volume = 1;
  muted = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<MusicTrack[]>('assets/mp3/list.json').subscribe(tracks => {
      this.tracks = tracks;
      if (tracks.length) {
        this.loadTrack(0);
      }
    });
    this.audio.addEventListener('ended', () => this.next());
    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
      this.duration = this.audio.duration;
    });
    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration;
    });
    this.audio.volume = this.volume;
    this.audio.muted = this.muted;
  }

  loadTrack(index: number) {
    this.currentIndex = index;
    this.audio.src = `assets/mp3/${this.tracks[index].file}`;
    this.audio.load();
    if (this.isPlaying) {
      this.audio.play();
    }
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  next() {
    if (this.tracks.length) {
      this.loadTrack((this.currentIndex + 1) % this.tracks.length);
      this.play();
    }
  }

  prev() {
    if (this.tracks.length) {
      this.loadTrack((this.currentIndex - 1 + this.tracks.length) % this.tracks.length);
      this.play();
    }
  }

  select(index: number) {
    this.loadTrack(index);
    this.play();
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  seek(event: any) {
    const value = event.target.value;
    this.audio.currentTime = value;
    this.currentTime = value;
  }

  setVolume(event: any) {
    const value = event.target.value;
    this.volume = value;
    this.audio.volume = value;
  }

  toggleMute() {
    this.muted = !this.muted;
    this.audio.muted = this.muted;
  }

  formatTime(seconds: number): string {
    if (isNaN(seconds)) return '0:00';
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  }
} 