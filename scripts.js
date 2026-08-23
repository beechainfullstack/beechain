/**
 * =====================================================================
 * L I V I N G   C O U N T E R   &   U T I L I T I E S
 * =====================================================================
 * 
 * This script implements a dynamic, ticking counter that updates every second
 * to symbolize ongoing, living practice - like time flowing like water.
 * 
 * CUSTOMIZATION:
 * - Change the starting number by modifying STARTING_SECONDS below
 * - The counter updates every 1000ms (1 second)
 */

// ================================================================
// C O N F I G U R A T I O N
// Modify these values to customize the counter behavior
// ================================================================

/**
 * Starting number of seconds for the counter
 * Set to 0 to start from zero, or any other number to begin from a base value
 */
const STARTING_SECONDS = 0;

/**
 * Update interval in milliseconds
 * 1000ms = 1 second (recommended for the "living counter" effect)
 */
const UPDATE_INTERVAL_MS = 1000;

// ================================================================
// L I V I N G   C O U N T E R
// ================================================================

/**
 * Tracks the total seconds spent on the page
 */
let totalSeconds = STARTING_SECONDS;

/**
 * DOM elements for the counter display
 */
let secondsCounterElement = null;
let displaySecondsElement = null;

/**
 * Initialize the living counter
 * Finds the counter elements and starts the ticking animation
 */
function initLivingCounter() {
    // Get the counter display elements
    secondsCounterElement = document.getElementById('secondsCounter');
    displaySecondsElement = document.getElementById('displaySeconds');
    
    // If elements don't exist, exit gracefully
    if (!secondsCounterElement || !displaySecondsElement) {
        console.log('Counter elements not found - skipping living counter initialization');
        return;
    }
    
    // Initial update
    updateCounterDisplay();
    
    // Start the ticking interval
    setInterval(tickCounter, UPDATE_INTERVAL_MS);
}

/**
 * Increment the counter and update the display
 */
function tickCounter() {
    totalSeconds++;
    updateCounterDisplay();
}

/**
 * Update the counter display with formatted numbers
 * Uses tabular nums for smooth number transitions
 */
function updateCounterDisplay() {
    const formattedSeconds = formatNumber(totalSeconds);
    
    // Update both counter displays
    if (secondsCounterElement) {
        secondsCounterElement.textContent = formattedSeconds;
    }
    if (displaySecondsElement) {
        displaySecondsElement.textContent = formattedSeconds;
    }
}

/**
 * Format a number with comma separators for readability
 * @param {number} num - The number to format
 * @returns {string} - Formatted number string
 */
function formatNumber(num) {
    return num.toLocaleString('en-US');
}

// ================================================================
// F O O T E R   Y E A R   U P D A T E
// ================================================================

/**
 * Update the footer copyright year to current year
 */
function updateFooterYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ================================================================
// S C R O L L   R E V E A L   A N I M A T I O N
// ================================================================

/**
 * Initialize scroll reveal animations for cards
 * Cards fade in and lift as they enter the viewport
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if (!revealElements.length) return;
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optionally unobserve after revealing
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all reveal elements
    revealElements.forEach(el => observer.observe(el));
}

// ================================================================
// I N I T I A L I Z A T I O N
// ================================================================

/**
 * Initialize all scripts when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the living counter
    initLivingCounter();
    
    // Update footer year
    updateFooterYear();
    
    // Initialize scroll reveal animations
    initScrollReveal();
    
    // Log initialization
    console.log('✦ Esoteric Void website initialized');
    console.log('⏱ Living counter started at ' + STARTING_SECONDS + ' seconds');
});

/**
 * Optional: Add subtle scroll-based animations for glass cards
 * This creates a gentle parallax effect as users scroll
 */
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach((card, index) => {
        const speed = 0.1 + (index * 0.02);
        const offset = scrolled * speed;
        // Subtle lift effect on scroll
        card.style.transform = `translateY(${Math.min(offset, 20)}px)`;
    });
}, { passive: true });
