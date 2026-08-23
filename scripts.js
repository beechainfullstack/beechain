/**
 * =====================================================================
 * P R O F E S S I O N A L   V O I D   -   L I V I N G   C O U N T E R
 * =====================================================================
 * 
 * Dynamic counter that updates every second to symbolize ongoing practice.
 * Time flows like water - continuous, living, present.
 * 
 * CUSTOMIZATION:
 * - Change STARTING_SECONDS to modify the base counter value
 * - Counter updates every 1000ms (1 second)
 */

// ================================================================
// C O N F I G U R A T I O N
// ================================================================

/**
 * Starting seconds for the counter
 * Set to 0 to begin from zero, or any number for a base value
 */
const STARTING_SECONDS = 0;

/**
 * Update interval in milliseconds
 */
const UPDATE_INTERVAL_MS = 1000;

// ================================================================
// L I V I N G   C O U N T E R
// ================================================================

let totalSeconds = STARTING_SECONDS;
let secondsCounterEl = null;
let displaySecondsEl = null;

/**
 * Initialize the living counter
 */
function initLivingCounter() {
    secondsCounterEl = document.getElementById('secondsCounter');
    displaySecondsEl = document.getElementById('displaySeconds');
    
    if (!secondsCounterEl || !displaySecondsEl) {
        console.log('Counter elements not found');
        return;
    }
    
    updateCounterDisplay();
    setInterval(tickCounter, UPDATE_INTERVAL_MS);
}

/**
 * Increment and update counter
 */
function tickCounter() {
    totalSeconds++;
    updateCounterDisplay();
}

/**
 * Update display with formatted numbers
 */
function updateCounterDisplay() {
    const formatted = formatNumber(totalSeconds);
    
    if (secondsCounterEl) {
        secondsCounterEl.textContent = formatted;
    }
    if (displaySecondsEl) {
        displaySecondsEl.textContent = formatted;
    }
}

/**
 * Format number with comma separators
 */
function formatNumber(num) {
    return num.toLocaleString('en-US');
}

// ================================================================
// F O O T E R   Y E A R
// ================================================================

function updateFooterYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// ================================================================
// S C R O L L   R E V E A L
// ================================================================

/**
 * Initialize scroll reveal animations
 * Elements fade in and lift as they enter viewport
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if (!revealElements.length) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        revealElements.forEach(el => el.classList.add('is-visible'));
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
}

// ================================================================
// I N I T I A L I Z A T I O N
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    initLivingCounter();
    updateFooterYear();
    initScrollReveal();
    
    console.log('✦ Professional Void website initialized');
    console.log('⏱ Living counter started at ' + STARTING_SECONDS + ' seconds');
});
