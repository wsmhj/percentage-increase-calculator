/**
 * percentage-increase-calculator
 * Calculate percentage increase, decrease, and percent change
 * Live demo: https://percentageincreasecalculator.app
 */

'use strict';

/**
 * Calculate percentage increase from old value to new value
 * @param {number} oldValue - The original value
 * @param {number} newValue - The new value
 * @returns {number} Percentage increase (positive) or decrease (negative)
 */
function percentageIncrease(oldValue, newValue) {
  if (oldValue === 0) throw new Error('Old value cannot be zero');
  return ((newValue - oldValue) / Math.abs(oldValue)) * 100;
}

/**
 * Calculate percentage decrease from old value to new value
 * @param {number} oldValue - The original value
 * @param {number} newValue - The new value
 * @returns {number} Percentage decrease (positive means decreased)
 */
function percentageDecrease(oldValue, newValue) {
  return -percentageIncrease(oldValue, newValue);
}

/**
 * Calculate percent change between two values
 * @param {number} from - Starting value
 * @param {number} to - Ending value
 * @returns {object} Result with percentChange, direction, and formatted string
 */
function percentChange(from, to) {
  const change = percentageIncrease(from, to);
  return {
    percentChange: change,
    direction: change >= 0 ? 'increase' : 'decrease',
    formatted: `${Math.abs(change).toFixed(2)}% ${change >= 0 ? 'increase' : 'decrease'}`
  };
}

/**
 * Calculate what percentage X is of Y
 * @param {number} part - The part value
 * @param {number} whole - The whole value
 * @returns {number} Percentage
 */
function percentOf(part, whole) {
  if (whole === 0) throw new Error('Whole value cannot be zero');
  return (part / whole) * 100;
}

/**
 * Calculate value after applying a percentage increase
 * @param {number} value - Original value
 * @param {number} percent - Percentage to increase by
 * @returns {number} New value after increase
 */
function applyPercentIncrease(value, percent) {
  return value * (1 + percent / 100);
}

/**
 * Calculate value after applying a percentage decrease
 * @param {number} value - Original value
 * @param {number} percent - Percentage to decrease by
 * @returns {number} New value after decrease
 */
function applyPercentDecrease(value, percent) {
  return value * (1 - percent / 100);
}

/**
 * Reverse calculate: find original value before percentage increase
 * @param {number} newValue - Value after increase
 * @param {number} percent - Percentage that was applied
 * @returns {number} Original value
 */
function reversePercentIncrease(newValue, percent) {
  return newValue / (1 + percent / 100);
}

module.exports = {
  percentageIncrease,
  percentageDecrease,
  percentChange,
  percentOf,
  applyPercentIncrease,
  applyPercentDecrease,
  reversePercentIncrease
};
