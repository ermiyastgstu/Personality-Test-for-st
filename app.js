/* ============================================================
   Combined app.js — Questions + Descriptions + Quiz logic
   Single-file SPA (no bundler)
   ============================================================ */

/* -------------------------
   1) QUESTIONS (50)
   Each item includes id, text, example
   ------------------------- */
const QUESTIONS = [
  { id: 1, text: "I feel energized after spending time around many people.", example: "After school assemblies or group projects, I feel more awake instead of tired." },
  { id: 2, text: "I prefer quiet time alone to think or recharge.", example: "I like being alone in the library during breaks." },
  { id: 3, text: "I speak my thoughts out loud as I figure things out.", example: "I talk while solving math problems or brainstorming ideas." },
  { id: 4, text: "I observe more than I talk in group situations.", example: "During class discussions, I listen and think before raising my hand." },
  { id: 5, text: "I easily start conversations with new classmates.", example: "On the first day of school, I introduce myself to strangers." },

  { id: 6, text: "I focus on concrete facts and details rather than theories.", example: "In science class, I remember formulas more easily than abstract concepts." },
  { id: 7, text: "I enjoy imagining possibilities and future outcomes.", example: "During group work, I suggest creative or unusual project ideas." },
  { id: 8, text: "I prefer clear, step-by-step instructions.", example: "I want the teacher to explain each step of a math method." },
  { id: 9, text: "I naturally notice patterns or hidden meanings.", example: "In literature class, I point out symbolism others didn’t see." },
  { id: 10, text: "I trust proven methods more than experimental ones.", example: "I stick to the study habits that already worked for me." },

  { id: 11, text: "I decide based on logic rather than personal feelings.", example: "When choosing teammates, I pick the most skilled, not my friends." },
  { id: 12, text: "I think about how my decisions affect others emotionally.", example: "I avoid saying something in class that might embarrass someone." },
  { id: 13, text: "I value fairness more than maintaining harmony.", example: "If someone breaks rules in group work, I call it out even if they get upset." },
  { id: 14, text: "I avoid conflict and try to keep everyone comfortable.", example: "If group members fight, I mediate instead of taking sides." },
  { id: 15, text: "I stay emotionally neutral during stressful tasks.", example: "I keep calm during exams even when others panic." },

  { id: 16, text: "I like plans, schedules, and knowing what happens next.", example: "I keep a planner for homework and deadlines." },
  { id: 17, text: "I prefer flexibility and changing plans as needed.", example: "I don’t mind switching project tasks last minute." },
  { id: 18, text: "I finish assignments early to avoid stress.", example: "I complete essays days before the due date." },
  { id: 19, text: "I work well under last-minute pressure.", example: "I often do homework the night before but still perform fine." },
  { id: 20, text: "I organize my school materials carefully.", example: "My notebooks and folders stay neat and labeled." },

  { id: 21, text: "I enjoy learning new ideas, subjects, and concepts.", example: "I research topics not required for class just out of curiosity." },
  { id: 22, text: "I enjoy creative expression such as writing, drawing, or designing.", example: "I embellish class presentations with visuals or stories." },
  { id: 23, text: "I dislike repetitive or routine tasks.", example: "I get bored when assignments feel too predictable." },
  { id: 24, text: "I enjoy solving problems in unique or unconventional ways.", example: "I propose alternative or new solutions instead of following the usual method." },
  { id: 25, text: "I think deeply about philosophical or abstract questions.", example: "I wonder about purpose, morality, or the universe outside class lessons." },

  { id: 26, text: "I try to understand people's feelings before responding.", example: "If a classmate is upset, I ask what happened before giving advice." },
  { id: 27, text: "I avoid hurting others’ feelings, even when giving honest feedback.", example: "I phrase corrections gently when reviewing someone’s project." },
  { id: 28, text: "I try to keep peace in group work.", example: "I compromise when team members disagree." },
  { id: 29, text: "I often take on extra tasks to help others.", example: "I finish teammates’ parts when they fall behind." },
  { id: 30, text: "I find it hard to say 'no' when someone asks for help.", example: "Even when busy, I tutor classmates who request help." },

  { id: 31, text: "I worry often about school performance or social situations.", example: "I stress days before presentations." },
  { id: 32, text: "I become anxious in uncertain or unfamiliar situations.", example: "I feel tense before group activities with strangers." },
  { id: 33, text: "I get upset easily when criticized.", example: "Teacher feedback feels personal even when constructive." },
  { id: 34, text: "I replay mistakes in my mind repeatedly.", example: "I keep thinking about a wrong test answer for hours." },
  { id: 35, text: "Stress makes it hard for me to focus or work effectively.", example: "I freeze/unable to work during exams when overwhelmed." },

  { id: 36, text: "I feel a strong need to be correct, responsible, and ethical.", example: "I correct classmates who ignore rules in school tasks." },
  { id: 37, text: "I want to feel needed and appreciated by others.", example: "I feel happiest when classmates thank me for helping." },
  { id: 38, text: "I work hard to appear successful and competent.", example: "I care about grades because they reflect my ability." },
  { id: 39, text: "I value being unique and expressing my individuality.", example: "My projects or art look distinct from others." },
  { id: 40, text: "I enjoy learning deeply and want personal space for thinking.", example: "I prefer studying alone and researching topics independently." },

  { id: 41, text: "I constantly prepare for potential problems.", example: "I double-check assignments and schedules excessively." },
  { id: 42, text: "I seek fun, variety, and new experiences to avoid boredom.", example: "I sign up for many clubs or activities." },
  { id: 43, text: "I assert myself strongly and dislike being controlled.", example: "I stand up to unfair rules or bossy classmates." },
  { id: 44, text: "I avoid conflict even when I have my own opinion.", example: "I stay silent when group decisions go against what I prefer." },
  { id: 45, text: "I prefer working independently rather than in groups.", example: "I choose solo projects whenever allowed." },

  { id: 46, text: "I adjust my behavior depending on who I’m with.", example: "I act differently with teachers vs friends." },
  { id: 47, text: "I need clear reasons behind rules before accepting them.", example: "I ask 'why?' when a school policy seems illogical." },
  { id: 48, text: "I quickly notice when something feels unfair or inconsistent.", example: "I point out if grading seems unequal." },
  { id: 49, text: "I shut down emotionally when overwhelmed.", example: "During stressful tests, I stop thinking clearly and lose motivation." },
  { id: 50, text: "I become motivated when I see progress or get encouragement.", example: "I work harder after a teacher praises my improvement." }
];

