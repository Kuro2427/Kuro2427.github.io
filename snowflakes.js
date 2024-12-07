    // Include the JavaScript for the snowflake effect here
    const snowflakeContainer = document.getElementById('snowflake-container');
    const toggleButton = document.getElementById('toggle-snowflakes');

    let snowflakesEnabled = true;

    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      
      // Randomize snowflake position and animation duration
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 3 + 2; // 2 to 5 seconds
      const size = Math.random() * 5 + 5; // 5 to 10px

      snowflake.style.left = `${startX}px`;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;

      snowflakeContainer.appendChild(snowflake);

      // Remove snowflake after animation ends
      setTimeout(() => snowflake.remove(), duration * 1000);
    }

    function toggleSnowflakes() {
      snowflakesEnabled = !snowflakesEnabled;
      toggleButton.textContent = snowflakesEnabled ? 'Disable Snowflakes' : 'Enable Snowflakes';
    }

    toggleButton.addEventListener('click', toggleSnowflakes);

    // Create snowflakes at regular intervals
    setInterval(() => {
      if (snowflakesEnabled) createSnowflake();
    }, 200);