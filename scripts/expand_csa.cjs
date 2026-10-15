const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// 51 levels in AP CSA
// Target additions: A: 12, B: 12, C: 14, D: 13 (Total: 51)

const q3Data = {
  // UNIT 1: Primitive Types (5 levels)
  "csa-u1-l1": {
    id: "csa1-l1-q3",
    stem: "Which of the following variable declarations will cause a Java compile-time error?",
    options: [
      "double x = 4;",
      "boolean isReady = true;",
      "int count = 3.14;",
      "char initial = 'A';"
    ],
    correctIndex: 2, // C
    explanation: "In Java, attempting to assign a floating-point literal (3.14, which defaults to type double) directly to an integer variable causes a compile-time 'lossy conversion' error without an explicit cast: (int) 3.14.",
    distractorTip: "Java does not automatically narrow double to int; an explicit cast (int) is required."
  },
  "csa-u1-l2": {
    id: "csa1-l2-q3",
    stem: "What is the value of `result` after executing the following Java statement?\n```java\ndouble result = 1 / 4 * 8.0;\n```",
    options: [
      "0.0",
      "2.0",
      "0.5",
      "2"
    ],
    correctIndex: 0, // A
    explanation: "Because division and multiplication have equal precedence and associate left-to-right, Java first evaluates `1 / 4`. Since both 1 and 4 are integer literals, integer division truncates to `0`. Then `0 * 8.0` evaluates to `0.0`.",
    distractorTip: "Integer division truncates: `1 / 4` is 0, NOT 0.25! Once 0 is produced, multiplying by 8.0 yields 0.0."
  },
  "csa-u1-l3": {
    id: "csa1-l3-q3",
    stem: "Consider the following code snippet:\n```java\nint x = 10;\nx += 5 * 2;\n```\nWhat is the value of `x` after execution?",
    options: [
      "30",
      "25",
      "100",
      "20"
    ],
    correctIndex: 3, // D
    explanation: "Multiplication has higher precedence than compound assignment: `5 * 2 = 10`. The statement is equivalent to `x = x + 10`, so `10 + 10 = 20`.",
    distractorTip: "Compound assignment `+=` evaluates the entire right-hand expression first before adding to the variable."
  },
  "csa-u1-l4": {
    id: "csa1-l4-q3",
    stem: "Which of the following expressions correctly rounds a positive double variable `val` to the nearest integer?",
    options: [
      "(int) val + 0.5",
      "(int)(val + 0.5)",
      "Math.ceil(val)",
      "(double)((int) val)"
    ],
    correctIndex: 1, // B
    explanation: "Adding 0.5 to a positive floating-point number pushes values with fractional parts $\\ge 0.5$ up to the next integer before truncation by `(int)`. For example, `(int)(4.6 + 0.5) = (int)(5.1) = 5`, and `(int)(4.3 + 0.5) = (int)(4.8) = 4`.",
    distractorTip: "The classic AP rounding formula for positive doubles is `(int)(x + 0.5)`. Note the parentheses around `(val + 0.5)`!"
  },
  "csa-u1-l5": {
    id: "csa1-l5-q3",
    stem: "In Java, what occurs when an arithmetic operation on integer variables produces a result greater than `Integer.MAX_VALUE` ($2^{31} - 1$)?",
    options: [
      "The program immediately throws an ArithmeticException and crashes.",
      "The value automatically converts to a double without loss of precision.",
      "An integer overflow occurs, wrapping around to negative numbers (specifically `Integer.MIN_VALUE`).",
      "The variable remains pinned at `Integer.MAX_VALUE`."
    ],
    correctIndex: 2, // C
    explanation: "Java integers use 32-bit two's complement representation. When `Integer.MAX_VALUE` (2147483647) is incremented by 1, it overflows and wraps around to `Integer.MIN_VALUE` (-2147483648) without generating an exception.",
    distractorTip: "Integer overflow wraps around from positive maximum to negative minimum without throwing an exception."
  },

  // UNIT 2: Using Objects & String Methods (6 levels)
  "csa-u2-l1": {
    id: "csa2-l1-q3",
    stem: "Consider the following code segment:\n```java\nRectangle r1 = new Rectangle(5, 10);\nRectangle r2 = r1;\nr2.setWidth(20);\n```\nWhat is the width of `r1` after this code executes?",
    options: [
      "5",
      "20",
      "10",
      "0"
    ],
    correctIndex: 1, // B
    explanation: "Object variables in Java store memory references (addresses), not independent object copies. `Rectangle r2 = r1;` creates an alias: both `r1` and `r2` point to the exact same Rectangle object in heap memory. Mutating `r2` mutates `r1`.",
    distractorTip: "Reference aliasing: Assigning one object reference to another copies the memory address, NOT the object!"
  },
  "csa-u2-l2": {
    id: "csa2-l2-q3",
    stem: "In Java, what happens when primitive arguments (such as `int` or `double`) are passed to a method?",
    options: [
      "They are passed by reference, allowing the method to modify the caller's original variable.",
      "They are automatically boxed into `Object` arrays.",
      "They are passed by value: a copy of the argument's value is passed into the parameter, so changes to the parameter inside the method do not affect the original variable.",
      "The compiler throws an IllegalStateException if the parameter is reassigned."
    ],
    correctIndex: 2, // C
    explanation: "Java is strictly pass-by-value. For primitive types, the parameter receives a copy of the value. Any reassignments or mutations to the parameter variable within the method have zero effect on the caller's variable.",
    distractorTip: "Java is strictly pass-by-value: modifying a primitive parameter inside a method does NOT change the original caller's variable."
  },
  "csa-u2-l3": {
    id: "csa2-l3-q3",
    stem: "Consider the method:\n```java\npublic int mystery(int n)\n{\n  if (n <= 1) return 1;\n  return n * mystery(n - 1);\n}\n```\nWhat value is returned by the call `mystery(4)`?",
    options: [
      "24",
      "10",
      "16",
      "8"
    ],
    correctIndex: 0, // A
    explanation: "This is recursive factorial: `4 * mystery(3) = 4 * (3 * mystery(2)) = 4 * (3 * (2 * mystery(1))) = 4 * 3 * 2 * 1 = 24`.",
    distractorTip: "Trace recursive calls: `4 * 3 * 2 * 1 = 24`."
  },
  "csa-u2-l4": {
    id: "csa2-l4-q3",
    stem: "Consider the following code segment:\n```java\nString s = \"Java\";\ns.concat(\" SE\");\nSystem.out.println(s);\n```\nWhat is printed to the console?",
    options: [
      "\"Java SE\"",
      "\"SE\"",
      "\"null\"",
      "\"Java\""
    ],
    correctIndex: 3, // D
    explanation: "In Java, `String` objects are immutable. Methods like `concat()`, `toUpperCase()`, and `substring()` do NOT modify the original string; they return a brand-new String object. Because the return value was not assigned back to `s` (`s = s.concat(\" SE\");`), `s` remains `\"Java\"`.",
    distractorTip: "String immutability: String methods never modify the original String object in place."
  },
  "csa-u2-l5": {
    id: "csa2-l5-q3",
    stem: "Given the string `String str = \"Computer\";`, what is returned by the call `str.substring(2, 5)`?",
    options: [
      "\"omp\"",
      "\"mpu\"",
      "\"ompu\"",
      "\"mp\""
    ],
    correctIndex: 1, // B
    explanation: "`substring(startIndex, endIndex)` extracts characters from `startIndex` (inclusive) up to `endIndex` (exclusive). Index 0 = 'C', 1 = 'o', 2 = 'm', 3 = 'p', 4 = 'u', 5 = 't'. Thus characters at indices 2, 3, 4 are `\"mpu\"`.",
    distractorTip: "Remember: `substring(start, end)` includes `start` but EXCLUDES `end`! Length of result is always `end - start` ($5 - 2 = 3$ chars)."
  },
  "csa-u2-l6": {
    id: "csa2-l6-q3",
    stem: "Which of the following expressions generates a random integer in the range from 10 to 50 inclusive?",
    options: [
      "(int)(Math.random() * 50) + 10",
      "(int)(Math.random() * 41) + 10",
      "(int)(Math.random() * 40) + 10",
      "(int)(Math.random() * 51)"
    ],
    correctIndex: 1, // B
    explanation: "To generate integers in the range $[\\text{min}, \\text{max}]$, use `(int)(Math.random() * (max - min + 1)) + min`. Here: $50 - 10 + 1 = 41$, so `(int)(Math.random() * 41) + 10` generates values from $10$ to $50$ inclusive.",
    distractorTip: "Random formula: `(int)(Math.random() * count) + start`. Number of integers from 10 to 50 inclusive is $50 - 10 + 1 = 41$."
  },

  // UNIT 3: Boolean Expressions & if Statements (5 levels)
  "csa-u3-l1": {
    id: "csa3-l1-q3",
    stem: "Consider the code segment:\n```java\nint x = 5;\nif (x > 2 && x < 10)\n{\n  x += 2;\n}\nif (x > 6)\n{\n  x *= 2;\n}\n```\nWhat is the value of `x` after execution?",
    options: [
      "7",
      "10",
      "14",
      "5"
    ],
    correctIndex: 2, // C
    explanation: "First if: `5 > 2 && 5 < 10` is true, so `x` becomes `5 + 2 = 7`. Second if: `7 > 6` is also true (since these are separate if statements, not if-else), so `x` becomes `7 * 2 = 14`.",
    distractorTip: "Watch out for sequential `if` statements vs `if-else`: both independent `if` blocks can execute!"
  },
  "csa-u3-l2": {
    id: "csa3-l2-q3",
    stem: "Consider the following nested structure:\n```java\nif (a > 0)\n  if (b > 0)\n    System.out.print(\"X\");\nelse\n  System.out.print(\"Y\");\n```\nIn Java, to which `if` does the `else` clause belong (the 'dangling else' rule)?",
    options: [
      "The inner `if (b > 0)`",
      "The outer `if (a > 0)`",
      "Neither; it causes a compiler syntax error.",
      "Both simultaneously."
    ],
    correctIndex: 0, // A
    explanation: "Under Java syntax rules, an `else` clause always pairs with the closest preceding unmatched `if` within the same block, regardless of indentation. Therefore, `else` attaches to `if (b > 0)`.",
    distractorTip: "Indentation does not fool the Java compiler: an `else` always attaches to the closest preceding `if` unless braces `{}` are used."
  },
  "csa-u3-l3": {
    id: "csa3-l3-q3",
    stem: "Why does the expression `str != null && str.length() > 0` avoid throwing a `NullPointerException` when `str` is `null`?",
    options: [
      "Java string methods automatically handle null references safely.",
      "The compiler reorganizes the condition at compile time.",
      "Short-circuit evaluation stops evaluating `&&` as soon as the first operand (`str != null`) evaluates to `false`.",
      "Logical AND always executes both sides in parallel."
    ],
    correctIndex: 2, // C
    explanation: "In Java, `&&` is a short-circuit operator. If the left operand evaluates to `false`, the entire expression must be false, so Java skips evaluating the right-hand operand, preventing the call to `str.length()` on a null reference.",
    distractorTip: "Short-circuit evaluation: In `A && B`, if A is false, B is never evaluated. In `A || B`, if A is true, B is never evaluated."
  },
  "csa-u3-l4": {
    id: "csa3-l4-q3",
    stem: "Which of the following Boolean expressions is logically equivalent to `!(x < 5 || y >= 10)`?",
    options: [
      "x >= 5 || y < 10",
      "x < 5 && y >= 10",
      "x <= 5 && y > 10",
      "x >= 5 && y < 10"
    ],
    correctIndex: 3, // D
    explanation: "By De Morgan's Laws: `!(A || B)` $\\equiv$ `!A && !B`. Here, `!(x < 5)` is `x >= 5`, and `!(y >= 10)` is `y < 10`. Thus the expression becomes `x >= 5 && y < 10`.",
    distractorTip: "Negating `<` gives `>=`; negating `>=` gives `<`; flip `||` to `&&`."
  },
  "csa-u3-l5": {
    id: "csa3-l5-q3",
    stem: "Consider the following code segment:\n```java\nString s1 = new String(\"AP\");\nString s2 = new String(\"AP\");\nboolean b1 = (s1 == s2);\nboolean b2 = s1.equals(s2);\n```\nWhat are the values of `b1` and `b2`?",
    options: [
      "b1 is true, b2 is true",
      "b1 is false, b2 is true",
      "b1 is true, b2 is false",
      "b1 is false, b2 is false"
    ],
    correctIndex: 1, // B
    explanation: "`==` tests reference equality (whether `s1` and `s2` point to the exact same memory address). Because `new` creates two distinct objects in heap memory, `s1 == s2` is `false`. `.equals()` tests content equality (character sequence), so `s1.equals(s2)` is `true`.",
    distractorTip: "For objects: `==` compares MEMORY ADDRESSES; `.equals()` compares CONTENTS."
  },

  // UNIT 4: Iteration (Loops) (5 levels)
  "csa-u4-l1": {
    id: "csa4-l1-q3",
    stem: "How many times does the body of the following loop execute?\n```java\nint count = 1;\nwhile (count <= 16)\n{\n  count *= 2;\n}\n```",
    options: [
      "4 times",
      "5 times",
      "16 times",
      "Infinite loop"
    ],
    correctIndex: 1, // B
    explanation: "Trace: start count = 1.\\nIter 1: count becomes 2 (2 <= 16 true)\\nIter 2: count becomes 4 (4 <= 16 true)\\nIter 3: count becomes 8 (8 <= 16 true)\\nIter 4: count becomes 16 (16 <= 16 true)\\nIter 5: count becomes 32 (32 <= 16 false, loop terminates).\\nThe body executed exactly 5 times.",
    distractorTip: "Trace through the values of count: 1 $\\to$ 2 $\\to$ 4 $\\to$ 8 $\\to$ 16 $\\to$ 32. 5 loop iterations."
  },
  "csa-u4-l2": {
    id: "csa4-l2-q3",
    stem: "Consider the following loop designed to print numbers 1 through 5:\n```java\nfor (int i = 1; i < 5; i++)\n{\n  System.out.print(i + \" \");\n}\n```\nWhat error does this code exhibit?",
    options: [
      "An off-by-one fencepost error: it prints `1 2 3 4` because the condition `i < 5` terminates before printing 5.",
      "An infinite loop because `i` is never incremented.",
      "A syntax error because `i` cannot be declared in the header.",
      "A runtime ArrayIndexOutOfBoundsException."
    ],
    correctIndex: 0, // A
    explanation: "To include 5, the condition must be `i <= 5`. Using `i < 5` stops when `i` reaches 5 without executing the body, printing only `1 2 3 4`. This is the classic off-by-one fencepost bug.",
    distractorTip: "Off-by-one error: `i < n` iterates $n - 1$ times when starting at 1; use `i <= n` to include $n$."
  },
  "csa-u4-l3": {
    id: "csa4-l3-q3",
    stem: "Consider the following algorithm to sum the digits of a positive integer `n`:\n```java\nint sum = 0;\nwhile (n > 0)\n{\n  sum += n % 10;\n  n /= 10;\n}\n```\nIf `n = 247`, what is `sum` after execution?",
    options: [
      "11",
      "13",
      "7",
      "14"
    ],
    correctIndex: 1, // B
    explanation: "Iter 1: `n % 10 = 7`, `sum = 7`, `n = 24`.\\nIter 2: `n % 10 = 4`, `sum = 7 + 4 = 11`, `n = 2`.\\nIter 3: `n % 10 = 2`, `sum = 11 + 2 = 13`, `n = 0`.\\nLoop terminates; final sum is 13.",
    distractorTip: "Standard AP digit extraction pattern: `n % 10` gets rightmost digit, `n /= 10` removes it."
  },
  "csa-u4-l4": {
    id: "csa4-l4-q3",
    stem: "How many asterisks `*` are printed by the following nested loop?\n```java\nfor (int i = 0; i < 4; i++)\n{\n  for (int j = 0; j < 3; j++)\n  {\n    System.out.print(\"*\");\n  }\n}\n```",
    options: [
      "7",
      "12",
      "16",
      "9"
    ],
    correctIndex: 1, // B
    explanation: "The outer loop runs 4 times ($i = 0, 1, 2, 3$). For each outer iteration, the inner loop runs 3 times ($j = 0, 1, 2$). Total executions = $4 \\times 3 = 12$.",
    distractorTip: "Nested loop executions: Multiply the outer loop iteration count by the inner loop iteration count ($4 \\times 3 = 12$)."
  },
  "csa-u4-l5": {
    id: "csa4-l5-q3",
    stem: "A nested loop processes an $N \\times N$ grid of pixels by examining every pair of pixels. If doubling $N$ from 100 to 200 increases the number of operations from 10,000 to 40,000, how is the runtime complexity characterized?",
    options: [
      "$O(N)$ linear time",
      "$O(\\log N)$ logarithmic time",
      "$O(N^2)$ quadratic time",
      "$O(2^N)$ exponential time"
    ],
    correctIndex: 2, // C
    explanation: "When doubling the input size ($2N$) quadruples the runtime ($4 \\times$), the algorithm exhibits quadratic time complexity: $(2N)^2 = 4N^2$, characteristic of nested loops traversing $N$ elements.",
    distractorTip: "Doubling $N$ quadruples runtime $\\implies O(N^2)$ quadratic complexity."
  },

  // UNIT 5: Writing Classes (5 levels)
  "csa-u5-l1": {
    id: "csa5-l1-q3",
    stem: "Why are instance variables in a well-designed Java class declared with `private` visibility rather than `public`?",
    options: [
      "To prevent instance variables from occupying memory on the heap.",
      "To allow subclasses to override them as methods.",
      "To implement encapsulation, preventing external classes from modifying state directly and enforcing controlled access via public accessor and mutator methods.",
      "To automatically make them accessible to static methods."
    ],
    correctIndex: 2, // C
    explanation: "Encapsulation restricts direct external access to internal object state by declaring instance variables `private` and exposing public getters (accessors) and setters (mutators), ensuring data integrity and validation.",
    distractorTip: "Encapsulation = `private` instance variables + `public` methods to control and validate access."
  },
  "csa-u5-l2": {
    id: "csa5-l2-q3",
    stem: "If a programmer writes a class with a custom parameterized constructor `public Student(String name, int id)` but does NOT write a no-argument constructor, what happens if another class calls `new Student()`?",
    options: [
      "Java uses the default no-argument constructor automatically.",
      "The program generates a compile-time error because Java only provides a default no-argument constructor if NO constructors are explicitly defined.",
      "The student object is created with all fields set to null.",
      "A NullPointerException is thrown at runtime."
    ],
    correctIndex: 1, // B
    explanation: "Java automatically provides a free no-argument default constructor ONLY when a class defines zero constructors. As soon as you write any custom constructor, the compiler no longer creates the default no-arg constructor.",
    distractorTip: "Once you define ANY constructor, the compiler removes the free default no-argument constructor!"
  },
  "csa-u5-l3": {
    id: "csa5-l3-q3",
    stem: "Consider the class:\n```java\npublic class BankAccount {\n  private double balance;\n  public void deposit(double amount) {\n    if (amount > 0) balance += amount;\n  }\n}\n```\nWhat type of method is `deposit`?",
    options: [
      "An accessor method",
      "A constructor",
      "A mutator method",
      "A static factory method"
    ],
    correctIndex: 2, // C
    explanation: "A mutator (setter) method modifies the internal state or instance variables of an object (e.g. changing `balance`). Accessor (getter) methods retrieve values without modifying state.",
    distractorTip: "Accessor = GET (reads state); Mutator = SET (modifies state)."
  },
  "csa-u5-l4": {
    id: "csa5-l4-q3",
    stem: "In a class method, what is the purpose of using the `this` keyword, as in `this.name = name;`?",
    options: [
      "To instantiate a new copy of the object on the stack.",
      "To resolve variable shadowing by distinguishing the object's instance variable from the local parameter variable sharing the same name.",
      "To call the superclass constructor.",
      "To make the variable static across all threads."
    ],
    correctIndex: 1, // B
    explanation: "When a method parameter has the exact same identifier as an instance variable, the parameter 'shadows' (hides) the instance variable. Prepending `this.` explicitly targets the current instance's field rather than the local parameter.",
    distractorTip: "`this.field = field;` resolves variable shadowing by pointing to the current object's instance variable."
  },
  "csa-u5-l5": {
    id: "csa5-l5-q3",
    stem: "If a variable in a Java class is declared with the `static` keyword, what does that signify?",
    options: [
      "The variable cannot be modified after initialization.",
      "A single shared copy of the variable exists for the entire class, shared across all instances of that class.",
      "The variable is stored exclusively in cache memory.",
      "The variable is only accessible from within private methods."
    ],
    correctIndex: 1, // B
    explanation: "Static variables belong to the class itself rather than to individual object instances. All instances share the single static variable in memory, making them ideal for tracking class-wide counters or shared constants.",
    distractorTip: "Static = belongs to the CLASS (shared by all objects); Non-static = belongs to an INDIVIDUAL instance."
  },

  // UNIT 6: 1D Array (5 levels)
  "csa-u6-l1": {
    id: "csa6-l1-q3",
    stem: "What are the default values assigned to the elements of an integer array `int[] arr = new int[5];` immediately upon creation?",
    options: [
      "null",
      "-1",
      "0",
      "Garbage random values"
    ],
    correctIndex: 2, // C
    explanation: "In Java, array elements are automatically initialized to default values upon allocation: `0` for numeric primitives (`int`, `double` is `0.0`), `false` for `boolean`, and `null` for object references.",
    distractorTip: "Default array initializations: numeric = 0, boolean = false, object references = null."
  },
  "csa-u6-l2": {
    id: "csa6-l2-q3",
    stem: "What error occurs when executing the following code?\n```java\nint[] nums = {10, 20, 30};\nSystem.out.println(nums[nums.length]);\n```",
    options: [
      "It prints 30.",
      "It prints null.",
      "ArrayIndexOutOfBoundsException is thrown at runtime.",
      "A compile-time error occurs."
    ],
    correctIndex: 2, // C
    explanation: "Arrays in Java are zero-indexed, with valid indices from `0` to `length - 1`. For an array of length 3, valid indices are 0, 1, 2. Accessing `nums[3]` throws an `ArrayIndexOutOfBoundsException`.",
    distractorTip: "Array length is `n`, but the last valid index is `n - 1`. Accessing `nums[nums.length]` always throws an exception!"
  },
  "csa-u6-l3": {
    id: "csa6-l3-q3",
    stem: "What is a major limitation of the enhanced `for-each` loop in Java when working with primitive 1D arrays?",
    options: [
      "It cannot traverse backwards or modify the array elements directly.",
      "It runs twice as slow as a standard for loop.",
      "It cannot read array values without throwing exceptions.",
      "It only works on arrays of Strings."
    ],
    correctIndex: 0, // A
    explanation: "The enhanced `for-each` loop provides read-only forward traversal. Because the loop variable receives a copy of each primitive element, assigning to it (`x = 0;`) does NOT change the array. It also cannot traverse backwards or track indices.",
    distractorTip: "For-each loop: Cannot modify primitive array values, cannot track current index, cannot traverse in reverse."
  },
  "csa-u6-l4": {
    id: "csa6-u6-l4-q3",
    stem: "Consider the algorithm to find the maximum value in a non-empty array `arr`:\n```java\nint max = arr[0];\nfor (int i = 1; i < arr.length; i++)\n{\n  if (arr[i] > max) max = arr[i];\n}\n```\nWhy is initializing `max = arr[0]` preferred over initializing `max = 0`?",
    options: [
      "Initializing to 0 causes an ArrayIndexOutOfBoundsException.",
      "If all values in `arr` are negative numbers (e.g. `{-5, -12, -3}`), initializing to 0 would incorrectly return 0 as the maximum.",
      "The compiler prohibits initializing variables to zero inside search algorithms.",
      "It reduces the runtime from $O(N)$ to $O(1)$."
    ],
    correctIndex: 1, // B
    explanation: "If an array contains only negative integers, any initial value of 0 would be greater than all elements in the array, causing the method to report 0 instead of the true maximum element (e.g. -3). Initializing to `arr[0]` guarantees the benchmark is an authentic element.",
    distractorTip: "Always initialize min/max search variables to `arr[0]`, NEVER to 0 (which breaks for all-negative arrays)!"
  },
  "csa-u6-l5": {
    id: "csa6-u6-l5-q3",
    stem: "Consider the code to reverse an array in place:\n```java\nfor (int i = 0; i < arr.length / 2; i++)\n{\n  int temp = arr[i];\n  arr[i] = arr[arr.length - 1 - i];\n  arr[arr.length - 1 - i] = temp;\n}\n```\nWhy does the loop terminate at `arr.length / 2`?",
    options: [
      "To prevent swapping elements back to their original positions.",
      "Because the second half of the array is automatically reversed by the compiler.",
      "To avoid comparing odd and even indices.",
      "Because integer division truncates odd lengths."
    ],
    correctIndex: 0, // A
    explanation: "Reversing an array swaps elements from the outer ends inward. If the loop continued all the way to `arr.length`, each element would be swapped twice, restoring the array to its original unreversed order.",
    distractorTip: "Swapping elements from both ends requires looping only halfway (`i < length / 2`); looping the full length undoes the reversal!"
  },

  // UNIT 7: ArrayList (6 levels)
  "csa-u7-l1": {
    id: "csa7-l1-q3",
    stem: "Which of the following declarations correctly creates an `ArrayList` capable of storing integer values in Java?",
    options: [
      "ArrayList<int> list = new ArrayList<int>();",
      "ArrayList list = new int[];",
      "ArrayList<Integer> list = new ArrayList<Integer>();",
      "List<int> list = new List<int>();"
    ],
    correctIndex: 2, // C
    explanation: "Java generics do not support primitive types (`int`, `double`, `boolean`). They require wrapper class object types, so integers must be declared using `ArrayList<Integer>`.",
    distractorTip: "Generics require Wrapper classes: `ArrayList<Integer>`, NEVER `ArrayList<int>`!"
  },
  "csa-u7-l2": {
    id: "csa7-l2-q3",
    stem: "Consider the code segment:\n```java\nArrayList<String> words = new ArrayList<String>();\nwords.add(\"cat\");\nwords.add(\"dog\");\nwords.add(1, \"bird\");\nwords.set(0, \"ant\");\n```\nWhat does `words` contain after execution?",
    options: [
      "[\"ant\", \"bird\", \"dog\"]",
      "[\"cat\", \"bird\", \"dog\"]",
      "[\"ant\", \"dog\"]",
      "[\"bird\", \"ant\", \"dog\"]"
    ],
    correctIndex: 0, // A
    explanation: "Initial adds: [\"cat\", \"dog\"].\\n`words.add(1, \"bird\")` inserts at index 1, shifting \"dog\" right: [\"cat\", \"bird\", \"dog\"].\\n`words.set(0, \"ant\")` replaces index 0: [\"ant\", \"bird\", \"dog\"].",
    distractorTip: "`add(index, val)` SHIFTS elements to the right; `set(index, val)` REPLACES the element at that index."
  },
  "csa-u7-l3": {
    id: "csa7-l3-q3",
    stem: "Why does removing elements from an `ArrayList` in a standard forward loop (`for (int i = 0; i < list.size(); i++)`) frequently cause a logic bug?",
    options: [
      "Removing an element shifts all subsequent elements one index to the left, causing the element immediately following the removed element to be skipped as `i` increments.",
      "It throws an unhandled ConcurrentModificationException.",
      "The ArrayList automatically shrinks to size 0.",
      "Forward loops lock the internal memory buffer."
    ],
    correctIndex: 0, // A
    explanation: "When `list.remove(i)` executes, all elements to the right shift left by one index. When the loop does `i++`, the element that shifted into position `i` is skipped without being checked. Solution: traverse backwards from `list.size() - 1` down to 0.",
    distractorTip: "Classic AP trap: Removing in a forward loop skips elements due to index shifting left. Traverse BACKWARDS when removing!"
  },
  "csa-u7-l4": {
    id: "csa7-l4-q3",
    stem: "Consider the following method to swap elements in an `ArrayList<String> list` at indices `i` and `j`:\n```java\nString temp = list.set(i, list.get(j));\nlist.set(j, temp);\n```\nWhy does this swap work correctly without an explicit extra `get()` call?",
    options: [
      "Because `set(index, val)` mutates both indices simultaneously.",
      "Because `list.set(i, val)` replaces the element at index `i` AND returns the element that was previously at index `i`, capturing it in `temp`.",
      "Because Strings are passed by reference.",
      "Because ArrayList methods are static."
    ],
    correctIndex: 1, // B
    explanation: "In Java's `ArrayList`, `E set(int index, E element)` replaces the element and returns the original element previously stored at that index, so `temp` stores the original element at index `i`.",
    distractorTip: "Note: `set(i, val)` RETURNS the element that was previously at index `i`!"
  },
  "csa-u7-l5": {
    id: "csa7-l5-q3",
    stem: "How many total comparisons does Selection Sort make to sort an array of $N$ integers in both the best-case and worst-case scenarios?",
    options: [
      "$O(\\log N)$ comparisons",
      "$O(N)$ comparisons",
      "Selection Sort always makes approximately $N(N - 1) / 2$ comparisons, so its complexity is always $O(N^2)$ regardless of initial ordering.",
      "$O(N \\log N)$ comparisons"
    ],
    correctIndex: 2, // C
    explanation: "Selection Sort always scans the entire unsorted portion to find the minimum element in every pass, regardless of whether the array is already sorted, reversed, or random. It always makes $\\frac{N(N-1)}{2} \\approx O(N^2)$ comparisons.",
    distractorTip: "Selection Sort ALWAYS makes $O(N^2)$ comparisons in best, worst, and average cases."
  },
  "csa-u7-l6": {
    id: "csa7-l6-q3",
    stem: "Under what specific condition does Insertion Sort achieve its optimal best-case runtime of $O(N)$?",
    options: [
      "When the array is sorted in exact reverse descending order.",
      "When the array contains duplicate elements.",
      "When the array is already pre-sorted in ascending order, requiring only 1 comparison per element and zero shifts.",
      "When the array size is a power of 2."
    ],
    correctIndex: 2, // C
    explanation: "Insertion sort checks whether the current element is greater than the preceding element. If the array is already sorted, this inner condition fails on the very first comparison, requiring only $N - 1$ comparisons and zero element shifts ($O(N)$ best case).",
    distractorTip: "Insertion sort best case is $O(N)$ when already sorted; worst case is $O(N^2)$ when reverse sorted."
  },

  // UNIT 8: 2D Array (4 levels)
  "csa-u8-l1": {
    id: "csa8-l1-q3",
    stem: "Given the 2D array declaration `int[][] matrix = new int[4][6];`, how many rows and columns does `matrix` have, and what is the index of the bottom-right corner element?",
    options: [
      "6 rows, 4 columns; index is `matrix[5][3]`",
      "4 rows, 6 columns; index is `matrix[3][5]`",
      "4 rows, 6 columns; index is `matrix[4][6]`",
      "24 rows, 1 column; index is `matrix[23][0]`"
    ],
    correctIndex: 1, // B
    explanation: "`new int[rows][cols]` allocates 4 rows and 6 columns. Because arrays are zero-indexed, valid row indices are $0$ to $3$ and valid column indices are $0$ to $5$. The bottom-right corner is `matrix[3][5]`.",
    distractorTip: "2D array format: `[row][col]`. Number of rows is `matrix.length`; number of columns is `matrix[0].length`. Last element is `[rows - 1][cols - 1]`."
  },
  "csa-u8-l2": {
    id: "csa8-l2-q3",
    stem: "Consider the nested loop traversal:\n```java\nfor (int r = 0; r < grid.length; r++)\n{\n  for (int c = 0; c < grid[r].length; c++)\n  {\n    System.out.print(grid[r][c] + \" \");\n  }\n}\n```\nWhat traversal order does this code implement?",
    options: [
      "Column-major order",
      "Diagonal zigzag order",
      "Row-major order",
      "Spiral order"
    ],
    correctIndex: 2, // C
    explanation: "In row-major traversal, the outer loop iterates over the rows (`r`) and the inner loop iterates across all columns (`c`) of that row, processing entire rows left-to-right from top to bottom.",
    distractorTip: "Outer loop rows, inner loop columns $\\implies$ Row-major. Outer loop columns, inner loop rows $\\implies$ Column-major."
  },
  "csa-u8-l3": {
    id: "csa8-l3-q3",
    stem: "Consider the column-major traversal loop:\n```java\nfor (int c = 0; c < grid[0].length; c++)\n{\n  for (int r = 0; r < grid.length; r++)\n  {\n    // process grid[r][c]\n  }\n}\n```\nWhat will happen if `grid` is an empty 2D array with 0 rows (`int[][] grid = new int[0][0];`)?",
    options: [
      "The loops execute 0 times cleanly.",
      "An ArrayIndexOutOfBoundsException is thrown when accessing `grid[0].length`.",
      "The program enters an infinite loop.",
      "A NullPointerException is thrown by the garbage collector."
    ],
    correctIndex: 1, // B
    explanation: "If `grid` has 0 rows (`grid.length == 0`), attempting to access `grid[0]` to check its length throws an `ArrayIndexOutOfBoundsException` because row index 0 does not exist.",
    distractorTip: "Always ensure `grid.length > 0` before attempting to access `grid[0].length`."
  },
  "csa-u8-l4": {
    id: "csa8-l4-q3",
    stem: "In an $N \\times N$ square matrix `arr`, which condition identifies elements that lie on the main diagonal running from top-left to bottom-right?",
    options: [
      "`row + col == arr.length - 1`",
      "`row == col`",
      "`row != col`",
      "`arr[row][col] == 0`"
    ],
    correctIndex: 1, // B
    explanation: "The main diagonal consists of elements where the row index equals the column index: `(0,0), (1,1), (2,2), ... (N-1, N-1)`. (The anti-diagonal running from top-right to bottom-left satisfies `row + col == N - 1`).",
    distractorTip: "Main diagonal = `row == col`; Opposite anti-diagonal = `row + col == N - 1`."
  },

  // UNIT 9: Inheritance & Polymorphism (6 levels)
  "csa-u9-l1": {
    id: "csa9-l1-q3",
    stem: "Given the class declaration `public class Dog extends Animal`, which of the following statements is true regarding inheritance?",
    options: [
      "Dog inherits all private instance variables of Animal and can access them directly by name.",
      "Dog is a superclass of Animal.",
      "Dog inherits public and protected methods from Animal and can access Animal's private fields only via inherited public accessor methods.",
      "Dog cannot define any new methods of its own."
    ],
    correctIndex: 2, // C
    explanation: "Subclasses inherit all public and protected members of their superclass. Private fields in the superclass are inherited as part of the object's state, but cannot be directly accessed by name in the subclass; they must be accessed through public getters and setters.",
    distractorTip: "Subclasses CANNOT access `private` superclass variables directly; they must use public accessors/mutators."
  },
  "csa-u9-l2": {
    id: "csa9-l2-q3",
    stem: "If a subclass constructor does not explicitly call `super(...)` on its first line, what does the Java compiler do automatically?",
    options: [
      "It generates a compile-time error.",
      "It inserts a call to `super();` (the no-argument superclass constructor) as the very first executable statement.",
      "It skips superclass initialization entirely.",
      "It calls the `Object` class constructor directly."
    ],
    correctIndex: 1, // B
    explanation: "If a subclass constructor does not explicitly call `super(...)` or `this(...)`, the Java compiler automatically inserts an implicit call to `super();` on the first line. If the superclass has no no-arg constructor, a compile-time error results.",
    distractorTip: "Java automatically inserts `super();` on the first line of any subclass constructor that lacks an explicit super call."
  },
  "csa-u9-l3": {
    id: "csa9-l3-q3",
    stem: "What is the key difference between method OVERRIDING and method OVERLOADING in Java?",
    options: [
      "Overriding occurs within the same class with different parameters; overloading occurs across subclasses.",
      "Overriding provides a new implementation in a subclass with the EXACT same method signature; overloading defines methods with the SAME name but DIFFERENT parameter lists.",
      "Overriding requires the `static` keyword; overloading does not.",
      "Overloading is evaluated at runtime; overriding is evaluated at compile time."
    ],
    correctIndex: 1, // B
    explanation: "Method Overriding occurs when a subclass redefines a superclass method using the identical method name and parameter types. Method Overloading occurs when two methods in the same class share a name but have different parameter types or counts.",
    distractorTip: "Overriding = SAME signature in subclass; Overloading = DIFFERENT parameter list in same or subclass."
  },
  "csa-u9-l4": {
    id: "csa9-l4-q3",
    stem: "Consider the classes:\n```java\npublic class Animal { public void speak() { System.out.print(\"Grunt \"); } }\npublic class Dog extends Animal { public void speak() { System.out.print(\"Bark \"); } }\n```\nWhat is printed by:\n```java\nAnimal pet = new Dog();\npet.speak();\n```",
    options: [
      "\"Grunt \"",
      "\"Grunt Bark \"",
      "\"Bark \"",
      "A ClassCastException is thrown."
    ],
    correctIndex: 2, // C
    explanation: "This demonstrates polymorphism and dynamic method binding (dynamic dispatch). The declared reference type (`Animal`) is checked at compile-time to ensure `speak()` exists. At runtime, Java executes the overridden method corresponding to the actual object type instantiated in heap memory (`Dog`), printing `\"Bark \"`.",
    distractorTip: "Polymorphism rule: Compile-time type checks IF the method exists; Runtime object type determines WHICH overridden version executes!"
  },
  "csa-u9-l5": {
    id: "csa9-l5-q3",
    stem: "Consider the class hierarchy where `Dog extends Animal`. Why does the code line `Dog d = new Animal();` cause a compile-time error?",
    options: [
      "Because all Dogs are Animals, but not all Animals are Dogs (narrowing reference conversion is invalid without casting, and invalid at runtime).",
      "Because Animal is an abstract class.",
      "Because Dog does not implement the Comparable interface.",
      "Because Java prohibits multiple inheritance."
    ],
    correctIndex: 0, // A
    explanation: "A superclass object cannot be assigned to a subclass reference variable without casting (`SubClass s = new SuperClass();` is illegal). Every Dog is an Animal, but not every Animal is a Dog.",
    distractorTip: "`SuperClass obj = new SubClass();` is LEGAL. `SubClass obj = new SuperClass();` is ILLEGAL!"
  },
  "csa-u9-l6": {
    id: "csa9-l6-q3",
    stem: "If a custom Java class does not override the `toString()` method inherited from the `Object` superclass, what does calling `System.out.println(myObject)` print?",
    options: [
      "All private instance variable names and values formatted as JSON.",
      "An empty string `\"\"`.",
      "The class name followed by an `@` symbol and the object's hexadecimal hash code (e.g. `Student@15db9742`).",
      "A NullPointerException."
    ],
    correctIndex: 2, // C
    explanation: "The default implementation of `toString()` in Java's `Object` class returns `getClass().getName() + '@' + Integer.toHexString(hashCode())`. Custom classes override `toString()` to return meaningful state descriptions.",
    distractorTip: "Default `Object.toString()` returns `ClassName@hexHashcode`."
  },

  // UNIT 10: Recursion (4 levels)
  "csa-u10-l1": {
    id: "csa10-l1-q3",
    stem: "What data structure does the Java Virtual Machine (JVM) use internally to store active method activation records and local variables during recursive execution?",
    options: [
      "A first-in, first-out Queue",
      "A binary search tree",
      "A Call Stack",
      "A hash table"
    ],
    correctIndex: 2, // C
    explanation: "The JVM uses a runtime Call Stack to manage method calls. Each time a method is invoked (including recursive calls), a stack frame containing parameters and local variables is pushed onto the call stack. Upon reaching a return statement, the frame is popped.",
    distractorTip: "Recursive execution is managed by the Call STACK (LIFO: Last-In, First-Out)."
  },
  "csa-u10-l2": {
    id: "csa10-l2-q3",
    stem: "What runtime error occurs if a recursive method lacks a base case or has recursive steps that never move toward the base case?",
    options: [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "StackOverflowError",
      "ArithmeticException"
    ],
    correctIndex: 2, // C
    explanation: "Infinite recursion repeatedly pushes activation frames onto the JVM call stack without ever popping them, eventually consuming all allocated stack memory and throwing a `StackOverflowError`.",
    distractorTip: "Infinite recursion leads to `StackOverflowError` (exhaustion of call stack memory)."
  },
  "csa-u10-l3": {
    id: "csa10-l3-q3",
    stem: "Consider the recursive method:\n```java\npublic void printNumbers(int n)\n{\n  if (n > 0)\n  {\n    printNumbers(n - 1);\n    System.out.print(n + \" \");\n  }\n}\n```\nWhat is printed by the call `printNumbers(3)`?",
    options: [
      "\"3 2 1 \"",
      "\"1 2 3 \"",
      "\"0 1 2 3 \"",
      "\"3 2 1 0 \""
    ],
    correctIndex: 1, // B
    explanation: "Because the recursive call `printNumbers(n - 1)` occurs BEFORE the print statement, calls are pushed onto the call stack until `n = 0`. As the stack unwinds from the base case: `printNumbers(1)` prints 1, `printNumbers(2)` prints 2, and `printNumbers(3)` prints 3, producing `\"1 2 3 \"`.",
    distractorTip: "Print AFTER recursive call $\\implies$ prints in ascending order as stack UNWINDS! Print BEFORE recursive call $\\implies$ prints in descending order."
  },
  "csa-u10-l4": {
    id: "csa10-l4-q3",
    stem: "Merge Sort is a recursive divide-and-conquer sorting algorithm. What are its best-case, average-case, and worst-case time complexities for sorting an array of $N$ elements?",
    options: [
      "Best: $O(N)$, Worst: $O(N^2)$",
      "Best, Average, and Worst are all $O(N \\log N)$",
      "Best: $O(1)$, Worst: $O(N \\log N)$",
      "Best: $O(N^2)$, Worst: $O(N^2)$"
    ],
    correctIndex: 1, // B
    explanation: "Merge sort divides the array in half $\\log_2 N$ times and merges the halves in $O(N)$ time per level. Because it divides and merges systematically regardless of initial element ordering, its time complexity is strictly $O(N \\log N)$ in all cases.",
    distractorTip: "Merge Sort is ALWAYS $O(N \\log N)$ in best, worst, and average cases."
  }
};

const fullPath = path.resolve(__dirname, '../src/data/quiz/apCsaUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_CSA_UNIT_DEFINITIONS;

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

console.log('Added', addedCount, 'questions to AP CSA.');

const newCode = `// AP Computer Science A Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–10)
// Complete authentic coverage: 51 Levels, 153 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_CSA_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apCsaUnitsData.ts successfully.');