/* -------------------------
   2) MBTI DESCRIPTIONS (16 types)
   Each entry: core, strengths[], weaknesses[], field, departments[], careers[]
   ------------------------- */
const MBTI_DESCRIPTIONS = {
  ISTJ: {
    core: "Practical, responsible, detail-oriented.",
    strengths: ["Reliable","Organized","Dutiful","Thorough","Dependable"],
    weaknesses: ["Inflexible","Reserved","Overly critical","Resistance to change","Work-focused"],
    field: "Applied / Natural & Social",
    departments: ["Accounting","Law","Computer Science","Civil Engineering","History"],
    careers: ["Auditor","Judge","Systems Analyst","Civil Engineer","Project Manager"]
  },
  ISFJ: {
    core: "Supportive, loyal, meticulous.",
    strengths: ["Kind","Dutiful","Observant","Reliable","Patient"],
    weaknesses: ["Overcommitted","Reluctant to change","Self-sacrificing","Shy","Holds grudges quietly"],
    field: "Social",
    departments: ["Nursing","Education","Psychology","Social Work","Healthcare Admin"],
    careers: ["Nurse","Teacher","Social Worker","HR Specialist","Care Coordinator"]
  },
  INFJ: {
    core: "Insightful, idealistic, values-driven.",
    strengths: ["Visionary","Empathetic","Determined","Insightful","Principled"],
    weaknesses: ["Private","Perfectionist","Prone to burnout","Sensitive","Hard to get to know"],
    field: "Social/Humanities",
    departments: ["Psychology","Sociology","Philosophy","Counseling","Literature"],
    careers: ["Counselor","Writer","Therapist","Advocate","Researcher"]
  },
  INTJ: {
    core: "Strategic, conceptual, independent.",
    strengths: ["Analytical","Strategic","Independent","Long-term planner","Objective"],
    weaknesses: ["Aloof","Impatient","Insensitive","Perfectionist","Overly theoretical"],
    field: "Natural/Technical",
    departments: ["Computer Science","Mathematics","Engineering","Physics","Economics"],
    careers: ["Data Scientist","Software Architect","Research Scientist","Engineer","Strategic Planner"]
  },
  ISTP: {
    core: "Practical problem-solver, hands-on.",
    strengths: ["Adaptive","Observant","Calm under pressure","Analytical","Resourceful"],
    weaknesses: ["Insensitive","Impulsive","Private","Risk-prone","Easily bored"],
    field: "Natural/Applied",
    departments: ["Mechanical Engineering","Physics","Robotics","Aviation","Forensics"],
    careers: ["Technician","Pilot","Mechanic","Engineer","Emergency Responder"]
  },
  ISFP: {
    core: "Sensitive, creative, flexible.",
    strengths: ["Artistic","Warm","Observant","Adaptable","Gentle"],
    weaknesses: ["Avoids conflict","Private","Easily stressed","Indecisive","Procrastinates"],
    field: "Arts / Social",
    departments: ["Fine Arts","Design","Music","Photography","Therapy"],
    careers: ["Artist","Designer","Photographer","Therapist","Craftsperson"]
  },
  INFP: {
    core: "Idealistic, reflective, values-driven.",
    strengths: ["Empathetic","Creative","Loyal","Open-minded","Imaginative"],
    weaknesses: ["Overly idealistic","Impractical","Private","Easily hurt","Indecisive"],
    field: "Social / Humanities",
    departments: ["Literature","Psychology","Creative Writing","Philosophy","Counseling"],
    careers: ["Writer","Counselor","Editor","NGO Worker","Therapist"]
  },
  INTP: {
    core: "Analytical, inventive, theoretical.",
    strengths: ["Curious","Inventive","Logical","Independent","Objective"],
    weaknesses: ["Absent-minded","Detached","Indecisive","Insensitive","Perfectionist"],
    field: "Natural/Research",
    departments: ["Computer Science","Philosophy","Mathematics","Physics","Cognitive Science"],
    careers: ["Researcher","Programmer","Data Analyst","Philosopher","Systems Designer"]
  },
  ESTP: {
    core: "Energetic, action-oriented, pragmatic.",
    strengths: ["Bold","Direct","Practical","Resourceful","Energetic"],
    weaknesses: ["Impulsive","Insensitive","Risk-prone","Short-term focus","Restless"],
    field: "Applied/Business",
    departments: ["Business Admin","Sports Science","Marketing","Hospitality","Engineering"],
    careers: ["Sales","Entrepreneur","Athlete","Event Manager","Field Technician"]
  },
  ESFP: {
    core: "Playful, spontaneous, social.",
    strengths: ["Outgoing","Enthusiastic","Practical","Observant","Generous"],
    weaknesses: ["Easily distracted","Impulsive","Dislikes long-term planning","Conflict-avoidant","Shallow at times"],
    field: "Social / Arts",
    departments: ["Performing Arts","Media Studies","Tourism","Design","Hospitality"],
    careers: ["Performer","Host","Event Planner","Customer Service","Sales"]
  },
  ENFP: {
    core: "Enthusiastic, creative, people-centered.",
    strengths: ["Energetic","Charismatic","Innovative","Empathetic","Curious"],
    weaknesses: ["Easily distracted","Overcommitted","Emotional","Dislikes routine","Sensitive to criticism"],
    field: "Social / Creative",
    departments: ["Communication","Media","Psychology","Marketing","Design"],
    careers: ["Marketer","Writer","Counselor","Public Relations","Entrepreneur"]
  },
  ENTP: {
    core: "Inventive, argumentative, idea-driven.",
    strengths: ["Quick-witted","Innovative","Curious","Debating","Strategic"],
    weaknesses: ["Argumentative","Inconsistent","Dislikes routine","Insensitive","Can be impulsive"],
    field: "Interdisciplinary / Business",
    departments: ["Law","Entrepreneurship","Engineering","Philosophy","Computer Science"],
    careers: ["Inventor","Consultant","Lawyer","Product Manager","Startup Founder"]
  },
  ESTJ: {
    core: "Organized, leader, practical.",
    strengths: ["Decisive","Organized","Responsible","Efficient","Clear communicator"],
    weaknesses: ["Rigid","Insensitive","Stubborn","Overly controlling","Workaholic"],
    field: "Social / Business",
    departments: ["Management","Law","Public Admin","Accounting","Logistics"],
    careers: ["Manager","Judge","Project Leader","Accountant","Military Officer"]
  },
  ESFJ: {
    core: "Warm, cooperative, sociable.",
    strengths: ["Supportive","Organized","Loyal","Observant","Friendly"],
    weaknesses: ["People-pleasing","Conventional","Overly selfless","Avoids conflict","Sensitive to criticism"],
    field: "Social / Service",
    departments: ["Nursing","Education","Social Work","Hospitality","Human Resources"],
    careers: ["Teacher","Nurse","HR Specialist","Event Coordinator","Counselor"]
  },
  ENFJ: {
    core: "Charismatic, empathetic, leadership-oriented.",
    strengths: ["Inspiring","Diplomatic","Empathetic","Organized","Persuasive"],
    weaknesses: ["Overinvolved","Idealistic","Burnout-prone","People-pleasing","Difficulty delegating"],
    field: "Social / Leadership",
    departments: ["Sociology","Education","Counseling","Communication","Political Science"],
    careers: ["Teacher","Leader","Counselor","Public Speaker","NGO Director"]
  },
  ENTJ: {
    core: "Strategic, commanding, goal-focused.",
    strengths: ["Decisive","Strategic","Efficient","Confident","Strong leadership"],
    weaknesses: ["Impatient","Insensitive","Dominant","Work-obsessed","Overly critical"],
    field: "Business / Strategy",
    departments: ["Business","Law","Engineering","Economics","Computer Science"],
    careers: ["CEO","Lawyer","Strategic Planner","Consultant","Business Leader"]
  }
};

