// AP Computer Science Principles Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–5)
// Complete authentic coverage: 29 Levels, 87 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_CSP_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Unit 1: Creative Development",
    "shortTitle": "Unit 1: Creative Dev",
    "description": "Collaboration, program design, software development lifecycles, identifying errors (syntax, logic, runtime, overflow), and program documentation",
    "examWeight": "10–13% of AP Exam",
    "biome": {
      "name": "Design Studio & Iteration Sandbox",
      "icon": "🎨",
      "accentColor": "#0EA5E9",
      "secondaryColor": "#0284C7",
      "groundGradient": "from-cyan-100 via-sky-50 to-blue-100",
      "cardBorder": "border-cyan-500",
      "trailColor": "#0ea5e9",
      "nodeRing": "ring-cyan-400/40",
      "skyTint": "from-cyan-50 to-sky-50/30"
    },
    "levels": [
      {
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "csp-u1-l1",
        "topicNumber": "Topic 1.1",
        "name": "Collaboration & Diverse Perspectives",
        "subtitle": "Pair programming, diverse user needs, and code reviews",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs1-l1-q1",
            "stem": "A software development team includes designers, programmers, and end-users with diverse backgrounds during the initial design phase of an educational mobile app. How does this collaborative diversity directly improve the final software product?",
            "options": [
              "It helps identify blind spots, reduces algorithmic and interface bias, and ensures the application accommodates users with varied abilities and needs.",
              "It eliminates the need to test the software for runtime errors.",
              "It guarantees that the software will execute twice as fast on mobile processors.",
              "It replaces the need for written program documentation."
            ],
            "correctIndex": 0,
            "explanation": "Diverse collaborative teams bring varied perspectives and life experiences, helping anticipate accessibility barriers, preventing cultural or cognitive biases, and discovering functional requirements that a homogeneous team might overlook.",
            "distractorTip": "Collaboration improves usability and reduces bias; it does not magically optimize CPU runtime performance or eliminate testing."
          },
          {
            "id": "cs1-l1-q2",
            "stem": "In \"Pair Programming,\" two programmers share a single workstation where one programmer acts as the \"Driver\" while the other acts as the \"Navigator.\" What is the primary role of the Navigator?",
            "options": [
              "Physically typing all code onto the keyboard.",
              "Reviewing code as it is typed, considering the broader strategic architecture, and checking for potential logic flaws and syntax errors.",
              "Marketing the completed software to corporate advertisers.",
              "Compiling the software into binary machine code."
            ],
            "correctIndex": 1,
            "explanation": "In pair programming, the Driver focuses on typing and syntactical details, while the Navigator reads code concurrently, catches errors in real-time, and plans future algorithmic steps.",
            "distractorTip": "Driver = writes the code. Navigator = reviews code and guides algorithmic strategy."
          },
          {
            "id": "csp1-l1-q3",
            "stem": "Which of the following practices best exemplifies how diverse perspectives improve the creative software development process?",
            "options": [
              "Allowing only senior engineers with computer science degrees to design user interfaces.",
              "Testing the program exclusively on the latest high-end smartphones in a single geographic region.",
              "Including team members from varied backgrounds and soliciting feedback from diverse end-users to identify unintended biases and accessibility barriers.",
              "Prohibiting code sharing between programmers to prevent intellectual property disputes."
            ],
            "correctIndex": 2,
            "explanation": "Incorporating diverse perspectives from varied cultural backgrounds, physical abilities, and life experiences helps development teams identify potential algorithmic biases, improve accessibility (e.g. screen reader support), and produce software that serves a broader demographic.",
            "distractorTip": "AP CSP Big Idea 1 emphasizes that diverse teams create more robust, user-friendly solutions by uncovering blind spots."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "csp-u1-l2",
        "topicNumber": "Topic 1.2",
        "name": "Program Function, Inputs & Outputs",
        "subtitle": "Event-driven programming, user interfaces, and program specifications",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs1-l2-q1",
            "stem": "In an event-driven mobile app, a user clicks a button labeled \"Submit Order.\" What term describes the block of code designed to execute specifically in response to this user action?",
            "options": [
              "A binary search tree",
              "A compiler directive",
              "An event handler (or listener)",
              "A hardware interrupt register"
            ],
            "correctIndex": 2,
            "explanation": "In event-driven programming, programs respond to user events (clicks, keypresses, sensor triggers) by triggering an associated \"event handler\" procedure that executes the appropriate response code.",
            "distractorTip": "Event-driven programs wait for events (mouse click, touch) and trigger event handler functions."
          },
          {
            "id": "cs1-l2-q2",
            "stem": "What is the distinction between a program's \"Behavior\" and a program's \"Function\"?",
            "options": [
              "Both terms are strictly synonymous with no difference in computer science.",
              "Behavior refers only to hardware memory, while function refers to screen pixels.",
              "Function refers to compiler errors, while behavior refers to the programming language name.",
              "A program’s behavior describes how a program functions during execution and is often described by how a user interacts with it, while its function describes how the code meets its broader intended purpose."
            ],
            "correctIndex": 3,
            "explanation": "According to College Board CSP definitions, a program’s behavior encompasses its dynamic execution and user interactions (inputs, screen updates, outputs), whereas its function refers to its overall purpose or problem it solves.",
            "distractorTip": "Behavior = How it runs and interacts with the user. Function = What goal or purpose it accomplishes."
          },
          {
            "id": "csp1-l2-q3",
            "stem": "A fitness mobile application uses a smartphone's built-in accelerometer to detect steps and displays the user's daily step count on the screen. In this system, what is the role of the accelerometer?",
            "options": [
              "It serves as an input device that provides raw physical motion data to the program.",
              "It is the program's primary software algorithm.",
              "It acts as the visual output display.",
              "It stores the user's profile metadata in the cloud."
            ],
            "correctIndex": 0,
            "explanation": "Inputs are data sent to a computer for processing by a program, which can originate from tactile taps, keyboard inputs, network requests, or hardware sensors like accelerometers and GPS receivers.",
            "distractorTip": "Inputs = sensors, keyboards, touchscreens, microphones; Outputs = screens, speakers, vibrations, motor actuators."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "csp-u1-l3",
        "topicNumber": "Topic 1.3",
        "name": "Development Process & Documentation",
        "subtitle": "Iterative vs incremental development and software maintenance",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs1-l3-q1",
            "stem": "Why is an Iterative and Incremental development process considered superior to the traditional rigid \"Waterfall\" approach for modern software engineering?",
            "options": [
              "Developers build small working prototypes, test frequently, and incorporate continuous user feedback, allowing design flaws to be corrected early before they compound.",
              "It allows developers to deploy code without writing any test cases.",
              "It eliminates the need for variable declaration.",
              "It guarantees that the software will never experience internet latency."
            ],
            "correctIndex": 0,
            "explanation": "Iterative development breaks software creation into cycles: plan, build prototype, test, gather user feedback, and refine. This flexibility prevents building an entire flawed system that fails upon release.",
            "distractorTip": "Iterative = repetitive cycles of refinement. Incremental = building feature-by-feature in manageable chunks."
          },
          {
            "id": "cs1-l3-q2",
            "stem": "Why is adding clear comments and comprehensive documentation throughout a codebase essential for long-term software maintenance?",
            "options": [
              "It increases the runtime execution speed of the compiled binary file.",
              "It enables future programmers (and the original author) to understand the purpose of complex logic, algorithms, and procedures without having to reverse-engineer raw code.",
              "Comments are executed directly by the CPU to allocate extra RAM.",
              "It prevents users from taking screenshots of the program."
            ],
            "correctIndex": 1,
            "explanation": "Comments and documentation explain \"why\" and \"how\" code works, dramatically reducing maintenance costs and facilitating collaboration. (Compilers ignore comments, so comments have zero effect on execution speed).",
            "distractorTip": "Comments do NOT affect program speed or file size in compiled execution; their sole purpose is human readability and maintenance."
          },
          {
            "id": "csp1-l3-q3",
            "stem": "Why do software development teams utilize incremental and iterative development processes?",
            "options": [
              "To completely eliminate the need for testing before releasing the final product.",
              "To prevent any documentation or comments from being written into the source code.",
              "To ensure that the entire codebase is written in a single uninterrupted work session.",
              "To break a complex system into manageable pieces, allowing developers to test and refine prototypes frequently based on user feedback."
            ],
            "correctIndex": 3,
            "explanation": "An incremental and iterative process enables developers to build small functional components, test each piece immediately, gather feedback, and fix errors early, rather than waiting until the entire complex project is complete.",
            "distractorTip": "Iterative development allows continuous testing and redesign based on real user feedback at every milestone."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "csp-u1-l4",
        "topicNumber": "Topic 1.4",
        "name": "Identifying & Correcting Program Errors",
        "subtitle": "Syntax, logic, runtime, and overflow errors",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs1-l4-q1",
            "stem": "A programmer writes a script to compute the average of three quiz scores: `average = score1 + score2 + score3 / 3`. The program runs without crashing, but outputs an incorrect value of $150$ instead of $80$. What type of error occurred?",
            "options": [
              "A runtime error, because the processor crashed during division.",
              "A syntax error, because addition cannot precede division.",
              "A logic error, because mathematical operator precedence divided only `score3` by 3 instead of dividing the total sum `(score1 + score2 + score3)`.",
              "An overflow error, because the score was too large for integer representation."
            ],
            "correctIndex": 2,
            "explanation": "A logic error occurs when program syntax is valid and the code executes without crashing, but produces the wrong result due to an algorithmic or mathematical mistake (missing parentheses).",
            "distractorTip": "Syntax error = won't run. Runtime error = crashes midway (e.g. division by zero). Logic error = runs fine, but output is wrong!"
          },
          {
            "id": "cs1-l4-q2",
            "stem": "A video game stores a player's score using an 8-bit unsigned integer ($0$ to $255$). When the player reaches $255$ points and scores $1$ additional point, their score suddenly resets to $0$. What error caused this anomaly?",
            "options": [
              "A roundoff error in floating-point arithmetic.",
              "A syntax error in the addition loop.",
              "A lossy compression failure.",
              "An overflow error, because the result ($256$, or binary `100000000`) required 9 bits and exceeded the fixed 8-bit memory allocation."
            ],
            "correctIndex": 3,
            "explanation": "An overflow error occurs when an arithmetic calculation produces a number that exceeds the fixed maximum value representable by the allocated number of bits. In 8 bits, $255 + 1 = 256$, which overflows and rolls over to $0$.",
            "distractorTip": "Overflow error = integer value exceeds allocated bit storage capacity (e.g. $> 255$ in 8-bit, or $> 2{,}147{,}483{,}647$ in 32-bit)."
          },
          {
            "id": "csp1-l4-q3",
            "stem": "A student writes a program intended to calculate the average of three quiz scores. The code executes successfully without crashing, but displays an incorrect average of 85 instead of 90 because parentheses were omitted: `score1 + score2 + score3 / 3`. What type of error is this?",
            "options": [
              "A syntax error",
              "A logic error",
              "A runtime error",
              "An overflow error"
            ],
            "correctIndex": 1,
            "explanation": "A logic error occurs when the code runs without crashing or generating syntax warnings, but produces an incorrect or unintended result due to flawed reasoning or order-of-operations mistakes by the programmer.",
            "distractorTip": "Syntax error = invalid language syntax (fails to compile); Runtime error = program crashes during execution; Logic error = runs cleanly but gives wrong answer."
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "csp-u1-l5",
        "topicNumber": "Unit 1 Boss",
        "name": "Apex Creative Development Crucible",
        "subtitle": "Boundary condition testing, off-by-one bugs, and test case matrices",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "cs1-l5-q1",
            "stem": "An automated grading procedure is designed to determine if a student passes a course based on the rule: \"A student passes if their grade is 70 or higher.\" A programmer writes:\n```\nIF (grade > 70)\n{\n    RETURN true\n}\nELSE\n{\n    RETURN false\n}\n```\nWhich test input will reveal the logic error in this code?",
            "options": [
              "`grade = 70` (Boundary value test)",
              "`grade = 85`",
              "`grade = 65`",
              "`grade = 100`"
            ],
            "correctIndex": 0,
            "explanation": "Testing boundary/edge cases is vital. At `grade = 70`, the condition `70 > 70` evaluates to `false`, returning `false` (failing), even though a score of 70 should pass! The correct conditional operator is `>=`. Testing inputs of 85 or 65 would fail to catch this bug.",
            "distractorTip": "Always test boundary values (edge cases) like the threshold itself ($70$) when debugging conditional statements."
          },
          {
            "id": "cs1-l5-q2",
            "stem": "When designing a test suite to validate a procedure that accepts a user’s age (which must be between 13 and 19 inclusive), which set of test inputs represents the most rigorous boundary value testing strategy?",
            "options": [
              "`15, 16, 17` (testing only values inside the valid range)",
              "`12, 13, 16, 19, 20` (testing just below, at, inside, and just above the thresholds)",
              "`0, 100` (testing extreme outliers only)",
              "`\"thirteen\", \"nineteen\"` (testing text strings only)"
            ],
            "correctIndex": 1,
            "explanation": "Boundary value analysis tests values directly on the boundaries ($13, 19$) as well as immediately adjacent invalid values ($12, 20$) and a valid midpoint ($16$) to ensure inequality conditions ($>=$ vs $>$) are functioning properly.",
            "distractorTip": "Rigorous test cases always check exact boundaries ($min, max$) and immediate neighbors ($min-1, max+1$)."
          },
          {
            "id": "csp1-l5-q3",
            "stem": "Which of the following statements about code comments and program documentation is most accurate in software engineering?",
            "options": [
              "Comments increase the execution time and memory footprint of the compiled program.",
              "Comments are only necessary for beginner programmers and should be avoided in production code.",
              "Documentation and clear comments explain the design, behavior, and purpose of code segments, aiding ongoing maintenance and collaborative debugging.",
              "Compilers convert comments into runtime error handlers."
            ],
            "correctIndex": 2,
            "explanation": "Documentation and comments help developers maintain, understand, and debug code, especially in collaborative team environments. Compilers and interpreters ignore comments, so they have zero impact on runtime performance.",
            "distractorTip": "Comments are ignored by the compiler/interpreter and do NOT affect program execution speed or memory."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Unit 2: Data Representation & Information",
    "shortTitle": "Unit 2: Data",
    "description": "Binary numbers (base-2), hexadecimal, overflow & roundoff errors, lossless vs lossy data compression, metadata, and extracting patterns from Big Data",
    "examWeight": "17–22% of AP Exam",
    "biome": {
      "name": "Binary Vault & Compression Archipelago",
      "icon": "💾",
      "accentColor": "#10B981",
      "secondaryColor": "#059669",
      "groundGradient": "from-emerald-100 via-teal-50 to-cyan-100",
      "cardBorder": "border-emerald-500",
      "trailColor": "#10b981",
      "nodeRing": "ring-emerald-400/40",
      "skyTint": "from-emerald-50 to-teal-50/30"
    },
    "levels": [
      {
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "csp-u2-l1",
        "topicNumber": "Topic 2.1",
        "name": "Binary Number Systems (Base-2)",
        "subtitle": "Bit positional values (128, 64, 32, 16, 8, 4, 2, 1) and conversions",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs2-l1-q1",
            "stem": "What is the decimal (base-10) equivalent of the 8-bit binary number `00101101`?",
            "options": [
              "$53$",
              "$37$",
              "$45$",
              "$89$"
            ],
            "correctIndex": 2,
            "explanation": "Evaluating bit place values from left to right ($128, 64, 32, 16, 8, 4, 2, 1$): $0(128) + 0(64) + 1(32) + 0(16) + 1(8) + 1(4) + 0(2) + 1(1) = 32 + 8 + 4 + 1 = 45$.",
            "distractorTip": "Remember the binary place values powers of 2: $128, 64, 32, 16, 8, 4, 2, 1$. Add up the values wherever a 1 appears."
          },
          {
            "id": "cs2-l1-q2",
            "stem": "How many total unique values can be represented using an $n$-bit binary sequence, and what happens to the number of representable values if you add 1 additional bit ($n + 1$ bits)?",
            "options": [
              "$2n$ unique values; adding 1 bit increases values by 2.",
              "$n^2$ unique values; adding 1 bit increases values by $n$.",
              "$10^n$ unique values; adding 1 bit multiplies values by 10.",
              "$2^n$ unique values; adding 1 additional bit doubles the number of representable values to $2^{n+1}$."
            ],
            "correctIndex": 3,
            "explanation": "Each bit has 2 states ($0$ or $1$). For $n$ bits, there are $2^n$ combinations. Adding 1 bit doubles the capacity ($2^{n+1} = 2 \\times 2^n$) because the new bit can be either 0 or 1 for every pre-existing state.",
            "distractorTip": "Every single bit you add DOUBLES the total number of representable states (8 bits = 256; 9 bits = 512; 10 bits = 1024)."
          },
          {
            "id": "csp2-l1-q3",
            "stem": "What is the decimal (base-10) equivalent of the 8-bit binary number `00101101`?",
            "options": [
              "45",
              "77",
              "37",
              "53"
            ],
            "correctIndex": 0,
            "explanation": "Evaluate the place values: $32 + 8 + 4 + 1 = 45$. In binary: $0\\cdot 128 + 0\\cdot 64 + 1\\cdot 32 + 0\\cdot 16 + 1\\cdot 8 + 1\\cdot 4 + 0\\cdot 2 + 1\\cdot 1 = 32 + 8 + 4 + 1 = 45$.",
            "distractorTip": "Binary place values from right to left: 1, 2, 4, 8, 16, 32, 64, 128. Sum the values corresponding to 1s."
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "csp-u2-l2",
        "topicNumber": "Topic 2.2",
        "name": "Data Compression: Lossless vs. Lossy",
        "subtitle": "Run-length encoding, text dictionary compression, and perceptual trade-offs",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs2-l2-q1",
            "stem": "A digital audio file is compressed using a \"Lossy\" compression algorithm (such as MP3). Which statement is true regarding the decompressed file?",
            "options": [
              "Some original data and inaudible frequencies are permanently discarded; the original uncompressed file cannot be perfectly reconstructed.",
              "The file is restored with 100% mathematical fidelity to the original waveform.",
              "Lossy compression always results in a larger file size than lossless compression.",
              "Lossy compression can only be applied to plain text code."
            ],
            "correctIndex": 0,
            "explanation": "Lossy compression significantly reduces file size by permanently discarding redundant, imperceptible, or less noticeable information (e.g. frequencies humans cannot hear in MP3, or subtle color shades in JPEG). The original cannot be recovered.",
            "distractorTip": "Lossless = 100% reversible, zero data lost (ZIP, PNG). Lossy = Irreversible, discards data for much smaller file size (MP3, JPEG)."
          },
          {
            "id": "cs2-l2-q2",
            "stem": "For which type of data file is Lossless compression STRICTLY REQUIRED over lossy compression?",
            "options": [
              "Streaming preview videos on social media",
              "Executable computer software code and medical diagnostic records",
              "Background audio tracks in a mobile game",
              "Casual smartphone snapshot photographs"
            ],
            "correctIndex": 1,
            "explanation": "In executable computer code, legal documents, or medical records, losing even a single byte or character could corrupt the software syntax or alter a vital patient dosage. It must be compressed losslessly.",
            "distractorTip": "Text, medical data, and executable code MUST be lossless. Multimedia (photos, video, music) can tolerate lossy compression."
          },
          {
            "id": "csp2-l2-q3",
            "stem": "When would a software developer choose to use lossy compression instead of lossless compression?",
            "options": [
              "When compressing financial bank ledger records where exact precision is mandatory.",
              "When compressing computer executable program files (.exe).",
              "When compressing medical diagnostic MRI scan images.",
              "When streaming video or music over the Internet where small quality losses are imperceptible to human senses and bandwidth must be minimized."
            ],
            "correctIndex": 3,
            "explanation": "Lossy compression permanently discards redundant or imperceptible sensory data to achieve significantly smaller file sizes. It is ideal for streaming audio, video, and consumer photos where exact bit-level reconstruction is unnecessary.",
            "distractorTip": "Lossless = exact bit reconstruction required (text, executable code, financial data); Lossy = significantly smaller file, imperfect reconstruction acceptable (audio, video, photos)."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "csp-u2-l3",
        "topicNumber": "Topic 2.3",
        "name": "Metadata & Extracting Information from Data",
        "subtitle": "Data about data, EXIF camera tags, and correlation vs causation",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs2-l3-q1",
            "stem": "When a digital photo is taken on a smartphone, the file stores the image pixels along with \"Metadata.\" Which of the following is an example of Metadata?",
            "options": [
              "The physical dimensions of the smartphone screen.",
              "The RGB red, green, and blue color values of each individual pixel.",
              "The date, time, GPS location coordinates, camera model, and shutter speed recorded in the image file.",
              "The battery percentage of the viewer's computer."
            ],
            "correctIndex": 2,
            "explanation": "Metadata is \"data about data.\" It provides structural, administrative, and descriptive context about the primary data (e.g., author, timestamp, camera settings, geolocation) without being the primary pixel content itself.",
            "distractorTip": "Metadata = data about data (timestamp, GPS tag, file size). Primary data = the actual image pixels or audio waves."
          },
          {
            "id": "cs2-l3-q2",
            "stem": "A data analyst discovers a strong positive correlation between ice cream sales and sunscreen purchases in a coastal city. Which conclusion is statistically valid?",
            "options": [
              "The data is completely invalid because correlations cannot exist in business.",
              "Purchasing ice cream causes people to immediately buy sunscreen.",
              "The correlation proves that sunscreen sales can be eliminated by banning ice cream.",
              "Both variables correlate strongly with a third underlying confounding variable (hot summer weather), but buying ice cream does not cause sunscreen purchases."
            ],
            "correctIndex": 3,
            "explanation": "A fundamental principle of data science on the AP exam: \"Correlation does NOT imply causation.\" Two variables may track together due to a shared lurking variable (warm summer temperatures), without one directly causing the other.",
            "distractorTip": "Never infer causation from correlation alone without a controlled scientific experiment."
          },
          {
            "id": "csp2-l3-q3",
            "stem": "A digital photograph file includes metadata such as the camera model, date and timestamp, lens aperture, and GPS coordinates. If an analyst removes all metadata before publishing the image, what is the consequence?",
            "options": [
              "The pixels of the image will become completely invisible and corrupt.",
              "The descriptive data about the image's creation and origin is removed, while the actual visual pixel content remains completely intact.",
              "The image file size will double because of decompression.",
              "The image resolution is reduced by exactly 50%."
            ],
            "correctIndex": 1,
            "explanation": "Metadata is 'data about data'. It describes the structure, origin, and context of a digital asset without altering the primary content itself. Stripping EXIF metadata preserves the visual photo while protecting geolocation privacy.",
            "distractorTip": "Metadata describes data (e.g. date, location, file size); altering or deleting metadata does not alter the underlying primary data (the image pixels)."
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "csp-u2-l4",
        "topicNumber": "Topic 2.4",
        "name": "Data Abstraction & Lists",
        "subtitle": "Collections, reducing complexity, and managing program state",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs2-l4-q1",
            "stem": "A programmer needs to store the names of 500 students enrolled in a course. Instead of creating 500 individual variables (`student1`, `student2`, ...), the programmer creates a single List: `studentList`. How does this Data Abstraction improve the program?",
            "options": [
              "It reduces code complexity and enables the program to process any number of students using concise loops and standardized list procedures.",
              "It eliminates the need for computer memory.",
              "It guarantees that the program will run in zero seconds.",
              "It automatically converts the student names into compressed JPEG images."
            ],
            "correctIndex": 0,
            "explanation": "Data abstraction (such as using a List/Array) groups related data values under a single identifier, hiding lower-level memory management details and allowing algorithms to scale easily without modifying code structure.",
            "distractorTip": "Data abstraction simplifies program development and maintenance by managing complexity."
          },
          {
            "id": "cs2-l4-q2",
            "stem": "Why can floating-point real numbers (such as $0.1 + 0.2$) occasionally produce slight \"Roundoff Errors\" (e.g. $0.30000000000000004$) in computer programs?",
            "options": [
              "The computer processor is experiencing an electrical brownout.",
              "Some decimal fractions cannot be represented with infinite precision using a finite number of binary bits.",
              "Programmers forgot to import the math library.",
              "Floating-point numbers can only store whole integers."
            ],
            "correctIndex": 1,
            "explanation": "Just as $1/3$ cannot be represented exactly in finite decimal notation ($0.3333...$), fractions like $0.1$ ($1/10$) repeat infinitely in binary base-2 ($0.000110011...$). Storing them in fixed-size registers introduces tiny roundoff errors.",
            "distractorTip": "Roundoff error = imprecise fractional values due to finite bit representation. Overflow error = integer value too large for bit size."
          },
          {
            "id": "csp2-l4-q3",
            "stem": "How does using a list (array) data abstraction simplify program development compared to using individual discrete variables?",
            "options": [
              "Lists automatically encrypt all stored data with public-key algorithms.",
              "Lists require less battery power to process than individual integers.",
              "Lists allow programmers to store, traverse, and manipulate arbitrary collections of related data using loops without needing to name each individual element.",
              "Lists eliminate all possibility of logic errors in searching routines."
            ],
            "correctIndex": 2,
            "explanation": "A list is a data abstraction that groups multiple related items under a single variable name. This allows algorithms to generalize over collections of any size using loops, vastly reducing code duplication and complexity.",
            "distractorTip": "Data abstraction (like lists) manages complexity by hiding low-level storage details and allowing general algorithms to process variable-sized data."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "csp-u2-l5",
        "topicNumber": "Unit 2 Boss",
        "name": "Apex Data & Binary Crucible",
        "subtitle": "Hexadecimal color encoding, RGB channels, and bit-depth calculation",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "cs2-l5-q1",
            "stem": "A 24-bit TrueColor image format allocates 8 bits for the Red channel, 8 bits for Green, and 8 bits for Blue. A pixel is assigned the hexadecimal color code `#00FF00`. What color does this pixel display on screen?",
            "options": [
              "Pure bright Blue (Red = 0, Green = 0, Blue = 255)",
              "Pure bright Red (Red = 255, Green = 0, Blue = 0)",
              "Pure bright Green (Red = 0, Green = 255, Blue = 0)",
              "Pure Black (Red = 0, Green = 0, Blue = 0)"
            ],
            "correctIndex": 2,
            "explanation": "In hex color encoding `#RRGGBB`, each pair of hex digits represents 8 bits ($00$ to $FF$, or $0$ to $255$ in decimal). `#00FF00` corresponds to Red = 0, Green = 255 ($FF$), and Blue = 0, displaying maximum green.",
            "distractorTip": "Hex format is `#RRGGBB`. $00$ = 0 (off); $FF$ = 255 (maximum intensity). `#FF0000` = Red, `#00FF00` = Green, `#0000FF` = Blue."
          },
          {
            "id": "cs2-l5-q2",
            "stem": "A black-and-white icon uses Run-Length Encoding (RLE) lossless compression. The first row of an $8\\times8$ grid has the pattern: 3 white pixels, 4 black pixels, 1 white pixel. How is this row represented in an RLE scheme that alternates counts starting with White?",
            "options": [
              "`4, 3, 1`",
              "`1, 1, 1, 0, 0, 0, 0, 1`",
              "`White, Black, White`",
              "`3, 4, 1`"
            ],
            "correctIndex": 3,
            "explanation": "Run-Length Encoding stores consecutive runs of identical data values as frequency counts. Storing `3, 4, 1` indicates 3 consecutive white pixels, 4 consecutive black pixels, and 1 white pixel, reducing 8 individual bits to 3 numbers.",
            "distractorTip": "RLE replaces consecutive repeated symbols with a count and value, providing lossless compression."
          },
          {
            "id": "csp2-l5-q3",
            "stem": "What causes an 'overflow error' in a digital computer system?",
            "options": [
              "Attempting to store an integer value that requires more bits than the system has allocated for that variable.",
              "A loop that executes indefinitely without a terminating condition.",
              "A lossy compression algorithm that deletes critical program instructions.",
              "Connecting too many client devices to a single Wi-Fi router."
            ],
            "correctIndex": 0,
            "explanation": "An overflow error occurs when an arithmetic calculation results in a number that exceeds the maximum representable value within the fixed number of bits allocated (e.g. attempting to store 256 in an 8-bit unsigned byte that only ranges from 0 to 255).",
            "distractorTip": "Overflow error = number too big for allocated bits; Round-off error = floating-point fractional precision cannot be represented exactly in binary."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Unit 3: Algorithms & Programming",
    "shortTitle": "Unit 3: Programming",
    "description": "Variables, sequencing, selection, iteration, College Board pseudocode, lists (1-indexed), binary vs linear search, procedures, simulations, and algorithmic efficiency",
    "examWeight": "30–35% of AP Exam",
    "biome": {
      "name": "Algorithm Labyrinth & Logic Matrix",
      "icon": "🧠",
      "accentColor": "#8B5CF6",
      "secondaryColor": "#7C3AED",
      "groundGradient": "from-violet-100 via-purple-50 to-indigo-100",
      "cardBorder": "border-violet-500",
      "trailColor": "#8b5cf6",
      "nodeRing": "ring-violet-400/40",
      "skyTint": "from-purple-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 301,
        "unitIndex": 3,
        "levelNumber": 1,
        "uniqueKey": "csp-u3-l1",
        "topicNumber": "Topic 3.1 - 3.3",
        "name": "Variables, Assignments & The MOD Operator",
        "subtitle": "Tracing variable state and remainder arithmetic (MOD)",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs3-l1-q1",
            "stem": "Consider the following sequential pseudocode:\n```\na <- 5\nb <- 3\na <- a + b\nb <- a - b\na <- a - b\n```\nWhat are the values of `a` and `b` after the code executes?",
            "options": [
              "`a = 3` and `b = 5` (the values of `a` and `b` have been swapped)",
              "`a = 5` and `b = 3`",
              "`a = 8` and `b = 8`",
              "`a = 0` and `b = 0`"
            ],
            "correctIndex": 0,
            "explanation": "Trace step-by-step: (1) `a = 5`, `b = 3`. (2) `a <- 5 + 3` $\\to a = 8$. (3) `b <- 8 - 3` $\\to b = 5$. (4) `a <- 8 - 5` $\\to a = 3$. This is the classic arithmetic variable swap algorithm without a temporary variable!",
            "distractorTip": "Trace each line sequentially, updating variable values in your scratch notes line-by-line."
          },
          {
            "id": "cs3-l1-q2",
            "stem": "In AP CSP pseudocode, the expression `x MOD y` returns the integer remainder after dividing `x` by `y`. What is the value of `17 MOD 5`?",
            "options": [
              "$3$",
              "$2$",
              "$3.4$",
              "$0$"
            ],
            "correctIndex": 1,
            "explanation": "Dividing 17 by 5 gives a quotient of 3 with a remainder of 2 ($5 \\times 3 = 15$, and $17 - 15 = 2$). The MOD operator returns only the integer remainder: `17 MOD 5 = 2`.",
            "distractorTip": "MOD returns the REMAINDER, not the quotient! $17 / 5 = 3$ remainder $2$, so $17\\text{ MOD }5 = 2$. If `x MOD 2 == 0`, $x$ is even."
          },
          {
            "id": "csp3-l1-q3",
            "stem": "What is the evaluated output of the expression `19 MOD 5` in standard computer science pseudocode?",
            "options": [
              "3",
              "4",
              "0",
              "1"
            ],
            "correctIndex": 1,
            "explanation": "The MOD operator returns the integer remainder of a division. $19 \\div 5 = 3$ with a remainder of $4$. Therefore, `19 MOD 5` evaluates to $4$.",
            "distractorTip": "MOD calculates the REMAINDER, NOT the quotient. $19 / 5 = 3$ remainder 4, so $19 \\text{ MOD } 5 = 4$."
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "csp-u3-l2",
        "topicNumber": "Topic 3.4 & 3.5",
        "name": "Boolean Logic & De Morgan’s Laws",
        "subtitle": "NOT, AND, OR truth tables and logical equivalence",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs3-l2-q1",
            "stem": "According to De Morgan's Laws, which Boolean expression is logically equivalent to `NOT (isWeekend OR isHoliday)`?",
            "options": [
              "`isWeekend AND isHoliday`",
              "`(NOT isWeekend) OR (NOT isHoliday)`",
              "`(NOT isWeekend) AND (NOT isHoliday)`",
              "`NOT isWeekend OR isHoliday`"
            ],
            "correctIndex": 2,
            "explanation": "De Morgan’s Laws state: `NOT (A OR B)` is equivalent to `(NOT A) AND (NOT B)`, and `NOT (A AND B)` is equivalent to `(NOT A) OR (NOT B)`. When distributing `NOT`, flip `OR` to `AND`.",
            "distractorTip": "Remember the De Morgan rule: distribute the NOT and FLIP the operator (`OR` becomes `AND`, `AND` becomes `OR`)."
          },
          {
            "id": "cs3-l2-q2",
            "stem": "Consider the Boolean expression: `(x > 5) AND (x < 10)`. For which value of `x` does this expression evaluate to `true`?",
            "options": [
              "`x = 12`",
              "`x = 5`",
              "`x = 10`",
              "`x = 8`"
            ],
            "correctIndex": 3,
            "explanation": "The `AND` operator requires both conditions to be simultaneously true. At $x = 8$: $8 > 5$ is true, and $8 < 10$ is true. At $x = 5$ or $x = 10$, strict inequalities evaluate to false.",
            "distractorTip": "Strict inequalities ($>$ and $<$) do NOT include the boundary numbers themselves."
          },
          {
            "id": "csp3-l2-q3",
            "stem": "According to De Morgan's Laws, which of the following Boolean expressions is logically equivalent to `NOT (isWeekend OR isHoliday)`?",
            "options": [
              "(NOT isWeekend) OR (NOT isHoliday)",
              "isWeekend AND isHoliday",
              "(NOT isWeekend) AND (NOT isHoliday)",
              "NOT (isWeekend AND isHoliday)"
            ],
            "correctIndex": 2,
            "explanation": "De Morgan's Laws state: `NOT (A OR B)` $\\equiv$ `(NOT A) AND (NOT B)`, and `NOT (A AND B)` $\\equiv$ `(NOT A) OR (NOT B)`. Negating an OR statement changes the operator to AND and negates both individual operands.",
            "distractorTip": "De Morgan's: Distribute the NOT, flip OR to AND (or flip AND to OR)."
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "csp-u3-l3",
        "topicNumber": "Topic 3.6 & 3.7",
        "name": "Conditionals & Selection Statements",
        "subtitle": "IF, IF-ELSE, and nested branch evaluation",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs3-l3-q1",
            "stem": "Consider the following code segment with `score = 85`:\n```\nIF (score >= 90)\n{\n    grade <- \"A\"\n}\nELSE\n{\n    IF (score >= 80)\n    {\n        grade <- \"B\"\n    }\n    ELSE\n    {\n        grade <- \"C\"\n    }\n}\n```\nWhat is the value of `grade` after execution?",
            "options": [
              "`\"B\"`",
              "`\"A\"`",
              "`\"C\"`",
              "`\"B\"` and `\"C\"` simultaneously"
            ],
            "correctIndex": 0,
            "explanation": "Trace: First condition `85 >= 90` is false, branching to the `ELSE` block. Inside, `85 >= 80` is true, so `grade` is assigned `\"B\"`. The inner `ELSE` is bypassed.",
            "distractorTip": "In an `IF-ELSE` construct, only ONE branch is ever executed—the first branch whose condition evaluates to true."
          },
          {
            "id": "cs3-l3-q2",
            "stem": "A programmer wants to display a message if a user is eligible to vote (age is 18 or older AND a registered citizen). Which pseudocode structure correctly implements this logic?",
            "options": [
              "`IF (age > 18 OR isRegistered)`\n`{ DISPLAY(\"Eligible\") }`",
              "`IF (age >= 18 AND isRegistered)`\n`{ DISPLAY(\"Eligible\") }`",
              "`IF (age == 18)`\n`{ DISPLAY(\"Eligible\") }`",
              "`IF (age >= 18)`\n`{ IF (NOT isRegistered) { DISPLAY(\"Eligible\") } }`"
            ],
            "correctIndex": 1,
            "explanation": "Both requirements must be met simultaneously: age must be at least 18 (`age >= 18`), and the voter must be registered (`isRegistered == true`). The `AND` operator enforces both conditions.",
            "distractorTip": "`OR` would allow an unregistered 18-year-old or an registered 10-year-old to qualify, which is incorrect."
          },
          {
            "id": "csp3-l3-q3",
            "stem": "Consider the pseudocode:\n```\nscore <- 85\ngrade <- \"F\"\nIF (score >= 90)\n{\n  grade <- \"A\"\n}\nELSE\n{\n  IF (score >= 80)\n  {\n    grade <- \"B\"\n  }\n}\n```\nWhat is the value of `grade` after execution?",
            "options": [
              "\"A\"",
              "\"F\"",
              "\"C\"",
              "\"B\""
            ],
            "correctIndex": 3,
            "explanation": "Initial: `score = 85`. The first condition `score >= 90` is FALSE, so execution enters the `ELSE` block. The nested condition `score >= 80` is TRUE (85 >= 80), so `grade` is assigned the value `\"B\"`.",
            "distractorTip": "Trace nested conditionals carefully: follow the branch taken when the outer condition is false."
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "csp-u3-l4",
        "topicNumber": "Topic 3.8",
        "name": "Iteration: Loops & Execution Tracing",
        "subtitle": "REPEAT n TIMES and REPEAT UNTIL loops",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs3-l4-q1",
            "stem": "Consider the following loop in AP CSP pseudocode:\n```\ncount <- 1\nsum <- 0\nREPEAT UNTIL (count > 4)\n{\n    sum <- sum + count\n    count <- count + 1\n}\nDISPLAY(sum)\n```\nWhat value is displayed?",
            "options": [
              "$15$",
              "$6$",
              "$10$",
              "$4$"
            ],
            "correctIndex": 2,
            "explanation": "Trace: (1) `count=1`, `sum=1`, `count=2`. (2) `count=2`, `sum=1+2=3`, `count=3`. (3) `count=3`, `sum=3+3=6`, `count=4`. (4) `count=4`, `sum=6+4=10`, `count=5`. Loop condition `5 > 4` is now TRUE, so loop terminates. Final sum is 10.",
            "distractorTip": "CRITICAL AP CSP RULE: `REPEAT UNTIL` loops terminate when the condition becomes TRUE! (Unlike `WHILE` loops which continue while true)."
          },
          {
            "id": "cs3-l4-q2",
            "stem": "How many times will the statement `DISPLAY(\"Hello\")` execute in the following nested loop?\n```\nREPEAT 3 TIMES\n{\n    REPEAT 4 TIMES\n    {\n        DISPLAY(\"Hello\")\n    }\n}\n```",
            "options": [
              "$4\\text{ times}$",
              "$7\\text{ times}$",
              "$34\\text{ times}$",
              "$12\\text{ times}$"
            ],
            "correctIndex": 3,
            "explanation": "The outer loop runs 3 times. On each iteration of the outer loop, the inner loop runs 4 times. Total executions: $3 \\times 4 = 12$.",
            "distractorTip": "Nested loops multiply their iteration counts ($3 \\times 4 = 12$), they do not add."
          },
          {
            "id": "csp3-l4-q3",
            "stem": "Consider the following loop:\n```\ncount <- 1\nsum <- 0\nREPEAT 4 TIMES\n{\n  sum <- sum + count\n  count <- count + 1\n}\n```\nWhat is the final value of `sum`?",
            "options": [
              "10",
              "15",
              "6",
              "4"
            ],
            "correctIndex": 0,
            "explanation": "Iteration 1: sum = 0 + 1 = 1, count = 2.\\nIteration 2: sum = 1 + 2 = 3, count = 3.\\nIteration 3: sum = 3 + 3 = 6, count = 4.\\nIteration 4: sum = 6 + 4 = 10, count = 5.\\nFinal sum is 10.",
            "distractorTip": "Trace each iteration line by line, keeping track of variable states after each step."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "csp-u3-l5",
        "topicNumber": "Topic 3.10 & 3.11",
        "name": "Lists & Searching Algorithms",
        "subtitle": "1-indexed AP lists, linear search vs binary search",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs3-l5-q1",
            "stem": "In AP CSP pseudocode, lists are 1-INDEXED (the first element is at index 1). Consider:\n```\nanimals <- [\"dog\", \"cat\", \"bird\", \"fish\"]\nINSERT(animals, 2, \"frog\")\nREMOVE(animals, 4)\nDISPLAY(animals[2])\n```\nWhat is displayed?",
            "options": [
              "`\"frog\"`",
              "`\"cat\"`",
              "`\"dog\"`",
              "`\"bird\"`"
            ],
            "correctIndex": 0,
            "explanation": "Trace: (1) Initial list: `[1:\"dog\", 2:\"cat\", 3:\"bird\", 4:\"fish\"]`. (2) `INSERT(animals, 2, \"frog\")` shifts elements right: `[1:\"dog\", 2:\"frog\", 3:\"cat\", 4:\"bird\", 5:\"fish\"]`. (3) `REMOVE(animals, 4)` deletes index 4 (\"bird\"): `[1:\"dog\", 2:\"frog\", 3:\"cat\", 4:\"fish\"]`. (4) `animals[2]` is `\"frog\"`.",
            "distractorTip": "AP CSP Lists start at index 1, NOT index 0! `INSERT` pushes existing elements to the right."
          },
          {
            "id": "cs3-l5-q2",
            "stem": "What is the fundamental prerequisite that MUST be satisfied before a Binary Search algorithm can be used to search for a target value in a list?",
            "options": [
              "The list must contain an even number of elements.",
              "The list elements must already be in SORTED order.",
              "The list must contain only integer numbers, no strings.",
              "The list must have fewer than 100 elements."
            ],
            "correctIndex": 1,
            "explanation": "Binary search compares the target to the middle element and eliminates half of the remaining list. This divide-and-conquer logic ONLY works if the elements are already sorted. If unsorted, you must use Linear Search.",
            "distractorTip": "Unsorted list = Linear Search only ($O(n)$). Sorted list = Binary Search allowed ($O(\\log n)$)."
          },
          {
            "id": "csp3-l5-q3",
            "stem": "Under what condition is binary search significantly more efficient than linear search for locating an element in a collection of data?",
            "options": [
              "When the data elements are completely unsorted and stored in a linked list.",
              "When the list contains fewer than 5 total items.",
              "When the list is pre-sorted in ascending or descending order, reducing search time to $O(\\log n)$.",
              "When the search target is guaranteed to be at the very first index."
            ],
            "correctIndex": 2,
            "explanation": "Binary search requires that the list be sorted beforehand. It eliminates half of the remaining elements with each comparison, running in logarithmic time $O(\\log n)$, compared to linear search which requires $O(n)$ sequential comparisons.",
            "distractorTip": "Binary search MUST have sorted data! Without sorted data, you must use linear search."
          }
        ]
      },
      {
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "csp-u3-l6",
        "topicNumber": "Topic 3.12 - 3.14",
        "name": "Procedures, Parameters & Return Values",
        "subtitle": "Procedural abstraction, arguments, and modular code reuse",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs3-l6-q1",
            "stem": "Consider the following procedure definition:\n```\nPROCEDURE mystery(x, y)\n{\n    IF (x > y)\n    {\n        RETURN x - y\n    }\n    ELSE\n    {\n        RETURN y - x\n    }\n}\n```\nWhat does the call `mystery(3, 8)` return?",
            "options": [
              "$11$",
              "$-5$",
              "$5$",
              "$0$"
            ],
            "correctIndex": 2,
            "explanation": "Arguments are $x = 3$ and $y = 8$. Condition `3 > 8` is false, so it enters the `ELSE` block and executes `RETURN y - x` $\\to 8 - 3 = 5$. (This procedure calculates absolute difference $|x - y|$).",
            "distractorTip": "Trace with the actual argument values: $x=3, y=8$. Condition is false, returning $8 - 3 = 5$."
          },
          {
            "id": "cs3-l6-q2",
            "stem": "How does \"Procedural Abstraction\" enhance software development when writing large software applications?",
            "options": [
              "It prevents procedures from returning numerical values.",
              "It forces the computer to run procedures in parallel on separate microchips.",
              "It translates high-level code into physical silicon transistors.",
              "It allows a programmer to use a procedure simply by knowing its name, inputs, and output, without needing to know the complex internal code implementation."
            ],
            "correctIndex": 3,
            "explanation": "Procedural abstraction hides detailed algorithm steps behind a clean interface (name, parameters, return value). Callers can use the procedure as a \"black box,\" promoting modularity, code reuse, and easier debugging.",
            "distractorTip": "Procedural abstraction hides HOW it works while providing WHAT it does."
          },
          {
            "id": "csp3-l6-q3",
            "stem": "What is the primary benefit of procedural abstraction in computer programming?",
            "options": [
              "It allows code to be executed without using any random access memory.",
              "It allows programmers to use a procedure by understanding what it does (its inputs and outputs) without needing to know the internal code implementation.",
              "It guarantees that a program will run in linear time.",
              "It automatically converts interpreted languages into binary machine code."
            ],
            "correctIndex": 1,
            "explanation": "Procedural abstraction extracts shared code into reusable procedures. Callers only need to know the procedure's name, parameters, and return value (the interface), hiding internal complexity and enabling code reuse.",
            "distractorTip": "Procedural abstraction: You know WHAT it does (parameters and return), not HOW it does it internally."
          }
        ]
      },
      {
        "id": 307,
        "unitIndex": 3,
        "levelNumber": 7,
        "uniqueKey": "csp-u3-l7",
        "topicNumber": "Topic 3.15 - 3.18",
        "name": "Simulations, Efficiency & Undecidable Problems",
        "subtitle": "Random models, polynomial vs exponential time, heuristics, and Halting Problem",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs3-l7-q1",
            "stem": "An algorithm that solves a problem in Exponential Time ($O(2^n)$) becomes practically impossible to execute on a supercomputer as the input size $n$ grows to moderate numbers (e.g. $n = 100$). How do computer scientists solve such \"Unreasonable Time\" optimization problems?",
            "options": [
              "They use a \"Heuristic\" approach to find an approximate, good-enough solution in reasonable time.",
              "They wait for quantum computers to make mathematics obsolete.",
              "They replace the algorithm with random number generators that guess perfectly.",
              "They convert the binary data into hexadecimal text."
            ],
            "correctIndex": 0,
            "explanation": "When an optimal solution requires unreasonable (exponential/factorial) time, heuristics provide an educated shortcut/rule of thumb to find a near-optimal solution in reasonable polynomial time (e.g. for the Traveling Salesperson problem).",
            "distractorTip": "Heuristic = An algorithm that finds a satisfactory approximate solution in reasonable time when finding the exact best solution takes unreasonable time."
          },
          {
            "id": "cs3-l7-q2",
            "stem": "Alan Turing proved that the \"Halting Problem\" is an Undecidable Problem. What does it mean for a computational problem to be Undecidable?",
            "options": [
              "The problem can be solved only on Linux operating systems.",
              "It is mathematically impossible to construct an algorithm that will always lead to a correct yes-or-no answer for all possible inputs.",
              "Computers do not currently have enough RAM to store the code.",
              "The programmer forgot to write a termination condition in a while loop."
            ],
            "correctIndex": 1,
            "explanation": "An undecidable problem is one for which no algorithm can ever be written that is guaranteed to always provide a correct true/false answer for every possible input. The Halting Problem proves no algorithm can determine if any arbitrary program will halt or loop forever.",
            "distractorTip": "Undecidable $\\ne$ Unreasonable. Unreasonable = takes too long. Undecidable = mathematically impossible for ANY program to always solve."
          },
          {
            "id": "csp3-l7-q3",
            "stem": "Which of the following problems is an example of an 'undecidable problem' in computer science?",
            "options": [
              "Determining the shortest driving route between two cities.",
              "Sorting an array of one million random integers.",
              "Determining whether an arbitrary computer program will eventually finish running or run in an infinite loop (The Halting Problem).",
              "Finding a prime number larger than one billion."
            ],
            "correctIndex": 2,
            "explanation": "Alan Turing proved that the Halting Problem is undecidable: it is mathematically impossible to write an algorithm that can take ANY arbitrary program and input and correctly determine whether that program will eventually halt or loop forever.",
            "distractorTip": "An undecidable problem CANNOT be solved by any algorithm for all possible inputs (classic AP example: The Halting Problem)."
          }
        ]
      },
      {
        "id": 308,
        "unitIndex": 3,
        "levelNumber": 8,
        "uniqueKey": "csp-u3-l8",
        "topicNumber": "Unit 3 Boss",
        "name": "Apex Algorithmic Crucible",
        "subtitle": "Filtering lists, accumulator patterns, and search efficiency synthesis",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "cs3-l8-q1",
            "stem": "Consider the following list filtering algorithm:\n```\nnumbers <- [12, 5, 8, 20, 3, 15]\nresultList <- []\nFOR EACH item IN numbers\n{\n    IF (item MOD 2 == 0 AND item > 10)\n    {\n        APPEND(resultList, item)\n    }\n}\nDISPLAY(LENGTH(resultList))\n```\nWhat value is displayed?",
            "options": [
              "$1$",
              "$3$",
              "$2$",
              "$4$"
            ],
            "correctIndex": 2,
            "explanation": "The condition requires `item` to be BOTH even (`item MOD 2 == 0`) AND greater than 10 (`item > 10`). Trace items: 12 (even & >10: YES), 5 (NO), 8 (even, but NOT >10: NO), 20 (even & >10: YES), 3 (NO), 15 (odd: NO). `resultList` contains `[12, 20]`. `LENGTH(resultList)` is 2.",
            "distractorTip": "Check BOTH conditions: 8 is even but not $>10$; 15 is $>10$ but not even. Only 12 and 20 satisfy both."
          },
          {
            "id": "cs3-l8-q2",
            "stem": "A sorted array contains $1{,}024$ items. What is the MAXIMUM number of comparisons required to find a target value (or determine it is absent) using a Binary Search versus a Linear Search?",
            "options": [
              "Binary Search requires $1$ comparison, while Linear Search requires $2$.",
              "Binary Search requires $512$ comparisons, while Linear Search requires $1{,}024$.",
              "Both require $1{,}024$ comparisons in the worst case.",
              "Binary Search requires at most $11$ comparisons, while Linear Search requires up to $1{,}024$ comparisons."
            ],
            "correctIndex": 3,
            "explanation": "Binary search halves search space each step: $\\log_2(1024) = 10$, so at most $10$ or $11$ comparisons are needed. Linear search must inspect every element one-by-one in the worst case, requiring $1{,}024$ comparisons.",
            "distractorTip": "Binary search worst-case efficiency is logarithmic: $O(\\log_2 n)$. $\\log_2(1024) = 10$."
          },
          {
            "id": "csp3-l8-q3",
            "stem": "An algorithm takes $N^2$ operations to process a dataset of size $N$. How is the efficiency of this algorithm classified?",
            "options": [
              "Unreasonable time (exponential complexity)",
              "Reasonable time (polynomial complexity)",
              "Logarithmic time",
              "Factorial time"
            ],
            "correctIndex": 1,
            "explanation": "Algorithms with polynomial running times ($O(1), O(N), O(N^2), O(N^3)$) are classified as running in 'reasonable time'. Algorithms with exponential ($O(2^N)$) or factorial ($O(N!)$) running times run in 'unreasonable time' for large inputs.",
            "distractorTip": "Polynomial ($N^k$) = Reasonable time; Exponential ($2^N, N!$) = Unreasonable time."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Unit 4: Computer Systems and Networks",
    "shortTitle": "Unit 4: Systems & Networks",
    "description": "Internet architecture, packet switching, dynamic routing, fault tolerance, parallel and distributed computing, and standard open protocols",
    "examWeight": "11–15% of AP Exam",
    "biome": {
      "name": "Fiber-Optic Nexus & Cloud Routing Matrix",
      "icon": "🌐",
      "accentColor": "#10B981",
      "secondaryColor": "#059669",
      "groundGradient": "from-emerald-100 via-teal-50 to-cyan-100",
      "cardBorder": "border-emerald-500",
      "trailColor": "#10b981",
      "nodeRing": "ring-emerald-400/40",
      "skyTint": "from-emerald-50 to-teal-50/30"
    },
    "levels": [
      {
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "csp-u4-l1",
        "topicNumber": "Topic 4.1",
        "name": "The Internet & Packet Switching",
        "subtitle": "Packet structure, metadata, dynamic routing, bandwidth, and latency",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs4-l1-q1",
            "stem": "When a large video file is transmitted across the Internet from a streaming server to a student's laptop, how is the data packaged and routed?",
            "options": [
              "The video is broken down into small standardized packets containing data and metadata (IP addresses, sequence numbers); each packet travels independently along dynamic routes and is reassembled at the destination.",
              "A single continuous dedicated copper wire circuit is reserved exclusively between the server and the laptop until the video finishes downloading.",
              "The entire file is sent as one giant monolithic packet that must pass through every router on the Internet in numerical sequence.",
              "The video is broadcast to every computer on Earth simultaneously, and only the student's laptop saves the file."
            ],
            "correctIndex": 0,
            "explanation": "The Internet is a packet-switched network. Files are partitioned into packets with payload and metadata (sender/receiver IP address, packet number). Routers steer packets along varying paths based on network congestion, and the receiving device reassembles them in order.",
            "distractorTip": "Packet switching vs. circuit switching: The Internet uses packet switching (shared dynamic routes), NOT dedicated circuits."
          },
          {
            "id": "cs4-l1-q2",
            "stem": "A network engineer evaluates two Internet connections: Connection X has a bandwidth of 100 Mbps and a latency of 250 ms. Connection Y has a bandwidth of 10 Mbps and a latency of 15 ms. Which statement correctly distinguishes bandwidth from latency in this context?",
            "options": [
              "Bandwidth measures how fast electrical signals move through glass fiber, while latency measures the total size of the hard drive.",
              "Bandwidth measures the maximum data transfer capacity per second, while latency measures the round-trip transit time for a packet to travel from sender to receiver.",
              "Connection X will always load real-time multiplayer online games with less delay than Connection Y.",
              "Latency measures packet data capacity, while bandwidth measures the physical length of the fiber cable."
            ],
            "correctIndex": 1,
            "explanation": "Bandwidth is throughput capacity (bits transmitted per second). Latency is delay (time taken for a packet to traverse the network). For real-time applications like online gaming or VoIP, low latency (Connection Y) prevents lag, even if bandwidth is lower.",
            "distractorTip": "Think of bandwidth as the width of a highway (lanes of cars) and latency as the speed limit (time to arrive)."
          },
          {
            "id": "csp4-l1-q3",
            "stem": "How does packet switching transmit digital data across the Internet?",
            "options": [
              "A dedicated, continuous electrical circuit is locked between the two communicating computers for the duration of the transfer.",
              "All digital data is broadcast simultaneously via satellite radio waves to every device in the country.",
              "Data is broken into discrete packets that travel independently across redundant network routers, potentially taking different routes and arriving out of order before being reassembled.",
              "Data packets must all follow the exact same physical wire in strict sequential order."
            ],
            "correctIndex": 2,
            "explanation": "Packet switching splits messages into small packets, each containing payload data and routing metadata (IP headers). Packets route independently through dynamic network paths and are reassembled in correct sequence at the destination.",
            "distractorTip": "Packet switching: Packets travel INDEPENDENTLY and may arrive OUT OF ORDER before being reassembled."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "csp-u4-l2",
        "topicNumber": "Topic 4.2",
        "name": "Fault Tolerance & Network Redundancy",
        "subtitle": "Redundant paths, router failures, network reliability, and single points of failure",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "cs4-l2-q1",
            "stem": "A school district network connects 5 buildings (A, B, C, D, E) with routers. Building A connects to B and C; Building B connects to C and D; Building C connects to D and E; Building D connects to E. If the router in Building C catches fire and permanently shuts down, can Building A still transmit data packets to Building E?",
            "options": [
              "No, because packet switching fails whenever any intermediate node goes offline.",
              "No, because Building C is a centralized hub required for all network routing.",
              "Yes, because redundant pathways exist: packets can travel along route A → B → D → E.",
              "Yes, but only if all packets are converted from digital signals back into analog telephone audio."
            ],
            "correctIndex": 2,
            "explanation": "Fault tolerance is achieved through network redundancy—providing multiple alternate paths between points. Because path A → B → D → E remains intact, communication between A and E continues seamlessly despite the failure of node C.",
            "distractorTip": "A network is fault-tolerant if the failure of individual components does not prevent the entire system from continuing to function."
          },
          {
            "id": "cs4-l2-q2",
            "stem": "Why do Internet service providers and network architects intentionally add redundant routers and backup fiber optic lines, even though doing so increases initial hardware and maintenance costs?",
            "options": [
              "Redundancy prevents users from ever consuming more than their allotted monthly bandwidth.",
              "Redundancy guarantees that data packets travel at the speed of light in a vacuum.",
              "Redundancy eliminates the requirement for IP addresses on connected devices.",
              "Redundancy creates fault tolerance, ensuring network availability and continuous packet delivery even when individual routers, switches, or cables fail."
            ],
            "correctIndex": 3,
            "explanation": "Redundancy builds fault-tolerant systems. If a single line or router is cut or fails, traffic automatically reroutes over alternate connections without disrupting service, avoiding costly downtime.",
            "distractorTip": "Fault tolerance = resilience through redundancy. It does not speed up the physical limits of signal transmission."
          },
          {
            "id": "csp4-l2-q3",
            "stem": "What architectural feature of the Internet ensures that communication can continue even when individual routers or transmission cables fail?",
            "options": [
              "Fault tolerance achieved through redundant routing pathways between nodes.",
              "Centralized oversight by an international telecommunications board.",
              "Using symmetric encryption on all DNS queries.",
              "Requiring all web servers to store identical copies of every webpage."
            ],
            "correctIndex": 0,
            "explanation": "The Internet is designed to be fault tolerant: if a router or line fails, dynamic routing protocols (like BGP) automatically reroute packets along alternative redundant pathways, ensuring continuous network connectivity.",
            "distractorTip": "Fault tolerance = system continues to operate despite component failures; achieved through REDUNDANCY."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "csp-u4-l3",
        "topicNumber": "Topic 4.3",
        "name": "Parallel & Distributed Computing",
        "subtitle": "Sequential vs parallel execution, Amdahl's law, speedup calculation, and distributed clusters",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "cs4-l3-q1",
            "stem": "A scientific algorithm takes 60 seconds to run sequentially on a single computer core. A developer rewrites the program to run on 4 parallel cores. 40 seconds of the task can be parallelized evenly across the 4 cores, but 20 seconds of the task is strictly sequential and must run on one core. What is the total execution time on the 4-core system, and what is the resulting speedup factor?",
            "options": [
              "Total time = 30 seconds (20s sequential + 40s/4 = 10s parallel); Speedup factor = 60 / 30 = 2.0.",
              "Total time = 15 seconds (60s / 4); Speedup factor = 4.0.",
              "Total time = 10 seconds (40s / 4); Speedup factor = 6.0.",
              "Total time = 20 seconds; Speedup factor = 3.0."
            ],
            "correctIndex": 0,
            "explanation": "Parallel time = (Sequential Portion) + (Parallel Portion / Number of Cores) = 20s + (40s / 4) = 20s + 10s = 30 seconds. Speedup = (Sequential Time) / (Parallel Time) = 60s / 30s = 2.0. This demonstrates Amdahl's law: sequential bottlenecks limit maximum parallel speedup.",
            "distractorTip": "Speedup formula: Sequential Time / Parallel Time. Never divide the sequential portion by the number of cores!"
          },
          {
            "id": "cs4-l3-q2",
            "stem": "How does a distributed computing model (such as SETI@home, BOINC, or Apache Hadoop) differ fundamentally from parallel computing running on a single multi-core desktop processor?",
            "options": [
              "Distributed computing only works with analog data, while multi-core parallel computing works with digital data.",
              "Distributed computing distributes computational subtasks across multiple autonomous, geographically separated computers communicating over a network, whereas multi-core parallel computing shares the physical memory and bus of a single machine.",
              "Distributed computing never takes longer than sequential computing regardless of network latency.",
              "Distributed computing cannot process large datasets like DNA sequencing or astronomical telescope images."
            ],
            "correctIndex": 1,
            "explanation": "Distributed computing harnesses separate independent computers (nodes) connected via network/Internet to solve massive computational problems cooperatively. Multi-core parallel computing operates within a single machine sharing local RAM and motherboards.",
            "distractorTip": "Distributed = many independent machines over a network; Parallel = multiple processing cores (can be within one machine or distributed)."
          },
          {
            "id": "csp4-l3-q3",
            "stem": "In parallel computing, why does doubling the number of processors rarely cut the total program execution time in half (Amdahl's Law)?",
            "options": [
              "Parallel processors generate too much heat to run at standard clock frequencies.",
              "Computers can only execute integer operations in parallel.",
              "Every program has a sequential portion that cannot be parallelized, along with communication overhead required to coordinate processors.",
              "Operating systems disable multiprocessing when handling large files."
            ],
            "correctIndex": 2,
            "explanation": "Amdahl's law demonstrates that the speedup of a parallel program is fundamentally limited by its serial (non-parallelizable) components. Additionally, distributing data and synchronizing results between multiple processor cores adds coordination overhead.",
            "distractorTip": "Speedup is limited by the sequential portion of the program and communication overhead."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "csp-u4-l4",
        "topicNumber": "Topic 4.4",
        "name": "Internet Protocols & The Open Architecture Stack",
        "subtitle": "TCP vs UDP, IP addressing, HTTP/HTTPS, DNS hierarchy, and IETF standards",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "cs4-l4-q1",
            "stem": "A multiplayer video game developer decides to use User Datagram Protocol (UDP) for player character coordinates during matches, but uses Transmission Control Protocol (TCP) for purchasing game items in the store. Why is this protocol selection appropriate?",
            "options": [
              "UDP is physical hardware inside routers, while TCP is software installed in web browsers.",
              "UDP encrypts all packet payloads with 256-bit AES, while TCP transmits data in unencrypted plaintext.",
              "UDP sends lightweight packets without handshakes or retransmission, minimizing latency for fast real-time position updates; TCP guarantees reliable, ordered packet delivery with acknowledgments, ensuring financial transactions are never dropped or corrupted.",
              "TCP is completely obsolete and has been entirely replaced by UDP on modern mobile devices."
            ],
            "correctIndex": 2,
            "explanation": "TCP is connection-oriented and reliable: it numbers packets, requests retransmission of lost packets, and guarantees in-order arrival (vital for financial transactions, files, emails). UDP is connectionless and prioritizes low latency over reliability: if a coordinate packet is dropped, the next one will supersede it anyway.",
            "distractorTip": "TCP = Reliable, ordered, slower (guaranteed delivery); UDP = Fast, unordered, loss-tolerant (streaming, live gaming)."
          },
          {
            "id": "cs4-l4-q2",
            "stem": "When a user enters `https://www.collegeboard.org` into a web browser, how does the Domain Name System (DNS) resolve this human-readable URL into an Internet Protocol (IP) address?",
            "options": [
              "The website automatically downloads the entire global DNS database onto the user's smartphone before rendering.",
              "The browser contacts every router in the world one by one in alphabetical order.",
              "The computer calculates the MD5 hash of the letters and uses that hash as the direct physical cable address.",
              "The browser queries a hierarchy of DNS servers (Root nameservers → .org Top-Level Domain servers → CollegeBoard authoritative nameservers) until the corresponding numerical IP address is returned."
            ],
            "correctIndex": 3,
            "explanation": "DNS functions like the Internet's phonebook. It is structured hierarchically (Root → TLD such as .org/.com → Authoritative domain server). This decentralized, hierarchical architecture ensures scalability and fault tolerance without any single bottleneck.",
            "distractorTip": "DNS maps human-readable domain names to machine-routable IP addresses (e.g. www.example.com → 93.184.216.34)."
          },
          {
            "id": "csp4-l4-q3",
            "stem": "Which Internet protocol is primarily responsible for translating human-friendly domain names (such as `www.collegeboard.org`) into numerical IP addresses (such as `104.18.24.112`)?",
            "options": [
              "Hypertext Transfer Protocol (HTTP)",
              "Simple Mail Transfer Protocol (SMTP)",
              "Domain Name System (DNS)",
              "Transmission Control Protocol (TCP)"
            ],
            "correctIndex": 2,
            "explanation": "The Domain Name System (DNS) acts as the phonebook of the Internet, translating human-readable hostnames (`example.com`) into computer-routable IP addresses (`192.0.2.1`).",
            "distractorTip": "DNS = translates domain names to IP addresses; IP = addressing and routing; TCP = packet ordering and reliability; HTTP = web requests."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "csp-u4-l5",
        "topicNumber": "Unit 4 Boss Challenge",
        "name": "Systems Architecture & Network Scalability Master",
        "subtitle": "Synthesis of packet routing, fault tolerance, Amdahl's law speedup, and protocol layers",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "cs4-l5-q1",
            "stem": "An automated climate monitoring network consists of 500 remote weather stations transmitting sensor readings to a central data repository across a regional mesh router network. During a severe storm, two major backbone routers are disabled by lightning strikes, and network packet loss spikes to 35%. How do the Internet's layered protocols (IP and TCP) work together to maintain continuous data collection despite these disruptions?",
            "options": [
              "IP dynamically reroutes packets along surviving alternate paths around the failed routers (fault tolerance), while TCP detects missing packets via missing acknowledgments and triggers automatic retransmission, ensuring complete data delivery without data loss.",
              "IP immediately halts all network transmissions worldwide until human technicians repair the two damaged routers.",
              "TCP permanently deletes all corrupted weather records to prevent server memory crashes.",
              "The routers switch from binary digital signaling to high-frequency AM radio waves automatically."
            ],
            "correctIndex": 0,
            "explanation": "This highlights protocol stack collaboration: IP operates at the Network layer to route packets dynamically around failed hardware (providing fault tolerance), while TCP operates at the Transport layer to detect packet dropouts, sequence incoming packets, and retransmit missing packets until the entire dataset is verified intact.",
            "distractorTip": "Layer separation: IP handles routing/addressing (where packets go); TCP handles reliability/sequencing (making sure all packets arrive intact)."
          },
          {
            "id": "cs4-l5-q2",
            "stem": "A genomics research institute has a sequential bioinformatics data processing pipeline that takes 100 hours to run on a single workstation. Profiling reveals that 90 hours (90%) of the computation consists of independent DNA sequence comparisons that can be split across any number of processors, while 10 hours (10%) consists of merging the results into a single relational database, which must be executed sequentially on one processor. If the institute rents a cloud cluster of 1,000 processor cores, what is the theoretical maximum speedup limit, and approximately how long will the job take?",
            "options": [
              "The total execution time will be exactly 0.1 hours (6 minutes), achieving a 1,000x linear speedup.",
              "The total execution time cannot drop below approximately 10 hours, and the theoretical maximum speedup can never exceed 10.0x regardless of how many cores are added.",
              "The job will take 90 hours because adding cores always slows down data processing due to thermal throttling.",
              "The job will crash because parallel algorithms cannot run on cloud clusters."
            ],
            "correctIndex": 1,
            "explanation": "According to Amdahl's law: Parallel Time = (Sequential portion) + (Parallel portion / N). With N = 1000 cores, Parallel Time = 10 hrs + (90 hrs / 1000) = 10 + 0.09 = 10.09 hours. Even if N approached infinity, the execution time would still be bounded by the 10-hour sequential portion. Maximum theoretical speedup = 100 hrs / 10 hrs = 10.0x.",
            "distractorTip": "Amdahl's law: The sequential portion of an algorithm creates an unbreakable ceiling on maximum possible speedup."
          },
          {
            "id": "csp4-l5-q3",
            "stem": "Why is the transition from IPv4 to IPv6 essential for the continued global expansion of the Internet?",
            "options": [
              "IPv4 addresses are limited to 32 bits (approx. 4.3 billion unique addresses), whereas IPv6 uses 128-bit addresses to accommodate billions of connected Internet-of-Things (IoT) devices.",
              "IPv4 is incompatible with wireless Wi-Fi routers.",
              "IPv6 eliminates the need for packet headers.",
              "IPv4 only works with text data, while IPv6 supports video streaming."
            ],
            "correctIndex": 0,
            "explanation": "IPv4 uses 32-bit addresses, yielding $2^{32} \\approx 4.3$ billion addresses, which have been virtually exhausted. IPv6 uses 128-bit addresses ($2^{128} \\approx 3.4 \\times 10^{38}$ addresses), providing virtually unlimited address space for all future digital devices.",
            "distractorTip": "IPv4 = 32-bit addresses (exhausted); IPv6 = 128-bit addresses (vastly expanded space)."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Unit 5: Impact of Computing",
    "shortTitle": "Unit 5: Computing Impact",
    "description": "The digital divide, computing ethics, intellectual property (Creative Commons), cybersecurity, symmetric vs public key encryption, and social implications",
    "examWeight": "21–26% of AP Exam",
    "biome": {
      "name": "Cipher Citadel & Public Key Vault",
      "icon": "🛡️",
      "accentColor": "#EF4444",
      "secondaryColor": "#B91C1C",
      "groundGradient": "from-red-100 via-rose-50 to-orange-100",
      "cardBorder": "border-red-500",
      "trailColor": "#ef4444",
      "nodeRing": "ring-red-400/40",
      "skyTint": "from-red-50 to-rose-50/30"
    },
    "levels": [
      {
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "csp-u5-l1",
        "topicNumber": "Topic 5.1 & 5.2",
        "name": "Beneficial & Harmful Effects & The Digital Divide",
        "subtitle": "Unintended societal consequences, algorithmic bias, socioeconomic disparities, and access barriers",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "cs5-l1-q1",
            "stem": "A metropolitan hospital deploys an AI diagnostic system trained to identify malignant skin lesions from smartphone photos. When deployed in clinical practice, doctors notice that the model exhibits a 94% accuracy rate on fair-skinned patients, but drops to 61% accuracy on dark-skinned patients. What is the primary underlying cause of this algorithmic bias?",
            "options": [
              "Computer vision algorithms are mathematically incapable of analyzing pigmented surfaces.",
              "The hospital's WiFi router had higher latency when uploading photos of dark skin.",
              "The training dataset consisted overwhelmingly of clinical images from light-skinned individuals, causing the machine learning model to learn patterns that fail to generalize across diverse skin tones.",
              "A rogue programmer inserted an explicit `if (dark_skin) return false;` command in the source code."
            ],
            "correctIndex": 2,
            "explanation": "Algorithmic bias almost always originates from biased, unrepresentative training data. When training datasets reflect historical disparities or exclude specific demographic subsets, the algorithm internalizes and amplifies those disparities in its predictions.",
            "distractorTip": "Algorithmic bias is rarely an intentional syntax bug; it is an artifact of unrepresentative data collection and lack of demographic diversity in testing."
          },
          {
            "id": "cs5-l1-q2",
            "stem": "Which scenario best illustrates the \"digital divide,\" and which policy initiative would most directly address its root cause?",
            "options": [
              "Software developers prefer dark mode color schemes while business executives prefer light mode.",
              "Older desktop computers cannot run modern 3D video games; upgrading graphics cards resolves the issue.",
              "Android smartphone users cannot send blue iMessage bubbles to Apple iPhone users; writing cross-platform chat apps solves the divide.",
              "Low-income students in rural farming communities lack access to high-speed broadband and computing hardware, putting them at an academic disadvantage; municipal broadband subsidies and 1-to-1 school laptop distribution directly alleviate this disparity."
            ],
            "correctIndex": 3,
            "explanation": "The digital divide refers to socioeconomic, demographic, and geographic inequalities in access to computing devices and broadband internet. Subsidizing internet infrastructure in underserved regions and providing hardware directly targets this inequality.",
            "distractorTip": "The digital divide encompasses both physical access (broadband infrastructure, hardware) and digital literacy."
          },
          {
            "id": "csp5-l1-q3",
            "stem": "What is meant by the 'Digital Divide' in discussions of the societal impact of computing?",
            "options": [
              "The physical difference between silicon microchips and optical storage discs.",
              "The division of computer memory between random access memory and solid-state storage.",
              "The gap between demographic groups and geographic regions that have access to modern high-speed Internet and computing technology and those that do not.",
              "The split between open-source software and proprietary commercial operating systems."
            ],
            "correctIndex": 2,
            "explanation": "The digital divide refers to socioeconomic and geographic inequalities in access to computing devices, high-speed broadband, and digital literacy training, which can exacerbate educational and economic disparities.",
            "distractorTip": "The digital divide refers to unequal access to computing technology and high-speed internet."
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "csp-u5-l2",
        "topicNumber": "Topic 5.3",
        "name": "Crowdsourcing & Citizen Science",
        "subtitle": "Distributed human collaboration, collective intelligence, and scientific data aggregation",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "cs5-l2-q1",
            "stem": "An environmental research team creates a mobile app where hikers around the world upload photos and GPS coordinates of invasive plant species. Over one year, 50,000 volunteers catalog 1.2 million sightings. Why is crowdsourcing citizen science particularly effective for this initiative compared to traditional research methods?",
            "options": [
              "It allows massive, continuous data collection across vast geographic regions and diverse timeframes at minimal cost, far exceeding the field reach of a small scientific research staff.",
              "It guarantees that every photograph submitted by untrained volunteers is 100% botanically accurate without verification.",
              "It replaces all software algorithms with human manual calculations.",
              "It eliminates the need for scientific peer review and statistical analysis."
            ],
            "correctIndex": 0,
            "explanation": "Crowdsourcing leverages distributed human participation to solve problems, collect widespread field data, or label datasets that would be financially or logistically impossible for a small research organization to gather alone.",
            "distractorTip": "Crowdsourcing enables scale and geographic distribution, but requires validation mechanisms to filter out user error."
          },
          {
            "id": "cs5-l2-q2",
            "stem": "When designing a crowdsourced citizen science application to classify wildlife from trail camera photos, what data validation technique should researchers implement to minimize the impact of unreliable or inaccurate volunteer submissions?",
            "options": [
              "Only allow submissions between midnight and 4:00 AM.",
              "Implement a consensus model where each photograph is independently presented to multiple distinct users, and only classifications with high agreement are accepted as verified.",
              "Reject any photo taken by a smartphone that cost less than $1,000.",
              "Automatically delete 50% of all submitted classifications at random."
            ],
            "correctIndex": 1,
            "explanation": "Consensus mechanisms (having multiple independent contributors classify the same item and taking the majority or statistically convergent label) prevent random guesses, trolling, or novice misidentifications from corrupting crowdsourced data.",
            "distractorTip": "Crowdsourced data quality is maintained through redundancy, user reputation scoring, and automated consensus."
          },
          {
            "id": "csp5-l2-q3",
            "stem": "How does citizen science leverage crowdsourcing to advance scientific research?",
            "options": [
              "By allowing computer simulations to run without human researchers.",
              "By distributing data collection and analysis tasks to thousands of volunteers around the world via online platforms.",
              "By replacing scientific peer review with automated algorithms.",
              "By purchasing proprietary satellite feeds from private aerospace corporations."
            ],
            "correctIndex": 1,
            "explanation": "Citizen science is a crowdsourcing practice where members of the public contribute to authentic scientific research by gathering observational data (e.g. bird counts, galaxy classification) on a scale that individual researchers could never accomplish alone.",
            "distractorTip": "Crowdsourcing and citizen science: Engaging large distributed groups of people to solve problems or collect large datasets."
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "csp-u5-l3",
        "topicNumber": "Topic 5.4",
        "name": "Legal & Ethical Concerns: Intellectual Property & Open Source",
        "subtitle": "Copyright, Creative Commons licenses (BY, NC, SA, ND), Open Access, and open source software",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "cs5-l3-q1",
            "stem": "An indie game creator finds an orchestral background music track online published under a Creative Commons CC BY-NC-ND license. The creator wants to remix the track to create a techno beat and play it in a commercial mobile game that costs $2.99 on the app store. Can the creator legally use this music track under the CC BY-NC-ND license?",
            "options": [
              "Yes, because music placed on the Internet automatically forfeits copyright protection.",
              "Yes, because all Creative Commons licenses permit any commercial or non-commercial use as long as the author is credited.",
              "No, because the license explicitly forbids both commercial use (NC = Non-Commercial) and creating derivative works or remixes (ND = No Derivatives).",
              "No, but only because the creator must pay a 10% royalty to the Creative Commons organization."
            ],
            "correctIndex": 2,
            "explanation": "CC BY-NC-ND requires Attribution (BY), Non-Commercial use only (NC), and No Derivatives (ND). Remixing the track violates the ND clause, and selling the game for $2.99 violates the NC clause.",
            "distractorTip": "Creative Commons clause breakdown: BY = Attribution required; NC = No commercial use; ND = No modifications/remixes; SA = ShareAlike (derivatives must use same license)."
          },
          {
            "id": "cs5-l3-q2",
            "stem": "What is a primary distinction between open source software and proprietary (closed source) commercial software?",
            "options": [
              "Open source software cannot be written in compiled languages like C or Rust.",
              "Open source software is never allowed to be run on corporate computers.",
              "Proprietary software is always completely free of security vulnerabilities.",
              "Open source software publishes its source code publicly so anyone can inspect, audit, modify, and contribute improvements, whereas proprietary software keeps its underlying source code secret and restricted by copyright."
            ],
            "correctIndex": 3,
            "explanation": "Open source software distributes human-readable source code under open licenses (e.g. MIT, GNU GPL, Apache), fostering transparency, peer auditing, and community collaboration. Proprietary software restricts source access to the copyright holder.",
            "distractorTip": "Open source does not necessarily mean \"free of cost\" (gratis), but rather \"free of source restrictions\" (libre)."
          },
          {
            "id": "csp5-l3-q3",
            "stem": "If a software developer releases code under a Creative Commons (CC) license with the 'Attribution' (BY) condition, what are other programmers legally permitted to do?",
            "options": [
              "They cannot use or modify the code under any circumstances without paying royalties.",
              "They can only view the code in educational classrooms.",
              "They may share, adapt, and build upon the work, provided they give appropriate credit and attribution to the original author.",
              "They are required to surrender copyright of all their own personal software."
            ],
            "correctIndex": 2,
            "explanation": "Creative Commons licenses allow copyright holders to grant public permission to share and use their creative work under specific conditions. CC-BY allows reuse and modification as long as original attribution is provided.",
            "distractorTip": "Creative Commons (CC-BY) allows sharing and modification with proper attribution."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "csp-u5-l4",
        "topicNumber": "Topic 5.5",
        "name": "Cybersecurity, Safe Computing & PII Protection",
        "subtitle": "Personally Identifiable Information, phishing, keyloggers, rogue access points, and privacy",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "cs5-l4-q1",
            "stem": "A research dataset strips patient names and social security numbers, but retains their 5-digit zip code, gender, and date of birth. Why do computer scientists classify this \"anonymized\" dataset as vulnerable to a re-identification attack?",
            "options": [
              "Computer science studies demonstrate that combining 5-digit zip code, gender, and full date of birth uniquely identifies over 87% of the United States population when cross-referenced with public voter registration databases.",
              "Any file smaller than 100 megabytes can be unmasked by web browsers automatically.",
              "Zip codes are mathematically identical to credit card numbers.",
              "Medical data cannot be stored digitally without violating federal networking laws."
            ],
            "correctIndex": 0,
            "explanation": "Re-identification occurs when supposedly anonymized non-PII attributes (quasi-identifiers like birthdate, gender, and zip code) are cross-referenced with public records (such as voter registries or property tax rolls) to isolate and unmask individuals uniquely.",
            "distractorTip": "PII is not just direct identifiers (name, SSN); combinations of metadata can uniquely identify an individual (data aggregation risk)."
          },
          {
            "id": "cs5-l4-q2",
            "stem": "While waiting at an airport gate, a traveler notices an open Wi-Fi network named \"Airport_Free_HighSpeed_WiFi\" that requires no password. The network was actually created by an attacker using a portable wireless router. If the traveler connects and browses websites over unencrypted HTTP, what type of attack has the traveler fallen victim to?",
            "options": [
              "A Denial of Service attack on the airport air traffic control tower.",
              "A rogue access point Man-in-the-Middle (MitM) attack, where the attacker can intercept, view, and tamper with all unencrypted data packets transmitted by the traveler, including passwords and session cookies.",
              "A physical hardware short-circuit of the laptop's motherboard.",
              "A phishing email that automatically replies to the user's contacts."
            ],
            "correctIndex": 1,
            "explanation": "A rogue access point is an unauthorized wireless access point set up by an adversary to deceive users into connecting. Because traffic routes through the attacker's device, any unencrypted (HTTP) communications can be eavesdropped, recorded, or injected with malicious payloads.",
            "distractorTip": "Rogue AP = fake WiFi hotspot capturing traffic; Phishing = fraudulent messages tricking you into divulging credentials; Keylogger = software/hardware recording keystrokes."
          },
          {
            "id": "csp5-l4-q3",
            "stem": "A deceptive email designed to look like an urgent communication from a bank directs customers to a fraudulent website that captures their account numbers and passwords. What cyberattack is this?",
            "options": [
              "Distributed Denial of Service (DDoS)",
              "Phishing attack",
              "Rogue access point attack",
              "Keylogging worm"
            ],
            "correctIndex": 1,
            "explanation": "Phishing is a social engineering attack where malicious actors impersonate legitimate institutions (via email or fake websites) to trick victims into revealing sensitive personal identifiable information (PII) like credentials.",
            "distractorTip": "Phishing = deceptive social engineering to steal credentials; DDoS = flooding a server with fake traffic to take it offline."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "csp-u5-l5",
        "topicNumber": "Topic 5.6",
        "name": "Cryptography: Symmetric vs Public Key Encryption",
        "subtitle": "Symmetric keys, asymmetric key pairs (public/private), digital certificates, and Certificate Authorities",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "cs5-l5-q1",
            "stem": "In asymmetric (public key) cryptography (such as RSA or ECC), if Carlos wants to send an encrypted, confidential document to Dana across an insecure public network, which key must Carlos use to encrypt the document, and which key must Dana use to decrypt it?",
            "options": [
              "Carlos encrypts the document with Dana's PRIVATE key; Dana decrypts the document with Carlos's PUBLIC key.",
              "Carlos encrypts the document with Carlos's PRIVATE key; Dana decrypts the document with Carlos's PUBLIC key.",
              "Carlos encrypts the document with Dana's PUBLIC key; Dana decrypts the document with Dana's PRIVATE key.",
              "Carlos and Dana must use the exact same shared secret password that they previously exchanged in person."
            ],
            "correctIndex": 2,
            "explanation": "In public key cryptography, everyone has a public key (openly distributed) and a private key (kept secret). To send a confidential message to Dana, Carlos encrypts using Dana's PUBLIC key. Only Dana possesses the matching PRIVATE key required mathematically to decrypt it.",
            "distractorTip": "Public key locks the box (anyone can lock it); Private key unlocks the box (only the owner can unlock it)."
          },
          {
            "id": "cs5-l5-q2",
            "stem": "When a user navigates to `https://www.bank.com`, the browser displays a padlock icon. What role do Certificate Authorities (CAs) play in establishing this secure connection?",
            "options": [
              "Certificate Authorities physically inspect every Ethernet cable entering the user's home.",
              "Certificate Authorities store the user's bank account password in a public cloud database.",
              "Certificate Authorities provide free high-speed bandwidth to prevent DDoS attacks.",
              "Certificate Authorities are trusted third-party organizations that digitally sign the bank's public key certificate, verifying that the website truly belongs to the legitimate bank and preventing impostor spoofing."
            ],
            "correctIndex": 3,
            "explanation": "Digital certificates bind a public key to an entity's true identity. Trusted Certificate Authorities (CAs) verify the organization's identity and cryptographically sign the certificate. Browsers verify this signature using CA root certificates pre-installed in the operating system.",
            "distractorTip": "Digital Certificates solve the authenticity problem: How do you know that \"Dana's public key\" really belongs to Dana and not an attacker impersonating her?"
          },
          {
            "id": "csp5-l5-q3",
            "stem": "In asymmetric (public key) encryption, which key is used to decrypt a secure message?",
            "options": [
              "The sender's public key",
              "The receiver's public key",
              "The receiver's private key",
              "A shared symmetric pre-shared key"
            ],
            "correctIndex": 2,
            "explanation": "Public-key cryptography uses a mathematically linked key pair. Anyone can use the receiver's PUBLIC key to encrypt a message, but ONLY the receiver's matching PRIVATE key (which is kept strictly secret) can decrypt it.",
            "distractorTip": "Public key = used by anyone to ENCRYPT; Private key = kept secret by recipient to DECRYPT."
          }
        ]
      },
      {
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "csp-u5-l6",
        "topicNumber": "Unit 5 Boss Challenge",
        "name": "Cybersecurity, Cryptography & Digital Ethics Capstone",
        "subtitle": "Comprehensive synthesis of hybrid encryption protocols, rogue access points, algorithmic bias, and ethical licensing",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "cs5-l5-q3",
            "stem": "Modern HTTPS web sessions use a hybrid encryption architecture combining both asymmetric (public key) encryption and symmetric encryption. Why do web protocols not use asymmetric public key encryption to encrypt the entire stream of web page data, videos, and images during an active browsing session?",
            "options": [
              "Asymmetric cryptographic mathematical calculations (modular exponentiation of large prime numbers) are computationally intensive and slow; HTTPS uses asymmetric encryption only during the initial TLS handshake to securely negotiate a one-time symmetric session key, which is then used by fast symmetric ciphers (like AES) for high-speed bulk data transfer.",
              "Asymmetric encryption only works on text files and cannot encrypt images, sound, or video files.",
              "Symmetric keys are immune to quantum computing while asymmetric keys can never encrypt more than 16 bytes of data.",
              "Internet routers can only read packets if they are encrypted with symmetric keys."
            ],
            "correctIndex": 0,
            "explanation": "Asymmetric encryption is computationally expensive. Running it on millions of packets would overwhelm server CPUs and cause huge latency. By using asymmetric cryptography solely to safely transmit a random symmetric key during the handshake, web browsers get the best of both worlds: secure key exchange without prior secrets AND lightning-fast symmetric bulk encryption.",
            "distractorTip": "Hybrid cryptography: Asymmetric encryption for the KEY EXCHANGE handshake; Symmetric encryption (AES) for the DATA TRANSMISSION payload."
          },
          {
            "id": "cs5-l5-q4",
            "stem": "A financial tech startup builds an automated credit scoring application. The company purchases public web browsing history to train its credit approval model, hardcodes a shared symmetric encryption key inside its mobile app code for patient database queries, and publishes its proprietary credit algorithm under a CC BY license. Which assessment accurately critiques the security, ethical, and licensing flaws in this architecture?",
            "options": [
              "The startup's only mistake was using CC BY because all software must be published under closed-source copyright by law.",
              "Hardcoding the symmetric key in client software allows anyone who decompiles the app to decrypt all database traffic; using browsing history risks severe algorithmic bias that penalizes demographic groups unfairly; and CC BY allows competitors to freely use and monetize their proprietary algorithm as long as credit is given.",
              "Hardcoding symmetric keys is the industry-standard recommendation for mobile banking apps.",
              "Algorithmic bias cannot occur when machine learning models are trained on real-world browsing histories."
            ],
            "correctIndex": 1,
            "explanation": "This scenario integrates three major Unit 5 concepts: 1) Cybersecurity: Client-side secret keys are easily extracted by reverse-engineering, compromising confidentiality. 2) Ethics/Bias: Unregulated web browsing data incorporates socioeconomic and demographic biases that disproportionately harm marginalized applicants. 3) IP: A CC BY license gives away commercial rights and allows competitors to build directly on the startup's intellectual property.",
            "distractorTip": "Comprehensive capstone question testing encryption key security, training data bias, and intellectual property licensing."
          },
          {
            "id": "csp5-l6-q3",
            "stem": "Why is multi-factor authentication (MFA) significantly more secure than relying on a strong password alone?",
            "options": [
              "It requires users to change their password every 24 hours.",
              "It eliminates the need for data encryption across the network.",
              "It combines something you know (password) with something you have (security token/phone) or something you are (biometrics), meaning a stolen password alone is insufficient for unauthorized access.",
              "It automatically disconnects unauthorized IP addresses from the web server."
            ],
            "correctIndex": 2,
            "explanation": "MFA requires two or more distinct authentication factors: something you know (password), something you have (authenticator app/SMS code), or something you are (fingerprint). Even if a password is compromised in a data breach, attackers cannot access the account without the second factor.",
            "distractorTip": "MFA factors: Something you know (password), something you have (phone/token), something you are (biometrics)."
          }
        ]
      }
    ]
  }
];
