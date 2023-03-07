const data = [
  {
    name: "configuration",
    pages_count: 4,
    exist: false,
    difference_points: [],
    forms: [
      {
        type: "convert",
        steps: 1,
        fields: {
          points: "number",
          currency: "number",
          "have cashback": "boolean",
          "cashback description": "text",
        },
      },
      {
        type: "Add",
        steps: 1,
        fields: {
          name: "text",
          "online order": "percentage",
          referral: "unknown",
          "pick from store": "percentage",
          "min punchers": "number | unknown",
          "Max punchers": "number | unknown",
          status: "boolean",
        },
      },
    ],
    tables: [
      [
        "name",
        "online order",
        "referral",
        "pick from store",
        "min punchers",
        "Max punchers",
        "status",
      ],
    ],
  },
  {
    name: "configuration coins",
    pages_count: 3,
    exist: false,
    difference_points: [],
    forms: [
      {
        type: "add",
        steps: 1,
        fields: {
          "select type": "multi select",
          achievements: "multi select",
          coins: "number",
        },
      },
    ],
    tables: [["id", "type", "achievements", "coins", "availability"]],
  },
  {
    name: "Events",
    pages_count: 6,
    exist: false,
    difference_points: [],
    forms: [
      {
        type: "Add an event",
        steps: 2,
        fields: {
          "Event image": "img",
          "Event name": "text",
          Description: "text",
          "select date": "multi select",
          "start at": "multi select",
          "end at": "multi select",
          host: "multi select",
          "Event state": "multi select",
          "Event videos": "gallery",
          "Event products": "multi select",
          "tags (category)": "Multi choose",
          "selected products": "relationship",
        },
      },
      {
        type: "Ask for Event",
        steps: 1,
        fields: {
          "Advertisement banner": "img",
          coins: "number",
          "Event image": "img",
          "Event name": "text",
          Description: "text",
          "Event videos": "gallery",
          "Event products": "multi select",
          "tags (category)": "Multi choose",
          "selected products": "relationship",
        },
      },
    ],
    tables: [
      ["id", "event name", "host", "date", "Valid through", "availability"],
      ["id", "name", "email", "type", "date"],
      ["id", "event name", "influencer", "date", "Valid through", "status"],
    ],
  },

  {
    name: "3600 stores",
    pages_count: 3,
    exist: false,
    difference_points: [],
    forms: [
      {
        type: "Add 3600 stores",
        steps: 1,
        fields: {
          "select branch": "multi select",
          floor: "tree",
          "name of floor": "text",
          number: "number",
          section: "tree",
          "name of section": "text",
          "section img": "img",
          scan: "tree",
          "name of scan": "text",
          "scan img": "img",
        },
      },
      {
        type: "Edit store options",
        steps: "1",
        fields: {
          "upload 360 images": "img",
          "edit 360 images": "img",
          "export 360 images": "img",
          "open in 360 editor": "img",
        },
      },
    ],
    tables: [],
  },
  {
    name: "Video calls",
    pages_count: 4,
    exist: true,
    difference_points: ["No Forms", "table date", "need more screens"],
    forms: [
      {
        type: "send an email",
        steps: "1",

        fields: {
          promocode: "multi select",
        },
      },
    ],
    tables: [
      [
        "id",
        "date",
        "type",
        "user",
        "call status",
        "Assigned to",
        "Join vide ",
      ],
      ["id", "date", "time", "type", "user", "Assigned to", "status"],
      ["id", "date", "type", "user", "Assigned to", "rate"],
    ],
  },

  {
    name: "Shared items",
    pages_count: 1,
    exist: false,
    difference_points: [],
    forms: [],
    tables: [
      ["id", "product", "product name", "saved people", "brand", "Shared by"],
    ],
  },
  {
    name: "Orders",
    pages_count: 0,
    exist: true,
    difference_points: ["Need more one screen"],
    forms: [
      {
        type: "rejection order",
        steps: "1",

        fields: {
          reason: "text",
        },
      },
    ],
    tables: [
      [
        "order id",
        "creation date",
        "shipping type",
        "username",
        "quantity",
        "total price",
        "payment",
        "status",
      ],
      [
        "return id",
        "order id",
        "creation date",
        "payment",
        "username",
        "quantity",
        "state",
      ],
    ],
  },
  {
    name: "receipts",
    pages_count: 2,
    exist: false,
    difference_points: [],
    forms: [
      {
        type: "receipts rejection",
        steps: "1",
        fields: {
          reason: "text",
        },
      },
    ],
    tables: [
      ["id", "branch", "upload data", "quantity", "user email", "state"],
    ],
  },
  {
    name: "Customers",
    pages_count: 2,
    exist: true,
    difference_points: ["customer details page"],
    forms: [],
    tables: [["id", "user name", "email", "phone", "joined date"]],
  },
  {
    name: "Influencer requests",
    pages_count: 4,
    exist: false,
    difference_points: [],
    forms: [],
    tables: [
      ["id", "name", "email", "phone", "joined date"],
      [
        "Influencer requests",
        "name",
        "email",
        "phone",
        "request data",
        "state",
      ],
    ],
  },
  {
    name: "Admins",
    pages_count: 2,
    exist: true,
    difference_points: ["forms need more fields: branch | organization | img"],
    forms: [],
    tables: [["id", "name", "email", "Role", "date"]],
  },
];

