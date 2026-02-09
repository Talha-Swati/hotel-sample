/**
 * Export all utility functions from a single entry point
 */

export * from './helpers';
export * from './structuredData';

// Re-export defaults
import helpers from './helpers';
import * as structuredData from './structuredData';

export default {
  ...helpers,
  ...structuredData,
};
