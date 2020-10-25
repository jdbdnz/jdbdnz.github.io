/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      active: 'var(--color-text-active)',
      'active-preview': 'var(--color-text-active-preview)',
      'active-action': 'var(--color-text-active-action)',
      destructive: 'var(--color-text-destructive)',
      'destructive-preview': 'var(--color-text-destructive-preview)',
      'destructive-action': 'var(--color-text-destructive-action)',
      d0: 'var(--d0)',
      d1: 'var(--d1)',
      d2: 'var(--d2)',
      d3: 'var(--d3)',
      d4: 'var(--d4)',
      d5: 'var(--d5)',
      d6: 'var(--d6)',
      w: 'var(--w)',
      l0: 'var(--l0)',
      l1: 'var(--l1)',
      l2: 'var(--l2)',
      l3: 'var(--l3)',
      l4: 'var(--l4)',
      l5: 'var(--l5)',
      l6: 'var(--l6)',
      a1: 'var(--a1)',
      a2: 'var(--a2)',
      a3: 'var(--a3)',
      a4: 'var(--a4)',
      a5: 'var(--a5)',
      n1: 'var(--n1)',
      n2: 'var(--n2)',
      n3: 'var(--n3)',
      n4: 'var(--n4)',
      n5: 'var(--n5)',
    },
    placeholderColor: theme => ({
      ...theme('colors'),
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      tertiary: 'var(--color-text-tertiary)',
      quarternary: 'var(--color-text-quarternary)',
      disabled: 'var(--color-text-disabled)',
      inverse: 'var(--color-text-inverse)',
      'inverse-secondary': 'var(--color-text-inverse-secondary)',
      'inverse-tertiary': 'var(--color-text-inverse-tertiary)',
    }),
    textColor: theme => ({
      ...theme('colors'),
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      tertiary: 'var(--color-text-tertiary)',
      quarternary: 'var(--color-text-quarternary)',
      disabled: 'var(--color-text-disabled)',
      inverse: 'var(--color-text-inverse)',
      'inverse-secondary': 'var(--color-text-inverse-secondary)',
      'inverse-tertiary': 'var(--color-text-inverse-tertiary)',
    }),
    backgroundColor: theme => ({
      base: 'var(--color-background-base)',
      primary: 'var(--color-background-primary)',
      secondary: 'var(--color-background-secondary)',
      highlight: 'var(--color-background-highlight)',
      disabled: 'var(--color-background-disabled)',
      inverse: 'var(--color-background-inverse)',
      'inverse-secondary': 'var(--color-background-inverse-secondary)',
      'inverse-highlight': 'var(--color-background-inverse-highlight)',
      ...theme('colors'),
    }),
    borderColor: theme => ({
      primary: 'var(--color-border-primary)',
      secondary: 'var(--color-border-secondary)',
      ...theme('colors'),
    }),
    divideColor: theme => ({
      primary: 'var(--color-border-primary)',
      secondary: 'var(--color-border-secondary)',
      ...theme('colors'),
    }),
    extend: {
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, var(--shadow-opacity-sm))',
        default: '0 1px 3px 0 rgba(0, 0, 0, var(--shadow-opacity-1)), 0 1px 2px 0 rgba(0, 0, 0, var(--shadow-opacity-2))',
      },
      opacity: {
        '10': '0.1',
      },
      spacing: theme => ({
        '18': '4.5rem',
        '128': '32rem',
        'screen-sm': theme('screens').sm,
        'screen-md': theme('screens').md,
        'screen-lg': theme('screens').lg,
        'screen-xl': theme('screens').xl,
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: '0.625rem',
        '3.5xl': '2rem',
      },
      minWidth: theme => ({
        ...theme('spacing'),
      }),
      maxWidth: theme => ({
        ...theme('spacing'),
      }),
      minHeight: theme => ({
        ...theme('spacing'),
        screen: 'calc(var(--vh, 1vh) * 100)',
      }),
      maxHeight: theme => ({
        ...theme('spacing'),
        'screen-3/4': 'calc(var(--vh, 1vh) * 75)',
      }),
      transitionProperty: {
        flex: 'flex flex-basis flex-grow flex-shrink',
        size: 'width height',
      },
      borderRadius: {
        xl: '1rem',
      },
      lineHeight: {
        tighter: (7 / 6),
      },
      rotate: {
        '1/8': '45deg',
        '1/4': '90deg',
        '3/8': '135deg',
        '1/2': '180deg',
        '5/8': '225deg',
        '3/4': '270deg',
        '7/8': '315deg',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: [],
}
