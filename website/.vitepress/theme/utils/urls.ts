// SPDX-License-Identifier: Apache-2.0

/**
 * Returns `url` (normalized) when it is an https URL whose host is exactly one
 * of `hosts`, and "" otherwise. Repository indexes are remote data: rendering
 * any other URL as a link could run script in this site's origin (e.g. a
 * `javascript:` URL) or send visitors to an unexpected download.
 */
export function allowedDownloadUrl(url: string | undefined, hosts: readonly string[]) {
  try {
    const parsed = new URL(url ?? '')

    return parsed.protocol === 'https:' && hosts.includes(parsed.hostname)
      ? parsed.href
      : ''
  }
  catch {
    return ''
  }
}
