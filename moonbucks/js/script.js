const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("menu"));
  },
};

function App() {
  //상태는 변하는 데이터, 이 앱에서 변하는 것 - 메뉴명 (꼭 관리해야하는 데이터)
  this.menu = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: [],
  };
  this.currentCategory = "espresso";

  this.init = () => {
    if (store.getLocalStorage()) {
      this.menu = store.getLocalStorage();
    }
    render();
  };

  const render = () => {
    const template = this.menu[this.currentCategory].map((menuItem, index) => {
      return `
      <li data-menu-id="${index}" class="menu-list-item d-flex items-center py-2">
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
      
        $("#menu-list").innerHTML = template;
        // const li 갯수를 카운팅
        updateMenuCount();
  };

  //총 메뉴 갯수 카운트
  const updateMenuCount = () => {
    const memuCount = $("#menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${memuCount} 개`;
  };

  const addMenuName = () => {
    if ($("#menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
    const MenuName = $("#menu-name").value;
    this.menu[this.currentCategory].push({ name: MenuName });
    store.setLocalStorage(this.menu);
    render();
    $("#menu-name").value = "";
  };

  const updateMenuName = (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const updatedMenuName = prompt("메뉴명을 수정하세요.", $menuName.innerText);
    this.menu[this.currentCategory][menuId].name = updatedMenuName;
    store.setLocalStorage(this.menu);
    $menuName.innerText = updatedMenuName;
  };

  const removeMenuName = (e) => {
    if(confirm("정말 삭제하시겠습니까?")) {
      const menuId = e.target.closest("li").dataset.menuId;
      this.menu[this.currentCategory].splice(menuId, 1);
      store.setLocalStorage(this.menu);
      e.target.closest("li").remove();
      updateMenuCount();
    }
  };

  //메뉴 수정 버튼
  $("#menu-list").addEventListener("click", (e) => {
    if(e.target.classList.contains("menu-edit-button")) {
      updateMenuName(e);
    }
    //메뉴 삭제 버튼
    if(e.target.classList.contains("menu-remove-button")) {
      removeMenuName(e);
    }
  });    

  //form태그가 자동으로 전송되는걸 막아줌
  $("#menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // $("#menu-submit-button").addEventListener("click", () => {addMenuName();});
  $("#menu-submit-button").addEventListener("click", addMenuName);

  //메뉴의 이름일 입력받는 건
  $("#menu-name").addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
      return;
    }
    addMenuName();
  });

  $("nav").addEventListener("click", (e) => {
    const isCategoryButton = e.target.classList.contains("cafe-category-name");
    if (isCategoryButton) {
      const categoryName = e.target.dataset.categoryName;
      this.currentCategory = categoryName;
      $("#category-title").innerText = `${e.target.innerText} 메뉴 관리`;
      render();
    }
  });
}

const app = new App();
app.init();
