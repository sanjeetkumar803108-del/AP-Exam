// AP Computer Science A Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–10)
// Complete authentic coverage: 51 Levels, 153 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_CSA_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Unit 1: Primitive Types",
    "shortTitle": "Unit 1: Primitives",
    "description": "Variables, int/double casting, integer truncation, arithmetic expressions, and operator precedence in Java",
    "examWeight": "2.5–5% of AP Exam",
    "biome": {
      "name": "Primitive Memory Stack & Type Forge",
      "icon": "☕",
      "accentColor": "#6366F1",
      "secondaryColor": "#4F46E5",
      "groundGradient": "from-indigo-100 via-blue-50 to-purple-100",
      "cardBorder": "border-indigo-500",
      "trailColor": "#6366f1",
      "nodeRing": "ring-indigo-400/40",
      "skyTint": "from-indigo-50 to-purple-50/30"
    },
    "levels": [
      {
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "csa-u1-l1",
        "topicNumber": "Topic 1.1 & 1.2",
        "name": "Primitive Data Types & Variables",
        "subtitle": "int, double, boolean, and memory allocation",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa1-l1-q1",
            "stem": "Which of the following is NOT a primitive data type in Java?",
            "options": [
              "`String`",
              "`int`",
              "`double`",
              "`boolean`"
            ],
            "explanation": "In Java, `int`, `double`, `boolean`, and `char` are primitive types that store raw values directly in stack memory. `String` is a reference class type that stores a reference (memory address) pointing to a String object on the heap.",
            "distractorTip": "Notice capitalization: primitive types start with a lowercase letter (`int`), while class reference types start with uppercase (`String`).",
            "correctIndex": 0
          },
          {
            "id": "csa1-l1-q2",
            "stem": "Which of the following variable declarations will cause a compile-time syntax error in Java?",
            "options": [
              "`double average_score = 88.5;`",
              "`int 2ndScore = 95;`",
              "`boolean isPassing = true;`",
              "`int score2nd = 95;`"
            ],
            "explanation": "Java variable identifiers must begin with a letter, an underscore (`_`), or a dollar sign (`$`). An identifier cannot begin with a numeric digit. Therefore, `int 2ndScore = 95;` fails compilation.",
            "distractorTip": "Identifiers can contain digits anywhere except as the very first character.",
            "correctIndex": 1
          },
          {
            "id": "csa1-l1-q3",
            "stem": "Which of the following variable declarations will cause a Java compile-time error?",
            "options": [
              "double x = 4;",
              "boolean isReady = true;",
              "int count = 3.14;",
              "char initial = 'A';"
            ],
            "correctIndex": 2,
            "explanation": "In Java, attempting to assign a floating-point literal (3.14, which defaults to type double) directly to an integer variable causes a compile-time 'lossy conversion' error without an explicit cast: (int) 3.14.",
            "distractorTip": "Java does not automatically narrow double to int; an explicit cast (int) is required."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "csa-u1-l2",
        "topicNumber": "Topic 1.3",
        "name": "Expressions & Integer Division",
        "subtitle": "Truncation, modulo operations, and arithmetic precedence",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa1-l2-q1",
            "stem": "What is the value of `result` after executing the following statement?\n```java\ndouble result = 19 / 4 + 2.5;\n```",
            "options": [
              "`7.25`",
              "`7.0`",
              "`6.5`",
              "`6.25`"
            ],
            "explanation": "In Java, integer division occurs first because `19` and `4` are both integer literals: `19 / 4` truncates the decimal to evaluate to `4`. Then `4 + 2.5` performs mixed arithmetic, promoting `4` to `4.0` and yielding `6.5`.",
            "distractorTip": "Integer division truncates immediately; assigning to a `double` variable does NOT restore lost fractional digits.",
            "correctIndex": 2
          },
          {
            "id": "csa1-l2-q2",
            "stem": "What is the value of `val` after evaluating:\n```java\nint val = 2 + 3 * 4 - 8 / 2;\n```",
            "options": [
              "`6`",
              "`16`",
              "`8`",
              "`10`"
            ],
            "explanation": "Multiplication and division have higher precedence than addition and subtraction. `3 * 4` evaluates to `12`, and `8 / 2` evaluates to `4`. The expression becomes `2 + 12 - 4 = 10`.",
            "distractorTip": "Multiplication and division evaluate from left to right before addition and subtraction.",
            "correctIndex": 3
          },
          {
            "id": "csa1-l2-q3",
            "stem": "What is the value of `result` after executing the following Java statement?\n```java\ndouble result = 1 / 4 * 8.0;\n```",
            "options": [
              "0.0",
              "2.0",
              "0.5",
              "2"
            ],
            "correctIndex": 0,
            "explanation": "Because division and multiplication have equal precedence and associate left-to-right, Java first evaluates `1 / 4`. Since both 1 and 4 are integer literals, integer division truncates to `0`. Then `0 * 8.0` evaluates to `0.0`.",
            "distractorTip": "Integer division truncates: `1 / 4` is 0, NOT 0.25! Once 0 is produced, multiplying by 8.0 yields 0.0."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "csa-u1-l3",
        "topicNumber": "Topic 1.4",
        "name": "Compound Assignment Operators",
        "subtitle": "+=, -=, *=, /=, and %= sequential tracking",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa1-l3-q1",
            "stem": "Consider the following code segment:\n```java\nint x = 7;\nx += 5;\nx *= 2;\nx %= 5;\n```\nWhat is the value of `x` after the code executes?",
            "options": [
              "`4`",
              "`2`",
              "`0`",
              "`1`"
            ],
            "explanation": "Step 1: `x = 7`. Step 2: `x += 5` gives `x = 12`. Step 3: `x *= 2` gives `x = 24`. Step 4: `x %= 5` computes the remainder of $24 / 5$. Since $24 = (5 \\times 4) + 4$, `x` becomes `4`.",
            "distractorTip": "Modulo `%` yields the integer remainder after division.",
            "correctIndex": 0
          },
          {
            "id": "csa1-l3-q2",
            "stem": "What is the value of `k` after running the following valid Java code?\n```java\nint k = 10;\nk += 4.9;\n```",
            "options": [
              "`14.9`",
              "`14`",
              "`15`",
              "Compile-time error: possible loss of precision"
            ],
            "explanation": "In Java, compound assignment operators automatically include an implicit cast to the type of the left-hand variable: `E1 op= E2` is equivalent to `E1 = (T)(E1 op E2)`. Thus, `k += 4.9` becomes `k = (int)(k + 4.9) = (int)(14.9) = 14`.",
            "distractorTip": "Compound assignment `+=` automatically casts the result, whereas `k = k + 4.9;` without a cast would fail compilation!",
            "correctIndex": 1
          },
          {
            "id": "csa1-l3-q3",
            "stem": "Consider the following code snippet:\n```java\nint x = 10;\nx += 5 * 2;\n```\nWhat is the value of `x` after execution?",
            "options": [
              "30",
              "25",
              "100",
              "20"
            ],
            "correctIndex": 3,
            "explanation": "Multiplication has higher precedence than compound assignment: `5 * 2 = 10`. The statement is equivalent to `x = x + 10`, so `10 + 10 = 20`.",
            "distractorTip": "Compound assignment `+=` evaluates the entire right-hand expression first before adding to the variable."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "csa-u1-l4",
        "topicNumber": "Topic 1.5",
        "name": "Casting & Rounding Algorithms",
        "subtitle": "Precision casting precedence and mathematical rounding",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa1-l4-q1",
            "stem": "Which of the following expressions correctly rounds a positive `double` variable `d` to the nearest whole `int`?",
            "options": [
              "`(int) d + 0.5`",
              "`(int) d`",
              "`(int) (d + 0.5)`",
              "`(double) ((int) d)`"
            ],
            "explanation": "Adding `0.5` shifts any value with a fractional component $\\ge 0.5$ up to the next integer. Truncating with `(int)` then yields the correctly rounded integer. The parentheses around `(d + 0.5)` are essential so the addition happens prior to casting.",
            "distractorTip": "Without parentheses around `d + 0.5`, `(int) d + 0.5` casts `d` first, adds `0.5`, and results in a `double`.",
            "correctIndex": 2
          },
          {
            "id": "csa1-l4-q2",
            "stem": "What is the value of `val` after evaluating:\n```java\ndouble val = (double) (7 / 2);\n```",
            "options": [
              "`3.5`",
              "`4.0`",
              "`3`",
              "`3.0`"
            ],
            "explanation": "Parentheses enforce evaluation order: `(7 / 2)` executes first as integer division, truncating to `3`. The cast `(double)` then converts `3` to `3.0`. To obtain `3.5`, the cast must precede one of the operands: `(double) 7 / 2`.",
            "distractorTip": "Casting after integer division cannot recover truncated decimal digits.",
            "correctIndex": 3
          },
          {
            "id": "csa1-l4-q3",
            "stem": "Which of the following expressions correctly rounds a positive double variable `val` to the nearest integer?",
            "options": [
              "(int) val + 0.5",
              "(int)(val + 0.5)",
              "Math.ceil(val)",
              "(double)((int) val)"
            ],
            "correctIndex": 1,
            "explanation": "Adding 0.5 to a positive floating-point number pushes values with fractional parts $\\ge 0.5$ up to the next integer before truncation by `(int)`. For example, `(int)(4.6 + 0.5) = (int)(5.1) = 5`, and `(int)(4.3 + 0.5) = (int)(4.8) = 4`.",
            "distractorTip": "The classic AP rounding formula for positive doubles is `(int)(x + 0.5)`. Note the parentheses around `(val + 0.5)`!"
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "csa-u1-l5",
        "topicNumber": "Topic 1.5",
        "name": "Numeric Limits & Overflow",
        "subtitle": "Integer.MAX_VALUE, Integer.MIN_VALUE, and wrap-around",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa1-l5-q1",
            "stem": "What happens in Java when you execute the following statement?\n```java\nint num = Integer.MAX_VALUE + 1;\n```",
            "options": [
              "`num` overflows and wraps around to `Integer.MIN_VALUE` ($-2,147,483,648$).",
              "An `ArithmeticException` is thrown at runtime.",
              "A compile-time syntax error occurs.",
              "`num` remains equal to `Integer.MAX_VALUE`."
            ],
            "explanation": "Java integers use 32-bit two's complement representation. When the maximum positive value ($2^{31} - 1$) is incremented by 1, the sign bit flips, wrapping around to the minimum negative value `Integer.MIN_VALUE` ($-2^{31}$). Java does not throw an exception on integer overflow.",
            "distractorTip": "Java allows integer overflow silently; no runtime exception is thrown.",
            "correctIndex": 0
          },
          {
            "id": "csa1-l5-q2",
            "stem": "What are the exact values of `Integer.MAX_VALUE` and `Integer.MIN_VALUE` in terms of powers of 2?",
            "options": [
              "`MAX_VALUE = 2^32 - 1`, and `MIN_VALUE = -2^32`",
              "`MAX_VALUE = 2^31 - 1`, and `MIN_VALUE = -2^31`",
              "`MAX_VALUE = 2^31`, and `MIN_VALUE = -2^31`",
              "`MAX_VALUE = 2^16 - 1`, and `MIN_VALUE = -2^16`"
            ],
            "explanation": "In Java, `int` is a 32-bit signed data type. One bit is reserved for the sign, leaving 31 bits for magnitude. Thus, positive numbers range up to $2^{31} - 1$ ($2,147,483,647$) and negative numbers extend down to $-2^{31}$ ($-2,147,483,648$).",
            "distractorTip": "Remember the $-1$ on `MAX_VALUE` because 0 occupies one representation in the non-negative space.",
            "correctIndex": 1
          },
          {
            "id": "csa1-l5-q3",
            "stem": "In Java, what occurs when an arithmetic operation on integer variables produces a result greater than `Integer.MAX_VALUE` ($2^{31} - 1$)?",
            "options": [
              "The program immediately throws an ArithmeticException and crashes.",
              "The value automatically converts to a double without loss of precision.",
              "An integer overflow occurs, wrapping around to negative numbers (specifically `Integer.MIN_VALUE`).",
              "The variable remains pinned at `Integer.MAX_VALUE`."
            ],
            "correctIndex": 2,
            "explanation": "Java integers use 32-bit two's complement representation. When `Integer.MAX_VALUE` (2147483647) is incremented by 1, it overflows and wraps around to `Integer.MIN_VALUE` (-2147483648) without generating an exception.",
            "distractorTip": "Integer overflow wraps around from positive maximum to negative minimum without throwing an exception."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Unit 2: Using Objects & String Methods",
    "shortTitle": "Unit 2: Objects & Strings",
    "description": "Instantiating classes, String immutability, substring, indexOf, equals vs ==, and Math class static methods",
    "examWeight": "5–7.5% of AP Exam",
    "biome": {
      "name": "Heap Memory Grove & String Pool",
      "icon": "🔤",
      "accentColor": "#3B82F6",
      "secondaryColor": "#1D4ED8",
      "groundGradient": "from-blue-100 via-sky-50 to-indigo-100",
      "cardBorder": "border-blue-500",
      "trailColor": "#3b82f6",
      "nodeRing": "ring-blue-400/40",
      "skyTint": "from-blue-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "csa-u2-l1",
        "topicNumber": "Topic 2.1 & 2.2",
        "name": "Object Instantiation & References",
        "subtitle": "new keyword, reference variables, and heap allocation",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa2-l1-q1",
            "stem": "When the statement `Scanner input = new Scanner(System.in);` is executed, what does the variable `input` actually store?",
            "options": [
              "The entire `Scanner` object contents stored directly on the stack.",
              "The string representation of the scanner.",
              "A reference (memory address) to a `Scanner` object allocated in heap memory.",
              "A primitive integer ID assigned by the JVM."
            ],
            "explanation": "In Java, object reference variables do not hold object data directly; they store the memory reference (address) pointing to the object instance located on the garbage-collected heap.",
            "distractorTip": "Primitive variables hold values directly; object reference variables hold addresses pointing to the heap.",
            "correctIndex": 2
          },
          {
            "id": "csa2-l1-q2",
            "stem": "What runtime exception is thrown if you attempt to call a method on an object reference that holds `null`?\n```java\nString s = null;\nint len = s.length();\n```",
            "options": [
              "`IllegalArgumentException`",
              "`ArrayIndexOutOfBoundsException`",
              "`ClassCastException`",
              "`NullPointerException`"
            ],
            "explanation": "Dereferencing a `null` pointer by attempting to invoke an instance method or access an instance variable throws `java.lang.NullPointerException` at runtime.",
            "distractorTip": "Always verify that an object reference is not null before invoking its methods.",
            "correctIndex": 3
          },
          {
            "id": "csa2-l1-q3",
            "stem": "Consider the following code segment:\n```java\nRectangle r1 = new Rectangle(5, 10);\nRectangle r2 = r1;\nr2.setWidth(20);\n```\nWhat is the width of `r1` after this code executes?",
            "options": [
              "5",
              "20",
              "10",
              "0"
            ],
            "correctIndex": 1,
            "explanation": "Object variables in Java store memory references (addresses), not independent object copies. `Rectangle r2 = r1;` creates an alias: both `r1` and `r2` point to the exact same Rectangle object in heap memory. Mutating `r2` mutates `r1`.",
            "distractorTip": "Reference aliasing: Assigning one object reference to another copies the memory address, NOT the object!"
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "csa-u2-l2",
        "topicNumber": "Topic 2.3 & 2.4",
        "name": "Calling Void Methods & Parameters",
        "subtitle": "Void return types, formal vs actual parameters, and pass-by-value",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa2-l2-q1",
            "stem": "Suppose a class has a method declared as:\n```java\npublic void displayInfo(String title, int count)\n```\nWhich statement attempting to call this method will result in a compile error?",
            "options": [
              "`int result = obj.displayInfo(\"Scores\", 10);`",
              "`obj.displayInfo(\"Scores\", 10);`",
              "`obj.displayInfo(\"Test\", 0);`",
              "`String s = \"Data\"; obj.displayInfo(s, 5);`"
            ],
            "explanation": "Methods declared with return type `void` do not return any value. Attempting to assign the result of a void method to a variable causes a compile-time error.",
            "distractorTip": "A void method can only be invoked as a standalone statement.",
            "correctIndex": 0
          },
          {
            "id": "csa2-l2-q2",
            "stem": "Consider the following method and code snippet:\n```java\npublic static void modify(int n) {\n  n = n + 10;\n}\n// in main:\nint val = 5;\nmodify(val);\nSystem.out.println(val);\n```\nWhat is printed by the code?",
            "options": [
              "`15`",
              "`5`",
              "`10`",
              "`0`"
            ],
            "explanation": "Java is strictly pass-by-value. When `val` is passed to `modify()`, a copy of `5` is assigned to parameter `n`. Modifying `n` inside the method alters only the local parameter; the original variable `val` in `main` remains `5`.",
            "distractorTip": "Passing primitive variables passes a copy of their value; the caller's variable cannot be changed.",
            "correctIndex": 1
          },
          {
            "id": "csa2-l2-q3",
            "stem": "In Java, what happens when primitive arguments (such as `int` or `double`) are passed to a method?",
            "options": [
              "They are passed by reference, allowing the method to modify the caller's original variable.",
              "They are automatically boxed into `Object` arrays.",
              "They are passed by value: a copy of the argument's value is passed into the parameter, so changes to the parameter inside the method do not affect the original variable.",
              "The compiler throws an IllegalStateException if the parameter is reassigned."
            ],
            "correctIndex": 2,
            "explanation": "Java is strictly pass-by-value. For primitive types, the parameter receives a copy of the value. Any reassignments or mutations to the parameter variable within the method have zero effect on the caller's variable.",
            "distractorTip": "Java is strictly pass-by-value: modifying a primitive parameter inside a method does NOT change the original caller's variable."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "csa-u2-l3",
        "topicNumber": "Topic 2.5",
        "name": "Non-Void Methods & Return Values",
        "subtitle": "Method evaluation and nesting calls in expressions",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa2-l3-q1",
            "stem": "Consider the following method:\n```java\npublic static int calc(int a, int b) {\n  return a * 2 + b;\n}\n```\nWhat is the value of `ans` after executing:\n```java\nint ans = calc(calc(2, 3), 4);\n```",
            "options": [
              "`14`",
              "`22`",
              "`18`",
              "`11`"
            ],
            "explanation": "Evaluate the inner call first: `calc(2, 3) = 2 * 2 + 3 = 7`. Then evaluate the outer call: `calc(7, 4) = 7 * 2 + 4 = 18`.",
            "distractorTip": "Evaluate nested method calls from the innermost call outward.",
            "correctIndex": 2
          },
          {
            "id": "csa2-l3-q2",
            "stem": "Which of the following is true regarding a method declared with a non-void return type in Java?",
            "options": [
              "The method must take at least one parameter.",
              "The method cannot contain conditional statements.",
              "The method automatically prints its return value to the console.",
              "Every possible execution path through the method must culminate in a `return` statement that produces a value matching the return type."
            ],
            "explanation": "Java enforces static return checking: if a method specifies a return type other than `void`, every branch of control flow must return a value compatible with that type, otherwise the compiler issues a missing return statement error.",
            "distractorTip": "If an `if` block returns a value, an `else` block or fallback return statement is mandatory.",
            "correctIndex": 3
          },
          {
            "id": "csa2-l3-q3",
            "stem": "Consider the method:\n```java\npublic int mystery(int n)\n{\n  if (n <= 1) return 1;\n  return n * mystery(n - 1);\n}\n```\nWhat value is returned by the call `mystery(4)`?",
            "options": [
              "24",
              "10",
              "16",
              "8"
            ],
            "correctIndex": 0,
            "explanation": "This is recursive factorial: `4 * mystery(3) = 4 * (3 * mystery(2)) = 4 * (3 * (2 * mystery(1))) = 4 * 3 * 2 * 1 = 24`.",
            "distractorTip": "Trace recursive calls: `4 * 3 * 2 * 1 = 24`."
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "csa-u2-l4",
        "topicNumber": "Topic 2.6",
        "name": "String Immutability & Concatenation",
        "subtitle": "String pool, immutability, and concatenation order",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa2-l4-q1",
            "stem": "What is printed by the following code?\n```java\nString s = \"Java\";\ns.toUpperCase();\ns.concat(\" Rules\");\nSystem.out.println(s);\n```",
            "options": [
              "`Java`",
              "`JAVA`",
              "`JAVA Rules`",
              "`Java Rules`"
            ],
            "explanation": "`String` objects in Java are immutable—their characters cannot be modified after creation. Methods like `toUpperCase()` and `concat()` return NEW String objects. Because the return values were not reassigned to `s`, `s` remains unchanged as `\"Java\"`.",
            "distractorTip": "String methods never mutate the original string in place; you must assign the result (`s = s.toUpperCase();`).",
            "correctIndex": 0
          },
          {
            "id": "csa2-l4-q2",
            "stem": "What is the output of the following statement?\n```java\nSystem.out.println(\"Total: \" + 5 + 3);\n```",
            "options": [
              "`Total: 8`",
              "`Total: 53`",
              "`Total: 15`",
              "`Compile error: incompatible types`"
            ],
            "explanation": "Evaluation proceeds strictly from left to right. First, `\"Total: \" + 5` performs string concatenation, resulting in `\"Total: 5\"`. Then `\"Total: 5\" + 3` concatenates `3` to produce `\"Total: 53\"`. To add numerically first, parentheses are required: `\"Total: \" + (5 + 3)`.",
            "distractorTip": "String concatenation consumes numbers as strings when evaluated left-to-right without parentheses.",
            "correctIndex": 1
          },
          {
            "id": "csa2-l4-q3",
            "stem": "Consider the following code segment:\n```java\nString s = \"Java\";\ns.concat(\" SE\");\nSystem.out.println(s);\n```\nWhat is printed to the console?",
            "options": [
              "\"Java SE\"",
              "\"SE\"",
              "\"null\"",
              "\"Java\""
            ],
            "correctIndex": 3,
            "explanation": "In Java, `String` objects are immutable. Methods like `concat()`, `toUpperCase()`, and `substring()` do NOT modify the original string; they return a brand-new String object. Because the return value was not assigned back to `s` (`s = s.concat(\" SE\");`), `s` remains `\"Java\"`.",
            "distractorTip": "String immutability: String methods never modify the original String object in place."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "csa-u2-l5",
        "topicNumber": "Topic 2.7",
        "name": "String Methods (substring, indexOf, compareTo)",
        "subtitle": "Index ranges, search return values, and lexicographical order",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa2-l5-q1",
            "stem": "Given the string `String str = \"ComputerScience\";`, what is returned by `str.substring(3, 8)`?",
            "options": [
              "`\"puters\"`",
              "`\"mpute\"`",
              "`\"puter\"`",
              "`\"mputer\"`"
            ],
            "explanation": "`substring(start, end)` includes the character at `start` and excludes the character at `end`. Indices: 0:C, 1:o, 2:m, 3:p, 4:u, 5:t, 6:e, 7:r, 8:S. Characters from index 3 up to 7 are `\"puter\"` (length $= 8 - 3 = 5$).",
            "distractorTip": "Formula: Substring length is always `end - start` ($8 - 3 = 5$ characters).",
            "correctIndex": 2
          },
          {
            "id": "csa2-l5-q2",
            "stem": "What does `str.indexOf(\"cat\")` return if the substring `\"cat\"` is NOT found in `str`?",
            "options": [
              "`0`",
              "`false`",
              "`NullPointerException`",
              "`-1`"
            ],
            "explanation": "By Java specification, if the target substring or character is not present within the string, `indexOf()` returns `-1`.",
            "distractorTip": "Index 0 indicates the target is at the very beginning; `-1` means absent.",
            "correctIndex": 3
          },
          {
            "id": "csa2-l5-q3",
            "stem": "Given the string `String str = \"Computer\";`, what is returned by the call `str.substring(2, 5)`?",
            "options": [
              "\"omp\"",
              "\"mpu\"",
              "\"ompu\"",
              "\"mp\""
            ],
            "correctIndex": 1,
            "explanation": "`substring(startIndex, endIndex)` extracts characters from `startIndex` (inclusive) up to `endIndex` (exclusive). Index 0 = 'C', 1 = 'o', 2 = 'm', 3 = 'p', 4 = 'u', 5 = 't'. Thus characters at indices 2, 3, 4 are `\"mpu\"`.",
            "distractorTip": "Remember: `substring(start, end)` includes `start` but EXCLUDES `end`! Length of result is always `end - start` ($5 - 2 = 3$ chars)."
          }
        ]
      },
      {
        "id": 206,
        "unitIndex": 2,
        "levelNumber": 6,
        "uniqueKey": "csa-u2-l6",
        "topicNumber": "Topic 2.8 & 2.9",
        "name": "Wrapper Classes & Math Class",
        "subtitle": "Autoboxing, Math.random(), pow, and abs",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa2-l6-q1",
            "stem": "Which expression generates a random integer in the range `[15, 45]` inclusive using `Math.random()`?",
            "options": [
              "`(int) (Math.random() * 31) + 15`",
              "`(int) (Math.random() * 30) + 15`",
              "`(int) (Math.random() * 45) + 15`",
              "`(int) Math.random() * 31 + 15`"
            ],
            "explanation": "The standard AP formula for a random integer in the inclusive range $[min, max]$ is `(int) (Math.random() * (max - min + 1)) + min`. Here: $45 - 15 + 1 = 31$, giving `(int) (Math.random() * 31) + 15`.",
            "distractorTip": "Range multiplier is always `(max - min + 1)`. If you omit parentheses around `Math.random() * 31`, `(int) Math.random()` truncates to 0 immediately.",
            "correctIndex": 0
          },
          {
            "id": "csa2-l6-q2",
            "stem": "What is Java autoboxing and unboxing?",
            "options": [
              "A technique to compress bytecode archives.",
              "The automatic conversion the compiler performs between primitive types (e.g., `int`) and their corresponding wrapper class objects (e.g., `Integer`).",
              "Converting numeric strings to binary numbers automatically.",
              "Dynamic allocation of 2D arrays on the stack."
            ],
            "explanation": "Autoboxing automatically wraps a primitive value into an object (e.g., `Integer x = 5;`), while unboxing automatically extracts the primitive value from a wrapper object (e.g., `int y = x;`).",
            "distractorTip": "Wrapper classes are essential when storing primitives in collections like `ArrayList`.",
            "correctIndex": 1
          },
          {
            "id": "csa2-l6-q3",
            "stem": "Which of the following expressions generates a random integer in the range from 10 to 50 inclusive?",
            "options": [
              "(int)(Math.random() * 50) + 10",
              "(int)(Math.random() * 41) + 10",
              "(int)(Math.random() * 40) + 10",
              "(int)(Math.random() * 51)"
            ],
            "correctIndex": 1,
            "explanation": "To generate integers in the range $[\\text{min}, \\text{max}]$, use `(int)(Math.random() * (max - min + 1)) + min`. Here: $50 - 10 + 1 = 41$, so `(int)(Math.random() * 41) + 10` generates values from $10$ to $50$ inclusive.",
            "distractorTip": "Random formula: `(int)(Math.random() * count) + start`. Number of integers from 10 to 50 inclusive is $50 - 10 + 1 = 41$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Unit 3: Boolean Expressions & if Statements",
    "shortTitle": "Unit 3: Booleans & Conditionals",
    "description": "De Morgan’s Laws, short-circuit evaluation, nested if-else statements, and equivalence of boolean logic",
    "examWeight": "15–17.5% of AP Exam",
    "biome": {
      "name": "Logic Gate Fortress & Short-Circuit Pass",
      "icon": "🔀",
      "accentColor": "#10B981",
      "secondaryColor": "#059669",
      "groundGradient": "from-emerald-100 via-teal-50 to-green-100",
      "cardBorder": "border-emerald-500",
      "trailColor": "#10b981",
      "nodeRing": "ring-emerald-400/40",
      "skyTint": "from-emerald-50 to-teal-50/30"
    },
    "levels": [
      {
        "id": 301,
        "unitIndex": 3,
        "levelNumber": 1,
        "uniqueKey": "csa-u3-l1",
        "topicNumber": "Topic 3.1 & 3.2",
        "name": "Boolean Expressions & if Execution",
        "subtitle": "Relational operators, truth values, and branch flow",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa3-l1-q1",
            "stem": "What is printed by the following code?\n```java\nint x = 8;\nif (x > 10)\n  System.out.print(\"A\");\nSystem.out.print(\"B\");\n```",
            "options": [
              "`AB`",
              "`A`",
              "`B`",
              "Nothing is printed"
            ],
            "explanation": "Without curly braces, an `if` statement controls only the single immediately following statement (`System.out.print(\"A\");`). Since `8 > 10` is false, `\"A\"` is skipped. The second statement `System.out.print(\"B\");` is outside the `if` and executes unconditionally, printing `\"B\"`.",
            "distractorTip": "Indentation does not dictate block structure in Java—curly braces `{ }` do!",
            "correctIndex": 2
          },
          {
            "id": "csa3-l1-q2",
            "stem": "What is the boolean value of the expression `!(5 <= 3 || 4 != 4)`?",
            "options": [
              "`false`",
              "`0`",
              "`null`",
              "`true`"
            ],
            "explanation": "`5 <= 3` is false. `4 != 4` is false. `false || false` evaluates to `false`. Negating with `!` gives `!false = true`.",
            "distractorTip": "Evaluate the inner relational expressions first before applying boolean operators.",
            "correctIndex": 3
          },
          {
            "id": "csa3-l1-q3",
            "stem": "Consider the code segment:\n```java\nint x = 5;\nif (x > 2 && x < 10)\n{\n  x += 2;\n}\nif (x > 6)\n{\n  x *= 2;\n}\n```\nWhat is the value of `x` after execution?",
            "options": [
              "7",
              "10",
              "14",
              "5"
            ],
            "correctIndex": 2,
            "explanation": "First if: `5 > 2 && 5 < 10` is true, so `x` becomes `5 + 2 = 7`. Second if: `7 > 6` is also true (since these are separate if statements, not if-else), so `x` becomes `7 * 2 = 14`.",
            "distractorTip": "Watch out for sequential `if` statements vs `if-else`: both independent `if` blocks can execute!"
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "csa-u3-l2",
        "topicNumber": "Topic 3.3 & 3.4",
        "name": "Two-Way Selection & Dangling Else",
        "subtitle": "if-else, else if, and unmatched else association",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa3-l2-q1",
            "stem": "What is printed by the following code?\n```java\nint a = 5;\nint b = 12;\nif (a > 6)\n  if (b > 10)\n    System.out.print(\"One\");\nelse\n  System.out.print(\"Two\");\n```",
            "options": [
              "Nothing is printed.",
              "`Two`",
              "`One`",
              "`OneTwo`"
            ],
            "explanation": "This is the classic Java dangling-else rule: an `else` always matches the nearest preceding unmatched `if` at the same block level. Here, the `else` binds to `if (b > 10)`, NOT `if (a > 6)`. Because `a > 6` (`5 > 6`) is false, the entire inner structure is skipped, printing nothing.",
            "distractorTip": "The compiler ignores visual indentation; the `else` binds to the inner `if`.",
            "correctIndex": 0
          },
          {
            "id": "csa3-l2-q2",
            "stem": "In an `if ... else if ... else` chain, what happens once one of the conditions evaluates to `true`?",
            "options": [
              "All subsequent conditions are still evaluated for truth.",
              "Its associated statement block executes, and all remaining `else if` and `else` branches in the chain are skipped.",
              "The program terminates immediately.",
              "The `else` block executes as a cleanup procedure."
            ],
            "explanation": "An `if-else if-else` chain represents multi-way mutual exclusion. Once a condition is satisfied, its block executes and control immediately jumps past the end of the entire chain.",
            "distractorTip": "Only one branch in an `if-else if-else` structure can execute.",
            "correctIndex": 1
          },
          {
            "id": "csa3-l2-q3",
            "stem": "Consider the following nested structure:\n```java\nif (a > 0)\n  if (b > 0)\n    System.out.print(\"X\");\nelse\n  System.out.print(\"Y\");\n```\nIn Java, to which `if` does the `else` clause belong (the 'dangling else' rule)?",
            "options": [
              "The inner `if (b > 0)`",
              "The outer `if (a > 0)`",
              "Neither; it causes a compiler syntax error.",
              "Both simultaneously."
            ],
            "correctIndex": 0,
            "explanation": "Under Java syntax rules, an `else` clause always pairs with the closest preceding unmatched `if` within the same block, regardless of indentation. Therefore, `else` attaches to `if (b > 0)`.",
            "distractorTip": "Indentation does not fool the Java compiler: an `else` always attaches to the closest preceding `if` unless braces `{}` are used."
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "csa-u3-l3",
        "topicNumber": "Topic 3.5",
        "name": "Short-Circuit Boolean Evaluation",
        "subtitle": "Guarding against null pointers and division by zero",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa3-l3-q1",
            "stem": "Why does the expression `if (str != null && str.length() > 3)` avoid throwing a `NullPointerException` when `str` is `null`?",
            "options": [
              "Because the JVM evaluates boolean conditions in reverse order.",
              "Because `.length()` returns 0 when called on null.",
              "Because `&&` short-circuits: when the left operand `str != null` evaluates to `false`, the JVM skips evaluating the right operand completely.",
              "Because Java initializes all null strings to empty strings automatically."
            ],
            "explanation": "Java evaluates boolean operators from left to right using short-circuit logic. For `&&`, if the first operand is `false`, the overall expression cannot be true, so the right-hand operand `str.length() > 3` is never executed, preventing a null pointer dereference.",
            "distractorTip": "Always put the null check or zero-divisor check on the left side of `&&`.",
            "correctIndex": 2
          },
          {
            "id": "csa3-l3-q2",
            "stem": "Given `int x = 0;`, what is the value of `x` after evaluating:\n```java\nboolean flag = (true || (++x > 0));\n```",
            "options": [
              "`1`",
              "`2`",
              "`-1`",
              "`0`"
            ],
            "explanation": "For the logical OR operator `||`, if the left operand evaluates to `true`, the overall condition is guaranteed to be true. The JVM short-circuits and skips the right operand entirely; therefore, `++x` never executes and `x` remains `0`.",
            "distractorTip": "Side effects (like `++x`) inside short-circuited operands do not execute.",
            "correctIndex": 3
          },
          {
            "id": "csa3-l3-q3",
            "stem": "Why does the expression `str != null && str.length() > 0` avoid throwing a `NullPointerException` when `str` is `null`?",
            "options": [
              "Java string methods automatically handle null references safely.",
              "The compiler reorganizes the condition at compile time.",
              "Short-circuit evaluation stops evaluating `&&` as soon as the first operand (`str != null`) evaluates to `false`.",
              "Logical AND always executes both sides in parallel."
            ],
            "correctIndex": 2,
            "explanation": "In Java, `&&` is a short-circuit operator. If the left operand evaluates to `false`, the entire expression must be false, so Java skips evaluating the right-hand operand, preventing the call to `str.length()` on a null reference.",
            "distractorTip": "Short-circuit evaluation: In `A && B`, if A is false, B is never evaluated. In `A || B`, if A is true, B is never evaluated."
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "csa-u3-l4",
        "topicNumber": "Topic 3.6",
        "name": "De Morgan's Laws & Logic Equivalence",
        "subtitle": "Boolean simplification and operator negation",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa3-l4-q1",
            "stem": "According to De Morgan's Laws, which expression is logically equivalent to `!(x < 10 && y >= 20)`?",
            "options": [
              "`x >= 10 || y < 20`",
              "`x >= 10 && y < 20`",
              "`x > 10 || y <= 20`",
              "`!(x < 10) && !(y >= 20)`"
            ],
            "explanation": "By De Morgan's Law: `!(A && B) == (!A || !B)`. Negating `x < 10` gives `x >= 10`. Negating `y >= 20` gives `y < 20`. Flipping `&&` to `||` yields `x >= 10 || y < 20`.",
            "distractorTip": "Remember: NOT distributes across AND/OR by flipping the operator and reversing each relational comparison ($<$ becomes $\\ge$).",
            "correctIndex": 0
          },
          {
            "id": "csa3-l4-q2",
            "stem": "Which of the following is equivalent to `!(a == b || c != d)`?",
            "options": [
              "`a != b || c == d`",
              "`a != b && c == d`",
              "`a == b && c != d`",
              "`!(a == b) || !(c != d)`"
            ],
            "explanation": "By De Morgan's Law: `!(P || Q) == (!P && !Q)`. Negating `a == b` gives `a != b`. Negating `c != d` gives `c == d`. Combining with `&&` yields `a != b && c == d`.",
            "distractorTip": "`!(P || Q)` transforms into `!P && !Q`.",
            "correctIndex": 1
          },
          {
            "id": "csa3-l4-q3",
            "stem": "Which of the following Boolean expressions is logically equivalent to `!(x < 5 || y >= 10)`?",
            "options": [
              "x >= 5 || y < 10",
              "x < 5 && y >= 10",
              "x <= 5 && y > 10",
              "x >= 5 && y < 10"
            ],
            "correctIndex": 3,
            "explanation": "By De Morgan's Laws: `!(A || B)` $\\equiv$ `!A && !B`. Here, `!(x < 5)` is `x >= 5`, and `!(y >= 10)` is `y < 10`. Thus the expression becomes `x >= 5 && y < 10`.",
            "distractorTip": "Negating `<` gives `>=`; negating `>=` gives `<`; flip `||` to `&&`."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "csa-u3-l5",
        "topicNumber": "Topic 3.7",
        "name": "Comparing Objects & Reference Aliasing",
        "subtitle": "== vs .equals() and heap alias modification",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa3-l5-q1",
            "stem": "Consider the following statements:\n```java\nString s1 = new String(\"AP\");\nString s2 = new String(\"AP\");\n```\nWhat do `(s1 == s2)` and `s1.equals(s2)` evaluate to?",
            "options": [
              "`s1 == s2` is `true`, and `s1.equals(s2)` is `true`.",
              "`s1 == s2` is `false`, and `s1.equals(s2)` is `false`.",
              "`s1 == s2` is `false`, and `s1.equals(s2)` is `true`.",
              "`s1 == s2` is `true`, and `s1.equals(s2)` is `false`."
            ],
            "explanation": "The `==` operator tests reference equality (whether both variables point to the exact same memory address in the heap). Since `new` created two distinct objects, `s1 == s2` is `false`. The `.equals()` method tests logical content equality, returning `true` because both contain `\"AP\"`.",
            "distractorTip": "Always use `.equals()` to compare object contents in Java.",
            "correctIndex": 2
          },
          {
            "id": "csa3-l5-q2",
            "stem": "Consider the following class and code:\n```java\npublic class Point { public int x; public Point(int v) { x = v; } }\n// In client code:\nPoint p1 = new Point(5);\nPoint p2 = p1;\np2.x = 20;\nSystem.out.println(p1.x);\n```\nWhat is printed by the code?",
            "options": [
              "`5`",
              "`0`",
              "`NullPointerException`",
              "`20`"
            ],
            "explanation": "`Point p2 = p1;` creates an alias—it copies the memory address of the object from `p1` into `p2`. Both references point to the exact same `Point` instance on the heap. Mutating `p2.x` alters the shared object, so `p1.x` reflects the new value `20`.",
            "distractorTip": "Assigning one object variable to another does NOT copy the object; it copies only the reference (creates an alias).",
            "correctIndex": 3
          },
          {
            "id": "csa3-l5-q3",
            "stem": "Consider the following code segment:\n```java\nString s1 = new String(\"AP\");\nString s2 = new String(\"AP\");\nboolean b1 = (s1 == s2);\nboolean b2 = s1.equals(s2);\n```\nWhat are the values of `b1` and `b2`?",
            "options": [
              "b1 is true, b2 is true",
              "b1 is false, b2 is true",
              "b1 is true, b2 is false",
              "b1 is false, b2 is false"
            ],
            "correctIndex": 1,
            "explanation": "`==` tests reference equality (whether `s1` and `s2` point to the exact same memory address). Because `new` creates two distinct objects in heap memory, `s1 == s2` is `false`. `.equals()` tests content equality (character sequence), so `s1.equals(s2)` is `true`.",
            "distractorTip": "For objects: `==` compares MEMORY ADDRESSES; `.equals()` compares CONTENTS."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Unit 4: Iteration (Loops)",
    "shortTitle": "Unit 4: Loops & Iteration",
    "description": "While loops, for loops, nested loops, loop termination conditions, and algorithmic loops",
    "examWeight": "17.5–22.5% of AP Exam",
    "biome": {
      "name": "Looping Steppe & Nested Iteration Vault",
      "icon": "🔁",
      "accentColor": "#F59E0B",
      "secondaryColor": "#D97706",
      "groundGradient": "from-amber-100 via-yellow-50 to-orange-100",
      "cardBorder": "border-amber-500",
      "trailColor": "#f59e0b",
      "nodeRing": "ring-amber-400/40",
      "skyTint": "from-amber-50 to-yellow-50/30"
    },
    "levels": [
      {
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "csa-u4-l1",
        "topicNumber": "Topic 4.1",
        "name": "while Loops & Sentinel Control",
        "subtitle": "Loop termination, infinite loop hazards, and loop counters",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa4-l1-q1",
            "stem": "How many times does the body of this loop execute?\n```java\nint count = 1;\nwhile (count <= 16) {\n  count *= 2;\n}\n```",
            "options": [
              "`5` times",
              "`4` times",
              "`16` times",
              "`6` times"
            ],
            "explanation": "Trace variable `count`: Iteration 1: `count` becomes 2. Iteration 2: `count` becomes 4. Iteration 3: `count` becomes 8. Iteration 4: `count` becomes 16. Iteration 5: `count` becomes 32. At that point, `32 <= 16` is false, and the loop terminates. The body executed 5 times.",
            "distractorTip": "Trace step by step: values of count entering the loop are 1, 2, 4, 8, 16 (5 iterations).",
            "correctIndex": 0
          },
          {
            "id": "csa4-l1-q2",
            "stem": "What causes a loop to become an infinite loop?",
            "options": [
              "The loop body contains an `if` statement.",
              "The boolean loop-continuation condition never evaluates to `false` during execution.",
              "The loop control variable is declared as a `double`.",
              "The loop executes more than 100 times."
            ],
            "explanation": "A loop continues running as long as its condition is true. If the loop control variable is never updated, or updated in a way that never fails the condition, the loop runs indefinitely (infinite loop).",
            "distractorTip": "A well-formed loop must have an initialization, condition, and progress update toward termination.",
            "correctIndex": 1
          },
          {
            "id": "csa4-l1-q3",
            "stem": "How many times does the body of the following loop execute?\n```java\nint count = 1;\nwhile (count <= 16)\n{\n  count *= 2;\n}\n```",
            "options": [
              "4 times",
              "5 times",
              "16 times",
              "Infinite loop"
            ],
            "correctIndex": 1,
            "explanation": "Trace: start count = 1.\\nIter 1: count becomes 2 (2 <= 16 true)\\nIter 2: count becomes 4 (4 <= 16 true)\\nIter 3: count becomes 8 (8 <= 16 true)\\nIter 4: count becomes 16 (16 <= 16 true)\\nIter 5: count becomes 32 (32 <= 16 false, loop terminates).\\nThe body executed exactly 5 times.",
            "distractorTip": "Trace through the values of count: 1 $\\to$ 2 $\\to$ 4 $\\to$ 8 $\\to$ 16 $\\to$ 32. 5 loop iterations."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "csa-u4-l2",
        "topicNumber": "Topic 4.2",
        "name": "for Loops & Fencepost Traps",
        "subtitle": "Header components, execution counts, and reverse loops",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa4-l2-q1",
            "stem": "How many times does the loop body execute in the following code?\n```java\nfor (int k = 15; k > 3; k -= 3) {\n  System.out.print(k + \" \");\n}\n```",
            "options": [
              "`5` times",
              "`3` times",
              "`4` times",
              "`12` times"
            ],
            "explanation": "Values of `k` during successive iterations: $k = 15$ (executes), $k = 12$ (executes), $k = 9$ (executes), $k = 6$ (executes). Next update: $k = 3$. The condition `3 > 3` is false, so it terminates. The body executes exactly 4 times.",
            "distractorTip": "Notice the strict inequality `k > 3`: when `k` reaches 3, the loop terminates without running.",
            "correctIndex": 2
          },
          {
            "id": "csa4-l2-q2",
            "stem": "What is the scope of the loop index variable `i` declared as `for (int i = 0; i < 10; i++)`?",
            "options": [
              "It remains accessible throughout the entire enclosing method.",
              "It is accessible anywhere in the entire class.",
              "It is accessible globally across all files.",
              "It is accessible only within the header and body of the `for` loop."
            ],
            "explanation": "Variables declared in the initialization header of a `for` loop have block scope limited strictly to that loop. Attempting to access `i` after the closing brace of the loop results in a compile-time cannot find symbol error.",
            "distractorTip": "If you need the final loop index value outside the loop, declare it before the loop header.",
            "correctIndex": 3
          },
          {
            "id": "csa4-l2-q3",
            "stem": "Consider the following loop designed to print numbers 1 through 5:\n```java\nfor (int i = 1; i < 5; i++)\n{\n  System.out.print(i + \" \");\n}\n```\nWhat error does this code exhibit?",
            "options": [
              "An off-by-one fencepost error: it prints `1 2 3 4` because the condition `i < 5` terminates before printing 5.",
              "An infinite loop because `i` is never incremented.",
              "A syntax error because `i` cannot be declared in the header.",
              "A runtime ArrayIndexOutOfBoundsException."
            ],
            "correctIndex": 0,
            "explanation": "To include 5, the condition must be `i <= 5`. Using `i < 5` stops when `i` reaches 5 without executing the body, printing only `1 2 3 4`. This is the classic off-by-one fencepost bug.",
            "distractorTip": "Off-by-one error: `i < n` iterates $n - 1$ times when starting at 1; use `i <= n` to include $n$."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "csa-u4-l3",
        "topicNumber": "Topic 4.3",
        "name": "Algorithmic Loops (Digits & Strings)",
        "subtitle": "Integer extraction with % 10 and character counting",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa4-l3-q1",
            "stem": "Consider the following algorithm:\n```java\nint num = 4321;\nint sum = 0;\nwhile (num > 0) {\n  sum += num % 10;\n  num /= 10;\n}\n```\nWhat is the value of `sum` after the loop finishes?",
            "options": [
              "`10`",
              "`4321`",
              "`4`",
              "`1`"
            ],
            "explanation": "The loop extracts the rightmost digit using `num % 10` and strips it using `num /= 10`: Iteration 1: `sum += 1`, `num = 432`. Iteration 2: `sum += 2`, `num = 43`. Iteration 3: `sum += 3`, `num = 4`. Iteration 4: `sum += 4`, `num = 0`. Final `sum = 1 + 2 + 3 + 4 = 10`.",
            "distractorTip": "`% 10` isolates the last digit; `/ 10` discards the last digit in integer math.",
            "correctIndex": 0
          },
          {
            "id": "csa4-l3-q2",
            "stem": "To count how many times the two-character string `\"ba\"` appears inside string `str`, what should the loop header boundary be?",
            "options": [
              "`for (int i = 0; i < str.length(); i++)`",
              "`for (int i = 0; i <= str.length() - 2; i++)`",
              "`for (int i = 0; i <= str.length(); i++)`",
              "`for (int i = 1; i < str.length() - 2; i++)`"
            ],
            "explanation": "To inspect two characters with `str.substring(i, i + 2)`, the index `i + 2` cannot exceed `str.length()`. Therefore, `i` can reach at most `str.length() - 2`. Exceeding this boundary throws a `StringIndexOutOfBoundsException`.",
            "distractorTip": "When extracting a substring of length $L$, the maximum start index is `str.length() - L`.",
            "correctIndex": 1
          },
          {
            "id": "csa4-l3-q3",
            "stem": "Consider the following algorithm to sum the digits of a positive integer `n`:\n```java\nint sum = 0;\nwhile (n > 0)\n{\n  sum += n % 10;\n  n /= 10;\n}\n```\nIf `n = 247`, what is `sum` after execution?",
            "options": [
              "11",
              "13",
              "7",
              "14"
            ],
            "correctIndex": 1,
            "explanation": "Iter 1: `n % 10 = 7`, `sum = 7`, `n = 24`.\\nIter 2: `n % 10 = 4`, `sum = 7 + 4 = 11`, `n = 2`.\\nIter 3: `n % 10 = 2`, `sum = 11 + 2 = 13`, `n = 0`.\\nLoop terminates; final sum is 13.",
            "distractorTip": "Standard AP digit extraction pattern: `n % 10` gets rightmost digit, `n /= 10` removes it."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "csa-u4-l4",
        "topicNumber": "Topic 4.4",
        "name": "Nested Iteration & Patterns",
        "subtitle": "Execution multiplications and dependent triangular loops",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa4-l4-q1",
            "stem": "How many times is the word `\"AP\"` printed by this nested loop?\n```java\nfor (int r = 1; r <= 4; r++) {\n  for (int c = 1; c <= r; c++) {\n    System.out.print(\"AP\");\n  }\n}\n```",
            "options": [
              "`16` times",
              "`8` times",
              "`10` times",
              "`12` times"
            ],
            "explanation": "This is a dependent triangular loop: When $r = 1$, inner loop runs 1 time. When $r = 2$, inner loop runs 2 times. When $r = 3$, inner loop runs 3 times. When $r = 4$, inner loop runs 4 times. Total prints = $1 + 2 + 3 + 4 = 10$.",
            "distractorTip": "Sum of integers from 1 to $N$ is $N(N+1)/2$. Here: $4(5)/2 = 10$.",
            "correctIndex": 2
          },
          {
            "id": "csa4-l4-q2",
            "stem": "How many total asterisks are printed by the following independent nested loops?\n```java\nfor (int i = 0; i < 5; i++) {\n  for (int j = 0; j < 3; j++) {\n    System.out.print(\"*\");\n  }\n}\n```",
            "options": [
              "`8`",
              "`12`",
              "`9`",
              "`15`"
            ],
            "explanation": "The outer loop runs 5 times ($i = 0, 1, 2, 3, 4$). For each outer iteration, the independent inner loop runs 3 times ($j = 0, 1, 2$). Total executions = $5 \\times 3 = 15$.",
            "distractorTip": "For independent nested loops, multiply the number of outer iterations by inner iterations.",
            "correctIndex": 3
          },
          {
            "id": "csa4-l4-q3",
            "stem": "How many asterisks `*` are printed by the following nested loop?\n```java\nfor (int i = 0; i < 4; i++)\n{\n  for (int j = 0; j < 3; j++)\n  {\n    System.out.print(\"*\");\n  }\n}\n```",
            "options": [
              "7",
              "12",
              "16",
              "9"
            ],
            "correctIndex": 1,
            "explanation": "The outer loop runs 4 times ($i = 0, 1, 2, 3$). For each outer iteration, the inner loop runs 3 times ($j = 0, 1, 2$). Total executions = $4 \\times 3 = 12$.",
            "distractorTip": "Nested loop executions: Multiply the outer loop iteration count by the inner loop iteration count ($4 \\times 3 = 12$)."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "csa-u4-l5",
        "topicNumber": "Topic 4.5",
        "name": "Informal Run-Time Analysis",
        "subtitle": "Iteration growth rates, O(n) linear vs O(n^2) quadratic loops",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa4-l5-q1",
            "stem": "If a nested loop algorithm performs $N \\times N$ operations for an input size $N$, how does the number of operations change if $N$ is doubled?",
            "options": [
              "The number of operations quadruples (increases by a factor of 4).",
              "The number of operations doubles.",
              "The number of operations increases by 2.",
              "The number of operations increases eightfold."
            ],
            "explanation": "For a quadratic algorithm $f(N) = N^2$, doubling the input size to $2N$ yields $(2N)^2 = 4N^2$, which is exactly 4 times the original operation count.",
            "distractorTip": "Linear $O(N)$ doubles when $N$ doubles; quadratic $O(N^2)$ quadruples ($2^2 = 4$).",
            "correctIndex": 0
          },
          {
            "id": "csa4-l5-q2",
            "stem": "Which of the following code snippets represents a linear $O(N)$ execution time relative to `n`?",
            "options": [
              "```java\nfor (int i = 0; i < n; i++) {\n  for (int j = 0; j < n; j++) {\n    System.out.println(i + j);\n  }\n}\n```",
              "```java\nfor (int i = 0; i < n; i++) {\n  System.out.println(i);\n}\n```",
              "```java\nfor (int i = 0; i < n; i++) {\n  for (int j = 0; j < i; j++) {\n    System.out.println(j);\n  }\n}\n```",
              "```java\nfor (int i = 0; i < 100; i++) {\n  System.out.println(i);\n}\n```"
            ],
            "explanation": "A single loop that iterates from 0 up to `n` executes `n` times, scaling linearly with the size of `n` ($O(n)$). Nested loops scaling with `n` are quadratic $O(n^2)$, and a loop running 100 times regardless of `n` is constant $O(1)$.",
            "distractorTip": "Look for single loops dependent directly on `n` for linear time.",
            "correctIndex": 1
          },
          {
            "id": "csa4-l5-q3",
            "stem": "A nested loop processes an $N \\times N$ grid of pixels by examining every pair of pixels. If doubling $N$ from 100 to 200 increases the number of operations from 10,000 to 40,000, how is the runtime complexity characterized?",
            "options": [
              "$O(N)$ linear time",
              "$O(\\log N)$ logarithmic time",
              "$O(N^2)$ quadratic time",
              "$O(2^N)$ exponential time"
            ],
            "correctIndex": 2,
            "explanation": "When doubling the input size ($2N$) quadruples the runtime ($4 \\times$), the algorithm exhibits quadratic time complexity: $(2N)^2 = 4N^2$, characteristic of nested loops traversing $N$ elements.",
            "distractorTip": "Doubling $N$ quadruples runtime $\\implies O(N^2)$ quadratic complexity."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Unit 5: Writing Classes",
    "shortTitle": "Unit 5: Writing Classes",
    "description": "Encapsulation, constructors, accessor/mutator methods, this keyword, static variables and methods, and scope",
    "examWeight": "5–7.5% of AP Exam",
    "biome": {
      "name": "Class Foundry & Encapsulation Keep",
      "icon": "🏗️",
      "accentColor": "#8B5CF6",
      "secondaryColor": "#7C3AED",
      "groundGradient": "from-purple-100 via-indigo-50 to-pink-100",
      "cardBorder": "border-purple-500",
      "trailColor": "#8b5cf6",
      "nodeRing": "ring-purple-400/40",
      "skyTint": "from-purple-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "csa-u5-l1",
        "topicNumber": "Topic 5.1 & 5.2",
        "name": "Class Anatomy & Encapsulation",
        "subtitle": "Private instance variables, information hiding, and class contracts",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa5-l1-q1",
            "stem": "Why should instance variables in a Java class be declared as `private` rather than `public`?",
            "options": [
              "Because private variables run faster and consume less heap memory.",
              "To allow other classes to override the variables using polymorphism.",
              "To maintain encapsulation by preventing client code from directly accessing or corrupting internal state without validation.",
              "Because the Java compiler refuses to compile public variables in any class."
            ],
            "explanation": "Encapsulation restricts direct external access to internal data, hiding implementation details. By making fields `private` and exposing public accessor (getter) and mutator (setter) methods, a class maintains control and validation over its internal state.",
            "distractorTip": "Encapsulation = Data hiding + controlled access via public methods.",
            "correctIndex": 2
          },
          {
            "id": "csa5-l1-q2",
            "stem": "Which access modifier should be used for internal helper methods that should only be invoked by other methods within the same class?",
            "options": [
              "`public`",
              "`static`",
              "`void`",
              "`private`"
            ],
            "explanation": "`private` methods can only be called from inside the class in which they are defined. They are used for helper subroutines that should remain hidden from external client code.",
            "distractorTip": "`public` is for client interfaces; `private` is for internal class implementation.",
            "correctIndex": 3
          },
          {
            "id": "csa5-l1-q3",
            "stem": "Why are instance variables in a well-designed Java class declared with `private` visibility rather than `public`?",
            "options": [
              "To prevent instance variables from occupying memory on the heap.",
              "To allow subclasses to override them as methods.",
              "To implement encapsulation, preventing external classes from modifying state directly and enforcing controlled access via public accessor and mutator methods.",
              "To automatically make them accessible to static methods."
            ],
            "correctIndex": 2,
            "explanation": "Encapsulation restricts direct external access to internal object state by declaring instance variables `private` and exposing public getters (accessors) and setters (mutators), ensuring data integrity and validation.",
            "distractorTip": "Encapsulation = `private` instance variables + `public` methods to control and validate access."
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "csa-u5-l2",
        "topicNumber": "Topic 5.3",
        "name": "Constructors & Overloading",
        "subtitle": "Default no-arg constructors and signature overloading",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa5-l2-q1",
            "stem": "A programmer writes a class `Book` that contains only one constructor:\n```java\npublic Book(String title, int pages) { ... }\n```\nWhat happens if client code attempts to execute `Book b = new Book();`?",
            "options": [
              "A compile-time error occurs because Java only provides a default no-argument constructor when NO constructors are defined by the programmer.",
              "The code compiles and sets `title` to `null` and `pages` to `0`.",
              "A runtime `NullPointerException` is thrown upon instantiation.",
              "The compiler creates a blank book with 100 pages."
            ],
            "explanation": "If a class contains zero declared constructors, Java automatically provides a default no-argument constructor. However, as soon as ANY constructor is explicitly declared, Java ceases to provide the default constructor, causing `new Book()` to fail compilation.",
            "distractorTip": "If you declare a parameterized constructor, you must explicitly write a no-arg constructor if you want one.",
            "correctIndex": 0
          },
          {
            "id": "csa5-l2-q2",
            "stem": "Which of the following defines constructor overloading?",
            "options": [
              "Creating a constructor in a subclass with the exact same parameters as the superclass constructor.",
              "Having multiple constructors in the same class that share the class name but have different parameter lists (types, number, or order).",
              "Declaring a constructor with a `void` return type.",
              "Calling a constructor recursively inside another constructor."
            ],
            "explanation": "Overloading occurs when two or more constructors (or methods) in the same class share the exact same name but have distinct parameter lists, allowing objects to be instantiated with different combinations of initial data.",
            "distractorTip": "Overloading = Same name, different parameter lists. Overriding requires inheritance.",
            "correctIndex": 1
          },
          {
            "id": "csa5-l2-q3",
            "stem": "If a programmer writes a class with a custom parameterized constructor `public Student(String name, int id)` but does NOT write a no-argument constructor, what happens if another class calls `new Student()`?",
            "options": [
              "Java uses the default no-argument constructor automatically.",
              "The program generates a compile-time error because Java only provides a default no-argument constructor if NO constructors are explicitly defined.",
              "The student object is created with all fields set to null.",
              "A NullPointerException is thrown at runtime."
            ],
            "correctIndex": 1,
            "explanation": "Java automatically provides a free no-argument default constructor ONLY when a class defines zero constructors. As soon as you write any custom constructor, the compiler no longer creates the default no-arg constructor.",
            "distractorTip": "Once you define ANY constructor, the compiler removes the free default no-argument constructor!"
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "csa-u5-l3",
        "topicNumber": "Topic 5.4 & 5.5",
        "name": "Accessors & Mutator Methods",
        "subtitle": "Getters, setters, and representation exposure traps",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa5-l3-q1",
            "stem": "Consider the following class definition:\n```java\npublic class BankAccount {\n  private double balance;\n  public BankAccount(double b) { balance = b; }\n  public double getBalance() { return balance; }\n  public void deposit(double amt) {\n    if (amt > 0) balance += amt;\n  }\n}\n```\nWhat protects `balance` from being set to a negative number?",
            "options": [
              "Java automatically forbids negative values in all double variables.",
              "The `getBalance()` method automatically resets negative balances to zero.",
              "The `deposit` mutator method validates `amt > 0` before updating, and `balance` is `private` so client code cannot bypass this check.",
              "The compiler will not allow negative numbers to be passed into constructors."
            ],
            "explanation": "Because `balance` is `private`, external code cannot write `account.balance = -500;`. All modifications must proceed through `deposit()`, which enforces the business rule `amt > 0`.",
            "distractorTip": "Encapsulation ensures that invariant constraints on data cannot be bypassed by external code.",
            "correctIndex": 2
          },
          {
            "id": "csa5-l3-q2",
            "stem": "What is a potential risk when an accessor (getter) method returns a reference to a mutable object stored as a `private` instance variable?",
            "options": [
              "The Java virtual machine will automatically throw a `ClassCastException`.",
              "The object is immediately marked for garbage collection.",
              "The accessor method will fail compilation because getters cannot return objects.",
              "External client code can modify the internal state of the object directly through the returned reference, breaking encapsulation (representation exposure)."
            ],
            "explanation": "Returning a reference to a mutable object allows the caller to mutate that object directly on the heap without the owning class knowing. To prevent this, accessor methods should return a defensive copy.",
            "distractorTip": "Returning primitive values is safe because primitives are copied by value; returning mutable references can expose state.",
            "correctIndex": 3
          },
          {
            "id": "csa5-l3-q3",
            "stem": "Consider the class:\n```java\npublic class BankAccount {\n  private double balance;\n  public void deposit(double amount) {\n    if (amount > 0) balance += amount;\n  }\n}\n```\nWhat type of method is `deposit`?",
            "options": [
              "An accessor method",
              "A constructor",
              "A mutator method",
              "A static factory method"
            ],
            "correctIndex": 2,
            "explanation": "A mutator (setter) method modifies the internal state or instance variables of an object (e.g. changing `balance`). Accessor (getter) methods retrieve values without modifying state.",
            "distractorTip": "Accessor = GET (reads state); Mutator = SET (modifies state)."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "csa-u5-l4",
        "topicNumber": "Topic 5.6",
        "name": "The 'this' Keyword & Variable Shadowing",
        "subtitle": "Distinguishing instance fields from local parameters",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa5-l4-q1",
            "stem": "Consider the following constructor:\n```java\npublic class Student {\n  private String name;\n  public Student(String name) {\n    name = name;\n  }\n  public String getName() { return name; }\n}\n```\nWhat is returned by `s.getName()` after executing `Student s = new Student(\"Maya\");`?",
            "options": [
              "`null`",
              "`\"Maya\"`",
              "`\"name\"`",
              "`Compile error: variable name is already defined`"
            ],
            "explanation": "Because the parameter `name` has the same name as the instance variable, it 'shadows' the field. The assignment `name = name;` assigns the parameter to itself, leaving the instance variable untouched. Since String instance variables default to `null`, `getName()` returns `null`. The fix is `this.name = name;`.",
            "distractorTip": "This is a classic AP bug: omitting `this.` when parameter names match instance variable names leaves the field uninitialized!",
            "correctIndex": 0
          },
          {
            "id": "csa5-l4-q2",
            "stem": "What does the keyword `this` refer to inside an instance method or constructor?",
            "options": [
              "A reference to the parent superclass.",
              "A reference to the current object whose method or constructor is being called.",
              "The static class type in the Java bytecode.",
              "The return value of the method."
            ],
            "explanation": "`this` represents the implicit parameter pointing to the current executing instance of the class in heap memory.",
            "distractorTip": "`this` points to the current object instance; `super` points to the parent superclass.",
            "correctIndex": 1
          },
          {
            "id": "csa5-l4-q3",
            "stem": "In a class method, what is the purpose of using the `this` keyword, as in `this.name = name;`?",
            "options": [
              "To instantiate a new copy of the object on the stack.",
              "To resolve variable shadowing by distinguishing the object's instance variable from the local parameter variable sharing the same name.",
              "To call the superclass constructor.",
              "To make the variable static across all threads."
            ],
            "correctIndex": 1,
            "explanation": "When a method parameter has the exact same identifier as an instance variable, the parameter 'shadows' (hides) the instance variable. Prepending `this.` explicitly targets the current instance's field rather than the local parameter.",
            "distractorTip": "`this.field = field;` resolves variable shadowing by pointing to the current object's instance variable."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "csa-u5-l5",
        "topicNumber": "Topic 5.7 & 5.8",
        "name": "static Variables, Methods & Scope",
        "subtitle": "Class-level state, Math methods, and access restrictions",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa5-l5-q1",
            "stem": "Consider the following class:\n```java\npublic class Item {\n  private static int count = 0;\n  public Item() { count++; }\n  public static int getCount() { return count; }\n}\n// in client code:\nItem a = new Item();\nItem b = new Item();\nItem c = new Item();\n```\nWhat is returned by `Item.getCount()`?",
            "options": [
              "`1`",
              "`0`",
              "`3`",
              "`Compile error: static method called on class`"
            ],
            "explanation": "A `static` variable belongs to the class itself, not to individual instances. It is shared across all instances. Each time `new Item()` is called, the shared `count` is incremented. After 3 instantiations, `count` is 3.",
            "distractorTip": "Static variables maintain a single shared value across all instances of the class.",
            "correctIndex": 2
          },
          {
            "id": "csa5-l5-q2",
            "stem": "Why can a `static` method NOT directly access non-static instance variables?",
            "options": [
              "Because static methods can only return primitive integers.",
              "Because instance variables are stored on the hard drive rather than RAM.",
              "Because static methods run before the compiler parses instance variables.",
              "Because a static method is invoked on the class as a whole and does not possess a `this` reference to any specific object instance."
            ],
            "explanation": "Static methods operate without an object context (no `this`). Without a specific object instance to target, referencing an instance variable would be ambiguous, resulting in a compile-time error: non-static variable cannot be referenced from a static context.",
            "distractorTip": "Static methods can only access static variables and other static methods directly.",
            "correctIndex": 3
          },
          {
            "id": "csa5-l5-q3",
            "stem": "If a variable in a Java class is declared with the `static` keyword, what does that signify?",
            "options": [
              "The variable cannot be modified after initialization.",
              "A single shared copy of the variable exists for the entire class, shared across all instances of that class.",
              "The variable is stored exclusively in cache memory.",
              "The variable is only accessible from within private methods."
            ],
            "correctIndex": 1,
            "explanation": "Static variables belong to the class itself rather than to individual object instances. All instances share the single static variable in memory, making them ideal for tracking class-wide counters or shared constants.",
            "distractorTip": "Static = belongs to the CLASS (shared by all objects); Non-static = belongs to an INDIVIDUAL instance."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 6,
    "unitId": "u6",
    "title": "Unit 6: 1D Array",
    "shortTitle": "Unit 6: 1D Arrays",
    "description": "Array creation, zero-based indexing, traversal with for and enhanced for-each loops, and array algorithms",
    "examWeight": "10–15% of AP Exam",
    "biome": {
      "name": "Contiguous Memory Array & Index Ridge",
      "icon": "📋",
      "accentColor": "#10B981",
      "secondaryColor": "#059669",
      "groundGradient": "from-emerald-100 via-teal-50 to-green-100",
      "cardBorder": "border-emerald-500",
      "trailColor": "#10b981",
      "nodeRing": "ring-emerald-400/40",
      "skyTint": "from-emerald-50 to-teal-50/30"
    },
    "levels": [
      {
        "id": 601,
        "unitIndex": 6,
        "levelNumber": 1,
        "uniqueKey": "csa-u6-l1",
        "topicNumber": "Topic 6.1",
        "name": "Array Creation & Default Initialization",
        "subtitle": "Zero-based indexing, heap allocation, and default values",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa6-l1-q1",
            "stem": "When the array `boolean[] flags = new boolean[5];` is allocated, what value does each element hold by default?",
            "options": [
              "`false`",
              "`true`",
              "`null`",
              "`0`"
            ],
            "explanation": "In Java, newly created array elements are automatically initialized to default values: numeric types to `0` or `0.0`, `boolean` to `false`, and reference types (objects) to `null`.",
            "distractorTip": "Remember: `boolean` arrays default to `false`; object arrays default to `null`.",
            "correctIndex": 0
          },
          {
            "id": "csa6-l1-q2",
            "stem": "For an array `int[] nums = new int[10];`, what is the index of the first element, the index of the last element, and the expression for the total length?",
            "options": [
              "First index: `1`, Last index: `10`, Length: `nums.length()`",
              "First index: `0`, Last index: `9`, Length: `nums.length`",
              "First index: `0`, Last index: `10`, Length: `nums.size()`",
              "First index: `1`, Last index: `9`, Length: `nums.length`"
            ],
            "explanation": "Java arrays are zero-indexed: valid indices for length $N$ run from $0$ to $N - 1$. The array length is accessed via the public final field `length` (without parentheses!).",
            "distractorTip": "Array length is `.length` (property). String length is `.length()` (method). ArrayList length is `.size()` (method).",
            "correctIndex": 1
          },
          {
            "id": "csa6-l1-q3",
            "stem": "What are the default values assigned to the elements of an integer array `int[] arr = new int[5];` immediately upon creation?",
            "options": [
              "null",
              "-1",
              "0",
              "Garbage random values"
            ],
            "correctIndex": 2,
            "explanation": "In Java, array elements are automatically initialized to default values upon allocation: `0` for numeric primitives (`int`, `double` is `0.0`), `false` for `boolean`, and `null` for object references.",
            "distractorTip": "Default array initializations: numeric = 0, boolean = false, object references = null."
          }
        ]
      },
      {
        "id": 602,
        "unitIndex": 6,
        "levelNumber": 2,
        "uniqueKey": "csa-u6-l2",
        "topicNumber": "Topic 6.2",
        "name": "1D Array Traversals & Bounds",
        "subtitle": "ArrayIndexOutOfBoundsException and fencepost index errors",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa6-l2-q1",
            "stem": "Consider the following code:\n```java\nint[] arr = {10, 20, 30, 40};\nfor (int i = 0; i <= arr.length; i++) {\n  System.out.print(arr[i] + \" \");\n}\n```\nWhat happens when this code is executed?",
            "options": [
              "It prints `10 20 30 40 ` without any error.",
              "It throws an exception immediately before printing anything.",
              "It prints `10 20 30 40 ` and then throws an `ArrayIndexOutOfBoundsException`.",
              "It causes a compile-time syntax error."
            ],
            "explanation": "The condition `i <= arr.length` allows `i` to reach index `4`. Since the valid indices for this 4-element array are `0, 1, 2, 3`, attempting to access `arr[4]` on the final iteration throws `ArrayIndexOutOfBoundsException`.",
            "distractorTip": "Classic AP trap: Array loops should almost always use `i < arr.length`, NOT `i <= arr.length`.",
            "correctIndex": 2
          },
          {
            "id": "csa6-l2-q2",
            "stem": "Which loop correctly traverses an array `arr` from the LAST element down to the FIRST element?",
            "options": [
              "`for (int i = arr.length; i > 0; i--)`",
              "`for (int i = arr.length - 1; i > 0; i--)`",
              "`for (int i = arr.length; i >= 0; i--)`",
              "`for (int i = arr.length - 1; i >= 0; i--)`"
            ],
            "explanation": "The last element is at index `arr.length - 1`, and the first element is at index `0`. Therefore, the loop must initialize at `arr.length - 1` and continue while `i >= 0`, decrementing with `i--`.",
            "distractorTip": "Starting at `arr.length` throws an exception; ending at `i > 0` skips index 0.",
            "correctIndex": 3
          },
          {
            "id": "csa6-l2-q3",
            "stem": "What error occurs when executing the following code?\n```java\nint[] nums = {10, 20, 30};\nSystem.out.println(nums[nums.length]);\n```",
            "options": [
              "It prints 30.",
              "It prints null.",
              "ArrayIndexOutOfBoundsException is thrown at runtime.",
              "A compile-time error occurs."
            ],
            "correctIndex": 2,
            "explanation": "Arrays in Java are zero-indexed, with valid indices from `0` to `length - 1`. For an array of length 3, valid indices are 0, 1, 2. Accessing `nums[3]` throws an `ArrayIndexOutOfBoundsException`.",
            "distractorTip": "Array length is `n`, but the last valid index is `n - 1`. Accessing `nums[nums.length]` always throws an exception!"
          }
        ]
      },
      {
        "id": 603,
        "unitIndex": 6,
        "levelNumber": 3,
        "uniqueKey": "csa-u6-l3",
        "topicNumber": "Topic 6.3",
        "name": "Enhanced for Loop (for-each) Limitations",
        "subtitle": "Read-only primitive copies and lack of index tracking",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa6-l3-q1",
            "stem": "Consider the following loop designed to double every number in an array:\n```java\nint[] nums = {1, 2, 3};\nfor (int x : nums) {\n  x = x * 2;\n}\n```\nWhat are the contents of `nums` after the loop completes?",
            "options": [
              "`{1, 2, 3}` (the array remains completely unchanged)",
              "`{2, 4, 6}`",
              "`{2, 2, 3}`",
              "A runtime exception is thrown."
            ],
            "explanation": "In an enhanced for-each loop over primitives, the loop variable `x` receives a copy of each element's value. Assigning `x = x * 2` modifies only the local copy `x`; it never writes back to the underlying array.",
            "distractorTip": "Enhanced for-each loops cannot modify primitive elements in an array! Use standard indexed loops to modify.",
            "correctIndex": 0
          },
          {
            "id": "csa6-l3-q2",
            "stem": "Which of the following tasks CANNOT be accomplished with an enhanced for-each loop?",
            "options": [
              "Computing the sum of all elements in an array.",
              "Modifying array element values or accessing element index positions.",
              "Counting how many elements meet a certain condition.",
              "Finding the maximum value in an array."
            ],
            "explanation": "Enhanced for-each loops provide neither an index variable nor the ability to reassign array slots. They are designed exclusively for full forward read traversals.",
            "distractorTip": "If you need the index or need to mutate array slots, use `for (int i = 0; ...)`.",
            "correctIndex": 1
          },
          {
            "id": "csa6-l3-q3",
            "stem": "What is a major limitation of the enhanced `for-each` loop in Java when working with primitive 1D arrays?",
            "options": [
              "It cannot traverse backwards or modify the array elements directly.",
              "It runs twice as slow as a standard for loop.",
              "It cannot read array values without throwing exceptions.",
              "It only works on arrays of Strings."
            ],
            "correctIndex": 0,
            "explanation": "The enhanced `for-each` loop provides read-only forward traversal. Because the loop variable receives a copy of each primitive element, assigning to it (`x = 0;`) does NOT change the array. It also cannot traverse backwards or track indices.",
            "distractorTip": "For-each loop: Cannot modify primitive array values, cannot track current index, cannot traverse in reverse."
          }
        ]
      },
      {
        "id": 604,
        "unitIndex": 6,
        "levelNumber": 4,
        "uniqueKey": "csa-u6-l4",
        "topicNumber": "Topic 6.4",
        "name": "Array Algorithms: Min, Max & Averages",
        "subtitle": "Initialization safety and integer division prevention",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa6-l4-q1",
            "stem": "Why is initializing `int max = arr[0];` safer than initializing `int max = 0;` when searching for the maximum value in an array?",
            "options": [
              "Initializing to `0` causes an `ArrayIndexOutOfBoundsException`.",
              "Java forbids assigning literal `0` to variables named `max`.",
              "If all elements in the array are negative, initializing to `0` would incorrectly report `0` as the maximum.",
              "`arr[0]` compiles into faster machine code than literal `0`."
            ],
            "explanation": "If `arr` contains `{-10, -5, -20}`, all values are less than `0`. An algorithm initializing `max = 0` would never find a value greater than `0`, erroneously returning `0` (which is not even in the array!). Initializing to `arr[0]` guarantees `max` starts as a genuine member of the dataset.",
            "distractorTip": "Always initialize min/max search variables to `arr[0]` or `Integer.MIN_VALUE` / `Integer.MAX_VALUE`.",
            "correctIndex": 2
          },
          {
            "id": "csa6-l4-q2",
            "stem": "Given an array `int[] grades = {90, 85, 78, 92};`, which expression correctly calculates the true decimal average without integer truncation?",
            "options": [
              "`(double) (sum / grades.length)`",
              "`sum / grades.length`",
              "`(int) sum / grades.length`",
              "`(double) sum / grades.length`"
            ],
            "explanation": "If `sum` and `grades.length` are both `int`, `sum / grades.length` performs integer division first, discarding the decimal portion. Casting `(double) sum` converts the numerator to a `double` prior to division, promoting the operation to floating-point division.",
            "distractorTip": "Parentheses in `(double) (sum / len)` would cast AFTER truncation has already happened!",
            "correctIndex": 3
          },
          {
            "id": "csa6-u6-l4-q3",
            "stem": "Consider the algorithm to find the maximum value in a non-empty array `arr`:\n```java\nint max = arr[0];\nfor (int i = 1; i < arr.length; i++)\n{\n  if (arr[i] > max) max = arr[i];\n}\n```\nWhy is initializing `max = arr[0]` preferred over initializing `max = 0`?",
            "options": [
              "Initializing to 0 causes an ArrayIndexOutOfBoundsException.",
              "If all values in `arr` are negative numbers (e.g. `{-5, -12, -3}`), initializing to 0 would incorrectly return 0 as the maximum.",
              "The compiler prohibits initializing variables to zero inside search algorithms.",
              "It reduces the runtime from $O(N)$ to $O(1)$."
            ],
            "correctIndex": 1,
            "explanation": "If an array contains only negative integers, any initial value of 0 would be greater than all elements in the array, causing the method to report 0 instead of the true maximum element (e.g. -3). Initializing to `arr[0]` guarantees the benchmark is an authentic element.",
            "distractorTip": "Always initialize min/max search variables to `arr[0]`, NEVER to 0 (which breaks for all-negative arrays)!"
          }
        ]
      },
      {
        "id": 605,
        "unitIndex": 6,
        "levelNumber": 5,
        "uniqueKey": "csa-u6-l5",
        "topicNumber": "Topic 6.4",
        "name": "Array Algorithms: Shifts, Reverses & Search",
        "subtitle": "Left shift, element swapping, and linear search complexity",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa6-l4-q1_2",
            "stem": "Consider the following code to shift elements of array `arr` left by one position:\n```java\nint first = arr[0];\nfor (int i = 0; i < arr.length - 1; i++) {\n  arr[i] = arr[i + 1];\n}\narr[arr.length - 1] = first;\n```\nIf `arr` is `{1, 2, 3, 4}`, what are its contents after execution?",
            "options": [
              "`{2, 3, 4, 1}`",
              "`{1, 1, 2, 3}`",
              "`{4, 1, 2, 3}`",
              "`{2, 3, 4, 4}`"
            ],
            "explanation": "The algorithm saves the first element `1`, then shifts `arr[1]` into index 0, `arr[2]` into index 1, and `arr[3]` into index 2. Finally, the saved element `1` is placed into the last slot `arr[3]`, producing `{2, 3, 4, 1}`.",
            "distractorTip": "Shifting left requires saving `arr[0]` before overwriting it.",
            "correctIndex": 0
          },
          {
            "id": "csa6-l5-q2",
            "stem": "In the worst-case scenario, how many element comparisons does a linear search perform on an array of $N$ elements?",
            "options": [
              "$\\log_2(N)$ comparisons.",
              "$N$ comparisons (when the target is at the very last index or not present).",
              "$N / 2$ comparisons.",
              "$1$ comparison."
            ],
            "explanation": "Linear search checks elements sequentially from index 0. If the search target is at the last index or absent entirely, it must inspect every single one of the $N$ elements ($O(N)$ worst-case).",
            "distractorTip": "Best case = 1 comparison (found at index 0); Worst case = $N$ comparisons.",
            "correctIndex": 1
          },
          {
            "id": "csa6-u6-l5-q3",
            "stem": "Consider the code to reverse an array in place:\n```java\nfor (int i = 0; i < arr.length / 2; i++)\n{\n  int temp = arr[i];\n  arr[i] = arr[arr.length - 1 - i];\n  arr[arr.length - 1 - i] = temp;\n}\n```\nWhy does the loop terminate at `arr.length / 2`?",
            "options": [
              "To prevent swapping elements back to their original positions.",
              "Because the second half of the array is automatically reversed by the compiler.",
              "To avoid comparing odd and even indices.",
              "Because integer division truncates odd lengths."
            ],
            "correctIndex": 0,
            "explanation": "Reversing an array swaps elements from the outer ends inward. If the loop continued all the way to `arr.length`, each element would be swapped twice, restoring the array to its original unreversed order.",
            "distractorTip": "Swapping elements from both ends requires looping only halfway (`i < length / 2`); looping the full length undoes the reversal!"
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 7,
    "unitId": "u7",
    "title": "Unit 7: ArrayList",
    "shortTitle": "Unit 7: ArrayList",
    "description": "Dynamic resizing, wrapper classes (Integer, Double), autoboxing, ArrayList methods (add, get, set, remove), and concurrent removal traps",
    "examWeight": "2.5–7.5% of AP Exam",
    "biome": {
      "name": "Dynamic Heap Meadow & Autoboxing Valley",
      "icon": "📦",
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
        "id": 701,
        "unitIndex": 7,
        "levelNumber": 1,
        "uniqueKey": "csa-u7-l1",
        "topicNumber": "Topic 7.1 & 7.2",
        "name": "ArrayList Basics & Generics",
        "subtitle": "Dynamic resizing, generic type parameters, and size()",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa7-l1-q1",
            "stem": "Which of the following statements correctly declares an `ArrayList` that stores integers?",
            "options": [
              "`ArrayList<int> list = new ArrayList<int>();`",
              "`ArrayList list = new int[];`",
              "`ArrayList<Integer> list = new ArrayList<Integer>();`",
              "`List<int> list = new List<int>();`"
            ],
            "explanation": "Java generic collections like `ArrayList` can only hold reference object types, not primitive types. Therefore, the wrapper class `Integer` must be used instead of `int`.",
            "distractorTip": "`ArrayList<int>` will not compile! You must use the wrapper class `ArrayList<Integer>`.",
            "correctIndex": 2
          },
          {
            "id": "csa7-l1-q2",
            "stem": "What method is used to determine the current number of elements in an `ArrayList` object `list`?",
            "options": [
              "`list.length`",
              "`list.length()`",
              "`list.count()`",
              "`list.size()`"
            ],
            "explanation": "`ArrayList` provides the accessor method `.size()` to retrieve its element count. In contrast, 1D arrays use the field `.length`, and Strings use `.length()`.",
            "distractorTip": "Array = `.length`, String = `.length()`, ArrayList = `.size()`.",
            "correctIndex": 3
          },
          {
            "id": "csa7-l1-q3",
            "stem": "Which of the following declarations correctly creates an `ArrayList` capable of storing integer values in Java?",
            "options": [
              "ArrayList<int> list = new ArrayList<int>();",
              "ArrayList list = new int[];",
              "ArrayList<Integer> list = new ArrayList<Integer>();",
              "List<int> list = new List<int>();"
            ],
            "correctIndex": 2,
            "explanation": "Java generics do not support primitive types (`int`, `double`, `boolean`). They require wrapper class object types, so integers must be declared using `ArrayList<Integer>`.",
            "distractorTip": "Generics require Wrapper classes: `ArrayList<Integer>`, NEVER `ArrayList<int>`!"
          }
        ]
      },
      {
        "id": 702,
        "unitIndex": 7,
        "levelNumber": 2,
        "uniqueKey": "csa-u7-l2",
        "topicNumber": "Topic 7.2",
        "name": "Core ArrayList Methods (add, get, set)",
        "subtitle": "Overwriting with set vs inserting with add",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa7-l2-q1",
            "stem": "Given `ArrayList<String> list = new ArrayList<>();` holding `[\"A\", \"B\", \"C\"]`, what is the effect of `list.set(1, \"Z\")` compared to `list.add(1, \"Z\")`?",
            "options": [
              "`set(1, \"Z\")` replaces `\"B\"` with `\"Z\"` keeping size 3; `add(1, \"Z\")` inserts `\"Z\"` at index 1 and shifts subsequent items right, increasing size to 4.",
              "Both methods perform the exact same operation.",
              "`set` appends to the end; `add` replaces at index 1.",
              "`set` throws an exception if the list is not empty."
            ],
            "explanation": "`.set(index, element)` modifies in-place: it replaces the existing value and returns the old element without altering list size. `.add(index, element)` inserts a new element at that index, shifting existing elements at and above that index to the right and increasing size by 1.",
            "distractorTip": "`set` = Replace (no size change); `add` = Insert (size increases).",
            "correctIndex": 0
          },
          {
            "id": "csa7-l2-q2",
            "stem": "What is the result of executing `list.get(list.size())` on a non-empty `ArrayList`?",
            "options": [
              "It returns the last element of the list.",
              "An `IndexOutOfBoundsException` is thrown at runtime.",
              "It returns `null`.",
              "It returns `0`."
            ],
            "explanation": "Because `ArrayList` is zero-indexed, valid indices range from `0` to `list.size() - 1`. Attempting to access index `list.size()` exceeds the valid boundary and triggers an `IndexOutOfBoundsException`.",
            "distractorTip": "To get the last element of an ArrayList, use `list.get(list.size() - 1)`.",
            "correctIndex": 1
          },
          {
            "id": "csa7-l2-q3",
            "stem": "Consider the code segment:\n```java\nArrayList<String> words = new ArrayList<String>();\nwords.add(\"cat\");\nwords.add(\"dog\");\nwords.add(1, \"bird\");\nwords.set(0, \"ant\");\n```\nWhat does `words` contain after execution?",
            "options": [
              "[\"ant\", \"bird\", \"dog\"]",
              "[\"cat\", \"bird\", \"dog\"]",
              "[\"ant\", \"dog\"]",
              "[\"bird\", \"ant\", \"dog\"]"
            ],
            "correctIndex": 0,
            "explanation": "Initial adds: [\"cat\", \"dog\"].\\n`words.add(1, \"bird\")` inserts at index 1, shifting \"dog\" right: [\"cat\", \"bird\", \"dog\"].\\n`words.set(0, \"ant\")` replaces index 0: [\"ant\", \"bird\", \"dog\"].",
            "distractorTip": "`add(index, val)` SHIFTS elements to the right; `set(index, val)` REPLACES the element at that index."
          }
        ]
      },
      {
        "id": 703,
        "unitIndex": 7,
        "levelNumber": 3,
        "uniqueKey": "csa-u7-l3",
        "topicNumber": "Topic 7.3",
        "name": "ArrayList Removal Traps & Concurrent Shifts",
        "subtitle": "Skipping elements in forward loops and safe backward iteration",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa7-l3-q1",
            "stem": "A student writes this loop to remove all zeros from an `ArrayList<Integer>`:\n```java\nfor (int i = 0; i < list.size(); i++) {\n  if (list.get(i) == 0) {\n    list.remove(i);\n  }\n}\n```\nIf `list` initially contains `[5, 0, 0, 7]`, what does `list` contain after the loop?",
            "options": [
              "`[5, 7]`",
              "`[0, 0]`",
              "`[5, 0, 7]` (the second zero was skipped)",
              "`[5, 0, 0, 7]`"
            ],
            "explanation": "When `i = 1`, the first `0` is removed. All subsequent elements shift left, moving the second `0` into index 1. The loop then increments `i++` to 2, inspecting `7` at index 2 and completely skipping the second `0`!",
            "distractorTip": "One of the most frequent AP CSA traps! Solution: iterate backwards (`for (int i = list.size()-1; i >= 0; i--)`) or decrement `i--` after removing.",
            "correctIndex": 2
          },
          {
            "id": "csa7-l3-q2",
            "stem": "Why does traversing an `ArrayList` backwards from `list.size() - 1` down to `0` solve the element-skipping bug when removing items?",
            "options": [
              "Because backwards loops run in parallel.",
              "Because Java suppresses exceptions in decrementing loops.",
              "Because removing backwards clears the entire list in one step.",
              "Because removing an element only shifts elements at HIGHER indices, leaving the remaining unvisited elements at LOWER indices in their original positions."
            ],
            "explanation": "When iterating backwards, removing an element shifts elements to the right of `i` leftwards into slots that have already been processed. The elements yet to be visited (indices `< i`) remain undisturbed.",
            "distractorTip": "When removing elements by condition from an ArrayList, ALWAYS loop backwards!",
            "correctIndex": 3
          },
          {
            "id": "csa7-l3-q3",
            "stem": "Why does removing elements from an `ArrayList` in a standard forward loop (`for (int i = 0; i < list.size(); i++)`) frequently cause a logic bug?",
            "options": [
              "Removing an element shifts all subsequent elements one index to the left, causing the element immediately following the removed element to be skipped as `i` increments.",
              "It throws an unhandled ConcurrentModificationException.",
              "The ArrayList automatically shrinks to size 0.",
              "Forward loops lock the internal memory buffer."
            ],
            "correctIndex": 0,
            "explanation": "When `list.remove(i)` executes, all elements to the right shift left by one index. When the loop does `i++`, the element that shifted into position `i` is skipped without being checked. Solution: traverse backwards from `list.size() - 1` down to 0.",
            "distractorTip": "Classic AP trap: Removing in a forward loop skips elements due to index shifting left. Traverse BACKWARDS when removing!"
          }
        ]
      },
      {
        "id": 704,
        "unitIndex": 7,
        "levelNumber": 4,
        "uniqueKey": "csa-u7-l4",
        "topicNumber": "Topic 7.4",
        "name": "ArrayList Algorithms: Swapping & Filtering",
        "subtitle": "Temporary variable swapping and creating filtered sub-lists",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa7-l4-q1",
            "stem": "Which code segment correctly swaps the elements at indices `i` and `j` in `ArrayList<String> list`?",
            "options": [
              "```java\nString temp = list.get(i);\nlist.set(i, list.get(j));\nlist.set(j, temp);\n```",
              "```java\nlist.set(i, list.get(j));\nlist.set(j, list.get(i));\n```",
              "```java\nString temp = list.get(i);\nlist.add(i, list.get(j));\nlist.add(j, temp);\n```",
              "```java\nlist.swap(i, j);\n```"
            ],
            "explanation": "A standard three-step swap requires storing `list.get(i)` in a temporary variable, replacing `list.get(i)` with `list.get(j)` using `.set()`, and then setting index `j` to the stored `temp`. Without `temp`, overwriting index `i` first destroys its original value.",
            "distractorTip": "There is no built-in `.swap()` method on `ArrayList` in AP CSA.",
            "correctIndex": 0
          },
          {
            "id": "csa7-l4-q2",
            "stem": "When filtering elements from `list` into a new `result` list without modifying `list`, what approach should be used?",
            "options": [
              "Assign `ArrayList<T> result = list;` and remove unwanted elements from `result`.",
              "Instantiate `ArrayList<T> result = new ArrayList<>();`, iterate through `list`, and call `result.add(item)` whenever `item` satisfies the filter predicate.",
              "Call `list.filter()` which is a built-in method in AP CSA.",
              "Cast `list` to a 1D array and back."
            ],
            "explanation": "Creating a new list and conditionally adding matching elements leaves the original list intact and avoids aliasing issues (assigning `result = list` would modify both lists because both variables reference the same heap object).",
            "distractorTip": "`result = list` creates an alias, not a copy!",
            "correctIndex": 1
          },
          {
            "id": "csa7-l4-q3",
            "stem": "Consider the following method to swap elements in an `ArrayList<String> list` at indices `i` and `j`:\n```java\nString temp = list.set(i, list.get(j));\nlist.set(j, temp);\n```\nWhy does this swap work correctly without an explicit extra `get()` call?",
            "options": [
              "Because `set(index, val)` mutates both indices simultaneously.",
              "Because `list.set(i, val)` replaces the element at index `i` AND returns the element that was previously at index `i`, capturing it in `temp`.",
              "Because Strings are passed by reference.",
              "Because ArrayList methods are static."
            ],
            "correctIndex": 1,
            "explanation": "In Java's `ArrayList`, `E set(int index, E element)` replaces the element and returns the original element previously stored at that index, so `temp` stores the original element at index `i`.",
            "distractorTip": "Note: `set(i, val)` RETURNS the element that was previously at index `i`!"
          }
        ]
      },
      {
        "id": 705,
        "unitIndex": 7,
        "levelNumber": 5,
        "uniqueKey": "csa-u7-l5",
        "topicNumber": "Topic 7.5 & 7.6",
        "name": "Selection Sort Mechanics",
        "subtitle": "Minimum finding, pass counts, and O(n^2) comparisons",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa7-l5-q1",
            "stem": "How does Selection Sort order an array of $N$ integers in ascending order?",
            "options": [
              "It compares adjacent elements and swaps them if they are out of order.",
              "It divides the array into halves, sorts each half, and merges them.",
              "It repeatedly finds the minimum element in the unsorted portion of the array and swaps it into the first position of the unsorted portion, completing in $N - 1$ passes.",
              "It inserts each element into its sorted position by shifting larger elements right."
            ],
            "explanation": "Selection Sort divides the array into a sorted prefix and unsorted suffix. In each pass, it selects the minimum element from the unsorted suffix and swaps it with the element at the beginning of the suffix.",
            "distractorTip": "Selection Sort = Find minimum and swap. Insertion Sort = Shift elements to make room.",
            "correctIndex": 2
          },
          {
            "id": "csa7-l5-q2",
            "stem": "What is the time complexity and number of comparisons performed by Selection Sort on an array that is ALREADY sorted?",
            "options": [
              "$O(N)$ comparisons, because it detects that the array is already sorted.",
              "$O(N \\log N)$ comparisons.",
              "$O(1)$ comparisons.",
              "$O(N^2)$ comparisons, because it must scan the entire unsorted portion every pass regardless of initial order."
            ],
            "explanation": "Selection Sort does not check whether the array is already sorted. In pass $i$, it always compares the current minimum with all remaining elements. Total comparisons is always $N(N-1)/2$, which is $O(N^2)$ in best, worst, and average cases.",
            "distractorTip": "Selection Sort has NO best-case shortcut—it always makes $O(N^2)$ comparisons.",
            "correctIndex": 3
          },
          {
            "id": "csa7-l5-q3",
            "stem": "How many total comparisons does Selection Sort make to sort an array of $N$ integers in both the best-case and worst-case scenarios?",
            "options": [
              "$O(\\log N)$ comparisons",
              "$O(N)$ comparisons",
              "Selection Sort always makes approximately $N(N - 1) / 2$ comparisons, so its complexity is always $O(N^2)$ regardless of initial ordering.",
              "$O(N \\log N)$ comparisons"
            ],
            "correctIndex": 2,
            "explanation": "Selection Sort always scans the entire unsorted portion to find the minimum element in every pass, regardless of whether the array is already sorted, reversed, or random. It always makes $\\frac{N(N-1)}{2} \\approx O(N^2)$ comparisons.",
            "distractorTip": "Selection Sort ALWAYS makes $O(N^2)$ comparisons in best, worst, and average cases."
          }
        ]
      },
      {
        "id": 706,
        "unitIndex": 7,
        "levelNumber": 6,
        "uniqueKey": "csa-u7-l6",
        "topicNumber": "Topic 7.6 & 7.7",
        "name": "Insertion Sort & Ethical Computing",
        "subtitle": "Sorted partition shifting, best-case O(n), and computing ethics",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa7-l6-q1",
            "stem": "Under what condition does Insertion Sort exhibit its best-case time complexity of $O(N)$?",
            "options": [
              "When the array is already sorted in ascending order, because each element requires only 1 comparison to confirm its position.",
              "When the array is sorted in reverse order.",
              "When all elements in the array are negative.",
              "When the array length is a power of 2."
            ],
            "explanation": "In Insertion Sort, if the array is already sorted, the inner while loop immediately tests false after just one comparison for each element. Thus, it makes only $N - 1$ total comparisons ($O(N)$).",
            "distractorTip": "Insertion Sort best case = $O(N)$ (already sorted); worst case = $O(N^2)$ (reverse sorted).",
            "correctIndex": 0
          },
          {
            "id": "csa7-l6-q2",
            "stem": "Which of the following represents an ethical concern related to algorithmic bias in software applications?",
            "options": [
              "Using an open-source compiler rather than a commercial proprietary compiler.",
              "Training predictive algorithms on historical datasets that reflect human systemic prejudice, causing the software to unfairly disadvantage specific demographic groups.",
              "Declaring instance variables as public instead of private.",
              "Using Selection Sort instead of Merge Sort on large datasets."
            ],
            "explanation": "Algorithmic bias occurs when computer systems produce systematically prejudiced results due to biased training data, flawed assumptions, or unrepresentative sampling in development.",
            "distractorTip": "AP CSA Topic 7.7 tests social and ethical impacts of computing systems.",
            "correctIndex": 1
          },
          {
            "id": "csa7-l6-q3",
            "stem": "Under what specific condition does Insertion Sort achieve its optimal best-case runtime of $O(N)$?",
            "options": [
              "When the array is sorted in exact reverse descending order.",
              "When the array contains duplicate elements.",
              "When the array is already pre-sorted in ascending order, requiring only 1 comparison per element and zero shifts.",
              "When the array size is a power of 2."
            ],
            "correctIndex": 2,
            "explanation": "Insertion sort checks whether the current element is greater than the preceding element. If the array is already sorted, this inner condition fails on the very first comparison, requiring only $N - 1$ comparisons and zero element shifts ($O(N)$ best case).",
            "distractorTip": "Insertion sort best case is $O(N)$ when already sorted; worst case is $O(N^2)$ when reverse sorted."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 8,
    "unitId": "u8",
    "title": "Unit 8: 2D Array",
    "shortTitle": "Unit 8: 2D Arrays",
    "description": "2D array creation, row-major vs column-major order traversals, nested loop traversals, and matrix algorithms",
    "examWeight": "7.5–10% of AP Exam",
    "biome": {
      "name": "Matrix Grid & Row-Major Labyrinth",
      "icon": "▦",
      "accentColor": "#6366F1",
      "secondaryColor": "#4F46E5",
      "groundGradient": "from-indigo-100 via-blue-50 to-purple-100",
      "cardBorder": "border-indigo-500",
      "trailColor": "#6366f1",
      "nodeRing": "ring-indigo-400/40",
      "skyTint": "from-indigo-50 to-purple-50/30"
    },
    "levels": [
      {
        "id": 801,
        "unitIndex": 8,
        "levelNumber": 1,
        "uniqueKey": "csa-u8-l1",
        "topicNumber": "Topic 8.1",
        "name": "2D Array Dimensions & Indexing",
        "subtitle": "grid.length, grid[0].length, and element access",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa8-l1-q1",
            "stem": "For a 2D array declared as `int[][] matrix = new int[4][7];`, what do `matrix.length` and `matrix[0].length` represent?",
            "options": [
              "`matrix.length = 7` (number of rows), and `matrix[0].length = 4` (number of columns).",
              "`matrix.length = 28` (total cells), and `matrix[0].length = 4`.",
              "`matrix.length = 4` (number of rows), and `matrix[0].length = 7` (number of columns).",
              "Both expressions evaluate to 28."
            ],
            "explanation": "In Java, a 2D array is an array of 1D row arrays. `matrix.length` returns the number of rows (4), and `matrix[0].length` returns the length of the first row array, which is the number of columns (7).",
            "distractorTip": "Formula: `matrix[rows][cols]`. Row count = `.length`; Column count = `[0].length`.",
            "correctIndex": 2
          },
          {
            "id": "csa8-l1-q2",
            "stem": "Given the initializer `int[][] grid = {{10, 20, 30}, {40, 50, 60}};`, what is the value of `grid[1][2]`?",
            "options": [
              "`50`",
              "`30`",
              "`ArrayIndexOutOfBoundsException`",
              "`60`"
            ],
            "explanation": "Java 2D arrays use zero-based indexing `[row][col]`. Row 0 is `{10, 20, 30}` and Row 1 is `{40, 50, 60}`. In Row 1, index 0 is 40, index 1 is 50, and index 2 is 60. Therefore, `grid[1][2]` is 60.",
            "distractorTip": "Always read 2D array coordinates as `[row][column]`.",
            "correctIndex": 3
          },
          {
            "id": "csa8-l1-q3",
            "stem": "Given the 2D array declaration `int[][] matrix = new int[4][6];`, how many rows and columns does `matrix` have, and what is the index of the bottom-right corner element?",
            "options": [
              "6 rows, 4 columns; index is `matrix[5][3]`",
              "4 rows, 6 columns; index is `matrix[3][5]`",
              "4 rows, 6 columns; index is `matrix[4][6]`",
              "24 rows, 1 column; index is `matrix[23][0]`"
            ],
            "correctIndex": 1,
            "explanation": "`new int[rows][cols]` allocates 4 rows and 6 columns. Because arrays are zero-indexed, valid row indices are $0$ to $3$ and valid column indices are $0$ to $5$. The bottom-right corner is `matrix[3][5]`.",
            "distractorTip": "2D array format: `[row][col]`. Number of rows is `matrix.length`; number of columns is `matrix[0].length`. Last element is `[rows - 1][cols - 1]`."
          }
        ]
      },
      {
        "id": 802,
        "unitIndex": 8,
        "levelNumber": 2,
        "uniqueKey": "csa-u8-l2",
        "topicNumber": "Topic 8.2",
        "name": "Row-Major 2D Array Traversal",
        "subtitle": "Nested loops row-by-row and enhanced for-each matrices",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa8-l2-q1",
            "stem": "Which loop structure traverses a 2D array `mat` in ROW-MAJOR order (visiting every element in row 0, then row 1, etc.)?",
            "options": [
              "```java\nfor (int r = 0; r < mat.length; r++) {\n  for (int c = 0; c < mat[0].length; c++) {\n    System.out.print(mat[r][c] + \" \");\n  }\n}\n```",
              "```java\nfor (int c = 0; c < mat[0].length; c++) {\n  for (int r = 0; r < mat.length; r++) {\n    System.out.print(mat[r][c] + \" \");\n  }\n}\n```",
              "```java\nfor (int r = 0; r < mat.length; r++) {\n  System.out.print(mat[r][r] + \" \");\n}\n```",
              "```java\nfor (int c = 0; c < mat.length; c++) {\n  for (int r = 0; r < mat[0].length; r++) {\n    System.out.print(mat[c][r] + \" \");\n  }\n}\n```"
            ],
            "explanation": "In row-major traversal, the OUTER loop iterates through row index `r`, and the INNER loop iterates through column index `c`. The row index remains fixed while traversing across each column.",
            "distractorTip": "Row-major = Outer loop is Row `r`, Inner loop is Column `c`.",
            "correctIndex": 0
          },
          {
            "id": "csa8-l2-q2",
            "stem": "How can an enhanced for-each loop be used to traverse a 2D integer array `int[][] matrix`?",
            "options": [
              "```java\nfor (int val : matrix) {\n  System.out.print(val + \" \");\n}\n```",
              "```java\nfor (int[] row : matrix) {\n  for (int val : row) {\n    System.out.print(val + \" \");\n  }\n}\n```",
              "```java\nfor (int[][] row : matrix) {\n  for (int val : row) { ... }\n}\n```",
              "Enhanced for-each loops are not allowed on 2D arrays in Java."
            ],
            "explanation": "Because a 2D array is an array of 1D arrays, the outer loop extracts each 1D array (`int[] row`), and the inner loop extracts each primitive integer (`int val`) from that row array.",
            "distractorTip": "Outer type is `int[]`, inner type is `int`.",
            "correctIndex": 1
          },
          {
            "id": "csa8-l2-q3",
            "stem": "Consider the nested loop traversal:\n```java\nfor (int r = 0; r < grid.length; r++)\n{\n  for (int c = 0; c < grid[r].length; c++)\n  {\n    System.out.print(grid[r][c] + \" \");\n  }\n}\n```\nWhat traversal order does this code implement?",
            "options": [
              "Column-major order",
              "Diagonal zigzag order",
              "Row-major order",
              "Spiral order"
            ],
            "correctIndex": 2,
            "explanation": "In row-major traversal, the outer loop iterates over the rows (`r`) and the inner loop iterates across all columns (`c`) of that row, processing entire rows left-to-right from top to bottom.",
            "distractorTip": "Outer loop rows, inner loop columns $\\implies$ Row-major. Outer loop columns, inner loop rows $\\implies$ Column-major."
          }
        ]
      },
      {
        "id": 803,
        "unitIndex": 8,
        "levelNumber": 3,
        "uniqueKey": "csa-u8-l3",
        "topicNumber": "Topic 8.2",
        "name": "Column-Major 2D Array Traversal",
        "subtitle": "Outer column loops and column-wise aggregations",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa8-l3-q1",
            "stem": "What is printed by the following column-major loop?\n```java\nint[][] grid = {{1, 2}, {3, 4}};\nfor (int c = 0; c < grid[0].length; c++) {\n  for (int r = 0; r < grid.length; r++) {\n    System.out.print(grid[r][c] + \" \");\n  }\n}\n```",
            "options": [
              "`1 2 3 4 `",
              "`4 3 2 1 `",
              "`1 3 2 4 `",
              "`1 4 2 3 `"
            ],
            "explanation": "Column 0 is visited first ($c = 0$): $r = 0 \\to grid[0][0] = 1$, $r = 1 \\to grid[1][0] = 3$. Then Column 1 is visited ($c = 1$): $r = 0 \\to grid[0][1] = 2$, $r = 1 \\to grid[1][1] = 4$. Output: `1 3 2 4 `.",
            "distractorTip": "Notice how column-major order travels down each vertical column before moving to the next column.",
            "correctIndex": 2
          },
          {
            "id": "csa8-l3-q2",
            "stem": "Which code segment correctly calculates the sum of all elements in column `targetCol` of `int[][] mat`?",
            "options": [
              "```java\nint sum = 0;\nfor (int c = 0; c < mat[0].length; c++) {\n  sum += mat[targetCol][c];\n}\n```",
              "```java\nint sum = 0;\nfor (int r = 0; r < mat[0].length; r++) {\n  sum += mat[targetCol][r];\n}\n```",
              "```java\nint sum = 0;\nfor (int r : mat[targetCol]) {\n  sum += r;\n}\n```",
              "```java\nint sum = 0;\nfor (int r = 0; r < mat.length; r++) {\n  sum += mat[r][targetCol];\n}\n```"
            ],
            "explanation": "To sum a column, the column index `targetCol` is held constant, and a single loop iterates through all row indices `r` from 0 to `mat.length - 1`, accumulating `mat[r][targetCol]`.",
            "distractorTip": "Summing a column loops over rows `r`. Summing a row loops over columns `c`.",
            "correctIndex": 3
          },
          {
            "id": "csa8-l3-q3",
            "stem": "Consider the column-major traversal loop:\n```java\nfor (int c = 0; c < grid[0].length; c++)\n{\n  for (int r = 0; r < grid.length; r++)\n  {\n    // process grid[r][c]\n  }\n}\n```\nWhat will happen if `grid` is an empty 2D array with 0 rows (`int[][] grid = new int[0][0];`)?",
            "options": [
              "The loops execute 0 times cleanly.",
              "An ArrayIndexOutOfBoundsException is thrown when accessing `grid[0].length`.",
              "The program enters an infinite loop.",
              "A NullPointerException is thrown by the garbage collector."
            ],
            "correctIndex": 1,
            "explanation": "If `grid` has 0 rows (`grid.length == 0`), attempting to access `grid[0]` to check its length throws an `ArrayIndexOutOfBoundsException` because row index 0 does not exist.",
            "distractorTip": "Always ensure `grid.length > 0` before attempting to access `grid[0].length`."
          }
        ]
      },
      {
        "id": 804,
        "unitIndex": 8,
        "levelNumber": 4,
        "uniqueKey": "csa-u8-l4",
        "topicNumber": "Topic 8.3",
        "name": "2D Array Algorithms: Diagonals & Bounds",
        "subtitle": "Main diagonal sum, boundary safety, and grid searches",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa8-l4-q1",
            "stem": "In an $N \\times N$ square matrix `int[][] sq`, which expression represents the sum of the main diagonal elements (from top-left to bottom-right)?",
            "options": [
              "```java\nint sum = 0;\nfor (int i = 0; i < sq.length; i++) {\n  sum += sq[i][i];\n}\n```",
              "```java\nint sum = 0;\nfor (int i = 0; i < sq.length; i++) {\n  sum += sq[i][sq.length - 1 - i];\n}\n```",
              "```java\nint sum = 0;\nfor (int r = 0; r < sq.length; r++)\n  for (int c = 0; c < sq[0].length; c++)\n    sum += sq[r][c];\n```",
              "```java\nint sum = sq[0][0] + sq[sq.length - 1][sq.length - 1];\n```"
            ],
            "explanation": "Main diagonal elements share the exact same row and column index: `sq[0][0], sq[1][1], sq[2][2], ..., sq[N-1][N-1]`. A single loop summing `sq[i][i]` computes this in $O(N)$ time.",
            "distractorTip": "Main diagonal is `sq[i][i]`. The anti-diagonal (top-right to bottom-left) is `sq[i][sq.length - 1 - i]`.",
            "correctIndex": 0
          },
          {
            "id": "csa8-l4-q2",
            "stem": "When checking whether a neighboring coordinate `(r, c)` is within the valid boundaries of `int[][] grid`, which boolean condition is required?",
            "options": [
              "`r > 0 && r <= grid.length && c > 0 && c <= grid[0].length`",
              "`r >= 0 && r < grid.length && c >= 0 && c < grid[0].length`",
              "`r >= 0 && c >= 0 && r + c < grid.length`",
              "`grid[r][c] != null`"
            ],
            "explanation": "Valid rows range from 0 to `grid.length - 1`. Valid columns range from 0 to `grid[0].length - 1`. All four conditions must be joined by `&&` to prevent an `ArrayIndexOutOfBoundsException`.",
            "distractorTip": "Both lower bounds are `>= 0` and both upper bounds are `< length`.",
            "correctIndex": 1
          },
          {
            "id": "csa8-l4-q3",
            "stem": "In an $N \\times N$ square matrix `arr`, which condition identifies elements that lie on the main diagonal running from top-left to bottom-right?",
            "options": [
              "`row + col == arr.length - 1`",
              "`row == col`",
              "`row != col`",
              "`arr[row][col] == 0`"
            ],
            "correctIndex": 1,
            "explanation": "The main diagonal consists of elements where the row index equals the column index: `(0,0), (1,1), (2,2), ... (N-1, N-1)`. (The anti-diagonal running from top-right to bottom-left satisfies `row + col == N - 1`).",
            "distractorTip": "Main diagonal = `row == col`; Opposite anti-diagonal = `row + col == N - 1`."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 9,
    "unitId": "u9",
    "title": "Unit 9: Inheritance & Polymorphism",
    "shortTitle": "Unit 9: Inheritance",
    "description": "Superclasses and subclasses, super keyword, method overriding, polymorphism, Object class, and dynamic method lookup",
    "examWeight": "5–10% of AP Exam",
    "biome": {
      "name": "Hierarchy Spire & Polymorphic Summit",
      "icon": "🧬",
      "accentColor": "#EC4899",
      "secondaryColor": "#DB2777",
      "groundGradient": "from-pink-100 via-rose-50 to-purple-100",
      "cardBorder": "border-pink-500",
      "trailColor": "#ec4899",
      "nodeRing": "ring-pink-400/40",
      "skyTint": "from-pink-50 to-rose-50/30"
    },
    "levels": [
      {
        "id": 901,
        "unitIndex": 9,
        "levelNumber": 1,
        "uniqueKey": "csa-u9-l1",
        "topicNumber": "Topic 9.1",
        "name": "Superclasses, Subclasses & extends",
        "subtitle": "Inheritance hierarchies, IS-A vs HAS-A, and inherited members",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa9-l1-q1",
            "stem": "Which keyword is used in Java to establish that a class inherits from another class?",
            "options": [
              "`implements`",
              "`inherits`",
              "`extends`",
              "`super`"
            ],
            "explanation": "In Java, the `extends` keyword establishes an inheritance relationship: `public class SubClass extends SuperClass`. (In contrast, `implements` is used for interfaces).",
            "distractorTip": "`extends` is for class inheritance; `implements` is for interface realization.",
            "correctIndex": 2
          },
          {
            "id": "csa9-l1-q2",
            "stem": "If class `Dog extends Animal`, which statement correctly describes the relationship and access permissions?",
            "options": [
              "A `Dog` 'HAS-A' `Animal`, and can directly modify private fields of `Animal`.",
              "A `Dog` inherits all private variables and methods of `Animal` directly.",
              "An `Animal` 'IS-A' `Dog` and inherits all subclass methods.",
              "A `Dog` 'IS-A' `Animal`, and inherits all `public` methods of `Animal`, but cannot directly access `private` instance variables of `Animal`."
            ],
            "explanation": "Inheritance models the 'IS-A' relationship. Subclasses inherit all public and protected members of the superclass. Private instance variables of the superclass remain encapsulated and cannot be accessed directly by subclass methods—they must be accessed via public getters and setters.",
            "distractorTip": "Subclasses do NOT have direct access to private superclass fields!",
            "correctIndex": 3
          },
          {
            "id": "csa9-l1-q3",
            "stem": "Given the class declaration `public class Dog extends Animal`, which of the following statements is true regarding inheritance?",
            "options": [
              "Dog inherits all private instance variables of Animal and can access them directly by name.",
              "Dog is a superclass of Animal.",
              "Dog inherits public and protected methods from Animal and can access Animal's private fields only via inherited public accessor methods.",
              "Dog cannot define any new methods of its own."
            ],
            "correctIndex": 2,
            "explanation": "Subclasses inherit all public and protected members of their superclass. Private fields in the superclass are inherited as part of the object's state, but cannot be directly accessed by name in the subclass; they must be accessed through public getters and setters.",
            "distractorTip": "Subclasses CANNOT access `private` superclass variables directly; they must use public accessors/mutators."
          }
        ]
      },
      {
        "id": 902,
        "unitIndex": 9,
        "levelNumber": 2,
        "uniqueKey": "csa-u9-l2",
        "topicNumber": "Topic 9.2",
        "name": "Subclass Constructors & the super Keyword",
        "subtitle": "Mandatory first statement and default super() invocation",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa9-l2-q1",
            "stem": "What rule must be followed when a subclass constructor calls its superclass constructor using `super(...)`?",
            "options": [
              "If explicitly included, the call to `super(...)` must be the very first executable statement in the subclass constructor.",
              "The call to `super(...)` must always be placed on the last line of the subclass constructor.",
              "`super(...)` can only be called from inside static methods.",
              "Subclass constructors are prohibited from calling superclass constructors."
            ],
            "explanation": "Java requires that the superclass portion of an object be initialized before any subclass initialization code runs. Therefore, an explicit `super(...)` constructor call must be the first line of the constructor.",
            "distractorTip": "`super(...)` must be statement #1 in the constructor body.",
            "correctIndex": 0
          },
          {
            "id": "csa9-l2-q2",
            "stem": "What occurs if a subclass constructor does NOT explicitly contain a call to `super(...)`?",
            "options": [
              "The superclass instance variables remain completely unallocated.",
              "The Java compiler automatically inserts a no-argument call `super();` as the first statement.",
              "A runtime `NullPointerException` is thrown during object creation.",
              "The code causes a mandatory syntax error in all cases."
            ],
            "explanation": "If no constructor call is explicitly written, Java automatically invokes `super()` (the no-argument superclass constructor). If the superclass does not possess a no-arg constructor, a compile-time error occurs.",
            "distractorTip": "Java always inserts `super();` if you do not write an explicit constructor call.",
            "correctIndex": 1
          },
          {
            "id": "csa9-l2-q3",
            "stem": "If a subclass constructor does not explicitly call `super(...)` on its first line, what does the Java compiler do automatically?",
            "options": [
              "It generates a compile-time error.",
              "It inserts a call to `super();` (the no-argument superclass constructor) as the very first executable statement.",
              "It skips superclass initialization entirely.",
              "It calls the `Object` class constructor directly."
            ],
            "correctIndex": 1,
            "explanation": "If a subclass constructor does not explicitly call `super(...)` or `this(...)`, the Java compiler automatically inserts an implicit call to `super();` on the first line. If the superclass has no no-arg constructor, a compile-time error results.",
            "distractorTip": "Java automatically inserts `super();` on the first line of any subclass constructor that lacks an explicit super call."
          }
        ]
      },
      {
        "id": 903,
        "unitIndex": 9,
        "levelNumber": 3,
        "uniqueKey": "csa-u9-l3",
        "topicNumber": "Topic 9.3 & 9.4",
        "name": "Method Overriding vs Overloading",
        "subtitle": "Method signatures and invoking super.methodName()",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa9-l3-q1",
            "stem": "What is the key difference between method OVERRIDING and method OVERLOADING in Java?",
            "options": [
              "Overriding occurs in the same class; overloading requires an inheritance hierarchy.",
              "Overriding only works for static methods; overloading is for instance methods.",
              "Overriding provides a new implementation in a subclass with the EXACT same name, return type, and parameters; overloading defines methods in the same class with the same name but DIFFERENT parameters.",
              "There is no difference; they are interchangeable terms in Java."
            ],
            "explanation": "Overriding (subclass redefining superclass behavior) requires identical method signature (name and parameter list). Overloading (multiple methods with same name) requires different parameter lists.",
            "distractorTip": "Overriding = Same signature (inheritance). Overloading = Same name, different parameters.",
            "correctIndex": 2
          },
          {
            "id": "csa9-l3-q2",
            "stem": "How can a subclass method invoke the superclass's version of an overridden method?",
            "options": [
              "By casting `this` to the superclass type: `((SuperClass) this).methodName(...)`.",
              "By calling `parent.methodName(...)`.",
              "Overridden methods cannot be accessed once overridden.",
              "By using the prefix `super.methodName(...)`."
            ],
            "explanation": "The `super` reference allows a subclass to bypass its own overridden method and invoke the superclass's implementation directly (e.g., `super.toString()`).",
            "distractorTip": "Use `super.method()` to augment rather than completely replace parent behavior.",
            "correctIndex": 3
          },
          {
            "id": "csa9-l3-q3",
            "stem": "What is the key difference between method OVERRIDING and method OVERLOADING in Java?",
            "options": [
              "Overriding occurs within the same class with different parameters; overloading occurs across subclasses.",
              "Overriding provides a new implementation in a subclass with the EXACT same method signature; overloading defines methods with the SAME name but DIFFERENT parameter lists.",
              "Overriding requires the `static` keyword; overloading does not.",
              "Overloading is evaluated at runtime; overriding is evaluated at compile time."
            ],
            "correctIndex": 1,
            "explanation": "Method Overriding occurs when a subclass redefines a superclass method using the identical method name and parameter types. Method Overloading occurs when two methods in the same class share a name but have different parameter types or counts.",
            "distractorTip": "Overriding = SAME signature in subclass; Overloading = DIFFERENT parameter list in same or subclass."
          }
        ]
      },
      {
        "id": 904,
        "unitIndex": 9,
        "levelNumber": 4,
        "uniqueKey": "csa-u9-l4",
        "topicNumber": "Topic 9.5 & 9.6",
        "name": "Polymorphic References & Dynamic Dispatch",
        "subtitle": "Compile-time reference types vs runtime object execution",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa9-l4-q1",
            "stem": "Consider the classes:\n```java\npublic class Animal { public void speak() { System.out.print(\"Grunt \"); } }\npublic class Cat extends Animal { public void speak() { System.out.print(\"Meow \"); } }\n```\nWhat is printed by executing:\n```java\nAnimal a = new Cat();\na.speak();\n```",
            "options": [
              "`Meow `",
              "`Grunt `",
              "`Grunt Meow `",
              "`Compile error: incompatible types`"
            ],
            "explanation": "Because of polymorphism and dynamic method lookup (late binding), the method that executes is determined at runtime by the ACTUAL object type in the heap (`Cat`), not the reference type (`Animal`). Thus, `Cat`'s overridden `speak()` method runs, printing `Meow `.",
            "distractorTip": "The golden rule of AP CSA: Reference type decides WHAT can be called at compile time; Object type decides WHICH method executes at runtime!",
            "correctIndex": 0
          },
          {
            "id": "csa9-l4-q2",
            "stem": "Which of the following polymorphic declarations is legal in Java?",
            "options": [
              "Assigning an instance of a superclass to a variable whose declared type is its subclass without casting (e.g., `SubClass obj = new SuperClass();`).",
              "Assigning an instance of a subclass to a variable whose declared type is its superclass (e.g., `SuperClass obj = new SubClass();`).",
              "Assigning two unrelated classes to each other.",
              "Instantiating an abstract concept using primitive variables."
            ],
            "explanation": "In Java, an object reference can refer to any instance of its declared class or any of its subclasses (upcasting is automatic and always type-safe).",
            "distractorTip": "Subclass is-a Superclass, so `Super s = new Sub();` is always valid.",
            "correctIndex": 1
          },
          {
            "id": "csa9-l4-q3",
            "stem": "Consider the classes:\n```java\npublic class Animal { public void speak() { System.out.print(\"Grunt \"); } }\npublic class Dog extends Animal { public void speak() { System.out.print(\"Bark \"); } }\n```\nWhat is printed by:\n```java\nAnimal pet = new Dog();\npet.speak();\n```",
            "options": [
              "\"Grunt \"",
              "\"Grunt Bark \"",
              "\"Bark \"",
              "A ClassCastException is thrown."
            ],
            "correctIndex": 2,
            "explanation": "This demonstrates polymorphism and dynamic method binding (dynamic dispatch). The declared reference type (`Animal`) is checked at compile-time to ensure `speak()` exists. At runtime, Java executes the overridden method corresponding to the actual object type instantiated in heap memory (`Dog`), printing `\"Bark \"`.",
            "distractorTip": "Polymorphism rule: Compile-time type checks IF the method exists; Runtime object type determines WHICH overridden version executes!"
          }
        ]
      },
      {
        "id": 905,
        "unitIndex": 9,
        "levelNumber": 5,
        "uniqueKey": "csa-u9-l5",
        "topicNumber": "Topic 9.6",
        "name": "Compile-Time Checking & Downcasting Traps",
        "subtitle": "Reference method checking and ClassCastException",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa9-l5-q1",
            "stem": "Suppose `Dog extends Animal`, and `Dog` defines a new method `fetch()` that is NOT in `Animal`. What happens if client code runs:\n```java\nAnimal a = new Dog();\na.fetch();\n```",
            "options": [
              "It executes `fetch()` normally because the actual object is a `Dog`.",
              "A runtime `ClassCastException` is thrown.",
              "A compile-time error occurs because the compiler checks the declared reference type (`Animal`), which has no `fetch()` method.",
              "It prints `null`."
            ],
            "explanation": "The Java compiler enforces type safety based strictly on the reference type. Since `Animal` does not declare `fetch()`, the compiler rejects `a.fetch()`. To call `fetch()`, the reference must be cast: `((Dog) a).fetch();`.",
            "distractorTip": "Compile time checks reference type; runtime executes actual object method.",
            "correctIndex": 2
          },
          {
            "id": "csa9-l5-q2",
            "stem": "What happens if you attempt to downcast an object reference to an incompatible type at runtime (e.g., casting a `Cat` object reference to `Dog` where both extend `Animal`)?",
            "options": [
              "The program compiles and converts the Cat into a Dog.",
              "The reference is silently set to `null`.",
              "The JVM terminates with a `StackOverflowError`.",
              "A `ClassCastException` is thrown at runtime."
            ],
            "explanation": "When downcasting `(Dog) a`, the JVM inspects the actual object header in heap memory at runtime. If the object cannot be cast to the target type, the runtime environment throws `java.lang.ClassCastException`.",
            "distractorTip": "Casting does not change the actual object in memory; if it's not truly an instance of that class, it throws `ClassCastException`.",
            "correctIndex": 3
          },
          {
            "id": "csa9-l5-q3",
            "stem": "Consider the class hierarchy where `Dog extends Animal`. Why does the code line `Dog d = new Animal();` cause a compile-time error?",
            "options": [
              "Because all Dogs are Animals, but not all Animals are Dogs (narrowing reference conversion is invalid without casting, and invalid at runtime).",
              "Because Animal is an abstract class.",
              "Because Dog does not implement the Comparable interface.",
              "Because Java prohibits multiple inheritance."
            ],
            "correctIndex": 0,
            "explanation": "A superclass object cannot be assigned to a subclass reference variable without casting (`SubClass s = new SuperClass();` is illegal). Every Dog is an Animal, but not every Animal is a Dog.",
            "distractorTip": "`SuperClass obj = new SubClass();` is LEGAL. `SubClass obj = new SuperClass();` is ILLEGAL!"
          }
        ]
      },
      {
        "id": 906,
        "unitIndex": 9,
        "levelNumber": 6,
        "uniqueKey": "csa-u9-l6",
        "topicNumber": "Topic 9.7",
        "name": "The Object Superclass (toString & equals)",
        "subtitle": "Root of the class hierarchy, default toString(), and deep equality",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa9-l6-q1",
            "stem": "If a custom class does NOT override the `toString()` method inherited from `java.lang.Object`, what does `System.out.println(obj);` print?",
            "options": [
              "The class name followed by an `@` symbol and the hexadecimal memory hash code of the object (e.g., `Student@15db9742`).",
              "A blank string `\"\"`.",
              "All the private instance variables and their values.",
              "`null`"
            ],
            "explanation": "The default `toString()` implementation in `java.lang.Object` returns `getClass().getName() + '@' + Integer.toHexString(hashCode())`. Custom classes override `toString()` to return human-readable attribute summaries.",
            "distractorTip": "Classes override `toString()` specifically to avoid printing the cryptic default memory hash code.",
            "correctIndex": 0
          },
          {
            "id": "csa9-l6-q2",
            "stem": "What is the proper method header for overriding the `equals` method inherited from the `Object` class?",
            "options": [
              "`public boolean equals(Student other)`",
              "`public boolean equals(Object other)`",
              "`public int equals(Object other)`",
              "`public static boolean equals(Object a, Object b)`"
            ],
            "explanation": "To override `Object.equals()`, the parameter type MUST be `Object`. Writing `public boolean equals(Student other)` is method OVERLOADING, not overriding, which can lead to subtle bugs in polymorphic collections.",
            "distractorTip": "The parameter of the overridden `equals` method must be `Object other`.",
            "correctIndex": 1
          },
          {
            "id": "csa9-l6-q3",
            "stem": "If a custom Java class does not override the `toString()` method inherited from the `Object` superclass, what does calling `System.out.println(myObject)` print?",
            "options": [
              "All private instance variable names and values formatted as JSON.",
              "An empty string `\"\"`.",
              "The class name followed by an `@` symbol and the object's hexadecimal hash code (e.g. `Student@15db9742`).",
              "A NullPointerException."
            ],
            "correctIndex": 2,
            "explanation": "The default implementation of `toString()` in Java's `Object` class returns `getClass().getName() + '@' + Integer.toHexString(hashCode())`. Custom classes override `toString()` to return meaningful state descriptions.",
            "distractorTip": "Default `Object.toString()` returns `ClassName@hexHashcode`."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 10,
    "unitId": "u10",
    "title": "Unit 10: Recursion",
    "shortTitle": "Unit 10: Recursion",
    "description": "Recursive methods, base cases, call stack tracing, binary search recursion, and merge sort divide-and-conquer",
    "examWeight": "5–7.5% of AP Exam",
    "biome": {
      "name": "Fractal Chasm & Recursive Call Stack",
      "icon": "🪞",
      "accentColor": "#9333EA",
      "secondaryColor": "#7E22CE",
      "groundGradient": "from-purple-100 via-fuchsia-50 to-indigo-100",
      "cardBorder": "border-purple-600",
      "trailColor": "#7e22ce",
      "nodeRing": "ring-purple-400/40",
      "skyTint": "from-purple-50 to-fuchsia-50/30"
    },
    "levels": [
      {
        "id": 1001,
        "unitIndex": 10,
        "levelNumber": 1,
        "uniqueKey": "csa-u10-l1",
        "topicNumber": "Topic 10.1",
        "name": "Recursion Basics & Call Stack Frames",
        "subtitle": "Base cases, call stack mechanics, and return propagation",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "csa10-l1-q1",
            "stem": "What value is returned by the method call `mystery(4)`?\n```java\npublic static int mystery(int n) {\n  if (n <= 1) return 2;\n  return 3 + mystery(n - 1);\n}\n```",
            "options": [
              "`14`",
              "`8`",
              "`11`",
              "`12`"
            ],
            "explanation": "Trace the recursive call stack: `mystery(4) = 3 + mystery(3) = 3 + (3 + mystery(2)) = 3 + 3 + (3 + mystery(1))`. Base case: `mystery(1) = 2`. Unwinding: $3 + 3 + 3 + 2 = 11$.",
            "distractorTip": "Count the number of recursive additions carefully: 3 is added three times ($3 \\times 3 = 9$), plus the base value 2 gives 11.",
            "correctIndex": 2
          },
          {
            "id": "csa10-l1-q2",
            "stem": "What are the two essential components required in every correct recursive method?",
            "options": [
              "A `for` loop and an array.",
              "A `try-catch` block and a `static` counter variable.",
              "An inheritance hierarchy and polymorphic method calls.",
              "At least one base case that terminates recursion without further calls, and at least one recursive step that progresses toward the base case."
            ],
            "explanation": "Recursion requires: (1) A base case to stop the recursive descent, and (2) recursive calls that modify state toward the base case condition to avoid infinite looping.",
            "distractorTip": "Without a base case, recursion leads to infinite calls.",
            "correctIndex": 3
          },
          {
            "id": "csa10-l1-q3",
            "stem": "What data structure does the Java Virtual Machine (JVM) use internally to store active method activation records and local variables during recursive execution?",
            "options": [
              "A first-in, first-out Queue",
              "A binary search tree",
              "A Call Stack",
              "A hash table"
            ],
            "correctIndex": 2,
            "explanation": "The JVM uses a runtime Call Stack to manage method calls. Each time a method is invoked (including recursive calls), a stack frame containing parameters and local variables is pushed onto the call stack. Upon reaching a return statement, the frame is popped.",
            "distractorTip": "Recursive execution is managed by the Call STACK (LIFO: Last-In, First-Out)."
          }
        ]
      },
      {
        "id": 1002,
        "unitIndex": 10,
        "levelNumber": 2,
        "uniqueKey": "csa-u10-l2",
        "topicNumber": "Topic 10.1",
        "name": "StackOverflowError & Infinite Recursion",
        "subtitle": "Call stack exhaustion and tree recursion traces",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa10-l2-q1",
            "stem": "What error occurs if a recursive method has no base case or if the recursive step does not make progress toward the base case?",
            "options": [
              "`java.lang.StackOverflowError`",
              "`java.lang.OutOfMemoryError`",
              "`NullPointerException`",
              "`ArithmeticException`"
            ],
            "explanation": "Each recursive call allocates a new stack frame in call stack memory. Without termination, stack frames accumulate indefinitely until the JVM exhausts the thread's call stack memory limit, throwing a `StackOverflowError`.",
            "distractorTip": "Infinite recursion produces `StackOverflowError` (exhausting stack), NOT `OutOfMemoryError` (exhausting heap).",
            "correctIndex": 0
          },
          {
            "id": "csa10-l2-q2",
            "stem": "Consider the Fibonacci method:\n```java\npublic static int fib(int n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}\n```\nHow many total calls to `fib` (including the initial call) are made when executing `fib(4)`?",
            "options": [
              "`5` total calls",
              "`9` total calls",
              "`7` total calls",
              "`15` total calls"
            ],
            "explanation": "Tree call trace: `fib(4)` calls `fib(3)` and `fib(2)`. `fib(3)` calls `fib(2)` and `fib(1)`. The two calls to `fib(2)` each call `fib(1)` and `fib(0)`. Total calls = 1 (fib(4)) + 1 (fib(3)) + 2 (fib(2)) + 3 (fib(1)) + 2 (fib(0)) = 9 total method calls.",
            "distractorTip": "Draw out the binary recursion tree to count every node!",
            "correctIndex": 1
          },
          {
            "id": "csa10-l2-q3",
            "stem": "What runtime error occurs if a recursive method lacks a base case or has recursive steps that never move toward the base case?",
            "options": [
              "NullPointerException",
              "ArrayIndexOutOfBoundsException",
              "StackOverflowError",
              "ArithmeticException"
            ],
            "correctIndex": 2,
            "explanation": "Infinite recursion repeatedly pushes activation frames onto the JVM call stack without ever popping them, eventually consuming all allocated stack memory and throwing a `StackOverflowError`.",
            "distractorTip": "Infinite recursion leads to `StackOverflowError` (exhaustion of call stack memory)."
          }
        ]
      },
      {
        "id": 1003,
        "unitIndex": 10,
        "levelNumber": 3,
        "uniqueKey": "csa-u10-l3",
        "topicNumber": "Topic 10.1",
        "name": "Post-Recursive Processing & Unwinding",
        "subtitle": "Statements before vs after recursive calls, reversing orders",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "csa10-l3-q1",
            "stem": "What is printed by the call `printBinary(6)`?\n```java\npublic static void printBinary(int n) {\n  if (n > 0) {\n    printBinary(n / 2);\n    System.out.print(n % 2);\n  }\n}\n```",
            "options": [
              "`011`",
              "`6`",
              "`110`",
              "`0`"
            ],
            "explanation": "`printBinary(6)` calls `printBinary(3)`, which calls `printBinary(1)`, which calls `printBinary(0)` (base case, returns). As the stack unwinds in LIFO order: `printBinary(1)` prints $1 \\% 2 = 1$; `printBinary(3)` prints $3 \\% 2 = 1$; `printBinary(6)` prints $6 \\% 2 = 0$. Output is `110` (the binary representation of 6!).",
            "distractorTip": "Because the print statement occurs AFTER the recursive call, output is printed in reverse order as the call stack unwinds.",
            "correctIndex": 2
          },
          {
            "id": "csa10-l3-q2",
            "stem": "What is returned by `reverseString(\"CAT\")`?\n```java\npublic static String reverseString(String s) {\n  if (s.length() <= 1) return s;\n  return reverseString(s.substring(1)) + s.substring(0, 1);\n}\n```",
            "options": [
              "`\"CAT\"`",
              "`\"ATC\"`",
              "`\"TCA\"`",
              "`\"TAC\"`"
            ],
            "explanation": "Recursive trace: `reverseString(\"CAT\") = reverseString(\"AT\") + \"C\"`. `reverseString(\"AT\") = reverseString(\"T\") + \"A\"`. Base case: `reverseString(\"T\") = \"T\"`. Unwinding: `\"T\" + \"A\" = \"TA\"`, then `\"TA\" + \"C\" = \"TAC\"`.",
            "distractorTip": "The first character is placed at the very end after the reversed tail.",
            "correctIndex": 3
          },
          {
            "id": "csa10-l3-q3",
            "stem": "Consider the recursive method:\n```java\npublic void printNumbers(int n)\n{\n  if (n > 0)\n  {\n    printNumbers(n - 1);\n    System.out.print(n + \" \");\n  }\n}\n```\nWhat is printed by the call `printNumbers(3)`?",
            "options": [
              "\"3 2 1 \"",
              "\"1 2 3 \"",
              "\"0 1 2 3 \"",
              "\"3 2 1 0 \""
            ],
            "correctIndex": 1,
            "explanation": "Because the recursive call `printNumbers(n - 1)` occurs BEFORE the print statement, calls are pushed onto the call stack until `n = 0`. As the stack unwinds from the base case: `printNumbers(1)` prints 1, `printNumbers(2)` prints 2, and `printNumbers(3)` prints 3, producing `\"1 2 3 \"`.",
            "distractorTip": "Print AFTER recursive call $\\implies$ prints in ascending order as stack UNWINDS! Print BEFORE recursive call $\\implies$ prints in descending order."
          }
        ]
      },
      {
        "id": 1004,
        "unitIndex": 10,
        "levelNumber": 4,
        "uniqueKey": "csa-u10-l4",
        "topicNumber": "Topic 10.2",
        "name": "Recursive Binary Search & Merge Sort",
        "subtitle": "Divide-and-conquer, logarithmic search, and O(n log n) sorting",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "csa10-l4-q1",
            "stem": "What is the maximum number of comparisons needed for a binary search to locate an item or determine it is absent in a sorted array of 1,000 elements?",
            "options": [
              "`10` comparisons (since $2^{10} = 1,024 > 1,000$).",
              "`1,000` comparisons.",
              "`500` comparisons.",
              "`100` comparisons."
            ],
            "explanation": "Binary search eliminates half of the remaining elements with each comparison (divide-and-conquer, $O(\\log_2 N)$). Since $2^9 = 512 < 1000 \\le 1024 = 2^{10}$, at most 10 comparisons are ever needed.",
            "distractorTip": "Binary search is $O(\\log_2 N)$, making it vastly faster than $O(N)$ linear search on large datasets.",
            "correctIndex": 0
          },
          {
            "id": "csa10-l4-q2",
            "stem": "What is the worst-case time complexity of Merge Sort, and why?",
            "options": [
              "$O(N^2)$, because merging requires comparing every pair of elements.",
              "$O(N \\log N)$, because it always divides the array into $\\log_2 N$ levels of recursion and performs $O(N)$ work merging at each level.",
              "$O(N)$, because merging sorted arrays takes linear time.",
              "$O(\\log N)$, because it divides the array in half."
            ],
            "explanation": "Merge sort recursively splits arrays in half until length 1 ($\\\\log_2 N$ levels). At each level of the tree, merging the subarrays takes linear $O(N)$ comparisons and copies. Thus, total time is always $O(N \\log N)$ in all cases (best, worst, average).",
            "distractorTip": "Merge sort is consistently $O(N \\log N)$, whereas Selection Sort and Insertion Sort worst-case are $O(N^2)$.",
            "correctIndex": 1
          },
          {
            "id": "csa10-l4-q3",
            "stem": "Merge Sort is a recursive divide-and-conquer sorting algorithm. What are its best-case, average-case, and worst-case time complexities for sorting an array of $N$ elements?",
            "options": [
              "Best: $O(N)$, Worst: $O(N^2)$",
              "Best, Average, and Worst are all $O(N \\log N)$",
              "Best: $O(1)$, Worst: $O(N \\log N)$",
              "Best: $O(N^2)$, Worst: $O(N^2)$"
            ],
            "correctIndex": 1,
            "explanation": "Merge sort divides the array in half $\\log_2 N$ times and merges the halves in $O(N)$ time per level. Because it divides and merges systematically regardless of initial element ordering, its time complexity is strictly $O(N \\log N)$ in all cases.",
            "distractorTip": "Merge Sort is ALWAYS $O(N \\log N)$ in best, worst, and average cases."
          }
        ]
      }
    ]
  }
];
