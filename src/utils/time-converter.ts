/**
 * Converts an ISO timestamp to a human-readable relative time string
 * @param isoTime - ISO 8601 timestamp string
 * @returns Formatted relative time string (e.g., "2 hours ago")
 */
export function timeConverter(isoTime: string | Date): string {
  const currentTime = Date.now();
  const pastTime = new Date(isoTime).getTime();

  // Validate the date
  if (isNaN(pastTime)) {
    console.error("Invalid date provided to timeConverter:", isoTime);
    return "Invalid date";
  }

  const timeDifference = currentTime - pastTime;

  // Handle future dates
  if (timeDifference < 0) {
    return "Just now";
  }

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44); // More accurate average
  const years = Math.floor(days / 365.25); // Account for leap years

  // Use singular/plural correctly
  if (seconds < 10) {
    return "Just now";
  } else if (seconds < 60) {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (days < 7) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (weeks < 4) {
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (months < 12) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
}

/**
 * Alternative: Format with short notation (e.g., "2h ago", "3d ago")
 * @param isoTime - ISO 8601 timestamp string
 * @returns Short formatted relative time string
 */
export function timeConverterShort(isoTime: string | Date): string {
  const currentTime = Date.now();
  const pastTime = new Date(isoTime).getTime();

  if (isNaN(pastTime)) {
    return "N/A";
  }

  const timeDifference = currentTime - pastTime;

  if (timeDifference < 0) {
    return "now";
  }

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(days / 365.25);

  if (seconds < 10) {
    return "now";
  } else if (seconds < 60) {
    return `${seconds}s`;
  } else if (minutes < 60) {
    return `${minutes}m`;
  } else if (hours < 24) {
    return `${hours}h`;
  } else if (days < 7) {
    return `${days}d`;
  } else if (weeks < 4) {
    return `${weeks}w`;
  } else if (months < 12) {
    return `${months}mo`;
  } else {
    return `${years}y`;
  }
}

/**
 * Format timestamp to a specific date format
 * @param isoTime - ISO 8601 timestamp string
 * @param format - Format type
 * @returns Formatted date string
 */
export function formatDate(
  isoTime: string | Date,
  format: "short" | "medium" | "long" | "full" = "medium"
): string {
  const date = new Date(isoTime);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const optionsMap: Record<
    "short" | "medium" | "long" | "full",
    Intl.DateTimeFormatOptions
  > = {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  };

  const options: Intl.DateTimeFormatOptions = optionsMap[format];

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

/**
 * Get relative time with fallback to date if too old
 * @param isoTime - ISO 8601 timestamp string
 * @param cutoffDays - Days after which to show date instead of relative time
 * @returns Formatted string
 */
export function smartTimeConverter(
  isoTime: string | Date,
  cutoffDays: number = 30
): string {
  const currentTime = Date.now();
  const pastTime = new Date(isoTime).getTime();
  const daysDiff = Math.floor((currentTime - pastTime) / (1000 * 60 * 60 * 24));

  if (daysDiff > cutoffDays) {
    return formatDate(isoTime, "medium");
  }

  return timeConverter(isoTime);
}