/* -------------------------
  3) OCEAN & ENNEAGRAM labels
  ------------------------- */
const ENNEAGRAM = {
  1: { name: "Reformer", core: "Principled, purposeful, self-controlled" },
  2: { name: "Helper", core: "Generous, demonstrative, people-focused" },
  3: { name: "Achiever", core: "Success-oriented, adaptive, driven" },
  4: { name: "Individualist", core: "Sensitive, introspective, expressive" },
  5: { name: "Investigator", core: "Perceptive, innovative, private" },
  6: { name: "Loyalist", core: "Committed, security-oriented, responsible" },
  7: { name: "Enthusiast", core: "Spontaneous, versatile, acquisitive" },
  8: { name: "Challenger", core: "Powerful, domineering, protective" },
  9: { name: "Peacemaker", core: "Receptive, reassuring, agreeable" }
};

/* -------------------------
  4) Utility + render functions
  ------------------------- */
const questionsContainer = document.getElementById('questions');
const form = document.getElementById('quizForm');
const resultEl = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderQuestions() {
  const grid = el('div', 'questions-grid');
  QUESTIONS.forEach(q => {
    const card = el('div', 'card');
    const head = el('div', 'q-head');
    const num = el('div', 'q-num', q.id + '.');
    const textWrap = el('div');
    const text = el('div', 'q-text', escapeHtml(q.text));
    const ex = el('div', 'q-ex', escapeHtml('Example: ' + q.example));
    textWrap.appendChild(text);
    textWrap.appendChild(ex);
    head.appendChild(num);
    head.appendChild(textWrap);
    card.appendChild(head);

    const radios = el('div', 'radios');
    for (let v = 1; v <= 5; v++) {
      const label = el('label', 'radio-label');
      const input = el('input');
      input.type = 'radio';
      input.name = 'q' + q.id;
      input.value = String(v);
      input.required = true;
      const span = el('span', '', String(v));
      label.appendChild(input);
      label.appendChild(span);
      radios.appendChild(label);
    }
    card.appendChild(radios);
    grid.appendChild(card);
  });
  questionsContainer.appendChild(grid);
}

