const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage() {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStorage() {
    localStorage.getItem("menu");
  }
}

function App() {
  //상태는 변하는 데이터, 이 앱에서 변하는 것 - 메뉴명 (꼭 관리해야하는 데이터)
  this.menu = [];
  //총 메뉴 갯수 카운트
  const updateMenuCount = () => {
    const memuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${memuCount} 개`;
  };

  const addMenuName = () => {
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
    const espressoMenuName = $("#espresso-menu-name").value;
    this.menu.push({ name: espressoMenuName });
    store.setLocalStorage(this.menu);
    const template = this.menu.map((menuItem) => {
      return `
      <li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${menuItem.name}</span>
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
    }).join("");
    
      $("#espresso-menu-list").innerHTML = template;
      // const li 갯수를 카운팅
      updateMenuCount();
      $("#espresso-menu-name").value = "";
  };

  const updateMenuName = (e) => {
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const updatedMenuName = prompt("메뉴명을 수정하세요.", $menuName.innerText);
    $menuName.innerText = updatedMenuName;
  };

  const removeMenuName = (e) => {
    if(confirm("정말 삭제하시겠습니까?")) {
      e.target.closest("li").remove();
      updateMenuCount();
    }
  };

  //메뉴 수정 버튼
  $("#espresso-menu-list").addEventListener("click", (e) => {
    if(e.target.classList.contains("menu-edit-button")) {
      updateMenuName(e);
    }
    //메뉴 삭제 버튼
    if(e.target.classList.contains("menu-remove-button")) {
      removeMenuName(e);
    }
  });    

  //form태그가 자동으로 전송되는걸 막아줌
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // $("#espresso-menu-submit-button").addEventListener("click", () => {addMenuName();});
  $("#espresso-menu-submit-button").addEventListener("click", addMenuName);

  //메뉴의 이름일 입력받는 건
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
      return;
    }
    addMenuName();
  });
}

App();