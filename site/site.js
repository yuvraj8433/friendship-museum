// EDIT ONLY THIS BLOCK. Every policy page reads these values.
window.SITE = {
  BRAND:   'OurMoments love',         // your brand / business name
  OWNER:   'Yuvraj Singh',                // legal name of the person or business that runs the site
  EMAIL:   'yuvrajsingh8433075079.com',         // support email shown to customers
  PHONE:   '+91 8433075079',               // support phone number
  ADDRESS: 'Greater Noida, Uttar Pradesh, India',       // business address (Razorpay may ask for this)
  PRICE:   '99',                            // price in rupees, same as PRICE_INR in the main page
  SITE_URL:'https://friendshiplove.netlify.app/', // your live site address
  UPDATED: '13 October 2026'
};
document.querySelectorAll('[data-s]').forEach(function (el) { el.textContent = SITE[el.dataset.s]; });
document.querySelectorAll('[data-mail]').forEach(function (el) { el.href = 'mailto:' + SITE.EMAIL; el.textContent = SITE.EMAIL; });
document.title = document.title.replace('{BRAND}', SITE.BRAND);
