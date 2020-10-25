<style global>
  /*
    Configures colors for Tailwind styles.
    Light/dark mode follow `prefers-color-scheme`.
    May be overriden with `.light-mode` and `.dark-mode` classes.

    File Contents:
    1. Define colors variables in HSL.
    2. Assign color variables to variables describing usage
    3. Apply descriptive variables to tailwind config variables
  
  */
  :root {
    /* Dark */
    --d0: hsl(240, 10%, 8%);
    --d1: hsl(240, 10%, 12%);
    --d2: hsl(240, 10%, 16%);
    --d3: hsl(240, 10%, 24%);
    --d4: hsl(240, 10%, 32%);
    --d5: hsl(240, 10%, 40%);
    --d6: hsl(240, 10%, 50%);

    /* Light */
    --w: hsl(240, 10%, 100%);
    --l0: hsl(240, 10%, 60%);
    --l1: hsl(240, 10%, 70%);
    --l2: hsl(240, 10%, 80%);
    --l3: hsl(240, 10%, 88%);
    --l4: hsl(240, 10%, 91%);
    --l5: hsl(240, 10%, 94%);
    --l6: hsl(240, 10%, 97%);

    /* Positive Color */
    --p1: hsl(240, 60%, 60%);
    --p2: hsl(240, 60%, 65%);
    --p3: hsl(240, 60%, 70%);
    --p4: hsl(240, 60%, 75%);
    --p5: hsl(240, 60%, 80%);

    /* Negative Color */
    --n1: hsl(360, 60%, 60%);
    --n2: hsl(360, 60%, 65%);
    --n3: hsl(360, 60%, 70%);
    --n4: hsl(360, 60%, 75%);
    --n5: hsl(360, 60%, 80%);

    /* Theme Variables */
    --light-text-primary: var(--d2);
    --light-text-secondary: var(--d4);
    --light-text-tertiary: var(--d6);
    --light-text-quarternary: var(--l0);
    --light-text-disabled: var(--l2);
    --light-text-inverse: var(--w);
    --light-text-inverse-secondary: var(--l6);
    --light-text-inverse-tertiary: var(--l4);
    --light-text-active: var(--p1);
    --light-text-active-preview: var(--p2);
    --light-text-active-action: var(--p3);
    --light-text-destructive: var(--n1);
    --light-text-destructive-preview: var(--n2);
    --light-text-destructive-action: var(--n3);

    --light-background-base: var(--l4);
    --light-background-primary: var(--l6);
    --light-background-secondary: var(--l5);
    --light-background-highlight: var(--w);
    --light-background-disabled: var(--l2);
    --light-background-inverse: var(--d2);
    --light-background-inverse-secondary: var(--d1);
    --light-background-inverse-highlight: var(--d0);

    --light-border-primary: var(--l3);
    --light-border-secondary: var(--l4);

    --light-shadow-opacity-sm: 0.05;
    --light-shadow-opacity-1: 0.1;
    --light-shadow-opacity-2: 0.06;

    --dark-text-primary: var(--l6);
    --dark-text-secondary: var(--l4);
    --dark-text-tertiary: var(--l3);
    --dark-text-quarternary: var(--l2);
    --dark-text-disabled: var(--l0);
    --dark-text-inverse: var(--d0);
    --dark-text-inverse-secondary: var(--d2);
    --dark-text-inverse-tertiary: var(--d4);
    --dark-text-active: var(--p3);
    --dark-text-active-preview: var(--p4);
    --dark-text-active-action: var(--p5);
    --dark-text-destructive: var(--n3);
    --dark-text-destructive-preview: var(--n4);
    --dark-text-destructive-action: var(--n5);

    --dark-background-base: var(--d0);
    --dark-background-primary: var(--d2);
    --dark-background-secondary: var(--d1);
    --dark-background-highlight: var(--d3);
    --dark-background-disabled: var(--l0);
    --dark-background-inverse: var(--l6);
    --dark-background-inverse-secondary: var(--l5);
    --dark-background-inverse-highlight: var(--w);
    --dark-border-primary: var(--d4);
    --dark-border-secondary: var(--d0);

    --dark-shadow-opacity-sm: 0.15;
    --dark-shadow-opacity-1: 0.3;
    --dark-shadow-opacity-2: 0.18;
  }

  html {
    @apply bg-base;
    @apply text-primary;
  }

  @media (prefers-color-scheme: light) {
    .not-light {
      display: none;
    }

    .light-theme .not-light {
      display: none;
    }

    .dark-theme .not-dark {
      display: none;
    }

    .light-text-inverse {
      @apply text-inverse;
    }
  }

  @media (prefers-color-scheme: dark) {
    .not-dark {
      display: none;
    }

    .dark-theme .not-dark {
      display: none;
    }

    .light-theme .not-light {
      display: none;
    }
  }

  .dark-theme .not-light {
    display: flex;
  }

  .light-theme .not-dark {
    display: flex;
  }

  .light-theme .light-text-inverse {
    @apply text-inverse;
  }

  .dark-theme .light-text-inverse {
    color: unset;
  }

  /*
 * Everything below this comments applies the above variables to dark and light modes.
 * So any changes should, in theory, be made above this line.
 */

  @media (prefers-color-scheme: light) {
    :root {
      --logo: var(--logo-light);
      --color-text-primary: var(--light-text-primary);
      --color-text-secondary: var(--light-text-secondary);
      --color-text-tertiary: var(--light-text-tertiary);
      --color-text-quarternary: var(--light-text-quarternary);
      --color-text-disabled: var(--light-text-disabled);
      --color-text-inverse: var(--light-text-inverse);
      --color-text-inverse-secondary: var(--light-text-inverse);
      --color-text-inverse-tertiary: var(--light-text-inverse);
      --color-text-active: var(--light-text-active);
      --color-text-active-preview: var(--light-text-active-preview);
      --color-text-active-action: var(--light-text-active-action);
      --color-text-destructive: var(--light-text-destructive);
      --color-text-destructive-preview: var(--light-text-destructive-preview);
      --color-text-destructive-action: var(--light-text-destructive-action);

      --color-background-base: var(--light-background-base);
      --color-background-primary: var(--light-background-primary);
      --color-background-secondary: var(--light-background-secondary);
      --color-background-highlight: var(--light-background-highlight);
      --color-background-disabled: var(--light-background-disabled);
      --color-background-inverse: var(--light-background-inverse);
      --color-background-inverse-secondary: var(--light-background-inverse-secondary);
      --color-background-inverse-highlight: var(--light-background-inverse-highlight);

      --color-border-primary: var(--light-border-primary);
      --color-border-secondary: var(--light-border-secondary);

      --shadow-opacity-sm: var(--light-shadow-opacity-sm);
      --shadow-opacity-1: var(--light-shadow-opacity-1);
      --shadow-opacity-2: var(--light-shadow-opacity-2);
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --logo: var(--logo-dark);
      --color-text-primary: var(--dark-text-primary);
      --color-text-secondary: var(--dark-text-secondary);
      --color-text-tertiary: var(--dark-text-tertiary);
      --color-text-quarternary: var(--dark-text-quarternary);
      --color-text-disabled: var(--dark-text-disabled);
      --color-text-inverse: var(--dark-text-inverse);
      --color-text-inverse-secondary: var(--dark-text-inverse);
      --color-text-inverse-tertiary: var(--dark-text-inverse);
      --color-text-active: var(--dark-text-active);
      --color-text-active-preview: var(--dark-text-active-preview);
      --color-text-active-action: var(--dark-text-active-action);
      --color-text-destructive: var(--dark-text-destructive);
      --color-text-destructive-preview: var(--dark-text-destructive-preview);
      --color-text-destructive-action: var(--dark-text-destructive-action);
      --color-background-base: var(--dark-background-base);
      --color-background-primary: var(--dark-background-primary);
      --color-background-secondary: var(--dark-background-secondary);
      --color-background-highlight: var(--dark-background-highlight);
      --color-background-disabled: var(--dark-background-disabled);
      --color-background-inverse: var(--dark-background-inverse);
      --color-background-inverse-secondary: var(--dark-background-inverse-secondary);
      --color-background-inverse-highlight: var(--dark-background-inverse-highlight);

      --color-border-primary: var(--dark-border-primary);
      --color-border-secondary: var(--dark-border-secondary);

      --shadow-opacity-sm: var(--dark-shadow-opacity-sm);
      --shadow-opacity-1: var(--dark-shadow-opacity-1);
      --shadow-opacity-2: var(--dark-shadow-opacity-2);
    }
  }

  .light-theme {
    --logo: var(--logo-light);
    --color-text-primary: var(--light-text-primary);
    --color-text-secondary: var(--light-text-secondary);
    --color-text-tertiary: var(--light-text-tertiary);
    --color-text-quarternary: var(--light-text-quarternary);
    --color-text-disabled: var(--light-text-disabled);
    --color-text-inverse: var(--light-text-inverse);
    --color-text-inverse-secondary: var(--light-text-inverse);
    --color-text-inverse-tertiary: var(--light-text-inverse);
    --color-text-active: var(--light-text-active);
    --color-text-active-preview: var(--light-text-active-preview);
    --color-text-active-action: var(--light-text-active-action);
    --color-text-destructive: var(--light-text-destructive);
    --color-text-destructive-preview: var(--light-text-destructive-preview);
    --color-text-destructive-action: var(--light-text-destructive-action);

    --color-background-base: var(--light-background-base);
    --color-background-primary: var(--light-background-primary);
    --color-background-secondary: var(--light-background-secondary);
    --color-background-highlight: var(--light-background-highlight);
    --color-background-disabled: var(--light-background-disabled);
    --color-background-inverse: var(--light-background-inverse);
    --color-background-inverse-secondary: var(--light-background-inverse-secondary);
    --color-background-inverse-highlight: var(--light-background-inverse-highlight);

    --color-border-primary: var(--light-border-primary);
    --color-border-secondary: var(--light-border-secondary);

    --shadow-opacity-sm: var(--light-shadow-opacity-sm);
    --shadow-opacity-1: var(--light-shadow-opacity-1);
    --shadow-opacity-2: var(--light-shadow-opacity-2);
  }

  .dark-theme {
    --logo: var(--logo-dark);
    --color-text-primary: var(--dark-text-primary);
    --color-text-secondary: var(--dark-text-secondary);
    --color-text-tertiary: var(--dark-text-tertiary);
    --color-text-quarternary: var(--dark-text-quarternary);
    --color-text-disabled: var(--dark-text-disabled);
    --color-text-inverse: var(--dark-text-inverse);
    --color-text-inverse-secondary: var(--dark-text-inverse);
    --color-text-inverse-tertiary: var(--dark-text-inverse);
    --color-text-active: var(--dark-text-active);
    --color-text-active-preview: var(--dark-text-active-preview);
    --color-text-active-action: var(--dark-text-active-action);
    --color-text-destructive: var(--dark-text-destructive);
    --color-text-destructive-preview: var(--dark-text-destructive-preview);
    --color-text-destructive-action: var(--dark-text-destructive-action);

    --color-background-base: var(--dark-background-base);
    --color-background-primary: var(--dark-background-primary);
    --color-background-secondary: var(--dark-background-secondary);
    --color-background-highlight: var(--dark-background-highlight);
    --color-background-disabled: var(--dark-background-disabled);
    --color-background-inverse: var(--dark-background-inverse);
    --color-background-inverse-secondary: var(--dark-background-inverse-secondary);
    --color-background-inverse-highlight: var(--dark-background-inverse-highlight);

    --color-border-primary: var(--dark-border-primary);
    --color-border-secondary: var(--dark-border-secondary);

    --shadow-opacity-sm: var(--dark-shadow-opacity-sm);
    --shadow-opacity-1: var(--dark-shadow-opacity-1);
    --shadow-opacity-2: var(--dark-shadow-opacity-2);
  }
</style>
