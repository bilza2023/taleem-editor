/**
 * Editor Mode Controller
 *
 * Single source of truth for editor behavior
 * based on authoring mode.
 *
 * Modes:
 * - browser : structural / timeless authoring
 * - player  : temporal / playback authoring
 */

export const MODES = {
  BROWSER: "browser",
  PLAYER: "player",
};

// editor opens in Player mode by default
let currentMode = MODES.PLAYER;

// ─────────────────────────────
// Mode state
// ─────────────────────────────

export function getMode() {
  return currentMode;
}

export function setMode(mode) {
  if (!Object.values(MODES).includes(mode)) {
    throw new Error(`Invalid editor mode: ${mode}`);
  }
  currentMode = mode;
}

// ─────────────────────────────
// Mode checks
// ─────────────────────────────

export function isPlayerMode() {
  return currentMode === MODES.PLAYER;
}

export function isBrowserMode() {
  return currentMode === MODES.BROWSER;
}

// ─────────────────────────────
// Rules
// ─────────────────────────────

export function isTimeVisible() {
  return isPlayerMode();
}

export function shouldNormalizeForPreview() {
  return isPlayerMode();
}

export function shouldNormalizeForDownload() {
  return isPlayerMode();
}

export function shouldValidateOnDownload() {
  return isPlayerMode();
}

export function shouldBlockDownloadOnErrors() {
  return isPlayerMode();
}

// ─────────────────────────────
// High-level helpers (THE MISSING EXPORTS)
// ─────────────────────────────

export function prepareDeckForPreview(deck, normalizer) {
  if (shouldNormalizeForPreview()) {
    return normalizer(deck);
  }
  return deck;
}

export function prepareDeckForDownload(deck, normalizer, validator) {
  let out = deck;

  if (shouldNormalizeForDownload()) {
    out = normalizer(out);
  }

  if (shouldValidateOnDownload()) {
    const result = validator(out);
    return {
      ok: result.ok,
      deck: out,
      errors: result.errors || []
    };
  }

  return { ok: true, deck: out, errors: [] };
}
