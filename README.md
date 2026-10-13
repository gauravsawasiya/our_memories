# Our Memory Book ♥
A romantic, responsive digital memory book for 2018–2026.

## Run locally

You can simply open `index.html` in a browser.

For the best local experience, use VS Code + Live Server, or run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Add your photos

1. Create folders:
   - `photos/2018/`
   - `photos/2019/`
   - ...
   - `photos/2026/`

2. Put your photos inside the appropriate year.

3. Open `memories.js` and add each image:

```js
photos: [
  { src: "photos/2018/photo-01.jpg", caption: "Where it all began" },
  { src: "photos/2018/photo-02.jpg", caption: "That day ♥" }
]
```

There is no fixed photo limit.

## Publish on GitHub Pages

1. Create a GitHub repository, e.g. `our-memory-book`.
2. Upload all files and folders from this project.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save.
7. GitHub will give you a public website URL.

The website is completely static, so GitHub Pages can host it without a backend.

## Important before sharing

Replace the generated `assets/hero.jpg` with your preferred cover photo if you want the hero section to feature your own picture.

The next version can add:
- real photo lightbox/full-screen viewer
- smooth page transitions
- music with a play/pause button
- individual captions and dates
- handwritten notes between photos
- a more realistic page-turning memory-book effect
- password protection (requires a different approach than plain GitHub Pages)
