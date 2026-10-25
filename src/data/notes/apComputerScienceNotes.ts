import { APUnitNote } from './types';

export const AP_CSA_NOTES: APUnitNote[] = [
  {
    "unitId": "u1",
    "unitNumber": 1,
    "title": "Primitive Types",
    "examWeight": "2.5%–5% of AP Exam",
    "bigIdea": "Data in Java is represented by strongly-typed primitive memory allocations, integer arithmetic, and strict casting hierarchies.",
    "keyTheorems": [
      {
        "name": "Integer Division and Truncation Rule",
        "conditions": "Division between two `int` primitive types in Java.",
        "conclusion": "When two integers are divided (e.g. `5 / 2`), Java performs integer division, discarding the fractional decimal component entirely rather than rounding (evaluates to `2`). If either operand is a `double` (e.g. `5.0 / 2`), the result is promoted to a `double` (`2.5`).",
        "apTip": "To avoid truncation, explicitly cast one operand: `(double) 5 / 2` evaluates to `2.5`. Notice that `(double)(5 / 2)` first truncates to `2` and then casts to `2.0`!"
      },
      {
        "name": "Operator Precedence and Compound Assignment",
        "conditions": "Evaluating compound arithmetic expressions.",
        "conclusion": "Precedence order: (1) Parentheses `()`, (2) Postfix increment `++`/`--`, (3) Unary operators, (4) Multiplicative `*`, `/`, `%`, (5) Additive `+`, `-`, (6) Assignment `=`, `+=`, `-=`, `*=`, `/=`, `%=`. The modulus operator `%` returns the integer remainder of division.",
        "apTip": "`7 % 10` is `7`. Any number `% 10` extracts the rightmost unit digit. `x % 2 == 0` tests if `x` is even."
      }
    ],
    "formulas": [
      {
        "name": "Integer Range and Min/Max Constants",
        "latex": "-2^{31} \\le \\text{int} \\le 2^{31} - 1 \\implies [-2147483648, 2147483647]",
        "explanation": "Available via `Integer.MIN_VALUE` and `Integer.MAX_VALUE`. Exceeding this boundary causes silent integer overflow."
      }
    ],
    "sections": [
      {
        "heading": "1. Primitive Types vs. Reference Types in Java",
        "content": "Data representation in Java virtual machine (JVM):\n\n| Data Type | Memory Size | Default Value | Value Range / Description |\n| :--- | :--- | :--- | :--- |\n| **`int`** | 32 bits (4 bytes) | `0` | $-2^{31}$ to $2^{31}-1$ (standard integers) |\n| **`double`** | 64 bits (8 bytes) | `0.0` | 64-bit IEEE 754 floating-point decimals |\n| **`boolean`** | 1 bit | `false` | Truth values: `true` or `false` |\n| **`char`** | 16 bits (2 bytes) | `'\\u0000'` | Single 16-bit Unicode character (e.g. `'A'`) |\n| **Reference** | 64-bit address | `null` | Points to an object on the heap (e.g. `String`, `Scanner`) |"
      },
      {
        "heading": "2. Arithmetic Expressions, Modulo Arithmetic & Type Casting (CED 1.3-1.5)",
        "content": "Mastering Java numeric evaluations and casting rules on the AP exam:\n\n* **Integer Division & Truncation**:\n  * Any operation between two integers performs **integer division**, truncating all decimal places towards zero:\n    * '7 / 2' evaluates to '3' (NOT '3.5'!).\n    * '1 / 2' evaluates to '0'.\n* **Casting Semantics**:\n  * '(double) 7 / 2' evaluates to '3.5' (cast has higher precedence than division, converting '7' to '7.0' first).\n  * '(double) (7 / 2)' evaluates to '3.0' (parentheses evaluate first: '7 / 2 = 3', which is then cast to '3.0').\n* **Rounding Idioms for Positive Doubles**:\n  * To round a positive 'double d' to the nearest integer: '(int) (d + 0.5)'.\n* **Modulo Arithmetic (%) Applications**:\n  * Parity check: 'x % 2 == 0' tests whether 'x' is even.\n  * Extract last digit: 'x % 10' yields the units digit (e.g. '284 % 10 = 4').\n  * Remove last digit: 'x / 10' truncates the units digit (e.g. '284 / 10 = 28').\n  * Cyclic index wrapping: '(index + 1) % arrayLength' wraps circular structures."
      },
      {
        "heading": "3. Variable Scope, Final Constants & Integer Overflow (CED 1.1–1.2)",
        "content": "Variable declaration rules and memory behavior in Java:\n- **Variable Scope:** A variable declared inside a block `{ ... }` (such as inside a loop or `if` statement) exists strictly within that block. Attempting to access it outside causes a compile-time \"cannot find symbol\" error.\n- **The `final` Keyword:**\n  ```java\n  final double PI = 3.14159265;\n  // PI = 3.0; // COMPILE ERROR: cannot assign a value to final variable\n  ```\n  Declared constants cannot be reassigned after initialization. Conventionally written in ALL_CAPS.\n- **Integer Overflow:**\n  ```java\n  int max = Integer.MAX_VALUE; // 2147483647 (2^31 - 1)\n  int wrapped = max + 1;       // Evaluates to -2147483648 (Integer.MIN_VALUE)!\n  ```\n  Java does not throw an exception on arithmetic overflow; integers wrap around silently between minimum and maximum 32-bit limits."
      },
      {
        "heading": "4. Compound Assignment & Unary Increment Operators (CED 1.4)",
        "content": "Compound assignment shortcuts and precedence behavior:\n- **Compound Operators:** `x += y` is equivalent to `x = (type)(x + y)`. Note the implicit cast:\n  ```java\n  short s = 5;\n  s += 2; // Valid: implicit cast to short\n  // s = s + 2; // COMPILE ERROR: (s + 2) promotes to int, cannot assign to short!\n  ```\n- **Increment and Decrement:**\n  - Prefix `++x`: Increments `x` first, then yields the incremented value.\n  - Postfix `x++`: Yields current value of `x`, then increments `x`.\n  ```java\n  int a = 5;\n  int b = a++; // b = 5, a becomes 6\n  int c = ++a; // a becomes 7, c = 7\n  ```"
      },
      {
        "heading": "5. The Scanner Class, Console Input & The Hanging-Newline Trap (CED 1.2)",
        "content": "Reading user input from the console or text files in Java requires `java.util.Scanner`:\n```java\nimport java.util.Scanner;\n\npublic class InputExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        System.out.print(\"Enter your age: \");\n        int age = scanner.nextInt();\n        \n        // CRITICAL BUG TRAP: scanner.nextInt() leaves the newline character ('\\n') in the buffer!\n        // If you immediately call scanner.nextLine(), it reads that leftover newline as an empty string!\n        scanner.nextLine(); // Consume the leftover hanging newline!\n        \n        System.out.print(\"Enter your full name: \");\n        String fullName = scanner.nextLine(); // Now safely reads the user's actual text\n        \n        System.out.println(\"Hello \" + fullName + \", age \" + age);\n        scanner.close();\n    }\n}\n```\n- **Core Scanner Methods Summary:**\n  - `scanner.nextInt()`: Scans the next token as an `int`.\n  - `scanner.nextDouble()`: Scans the next token as a `double`.\n  - `scanner.next()`: Reads the next single word (stops at any whitespace).\n  - `scanner.nextLine()`: Reads the entire line including spaces until the enter key (`\\n`).\n  - `scanner.hasNextInt()`: Returns `true` if another integer is available (vital for avoiding `InputMismatchException`)."
      },
      {
        "heading": "6. The Math Class Library & Random Range Integer Derivations (CED 1.4)",
        "content": "Java provides static utility functions in `java.lang.Math` (no import required):\n- **Core Math Methods:**\n  - `Math.abs(x)`: Returns absolute value of numeric types.\n  - `Math.pow(base, exp)`: Computes $\\text{base}^{\\text{exp}}$; always returns a `double`! (e.g. `Math.pow(2, 3)` yields `8.0`).\n  - `Math.sqrt(x)`: Computes $\\sqrt{x}$; returns `double` (e.g. `Math.sqrt(25)` yields `5.0`).\n- **The Universal Random Integer Formula Derivation:**\n  `Math.random()` generates a pseudo-random `double` in the half-open interval $[0.0, 1.0)$:\n  $$0.0 \\le \\text{Math.random}() < 1.0$$\n  To generate a random integer in the inclusive range $[\\text{min}, \\text{max}]$:\n  $$\\mathbf{\\text{int rand} = (\\text{int})(\\text{Math.random}() \\times (\\text{max} - \\text{min} + 1)) + \\text{min};}$$\n- **Canonical AP Exam Examples:**\n  1. Standard 6-sided die ($[1, 6]$): `(int)(Math.random() * 6) + 1`\n  2. Percentage score ($[0, 100]$): `(int)(Math.random() * 101)`\n  3. Two-digit numbers ($[10, 99]$): `(int)(Math.random() * 90) + 10`\n  4. Negative range ($[-15, 15]$): `(int)(Math.random() * 31) - 15`"
      },
      {
        "heading": "7. Canonical FRQ 1 Pattern: Currency Denomination & Modulo Decomposition",
        "content": "A foundational AP CSA algorithmic pattern involves decomposing an integer into constituent parts:\n```java\npublic class ChangeMaker {\n    /** Decomposes an integer cents total into quarters, dimes, nickels, and pennies */\n    public static void printChange(int totalCents) {\n        int quarters = totalCents / 25;       // Integer division extracts count\n        int remainderAfterQ = totalCents % 25; // Modulo extracts remaining cents\n        \n        int dimes = remainderAfterQ / 10;\n        int remainderAfterD = remainderAfterQ % 10;\n        \n        int nickels = remainderAfterD / 5;\n        int pennies = remainderAfterD % 5;\n        \n        System.out.println(\"Quarters: \" + quarters);\n        System.out.println(\"Dimes:    \" + dimes);\n        System.out.println(\"Nickels:  \" + nickels);\n        System.out.println(\"Pennies:  \" + pennies);\n    }\n}\n```\n- **Line-by-Line Execution Trace for `totalCents = 93`:**\n  - `quarters = 93 / 25 = 3` (value 75 cents)\n  - `remainderAfterQ = 93 % 25 = 18` cents left\n  - `dimes = 18 / 10 = 1` (value 10 cents)\n  - `remainderAfterD = 18 % 10 = 8` cents left\n  - `nickels = 8 / 5 = 1` (value 5 cents)\n  - `pennies = 8 % 5 = 3` cents left\n  - *Verification:* $(3 \\times 25) + (1 \\times 10) + (1 \\times 5) + 3 = 75 + 10 + 5 + 3 = 93\\text{ cents}$!"
      },
      {
        "heading": "8. JVM Stack Memory Architecture & Two’s Complement Binary System",
        "content": "How primitive variables are stored at the machine hardware level:\n- **Call Stack Frame:**\n  When a method executes, the JVM pushes an activation record (stack frame) containing all local primitive variables.\n  - `int` variables occupy exactly 32 contiguous bits (4 bytes) of stack memory.\n  - The variable identifier is a direct alias for that physical stack address.\n- **Two’s Complement Signed Binary Representation:**\n  - The most significant bit (leftmost bit) is the **sign bit**: `0` represents positive, `1` represents negative.\n  - `Integer.MAX_VALUE`: `01111111 11111111 11111111 11111111` ($2^{31}-1 = 2{,}147{,}483{,}647$).\n  - When `1` is added to `Integer.MAX_VALUE`, binary addition carries into the sign bit:\n    `10000000 00000000 00000000 00000000` = $-2^{31} = -2{,}147{,}483{,}648$ (`Integer.MIN_VALUE`)!\n  - This explains why Java wraps silently without crashing when an integer overflows."
      }
    ],
    "workedExamples": [
      {
        "title": "Evaluating Type Casting and Rounding Expressions",
        "topicRef": "CED 1.5 Casting and Ranges of Variables",
        "question": "What is the exact value stored in variable `result`? `double val = 7.8; int result = (int)(val + 0.5);`",
        "solutionSteps": [
          "Step 1: Evaluate expression inside parentheses: `val + 0.5 = 7.8 + 0.5 = 8.3`.",
          "Step 2: Apply the explicit `(int)` cast: Truncates the decimal part of `8.3`.",
          "Step 3: `8.3` truncates to `8`.",
          "Step 4: Notice that adding `0.5` before casting to `int` is the standard AP CSA idiom for rounding positive doubles to the nearest integer!"
        ],
        "finalAnswer": "`8`",
        "apScoringTip": "To round a positive double `x` to the nearest int, use `(int)(x + 0.5)`. For negative numbers, use `(int)(x - 0.5)`."
      }
    ],
    "commonTraps": [
      "Forgetting that `5 / 2` is `2` in Java, not `2.5`.",
      "Confusing `(double)(x / y)` with `(double)x / y`. The first truncates before casting!",
      "Thinking `double` arithmetic is exact. Roundoff error occurs (e.g. `0.1 + 0.2 != 0.3`)."
    ],
    "cramSheet": [
      "int division truncates: `7 / 2 == 3`.",
      "Modulo gives remainder: `17 % 5 == 2`.",
      "Rounding trick for positive doubles: `(int)(x + 0.5)`.",
      "Integer bounds: `Integer.MIN_VALUE` to `Integer.MAX_VALUE`."
    ]
  },
  {
    "unitId": "u2",
    "unitNumber": 2,
    "title": "Using Objects & String Methods",
    "examWeight": "5%–7.5% of AP Exam",
    "bigIdea": "Objects are reference types instantiated on the heap via constructors, characterized by state and behavior, with Strings having immutable semantics.",
    "keyTheorems": [
      {
        "name": "Object Reference Semantics and `null`",
        "conditions": "Declaring and initializing object variables.",
        "conclusion": "An object variable does not store data values directly; it stores a memory reference (address) pointing to an object instance on the heap. An uninitialized reference defaults to `null`. Invoking any method on a `null` reference immediately throws a runtime `NullPointerException`.",
        "apTip": "Comparing objects with `==` checks if they point to the EXACT same memory address. To compare logical content, always call `.equals()`!"
      },
      {
        "name": "String Immutability and Indexing",
        "conditions": "Manipulating `java.lang.String` instances.",
        "conclusion": "Strings are zero-indexed and completely immutable. No method can modify an existing String; methods like `.substring()` and `.toUpperCase()` instantiate and return a BRAND NEW String in memory.",
        "apTip": "In `str.substring(start, end)`, the character at `start` is INCLUDED, but the character at `end` is EXCLUDED: $[\\text{start}, \\text{end})$."
      }
    ],
    "formulas": [
      {
        "name": "Substring Length Formula",
        "latex": "\\text{Length of } \\texttt{str.substring(a, b)} = b - a",
        "explanation": "Index $b$ is excluded. If $b=a$, the returned substring is the empty string `\"\"` of length 0."
      }
    ],
    "sections": [
      {
        "heading": "1. Java String and Math API Quick Reference",
        "content": "Standard library methods tested on the AP CSA exam:\n\n| Method Signature | Return Type | Description |\n| :--- | :--- | :--- |\n| **`str.length()`** | `int` | Returns the total number of characters in `str` |\n| **`str.substring(from, to)`** | `String` | Returns substring from index `from` up to `to - 1` |\n| **`str.substring(from)`** | `String` | Returns substring from index `from` to the end of `str` |\n| **`str.indexOf(sub)`** | `int` | Returns first index of `sub`, or `-1` if not found |\n| **`str.equals(other)`** | `boolean` | Returns `true` if both strings contain identical characters |\n| **`str.compareTo(other)`** | `int` | Returns `< 0` if `str` precedes `other`, `0` if equal, `> 0` if after |\n| **`Math.abs(x)`** | `int / double` | Returns the absolute value of `x` |\n| **`Math.pow(base, exp)`** | `double` | Returns `base` raised to the power `exp` |\n| **`Math.sqrt(x)`** | `double` | Returns the positive square root of `x` |\n| **`Math.random()`** | `double` | Returns random double in range $[0.0, 1.0)$ |"
      },
      {
        "heading": "2. String Methods, Index Traps & The Math Class (CED 2.7-2.9)",
        "content": "Essential Java String manipulation and random number generation:\n\n* **String Methods Quick Reference**:\n  * 's.length()': Returns total number of characters.\n  * 's.substring(start, end)': Returns substring from index 'start' up to **but not including** 'end' (length = 'end - start').\n  * 's.substring(start)': Returns substring from index 'start' to the end of the string.\n  * 's.indexOf(str)': Returns index of first occurrence, or '-1' if not found.\n  * 's1.compareTo(s2)': Returns '0' if equal, negative if 's1 < s2' alphabetically, positive if 's1 > s2'.\n* **String Equality Rule**:\n  * **NEVER use == to compare String contents!**\n  * 's1 == s2' tests whether both references point to the exact same memory address.\n  * 's1.equals(s2)' correctly checks character-by-character content equality!\n* **Generating Random Integers in Range [min, max]**:\n  * Formula: 'int rand = (int) (Math.random() * (max - min + 1)) + min;'\n  * *(Since Math.random() returns in range [0.0, 1.0), multiplying by (max - min + 1) and casting to int spans 0 to max - min inclusive).*"
      },
      {
        "heading": "3. Reference Semantics, Heap Memory & NullPointerException (CED 2.2, 2.7)",
        "content": "Understanding how object references operate in JVM memory:\n- **Stack vs. Heap:**\n  - Primitive variables store their literal values directly on the **Stack**.\n  - Object reference variables (e.g. `String s`, `Point p`) store a memory address on the Stack that points to the actual object instantiated on the **Heap**.\n- **Aliasing:**\n  ```java\n  Point p1 = new Point(3, 4);\n  Point p2 = p1; // Aliasing! Both references point to the EXACT same object in heap memory.\n  p2.x = 10;\n  System.out.println(p1.x); // Prints 10!\n  ```\n- **The `null` Reference & `NullPointerException`:**\n  - An uninitialized object reference defaults to `null` (points to nothing).\n  - Calling an instance method on a `null` reference throws a runtime **`NullPointerException`**:\n  ```java\n  String str = null;\n  System.out.println(str.length()); // RUNTIME ERROR: NullPointerException!\n  ```"
      },
      {
        "heading": "4. String Immutability, String Pool & Core AP Methods (CED 2.6–2.9)",
        "content": "Strings are immutable objects in Java—their contents cannot be modified once instantiated:\n- **String Pool:** String literals are cached in the String Constant Pool. Creating strings with `new String(\"cat\")` forces allocation of a new heap object outside the pool.\n- **Reference Equality (`==`) vs Content Equality (`.equals()`):**\n  - `str1 == str2` compares memory addresses!\n  - `str1.equals(str2)` compares actual character sequence! Always use `.equals()`!\n- **Core String Methods on AP Exam:**\n  ```java\n  String s = \"Computer\";\n  s.length();               // 8\n  s.substring(0, 3);        // \"Com\" (characters at index 0, 1, 2; index 3 is EXCLUDED!)\n  s.substring(4);           // \"uter\" (from index 4 to end)\n  s.indexOf(\"put\");         // 3 (first occurrence index)\n  s.indexOf(\"xyz\");         // -1 (not found)\n  \"apple\".compareTo(\"banana\"); // Negative (< 0, 'a' precedes 'b')\n  \"cat\".compareTo(\"cat\");       // 0 (identical)\n  \"dog\".compareTo(\"cat\");       // Positive (> 0, 'd' follows 'c')\n  ```"
      },
      {
        "heading": "5. Wrapper Classes: Autoboxing & Unboxing (CED 2.8)",
        "content": "Wrapper classes wrap primitive types inside heap objects:\n- `int` $\\to$ `Integer`, `double` $\\to$ `Double`, `boolean` $\\to$ `Boolean`.\n- **Autoboxing:** Automatic conversion of primitive values into wrapper objects:\n  ```java\n  Integer numObj = 42; // Autoboxed from primitive int to Integer object\n  ```\n- **Unboxing:** Automatic conversion of wrapper objects back into primitive types:\n  ```java\n  int num = numObj; // Unboxed to primitive int\n  ```\n- **Constants:** `Integer.MIN_VALUE` ($-2^{31}$) and `Integer.MAX_VALUE` ($2^{31}-1$)."
      },
      {
        "heading": "6. Exhaustive String Methods Reference & Method Chaining Rules (CED 2.6–2.9)",
        "content": "The `String` class is the most heavily tested class on the entire AP CSA exam.\n\n| Method Signature | Return Type | Description | Boundary Behavior & Traps |\n| :--- | :--- | :--- | :--- |\n| `str.length()` | `int` | Returns character count | Empty string `\"\".length()` returns `0`. Has parentheses `()`! |\n| `str.substring(from, to)` | `String` | Extracts from index `from` up to `to - 1` | `to` is exclusive! If `to > str.length()`, throws `StringIndexOutOfBoundsException`. |\n| `str.substring(from)` | `String` | Extracts from index `from` to the very end | `str.substring(str.length())` returns `\"\"` (empty string), NOT an error! |\n| `str.indexOf(target)` | `int` | Returns index of first occurrence of `target` | Returns `-1` if `target` is not found anywhere in `str`. Case-sensitive! |\n| `str.equals(other)` | `boolean` | Compares character content equality | Returns `false` if `other` is null. Never throws error when called safely. |\n| `str.compareTo(other)` | `int` | Lexicographic (alphabetical) comparison | Returns negative if `str` precedes; `0` if equal; positive if `str` follows. |\n\n- **Method Chaining Pattern:**\n  Because String methods return new String objects, calls can be chained sequentially:\n  ```java\n  String phrase = \"  The quick brown fox  \";\n  String clean = phrase.trim().toUpperCase().substring(0, 3); // \"THE\"\n  ```"
      },
      {
        "heading": "7. Heap vs. Stack Memory Aliasing & The Garbage Collector (CED 2.2)",
        "content": "Visualizing object lifecycle and memory deallocation in the JVM:\n```java\nPoint p1 = new Point(4, 8); // Allocates object at Heap address @0x100; p1 stores @0x100\nPoint p2 = p1;               // Copies memory address! p2 also points to @0x100 (ALIASING)\nPoint p3 = new Point(4, 8); // Allocates separate object at Heap address @0x200; p3 stores @0x200\n\np1.setLocation(10, 20);      // Modifies object at @0x100\nSystem.out.println(p2.getX()); // Prints 10.0! (p2 reflects the change because it points to @0x100)\nSystem.out.println(p3.getX()); // Prints 4.0! (p3 points to independent heap object @0x200)\n\nSystem.out.println(p1 == p2); // TRUE (both references hold memory address @0x100)\nSystem.out.println(p1 == p3); // FALSE! Different heap addresses, even though coordinates match!\n```\n- **The JVM Garbage Collector:**\n  When an object on the heap no longer has any active references pointing to it (e.g. `p1 = null; p2 = null;`), the object becomes orphaned and is automatically reclaimed by the JVM garbage collector."
      },
      {
        "heading": "8. Canonical String FRQ Algorithm: Word Scrambler & Substring Swapper",
        "content": "A classic AP CSA FRQ pattern requiring multi-index string traversal and reconstruction:\n```java\npublic class WordScrambler {\n    /** Swaps adjacent letters 'A' and 'B' when found together, returning scrambled string */\n    public static String scrambleWord(String word) {\n        String scrambled = \"\";\n        int i = 0;\n        while (i < word.length() - 1) {\n            String current = word.substring(i, i + 1);\n            String next = word.substring(i + 1, i + 2);\n            \n            if (current.equals(\"A\") && !next.equals(\"A\")) {\n                scrambled += next + current; // Swap order: BA instead of AB\n                i += 2;                      // Skip both swapped characters!\n            } else {\n                scrambled += current;\n                i++;\n            }\n        }\n        if (i < word.length()) { // Append final dangling character if not processed\n            scrambled += word.substring(i);\n        }\n        return scrambled;\n    }\n}\n```\n- **Execution Trace for `\"ABRACADABRA\"`:**\n  - `i = 0`: `\"A\"` and `\"B\"` $\\implies$ appends `\"BA\"`, `i` advances to 2.\n  - `i = 2`: `\"R\"` $\\implies$ appends `\"R\"`, `i` advances to 3.\n  - `i = 3`: `\"A\"` and `\"C\"` $\\implies$ appends `\"CA\"`, `i` advances to 5.\n  - Result: `\"BARCADABRA\"` (exact College Board scoring standard!)."
      }
    ],
    "workedExamples": [
      {
        "title": "Generating a Random Integer in a Specified Range $[A, B]$",
        "topicRef": "CED 2.9 Using the Math Class",
        "question": "Write a single Java expression using `Math.random()` to generate a random integer between 10 and 50 inclusive.",
        "solutionSteps": [
          "Step 1: Recall range formula: `(int)(Math.random() * (max - min + 1)) + min`.",
          "Step 2: Identify bounds: `min = 10`, `max = 50`.",
          "Step 3: Calculate scaling factor: `max - min + 1 = 50 - 10 + 1 = 41`.",
          "Step 4: Construct expression: `(int)(Math.random() * 41) + 10`.",
          "Step 5: Verify: When `Math.random()` is `0.0`, value is `0 + 10 = 10`. When `Math.random()` is `0.999...`, value is `(int)(40.99) + 10 = 40 + 10 = 50`."
        ],
        "finalAnswer": "`(int)(Math.random() * 41) + 10`",
        "apScoringTip": "Always multiply by `(max - min + 1)` before casting to int and adding `min`."
      }
    ],
    "diagrams": [
      {
        "id": "csa_memory_reference_diagram",
        "title": "Java Memory Architecture: Stack vs Heap & Object Aliasing",
        "subtitle": "Primitive Storage vs Reference Pointer Memory Addresses",
        "type": "csa_memory_reference_diagram",
        "description": "Memory architecture diagram illustrating primitive variables stored directly on the Stack (e.g. int score = 95) versus object reference variables holding memory addresses (e.g. Student s1 = 0x4A2B) pointing to dynamically allocated objects on the Heap.",
        "takeaway": "The '==' operator checks reference address equality; the '.equals()' method checks object content. Assigning an object reference (s2 = s1) creates an alias pointing to the exact same Heap object!"
      }
    ],
    "commonTraps": [
      "Using `==` to compare Strings. `==` checks if they are the same memory pointer; `.equals()` checks character content.",
      "Passing index out of bounds to `substring` (e.g. `to > str.length()`). This throws `StringIndexOutOfBoundsException`.",
      "Forgetting that `str.length()` has parentheses, while `arr.length` for arrays does not!"
    ],
    "cramSheet": [
      "Always use `.equals()` for Strings, never `==`.",
      "`substring(start, end)` includes `start`, excludes `end`.",
      "`indexOf` returns `-1` if the substring is not found.",
      "Random integer in range $[A, B]$: `(int)(Math.random() * (B - A + 1)) + A`.",
      "Strings are immutable—calling `str.toUpperCase()` does not alter `str`."
    ]
  },
  {
    "unitId": "u3",
    "unitNumber": 3,
    "title": "Boolean Expressions & if Statements",
    "examWeight": "15%–17.5% of AP Exam",
    "bigIdea": "Conditional control flow enables branching algorithms governed by Boolean logic, truth tables, and De Morgan’s Laws.",
    "keyTheorems": [
      {
        "name": "De Morgan’s Laws of Logical Negation",
        "conditions": "Distributing a NOT operator `!` across compound Boolean expressions.",
        "conclusion": "!(A && B) is logically equivalent to (!A || !B). !(A || B) is logically equivalent to (!A && !B). Relational operators invert: `<` becomes `>=`, `>` becomes `<=`, `==` becomes `!=`.",
        "apTip": "Negating `(x > 3 && y <= 5)` yields `!(x > 3 && y <= 5) == (x <= 3 || y > 5)`. Never forget to flip the `&&` to `||` and the inequality directions!"
      },
      {
        "name": "Short-Circuit Evaluation",
        "conditions": "Evaluating compound Boolean expressions with `&&` and `||`.",
        "conclusion": "Java evaluates Boolean expressions from left to right: If the left operand of `&&` is `false`, the right operand is NEVER evaluated (result is guaranteed `false`). If the left operand of `||` is `true`, the right operand is NEVER evaluated (result is guaranteed `true`).",
        "apTip": "Short-circuiting prevents runtime crashes! `if (str != null && str.length() > 0)` will never throw `NullPointerException` because `str != null` guards the call."
      }
    ],
    "formulas": [
      {
        "name": "De Morgan’s Transformation",
        "latex": "\\neg(A \\land B) \\equiv (\\neg A \\lor \\neg B) \\quad \\text{and} \\quad \\neg(A \\lor B) \\equiv (\\neg A \\land \\neg B)",
        "explanation": "In Java syntax: `!(A && B) == (!A || !B)` and `!(A || B) == (!A && !B)`."
      }
    ],
    "sections": [
      {
        "heading": "1. Relational and Logical Operators Matrix",
        "content": "Truth table rules for Boolean operations:\n\n| Operator | Meaning | True Condition | Example |\n| :--- | :--- | :--- | :--- |\n| **`==`** | Equal to | Both primitive values are identical | `5 == 5` (true) |\n| **`!=`** | Not equal to | Values are different | `5 != 3` (true) |\n| **`>` / `>=`** | Greater than / or equal | Left value exceeds / equals right | `7 >= 7` (true) |\n| **`<` / `<=`** | Less than / or equal | Left value is less / equals right | `4 <= 9` (true) |\n| **`&&`** | Logical AND | BOTH left and right operands are true | `true && true` (true) |\n| **`\\|\\|`** | Logical OR | AT LEAST ONE operand is true | `false \\|\\| true` (true) |\n| **`!`** | Logical NOT | Inverts truth value | `!false` (true) |"
      },
      {
        "heading": "2. De Morgan's Laws, Short-Circuit Logic & Dangling Else (CED 3.5-3.7)",
        "content": "Mastering boolean algebra transformations and conditional branching:\n\n* **De Morgan's Laws for Negation**:\n  * '!(A && B)' is logically equivalent to '(!A || !B)'\n  * '!(A || B)' is logically equivalent to '(!A && !B)'\n  * Relational operator inversions:\n    * '!(x < y)' <=> 'x >= y'\n    * '!(x == y)' <=> 'x != y'\n* **Short-Circuit Evaluation**:\n  * In 'A && B': If 'A' is false, Java does NOT evaluate 'B' (result is guaranteed false).\n  * In 'A || B': If 'A' is true, Java does NOT evaluate 'B' (result is guaranteed true).\n  * **Null Guard Idiom**: Prevents runtime NullPointerException:\n    * 'if (str != null && str.length() > 0) { ... }'\n* **The Dangling Else Ambiguity**:\n  * An 'else' clause always matches the **closest preceding un-terminated if** statement unless explicit curly braces '{}' override grouping."
      },
      {
        "heading": "3. Short-Circuit Evaluation & Guard Conditions (CED 3.5)",
        "content": "The Java Virtual Machine uses short-circuit evaluation for compound Boolean expressions:\n- **AND (`&&`):** If the first operand evaluates to `false`, the second operand is NEVER evaluated, because the overall result cannot be `true`.\n- **OR (`||`):** If the first operand evaluates to `true`, the second operand is NEVER evaluated, because the overall result is guaranteed `true`.\n- **Guard Condition Idioms on AP Exam:**\n  ```java\n  // Guard against NullPointerException:\n  if (name != null && name.length() > 0) { ... }\n\n  // Guard against ArithmeticException (Division by Zero):\n  if (total != 0 && sum / total >= 50) { ... }\n\n  // Guard against IndexOutOfBoundsException:\n  if (index >= 0 && index < arr.length && arr[index] == target) { ... }\n  ```\n  If the guard condition is placed second (e.g. `if (name.length() > 0 && name != null)`), the code **CRASHES** before reaching the check!"
      },
      {
        "heading": "4. Nested Conditionals, Truth Tables & Dangling-Else Traps (CED 3.4)",
        "content": "Structuring complex decision logic without ambiguity:\n- **The Dangling Else Ambiguity:**\n  In Java, an `else` keyword is automatically bound to the **most recent unmatched `if`** statement in the same block, completely ignoring indentation!\n  ```java\n  int x = 4, y = 15;\n  if (x > 5)\n      if (y > 10)\n          System.out.println(\"Path 1\");\n  else\n      System.out.println(\"Path 2\");\n  // Despite the indentation of \"else\", it pairs with (y > 10)!\n  // Because (x > 5) is false, the entire outer block is skipped; NOTHING PRINTS!\n  ```\n- **AP Best Practice:** Always use explicit curly braces `{ ... }` for every single branch to ensure readable and deterministic execution paths."
      },
      {
        "heading": "5. Complex Truth Table Derivations & Logic Simplification Proofs (CED 3.2, 3.6)",
        "content": "Proving equivalence of compound Boolean expressions using truth tables:\n- **Truth Table Proof of De Morgan's Law: `!(A || B) == (!A && !B)`**\n\n| A | B | `A \\|\\| B` | `!(A \\|\\| B)` | `!A` | `!B` | `!A && !B` | Equivalent? |\n| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |\n| T | T | T | **F** | F | F | **F** | Match |\n| T | F | T | **F** | F | T | **F** | Match |\n| F | T | T | **F** | T | F | **F** | Match |\n| F | F | F | **T** | T | T | **T** | Match |\n\n- **Step-by-Step Algebraic Logic Reduction Exercise:**\n  Simplify: `!(x < 10 || y >= 20) && (z == 5)`\n  1. Distribute negation across parentheses: `!(x < 10) && !(y >= 20)`\n  2. Invert comparison operators: `(x >= 10) && (y < 20)`\n  3. Combine with remainder: `x >= 10 && y < 20 && z == 5`"
      },
      {
        "heading": "6. Guard Condition Architecture in Production Java (CED 3.5)",
        "content": "Using short-circuit evaluation to construct robust defensive guard clauses:\n```java\npublic class AccountValidator {\n    /** Validates user session without risking runtime NullPointerExceptions */\n    public static boolean isValidSession(User user, String token, int attempts) {\n        // Guard 1: Verify user object is instantiated BEFORE querying its methods\n        if (user == null || !user.isActive()) {\n            return false;\n        }\n        \n        // Guard 2: Verify token string is non-null BEFORE checking length or content\n        if (token == null || token.length() < 16) {\n            return false;\n        }\n        \n        // Guard 3: Verify division denominator is non-zero BEFORE computing ratio\n        if (attempts != 0 && (user.getFailedLogins() / attempts) > 0.5) {\n            return false; // Lock account due to high failure rate\n        }\n        \n        return true;\n    }\n}\n```\n- **Why Ordering Matters on AP MCQs:**\n  - `if (str.length() > 0 && str != null)` $\\implies$ **CRASH!** If `str` is null, calling `.length()` throws `NullPointerException` before reaching `str != null`.\n  - `if (str != null && str.length() > 0)` $\\implies$ **SAFE!** If `str` is null, evaluation halts immediately and safely returns `false`."
      },
      {
        "heading": "7. Canonical FRQ Logic Blueprint: Multi-Tiered Eligibility & Penalty Engine",
        "content": "A standard College Board FRQ 1 conditional branching method:\n```java\npublic class InsuranceCalculator {\n    /** Calculates driver insurance surcharge based on age and violation history */\n    public static double computeSurcharge(int age, int violations, boolean hasAccident) {\n        double surcharge = 0.0;\n        \n        if (age < 25) {\n            if (violations >= 3 || hasAccident) {\n                surcharge = 500.0;\n            } else if (violations >= 1) {\n                surcharge = 250.0;\n            } else {\n                surcharge = 100.0; // Young driver baseline\n            }\n        } else { // Driver is 25 or older\n            if (hasAccident && violations >= 2) {\n                surcharge = 350.0;\n            } else if (hasAccident || violations >= 1) {\n                surcharge = 150.0;\n            } else {\n                surcharge = 0.0; // Clean record adult discount\n            }\n        }\n        return surcharge;\n    }\n}\n```"
      }
    ],
    "workedExamples": [
      {
        "title": "Applying De Morgan’s Laws to Simplify Complex Conditionals",
        "topicRef": "CED 3.6 Equivalent Boolean Expressions",
        "question": "Simplify the conditional: `!((score >= 80) && (attendance > 90 || hasExcusedAbsence))`",
        "solutionSteps": [
          "Step 1: Treat `(score >= 80)` as A, and `(attendance > 90 || hasExcusedAbsence)` as B.",
          "Step 2: Apply De Morgan’s: `!(A && B) == !A || !B`.",
          "Step 3: Negate A: `!(score >= 80) == (score < 80)`.",
          "Step 4: Negate B: `!(attendance > 90 || hasExcusedAbsence) == (attendance <= 90 && !hasExcusedAbsence)`.",
          "Step 5: Combine with OR: `(score < 80) || (attendance <= 90 && !hasExcusedAbsence)`."
        ],
        "finalAnswer": "`(score < 80) || (attendance <= 90 && !hasExcusedAbsence)`",
        "apScoringTip": "De Morgan’s Law questions appear on almost every AP CSA exam. Practice flipping `&&` $\\leftrightarrow$ `||` and inverting all comparison operators."
      }
    ],
    "commonTraps": [
      "Using single `=` (assignment) instead of `==` (comparison) in an if condition.",
      "Writing chained comparisons like `10 < x < 20`. This is invalid syntax in Java! Must write `x > 10 && x < 20`.",
      "Forgetting that `else` attaches to the nearest preceding unmatched `if` (dangling else problem)."
    ],
    "cramSheet": [
      "De Morgan: `!(A && B)` is `!A || !B`; `!(A || B)` is `!A && !B`.",
      "Comparisons invert: `<` becomes `>=`, `>` becomes `<=`.",
      "Short-circuit: `&&` stops if left is false; `||` stops if left is true.",
      "Chained comparisons must use `&&`: `10 < x && x < 20`."
    ]
  },
  {
    "unitId": "u4",
    "unitNumber": 4,
    "title": "Iteration (Loops)",
    "examWeight": "17.5%–22.5% of AP Exam",
    "bigIdea": "Repetition structures (`while`, `for`, nested loops) automate algorithmic execution, traversal, and string pattern manipulation.",
    "keyTheorems": [
      {
        "name": "The Off-by-One Loop Boundary Trap",
        "conditions": "Iterating through zero-indexed structures with length $N$.",
        "conclusion": "For a sequence of length $N$, indices span $0$ to $N-1$. A loop iterating `for (int i = 0; i <= N; i++)` will execute $N+1$ times and trigger `IndexOutOfBoundsException` when accessing index $N$. Standard traversal must use `i < N`.",
        "apTip": "Count loop iterations: For `for (int i = a; i < b; i += c)`, the number of executions is $\\lceil (b - a) / c \\rceil$."
      },
      {
        "name": "Nested Loop Execution Multiplier",
        "conditions": "Executing nested loops with independent bounds.",
        "conclusion": "If an outer loop runs $M$ times and an inner loop runs $N$ times per outer iteration, the body of the inner loop executes exactly $M \\times N$ times, yielding $O(M \\times N)$ complexity.",
        "apTip": "If the inner loop bound depends on the outer loop (e.g. `for (int j = i; j < N; j++)`), the total iterations equal $\\frac{N(N+1)}{2} \\approx O(N^2)$."
      }
    ],
    "formulas": [
      {
        "name": "Loop Execution Count Formula",
        "latex": "\\text{Iterations} = \\left\\lfloor \\frac{\\text{final} - \\text{initial}}{\\text{step}} \\right\\rfloor + 1",
        "explanation": "Applies to inclusive loop `for (int i = initial; i <= final; i += step)`."
      }
    ],
    "sections": [
      {
        "heading": "1. `while` vs. `for` Loop Idioms in Java",
        "content": "Loop syntax and standard algorithmic use cases:\n\n| Loop Structure | Syntax Pattern | Ideal Use Case |\n| :--- | :--- | :--- |\n| **`for` loop** | `for (int i = 0; i < n; i++)` | Known, definite iteration count (array indexing, fixed ranges) |\n| **`while` loop** | `while (condition)` | Indefinite iteration count (reading until sentinel value or end of stream) |\n| **Enhanced `for` (for-each)** | `for (Type item : collection)` | Read-only sequential traversal of entire array/collection |\n| **Nested loops** | `for (int r = 0; ...) { for (int c = 0; ...) }` | 2D matrices, pairwise comparisons, shape printing |"
      },
      {
        "heading": "2. String & Array Loop Algorithms & Off-by-One Traps (CED 4.2-4.5)",
        "content": "Canonical iteration algorithms required on the AP Computer Science A exam:\n\n* **Counting Occurrences in a String**:\n  * Loop from index '0' to 'str.length() - target.length()':\n    * 'for (int i = 0; i <= str.length() - target.length(); i++)'\n* **The Off-by-One Boundary Rule**:\n  * When checking substrings of length k, loop condition must be 'i <= str.length() - k'.\n  * Using 'i < str.length()' causes StringIndexOutOfBoundsException!\n* **String Reversal Pattern**:\n  * Start at 'str.length() - 1' and decrement down to '0', concatenating 'str.substring(i, i + 1)'.\n* **Loop Invariant Analysis**:\n  * On trace questions, determine how many times the loop body executes:\n    * 'for (int i = 0; i < N; i++)' executes **N times**.\n    * 'for (int i = 1; i <= N; i++)' executes **N times**.\n    * 'for (int i = 0; i <= N; i++)' executes **N + 1 times**."
      },
      {
        "heading": "3. Standard Loop Iteration Patterns & Off-By-One Traps (CED 4.1–4.2)",
        "content": "Mastering loop bounds and loop execution counts:\n- **Canonical For Loop Structure:**\n  ```java\n  for (int i = 0; i < n; i++) { ... } // Executes EXACTLY n times (i = 0, 1, ..., n-1)\n  for (int i = 1; i <= n; i++) { ... } // Also executes EXACTLY n times (i = 1, 2, ..., n)\n  ```\n- **Off-By-One Errors:**\n  - Using `i <= n` when starting at `i = 0` runs $n+1$ times, causing `StringIndexOutOfBoundsException` when indexing strings of length $n$.\n- **Infinite Loop Traps:**\n  - Updating loop counter in the wrong direction (`for(int i = 0; i < 10; i--)`).\n  - Expecting floating-point equality in while loop (`while (d != 1.0)` may never terminate due to binary precision inaccuracies)."
      },
      {
        "heading": "4. Standard String Algorithm Patterns (CED 4.3)",
        "content": "Algorithms frequently tested on AP CSA Free Response Questions:\n- **1. Substring Counting (Occurrences of Target):**\n  ```java\n  public static int countTarget(String text, String target) {\n      int count = 0;\n      int tLen = target.length();\n      for (int i = 0; i <= text.length() - tLen; i++) {\n          if (text.substring(i, i + tLen).equals(target)) {\n              count++;\n          }\n      }\n      return count;\n  }\n  ```\n- **2. String Reversal:**\n  ```java\n  String reversed = \"\";\n  for (int i = str.length() - 1; i >= 0; i--) {\n      reversed += str.substring(i, i + 1);\n  }\n  ```\n- **3. Palindrome Verification:**\n  Compare characters from opposite ends moving inward using `str.substring(i, i+1).equals(str.substring(j, j+1))`."
      },
      {
        "heading": "5. Nested Loops & Triangular Big-O Iterations (CED 4.4)",
        "content": "When a loop executes inside another loop:\n- **Rectangular Grid:**\n  ```java\n  for (int r = 0; r < 4; r++) {\n      for (int c = 0; c < 5; c++) {\n          System.out.print(\"*\");\n      }\n      System.out.println();\n  } // Prints 4 rows of 5 stars (Total iterations: 4 * 5 = 20)\n  ```\n- **Triangular Nested Loop:**\n  ```java\n  for (int i = 1; i <= n; i++) {\n      for (int j = 1; j <= i; j++) {\n          System.out.print(j);\n      }\n      System.out.println();\n  }\n  ```\n  Total body executions: $1 + 2 + 3 + \\dots + n = \\frac{n(n+1)}{2} = O(n^2)$."
      },
      {
        "heading": "6. Exhaustive Nested Loop Tracing: Digital Clock & Coordinate Grids (CED 4.4)",
        "content": "Tracking nested loop iterations systematically with variable trace tables:\n```java\nint count = 0;\nfor (int hour = 1; hour <= 3; hour++) {\n    for (int min = 0; min < 60; min += 15) {\n        count++;\n        System.out.println(hour + \":\" + (min == 0 ? \"00\" : min));\n    }\n}\nSystem.out.println(\"Total times printed: \" + count);\n```\n- **Trace Analysis Table:**\n  - Outer loop (`hour`): Takes values `1, 2, 3` (3 distinct passes).\n  - Inner loop (`min`): Takes values `0, 15, 30, 45` (4 distinct iterations per outer pass).\n  - Total executions: $\\text{Outer passes} \\times \\text{Inner iterations} = 3 \\times 4 = \\mathbf{12\\text{ executions}}$.\n- **Triangular Output Patterns on AP MCQs:**\n  ```java\n  for (int i = 5; i >= 1; i--) {\n      for (int j = 1; j <= i; j++) {\n          System.out.print(j + \" \");\n      }\n      System.out.println();\n  }\n  // Output:\n  // 1 2 3 4 5 \n  // 1 2 3 4 \n  // 1 2 3 \n  // 1 2 \n  // 1\n  ```\n  Total numbers printed: $5 + 4 + 3 + 2 + 1 = \\frac{5(6)}{2} = 15$."
      },
      {
        "heading": "7. String Parsing & Tokenizer Algorithms Using While Loops (CED 4.3)",
        "content": "Extracting comma-separated tokens or words from a raw input string:\n```java\npublic class StringTokenizer {\n    /** Parses and prints all comma-separated words in a string */\n    public static void printTokens(String data) {\n        String remaining = data;\n        while (remaining.indexOf(\",\") != -1) {\n            int commaIndex = remaining.indexOf(\",\");\n            String token = remaining.substring(0, commaIndex).trim();\n            System.out.println(\"Token: [\" + token + \"]\");\n            remaining = remaining.substring(commaIndex + 1); // Slice past the comma\n        }\n        // Don't forget to process the final token after the last comma!\n        if (remaining.trim().length() > 0) {\n            System.out.println(\"Token: [\" + remaining.trim() + \"]\");\n        }\n    }\n}\n```\n- **While Loop Termination Verification:**\n  - Input: `\"apple, banana, cherry\"`\n  - Pass 1: Comma at 5 $\\implies$ Token `\"apple\"`, Remaining `\" banana, cherry\"`\n  - Pass 2: Comma at 7 $\\implies$ Token `\"banana\"`, Remaining `\" cherry\"`\n  - Pass 3: `indexOf(\",\")` returns `-1` $\\implies$ loop terminates.\n  - Cleanup: Prints final token `\"cherry\"`."
      },
      {
        "heading": "8. Canonical FRQ Loop Algorithm: Palindrome & Substring Frequency Counter",
        "content": "Implementing a complete dual-pointer palindrome verification algorithm:\n```java\npublic class PalindromeChecker {\n    /** Tests whether a string reads identically forward and backward (case-insensitive) */\n    public static boolean isPalindrome(String text) {\n        // Strip non-letter characters and convert to lower case\n        String clean = \"\";\n        for (int i = 0; i < text.length(); i++) {\n            String ch = text.substring(i, i + 1).toLowerCase();\n            if (ch.compareTo(\"a\") >= 0 && ch.compareTo(\"z\") <= 0) {\n                clean += ch;\n            }\n        }\n        \n        // Two-pointer collision traversal\n        int left = 0;\n        int right = clean.length() - 1;\n        while (left < right) {\n            if (!clean.substring(left, left + 1).equals(clean.substring(right, right + 1))) {\n                return false; // Mismatch found\n            }\n            left++;\n            right--;\n        }\n        return true; // All matched\n    }\n}\n```"
      }
    ],
    "workedExamples": [
      {
        "title": "Tracing String Reversal via While Loop",
        "topicRef": "CED 4.3 Developing Algorithms Using Loops",
        "question": "Trace the output: What does this method return for `reverse(\"CAT\")`?\n```java\nString rev = \"\"; int i = str.length() - 1;\nwhile (i >= 0) {\n  rev += str.substring(i, i + 1);\n  i--;\n}\nreturn rev;\n```",
        "solutionSteps": [
          "Step 1: Initialize: `str = \"CAT\"`, `str.length() = 3`, `i = 3 - 1 = 2`, `rev = \"\"`.",
          "Step 2: Iteration 1 (`i = 2`): `str.substring(2, 3) = \"T\"`. `rev = \"T\"`. `i` decrements to `1`.",
          "Step 3: Iteration 2 (`i = 1`): `str.substring(1, 2) = \"A\"`. `rev = \"TA\"`. `i` decrements to `0`.",
          "Step 4: Iteration 3 (`i = 0`): `str.substring(0, 1) = \"C\"`. `rev = \"TAC\"`. `i` decrements to `-1`.",
          "Step 5: Condition `i >= 0` is now false (`-1 >= 0` is false). Loop terminates. Returns `\"TAC\"`."
        ],
        "finalAnswer": "`\"TAC\"` (reverses the string).",
        "apScoringTip": "When tracing code on the AP exam, make a clean table listing variable values after each iteration to prevent mental arithmetic errors."
      }
    ],
    "commonTraps": [
      "Infinite loops caused by forgetting to increment/decrement the loop counter variable in a `while` loop.",
      "Putting a semicolon after the loop header: `for (int i = 0; i < 10; i++); { body }`. The semicolon creates an empty loop statement!",
      "Modifying the array inside an enhanced for-each loop and expecting the array to change (for-each provides a copy of the primitive value)."
    ],
    "cramSheet": [
      "Standard traversal: `for (int i = 0; i < arr.length; i++)`.",
      "Off-by-one error: Using `<=` with `.length` causes `ArrayIndexOutOfBoundsException`.",
      "Extract single character: `str.substring(i, i + 1)`.",
      "Nested loops multiply total operations: $N \\times M$."
    ]
  },
  {
    "unitId": "u5",
    "unitNumber": 5,
    "title": "Writing Classes",
    "examWeight": "5%–7.5% of AP Exam",
    "bigIdea": "Classes are blueprints that encapsulate data in private instance variables and expose behavior through public constructors and methods.",
    "keyTheorems": [
      {
        "name": "Encapsulation and Information Hiding",
        "conditions": "Designing robust object-oriented classes in Java.",
        "conclusion": "Instance variables must be declared `private` to prevent external classes from directly altering internal state. Access and modification are mediated exclusively through `public` accessor (getter) and mutator (setter) methods with validation logic.",
        "apTip": "FRQ Question 2 (Writing a Class) penalizes students if instance variables are not marked `private`!"
      },
      {
        "name": "The `this` Keyword and Static vs. Instance Scope",
        "conditions": "Differentiating instance members from class-level members.",
        "conclusion": "`static` variables and methods belong to the class itself, shared across all instances (e.g. `Math.sqrt()` or an object counter). Non-static members belong to individual instances. The `this` keyword refers to the current executing object instance, resolving naming collisions between parameters and instance fields.",
        "apTip": "A static method CANNOT access non-static instance variables because it is invoked without a specific object instance!"
      }
    ],
    "formulas": [
      {
        "name": "Class Anatomy Template",
        "latex": "\\text{Class} = \\text{Private State (Fields)} + \\text{Constructors} + \\text{Public Behaviors (Methods)}",
        "explanation": "Instance variables hold state; constructors initialize state; methods modify/return state."
      }
    ],
    "sections": [
      {
        "heading": "1. Access Modifiers and Scope Matrix",
        "content": "Visibility rules for variables and methods:\n\n| Modifier / Keyword | Accessibility | Scope / Memory Location | Typical Application |\n| :--- | :--- | :--- | :--- |\n| **`private`** | Only within the enclosing class | Encapsulated | Instance variables, internal helper methods |\n| **`public`** | Accessible from any class anywhere | Open API | Constructors, getters, setters, core service methods |\n| **`static`** | Belonging to class, not instances | Single shared class memory | Constants (`Math.PI`), utility methods (`Math.abs`), counters |\n| **`this`** | Current object reference | Heap instance pointer | Disambiguating parameters: `this.name = name;` |"
      },
      {
        "heading": "2. Constructors, Information Hiding & Mutator Methods (CED 5.2-5.6)",
        "content": "Core Object-Oriented Programming (OOP) design patterns:\n\n* **Encapsulation & Scope Rules**:\n  * Instance variables must ALWAYS be declared 'private' to protect internal object state from unauthorized external mutation.\n  * Public accessor (getter) methods return state; public mutator (setter) methods validate and update state.\n* **Constructor Overloading & The Default Constructor**:\n  * If a class provides **zero constructors**, the Java compiler automatically supplies a default no-argument constructor initializing primitives to zero/false and object references to null.\n  * If you define **ANY custom constructor**, Java does NOT provide a default constructor!\n* **The 'this' Reference**:\n  * Disambiguates instance fields from constructor/method parameters with identical names:\n    * 'this.name = name;'\n    * 'this.id = id;'\n* **Overriding 'toString()'**:\n  * When an object is passed to 'System.out.println(obj)', Java automatically calls its 'toString()' method. If not overridden, it prints the class name and hexadecimal memory hash code."
      },
      {
        "heading": "3. Encapsulation, Data Hiding & The `this` Keyword (CED 5.1–5.3)",
        "content": "Encapsulation protects object integrity by restricting direct data access:\n- **Access Modifiers:**\n  - `private`: Visible only within the declaring class. All instance variables should be `private`!\n  - `public`: Accessible from any class in any package.\n- **Accessors & Mutators:**\n  - Accessors (getters) return state without modification.\n  - Mutators (setters) validate and modify private instance data.\n- **The `this` Keyword:**\n  Refers to the current calling instance object. Used to resolve variable shadowing between parameters and instance variables:\n  ```java\n  public class Student {\n      private String name;\n      private int grade;\n\n      public Student(String name, int grade) {\n          this.name = name;   // \"this.name\" is instance variable; \"name\" is parameter\n          this.grade = grade;\n      }\n  }\n  ```"
      },
      {
        "heading": "4. Constructors, Default Initialization & Overloading (CED 5.2)",
        "content": "Instantiating objects via constructors:\n- **Constructor Rules:**\n  - Must have the EXACT same name as the class.\n  - Has NO return type (not even `void`!).\n  - If no constructor is written, Java supplies an automatic **default no-argument constructor** that initializes instance variables to default values (`0`, `0.0`, `false`, `null`).\n  - If *any* constructor is explicitly defined, Java's default constructor is suppressed!\n- **Overloaded Constructors:** Multiple constructors can exist in the same class provided they have different parameter lists (different number or types of parameters)."
      },
      {
        "heading": "5. Static Variables & Methods vs. Instance Scope (CED 5.6–5.7)",
        "content": "Comparing class-level state against instance-level state:\n- **Static Variables:** Belong to the class itself, shared across all instantiated objects:\n  ```java\n  public class BankAccount {\n      private static int totalAccounts = 0; // Shared across all accounts\n      private double balance;               // Unique per account\n\n      public BankAccount(double balance) {\n          this.balance = balance;\n          totalAccounts++; // Increments shared counter\n      }\n      public static int getTotalAccounts() {\n          return totalAccounts; // Static method accessing static variable\n      }\n  }\n  ```\n- **Critical Static Rule on AP Exam:** A `static` method **cannot access `this` or any instance variables directly** because it executes in class context without reference to a specific instance!"
      },
      {
        "heading": "6. The Object-Oriented Design Paradigm & Encapsulation Integrity (CED 5.1–5.3)",
        "content": "Principles of designing robust, maintainable Java classes:\n- **Encapsulation Architecture:**\n  - Keep instance variables `private` to hide internal implementation details.\n  - Provide `public` accessor (getter) methods for read access.\n  - Provide `public` mutator (setter) methods with input validation to prevent invalid internal state (e.g. rejecting negative account balances).\n- **The Pitfall of Returning Mutable Object References:**\n  ```java\n  public class Student {\n      private Date birthDate; // Date is a mutable reference type!\n      \n      // DANGEROUS GETTER: Breaks encapsulation!\n      public Date getBirthDate() {\n          return this.birthDate; // Caller can modify internal date directly: s.getBirthDate().setYear(2000);\n      }\n      \n      // SECURE GETTER: Returns defensive copy!\n      public Date getBirthDateSecure() {\n          return new Date(this.birthDate.getTime()); // Cloned object protects private state\n      }\n  }\n  ```"
      },
      {
        "heading": "7. Overloaded Methods, Variable Shadowing & The `this` Keyword (CED 5.4, 5.7)",
        "content": "Method signatures and execution context resolution:\n- **Method Signature:** Composed of the method name and the ordered list of parameter types:\n  ```java\n  public void deposit(double amount)        // Signature: deposit(double)\n  public void deposit(double amount, int id) // Signature: deposit(double, int) - Overloaded!\n  // public int deposit(double amount)      // COMPILE ERROR: Duplicate signature! Return type not part of signature!\n  ```\n- **Variable Shadowing Resolution:**\n  When a local parameter shares the exact name of an instance variable, the local variable shadows the instance variable. Use `this` to explicitly target the calling object's field:\n  ```java\n  public class Car {\n      private String model;\n      private int year;\n      \n      public Car(String model, int year) {\n          this.model = model; // \"this.model\" = instance variable; \"model\" = parameter\n          this.year = year;\n      }\n  }\n  ```"
      },
      {
        "heading": "8. Canonical FRQ Question 2 Blueprint: Full Class Implementation from Scratch",
        "content": "College Board FRQ Question 2 mandates writing a complete class based on detailed specifications:\n```java\npublic class StepTracker {\n    // 1. Private instance variables\n    private int minStepsActive;\n    private int totalSteps;\n    private int totalDays;\n    private int activeDays;\n    \n    // 2. Constructor matching specifications\n    public StepTracker(int minStepsActive) {\n        this.minStepsActive = minStepsActive;\n        this.totalSteps = 0;\n        this.totalDays = 0;\n        this.activeDays = 0;\n    }\n    \n    // 3. Mutator method\n    public void addDailySteps(int steps) {\n        totalSteps += steps;\n        totalDays++;\n        if (steps >= minStepsActive) {\n            activeDays++;\n        }\n    }\n    \n    // 4. Accessor methods\n    public int activeDays() {\n        return activeDays;\n    }\n    \n    public double averageSteps() {\n        if (totalDays == 0) {\n            return 0.0; // Guard against division by zero!\n        }\n        return (double) totalSteps / totalDays; // Cast to avoid integer truncation!\n    }\n}\n```\n- **Scoring Rubric Breakdown (9 Points Total):**\n  - +1: Declares all instance variables as `private` with proper types.\n  - +1: Constructor header matches class name with correct parameter list.\n  - +1: Initializes all instance variables appropriately.\n  - +2: `addDailySteps` updates steps, days, and conditionally updates active days.\n  - +1: `activeDays` returns correct count.\n  - +2: `averageSteps` checks for zero days and calculates floating-point division.\n  - +1: Correct class header, braces, and encapsulation throughout."
      }
    ],
    "workedExamples": [
      {
        "title": "Writing an AP Class with Constructor and Mutator (FRQ Pattern)",
        "topicRef": "CED 5.2 Writing Constructors and Methods",
        "question": "Write a `BankAccount` class with private double field `balance`. Include a constructor accepting initial balance, a getter `getBalance()`, and a `deposit(double amount)` mutator that only accepts positive amounts.",
        "solutionSteps": [
          "Step 1: Declare private instance variable: `private double balance;`.",
          "Step 2: Write constructor: `public BankAccount(double initialBalance) { balance = initialBalance; }`.",
          "Step 3: Write accessor method: `public double getBalance() { return balance; }`.",
          "Step 4: Write mutator method with guard check: `public void deposit(double amount) { if (amount > 0) { balance += amount; } }`."
        ],
        "finalAnswer": "A fully encapsulated class meeting College Board FRQ 2 standards.",
        "apScoringTip": "Never declare instance variables as `public`. Always initialize every instance variable inside the constructor."
      }
    ],
    "commonTraps": [
      "Declaring a return type on a constructor (e.g. `public void BankAccount()`). This turns the constructor into a regular method that will never be called during object instantiation!",
      "Re-declaring instance variables inside the constructor (e.g. `double balance = initialBalance;`). This creates a local variable and leaves the instance field at default 0!",
      "Attempting to call non-static methods from inside a static method without creating an instance."
    ],
    "cramSheet": [
      "Instance variables must ALWAYS be `private`.",
      "Constructors have NO return type and must match the class name exactly.",
      "`this.var = var;` resolves shadowing between parameter and field.",
      "`static` methods belong to the class, not individual objects, and cannot use `this`."
    ]
  },
  {
    "unitId": "u6",
    "unitNumber": 6,
    "title": "1D Array",
    "examWeight": "10%–15% of AP Exam",
    "bigIdea": "Arrays are fixed-size, zero-indexed contiguous memory data structures storing homogeneous primitive or object reference types.",
    "keyTheorems": [
      {
        "name": "Fixed Array Size and Default Values",
        "conditions": "Instantiating a 1D array using `new Type[length]`.",
        "conclusion": "Once created, an array’s size cannot change. Its size is accessed via the `.length` field (no parentheses!). Elements are automatically initialized to default values: `0` for numeric primitives, `false` for `boolean`, and `null` for all object reference types.",
        "apTip": "Creating `String[] names = new String[5];` initializes an array of five `null` references! You must populate each index with an actual String object before calling methods."
      },
      {
        "name": "Standard Array Algorithms (Min, Max, Sum, Search)",
        "conditions": "Traversing 1D arrays to process data.",
        "conclusion": "Standard algorithms initialize tracking variables (e.g. `int max = arr[0];`) and traverse using standard `for` loop, updating the tracker when `arr[i] > max`. Linear search checks each element sequentially in $O(N)$ time.",
        "apTip": "Never initialize `max` to 0! If all elements in the array are negative (e.g. `[-5, -12, -3]`), initializing to 0 produces an incorrect answer. Always initialize to `arr[0]` or `Integer.MIN_VALUE`."
      }
    ],
    "formulas": [
      {
        "name": "Array Index Boundary Rule",
        "latex": "0 \\le \\text{index} \\le \\text{arr.length} - 1",
        "explanation": "Accessing `arr[arr.length]` triggers `ArrayIndexOutOfBoundsException`."
      }
    ],
    "sections": [
      {
        "heading": "1. Standard 1D Array Algorithms in Java",
        "content": "Core algorithms tested on AP CSA Section I and FRQ:\n\n| Algorithm Task | Code Pattern | Critical Detail |\n| :--- | :--- | :--- |\n| **Compute Sum / Average** | `double sum = 0; for (int n : arr) sum += n; double avg = sum / arr.length;` | Cast `sum` to `double` before division to avoid integer truncation! |\n| **Find Maximum Element** | `int max = arr[0]; for (int n : arr) if (n > max) max = n;` | Initialize to `arr[0]`, never to `0`. |\n| **Count Matching Elements** | `int count = 0; for (String s : arr) if (s.equals(target)) count++;` | Use `.equals()` when searching for object values. |\n| **Linear Search** | `for (int i = 0; i < arr.length; i++) if (arr[i] == target) return i; return -1;` | Returns index of first match, or `-1` if not found. |"
      },
      {
        "heading": "2. Enhanced For-Loops & 1D Array Algorithms (CED 6.3-6.4)",
        "content": "Array traversal algorithms and enhanced for-loop mechanics:\n\n* **Enhanced For-Loop (for-each) Rules**:\n  * Syntax: 'for (int value : numbers) { ... }'\n  * Provides sequential read-only access to elements without managing an index variable.\n  * **Limitation 1**: Cannot modify primitive elements in the array (the loop variable is a local copy).\n  * **Limitation 2**: Cannot access current index, traverse backwards, or process multiple elements simultaneously.\n* **Finding Minimum / Maximum Value Algorithm**:\n  * Always initialize 'int maxVal = arr[0];' to the first element (never initialize to 0 because array may contain all negative numbers!).\n* **Reversing an Array In-Place**:\n  * Swap 'arr[i]' with 'arr[arr.length - 1 - i]' while 'i < arr.length / 2'."
      },
      {
        "heading": "3. Array Creation, Memory Allocation & Length Property (CED 6.1)",
        "content": "Arrays are fixed-size reference objects stored in heap memory:\n- **Instantiation Patterns:**\n  ```java\n  int[] scores = new int[10];           // Elements default to 0\n  boolean[] flags = new boolean[4];     // Elements default to false\n  String[] roster = new String[5];      // Elements default to null!\n  double[] rates = {1.25, 2.50, 3.75};  // Initializer list shorthand\n  ```\n- **Length Field:**\n  `scores.length` is a **final instance variable/property**, NOT a method call (no parentheses). Contrast with `String.length()` and `ArrayList.size()`.\n- **Bounds Checking:** Valid indices are $0$ through $\\text{length} - 1$. Attempting to access `scores[scores.length]` or negative indices throws `ArrayIndexOutOfBoundsException`."
      },
      {
        "heading": "4. Array Shifting, Swapping & Linear Search Algorithms (CED 6.2–6.3)",
        "content": "Standard array manipulation patterns required for FRQ Question 3:\n- **Swapping Elements:**\n  ```java\n  int temp = arr[i];\n  arr[i] = arr[j];\n  arr[j] = temp;\n  ```\n- **Shifting Elements Left with End Wrap:**\n  ```java\n  int first = arr[0];\n  for (int i = 0; i < arr.length - 1; i++) {\n      arr[i] = arr[i + 1];\n  }\n  arr[arr.length - 1] = first;\n  ```\n- **Linear Search with Early Return:**\n  ```java\n  public static int findIndex(int[] arr, int target) {\n      for (int i = 0; i < arr.length; i++) {\n          if (arr[i] == target) return i; // Early exit on match\n      }\n      return -1; // Target not found after full scan\n  }\n  ```"
      },
      {
        "heading": "5. Enhanced For-Loop Modifications & Primitive Pass-by-Value Traps (CED 6.4)",
        "content": "Understanding how enhanced for loops (`for-each`) interact with memory:\n- **Read-Only Primitive Traversal:**\n  ```java\n  for (int num : arr) {\n      num = num * 2; // Fails! Only modifies local variable 'num', NOT arr!\n  }\n  ```\n- **Modifying Objects vs. References:**\n  ```java\n  // Calling a mutator method ON an object in the array DOES modify the object:\n  for (Student s : classRoster) {\n      s.addBonusPoints(5); // Modifies the actual Student object on heap!\n  }\n  // But reassigning the reference does NOT modify the array slot:\n  for (Student s : classRoster) {\n      s = new Student(\"Unknown\"); // Fails! Array element still points to original!\n  }\n  ```"
      },
      {
        "heading": "6. In-Place Array Reversal, Shifting & Rotation Algorithms (CED 6.3)",
        "content": "Manipulating 1D array indices without creating temporary secondary arrays:\n```java\npublic class ArrayAlgorithms {\n    /** Reverses an array in-place by swapping opposing elements */\n    public static void reverseInPlace(int[] arr) {\n        for (int i = 0; i < arr.length / 2; i++) {\n            int opposite = arr.length - 1 - i;\n            int temp = arr[i];\n            arr[i] = arr[opposite];\n            arr[opposite] = temp;\n        }\n    }\n    \n    /** Rotates an array to the right by k positions */\n    public static void rotateRight(int[] arr, int k) {\n        k = k % arr.length; // Handle k larger than array length\n        for (int r = 0; r < k; r++) {\n            int last = arr[arr.length - 1];\n            for (int i = arr.length - 1; i > 0; i--) {\n                arr[i] = arr[i - 1]; // Shift right\n            }\n            arr[0] = last;\n        }\n    }\n}\n```\n- **Trace of `reverseInPlace` on `[10, 20, 30, 40, 50]`:**\n  - Array length = 5, loop terminates when `i < 5 / 2` (i = 0, 1).\n  - `i = 0`: Swaps `arr[0]` (10) with `arr[4]` (50) $\\implies$ `[50, 20, 30, 40, 10]`.\n  - `i = 1`: Swaps `arr[1]` (20) with `arr[3]` (40) $\\implies$ `[50, 40, 30, 20, 10]`.\n  - Middle element at index 2 (30) remains untouched, perfectly reversed!"
      },
      {
        "heading": "7. Frequency Counting & Histogram Array Architectures (CED 6.2)",
        "content": "Using an auxiliary array to count occurrences of discrete integer values:\n```java\npublic class FrequencyCounter {\n    /** Computes frequency histogram for student test grades (0 to 100) */\n    public static int[] buildHistogram(int[] scores) {\n        int[] counts = new int[101]; // Indices 0 through 100, initialized to 0\n        for (int score : scores) {\n            counts[score]++; // Increments tally for that specific score value\n        }\n        return counts;\n    }\n    \n    /** Returns the mode (most frequently occurring score) */\n    public static int findMode(int[] scores) {\n        int[] counts = buildHistogram(scores);\n        int modeScore = 0;\n        int maxCount = counts[0];\n        for (int s = 1; s < counts.length; s++) {\n            if (counts[s] > maxCount) {\n                maxCount = counts[s];\n                modeScore = s;\n            }\n        }\n        return modeScore;\n    }\n}\n```"
      },
      {
        "heading": "8. Canonical FRQ 3/4 Blueprint: The SoundClip Sound-Level Limiter",
        "content": "A classic AP CSA FRQ question involving modifying array values based on threshold conditions:\n```java\npublic class Sound {\n    private int[] samples; // Sound amplitude values\n    \n    /** Limits amplitude to range [-limit, limit]; returns count of modified samples */\n    public int limitAmplitude(int limit) {\n        int changes = 0;\n        for (int i = 0; i < samples.length; i++) {\n            if (samples[i] > limit) {\n                samples[i] = limit;\n                changes++;\n            } else if (samples[i] < -limit) {\n                samples[i] = -limit;\n                changes++;\n            }\n        }\n        return changes;\n    }\n    \n    /** Trims silence (leading consecutive zero values) from front of sample array */\n    public void trimSilenceFromBeginning() {\n        int firstNonZero = 0;\n        while (firstNonZero < samples.length && samples[firstNonZero] == 0) {\n            firstNonZero++;\n        }\n        \n        // Allocate trimmed array of exact required length\n        int[] trimmed = new int[samples.length - firstNonZero];\n        for (int i = 0; i < trimmed.length; i++) {\n            trimmed[i] = samples[firstNonZero + i];\n        }\n        samples = trimmed; // Reassign reference\n    }\n}\n```"
      }
    ],
    "workedExamples": [
      {
        "title": "Shifting Array Elements to the Left by One Position",
        "topicRef": "CED 6.4 Developing Algorithms for 1D Arrays",
        "question": "Write code to shift all elements in array `arr` one position to the left, moving the first element to the very end: `[1, 2, 3, 4] -> [2, 3, 4, 1]`.",
        "solutionSteps": [
          "Step 1: Save the first element before it gets overwritten: `int first = arr[0];`.",
          "Step 2: Traverse from index 0 up to `arr.length - 2`, copying each subsequent element to the left: `for (int i = 0; i < arr.length - 1; i++) { arr[i] = arr[i + 1]; }`.",
          "Step 3: Place the saved first element at the last index: `arr[arr.length - 1] = first;`.",
          "Step 4: Verify boundary: When `i = arr.length - 2`, `arr[i + 1]` accesses `arr.length - 1` without going out of bounds."
        ],
        "finalAnswer": "`int first = arr[0]; for (int i = 0; i < arr.length - 1; i++) arr[i] = arr[i + 1]; arr[arr.length - 1] = first;`",
        "apScoringTip": "When shifting, always save the element that will be overwritten first into a temporary variable!"
      }
    ],
    "commonTraps": [
      "Writing `arr.length()` instead of `arr.length`. Arrays have a public field `.length`, not a method.",
      "Initializing min/max variables to 0. Always initialize to `arr[0]`.",
      "Modifying elements inside an enhanced for loop: `for (int x : arr) x = 0;` does NOT change the array!"
    ],
    "cramSheet": [
      "Array size is fixed at creation; access size via `arr.length` (no parens).",
      "Valid index range: `0` to `arr.length - 1`.",
      "Default values: numbers are `0`, booleans are `false`, objects are `null`.",
      "Enhanced for loop cannot modify array elements or know current index."
    ]
  },
  {
    "unitId": "u7",
    "unitNumber": 7,
    "title": "ArrayList",
    "examWeight": "2.5%–7.5% of AP Exam",
    "bigIdea": "`ArrayList<E>` is a dynamic, resizable generic list implementation that stores object references, resizing automatically as elements are inserted or removed.",
    "keyTheorems": [
      {
        "name": "The Concurrent Element Shift on Removal and Addition",
        "conditions": "Calling `.remove(index)` or `.add(index, element)` on an `ArrayList`.",
        "conclusion": "When an element is removed via `.remove(i)`, all subsequent elements shift one position to the LEFT, decreasing the size of the list. If you iterate with standard `i++`, the element immediately following the removed item shifts into index `i` and is SKIPPED!",
        "apTip": "To safely remove elements while traversing, iterate BACKWARDS: `for (int i = list.size() - 1; i >= 0; i--)` or do not increment `i` when removing!"
      },
      {
        "name": "Autoboxing and Unboxing",
        "conditions": "Using primitive types inside generic collections like `ArrayList<Integer>`.",
        "conclusion": "`ArrayList` can only store object references, not primitives (`ArrayList<int>` is illegal). Java automatically converts primitives to their wrapper class (`int` $\\rightarrow$ `Integer`, `double` $\\rightarrow$ `Double`) via Autoboxing, and reverses it via Unboxing.",
        "apTip": "Calling `list.remove(2)` removes the element at INDEX 2. To remove the integer value 2, you must wrap it: `list.remove(Integer.valueOf(2))`."
      }
    ],
    "formulas": [
      {
        "name": "ArrayList Safe Backward Deletion Loop",
        "latex": "\\text{for } (\\text{int } i = \\text{list.size}() - 1; i \\ge 0; i--) \\implies \\text{No Elements Skipped}",
        "explanation": "Removing at index $i$ shifts elements at $\\ge i+1$, which have already been processed."
      }
    ],
    "sections": [
      {
        "heading": "1. `ArrayList<E>` Core Methods Matrix",
        "content": "Standard library methods tested on AP CSA:\n\n| Method Signature | Return Type | Description |\n| :--- | :--- | :--- |\n| **`list.size()`** | `int` | Returns number of active elements currently in list |\n| **`list.add(obj)`** | `boolean` | Appends `obj` to the end of the list; returns `true` |\n| **`list.add(index, obj)`** | `void` | Inserts `obj` at `index`; shifts subsequent elements right |\n| **`list.get(index)`** | `E` | Returns the element at `index` without removing it |\n| **`list.set(index, obj)`** | `E` | Replaces element at `index` with `obj`; returns old element |\n| **`list.remove(index)`** | `E` | Removes and returns element at `index`; shifts elements left |"
      },
      {
        "heading": "2. The Concurrent Modification & Index-Shift Trap (CED 7.3-7.5)",
        "content": "The single most common ArrayList bug on the AP Computer Science A exam:\n\n* **The Problem**:\n  * Calling 'list.remove(i)' removes the element and **shifts all subsequent elements one position to the left**.\n  * If iterating with a standard forward loop ('for (int i = 0; i < list.size(); i++)'), the loop index 'i' increments while the elements shift left, **skipping the immediate next element**!\n* **Two Safe Removal Patterns**:\n  * **Pattern 1: Backward Traversal (Recommended)**:\n    * 'for (int i = list.size() - 1; i >= 0; i--) { if (condition) list.remove(i); }'\n    * *(Shifting only affects elements with indices > i, which have already been inspected!).*\n  * **Pattern 2: While Loop with Conditional Increment**:\n    * Loop 'while (i < list.size())': If removed, do NOT increment 'i'; if kept, increment 'i++'."
      },
      {
        "heading": "3. ArrayList Class, Methods & Generics (CED 7.1–7.2)",
        "content": "`ArrayList<E>` is a dynamic, resizable list in `java.util.*`:\n- **Core Methods Summary:**\n  ```java\n  ArrayList<String> list = new ArrayList<String>();\n  list.add(\"A\");            // Appends \"A\" to end; returns true\n  list.add(0, \"B\");         // Inserts \"B\" at index 0, shifts existing right\n  list.get(1);              // Returns element at index 1 (\"A\")\n  list.set(1, \"C\");         // Replaces element at index 1 with \"C\"; returns old value (\"A\")\n  list.remove(0);           // Removes element at index 0; returns removed element (\"B\")\n  list.size();              // Returns count of elements\n  ```\n- **Primitive Restriction:** Cannot store primitives directly. Must use wrapper classes: `ArrayList<Integer>`, `ArrayList<Double>`."
      },
      {
        "heading": "4. The Classic ArrayList Element-Removal Shift Trap (CED 7.3)",
        "content": "The most heavily tested bug pattern in AP CSA:\n- **The Bug (Forward Loop with Removal):**\n  ```java\n  // Task: Remove all occurrences of \"bad\"\n  // Given: [\"good\", \"bad\", \"bad\", \"great\"]\n  for (int i = 0; i < list.size(); i++) {\n      if (list.get(i).equals(\"bad\")) {\n          list.remove(i);\n      }\n  }\n  // Result: [\"good\", \"bad\", \"great\"]! The second \"bad\" was SKIPPED!\n  ```\n  *Why?* When `remove(1)` executes, all subsequent elements shift left by one index. In the next iteration, `i` increments to `2`, completely bypassing the element that just slid into index `1`!\n- **Solution 1: Reverse Traversal (Standard AP Method):**\n  ```java\n  for (int i = list.size() - 1; i >= 0; i--) {\n      if (list.get(i).equals(\"bad\")) {\n          list.remove(i);\n      }\n  }\n  ```\n- **Solution 2: Decrement `i` on Removal:**\n  ```java\n  for (int i = 0; i < list.size(); i++) {\n      if (list.get(i).equals(\"bad\")) {\n          list.remove(i);\n          i--; // Adjust index so next iteration re-checks current slot!\n      }\n  }\n  ```"
      },
      {
        "heading": "5. Search & Sort Algorithms: Selection & Insertion Sort (CED 7.5–7.6)",
        "content": "Standard sort algorithms required by the College Board CED:\n- **Selection Sort:**\n  - Scans array for the smallest remaining element and swaps it with the current position:\n  ```java\n  for (int i = 0; i < arr.length - 1; i++) {\n      int minIdx = i;\n      for (int j = i + 1; j < arr.length; j++) {\n          if (arr[j] < arr[minIdx]) minIdx = j;\n      }\n      int temp = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = temp;\n  }\n  ```\n  - Always makes $\\frac{n(n-1)}{2}$ comparisons ($O(n^2)$), regardless of whether data is already sorted.\n- **Insertion Sort:**\n  - Inserts each element into its proper position within the sorted subarray to its left:\n  - Best Case (already sorted): $O(n)$ comparisons, 0 swaps.\n  - Worst Case (reverse sorted): $O(n^2)$ comparisons and shifts."
      },
      {
        "heading": "6. The Canonical Selection Sort & Insertion Sort Trace Tables (CED 7.5–7.6)",
        "content": "Comparing the two quadratic sort algorithms required by the AP CSA syllabus:\n- **Selection Sort Algorithm & Invariant:**\n  - Divides list into sorted portion on the left and unsorted portion on the right.\n  - In each pass, finds the minimum element in the unsorted portion and swaps it with the first unsorted index.\n  - **Trace of Selection Sort on `[64, 25, 12, 22, 11]`:**\n    - Pass 1: Min is `11` at index 4 $\\to$ Swap with index 0: `[11, 25, 12, 22, 64]`\n    - Pass 2: Min in remaining is `12` at index 2 $\\to$ Swap with index 1: `[11, 12, 25, 22, 64]`\n    - Pass 3: Min in remaining is `22` at index 3 $\\to$ Swap with index 2: `[11, 12, 22, 25, 64]`\n    - Pass 4: `[11, 12, 22, 25, 64]` (Sorted in 4 passes!)\n- **Insertion Sort Algorithm & Invariant:**\n  - In pass `i`, element `arr[i]` is shifted leftward until it lands in sorted order among preceding elements.\n  - **Best-case efficiency:** $O(N)$ when already sorted! (Selection sort is always $O(N^2)$ regardless)."
      },
      {
        "heading": "7. Autoboxing Overhead & Wrapper Reference Comparison Traps (CED 7.1)",
        "content": "Memory behavior when wrapping primitives in generic ArrayLists:\n```java\nArrayList<Integer> list = new ArrayList<Integer>();\nlist.add(100); // Autoboxing: creates new Integer(100) heap object\nlist.add(100);\n\nSystem.out.println(list.get(0) == list.get(1)); // DANGEROUS! Compares object reference addresses!\nSystem.out.println(list.get(0).equals(list.get(1))); // TRUE! Compares primitive int value!\n```\n- **The `Integer.valueOf` Cache Trap (-128 to 127):**\n  Java caches wrapper objects between $-128$ and $127$. For values $> 127$ (e.g. 500), `list.get(0) == list.get(1)` evaluates to `false`! Always use `.equals()` or unbox explicitly: `(int)list.get(0) == (int)list.get(1)`."
      },
      {
        "heading": "8. Canonical FRQ Question 3 Blueprint: Complete ArrayList Manager Class",
        "content": "A complete College Board FRQ 3 ArrayList management implementation:\n```java\nimport java.util.ArrayList;\n\npublic class MemberInfo {\n    private String name;\n    private int gradYear;\n    private boolean hasGoodStanding;\n    \n    public MemberInfo(String name, int gradYear, boolean hasGoodStanding) {\n        this.name = name;\n        this.gradYear = gradYear;\n        this.hasGoodStanding = hasGoodStanding;\n    }\n    public int getGradYear() { return gradYear; }\n    public boolean inGoodStanding() { return hasGoodStanding; }\n}\n\npublic class ClubMembers {\n    private ArrayList<MemberInfo> memberList;\n    \n    public ClubMembers() {\n        memberList = new ArrayList<MemberInfo>();\n    }\n    \n    /** Adds new members from string array */\n    public void addMembers(String[] names, int gradYear) {\n        for (String name : names) {\n            memberList.add(new MemberInfo(name, gradYear, true));\n        }\n    }\n    \n    /** Removes graduated members and returns list of those in good standing */\n    public ArrayList<MemberInfo> removeMembers(int year) {\n        ArrayList<MemberInfo> graduatedGoodStanding = new ArrayList<MemberInfo>();\n        \n        // BACKWARD TRAVERSAL: Essential to avoid skipping adjacent removed elements!\n        for (int i = memberList.size() - 1; i >= 0; i--) {\n            MemberInfo m = memberList.get(i);\n            if (m.getGradYear() <= year) {\n                if (m.inGoodStanding()) {\n                    graduatedGoodStanding.add(m);\n                }\n                memberList.remove(i); // Safely removes element from active roster\n            }\n        }\n        return graduatedGoodStanding;\n    }\n}\n```"
      }
    ],
    "workedExamples": [
      {
        "title": "Safely Removing Matching Words from an ArrayList (FRQ Classic)",
        "topicRef": "CED 7.4 Developing Algorithms Using ArrayLists",
        "question": "Write a loop to remove all occurrences of the word `\"DELETE\"` from `ArrayList<String> words`.",
        "solutionSteps": [
          "Step 1: Notice the shift trap: Forward loop skips consecutive target elements.",
          "Step 2: Method A (Backward Loop): Start at `words.size() - 1`, decrement down to 0.",
          "Step 3: Write backward traversal loop: `for (int i = words.size() - 1; i >= 0; i--) { if (words.get(i).equals(\"DELETE\")) { words.remove(i); } }`.",
          "Step 4: Verify: When an element at index $i$ is removed, the subsequent elements shift left, but our next check is at $i - 1$, which is unaffected!"
        ],
        "finalAnswer": "Backward loop ensures no elements are skipped when `.remove(i)` shifts elements left.",
        "apScoringTip": "Iterating backward to remove items appears frequently on FRQ Question 3 (ArrayList)."
      }
    ],
    "commonTraps": [
      "Using `[]` syntax like `list[0]`. ArrayList requires `list.get(0)` and `list.set(0, val)`.",
      "Confusing `.size()` (ArrayList method) with `.length` (array field) and `.length()` (String method).",
      "Trying to store primitive types directly: `ArrayList<double>` does not compile; must use `ArrayList<Double>`."
    ],
    "cramSheet": [
      "Access size via `.size()`; access element via `.get(i)`; modify via `.set(i, val)`.",
      "`.add(val)` appends to end; `.add(i, val)` inserts at index `i`.",
      "`.remove(i)` shifts all subsequent elements to the left.",
      "Always loop BACKWARD when removing items from an ArrayList."
    ]
  },
  {
    "unitId": "u8",
    "unitNumber": 8,
    "title": "2D Array",
    "examWeight": "7.5%–10% of AP Exam",
    "bigIdea": "2D arrays are arrays of 1D array references, organized conceptually as matrices accessed via `grid[row][col]` indices.",
    "keyTheorems": [
      {
        "name": "Row-Major vs. Column-Major Traversal",
        "conditions": "Traversing 2D array elements using nested loops.",
        "conclusion": "Row-Major traversal iterates row by row (outer loop = rows, inner loop = columns). Column-Major traversal iterates column by column (outer loop = columns, inner loop = rows). Java stores 2D arrays in row-major order.",
        "apTip": "Number of rows = `mat.length`. Number of columns = `mat[0].length`."
      },
      {
        "name": "Matrix Dimension Sizing Rule",
        "conditions": "Inspecting bounds for rectangular matrices `Type[][] grid = new Type[numRows][numCols]`.",
        "conclusion": "Row indices span `0` to `grid.length - 1`. Column indices span `0` to `grid[0].length - 1`. Accessing `grid[r][c]` accesses row `r` and column `c`.",
        "apTip": "FRQ Question 4 (2D Array) regularly tests traversing neighborhoods (e.g. checking all 4 adjacent neighbors: up, down, left, right). Always check that neighbor coordinates stay within `r >= 0 && r < grid.length && c >= 0 && c < grid[0].length`!"
      }
    ],
    "formulas": [
      {
        "name": "Row-Major Traversal Skeleton",
        "latex": "\\text{for } (r=0; r < \\text{mat.length}; r++) \\; \\text{for } (c=0; c < \\text{mat}[0].\\text{length}; c++) \\implies \\text{mat}[r][c]",
        "explanation": "Row index $r$ outer; column index $c$ inner."
      }
    ],
    "sections": [
      {
        "heading": "1. Row-Major vs. Column-Major Code Patterns",
        "content": "Standard traversal loops in Java:\n\n| Traversal Style | Outer Loop Header | Inner Loop Header | Element Access | Order of Processing |\n| :--- | :--- | :--- | :--- | :--- |\n| **Row-Major** | `for (int r = 0; r < mat.length; r++)` | `for (int c = 0; c < mat[0].length; c++)` | `mat[r][c]` | Row 0 across, then Row 1 across... |\n| **Column-Major** | `for (int c = 0; c < mat[0].length; c++)` | `for (int r = 0; r < mat.length; r++)` | `mat[r][c]` | Col 0 down, then Col 1 down... |\n| **Enhanced For** | `for (int[] row : mat)` | `for (int val : row)` | `val` | Row-major read-only traversal |"
      },
      {
        "heading": "2. 2D Array Traversals, Dimensions & Grid Algorithms (CED 8.1-8.2)",
        "content": "Matrix representations and dimensional analysis in Java:\n\n* **Row and Column Dimension Rules**:\n  * 'matrix.length': Number of **rows** in the 2D array.\n  * 'matrix[0].length': Number of **columns** in the 2D array (assuming rectangular matrix).\n  * Valid row index range: '0' to 'matrix.length - 1'.\n  * Valid column index range: '0' to 'matrix[0].length - 1'.\n* **Row-Major vs. Column-Major Iteration**:\n  * **Row-Major (Default in Java)**: Outer loop iterates over rows ('for (int r = 0; r < matrix.length; r++)'); inner loop iterates over columns ('for (int c = 0; c < matrix[r].length; c++)').\n  * **Column-Major**: Outer loop iterates over columns ('for (int c = 0; c < matrix[0].length; c++)'); inner loop iterates over rows ('for (int r = 0; r < matrix.length; r++)')."
      },
      {
        "heading": "3. 2D Array Memory Structure & Row/Col Dimensions (CED 8.1)",
        "content": "In Java, a two-dimensional array is an \"array of 1D array references\":\n```java\nint[][] grid = new int[4][6]; // 4 rows, 6 columns\n```\n- **Row Count:** `grid.length` returns the number of rows ($4$).\n- **Column Count:** `grid[0].length` returns the number of columns in row 0 ($6$).\n- **Element Access Order:** `grid[row][col]`. The row index always comes first!\n- **Default Heap Values:** Numeric 2D arrays are filled with `0`; reference matrices (e.g. `String[][]`) are filled with `null` pointers."
      },
      {
        "heading": "4. Row-Major vs. Column-Major Traversal Mechanics (CED 8.2)",
        "content": "Systematic navigation through 2D grids:\n- **Row-Major Traversal (Default in Java):**\n  Visits all columns across Row 0, then Row 1, etc.:\n  ```java\n  for (int r = 0; r < grid.length; r++) {\n      for (int c = 0; c < grid[r].length; c++) {\n          System.out.print(grid[r][c] + \" \");\n      }\n      System.out.println();\n  }\n  ```\n- **Column-Major Traversal:**\n  Visits all rows down Column 0, then Column 1, etc.:\n  ```java\n  for (int c = 0; c < grid[0].length; c++) {\n      for (int r = 0; r < grid.length; r++) {\n          System.out.print(grid[r][c] + \" \");\n      }\n      System.out.println();\n  }\n  ```\n- **2D Enhanced For Loop (Row-Major):**\n  ```java\n  for (int[] row : grid) {\n      for (int cell : row) {\n          total += cell;\n      }\n  }\n  ```"
      },
      {
        "heading": "5. Grid Boundary Checking & Neighbor Search Algorithms (CED 8.2)",
        "content": "FRQ Question 4 regularly requires checking orthogonal neighbor cells (North, South, East, West):\n- **Safe Neighbor Navigation Pattern:**\n  ```java\n  public boolean hasAdjacentMatch(int[][] mat, int r, int c) {\n      int target = mat[r][c];\n      // Check North:\n      if (r > 0 && mat[r - 1][c] == target) return true;\n      // Check South:\n      if (r < mat.length - 1 && mat[r + 1][c] == target) return true;\n      // Check West:\n      if (c > 0 && mat[r][c - 1] == target) return true;\n      // Check East:\n      if (c < mat[0].length - 1 && mat[r][c + 1] == target) return true;\n      return false;\n  }\n  ```\n  Always verify boundary conditions ($r > 0$, $r < \\text{rows}-1$, etc.) in short-circuit evaluation **before** accessing `mat[r][c]`!"
      },
      {
        "heading": "6. Matrix Transposition & Diagonal Traversal Algorithms (CED 8.2)",
        "content": "Advanced 2D array matrix operations tested on AP CSA Section I and FRQ:\n```java\npublic class MatrixOperations {\n    /** Transposes a square matrix in-place (swaps rows and columns across main diagonal) */\n    public static void transposeSquare(int[][] mat) {\n        for (int r = 0; r < mat.length; r++) {\n            for (int c = r + 1; c < mat[0].length; c++) {\n                int temp = mat[r][c];\n                mat[r][c] = mat[c][r];\n                mat[c][r] = temp;\n            }\n        }\n    }\n    \n    /** Computes sum of main diagonal (top-left to bottom-right) */\n    public static int mainDiagonalSum(int[][] mat) {\n        int sum = 0;\n        for (int i = 0; i < mat.length; i++) {\n            sum += mat[i][i]; // Single loop O(N) access!\n        }\n        return sum;\n    }\n}\n```\n- **Notice the loop bounds in `transposeSquare`:**\n  Inner loop starts at `int c = r + 1`. Starting at `c = 0` would swap elements twice, leaving the matrix unchanged!"
      },
      {
        "heading": "7. Conway’s Game of Life & Neighbor Cell Counting Pattern (CED 8.2)",
        "content": "Counting neighbors in a 2D grid without throwing `ArrayIndexOutOfBoundsException`:\n```java\npublic class GridGame {\n    /** Counts live neighbor cells in 8 directions (North, South, East, West, Diagonals) */\n    public static int countLiveNeighbors(boolean[][] grid, int row, int col) {\n        int liveCount = 0;\n        for (int r = row - 1; r <= row + 1; r++) {\n            for (int c = col - 1; c <= col + 1; c++) {\n                // Guard: Ensure neighbor is inside grid bounds and is NOT the center cell itself!\n                if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {\n                    if (!(r == row && c == col) && grid[r][c]) {\n                        liveCount++;\n                    }\n                }\n            }\n        }\n        return liveCount;\n    }\n}\n```"
      },
      {
        "heading": "8. Canonical FRQ Question 4 Blueprint: Complete 2D LightBoard Grid Engine",
        "content": "A complete College Board FRQ 4 implementation modeling a grid of light switches:\n```java\npublic class LightBoard {\n    private boolean[][] lights; // true = on, false = off\n    \n    /** Constructor initializing lights with specified probability */\n    public LightBoard(int numRows, int numCols) {\n        lights = new boolean[numRows][numCols];\n        for (int r = 0; r < numRows; r++) {\n            for (int c = 0; c < numCols; c++) {\n                lights[r][c] = Math.random() < 0.40; // 40% chance of being on\n            }\n        }\n    }\n    \n    /** Evaluates state of light at (row, col) based on column rules */\n    public boolean evaluateLight(int row, int col) {\n        int colLightsOn = 0;\n        for (int r = 0; r < lights.length; r++) {\n            if (lights[r][col]) {\n                colLightsOn++;\n            }\n        }\n        \n        if (lights[row][col] && colLightsOn % 2 == 0) {\n            return false; // Turn off if currently on and even count in column\n        } else if (!lights[row][col] && colLightsOn % 3 == 0) {\n            return true;  // Turn on if currently off and multiple of 3 count\n        }\n        return lights[row][col]; // Keep current state\n    }\n}\n```"
      }
    ],
    "workedExamples": [
      {
        "title": "Calculating Column Sums in a 2D Matrix (FRQ Pattern)",
        "topicRef": "CED 8.2 Traversing 2D Arrays",
        "question": "Write a method `colSum(int[][] mat, int col)` that computes and returns the sum of all elements in column `col`.",
        "solutionSteps": [
          "Step 1: Identify bounds: To traverse down a single column, we iterate through every row $r$ from 0 to `mat.length - 1`.",
          "Step 2: Initialize accumulator: `int total = 0;`.",
          "Step 3: Write column traversal loop: `public static int colSum(int[][] mat, int col) { int total = 0; for (int r = 0; r < mat.length; r++) { total += mat[r][col]; } return total; }`.",
          "Step 4: Verify dimensions: `mat[r][col]` accesses row `r` at the fixed column index `col`."
        ],
        "finalAnswer": "A clean $O(\\text{rows})$ method summing a specific column.",
        "apScoringTip": "Remember: rows = `mat.length`, columns = `mat[0].length`. In column traversal, the row index changes while the column index stays fixed."
      }
    ],
    "commonTraps": [
      "Inverting row and column lengths: `mat[0].length` is columns, `mat.length` is rows.",
      "Accessing `mat[c][r]` instead of `mat[r][c]`. First index is ALWAYS row, second is ALWAYS column.",
      "Forgetting bounds checks when examining neighboring cells (e.g. `r - 1` when `r = 0` causes out of bounds error)."
    ],
    "cramSheet": [
      "Rows: `mat.length`; Columns: `mat[0].length`.",
      "Element access: `mat[row][col]`.",
      "Row-major = across rows first; Column-major = down columns first.",
      "Always guard adjacent neighbor checks with `r >= 0 && r < mat.length && c >= 0 && c < mat[0].length`."
    ]
  },
  {
    "unitId": "u9",
    "unitNumber": 9,
    "title": "Inheritance & Polymorphism",
    "examWeight": "5%–10% of AP Exam",
    "bigIdea": "Subclasses inherit state and behavior from superclasses via `extends`, enabling code reuse, method overriding, and runtime polymorphism.",
    "keyTheorems": [
      {
        "name": "The Superclass Constructor Rule and `super`",
        "conditions": "Instantiating a subclass in Java.",
        "conclusion": "A subclass constructor MUST invoke a superclass constructor as its very first executable line using `super(...)`. If `super(...)` is not explicitly written, the Java compiler automatically inserts a call to the no-argument `super()`. If the superclass lacks a no-arg constructor, a compilation error occurs.",
        "apTip": "`super.method()` invokes the superclass version of an overridden method, allowing the subclass to extend rather than completely replace existing logic."
      },
      {
        "name": "Polymorphism and Dynamic Method Binding",
        "conditions": "Executing overridden methods through superclass reference variables: `SuperClass obj = new SubClass();`.",
        "conclusion": "Compile-Time Check: The compiler checks the *declared reference type* to verify the method exists. Runtime Execution: The JVM looks at the *actual object type* on the heap and executes the subclass’s overridden version (Dynamic Binding).",
        "apTip": "If `Animal a = new Dog();`, you can only call methods declared in `Animal`. If `Dog` overrides `speak()`, calling `a.speak()` runs `Dog`’s version at runtime!"
      }
    ],
    "formulas": [
      {
        "name": "Polymorphic Object Instantiation",
        "latex": "\\text{Declared Type (Superclass)} \\; \\text{var} = \\mathbf{new} \\; \\text{Actual Type (Subclass)}()",
        "explanation": "Compiler verifies methods on Declared Type; JVM executes overrides on Actual Type."
      }
    ],
    "sections": [
      {
        "heading": "1. Overriding vs. Overloading in Java",
        "content": "Critical distinction in object-oriented design:\n\n| Feature | Method Overriding | Method Overloading |\n| :--- | :--- | :--- |\n| **Location** | Across inheritance hierarchy (Subclass vs. Superclass) | Within the same class |\n| **Method Name** | Identical | Identical |\n| **Parameter List** | Must be EXACTLY identical | Must be DIFFERENT (types, number, order) |\n| **Return Type** | Must match or be covariant | Can be different |\n| **Binding Time** | Dynamic (Runtime binding) | Static (Compile-time binding) |"
      },
      {
        "heading": "2. The super Keyword, Method Overriding & Dynamic Binding (CED 9.2-9.6)",
        "content": "Polymorphism and class hierarchy rules on the AP exam:\n\n* **The super Constructor Chaining Rule**:\n  * The first statement in any subclass constructor must be a call to 'super(...)'.\n  * If 'super(...)' is not explicitly written, Java **automatically inserts super()** (calling the superclass no-argument constructor).\n  * If the superclass does not have a no-argument constructor, a compile-time error occurs!\n* **Method Overriding vs. Overloading**:\n  * **Overriding**: Subclass defines a method with the exact same name, return type, and parameter list as in the superclass.\n  * **Overloading**: Same method name, but different parameter types/counts within the same class.\n* **Polymorphism Dynamic Method Dispatch**:\n  * 'SuperClass obj = new SubClass(); obj.doWork();'\n  * **Compile-Time Check**: The compiler checks if 'doWork()' exists in 'SuperClass'. If not, it fails to compile!\n  * **Run-Time Execution**: The Java Virtual Machine (JVM) executes the overridden 'doWork()' implementation in 'SubClass' (the actual instantiated object type)!"
      },
      {
        "heading": "3. Inheritance, Extends & Constructor Chaining via `super()` (CED 9.1–9.3)",
        "content": "Creating subclass hierarchies with code reuse:\n```java\npublic class Animal {\n    private String name;\n    public Animal(String name) { this.name = name; }\n    public void speak() { System.out.println(\"Sound\"); }\n}\n\npublic class Dog extends Animal {\n    private String breed;\n    public Dog(String name, String breed) {\n        super(name); // MUST be the first statement in subclass constructor!\n        this.breed = breed;\n    }\n}\n```\n- **Constructor Chaining Rules:**\n  - If a subclass constructor does not explicitly call `super(...)`, Java automatically inserts a call to the superclass no-argument constructor: `super();`.\n  - If the superclass has no default no-argument constructor, a compile-time error occurs!"
      },
      {
        "heading": "4. Polymorphism & Dynamic Method Dispatch (CED 9.4–9.6)",
        "content": "Polymorphism enables an object of a subclass to be treated as an instance of its superclass:\n```java\nAnimal myPet = new Dog(\"Buddy\", \"Golden\"); // Declared type: Animal; Actual type: Dog\nmyPet.speak(); // Executes Dog's overridden speak() method!\n```\n- **Compile-Time Rule (Declared Type):**\n  The compiler checks the **declared type** (`Animal`). If `Animal` does not have method `fetch()`, `myPet.fetch()` produces a compile error, even if `Dog` defines `fetch()`!\n- **Runtime Rule (Actual Type - Dynamic Binding):**\n  At runtime, the JVM looks at the **actual object type** on the heap (`Dog`) to execute the overridden method implementation.\n- **Downcasting:** To call subclass-specific methods: `((Dog) myPet).fetch();`."
      },
      {
        "heading": "5. The Object Superclass & Overriding equals() / toString() (CED 9.7)",
        "content": "In Java, every class implicitly extends `java.lang.Object`:\n- **Default `toString()`:** Returns `ClassName@hexMemoryAddress`. Overriding `toString()` allows custom string representation when printing with `System.out.println(obj)`.\n- **Default `equals(Object obj)`:** Inherited from `Object`, it performs reference equality (`this == obj`).\n- **Overriding `equals` for Content Comparison:**\n  ```java\n  public boolean equals(Object other) {\n      if (other instanceof Student) {\n          Student s = (Student) other;\n          return this.id == s.id;\n      }\n      return false;\n  }\n  ```"
      },
      {
        "heading": "6. Polymorphic Collections & Dynamic Binding Invariants (CED 9.5–9.6)",
        "content": "Storing varied subclass objects inside a unified superclass collection:\n```java\npublic class AnimalShelter {\n    public static void feedAll(ArrayList<Animal> animals) {\n        for (Animal a : animals) {\n            a.speak(); // Dynamic Method Dispatch executes each subclass's specific speak()!\n            // If a is a Dog, prints \"Woof!\"\n            // If a is a Cat, prints \"Meow!\"\n        }\n    }\n}\n```\n- **The Two-Step Method Call Verification Rule on AP Exams:**\n  1. **Compile Time (Declared Type Check):**\n     Look at the *declared type* of the variable on the left side of `=`. Does that class declare or inherit the method being called? If NO $\\implies$ **Compile Error**!\n  2. **Run Time (Dynamic Method Binding):**\n     Look at the *actual instantiated object type* created with `new` on the right side of `=`. The JVM starts searching from that actual subclass up the hierarchy to execute the most specific overridden version."
      },
      {
        "heading": "7. Casting Objects, Upcasting vs. Downcasting & ClassCastException (CED 9.6)",
        "content": "Safely converting object references across an inheritance hierarchy:\n- **Upcasting (Implicit & Always Safe):**\n  ```java\n  Dog d = new Dog(\"Buddy\");\n  Animal a = d; // Upcasting: A Dog IS-A Animal. No cast operator required.\n  ```\n- **Downcasting (Explicit & Potential Crash):**\n  ```java\n  Animal a1 = new Dog(\"Buddy\"); // a1 points to a Dog\n  Dog d1 = (Dog) a1;            // Valid downcast: a1 really is a Dog!\n  \n  Animal a2 = new Animal(\"Generic\");\n  // Dog d2 = (Dog) a2;          // RUNTIME ERROR: ClassCastException! An Animal is not necessarily a Dog!\n  ```\n- **Safe Downcasting with `instanceof`:**\n  ```java\n  if (a1 instanceof Dog) {\n      Dog d = (Dog) a1;\n      d.fetchStick(); // Safely call Dog-exclusive method\n  }\n  ```"
      },
      {
        "heading": "8. Canonical FRQ Question 2 Blueprint: Full Inheritance Class Hierarchy",
        "content": "Implementing a complete subclass with constructor chaining and method overriding:\n```java\npublic class Book {\n    private String title;\n    private double price;\n    \n    public Book(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n    public String getTitle() { return title; }\n    public double getPrice() { return price; }\n    public String getBookInfo() {\n        return title + \"-\" + price;\n    }\n}\n\npublic class Textbook extends Book {\n    private int edition;\n    \n    // Subclass constructor MUST call super() as first line\n    public Textbook(String title, double price, int edition) {\n        super(title, price); // Passes common attributes to Book superclass\n        this.edition = edition;\n    }\n    \n    public int getEdition() {\n        return edition;\n    }\n    \n    // Overrides superclass method to append edition\n    @Override\n    public String getBookInfo() {\n        return super.getBookInfo() + \"-\" + edition;\n    }\n    \n    // Subclass-specific method\n    public boolean canSubstituteFor(Textbook other) {\n        return this.getTitle().equals(other.getTitle()) && this.edition >= other.edition;\n    }\n}\n```"
      }
    ],
    "workedExamples": [
      {
        "title": "Tracing Polymorphic Method Calls with Dynamic Binding",
        "topicRef": "CED 9.5 Creating References Using Inheritance Hierarchies",
        "question": "Given classes `Animal` (with method `speak()` printing \"Sound\") and `Dog extends Animal` (overriding `speak()` to print \"Bark\"), trace:\n```java\nAnimal a1 = new Animal();\nAnimal a2 = new Dog();\na1.speak();\na2.speak();\n```",
        "solutionSteps": [
          "Step 1: Evaluate `a1.speak()`: Declared type `Animal`, actual object on heap is `Animal`. Calls `Animal.speak()` $\\implies$ Prints `\"Sound\"`.",
          "Step 2: Evaluate `a2.speak()`: Declared type is `Animal`. Does `Animal` have a `speak()` method? Yes $\\implies$ Passes compile-time check.",
          "Step 3: Check runtime actual object for `a2`: The object on heap is `Dog`. Does `Dog` override `speak()`? Yes.",
          "Step 4: Dynamic binding executes `Dog.speak()` $\\implies$ Prints `\"Bark\"`."
        ],
        "finalAnswer": "Output:\n`Sound`\n`Bark`",
        "apScoringTip": "Remember: Reference type determines WHAT methods you can call; Actual object type determines WHICH version runs."
      }
    ],
    "commonTraps": [
      "Trying to call a subclass-exclusive method using a superclass reference variable (e.g. `Animal a = new Dog(); a.fetch();` fails compilation if `fetch` is only in `Dog`).",
      "Forgetting that constructors are NOT inherited. Subclasses must define their own constructors and call `super()`.",
      "Attempting to access `private` instance variables of the superclass directly in the subclass. Must use superclass public getters!"
    ],
    "cramSheet": [
      "Subclass uses `extends SuperClass`; single inheritance only in Java.",
      "`super(...)` must be the FIRST statement in a subclass constructor.",
      "Declared reference type determines WHAT you can call; actual object type determines WHAT runs.",
      "Subclasses cannot directly access `private` superclass fields; use getters/setters."
    ]
  },
  {
    "unitId": "u10",
    "unitNumber": 10,
    "title": "Recursion",
    "examWeight": "5%–7.5% of AP Exam",
    "bigIdea": "Recursive methods solve problems by breaking them into smaller self-similar sub-problems, requiring a base case to terminate execution on the call stack.",
    "keyTheorems": [
      {
        "name": "The Base Case and Call Stack Unwinding",
        "conditions": "Executing a recursive function in memory.",
        "conclusion": "Every valid recursive method must have: (1) A Base Case that terminates recursion without making further recursive calls, and (2) A Recursive Step that alters state toward the base case. Each call pushes an activation frame onto the call stack; when the base case is reached, frames resolve and pop off in reverse order (LIFO).",
        "apTip": "Missing or unreachable base cases cause infinite recursion, culminating in a `StackOverflowError`!"
      },
      {
        "name": "Binary Search Algorithmic Complexity",
        "conditions": "Searching a sorted array or list for a target value.",
        "conclusion": "Binary search compares target to the middle element. If unequal, it discards half the remaining elements and recurses on the left or right sub-array. Halving the search space at each step yields $O(\\log_2 N)$ logarithmic runtime.",
        "apTip": "Binary search ONLY works on arrays that are ALREADY SORTED! If the array is unsorted, you must use linear search $O(N)$."
      }
    ],
    "formulas": [
      {
        "name": "Binary Search Midpoint Calculation",
        "latex": "\\text{mid} = \\frac{\\text{low} + \\text{high}}{2}",
        "explanation": "Divides search interval $[\\text{low}, \\text{high}]$ in half at each iteration, requiring at most $\\lceil \\log_2 N \\rceil$ comparisons."
      }
    ],
    "sections": [
      {
        "heading": "1. Recursive vs. Iterative Search & Sort Matrix",
        "content": "Standard algorithms and complexity comparison:\n\n| Algorithm | Method Type | Pre-condition | Best Case | Worst / Average Case |\n| :--- | :--- | :--- | :--- | :--- |\n| **Linear Search** | Iterative | Any array | $O(1)$ (target is at index 0) | $O(N)$ (target at end or missing) |\n| **Binary Search** | Recursive / Iterative | **Array MUST be sorted** | $O(1)$ (target is at middle) | $O(\\log N)$ (repeated halving) |\n| **Selection Sort** | Iterative nested loops | Any array | $O(N^2)$ | $O(N^2)$ (always finds minimum) |\n| **Insertion Sort** | Iterative nested loops | Any array | $O(N)$ (already sorted) | $O(N^2)$ (reverse sorted) |\n| **Merge Sort** | Recursive Divide & Conquer | Any array | $O(N \\log N)$ | $O(N \\log N)$ (splits and merges) |"
      },
      {
        "heading": "2. Sorting Algorithms Execution & Tracing Matrix",
        "content": "Step-by-step execution mechanics and comparison of tested sorting algorithms:\n\n| Algorithm | Pass-by-Pass Mechanism | Number of Comparisons | Number of Swaps | Memory Overhead | AP CSA Exam Trap |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Selection Sort** | Scans remaining unsorted portion for the **absolute minimum**, then executes a single swap with the first unsorted index. | Always $\\frac{N(N-1)}{2} \\approx O(N^2)$ (even if already sorted!) | At most $N-1$ swaps (exact count is $O(N)$) | $O(1)$ in-place | Does NOT terminate early if array is already sorted; runs all passes regardless. |\n| **Insertion Sort** | Takes next element and shifts all larger sorted elements to the right until the correct insertion slot is found. | Best: $N-1 = O(N)$ (sorted); Worst: $\\frac{N(N-1)}{2} = O(N^2)$ (reverse sorted) | Shifts elements right (assignments, not multi-step swaps) | $O(1)$ in-place | Best for small or nearly-sorted datasets; worst case requires shifting every element on every pass. |\n| **Merge Sort** | Recursively divides array into halves until base case of size 1, then invokes `merge()` to combine sorted sub-arrays. | Always $O(N \\log_2 N)$ comparisons across all input distributions | Merges into auxiliary array, then copies back into original array | **$O(N)$ auxiliary array** (requires temporary memory!) | Does NOT sort in-place; requires additional memory allocation equal to the input array size. |"
      },
      {
        "heading": "3. Recursive Call Stacks & StackOverflowError (CED 10.1)",
        "content": "A recursive method calls itself to solve smaller subproblems:\n- **Two Essential Requirements:**\n  1. **Base Case:** Halts recursion and returns a direct value without further recursive calls.\n  2. **Recursive Call:** Reduces problem size toward the base case.\n- **The Call Stack:** Each recursive call pushes an activation record (storing parameters and local variables) onto the JVM stack. When the base case is reached, frames pop off the stack in reverse order (LIFO).\n- **StackOverflowError:** Occurs when recursion lacks a valid base case or fails to converge, exhausting available call stack memory."
      },
      {
        "heading": "4. Binary Search (Recursive & Iterative) (CED 10.2)",
        "content": "Logarithmic search algorithm:\n- **Precondition:** The array **MUST be sorted**!\n- **Algorithm:** Compares target value with middle element:\n  ```java\n  public static int binarySearch(int[] arr, int target, int low, int high) {\n      if (low > high) return -1; // Base case: not found\n      int mid = low + (high - low) / 2;\n      if (arr[mid] == target) return mid;\n      else if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);\n      else return binarySearch(arr, target, mid + 1, high);\n  }\n  ```\n- **Time Complexity:** $O(\\log_2 n)$. For an array of $1{,}000{,}000$ elements, binary search requires at most $\\approx 20$ comparisons!"
      },
      {
        "heading": "5. Merge Sort: Divide and Conquer (CED 10.2)",
        "content": "Optimal $O(n\\log n)$ comparison-based sort:\n- **Divide:** Recursively splits array into two halves until subarray length is $\\le 1$ (base case).\n- **Conquer (Merge):** Merges two sorted halves into a single sorted array using a temporary helper array.\n- **Performance Characteristics:**\n  - Best, Average, and Worst case: $O(n\\log n)$ comparisons.\n  - Requires $O(n)$ auxiliary memory space."
      },
      {
        "heading": "6. Recursive Call Stack Visualization & Stack Frame Unwinding (CED 10.1)",
        "content": "Tracing recursive execution with a call stack tree:\n```java\npublic static int mystery(int n) {\n    if (n <= 1) {\n        return 1; // Base case\n    }\n    return n + mystery(n - 2); // Recursive step\n}\n```\n- **Step-by-Step Stack Push Trace for `mystery(5)`:**\n  - Call 1: `mystery(5)` calls `5 + mystery(3)` (pushed onto stack)\n  - Call 2: `mystery(3)` calls `3 + mystery(1)` (pushed onto stack)\n  - Call 3: `mystery(1)` hits base case ($n \\le 1$), returns `1`\n- **Unwinding Phase (Popping Stack Frames):**\n  - Call 2 resolves: `3 + 1 = 4`, returns `4` to Call 1\n  - Call 1 resolves: `5 + 4 = 9`, returns `9`\n- **Reverse Printing Recursion Trick on AP MCQs:**\n  ```java\n  public static void printStars(int n) {\n      if (n > 0) {\n          printStars(n - 1);           // Recursive call BEFORE print statement!\n          System.out.print(n + \" \");   // Prints during stack UNWINDING!\n      }\n  }\n  // Calling printStars(4) outputs: \"1 2 3 4 \"!\n  // If the print statement were placed BEFORE the recursive call, it would output: \"4 3 2 1 \"!\n  ```"
      },
      {
        "heading": "7. Recursive Binary Search vs. Iterative Binary Search (CED 10.2)",
        "content": "Comparing recursion and iteration for divide-and-conquer search:\n```java\npublic class SearchComparison {\n    /** Iterative Binary Search: O(log N) time, O(1) space */\n    public static int iterativeBinarySearch(int[] arr, int target) {\n        int low = 0, high = arr.length - 1;\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n            if (arr[mid] == target) return mid;\n            else if (arr[mid] < target) low = mid + 1;\n            else high = mid - 1;\n        }\n        return -1;\n    }\n    \n    /** Recursive Binary Search: O(log N) time, O(log N) call stack space */\n    public static int recursiveBinarySearch(int[] arr, int target, int low, int high) {\n        if (low > high) return -1; // Base case: search interval exhausted\n        int mid = low + (high - low) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) return recursiveBinarySearch(arr, target, mid + 1, high);\n        else return recursiveBinarySearch(arr, target, low, mid - 1);\n    }\n}\n```"
      },
      {
        "heading": "8. The Merge Sort Algorithm: Recursive Division & Linear Merge Step (CED 10.2)",
        "content": "The complete $O(N\\log N)$ recursive merge sort implementation:\n```java\npublic class MergeSort {\n    public static void mergeSort(int[] arr, int left, int right) {\n        if (left < right) {\n            int mid = left + (right - left) / 2;\n            mergeSort(arr, left, mid);      // Recursively sort left half\n            mergeSort(arr, mid + 1, right); // Recursively sort right half\n            merge(arr, left, mid, right);   // Merge the two sorted halves\n        }\n    }\n    \n    private static void merge(int[] arr, int left, int mid, int right) {\n        int[] temp = new int[right - left + 1];\n        int i = left, j = mid + 1, k = 0;\n        \n        while (i <= mid && j <= right) {\n            if (arr[i] <= arr[j]) temp[k++] = arr[i++];\n            else temp[k++] = arr[j++];\n        }\n        while (i <= mid) temp[k++] = arr[i++];\n        while (j <= right) temp[k++] = arr[j++];\n        \n        for (int p = 0; p < temp.length; p++) {\n            arr[left + p] = temp[p];\n        }\n    }\n}\n```\n- **Recursion Tree Height:** An array of size $N$ splits $\\log_2 N$ times. Each level merges $N$ elements in linear time $\\implies$ total time complexity is strictly $O(N\\log N)$ in all cases!"
      }
    ],
    "workedExamples": [
      {
        "title": "Tracing Recursive Call Stack Unwinding",
        "topicRef": "CED 10.1 Recursion Call Tracing",
        "question": "Trace the output of `mystery(4)`:\n```java\npublic static int mystery(int n) {\n  if (n <= 1) return 1;\n  return n + mystery(n - 1);\n}\n```",
        "solutionSteps": [
          "Step 1: Frame 1: `mystery(4)` calls `4 + mystery(3)`. Pushed to stack.",
          "Step 2: Frame 2: `mystery(3)` calls `3 + mystery(2)`. Pushed to stack.",
          "Step 3: Frame 3: `mystery(2)` calls `2 + mystery(1)`. Pushed to stack.",
          "Step 4: Frame 4: `mystery(1)` triggers base case `n <= 1`. Returns `1`.",
          "Step 5: Unwind Frame 3: `2 + 1 = 3`.",
          "Step 6: Unwind Frame 2: `3 + 3 = 6`.",
          "Step 7: Unwind Frame 1: `4 + 6 = 10`."
        ],
        "finalAnswer": "`10` (calculates the sum of integers from 1 to $N$: $\\frac{4 \\times 5}{2} = 10$).",
        "apScoringTip": "Draw a stack tree on paper during the exam. Write each call going down, and then substitute return values coming back up."
      }
    ],
    "commonTraps": [
      "Missing base case causing `StackOverflowError`.",
      "Confusing pre-order printing (before recursive call) with post-order printing (after recursive call). Printing after the recursive call prints results in REVERSE order!",
      "Assuming binary search works on any array. Binary search requires the array to be SORTED."
    ],
    "cramSheet": [
      "Every recursive method requires: (1) Base Case, (2) Recursive call moving toward base case.",
      "Binary search runtime: $O(\\log N)$; array MUST be sorted.",
      "Merge sort runtime: $O(N \\log N)$ in all cases.",
      "Drawing an execution tree prevents call stack tracing mistakes."
    ]
  }
];
