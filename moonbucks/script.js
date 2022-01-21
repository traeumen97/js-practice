function App() {
  document.querySelector("#espresso-menu-name").addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      console.log(document.querySelector("#espresso-menu-name").value);
    }
  });
}