function escapeHtml(s) {
  return String(s).replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* -------------------------
  5) Collect answers and scoring
  ------------------------- */
function collectAnswers() {
  const answers = {};
  QUESTIONS.forEach(q => {
    const inputs = document.getElementsByName('q' + q.id);
    for (const inp of inputs) {
      if (inp.checked) { answers[q.id] = Number(inp.value); break; }
    }
  });
  return answers;
}

function calcMBTI(answers) {
  // Map MBTI dichotomies to question sets (approximate grouping)
  // We'll use these index groups to approximate each letter:
  const E = sum([1,3,5], answers);
  const I = sum([2,4], answers);
  const S = sum([6,8,10], answers);
  const N = sum([7,9], answers);
  const T = sum([11,13,15], answers);
  const F = sum([12,14], answers);
  const J = sum([16,18,20], answers);
  const P = sum([17,19], answers);

  const letters = [
    E >= I ? 'E' : 'I',
    S >= N ? 'S' : 'N',
    T >= F ? 'T' : 'F',
    J >= P ? 'J' : 'P'
  ];
  return letters.join('');
}
function sum(ids, answers) {
  return ids.reduce((s, id) => s + (answers[id] || 0), 0);
}

function calcOCEAN(answers) {
  const mean = (ids) => ids.length ? (ids.reduce((s, id) => s + (answers[id] || 0), 0) / ids.length) : 0;
  return {
    openness: mean([21,22,23,24,25]),
    conscientiousness: mean([16,18,19,20]),
    extraversion: mean([1,3,5]),
    agreeableness: mean([26,27,28,29,30]),
    neuroticism: mean([31,32,33,34,35])
  };
}

