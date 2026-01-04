     const headers = document.querySelectorAll(".accordion-header");

        headers.forEach(header => {
          header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector(".icon");

            if (content.style.maxHeight) {
              content.style.maxHeight = null;
              icon.textContent = "+";
            } else {
              document.querySelectorAll(".accordion-content").forEach(c => {
                c.style.maxHeight = null;
              });
              document.querySelectorAll(".icon").forEach(i => {
                i.textContent = "+";
              });

              content.style.maxHeight = content.scrollHeight + "px";
              icon.textContent = "−";
            }
          });
        });

