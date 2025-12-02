require('@testing-library/jest-dom');

const crypto = require('crypto');

Object.defineProperty(window, 'crypto', {
  value: {
    ...window.crypto,
    randomUUID: () => crypto.randomUUID(),
  },
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

