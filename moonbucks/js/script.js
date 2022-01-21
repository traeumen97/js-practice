const $ = (selector) => document.querySelector(selector);

function App() {
  //form태그가 자동으로 전송되는걸 막아줌
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  //메뉴의 이름일 입력받는 건
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
      return;
    }
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (e.key === "Enter") {
      const $espressoMenuName = $("#espresso-menu-name").value;
      const menuItemTemplate = ($espressoMenuName) => {
      return `
      <li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${$espressoMenuName}</span>
      <div class="menu-btn-warp">
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
        >
          수정
        </button>
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
        >
          삭제
        </button>
      </div>
      </li> `;
      };
      $("#espresso-menu-list").insertAdjacentHTML(
        "beforeend",
        menuItemTemplate($espressoMenuName)
      );
      // const li 갯수를 카운팅
      const memuCount = $("#espresso-menu-list").querySelectorAll("li").length;
      $(".menu-count").innerText = `총 ${memuCount} 개`;
      $("#espresso-menu-name").value = "";
    }
  });
}

App();