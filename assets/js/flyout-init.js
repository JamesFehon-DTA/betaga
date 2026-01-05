/**
 * Manual initialization for CivicTheme Flyout components
 * This handles mobile navigation and other flyout-based UI elements
 */

(function () {
  'use strict';

  function initializeFlyouts() {
    console.log('CivicTheme Flyout: Initializing...');
    
    // Find all flyout containers
    const flyouts = document.querySelectorAll('[data-flyout="true"]');
    console.log('CivicTheme Flyout: Found ' + flyouts.length + ' flyout(s)');
    
    flyouts.forEach(function(flyout) {
      const panel = flyout.querySelector('[data-flyout-panel]');
      if (!panel) return;

      // Get the direction (default to 'right' for mobile nav)
      const direction = flyout.getAttribute('data-flyout-direction') || 'right';
      
      // Add direction class
      flyout.classList.add('ct-flyout--' + direction);
      
      // Initialize as closed
      flyout.setAttribute('data-flyout-state', 'closed');
      panel.setAttribute('aria-hidden', 'true');
    });

    // Find all flyout open triggers
    const openTriggers = document.querySelectorAll('[data-flyout-open-trigger]');
    console.log('CivicTheme Flyout: Found ' + openTriggers.length + ' open trigger(s)');
    
    openTriggers.forEach(function(trigger) {
      // Prevent double initialization
      if (trigger.hasAttribute('data-flyout-initialized')) {
        return;
      }
      trigger.setAttribute('data-flyout-initialized', 'true');

      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get target selector
        const targetSelector = this.getAttribute('data-flyout-target');
        const target = targetSelector ? document.querySelector(targetSelector) : this.nextElementSibling;
        
        if (!target) {
          console.warn('Flyout target not found:', targetSelector);
          return;
        }

        const panel = target.querySelector('[data-flyout-panel]');
        if (!panel) return;

        // Toggle open state
        const isOpen = target.getAttribute('data-flyout-state') === 'open';
        
        if (isOpen) {
          closeFlyout(target, panel, this);
        } else {
          openFlyout(target, panel, this);
        }
      });
    });

    // Find all flyout close triggers
    const closeTriggers = document.querySelectorAll('[data-flyout-close-all-trigger]');
    
    closeTriggers.forEach(function(trigger) {
      if (trigger.hasAttribute('data-flyout-close-initialized')) {
        return;
      }
      trigger.setAttribute('data-flyout-close-initialized', 'true');

      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Find the parent flyout
        const flyout = this.closest('[data-flyout="true"]');
        if (!flyout) return;

        const panel = flyout.querySelector('[data-flyout-panel]');
        const openTrigger = document.querySelector('[data-flyout-target=".' + flyout.classList[0] + '"]');
        
        closeFlyout(flyout, panel, openTrigger);
      });
    });

    // Close flyout on overlay click
    flyouts.forEach(function(flyout) {
      flyout.addEventListener('click', function(e) {
        // Only close if clicking the overlay (not the panel)
        if (e.target === flyout && flyout.getAttribute('data-flyout-state') === 'open') {
          const panel = flyout.querySelector('[data-flyout-panel]');
          const openTrigger = document.querySelector('[data-flyout-open-trigger][data-flyout-target*="' + flyout.classList[0] + '"]');
          closeFlyout(flyout, panel, openTrigger);
        }
      });
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        const openFlyouts = document.querySelectorAll('[data-flyout="true"][data-flyout-state="open"]');
        openFlyouts.forEach(function(flyout) {
          const panel = flyout.querySelector('[data-flyout-panel]');
          const openTrigger = document.querySelector('[data-flyout-open-trigger][data-flyout-target*="' + flyout.classList[0] + '"]');
          closeFlyout(flyout, panel, openTrigger);
        });
      }
    });
  }

  function openFlyout(flyout, panel, trigger) {
    // Set state
    flyout.setAttribute('data-flyout-state', 'open');
    panel.setAttribute('aria-hidden', 'false');
    
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'true');
      trigger.classList.add('is-active');
    }

    // Add body class to prevent scrolling
    document.body.classList.add('ct-flyout-open');
    
    // Focus management - focus first focusable element in panel
    setTimeout(function() {
      const focusTarget = flyout.getAttribute('data-flyout-focus');
      const firstFocusable = focusTarget 
        ? panel.querySelector(focusTarget)
        : panel.querySelector('a, button, input, [tabindex]:not([tabindex="-1"])');
      
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }, 100);
  }

  function closeFlyout(flyout, panel, trigger) {
    // Set state
    flyout.setAttribute('data-flyout-state', 'closed');
    panel.setAttribute('aria-hidden', 'true');
    
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
      trigger.classList.remove('is-active');
      
      // Return focus to trigger
      trigger.focus();
    }

    // Remove body class
    document.body.classList.remove('ct-flyout-open');
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFlyouts);
  } else {
    initializeFlyouts();
  }

  // Re-initialize on dynamic content (if using AJAX/etc)
  if (window.Drupal && window.Drupal.behaviors) {
    window.Drupal.behaviors.civicthemeFlyout = {
      attach: function(context) {
        initializeFlyouts();
      }
    };
  }

})();