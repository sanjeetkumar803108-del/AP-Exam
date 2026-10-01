import{r as Q,j as l}from"./vendor-react-3G4sEU1m.js";import{m as q,A as be}from"./vendor-motion-DQftYQDR.js";import{t as we}from"./index-BjgWrg5n.js";import{D as ke}from"./vendor-icons-BMwc-nrP.js";import{E as de}from"./vendor-pdf-DZ6jSTqM.js";import{s as N,a as U,p as se,b as H,d as W}from"./pdfTableDrawer-Dm48keiW.js";import{e as X,r as ie}from"./svgHelper-CiThyomP.js";function Be({title:c,subtitle:a,subjectName:r="AP Exam",shortCode:d="AP",topic:w="Comprehensive Review",unitName:t,questionCount:y=5,questionType:g="objective",format:e,mode:s="testprep",variant:o,isComplete:n=!1}){const[m,i]=Q.useState(0),[P,$]=Q.useState(0),B=e||(g==="subjective"?"subjective":"objective"),S=s==="trap_radar"||s==="challenge"||s==="scan"||s==="disarm"||s==="radar_scan"||s==="radar_disarm",F=o||(S?"radar":"app_loader"),j=Q.useMemo(()=>{if(s==="scan"||s==="radar_scan")return 12;if(s==="disarm"||s==="radar_disarm")return 8;const f=y||5,v=f<=3?12:f<=5?16:f<=10?24:34;return B==="subjective"?v+5:v},[s,y,B]),x=Q.useMemo(()=>{if(s==="scan"||s==="radar_scan")return[{stepNum:1,action:"Scanning Question Stem",subtext:"Extracting text & options"},{stepNum:2,action:"Auditing Distractor Traps",subtext:"Pinpointing common lures"},{stepNum:3,action:"Matching CED Standards",subtext:"Cross-checking curriculum"},{stepNum:4,action:"Calculating Risk Rates",subtext:"Benchmarking student errors"},{stepNum:5,action:"Synthesizing Disarm Rules",subtext:"Formulating Score-5 secret"},{stepNum:6,action:"Compiling Autopsy Card",subtext:"Delivering diagnostic breakdown"}];if(s==="disarm"||s==="radar_disarm")return[{stepNum:1,action:"Locking On Option",subtext:"Isolating choice parameters"},{stepNum:2,action:"Detecting Trap Patterns",subtext:"Checking sign-flips & scope"},{stepNum:3,action:"Evaluating Vulnerability",subtext:"Calculating student error risk"},{stepNum:4,action:"Revealing Disarm Secret",subtext:"Instant Score-5 heuristic"}];if(s==="trap_radar"||s==="challenge")return[{stepNum:1,action:"Scanning CED Framework",subtext:`Targeting ${d||"AP"} standards`},{stepNum:2,action:"Detecting Trap Patterns",subtext:"Isolating distractor archetypes"},{stepNum:3,action:"Synthesizing Distractor Traps",subtext:"Engineering deceptive lures"},{stepNum:4,action:"Calibrating Error Rates",subtext:"Benchmarking difficulty curve"},{stepNum:5,action:"Encoding Disarm Secrets",subtext:"Attaching 5-second heuristics"},{stepNum:6,action:"Arming Radar Cockpit",subtext:`Finalizing ${y} items`}];const f=B==="subjective";return[{stepNum:1,action:"Analyzing Curriculum",subtext:`Aligning ${d||"AP"} CED standards`},{stepNum:2,action:f?"Synthesizing FRQ Prompts":"Drafting AP Questions",subtext:"Crafting authentic stimulus"},{stepNum:3,action:f?"Calibrating Scoring Rubrics":"Balancing Distractor Traps",subtext:f?"Setting strict point criteria":"Engineering realistic choices"},{stepNum:4,action:"Verifying Solutions",subtext:"Checking explanations & KaTeX"},{stepNum:5,action:"Encoding Score-5 Keys",subtext:"Attaching examiner shortcuts"},{stepNum:6,action:"Finalizing Exam Session",subtext:`Readying ${y} ${f?"FRQs":"MCQs"}`}]},[s,d,y,B]);Q.useEffect(()=>{const f=setInterval(()=>{$(v=>v+1)},1e3);return()=>clearInterval(f)},[]);const R=Q.useMemo(()=>Math.max(2.4,j*.85/x.length),[j,x.length]);Q.useEffect(()=>{if(n){i(x.length-1);return}const f=Math.min(Math.floor(P/R),x.length-1);if(f!==m){i(f);try{we(12)}catch{}}},[P,R,x.length,m,n]),Q.useEffect(()=>{if(F==="radar")try{const f=window.AudioContext||window.webkitAudioContext;if(!f)return;const v=new f,O=v.createOscillator(),p=v.createGain();O.type="sine",O.frequency.setValueAtTime(880,v.currentTime),O.frequency.exponentialRampToValueAtTime(440,v.currentTime+.12),p.gain.setValueAtTime(.025,v.currentTime),p.gain.exponentialRampToValueAtTime(1e-4,v.currentTime+.15),O.connect(p),p.connect(v.destination),O.start(),O.stop(v.currentTime+.15)}catch{}},[m,F]);const b=x[m]||x[0],A=Q.useMemo(()=>{const f=Math.floor(P/60),v=P%60;return`${f<10?"0":""}${f}:${v<10?"0":""}${v}s`},[P]),L=Q.useMemo(()=>{if(n)return 100;const f=P/Math.max(1,j),v=1-Math.exp(-f*2.2),p=((m+.5)/x.length*.45+v*.55)*100;return Math.min(96,Math.max(8,Math.round(p)))},[n,P,j,m,x.length]);return l.jsx("div",{className:"w-full max-w-lg mx-auto py-4 px-2 select-none",children:l.jsxs(q.div,{initial:{opacity:0,scale:.96,y:12},animate:{opacity:1,scale:1,y:0},transition:{duration:.35,ease:"easeOut"},className:"relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 space-y-6 text-center",children:[l.jsx("div",{className:"absolute -top-24 -left-24 w-56 h-56 rounded-full blur-3xl pointer-events-none",style:{background:"rgba(37, 99, 235, 0.10)"}}),l.jsx("div",{className:"absolute -bottom-24 -right-24 w-56 h-56 rounded-full blur-3xl pointer-events-none",style:{background:"rgba(202, 170, 95, 0.10)"}}),l.jsxs("div",{className:"relative z-10 flex items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-3.5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"relative flex h-2 w-2",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",style:{background:F==="radar"?"#3b82f6":"#2563eb"}}),l.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2",style:{background:F==="radar"?"#3b82f6":"#2563eb",boxShadow:F==="radar"?"0 0 8px #3b82f6":"0 0 8px #2563eb"}})]}),l.jsx("span",{className:"text-[11px] font-bold text-zinc-700 dark:text-zinc-300",children:c||(S?"AP Trap Radar™":`${r} Review`)})]}),l.jsxs("div",{className:"flex items-center gap-1.5 font-mono text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full border border-zinc-200/60 dark:border-zinc-700/60",children:[l.jsx(ke,{className:"w-3 h-3 text-zinc-400 animate-spin-slow"}),l.jsx("span",{children:A})]})]}),l.jsx("div",{className:"relative z-10 flex items-center justify-center py-2",children:F==="radar"?l.jsxs("div",{className:"relative w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center overflow-hidden shrink-0",style:{borderWidth:4,borderStyle:"solid",borderColor:"rgba(59,130,246,0.35)",background:"linear-gradient(to bottom, #071428, #050e1e, #030912)",boxShadow:"0 0 40px rgba(37,99,235,0.25)",outline:"4px solid rgba(59,130,246,0.10)"},children:[l.jsx("span",{className:"absolute top-2 text-[8px] font-mono font-bold tracking-wider select-none",style:{color:"rgba(59,130,246,0.9)"},children:"000° N"}),l.jsx("span",{className:"absolute bottom-2 text-[8px] font-mono font-bold tracking-wider select-none",style:{color:"rgba(59,130,246,0.9)"},children:"180° S"}),l.jsx("span",{className:"absolute left-2 text-[8px] font-mono font-bold tracking-wider select-none",style:{color:"rgba(59,130,246,0.9)"},children:"270° W"}),l.jsx("span",{className:"absolute right-2 text-[8px] font-mono font-bold tracking-wider select-none",style:{color:"rgba(59,130,246,0.9)"},children:"090° E"}),l.jsx("div",{className:"absolute inset-5 sm:inset-6 rounded-full pointer-events-none",style:{border:"1px solid rgba(59,130,246,0.25)"}}),l.jsx("div",{className:"absolute inset-12 sm:inset-14 rounded-full border-dashed pointer-events-none",style:{border:"1px dashed rgba(59,130,246,0.25)"}}),l.jsx("div",{className:"absolute inset-20 sm:inset-22 rounded-full pointer-events-none",style:{border:"1px solid rgba(59,130,246,0.20)"}}),l.jsx("div",{className:"absolute w-full h-[1px] pointer-events-none",style:{background:"rgba(59,130,246,0.30)"}}),l.jsx("div",{className:"absolute h-full w-[1px] pointer-events-none",style:{background:"rgba(59,130,246,0.30)"}}),l.jsx("div",{className:"absolute w-full h-[1px] rotate-45 pointer-events-none",style:{background:"rgba(59,130,246,0.15)"}}),l.jsx("div",{className:"absolute w-full h-[1px] -rotate-45 pointer-events-none",style:{background:"rgba(59,130,246,0.15)"}}),l.jsx(q.div,{animate:{rotate:360},transition:{repeat:1/0,ease:"linear",duration:2.2},className:"absolute inset-0 rounded-full pointer-events-none origin-center",style:{background:"conic-gradient(from 0deg, rgba(37,99,235,0.65) 0deg, rgba(37,99,235,0.25) 35deg, rgba(37,99,235,0.05) 70deg, transparent 85deg, transparent 360deg)"}}),l.jsx("div",{className:"absolute top-[28%] right-[26%] w-2 h-2 rounded-full animate-pulse",style:{background:"#caaa5f",boxShadow:"0 0 8px #caaa5f"}}),l.jsx("div",{className:"absolute bottom-[30%] left-[32%] w-1.5 h-1.5 rounded-full animate-ping",style:{background:"#d4a843",boxShadow:"0 0 6px #d4a843"}}),l.jsx("div",{className:"absolute top-[42%] left-[24%] w-1.5 h-1.5 rounded-full",style:{background:"#caaa5f",boxShadow:"0 0 6px #caaa5f"}}),l.jsx("div",{className:"relative z-10 w-5 h-5 rounded-full flex items-center justify-center",style:{background:"rgba(37,99,235,0.30)",border:"1px solid #3b82f6",boxShadow:"0 0 15px #2563eb"},children:l.jsx("div",{className:"w-2 h-2 rounded-full bg-white animate-ping"})})]}):l.jsxs("div",{className:"relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center",children:[l.jsx(q.div,{className:"absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[5px] border-zinc-100 dark:border-zinc-800",style:{borderTopColor:"#2563eb",filter:"drop-shadow(0 0 10px rgba(37, 99, 235, 0.55))"},animate:{rotate:360},transition:{repeat:1/0,duration:1.2,ease:"linear"}}),l.jsx(q.div,{className:"absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[4px] border-zinc-100 dark:border-zinc-800",style:{borderBottomColor:"#caaa5f",filter:"drop-shadow(0 0 8px rgba(202, 170, 95, 0.55))"},animate:{rotate:-360},transition:{repeat:1/0,duration:.9,ease:"linear"}}),l.jsx(q.div,{className:"absolute w-4 h-4 rounded-full",style:{background:"linear-gradient(to top right, #1e3a5f, #caaa5f)",boxShadow:"0 0 14px rgba(37, 99, 235, 0.7)"},animate:{scale:[.85,1.2,.85]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"}})]})}),l.jsxs("div",{className:"relative z-10 space-y-2",children:[l.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/60",children:n?l.jsx("span",{className:"text-emerald-600 dark:text-emerald-400",children:"✓ Ready 100%"}):l.jsxs("span",{children:["Step ",b.stepNum," of ",x.length]})}),l.jsx(be,{mode:"wait",children:l.jsxs(q.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.22},className:"space-y-1",children:[l.jsx("h3",{className:"text-base sm:text-lg font-black text-zinc-900 dark:text-white tracking-tight",children:n?"✨ Synthesizing Complete!":b.action}),l.jsx("p",{className:"text-xs text-zinc-500 dark:text-zinc-400 font-medium",children:n?"Launching your AP session...":b.subtext})]},n?"complete":m)})]}),l.jsxs("div",{className:"relative z-10 space-y-2 pt-1",children:[l.jsx("div",{className:"w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden border border-zinc-200/60 dark:border-zinc-700/60",children:l.jsx(q.div,{className:"h-full",style:{background:n?"linear-gradient(to right, #059669, #10b981, #34d399)":F==="radar"?"linear-gradient(to right, #1e3a5f, #2563eb, #3b82f6)":"linear-gradient(to right, #1e3a5f, #2563eb, #caaa5f)",boxShadow:n?"0 0 12px rgba(16, 185, 129, 0.6)":"0 0 10px rgba(37, 99, 235, 0.5)"},animate:{width:`${L}%`},transition:{duration:n?.2:.4,ease:"easeOut"}})}),l.jsxs("div",{className:"flex items-center justify-between text-[11px] font-medium text-zinc-400 dark:text-zinc-500 px-1",children:[l.jsx("span",{children:n?"Ready!":S?"Deconstructing Traps":`${y} Questions Loading`}),l.jsxs("span",{className:`font-mono font-bold ${n?"text-emerald-600 dark:text-emerald-400":"text-zinc-700 dark:text-zinc-300"}`,children:[L,"%"]})]})]})]})})}const D={"ap-human-geography":{subjectId:"ap-human-geography",subjectName:"AP Human Geography",category:"social_science",mathExpected:!1,canonicalUnits:[{unitNumber:1,title:"Thinking Geographically",keywords:["gis","gps","remote sensing","scale of analysis","formal region","functional region","vernacular region","environmental determinism","possibilism","distance decay","time-space compression","map projection","choropleth"]},{unitNumber:2,title:"Population & Migration Patterns",keywords:["demographic transition model","dtm","crude birth rate","cbr","crude death rate","cdr","natural increase rate","nir","population pyramid","dependency ratio","malthus","boserup","ravenstein","push factor","pull factor","refugee","idp","asylum","pronatalist","antinatalist","epidemiological transition"]},{unitNumber:3,title:"Cultural Patterns & Processes",keywords:["cultural hearth","contagious diffusion","hierarchical diffusion","stimulus diffusion","relocation diffusion","universalizing religion","ethnic religion","language family","indo-european","isogloss","lingua franca","acculturation","assimilation","syncretism","cultural landscape","folk culture","pop culture"]},{unitNumber:4,title:"Political Patterns & Processes",keywords:["sovereignty","nation-state","stateless nation","multinational state","autonomous region","colonialism","berlin conference","superimposed boundary","relic boundary","unclos","exclusive economic zone","eez","gerrymandering","devolution","supranationalism","un","eu","nato","asean","balkanization"]},{unitNumber:5,title:"Agriculture & Rural Land-Use",keywords:["von thunen","bid-rent","green revolution","subsistence agriculture","commercial agriculture","intensive farming","extensive farming","shifting cultivation","pastoral nomadism","agribusiness","commodity chain","metes and bounds","township and range","long lot","desertification","salinization"]},{unitNumber:6,title:"Cities & Urban Land-Use",keywords:["burgess","concentric zone","hoyt sector","multiple nuclei","harris-ullman","galactic city","edge city","central place theory","christaller","range","threshold","rank-size rule","primate city","gentrification","new urbanism","smart growth","suburban sprawl","redlining","blockbusting","megacity","squatter settlement"]},{unitNumber:7,title:"Industrial & Economic Development",keywords:["wallerstein","world systems","core","periphery","semiperiphery","rostow","stages of economic growth","weber","least cost theory","bulk-gaining","bulk-reducing","hdi","human development index","gni","gii","maquiladora","epz","sez","outsourcing","deindustrialization","agglomeration","un sdgs","microfinance"]}],allowedDomains:["spatial analysis","demography","culture","geopolitics","agriculture","urban planning","economic development"],forbiddenSignatures:[/\b(?:definite\s+integral|indefinite\s+integral|fundamental\s+theorem\s+of\s+calculus|\bFTC\b|derivative|differentiat(?:ion|e)|critical\s+point|concav(?:e|ity)|tangent\s+line|riemann\s+sum|slope\s+field|separable\s+differential\s+equation|disk\s+method|washer\s+method|shell\s+method|volume\s+of\s+revolution|taylor\s+series|maclaurin|radius\s+of\s+convergence|l'h[oô]pital|mean\s+value\s+theorem|\bMVT\b|intermediate\s+value\s+theorem|\bIVT\b|dy\/dx|d\^2y\/dx\^2|f'\(x\)|f''\(x\)|\\int\b|\\frac\{d\}\{dx\})\b/i,/\b(?:centripetal\s+acceleration|rotational\s+inertia|kinematic\s+equation|projectile\s+motion|angular\s+momentum|newton's\s+second\s+law|bernoulli's\s+equation|archimedes\s+principle|f\s*=\s*ma)\b/i,/\b(?:titration\s+curve|le\s+chatelier|stoichiometr(?:y|ic)|henderson-hasselbalch|beer-lambert|orbitals|hybridization|sp3|photoelectron\s+spectroscopy|\bPES\b|net\s+ionic\s+equation)\b/i]},"ap-environmental-science":{subjectId:"ap-environmental-science",subjectName:"AP Environmental Science",category:"science",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"The Living World: Ecosystems",keywords:["carbon cycle","nitrogen cycle","phosphorus cycle","hydrologic cycle","trophic level","10% rule","primary productivity","gpp","npp","biomes"]},{unitNumber:2,title:"The Living World: Biodiversity",keywords:["ecosystem services","provisioning","regulating","cultural","supporting","island biogeography","ecological tolerance","succession","pioneer species","keystone species"]},{unitNumber:3,title:"Populations",keywords:["generalist","specialist","r-selected","k-selected","survivorship curve","carrying capacity","k","rule of 70","doubling time","demographic transition","tfr","replacement level"]},{unitNumber:4,title:"Earth Systems & Resources",keywords:["plate tectonics","convergent","divergent","transform","soil horizons","soil texture triangle","atmosphere","troposphere","stratosphere","coriolis effect","el nino","la nina","watershed"]},{unitNumber:5,title:"Land & Water Use",keywords:["tragedy of the commons","clearcutting","green revolution","irrigation","drip","furrow","flood","salinization","aquifer","ogallala","pest control","ipm","cafo","overfishing","mining","slag"]},{unitNumber:6,title:"Energy Resources & Consumption",keywords:["fossil fuels","coal","petroleum","natural gas","fracking","nuclear fission","half-life","biomass","solar photovoltaic","wind turbine","hydroelectric","geothermal","hydrogen fuel cell"]},{unitNumber:7,title:"Atmospheric Pollution",keywords:["photochemical smog","ground-level ozone","thermal inversion","acid deposition","so2","nox","pm2.5","pm10","radon","asbestos","vocs","vapor recovery nozzle","catalytic converter","scrubber"]},{unitNumber:8,title:"Aquatic & Terrestrial Pollution",keywords:["point source","nonpoint source","eutrophication","hypoxic","dead zone","biological oxygen demand","bod","bioaccumulation","biomagnification","endocrine disruptor","ld50","sanitary landfill","leachate","sewage treatment"]},{unitNumber:9,title:"Global Change",keywords:["stratospheric ozone depletion","cfcs","montreal protocol","greenhouse effect","co2","ch4","n2o","ocean acidification","coral bleaching","invasive species","hsi","cites","endangered species act"]}],allowedDomains:["ecology","earth systems","energy","environmental toxicology","pollution","sustainability","population ecology"],forbiddenSignatures:[/\b(?:definite\s+integral|indefinite\s+integral|fundamental\s+theorem\s+of\s+calculus|riemann\s+sum|disk\s+method|washer\s+method|taylor\s+series|maclaurin|l'h[oô]pital|mean\s+value\s+theorem|dy\/dx|d\^2y\/dx\^2|f'\(x\)|f''\(x\))\b/i,/\b(?:rotational\s+inertia|angular\s+momentum|centripetal\s+acceleration|bernoulli's\s+equation)\b/i]},"ap-computer-science-principles":{subjectId:"ap-computer-science-principles",subjectName:"AP Computer Science Principles",category:"tech",mathExpected:!1,canonicalUnits:[{unitNumber:1,title:"Creative Development",keywords:["collaboration","program design","software development process","debugging","logic error","syntax error","runtime error","testing"]},{unitNumber:2,title:"Data Representation & Information",keywords:["binary","bits","bytes","hexadecimal","overflow error","roundoff error","lossy compression","lossless compression","data abstraction","metadata"]},{unitNumber:3,title:"Algorithms & Programming",keywords:["sequencing","selection","iteration","conditional","if-else","loops","traversal","linear search","binary search","procedural abstraction","parameters","return value","robot grid"]},{unitNumber:4,title:"Computing Systems & Networks",keywords:["the internet","ip address","ipv4","ipv6","tcp/ip","packets","packet switching","routers","fault tolerance","redundancy","bandwidth","latency","world wide web","http","https"]},{unitNumber:5,title:"Impact of Computing",keywords:["digital divide","computing bias","crowdsourcing","citizen science","intellectual property","creative commons","open source","open access","cybersecurity","phishing","keylogging","malware","public-key encryption","symmetric encryption","ddos","multifactor authentication"]}],allowedDomains:["algorithms","networking","data representation","programming logic","cybersecurity","digital ethics"],forbiddenSignatures:[/\b(?:integral|derivative|calculus|riemann|titration|stoichiometry|dtm|demographic\s+transition|von\s+thunen|gerrymandering)\b/i,/\b(?:public\s+class\b|System\.out\.println|extends\b|implements\b|private\s+int\b|ArrayList<Integer>)\b/i]},"ap-calculus-ab":{subjectId:"ap-calculus-ab",subjectName:"AP Calculus AB",category:"stem_math",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Limits & Continuity",keywords:["limit","continuity","removable discontinuity","jump discontinuity","vertical asymptote","squeeze theorem","intermediate value theorem","ivt","end behavior"]},{unitNumber:2,title:"Differentiation: Definition & Fundamentals",keywords:["derivative","difference quotient","instantaneous rate of change","power rule","product rule","quotient rule","differentiability"]},{unitNumber:3,title:"Chain Rule & Implicit Differentiation",keywords:["chain rule","composite function","implicit differentiation","inverse trigonometric derivatives"]},{unitNumber:4,title:"Contextual Applications of Differentiation",keywords:["straight-line motion","position","velocity","acceleration","speed","related rates","local linearity","linear approximation"]},{unitNumber:5,title:"Analytical Applications of Differentiation",keywords:["mean value theorem","mvt","extreme value theorem","evt","critical point","first derivative test","second derivative test","concavity","inflection point","optimization"]},{unitNumber:6,title:"Integration & Accumulation of Change",keywords:["riemann sum","trapezoidal rule","antiderivative","indefinite integral","definite integral","fundamental theorem of calculus","ftc","u-substitution"]},{unitNumber:7,title:"Differential Equations & Slope Fields",keywords:["slope field","separation of variables","general solution","particular solution","exponential growth","dy/dx"]},{unitNumber:8,title:"Applications of Integration",keywords:["average value","area between curves","volume of solid of revolution","disk method","washer method","cross sections"]}],allowedDomains:["limits","derivatives","integrals","differential equations","particle motion","rates of change"],forbiddenSignatures:[/\b(?:gentrification|von\s+thunen|supranationalism|wallerstein|malthus|cold\s+war|french\s+revolution|hamlet|chloroplast|mitochondria|dna\s+replication|operon)\b/i,/\b(?:spatial\s+pattern|affected\s+stakeholders|regional\s+context|spatial\s+trends)\b/i,/\b(?:taylor\s+series|maclaurin\s+series|taylor\s+polynomial|maclaurin\s+polynomial|ratio\s+test|radius\s+of\s+convergence|interval\s+of\s+convergence|euler's\s+method|eulers\s+method|logistic\s+differential|carrying\s+capacity|polar\s+area|polar\s+coordinates|parametric\s+equations|vector-valued|integration\s+by\s+parts|partial\s+fractions|improper\s+integral|alternating\s+series\s+error\s+bound|lagrange\s+error\s+bound)\b/i]},"ap-calculus-bc":{subjectId:"ap-calculus-bc",subjectName:"AP Calculus BC",category:"stem_math",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Limits & Continuity",keywords:["limit","continuity","squeeze theorem","l'hopital"]},{unitNumber:2,title:"Differentiation: Definition & Fundamentals",keywords:["derivative","power rule","product rule","quotient rule"]},{unitNumber:3,title:"Chain Rule & Implicit Differentiation",keywords:["chain rule","implicit differentiation"]},{unitNumber:4,title:"Contextual Applications of Differentiation",keywords:["related rates","linear approximation"]},{unitNumber:5,title:"Analytical Applications of Differentiation",keywords:["mean value theorem","mvt","critical points","optimization"]},{unitNumber:6,title:"Integration & Accumulation of Change",keywords:["riemann sums","ftc","integration by parts","partial fractions","improper integrals"]},{unitNumber:7,title:"Differential Equations",keywords:["slope fields","euler's method","logistic differential equation","carrying capacity"]},{unitNumber:8,title:"Applications of Integration",keywords:["area between curves","volumes of revolution","arc length"]},{unitNumber:9,title:"Parametric Equations, Polar Coordinates & Vector-Valued Functions",keywords:["parametric equations","vector motion","velocity vector","speed","polar coordinates","polar area","r(theta)"]},{unitNumber:10,title:"Infinite Sequences & Series",keywords:["infinite series","geometric series","taylor polynomial","maclaurin","ratio test","radius of convergence","interval of convergence","alternating series test","lagrange error bound"]}],allowedDomains:["calculus","infinite series","taylor polynomials","polar coordinates","parametric equations","differential equations"],forbiddenSignatures:[/\b(?:gentrification|von\s+thunen|supranationalism|wallerstein|malthus|cold\s+war|cell\s+membrane)\b/i]},"ap-physics-1":{subjectId:"ap-physics-1",subjectName:"AP Physics 1: Algebra-Based",category:"science",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Kinematics",keywords:["displacement","velocity","acceleration","free fall","projectile motion","v-t graph","x-t graph"]},{unitNumber:2,title:"Force & Translational Dynamics",keywords:["newton's laws","inertia","f=ma","free body diagram","normal force","friction","tension","spring force","hooke's law"]},{unitNumber:3,title:"Work, Energy & Power",keywords:["kinetic energy","gravitational potential energy","elastic potential energy","conservation of energy","work-energy theorem","power"]},{unitNumber:4,title:"Linear Momentum",keywords:["momentum","impulse","conservation of momentum","elastic collision","inelastic collision","center of mass"]},{unitNumber:5,title:"Torque & Rotational Dynamics",keywords:["torque","rotational inertia","rotational kinetic energy","angular momentum","conservation of angular momentum","angular acceleration"]},{unitNumber:6,title:"Energy & Momentum of Oscillations",keywords:["simple harmonic motion","shm","period","frequency","simple pendulum","mass-spring oscillator"]},{unitNumber:7,title:"Fluids",keywords:["density","pressure","buoyant force","archimedes principle","continuity equation","bernoulli's equation"]}],allowedDomains:["mechanics","forces","energy","momentum","rotational motion","oscillations","fluids"],forbiddenSignatures:[/\b(?:definite\s+integral|fundamental\s+theorem\s+of\s+calculus|taylor\s+series|maclaurin|disk\s+method|washer\s+method)\b/i,/\b(?:dtm|gentrification|von\s+thunen|supranationalism|gerrymandering)\b/i]},"ap-chemistry":{subjectId:"ap-chemistry",subjectName:"AP Chemistry",category:"science",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Atomic Structure & Properties",keywords:["moles","molar mass","pes","photoelectron spectroscopy","electron configuration","periodic trends","electronegativity","ionization energy","mass spectrometry"]},{unitNumber:2,title:"Molecular & Ionic Compound Structure & Properties",keywords:["chemical bonds","ionic","covalent","lewis structure","resonance","vsepr","molecular geometry","bond angle","formal charge","hybridization"]},{unitNumber:3,title:"Intermolecular Forces & Properties",keywords:["intermolecular forces","imf","hydrogen bonding","dipole-dipole","london dispersion","vapor pressure","boiling point","solubility","beer-lambert law"]},{unitNumber:4,title:"Chemical Reactions",keywords:["net ionic equation","stoichiometry","limiting reactant","percent yield","precipitation","acid-base","redox","oxidation state","titration"]},{unitNumber:5,title:"Kinetics",keywords:["reaction rate","rate law","rate constant k","reaction order","integrated rate law","half-life","activation energy","arrhenius","catalyst","reaction mechanism","elementary step"]},{unitNumber:6,title:"Thermodynamics",keywords:["endothermic","exothermic","enthalpy","delta h","heat capacity","calorimetry","hess's law","bond enthalpies","standard enthalpy of formation"]},{unitNumber:7,title:"Equilibrium",keywords:["equilibrium constant","k_eq","k_c","k_p","reaction quotient q","le chatelier's principle","solubility product ksp","common ion effect"]},{unitNumber:8,title:"Acids & Bases",keywords:["ph","poh","strong acid","weak acid","ka","kb","kw","neutralization","titration curve","equivalence point","buffer","henderson-hasselbalch"]},{unitNumber:9,title:"Applications of Thermodynamics",keywords:["entropy","delta s","gibbs free energy","delta g","galvanic cell","voltaic cell","electrolytic cell","cell potential","faraday's constant"]}],allowedDomains:["atomic structure","bonding","stoichiometry","kinetics","thermodynamics","chemical equilibrium","acids and bases","electrochemistry"],forbiddenSignatures:[/\b(?:definite\s+integral|fundamental\s+theorem\s+of\s+calculus|taylor\s+series|disk\s+method|washer\s+method)\b/i,/\b(?:dtm|demographic\s+transition|von\s+thunen|gerrymandering|supranationalism)\b/i]},"ap-biology":{subjectId:"ap-biology",subjectName:"AP Biology",category:"science",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Chemistry of Life",keywords:["water properties","hydrogen bonding","macromolecules","carbohydrates","lipids","proteins","nucleic acids","amino acids","peptide bond"]},{unitNumber:2,title:"Cell Structure & Function",keywords:["cell organelles","endosymbiosis","plasma membrane","phospholipid bilayer","selective permeability","osmosis","water potential","tonicity","active transport"]},{unitNumber:3,title:"Cellular Energetics",keywords:["enzyme","catalysis","active site","denaturation","competitive inhibitor","allosteric","photosynthesis","chloroplast","chlorophyll","calvin cycle","cellular respiration","mitochondria","glycolysis","krebs cycle","oxidative phosphorylation","atp synthase"]},{unitNumber:4,title:"Cell Communication & Cell Cycle",keywords:["signal transduction","ligand","receptor","second messenger","camp","phosphorylation cascade","feedback loops","mitosis","cyclin","cdk","apoptosis"]},{unitNumber:5,title:"Heredity",keywords:["meiosis","crossing over","independent assortment","mendelian genetics","monohybrid","dihybrid","punnett square","chi-square","sex-linked","pedigree"]},{unitNumber:6,title:"Gene Expression & Regulation",keywords:["dna replication","helicase","dna polymerase","transcription","mrna","translation","tRNA","ribosome","codon","operon","lac operon","mutation","gel electrophoresis","pcr"]},{unitNumber:7,title:"Natural Selection",keywords:["natural selection","evolution","fitness","hardy-weinberg","genetic drift","founder effect","bottleneck","speciation","allopatric","phylogenetic tree","cladogram"]},{unitNumber:8,title:"Ecology",keywords:["energy flow","trophic cascade","keystone species","symbiosis","population ecology","carrying capacity","exponential growth","logistic growth","biodiversity"]}],allowedDomains:["cellular biology","genetics","evolution","ecology","biochemistry","physiology"],forbiddenSignatures:[/\b(?:definite\s+integral|fundamental\s+theorem\s+of\s+calculus|disk\s+method|washer\s+method)\b/i,/\b(?:gerrymandering|dtm|demographic\s+transition|von\s+thunen|supranationalism|berlin\s+conference)\b/i]},"ap-us-history":{subjectId:"ap-us-history",subjectName:"AP U.S. History (APUSH)",category:"humanities",mathExpected:!1,canonicalUnits:[{unitNumber:1,title:"Period 1 (1491-1607)",keywords:["columbian exchange","indigenous societies","encomienda system","spanish colonization","pueblo revolt"]},{unitNumber:2,title:"Period 2 (1607-1754)",keywords:["cheasapeake","jamestown","puritans","new england","middle colonies","mercantilism","salutary neglect","first great awakening","triangular trade","indentured servitude","bacon's rebellion"]},{unitNumber:3,title:"Period 3 (1754-1800)",keywords:["french and indian war","seven years war","stamp act","boston tea party","declaration of independence","articles of confederation","constitutional convention","federalist papers","bill of rights","washington's farewell address"]},{unitNumber:4,title:"Period 4 (1800-1848)",keywords:["louisiana purchase","marbury v madison","war of 1812","monroe doctrine","market revolution","erie canal","second great awakening","jacksonian democracy","nullification crisis","trail of tears","manifest destiny","seneca falls"]},{unitNumber:5,title:"Period 5 (1844-1877)",keywords:["mexican-american war","compromise of 1850","fugitive slave act","kansas-nebraska act","dred scott","lincoln-douglas","civil war","emancipation proclamation","reconstruction","13th amendment","14th amendment","15th amendment"]},{unitNumber:6,title:"Period 6 (1865-1898)",keywords:["gilded age","transcontinental railroad","andrew carnegie","john d rockefeller","social darwinism","labor unions","knights of labor","american federation of labor","populist party","dawes act","plessy v ferguson"]},{unitNumber:7,title:"Period 7 (1890-1945)",keywords:["progressive era","muckrakers","spanish-american war","imperialism","world war i","fourteen points","league of nations","roaring twenties","great depression","new deal","fdr","world war ii","pearl harbor","atomic bomb"]},{unitNumber:8,title:"Period 8 (1945-1980)",keywords:["cold war","containment","marshall plan","nato","korean war","cuban missile crisis","vietnam war","civil rights movement","brown v board","martin luther king","great society","watergate"]},{unitNumber:9,title:"Period 9 (1980-Present)",keywords:["reagan administration","conservative movement","end of cold war","persian gulf war","globalization","internet age","september 11","war on terror"]}],allowedDomains:["us history","politics","social movements","foreign policy","constitutional history","economics in history"],forbiddenSignatures:[/\b(?:definite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|dna\s+replication|mitosis|titration)\b/i]},"ap-psychology":{subjectId:"ap-psychology",subjectName:"AP Psychology",category:"social_science",mathExpected:!1,canonicalUnits:[{unitNumber:1,title:"Biological Bases of Behavior",keywords:["neuron","action potential","synapse","neurotransmitter","dopamine","serotonin","endorphins","central nervous system","brain structures","cerebral cortex","hippocampus","amygdala","neuroplasticity"]},{unitNumber:2,title:"Cognition",keywords:["memory","encoding","storage","retrieval","sensory memory","short-term memory","long-term memory","chunking","amnesia","problem solving","heuristics","biases","language acquisition"]},{unitNumber:3,title:"Development & Learning",keywords:["classical conditioning","pavlov","unconditioned stimulus","conditioned response","operant conditioning","skinner","reinforcement","punishment","social learning","bandura","piaget","erikson","kohlberg"]},{unitNumber:4,title:"Social Psychology & Personality",keywords:["conformity","asch","obedience","milgram","attribution theory","fundamental attribution error","cognitive dissonance","bystander effect","in-group bias","freud","big five traits"]},{unitNumber:5,title:"Mental & Physical Health",keywords:["dsm-5","anxiety disorders","major depressive disorder","bipolar","schizophrenia","obsessive-compulsive","ptsd","psychotherapy","cbt","biopsychosocial model"]}],allowedDomains:["psychology","neuroscience","cognition","behavior","development","mental health"],forbiddenSignatures:[/\b(?:definite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|titration|von\s+thunen)\b/i]},"ap-statistics":{subjectId:"ap-statistics",subjectName:"AP Statistics",category:"stem_math",mathExpected:!0,canonicalUnits:[{unitNumber:1,title:"Exploring One-Variable Data",keywords:["mean","median","mode","standard deviation","iqr","outlier","box plot","histogram","z-score","normal distribution"]},{unitNumber:2,title:"Exploring Two-Variable Data",keywords:["scatter plot","correlation r","coefficient of determination r-squared","residual","least-squares regression line","influential point","extrapolation"]},{unitNumber:3,title:"Collecting Data",keywords:["simple random sample","srs","stratified sample","cluster sample","systematic sample","convenience sample","bias","confounding","placebo","double blind","blocking"]},{unitNumber:4,title:"Probability, Random Variables & Probability Distributions",keywords:["mutually exclusive","independent events","conditional probability","binomial distribution","geometric distribution","expected value","variance"]},{unitNumber:5,title:"Sampling Distributions",keywords:["central limit theorem","clt","sampling variability","unbiased estimator","standard error","normal approximation"]},{unitNumber:6,title:"Inference for Categorical Data: Proportions",keywords:["confidence interval for p","one-sample z-test","two-sample z-test","p-value","type i error","type ii error","power","margin of error"]},{unitNumber:7,title:"Inference for Quantitative Data: Means",keywords:["t-distribution","degrees of freedom","one-sample t-test","two-sample t-test","paired t-test","t-interval"]},{unitNumber:8,title:"Inference for Categorical Data: Chi-Square",keywords:["chi-square goodness of fit","chi-square test of independence","chi-square test of homogeneity","expected counts","observed counts"]},{unitNumber:9,title:"Inference for Quantitative Data: Slopes",keywords:["t-test for slope","confidence interval for slope","linear regression model conditions"]}],allowedDomains:["descriptive statistics","probability","sampling","hypothesis testing","confidence intervals","regression inference"],forbiddenSignatures:[/\b(?:definite\s+integral|indefinite\s+integral|fundamental\s+theorem\s+of\s+calculus|derivative|dy\/dx|disk\s+method|washer\s+method|taylor\s+series)\b/i,/\b(?:dtm|demographic\s+transition|von\s+thunen|gerrymandering|chloroplast)\b/i]},"ap-us-government":{subjectId:"ap-us-government",subjectName:"AP U.S. Government & Politics",category:"social_science",mathExpected:!1,canonicalUnits:[{unitNumber:1,title:"Foundations of American Democracy",keywords:["federalist 10","brutus 1","declaration of independence","articles of confederation","constitution","bill of rights","federalism","separation of powers","checks and balances","mcculloch v maryland","us v lopez"]},{unitNumber:2,title:"Interactions Among Branches of Government",keywords:["congress","house","senate","filibuster","cloture","gerrymandering","presidency","executive order","veto","pocket veto","federalist 70","bureaucracy","iron triangle","supreme court","judicial review","marbury v madison","federalist 78","stare decisis"]},{unitNumber:3,title:"Civil Liberties & Civil Rights",keywords:["first amendment","establishment clause","free exercise clause","schenck v us","tinker v des moines","new york times v us","second amendment","fourth amendment","exclusionary rule","miranda","fourteenth amendment","due process","equal protection","selective incorporation","brown v board","letter from birmingham jail"]},{unitNumber:4,title:"American Political Ideologies & Beliefs",keywords:["political socialization","liberalism","conservatism","libertarianism","public opinion polling","scientific polling","sampling error","fiscal policy","monetary policy","federal reserve"]},{unitNumber:5,title:"Political Participation",keywords:["voting rights","15th amendment","19th amendment","24th amendment","26th amendment","voter turnout","political parties","critical elections","realignment","interest groups","citizens united v fec","pacs","super pacs","electoral college","media bias","horse-race journalism"]}],allowedDomains:["american politics","constitution","scotus cases","foundational documents","civil rights","elections","institutions of government"],forbiddenSignatures:[/\b(?:definite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|titration|chloroplast|mitosis)\b/i]}};function ve(c){if(!c)return null;const a=c.toLowerCase().trim();if(D[a])return D[a];for(const[r,d]of Object.entries(D))if(a.includes(r.replace("ap-",""))||a.includes(d.subjectName.toLowerCase().replace("ap ","")))return d;return a.includes("geography")||a.includes("aphg")?D["ap-human-geography"]:a.includes("environmental")||a.includes("apes")?D["ap-environmental-science"]:a.includes("principles")||a.includes("csp")?D["ap-computer-science-principles"]:a.includes("calculus bc")?D["ap-calculus-bc"]:a.includes("calculus")?D["ap-calculus-ab"]:a.includes("physics")?D["ap-physics-1"]:a.includes("chemistry")?D["ap-chemistry"]:a.includes("biology")?D["ap-biology"]:a.includes("history")||a.includes("apush")?D["ap-us-history"]:a.includes("psych")?D["ap-psychology"]:a.includes("stat")?D["ap-statistics"]:a.includes("gov")||a.includes("politics")?D["ap-us-government"]:null}const le=`<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
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
</svg>`,Ce=`<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
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
</svg>`,Se=`<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
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
</svg>`,Ne=`<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
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
</svg>`,te=`<svg viewBox='0 0 540 420' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
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
</svg>`,ce=`<svg viewBox='0 0 540 420' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
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
</svg>`,ze=`<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
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
</svg>`;function Te(c,a){if(!c)return null;const r=c.toLowerCase(),d=(a||"").toLowerCase();if(d.includes("geography")||d.includes("aphg")||d.includes("human")){if(r.includes("demographic transition")||r.includes("dtm")||r.includes("crude birth")&&r.includes("crude death"))return le;if(r.includes("von thunen")||r.includes("von thünen")||r.includes("bid-rent")||r.includes("isolated state"))return Ce;if(r.includes("burgess")||r.includes("concentric zone")||r.includes("concentric")&&r.includes("zone"))return Se;if(r.includes("hoyt")||r.includes("sector model")||r.includes("axial growth"))return Ne;if(r.includes("la nina")||r.includes("la niña")||r.includes("equatorial pacific")&&r.includes("trade wind"))return te;if(r.includes("el nino")||r.includes("el niño"))return ce}if(d.includes("environmental")||d.includes("apes")){if(r.includes("demographic transition")||r.includes("crude birth")&&r.includes("crude death"))return le;if(r.includes("la nina")||r.includes("la niña")||r.includes("sea surface conditions")&&r.includes("pacific")||r.includes("equatorial pacific")&&(r.includes("trade wind")||r.includes("precipitation")||r.includes("australia"))||r.includes("trade winds")&&r.includes("pacific")&&!r.includes("el nino")&&!r.includes("el niño"))return te;if(r.includes("el nino")||r.includes("el niño")||r.includes("enso")&&r.includes("suppressed upwelling"))return ce;if(r.includes("enso")||r.includes("walker circulation")&&r.includes("pacific"))return te;if(r.includes("rain shadow")||r.includes("windward")&&r.includes("leeward")||r.includes("orographic"))return ze}return null}function Ae(c){if(!c)return{count:0,labels:[]};const a=/(?:\((a|b|c|d|e|f|g)\)|(?:^|\n)\s*(?:part|question)\s+([a-g])\b|(?:^|\n)\s*([a-g])[.)])/gi,r=[];let d;for(;(d=a.exec(c))!==null;)r.push(d);const w=new Set;for(const y of r){const g=(y[1]||y[2]||y[3]).toLowerCase();w.add(g)}const t=Array.from(w).sort();return{count:t.length,labels:t}}function Ee(c,a){if(!c)return 1;if(Array.isArray(c.scoringRubric)&&c.scoringRubric.length>0){let y=0,g=!1;for(const e of c.scoringRubric){const s=String(e||""),o=s.match(/\[\s*(?:\d+\s*\/\s*)?(\d+)\s*(?:points|point|pts|pt)\s*\]/i)||s.match(/\(\s*(?:\d+\s*\/\s*)?(\d+)\s*(?:points|point|pts|pt)\s*\)/i);o&&(y+=parseInt(o[1],10),g=!0)}if(g&&y>0)return y}const r=`${c.prompt||""} ${c.modelAnswer||""}`,{count:d}=Ae(r);if(d>=2){const y=Number(c.totalPoints);return!isNaN(y)&&y>=d?y:d}const w=(a||"").toLowerCase();if(w.includes("stat"))return 4;if(w.includes("human")||w.includes("geography"))return 7;if(w.includes("history")||w.includes("apush"))return 3;if(w.includes("gov"))return 4;if(w.includes("chem")||w.includes("bio"))return 8;const t=Number(c.totalPoints);return!isNaN(t)&&t>0?t:6}function Z(c){return c?c.replace(/<svg[\s\S]*?<\/svg>/gi,"").replace(/<svg\b[^>]*>/gi,"").replace(/<\/svg>/gi,"").replace(/<path\b[^>]*>/gi,"").replace(/<rect\b[^>]*>/gi,"").replace(/<circle\b[^>]*>/gi,"").replace(/<text\b[^>]*>[\s\S]*?<\/text>/gi,"").trim():""}function Pe(c,a,r){const d=ve(c);if(!d||d.canonicalUnits.length===0)return{unitNumber:1,title:typeof a=="string"&&a.trim()?a:"General Course Content"};if(typeof a=="number"&&!isNaN(a)){const g=d.canonicalUnits.find(e=>e.unitNumber===a);if(g)return{unitNumber:g.unitNumber,title:g.title}}const w=String(a||"").toLowerCase().trim(),t=w.match(/\b(?:unit|period|u|p)\s*([0-9]+)\b/i)||w.match(/^([0-9]+)$/);if(t){const g=parseInt(t[1],10),e=d.canonicalUnits.find(s=>s.unitNumber===g);if(e)return{unitNumber:e.unitNumber,title:e.title}}for(const g of d.canonicalUnits){if(w.includes(g.title.toLowerCase()))return{unitNumber:g.unitNumber,title:g.title};for(const e of g.keywords)if(w.includes(e.toLowerCase()))return{unitNumber:g.unitNumber,title:g.title}}if(r&&r.trim()){const g=r.toLowerCase();let e=null,s=0;for(const o of d.canonicalUnits){let n=0;g.includes(o.title.toLowerCase())&&(n+=5);for(const m of o.keywords)g.includes(m.toLowerCase())&&(n+=2);n>s&&(s=n,e=o)}if(e&&s>=2)return{unitNumber:e.unitNumber,title:e.title}}const y=d.canonicalUnits[0];return{unitNumber:y.unitNumber,title:y.title}}const V=c=>{if(!c)return!1;const a=(c.id||"").toLowerCase(),r=(c.shortCode||"").toUpperCase(),d=(c.name||"").toLowerCase();return r==="CSA"||a==="ap-computer-science"||d.includes("science a")?!1:a==="ap-computer-science-principles"||r==="CSP"||d.includes("principles")&&d.includes("computer")};function Re(c,a){return c?Ee(c,a):6}async function Qe(c){const{subject:a,unitTitle:r,questionType:d,objectiveQuestions:w,subjectiveQuestions:t}=c,y=w||[],g=t||[],e=new de({unit:"pt",format:"a4",orientation:"portrait"}),s=e.internal.pageSize.getWidth(),o=e.internal.pageSize.getHeight(),n=36,m=s-n*2;let i=0,P=1;const $=C=>{if(C){e.setFillColor(30,27,75),e.rect(0,0,s,74,"F"),e.setFillColor(99,102,241),e.rect(0,74,s,3,"F"),e.setTextColor(251,191,36),e.setFont("helvetica","bold"),e.setFontSize(8.5);const u=c.examMode==="mock_exam"||g.length===3&&(a.id?.includes("geography")||a.name?.toLowerCase().includes("geography")),h=u?"AP EXAM APP  |  OFFICIAL COLLEGE BOARD TIMED EXAM SIMULATION":"AP EXAM APP  |  ADVANCED PLACEMENT EXAM PREPARATION";e.text(h,n,24),e.setTextColor(255,255,255),e.setFont("helvetica","bold"),e.setFontSize(15);const T=u?`AP ${N(a.name)} Section II Mock Exam`:`AP ${N(a.name)} Topic & Concept Practice Bank`;e.text(T,n,45),e.setFont("helvetica","normal"),e.setFontSize(9),e.setTextColor(226,232,240);const k=V(a),E=d==="objective"?"Section I (Multiple Choice)":k?"Section II (Create Performance Task)":"Section II (Free Response)",z=new Date().toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),_=u?`Structure: 3 Real Exam FRQs (75 Minutes • Timed Simulation)   |   ${z}`:`Format: ${E} (CED Aligned Practice)   |   Unit: ${N(r)}   |   ${z}`;e.text(_,n,62),i=96}else{e.setFillColor(248,250,252),e.rect(0,0,s,28,"F"),e.setDrawColor(226,232,240),e.line(0,28,s,28);const u=V(a),h=d==="objective"?"Multiple Choice":u?"Create Performance Task":"Free Response";e.setFont("helvetica","bold"),e.setFontSize(8),e.setTextColor(100,116,139),e.text(`AP ${N(a.shortCode||a.name)} - ${h}`,n,18),e.text("AP Exam Practice Engine",s-n,18,{align:"right"}),i=46}},B=C=>{e.setDrawColor(226,232,240),e.setLineWidth(.5),e.line(n,o-24,s-n,o-24),e.setFont("helvetica","normal"),e.setFontSize(7.5),e.setTextColor(148,163,184),e.text("AP Exam Prep  •  For interactive AI scoring & practice, use AP Exam app",n,o-12),e.text(`Page ${C}`,s-n,o-12,{align:"right"})};$(!0),B(P);const S=C=>i+C>o-40?(e.addPage(),P++,$(!1),B(P),e.setFont("helvetica","normal"),e.setFontSize(9.5),e.setTextColor(15,23,42),!0):!1;if(d==="objective"){for(let C=0;C<y.length;C++){const u=y[C];S(90),e.setFillColor(241,245,249),e.roundedRect(n,i,m,20,3,3,"F"),e.setFont("helvetica","bold"),e.setFontSize(9.5),e.setTextColor(30,41,59),e.text(`QUESTION ${C+1} OF ${y.length}`,n+8,i+13.5),u.skill&&(e.setFont("helvetica","italic"),e.setFontSize(8),e.setTextColor(99,102,241),e.text(N(u.skill),s-n-8,i+13.5,{align:"right"})),i+=28;let h=u.question||u.prompt||"",T=u.stimulus||"",k=u.diagramSvg;if(!k&&T){const z=X(T);T=z.cleanText,z.diagramSvg&&(k=z.diagramSvg)}const E=X(h,k);if(h=E.cleanText,E.diagramSvg&&(k=E.diagramSvg),T&&T.trim()&&(i=U(e,T.trim(),n+10,i,m-20,{fontName:"times",fontStyle:"italic",fontSize:9,textColor:[51,65,85],checkPageBreak:S}),i+=8),i=U(e,h,n,i,m,{fontName:"helvetica",fontStyle:"bold",fontSize:10.5,textColor:[15,23,42],checkPageBreak:S}),i+=10,k)try{const z=await ie(k,1e3,550);if(z){const M=Math.min(m,336.3636363636364),G=n+(m-M)/2;S(200),e.addImage(z,"PNG",G,i,M,185),i+=197}}catch(z){console.warn("Could not rasterize SVG diagram for PDF:",z)}u.options.forEach(z=>{e.setFillColor(241,245,249),e.circle(n+6,i+6,3,"F"),i=U(e,z,n+16,i,m-24,{fontName:"helvetica",fontStyle:"normal",fontSize:9.5,textColor:[30,41,59],checkPageBreak:S}),i+=8}),i+=14,C<y.length-1&&(e.setDrawColor(226,232,240),e.setLineWidth(.5),e.line(n,i,s-n,i),i+=26)}e.addPage(),P++,$(!1),B(P),e.setFillColor(240,253,244),e.setDrawColor(187,247,208),e.roundedRect(n,i,m,24,4,4,"FD"),e.setFont("helvetica","bold"),e.setFontSize(10.5),e.setTextColor(21,128,61),e.text("OFFICIAL AP EXAM ANSWER KEY & DETAILED EXPLANATIONS",n+10,i+16),i+=34,y.forEach((C,u)=>{const h=N(C.correctAnswer),T=se(C.explanation);S(60),e.setFont("helvetica","bold"),e.setFontSize(9.5),e.setTextColor(21,128,61),e.text(`QUESTION ${u+1} - [Correct Answer]:  ${h}`,n,i),i+=16,T.forEach((k,E)=>{k.label&&k.label.trim()?(e.setFont("helvetica","bold"),e.setFontSize(8.5),k.label.toLowerCase().includes("distractor")?(e.setTextColor(180,83,9),i+=2):k.label.toLowerCase().startsWith("option")||k.label.toLowerCase().startsWith("choice")?e.setTextColor(126,34,206):e.setTextColor(79,70,229),e.text(k.label,n+8,i),i+=12):E===0&&T.length===1&&(e.setFont("helvetica","bold"),e.setFontSize(8.5),e.setTextColor(100,116,139),e.text("Official Explanation:",n+8,i),i+=12),k.content&&k.content.trim()&&(i=U(e,k.content,n+8,i,m-16,{fontName:"helvetica",fontStyle:"normal",fontSize:8.5,textColor:[51,65,85],checkPageBreak:S}),i+=8)}),i+=12,u<y.length-1&&(e.setDrawColor(226,232,240),e.setLineWidth(.5),e.line(n,i,s-n,i),i+=20)})}else{for(let u=0;u<g.length;u++){const h=g[u];let T=Z(h.prompt||h.question||""),k=Z(h.stimulus||""),E=h.diagramSvg;const z=Te(T+" "+(h.skill||""),a.id||"");if(z&&(E=z),!E&&k){const I=X(k);k=Z(I.cleanText),I.diagramSvg&&(E=I.diagramSvg)}const _=X(T,E);T=Z(_.cleanText),_.diagramSvg&&(E=_.diagramSvg);const M=Re(h,a.id||a.name),G=Pe(a.id||a.name||"",h.unitNumber||h.unitTitle||h.skill||r,T),ne=N(T);e.setFont("helvetica","bold"),e.setFontSize(10.5);const fe=e.splitTextToSize(ne,m).length*13+16,J=34,oe=10,ue=E?165:0,me=J+oe+fe+ue+16,he=o-40-46;S(Math.min(me,he));const pe=V(a);e.setFillColor(243,232,255),e.roundedRect(n,i,m,J,4,4,"F"),e.setFont("helvetica","bold"),e.setFontSize(10),e.setTextColor(107,33,168);const ge=pe?`CREATE PERFORMANCE TASK PROMPT ${u+1}  [${M} POINTS]`:`FREE RESPONSE QUESTION ${u+1}  [${M} POINTS]`;e.text(ge,n+10,i+14);const re=h.stimulusCategory||(E?"single":"none"),ye=re==="two"?"[Two Stimuli]":re==="single"?"[Single Stimulus]":"[No Stimulus]";e.setFont("helvetica","bold"),e.setFontSize(8),e.setTextColor(147,51,234),e.text(ye,s-n-10,i+14,{align:"right"}),e.setFont("helvetica","normal"),e.setFontSize(8.5),e.setTextColor(126,34,206);const xe=`Unit ${G.unitNumber}: ${G.title}`;if(e.text(N(xe),n+10,i+27),i+=J+oe,k&&k.trim()&&(i=U(e,k.trim(),n+10,i,m-20,{fontName:"times",fontStyle:"italic",fontSize:9,textColor:[51,65,85],checkPageBreak:S}),i+=8),i=U(e,ne,n,i,m,{fontName:"helvetica",fontStyle:"bold",fontSize:10.5,textColor:[15,23,42],checkPageBreak:S}),i+=12,E)try{const I=await ie(E,1e3,550);if(I){const Y=Math.min(m,336.3636363636364),K=n+(m-Y)/2;S(200),e.addImage(I,"PNG",K,i,Y,185),i+=195}}catch(I){console.warn("Could not rasterize SVG diagram for PDF:",I)}const ee=h.parts;if(Array.isArray(ee)&&ee.length>0)for(const I of ee){S(35);const ae=I.partLabel?`Part ${I.partLabel}`:I.label||"Part",Y=I.points?` (${I.points} Point${I.points>1?"s":""})`:"";e.setFont("helvetica","bold"),e.setFontSize(9.5),e.setTextColor(88,28,135),e.text(`${ae}${Y}:`,n+6,i+10),i+=14;const K=I.task||I.prompt||"";K&&(i=U(e,K,n+10,i,m-14,{fontName:"helvetica",fontStyle:"normal",fontSize:9,textColor:[30,41,59],checkPageBreak:S}),i+=8)}u<g.length-1&&(e.setDrawColor(226,232,240),e.setLineWidth(.5),e.line(n,i,s-n,i),i+=26)}e.addPage(),P++,$(!1),B(P),e.setFillColor(238,242,255),e.setDrawColor(199,210,254),e.roundedRect(n,i,m,24,4,4,"FD"),e.setFont("helvetica","bold"),e.setFontSize(10.5),e.setTextColor(67,56,202);const C=V(a)?"OFFICIAL CREATE PERFORMANCE TASK SCORING GUIDELINES & MODEL RESPONSES":"OFFICIAL COLLEGE BOARD SCORING GUIDELINES & MODEL SOLUTIONS";e.text(C,n+10,i+16),i+=34,g.forEach((u,h)=>{const k=V(a)?`TASK PROMPT ${h+1} SCORING RUBRIC & EXEMPLARY SOLUTION`:`QUESTION ${h+1} SCORING RUBRIC & EXEMPLARY SOLUTION`,E=se(u.modelAnswer);S(50),e.setFont("helvetica","bold"),e.setFontSize(10),e.setTextColor(88,28,135),e.text(k,n,i),i+=14,e.setFillColor(238,242,255),e.setDrawColor(199,210,254),e.roundedRect(n,i,m,20,3,3,"FD"),e.setFont("helvetica","bold"),e.setFontSize(9),e.setTextColor(67,56,202),e.text("Exemplary Model Solution (Maximum Score):",n+10,i+13.5),i+=26,E.forEach(M=>{S(40),M.label&&M.label.trim()&&(e.setFont("helvetica","bold"),e.setFontSize(9),e.setTextColor(67,56,202),e.text(M.label,n+8,i),i+=13);const G=Z(M.content);i=U(e,G,n+8,i,m-16,{fontName:"helvetica",fontStyle:"normal",fontSize:8.5,textColor:[30,41,59],checkPageBreak:S}),i+=8}),i+=8,S(50),e.setFont("helvetica","bold"),e.setFontSize(9),e.setTextColor(5,150,105),e.text("Official Reader Scoring Guidelines & Criteria:",n,i),i+=12;const z=u.scoringRubric;(Array.isArray(z)?z.map(String):typeof z=="string"&&z.trim()?z.includes(`
`)?z.split(`
`).map(M=>M.trim()).filter(Boolean):[z]:[]).forEach(M=>{const G=Z(M);i=U(e,`• ${G}`,n+6,i,m-12,{fontName:"helvetica",fontStyle:"normal",fontSize:8.5,textColor:[51,65,85],checkPageBreak:S}),i+=6}),i+=14,h<g.length-1&&(e.setDrawColor(226,232,240),e.setLineWidth(.5),e.line(n,i,s-n,i),i+=24)})}const F=38;S(F+15);const j=Math.max(i+14,o-36-F);e.setFillColor(245,243,255),e.setDrawColor(199,210,254),e.setLineWidth(.8),e.roundedRect(n,j,m,F,4,4,"FD"),e.setFillColor(99,102,241),e.roundedRect(n,j,5,F,2,2,"F"),e.setFont("helvetica","bold"),e.setFontSize(8.5),e.setTextColor(67,56,202),e.text("★ PRO TIP: FOR THE BEST STUDY & PRACTICE EXPERIENCE",n+12,j+13),e.setFont("helvetica","normal"),e.setFontSize(7.6),e.setTextColor(55,65,81);const R=e.splitTextToSize("To get instant AI feedback, interactive step-by-step hints, audio explanations, and timed exams, practice directly inside the AP Exam app rather than static PDFs!",m-20);let b=j+24;for(const C of R)e.text(C,n+12,b),b+=9.5;const A=V(a),L=d==="objective"?"MCQ":A?"CREATE_PT":"FRQ",v=`AP_${(a.shortCode||a.name).replace(/\s+/g,"_")}_${L}_Practice.pdf`,O=e.output("blob"),p=URL.createObjectURL(O);return{blob:O,filename:v,blobUrl:p}}async function He(c){const{subject:a,unitTitle:r,questionFormat:d,questions:w}=c;if(!w||w.length===0)return null;const t=new de({orientation:"portrait",unit:"mm",format:"a4"}),y=t.internal.pageSize.getWidth(),g=t.internal.pageSize.getHeight(),e=15,s=y-e*2;let o=e;const n=x=>o+x>g-e?(t.addPage(),o=e,!0):!1;t.setFillColor(30,41,59),t.rect(e,o,s,22,"F"),t.setFont("helvetica","bold"),t.setFontSize(14),t.setTextColor(255,255,255);const m=N(a.name),i=m.startsWith("AP ")?`${m} - AP TRAP RADAR`:`AP ${m} - AP TRAP RADAR`;t.text(i,e+6,o+10),t.setFontSize(9),t.setFont("helvetica","normal"),t.setTextColor(203,213,225);const P=w[0]?.format||d,$=P==="subjective"?"Section II (Free Response Trap Simulation)":"Section I (Multiple Choice Distractor Gauntlet)";t.text(`${N(r)} | ${$} | ${w.length} Questions`,e+6,o+17),o+=28,t.setFont("helvetica","bold"),t.setFontSize(11),t.setTextColor(15,23,42),t.text("SECTION: PRACTICE QUESTIONS & STIMULI",e,o),o+=6,t.setDrawColor(203,213,225),t.line(e,o,e+s,o),o+=6;for(let x=0;x<w.length;x++){const R=w[x];n(35),t.setFont("helvetica","bold"),t.setFontSize(10),t.setTextColor(180,83,9),t.text(`Question ${x+1} ${R.skill?`[${N(R.skill)}]`:""}`,e,o),o+=5;let b=R.prompt||"",A=R.stimulus||"",L=R.diagramSvg;if(!L&&A){const p=X(A);A=p.cleanText,p.diagramSvg&&(L=p.diagramSvg)}const f=X(b,L);if(b=f.cleanText,f.diagramSvg&&(L=f.diagramSvg),A&&A.trim().length>0)if(n(25),A.includes("|"))o=U(t,A.trim(),e+2,o,s-4,{fontName:"helvetica",fontStyle:"normal",fontSize:8.5,textColor:[51,65,85],checkPageBreak:n}),o+=4;else{t.setFillColor(248,250,252),t.setDrawColor(226,232,240);const p=N(H(A)),C=t.splitTextToSize(p,s-8),u=C.length*4.5+6;t.rect(e,o,s,u,"FD"),t.setFont("helvetica","italic"),t.setFontSize(8.5),t.setTextColor(51,65,85),C.forEach((h,T)=>{W(t,h,e+4,o+5+T*4.5,8.5)}),o+=u+4}t.setFont("helvetica","normal"),t.setFontSize(9.5),t.setTextColor(15,23,42);const v=N(H(b)),O=t.splitTextToSize(v,s);if(n(O.length*5+4),O.forEach(p=>{W(t,p,e,o,9.5),o+=5}),o+=3,L)try{const p=await ie(L,800,440);if(p){const u=Math.min(s,90.9090909090909),h=e+(s-u)/2;n(55),t.addImage(p,"PNG",h,o,u,50),o+=54}}catch(p){console.warn("Could not rasterize SVG diagram for Trap Radar PDF:",p)}R.options&&R.options.length>0&&R.options.forEach(p=>{const C=N(H(p)),u=t.splitTextToSize(C,s-6);n(u.length*4.5+2),u.forEach(h=>{W(t,h,e+4,o,8.5),o+=4.5}),o+=2}),R.parts&&R.parts.length>0&&R.parts.forEach(p=>{if(n(18),t.setFont("helvetica","bold"),t.setFontSize(9),t.setTextColor(30,41,59),t.text(`Part ${N(p.partLabel)} (${p.points} Point${p.points>1?"s":""}):`,e+4,o),o+=4.5,p.task.includes("|"))o=U(t,p.task,e+4,o,s-8,{fontName:"helvetica",fontStyle:"normal",fontSize:8.5,textColor:[30,41,59],checkPageBreak:n}),o+=3;else{t.setFont("helvetica","normal");const C=N(H(p.task));t.splitTextToSize(C,s-8).forEach(h=>{W(t,h,e+6,o,8.5),o+=4.5}),o+=3}}),o+=5}t.addPage(),o=e,t.setFillColor(15,23,42),t.rect(e,o,s,14,"F"),t.setFont("helvetica","bold"),t.setFontSize(12),t.setTextColor(255,255,255),t.text("EXAMINER DISTRACTOR AUTOPSY & SCORING RUBRICS",e+6,o+9),o+=20,w.forEach((x,R)=>{if(n(45),t.setFont("helvetica","bold"),t.setFontSize(10),t.setTextColor(15,23,42),t.text(`Question ${R+1} Autopsy & Disarm Guide`,e,o),o+=5,x.correctAnswer){t.setFont("helvetica","bold"),t.setFontSize(9),t.setTextColor(16,185,129);const b=N(H(x.correctAnswer));W(t,`Target Answer: ${b}`,e,o,9),o+=5}if(x.traps&&x.traps.length>0&&x.traps.forEach(b=>{n(16),t.setFont("helvetica","bold"),t.setFontSize(8.5),t.setTextColor(b.isCorrect?16:185,b.isCorrect?185:83,b.isCorrect?129:9),t.text(`[Option ${b.option}] ${N(b.trapType)} ${b.vulnerabilityRate?`(${b.vulnerabilityRate})`:""}`,e+3,o),o+=4,t.setFont("helvetica","normal"),t.setTextColor(71,85,105);const A=N(H(b.trapDescription));t.splitTextToSize(A,s-8).forEach(f=>{W(t,f,e+6,o,8),o+=4}),o+=2}),x.parts&&x.parts.length>0&&x.parts.forEach(b=>{n(25),t.setFont("helvetica","bold"),t.setFontSize(8.5),t.setTextColor(30,41,59),t.text(`Part ${N(b.partLabel)} Model Answer & Scoring:`,e+3,o),o+=4,t.setFont("helvetica","normal"),t.setTextColor(16,185,129);const A=N(H(b.modelAnswer)),L=t.splitTextToSize(`Model Answer:
${A}`,s-8);n(Math.min(L.length*4.2+4,60)),L.forEach(f=>{n(5),W(t,f,e+6,o,8),o+=4}),o+=2,b.frqTraps&&b.frqTraps.length>0&&b.frqTraps.forEach(f=>{t.setFont("helvetica","bold"),t.setTextColor(185,83,9),t.text(`Pitfall: ${N(f.trapName)} (${N(f.vulnerabilityRate||"")})`,e+6,o),o+=4,t.setFont("helvetica","normal"),t.setTextColor(71,85,105);const v=N(H(`Lost Points: ${f.howStudentsLosePoints} | Fix: ${f.fullCreditFix}`));t.splitTextToSize(v,s-10).forEach(p=>{W(t,p,e+8,o,8),o+=4}),o+=2})}),x.disarmStrategy){n(16),t.setFillColor(236,253,245),t.setDrawColor(167,243,208);const b=N(H(x.disarmStrategy)),A=t.splitTextToSize(`5-Second Disarm Secret: ${b}`,s-8),L=A.length*4+6;t.rect(e,o,s,L,"FD"),t.setFont("helvetica","bold"),t.setFontSize(8),t.setTextColor(6,95,70),A.forEach((f,v)=>{W(t,f,e+4,o+4.5+v*4,8)}),o+=L+4}o+=4});const S=`AP_${a.shortCode||a.name.replace(/\s+/g,"_")}_TrapRadar_${P.toUpperCase()}.pdf`,F=t.output("blob"),j=URL.createObjectURL(F);return{blob:F,filename:S,blobUrl:j}}export{Be as A,He as a,Ee as c,Qe as g};
