# MoViC: Real-Time Humanoid Whole-Body Control from Monocular Video Streams

Project page for MoViC. Static HTML (Bulma + Font Awesome, MathJax from a CDN), modeled on the
[LHBS](https://astrorix.github.io/LHBS/) and [MARG](https://github.com/Astrorix/MARG) pages.

## Preview locally

```bash
cd website_movic
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

Push this folder as the root of a repository. `.github/workflows/static.yml` deploys on every push to
`main` (set **Settings → Pages → Source** to *GitHub Actions*). `.nojekyll` keeps Pages from running Jekyll.

## Before going public

- `index.html`: replace **Anonymous Authors** with the author list, affiliations, and logos (template in the HTML comment).
- `index.html`: add `href` targets for the Paper / Video / Code buttons and remove the "(coming soon)" labels.
- `index.html`: set `og:url`, and un-comment the BibTeX section once the citation exists.

## Layout

```
index.html
static/css/index.css          page styles (Astrorix template, extended)
static/js/index.js            plays each demo video only while it is on screen
static/images/                figures exported from ../picture at web resolution
static/videos/real/*.mp4      real-robot demos, H.264 720p30, audio removed
static/videos/real/*.jpg      poster frames
static/videos/teaser.mp4      24.5 s highlight reel under the title (MARG-style teaser)
```

## Video sources

Encoded from `~/视频/onlineMimic/真机` with
`ffmpeg -an -vf "scale=1280:-2,fps=30,format=yuv420p" -c:v libx264 -preset slow -crf 26 -movflags +faststart`
(CRF 28 for the 139 s clip).

| Page file | Source | Shown as |
|---|---|---|
| `dance.mp4` | `3721228488.mov` | Bencaogangmu dance from live RGB |
| `mimic_close.mp4` | `311490948.mov` | Whole-body imitation of a live performer |
| `mimic_gym.mp4` | `file_v3_0014s_65801d39-….mov` | Dangerous dance from live RGB |
| `teleop_bimanual.mp4` | `file_v3_0014l_30efed54-….mov` | (a) Bi-manual pick, reorient, and place |
| `teleop_single_arm.mp4` | `file_v3_0014l_5f40b3f1-….mov` | (b) Single-arm pick, carry, and place (139 s) |

### Teaser (`static/videos/teaser.mp4`)

Four cropped segments joined with 0.5 s crossfades, each with a caption burned in (Noto Sans CJK Bold):

| Order | Source | Start / length | Caption |
|---|---|---|---|
| 1 | `3721228488.mov` | 2 s / 6 s | Dance imitation from live RGB video |
| 2 | `file_v3_0014s_65801d39-….mov` | 12 s / 6 s | Dangerous dance from live RGB |
| 3 | `file_v3_0014l_30efed54-….mov` | 7.5 s / 7 s | Bi-manual teleoperation |
| 4 | `file_v3_0014l_5f40b3f1-….mov` | 17 s / 7 s | Single-arm pick and carry |
