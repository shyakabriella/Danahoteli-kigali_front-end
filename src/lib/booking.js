/**
 * booking.js — centralised helper for direct-book.com URLs.
 *
 * Using this instead of hardcoding URLs with past dates in multiple files.
 * Check-in defaults to tomorrow, check-out to the day after.
 */

const PROPERTY = "https://direct-book.com/properties/danakigalihotel";

/**
 * Returns a full booking URL with today-relative dates.
 * @param {string} [path]  - Optional sub-path, e.g. "contact" or "policies"
 * @returns {string}
 */
export function getBookingUrl(path = "") {
  const checkIn = new Date();
  checkIn.setDate(checkIn.getDate() + 1);
  const checkOut = new Date();
  checkOut.setDate(checkOut.getDate() + 2);

  const fmt = (d) => d.toISOString().split("T")[0];

  const base = path ? `${PROPERTY}/${path}` : PROPERTY;
  return (
    `${base}` +
    `?locale=en` +
    `&items[0][adults]=2` +
    `&items[0][children]=0` +
    `&items[0][infants]=0` +
    `&currency=USD` +
    `&checkInDate=${fmt(checkIn)}` +
    `&checkOutDate=${fmt(checkOut)}` +
    `&trackPage=no`
  );
}

/** Root property URL (no date params) — safe for "Book Now" generic buttons. */
export const BOOKING_ROOT = PROPERTY;
