/**
 * Truncates a string to a specified maximum length and appends an ellipsis ('...') if the string exceeds that length.
 *
 * @param {string} text - The string to be truncated.
 * @param {number} [max=50] - The maximum length of the string. Defaults to 50 if not provided.
 * @returns {string} The truncated string with an ellipsis if the string length exceeds the specified maximum, or the original string if it is within the limit.
 *
 * @example
 * textSlicer('This is a very long sentence that needs to be truncated.', 20);
 * // Returns: 'This is a very long s...'
 *
 * textSlicer('Short text');
 * // Returns: 'Short text'
 */
export function textSlicer(text: string, max: number = 50) {
  if (text.length >= max) {
    return `${text.slice(0, max)}...`;
  }

  return text;
}