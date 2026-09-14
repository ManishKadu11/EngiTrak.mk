/* =====================================================
   ENGITRACK - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   ROADMAP GENERATOR
===================================================== */

let selectedYear = "";
let selectedGoal = "";


function selectOption(type, value, button) {

  if (type === "year") {

    selectedYear = value;

    document
      .querySelectorAll("#yearOptions button")
      .forEach(btn => {
        btn.classList.remove("selected");
      });

  } else {

    selectedGoal = value;

    document
      .querySelectorAll("#goalOptions button")
      .forEach(btn => {
        btn.classList.remove("selected");
      });

  }

  button.classList.add("selected");
}


function generateRoadmap() {

  if (!selectedYear || !selectedGoal) {

    alert("Please select your year and your goal first.");

    return;
  }


  let steps = [];


  /* CODING */

  if (selectedGoal === "Coding") {

    steps = [

      [
        "Programming Basics",
        "Learn variables, conditions, loops and functions."
      ],

      [
        "Choose One Language",
        "Start with C++ or Java and build strong basics."
      ],

      [
        "Practice Problems",
        "Solve simple coding problems regularly."
      ],

      [
        "Learn DSA",
        "Start arrays, strings, searching, sorting and basic data structures."
      ],

      [
        "Build a Project",
        "Create a small project using what you learned."
      ],

      [
        "Keep Practicing",
        "Improve problem solving and prepare for interviews."
      ]

    ];

  }


  /* CGPA */

  else if (selectedGoal === "CGPA") {

    steps = [

      [
        "Understand Your Subjects",
        "Know your syllabus, units and exam pattern."
      ],

      [
        "Study Regularly",
        "Avoid depending completely on last-minute study."
      ],

      [
        "Make Short Notes",
        "Create quick revision notes for every unit."
      ],

      [
        "Practice Previous Papers",
        "Understand repeated concepts and question patterns."
      ],

      [
        "Revision",
        "Revise important topics before examinations."
      ],

      [
        "Balance Skills",
        "Maintain academics while continuing technical learning."
      ]

    ];

  }


  /* DEVELOPMENT */

  else if (selectedGoal === "Development") {

    steps = [

      [
        "Programming Basics",
        "Understand one programming language."
      ],

      [
        "Web Fundamentals",
        "Learn HTML, CSS and JavaScript."
      ],

      [
        "Build Small Projects",
        "Create simple websites and applications."
      ],

      [
        "Learn Git & GitHub",
        "Understand version control and project sharing."
      ],

      [
        "Choose a Stack",
        "Explore frontend, backend or full-stack development."
      ],

      [
        "Build Portfolio",
        "Create projects that demonstrate your skills."
      ]

    ];

  }


  /* PLACEMENT */

  else if (selectedGoal === "Placement") {

    steps = [

      [
        "Programming Basics",
        "Strengthen your programming fundamentals."
      ],

      [
        "DSA",
        "Practice common data structures and algorithms."
      ],

      [
        "Projects",
        "Build meaningful technical projects."
      ],

      [
        "Core Subjects",
        "Revise important CS and IT concepts."
      ],

      [
        "Resume & GitHub",
        "Build a clean resume and project portfolio."
      ],

      [
        "Interview Practice",
        "Practice aptitude, technical and HR questions."
      ]

    ];

  }


  document.getElementById("resultTitle").innerText =
    selectedYear + " + " + selectedGoal + " Roadmap";


  const roadmapSteps =
    document.getElementById("roadmapSteps");


  roadmapSteps.innerHTML = "";


  steps.forEach((step, index) => {

    roadmapSteps.innerHTML += `

      <div class="roadmap-step">

        <div class="step-number">
          ${index + 1}
        </div>

        <div class="step-content">

          <strong>
            ${step[0]}
          </strong>

          <small>
            ${step[1]}
          </small>

        </div>

      </div>

    `;

  });


  document.getElementById("roadmapResult").style.display =
    "block";


  document.getElementById("roadmapResult")
    .scrollIntoView({
      behavior: "smooth"
    });

}



/* =====================================================
   SMART TOOLS
===================================================== */


/* WHAT SHOULD I DO TODAY? */

function dailyTask() {

  const result =
    document.getElementById("smartResult");


  if (!result) return;


  result.innerHTML = `

    <div class="smart-result-content">

      <span class="result-icon">
        🎯
      </span>

      <div>

        <h3>
          Today's Task
        </h3>

        <p>
          Spend 30 minutes learning programming basics
          and solve 2 beginner coding problems.
        </p>

      </div>

    </div>

  `;


  result.style.display = "block";


  result.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}



/* I DON'T KNOW WHAT TO DO */

function startTool() {

  const result =
    document.getElementById("smartResult");


  if (!result) return;


  result.innerHTML = `

    <div class="smart-result-content">

      <span class="result-icon">
        🧭
      </span>

      <div>

        <h3>
          Start With The Basics
        </h3>

        <p>
          If you're confused about your engineering journey,
          start with one programming language, maintain your
          academics and build small projects.
        </p>

        <p>
          Don't try to learn everything at once.
          Choose one skill and stay consistent.
        </p>

      </div>

    </div>

  `;


  result.style.display = "block";


  result.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}



/* =====================================================
   ROADMAP CARD BUTTONS
===================================================== */

function selectRoadmap(type) {

  const roadmapSection =
    document.getElementById("roadmap");


  if (!roadmapSection) return;


  roadmapSection.scrollIntoView({
    behavior: "smooth"
  });


  alert(
    type +
    " roadmap selected. Choose your year and goal to generate your personalized roadmap."
  );

}



/* =====================================================
   COMING SOON TOOLS
===================================================== */

function comingSoon(toolName) {

  alert(
    toolName +
    " is coming soon to EngiTrack 🚀"
  );

}



/* =====================================================
   YOUTUBE VIDEOS
===================================================== */

function openVideo(link) {

  if (
    !link ||
    link.includes("PASTE_YOUR") ||
    link.includes("YOUR_")
  ) {

    alert(
      "This video link has not been added yet."
    );

    return;
  }


  window.open(
    link,
    "_blank"
  );

}



/* =====================================================
   ACADEMIC PAPERS
===================================================== */

function showPaperMessage(section) {

  alert(
    section +
    " papers will be available here soon."
  );

}



/* =====================================================
   NAVBAR SCROLL
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const links =
      document.querySelectorAll(
        '.navbar a[href^="#"]'
      );


    links.forEach(link => {

      link.addEventListener(
        "click",
        function (event) {

          const targetId =
            this.getAttribute("href");


          const target =
            document.querySelector(targetId);


          if (target) {

            event.preventDefault();

            target.scrollIntoView({
              behavior: "smooth"
            });

          }

        }
      );

    });

  }
);