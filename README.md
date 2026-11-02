# The Bread Box — website

A static HTML + Bootstrap website for The Bread Box bakery café, built on the free
"Tasty" template by FreeHTML5.co. It has been rebranded and recoloured to match the logo.

## Pages
| File | What it is |
|---|---|
| `index.html` | Home: hero, about, today's favourites, reviews, brunch slider, events, booking banner |
| `menu.html` | Full menu (Breads / Pastries / Coffee) with prices |
| `gallery.html` | Photo gallery (click to zoom) |
| `reservation.html` | Table booking form (sends an email) |
| `about.html` | Story timeline |
| `contact.html` | Contact / query form (sends an email) |

## 1. Turn on email for the forms (Formspree, free)
1. Sign up at https://formspree.io with the email address where you want messages to arrive.
2. Create a new form and copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Open `js/forms.js` and paste the endpoint into both lines:
   ```js
   var BREADBOX_FORMS = {
     contact:     "https://formspree.io/f/abcdwxyz",
     reservation: "https://formspree.io/f/abcdwxyz"
   };
   ```
4. Upload the site, send a test message, and click the confirmation link Formspree emails you (first time only).

The free plan allows 50 submissions a month. Each email's subject line says whether it came
from the contact form or the reservation form. A hidden "honeypot" field filters out basic spam bots.

## 2. Things to replace with your real details
- **Opening hours.** Address (Vajra, Gangtok, Sikkim), phone (+91-7018680117) and email
  (thebreadbox6@gmail.com) are filled in. Hours are still placeholders: search for `7:30 am` in the pages.
- **Photos.** The food photos are the template's demo images (from Unsplash). Replace them with
  your own bakery photos using the **same file names** in `images/` and they will appear everywhere:
  - `hero_1.jpeg`: big banner at the top of every page, plus the About photo (landscape, ~1920×1080)
  - `gallery_1.jpeg` … `gallery_9.jpeg`: menu cards, slider, events and gallery
  - `person_1.jpg`: photo next to the customer review
- **Customer review.** Swap the placeholder quote for a real review from a customer.
- **Menu items and prices.** Edit them in `menu.html` and the "Today's Favourites" cards.
- **Social links.** Set the Instagram / Facebook / Twitter `href="#"` links in the footer.

## 3. Colours and fonts
All brand styling lives in `css/breadbox.css` (loaded after the template's `style.css`).
Change the palette in one place at the top:

```css
--cream: #FDF5EA;  /* page background (matches the logo paper) */
--paper: #F6EADB;  /* alternate section background */
--crust: #4A2511;  /* dark brown: headings, footer */
--toast: #8B5A2B;  /* accent brown: links, buttons */
--honey: #C9965A;  /* golden highlights */
```

Fonts: Cormorant Garamond (serif headings/body) and Josefin Sans (small spaced capitals,
like "FRESHLY BAKED. MADE WITH LOVE." on the logo), both from Google Fonts.

## 4. Publishing
It's a plain static site, so you can upload the whole folder to any host: Netlify (drag and drop),
GitHub Pages, Vercel, or your cPanel hosting's `public_html`.

## Credits
Template: "Tasty" by FreeHTML5.co (keep the small credit in the footer, as the free licence requires).

## Link preview (WhatsApp, Facebook, X)
When the site link is shared, apps show `images/og-image.jpg` (1200×630) with the page title.
The tags at the top of each page use the full address `https://nabus.github.io/TheBreadBox/`.
If you move to a custom domain, replace that address in every page's `<head>`.
