const SCENES = [
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'Oh.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'... It glitched..' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'Yeah. It happens.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'LAIRUS???!' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'What is wrong with you????' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'What? It\'s how we fix things in DSS. Smack it on the side, the next morning, Domaine replaces it. Easy.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'D-Domaine? You.. leave it to Mr. Kroive to do the replacing?' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'…' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'.. hm.. I was sure.. I didn\'t touch much of the code this time.. how come.. it\'s.. always messed up..?' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'Well, I got to hand it to you. You just really went ahead and dabbled on it. Though I\'d admit this whole thing is pretty weird. Especially that assignment part.' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'Would be considered as an anomaly by Benjamin.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'Mister Horus might. I have seen him around the memos, they say.. he\'s a. See..r? How come he can\'t intervene?' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'Who knows?' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'Hey. That section\'s saying latin nonsense.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'Ob- I- I\'m… not sure? I don\'t remember touching that or anything.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'Well, I better try again next time.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'Say…. Why exactly does the simulation… Repeat so much like that? Unless the following is a depiction of… what you lot go through in this agency?' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'It\'s what happens when you are sent to the wrong place.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'Come again?' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'It\'s what happens when you subject agents to the horrors they can\'t really understand.' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'That\'s why we say Ante Mortem, Memento Mori. Remind ourselves of the risk of dancing with insanity.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'I see.. well that\'s-' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'This is not real is it?. This. This. This website is toying with our heads. This is not real. You\'re not real—' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'…ha?' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-dark.png', text:'…Th..THIS- THIS IS A PROGRAM TOO-! IT\'S – IT\'S THERE! CAN\'T YOU SEE?! THIS IS THE WEBSITE! IT\'S TOYING WITH ME- TOYING WITH YOU-!' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-dark.png', text:'No???? What- WHAT HAPPENED TO YOU??' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-dark.png', text:'IT\'S–' },
  { speaker:'Mauvry', sprite:'sprite-mauvry.png', cg:'bg-dark.png', text:'YOU—. YOU. YOU PUT ME INTO THIS! THIS IS YOUR FAULT-!' },
  { speaker:'Mauvry', sprite:'sprite-mauvry.png', cg:'bg-dark.png', text:'IT\'S YOU– WHY\'D YOU PUT ME HERE?! WHY\'D YOU PUT US HERE?! WE WERE NOTHING BUT NICE TO YOU- WHAT DID WE DO TO DESERVE THIS?! ARE WE SOME SORT OF A PLAYTHING TO YOU?!' },
  { speaker:'Mauvry', sprite:'sprite-mauvry.png', cg:'bg-dark.png', text:'KLARA\'S DEAD! DEAD! DEAD I TELL YOU, WILLOWS! DEAD, WILLOWS!' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'Miss Willows, your Dimension\'s Computer Unit is anomalous.' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'It\'s infected with some kind of anomaly that acts like a computer virus I assume. It infected Mauvry\'s DSS account and seemingly.. it had replicated the online DSS website.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'Is.. is….it really true then..? I– I– Thought- I thought she was only missing– the simulation only said–' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'Agent Klara Dela Flora is dead. She is a casualty of another anomalous entity back at Folier\'s Inn, the Point Zero of the Dimension you sent them to.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'.. y..you mean the kid.' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'I will not further disclose any other information about our agents and other classified events.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'Those. Are… my friends…..They. Told me things. Stories. About DSS.' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'Well, pardon me, Miss Willows. But from what you just said, you had proven that these agents had breached our Society\'s Protocols.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'.. They said something about you too– if you don\'t believe me– you can check the website again. All of the things they told me are there.' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'There is no need.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'So much so. For the Senior Agent they kept talking about.' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'You\'re the one who sent them to that inn.' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'I thought I was bringing them home.' },
  { speaker:'', sprite:'sprite-lairus.png', cg:'bg-dark.png', text:'' },
  { speaker:'Maria', sprite:'sprite-maria.png', cg:'bg-office.png', text:'I thought I was helping.' },
  { speaker:'Lairus', sprite:'sprite-lairus.png', cg:'bg-office.png', text:'Everyone thought the same once.' },
  { speaker:'', sprite:'', text:'Klara' },
  { speaker:'', sprite:'', cg:'dark.png', text:'021481' },
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
const elEndScreen= document.getElementById('vn-end-screen');
const elEndBtn   = document.getElementById('vn-end-btn');
const END_URL    = 'https://example.com';

elEndBtn.href = END_URL;

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
  if (current < SCENES.length-1) {
    current++; loadScene(current);
  } else {
    triggerEnd();
  }
}

function triggerEnd() {
  elEndScreen.classList.add('visible');
  elEndBtn.classList.add('visible');
}

loadScene(0);