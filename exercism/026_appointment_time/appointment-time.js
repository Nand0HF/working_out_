// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  let currentDate = new Date();
  if (now) currentDate = new Date(now);

  currentDate.setDate(currentDate.getDate() + days);
  return currentDate;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const currentDate = new Date(timestamp);
  return {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(), 
    date: currentDate.getDate(),
    hour: currentDate.getHours(),
    minute: currentDate.getMinutes(),
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const dateToUpdate = new Date(timestamp);

  if (options.year !== undefined) {
    dateToUpdate.setFullYear(options.year);
  }
  if (options.month !== undefined) {
    dateToUpdate.setMonth(options.month);
  }
  if (options.date !== undefined) {
    dateToUpdate.setDate(options.date);
  }
  if (options.hour !== undefined) {
    dateToUpdate.setHours(options.hour);
  }
  if (options.minute !== undefined) {
    dateToUpdate.setMinutes(options.minute);
  }

  return {
    year: dateToUpdate.getFullYear(),
    month: dateToUpdate.getMonth(),
    date: dateToUpdate.getDate(),
    hour: dateToUpdate.getHours(),
    minute: dateToUpdate.getMinutes(),
  };
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const dateA = new Date(timestampA);
  const dateB = new Date(timestampB);

  const differenceInMilliseconds = Math.abs(dateA.getTime() - dateB.getTime());
  const differenceInSeconds = differenceInMilliseconds / 1000;

  return Math.round(differenceInSeconds);
}

/**
 * Check if an appointment is now valid or not
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 *
 * @returns {boolean} true if the appointment is in the future, false otherwise
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const appointmentDate = new Date(appointmentTimestamp);
  const currentDate = new Date(currentTimestamp);

  return appointmentDate.getTime() > currentDate.getTime();
}
