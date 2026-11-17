cat << 'EOF' > README.md
# Etch-a-Sketch 🎨

A browser-based pixel sketchpad built with vanilla HTML, CSS, and JavaScript as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

## Live Demo
[View Live Demo](https://favoureudoh.github.io/etch-a-sketch/) 

## Features
* **Dynamic Grid Generation:** Starts with a default `16×16` grid generated completely via JavaScript DOM manipulation.
* **Flexbox Layout:** Uses CSS Flexbox (`flex-wrap`) to arrange grid squares evenly inside a fixed container without relying on CSS Grid.
* **Custom Grid Sizing:** Includes a prompt-driven resize button allowing any grid resolution up to `100×100` while maintaining the exact same total container dimensions.
* **Random RGB & Progressive Darkening:** Each hovered square generates a random RGB color and increases in opacity by 10% per pass, reaching full saturation in 10 interactions.
* **Quick Reset:** Clear button resets the current canvas immediately.

## Technologies Used
* **HTML5**
* **CSS3** (Flexbox)
* **JavaScript (ES6+)** (DOM Manipulation, Event Listeners)

## Getting Started

* **Clone the repository:**
   ```bash
   git clone [https://github.com/favoureudoh/etch-a-sketch.git](https://github.com/favoureudoh/etch-a-sketch.git)
   ```

* **Navigate into the project directory:**
    ```
    cd etch-a-sketch
    ```

* **Run the project:**
Open index.html directly in your browser or launch it using a local development server (e.g., VS Code Live Server).
