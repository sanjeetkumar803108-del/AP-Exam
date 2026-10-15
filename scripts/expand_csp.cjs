const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const q3Data = {
  // UNIT 1: Creative Development (5 levels)
  "csp-u1-l1": {
    id: "csp1-l1-q3",
    stem: "Which of the following practices best exemplifies how diverse perspectives improve the creative software development process?",
    options: [
      "Allowing only senior engineers with computer science degrees to design user interfaces.",
      "Testing the program exclusively on the latest high-end smartphones in a single geographic region.",
      "Including team members from varied backgrounds and soliciting feedback from diverse end-users to identify unintended biases and accessibility barriers.",
      "Prohibiting code sharing between programmers to prevent intellectual property disputes."
    ],
    correctIndex: 2,
    explanation: "Incorporating diverse perspectives from varied cultural backgrounds, physical abilities, and life experiences helps development teams identify potential algorithmic biases, improve accessibility (e.g. screen reader support), and produce software that serves a broader demographic.",
    distractorTip: "AP CSP Big Idea 1 emphasizes that diverse teams create more robust, user-friendly solutions by uncovering blind spots."
  },
  "csp-u1-l2": {
    id: "csp1-l2-q3",
    stem: "A fitness mobile application uses a smartphone's built-in accelerometer to detect steps and displays the user's daily step count on the screen. In this system, what is the role of the accelerometer?",
    options: [
      "It serves as an input device that provides raw physical motion data to the program.",
      "It is the program's primary software algorithm.",
      "It acts as the visual output display.",
      "It stores the user's profile metadata in the cloud."
    ],
    correctIndex: 0,
    explanation: "Inputs are data sent to a computer for processing by a program, which can originate from tactile taps, keyboard inputs, network requests, or hardware sensors like accelerometers and GPS receivers.",
    distractorTip: "Inputs = sensors, keyboards, touchscreens, microphones; Outputs = screens, speakers, vibrations, motor actuators."
  },
  "csp-u1-l3": {
    id: "csp1-l3-q3",
    stem: "Why do software development teams utilize incremental and iterative development processes?",
    options: [
      "To completely eliminate the need for testing before releasing the final product.",
      "To prevent any documentation or comments from being written into the source code.",
      "To ensure that the entire codebase is written in a single uninterrupted work session.",
      "To break a complex system into manageable pieces, allowing developers to test and refine prototypes frequently based on user feedback."
    ],
    correctIndex: 3,
    explanation: "An incremental and iterative process enables developers to build small functional components, test each piece immediately, gather feedback, and fix errors early, rather than waiting until the entire complex project is complete.",
    distractorTip: "Iterative development allows continuous testing and redesign based on real user feedback at every milestone."
  },
  "csp-u1-l4": {
    id: "csp1-l4-q3",
    stem: "A student writes a program intended to calculate the average of three quiz scores. The code executes successfully without crashing, but displays an incorrect average of 85 instead of 90 because parentheses were omitted: `score1 + score2 + score3 / 3`. What type of error is this?",
    options: [
      "A syntax error",
      "A logic error",
      "A runtime error",
      "An overflow error"
    ],
    correctIndex: 1,
    explanation: "A logic error occurs when the code runs without crashing or generating syntax warnings, but produces an incorrect or unintended result due to flawed reasoning or order-of-operations mistakes by the programmer.",
    distractorTip: "Syntax error = invalid language syntax (fails to compile); Runtime error = program crashes during execution; Logic error = runs cleanly but gives wrong answer."
  },
  "csp-u1-l5": {
    id: "csp1-l5-q3",
    stem: "Which of the following statements about code comments and program documentation is most accurate in software engineering?",
    options: [
      "Comments increase the execution time and memory footprint of the compiled program.",
      "Comments are only necessary for beginner programmers and should be avoided in production code.",
      "Documentation and clear comments explain the design, behavior, and purpose of code segments, aiding ongoing maintenance and collaborative debugging.",
      "Compilers convert comments into runtime error handlers."
    ],
    correctIndex: 2,
    explanation: "Documentation and comments help developers maintain, understand, and debug code, especially in collaborative team environments. Compilers and interpreters ignore comments, so they have zero impact on runtime performance.",
    distractorTip: "Comments are ignored by the compiler/interpreter and do NOT affect program execution speed or memory."
  },

  // UNIT 2: Data Representation & Information (5 levels)
  "csp-u2-l1": {
    id: "csp2-l1-q3",
    stem: "What is the decimal (base-10) equivalent of the 8-bit binary number `00101101`?",
    options: [
      "45",
      "77",
      "37",
      "53"
    ],
    correctIndex: 0,
    explanation: "Evaluate the place values: $32 + 8 + 4 + 1 = 45$. In binary: $0\\cdot 128 + 0\\cdot 64 + 1\\cdot 32 + 0\\cdot 16 + 1\\cdot 8 + 1\\cdot 4 + 0\\cdot 2 + 1\\cdot 1 = 32 + 8 + 4 + 1 = 45$.",
    distractorTip: "Binary place values from right to left: 1, 2, 4, 8, 16, 32, 64, 128. Sum the values corresponding to 1s."
  },
  "csp-u2-l2": {
    id: "csp2-l2-q3",
    stem: "When would a software developer choose to use lossy compression instead of lossless compression?",
    options: [
      "When compressing financial bank ledger records where exact precision is mandatory.",
      "When compressing computer executable program files (.exe).",
      "When compressing medical diagnostic MRI scan images.",
      "When streaming video or music over the Internet where small quality losses are imperceptible to human senses and bandwidth must be minimized."
    ],
    correctIndex: 3,
    explanation: "Lossy compression permanently discards redundant or imperceptible sensory data to achieve significantly smaller file sizes. It is ideal for streaming audio, video, and consumer photos where exact bit-level reconstruction is unnecessary.",
    distractorTip: "Lossless = exact bit reconstruction required (text, executable code, financial data); Lossy = significantly smaller file, imperfect reconstruction acceptable (audio, video, photos)."
  },
  "csp-u2-l3": {
    id: "csp2-l3-q3",
    stem: "A digital photograph file includes metadata such as the camera model, date and timestamp, lens aperture, and GPS coordinates. If an analyst removes all metadata before publishing the image, what is the consequence?",
    options: [
      "The pixels of the image will become completely invisible and corrupt.",
      "The descriptive data about the image's creation and origin is removed, while the actual visual pixel content remains completely intact.",
      "The image file size will double because of decompression.",
      "The image resolution is reduced by exactly 50%."
    ],
    correctIndex: 1,
    explanation: "Metadata is 'data about data'. It describes the structure, origin, and context of a digital asset without altering the primary content itself. Stripping EXIF metadata preserves the visual photo while protecting geolocation privacy.",
    distractorTip: "Metadata describes data (e.g. date, location, file size); altering or deleting metadata does not alter the underlying primary data (the image pixels)."
  },
  "csp-u2-l4": {
    id: "csp2-l4-q3",
    stem: "How does using a list (array) data abstraction simplify program development compared to using individual discrete variables?",
    options: [
      "Lists automatically encrypt all stored data with public-key algorithms.",
      "Lists require less battery power to process than individual integers.",
      "Lists allow programmers to store, traverse, and manipulate arbitrary collections of related data using loops without needing to name each individual element.",
      "Lists eliminate all possibility of logic errors in searching routines."
    ],
    correctIndex: 2,
    explanation: "A list is a data abstraction that groups multiple related items under a single variable name. This allows algorithms to generalize over collections of any size using loops, vastly reducing code duplication and complexity.",
    distractorTip: "Data abstraction (like lists) manages complexity by hiding low-level storage details and allowing general algorithms to process variable-sized data."
  },
  "csp-u2-l5": {
    id: "csp2-l5-q3",
    stem: "What causes an 'overflow error' in a digital computer system?",
    options: [
      "Attempting to store an integer value that requires more bits than the system has allocated for that variable.",
      "A loop that executes indefinitely without a terminating condition.",
      "A lossy compression algorithm that deletes critical program instructions.",
      "Connecting too many client devices to a single Wi-Fi router."
    ],
    correctIndex: 0,
    explanation: "An overflow error occurs when an arithmetic calculation results in a number that exceeds the maximum representable value within the fixed number of bits allocated (e.g. attempting to store 256 in an 8-bit unsigned byte that only ranges from 0 to 255).",
    distractorTip: "Overflow error = number too big for allocated bits; Round-off error = floating-point fractional precision cannot be represented exactly in binary."
  },

  // UNIT 3: Algorithms & Programming (8 levels)
  "csp-u3-l1": {
    id: "csp3-l1-q3",
    stem: "What is the evaluated output of the expression `19 MOD 5` in standard computer science pseudocode?",
    options: [
      "3",
      "4",
      "0",
      "1"
    ],
    correctIndex: 1,
    explanation: "The MOD operator returns the integer remainder of a division. $19 \\div 5 = 3$ with a remainder of $4$. Therefore, `19 MOD 5` evaluates to $4$.",
    distractorTip: "MOD calculates the REMAINDER, NOT the quotient. $19 / 5 = 3$ remainder 4, so $19 \\text{ MOD } 5 = 4$."
  },
  "csp-u3-l2": {
    id: "csp3-l2-q3",
    stem: "According to De Morgan's Laws, which of the following Boolean expressions is logically equivalent to `NOT (isWeekend OR isHoliday)`?",
    options: [
      "(NOT isWeekend) OR (NOT isHoliday)",
      "isWeekend AND isHoliday",
      "(NOT isWeekend) AND (NOT isHoliday)",
      "NOT (isWeekend AND isHoliday)"
    ],
    correctIndex: 2,
    explanation: "De Morgan's Laws state: `NOT (A OR B)` $\\equiv$ `(NOT A) AND (NOT B)`, and `NOT (A AND B)` $\\equiv$ `(NOT A) OR (NOT B)`. Negating an OR statement changes the operator to AND and negates both individual operands.",
    distractorTip: "De Morgan's: Distribute the NOT, flip OR to AND (or flip AND to OR)."
  },
  "csp-u3-l3": {
    id: "csp3-l3-q3",
    stem: "Consider the pseudocode:\n```\nscore <- 85\ngrade <- \"F\"\nIF (score >= 90)\n{\n  grade <- \"A\"\n}\nELSE\n{\n  IF (score >= 80)\n  {\n    grade <- \"B\"\n  }\n}\n```\nWhat is the value of `grade` after execution?",
    options: [
      "\"A\"",
      "\"F\"",
      "\"C\"",
      "\"B\""
    ],
    correctIndex: 3,
    explanation: "Initial: `score = 85`. The first condition `score >= 90` is FALSE, so execution enters the `ELSE` block. The nested condition `score >= 80` is TRUE (85 >= 80), so `grade` is assigned the value `\"B\"`.",
    distractorTip: "Trace nested conditionals carefully: follow the branch taken when the outer condition is false."
  },
  "csp-u3-l4": {
    id: "csp3-l4-q3",
    stem: "Consider the following loop:\n```\ncount <- 1\nsum <- 0\nREPEAT 4 TIMES\n{\n  sum <- sum + count\n  count <- count + 1\n}\n```\nWhat is the final value of `sum`?",
    options: [
      "10",
      "15",
      "6",
      "4"
    ],
    correctIndex: 0,
    explanation: "Iteration 1: sum = 0 + 1 = 1, count = 2.\\nIteration 2: sum = 1 + 2 = 3, count = 3.\\nIteration 3: sum = 3 + 3 = 6, count = 4.\\nIteration 4: sum = 6 + 4 = 10, count = 5.\\nFinal sum is 10.",
    distractorTip: "Trace each iteration line by line, keeping track of variable states after each step."
  },
  "csp-u3-l5": {
    id: "csp3-l5-q3",
    stem: "Under what condition is binary search significantly more efficient than linear search for locating an element in a collection of data?",
    options: [
      "When the data elements are completely unsorted and stored in a linked list.",
      "When the list contains fewer than 5 total items.",
      "When the list is pre-sorted in ascending or descending order, reducing search time to $O(\\log n)$.",
      "When the search target is guaranteed to be at the very first index."
    ],
    correctIndex: 2,
    explanation: "Binary search requires that the list be sorted beforehand. It eliminates half of the remaining elements with each comparison, running in logarithmic time $O(\\log n)$, compared to linear search which requires $O(n)$ sequential comparisons.",
    distractorTip: "Binary search MUST have sorted data! Without sorted data, you must use linear search."
  },
  "csp-u3-l6": {
    id: "csp3-l6-q3",
    stem: "What is the primary benefit of procedural abstraction in computer programming?",
    options: [
      "It allows code to be executed without using any random access memory.",
      "It allows programmers to use a procedure by understanding what it does (its inputs and outputs) without needing to know the internal code implementation.",
      "It guarantees that a program will run in linear time.",
      "It automatically converts interpreted languages into binary machine code."
    ],
    correctIndex: 1,
    explanation: "Procedural abstraction extracts shared code into reusable procedures. Callers only need to know the procedure's name, parameters, and return value (the interface), hiding internal complexity and enabling code reuse.",
    distractorTip: "Procedural abstraction: You know WHAT it does (parameters and return), not HOW it does it internally."
  },
  "csp-u3-l7": {
    id: "csp3-l7-q3",
    stem: "Which of the following problems is an example of an 'undecidable problem' in computer science?",
    options: [
      "Determining the shortest driving route between two cities.",
      "Sorting an array of one million random integers.",
      "Determining whether an arbitrary computer program will eventually finish running or run in an infinite loop (The Halting Problem).",
      "Finding a prime number larger than one billion."
    ],
    correctIndex: 2,
    explanation: "Alan Turing proved that the Halting Problem is undecidable: it is mathematically impossible to write an algorithm that can take ANY arbitrary program and input and correctly determine whether that program will eventually halt or loop forever.",
    distractorTip: "An undecidable problem CANNOT be solved by any algorithm for all possible inputs (classic AP example: The Halting Problem)."
  },
  "csp-u3-l8": {
    id: "csp3-l8-q3",
    stem: "An algorithm takes $N^2$ operations to process a dataset of size $N$. How is the efficiency of this algorithm classified?",
    options: [
      "Unreasonable time (exponential complexity)",
      "Reasonable time (polynomial complexity)",
      "Logarithmic time",
      "Factorial time"
    ],
    correctIndex: 1,
    explanation: "Algorithms with polynomial running times ($O(1), O(N), O(N^2), O(N^3)$) are classified as running in 'reasonable time'. Algorithms with exponential ($O(2^N)$) or factorial ($O(N!)$) running times run in 'unreasonable time' for large inputs.",
    distractorTip: "Polynomial ($N^k$) = Reasonable time; Exponential ($2^N, N!$) = Unreasonable time."
  },

  // UNIT 4: Computer Systems and Networks (5 levels)
  "csp-u4-l1": {
    id: "csp4-l1-q3",
    stem: "How does packet switching transmit digital data across the Internet?",
    options: [
      "A dedicated, continuous electrical circuit is locked between the two communicating computers for the duration of the transfer.",
      "All digital data is broadcast simultaneously via satellite radio waves to every device in the country.",
      "Data is broken into discrete packets that travel independently across redundant network routers, potentially taking different routes and arriving out of order before being reassembled.",
      "Data packets must all follow the exact same physical wire in strict sequential order."
    ],
    correctIndex: 2,
    explanation: "Packet switching splits messages into small packets, each containing payload data and routing metadata (IP headers). Packets route independently through dynamic network paths and are reassembled in correct sequence at the destination.",
    distractorTip: "Packet switching: Packets travel INDEPENDENTLY and may arrive OUT OF ORDER before being reassembled."
  },
  "csp-u4-l2": {
    id: "csp4-l2-q3",
    stem: "What architectural feature of the Internet ensures that communication can continue even when individual routers or transmission cables fail?",
    options: [
      "Fault tolerance achieved through redundant routing pathways between nodes.",
      "Centralized oversight by an international telecommunications board.",
      "Using symmetric encryption on all DNS queries.",
      "Requiring all web servers to store identical copies of every webpage."
    ],
    correctIndex: 0,
    explanation: "The Internet is designed to be fault tolerant: if a router or line fails, dynamic routing protocols (like BGP) automatically reroute packets along alternative redundant pathways, ensuring continuous network connectivity.",
    distractorTip: "Fault tolerance = system continues to operate despite component failures; achieved through REDUNDANCY."
  },
  "csp-u4-l3": {
    id: "csp4-l3-q3",
    stem: "In parallel computing, why does doubling the number of processors rarely cut the total program execution time in half (Amdahl's Law)?",
    options: [
      "Parallel processors generate too much heat to run at standard clock frequencies.",
      "Computers can only execute integer operations in parallel.",
      "Every program has a sequential portion that cannot be parallelized, along with communication overhead required to coordinate processors.",
      "Operating systems disable multiprocessing when handling large files."
    ],
    correctIndex: 2,
    explanation: "Amdahl's law demonstrates that the speedup of a parallel program is fundamentally limited by its serial (non-parallelizable) components. Additionally, distributing data and synchronizing results between multiple processor cores adds coordination overhead.",
    distractorTip: "Speedup is limited by the sequential portion of the program and communication overhead."
  },
  "csp-u4-l4": {
    id: "csp4-l4-q3",
    stem: "Which Internet protocol is primarily responsible for translating human-friendly domain names (such as `www.collegeboard.org`) into numerical IP addresses (such as `104.18.24.112`)?",
    options: [
      "Hypertext Transfer Protocol (HTTP)",
      "Simple Mail Transfer Protocol (SMTP)",
      "Domain Name System (DNS)",
      "Transmission Control Protocol (TCP)"
    ],
    correctIndex: 2,
    explanation: "The Domain Name System (DNS) acts as the phonebook of the Internet, translating human-readable hostnames (`example.com`) into computer-routable IP addresses (`192.0.2.1`).",
    distractorTip: "DNS = translates domain names to IP addresses; IP = addressing and routing; TCP = packet ordering and reliability; HTTP = web requests."
  },
  "csp-u4-l5": {
    id: "csp4-l5-q3",
    stem: "Why is the transition from IPv4 to IPv6 essential for the continued global expansion of the Internet?",
    options: [
      "IPv4 addresses are limited to 32 bits (approx. 4.3 billion unique addresses), whereas IPv6 uses 128-bit addresses to accommodate billions of connected Internet-of-Things (IoT) devices.",
      "IPv4 is incompatible with wireless Wi-Fi routers.",
      "IPv6 eliminates the need for packet headers.",
      "IPv4 only works with text data, while IPv6 supports video streaming."
    ],
    correctIndex: 0,
    explanation: "IPv4 uses 32-bit addresses, yielding $2^{32} \\approx 4.3$ billion addresses, which have been virtually exhausted. IPv6 uses 128-bit addresses ($2^{128} \\approx 3.4 \\times 10^{38}$ addresses), providing virtually unlimited address space for all future digital devices.",
    distractorTip: "IPv4 = 32-bit addresses (exhausted); IPv6 = 128-bit addresses (vastly expanded space)."
  },

  // UNIT 5: Impact of Computing (6 levels)
  "csp-u5-l1": {
    id: "csp5-l1-q3",
    stem: "What is meant by the 'Digital Divide' in discussions of the societal impact of computing?",
    options: [
      "The physical difference between silicon microchips and optical storage discs.",
      "The division of computer memory between random access memory and solid-state storage.",
      "The gap between demographic groups and geographic regions that have access to modern high-speed Internet and computing technology and those that do not.",
      "The split between open-source software and proprietary commercial operating systems."
    ],
    correctIndex: 2,
    explanation: "The digital divide refers to socioeconomic and geographic inequalities in access to computing devices, high-speed broadband, and digital literacy training, which can exacerbate educational and economic disparities.",
    distractorTip: "The digital divide refers to unequal access to computing technology and high-speed internet."
  },
  "csp-u5-l2": {
    id: "csp5-l2-q3",
    stem: "How does citizen science leverage crowdsourcing to advance scientific research?",
    options: [
      "By allowing computer simulations to run without human researchers.",
      "By distributing data collection and analysis tasks to thousands of volunteers around the world via online platforms.",
      "By replacing scientific peer review with automated algorithms.",
      "By purchasing proprietary satellite feeds from private aerospace corporations."
    ],
    correctIndex: 1,
    explanation: "Citizen science is a crowdsourcing practice where members of the public contribute to authentic scientific research by gathering observational data (e.g. bird counts, galaxy classification) on a scale that individual researchers could never accomplish alone.",
    distractorTip: "Crowdsourcing and citizen science: Engaging large distributed groups of people to solve problems or collect large datasets."
  },
  "csp-u5-l3": {
    id: "csp5-l3-q3",
    stem: "If a software developer releases code under a Creative Commons (CC) license with the 'Attribution' (BY) condition, what are other programmers legally permitted to do?",
    options: [
      "They cannot use or modify the code under any circumstances without paying royalties.",
      "They can only view the code in educational classrooms.",
      "They may share, adapt, and build upon the work, provided they give appropriate credit and attribution to the original author.",
      "They are required to surrender copyright of all their own personal software."
    ],
    correctIndex: 2,
    explanation: "Creative Commons licenses allow copyright holders to grant public permission to share and use their creative work under specific conditions. CC-BY allows reuse and modification as long as original attribution is provided.",
    distractorTip: "Creative Commons (CC-BY) allows sharing and modification with proper attribution."
  },
  "csp-u5-l4": {
    id: "csp5-l4-q3",
    stem: "A deceptive email designed to look like an urgent communication from a bank directs customers to a fraudulent website that captures their account numbers and passwords. What cyberattack is this?",
    options: [
      "Distributed Denial of Service (DDoS)",
      "Phishing attack",
      "Rogue access point attack",
      "Keylogging worm"
    ],
    correctIndex: 1,
    explanation: "Phishing is a social engineering attack where malicious actors impersonate legitimate institutions (via email or fake websites) to trick victims into revealing sensitive personal identifiable information (PII) like credentials.",
    distractorTip: "Phishing = deceptive social engineering to steal credentials; DDoS = flooding a server with fake traffic to take it offline."
  },
  "csp-u5-l5": {
    id: "csp5-l5-q3",
    stem: "In asymmetric (public key) encryption, which key is used to decrypt a secure message?",
    options: [
      "The sender's public key",
      "The receiver's public key",
      "The receiver's private key",
      "A shared symmetric pre-shared key"
    ],
    correctIndex: 2,
    explanation: "Public-key cryptography uses a mathematically linked key pair. Anyone can use the receiver's PUBLIC key to encrypt a message, but ONLY the receiver's matching PRIVATE key (which is kept strictly secret) can decrypt it.",
    distractorTip: "Public key = used by anyone to ENCRYPT; Private key = kept secret by recipient to DECRYPT."
  },
  "csp-u5-l6": {
    id: "csp5-l6-q3",
    stem: "Why is multi-factor authentication (MFA) significantly more secure than relying on a strong password alone?",
    options: [
      "It requires users to change their password every 24 hours.",
      "It eliminates the need for data encryption across the network.",
      "It combines something you know (password) with something you have (security token/phone) or something you are (biometrics), meaning a stolen password alone is insufficient for unauthorized access.",
      "It automatically disconnects unauthorized IP addresses from the web server."
    ],
    correctIndex: 2,
    explanation: "MFA requires two or more distinct authentication factors: something you know (password), something you have (authenticator app/SMS code), or something you are (fingerprint). Even if a password is compromised in a data breach, attackers cannot access the account without the second factor.",
    distractorTip: "MFA factors: Something you know (password), something you have (phone/token), something you are (biometrics)."
  }
};

const fullPath = path.resolve(__dirname, '../src/data/quiz/apCspUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_CSP_UNIT_DEFINITIONS;

let addedCount = 0;
units.forEach(u => {
  u.levels.forEach(l => {
    if (q3Data[l.uniqueKey]) {
      if (l.questions.length === 2) {
        l.questions.push(q3Data[l.uniqueKey]);
        addedCount++;
      }
    } else {
      console.warn('Missing q3 for', l.uniqueKey);
    }
  });
});

console.log('Added', addedCount, 'questions to AP CSP.');

const newCode = `// AP Computer Science Principles Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–5)
// Complete authentic coverage: 29 Levels, 87 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_CSP_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apCspUnitsData.ts successfully.');
