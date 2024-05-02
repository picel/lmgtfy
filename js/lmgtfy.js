window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get("q") || "Google";
  const input = document.getElementById("searchInput");
  const button = document.getElementById("searchButton");
  const cursor = document.getElementById("cursor");
  const modal = document.getElementById("myModal");

  let redirect = function () {
    setTimeout(function () {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}`;
    }, 2000);
  };

  function showModal() {
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
  }

  let i = 0;
  const typingSpeed = 100;
  const cursorMoveSpeed = 100;

  function typeCharacter() {
    if (i < searchQuery.length) {
      input.value += searchQuery.charAt(i);
      i++;
      setTimeout(typeCharacter, typingSpeed);
    } else {
      setTimeout(() => {
        cursor.style.top = `${button.offsetTop + 10}px`;
        cursor.style.left = `${button.offsetLeft + 10}px`;
        setTimeout(() => {
          cursor.style.top = `${button.offsetTop + 10}px`;
          cursor.style.left = `${button.offsetLeft + 10}px`;
          showModal();
          redirect();
        }, 1000);
      }, cursorMoveSpeed);
    }
  }

  cursor.style.top = `${input.offsetTop + 10}px`;
  cursor.style.left = `${input.offsetLeft + 10}px`;
  setTimeout(typeCharacter, 1000);
};
