import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Button } from './shared/components/button/button';
import { Card } from './shared/components/card/card';
import { SectionHeader } from './shared/components/section-header/section-header';
import { Navbar } from './shared/components/navbar/navbar';
import { Typewriter } from './shared/components/typewriter/typewriter';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Button,
    Card,
    SectionHeader,
    Navbar,
    Typewriter
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio-frontend';
}