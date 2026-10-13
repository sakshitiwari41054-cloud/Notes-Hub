/*
  NOTES DATA FILE
  ----------------
  To add a new note or question, open admin.html, fill in the form, and paste
  the generated code at the TOP of the array below. Then save the file.

  Each subject currently has:
    - 1 "What is ...?" note (features, advantages, types, examples, keywords, tokens)
    - 5 questions

  Fields:
    id       : unique name (for example "java-what-is-java")
    subject  : "fundamentals" | "ds" | "dbms" | "graphics" | "oops" | "java" | "python" | "c" | "cpp"
    type     : "note" or "question"
    topic    : topic name (for example "Introduction", "Arrays")
    level    : "Easy" | "Medium" | "Hard"
    date     : "YYYY-MM-DD"
    title    : heading
    content  : the note text (type = "note")
    question : the question (type = "question")
    answer   : the answer (type = "question")
    file     : (optional) path to a PDF, for example "files/java/intro.pdf"

  Small formatting guide for content:
    ## Heading        -> heading
    **bold**          -> bold
    @@code@@          -> inline code
    - item            -> bullet list
    | a | b |         -> table
    ~~~ ... ~~~       -> code block
*/

window.NOTES = [

  /* ====================================================== */
  /*  COMPUTER FUNDAMENTALS                                 */
  /* ====================================================== */
  {
    id: "fundamentals-what-is-computer",
    subject: "fundamentals",
    type: "note",
    topic: "Introduction",
    level: "Easy",
    date: "2026-10-09",
    title: "What is a Computer?",
    content: `## Definition
A **computer** is an electronic device that accepts data (input), processes it using a set of instructions (a program), stores it, and produces results (output).

## Features
- **Speed**: performs millions of operations in one second.
- **Accuracy**: gives correct results as long as the input and the program are correct.
- **Diligence**: never gets tired or bored, so it can do the same work for hours.
- **Versatility**: can do many kinds of tasks, from typing to gaming to calculations.
- **Storage**: can store a huge amount of data and retrieve it quickly.
- **Automation**: once a program starts, it runs without human help.

## Advantages
- Saves time and effort.
- Handles very large amounts of data easily.
- Reduces human errors in calculations.
- Connects people through the internet.
- Stores information safely for a long time.

## Types of computers
| Based on | Type | Description |
|---|---|---|
| Size | Supercomputer | Fastest and most powerful, used for weather and scientific research |
| Size | Mainframe | Large systems used by banks and big organizations |
| Size | Minicomputer | Mid-sized, used by small companies |
| Size | Microcomputer | Personal computers: desktop, laptop, tablet |
| Working | Analog | Works on continuous data (for example a speedometer) |
| Working | Digital | Works on binary data (0 and 1) |
| Working | Hybrid | Combines analog and digital features |

## Examples
- Supercomputer: the PARAM series (India).
- Mainframe: IBM Z series.
- Microcomputer: your laptop or desktop.

## Keywords (basic terms)
- **Hardware**: the physical parts of a computer.
- **Software**: programs that run on the hardware.
- **Input device**: sends data in (keyboard, mouse).
- **Output device**: shows results (monitor, printer).
- **CPU**: the brain of the computer.
- **Bit and Byte**: a bit is a single 0 or 1, and 8 bits make 1 byte.`
  },
  {
    id: "fundamentals-q-ram-rom",
    subject: "fundamentals",
    type: "question",
    topic: "Memory",
    level: "Easy",
    date: "2026-10-08",
    title: "RAM vs ROM",
    question: `What is the difference between RAM and ROM?`,
    answer: `| Point | RAM | ROM |
|---|---|---|
| Full form | Random Access Memory | Read Only Memory |
| Volatile? | Yes, data is lost when power is off | No, data stays |
| Read / write | Both | Mostly read only |
| Purpose | Holds running programs and data | Holds startup instructions (firmware) |
| Speed | Faster | Slower |`
  },
  {
    id: "fundamentals-q-convert",
    subject: "fundamentals",
    type: "question",
    topic: "Number Systems",
    level: "Medium",
    date: "2026-10-07",
    title: "Convert (25) decimal to binary, octal and hexadecimal",
    question: `Convert the decimal number 25 into binary, octal and hexadecimal.`,
    answer: `- **Binary:** 25 = 16 + 8 + 1, so it is **11001**.
- **Octal:** group the bits in 3s from the right: 011 001, which gives 3 and 1, so it is **31**.
- **Hexadecimal:** group the bits in 4s from the right: 0001 1001, which gives 1 and 9, so it is **19**.

**Check:** (3 x 8) + 1 = 25 and (1 x 16) + 9 = 25.`
  },
  {
    id: "fundamentals-q-hardware-software",
    subject: "fundamentals",
    type: "question",
    topic: "Basics",
    level: "Easy",
    date: "2026-10-06",
    title: "Hardware vs software",
    question: `What is the difference between hardware and software? Give examples.`,
    answer: `| Point | Hardware | Software |
|---|---|---|
| Meaning | Physical parts you can touch | Programs and instructions you cannot touch |
| Examples | Keyboard, monitor, CPU, hard disk | Windows, MS Word, Chrome |
| Wears out? | Yes, it can get damaged | No, but it can get corrupted or outdated |
| Works | Needs software to do useful work | Needs hardware to run |

**Types of software:**
- **System software**: runs the computer itself (operating system, drivers).
- **Application software**: does a user task (word processor, games, browser).`
  },
  {
    id: "fundamentals-q-generations",
    subject: "fundamentals",
    type: "question",
    topic: "History",
    level: "Medium",
    date: "2026-10-05",
    title: "Generations of computers",
    question: `Describe the five generations of computers.`,
    answer: `| Generation | Period | Main technology |
|---|---|---|
| First | 1940 to 1956 | Vacuum tubes |
| Second | 1956 to 1963 | Transistors |
| Third | 1964 to 1971 | Integrated circuits (IC) |
| Fourth | 1971 to present | Microprocessors |
| Fifth | Present and beyond | Artificial intelligence and ULSI |

**Trend:** with every generation, computers became smaller, faster, cheaper and more reliable.`
  },
  {
    id: "fundamentals-q-primary-secondary",
    subject: "fundamentals",
    type: "question",
    topic: "Memory",
    level: "Easy",
    date: "2026-10-04",
    title: "Primary vs secondary memory",
    question: `What is the difference between primary memory and secondary memory?`,
    answer: `| Point | Primary memory | Secondary memory |
|---|---|---|
| Examples | RAM, ROM, cache | Hard disk, SSD, pen drive |
| Speed | Very fast | Slower |
| Capacity | Smaller | Much larger |
| Access | Directly by the CPU | Through primary memory |
| Data | RAM loses data without power | Keeps data permanently |
| Cost per GB | Higher | Lower |`
  },

  /* ====================================================== */
  /*  DATA STRUCTURES                                       */
  /* ====================================================== */
  {
    id: "ds-what-is-data-structure",
    subject: "ds",
    type: "note",
    topic: "Introduction",
    level: "Easy",
    date: "2026-10-09",
    title: "What is a Data Structure?",
    content: `## Definition
A **data structure** is a way of organizing and storing data in memory so that it can be used efficiently. The right choice makes a program faster and simpler.

## Features
- Organizes data in a meaningful way.
- Supports basic operations: insert, delete, search, traverse and sort.
- Controls how fast data can be accessed.
- Can be reused in many programs.

## Advantages
- Faster searching and sorting.
- Efficient use of memory.
- Makes it easier to handle large amounts of data.
- Reusable and easy to maintain.

## Types of data structures
| Category | Type | Examples |
|---|---|---|
| Linear | Elements are arranged one after another | Array, Linked List, Stack, Queue |
| Non-linear | Elements are arranged in a hierarchy or network | Tree, Graph |

Data structures are also grouped as **primitive** (int, char, float) and **non-primitive** (array, list, tree, and so on).

## Examples in real life
- **Array**: marks of students in a class.
- **Stack**: the undo feature in an editor.
- **Queue**: a line of print jobs.
- **Tree**: folders inside folders on your computer.
- **Graph**: a map of cities connected by roads.

## Keywords (common terms)
- **Node**: one element of a list or tree.
- **Pointer**: stores the address of another element.
- **Push and Pop**: add to and remove from a stack.
- **Enqueue and Dequeue**: add to and remove from a queue.
- **Root and Leaf**: the top node and a node with no children in a tree.
- **Vertex and Edge**: a point and a line joining two points in a graph.
- **Traversal**: visiting every element once.`
  },
  {
    id: "ds-q-array-linkedlist",
    subject: "ds",
    type: "question",
    topic: "Linked List",
    level: "Easy",
    date: "2026-10-08",
    title: "Array vs linked list",
    question: `What is the difference between an array and a linked list?`,
    answer: `| Point | Array | Linked list |
|---|---|---|
| Memory | Continuous block | Nodes scattered in memory |
| Size | Fixed | Grows and shrinks easily |
| Access by index | O(1) | O(n) |
| Insert / delete in the middle | O(n), elements must shift | O(1) once the position is found |
| Extra memory | None | Each node stores a pointer |

**In short:** use an array for fast access, and a linked list when you insert and delete often.`
  },
  {
    id: "ds-q-stack-queue",
    subject: "ds",
    type: "question",
    topic: "Stack and Queue",
    level: "Easy",
    date: "2026-10-07",
    title: "Stack vs queue",
    question: `What is the difference between a stack and a queue? Show a short example.`,
    answer: `| Point | Stack | Queue |
|---|---|---|
| Principle | LIFO (Last In, First Out) | FIFO (First In, First Out) |
| Insert at | Top | Rear (back) |
| Remove from | Top | Front |
| Operations | push, pop, top | enqueue, dequeue, front |
| Uses | Undo, function calls, bracket matching | Printer jobs, CPU scheduling, BFS |

**Example (C++ STL):**
~~~cpp
#include <iostream>
#include <stack>
#include <queue>
using namespace std;

int main() {
    stack<int> s;
    s.push(10);
    s.push(20);
    cout << s.top() << endl;     // 20
    s.pop();

    queue<int> q;
    q.push(10);
    q.push(20);
    cout << q.front() << endl;   // 10
    q.pop();
    return 0;
}
~~~`
  },
  {
    id: "ds-q-linear-nonlinear",
    subject: "ds",
    type: "question",
    topic: "Basics",
    level: "Easy",
    date: "2026-10-06",
    title: "Linear vs non-linear data structures",
    question: `What is the difference between linear and non-linear data structures?`,
    answer: `| Point | Linear | Non-linear |
|---|---|---|
| Arrangement | Elements in a sequence, one after another | Elements in a hierarchy or network |
| Levels | Single level | Multiple levels |
| Traversal | One pass is enough | Needs special methods (DFS, BFS) |
| Memory use | Simple to use | More complex |
| Examples | Array, linked list, stack, queue | Tree, graph |`
  },
  {
    id: "ds-q-big-o",
    subject: "ds",
    type: "question",
    topic: "Complexity",
    level: "Medium",
    date: "2026-10-05",
    title: "What is time complexity (Big O)?",
    question: `What is time complexity? Explain Big O notation with common examples.`,
    answer: `**Time complexity** tells us how the running time of an algorithm grows as the input size **n** grows. **Big O** notation describes the worst case.

| Notation | Name | Example |
|---|---|---|
| O(1) | Constant | Access an array element by index |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search |
| O(n log n) | Linearithmic | Merge sort |
| O(n^2) | Quadratic | Bubble sort |

**Tip:** drop constants and smaller terms. O(2n + 5) is simply O(n).`
  },
  {
    id: "ds-q-binary-search",
    subject: "ds",
    type: "question",
    topic: "Searching",
    level: "Medium",
    date: "2026-10-04",
    title: "What is binary search?",
    question: `What is binary search? Write the code and state its time complexity.`,
    answer: `**Binary search** finds an element in a **sorted** array. It compares the key with the middle element and discards half of the array each time.

~~~cpp
int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key)      return mid;
        else if (arr[mid] < key)  low = mid + 1;
        else                      high = mid - 1;
    }
    return -1;   // not found
}
~~~

- **Time complexity:** O(log n)
- **Space complexity:** O(1)
- **Condition:** the array must already be sorted.`
  },

  /* ====================================================== */
  /*  DBMS                                                  */
  /* ====================================================== */
  {
    id: "dbms-what-is-dbms",
    subject: "dbms",
    type: "note",
    topic: "Introduction",
    level: "Easy",
    date: "2026-10-09",
    title: "What is a DBMS?",
    content: `## Definition
A **Database Management System (DBMS)** is software that lets you create, store, manage and retrieve data in an organized way. A **database** is the collection of data, and the DBMS is the tool that manages it.

## Features
- **Data storage** in an organized form (tables).
- **Data security**: only authorized users can access data.
- **Data integrity**: rules keep the data correct.
- **Multi-user access**: many users can work at the same time.
- **Backup and recovery** after a failure.
- **Query language** (SQL) to ask questions about the data.

## Advantages
- Reduces data duplication (redundancy).
- Keeps data consistent and accurate.
- Easy and fast searching of data.
- Better security than plain files.
- Data can be shared safely between users.

## Types of DBMS
| Type | Description | Example |
|---|---|---|
| Hierarchical | Data in a tree (parent and child) | IBM IMS |
| Network | Data in a graph with many links | IDS |
| Relational (RDBMS) | Data in tables with rows and columns | MySQL, Oracle, PostgreSQL |
| Object-oriented | Data stored as objects | db4o |
| NoSQL | Flexible, non-table data | MongoDB |

## Examples of use
- A bank storing accounts and transactions.
- A college storing student records.
- An online shop storing products and orders.

## Keywords (common terms)
- **Table (relation)**: data arranged in rows and columns.
- **Row (tuple)**: one record.
- **Column (attribute)**: one field of a record.
- **Primary key**: uniquely identifies a row.
- **Foreign key**: links one table to another.
- **Schema**: the structure of the database.
- **Query**: a request for data.
- **SQL keywords**: @@SELECT@@, @@FROM@@, @@WHERE@@, @@INSERT@@, @@UPDATE@@, @@DELETE@@, @@CREATE@@.`
  },
  {
    id: "dbms-q-keys",
    subject: "dbms",
    type: "question",
    topic: "Keys",
    level: "Easy",
    date: "2026-10-08",
    title: "Primary key vs foreign key",
    question: `What is the difference between a primary key and a foreign key?`,
    answer: `- **Primary key**: uniquely identifies each row in a table. It cannot be NULL and cannot repeat. A table has only one primary key.
- **Foreign key**: a column that refers to the primary key of another table. It links the two tables together. It can repeat and can be NULL.

**Example:** in an @@orders@@ table, @@customer_id@@ is a foreign key that points to the @@customers@@ table.`
  },
  {
    id: "dbms-q-acid",
    subject: "dbms",
    type: "question",
    topic: "Transactions",
    level: "Medium",
    date: "2026-10-07",
    title: "What are the ACID properties?",
    question: `Explain the ACID properties of a transaction.`,
    answer: `- **Atomicity**: a transaction happens completely or not at all.
- **Consistency**: a transaction moves the database from one valid state to another.
- **Isolation**: transactions running together do not interfere with each other.
- **Durability**: once a transaction is committed, its changes are permanent, even after a crash.

**Example:** when you transfer money, both the debit and the credit must happen together (atomicity).`
  },
  {
    id: "dbms-q-dbms-vs-filesystem",
    subject: "dbms",
    type: "question",
    topic: "Basics",
    level: "Easy",
    date: "2026-10-06",
    title: "DBMS vs file system",
    question: `What is the difference between a DBMS and a file system?`,
    answer: `| Point | File system | DBMS |
|---|---|---|
| Data duplication | High | Low |
| Consistency | Hard to maintain | Maintained by rules |
| Security | Basic | Strong, with user roles |
| Searching | Slow, done by hand or code | Fast, using queries |
| Multi-user access | Difficult | Supported |
| Backup and recovery | Manual | Built in |`
  },
  {
    id: "dbms-q-normalization",
    subject: "dbms",
    type: "question",
    topic: "Normalization",
    level: "Hard",
    date: "2026-10-05",
    title: "What is normalization? (1NF, 2NF, 3NF)",
    question: `What is normalization? Explain 1NF, 2NF and 3NF.`,
    answer: `**Normalization** is the process of organizing tables to remove duplicate data and avoid insert, update and delete problems.

- **1NF**: every cell holds a single value (no lists inside a cell) and every row is unique.
- **2NF**: the table is in 1NF and no column depends on only a **part** of a composite key.
- **3NF**: the table is in 2NF and no non-key column depends on another non-key column (no transitive dependency).

**Example:** a table with @@student_id, student_name, course_id, course_name@@ repeats the course name for every student. Split it into **Student**, **Course** and **Enrollment** so that each fact is stored once.`
  },
  {
    id: "dbms-q-delete-truncate-drop",
    subject: "dbms",
    type: "question",
    topic: "SQL",
    level: "Medium",
    date: "2026-10-04",
    title: "DELETE vs TRUNCATE vs DROP",
    question: `What is the difference between DELETE, TRUNCATE and DROP in SQL?`,
    answer: `| Point | DELETE | TRUNCATE | DROP |
|---|---|---|---|
| What it removes | Selected rows (or all) | All rows | The whole table (structure and data) |
| WHERE clause | Allowed | Not allowed | Not applicable |
| Table structure | Stays | Stays | Removed |
| Speed | Slower | Faster | Fast |
| Rollback | Can be rolled back in a transaction | Usually cannot (depends on the database) | Usually cannot |

~~~sql
DELETE FROM students WHERE id = 1;
TRUNCATE TABLE students;
DROP TABLE students;
~~~`
  },

  /* ====================================================== */
  /*  COMPUTER GRAPHICS                                     */
  /* ====================================================== */
  {
    id: "graphics-what-is-computer-graphics",
    subject: "graphics",
    type: "note",
    topic: "Introduction",
    level: "Easy",
    date: "2026-10-09",
    title: "What is Computer Graphics?",
    content: `## Definition
**Computer graphics** is the creation, storage and manipulation of pictures and drawings using a computer.

## Features
- Creates both **2D** and **3D** images.
- Supports **animation** and movement.
- Allows **interaction**: the user can change the picture and see the result at once.
- Can show **realistic** images using light, color and shadow.

## Advantages
- Makes data easier to understand using charts and pictures.
- Pictures can be edited again and again without redrawing.
- Saves time and cost in design work.
- Allows simulation of things that are costly or dangerous in real life.
- Makes software easier to use with a graphical interface.

## Types of computer graphics
| Based on | Type | Meaning |
|---|---|---|
| Interaction | Interactive | The user can control the picture (games, design tools) |
| Interaction | Non-interactive (passive) | The user cannot change it (a slide show) |
| Image form | Raster | Made of pixels |
| Image form | Vector | Made of lines and curves |
| Dimension | 2D | Flat pictures |
| Dimension | 3D | Pictures with depth |

## Examples (applications)
- Video games and movies.
- CAD, used to design buildings, cars and machines.
- Graphical user interfaces (Windows, Android).
- Medical imaging (CT scans).
- Simulators, such as flight training.
- Charts and graphs in presentations.

## Keywords (common terms)
- **Pixel**: the smallest dot of an image.
- **Resolution**: the number of pixels, for example 1920 x 1080.
- **Frame buffer**: memory that holds the picture to be displayed.
- **Rendering**: creating a final image from a model.
- **Clipping**: removing the part of a picture outside a window.
- **Transformation**: moving, resizing or rotating an object.
- **Viewport**: the area of the screen where the picture is shown.`
  },
  {
    id: "graphics-q-raster-vector",
    subject: "graphics",
    type: "question",
    topic: "Basics",
    level: "Easy",
    date: "2026-10-08",
    title: "Raster vs vector graphics",
    question: `What is the difference between raster and vector graphics?`,
    answer: `| Point | Raster graphics | Vector graphics |
|---|---|---|
| Made of | Pixels | Mathematical shapes (lines, curves) |
| Zooming | Becomes blurry | Stays sharp |
| File size | Larger for big images | Usually smaller |
| Best for | Photos | Logos and icons |
| Examples | JPG, PNG | SVG, AI |`
  },
  {
    id: "graphics-q-dda",
    subject: "graphics",
    type: "question",
    topic: "Line Drawing",
    level: "Medium",
    date: "2026-10-07",
    title: "DDA line drawing algorithm",
    question: `Explain the DDA algorithm. Find the points of the line from (2, 3) to (8, 6).`,
    answer: `**DDA (Digital Differential Analyzer)** draws a line by calculating the pixels between two end points, one step at a time.

**Steps**
- Find @@dx = x2 - x1@@ and @@dy = y2 - y1@@.
- @@steps@@ = the larger of |dx| and |dy|.
- @@xinc = dx / steps@@ and @@yinc = dy / steps@@.
- Start at (x1, y1). Repeat @@steps@@ times: add the increments and plot the rounded point.

**Solution:** dx = 6, dy = 3, steps = 6, xinc = 1, yinc = 0.5

Points (rounded): (2, 3), (3, 4), (4, 4), (5, 5), (6, 5), (7, 6), (8, 6)

~~~c
#include <stdio.h>
#include <math.h>

int main() {
    float x1 = 2, y1 = 3, x2 = 8, y2 = 6;
    float dx = x2 - x1, dy = y2 - y1;
    int steps = fabs(dx) > fabs(dy) ? fabs(dx) : fabs(dy);
    float xinc = dx / steps, yinc = dy / steps;
    float x = x1, y = y1;

    for (int i = 0; i <= steps; i++) {
        printf("(%d, %d)\\n", (int)roundf(x), (int)roundf(y));
        x += xinc;
        y += yinc;
    }
    return 0;
}
~~~

Compile with @@-lm@@ on Linux to link the math library.`
  },
  {
    id: "graphics-q-dda-vs-bresenham",
    subject: "graphics",
    type: "question",
    topic: "Line Drawing",
    level: "Hard",
    date: "2026-10-06",
    title: "DDA vs Bresenham's algorithm",
    question: `What is the difference between the DDA algorithm and Bresenham's line algorithm?`,
    answer: `| Point | DDA | Bresenham |
|---|---|---|
| Arithmetic | Floating point | Integer only |
| Rounding | Rounds every point | No rounding needed |
| Speed | Slower | Faster |
| Accuracy | Rounding errors can build up | More accurate |
| Complexity | Simple to understand | Slightly harder |`
  },
  {
    id: "graphics-q-transformations",
    subject: "graphics",
    type: "question",
    topic: "Transformations",
    level: "Medium",
    date: "2026-10-05",
    title: "2D transformations",
    question: `Explain the basic 2D transformations with formulas.`,
    answer: `- **Translation**: moves an object. x' = x + tx and y' = y + ty.
- **Scaling**: changes the size. x' = x * sx and y' = y * sy.
- **Rotation** (about the origin by angle θ): x' = x cosθ - y sinθ and y' = x sinθ + y cosθ.
- **Reflection**: creates a mirror image of the object.
- **Shearing**: slants the shape.

**Examples**
- Translate (2, 3) by tx = 4 and ty = 1 gives **(6, 4)**.
- Scale (2, 3) by sx = 2 and sy = 2 gives **(4, 6)**.

**Tip:** a positive angle rotates counter-clockwise. With homogeneous coordinates (3 x 3 matrices), several transformations can be combined into one matrix.`
  },
  {
    id: "graphics-q-pixel-resolution",
    subject: "graphics",
    type: "question",
    topic: "Basics",
    level: "Easy",
    date: "2026-10-04",
    title: "What are pixel and resolution?",
    question: `What is a pixel? What is screen resolution?`,
    answer: `- A **pixel** (picture element) is the smallest dot of a picture that can be displayed on the screen.
- **Resolution** is the number of pixels on the screen, written as width x height. For example, **1920 x 1080** means 1920 pixels across and 1080 pixels down.

**Remember:** a higher resolution means more pixels, so the picture looks sharper and clearer.`
  },

  /* ====================================================== */
  /*  OOPs                                                  */
  /* ====================================================== */
  {
    id: "oops-what-is-oop",
    subject: "oops",
    type: "note",
    topic: "Introduction",
    level: "Easy",
    date: "2026-10-09",
    title: "What is OOP?",
    content: `## Definition
**Object Oriented Programming (OOP)** is a way of writing programs using **classes** and **objects**. It models a program like the real world, where each object has data (variables) and behavior (methods).

## Features
- **Class and object**: a blueprint and its real instance.
- **Encapsulation**: bind data and methods together and hide the data.
- **Inheritance**: a class reuses the features of another class.
- **Polymorphism**: one name, many forms.
- **Abstraction**: show only what is necessary.
- **Message passing**: objects communicate by calling each other's methods.

## Advantages
- Code is easier to **reuse** through inheritance.
- Programs are easier to **maintain** and **extend**.
- Data is **safer** because of encapsulation.
- Large programs are easier to organize into objects.
- Mirrors real-world thinking.

## Types
| Concept | Types |
|---|---|
| Inheritance | Single, Multilevel, Hierarchical, Multiple, Hybrid |
| Polymorphism | Compile-time (overloading) and Runtime (overriding) |
| Constructor | Default, Parameterized, Copy |

## Real-life example
| Concept | Meaning | Example |
|---|---|---|
| Class | Blueprint | The design of a car |
| Object | Instance of a class | Your own car |
| Encapsulation | Hide data, allow controlled access | You use the steering wheel, not the engine wires |
| Inheritance | Reuse features of a parent | A child gets traits from parents |
| Polymorphism | One action, many forms | "Speak": a dog barks, a cat meows |
| Abstraction | Show only what is needed | You press a button without knowing the circuit |

## Languages that support OOP
Java, C++, Python, C#, Kotlin and Swift.

## Keywords (common terms)
@@class@@, @@object@@, @@new@@, @@this@@, @@extends@@ (Java), @@super@@, @@abstract@@, @@interface@@, @@virtual@@ (C++), @@static@@ and @@public@@ / @@private@@ / @@protected@@.`
  },
  {
    id: "oops-q-abstraction-encapsulation",
    subject: "oops",
    type: "question",
    topic: "Concepts",
    level: "Medium",
    date: "2026-10-08",
    title: "Abstraction vs encapsulation",
    question: `What is the difference between abstraction and encapsulation?`,
    answer: `| Point | Abstraction | Encapsulation |
|---|---|---|
| Focus | **What** an object does | **How** the data is protected |
| Goal | Hide complexity | Hide and protect data |
| Achieved by | Abstract classes and interfaces | Private variables with getters and setters |
| Level | Design level | Implementation level |

**Example:** a TV remote hides how it works inside (abstraction), and its sealed case protects the circuit (encapsulation).`
  },
  {
    id: "oops-q-class-object",
    subject: "oops",
    type: "question",
    topic: "Basics",
    level: "Easy",
    date: "2026-10-07",
    title: "Class vs object",
    question: `What is the difference between a class and an object?`,
    answer: `- A **class** is a blueprint or template. It defines the data and the functions, but takes no memory for the data until an object is made.
- An **object** is a real instance of a class. It takes memory and holds actual values.

**Example:** @@Car@@ is a class. A red Honda and a blue Toyota are two objects of that class.`
  },
  {
    id: "oops-q-inheritance-types",
    subject: "oops",
    type: "question",
    topic: "Inheritance",
    level: "Medium",
    date: "2026-10-06",
    title: "What is inheritance? Explain its types",
    question: `What is inheritance? Explain the types of inheritance.`,
    answer: `**Inheritance** lets a class (child) acquire the properties and methods of another class (parent). It gives **code reuse**.

| Type | Meaning | Example |
|---|---|---|
| Single | One child, one parent | B inherits A |
| Multilevel | A chain of classes | C inherits B, B inherits A |
| Hierarchical | Many children, one parent | B and C both inherit A |
| Multiple | One child, many parents | C inherits A and B |
| Hybrid | A mix of the above | A combination of two or more types |

**Note:** Java does not allow multiple inheritance with classes (it uses interfaces instead). C++ allows it.`
  },
  {
    id: "oops-q-polymorphism-types",
    subject: "oops",
    type: "question",
    topic: "Polymorphism",
    level: "Medium",
    date: "2026-10-05",
    title: "Compile-time vs runtime polymorphism",
    question: `What is polymorphism? What is the difference between compile-time and runtime polymorphism?`,
    answer: `**Polymorphism** means "many forms": the same name or action behaves differently in different situations.

| Point | Compile-time | Runtime |
|---|---|---|
| Also called | Static binding, early binding | Dynamic binding, late binding |
| Achieved by | Method overloading, operator overloading | Method overriding |
| Decided | When the program is compiled | When the program runs |
| Speed | Faster | Slightly slower |

**Example:** a method @@add(int, int)@@ and @@add(double, double)@@ in the same class is overloading. A child class changing the parent's @@sound()@@ method is overriding.`
  },
  {
    id: "oops-q-constructor",
    subject: "oops",
    type: "question",
    topic: "Constructor",
    level: "Easy",
    date: "2026-10-04",
    title: "What is a constructor?",
    question: `What is a constructor? What are its types?`,
    answer: `A **constructor** is a special method that runs automatically when an object is created. It is used to initialize the object. It has the **same name as the class** and has **no return type**.

**Types**
- **Default constructor**: takes no parameters.
- **Parameterized constructor**: takes parameters to set initial values.
- **Copy constructor**: creates an object from another object (built in for C++; in Java you write it yourself).

~~~java
class Student {
    String name;
    int marks;

    Student(String n, int m) {   // parameterized constructor
        name = n;
        marks = m;
    }
}
~~~`
  },

  /* ====================================================== */
  /*  JAVA                                                  */
  /* ====================================================== */
  {
    id: "java-what-is-java",
    subject: "java",
    type: "note",
    topic: "Introduction",
    level: "Easy",
    date: "2026-10-09",
    title: "What is Java?",
    content: `## Definition
**Java** is a high-level, object-oriented programming language. It was developed by James Gosling at Sun Microsystems and released in 1995. Java programs are compiled into **bytecode** that runs on the **Java Virtual Machine (JVM)**.

## Features
- **Simple**: easy to learn, with no pointers or operator overloading.
- **Object-oriented**: everything is inside classes and objects.
- **Platform independent**: "write once, run anywhere", because bytecode runs on any JVM.
- **Secure**: no direct memory access, and code runs inside the JVM.
- **Robust**: strong exception handling and automatic garbage collection.
- **Multithreaded**: can do many tasks at the same time.
- **Portable** and **high performance** (using the JIT compiler).

## Advantages
- Runs on Windows, Linux and macOS without changes.
- Huge community, libraries and frameworks.
- Used for Android apps, web servers and enterprise software.
- Automatic memory management reduces memory errors.
- Many job opportunities.

## Types (editions) of Java
| Edition | Used for |
|---|---|
| Java SE (Standard Edition) | Core Java and desktop programs |
| Java EE / Jakarta EE (Enterprise Edition) | Large web and enterprise applications |
| Java ME (Micro Edition) | Small and embedded devices |

Java also has 8 **primitive data types**: @@byte@@, @@short@@, @@int@@, @@long@@, @@float@@, @@double@@, @@char@@ and @@boolean@@.

## Example
~~~java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
~~~

## Keywords
Keywords are reserved words with a fixed meaning. They cannot be used as names. Java has around 50 of them. Common ones:

@@class@@, @@public@@, @@private@@, @@protected@@, @@static@@, @@void@@, @@int@@, @@if@@, @@else@@, @@for@@, @@while@@, @@switch@@, @@break@@, @@return@@, @@new@@, @@this@@, @@super@@, @@extends@@, @@implements@@, @@interface@@, @@abstract@@, @@final@@, @@try@@, @@catch@@, @@throw@@, @@import@@, @@package@@.

## Tokens
A **token** is the smallest unit of a program. Java has five kinds:

| Token | Meaning | Examples |
|---|---|---|
| Keyword | Reserved word | @@int@@, @@class@@, @@if@@ |
| Identifier | Name given by the programmer | @@age@@, @@Student@@, @@main@@ |
| Literal | A fixed value | @@20@@, @@3.14@@, @@'A'@@, @@"Hello"@@, @@true@@ |
| Operator | Performs an operation | @@+@@, @@-@@, @@=@@, @@==@@, @@&&@@ |
| Separator | Divides code | @@;@@, @@,@@, @@( )@@, @@{ }@@, @@[ ]@@ |

**Example:** in @@int age = 20;@@ the tokens are @@int@@ (keyword), @@age@@ (identifier), @@=@@ (operator), @@20@@ (literal) and @@;@@ (separator).`
  },
  {
    id: "java-q-jdk-jre-jvm",
    subject: "java",
    type: "question",
    topic: "Basics",
    level: "Easy",
    date: "2026-10-08",
    title: "JDK vs JRE vs JVM",
    question: `What is the difference between JDK, JRE and JVM?`,
    answer: `| Term | Full form | Purpose |
|---|---|---|
| JVM | Java Virtual Machine | Runs the bytecode. It makes Java platform independent. |
| JRE | Java Runtime Environment | JVM plus the libraries needed to **run** programs. |
| JDK | Java Development Kit | JRE plus tools (such as the compiler) to **develop** programs. |

**Remember:** JDK contains JRE, and JRE contains JVM.`
  },
  {
    id: "java-q-equals",
    subject: "java",
    type: "question",
    topic: "Strings",
    level: "Easy",
    date: "2026-10-07",
    title: "What is the difference between == and equals()?",
    question: `What is the difference between the @@==@@ operator and the @@equals()@@ method in Java? Predict the output:
~~~java
String a = new String("java");
String b = new String("java");
System.out.println(a == b);
System.out.println(a.equals(b));
~~~`,
    answer: `**Output:**
~~~
false
true
~~~

**Reason:**
- @@==@@ compares references (memory addresses).
- @@equals()@@ compares the actual content (characters) of the strings.
- @@new String(...)@@ creates a new object every time, so @@a == b@@ is false.`
  },
  {
    id: "java-q-exceptions",
    subject: "java",
    type: "question",
    topic: "Exceptions",
    level: "Medium",
    date: "2026-10-06",
    title: "Checked vs unchecked exceptions",
    question: `What is the difference between checked and unchecked exceptions? Give one example of each.`,
    answer: `- **Checked exception**: verified at compile time. You must handle it with @@try-catch@@ or declare it with @@throws@@. Examples: @@IOException@@, @@SQLException@@.
- **Unchecked exception**: occurs at runtime and the compiler does not force you to handle it. These are subclasses of @@RuntimeException@@. Examples: @@NullPointerException@@, @@ArrayIndexOutOfBoundsException@@.`
  },
  {
    id: "java-q-string-builder-buffer",
    subject: "java",
    type: "question",
    topic: "Strings",
    level: "Medium",
    date: "2026-10-05",
    title: "String vs StringBuilder vs StringBuffer",
    question: `What is the difference between String, StringBuilder and StringBuffer?`,
    answer: `| Class | Mutable? | Thread-safe? | Speed |
|---|---|---|---|
| String | No (immutable) | Yes | Slow for many changes |
| StringBuilder | Yes | No | Fastest |
| StringBuffer | Yes | Yes | Slower than StringBuilder |

~~~java
String s = "Hello";
s.concat(" World");
System.out.println(s);        // Hello (s did not change)

StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb);       // Hello World
~~~

**Use:** String for fixed text, StringBuilder for many joins in a loop, StringBuffer in multi-threaded code.`
  },
  {
    id: "java-q-overloading-overriding",
    subject: "java",
    type: "question",
    topic: "Polymorphism",
    level: "Medium",
    date: "2026-10-04",
    title: "Method overloading vs overriding",
    question: `What is the difference between method overloading and method overriding in Java?`,
    answer: `| Point | Overloading | Overriding |
|---|---|---|
| Where | Same class | Parent and child class |
| Parameters | Must be different | Must be the same |
| Resolved | Compile time | Runtime |
| Return type | Can differ | Same (or a subtype) |
| Purpose | Same name for similar tasks | Child gives its own version |

~~~java
class Animal {
    void sound() { System.out.println("Animal sound"); }
}
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }   // overriding
}
class Calc {
    int add(int a, int b)       { return a + b; }
    double add(double a, double b) { return a + b; }   // overloading
}
~~~`
  },

  /* ====================================================== */
  /*  PYTHON                                                */
  /* ====================================================== */
  {
    id: "python-what-is-python",
    subject: "python",
    type: "note",
    topic: "Introduction",
    level: "Easy",
    date: "2026-10-09",
    title: "What is Python?",
    content: `## Definition
**Python** is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and released in 1991. It is known for its simple, readable syntax.

## Features
- **Simple and readable**: the code looks almost like English.
- **Interpreted**: runs line by line, with no separate compile step.
- **Dynamically typed**: you do not declare variable types.
- **Object-oriented** and also supports functional programming.
- **Large standard library** and many third-party packages.
- **Open source** and free.
- **Portable**: runs on Windows, Linux and macOS.

## Advantages
- Very easy for beginners to learn.
- Fewer lines of code than most languages.
- Used in AI, machine learning, data science, web development and automation.
- Huge community and plenty of libraries (NumPy, Pandas, Django, Flask).
- Great for quick prototypes.

## Types (built-in data types)
| Type | Examples |
|---|---|
| Numeric | @@int@@, @@float@@, @@complex@@ |
| Text | @@str@@ |
| Sequence | @@list@@, @@tuple@@, @@range@@ |
| Mapping | @@dict@@ |
| Set | @@set@@ |
| Boolean | @@bool@@ |

## Example
~~~python
name = "Riya"
print("Hello,", name)

for i in range(3):
    print(i)
~~~

## Keywords
Keywords are reserved words with a special meaning. Python 3 has about 35 of them. Common ones:

@@if@@, @@elif@@, @@else@@, @@for@@, @@while@@, @@break@@, @@continue@@, @@def@@, @@return@@, @@class@@, @@import@@, @@from@@, @@try@@, @@except@@, @@finally@@, @@with@@, @@lambda@@, @@pass@@, @@True@@, @@False@@, @@None@@, @@and@@, @@or@@, @@not@@.

To see all of them:
~~~python
import keyword
print(keyword.kwlist)
~~~

## Tokens
A **token** is the smallest meaningful unit of a program. Python has these kinds:

| Token | Meaning | Examples |
|---|---|---|
| Keyword | Reserved word | @@if@@, @@def@@, @@return@@ |
| Identifier | Name of a variable or function | @@total@@, @@price@@ |
| Literal | A fixed value | @@10@@, @@2.5@@, @@"hello"@@, @@True@@ |
| Operator | Performs an operation | @@+@@, @@*@@, @@=@@, @@==@@ |
| Delimiter | Punctuation | @@( )@@, @@[ ]@@, @@{ }@@, @@,@@, @@:@@ |

**Example:** in @@total = price * 2@@ the tokens are @@total@@, @@=@@, @@price@@, @@*@@ and @@2@@. Python also uses indentation as part of its structure.`
  },
  {
    id: "python-q-list-tuple",
    subject: "python",
    type: "question",
    topic: "Data Structures",
    level: "Easy",
    date: "2026-10-08",
    title: "List vs tuple vs set vs dictionary",
    question: `What is the difference between a list, a tuple, a set and a dictionary in Python?`,
    answer: `| Type | Syntax | Ordered? | Changeable? | Duplicates? |
|---|---|---|---|---|
| List | @@[1, 2, 3]@@ | Yes | Yes | Yes |
| Tuple | @@(1, 2, 3)@@ | Yes | No | Yes |
| Set | @@{1, 2, 3}@@ | No | Yes | No |
| Dictionary | @@{"a": 1}@@ | Yes (3.7+) | Yes | Keys must be unique |

~~~python
nums = [1, 2, 3]
nums.append(4)          # [1, 2, 3, 4]

point = (10, 20)
x, y = point            # unpacking

unique = set([1, 2, 2, 3])   # {1, 2, 3}

student = {"name": "Riya", "marks": 91}
print(student["name"])  # Riya
~~~`
  },
  {
    id: "python-q-args-kwargs",
    subject: "python",
    type: "question",
    topic: "Functions",
    level: "Medium",
    date: "2026-10-07",
    title: "What are *args and **kwargs?",
    question: `What are @@*args@@ and @@**kwargs@@ in Python? Show an example.`,
    answer: `- @@*args@@ lets a function take any number of **positional** arguments. They are collected into a **tuple**.
- @@**kwargs@@ lets a function take any number of **keyword** arguments. They are collected into a **dictionary**.

~~~python
def total(*args):
    return sum(args)

def show(**kwargs):
    for k, v in kwargs.items():
        print(k, v)

print(total(1, 2, 3))      # 6
show(name="Riya", age=20)  # name Riya, age 20
~~~

**Warning:** never use a mutable value such as @@[]@@ as a default argument. It is shared between calls.`
  },
  {
    id: "python-q-reverse",
    subject: "python",
    type: "question",
    topic: "Strings",
    level: "Easy",
    date: "2026-10-06",
    title: "How do you reverse a string?",
    question: `Write 2 ways to reverse a string in Python.`,
    answer: `**Method 1: slicing**
~~~python
s = "python"
print(s[::-1])   # nohtyp
~~~

**Method 2: reversed() and join()**
~~~python
s = "python"
print("".join(reversed(s)))   # nohtyp
~~~`
  },
  {
    id: "python-q-palindrome",
    subject: "python",
    type: "question",
    topic: "Programs",
    level: "Easy",
    date: "2026-10-05",
    title: "Program to check a palindrome",
    question: `Write a program that checks whether a given number or string is a palindrome.`,
    answer: `~~~python
text = input("Enter value: ")

if text == text[::-1]:
    print("It is a palindrome")
else:
    print("It is not a palindrome")
~~~

**Explanation:** a palindrome reads the same forwards and backwards, for example @@madam@@ or @@121@@.`
  },
  {
    id: "python-q-lambda",
    subject: "python",
    type: "question",
    topic: "Functions",
    level: "Medium",
    date: "2026-10-04",
    title: "What is a lambda function?",
    question: `What is a lambda function in Python? Give examples.`,
    answer: `A **lambda** is a small, anonymous (nameless) function written in one line. It can take any number of arguments but has only **one expression**, whose value is returned.

**Syntax:** @@lambda arguments: expression@@

~~~python
square = lambda x: x * x
print(square(5))                 # 25

add = lambda a, b: a + b
print(add(2, 3))                 # 5

nums = [1, 2, 3, 4]
print(list(map(lambda x: x * 2, nums)))   # [2, 4, 6, 8]
~~~

**Use:** short functions passed to @@map()@@, @@filter()@@ and @@sorted()@@.`
  },

  /* ====================================================== */
  /*  C                                                     */
  /* ====================================================== */
  {
    id: "c-what-is-c",
    subject: "c",
    type: "note",
    topic: "Introduction",
    level: "Easy",
    date: "2026-10-09",
    title: "What is C?",
    content: `## Definition
**C** is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in 1972. It is called the "mother of modern languages" because many languages (C++, Java, C#) borrow from it.

## Features
- **Procedural** and **structured**: programs are divided into functions.
- **Fast**: compiled directly to machine code.
- **Portable**: the same code can be compiled on different machines.
- **Middle-level**: combines high-level features with low-level hardware access.
- **Pointers**: direct access to memory addresses.
- **Rich library** of built-in functions.
- Supports **recursion** and **dynamic memory allocation**.

## Advantages
- Very fast and efficient.
- Close to hardware, so good for system programming.
- Used to build operating systems (UNIX, Linux kernel), compilers and embedded systems.
- Makes it easy to learn other languages afterwards.
- Small and simple set of keywords.

## Types (data types)
| Category | Types |
|---|---|
| Basic | @@int@@, @@char@@, @@float@@, @@double@@ |
| Derived | array, pointer, function |
| User-defined | @@struct@@, @@union@@, @@enum@@, @@typedef@@ |
| Empty | @@void@@ |

## Example
~~~c
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
~~~

## Keywords
C has **32 keywords**. They have a fixed meaning and cannot be used as names:

@@auto@@, @@break@@, @@case@@, @@char@@, @@const@@, @@continue@@, @@default@@, @@do@@, @@double@@, @@else@@, @@enum@@, @@extern@@, @@float@@, @@for@@, @@goto@@, @@if@@, @@int@@, @@long@@, @@register@@, @@return@@, @@short@@, @@signed@@, @@sizeof@@, @@static@@, @@struct@@, @@switch@@, @@typedef@@, @@union@@, @@unsigned@@, @@void@@, @@volatile@@, @@while@@.

## Tokens
A **token** is the smallest individual unit of a C program. C has six kinds:

| Token | Meaning | Examples |
|---|---|---|
| Keyword | Reserved word | @@int@@, @@if@@, @@while@@ |
| Identifier | Name of a variable or function | @@age@@, @@sum@@, @@main@@ |
| Constant | A fixed value | @@10@@, @@3.14@@, @@'A'@@ |
| String literal | Text in double quotes | @@"Hello"@@ |
| Operator | Performs an operation | @@+@@, @@-@@, @@=@@, @@==@@ |
| Special symbol | Punctuation | @@;@@, @@,@@, @@( )@@, @@{ }@@, @@[ ]@@ |

**Example:** in @@int a = 10;@@ the tokens are @@int@@ (keyword), @@a@@ (identifier), @@=@@ (operator), @@10@@ (constant) and @@;@@ (special symbol).`
  },
  {
    id: "c-q-swap",
    subject: "c",
    type: "question",
    topic: "Pointers",
    level: "Medium",
    date: "2026-10-08",
    title: "Swap two numbers using pointers",
    question: `Write a program that swaps two numbers using a function (call by reference).`,
    answer: `~~~c
#include <stdio.h>

void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

int main() {
    int a = 5, b = 9;
    swap(&a, &b);
    printf("a = %d, b = %d\\n", a, b);   // a = 9, b = 5
    return 0;
}
~~~

**Reason:** we pass the addresses, so the function can change the original variables.`
  },
  {
    id: "c-q-factorial",
    subject: "c",
    type: "question",
    topic: "Loops",
    level: "Easy",
    date: "2026-10-07",
    title: "Program to find a factorial",
    question: `Write a C program to find the factorial of a number.`,
    answer: `~~~c
#include <stdio.h>

int main() {
    int n;
    unsigned long long fact = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        fact *= i;
    }

    printf("Factorial of %d = %llu\\n", n, fact);
    return 0;
}
~~~

**Note:** even @@unsigned long long@@ overflows for larger inputs (anything above 20).`
  },
  {
    id: "c-q-struct-union",
    subject: "c",
    type: "question",
    topic: "Structures",
    level: "Medium",
    date: "2026-10-06",
    title: "Structure vs union",
    question: `What is the difference between a structure and a union in C?`,
    answer: `| Point | Structure | Union |
|---|---|---|
| Keyword | @@struct@@ | @@union@@ |
| Memory | Each member has its own memory | All members share the same memory |
| Size | Sum of all members (plus padding) | Size of the largest member |
| Values | All members can hold values together | Only one member holds a value at a time |

~~~c
struct S { int a; char c; };   // usually 8 bytes
union  U { int a; char c; };   // usually 4 bytes
~~~

The exact sizes depend on the compiler and the machine.`
  },
  {
    id: "c-q-malloc-calloc",
    subject: "c",
    type: "question",
    topic: "Memory",
    level: "Medium",
    date: "2026-10-05",
    title: "malloc() vs calloc()",
    question: `What is the difference between malloc() and calloc() in C?`,
    answer: `| Point | malloc() | calloc() |
|---|---|---|
| Syntax | @@malloc(size)@@ | @@calloc(n, size)@@ |
| Arguments | One (total bytes) | Two (number of blocks, size of each) |
| Initial value | Garbage (not initialized) | All bytes set to zero |
| Speed | Slightly faster | Slightly slower |

~~~c
int *a = (int*) malloc(5 * sizeof(int));   // garbage values
int *b = (int*) calloc(5, sizeof(int));    // all zeros
free(a);
free(b);
~~~

Both return a @@void*@@ and the memory must be released using @@free()@@.`
  },
  {
    id: "c-q-while-dowhile",
    subject: "c",
    type: "question",
    topic: "Loops",
    level: "Easy",
    date: "2026-10-04",
    title: "while loop vs do-while loop",
    question: `What is the difference between a while loop and a do-while loop?`,
    answer: `| Point | while | do-while |
|---|---|---|
| Condition checked | Before the loop body (entry-controlled) | After the loop body (exit-controlled) |
| Minimum runs | Can run 0 times | Runs at least once |
| Semicolon | Not needed after the condition | Needed after @@while(condition);@@ |

~~~c
int i = 10;

while (i < 5) {
    printf("while\\n");      // never runs
}

do {
    printf("do-while\\n");   // runs once
} while (i < 5);
~~~`
  },

  /* ====================================================== */
  /*  C++                                                   */
  /* ====================================================== */
  {
    id: "cpp-what-is-cpp",
    subject: "cpp",
    type: "note",
    topic: "Introduction",
    level: "Easy",
    date: "2026-10-09",
    title: "What is C++?",
    content: `## Definition
**C++** is a general-purpose programming language created by Bjarne Stroustrup in 1979 as an extension of C. It was first called "C with Classes". It supports both **procedural** and **object-oriented** programming.

## Features
- **Object-oriented**: classes, objects, inheritance, polymorphism, encapsulation and abstraction.
- **Compiled and fast**: close to the speed of C.
- **STL (Standard Template Library)**: ready-made containers and algorithms such as @@vector@@, @@map@@ and @@sort@@.
- **Templates**: write code that works with any data type.
- **Function and operator overloading**.
- **Exception handling** using @@try@@, @@catch@@ and @@throw@@.
- **Manual memory control** using @@new@@ and @@delete@@.

## Advantages
- High performance, so it is used in games, browsers and databases.
- Supports many programming styles in one language.
- Reusable code through classes and templates.
- Large libraries and an active community.
- Gives a strong base for learning other languages.

## Types (data types)
| Category | Types |
|---|---|
| Built-in | @@int@@, @@char@@, @@float@@, @@double@@, @@bool@@, @@void@@ |
| Derived | array, pointer, reference, function |
| User-defined | @@class@@, @@struct@@, @@union@@, @@enum@@ |

## Example
~~~cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
~~~

## Keywords
C++ has all the keywords of C and many more (over 80 in modern C++). Common ones:

@@class@@, @@public@@, @@private@@, @@protected@@, @@virtual@@, @@template@@, @@namespace@@, @@using@@, @@new@@, @@delete@@, @@this@@, @@try@@, @@catch@@, @@throw@@, @@friend@@, @@inline@@, @@operator@@, @@bool@@, @@const@@, @@static@@.

## Tokens
A **token** is the smallest unit of a C++ program. C++ has these kinds:

| Token | Meaning | Examples |
|---|---|---|
| Keyword | Reserved word | @@class@@, @@int@@, @@new@@ |
| Identifier | Name given by the programmer | @@marks@@, @@Student@@ |
| Literal | A fixed value | @@10@@, @@2.5@@, @@'A'@@, @@"Hello"@@, @@true@@ |
| Operator | Performs an operation | @@+@@, @@=@@, @@==@@, @@<<@@, @@::@@ |
| Punctuator | Divides code | @@;@@, @@,@@, @@( )@@, @@{ }@@, @@[ ]@@ |

**Example:** in @@int x = 5;@@ the tokens are @@int@@ (keyword), @@x@@ (identifier), @@=@@ (operator), @@5@@ (literal) and @@;@@ (punctuator).`
  },
  {
    id: "cpp-q-overloading-overriding",
    subject: "cpp",
    type: "question",
    topic: "Polymorphism",
    level: "Hard",
    date: "2026-10-08",
    title: "Overloading vs overriding",
    question: `What is the difference between function overloading and function overriding in C++?`,
    answer: `| Point | Overloading | Overriding |
|---|---|---|
| Where | Same class | Base and derived class |
| Signature | Different (parameters differ) | Exactly the same |
| Resolved | Compile time | Runtime (using virtual functions) |
| Keyword | None | @@virtual@@ is needed |

**Overriding example:**
~~~cpp
class A {
public:
    virtual void show() { cout << "A"; }
};
class B : public A {
public:
    void show() override { cout << "B"; }
};
~~~`
  },
  {
    id: "cpp-q-class-struct",
    subject: "cpp",
    type: "question",
    topic: "Classes",
    level: "Easy",
    date: "2026-10-07",
    title: "class vs struct in C++",
    question: `What is the difference between a class and a struct in C++?`,
    answer: `In C++ they are almost the same. The main difference is the **default access**:

| Point | class | struct |
|---|---|---|
| Default members | private | public |
| Default inheritance | private | public |
| Usual use | Objects with behavior | Simple data holders |

~~~cpp
class A { int x; };    // x is private by default
struct B { int x; };   // x is public by default
~~~

Both can have constructors, functions and inheritance.`
  },
  {
    id: "cpp-q-constructor-destructor",
    subject: "cpp",
    type: "question",
    topic: "Classes",
    level: "Medium",
    date: "2026-10-06",
    title: "Constructor vs destructor",
    question: `What is the difference between a constructor and a destructor in C++?`,
    answer: `| Point | Constructor | Destructor |
|---|---|---|
| Purpose | Initializes an object | Cleans up an object |
| Name | Same as the class | Same as the class with ~ in front |
| Called | When the object is created | When the object is destroyed |
| Parameters | Can have parameters | Cannot have parameters |
| Overloading | Possible | Not possible (only one) |
| Return type | None | None |

~~~cpp
class Student {
public:
    Student()  { cout << "Created\\n"; }     // constructor
    ~Student() { cout << "Destroyed\\n"; }   // destructor
};
~~~`
  },
  {
    id: "cpp-q-virtual-function",
    subject: "cpp",
    type: "question",
    topic: "Polymorphism",
    level: "Hard",
    date: "2026-10-05",
    title: "What is a virtual function?",
    question: `What is a virtual function? Why is it used?`,
    answer: `A **virtual function** is a member function of a base class declared with the @@virtual@@ keyword. A derived class can override it. When you call it through a **base class pointer**, C++ decides at runtime which version to run. This is **runtime polymorphism**.

~~~cpp
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() { cout << "Animal sound\\n"; }
};
class Dog : public Animal {
public:
    void sound() override { cout << "Bark\\n"; }
};

int main() {
    Animal *a = new Dog();
    a->sound();      // Bark (because sound() is virtual)
    delete a;
    return 0;
}
~~~

**Note:** a **pure virtual function** (written as @@= 0@@) makes the class abstract, so you cannot create objects of it.`
  },
  {
    id: "cpp-q-c-vs-cpp",
    subject: "cpp",
    type: "question",
    topic: "Basics",
    level: "Easy",
    date: "2026-10-04",
    title: "C vs C++",
    question: `What is the difference between C and C++?`,
    answer: `| Point | C | C++ |
|---|---|---|
| Paradigm | Procedural | Procedural and object-oriented |
| Classes and objects | Not supported | Supported |
| Function overloading | Not supported | Supported |
| Input / output | @@printf@@, @@scanf@@ | @@cout@@, @@cin@@ |
| Memory | @@malloc@@, @@free@@ | @@new@@, @@delete@@ (and also malloc, free) |
| Exception handling | Not supported | @@try@@, @@catch@@, @@throw@@ |
| Standard library | Basic | STL (vector, map, and more) |
| Namespaces | No | Yes |`
  }
];
