// Layered background scaler with per-layer controls
// - Each section has a .section-stage with --design-w/--design-h (max design size)
// - We compute a scale per section so it fits the section width up to that max size
// - Each .layer can be offset/rotated/scaled via CSS vars: --x, --y, --rot, --sx, --sy, --alpha, --z

(function(){
  function applyStageScale(sectionEl){
    const stage = sectionEl.querySelector('.section-stage');
    const cs = getComputedStyle(stage);
    const designW = parseFloat(cs.getPropertyValue('--design-w')) || 1200;
    const sectionW = sectionEl.getBoundingClientRect().width;
    const scale = Math.min(1, sectionW / designW);

    // put the scale on the section (cascades to stage + inner)
    sectionEl.style.setProperty('--stage-scale', String(scale));
  }

  function layoutAll(){
    document.querySelectorAll('.bg-section').forEach(applyStageScale);
  }

  // Basic nav buttons (optional)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-target]');
    if(!btn) return;
    const sel = btn.getAttribute('data-target');
    const el = document.querySelector(sel);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });

  // Observe resizes
  const ro = new ResizeObserver(() => layoutAll());
  ro.observe(document.documentElement);
  window.addEventListener('orientationchange', layoutAll, {passive:true});

  // Initial
  window.addEventListener('DOMContentLoaded', layoutAll);
  layoutAll();
})();




// --- Icons
lucide.createIcons();



(function(){
  function layoutSection(sec){
    const stage = sec.querySelector('.section-stage');
    const inner = sec.querySelector('.section-stage__inner');
    if(!stage || !inner) return;

    // scale by width (cap at 1)
    const designW = parseFloat(getComputedStyle(stage).getPropertyValue('--design-w')) || 1200;
    const secW = sec.getBoundingClientRect().width;
    const scale = Math.min(1, secW / designW);
    sec.style.setProperty('--stage-scale', String(scale));

    // measure cards height
    const cardsWrap = stage.querySelector('.cards-wrap');
    const cardsH = cardsWrap ? Math.ceil(cardsWrap.getBoundingClientRect().height) : 0;
    stage.style.setProperty('--cards-h', cardsH + 'px');
  }

  function layoutAll(){ document.querySelectorAll('.bg-section').forEach(layoutSection); }

  const ro = new ResizeObserver(layoutAll);
  ro.observe(document.documentElement);
  window.addEventListener('DOMContentLoaded', layoutAll);
  window.addEventListener('orientationchange', layoutAll, {passive:true});
})();





// --- Project Card Modal ---
(function () {
  const modal = document.getElementById('projectModal');
  const imgBox = document.getElementById('projectModalImage');
  const titleBox = document.getElementById('projectModalTitle');
  const descBox = document.getElementById('projectModalDesc');

  function getCssVar(el, name) {
    const v = getComputedStyle(el).getPropertyValue(name).trim();
    return v || '';
  }

  function openModalFromCard(card) {
    // Find pieces inside the card
    const stage = card.querySelector('.frame-card__stage');
    const heading = card.querySelector('strong');
    const para = card.querySelector('p');

    // Pull values
    const title = (heading?.textContent || 'Project').trim();
    const desc = (para?.textContent || '').trim();

    // The image comes from the CSS var --img in the stage
    // It looks like: url("media/1.png") — we can feed that straight to background-image
    const bgVar = getCssVar(stage, '--img') || "url('')";
    imgBox.style.backgroundImage = bgVar;

    // Fill content
    titleBox.textContent = title;
    descBox.textContent = desc;

    // Show modal
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');
    modal.setAttribute('aria-hidden', 'false');

    // Focus the close button for accessibility
    modal.querySelector('.modal__close').focus();
  }

  function closeModal() {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    modal.setAttribute('aria-hidden', 'true');
  }

  // Wire up ALL cards
  document.querySelectorAll('.frame-card').forEach(card => {
    // Click to open
    card.addEventListener('click', () => openModalFromCard(card));

    // Keyboard (Enter/Space)
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
    if (!card.hasAttribute('role')) card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModalFromCard(card);
      }
    });
  });

  // Close interactions
  modal.addEventListener('click', (e) => {
    if (e.target.matches('[data-close-modal], [data-close-modal] *')) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();






// --- Sticker Section ---
const stickers = Array.from(document.querySelectorAll('.sticker'));
const titleEl = document.getElementById('copyTitle');
const textEl = document.getElementById('copyText');


const defaultTitle = titleEl.textContent;
const defaultText = textEl.textContent;


function setCopyFrom(el){
const t = el.getAttribute('data-title') || el.alt || defaultTitle;
const p = el.getAttribute('data-text') || defaultText;
titleEl.textContent = t;
textEl.textContent = p;
}
function resetCopy(){
titleEl.textContent = defaultTitle;
textEl.textContent = defaultText;
}


// Pointer/keyboard interactions
stickers.forEach((img)=>{
img.addEventListener('pointerenter', ()=>{
img.classList.add('is-active');
setCopyFrom(img);
});
img.addEventListener('pointerleave', ()=>{
img.classList.remove('is-active');
resetCopy();
});
img.addEventListener('focus', ()=>{
img.classList.add('is-active');
setCopyFrom(img);
});
img.addEventListener('blur', ()=>{
img.classList.remove('is-active');
resetCopy();
});


// Tap support for touch screens
img.addEventListener('click', ()=>{
// Toggle active state; auto-reset after a delay
const already = img.classList.toggle('is-active');
if(already){ setCopyFrom(img); }
else { resetCopy(); }
window.clearTimeout(img._tapTimer);
img._tapTimer = window.setTimeout(()=>{
img.classList.remove('is-active');
resetCopy();
}, 2200);
});
});


// Reset text when leaving the whole section (desktop)
document.querySelector('.sticker-section').addEventListener('mouseleave', resetCopy);

// Handle sticker-me special hover image swap
const meSticker = document.querySelector('.sticker-me');
if (meSticker) {
  const originalSrc = meSticker.src;
  const hoverSrc = meSticker.dataset.hover;

  // Preload hover image
  if (hoverSrc) {
    const preload = new Image();
    preload.src = hoverSrc;
  }

  meSticker.addEventListener('pointerenter', () => {
    if (hoverSrc) meSticker.src = hoverSrc;
  });

  meSticker.addEventListener('pointerleave', () => {
    meSticker.src = originalSrc;
  });

  // also swap when focused (keyboard)
  meSticker.addEventListener('focus', () => {
    if (hoverSrc) meSticker.src = hoverSrc;
  });
  meSticker.addEventListener('blur', () => {
    meSticker.src = originalSrc;
  });
}