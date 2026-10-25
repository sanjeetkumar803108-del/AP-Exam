import { APUnitNote } from './types';

export const AP_CSP_NOTES: APUnitNote[] = [
  {
    "unitId": "u1",
    "unitNumber": 1,
    "title": "Creative Development",
    "examWeight": "10%–13% of AP Exam",
    "bigIdea": "Software is developed collaboratively through iterative design processes that identify requirements, refine prototypes, and debug logic errors.",
    "keyTheorems": [
      {
        "name": "The Iterative Development Process",
        "conditions": "Designing and implementing software programs.",
        "conclusion": "Programs are built through cyclical stages: Investigating and reflecting $\\rightarrow$ Designing $\\rightarrow$ Prototyping $\\rightarrow$ Testing and Debugging. Iteration enables incremental refinement based on user testing and feedback.",
        "apTip": "Pair programming provides continuous code review: The \"Driver\" writes code while the \"Navigator\" reviews lines, plans ahead, and identifies bugs."
      },
      {
        "name": "Software Error Classification",
        "conditions": "Diagnosing unexpected program failures.",
        "conclusion": "(1) Syntax Errors: Violations of programming grammar rules detected at compile time; (2) Runtime Errors: Exceptions that crash a running program (e.g. division by zero, index out of bounds); (3) Logic Errors: Program runs without crashing but produces incorrect outputs due to flawed algorithms.",
        "apTip": "Logic errors are the hardest to detect because no error message is generated! Hand-tracing code with test tables is the standard debugging technique."
      }
    ],
    "formulas": [
      {
        "name": "Algorithmic Execution Steps",
        "latex": "\\text{Runtime Complexity: } O(1) < O(\\log n) < O(n) < O(n^2) < O(2^n)",
        "explanation": "Linear time $O(n)$ scales reasonably; exponential time $O(2^n)$ becomes intractable for large inputs."
      }
    ],
    "sections": [
      {
        "heading": "1. Program Design & Testing Strategies",
        "content": "Best practices for software creation:\n\n- **Incremental Development**: Writing a small section of code, testing it immediately, and verifying correctness before writing the next section.\n- **Test Cases**: Designing inputs that test boundary conditions, normal inputs, and invalid edge cases (e.g. empty strings, negative numbers).\n- **Documentation & Comments**: Explaining the *purpose* and *logic* of code segments to facilitate maintenance, debugging, and collaboration."
      },
      {
        "heading": "2. Collaboration, Pair Programming & Intellectual Property (CED 1.1-1.2)",
        "content": "Software engineering collaboration and digital intellectual property laws:\n\n* **Collaborative Programming Models**:\n  * **Pair Programming**: Two developers work at one workstation:\n    * **Driver**: Writes the code and focuses on implementation details.\n    * **Navigator**: Reviews code in real-time, plans ahead, and spots edge-case errors.\n  * Roles switch frequently to foster shared ownership, reduce bugs, and enhance design quality.\n* **Intellectual Property & Licensing**:\n  * **Copyright**: Automatic legal protection granted to creators of original works, preventing unauthorized copying, distribution, or derivative works.\n  * **Creative Commons (CC)**: Public copyright licenses enabling creators to grant specific permissions to the public:\n    * **BY (Attribution)**: Credit must be given to original creator.\n    * **NC (NonCommercial)**: Work cannot be used for commercial profit.\n    * **SA (ShareAlike)**: Derivative works must inherit the identical license.\n  * **Open Source vs. Proprietary**: Open-source software provides full source code access for inspection and collaborative modification; proprietary software restricts source code access."
      },
      {
        "heading": "3. Official College Board Create Performance Task (CPT) 5-Point Scoring Checklist",
        "content": "Master checklist to guarantee full points on the AP CSP Create Task Written Response & Personalized Project Reference (PPR):\n\n* **Criterion 1: Program Purpose vs. Function & Video Demo (Row 1)**:\n  * **Program Purpose**: Clearly state the *problem your program solves* or the *creative goal it achieves for the user* (e.g., \"The purpose is to help high school athletes track daily caloric intake and prevent dehydration\"). DO NOT confuse purpose with function!\n  * **Program Function**: State *what the program actually does* (e.g., \"The program accepts daily meal logs, computes macro totals, and alerts the user if water intake is below target\").\n  * **Video Requirements**: Must be under 1 minute, demonstrate input, functionality, and output. **CRITICAL**: No human voice narration, no personal identifiable information (name, school).\n\n* **Criterion 2: Data Abstraction via a Named List Managing Complexity (Row 5)**:\n  * **Named Collection**: You must identify a student-created list, array, or dictionary.\n  * **Managing Complexity**: You must explicitly explain why using this list makes the program significantly easier to develop and maintain.\n  * **The Magic Formula**: Explain what would happen WITHOUT the list: *\"Without this list, I would have had to declare over 50 separate individual variables (e.g., score1, score2, score3...). I would not be able to iterate dynamically with a loop or handle variable amounts of user inputs, leading to hundreds of lines of repetitive, error-prone code.\"*\n\n* **Criterion 3: Student-Developed Procedural Abstraction with Parameters (Row 6)**:\n  * **Custom Procedure**: The procedure must be written by YOU (not a built-in library function like `Math.random()` or an event handler block like `onEvent`).\n  * **Parameters**: The procedure MUST accept at least one explicit parameter (argument) that directly changes the execution flow or outcome of the procedure.\n  * **Contribution**: Clearly explain how this procedure contributes to the overall functioning of the broader program.\n\n* **Criterion 4: Custom Algorithm with Sequencing, Selection, & Iteration (Rows 2 & 3)**:\n  * **The Holy Trinity**: Your procedure MUST contain all three:\n    1. **Sequencing**: Statements executing sequentially one after another.\n    2. **Selection**: Conditional logic using `IF`, `IF-ELSE`, or nested `IF` statements.\n    3. **Iteration**: A loop (`REPEAT n TIMES`, `REPEAT UNTIL`, `FOR EACH`, or `WHILE`).\n  * **Algorithmic Explanation**: Write a step-by-step description so detailed that another programmer could recreate your algorithm from scratch without looking at your code.\n\n* **Criterion 5: Two Distinct Test Cases & PPR Code Alignment (Row 4)**:\n  * **Test Case 1**: State exact input parameters passed into your procedure, the specific conditional branch executed, and the expected vs actual output.\n  * **Test Case 2**: State a DIFFERENT set of parameters that triggers a completely DIFFERENT execution branch (e.g., valid input vs invalid boundary input), tracing the alternative result.\n  * **100% PPR Consistency**: Every variable name, list name, and function name in your written exam response MUST match the code snippets printed on your Personalized Project Reference (PPR) sheet word-for-word!\n\n> ⚠️ **College Board Automatic Zero Traps**:\n> 1. Calling a built-in sort function (like `Array.sort()`) and claiming it as your student-developed algorithm $\\rightarrow$ Immediate 0 points!\n> 2. Using a list that only stores 1 single item or never changes $\\rightarrow$ Fails the managing complexity test!\n> 3. Writing a procedure with no parameters or where the parameter is never used in an `IF` statement $\\rightarrow$ Fails procedural abstraction!"
      },
      {
        "heading": "4. The Official College Board Exam Reference Sheet Pseudocode Specification",
        "content": "The official AP CSP pseudocode notation used on all multiple-choice questions:\n\n* **Assignment & Arithmetic Operators**:\n  * `a <- expression`: Evaluates the expression and assigns the result to variable `a`.\n  * Arithmetic: `+`, `-`, `*`, `/`.\n  * Modulo Operator: `a MOD b` returns the integer remainder after dividing `a` by `b` (e.g., `17 MOD 5` equals `2`; `14 MOD 2` equals `0` indicating an even number).\n* **Robot Grid Traversal Commands**:\n  * `MOVE_FORWARD()`: Moves the robot 1 square forward in the direction it is currently facing. If there is a wall or edge, the program generates an error.\n  * `ROTATE_RIGHT()`: Turns the robot 90 degrees clockwise in place.\n  * `ROTATE_LEFT()`: Turns the robot 90 degrees counterclockwise in place.\n  * `CAN_MOVE(direction)`: Evaluates to `true` if the robot can move in the specified direction (`forward`, `backward`, `left`, `right`) without crashing into a wall/edge; otherwise returns `false`.\n* **The 1-Indexed List System (CRITICAL AP CSP TRAP)**:\n  * In the College Board pseudocode, **all lists are 1-indexed** (the first element is at index `1`, NOT index `0`!).\n  * `aList[i]`: Accesses the element at index `i`.\n  * `INSERT(aList, i, value)`: Inserts `value` at index `i`, shifting subsequent elements to the right.\n  * `APPEND(aList, value)`: Appends `value` to the end of `aList`.\n  * `REMOVE(aList, i)`: Removes the item at index `i`, shifting subsequent elements to the left.\n  * `LENGTH(aList)`: Returns the total number of items currently in `aList`.\n* **Control Flow & Conditional Logic**:\n  * `IF(condition) { <block> }`: Executes `<block>` only if `condition` evaluates to `true`.\n  * `IF(condition) { <block1> } ELSE { <block2> }`: Executes `<block1>` if true; otherwise executes `<block2>`.\n  * `REPEAT n TIMES { <block> }`: Executes `<block>` exactly `n` times.\n  * `REPEAT UNTIL(condition) { <block> }`: Evaluates `condition` *before* each iteration; repeats `<block>` until `condition` becomes `true` (if initially true, loop never executes!).\n  * `FOR EACH item IN aList { <block> }`: Iterates sequentially through every element in `aList`."
      },
      {
        "heading": "5. Software Engineering Methodologies, Version Control & Accessibility (CED 1.3-1.4)",
        "content": "Professional software engineering processes and ethical software lifecycle:\n\n* **Development Methodologies**:\n  * **Waterfall Model**: Linear, sequential design process where each phase (Requirements $\\rightarrow$ Design $\\rightarrow$ Implementation $\\rightarrow$ Verification $\\rightarrow$ Maintenance) must be completed before the next begins. Rigid and poorly suited for shifting user needs.\n  * **Agile / Incremental Model**: Cyclical, sprint-based development that prioritizes rapid prototyping, continuous user testing, and immediate feedback integration.\n* **Version Control Systems (VCS - Git)**:\n  * Facilitates collaboration among distributed development teams:\n  * **Commit**: A recorded, immutable snapshot of the repository at a specific point in time, accompanied by a descriptive message.\n  * **Branching**: Allows developers to work on isolated feature experiments without destabilizing the stable `main` production codebase.\n  * **Merge Conflicts**: Occur when two programmers alter the exact same line of code; requires human review to resolve competing edits.\n* **Universal Usability & Accessibility**:\n  * Software must be designed inclusively for users with diverse physical, sensory, and cognitive abilities:\n  * High-contrast color palettes for color-blind users; screen-reader accessible alternative text (`alt` attributes) for visual assets.\n  * Closed captioning for audio media and keyboard navigation for users unable to operate a pointing device."
      }
    ],
    "workedExamples": [
      {
        "title": "Identifying Logic Errors in Iterative Code",
        "topicRef": "CED 1.4 Identifying and Correcting Errors",
        "question": "A programmer writes a loop intended to calculate the average of 5 quiz scores stored in a list `scores`: `sum <- 0; FOR EACH val IN scores { sum <- sum + val }; average <- sum / 4`. Identify the error type and provide the correction.",
        "solutionSteps": [
          "Step 1: Trace the code execution: The loop correctly sums all elements in the list `scores`.",
          "Step 2: Examine the average calculation: The sum is divided by 4 instead of the actual list length (5).",
          "Step 3: Classify error: The program runs without crashing, but calculates an inflated mathematical result $\\implies$ **Logic Error**.",
          "Step 4: Provide correction: `average <- sum / LENGTH(scores)` or `average <- sum / 5`."
        ],
        "finalAnswer": "Logic Error; The divisor should be 5 (or `LENGTH(scores)`) rather than 4.",
        "apScoringTip": "Always use dynamic list length `LENGTH(list)` rather than hardcoding numbers so the code adapts to lists of any size."
      }
    ],
    "diagrams": [
      {
        "id": "csp_dev_cycle",
        "title": "Iterative Software Development Lifecycle",
        "subtitle": "4 Cyclic Stages of Engineering (Investigate, Design, Prototype, Test)",
        "type": "csp_dev_cycle",
        "description": "Cyclical flowchart showing non-linear movement between investigating requirements, designing algorithms, prototyping modules, and iterative testing/debugging with feedback loops.",
        "takeaway": "Software development is iterative and non-linear: Testing uncovers new requirements that cycle back to earlier investigation and design phases."
      }
    ],
    "commonTraps": [
      "Assuming syntax errors happen while the program is running. Syntax errors prevent code from compiling or starting at all.",
      "Thinking comments affect program execution speed. Comments are completely stripped out by compilers/interpreters and do not impact runtime performance.",
      "Confusing user interface (UI) with software functionality. A beautiful UI cannot compensate for flawed algorithmic logic."
    ],
    "cramSheet": [
      "Iterative design: Investigate $\\rightarrow$ Design $\\rightarrow$ Prototype $\\rightarrow$ Test.",
      "Syntax error = grammar mistake; Runtime error = crash during execution; Logic error = runs but wrong output.",
      "Pair programming: Driver writes code, Navigator reviews and plans.",
      "Test cases must include boundary values and invalid inputs."
    ]
  },
  {
    "unitId": "u2",
    "unitNumber": 2,
    "title": "Data Representation and Information",
    "examWeight": "17%–22% of AP Exam",
    "bigIdea": "All digital data is represented as binary bits (0s and 1s). Abstraction layers translate low-level bits into numbers, text, images, and sound.",
    "keyTheorems": [
      {
        "name": "Binary and Hexadecimal Number Systems",
        "conditions": "Representing integers in base-2, base-10, and base-16.",
        "conclusion": "A binary bit has 2 states ($0, 1$); an 8-bit byte can represent $2^8 = 256$ distinct values ($0\\text{–}255$). Hexadecimal (base-16) uses symbols $0\\text{–}9$ and $A\\text{–}F$, where 1 hex digit cleanly represents 4 binary bits (a nibble).",
        "apTip": "Overflow errors occur when an integer calculation exceeds the maximum value representable by the allocated number of bits (e.g. adding 1 to 255 in an 8-bit unsigned integer rolls over to 0)."
      },
      {
        "name": "Lossless vs. Lossy Data Compression",
        "conditions": "Reducing the file size of digital media for storage and transmission.",
        "conclusion": "Lossless compression reduces file size without losing ANY original data; the file can be reconstructed bit-for-bit (e.g. ZIP, PNG, text files). Lossy compression permanently discards imperceptible data to achieve massive file size reductions (e.g. JPEG, MP3, MP4).",
        "apTip": "Never use lossy compression on text files or medical images where every single character and pixel is vital!"
      }
    ],
    "formulas": [
      {
        "name": "Binary Representation Range",
        "latex": "N \\text{ bits} \\implies 2^N \\text{ unique values } (0 \\text{ to } 2^N - 1)",
        "explanation": "Each additional bit doubles the number of representable values."
      }
    ],
    "sections": [
      {
        "heading": "1. Binary to Decimal Conversion Master Table",
        "content": "Positional powers of 2 for 8-bit binary conversions:\n\n| Place Value | $2^7$ | $2^6$ | $2^5$ | $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| **Decimal Weight** | **128** | **64** | **32** | **16** | **8** | **4** | **2** | **1** |\n| **Bit Pattern** | 1 | 0 | 1 | 0 | 0 | 1 | 1 | 0 |\n\n$$\\text{Decimal Value} = 128 + 32 + 4 + 2 = 166$$\n\n*Analog to Digital Conversion*:\n- **Sampling**: Measuring an analog signal at regular time intervals.\n- **Quantization**: Converting sampled measurements into discrete binary values. Higher sampling rate $\\implies$ higher fidelity digital recreation."
      },
      {
        "heading": "2. Analog vs. Digital Sampling, Overflow & Compression (CED 2.1-2.2)",
        "content": "Data digitization, numeric limits, and compression mechanics:\n\n* **Analog to Digital Conversion (Sampling)**:\n  * **Analog Data**: Continuous values that change smoothly over time (sound waves, light intensities).\n  * **Digital Data**: Discrete binary approximations created by **sampling** analog signals at fixed time intervals.\n  * **Sampling Rate**: Higher sampling rates and greater bit depths produce higher-fidelity digital representations at the expense of larger file sizes.\n* **Integer Overflow Errors**:\n  * Occurs when an arithmetic calculation produces a number larger than the maximum integer representable with the allocated bits (e.g. an 8-bit unsigned integer maxes out at $2^8 - 1 = 255$; adding $1$ rolls over to $0$!).\n* **Lossless vs. Lossy Data Compression**:\n  * **Lossless Compression**: Reversibly compresses data with ZERO loss of information (e.g. Run-Length Encoding, PNG, ZIP). Required for executable code, legal text, and medical imaging.\n  * **Lossy Compression**: Irreversibly discards imperceptible data (e.g. JPEG, MP3, MP4). Dramatically reduces file size but original uncompressed file cannot be perfectly reconstructed."
      },
      {
        "heading": "3. Binary, Hexadecimal & Integer Overflow Mechanics (CED 2.1–2.2)",
        "content": "Digital computers represent all data using binary electrical states ($0$ and $1$):\n- **Base Conversions:**\n  - **Binary (Base 2):** Place values are powers of 2 ($128, 64, 32, 16, 8, 4, 2, 1$). Binary `10110101` $= 128 + 32 + 16 + 4 + 1 = 181_{10}$.\n  - **Hexadecimal (Base 16):** Digits $0-9$ and $A-F$ ($A=10, B=11, C=12, D=13, E=14, F=15$). Each hex digit corresponds to exactly **4 binary bits** (a nibble):\n    $$\\text{Hex } 2B = 0010 \\; 1011_2 = (2 \\times 16) + 11 = 43_{10}$$\n- **Bit Allocation & Integer Overflow:**\n  - With $n$ bits, you can represent exactly $2^n$ distinct unique states, spanning integers from $0$ to $2^n - 1$.\n  - 8 bits: $2^8 = 256$ states (range 0 to 255).\n  - **Overflow Error:** Occurs when an arithmetic result exceeds the fixed number of allocated bits (e.g. adding 1 to 255 in an 8-bit register wraps to 0).\n- **Roundoff / Precision Error:** Floating-point numbers cannot represent some fractional decimal values (like $0.1$ or $1/3$) with exact precision in binary, resulting in tiny cumulative rounding discrepancies."
      },
      {
        "heading": "4. Analog-to-Digital Sampling & Compression Algorithms (CED 2.3–2.4)",
        "content": "Digitizing continuous real-world phenomena and managing file sizes:\n- **Analog vs. Digital Representation:**\n  - Analog signals are continuous physical waves (sound, light, voltage).\n  - Digital representations sample analog data at discrete intervals.\n  - **Sampling Rate:** Higher sampling rates capture audio/image waves more faithfully to reality, but produce significantly larger file sizes.\n- **Lossless vs. Lossy Data Compression:**\n  - **Lossless Compression:**\n    - Reduces file size without discarding any data.\n    - The original file can be reconstructed bit-for-bit with $100\\%$ precision.\n    - Used where accuracy is mandatory (text documents, executable code, medical images, ZIP, PNG).\n    - Techniques: Run-Length Encoding (RLE: \"AAAABBB\" $\\to$ \"4A3B\"), Huffman coding trees.\n  - **Lossy Compression:**\n    - Achieves much higher compression ratios by irreversibly discarding imperceptible data (e.g. sound frequencies outside human hearing, slight color nuances).\n    - The original data cannot be fully restored!\n    - Used for media streaming (JPEG, MP3, MP4)."
      },
      {
        "heading": "4. Binary Arithmetic, Hexadecimal Conversions & Integer Overflow (CED 2.1)",
        "content": "The mathematical architecture of digital data storage and fixed-width boundaries:\n\n* **Number Base Conversions**:\n  * **Binary (Base 2)**: Uses digits `0` and `1`. Place values are powers of two ($2^7=128, 2^6=64, 2^5=32, 2^4=16, 2^3=8, 2^2=4, 2^1=2, 2^0=1$).\n    * Converting Binary `10110101_2` to Decimal: $1(128) + 0(64) + 1(32) + 1(16) + 0(8) + 1(4) + 0(2) + 1(1) = 181_{10}$.\n  * **Hexadecimal (Base 16)**: Uses digits `0–9` and letters `A–F` ($A=10, B=11, C=12, D=13, E=14, F=15$).\n    * Each hexadecimal digit corresponds exactly to a 4-bit binary \"nibble\" ($2^4=16$):\n      * Example: Convert `1101 1010_2` $\\rightarrow$ `1101` is $13$ (`D`), `1010` is $10$ (`A`) $\\implies$ `DA_{16}`.\n* **Fixed-Width Representation & Integer Overflow**:\n  * Computer memory stores integers in fixed-bit slots (e.g., 8-bit, 32-bit, or 64-bit registers).\n  * An 8-bit unsigned integer can represent values from $0$ to $2^8 - 1 = 255$.\n  * **Integer Overflow Error**: Occurs when a mathematical calculation produces a numerical value that exceeds the maximum representable capacity of the allocated bit width.\n    * Adding `1` to an 8-bit register holding `11111111` ($255$) yields `100000000` ($256$). The 9th bit is discarded, wrapping the value around to `00000000` ($0$)!\n    * *Historical Catastrophe*: In 1996, the European Space Agency's Ariane 5 rocket exploded 37 seconds after liftoff because a 64-bit floating-point velocity was converted into a 16-bit signed integer, triggering an unhandled overflow exception."
      },
      {
        "heading": "5. Digital Media Encoding, Lossy vs. Lossless Compression & Metadata (CED 2.2-2.3)",
        "content": "How physical analog phenomena are digitized, compressed, and cataloged:\n\n* **Analog-to-Digital Conversion (Sampling)**:\n  * Natural analog signals (sound waves, continuous light) are infinite and continuous.\n  * Digital representations approximate analog reality through **sampling** — measuring signal values at discrete intervals.\n  * **Sampling Rate**: The frequency of measurements per second (CD audio samples at $44.1\\text{ kHz}$). Higher sampling rates yield higher fidelity but larger file sizes.\n* **Image Representation (RGB Color Model)**:\n  * Images are composed of a two-dimensional grid of **pixels**.\n  * Each pixel is represented by three color channels: Red, Green, and Blue (RGB), typically stored using 8 bits per channel ($0$ to $255$).\n  * Total bit depth per pixel: $8 + 8 + 8 = 24$ bits ($3$ bytes), allowing $2^{24} = 16,777,216$ distinct colors.\n* **Lossless vs. Lossy Data Compression**:\n  * **Lossless Compression**:\n    * Algorithms reduce file size *without losing a single bit of original information*. Decompression reconstructs the exact original file.\n    * Examples: **Run-Length Encoding (RLE)** (e.g., storing \"WWWWWWBB\" as \"6W2B\"), ZIP archives, PNG, and FLAC audio.\n    * Ideal for text documents, executable code, and medical imaging where zero data corruption can be tolerated.\n  * **Lossy Compression**:\n    * Algorithms discard redundant or humanly imperceptible data to achieve massive file size reductions ($90\\%$ smaller).\n    * Discarded data is permanently lost and can NEVER be recovered upon decompression.\n    * Examples: JPEG images (discards subtle color variations human eyes cannot detect), MP3 audio (removes frequencies beyond human auditory range via psychoacoustics), MP4 video.\n* **Digital Metadata**:\n  * **Data about data**: Descriptive information bundled inside digital files that describes its creation, structure, or context.\n  * Examples: In a photograph, metadata includes GPS latitude/longitude, timestamp, camera aperture, shutter speed, and device serial number.\n  * Metadata enables rapid indexing and search, but poses severe privacy risks if users inadvertently publish location coordinates."
      }
    ],
    "workedExamples": [
      {
        "title": "Binary Conversion and Bit Capacity Calculation",
        "topicRef": "CED 2.1 Binary Numbers",
        "question": "A computer system uses 6 bits to represent user IDs. (a) What is the maximum number of unique users that can be represented? (b) Convert the binary number `110101` to decimal.",
        "solutionSteps": [
          "Step 1: Calculate unique values with 6 bits: $2^6 = 64$ distinct IDs (from 0 to 63).",
          "Step 2: Convert `110101` to decimal using powers of 2:",
          "- $1 \\times 2^5 = 32$",
          "- $1 \\times 2^4 = 16$",
          "- $0 \\times 2^3 = 0$",
          "- $1 \\times 2^2 = 4$",
          "- $0 \\times 2^1 = 0$",
          "- $1 \\times 2^0 = 1$",
          "Step 3: Sum values: $32 + 16 + 0 + 4 + 0 + 1 = 53$."
        ],
        "finalAnswer": "(a) 64 unique users; (b) Binary `110101` = Decimal 53.",
        "apScoringTip": "Remember that $n$ bits can represent numbers from $0$ to $2^n - 1$."
      }
    ],
    "diagrams": [
      {
        "id": "csp_analog_sampling",
        "title": "Analog to Digital Sampling & Quantization",
        "subtitle": "Continuous Waves vs Discrete Binary Approximations",
        "type": "csp_analog_sampling",
        "description": "Continuous analog wave sampled at discrete time intervals. Shows quantization levels and how sampling rate impacts digital reconstruction fidelity.",
        "takeaway": "Analog signals are continuous; digital data is a discrete binary approximation. Sampling frequency and bit depth determine reproduction quality and file size."
      }
    ],
    "commonTraps": [
      "Thinking lossy compression allows exact file reconstruction. Discarded bits are gone forever; a lossy file cannot be restored to original quality.",
      "Confusing overflow errors with round-off errors. Overflow occurs when an integer is too large for the allocated bits; round-off occurs with floating-point decimals (e.g. $0.1 + 0.2 = 0.30000000000000004$).",
      "Forgetting that adding 1 bit DOUBLES the capacity. Going from 8 bits to 9 bits doubles capacity from 256 to 512, not just plus 1."
    ],
    "cramSheet": [
      "$N$ bits represent $2^N$ unique values ($0$ to $2^N - 1$).",
      "Lossless: Exact reconstruction, smaller compression ratio (ZIP, PNG, text).",
      "Lossy: Discards data permanently, huge compression ratio (JPEG, MP3, MP4).",
      "Metadata is \"data about data\" (file size, creation date, GPS coordinates, resolution)."
    ]
  },
  {
    "unitId": "u3",
    "unitNumber": 3,
    "title": "Algorithms and Programming",
    "examWeight": "30%–35% of AP Exam",
    "bigIdea": "Algorithms are implemented using sequencing, selection, and iteration. Procedural abstraction manages complexity through reusable parameter-driven functions.",
    "keyTheorems": [
      {
        "name": "The 3 Building Blocks of All Algorithms",
        "conditions": "Any computable algorithm in any programming language.",
        "conclusion": "Every algorithm can be constructed using exclusively: (1) Sequencing (executing steps in sequential order), (2) Selection (conditional branching using `IF-ELSE`), and (3) Iteration (repetition using `REPEAT-TIMES` or `REPEAT-UNTIL`).",
        "apTip": "Master the College Board Pseudocode: List indexing starts at 1, NOT 0! `list[1]` refers to the very first item in the list!"
      },
      {
        "name": "Linear Search vs. Binary Search Efficiency",
        "conditions": "Searching for a target element in a list of size $n$.",
        "conclusion": "Linear search inspects elements sequentially ($O(n)$ time); works on unsorted lists. Binary search repeatedly divides the search interval in half ($O(\\log_2 n)$ time); REQUIRES the list to be sorted in advance.",
        "apTip": "Searching a list of 1,000,000 items takes at most 20 comparisons with binary search ($2^{20} > 1,000,000$), but up to 1,000,000 comparisons with linear search!"
      }
    ],
    "formulas": [
      {
        "name": "Binary Search Comparisons",
        "latex": "\\text{Max Comparisons} = \\lceil \\log_2(n) \\rceil",
        "explanation": "Doubling the list size adds only 1 additional comparison."
      }
    ],
    "sections": [
      {
        "heading": "1. AP Pseudocode Reference Quick Guide",
        "content": "Key College Board pseudo-language syntax:\n\n- **Assignment**: `a <- 5` assigns value 5 to variable `a`.\n- **Lists (1-Indexed!)**:\n  - `list[1]` is the first element.\n  - `APPEND(list, value)` adds value to the end.\n  - `INSERT(list, i, value)` shifts items right and places value at index `i`.\n  - `REMOVE(list, i)` removes item at index `i` and shifts remaining items left.\n  - `LENGTH(list)` returns total number of elements.\n- **Loops**:\n  - `REPEAT n TIMES { ... }` repeats body exactly $n$ times.\n  - `REPEAT UNTIL (condition) { ... }` repeats until condition evaluates to `true`.\n  - `FOR EACH item IN list { ... }` traverses each element sequentially.\n- **Conditionals & Modulo**:\n  - `a MOD b` returns remainder of integer division (e.g. `14 MOD 5` evaluates to 4). If `n MOD 2 = 0`, $n$ is even!"
      },
      {
        "heading": "2. Procedural Abstraction, Complexity & Undecidability (CED 3.7-3.9)",
        "content": "Algorithmic design theory, efficiency, and computational limits:\n\n* **Procedural Abstraction**:\n  * Packaging a sequence of instructions into a reusable function/procedure with parameters.\n  * **Benefits**: Code reuse, reduced complexity, easier debugging, and modular program development. The caller only needs to know **WHAT** the procedure does, not **HOW** it achieves it.\n* **Algorithmic Efficiency & Heuristics**:\n  * **Linear Time ($O(N)$)**: Execution time scales directly proportional to input size (e.g. linear search on unsorted list).\n  * **Logarithmic Time ($O(\\log N)$)**: Execution time scales logarithmically by halving remaining search space each step (e.g. binary search on sorted list).\n  * **Heuristics**: Approximate problem-solving strategies used when an optimal exact solution requires unreasonable exponential time ($2^N$ or $N!$, such as the Traveling Salesperson Problem).\n* **Undecidable Problems**:\n  * A computational problem for which no algorithm can EVER be constructed that is guaranteed to provide a correct yes-or-no answer for all possible inputs.\n  * **The Halting Problem (Alan Turing)**: It is mathematically impossible to write a general program that can determine whether any arbitrary program will finish running or loop forever!"
      },
      {
        "heading": "3. Algorithm Building Blocks & Robot Grid Traversal Pseudocode (CED 3.1–3.4)",
        "content": "Every computer algorithm is constructed from three fundamental control structures:\n1. **Sequencing:** Executing instructions in exact sequential order, one after another.\n2. **Selection:** Making branching decisions using Boolean conditions (`IF (condition)`, `ELSE`).\n3. **Iteration:** Repeating instructions a specified number of times (`REPEAT n TIMES`) or until a condition changes (`REPEAT UNTIL (condition)`).\n- **AP Exam Robot Grid Questions:**\n  - Robot occupies a 2D grid facing North, South, East, or West.\n  - Commands: `MOVE_FORWARD()`, `ROTATE_LEFT()`, `ROTATE_RIGHT()`, `CAN_MOVE(direction)`.\n  - **Trap:** `CAN_MOVE(forward)` tests if the cell directly ahead is free of walls/obstacles; if false, calling `MOVE_FORWARD()` crashes the program!\n- **Modulo Operator (`MOD`):**\n  - `a MOD b` returns the integer remainder of division: `14 MOD 4` equals `2`.\n  - `n MOD 2 = 0` tests if $n$ is even. `n MOD 10` extracts the final units digit."
      },
      {
        "heading": "4. Lists & 1-Based Indexing in AP Pseudocode (CED 3.10–3.12)",
        "content": "List data structures in the College Board AP CSP Pseudocode Reference:\n- **CRITICAL EXAM RULE: 1-BASED INDEXING!**\n  - In AP CSP Pseudocode, list indices begin at **1**, NOT 0 (unlike Java, Python, or C++)!\n  - For list `animals = [\"dog\", \"cat\", \"bird\"]`:\n    - `animals[1]` is `\"dog\"`.\n    - `animals[LENGTH(animals)]` is `\"bird\"`.\n    - Accessing index 0 triggers an out-of-bounds error!\n- **Core Pseudocode List Procedures:**\n  - `INSERT(list, i, value)`: Shifts elements at index $i$ and greater to the right, inserting `value` at position $i$.\n  - `APPEND(list, value)`: Adds `value` as the new final element at the end of the list.\n  - `REMOVE(list, i)`: Removes element at position $i$; shifts all subsequent elements to the left, decreasing length by 1.\n  - `LENGTH(list)`: Returns current count of elements."
      },
      {
        "heading": "5. Search Efficiency, Unreasonable Time & Heuristics (CED 3.7–3.8)",
        "content": "Measuring and classifying algorithmic performance:\n- **Search Complexity:**\n  - **Linear Search:** Checks each element sequentially. Works on unsorted or sorted data. Requires up to $N$ comparisons ($O(N)$).\n  - **Binary Search:** Requires data to be **strictly sorted**! Divides search range in half each step. Requires at most $\\lceil \\log_2 N \\rceil$ comparisons. For $1{,}000{,}000$ items, binary search takes $\\le 20$ comparisons vs. $1{,}000{,}000$ for linear search!\n- **Reasonable vs. Unreasonable Runtimes:**\n  - **Reasonable (Polynomial):** Constant $O(1)$, Logarithmic $O(\\log N)$, Linear $O(N)$, Quadratic $O(N^2)$, Cubic $O(N^3)$.\n  - **Unreasonable (Exponential / Factorial):** $O(2^N)$ or $O(N!)$. Computation time explodes exponentially as $N$ grows, becoming physically impossible to solve in realistic time (e.g. Traveling Salesperson Problem).\n- **Heuristic Solutions:** When an optimal solution cannot be calculated in reasonable time, computer scientists employ a **heuristic**—a practical approximation rule that finds a \"good enough\" solution quickly."
      },
      {
        "heading": "5. Algorithmic Search, Heuristics & Undecidable Problems (CED 3.3-3.4)",
        "content": "Theoretical foundations of algorithmic efficiency, tractability, and computational limits:\n\n* **Search Algorithms Comparison**:\n  * **Linear (Sequential) Search**:\n    * Compares target item with every element in sequence from index 1 to the end.\n    * Works on **both sorted and unsorted lists**.\n    * Worst-case complexity: $O(N)$ comparisons (doubling list size doubles search time).\n  * **Binary Search**:\n    * Repeatedly divides a **pre-sorted list** in half, comparing target with middle element.\n    * **MANDATORY PREREQUISITE**: The list **MUST be sorted**! Binary search fails completely on unsorted collections.\n    * Worst-case complexity: $O(\\log_2 N)$ comparisons. Searching a list of $1,000,000$ items requires at most $\\approx 20$ comparisons ($2^{20} \\approx 1,048,576$).\n* **Tractable vs. Intractable Problems & Heuristics**:\n  * **Tractable Problems**: Problems solvable in polynomial time (e.g., $O(N), O(N^2), O(N^3)$), which computers can solve efficiently for large inputs.\n  * **Intractable Problems**: Problems that theoretically have algorithmic solutions, but require exponential ($O(2^N)$) or factorial ($O(N!)$) time, becoming computationally impossible for large datasets (e.g., The Travelling Salesperson Problem).\n  * **Heuristic Solutions**: When finding the mathematically optimal solution is intractable, programmers use **heuristics** — practical problem-solving rules that find a *\"good enough\" approximate solution* in reasonable polynomial time.\n* **Undecidable Problems & The Halting Problem**:\n  * An **undecidable problem** is a computational question for which it is mathematically impossible to construct an algorithm that always yields a correct yes-or-no answer for every possible input.\n  * **Alan Turing’s Halting Problem (1936)**: Proved no universal algorithm can ever exist that can analyze any arbitrary program and its input to determine whether the program will eventually halt or loop infinitely."
      },
      {
        "heading": "6. Robot Grid Path Traversal Algorithms (CED 3.2 Skill 2.B)",
        "content": "Mastering AP CSP grid navigation, wall detection, and loop termination:\n\n* **Navigating Complex Mazes with Conditional Loops**:\n  * Consider a robot trapped in a grid that must navigate to a target circle without crashing into walls.\n  * Standard Wall-Follower (Right-Hand Rule) Pseudocode:\n    ```text\n    REPEAT UNTIL(goalReached())\n    {\n        IF(CAN_MOVE(right))\n        {\n            ROTATE_RIGHT()\n            MOVE_FORWARD()\n        }\n        ELSE\n        {\n            IF(CAN_MOVE(forward))\n            {\n                MOVE_FORWARD()\n            }\n            ELSE\n            {\n                ROTATE_LEFT()\n            }\n        }\n    }\n    ```\n* **Common Robot MCQ Pitfalls on the AP Exam**:\n  1. **Turning in Place Does Not Move**: `ROTATE_LEFT()` and `ROTATE_RIGHT()` merely change the robot’s orientation; the robot remains in the exact same square!\n  2. **Boundary Wall Crashes**: Executing `MOVE_FORWARD()` when a wall or grid border is directly in front triggers an immediate program crash and terminates execution.\n  3. **Premature Loop Exit**: `REPEAT UNTIL(condition)` checks the condition at the *beginning* of each loop iteration. If the robot enters the goal during intermediate lines inside the block, the loop will continue executing the rest of the block before terminating!"
      },
      {
        "heading": "5. Algorithmic Search, Heuristics & Undecidable Problems (CED 3.3-3.4)",
        "content": "Theoretical foundations of algorithmic efficiency, tractability, and computational limits:\n\n* **Search Algorithms Comparison**:\n  * **Linear (Sequential) Search**:\n    * Compares target item with every element in sequence from index 1 to the end.\n    * Works on **both sorted and unsorted lists**.\n    * Worst-case complexity: $O(N)$ comparisons (doubling list size doubles search time).\n  * **Binary Search**:\n    * Repeatedly divides a **pre-sorted list** in half, comparing target with middle element.\n    * **MANDATORY PREREQUISITE**: The list **MUST be sorted**! Binary search fails completely on unsorted collections.\n    * Worst-case complexity: $O(\\log_2 N)$ comparisons. Searching a list of $1,000,000$ items requires at most $\\approx 20$ comparisons ($2^{20} \\approx 1,048,576$).\n* **Tractable vs. Intractable Problems & Heuristics**:\n  * **Tractable Problems**: Problems solvable in polynomial time (e.g., $O(N), O(N^2), O(N^3)$), which computers can solve efficiently for large inputs.\n  * **Intractable Problems**: Problems that theoretically have algorithmic solutions, but require exponential ($O(2^N)$) or factorial ($O(N!)$) time, becoming computationally impossible for large datasets (e.g., The Travelling Salesperson Problem).\n  * **Heuristic Solutions**: When finding the mathematically optimal solution is intractable, programmers use **heuristics** — practical problem-solving rules that find a *\"good enough\" approximate solution* in reasonable polynomial time.\n* **Undecidable Problems & The Halting Problem**:\n  * An **undecidable problem** is a computational question for which it is mathematically impossible to construct an algorithm that always yields a correct yes-or-no answer for every possible input.\n  * **Alan Turing’s Halting Problem (1936)**: Proved no universal algorithm can ever exist that can analyze any arbitrary program and its input to determine whether the program will eventually halt or loop infinitely."
      },
      {
        "heading": "6. Robot Grid Path Traversal Algorithms (CED 3.2 Skill 2.B)",
        "content": "Mastering AP CSP grid navigation, wall detection, and loop termination:\n\n* **Navigating Complex Mazes with Conditional Loops**:\n  * Consider a robot trapped in a grid that must navigate to a target circle without crashing into walls.\n  * Standard Wall-Follower (Right-Hand Rule) Pseudocode:\n    ```text\n    REPEAT UNTIL(goalReached())\n    {\n        IF(CAN_MOVE(right))\n        {\n            ROTATE_RIGHT()\n            MOVE_FORWARD()\n        }\n        ELSE\n        {\n            IF(CAN_MOVE(forward))\n            {\n                MOVE_FORWARD()\n            }\n            ELSE\n            {\n                ROTATE_LEFT()\n            }\n        }\n    }\n    ```\n* **Common Robot MCQ Pitfalls on the AP Exam**:\n  1. **Turning in Place Does Not Move**: `ROTATE_LEFT()` and `ROTATE_RIGHT()` merely change the robot’s orientation; the robot remains in the exact same square!\n  2. **Boundary Wall Crashes**: Executing `MOVE_FORWARD()` when a wall or grid border is directly in front triggers an immediate program crash and terminates execution.\n  3. **Premature Loop Exit**: `REPEAT UNTIL(condition)` checks the condition at the *beginning* of each loop iteration. If the robot enters the goal during intermediate lines inside the block, the loop will continue executing the rest of the block before terminating!"
      }
    ],
    "workedExamples": [
      {
        "title": "Tracing Robot Grid Traversal Algorithm",
        "topicRef": "CED 3.12 Robot Navigation",
        "question": "A robot starts at (1,1) facing North on a 4x4 grid. The following code executes: `REPEAT 3 TIMES { MOVE_FORWARD(); ROTATE_RIGHT() }`. Describe the robot’s final position and orientation.",
        "solutionSteps": [
          "Step 1: Initial state: Position (1, 1), Facing North.",
          "Step 2: Iteration 1: `MOVE_FORWARD()` moves to (1, 2) facing North; `ROTATE_RIGHT()` turns to face East.",
          "Step 3: Iteration 2: `MOVE_FORWARD()` moves to (2, 2) facing East; `ROTATE_RIGHT()` turns to face South.",
          "Step 4: Iteration 3: `MOVE_FORWARD()` moves to (2, 1) facing South; `ROTATE_RIGHT()` turns to face West.",
          "Step 5: Loop terminates after 3 iterations."
        ],
        "finalAnswer": "Final position is (2, 1); Final orientation is facing West.",
        "apScoringTip": "Draw a small 4x4 grid on scratch paper and physically trace the robot with an arrow at each step to avoid rotation orientation errors."
      }
    ],
    "diagrams": [
      {
        "id": "csp_binary_vs_linear",
        "title": "Linear vs Binary Search Runtime Complexity",
        "subtitle": "O(N) vs O(log₂ N) Growth Curves and Comparison Inset",
        "type": "csp_binary_vs_linear",
        "description": "Comparison of linear search O(N) steep line vs binary search O(log N) logarithmic curve, illustrating dramatic efficiency difference on 1,000,000 element lists.",
        "takeaway": "Binary search runs in logarithmic time O(log₂ N) but STRICTLY requires sorted data. Linear search runs in O(N) and works on unsorted lists."
      }
    ],
    "commonTraps": [
      "Assuming lists in AP CSP start at index 0. On the AP CSP exam, lists are 1-INDEXED: The first item is at `list[1]`!",
      "Using binary search on an unsorted list. Binary search works ONLY if the list is already sorted in advance.",
      "Confusing `REPEAT UNTIL` with `WHILE`. In `REPEAT UNTIL (condition)`, the loop stops when the condition becomes TRUE (in `WHILE`, it stops when FALSE)."
    ],
    "cramSheet": [
      "All algorithms: Sequencing (order), Selection (`IF-ELSE`), Iteration (loops).",
      "AP CSP lists start at index 1! `list[1]` is the first item.",
      "`a MOD b` returns remainder (e.g. `10 MOD 3 = 1`). Even numbers satisfy `x MOD 2 = 0`.",
      "Procedural abstraction: Hides complex logic inside reusable functions with parameters.",
      "Binary search ($O(\\log n)$) requires sorted list; Linear search ($O(n)$) works on any list."
    ]
  },
  {
    "unitId": "u4",
    "unitNumber": 4,
    "title": "Computing Systems and Networks",
    "examWeight": "11%–15% of Exam",
    "bigIdea": "The Internet is a distributed, fault-tolerant network of connected computing devices operating on open protocols (TCP/IP, HTTP, DNS).",
    "keyTheorems": [
      {
        "name": "Fault Tolerance and Redundancy",
        "conditions": "Packet routing across interconnected network nodes.",
        "conclusion": "Redundant network paths ensure the Internet is fault-tolerant: If an individual router or connection fails, packets automatically reroute along alternate pathways without interrupting transmission.",
        "apTip": "Adding redundancy increases reliability, but does NOT necessarily increase bandwidth (transmission speed)!"
      },
      {
        "name": "Packet-Switched Architecture (TCP/IP)",
        "conditions": "Transmitting digital messages across the Internet.",
        "conclusion": "Data is broken into standardized packets containing metadata (sender IP, destination IP, packet sequence number). Packets travel independently along dynamic paths and are reassembled in order at the destination by TCP.",
        "apTip": "IP (Internet Protocol) handles addressing and routing; TCP (Transmission Control Protocol) handles packet sequencing, error checking, and retransmitting lost packets."
      }
    ],
    "formulas": [
      {
        "name": "Network Bandwidth Formula",
        "latex": "\\text{Transmission Time} = \\frac{\\text{File Size (bits)}}{\\text{Bandwidth (bits per second)}}",
        "explanation": "Bandwidth is maximum transfer rate; Latency is travel delay."
      }
    ],
    "sections": [
      {
        "heading": "1. The Internet Protocol Stack Hierarchy",
        "content": "Open protocols governing the global Internet:\n\n| Protocol | Full Name | Primary Network Function |\n| :--- | :--- | :--- |\n| **HTTP / HTTPS** | Hypertext Transfer Protocol (Secure) | Web page transmission between browsers and servers (encrypted with SSL/TLS) |\n| **DNS** | Domain Name System | Translates human-readable domain names (e.g. `google.com`) into numeric IP addresses |\n| **TCP** | Transmission Control Protocol | Breaks data into packets, numbers them, verifies delivery, and reassembles |\n| **UDP** | User Datagram Protocol | Fast, lightweight transmission without packet verification (used in live video streaming and gaming) |\n| **IP** | Internet Protocol | Assigns unique hierarchical numerical addresses to devices and routes packets |"
      },
      {
        "heading": "2. IP Addressing, DNS Hierarchy & Secure Transmission (CED 4.1-4.2)",
        "content": "Core Internet architectures, routing reliability, and protocol standards:\n\n* **IP Addressing Standards**:\n  * **IPv4**: 32-bit addresses formatted as 4 decimal octets (e.g. 192.168.1.1), providing approximately 4.3 billion distinct addresses.\n  * **IPv6**: 128-bit addresses formatted as 8 hexadecimal groups, providing $2^{128}$ addresses (virtually inexhaustible).\n* **Domain Name System (DNS)**:\n  * The decentralized, hierarchical 'phonebook of the Internet' that translates human-readable domain names (e.g. collegeboard.org) into numerical IP addresses.\n* **Secure Protocols**:\n  * **HTTP vs. HTTPS**: HTTP transmits plain text susceptible to eavesdropping; HTTPS uses Transport Layer Security (TLS/SSL) to encrypt all client-server communications.\n* **Net Neutrality**:\n  * The regulatory principle that Internet Service Providers (ISPs) must treat all data packets equally, without throttling, blocking, or charging extra for specific content or services."
      },
      {
        "heading": "3. Beginner Real-World Mental Models & Analogies (Protocols, Packets & Cryptography)",
        "content": "For students encountering networking and security for the first time, these intuitive real-world mental models make abstract protocols immediately tangible:\n\n| Internet / Security Concept | Real-World Beginner Analogy | How the Analogy Directly Maps to the Exam Concept |\n| :--- | :--- | :--- |\n| **Packet-Switched Architecture** | **Tearing a 500-page novel into numbered postcards.** | Instead of mailing a 10-pound book in one piece (circuit switching), you rip out each page, stamp it with the recipient address, return address, and sequence number (\"Page 14 of 500\"), and mail them separately. They take different trucks and flights; some arrive out of order, but the recipient reassembles them perfectly using page numbers. |\n| **TCP (Transmission Control Protocol)** | **Certified Postal Mail with Signed Return Receipt.** | Every single envelope is registered and tracked. The receiver sends back an acknowledgement card (\"Got Page 14!\"). If Page 15 is lost in transit, the sender automatically re-mails another copy before the reader moves ahead. It is 100% reliable, sequential, and error-checked, but involves a small setup handshake delay. |\n| **UDP (User Datagram Protocol)** | **Live Stadium Megaphone or FM Radio Broadcast.** | The announcer shouts plays in real time. Packets fly out continuously without waiting for listeners to confirm receipt. If a gust of wind causes you to miss two words, the announcer doesn't stop or rewind—the game keeps playing! Perfect for live video streaming (Zoom, YouTube Live), voice calls, and multiplayer gaming where speed and low latency matter far more than recovering a dropped pixel. |\n| **DNS (Domain Name System)** | **Your Smartphone Contact List / Phonebook.** | Humans remember names like \"Mom\" or `wikipedia.org`; cell towers and networks only understand numeric strings like `198.35.26.96`. When you type a URL, DNS looks up the phonebook to find the numeric IP address so your computer knows where to dial. |\n| **Routers & Fault Tolerance** | **Waze / Google Maps GPS Traffic Rerouting.** | If a tree falls across Highway 101, your GPS doesn't cancel your entire road trip. It detects the blocked link and instantly recalculates an alternate route through side streets. Even if several individual intersections crash, the overall network stays alive (fault tolerance through redundancy). |\n| **Symmetric Encryption** | **A Heavy Metal Lockbox with One Shared Physical Key.** | Alice puts a secret document into a steel box, locks it with a physical key, and mails the box to Bob. The huge vulnerability: How does Bob get the key? If Alice mails the key, an eavesdropper can intercept it and make a duplicate key. Both parties must share the exact same secret key. |\n| **Asymmetric / Public Key Cryptography** | **An Open Padlock Distributed to the World + One Secret Key.** | Bob buys an open padlock and produces millions of exact copies, freely handing open padlocks to anyone on Earth (**Bob's Public Key**). Alice puts her secret letter in a box, snaps Bob's open padlock shut (**Encryption**), and sends the box over the public courier. Once snapped shut, nobody—not even Alice—can reopen the box! ONLY Bob possesses the unique physical key that unlocks his padlocks (**Bob's Private Key**). Bob decrypts the box at home without ever having to risk mailing a secret key across the network! |"
      },
      {
        "heading": "4. Internet Protocol Stack, Packet Routing & Redundant Fault Tolerance (CED 4.1)",
        "content": "The decentralized, fault-tolerant infrastructure of the global Internet:\n\n* **The Open Architecture of the Internet**:\n  * The Internet is a decentralized global network of interconnected computer networks built on open, non-proprietary protocols established by the Internet Engineering Task Force (IETF).\n  * **Scalability**: The capacity of the network to accommodate exponential growth in devices and traffic without degrading overall system performance.\n* **The IP Addressing Hierarchy**:\n  * Every device connected to the Internet receives an Internet Protocol (IP) address:\n  * **IPv4 (32 bits)**: Formatted as 4 octets ($8$ bits each) separated by dots (e.g., `192.168.1.1`). Provides $2^{32} \\approx 4.3\\text{ billion}$ unique addresses, which have been completely exhausted.\n  * **IPv6 (128 bits)**: Formatted as 8 groups of 4 hexadecimal digits (e.g., `2001:0db8:85a3::8a2e:0370:7334`). Provides $2^{128} \\approx 3.4 \\times 10^{38}$ unique addresses, ensuring infinite scalability for IoT devices.\n* **Packet Switching & Dynamic Routing**:\n  * Data transmitted across the Internet is divided into discrete chunks called **packets**.\n  * Each packet contains:\n    1. **Data Payload**: The actual chunk of content being sent.\n    2. **Metadata Header**: Destination IP address, sender IP address, packet sequence number, and Time-to-Live (TTL).\n  * Packets travel independently across diverse dynamic pathways through intermediary **routers**.\n  * Packets may arrive at the destination out of order, along different routes, or experience latency.\n* **Fault Tolerance & Network Redundancy**:\n  * The Internet is engineered with multiple redundant physical connections between routing nodes.\n  * If a router crashes or a fiber-optic cable is severed, traffic automatically reroutes along alternative paths without service interruption.\n  * **Redundancy** increases reliability and ensures there is no single point of failure."
      },
      {
        "heading": "5. Transport Protocols: TCP vs. UDP & Application Layer Standards (CED 4.2)",
        "content": "The layered communication abstractions connecting applications across the globe:\n\n| Protocol | Full Name | Primary Layer | Operational Physics / Mechanics | AP Exam Trade-offs & Use Cases |\n| :--- | :--- | :--- | :--- | :--- |\n| **TCP** | Transmission Control Protocol | Transport Layer | Connection-oriented; establishes a **Three-Way Handshake** (SYN, SYN-ACK, ACK). Numbers packets sequentially, sends acknowledgments, and retransmits lost packets. | **Guaranteed Delivery & Correct Order**, but higher latency. Used for Web (HTTP), Email (SMTP), and File Transfers (FTP). |\n| **UDP** | User Datagram Protocol | Transport Layer | Connectionless, lightweight; sends packets without establishing a prior connection or verifying receipt (\"fire-and-forget\"). Does not retransmit lost packets. | **Minimal Latency & Maximum Speed**, but no guarantee of delivery or order. Ideal for real-time video streaming, VoIP calls, and multiplayer gaming. |\n| **HTTP / HTTPS** | Hypertext Transfer Protocol (Secure) | Application Layer | Governs how web browsers request and web servers transmit HTML, CSS, images, and API data. HTTPS uses **TLS/SSL encryption** to prevent eavesdropping and tampering. | HTTPS protects user passwords and financial transactions from Man-in-the-Middle attacks. |\n| **DNS** | Domain Name System | Application Layer | Distributed, hierarchical database that translates human-readable domain names (e.g., `www.collegeboard.org`) into machine-routable IP addresses (e.g., `151.101.65.140`). | DNS resolution queries flow hierarchically: Root Servers $\\rightarrow$ TLD (.org) $\\rightarrow$ Authoritative Name Server. |"
      }
    ],
    "workedExamples": [
      {
        "title": "Evaluating Network Fault Tolerance with Router Diagrams",
        "topicRef": "CED 4.2 Fault Tolerance",
        "question": "In a network with 5 routers (A, B, C, D, E), Router A connects to B and C; B connects to D; C connects to D; D connects to E. What is the minimum number of router connection failures required to completely cut off communication between A and E?",
        "solutionSteps": [
          "Step 1: Map all available paths from A to E: Path 1: A $\\rightarrow$ B $\\rightarrow$ D $\\rightarrow$ E; Path 2: A $\\rightarrow$ C $\\rightarrow$ D $\\rightarrow$ E.",
          "Step 2: Identify bottleneck nodes: All paths must pass through Router D to reach Router E.",
          "Step 3: Analyze single connection failures: If connection A-B fails, traffic routes via A-C-D-E. If A-C fails, traffic routes via A-B-D-E.",
          "Step 4: Check connection between D and E: The single link D-E is a single point of failure.",
          "Step 5: Conclude: A failure of just ONE connection (link D-E) or one node (Router D) completely isolates A from E."
        ],
        "finalAnswer": "Minimum 1 failure (the single link between D and E).",
        "apScoringTip": "Trace every path from source to destination. A single point of failure exists wherever all alternate paths converge through a single shared link."
      }
    ],
    "diagrams": [
      {
        "id": "csp_packet_routing",
        "title": "Internet Packet Routing & Redundant Architecture",
        "subtitle": "Fault-Tolerant Dynamic Mesh Topology",
        "type": "csp_packet_routing",
        "description": "Network diagram showing files split into packets traveling along independent redundant router paths from Sender to Receiver host.",
        "takeaway": "The Internet is fault-tolerant: Packets travel independently through redundant paths. If an individual router crashes, packets automatically reroute without breaking the connection."
      }
    ],
    "commonTraps": [
      "Confusing the World Wide Web with the Internet. The Internet is the physical interconnected network hardware; the Web is a collection of hyperlinked pages and content built on top of the Internet using HTTP.",
      "Assuming packets always travel the same path. Packets from the same message travel dynamically along different pathways depending on real-time traffic and router congestion.",
      "Thinking bandwidth equals latency. Bandwidth is how MUCH data fits through the pipe per second; latency is how LONG it takes for a single bit to travel from sender to receiver."
    ],
    "cramSheet": [
      "Fault tolerance: Redundant paths ensure transmission continues if individual routers fail.",
      "TCP: Guarantees reliable packet delivery and ordering. UDP: Fast, no delivery guarantee (streaming).",
      "DNS: Translates domain names to IP addresses (the internet phonebook).",
      "IPv4 uses 32 bits ($2^{32} \\approx 4.3\\text{ billion}$ addresses); IPv6 uses 128 bits ($2^{128}$ addresses)."
    ]
  },
  {
    "unitId": "u5",
    "unitNumber": 5,
    "title": "Impact of Computing",
    "examWeight": "21%–26% of AP Exam",
    "bigIdea": "Computing innovations introduce societal benefits alongside risks regarding cybersecurity, privacy, algorithmic bias, and the digital divide.",
    "keyTheorems": [
      {
        "name": "Symmetric vs. Public Key (Asymmetric) Encryption",
        "conditions": "Encrypting data for secure transmission over untrusted networks.",
        "conclusion": "Symmetric encryption uses a SINGLE shared secret key to encrypt and decrypt (requires secure initial key exchange). Public Key (Asymmetric) encryption uses a mathematically linked pair: A public key known to all (encrypts message) and a private key known only to the recipient (decrypts message).",
        "apTip": "Public key cryptography makes modern e-commerce possible: Anyone can encrypt using your public key, but ONLY YOU can decrypt using your secret private key!"
      },
      {
        "name": "The Digital Divide & Algorithmic Bias",
        "conditions": "Social impacts of technology adoption.",
        "conclusion": "The Digital Divide describes unequal access to computing devices and high-speed internet based on socioeconomic, geographic, or demographic factors. Algorithmic bias occurs when training data reflects historical human prejudices, causing AI algorithms to produce discriminatory outcomes.",
        "apTip": "Computing innovations always involve trade-offs: A technology designed for convenience (e.g. facial recognition) often introduces significant privacy and civil liberty risks."
      }
    ],
    "formulas": [
      {
        "name": "Public Key Encryption Pair",
        "latex": "\\text{Encrypted} = E(\\text{Message}, \\text{Key}_{\\text{Public}}), \\quad \\text{Decrypted} = D(\\text{Encrypted}, \\text{Key}_{\\text{Private}})",
        "explanation": "Private key cannot be reverse-engineered from public key due to one-way mathematical functions."
      }
    ],
    "sections": [
      {
        "heading": "1. Common Cybersecurity Threats & Safeguards",
        "content": "Master key cybersecurity vulnerabilities tested on the AP exam:\n\n- **Phishing**: Fraudulent emails or websites mimicking trusted organizations to trick users into revealing passwords or credit card numbers.\n- **Distributed Denial of Service (DDoS)**: A network of compromised computers (botnet) floods a target web server with billions of requests, overwhelming bandwidth and crashing the service.\n- **Man-in-the-Middle Attack**: An attacker secretly intercepts and relays communications between two parties over insecure public Wi-Fi.\n- **Multifactor Authentication (MFA)**: Requiring two or more distinct categories of credentials:\n  1. Something you *know* (password/PIN).\n  2. Something you *have* (phone authenticator app, hardware key).\n  3. Something you *are* (biometric fingerprint, facial scan)."
      },
      {
        "heading": "2. Data Privacy, Cybersecurity Exploits & The Digital Divide (CED 5.2-5.5)",
        "content": "Social, ethical, and security dimensions of ubiquitous computing:\n\n* **Personally Identifiable Information (PII) & Privacy**:\n  * Data that can directly identify an individual (Social Security number, biometrics, home address, medical history).\n  * Tracking mechanisms: Cookies, browser fingerprinting, and geolocation tracking create detailed user profiles.\n* **Common Cybersecurity Threats**:\n  * **Phishing**: Deceptive emails or websites mimicking trusted entities to trick users into divulging credentials.\n  * **Keylogging**: Malware recording keyboard strokes to capture passwords and sensitive inputs.\n  * **Distributed Denial-of-Service (DDoS)**: Swarming a server with requests from a botnet of infected computers, overwhelming its bandwidth and crashing service.\n  * **Rogue Access Point**: An unauthorized wireless access point giving attackers access to intercept network traffic.\n* **Multi-Factor Authentication (MFA)**:\n  * Significantly enhances security by requiring verification across two or more categories:\n    1. Something you **know** (password, PIN).\n    2. Something you **have** (smartphone authenticator app, physical security key).\n    3. Something you **are** (fingerprint, facial recognition).\n* **The Digital Divide**:\n  * Unequal socioeconomic and geographic access to high-speed Internet infrastructure, hardware, and digital literacy."
      },
      {
        "heading": "3. The Digital Divide, Crowdsourcing & Citizen Science (CED 5.1–5.2)",
        "content": "Socioeconomic, geographical, and ethical dimensions of technology adoption:\n- **The Digital Divide:**\n  - The systemic gap between demographics and regions that have access to modern high-speed internet and computing devices vs. those with limited or zero access.\n  - Influenced by socioeconomic status, geographic isolation (rural vs. urban infrastructure), and age.\n- **Crowdsourcing & Citizen Science:**\n  - Harnessing contributions from thousands of distributed internet volunteers to solve massive challenges:\n  - **Distributed Computing:** Folding@home uses volunteer home computers during idle time to simulate protein folding for biomedical research.\n  - **Citizen Science:** Everyday citizens upload local environmental observations (e.g. iNaturalist bird sightings), providing massive datasets that professional scientists could never gather alone."
      },
      {
        "heading": "4. Cybersecurity, Cryptography & Privacy Protections (CED 5.3–5.6)",
        "content": "Threat vectors and cryptographic defenses in modern computing:\n- **Common Cybersecurity Attack Vectors:**\n  - **Phishing:** Deceptive emails mimicking legitimate institutions to trick users into revealing passwords or credentials. Targeted phishing directed at high-profile executives is called *spear phishing*.\n  - **Keylogger:** Spyware that secretly records every keystroke, transmitting passwords and credit card numbers to attackers.\n  - **Rogue Access Point:** An unauthorized wireless router set up by an attacker to intercept (\"sniff\") unencrypted network traffic.\n- **Symmetric vs. Public-Key (Asymmetric) Cryptography:**\n  - **Symmetric Encryption:** Uses a single shared secret key to both encrypt and decrypt data. Secure key distribution is a major vulnerability.\n  - **Public-Key (Asymmetric) Encryption:** Solves the key exchange problem using two mathematically linked keys:\n    - **Public Key:** Freely distributed to anyone; used to **encrypt** data.\n    - **Private Key:** Kept strictly confidential by the recipient; used to **decrypt** data.\n- **Multi-Factor Authentication (MFA):** Requires at least two distinct authentication factors: something you know (password), something you have (phone/token), or something you are (biometrics)."
      },
      {
        "heading": "4. Modern Cybersecurity Attack Vectors & Defense Architecture (CED 5.2-5.3)",
        "content": "Common security threats compromising digital systems and defensive countermeasures:\n\n* **Malicious Software (Malware)**:\n  * **Virus**: Malicious code that attaches itself to legitimate host files and replicates across files when executed.\n  * **Worm**: Self-replicating standalone program that exploits network vulnerabilities to spread autonomously across connected devices without human interaction.\n  * **Trojan Horse**: Malware disguised as benign, desirable software (e.g., a free game or utility) that secretly executes a malicious payload upon installation.\n  * **Ransomware**: Encrypts the victim’s files or locks system access, demanding monetary ransom (usually cryptocurrency) for the decryption key.\n  * **Keylogger**: Spyware that stealthily records every keystroke made by the user to harvest passwords, credit card numbers, and private messages.\n* **Social Engineering & Network Exploits**:\n  * **Phishing**: Fraudulent emails, messages, or cloned websites masquerading as trustworthy entities (e.g., a bank) to deceive users into divulging login credentials.\n  * **Spear Phishing**: Highly tailored, targeted phishing attacks directed at specific high-profile individuals within an organization.\n  * **Denial of Service (DoS)**: Overwhelming a server with an avalanche of bogus traffic requests to exhaust its bandwidth and crash the service for legitimate users.\n  * **Distributed Denial of Service (DDoS)**: Coordinating thousands of compromised zombie devices (**Botnet**) across the globe to simultaneously flood a single target server.\n  * **Man-in-the-Middle (MitM) Attack**: An attacker intercepts and decrypts communication between two parties on an insecure public Wi-Fi network.\n* **Defensive Cybersecurity Protocols**:\n  * **Multi-Factor Authentication (MFA)**: Requires at least two independent authentication factors before granting access:\n    1. *Something you know* (password, PIN).\n    2. *Something you have* (hardware security key, smartphone authenticator app token).\n    3. *Something you are* (biometric fingerprint, facial recognition)."
      },
      {
        "heading": "5. Cryptography: Symmetric vs. Asymmetric Public-Key Encryption (CED 5.4)",
        "content": "The mathematical mechanics of encrypting digital communications across open channels:\n\n* **The Cryptographic Dilemma**:\n  * How can two parties communicate securely over an insecure public channel (the Internet) without an eavesdropper deciphering the message?\n* **Symmetric Key Encryption**:\n  * The **same single secret key** is used to both *encrypt* the plaintext into ciphertext and *decrypt* the ciphertext back into plaintext.\n  * Example: Advanced Encryption Standard (AES-256).\n  * **The Fundamental Vulnerability**: **Key Exchange Problem**. How do the sender and receiver securely share the secret key in the first place without someone intercepting it?\n* **Asymmetric Public-Key Encryption (The Modern Foundation of Web Security)**:\n  * Employs a mathematically linked **pair of complementary keys**:\n    1. **Public Key**: Shared openly with the world; anyone can use it to *encrypt* messages intended for the recipient.\n    2. **Private Key**: Kept strictly secret by the recipient; the *only* key capable of *decrypting* messages encoded with the corresponding public key.\n  * **One-Way Mathematical Trapdoors**:\n    * Built on mathematical operations that are trivial to calculate in one direction, but computationally intractable to reverse without the secret private key (e.g., multiplying two massive prime numbers is easy, but factoring their 600-digit product into the original primes takes supercomputers thousands of years).\n* **Digital Signatures & Certificate Authorities (CAs)**:\n  * **Digital Certificate**: A cryptographically signed digital identity document issued by a trusted third-party **Certificate Authority (CA)** (e.g., Let's Encrypt, DigiCert).\n  * Verifies the authenticity of a website’s public key, preventing attackers from spoofing legitimate banking or shopping websites."
      },
      {
        "heading": "6. The Digital Divide, Algorithmic Bias & Crowdsourcing Ethics (CED 5.5-5.6)",
        "content": "Socioeconomic, cultural, and ethical dilemmas arising from global computing:\n\n* **The Digital Divide**:\n  * The socioeconomic gap between demographics and geographic regions that have access to modern high-speed broadband and computing technology, and those that do not.\n  * Driven by income disparity, rural geographic infrastructure deficits, and educational limitations.\n  * Perpetuates economic inequality in employment opportunities, remote education, and civic engagement.\n* **Algorithmic Bias**:\n  * Systematic, recurring errors in computer software that produce unfair outcomes, privileging one demographic over another.\n  * **Root Causes**:\n    1. **Biased Training Datasets**: Machine learning algorithms trained on historical data inherently learn, amplify, and automate existing human social prejudices (e.g., facial recognition systems trained predominantly on lighter-skinned male faces demonstrate drastically higher error rates for women of color).\n    2. **Flawed Feature Selection**: Using predictive variables that serve as proxies for race or income (e.g., zip codes in credit scoring or bail-risk assessment algorithms).\n* **Crowdsourcing & Citizen Science**:\n  * Mobilizing large, distributed populations of internet users to solve complex data-intensive problems collectively:\n  * **Citizen Science**: Ordinary citizens contribute computational power or observational data to scientific research (e.g., *Foldit*, where gamers solve complex protein-folding structures; *eBird*, where birdwatchers map global avian migration).\n  * **Crowdfunding**: Small monetary contributions from large online communities pooling resources to finance creative projects or medical emergencies."
      }
    ],
    "workedExamples": [
      {
        "title": "Analyzing Public Key Encryption Workflows",
        "topicRef": "CED 5.4 Cybersecurity & Encryption",
        "question": "Alice wants to send an encrypted private message to Bob using public key cryptography. Whose public key does Alice use to encrypt the message, and whose private key is used by Bob to decrypt it?",
        "solutionSteps": [
          "Step 1: Understand public key cryptography: Each person has a public key (open to the world) and a private key (kept secret).",
          "Step 2: Encryption step: Alice wants only Bob to be able to read the message. She must lock the message with **Bob’s Public Key**.",
          "Step 3: Transmission: The encrypted ciphertext is sent across the open internet.",
          "Step 4: Decryption step: Only the corresponding private key can unlock the message. Bob uses **Bob’s Private Key** to decrypt and read the message."
        ],
        "finalAnswer": "Alice encrypts using Bob’s Public Key; Bob decrypts using Bob’s Private Key.",
        "apScoringTip": "Remember: You always encrypt with the RECIPIENT’S public key so only the recipient’s private key can open it."
      }
    ],
    "diagrams": [
      {
        "id": "csp_public_key",
        "title": "Public-Key (Asymmetric) Encryption Model",
        "subtitle": "Public Key Encryption vs Private Key Decryption",
        "type": "csp_public_key",
        "description": "Alice encrypts plaintext using Bob’s Public Key. Ciphertext travels over insecure Internet. Only Bob’s secret Private Key can decrypt the message.",
        "takeaway": "Always encrypt using the recipient’s PUBLIC key; only the recipient’s matching PRIVATE key can decrypt it. Private keys are never transmitted."
      }
    ],
    "commonTraps": [
      "Assuming open-source software is inherently less secure than proprietary software. Open-source code allows thousands of independent security researchers to inspect, audit, and patch vulnerabilities.",
      "Confusing the digital divide with lack of computer literacy. The digital divide is primarily an infrastructure and socioeconomic access barrier (lack of broadband or hardware).",
      "Thinking strong passwords eliminate all risk. Passwords can still be stolen via phishing, data breaches, or keyloggers; Multifactor Authentication (MFA) is required for true security."
    ],
    "cramSheet": [
      "Public key cryptography: Encrypt with recipient’s public key; decrypt with recipient’s private key.",
      "DDoS: Botnets flood a server with requests to crash it.",
      "Phishing: Deceptive emails tricking users into revealing sensitive credentials.",
      "MFA requires 2+ of: Something you know (password), have (phone/token), or are (fingerprint).",
      "Creative Commons licenses allow creators to grant public permission to share and use their creative work under specified conditions."
    ]
  }
];