let selectedPart = data[0];

// display menu
const displayMenu = () => {
  const links = data.map((d) => d.name);
  let content =
    "<button data-tab='result' class='bg-[#0002] w-full p-1 text-left sidebar--menu--link capitalize text-black font-medium whitespace-nowrap' tab='results'>Statices</button>";
  for (const item of links) {
    content += `<button data-tab="${item}" class="w-full p-1 text-left sidebar--menu--link capitalize text-black font-medium whitespace-nowrap">${item}</button>`;
  }
  return content;
};

const displayGlobalInfo = () => {
  let content = "";
  content += ` <li class="flex gap-1">
    <span class="w-32">Pages/screens</span><b>${selectedPart.pages_count}</b>
  </li>
  <li class="flex gap-1">
  <span class="w-32">Part Exist</span><b>${
    selectedPart.exist ? "exist" : "Not yet"
  }</b>
</li>
<li class="flex gap-1">
<span class="w-32">Difference</span><b>${
    selectedPart.difference_points.length > 0
      ? `${selectedPart.difference_points.length} Differences`
      : "No Differences"
  }</b>
</li>
<li class="flex gap-1">
<span class="w-32">Pages/screens</span><b>${selectedPart.pages_count}</b>
</li>
<li class="flex gap-1">
<span class="w-32">Forms Count:</span><b>${selectedPart.forms.length}</b>
</li>
<li class="flex gap-1">
<span class="w-32">Tables Count:</span><b>${selectedPart.tables.length}</b>
</li>
  `;
  return content;
};

const displayForms = () => {
  let selectedForms = selectedPart.forms;
  let content = "";
  if (selectedForms?.length) {
    for (const form of selectedForms) {
      content += `
      <div class="mb-8 last:mb-0">
    <div
      class="flex justify-between text-base pl-4 bg-gray-100 p-2 shadow"
      >
        <p class="flex gap-1">
          Form:
          <span class="px-4 rounded bg-indigo-500 text-white">${
            form.type
          }</span>
        </p>
        <p class="flex gap-1">
          Fields count:<span
            class="px-4 rounded bg-indigo-500 text-white"
            >${Object.keys(form.fields).length}</span
          >
        </p>
        <p class="flex gap-1">
          Steps:<span class="px-4 rounded bg-indigo-500 text-white"
            >${form.steps}</span
          >
        </p>
      </div>
    `;
      let fields = form.fields;
      if (fields) {
        content += `
        <div class="flex gap-2 flex-wrap px-2 py-4">`;
        for (const key in fields) {
          content += `
          <div class="capitalize rounded bg-gray-200 p-2 flex gap-3 items-center max-w-fit">
          ${key}
          <span class="rounded-xl text-[#ffc107]">(${fields[key]})</span>
          </div>
          
          `;
        }
        content += `</div>`;
      }
      content += `</div>`;
    }
  } else {
    content = `
    <div class="p-2">
    <p class='text-red-500 bg-red-100 p-1 px-4'>There are no forms</p>
    </div>
    `;
  }
  console.log(content);
  return content;
};

