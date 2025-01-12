import React from 'react';
import { createRoot } from 'react-dom/client';
import ProjectsGrid from './components/ProjectsGrid';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projects-root');
    if (container) {
        const root = createRoot(container);
        root.render(<ProjectsGrid />);
    }
});