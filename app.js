 function toggleTheme() {
      let body = document.getElementById("body");

      if (body.style.backgroundColor === "black") {
        // Light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        localStorage.setItem("theme", "light");
      } 
      else {
        // Dark mode
        body.style.backgroundColor = "black";
        body.style.color = "white";
        localStorage.setItem("theme", "dark");
      }
    }

    // Load saved theme
    window.onload = () => {
      let saved = localStorage.getItem("theme");

      if (saved === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      }
    };