function calcEnneagram(answers) {
  // Map 36..44 -> types 1..9
  const scores = {};
  for (let t = 1; t <= 9; t++) {
    const qid = 35 + t; // 36..44
    scores[t] = answers[qid] || 0;
  }
  const sorted = Object.entries(scores).sort((a,b)=> b[1]-a[1]);
  return { type: Number(sorted[0][0]) || 5, scores };
}

/* -------------------------
  6) Show result and POST to server
  ------------------------- */
async function showResultAndSend(answers) {
  const mbti = calcMBTI(answers);
  const ocean = calcOCEAN(answers);
  const enne = calcEnneagram(answers);
  const mbtiDesc = MBTI_DESCRIPTIONS[mbti] || { core: 'Balanced mix', strengths: [], weaknesses: [], field: '', departments: [], careers: [] };

  // Build UI
  resultEl.classList.remove('hidden');
  resultEl.innerHTML = '';

  const h = el('h2', '', 'Your Results');
  resultEl.appendChild(h);

  const g = el('div', 'grid');

  const left = el('div', '');
  const box1 = el('div', 'card');
  box1.innerHTML = `<h3>MBTI — ${mbti}</h3><p><strong>${escapeHtml(mbtiDesc.core)}</strong></p>`;
  box1.innerHTML += `<div class="keyval"><div class="k">Strengths:</div><div>${escapeHtml(mbtiDesc.strengths.join(', '))}</div></div>`;
  box1.innerHTML += `<div class="keyval"><div class="k">Weaknesses:</div><div>${escapeHtml(mbtiDesc.weaknesses.join(', '))}</div></div>`;
  box1.innerHTML += `<div class="keyval"><div class="k">Field:</div><div>${escapeHtml(mbtiDesc.field)}</div></div>`;
  box1.innerHTML += `<div class="keyval"><div class="k">Departments:</div><div>${escapeHtml(mbtiDesc.departments.join(', '))}</div></div>`;
  box1.innerHTML += `<div class="keyval"><div class="k">Careers:</div><div>${escapeHtml(mbtiDesc.careers.join(', '))}</div></div>`;
  left.appendChild(box1);

  const boxO = el('div', 'card');
  boxO.innerHTML = `<h3>OCEAN (Big Five)</h3>`;
  boxO.innerHTML += `<div class="keyval"><div class="k">Openness:</div><div>${ocean.openness.toFixed(2)}</div></div>`;
  boxO.innerHTML += `<div class="keyval"><div class="k">Conscientiousness:</div><div>${ocean.conscientiousness.toFixed(2)}</div></div>`;
  boxO.innerHTML += `<div class="keyval"><div class="k">Extraversion:</div><div>${ocean.extraversion.toFixed(2)}</div></div>`;
  boxO.innerHTML += `<div class="keyval"><div class="k">Agreeableness:</div><div>${ocean.agreeableness.toFixed(2)}</div></div>`;
  boxO.innerHTML += `<div class="keyval"><div class="k">Neuroticism:</div><div>${ocean.neuroticism.toFixed(2)}</div></div>`;
  left.appendChild(boxO);

  g.appendChild(left);

  const right = el('div', '');
  const boxE = el('div', 'card');
  const enneName = ENNEAGRAM[enne.type] ? ENNEAGRAM[enne.type].name : 'Unknown';
  const enneCore = ENNEAGRAM[enne.type] ? ENNEAGRAM[enne.type].core : '';
  boxE.innerHTML = `<h3>Enneagram — Type ${enne.type}: ${escapeHtml(enneName)}</h3><p>${escapeHtml(enneCore)}</p>`;
  right.appendChild(boxE);

  g.appendChild(right);

  resultEl.appendChild(g);

  // Try to save to server
  try {
    const payload = { answers, mbti, ocean, enne, timestamp: new Date().toISOString() };
    const res = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (res.ok) {
      const data = await res.json();
      const okNote = el('p', 'note', `Saved on server (id: ${data.id}).`);
      resultEl.appendChild(okNote);
    } else {
      const err = el('p', 'note', 'Server rejected the submission or returned an error.');
      resultEl.appendChild(err);
    }
  } catch (e) {
    const err = el('p', 'note', 'Could not reach server — showing local result only.');
    resultEl.appendChild(err);
  }

  // Scroll to result on small screens
  resultEl.scrollIntoView({ behavior: 'smooth' });
}

