import { Component } from '@angular/core';
import { TerminalCard } from '../../shared/components/terminal-card/terminal-card';
import { Typewriter } from '../../shared/components/typewriter/typewriter';
import { Button } from '../../shared/components/button/button';
import { Card } from '../../shared/components/card/card';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionHeader } from '../../shared/components/section-header/section-header';
@Component({
  selector: 'app-home',
  imports: [Card,Button,Typewriter,TerminalCard,StatCard,ProjectCard,SectionHeader],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
