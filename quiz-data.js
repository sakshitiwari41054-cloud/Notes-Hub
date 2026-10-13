/*
  QUIZ DATA FILE (multiple choice questions)
  ------------------------------------------
  To add a quiz question, open admin.html, choose "Quiz question (MCQ)",
  fill in the form and paste the generated line at the TOP of the list below.

  Each question:
    s : subject key  ("fundamentals" | "ds" | "dbms" | "graphics" | "oops" | "java" | "python" | "c" | "cpp")
    q : the question
    o : exactly 4 options
    a : position of the correct option (0 = first, 1 = second, 2 = third, 3 = fourth)
    e : a short explanation shown after the student answers

  You can use @@code@@ for inline code and **bold** inside q, o and e.
  The options are shuffled every time, so their order does not matter.
*/

window.QUIZ = [

  /* ---------------- COMPUTER FUNDAMENTALS ---------------- */
  { s: "fundamentals", q: "Which part of the CPU performs arithmetic and logical operations?", o: ["Control Unit", "ALU", "Register", "Cache"], a: 1, e: "The **ALU** (Arithmetic Logic Unit) does calculations like addition and comparisons such as AND and OR." },
  { s: "fundamentals", q: "Which of these memories is volatile (loses data when the power is off)?", o: ["ROM", "Hard disk", "RAM", "SSD"], a: 2, e: "**RAM** is volatile. ROM, hard disks and SSDs keep their data without power." },
  { s: "fundamentals", q: "How many bits make 1 byte?", o: ["4", "8", "16", "32"], a: 1, e: "1 byte = **8 bits**." },
  { s: "fundamentals", q: "What is the binary form of the decimal number 10?", o: ["1010", "1100", "1001", "1110"], a: 0, e: "10 = 8 + 2, so the binary form is **1010**." },
  { s: "fundamentals", q: "Which generation of computers used vacuum tubes?", o: ["First", "Second", "Third", "Fourth"], a: 0, e: "The **first generation** (1940 to 1956) used vacuum tubes. Transistors came in the second generation." },
  { s: "fundamentals", q: "Which of these is an output device?", o: ["Keyboard", "Mouse", "Scanner", "Printer"], a: 3, e: "A **printer** shows results on paper. Keyboard, mouse and scanner send data in." },
  { s: "fundamentals", q: "Which of these is system software?", o: ["MS Word", "Operating system", "VLC Player", "Photoshop"], a: 1, e: "An **operating system** (Windows, Linux, Android) runs the computer itself. The others are application software." },
  { s: "fundamentals", q: "Which is the fastest memory in a computer?", o: ["Hard disk", "RAM", "Cache", "Registers"], a: 3, e: "**Registers** sit inside the CPU. The order from fastest is registers, cache, RAM, then disk." },

  /* ---------------- DATA STRUCTURES ---------------- */
  { s: "ds", q: "Which principle does a stack follow?", o: ["FIFO", "LIFO", "Priority order", "Sorted order"], a: 1, e: "A stack is **LIFO**: the last element pushed is the first one popped." },
  { s: "ds", q: "What is the time complexity of binary search?", o: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], a: 1, e: "Binary search halves the search range each step, so it takes **O(log n)**." },
  { s: "ds", q: "Binary search works only when the array is:", o: ["Unsorted", "Sorted", "Empty", "A power of 2 in size"], a: 1, e: "The array must be **sorted**, otherwise discarding half of it is not valid." },
  { s: "ds", q: "Which data structure does breadth-first search (BFS) use?", o: ["Stack", "Queue", "Tree", "Array"], a: 1, e: "BFS visits nodes level by level, using a **queue**. Depth-first search uses a stack." },
  { s: "ds", q: "Which of these is a non-linear data structure?", o: ["Array", "Stack", "Tree", "Queue"], a: 2, e: "A **tree** is non-linear because its elements form a hierarchy." },
  { s: "ds", q: "How long does it take to read an array element by its index?", o: ["O(n)", "O(1)", "O(log n)", "O(n^2)"], a: 1, e: "Arrays sit in continuous memory, so indexing takes **O(1)** (constant time)." },
  { s: "ds", q: "Which stack operation removes the top element?", o: ["push", "pop", "peek", "insert"], a: 1, e: "**pop** removes the top element. push adds one, and peek only looks at it." },
  { s: "ds", q: "Each node of a singly linked list stores data and:", o: ["The array size", "A pointer to the next node", "Its own index", "A hash key"], a: 1, e: "A node holds its data plus a **pointer to the next node**." },

  /* ---------------- DBMS ---------------- */
  { s: "dbms", q: "Which key links one table to another table?", o: ["Primary key", "Foreign key", "Super key", "Unique key"], a: 1, e: "A **foreign key** refers to the primary key of another table." },
  { s: "dbms", q: "Which SQL command removes a table completely (structure and data)?", o: ["DELETE", "TRUNCATE", "DROP", "REMOVE"], a: 2, e: "**DROP TABLE** removes the whole table. DELETE removes rows and TRUNCATE empties it." },
  { s: "dbms", q: "What does the \"A\" in ACID stand for?", o: ["Accuracy", "Atomicity", "Availability", "Authority"], a: 1, e: "**Atomicity**: a transaction happens completely or not at all." },
  { s: "dbms", q: "Which SQL clause filters rows?", o: ["ORDER BY", "GROUP BY", "WHERE", "SELECT"], a: 2, e: "**WHERE** keeps only the rows that match a condition." },
  { s: "dbms", q: "Which normal form removes partial dependency?", o: ["1NF", "2NF", "3NF", "BCNF"], a: 1, e: "**2NF** removes partial dependency, where a column depends on only part of a composite key." },
  { s: "dbms", q: "Which SQL command is used to read data from a table?", o: ["INSERT", "SELECT", "UPDATE", "CREATE"], a: 1, e: "**SELECT** reads data. INSERT adds rows and UPDATE changes them." },
  { s: "dbms", q: "In a relational database, a table is also called a:", o: ["Tuple", "Relation", "Attribute", "Schema"], a: 1, e: "A table is a **relation**. A row is a tuple and a column is an attribute." },
  { s: "dbms", q: "Which of these is a NoSQL database?", o: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"], a: 2, e: "**MongoDB** stores flexible documents instead of tables. The others are relational." },

  /* ---------------- COMPUTER GRAPHICS ---------------- */
  { s: "graphics", q: "What is a pixel?", o: ["The smallest dot of a picture", "A type of line", "A color code", "A file format"], a: 0, e: "A **pixel** (picture element) is the smallest dot that can be shown on the screen." },
  { s: "graphics", q: "Which type of graphics stays sharp when you zoom in?", o: ["Raster", "Vector", "Bitmap", "JPEG"], a: 1, e: "**Vector** graphics are made of shapes and formulas, so they never turn blurry." },
  { s: "graphics", q: "Which line drawing algorithm uses only integer arithmetic?", o: ["DDA", "Bresenham's", "Scan fill", "Boundary fill"], a: 1, e: "**Bresenham's** algorithm avoids floating point and rounding, so it is faster than DDA." },
  { s: "graphics", q: "Which transformation moves an object from one position to another?", o: ["Scaling", "Rotation", "Translation", "Shearing"], a: 2, e: "**Translation** shifts an object using x' = x + tx and y' = y + ty." },
  { s: "graphics", q: "\"1920 x 1080\" describes a screen's:", o: ["Resolution", "Brightness", "Refresh rate", "Color depth"], a: 0, e: "It is the **resolution**: 1920 pixels across and 1080 pixels down." },
  { s: "graphics", q: "Which transformation changes the size of an object?", o: ["Translation", "Scaling", "Reflection", "Clipping"], a: 1, e: "**Scaling** multiplies the coordinates, using x' = x * sx and y' = y * sy." },
  { s: "graphics", q: "Which of these is a vector image format?", o: ["JPG", "PNG", "SVG", "BMP"], a: 2, e: "**SVG** stores shapes, not pixels. JPG, PNG and BMP are raster formats." },
  { s: "graphics", q: "What does rendering mean in computer graphics?", o: ["Deleting an image", "Creating the final image from a model", "Compressing a file", "Scanning a photo"], a: 1, e: "**Rendering** turns a model (shapes, light, color) into the final picture." },

  /* ---------------- OOPs ---------------- */
  { s: "oops", q: "Which OOP concept means \"one name, many forms\"?", o: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], a: 1, e: "**Polymorphism** lets the same name or action behave differently in different situations." },
  { s: "oops", q: "Binding data and methods together and hiding the data is called:", o: ["Abstraction", "Encapsulation", "Inheritance", "Overloading"], a: 1, e: "**Encapsulation** keeps data private and gives access through methods." },
  { s: "oops", q: "A class is best described as a:", o: ["Real object", "Blueprint for objects", "Variable", "Loop"], a: 1, e: "A **class** is a blueprint. Objects are the real instances made from it." },
  { s: "oops", q: "In which inheritance does one child class have two parent classes?", o: ["Single", "Multilevel", "Multiple", "Hierarchical"], a: 2, e: "**Multiple inheritance** has more than one parent. Java does not allow it with classes." },
  { s: "oops", q: "Method overloading is an example of:", o: ["Runtime polymorphism", "Compile-time polymorphism", "Inheritance", "Abstraction"], a: 1, e: "Overloading is resolved when the program is compiled, so it is **compile-time polymorphism**." },
  { s: "oops", q: "When is a constructor called?", o: ["When an object is created", "When an object is destroyed", "When the program ends", "Only when you call it by name"], a: 0, e: "A **constructor** runs automatically when an object is created." },
  { s: "oops", q: "Which concept shows only the essential features and hides the details?", o: ["Abstraction", "Inheritance", "Overriding", "Looping"], a: 0, e: "**Abstraction** hides complexity, like pressing a button without knowing the circuit." },
  { s: "oops", q: "An instance of a class is called a(n):", o: ["Method", "Object", "Package", "Interface"], a: 1, e: "An **object** is a real instance of a class." },

  /* ---------------- JAVA ---------------- */
  { s: "java", q: "Who developed Java?", o: ["James Gosling", "Dennis Ritchie", "Guido van Rossum", "Bjarne Stroustrup"], a: 0, e: "**James Gosling** created Java at Sun Microsystems. It was released in 1995." },
  { s: "java", q: "Java source code is compiled into:", o: ["Machine code", "Bytecode", "Assembly", "Another source file"], a: 1, e: "The compiler produces **bytecode**, which the JVM runs on any platform." },
  { s: "java", q: "Which is the correct entry point of a Java program?", o: ["public static void main(String[] args)", "static public main()", "public void start()", "void main()"], a: 0, e: "The JVM looks for @@public static void main(String[] args)@@ to start the program." },
  { s: "java", q: "Which keyword is used to inherit a class in Java?", o: ["implements", "extends", "inherits", "super"], a: 1, e: "**extends** is used for class inheritance. implements is used for interfaces." },
  { s: "java", q: "Which of these is NOT a primitive data type in Java?", o: ["int", "boolean", "String", "char"], a: 2, e: "**String** is a class (an object type), not a primitive." },
  { s: "java", q: "What does the == operator compare for objects?", o: ["Their content", "Their references (addresses)", "Their length", "Their hash code"], a: 1, e: "**==** compares references. Use @@equals()@@ to compare content." },
  { s: "java", q: "Which of these is immutable?", o: ["StringBuilder", "StringBuffer", "String", "ArrayList"], a: 2, e: "A **String** cannot be changed after it is created." },
  { s: "java", q: "What does JVM stand for?", o: ["Java Virtual Machine", "Java Variable Method", "Java Visual Machine", "Joint Virtual Memory"], a: 0, e: "The **Java Virtual Machine** runs bytecode and makes Java platform independent." },

  /* ---------------- PYTHON ---------------- */
  { s: "python", q: "Who created Python?", o: ["Guido van Rossum", "James Gosling", "Linus Torvalds", "Dennis Ritchie"], a: 0, e: "**Guido van Rossum** created Python and released it in 1991." },
  { s: "python", q: "Which of these data types is immutable?", o: ["list", "dict", "tuple", "set"], a: 2, e: "A **tuple** cannot be changed after it is created." },
  { s: "python", q: "What is the type of the result of @@5 / 2@@ in Python 3?", o: ["int", "float", "double", "str"], a: 1, e: "The @@/@@ operator always gives a **float** in Python 3, so @@5 / 2@@ is @@2.5@@." },
  { s: "python", q: "Which keyword is used to define a function?", o: ["function", "def", "fun", "define"], a: 1, e: "Functions start with **def**, for example @@def greet():@@." },
  { s: "python", q: "How do you write a single-line comment in Python?", o: ["// comment", "# comment", "/* comment */", "-- comment"], a: 1, e: "A comment starts with **#**." },
  { s: "python", q: "What does @@len([1, 2, 3])@@ return?", o: ["2", "3", "4", "Error"], a: 1, e: "The list has 3 elements, so it returns **3**." },
  { s: "python", q: "Python is mainly:", o: ["Compiled only", "Interpreted", "Machine level", "A markup language"], a: 1, e: "Python code is run line by line by an **interpreter**." },
  { s: "python", q: "Which of these creates an empty dictionary?", o: ["[]", "()", "{}", "set()"], a: 2, e: "**{}** creates an empty dictionary. @@[]@@ is a list, @@()@@ a tuple and @@set()@@ a set." },

  /* ---------------- C ---------------- */
  { s: "c", q: "Who developed the C language?", o: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"], a: 0, e: "**Dennis Ritchie** developed C at Bell Labs in 1972." },
  { s: "c", q: "Which function is used to print output in C?", o: ["cout", "printf", "print", "echo"], a: 1, e: "**printf** is declared in @@stdio.h@@." },
  { s: "c", q: "Which operator gives the address of a variable?", o: ["*", "&", "#", "@"], a: 1, e: "**&** is the address-of operator. @@*@@ reads the value at an address." },
  { s: "c", q: "On most modern systems, an @@int@@ in C takes how many bytes?", o: ["1", "2", "4", "8"], a: 2, e: "Usually **4 bytes**, though the exact size depends on the compiler and machine." },
  { s: "c", q: "Which header file is needed for @@printf()@@ and @@scanf()@@?", o: ["stdlib.h", "stdio.h", "string.h", "math.h"], a: 1, e: "**stdio.h** (standard input output) declares them." },
  { s: "c", q: "Which function releases memory allocated with malloc()?", o: ["delete", "free", "remove", "release"], a: 1, e: "**free()** gives the memory back." },
  { s: "c", q: "Which loop always runs at least once?", o: ["for", "while", "do-while", "None of them"], a: 2, e: "A **do-while** loop checks its condition after the body, so the body runs once even if the condition is false." },
  { s: "c", q: "In C, the first element of an array has the index:", o: ["1", "0", "-1", "It depends on the compiler"], a: 1, e: "Array indexing starts at **0**." },

  /* ---------------- C++ ---------------- */
  { s: "cpp", q: "Who created C++?", o: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"], a: 0, e: "**Bjarne Stroustrup** created C++ in 1979 as \"C with Classes\"." },
  { s: "cpp", q: "Which object is used for standard output in C++?", o: ["cin", "cout", "print", "scanf"], a: 1, e: "**cout** (with @@<<@@) prints output. cin reads input." },
  { s: "cpp", q: "Which keyword allocates memory dynamically in C++?", o: ["alloc", "new", "make", "create"], a: 1, e: "**new** allocates memory, and **delete** releases it." },
  { s: "cpp", q: "What is the default access level of members in a @@class@@?", o: ["public", "private", "protected", "There is no default"], a: 1, e: "In a class the default is **private**. In a struct it is public." },
  { s: "cpp", q: "Which keyword enables runtime polymorphism in C++?", o: ["static", "virtual", "final", "const"], a: 1, e: "A **virtual** function is resolved at runtime through a base class pointer." },
  { s: "cpp", q: "What does STL stand for?", o: ["Standard Template Library", "Simple Type Language", "Standard Type Library", "Static Template Logic"], a: 0, e: "The **Standard Template Library** gives ready-made containers and algorithms." },
  { s: "cpp", q: "Which STL container is a dynamic array?", o: ["vector", "stack", "queue", "pair"], a: 0, e: "A **vector** grows automatically as you add elements." },
  { s: "cpp", q: "The name of a destructor starts with which symbol?", o: ["@", "~", "#", "!"], a: 1, e: "A destructor is written as **~ClassName()**." }
];
