onload = () => {
  document.body.classList.remove("container");

  const flowers = document.querySelectorAll(".flower");

  flowers.forEach((flower, index) => {
    flower.style.cursor = "pointer";

    flower.addEventListener("click", () => {
      window.location.href = `page${index + 1}.html`;
    });
  });
};