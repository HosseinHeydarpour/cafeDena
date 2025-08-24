import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-navigation',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
	ifSearchExpanded = signal(false);

	onExpandSearch() {
		this.ifSearchExpanded.set(!this.ifSearchExpanded());
	}
}
