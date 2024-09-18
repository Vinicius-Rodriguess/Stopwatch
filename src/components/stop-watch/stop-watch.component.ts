import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html', 
  styleUrl: './stop-watch.component.scss'
})
export class StopWatchComponent {
  private seconds = 0
  private minutes = 0
  private hours = 0
  public displayTime = "00:00:00"
  private intervalId: ReturnType<typeof setInterval> | null = null

  startTimer(): void {
    if (this.intervalId) return
    this.incrementTime()
    this.intervalId = setInterval(() => this.incrementTime(), 1000)
  }

  stopTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  resetTimer(): void {
    this.stopTimer()
    this.seconds = 0
    this.minutes = 0
    this.hours = 0
    this.updateDisplayTime(this.hours,this.minutes,this.seconds)
  }

  private incrementTime(): void {
    this.seconds++

    if (this.seconds >= 60) {
      this.seconds = 0
      this.minutes++
    }

    if (this.minutes >= 60) {
      this.minutes = 0
      this.hours++
    }

    this.updateDisplayTime(this.hours,this.minutes,this.seconds)
  }

  private formatDigit(digit: number): string {
    return digit.toString().padStart(2, "0")
  }

  private updateDisplayTime(hours: number, minutes: number, seconds: number): void {
    this.displayTime = `${this.formatDigit(hours)}:${this.formatDigit(minutes)}:${this.formatDigit(seconds)}`
  }

  ngOnDestroy(): void {
    this.stopTimer()
  }
}