/* -------------------------
   7) Form handlers
   ------------------------- */
form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  const answers = collectAnswers();
  const count = Object.keys(answers).length;
  if (count < 25) {
    if (!confirm(`You answered only ${count}/50 questions. Continue anyway?`)) return;
  }
  showResultAndSend(answers);
});

resetBtn.addEventListener('click', function () {
  form.reset();
  resultEl.classList.add('hidden');
  resultEl.innerHTML = '';
});

/* -------------------------
   8) Initialize
   ------------------------- */
renderQuestions();

// ---------------------------
// COPY RESULT FUNCTION
// ---------------------------
function copyResult(resultText) {
    navigator.clipboard.writeText(resultText)
        .then(() => {
            alert("Result copied to clipboard!");
        })
        .catch(err => {
            alert("Failed to copy result.");
        });
}

// ---------------------------
// DOWNLOAD RESULT FUNCTION
// ---------------------------
function downloadResult(resultText) {
    const blob = new Blob([resultText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Personality_Result.txt";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ---------------------------
// EVENT LISTENERS (Attach buttons)
// ---------------------------
document.getElementById("copyBtn").addEventListener("click", () => {
    const text = document.getElementById("result").innerText;
    copyResult(text);
});

document.getElementById("downloadBtn").addEventListener("click", () => {
    const text = document.getElementById("result").innerText;
    downloadResult(text);
});
