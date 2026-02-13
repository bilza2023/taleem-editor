/**
 * Static Player Visual Override
 * Forces default images and background.
 * Mutates deck in place (runtime only).
 */
export function applyStaticPlayerDefaults(deck) {
    const DEFAULT_IMAGE = "image.webp";
    const DEFAULT_BG = "bg.webp";
  
    // background override
    if (deck.background) {
      deck.background.backgroundImage = DEFAULT_BG;
    }
  
    // slide-level overrides
    deck.deck.forEach(slide => {
      slide.data?.forEach(item => {
  
        // normal image items
        if (item.name === "image") {
          item.content = DEFAULT_IMAGE;
        }
  
        // eq side panel images
        if (Array.isArray(item.spItems)) {
          item.spItems.forEach(sp => {
            if (sp.type === "spImage") {
              sp.content = DEFAULT_IMAGE;
            }
          });
        }
  
      });
    });
  
    return deck;
  }
  