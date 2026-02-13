<script>
</script>

<style>
  .container {
    max-width: 760px;
    margin: 0 auto;
    padding: 60px 20px 80px 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height: 1.7;
    color: #222;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1.2rem;
    font-size: 1rem;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.6rem;
  }

  blockquote {
    margin: 2rem 0;
    padding-left: 1.2rem;
    border-left: 4px solid #ccc;
    font-style: italic;
    color: #555;
  }

  a {
    color: #1a73e8;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 640px) {
    .container {
      padding: 40px 16px 60px 16px;
    }
  }
</style>

<slot />
