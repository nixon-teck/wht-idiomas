// Tempo em milissegundos (3min 43s = 1*30*1000*1000)
  const delay = 60 * 1000; // 1 min

  // Após o tempo, exibe a section
  setTimeout(() => {
    document.getElementById("minhaSection").style.display = "block";
    document.getElementById("minhaNave").style.display = "block";
    document.getElementById("minhaLocalizacao").style.display = "block";
  }, delay);


  window.addEventListener("load", () => {
   document.querySelector("#segundo_bloco").style.marginTop = "0px";
  });

  window.addEventListener("load", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"  // rolagem suave
  });
});


