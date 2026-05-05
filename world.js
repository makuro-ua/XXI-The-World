const SCENES = [
  { speaker:'Lairus', sprite:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/400px-Gatto_europeo4.jpg', cg:'cg-background.png', text:"What? It's how we fix things back in DSS. You smack your desktop off the desk the night before, the next day you see Domaine setting a new one." },
  { speaker:'Lairus', sprite:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/400px-Gatto_europeo4.jpg', cg:'cg-background.png', text:"Don't overthink it. The paperwork fixes itself. Mostly. Sometimes it doesn't. That's what the coffee dispenser is for." },
  { speaker:'Lairus', sprite:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/400px-Gatto_europeo4.jpg', cg:'cg-background.png', text:"… Actually, don't touch the coffee dispenser." },
  { speaker:'Lairus', sprite:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/400px-Gatto_europeo4.jpg', cg:'cg-background.png', text:"Welcome to DSS, newbie. Try not to break anything on your first week. Emphasis on try." },
];

let current=0, typing=false, typeTimer=null, fullText='', charIdx=0;
const elTyped    = document.getElementById('vn-typed');
const elSpeaker  = document.getElementById('vn-speaker');
const elProgress = document.getElementById('vn-progress');
const elSprite   = document.getElementById('vn-sprite');
const elSpritePh = document.getElementById('vn-sprite-ph');
const elCg       = document.getElementById('vn-cg');
const elCgPh     = document.getElementById('vn-cg-ph');
const btnNext    = document.getElementById('btn-next');

function loadScene(idx) {
  const s = SCENES[idx];
  elSpeaker.textContent  = s.speaker;
  elProgress.textContent = (idx+1)+' / '+SCENES.length;
  btnNext.textContent    = idx === SCENES.length-1 ? 'End ▸' : 'Next ▸';
  elSprite.src = s.sprite;
  elSprite.style.display = 'block';
  elSprite.onerror = () => { elSprite.style.display='none'; elSpritePh.style.display='flex'; };
  elSpritePh.style.display = 'none';
  if (s.cg) {
    elCg.src = s.cg;
    elCg.style.display = 'block';
    elCg.onerror = () => { elCg.style.display='none'; elCgPh.style.display='flex'; };
    elCgPh.style.display = 'none';
  }
  startTyping(s.text);
}

function startTyping(text) {
  if (typeTimer) clearInterval(typeTimer);
  fullText = text; charIdx = 0; typing = true;
  elTyped.textContent = '';
  typeTimer = setInterval(() => {
    if (charIdx < fullText.length) {
      elTyped.textContent += fullText[charIdx++];
    } else {
      clearInterval(typeTimer); typeTimer=null; typing=false;
    }
  }, 22);
}

function skipOrAdvance() {
  if (typing) {
    clearInterval(typeTimer); typeTimer=null; typing=false;
    elTyped.textContent = fullText;
    return;
  }
  if (current < SCENES.length-1) { current++; loadScene(current); }
}

loadScene(0);