const displayTables = () => {
  let selectedTables = selectedPart.tables;
  let content = "";
  if (selectedTables?.length) {
    let count = 0;
    for (let table of selectedTables) {
      console.log(table.length);
      count++;
      content += `
        <div class="flex justify-between items-center pr-2 shadow">
        <h4
          class="text-lg font-medium border-l-4 border-[#ffc107] pl-4 py-2"
        >
          Table No. ${count}
        </h4>
        <p class="flex gap-1 mb-0">
          Cols count:<span class="px-4 rounded bg-indigo-500 text-white"
            >${table.length}</span
          >
        </p>
      </div>
      <div class="flex flex-wrap gap-3 px-2 py-4">
        `;
      for (const field of table) {
        console.log(field);
        content += `
            <span class="rounded-md py-1 border border-gray-300 px-4 bg-gray-100 text-sm">${field}</span
          >
          `;
      }
      content += `</div>`;
    }
  } else {
    content = `
    <div class="flex justify-between items-center pr-2 shadow">
    <h4
      class="text-lg font-medium border-l-4 border-[#ffc107] pl-4 py-2"
    >
      Tables
    </h4>
  </div>
  <div class="p-2">
  <p class='text-red-500 bg-red-100 p-1 px-4'>There are no tables</p>
  </div>
  `;
  }
  return content;
};

const displayDifference = () => {
  let selectedDifference = selectedPart.difference_points;
  let content = "";
  if (selectedDifference) {
    content += `
        <div class="flex justify-between items-center pr-2 shadow">
        <h4
          class="text-lg font-medium border-l-4 border-[#ffc107] pl-4 py-2"
        >
          Differences
        </h4>
        <p class="flex gap-1 mb-0">
        Differences count:<span class="px-4 rounded bg-indigo-500 text-white"
            >${selectedDifference.length}</span
          >
        </p>
      </div>
      `;
    if (selectedDifference.length) {
      for (const diff of selectedDifference) {
        content += `<div class="flex flex-col gap-3 px-2 py-4">
      <span class="rounded-md py-1 border border-gray-300 py-1 px-4 capitalize">${diff}</span
      >
      `;
      }
      content += `</div>`;
    }
  }
  return content;
};
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sidebar--menu").innerHTML = displayMenu();
  // displayContent();
  displayStatics();
  // Switch tabs
  let links = document.querySelectorAll(".sidebar--menu--link");
  console.log(links);
  links.forEach((link) => {
    link.addEventListener("click", switchTab);
  });
});

function switchTab(e) {
  let activeClasses = "bg-[#0002]";
  let tabName = e.target.dataset.tab;
  let siblings = [...e.target.parentElement.children];
  siblings.forEach((child) => child.classList.remove(activeClasses));
  selectedPart = data.find((tab) => tab.name === tabName);
  e.target.classList.add(activeClasses);
  console.log(tabName);
  if (tabName === "result") {
    document.getElementById("statics").style.display = "block";
    document.getElementById("parts").style.display = "none";
    displayStatics();
  } else {
    document.getElementById("parts").style.display = "block";
    document.getElementById("statics").style.display = "none";
    displayContent();
  }
}

function displayContent() {
  document.getElementById("part").textContent = selectedPart.name;
  document.getElementById("partInfo").innerHTML = displayGlobalInfo();
  document.getElementById("forms--content").innerHTML = displayForms();
  document.getElementById("tables--content").innerHTML = displayTables();
  document.getElementById("difference-content").innerHTML = displayDifference();
}
function displayStatics() {
  const forms = data.reduce((result, d) => (result += d.forms.length), 0);
  const tables = data.reduce((result, d) => (result += d.tables.length), 0);
  const difference = data.reduce(
    (result, d) => (result += d.difference_points.length),
    0
  );

  const pagesCount = data.reduce((result, d) => (result += d.pages_count), 0);
  const notExist = data.filter((d) => !d.exist);
  let results = document.getElementById("results");
  results.innerHTML = `
    <div class="bg-red-500 text-white p-4 flex-1 rounded-md bg-gray-200 text-center">
      <h3 class="text-lg">Forms</h3>
      <p class=" text-2xl">${forms}</p>
    </div>
    <div class="bg-indigo-500 text-white p-4 flex-1 rounded-md bg-gray-200 text-center">
      <h3 class="text-lg">Tables</h3>
      <p class=" text-2xl">${tables}</p>
    </div>
    <div class="bg-green-500 text-white p-4 flex-1 rounded-md bg-gray-200 text-center">
      <h3 class="text-lg">Pages/screens</h3>
      <p class=" text-2xl">${pagesCount}</p>
    </div>
    <div class="bg-yellow-500 text-white p-4 flex-1 rounded-md bg-gray-200 text-center">
      <h3 class="text-lg">Not Exist</h3>
      <p class=" text-2xl">${notExist.length}</p>
    </div>
    <div class="bg-orange-500 text-white p-4 flex-1 rounded-md bg-gray-200 text-center">
      <h3 class="text-lg">Difference</h3>
      <p class=" text-2xl">${difference}</p>
    </div>
  `;
}
