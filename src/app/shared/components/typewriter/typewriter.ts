import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [],
  templateUrl: './typewriter.html',
  styleUrl: './typewriter.css'
})
export class Typewriter implements OnInit {

  @Input() phrases: string[] = [];

  displayedText = '';

  private phraseIndex = 0;

  private charIndex = 0;

  private deleting = false;

  ngOnInit(): void {
    this.type();
  }

  private type(): void {

    const currentPhrase =
      this.phrases[this.phraseIndex];

    if (!this.deleting) {

      this.displayedText =
        currentPhrase.substring(
          0,
          this.charIndex + 1
        );

      this.charIndex++;

      if (this.charIndex === currentPhrase.length) {

        this.deleting = true;

        setTimeout(
          () => this.type(),
          1500
        );

        return;
      }

    } else {

      this.displayedText =
        currentPhrase.substring(
          0,
          this.charIndex - 1
        );

      this.charIndex--;

      if (this.charIndex === 0) {

        this.deleting = false;

        this.phraseIndex =
          (this.phraseIndex + 1)
          % this.phrases.length;
      }
    }

    setTimeout(
      () => this.type(),
      this.deleting ? 40 : 70
    );
  }
}