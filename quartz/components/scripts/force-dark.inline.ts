// Force dark mode on page load
document.addEventListener('DOMContentLoaded', () => {
  // Force dark theme
  document.documentElement.setAttribute('saved-theme', 'dark')
  localStorage.setItem('theme', 'dark')
  
  // Override media query
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  Object.defineProperty(mediaQuery, 'matches', { 
    value: true, 
    writable: true 
  })
  
  // Dispatch theme change event
  const event = new CustomEvent('themechange', {
    detail: { theme: 'dark' }
  })
  document.dispatchEvent(event)
})

// Also force on script load
document.documentElement.setAttribute('saved-theme', 'dark')
localStorage.setItem('theme', 'dark')
