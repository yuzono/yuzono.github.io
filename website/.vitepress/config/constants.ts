// SPDX-License-Identifier: Apache-2.0

export const GITHUB_EXTENSION_REPO = 'yuzono/cursed-manga-repo';
export const GITHUB_EXTENSION_BASE = `https://raw.githubusercontent.com/${GITHUB_EXTENSION_REPO}/repo`;
export const GITHUB_EXTENSION_JSON = `${GITHUB_EXTENSION_BASE}/index.json`;
export const GITHUB_EXTENSION_PB = `https://github.com/${GITHUB_EXTENSION_REPO}/raw/repo/index.pb`;
export const JSDELIVR_EXTENSION_PB = `https://cdn.jsdelivr.net/gh/${GITHUB_EXTENSION_REPO}@repo/index.pb`

export const MIHON_REPO = 'mihonapp/mihon';
export const MIHON_RELEASES_API = `https://api.github.com/repos/${MIHON_REPO}/releases/latest`;
// Fallback shown when the latest release can't be fetched (offline, API rate limit, etc.).
export const MIHON_MIN_VERSION = '0.20.1';

export const GITHUB_EXTENSION_REPO_ANI = 'yuzono/anime-repo';
export const GITHUB_EXTENSION_BASE_ANI = `https://raw.githubusercontent.com/${GITHUB_EXTENSION_REPO_ANI}/repo`;
export const GITHUB_EXTENSION_JSON_ANI = `${GITHUB_EXTENSION_BASE_ANI}/index.json`;
export const GITHUB_EXTENSION_MIN_JSON_ANI = `${GITHUB_EXTENSION_BASE_ANI}/index.min.json`;
export const JSDELIVR_EXTENSION_MIN_JSON_ANI = `https://cdn.jsdelivr.net/gh/${GITHUB_EXTENSION_REPO_ANI}@repo/index.min.json`
