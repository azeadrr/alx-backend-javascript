#!/usr/bin/env node

/**
 * @a being the first arguement
 * @b being the second arguement
 */

function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
