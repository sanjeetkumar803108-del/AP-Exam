import{r as G,j as l}from"./vendor-react-3G4sEU1m.js";import{m as q,A as Ae}from"./vendor-motion-DQftYQDR.js";import{t as Te}from"./index-DqfMVQKI.js";import{D as Ee}from"./vendor-icons-BMwc-nrP.js";import{E as xe}from"./vendor-pdf-DZ6jSTqM.js";import{s as N,a as H,p as me,b as W,d as _}from"./pdfTableDrawer-BPtOGeYz.js";import{e as X,r as ae}from"./svgHelper-CAKNYPut.js";function et({title:f,subtitle:s,subjectName:t="AP Exam",shortCode:c="AP",topic:k="Comprehensive Review",unitName:i,questionCount:p=5,questionType:g="objective",format:e,mode:a="testprep",variant:r,isComplete:n=!1}){const[h,o]=G.useState(0),[R,Q]=G.useState(0),j=e||(g==="subjective"?"subjective":"objective"),C=a==="trap_radar"||a==="challenge"||a==="scan"||a==="disarm"||a==="radar_scan"||a==="radar_disarm",D=r||(C?"radar":"app_loader"),B=G.useMemo(()=>{if(a==="scan"||a==="radar_scan")return 12;if(a==="disarm"||a==="radar_disarm")return 8;const d=p||5,v=d<=3?12:d<=5?16:d<=10?24:34;return j==="subjective"?v+5:v},[a,p,j]),b=G.useMemo(()=>{if(a==="scan"||a==="radar_scan")return[{stepNum:1,action:"Scanning Question Stem",subtext:"Extracting text & options"},{stepNum:2,action:"Auditing Distractor Traps",subtext:"Pinpointing common lures"},{stepNum:3,action:"Matching CED Standards",subtext:"Cross-checking curriculum"},{stepNum:4,action:"Calculating Risk Rates",subtext:"Benchmarking student errors"},{stepNum:5,action:"Synthesizing Disarm Rules",subtext:"Formulating Score-5 secret"},{stepNum:6,action:"Compiling Autopsy Card",subtext:"Delivering diagnostic breakdown"}];if(a==="disarm"||a==="radar_disarm")return[{stepNum:1,action:"Locking On Option",subtext:"Isolating choice parameters"},{stepNum:2,action:"Detecting Trap Patterns",subtext:"Checking sign-flips & scope"},{stepNum:3,action:"Evaluating Vulnerability",subtext:"Calculating student error risk"},{stepNum:4,action:"Revealing Disarm Secret",subtext:"Instant Score-5 heuristic"}];if(a==="trap_radar"||a==="challenge")return[{stepNum:1,action:"Scanning CED Framework",subtext:`Targeting ${c||"AP"} standards`},{stepNum:2,action:"Detecting Trap Patterns",subtext:"Isolating distractor archetypes"},{stepNum:3,action:"Synthesizing Distractor Traps",subtext:"Engineering deceptive lures"},{stepNum:4,action:"Calibrating Error Rates",subtext:"Benchmarking difficulty curve"},{stepNum:5,action:"Encoding Disarm Secrets",subtext:"Attaching 5-second heuristics"},{stepNum:6,action:"Arming Radar Cockpit",subtext:`Finalizing ${p} items`}];const d=j==="subjective";return[{stepNum:1,action:"Analyzing Curriculum",subtext:`Aligning ${c||"AP"} CED standards`},{stepNum:2,action:d?"Synthesizing FRQ Prompts":"Drafting AP Questions",subtext:"Crafting authentic stimulus"},{stepNum:3,action:d?"Calibrating Scoring Rubrics":"Balancing Distractor Traps",subtext:d?"Setting strict point criteria":"Engineering realistic choices"},{stepNum:4,action:"Verifying Solutions",subtext:"Checking explanations & KaTeX"},{stepNum:5,action:"Encoding Score-5 Keys",subtext:"Attaching examiner shortcuts"},{stepNum:6,action:"Finalizing Exam Session",subtext:`Readying ${p} ${d?"FRQs":"MCQs"}`}]},[a,c,p,j]);G.useEffect(()=>{const d=setInterval(()=>{Q(v=>v+1)},1e3);return()=>clearInterval(d)},[]);const L=G.useMemo(()=>Math.max(2.4,B*.85/b.length),[B,b.length]);G.useEffect(()=>{if(n){o(b.length-1);return}const d=Math.min(Math.floor(R/L),b.length-1);if(d!==h){o(d);try{Te(12)}catch{}}},[R,L,b.length,h,n]),G.useEffect(()=>{if(D==="radar")try{const d=window.AudioContext||window.webkitAudioContext;if(!d)return;const v=new d,M=v.createOscillator(),x=v.createGain();M.type="sine",M.frequency.setValueAtTime(880,v.currentTime),M.frequency.exponentialRampToValueAtTime(440,v.currentTime+.12),x.gain.setValueAtTime(.025,v.currentTime),x.gain.exponentialRampToValueAtTime(1e-4,v.currentTime+.15),M.connect(x),x.connect(v.destination),M.start(),M.stop(v.currentTime+.15)}catch{}},[h,D]);const w=b[h]||b[0],E=G.useMemo(()=>{const d=Math.floor(R/60),v=R%60;return`${d<10?"0":""}${d}:${v<10?"0":""}${v}s`},[R]),I=G.useMemo(()=>{if(n)return 100;const d=R/Math.max(1,B),v=1-Math.exp(-d*2.2),x=((h+.5)/b.length*.45+v*.55)*100;return Math.min(96,Math.max(8,Math.round(x)))},[n,R,B,h,b.length]);return l.jsx("div",{className:"w-full max-w-lg mx-auto py-4 px-2 select-none",children:l.jsxs(q.div,{initial:{opacity:0,scale:.96,y:12},animate:{opacity:1,scale:1,y:0},transition:{duration:.35,ease:"easeOut"},className:"relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 space-y-6 text-center",children:[l.jsx("div",{className:"absolute -top-24 -left-24 w-56 h-56 rounded-full blur-3xl pointer-events-none",style:{background:"rgba(37, 99, 235, 0.10)"}}),l.jsx("div",{className:"absolute -bottom-24 -right-24 w-56 h-56 rounded-full blur-3xl pointer-events-none",style:{background:"rgba(202, 170, 95, 0.10)"}}),l.jsxs("div",{className:"relative z-10 flex items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-3.5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"relative flex h-2 w-2",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",style:{background:D==="radar"?"#3b82f6":"#2563eb"}}),l.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2",style:{background:D==="radar"?"#3b82f6":"#2563eb",boxShadow:D==="radar"?"0 0 8px #3b82f6":"0 0 8px #2563eb"}})]}),l.jsx("span",{className:"text-[11px] font-bold text-zinc-700 dark:text-zinc-300",children:f||(C?"AP Trap Radar™":`${t} Review`)})]}),l.jsxs("div",{className:"flex items-center gap-1.5 font-mono text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full border border-zinc-200/60 dark:border-zinc-700/60",children:[l.jsx(Ee,{className:"w-3 h-3 text-zinc-400 animate-spin-slow"}),l.jsx("span",{children:E})]})]}),l.jsx("div",{className:"relative z-10 flex items-center justify-center py-2",children:D==="radar"?l.jsxs("div",{className:"relative w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center overflow-hidden shrink-0",style:{borderWidth:4,borderStyle:"solid",borderColor:"rgba(59,130,246,0.35)",background:"linear-gradient(to bottom, #071428, #050e1e, #030912)",boxShadow:"0 0 40px rgba(37,99,235,0.25)",outline:"4px solid rgba(59,130,246,0.10)"},children:[l.jsx("span",{className:"absolute top-2 text-[8px] font-mono font-bold tracking-wider select-none",style:{color:"rgba(59,130,246,0.9)"},children:"000° N"}),l.jsx("span",{className:"absolute bottom-2 text-[8px] font-mono font-bold tracking-wider select-none",style:{color:"rgba(59,130,246,0.9)"},children:"180° S"}),l.jsx("span",{className:"absolute left-2 text-[8px] font-mono font-bold tracking-wider select-none",style:{color:"rgba(59,130,246,0.9)"},children:"270° W"}),l.jsx("span",{className:"absolute right-2 text-[8px] font-mono font-bold tracking-wider select-none",style:{color:"rgba(59,130,246,0.9)"},children:"090° E"}),l.jsx("div",{className:"absolute inset-5 sm:inset-6 rounded-full pointer-events-none",style:{border:"1px solid rgba(59,130,246,0.25)"}}),l.jsx("div",{className:"absolute inset-12 sm:inset-14 rounded-full border-dashed pointer-events-none",style:{border:"1px dashed rgba(59,130,246,0.25)"}}),l.jsx("div",{className:"absolute inset-20 sm:inset-22 rounded-full pointer-events-none",style:{border:"1px solid rgba(59,130,246,0.20)"}}),l.jsx("div",{className:"absolute w-full h-[1px] pointer-events-none",style:{background:"rgba(59,130,246,0.30)"}}),l.jsx("div",{className:"absolute h-full w-[1px] pointer-events-none",style:{background:"rgba(59,130,246,0.30)"}}),l.jsx("div",{className:"absolute w-full h-[1px] rotate-45 pointer-events-none",style:{background:"rgba(59,130,246,0.15)"}}),l.jsx("div",{className:"absolute w-full h-[1px] -rotate-45 pointer-events-none",style:{background:"rgba(59,130,246,0.15)"}}),l.jsx(q.div,{animate:{rotate:360},transition:{repeat:1/0,ease:"linear",duration:2.2},className:"absolute inset-0 rounded-full pointer-events-none origin-center",style:{background:"conic-gradient(from 0deg, rgba(37,99,235,0.65) 0deg, rgba(37,99,235,0.25) 35deg, rgba(37,99,235,0.05) 70deg, transparent 85deg, transparent 360deg)"}}),l.jsx("div",{className:"absolute top-[28%] right-[26%] w-2 h-2 rounded-full animate-pulse",style:{background:"#caaa5f",boxShadow:"0 0 8px #caaa5f"}}),l.jsx("div",{className:"absolute bottom-[30%] left-[32%] w-1.5 h-1.5 rounded-full animate-ping",style:{background:"#d4a843",boxShadow:"0 0 6px #d4a843"}}),l.jsx("div",{className:"absolute top-[42%] left-[24%] w-1.5 h-1.5 rounded-full",style:{background:"#caaa5f",boxShadow:"0 0 6px #caaa5f"}}),l.jsx("div",{className:"relative z-10 w-5 h-5 rounded-full flex items-center justify-center",style:{background:"rgba(37,99,235,0.30)",border:"1px solid #3b82f6",boxShadow:"0 0 15px #2563eb"},children:l.jsx("div",{className:"w-2 h-2 rounded-full bg-white animate-ping"})})]}):l.jsxs("div",{className:"relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center",children:[l.jsx(q.div,{className:"absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[5px] border-zinc-100 dark:border-zinc-800",style:{borderTopColor:"#2563eb",filter:"drop-shadow(0 0 10px rgba(37, 99, 235, 0.55))"},animate:{rotate:360},transition:{repeat:1/0,duration:1.2,ease:"linear"}}),l.jsx(q.div,{className:"absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[4px] border-zinc-100 dark:border-zinc-800",style:{borderBottomColor:"#caaa5f",filter:"drop-shadow(0 0 8px rgba(202, 170, 95, 0.55))"},animate:{rotate:-360},transition:{repeat:1/0,duration:.9,ease:"linear"}}),l.jsx(q.div,{className:"absolute w-4 h-4 rounded-full",style:{background:"linear-gradient(to top right, #1e3a5f, #caaa5f)",boxShadow:"0 0 14px rgba(37, 99, 235, 0.7)"},animate:{scale:[.85,1.2,.85]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"}})]})}),l.jsxs("div",{className:"relative z-10 space-y-2",children:[l.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/60",children:n?l.jsx("span",{className:"text-emerald-600 dark:text-emerald-400",children:"✓ Ready 100%"}):l.jsxs("span",{children:["Step ",w.stepNum," of ",b.length]})}),l.jsx(Ae,{mode:"wait",children:l.jsxs(q.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.22},className:"space-y-1",children:[l.jsx("h3",{className:"text-base sm:text-lg font-black text-zinc-900 dark:text-white tracking-tight",children:n?"✨ Synthesizing Complete!":w.action}),l.jsx("p",{className:"text-xs text-zinc-500 dark:text-zinc-400 font-medium",children:n?"Launching your AP session...":w.subtext})]},n?"complete":h)})]}),l.jsxs("div",{className:"relative z-10 space-y-2 pt-1",children:[l.jsx("div",{className:"w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden border border-zinc-200/60 dark:border-zinc-700/60",children:l.jsx(q.div,{className:"h-full",style:{background:n?"linear-gradient(to right, #059669, #10b981, #34d399)":D==="radar"?"linear-gradient(to right, #1e3a5f, #2563eb, #3b82f6)":"linear-gradient(to right, #1e3a5f, #2563eb, #caaa5f)",boxShadow:n?"0 0 12px rgba(16, 185, 129, 0.6)":"0 0 10px rgba(37, 99, 235, 0.5)"},animate:{width:`${I}%`},transition:{duration:n?.2:.4,ease:"easeOut"}})}),l.jsxs("div",{className:"flex items-center justify-between text-[11px] font-medium text-zinc-400 dark:text-zinc-500 px-1",children:[l.jsx("span",{children:n?"Ready!":C?"Deconstructing Traps":`${p} Questions Loading`}),l.jsxs("span",{className:`font-mono font-bold ${n?"text-emerald-600 dark:text-emerald-400":"text-zinc-700 dark:text-zinc-300"}`,children:[I,"%"]})]})]})]})})}const O={"ap-human-geography":{subjectId:"ap-human-geography",subjectName:"AP Human Geography",category:"social_science",mathExpected:!1,canonicalUnits:[{unitNumber:1,title:"Thinking Geographically",keywords:["gis","gps","remote sensing","scale of analysis","formal region","functional region","vernacular region","environmental determinism","possibilism","distance decay","time-space compression","map projection","choropleth"]},{unitNumber:2,title:"Population & Migration Patterns",keywords:["demographic transition model","dtm","crude birth rate","cbr","crude death rate","cdr","natural increase rate","nir","population pyramid","dependency ratio","malthus","boserup","ravenstein","push factor","pull factor","refugee","idp","asylum","pronatalist","antinatalist","epidemiological transition"]},{unitNumber:3,title:"Cultural Patterns & Processes",keywords:["cultural hearth","contagious diffusion","hierarchical diffusion","stimulus diffusion","relocation diffusion","universalizing religion","ethnic religion","language family","indo-european","isogloss","lingua franca","acculturation","assimilation","syncretism","cultural landscape","folk culture","pop culture"]},{unitNumber:4,title:"Political Patterns & Processes",keywords:["sovereignty","nation-state","stateless nation","multinational state","autonomous region","colonialism","berlin conference","superimposed boundary","relic boundary","unclos","exclusive economic zone","eez","gerrymandering","devolution","supranationalism","un","eu","nato","asean","balkanization"]},{unitNumber:5,title:"Agriculture & Rural Land-Use",keywords:["von thunen","bid-rent","green revolution","subsistence agriculture","commercial agriculture","intensive farming","extensive farming","shifting cultivation","pastoral nomadism","agribusiness","commodity chain","metes and bounds","township and range","long lot","desertification","salinization"]},{unitNumber:6,title:"Cities & Urban Land-Use",keywords:["burgess","concentric zone","hoyt sector","multiple nuclei","harris-ullman","galactic city","edge city","central place theory","christaller","range","threshold","rank-size rule","primate city","gentrification","new urbanism","smart growth","suburban sprawl","redlining","blockbusting","megacity","squatter settlement"]},{unitNumber:7,title:"Industrial & Economic Development",keywords:["wallerstein","world systems","core","periphery","semiperiphery","rostow","stages of economic growth","weber","least cost theory","bulk-gaining","bulk-reducing","hdi","human development index","gni","gii","maquiladora","epz","sez","outsourcing","deindustrialization","agglomeration","un sdgs","microfinance"]}],allowedDomains:["spatial analysis","demography","culture","geopolitics","agriculture","urban planning","economic development"],forbiddenSignatures:[/\b(?:definite\s+integral|indefinite\s+integral|fundamental\s+theorem\s+of\s+calculus|\bFTC\b|derivative|differentiat(?:ion|e)|critical\s+point|concav(?:e|ity)|tangent\s+line|riemann\s+sum|slope\s+field|separable\s+differential\s+equation|disk\s+method|washer\s+method|shell\s+method|volume\s+of\s+revolution|taylor\s+series|maclaurin|radius\s+of\s+convergence|l'h[oô]pital|mean\s+value\s+theorem|\bMVT\b|intermediate\s+value\s+theorem|\bIVT\b|dy\/dx|d\^2y\/dx\^2|f'\(x\)|f''\(x\)|\\int\b|\\frac\{d\}\{dx\})\b/i,/\b(?:centripetal\s+acceleration|rotational\s+inertia|kinematic\s+equation|projectile\s+motion|angular\s+momentum|newton's\s+second\s+law|bernoulli's\s+equation|archimedes\s+principle|f\s*=\s*ma)\b/i,/\b(?:titration\s+curve|le\s+chatelier|stoichiometr(?:y|ic)|henderson-hasselbalch|beer-lambert|orbitals|hybridization|sp3|photoelectron\s+spectroscopy|\bPES\b|net\s+ionic\s+equation)\b/i]},"ap-environmental-science":{subjectId:"ap-environmental-science",subjectName:"AP Environmental Science",category:"science",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"The Living World: Ecosystems",keywords:["carbon cycle","nitrogen cycle","phosphorus cycle","hydrologic cycle","trophic level","10% rule","primary productivity","gpp","npp","biomes"]},{unitNumber:2,title:"The Living World: Biodiversity",keywords:["ecosystem services","provisioning","regulating","cultural","supporting","island biogeography","ecological tolerance","succession","pioneer species","keystone species"]},{unitNumber:3,title:"Populations",keywords:["generalist","specialist","r-selected","k-selected","survivorship curve","carrying capacity","k","rule of 70","doubling time","demographic transition","tfr","replacement level"]},{unitNumber:4,title:"Earth Systems & Resources",keywords:["plate tectonics","convergent","divergent","transform","soil horizons","soil texture triangle","atmosphere","troposphere","stratosphere","coriolis effect","el nino","la nina","watershed"]},{unitNumber:5,title:"Land & Water Use",keywords:["tragedy of the commons","clearcutting","green revolution","irrigation","drip","furrow","flood","salinization","aquifer","ogallala","pest control","ipm","cafo","overfishing","mining","slag"]},{unitNumber:6,title:"Energy Resources & Consumption",keywords:["fossil fuels","coal","petroleum","natural gas","fracking","nuclear fission","half-life","biomass","solar photovoltaic","wind turbine","hydroelectric","geothermal","hydrogen fuel cell"]},{unitNumber:7,title:"Atmospheric Pollution",keywords:["photochemical smog","ground-level ozone","thermal inversion","acid deposition","so2","nox","pm2.5","pm10","radon","asbestos","vocs","vapor recovery nozzle","catalytic converter","scrubber"]},{unitNumber:8,title:"Aquatic & Terrestrial Pollution",keywords:["point source","nonpoint source","eutrophication","hypoxic","dead zone","biological oxygen demand","bod","bioaccumulation","biomagnification","endocrine disruptor","ld50","sanitary landfill","leachate","sewage treatment"]},{unitNumber:9,title:"Global Change",keywords:["stratospheric ozone depletion","cfcs","montreal protocol","greenhouse effect","co2","ch4","n2o","ocean acidification","coral bleaching","invasive species","hsi","cites","endangered species act"]}],allowedDomains:["ecology","earth systems","energy","environmental toxicology","pollution","sustainability","population ecology"],forbiddenSignatures:[/\b(?:definite\s+integral|indefinite\s+integral|fundamental\s+theorem\s+of\s+calculus|riemann\s+sum|disk\s+method|washer\s+method|taylor\s+series|maclaurin|l'h[oô]pital|mean\s+value\s+theorem|dy\/dx|d\^2y\/dx\^2|f'\(x\)|f''\(x\))\b/i,/\b(?:rotational\s+inertia|angular\s+momentum|centripetal\s+acceleration|bernoulli's\s+equation)\b/i]},"ap-computer-science-principles":{subjectId:"ap-computer-science-principles",subjectName:"AP Computer Science Principles",category:"tech",mathExpected:!1,canonicalUnits:[{unitNumber:1,title:"Creative Development",keywords:["collaboration","program design","software development process","debugging","logic error","syntax error","runtime error","testing"]},{unitNumber:2,title:"Data Representation & Information",keywords:["binary","bits","bytes","hexadecimal","overflow error","roundoff error","lossy compression","lossless compression","data abstraction","metadata"]},{unitNumber:3,title:"Algorithms & Programming",keywords:["sequencing","selection","iteration","conditional","if-else","loops","traversal","linear search","binary search","procedural abstraction","parameters","return value","robot grid"]},{unitNumber:4,title:"Computing Systems & Networks",keywords:["the internet","ip address","ipv4","ipv6","tcp/ip","packets","packet switching","routers","fault tolerance","redundancy","bandwidth","latency","world wide web","http","https"]},{unitNumber:5,title:"Impact of Computing",keywords:["digital divide","computing bias","crowdsourcing","citizen science","intellectual property","creative commons","open source","open access","cybersecurity","phishing","keylogging","malware","public-key encryption","symmetric encryption","ddos","multifactor authentication"]}],allowedDomains:["algorithms","networking","data representation","programming logic","cybersecurity","digital ethics"],forbiddenSignatures:[/\b(?:integral|derivative|calculus|riemann|titration|stoichiometry|dtm|demographic\s+transition|von\s+thunen|gerrymandering)\b/i,/\b(?:public\s+class\b|System\.out\.println|extends\b|implements\b|private\s+int\b|ArrayList<Integer>)\b/i]},"ap-calculus-ab":{subjectId:"ap-calculus-ab",subjectName:"AP Calculus AB",category:"stem_math",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Limits & Continuity",keywords:["limit","continuity","removable discontinuity","jump discontinuity","vertical asymptote","squeeze theorem","intermediate value theorem","ivt","end behavior"]},{unitNumber:2,title:"Differentiation: Definition & Fundamentals",keywords:["derivative","difference quotient","instantaneous rate of change","power rule","product rule","quotient rule","differentiability"]},{unitNumber:3,title:"Chain Rule & Implicit Differentiation",keywords:["chain rule","composite function","implicit differentiation","inverse trigonometric derivatives"]},{unitNumber:4,title:"Contextual Applications of Differentiation",keywords:["straight-line motion","position","velocity","acceleration","speed","related rates","local linearity","linear approximation"]},{unitNumber:5,title:"Analytical Applications of Differentiation",keywords:["mean value theorem","mvt","extreme value theorem","evt","critical point","first derivative test","second derivative test","concavity","inflection point","optimization"]},{unitNumber:6,title:"Integration & Accumulation of Change",keywords:["riemann sum","trapezoidal rule","antiderivative","indefinite integral","definite integral","fundamental theorem of calculus","ftc","u-substitution"]},{unitNumber:7,title:"Differential Equations & Slope Fields",keywords:["slope field","separation of variables","general solution","particular solution","exponential growth","dy/dx"]},{unitNumber:8,title:"Applications of Integration",keywords:["average value","area between curves","volume of solid of revolution","disk method","washer method","cross sections"]}],allowedDomains:["limits","derivatives","integrals","differential equations","particle motion","rates of change"],forbiddenSignatures:[/\b(?:gentrification|von\s+thunen|supranationalism|wallerstein|malthus|cold\s+war|french\s+revolution|hamlet|chloroplast|mitochondria|dna\s+replication|operon)\b/i,/\b(?:spatial\s+pattern|affected\s+stakeholders|regional\s+context|spatial\s+trends)\b/i,/\b(?:taylor\s+series|maclaurin\s+series|taylor\s+polynomial|maclaurin\s+polynomial|ratio\s+test|radius\s+of\s+convergence|interval\s+of\s+convergence|euler's\s+method|eulers\s+method|logistic\s+differential|carrying\s+capacity|polar\s+area|polar\s+coordinates|parametric\s+equations|vector-valued|integration\s+by\s+parts|partial\s+fractions|improper\s+integral|alternating\s+series\s+error\s+bound|lagrange\s+error\s+bound)\b/i]},"ap-calculus-bc":{subjectId:"ap-calculus-bc",subjectName:"AP Calculus BC",category:"stem_math",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Limits & Continuity",keywords:["limit","continuity","squeeze theorem","l'hopital"]},{unitNumber:2,title:"Differentiation: Definition & Fundamentals",keywords:["derivative","power rule","product rule","quotient rule"]},{unitNumber:3,title:"Chain Rule & Implicit Differentiation",keywords:["chain rule","implicit differentiation"]},{unitNumber:4,title:"Contextual Applications of Differentiation",keywords:["related rates","linear approximation"]},{unitNumber:5,title:"Analytical Applications of Differentiation",keywords:["mean value theorem","mvt","critical points","optimization"]},{unitNumber:6,title:"Integration & Accumulation of Change",keywords:["riemann sums","ftc","integration by parts","partial fractions","improper integrals"]},{unitNumber:7,title:"Differential Equations",keywords:["slope fields","euler's method","logistic differential equation","carrying capacity"]},{unitNumber:8,title:"Applications of Integration",keywords:["area between curves","volumes of revolution","arc length"]},{unitNumber:9,title:"Parametric Equations, Polar Coordinates & Vector-Valued Functions",keywords:["parametric equations","vector motion","velocity vector","speed","polar coordinates","polar area","r(theta)"]},{unitNumber:10,title:"Infinite Sequences & Series",keywords:["infinite series","geometric series","taylor polynomial","maclaurin","ratio test","radius of convergence","interval of convergence","alternating series test","lagrange error bound"]}],allowedDomains:["calculus","infinite series","taylor polynomials","polar coordinates","parametric equations","differential equations"],forbiddenSignatures:[/\b(?:gentrification|von\s+thunen|supranationalism|wallerstein|malthus|cold\s+war|cell\s+membrane)\b/i]},"ap-physics-1":{subjectId:"ap-physics-1",subjectName:"AP Physics 1: Algebra-Based",category:"science",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Kinematics",keywords:["displacement","velocity","acceleration","free fall","projectile motion","v-t graph","x-t graph"]},{unitNumber:2,title:"Force & Translational Dynamics",keywords:["newton's laws","inertia","f=ma","free body diagram","normal force","friction","tension","spring force","hooke's law"]},{unitNumber:3,title:"Work, Energy & Power",keywords:["kinetic energy","gravitational potential energy","elastic potential energy","conservation of energy","work-energy theorem","power"]},{unitNumber:4,title:"Linear Momentum",keywords:["momentum","impulse","conservation of momentum","elastic collision","inelastic collision","center of mass"]},{unitNumber:5,title:"Torque & Rotational Dynamics",keywords:["torque","rotational inertia","rotational kinetic energy","angular momentum","conservation of angular momentum","angular acceleration"]},{unitNumber:6,title:"Energy & Momentum of Oscillations",keywords:["simple harmonic motion","shm","period","frequency","simple pendulum","mass-spring oscillator"]},{unitNumber:7,title:"Fluids",keywords:["density","pressure","buoyant force","archimedes principle","continuity equation","bernoulli's equation"]}],allowedDomains:["mechanics","forces","energy","momentum","rotational motion","oscillations","fluids"],forbiddenSignatures:[/\b(?:definite\s+integral|fundamental\s+theorem\s+of\s+calculus|taylor\s+series|maclaurin|disk\s+method|washer\s+method)\b/i,/\b(?:dtm|gentrification|von\s+thunen|supranationalism|gerrymandering)\b/i]},"ap-chemistry":{subjectId:"ap-chemistry",subjectName:"AP Chemistry",category:"science",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Atomic Structure & Properties",keywords:["moles","molar mass","pes","photoelectron spectroscopy","electron configuration","periodic trends","electronegativity","ionization energy","mass spectrometry"]},{unitNumber:2,title:"Molecular & Ionic Compound Structure & Properties",keywords:["chemical bonds","ionic","covalent","lewis structure","resonance","vsepr","molecular geometry","bond angle","formal charge","hybridization"]},{unitNumber:3,title:"Intermolecular Forces & Properties",keywords:["intermolecular forces","imf","hydrogen bonding","dipole-dipole","london dispersion","vapor pressure","boiling point","solubility","beer-lambert law"]},{unitNumber:4,title:"Chemical Reactions",keywords:["net ionic equation","stoichiometry","limiting reactant","percent yield","precipitation","acid-base","redox","oxidation state","titration"]},{unitNumber:5,title:"Kinetics",keywords:["reaction rate","rate law","rate constant k","reaction order","integrated rate law","half-life","activation energy","arrhenius","catalyst","reaction mechanism","elementary step"]},{unitNumber:6,title:"Thermodynamics",keywords:["endothermic","exothermic","enthalpy","delta h","heat capacity","calorimetry","hess's law","bond enthalpies","standard enthalpy of formation"]},{unitNumber:7,title:"Equilibrium",keywords:["equilibrium constant","k_eq","k_c","k_p","reaction quotient q","le chatelier's principle","solubility product ksp","common ion effect"]},{unitNumber:8,title:"Acids & Bases",keywords:["ph","poh","strong acid","weak acid","ka","kb","kw","neutralization","titration curve","equivalence point","buffer","henderson-hasselbalch"]},{unitNumber:9,title:"Applications of Thermodynamics",keywords:["entropy","delta s","gibbs free energy","delta g","galvanic cell","voltaic cell","electrolytic cell","cell potential","faraday's constant"]}],allowedDomains:["atomic structure","bonding","stoichiometry","kinetics","thermodynamics","chemical equilibrium","acids and bases","electrochemistry"],forbiddenSignatures:[/\b(?:definite\s+integral|fundamental\s+theorem\s+of\s+calculus|taylor\s+series|disk\s+method|washer\s+method)\b/i,/\b(?:dtm|demographic\s+transition|von\s+thunen|gerrymandering|supranationalism)\b/i]},"ap-biology":{subjectId:"ap-biology",subjectName:"AP Biology",category:"science",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Chemistry of Life",keywords:["water properties","hydrogen bonding","macromolecules","carbohydrates","lipids","proteins","nucleic acids","amino acids","peptide bond"]},{unitNumber:2,title:"Cell Structure & Function",keywords:["cell organelles","endosymbiosis","plasma membrane","phospholipid bilayer","selective permeability","osmosis","water potential","tonicity","active transport"]},{unitNumber:3,title:"Cellular Energetics",keywords:["enzyme","catalysis","active site","denaturation","competitive inhibitor","allosteric","photosynthesis","chloroplast","chlorophyll","calvin cycle","cellular respiration","mitochondria","glycolysis","krebs cycle","oxidative phosphorylation","atp synthase"]},{unitNumber:4,title:"Cell Communication & Cell Cycle",keywords:["signal transduction","ligand","receptor","second messenger","camp","phosphorylation cascade","feedback loops","mitosis","cyclin","cdk","apoptosis"]},{unitNumber:5,title:"Heredity",keywords:["meiosis","crossing over","independent assortment","mendelian genetics","monohybrid","dihybrid","punnett square","chi-square","sex-linked","pedigree"]},{unitNumber:6,title:"Gene Expression & Regulation",keywords:["dna replication","helicase","dna polymerase","transcription","mrna","translation","tRNA","ribosome","codon","operon","lac operon","mutation","gel electrophoresis","pcr"]},{unitNumber:7,title:"Natural Selection",keywords:["natural selection","evolution","fitness","hardy-weinberg","genetic drift","founder effect","bottleneck","speciation","allopatric","phylogenetic tree","cladogram"]},{unitNumber:8,title:"Ecology",keywords:["energy flow","trophic cascade","keystone species","symbiosis","population ecology","carrying capacity","exponential growth","logistic growth","biodiversity"]}],allowedDomains:["cellular biology","genetics","evolution","ecology","biochemistry","physiology"],forbiddenSignatures:[/\b(?:definite\s+integral|fundamental\s+theorem\s+of\s+calculus|disk\s+method|washer\s+method)\b/i,/\b(?:gerrymandering|dtm|demographic\s+transition|von\s+thunen|supranationalism|berlin\s+conference)\b/i]},"ap-us-history":{subjectId:"ap-us-history",subjectName:"AP U.S. History (APUSH)",category:"humanities",mathExpected:!1,canonicalUnits:[{unitNumber:1,title:"Period 1 (1491-1607)",keywords:["columbian exchange","indigenous societies","encomienda system","spanish colonization","pueblo revolt"]},{unitNumber:2,title:"Period 2 (1607-1754)",keywords:["cheasapeake","jamestown","puritans","new england","middle colonies","mercantilism","salutary neglect","first great awakening","triangular trade","indentured servitude","bacon's rebellion"]},{unitNumber:3,title:"Period 3 (1754-1800)",keywords:["french and indian war","seven years war","stamp act","boston tea party","declaration of independence","articles of confederation","constitutional convention","federalist papers","bill of rights","washington's farewell address"]},{unitNumber:4,title:"Period 4 (1800-1848)",keywords:["louisiana purchase","marbury v madison","war of 1812","monroe doctrine","market revolution","erie canal","second great awakening","jacksonian democracy","nullification crisis","trail of tears","manifest destiny","seneca falls"]},{unitNumber:5,title:"Period 5 (1844-1877)",keywords:["mexican-american war","compromise of 1850","fugitive slave act","kansas-nebraska act","dred scott","lincoln-douglas","civil war","emancipation proclamation","reconstruction","13th amendment","14th amendment","15th amendment"]},{unitNumber:6,title:"Period 6 (1865-1898)",keywords:["gilded age","transcontinental railroad","andrew carnegie","john d rockefeller","social darwinism","labor unions","knights of labor","american federation of labor","populist party","dawes act","plessy v ferguson"]},{unitNumber:7,title:"Period 7 (1890-1945)",keywords:["progressive era","muckrakers","spanish-american war","imperialism","world war i","fourteen points","league of nations","roaring twenties","great depression","new deal","fdr","world war ii","pearl harbor","atomic bomb"]},{unitNumber:8,title:"Period 8 (1945-1980)",keywords:["cold war","containment","marshall plan","nato","korean war","cuban missile crisis","vietnam war","civil rights movement","brown v board","martin luther king","great society","watergate"]},{unitNumber:9,title:"Period 9 (1980-Present)",keywords:["reagan administration","conservative movement","end of cold war","persian gulf war","globalization","internet age","september 11","war on terror"]}],allowedDomains:["us history","politics","social movements","foreign policy","constitutional history","economics in history"],forbiddenSignatures:[/\b(?:definite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|dna\s+replication|mitosis|titration)\b/i]},"ap-psychology":{subjectId:"ap-psychology",subjectName:"AP Psychology",category:"social_science",mathExpected:!1,canonicalUnits:[{unitNumber:1,title:"Biological Bases of Behavior",keywords:["neuron","action potential","synapse","neurotransmitter","dopamine","serotonin","endorphins","central nervous system","brain structures","cerebral cortex","hippocampus","amygdala","neuroplasticity"]},{unitNumber:2,title:"Cognition",keywords:["memory","encoding","storage","retrieval","sensory memory","short-term memory","long-term memory","chunking","amnesia","problem solving","heuristics","biases","language acquisition"]},{unitNumber:3,title:"Development & Learning",keywords:["classical conditioning","pavlov","unconditioned stimulus","conditioned response","operant conditioning","skinner","reinforcement","punishment","social learning","bandura","piaget","erikson","kohlberg"]},{unitNumber:4,title:"Social Psychology & Personality",keywords:["conformity","asch","obedience","milgram","attribution theory","fundamental attribution error","cognitive dissonance","bystander effect","in-group bias","freud","big five traits"]},{unitNumber:5,title:"Mental & Physical Health",keywords:["dsm-5","anxiety disorders","major depressive disorder","bipolar","schizophrenia","obsessive-compulsive","ptsd","psychotherapy","cbt","biopsychosocial model"]}],allowedDomains:["psychology","neuroscience","cognition","behavior","development","mental health"],forbiddenSignatures:[/\b(?:definite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|titration|von\s+thunen)\b/i]},"ap-statistics":{subjectId:"ap-statistics",subjectName:"AP Statistics",category:"stem_math",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Exploring One-Variable Data",keywords:["mean","median","mode","standard deviation","iqr","outlier","box plot","histogram","z-score","normal distribution"]},{unitNumber:2,title:"Exploring Two-Variable Data",keywords:["scatter plot","correlation r","coefficient of determination r-squared","residual","least-squares regression line","influential point","extrapolation"]},{unitNumber:3,title:"Collecting Data",keywords:["simple random sample","srs","stratified sample","cluster sample","systematic sample","convenience sample","bias","confounding","placebo","double blind","blocking"]},{unitNumber:4,title:"Probability, Random Variables & Probability Distributions",keywords:["mutually exclusive","independent events","conditional probability","binomial distribution","geometric distribution","expected value","variance"]},{unitNumber:5,title:"Sampling Distributions",keywords:["central limit theorem","clt","sampling variability","unbiased estimator","standard error","normal approximation"]},{unitNumber:6,title:"Inference for Categorical Data: Proportions",keywords:["confidence interval for p","one-sample z-test","two-sample z-test","p-value","type i error","type ii error","power","margin of error"]},{unitNumber:7,title:"Inference for Quantitative Data: Means",keywords:["t-distribution","degrees of freedom","one-sample t-test","two-sample t-test","paired t-test","t-interval"]},{unitNumber:8,title:"Inference for Categorical Data: Chi-Square",keywords:["chi-square goodness of fit","chi-square test of independence","chi-square test of homogeneity","expected counts","observed counts"]},{unitNumber:9,title:"Inference for Quantitative Data: Slopes",keywords:["t-test for slope","confidence interval for slope","linear regression model conditions"]}],allowedDomains:["descriptive statistics","probability","sampling","hypothesis testing","confidence intervals","regression inference"],forbiddenSignatures:[/\b(?:definite\s+integral|indefinite\s+integral|fundamental\s+theorem\s+of\s+calculus|derivative|dy\/dx|disk\s+method|washer\s+method|taylor\s+series)\b/i,/\b(?:dtm|demographic\s+transition|von\s+thunen|gerrymandering|chloroplast)\b/i]},"ap-us-government":{subjectId:"ap-us-government",subjectName:"AP U.S. Government & Politics",category:"social_science",mathExpected:!1,canonicalUnits:[{unitNumber:1,title:"Foundations of American Democracy",keywords:["federalist 10","brutus 1","declaration of independence","articles of confederation","constitution","bill of rights","federalism","separation of powers","checks and balances","mcculloch v maryland","us v lopez"]},{unitNumber:2,title:"Interactions Among Branches of Government",keywords:["congress","house","senate","filibuster","cloture","gerrymandering","presidency","executive order","veto","pocket veto","federalist 70","bureaucracy","iron triangle","supreme court","judicial review","marbury v madison","federalist 78","stare decisis"]},{unitNumber:3,title:"Civil Liberties & Civil Rights",keywords:["first amendment","establishment clause","free exercise clause","schenck v us","tinker v des moines","new york times v us","second amendment","fourth amendment","exclusionary rule","miranda","fourteenth amendment","due process","equal protection","selective incorporation","brown v board","letter from birmingham jail"]},{unitNumber:4,title:"American Political Ideologies & Beliefs",keywords:["political socialization","liberalism","conservatism","libertarianism","public opinion polling","scientific polling","sampling error","fiscal policy","monetary policy","federal reserve"]},{unitNumber:5,title:"Political Participation",keywords:["voting rights","15th amendment","19th amendment","24th amendment","26th amendment","voter turnout","political parties","critical elections","realignment","interest groups","citizens united v fec","pacs","super pacs","electoral college","media bias","horse-race journalism"]}],allowedDomains:["american politics","constitution","scotus cases","foundational documents","civil rights","elections","institutions of government"],forbiddenSignatures:[/\b(?:definite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|titration|chloroplast|mitosis)\b/i]}};function Re(f){if(!f)return null;const s=f.toLowerCase().trim();if(O[s])return O[s];for(const[t,c]of Object.entries(O))if(s.includes(t.replace("ap-",""))||s.includes(c.subjectName.toLowerCase().replace("ap ","")))return c;return s.includes("geography")||s.includes("aphg")?O["ap-human-geography"]:s.includes("environmental")||s.includes("apes")?O["ap-environmental-science"]:s.includes("principles")||s.includes("csp")?O["ap-computer-science-principles"]:s.includes("calculus bc")?O["ap-calculus-bc"]:s.includes("calculus")?O["ap-calculus-ab"]:s.includes("physics")?O["ap-physics-1"]:s.includes("chemistry")?O["ap-chemistry"]:s.includes("biology")?O["ap-biology"]:s.includes("history")||s.includes("apush")?O["ap-us-history"]:s.includes("psych")?O["ap-psychology"]:s.includes("stat")?O["ap-statistics"]:s.includes("gov")||s.includes("politics")?O["ap-us-government"]:null}const he=`<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='400' height='220' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1'/>
  
  <!-- Title & Model Header -->
  <text x='200' y='18' text-anchor='middle' fill='#f8fafc' font-size='11' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>DEMOGRAPHIC TRANSITION MODEL (STAGES 1–5)</text>
  
  <!-- Stage Background Columns -->
  <!-- Stage 1 (x: 45 to 110) -->
  <rect x='45' y='26' width='65' height='150' fill='#18181b' fill-opacity='0.4'/>
  <!-- Stage 2 (x: 110 to 175) -->
  <rect x='110' y='26' width='65' height='150' fill='#27272a' fill-opacity='0.2'/>
  <!-- Stage 3 (x: 175 to 240) -->
  <rect x='175' y='26' width='65' height='150' fill='#18181b' fill-opacity='0.4'/>
  <!-- Stage 4 (x: 240 to 305) -->
  <rect x='240' y='26' width='65' height='150' fill='#27272a' fill-opacity='0.2'/>
  <!-- Stage 5 (x: 305 to 370) -->
  <rect x='305' y='26' width='65' height='150' fill='#18181b' fill-opacity='0.4'/>

  <!-- Vertical Stage Dividers -->
  <line x1='110' y1='26' x2='110' y2='176' stroke='#3f3f46' stroke-width='1' stroke-dasharray='3,3'/>
  <line x1='175' y1='26' x2='175' y2='176' stroke='#3f3f46' stroke-width='1' stroke-dasharray='3,3'/>
  <line x1='240' y1='26' x2='240' y2='176' stroke='#3f3f46' stroke-width='1' stroke-dasharray='3,3'/>
  <line x1='305' y1='26' x2='305' y2='176' stroke='#3f3f46' stroke-width='1' stroke-dasharray='3,3'/>
  
  <!-- Stage Column Labels -->
  <text x='77' y='36' text-anchor='middle' fill='#e2e8f0' font-size='9' font-family='sans-serif' font-weight='700'>Stage 1</text>
  <text x='77' y='46' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>High Stat.</text>

  <text x='142' y='36' text-anchor='middle' fill='#e2e8f0' font-size='9' font-family='sans-serif' font-weight='700'>Stage 2</text>
  <text x='142' y='46' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>Early Exp.</text>

  <text x='207' y='36' text-anchor='middle' fill='#e2e8f0' font-size='9' font-family='sans-serif' font-weight='700'>Stage 3</text>
  <text x='207' y='46' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>Late Exp.</text>

  <text x='272' y='36' text-anchor='middle' fill='#e2e8f0' font-size='9' font-family='sans-serif' font-weight='700'>Stage 4</text>
  <text x='272' y='46' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>Low Stat.</text>

  <text x='337' y='36' text-anchor='middle' fill='#e2e8f0' font-size='9' font-family='sans-serif' font-weight='700'>Stage 5</text>
  <text x='337' y='46' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>Declining</text>

  <!-- Y-Axis (Rates per 1,000) -->
  <line x1='45' y1='26' x2='45' y2='176' stroke='#64748b' stroke-width='1.5'/>
  <line x1='45' y1='176' x2='370' y2='176' stroke='#64748b' stroke-width='1.5'/>
  
  <text x='42' y='57' text-anchor='end' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>40</text>
  <line x1='42' y1='55' x2='45' y2='55' stroke='#64748b' stroke-width='1'/>

  <text x='42' y='97' text-anchor='end' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>30</text>
  <line x1='42' y1='95' x2='45' y2='95' stroke='#64748b' stroke-width='1'/>

  <text x='42' y='137' text-anchor='end' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>20</text>
  <line x1='42' y1='135' x2='45' y2='135' stroke='#64748b' stroke-width='1'/>

  <text x='42' y='167' text-anchor='end' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>10</text>
  <line x1='42' y1='165' x2='45' y2='165' stroke='#64748b' stroke-width='1'/>

  <!-- Y-Axis Title -->
  <text x='14' y='105' text-anchor='middle' transform='rotate(-90 14 105)' fill='#94a3b8' font-size='8' font-family='sans-serif' font-weight='600'>Rate per 1,000 / Total Pop</text>

  <!-- Shaded Natural Increase Rate (NIR) Region across Stage 2 & Stage 3 -->
  <polygon points='110,55 175,55 240,140 240,154 175,145 110,60' fill='#22c55e' fill-opacity='0.16'/>
  <text x='175' y='100' text-anchor='middle' fill='#4ade80' font-size='8' font-family='sans-serif' font-weight='700'>Natural Increase (NIR)</text>

  <!-- CBR Curve (Crude Birth Rate: High in 1&2, Drops in 3, Low in 4&5) -->
  <path d='M 45,55 C 70,53 90,56 110,55 C 135,54 155,55 175,55 C 195,65 220,115 240,140 C 265,150 285,154 305,154 C 325,155 350,165 370,168' 
        fill='none' stroke='#38bdf8' stroke-width='2.5' stroke-linecap='round'/>

  <!-- CDR Curve (Crude Death Rate: High fluctuating in 1, Plummets in 2, Low in 3&4, Slight rise in 5) -->
  <path d='M 45,60 C 65,58 75,65 90,59 C 100,64 105,62 110,60 C 125,75 145,125 175,145 C 200,152 225,153 240,154 C 265,155 285,154 305,154 C 325,153 350,148 370,145' 
        fill='none' stroke='#f43f5e' stroke-width='2.5' stroke-linecap='round'/>

  <!-- Total Population Curve (Sigmoid Growth Curve: Low in 1, Accelerates in 2, Sits high in 4, Dips in 5) -->
  <path d='M 45,165 C 75,165 95,164 110,162 C 130,150 155,115 175,90 C 205,65 240,50 270,45 C 295,44 320,44 335,46 C 355,50 365,55 370,60' 
        fill='none' stroke='#fbbf24' stroke-width='2' stroke-dasharray='5,3' stroke-linecap='round'/>

  <!-- Bottom Legend Bar -->
  <rect x='45' y='188' width='325' height='24' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  
  <line x1='55' y1='200' x2='75' y2='200' stroke='#38bdf8' stroke-width='2.5'/>
  <text x='80' y='203' fill='#f1f5f9' font-size='8' font-family='sans-serif' font-weight='600'>Crude Birth Rate (CBR)</text>

  <line x1='175' y1='200' x2='195' y2='200' stroke='#f43f5e' stroke-width='2.5'/>
  <text x='200' y='203' fill='#f1f5f9' font-size='8' font-family='sans-serif' font-weight='600'>Crude Death Rate (CDR)</text>

  <line x1='290' y1='200' x2='310' y2='200' stroke='#fbbf24' stroke-width='2' stroke-dasharray='4,2'/>
  <text x='315' y='203' fill='#f1f5f9' font-size='8' font-family='sans-serif' font-weight='600'>Total Population</text>
</svg>`,Le=`<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='400' height='220' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1'/>
  
  <text x='200' y='18' text-anchor='middle' fill='#f8fafc' font-size='11' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>VON THÜNEN AGRICULTURAL LAND-USE MODEL</text>

  <!-- Left: Concentric Rings (Center at x=115, y=115) -->
  <!-- Ring 4: Ranching / Livestock -->
  <circle cx='115' cy='115' r='88' fill='#581c87' fill-opacity='0.4' stroke='#a855f7' stroke-width='1.5'/>
  <!-- Ring 3: Extensive Field Crops & Grains -->
  <circle cx='115' cy='115' r='68' fill='#854d0e' fill-opacity='0.45' stroke='#eab308' stroke-width='1.5'/>
  <!-- Ring 2: Forest & Fuel Wood -->
  <circle cx='115' cy='115' r='48' fill='#78350f' fill-opacity='0.5' stroke='#f97316' stroke-width='1.5'/>
  <!-- Ring 1: Dairying & Intensive Market Gardening -->
  <circle cx='115' cy='115' r='28' fill='#065f46' fill-opacity='0.6' stroke='#10b981' stroke-width='1.5'/>
  <!-- Central Market City -->
  <circle cx='115' cy='115' r='10' fill='#2563eb' stroke='#60a5fa' stroke-width='2'/>
  <text x='115' y='118' text-anchor='middle' fill='#ffffff' font-size='7' font-family='sans-serif' font-weight='bold'>CBD</text>

  <!-- Ring Identification Annotations -->
  <line x1='115' y1='105' x2='115' y2='32' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2,2'/>
  
  <!-- Right: Legend and Bid-Rent Principle Breakdown -->
  <rect x='215' y='30' width='175' height='175' fill='#18181b' rx='8' stroke='#27272a' stroke-width='1'/>
  <text x='225' y='46' fill='#f8fafc' font-size='9' font-family='sans-serif' font-weight='800'>MODEL RINGS &amp; BID-RENT:</text>

  <!-- Item CBD -->
  <circle cx='228' cy='62' r='5' fill='#2563eb'/>
  <text x='240' y='65' fill='#e2e8f0' font-size='8' font-family='sans-serif' font-weight='bold'>Central Market / City</text>

  <!-- Item 1 -->
  <circle cx='228' cy='82' r='5' fill='#10b981'/>
  <text x='240' y='81' fill='#a7f3d0' font-size='8' font-family='sans-serif' font-weight='bold'>1. Market Gardening &amp; Dairy</text>
  <text x='240' y='91' fill='#94a3b8' font-size='7' font-family='sans-serif'>High land cost, highly perishable</text>

  <!-- Item 2 -->
  <circle cx='228' cy='110' r='5' fill='#f97316'/>
  <text x='240' y='109' fill='#fed7aa' font-size='8' font-family='sans-serif' font-weight='bold'>2. Forest / Timber &amp; Firewood</text>
  <text x='240' y='119' fill='#94a3b8' font-size='7' font-family='sans-serif'>Heavy freight, high transport cost</text>

  <!-- Item 3 -->
  <circle cx='228' cy='138' r='5' fill='#eab308'/>
  <text x='240' y='137' fill='#fef08a' font-size='8' font-family='sans-serif' font-weight='bold'>3. Extensive Grains &amp; Wheat</text>
  <text x='240' y='147' fill='#94a3b8' font-size='7' font-family='sans-serif'>Lower land cost, non-perishable</text>

  <!-- Item 4 -->
  <circle cx='228' cy='166' r='5' fill='#a855f7'/>
  <text x='240' y='165' fill='#e9d5ff' font-size='8' font-family='sans-serif' font-weight='bold'>4. Ranching &amp; Livestock</text>
  <text x='240' y='175' fill='#94a3b8' font-size='7' font-family='sans-serif'>Cheapest land, self-transporting</text>

  <!-- Distance Decay Note -->
  <text x='225' y='195' fill='#38bdf8' font-size='7.5' font-family='sans-serif' font-weight='600'>Key Factor: Bid-Rent &amp; Transport Cost</text>
</svg>`,Ie=`<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='400' height='220' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1'/>
  
  <text x='200' y='18' text-anchor='middle' fill='#f8fafc' font-size='11' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>BURGESS CONCENTRIC ZONE MODEL (URBAN LAND-USE)</text>

  <!-- Concentric Rings (Center at x=115, y=115) -->
  <!-- Zone 5: Commuter Zone -->
  <circle cx='115' cy='115' r='88' fill='#1e293b' stroke='#64748b' stroke-width='1.5'/>
  <!-- Zone 4: Better Residences -->
  <circle cx='115' cy='115' r='70' fill='#0f766e' fill-opacity='0.4' stroke='#14b8a6' stroke-width='1.5'/>
  <!-- Zone 3: Working-Class Homes -->
  <circle cx='115' cy='115' r='52' fill='#0369a1' fill-opacity='0.45' stroke='#0284c7' stroke-width='1.5'/>
  <!-- Zone 2: Zone in Transition -->
  <circle cx='115' cy='115' r='34' fill='#b91c1c' fill-opacity='0.45' stroke='#ef4444' stroke-width='1.5'/>
  <!-- Zone 1: Central Business District (CBD) -->
  <circle cx='115' cy='115' r='14' fill='#eab308' stroke='#fde047' stroke-width='2'/>
  <text x='115' y='118' text-anchor='middle' fill='#000000' font-size='7' font-family='sans-serif' font-weight='bold'>1</text>

  <!-- Number labels on rings -->
  <text x='115' y='90' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>2</text>
  <text x='115' y='72' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>3</text>
  <text x='115' y='55' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>4</text>
  <text x='115' y='38' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>5</text>

  <!-- Legend -->
  <rect x='215' y='30' width='175' height='175' fill='#18181b' rx='8' stroke='#27272a' stroke-width='1'/>
  <text x='225' y='46' fill='#f8fafc' font-size='9' font-family='sans-serif' font-weight='800'>5 CONCENTRIC URBAN ZONES:</text>

  <circle cx='228' cy='62' r='5' fill='#eab308'/>
  <text x='240' y='65' fill='#fef08a' font-size='8' font-family='sans-serif' font-weight='bold'>1. CBD (Commercial Center)</text>

  <circle cx='228' cy='88' r='5' fill='#ef4444'/>
  <text x='240' y='87' fill='#fca5a5' font-size='8' font-family='sans-serif' font-weight='bold'>2. Zone of Transition</text>
  <text x='240' y='97' fill='#94a3b8' font-size='7' font-family='sans-serif'>Industry, tenements, high density</text>

  <circle cx='228' cy='118' r='5' fill='#0284c7'/>
  <text x='240' y='117' fill='#7dd3fc' font-size='8' font-family='sans-serif' font-weight='bold'>3. Independent Workers' Homes</text>
  <text x='240' y='127' fill='#94a3b8' font-size='7' font-family='sans-serif'>Older single-family homes</text>

  <circle cx='228' cy='148' r='5' fill='#14b8a6'/>
  <text x='240' y='147' fill='#99f6e4' font-size='8' font-family='sans-serif' font-weight='bold'>4. Zone of Better Residences</text>
  <text x='240' y='157' fill='#94a3b8' font-size='7' font-family='sans-serif'>Middle class spacious housing</text>

  <circle cx='228' cy='178' r='5' fill='#64748b'/>
  <text x='240' y='177' fill='#cbd5e1' font-size='8' font-family='sans-serif' font-weight='bold'>5. Commuter Zone</text>
  <text x='240' y='187' fill='#94a3b8' font-size='7' font-family='sans-serif'>Dormitory suburbs, car commuters</text>
</svg>`,Pe=`<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='400' height='220' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1'/>
  
  <text x='200' y='18' text-anchor='middle' fill='#f8fafc' font-size='11' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>HOYT SECTOR MODEL (URBAN GROWTH ALONG CORRIDORS)</text>

  <!-- Left: Sectors (Center at x=115, y=115, R=80) -->
  <g transform='translate(115, 115)'>
    <!-- Transportation corridor & Industry (Wedge 1) -->
    <path d='M 0,0 L 70,-40 A 80 80 0 0 1 80,10 Z' fill='#b91c1c' fill-opacity='0.6' stroke='#ef4444' stroke-width='1.5'/>
    <!-- Low-class Residential (Wedge 2 flanking industry) -->
    <path d='M 0,0 L 80,10 A 80 80 0 0 1 40,70 Z' fill='#ea580c' fill-opacity='0.5' stroke='#f97316' stroke-width='1.5'/>
    <!-- Middle-class Residential (Wedge 3 broad expansion) -->
    <path d='M 0,0 L 40,70 A 80 80 0 0 1 -70,40 Z' fill='#0284c7' fill-opacity='0.5' stroke='#38bdf8' stroke-width='1.5'/>
    <!-- High-class Residential Corridor (Wedge 4 opposite industry) -->
    <path d='M 0,0 L -70,40 A 80 80 0 0 1 -40,-70 Z' fill='#059669' fill-opacity='0.6' stroke='#34d399' stroke-width='1.5'/>
    <!-- Middle-class Residential 2 -->
    <path d='M 0,0 L -40,-70 A 80 80 0 0 1 70,-40 Z' fill='#0284c7' fill-opacity='0.5' stroke='#38bdf8' stroke-width='1.5'/>
    <!-- Central Business District (CBD) -->
    <circle cx='0' cy='0' r='18' fill='#eab308' stroke='#fde047' stroke-width='2'/>
    <text x='0' y='4' text-anchor='middle' fill='#000000' font-size='8' font-family='sans-serif' font-weight='bold'>CBD</text>
  </g>

  <!-- Right: Legend -->
  <rect x='215' y='30' width='175' height='175' fill='#18181b' rx='8' stroke='#27272a' stroke-width='1'/>
  <text x='225' y='46' fill='#f8fafc' font-size='9' font-family='sans-serif' font-weight='800'>HOYT SECTOR CLASSIFICATION:</text>

  <circle cx='228' cy='64' r='5' fill='#eab308'/>
  <text x='240' y='67' fill='#fef08a' font-size='8' font-family='sans-serif' font-weight='bold'>1. CBD (Central Core)</text>

  <circle cx='228' cy='90' r='5' fill='#ef4444'/>
  <text x='240' y='89' fill='#fca5a5' font-size='8' font-family='sans-serif' font-weight='bold'>2. Transportation &amp; Industry</text>
  <text x='240' y='99' fill='#94a3b8' font-size='7' font-family='sans-serif'>Rails, waterways, manufacturing</text>

  <circle cx='228' cy='122' r='5' fill='#f97316'/>
  <text x='240' y='121' fill='#fed7aa' font-size='8' font-family='sans-serif' font-weight='bold'>3. Low-Class Residential</text>
  <text x='240' y='131' fill='#94a3b8' font-size='7' font-family='sans-serif'>Closest to factories &amp; pollution</text>

  <circle cx='228' cy='152' r='5' fill='#38bdf8'/>
  <text x='240' y='151' fill='#bae6fd' font-size='8' font-family='sans-serif' font-weight='bold'>4. Middle-Class Residential</text>
  <text x='240' y='161' fill='#94a3b8' font-size='7' font-family='sans-serif'>Buffer zones and suburbs</text>

  <circle cx='228' cy='182' r='5' fill='#34d399'/>
  <text x='240' y='181' fill='#a7f3d0' font-size='8' font-family='sans-serif' font-weight='bold'>5. High-Class Residential</text>
  <text x='240' y='191' fill='#94a3b8' font-size='7' font-family='sans-serif'>Along spine / clean environmental axis</text>
</svg>`,Fe=`<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <pattern id='hatch-high-tfr' width='8' height='8' patternTransform='rotate(45 0 0)' patternUnits='userSpaceOnUse'>
      <line x1='0' y1='0' x2='0' y2='8' stroke='#f43f5e' stroke-width='2'/>
    </pattern>
  </defs>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <!-- Header -->
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: GLOBAL TOTAL FERTILITY RATES (TFR) BY MACRO-GEOGRAPHIC REGION
  </text>

  <!-- World Macro-Region Schematic Polygons -->
  <!-- North America (TFR < 2.1 - Low/Aging) -->
  <polygon points='40,50 140,50 150,90 120,120 70,110 40,75' fill='#0284c7' fill-opacity='0.65' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='85' y='80' text-anchor='middle' fill='#ffffff' font-size='8.5' font-family='sans-serif' font-weight='bold'>North America</text>
  <text x='85' y='92' text-anchor='middle' fill='#bae6fd' font-size='7.5' font-family='sans-serif'>TFR: 1.6 (Stage 4)</text>

  <!-- Latin America & Caribbean (TFR ~1.9 - Replacement) -->
  <polygon points='95,130 145,130 170,180 150,230 115,220 90,165' fill='#0d9488' fill-opacity='0.65' stroke='#2dd4bf' stroke-width='1.5'/>
  <text x='130' y='170' text-anchor='middle' fill='#ffffff' font-size='8.5' font-family='sans-serif' font-weight='bold'>Latin America</text>
  <text x='130' y='182' text-anchor='middle' fill='#99f6e4' font-size='7.5' font-family='sans-serif'>TFR: 1.9 (Stage 3/4)</text>

  <!-- Western & Northern Europe (TFR < 2.1 - Sub-replacement) -->
  <polygon points='205,50 270,50 280,95 240,105 200,90' fill='#0284c7' fill-opacity='0.65' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='240' y='72' text-anchor='middle' fill='#ffffff' font-size='8.5' font-family='sans-serif' font-weight='bold'>Europe</text>
  <text x='240' y='84' text-anchor='middle' fill='#bae6fd' font-size='7.5' font-family='sans-serif'>TFR: 1.5 (Stage 4/5)</text>

  <!-- Middle East & North Africa (TFR 2.1-3.5 - Moderate) -->
  <polygon points='200,105 295,105 285,135 210,135' fill='#d97706' fill-opacity='0.6' stroke='#fbbf24' stroke-width='1.5'/>
  <text x='245' y='122' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>MENA (TFR: 2.7)</text>

  <!-- Sub-Saharan Africa (TFR > 3.5 - High Fertility Stage 2) -->
  <polygon points='210,140 295,140 280,225 240,235 215,190' fill='url(#hatch-high-tfr)' stroke='#f43f5e' stroke-width='1.8'/>
  <rect x='215' y='165' width='70' height='30' fill='#18181b' fill-opacity='0.85' rx='4'/>
  <text x='250' y='178' text-anchor='middle' fill='#fca5a5' font-size='8' font-family='sans-serif' font-weight='bold'>Sub-Saharan</text>
  <text x='250' y='189' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif'>TFR: 4.6 (Stage 2)</text>

  <!-- South Asia (TFR ~2.0 - Near Replacement) -->
  <polygon points='310,105 375,105 365,160 330,175 315,140' fill='#0d9488' fill-opacity='0.65' stroke='#2dd4bf' stroke-width='1.5'/>
  <text x='342' y='132' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>South Asia</text>
  <text x='342' y='143' text-anchor='middle' fill='#99f6e4' font-size='7' font-family='sans-serif'>TFR: 2.0 (Stage 3)</text>

  <!-- East Asia (TFR < 2.1 - Rapid Decline) -->
  <polygon points='365,55 450,55 460,110 400,120 360,95' fill='#0284c7' fill-opacity='0.65' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='410' y='80' text-anchor='middle' fill='#ffffff' font-size='8.5' font-family='sans-serif' font-weight='bold'>East Asia</text>
  <text x='410' y='92' text-anchor='middle' fill='#bae6fd' font-size='7.5' font-family='sans-serif'>TFR: 1.1 (Stage 5)</text>

  <!-- Australia & Oceania (TFR < 2.1) -->
  <polygon points='400,175 480,175 470,225 410,225' fill='#0284c7' fill-opacity='0.65' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='440' y='198' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>Oceania</text>
  <text x='440' y='209' text-anchor='middle' fill='#bae6fd' font-size='7' font-family='sans-serif'>TFR: 1.7</text>

  <!-- North Arrow Compass -->
  <g transform='translate(485, 45)'>
    <circle cx='0' cy='0' r='14' fill='#18181b' stroke='#3f3f46' stroke-width='1'/>
    <polygon points='0,-10 -4,3 0,0 4,3' fill='#ef4444'/>
    <text x='0' y='-12' text-anchor='middle' fill='#f8fafc' font-size='7' font-family='sans-serif' font-weight='bold'>N</text>
  </g>

  <!-- Legend Box (Bottom) -->
  <rect x='20' y='244' width='480' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='30' y='261' fill='#94a3b8' font-size='8' font-family='sans-serif' font-weight='bold'>CHOROPLETH TFR TIERS:</text>

  <rect x='160' y='251' width='16' height='12' fill='url(#hatch-high-tfr)' stroke='#f43f5e' stroke-width='1'/>
  <text x='182' y='261' fill='#fca5a5' font-size='8' font-family='sans-serif'>High (&gt; 3.5)</text>

  <rect x='270' y='251' width='16' height='12' fill='#d97706' stroke='#fbbf24' stroke-width='1'/>
  <text x='292' y='261' fill='#fed7aa' font-size='8' font-family='sans-serif'>Moderate (2.1 - 3.5)</text>

  <rect x='410' y='251' width='16' height='12' fill='#0284c7' stroke='#38bdf8' stroke-width='1'/>
  <text x='432' y='261' fill='#bae6fd' font-size='8' font-family='sans-serif'>Sub-Repl. (&lt; 2.1)</text>
</svg>`,De=`<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <marker id='mig-arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
      <path d='M 0,1 L 10,5 L 0,9 z' fill='#38bdf8'/>
    </marker>
    <marker id='mig-arrow-amber' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
      <path d='M 0,1 L 10,5 L 0,9 z' fill='#fbbf24'/>
    </marker>
  </defs>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <!-- Title -->
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: MAJOR GLOBAL TRANSNATIONAL MIGRATION CORRIDORS &amp; LABOR FLOWS
  </text>

  <!-- Regional Nodes -->
  <!-- Node: North America -->
  <rect x='40' y='65' width='105' height='55' rx='8' fill='#1e293b' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='92' y='88' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>North America</text>
  <text x='92' y='102' text-anchor='middle' fill='#38bdf8' font-size='7.5' font-family='sans-serif'>Major Destination (Pull)</text>

  <!-- Node: Latin America -->
  <rect x='40' y='170' width='105' height='55' rx='8' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/>
  <text x='92' y='193' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>Latin America</text>
  <text x='92' y='207' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>Origin (Push Factors)</text>

  <!-- Corridor 1: Latin America -> North America -->
  <path d='M 92,170 Q 75,145 92,125' fill='none' stroke='#38bdf8' stroke-width='3.5' marker-end='url(#mig-arrow-blue)'/>
  <text x='112' y='148' fill='#bae6fd' font-size='7.5' font-family='sans-serif' font-weight='bold'>Corridor A</text>

  <!-- Node: Western Europe -->
  <rect x='205' y='65' width='110' height='55' rx='8' fill='#1e293b' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='260' y='88' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>Western Europe</text>
  <text x='260' y='102' text-anchor='middle' fill='#38bdf8' font-size='7.5' font-family='sans-serif'>Destination (Schengen)</text>

  <!-- Node: North & Sub-Saharan Africa -->
  <rect x='205' y='170' width='110' height='55' rx='8' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/>
  <text x='260' y='193' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>Africa (North/Sub)</text>
  <text x='260' y='207' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>Origin (Economic Push)</text>

  <!-- Corridor 2: Africa -> Europe -->
  <path d='M 260,170 Q 240,145 260,125' fill='none' stroke='#38bdf8' stroke-width='3' marker-end='url(#mig-arrow-blue)'/>
  <text x='280' y='148' fill='#bae6fd' font-size='7.5' font-family='sans-serif' font-weight='bold'>Corridor B</text>

  <!-- Node: Arabian Gulf (GCC States) -->
  <rect x='375' y='65' width='115' height='55' rx='8' fill='#1e293b' stroke='#fbbf24' stroke-width='1.5'/>
  <text x='432' y='88' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>Arabian Gulf (GCC)</text>
  <text x='432' y='102' text-anchor='middle' fill='#fbbf24' font-size='7.5' font-family='sans-serif'>Guest Contract Workers</text>

  <!-- Node: South & Southeast Asia -->
  <rect x='375' y='170' width='115' height='55' rx='8' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/>
  <text x='432' y='193' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>South / SE Asia</text>
  <text x='432' y='207' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>Origin (Remittance Relying)</text>

  <!-- Corridor 3: South Asia -> Gulf GCC -->
  <path d='M 432,170 Q 412,145 432,125' fill='none' stroke='#fbbf24' stroke-width='3.5' marker-end='url(#mig-arrow-amber)'/>
  <text x='452' y='148' fill='#fef08a' font-size='7.5' font-family='sans-serif' font-weight='bold'>Corridor C</text>

  <!-- Remittance Return Dotted Arrow -->
  <path d='M 410,125 Q 395,145 410,165' fill='none' stroke='#10b981' stroke-width='2' stroke-dasharray='4,3'/>
  <text x='355' y='148' fill='#6ee7b7' font-size='7' font-family='sans-serif'>$ Remittances</text>

  <!-- Bottom Key -->
  <rect x='20' y='244' width='480' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='30' y='261' fill='#94a3b8' font-size='8' font-family='sans-serif' font-weight='bold'>MIGRATION MECHANISMS:</text>
  <line x1='160' y1='258' x2='180' y2='258' stroke='#38bdf8' stroke-width='3'/>
  <text x='188' y='261' fill='#e2e8f0' font-size='8' font-family='sans-serif'>Permanent / Asylee Flow</text>
  <line x1='310' y1='258' x2='330' y2='258' stroke='#fbbf24' stroke-width='3'/>
  <text x='338' y='261' fill='#e2e8f0' font-size='8' font-family='sans-serif'>Temporary Contract Labor</text>
  <line x1='450' y1='258' x2='470' y2='258' stroke='#10b981' stroke-width='2' stroke-dasharray='3,2'/>
  <text x='475' y='261' fill='#6ee7b7' font-size='7.5' font-family='sans-serif'>Cash Flow</text>
</svg>`,Oe=`<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <marker id='arrow-core' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
      <path d='M 0,1 L 10,5 L 0,9 z' fill='#38bdf8'/>
    </marker>
    <marker id='arrow-periphery' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
      <path d='M 0,1 L 10,5 L 0,9 z' fill='#f43f5e'/>
    </marker>
  </defs>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: WALLERSTEIN'S WORLD SYSTEMS THEORY (SPATIAL DIVISION OF LABOR)
  </text>

  <!-- Left: Concentric Hierarchy (Center at x=135, y=140) -->
  <!-- Outer Ring: Periphery -->
  <circle cx='135' cy='140' r='95' fill='#881337' fill-opacity='0.4' stroke='#f43f5e' stroke-width='1.5'/>
  <!-- Middle Ring: Semi-Periphery -->
  <circle cx='135' cy='140' r='68' fill='#78350f' fill-opacity='0.5' stroke='#f59e0b' stroke-width='1.5'/>
  <!-- Inner Core -->
  <circle cx='135' cy='140' r='38' fill='#0369a1' fill-opacity='0.7' stroke='#38bdf8' stroke-width='2'/>
  <text x='135' y='136' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>CORE</text>
  <text x='135' y='148' text-anchor='middle' fill='#bae6fd' font-size='7' font-family='sans-serif'>High Tech/Capital</text>

  <text x='135' y='86' text-anchor='middle' fill='#fef08a' font-size='8' font-family='sans-serif' font-weight='bold'>SEMI-PERIPHERY</text>
  <text x='135' y='58' text-anchor='middle' fill='#fecdd3' font-size='8' font-family='sans-serif' font-weight='bold'>PERIPHERY</text>

  <!-- Right: Economic Trade Flows -->
  <rect x='250' y='40' width='250' height='190' rx='8' fill='#18181b' stroke='#27272a' stroke-width='1'/>
  <text x='260' y='58' fill='#f8fafc' font-size='9' font-family='sans-serif' font-weight='800'>SPATIAL INTERACTION &amp; UNEQUAL EXCHANGE:</text>

  <!-- Flow 1: Periphery -> Core (Raw Materials) -->
  <rect x='260' y='72' width='230' height='40' rx='6' fill='#27272a' stroke='#f43f5e' stroke-width='1'/>
  <text x='270' y='86' fill='#fca5a5' font-size='8' font-family='sans-serif' font-weight='bold'>Periphery to Core:</text>
  <text x='270' y='98' fill='#e2e8f0' font-size='7' font-family='sans-serif'>Inexpensive raw agricultural goods, minerals &amp; low-wage labor</text>

  <!-- Flow 2: Core -> Periphery (Manufactured Goods) -->
  <rect x='260' y='122' width='230' height='40' rx='6' fill='#27272a' stroke='#38bdf8' stroke-width='1'/>
  <text x='270' y='136' fill='#7dd3fc' font-size='8' font-family='sans-serif' font-weight='bold'>Core to Periphery &amp; Semi-Periphery:</text>
  <text x='270' y='148' fill='#e2e8f0' font-size='7' font-family='sans-serif'>High-profit manufactured goods, machinery &amp; financial credit</text>

  <!-- Semi-periphery role -->
  <rect x='260' y='172' width='230' height='46' rx='6' fill='#27272a' stroke='#f59e0b' stroke-width='1'/>
  <text x='270' y='186' fill='#fde047' font-size='8' font-family='sans-serif' font-weight='bold'>Role of Semi-Periphery (BRICS):</text>
  <text x='270' y='198' fill='#cbd5e1' font-size='7' font-family='sans-serif'>Buffer zone; exploits periphery while being exploited by core</text>

  <!-- Bottom Key -->
  <rect x='20' y='244' width='480' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='260' y='261' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>
    Core Countries: US, Western Europe, Japan | Semi-Periphery: China, Brazil, India, Mexico | Periphery: Sub-Saharan Africa
  </text>
</svg>`,Me=`<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: HARRIS-ULLMAN MULTIPLE NUCLEI &amp; GALACTIC EDGE CITY MODEL
  </text>

  <!-- Left: Geometric Urban Map (x: 20 to 260) -->
  <!-- Orbital Highway Beltway Ring -->
  <ellipse cx='140' cy='135' rx='110' ry='85' fill='none' stroke='#64748b' stroke-width='2' stroke-dasharray='6,4'/>
  <text x='140' y='46' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>Interstate Orbital Highway Beltway</text>

  <!-- Node 1: CBD -->
  <rect x='110' y='110' width='45' height='35' fill='#eab308' stroke='#fde047' stroke-width='1.5' rx='4'/>
  <text x='132' y='132' text-anchor='middle' fill='#000000' font-size='9' font-family='sans-serif' font-weight='bold'>1</text>

  <!-- Node 2: Wholesale & Light Manufacturing -->
  <rect x='70' y='100' width='35' height='45' fill='#ea580c' stroke='#f97316' stroke-width='1.5' rx='4'/>
  <text x='87' y='127' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>2</text>

  <!-- Node 3: Low-Class Residential -->
  <rect x='60' y='150' width='55' height='35' fill='#b91c1c' stroke='#ef4444' stroke-width='1.5' rx='4'/>
  <text x='87' y='172' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>3</text>

  <!-- Node 4: Medium-Class Residential -->
  <polygon points='160,110 210,100 215,160 160,150' fill='#0284c7' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='185' y='135' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>4</text>

  <!-- Node 5: High-Class Residential -->
  <polygon points='160,65 210,60 215,95 160,105' fill='#059669' stroke='#34d399' stroke-width='1.5'/>
  <text x='185' y='87' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>5</text>

  <!-- Node 6: Heavy Industry Outlying Node -->
  <rect x='45' y='70' width='35' height='25' fill='#713f12' stroke='#a16207' stroke-width='1.5' rx='4'/>
  <text x='62' y='87' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>6</text>

  <!-- Node 7: Outlying Business District (Suburban CBD) -->
  <rect x='185' y='175' width='35' height='25' fill='#eab308' stroke='#fde047' stroke-width='1.5' rx='4'/>
  <text x='202' y='192' text-anchor='middle' fill='#000000' font-size='8' font-family='sans-serif' font-weight='bold'>7</text>

  <!-- Node 8: Residential Suburb -->
  <rect x='120' y='190' width='55' height='25' fill='#0284c7' stroke='#38bdf8' stroke-width='1.5' rx='4'/>
  <text x='147' y='207' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>8</text>

  <!-- Node 9: Galactic Edge City along Beltway Intersection -->
  <circle cx='235' cy='180' r='16' fill='#7c3aed' stroke='#a78bfa' stroke-width='2'/>
  <text x='235' y='184' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>9</text>
  <text x='235' y='206' text-anchor='middle' fill='#c4b5fd' font-size='7' font-family='sans-serif' font-weight='bold'>Edge City</text>

  <!-- Right: Legend Box -->
  <rect x='270' y='36' width='235' height='230' rx='8' fill='#18181b' stroke='#27272a' stroke-width='1'/>
  <text x='280' y='52' fill='#f8fafc' font-size='9' font-family='sans-serif' font-weight='800'>MULTIPLE NUCLEI ZONING KEY:</text>

  <text x='280' y='72' fill='#fef08a' font-size='7.5' font-family='sans-serif'><b>1.</b> Central Business District (CBD)</text>
  <text x='280' y='90' fill='#fed7aa' font-size='7.5' font-family='sans-serif'><b>2.</b> Wholesale &amp; Light Manufacturing</text>
  <text x='280' y='108' fill='#fca5a5' font-size='7.5' font-family='sans-serif'><b>3.</b> Low-Class Residential (Near factories)</text>
  <text x='280' y='126' fill='#7dd3fc' font-size='7.5' font-family='sans-serif'><b>4.</b> Medium-Class Residential</text>
  <text x='280' y='144' fill='#86efac' font-size='7.5' font-family='sans-serif'><b>5.</b> High-Class Residential (Farthest from smog)</text>
  <text x='280' y='162' fill='#ca8a04' font-size='7.5' font-family='sans-serif'><b>6.</b> Heavy Manufacturing Node</text>
  <text x='280' y='180' fill='#fef08a' font-size='7.5' font-family='sans-serif'><b>7.</b> Outlying Suburban Business District</text>
  <text x='280' y='198' fill='#7dd3fc' font-size='7.5' font-family='sans-serif'><b>8.</b> Residential Suburb</text>
  <text x='280' y='216' fill='#d8b4fe' font-size='7.5' font-family='sans-serif'><b>9.</b> Galactic Edge City (Jobs along Beltway)</text>

  <text x='280' y='245' fill='#94a3b8' font-size='7' font-family='sans-serif'>
    Harris-Ullman (1945): Polycentric urban structure based on automobile transport.
  </text>
</svg>`,se=`<svg viewBox='0 0 540 420' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <!-- Pattern 1: Diagonal Hatch for Cooler Ocean Water -->
    <pattern id='enso-cool-hatch' width='10' height='10' patternTransform='rotate(45 0 0)' patternUnits='userSpaceOnUse'>
      <line x1='0' y1='0' x2='0' y2='10' stroke='#38bdf8' stroke-width='2'/>
    </pattern>

    <!-- Pattern 2: Horizontal Stripes for Warmer Ocean Water -->
    <pattern id='enso-warm-stripes' width='10' height='8' patternUnits='userSpaceOnUse'>
      <line x1='0' y1='4' x2='10' y2='4' stroke='#fb923c' stroke-width='2.5'/>
    </pattern>

    <!-- Arrow Marker for Trade Winds -->
    <marker id='enso-arrow-head' viewBox='0 0 10 10' refX='2' refY='5' markerWidth='8' markerHeight='8' orient='auto'>
      <path d='M 10,0 L 0,5 L 10,10 z' fill='#f8fafc'/>
    </marker>
  </defs>

  <!-- Background Canvas -->
  <rect width='540' height='420' fill='#09090b' rx='12' stroke='#27272a' stroke-width='1.5'/>

  <!-- Figure Title Header (Exact match to official College Board prompt) -->
  <text x='270' y='22' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.3'>
    FIGURE 1. EFFECTS OF CHANGES IN SEA SURFACE CONDITIONS IN EQUATORIAL PACIFIC OCEAN
  </text>

  <!-- Map Frame Box (x=20, y=34, width=500, height=240) -->
  <rect x='20' y='34' width='500' height='240' fill='#0f172a' stroke='#334155' stroke-width='1.5'/>

  <!-- Latitudes Lines & Labels -->
  <!-- 30° North -->
  <line x1='20' y1='95' x2='520' y2='95' stroke='#64748b' stroke-width='1' stroke-dasharray='5,5'/>
  <rect x='225' y='87' width='90' height='16' fill='#0f172a' rx='3'/>
  <text x='270' y='99' text-anchor='middle' fill='#cbd5e1' font-size='9' font-family='system-ui, sans-serif' font-weight='700'>30° North</text>

  <!-- Equator 0° -->
  <line x1='20' y1='165' x2='520' y2='165' stroke='#64748b' stroke-width='1' stroke-dasharray='5,5'/>
  <rect x='225' y='157' width='90' height='16' fill='#0f172a' rx='3'/>
  <text x='270' y='169' text-anchor='middle' fill='#cbd5e1' font-size='9' font-family='system-ui, sans-serif' font-weight='700'>Equator 0°</text>

  <!-- Continents Silhouettes -->
  <!-- 1. Asia / East Eurasia (Top Left) -->
  <path d='M 20,34 L 150,34 Q 165,55 175,80 Q 160,110 145,130 Q 120,150 95,170 Q 75,185 55,200 L 20,200 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>
  <!-- Japan Arc -->
  <path d='M 172,78 Q 182,95 175,115' fill='none' stroke='#94a3b8' stroke-width='3' stroke-linecap='round'/>
  <!-- SE Asia & Indonesian Islands -->
  <ellipse cx='105' cy='180' rx='14' ry='5' fill='#475569' stroke='#94a3b8'/>
  <ellipse cx='135' cy='188' rx='20' ry='6' fill='#475569' stroke='#94a3b8'/>
  <ellipse cx='175' cy='190' rx='22' ry='7' fill='#475569' stroke='#94a3b8'/>

  <!-- 2. North America (Top Right) -->
  <path d='M 320,34 L 520,34 L 520,140 Q 480,135 445,115 Q 420,95 385,80 Q 350,60 320,34 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>
  <!-- Central America & Mexico Isthmus -->
  <path d='M 445,115 Q 465,130 475,155 Q 465,168 450,172' fill='none' stroke='#334155' stroke-width='12' stroke-linecap='round'/>

  <!-- 3. South America (Bottom Right) -->
  <path d='M 450,172 Q 480,180 520,182 L 520,274 L 455,274 Q 440,245 442,215 Q 442,190 450,172 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>

  <!-- 4. Australia (Bottom Left) - Split into West (Normal) and East (Black Shaded: High Precipitation) -->
  <!-- West Australia (Normal Light Fill) -->
  <path d='M 105,225 Q 130,215 145,216 L 145,274 Q 128,274 112,262 Q 98,248 105,225 Z' fill='#1e293b' stroke='#64748b' stroke-width='1.5'/>
  <!-- East Australia (Solid Black Fill: Increased Chance of Precipitation) -->
  <path d='M 145,216 Q 165,215 180,228 Q 185,250 176,270 Q 158,275 145,274 Z' fill='#000000' stroke='#38bdf8' stroke-width='2'/>
  <!-- New Zealand -->
  <ellipse cx='205' cy='268' rx='4' ry='11' transform='rotate(25 205 268)' fill='#475569' stroke='#94a3b8'/>

  <!-- Oceanic Thermal Conditions (Thematic Layers) -->
  <!-- Layer A: Warm Pool in Western Equatorial Pacific (Horizontal Stripes) -->
  <path d='M 80,145 Q 140,130 200,140 Q 225,165 220,198 Q 205,225 155,220 Q 105,215 75,188 Z' 
        fill='url(#enso-warm-stripes)' stroke='#fb923c' stroke-width='1.5' stroke-dasharray='4,2'/>

  <!-- Layer B: Cool Tongue in Eastern Equatorial Pacific (Diagonal Hatch) -->
  <path d='M 255,155 Q 330,135 410,132 Q 460,142 458,168 Q 445,190 405,192 Q 335,185 255,172 Z' 
        fill='url(#enso-cool-hatch)' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='4,2'/>

  <!-- Caribbean / Gulf of Mexico Cool Patch -->
  <ellipse cx='465' cy='135' rx='25' ry='12' fill='url(#enso-cool-hatch)' stroke='#38bdf8' stroke-width='1.2' stroke-dasharray='3,2'/>

  <!-- Stronger than Normal Trade Winds Arrow (Thick Arrow pointing West along Equator) -->
  <line x1='365' y1='165' x2='210' y2='165' stroke='#f8fafc' stroke-width='5.5' marker-end='url(#enso-arrow-head)'/>

  <!-- Compass Rose (South Pacific, x=415, y=232) -->
  <g transform='translate(415, 232)'>
    <circle cx='0' cy='0' r='18' fill='#0f172a' stroke='#64748b' stroke-width='1'/>
    <line x1='0' y1='-16' x2='0' y2='16' stroke='#94a3b8' stroke-width='1.5'/>
    <line x1='-16' y1='0' x2='16' y2='0' stroke='#94a3b8' stroke-width='1.5'/>
    <polygon points='0,-16 3,-5 0,0 -3,-5' fill='#f8fafc'/>
    <polygon points='0,16 3,5 0,0 -3,5' fill='#64748b'/>
    <polygon points='16,0 5,3 0,0 5,-3' fill='#64748b'/>
    <polygon points='-16,0 -5,3 0,0 -5,-3' fill='#64748b'/>
    <text x='0' y='-20' text-anchor='middle' fill='#f8fafc' font-size='8.5' font-family='sans-serif' font-weight='800'>N</text>
    <text x='0' y='27' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif' font-weight='700'>S</text>
    <text x='25' y='3' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif' font-weight='700'>E</text>
    <text x='-25' y='3' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif' font-weight='700'>W</text>
  </g>

  <!-- Bottom Official College Board Legend Box -->
  <rect x='110' y='286' width='320' height='120' fill='#0f172a' rx='8' stroke='#334155' stroke-width='1.5'/>

  <!-- Legend Item 1: Cooler Water -->
  <rect x='125' y='298' width='22' height='14' fill='url(#enso-cool-hatch)' stroke='#38bdf8' stroke-width='1'/>
  <text x='158' y='310' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Ocean water cooler than average</text>

  <!-- Legend Item 2: Warmer Water -->
  <rect x='125' y='322' width='22' height='14' fill='url(#enso-warm-stripes)' stroke='#fb923c' stroke-width='1'/>
  <text x='158' y='334' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Ocean water warmer than average</text>

  <!-- Legend Item 3: Increased Precipitation -->
  <rect x='125' y='346' width='22' height='14' fill='#000000' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='158' y='358' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Increased chance of precipitation</text>

  <!-- Legend Item 4: Stronger Trade Winds -->
  <g transform='translate(125, 376)'>
    <line x1='22' y1='4' x2='2' y2='4' stroke='#f8fafc' stroke-width='3.5' marker-end='url(#enso-arrow-head)'/>
  </g>
  <text x='158' y='382' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Stronger than normal trade winds</text>

  <!-- Climatological Subtitle -->
  <text x='270' y='400' text-anchor='middle' fill='#38bdf8' font-size='8' font-family='system-ui, sans-serif' font-weight='700'>
    CLIMATOLOGICAL CONDITION: LA NIÑA (ENHANCED PACIFIC CIRCULATION)
  </text>
</svg>`,ue=`<svg viewBox='0 0 540 420' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <pattern id='el-nino-warm' width='10' height='8' patternUnits='userSpaceOnUse'>
      <line x1='0' y1='4' x2='10' y2='4' stroke='#f43f5e' stroke-width='2.5'/>
    </pattern>
    <pattern id='el-nino-dry' width='10' height='10' patternTransform='rotate(45 0 0)' patternUnits='userSpaceOnUse'>
      <line x1='0' y1='0' x2='0' y2='10' stroke='#eab308' stroke-width='1.8'/>
    </pattern>
    <marker id='el-nino-arrow' viewBox='0 0 10 10' refX='8' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
      <path d='M 0,0 L 10,5 L 0,10 z' fill='#f43f5e'/>
    </marker>
  </defs>

  <rect width='540' height='420' fill='#09090b' rx='12' stroke='#27272a' stroke-width='1.5'/>
  <text x='270' y='22' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.3'>
    FIGURE 1. EFFECTS OF CHANGES IN SEA SURFACE CONDITIONS: EL NIÑO (ENSO)
  </text>

  <rect x='20' y='34' width='500' height='240' fill='#0f172a' stroke='#334155' stroke-width='1.5'/>

  <!-- Latitudes -->
  <line x1='20' y1='95' x2='520' y2='95' stroke='#64748b' stroke-width='1' stroke-dasharray='5,5'/>
  <rect x='225' y='87' width='90' height='16' fill='#0f172a' rx='3'/>
  <text x='270' y='99' text-anchor='middle' fill='#cbd5e1' font-size='9' font-family='system-ui, sans-serif' font-weight='700'>30° North</text>

  <line x1='20' y1='165' x2='520' y2='165' stroke='#64748b' stroke-width='1' stroke-dasharray='5,5'/>
  <rect x='225' y='157' width='90' height='16' fill='#0f172a' rx='3'/>
  <text x='270' y='169' text-anchor='middle' fill='#cbd5e1' font-size='9' font-family='system-ui, sans-serif' font-weight='700'>Equator 0°</text>

  <!-- Land Masses -->
  <path d='M 20,34 L 150,34 Q 165,55 175,80 Q 160,110 145,130 Q 120,150 95,170 Q 75,185 55,200 L 20,200 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>
  <path d='M 320,34 L 520,34 L 520,140 Q 480,135 445,115 Q 420,95 385,80 Q 350,60 320,34 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>
  <path d='M 450,172 Q 480,180 520,182 L 520,274 L 455,274 Q 440,245 442,215 Q 442,190 450,172 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>

  <!-- Australia with Drought / Dry Hatch -->
  <path d='M 105,225 Q 140,215 175,225 Q 185,255 170,275 Q 130,280 105,255 Z' fill='url(#el-nino-dry)' stroke='#eab308' stroke-width='1.5'/>

  <!-- Eastward Shifted Warm Pool (Spanning Central and Eastern Pacific along Equator) -->
  <path d='M 220,150 Q 310,128 410,130 Q 465,145 460,185 Q 425,205 320,198 Q 240,195 220,175 Z' 
        fill='url(#el-nino-warm)' stroke='#f43f5e' stroke-width='1.8' stroke-dasharray='4,2'/>

  <!-- Weakened / Reversed Trade Winds (Dashed Eastward Arrow) -->
  <line x1='190' y1='165' x2='300' y2='165' stroke='#f43f5e' stroke-width='4' stroke-dasharray='6,3' marker-end='url(#el-nino-arrow)'/>

  <!-- Bottom Legend Box -->
  <rect x='110' y='286' width='320' height='120' fill='#0f172a' rx='8' stroke='#334155' stroke-width='1.5'/>
  <rect x='125' y='298' width='22' height='14' fill='url(#el-nino-warm)' stroke='#f43f5e' stroke-width='1'/>
  <text x='158' y='310' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Ocean water warmer than average (Displaced East)</text>

  <rect x='125' y='322' width='22' height='14' fill='url(#el-nino-dry)' stroke='#eab308' stroke-width='1'/>
  <text x='158' y='334' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Drought risk / Decreased precipitation</text>

  <rect x='125' y='346' width='22' height='14' fill='#0284c7' stroke='#38bdf8' stroke-width='1'/>
  <text x='158' y='358' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Suppressed marine nutrient upwelling off Peru</text>

  <g transform='translate(125, 376)'>
    <line x1='2' y1='4' x2='22' y2='4' stroke='#f43f5e' stroke-width='2.5' stroke-dasharray='4,2' marker-end='url(#el-nino-arrow)'/>
  </g>
  <text x='158' y='382' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Weakened / Reversed trade winds (Eastward flow)</text>

  <text x='270' y='400' text-anchor='middle' fill='#f43f5e' font-size='8' font-family='system-ui, sans-serif' font-weight='700'>
    CLIMATOLOGICAL CONDITION: EL NIÑO (SUPPRESSED WALKER CIRCULATION)
  </text>
</svg>`,Be=`<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <linearGradient id='ocean-grad' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#0369a1'/>
      <stop offset='100%' stop-color='#0284c7'/>
    </linearGradient>
    <linearGradient id='mountain-grad' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#15803d'/>
      <stop offset='45%' stop-color='#475569'/>
      <stop offset='65%' stop-color='#a16207'/>
      <stop offset='100%' stop-color='#78350f'/>
    </linearGradient>
    <marker id='air-arrow' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto'>
      <path d='M 0,0 L 10,5 L 0,10 z' fill='#38bdf8'/>
    </marker>
    <marker id='dry-arrow' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto'>
      <path d='M 0,0 L 10,5 L 0,10 z' fill='#fb923c'/>
    </marker>
  </defs>

  <rect width='500' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  <text x='250' y='20' text-anchor='middle' fill='#f8fafc' font-size='11' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    THE RAIN SHADOW EFFECT (OROGRAPHIC PRECIPITATION)
  </text>

  <!-- Ocean (Left) -->
  <rect x='15' y='210' width='105' height='55' fill='url(#ocean-grad)' rx='4'/>
  <text x='67' y='242' text-anchor='middle' fill='#e0f2fe' font-size='9' font-family='sans-serif' font-weight='bold'>Pacific Ocean</text>

  <!-- Mountain Profile -->
  <path d='M 120,225 L 240,75 L 340,210 L 485,225 L 485,265 L 120,265 Z' fill='url(#mountain-grad)' stroke='#334155' stroke-width='1.5'/>

  <!-- Windward Slope (Moist, Lush Side) -->
  <text x='155' y='180' fill='#4ade80' font-size='9' font-family='sans-serif' font-weight='bold'>WINDWARD</text>
  <text x='155' y='192' fill='#86efac' font-size='7.5' font-family='sans-serif'>Moist, rising air cools</text>
  <text x='155' y='202' fill='#86efac' font-size='7.5' font-family='sans-serif'>Condensation &amp; Heavy Rain</text>

  <!-- Rising Wind Arrows -->
  <path d='M 60,195 Q 110,190 150,150 Q 185,115 220,80' fill='none' stroke='#38bdf8' stroke-width='3' marker-end='url(#air-arrow)'/>

  <!-- Clouds & Rain at Peak -->
  <ellipse cx='215' cy='75' rx='35' ry='16' fill='#64748b' fill-opacity='0.8'/>
  <ellipse cx='235' cy='68' rx='25' ry='14' fill='#94a3b8' fill-opacity='0.9'/>
  <!-- Rain dashes -->
  <line x1='195' y1='95' x2='185' y2='125' stroke='#38bdf8' stroke-width='2' stroke-dasharray='4,3'/>
  <line x1='215' y1='95' x2='205' y2='125' stroke='#38bdf8' stroke-width='2' stroke-dasharray='4,3'/>

  <!-- Leeward Slope (Arid Rain Shadow) -->
  <text x='355' y='150' fill='#fb923c' font-size='9' font-family='sans-serif' font-weight='bold'>LEEWARD (RAIN SHADOW)</text>
  <text x='355' y='163' fill='#fed7aa' font-size='7.5' font-family='sans-serif'>Dry air descends &amp; warms</text>
  <text x='355' y='174' fill='#fed7aa' font-size='7.5' font-family='sans-serif'>Low precipitation / Arid desert</text>

  <!-- Descending Dry Warm Air Arrow -->
  <path d='M 255,80 Q 295,120 340,175 Q 370,210 440,218' fill='none' stroke='#fb923c' stroke-width='3' marker-end='url(#dry-arrow)'/>

  <!-- Bottom Legend / Concept Note -->
  <rect x='15' y='240' width='470' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='250' y='257' text-anchor='middle' fill='#cbd5e1' font-size='8' font-family='system-ui, sans-serif'>
    Physical Mechanism: Adiabatic cooling &amp; condensation on windward slope; adiabatic warming &amp; moisture depletion on leeward slope.
  </text>
</svg>`,He=`<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: EPIDEMIOLOGICAL TRANSITION MODEL (OMRAN'S 5 STAGES)
  </text>

  <!-- Stage 1 -->
  <rect x='25' y='36' width='90' height='150' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='70' y='52' text-anchor='middle' fill='#ef4444' font-size='8.5' font-family='sans-serif' font-weight='bold'>Stage 1</text>
  <text x='70' y='63' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>Pestilence &amp; Famine</text>
  <line x1='35' y1='70' x2='105' y2='70' stroke='#3f3f46' stroke-width='1'/>
  <text x='70' y='88' text-anchor='middle' fill='#fca5a5' font-size='7' font-family='sans-serif'>High Mortality</text>
  <text x='70' y='100' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Infectious Diseases</text>
  <text x='70' y='110' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Parasites &amp; Famine</text>
  <text x='70' y='125' text-anchor='middle' fill='#94a3b8' font-size='6.5' font-family='sans-serif'>Black Plague, Cholera</text>
  <text x='70' y='145' text-anchor='middle' fill='#f87171' font-size='7' font-family='sans-serif' font-weight='bold'>Life Exp: &lt;30 yrs</text>

  <!-- Stage 2 -->
  <rect x='120' y='36' width='90' height='150' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='165' y='52' text-anchor='middle' fill='#f59e0b' font-size='8.5' font-family='sans-serif' font-weight='bold'>Stage 2</text>
  <text x='165' y='63' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>Receding Pandemics</text>
  <line x1='130' y1='70' x2='200' y2='70' stroke='#3f3f46' stroke-width='1'/>
  <text x='165' y='88' text-anchor='middle' fill='#fcd34d' font-size='7' font-family='sans-serif'>Plummeting CDR</text>
  <text x='165' y='100' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Public Sanitation</text>
  <text x='165' y='110' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Clean Piped Water</text>
  <text x='165' y='125' text-anchor='middle' fill='#94a3b8' font-size='6.5' font-family='sans-serif'>Industrial Revolution</text>
  <text x='165' y='145' text-anchor='middle' fill='#fbbf24' font-size='7' font-family='sans-serif' font-weight='bold'>Life Exp: ~50 yrs</text>

  <!-- Stage 3 -->
  <rect x='215' y='36' width='90' height='150' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='260' y='52' text-anchor='middle' fill='#38bdf8' font-size='8.5' font-family='sans-serif' font-weight='bold'>Stage 3</text>
  <text x='260' y='63' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>Degenerative Diseases</text>
  <line x1='225' y1='70' x2='295' y2='70' stroke='#3f3f46' stroke-width='1'/>
  <text x='260' y='88' text-anchor='middle' fill='#7dd3fc' font-size='7' font-family='sans-serif'>Chronic Pathologies</text>
  <text x='260' y='100' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Cardiovascular Disease</text>
  <text x='260' y='110' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Cancer &amp; Stroke</text>
  <text x='260' y='125' text-anchor='middle' fill='#94a3b8' font-size='6.5' font-family='sans-serif'>Infectious deaths drop</text>
  <text x='260' y='145' text-anchor='middle' fill='#38bdf8' font-size='7' font-family='sans-serif' font-weight='bold'>Life Exp: ~70 yrs</text>

  <!-- Stage 4 -->
  <rect x='310' y='36' width='90' height='150' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='355' y='52' text-anchor='middle' fill='#10b981' font-size='8.5' font-family='sans-serif' font-weight='bold'>Stage 4</text>
  <text x='355' y='63' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>Delayed Degenerative</text>
  <line x1='320' y1='70' x2='390' y2='70' stroke='#3f3f46' stroke-width='1'/>
  <text x='355' y='88' text-anchor='middle' fill='#6ee7b7' font-size='7' font-family='sans-serif'>Advanced Medicine</text>
  <text x='355' y='100' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Bypass Surgeries</text>
  <text x='355' y='110' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Chemotherapy / Diet</text>
  <text x='355' y='125' text-anchor='middle' fill='#94a3b8' font-size='6.5' font-family='sans-serif'>Deaths delayed to 75+</text>
  <text x='355' y='145' text-anchor='middle' fill='#34d399' font-size='7' font-family='sans-serif' font-weight='bold'>Life Exp: &gt;80 yrs</text>

  <!-- Stage 5 -->
  <rect x='405' y='36' width='90' height='150' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='450' y='52' text-anchor='middle' fill='#a855f7' font-size='8.5' font-family='sans-serif' font-weight='bold'>Stage 5</text>
  <text x='450' y='63' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>Reemerging Infections</text>
  <line x1='415' y1='70' x2='485' y2='70' stroke='#3f3f46' stroke-width='1'/>
  <text x='450' y='88' text-anchor='middle' fill='#d8b4fe' font-size='7' font-family='sans-serif'>Global Diffusion</text>
  <text x='450' y='100' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Antimicrobial Resistance</text>
  <text x='450' y='110' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Air Travel Spread</text>
  <text x='450' y='125' text-anchor='middle' fill='#94a3b8' font-size='6.5' font-family='sans-serif'>Poverty &amp; Urbanization</text>
  <text x='450' y='145' text-anchor='middle' fill='#c084fc' font-size='7' font-family='sans-serif' font-weight='bold'>SARS, COVID, MRSA</text>

  <!-- Bottom Transition Axis -->
  <rect x='25' y='194' width='470' height='36' fill='#1e293b' rx='4' stroke='#334155' stroke-width='1'/>
  <text x='260' y='208' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>SHIFT IN LEADING CAUSES OF MORTALITY OVER TIME</text>
  <text x='70' y='222' text-anchor='middle' fill='#fca5a5' font-size='7' font-family='sans-serif'>Infectious &amp; Parasitic</text>
  <text x='260' y='222' text-anchor='middle' fill='#93c5fd' font-size='7' font-family='sans-serif'>Degenerative &amp; Cardiovascular</text>
  <text x='450' y='222' text-anchor='middle' fill='#d8b4fe' font-size='7' font-family='sans-serif'>Antibiotic Resistant</text>

  <!-- Bottom Citation Bar -->
  <rect x='25' y='240' width='470' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='260' y='257' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>
    Correlates Abdel Omran's Epidemiological Framework with Demographic Transition Model (DTM) Stages 1–5
  </text>
</svg>`,je=`<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: COMPARATIVE POPULATION MAPPING TECHNIQUES (CHOROPLETH VS. DOT DENSITY)
  </text>

  <!-- Left Map: Choropleth (x: 25 to 255) -->
  <rect x='25' y='34' width='230' height='195' fill='#18181b' rx='8' stroke='#27272a' stroke-width='1.5'/>
  <text x='140' y='50' text-anchor='middle' fill='#38bdf8' font-size='8.5' font-family='sans-serif' font-weight='bold'>SOURCE 1: CHOROPLETH MAP</text>
  <text x='140' y='62' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>County-Level Population Density (People/sq mi)</text>

  <!-- County Boundaries (Choropleth Shaded Polygons) -->
  <polygon points='40,75 110,75 125,125 45,130' fill='#0284c7' stroke='#e2e8f0' stroke-width='1.5'/>
  <text x='80' y='105' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>&gt;500</text>

  <polygon points='110,75 220,75 235,120 125,125' fill='#0369a1' stroke='#e2e8f0' stroke-width='1.5'/>
  <text x='170' y='105' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>100–500</text>

  <polygon points='45,130 125,125 110,185 35,180' fill='#075985' stroke='#e2e8f0' stroke-width='1.5'/>
  <text x='80' y='160' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>20–100</text>

  <polygon points='125,125 235,120 220,185 110,185' fill='#0c4a6e' stroke='#e2e8f0' stroke-width='1.5'/>
  <text x='170' y='160' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>&lt;20</text>

  <text x='140' y='210' text-anchor='middle' fill='#fca5a5' font-size='7' font-family='sans-serif'>Limitation: Assumes uniform spread; masks clusters</text>

  <!-- Right Map: Dot Density (x: 265 to 495) -->
  <rect x='265' y='34' width='230' height='195' fill='#18181b' rx='8' stroke='#27272a' stroke-width='1.5'/>
  <text x='380' y='50' text-anchor='middle' fill='#34d399' font-size='8.5' font-family='sans-serif' font-weight='bold'>SOURCE 2: DOT DENSITY MAP</text>
  <text x='380' y='62' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>1 Dot = 500 Residents (Actual Settlement Sites)</text>

  <!-- Faint County Boundaries -->
  <polygon points='280,75 350,75 365,125 285,130' fill='none' stroke='#64748b' stroke-width='1' stroke-dasharray='3,3'/>
  <polygon points='350,75 460,75 475,120 365,125' fill='none' stroke='#64748b' stroke-width='1' stroke-dasharray='3,3'/>
  <polygon points='285,130 365,125 350,185 275,180' fill='none' stroke='#64748b' stroke-width='1' stroke-dasharray='3,3'/>
  <polygon points='365,125 475,120 460,185 350,185' fill='none' stroke='#64748b' stroke-width='1' stroke-dasharray='3,3'/>

  <!-- Clustered Dots in Urban Core (Metro Node) -->
  <g fill='#34d399'>
    <circle cx='320' cy='95' r='2.5'/><circle cx='324' cy='97' r='2.5'/><circle cx='318' cy='102' r='2.5'/>
    <circle cx='327' cy='101' r='2.5'/><circle cx='322' cy='105' r='2.5'/><circle cx='330' cy='98' r='2.5'/>
    <circle cx='315' cy='96' r='2.5'/><circle cx='321' cy='92' r='2.5'/><circle cx='328' cy='105' r='2.5'/>
    <circle cx='332' cy='102' r='2.5'/><circle cx='318' cy='108' r='2.5'/><circle cx='325' cy='110' r='2.5'/>
    <!-- Suburban Cluster along Highway -->
    <circle cx='380' cy='95' r='2'/><circle cx='384' cy='98' r='2'/><circle cx='388' cy='94' r='2'/>
    <circle cx='392' cy='96' r='2'/><circle cx='385' cy='102' r='2'/>
    <!-- Sparse Rural Dots -->
    <circle cx='300' cy='155' r='1.8'/><circle cx='330' cy='165' r='1.8'/><circle cx='420' cy='150' r='1.8'/>
    <circle cx='445' cy='135' r='1.8'/><circle cx='450' cy='170' r='1.8'/><circle cx='410' cy='85' r='1.8'/>
  </g>
  <text x='325' y='125' text-anchor='middle' fill='#a7f3d0' font-size='7' font-family='sans-serif' font-weight='bold'>Urban Core</text>
  <text x='435' y='160' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>Rural Sparsity</text>

  <text x='380' y='210' text-anchor='middle' fill='#86efac' font-size='7' font-family='sans-serif'>Strength: Accurately reveals agglomeration vs rural space</text>

  <!-- Bottom Synthesis Box -->
  <rect x='25' y='240' width='470' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='260' y='257' text-anchor='middle' fill='#cbd5e1' font-size='7.5' font-family='system-ui, sans-serif'>
    Cartographic Analysis: Choropleths aggregate into arbitrary political boundaries (Ecological Fallacy); Dot density reveals spatial settlement patterns.
  </text>
</svg>`;function Ue(f,s){if(!f)return null;const t=f.toLowerCase(),c=(s||"").toLowerCase();if(c.includes("geography")||c.includes("aphg")||c.includes("human")){if(t.includes("epidemiological")||t.includes("epidemiologic")||t.includes("omran"))return He;if(!t.includes("epidemiolog")&&(t.includes("demographic transition")||t.includes("dtm")||t.includes("crude birth")&&t.includes("crude death")))return he;if(t.includes("von thunen")||t.includes("von thünen")||t.includes("bid-rent")||t.includes("isolated state"))return Le;if(t.includes("burgess")||t.includes("concentric zone")||t.includes("concentric")&&t.includes("zone"))return Ie;if(t.includes("hoyt")||t.includes("sector model")||t.includes("axial growth"))return Pe;if(t.includes("multiple nuclei")||t.includes("harris-ullman")||t.includes("harris and ullman")||t.includes("edge city")||t.includes("galactic city"))return Me;if(t.includes("dot density")&&(t.includes("choropleth")||t.includes("map"))||t.includes("choropleth")&&t.includes("dot density")||t.includes("choropleth")&&t.includes("ecological fallacy"))return je;if(t.includes("choropleth")||t.includes("fertility")&&t.includes("map")||t.includes("tfr")&&(t.includes("map")||t.includes("rate"))||t.includes("macro-geographic")||t.includes("global total fertility"))return Fe;if(t.includes("migration corridor")||t.includes("migration flow")||t.includes("transnational")&&t.includes("migration")||t.includes("migration")&&(t.includes("map")||t.includes("stream")||t.includes("corridor")||t.includes("labor"))||t.includes("labor flow")&&(t.includes("gcc")||t.includes("gulf")))return De;if(t.includes("wallerstein")||t.includes("world systems")||t.includes("core-periphery")||t.includes("core periphery")||t.includes("spatial division of labor"))return Oe;if(t.includes("la nina")||t.includes("la niña")||t.includes("equatorial pacific")&&t.includes("trade wind"))return se;if(t.includes("el nino")||t.includes("el niño"))return ue}if(c.includes("environmental")||c.includes("apes")){if(t.includes("demographic transition")||t.includes("crude birth")&&t.includes("crude death"))return he;if(t.includes("la nina")||t.includes("la niña")||t.includes("sea surface conditions")&&t.includes("pacific")||t.includes("equatorial pacific")&&(t.includes("trade wind")||t.includes("precipitation")||t.includes("australia"))||t.includes("trade winds")&&t.includes("pacific")&&!t.includes("el nino")&&!t.includes("el niño"))return se;if(t.includes("el nino")||t.includes("el niño")||t.includes("enso")&&t.includes("suppressed upwelling"))return ue;if(t.includes("enso")||t.includes("walker circulation")&&t.includes("pacific"))return se;if(t.includes("rain shadow")||t.includes("windward")&&t.includes("leeward")||t.includes("orographic"))return Be}return null}function Ge(f){if(!f)return{count:0,labels:[]};const s=/(?:\((a|b|c|d|e|f|g)\)|(?:^|\n)\s*(?:part|question)\s+([a-g])\b|(?:^|\n)\s*([a-g])[.)])/gi,t=[];let c;for(;(c=s.exec(f))!==null;)t.push(c);const k=new Set;for(const p of t){const g=(p[1]||p[2]||p[3]).toLowerCase();k.add(g)}const i=Array.from(k).sort();return{count:i.length,labels:i}}function We(f,s){if(!f)return 1;if(Array.isArray(f.scoringRubric)&&f.scoringRubric.length>0){let p=0,g=!1;for(const e of f.scoringRubric){const a=String(e||""),r=a.match(/\[\s*(?:\d+\s*\/\s*)?(\d+)\s*(?:points|point|pts|pt)\s*\]/i)||a.match(/\(\s*(?:\d+\s*\/\s*)?(\d+)\s*(?:points|point|pts|pt)\s*\)/i);r&&(p+=parseInt(r[1],10),g=!0)}if(g&&p>0)return p}const t=`${f.prompt||""} ${f.modelAnswer||""}`,{count:c}=Ge(t);if(c>=2){const p=Number(f.totalPoints);return!isNaN(p)&&p>=c?p:c}const k=(s||"").toLowerCase();if(k.includes("stat"))return 4;if(k.includes("human")||k.includes("geography"))return 7;if(k.includes("history")||k.includes("apush"))return 3;if(k.includes("gov"))return 4;if(k.includes("chem")||k.includes("bio"))return 8;const i=Number(f.totalPoints);return!isNaN(i)&&i>0?i:6}function Y(f){return f?f.replace(/<svg[\s\S]*?<\/svg>/gi,"").replace(/<svg\b[^>]*>/gi,"").replace(/<\/svg>/gi,"").replace(/<path\b[^>]*>/gi,"").replace(/<rect\b[^>]*>/gi,"").replace(/<circle\b[^>]*>/gi,"").replace(/<text\b[^>]*>[\s\S]*?<\/text>/gi,"").trim():""}function _e(f,s,t){const c=Re(f);if(!c||c.canonicalUnits.length===0)return{unitNumber:1,title:typeof s=="string"&&s.trim()?s:"General Course Content"};if(typeof s=="number"&&!isNaN(s)){const g=c.canonicalUnits.find(e=>e.unitNumber===s);if(g)return{unitNumber:g.unitNumber,title:g.title}}const k=String(s||"").toLowerCase().trim(),i=k.match(/\b(?:unit|period|u|p)\s*([0-9]+)\b/i)||k.match(/^([0-9]+)$/);if(i){const g=parseInt(i[1],10),e=c.canonicalUnits.find(a=>a.unitNumber===g);if(e)return{unitNumber:e.unitNumber,title:e.title}}for(const g of c.canonicalUnits){if(k.includes(g.title.toLowerCase()))return{unitNumber:g.unitNumber,title:g.title};for(const e of g.keywords)if(k.includes(e.toLowerCase()))return{unitNumber:g.unitNumber,title:g.title}}if(t&&t.trim()){const g=t.toLowerCase();let e=null,a=0;for(const r of c.canonicalUnits){let n=0;g.includes(r.title.toLowerCase())&&(n+=5);for(const h of r.keywords)g.includes(h.toLowerCase())&&(n+=2);n>a&&(a=n,e=r)}if(e&&a>=2)return{unitNumber:e.unitNumber,title:e.title}}const p=c.canonicalUnits[0];return{unitNumber:p.unitNumber,title:p.title}}const Z=f=>{if(!f)return!1;const s=(f.id||"").toLowerCase(),t=(f.shortCode||"").toUpperCase(),c=(f.name||"").toLowerCase();return t==="CSA"||s==="ap-computer-science"||c.includes("science a")?!1:s==="ap-computer-science-principles"||t==="CSP"||c.includes("principles")&&c.includes("computer")};function Qe(f,s){return f?We(f,s):6}async function tt(f){const{subject:s,unitTitle:t,questionType:c,objectiveQuestions:k,subjectiveQuestions:i}=f,p=k||[],g=i||[],e=new xe({unit:"pt",format:"a4",orientation:"portrait"}),a=e.internal.pageSize.getWidth(),r=e.internal.pageSize.getHeight(),n=36,h=a-n*2;let o=0,R=1;const Q=S=>{if(S){e.setFillColor(30,27,75),e.rect(0,0,a,74,"F"),e.setFillColor(99,102,241),e.rect(0,74,a,3,"F"),e.setTextColor(251,191,36),e.setFont("helvetica","bold"),e.setFontSize(8.5);const m=f.examMode==="mock_exam"||g.length===3&&(s.id?.includes("geography")||s.name?.toLowerCase().includes("geography")),u=m?"AP EXAM APP  |  OFFICIAL COLLEGE BOARD TIMED EXAM SIMULATION":"AP EXAM APP  |  ADVANCED PLACEMENT EXAM PREPARATION";e.text(u,n,24),e.setTextColor(255,255,255),e.setFont("helvetica","bold"),e.setFontSize(15);const y=N(s.name||"").replace(/^AP\s+/i,""),T=m?`AP ${y} Section II Mock Exam`:`AP ${y} Topic & Concept Practice Bank`;e.text(T,n,45),e.setFont("helvetica","normal"),e.setFontSize(9),e.setTextColor(226,232,240);const z=Z(s),$=c==="objective"?"Section I (Multiple Choice)":z?"Section II (Create Performance Task)":"Section II (Free Response)",P=new Date().toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),U=m?`Structure: 3 Real Exam FRQs (75 Minutes • Timed Simulation)   |   ${P}`:`Format: ${$} (CED Aligned Practice)   |   Unit: ${N(t)}   |   ${P}`;e.text(U,n,62),o=96}else{e.setFillColor(248,250,252),e.rect(0,0,a,28,"F"),e.setDrawColor(226,232,240),e.line(0,28,a,28);const m=Z(s),u=c==="objective"?"Multiple Choice":m?"Create Performance Task":"Free Response";e.setFont("helvetica","bold"),e.setFontSize(8),e.setTextColor(100,116,139),e.text(`AP ${N(s.shortCode||s.name)} - ${u}`,n,18),e.text("AP Exam Practice Engine",a-n,18,{align:"right"}),o=46}},j=S=>{e.setDrawColor(226,232,240),e.setLineWidth(.5),e.line(n,r-24,a-n,r-24),e.setFont("helvetica","normal"),e.setFontSize(7.5),e.setTextColor(148,163,184),e.text("AP Exam Prep  •  For interactive AI scoring & practice, use AP Exam app",n,r-12),e.text(`Page ${S}`,a-n,r-12,{align:"right"})};Q(!0),j(R);const C=S=>o+S>r-40?(e.addPage(),R++,Q(!1),j(R),e.setFont("helvetica","normal"),e.setFontSize(9.5),e.setTextColor(15,23,42),!0):!1;if(c==="objective"){for(let S=0;S<p.length;S++){const m=p[S];C(90),e.setFillColor(241,245,249),e.roundedRect(n,o,h,20,3,3,"F"),e.setFont("helvetica","bold"),e.setFontSize(9.5),e.setTextColor(30,41,59),e.text(`QUESTION ${S+1} OF ${p.length}`,n+8,o+13.5),m.skill&&(e.setFont("helvetica","italic"),e.setFontSize(8),e.setTextColor(99,102,241),e.text(N(m.skill),a-n-8,o+13.5,{align:"right"})),o+=28;let u=m.question||m.prompt||"",A=m.stimulus||"",y=m.diagramSvg;if(!y&&A){const z=X(A);A=z.cleanText,z.diagramSvg&&(y=z.diagramSvg)}const T=X(u,y);if(u=T.cleanText,T.diagramSvg&&(y=T.diagramSvg),A&&A.trim()&&(o=H(e,A.trim(),n+10,o,h-20,{fontName:"times",fontStyle:"italic",fontSize:9,textColor:[51,65,85],checkPageBreak:C}),o+=8),o=H(e,u,n,o,h,{fontName:"helvetica",fontStyle:"bold",fontSize:10.5,textColor:[15,23,42],checkPageBreak:C}),o+=10,y)try{const z=await ae(y,1e3,550);if(z){const P=Math.min(h,336.3636363636364),U=n+(h-P)/2;C(200),e.addImage(z,"PNG",U,o,P,185),o+=197}}catch(z){console.warn("Could not rasterize SVG diagram for PDF:",z)}m.options.forEach(z=>{e.setFillColor(241,245,249),e.circle(n+6,o+6,3,"F"),o=H(e,z,n+16,o,h-24,{fontName:"helvetica",fontStyle:"normal",fontSize:9.5,textColor:[30,41,59],checkPageBreak:C}),o+=8}),o+=14,S<p.length-1&&(e.setDrawColor(226,232,240),e.setLineWidth(.5),e.line(n,o,a-n,o),o+=26)}e.addPage(),R++,Q(!1),j(R),e.setFillColor(240,253,244),e.setDrawColor(187,247,208),e.roundedRect(n,o,h,24,4,4,"FD"),e.setFont("helvetica","bold"),e.setFontSize(10.5),e.setTextColor(21,128,61),e.text("OFFICIAL AP EXAM ANSWER KEY & DETAILED EXPLANATIONS",n+10,o+16),o+=34,p.forEach((S,m)=>{const u=N(S.correctAnswer),A=me(S.explanation);C(60),e.setFont("helvetica","bold"),e.setFontSize(9.5),e.setTextColor(21,128,61),e.text(`QUESTION ${m+1} - [Correct Answer]:  ${u}`,n,o),o+=16,A.forEach((y,T)=>{y.label&&y.label.trim()?(e.setFont("helvetica","bold"),e.setFontSize(8.5),y.label.toLowerCase().includes("distractor")?(e.setTextColor(180,83,9),o+=2):y.label.toLowerCase().startsWith("option")||y.label.toLowerCase().startsWith("choice")?e.setTextColor(126,34,206):e.setTextColor(79,70,229),e.text(y.label,n+8,o),o+=12):T===0&&A.length===1&&(e.setFont("helvetica","bold"),e.setFontSize(8.5),e.setTextColor(100,116,139),e.text("Official Explanation:",n+8,o),o+=12),y.content&&y.content.trim()&&(o=H(e,y.content,n+8,o,h-16,{fontName:"helvetica",fontStyle:"normal",fontSize:8.5,textColor:[51,65,85],checkPageBreak:C}),o+=8)}),o+=12,m<p.length-1&&(e.setDrawColor(226,232,240),e.setLineWidth(.5),e.line(n,o,a-n,o),o+=20)})}else{for(let m=0;m<g.length;m++){const u=g[m];let A=Y(u.prompt||u.question||""),y=Y(u.stimulus||""),T=u.diagramSvg;const z=Ue(A+" "+(u.skill||""),s.id||"");if(z&&(T=z),!T&&y){const F=X(y);y=Y(F.cleanText),F.diagramSvg&&(T=F.diagramSvg)}const $=X(A,T);A=Y($.cleanText),$.diagramSvg&&(T=$.diagramSvg);const P=Qe(u,s.id||s.name),U=_e(s.id||s.name||"",u.unitNumber||u.unitTitle||u.skill||t,A),le=N(A);e.setFont("helvetica","bold"),e.setFontSize(10.5);const ye=e.splitTextToSize(le,h).length*13+16,te=34,fe=10,ge=T?165:0,pe=te+fe+ye+ge+16,be=r-40-46;C(Math.min(pe,be));const we=Z(s);e.setFillColor(243,232,255),e.roundedRect(n,o,h,te,4,4,"F"),e.setFont("helvetica","bold"),e.setFontSize(10),e.setTextColor(107,33,168);const ke=we?`CREATE PERFORMANCE TASK PROMPT ${m+1}  [${P} POINTS]`:`FREE RESPONSE QUESTION ${m+1}  [${P} POINTS]`;e.text(ke,n+10,o+14);const V=`${A} ${y||""}`.toLowerCase(),ie=!!(T&&T.trim()),oe=/\|[^\n]+\|[^\n]+\|/.test(A||"")||/\|[^\n]+\|[^\n]+\|/.test(y||""),ne=/\bsource\s*1\b/i.test(V),ce=/\bsource\s*2\b/i.test(V),ve=/\bsource\s*:/i.test(V),Se=/\b(?:the\s+table\s+below|data\s+in\s+the\s+table|using\s+the\s+data\s+shown|table\s+1)\b/i.test(V),Ce=/\b(?:figure\s*1|figure\s*2|using\s+the\s+map\s+shown|diagram\s+shown)\b/i.test(V);let K="none";ne&&ce||ie&&oe||/\bfigure\s*2\b/i.test(V)||ie&&ne||oe&&ce||u.stimulusCategory==="two"?K="two":(ie||oe||ne||ve||Se||Ce||y&&y.trim().length>20||u.stimulusCategory==="single")&&(K="single");const Ne=K==="two"?"[Two Stimuli]":K==="single"?"[Single Stimulus]":"[No Stimulus]";e.setFont("helvetica","bold"),e.setFontSize(8),e.setTextColor(147,51,234),e.text(Ne,a-n-10,o+14,{align:"right"}),e.setFont("helvetica","normal"),e.setFontSize(8.5),e.setTextColor(126,34,206);const ze=`Unit ${U.unitNumber}: ${U.title}`;if(e.text(N(ze),n+10,o+27),o+=te+fe,y&&y.trim()&&(o=H(e,y.trim(),n+10,o,h-20,{fontName:"times",fontStyle:"italic",fontSize:9,textColor:[51,65,85],checkPageBreak:C}),o+=8),o=H(e,le,n,o,h,{fontName:"helvetica",fontStyle:"bold",fontSize:10.5,textColor:[15,23,42],checkPageBreak:C}),o+=12,T)try{const F=await ae(T,1e3,550);if(F){const J=Math.min(h,336.3636363636364),ee=n+(h-J)/2;C(200),e.addImage(F,"PNG",ee,o,J,185),o+=195}}catch(F){console.warn("Could not rasterize SVG diagram for PDF:",F)}const re=u.parts;if(Array.isArray(re)&&re.length>0)for(const F of re){C(35);const de=F.partLabel?`Part ${F.partLabel}`:F.label||"Part",J=F.points?` (${F.points} Point${F.points>1?"s":""})`:"";e.setFont("helvetica","bold"),e.setFontSize(9.5),e.setTextColor(88,28,135),e.text(`${de}${J}:`,n+6,o+10),o+=14;const ee=F.task||F.prompt||"";ee&&(o=H(e,ee,n+10,o,h-14,{fontName:"helvetica",fontStyle:"normal",fontSize:9,textColor:[30,41,59],checkPageBreak:C}),o+=8)}m<g.length-1&&(e.setDrawColor(226,232,240),e.setLineWidth(.5),e.line(n,o,a-n,o),o+=26)}e.addPage(),R++,Q(!1),j(R),e.setFillColor(238,242,255),e.setDrawColor(199,210,254),e.roundedRect(n,o,h,24,4,4,"FD"),e.setFont("helvetica","bold"),e.setFontSize(10.5),e.setTextColor(67,56,202);const S=Z(s)?"OFFICIAL CREATE PERFORMANCE TASK SCORING GUIDELINES & MODEL RESPONSES":"OFFICIAL COLLEGE BOARD SCORING GUIDELINES & MODEL SOLUTIONS";e.text(S,n+10,o+16),o+=34,g.forEach((m,u)=>{const y=Z(s)?`TASK PROMPT ${u+1} SCORING RUBRIC & EXEMPLARY SOLUTION`:`QUESTION ${u+1} SCORING RUBRIC & EXEMPLARY SOLUTION`,T=me(m.modelAnswer);C(50),e.setFont("helvetica","bold"),e.setFontSize(10),e.setTextColor(88,28,135),e.text(y,n,o),o+=14,e.setFillColor(238,242,255),e.setDrawColor(199,210,254),e.roundedRect(n,o,h,20,3,3,"FD"),e.setFont("helvetica","bold"),e.setFontSize(9),e.setTextColor(67,56,202),e.text("Exemplary Model Solution (Maximum Score):",n+10,o+13.5),o+=26,T.forEach(P=>{C(40),P.label&&P.label.trim()&&(e.setFont("helvetica","bold"),e.setFontSize(9),e.setTextColor(67,56,202),e.text(P.label,n+8,o),o+=13);const U=Y(P.content);o=H(e,U,n+8,o,h-16,{fontName:"helvetica",fontStyle:"normal",fontSize:8.5,textColor:[30,41,59],checkPageBreak:C}),o+=8}),o+=8,C(50),e.setFont("helvetica","bold"),e.setFontSize(9),e.setTextColor(5,150,105),e.text("Official Reader Scoring Guidelines & Criteria:",n,o),o+=12;const z=m.scoringRubric;(Array.isArray(z)?z.map(String):typeof z=="string"&&z.trim()?z.includes(`
`)?z.split(`
`).map(P=>P.trim()).filter(Boolean):[z]:[]).forEach(P=>{const U=Y(P);o=H(e,`• ${U}`,n+6,o,h-12,{fontName:"helvetica",fontStyle:"normal",fontSize:8.5,textColor:[51,65,85],checkPageBreak:C}),o+=6}),o+=14,u<g.length-1&&(e.setDrawColor(226,232,240),e.setLineWidth(.5),e.line(n,o,a-n,o),o+=24)})}const D=38;C(D+15);const B=Math.max(o+14,r-36-D);e.setFillColor(245,243,255),e.setDrawColor(199,210,254),e.setLineWidth(.8),e.roundedRect(n,B,h,D,4,4,"FD"),e.setFillColor(99,102,241),e.roundedRect(n,B,5,D,2,2,"F"),e.setFont("helvetica","bold"),e.setFontSize(8.5),e.setTextColor(67,56,202),e.text("★ PRO TIP: FOR THE BEST STUDY & PRACTICE EXPERIENCE",n+12,B+13),e.setFont("helvetica","normal"),e.setFontSize(7.6),e.setTextColor(55,65,81);const L=e.splitTextToSize("To get instant AI feedback, interactive step-by-step hints, audio explanations, and timed exams, practice directly inside the AP Exam app rather than static PDFs!",h-20);let w=B+24;for(const S of L)e.text(S,n+12,w),w+=9.5;const E=Z(s),I=c==="objective"?"MCQ":E?"CREATE_PT":"FRQ",v=`AP_${(s.shortCode||s.name).replace(/\s+/g,"_")}_${I}_Practice.pdf`,M=e.output("blob"),x=URL.createObjectURL(M);return{blob:M,filename:v,blobUrl:x}}async function it(f){const{subject:s,unitTitle:t,questionFormat:c,questions:k}=f;if(!k||k.length===0)return null;const i=new xe({orientation:"portrait",unit:"mm",format:"a4"}),p=i.internal.pageSize.getWidth(),g=i.internal.pageSize.getHeight(),e=15,a=p-e*2;let r=e;const n=b=>r+b>g-e?(i.addPage(),r=e,!0):!1;i.setFillColor(30,41,59),i.rect(e,r,a,22,"F"),i.setFont("helvetica","bold"),i.setFontSize(14),i.setTextColor(255,255,255);const h=N(s.name),o=h.startsWith("AP ")?`${h} - AP TRAP RADAR`:`AP ${h} - AP TRAP RADAR`;i.text(o,e+6,r+10),i.setFontSize(9),i.setFont("helvetica","normal"),i.setTextColor(203,213,225);const R=k[0]?.format||c,Q=R==="subjective"?"Section II (Free Response Trap Simulation)":"Section I (Multiple Choice Distractor Gauntlet)";i.text(`${N(t)} | ${Q} | ${k.length} Questions`,e+6,r+17),r+=28,i.setFont("helvetica","bold"),i.setFontSize(11),i.setTextColor(15,23,42),i.text("SECTION: PRACTICE QUESTIONS & STIMULI",e,r),r+=6,i.setDrawColor(203,213,225),i.line(e,r,e+a,r),r+=6;for(let b=0;b<k.length;b++){const L=k[b];n(35),i.setFont("helvetica","bold"),i.setFontSize(10),i.setTextColor(180,83,9),i.text(`Question ${b+1} ${L.skill?`[${N(L.skill)}]`:""}`,e,r),r+=5;let w=L.prompt||"",E=L.stimulus||"",I=L.diagramSvg;if(!I&&E){const x=X(E);E=x.cleanText,x.diagramSvg&&(I=x.diagramSvg)}const d=X(w,I);if(w=d.cleanText,d.diagramSvg&&(I=d.diagramSvg),E&&E.trim().length>0)if(n(25),E.includes("|"))r=H(i,E.trim(),e+2,r,a-4,{fontName:"helvetica",fontStyle:"normal",fontSize:8.5,textColor:[51,65,85],checkPageBreak:n}),r+=4;else{i.setFillColor(248,250,252),i.setDrawColor(226,232,240);const x=N(W(E)),S=i.splitTextToSize(x,a-8),m=S.length*4.5+6;i.rect(e,r,a,m,"FD"),i.setFont("helvetica","italic"),i.setFontSize(8.5),i.setTextColor(51,65,85),S.forEach((u,A)=>{_(i,u,e+4,r+5+A*4.5,8.5)}),r+=m+4}i.setFont("helvetica","normal"),i.setFontSize(9.5),i.setTextColor(15,23,42);const v=N(W(w)),M=i.splitTextToSize(v,a);if(n(M.length*5+4),M.forEach(x=>{_(i,x,e,r,9.5),r+=5}),r+=3,I)try{const x=await ae(I,800,440);if(x){const m=Math.min(a,90.9090909090909),u=e+(a-m)/2;n(55),i.addImage(x,"PNG",u,r,m,50),r+=54}}catch(x){console.warn("Could not rasterize SVG diagram for Trap Radar PDF:",x)}L.options&&L.options.length>0&&L.options.forEach(x=>{const S=N(W(x)),m=i.splitTextToSize(S,a-6);n(m.length*4.5+2),m.forEach(u=>{_(i,u,e+4,r,8.5),r+=4.5}),r+=2}),L.parts&&L.parts.length>0&&L.parts.forEach(x=>{if(n(18),i.setFont("helvetica","bold"),i.setFontSize(9),i.setTextColor(30,41,59),i.text(`Part ${N(x.partLabel)} (${x.points} Point${x.points>1?"s":""}):`,e+4,r),r+=4.5,x.task.includes("|"))r=H(i,x.task,e+4,r,a-8,{fontName:"helvetica",fontStyle:"normal",fontSize:8.5,textColor:[30,41,59],checkPageBreak:n}),r+=3;else{i.setFont("helvetica","normal");const S=N(W(x.task));i.splitTextToSize(S,a-8).forEach(u=>{_(i,u,e+6,r,8.5),r+=4.5}),r+=3}}),r+=5}i.addPage(),r=e,i.setFillColor(15,23,42),i.rect(e,r,a,14,"F"),i.setFont("helvetica","bold"),i.setFontSize(12),i.setTextColor(255,255,255),i.text("EXAMINER DISTRACTOR AUTOPSY & SCORING RUBRICS",e+6,r+9),r+=20,k.forEach((b,L)=>{if(n(45),i.setFont("helvetica","bold"),i.setFontSize(10),i.setTextColor(15,23,42),i.text(`Question ${L+1} Autopsy & Disarm Guide`,e,r),r+=5,b.correctAnswer){i.setFont("helvetica","bold"),i.setFontSize(9),i.setTextColor(16,185,129);const w=N(W(b.correctAnswer));_(i,`Target Answer: ${w}`,e,r,9),r+=5}if(b.traps&&b.traps.length>0&&b.traps.forEach(w=>{n(16),i.setFont("helvetica","bold"),i.setFontSize(8.5),i.setTextColor(w.isCorrect?16:185,w.isCorrect?185:83,w.isCorrect?129:9),i.text(`[Option ${w.option}] ${N(w.trapType)} ${w.vulnerabilityRate?`(${w.vulnerabilityRate})`:""}`,e+3,r),r+=4,i.setFont("helvetica","normal"),i.setTextColor(71,85,105);const E=N(W(w.trapDescription));i.splitTextToSize(E,a-8).forEach(d=>{_(i,d,e+6,r,8),r+=4}),r+=2}),b.parts&&b.parts.length>0&&b.parts.forEach(w=>{n(25),i.setFont("helvetica","bold"),i.setFontSize(8.5),i.setTextColor(30,41,59),i.text(`Part ${N(w.partLabel)} Model Answer & Scoring:`,e+3,r),r+=4,i.setFont("helvetica","normal"),i.setTextColor(16,185,129);const E=N(W(w.modelAnswer)),I=i.splitTextToSize(`Model Answer:
${E}`,a-8);n(Math.min(I.length*4.2+4,60)),I.forEach(d=>{n(5),_(i,d,e+6,r,8),r+=4}),r+=2,w.frqTraps&&w.frqTraps.length>0&&w.frqTraps.forEach(d=>{i.setFont("helvetica","bold"),i.setTextColor(185,83,9),i.text(`Pitfall: ${N(d.trapName)} (${N(d.vulnerabilityRate||"")})`,e+6,r),r+=4,i.setFont("helvetica","normal"),i.setTextColor(71,85,105);const v=N(W(`Lost Points: ${d.howStudentsLosePoints} | Fix: ${d.fullCreditFix}`));i.splitTextToSize(v,a-10).forEach(x=>{_(i,x,e+8,r,8),r+=4}),r+=2})}),b.disarmStrategy){n(16),i.setFillColor(236,253,245),i.setDrawColor(167,243,208);const w=N(W(b.disarmStrategy)),E=i.splitTextToSize(`5-Second Disarm Secret: ${w}`,a-8),I=E.length*4+6;i.rect(e,r,a,I,"FD"),i.setFont("helvetica","bold"),i.setFontSize(8),i.setTextColor(6,95,70),E.forEach((d,v)=>{_(i,d,e+4,r+4.5+v*4,8)}),r+=I+4}r+=4});const C=`AP_${s.shortCode||s.name.replace(/\s+/g,"_")}_TrapRadar_${R.toUpperCase()}.pdf`,D=i.output("blob"),B=URL.createObjectURL(D);return{blob:D,filename:C,blobUrl:B}}export{et as A,it as a,We as c,tt as g};
