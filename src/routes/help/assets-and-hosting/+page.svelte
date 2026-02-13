<script>
</script>

<svelte:head>
  <title>Using Images and Audio</title>
</svelte:head>

<div class="container">
  <h1>Using Images and Audio</h1>

  <p>
    Taleem presentations can include images and audio.
  </p>

  <p>
    These assets are referenced by file name
    inside the presentation file.
  </p>

  <h2>Images</h2>

  <p>
    When adding an image to a slide,
    you provide the image file name.
  </p>

  <p>
    The player resolves the full path
    based on the configured asset location.
  </p>

  <p>
    If no external asset location is provided,
    default images can be used.
  </p>

  <h2>Audio</h2>

  <p>
    Audio can be attached to presentations
    as a separate field.
  </p>

  <p>
    During editing, local audio files may be used.
  </p>

  <p>
    During playback, hosted audio files
    can be resolved through the configured asset path.
  </p>

  <h2>Asset Base Path</h2>

  <p>
    The editor allows configuration of an asset base URL.
  </p>

  <p>
    This tells the player where to load images
    and audio from during playback.
  </p>

  <p>
    This makes it possible to host assets
    on services such as GitHub Pages
    or other static hosting platforms.
  </p>

  <h2>Why This Matters</h2>

  <p>
    Assets are separated from the presentation structure.
  </p>

  <p>
    The presentation file remains clean and portable.
  </p>

  <p>
    Only the asset location changes,
    not the slide content itself.
  </p>

  <h2>Best Practice</h2>

  <p>
    Keep your presentation file and asset files organized
    in a consistent folder structure.
  </p>

  <p>
    This ensures reliable playback
    across environments.
  </p>

</div>
