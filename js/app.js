var client_name_input,
  guarantor_name_input,
  client_addres_input,
  guarantor_addres_input,
  ID_number_input,
  phone_input,
  operation_addres_input,
  mother_name_input,
  date_of_birtht_input,
  machine_type_inputs,
  machine_piece_inputs,
  machine_accessories_inputs,
  machine_accessories_type_selects,
  machine_value_inputs,
  machine_fee_per_day_inputs,
  machine_fee_per_3h_inputs,
  machine_rent_time_day_inputs,
  machine_rent_time_3h_inputs,
  machine_discount_value_inputs,
  machine_discount_day_selects,
  machine_discount_value_inputs,
  tool_type_input,
  tool_piece_input,
  tool_wear_per_mm_input,
  tool_fee_per_day_input,
  tool_fee_per_3h_input,
  tool_rent_time_input,
  tool_rent_time_3h_input,
  machine_checkbox,
  tool_checkbox,
  number_of_renting_machines_select,
  summary_fee_input,
  summary_deposit_input,
  summary_deposit_with_letters_input,
  summary_comment_input,
  client_name_select,
  machine_type_selects,
  tool_type_select,
  rent_start_year_input,
  rent_start_month_input,
  rent_start_day_input,
  rent_start_hour_input,
  rent_start_minute_input,
  rent_end_year_input,
  rent_end_month_input,
  rent_end_day_input,
  rent_end_hour_input,
  rent_end_minute_input,
  darkTheme,
  admin,
  editingElement,
  client_name_input_edit,
  guarantor_name_input_edit,
  client_addres_input_edit,
  guarantor_addres_input_edit,
  ID_number_input_edit,
  phone_input_edit,
  operation_addres_input_edit,
  mother_name_input_edit,
  date_of_birtht_input_edit,
  client_name_input_add,
  guarantor_name_input_add,
  client_addres_input_add,
  guarantor_addres_input_add,
  ID_number_input_add,
  phone_input_add,
  operation_addres_input_add,
  mother_name_input_add,
  date_of_birtht_input_add,
  machine_type_input_edit,
  machine_value_input_edit,
  machine_fee_per_day_input_edit,
  machine_fee_per_3h_input_edit,
  machine_type_input_add,
  machine_value_input_add,
  machine_fee_per_day_input_add,
  machine_fee_per_3h_input_add,
  tool_type_input_edit,
  tool_wear_per_mm_input_edit,
  tool_fee_per_day_input_edit,
  tool_fee_per_3h_input_edit,
  tool_type_input_add,
  tool_wear_per_mm_input_add,
  tool_fee_per_day_input_add,
  tool_fee_per_3h_input_add;

$(document).ready(function () {
  client_name_input = document.getElementById("client-name-input");
  guarantor_name_input = document.getElementById("guarantor-name-input");
  client_addres_input = document.getElementById("client-addres-input");
  guarantor_addres_input = document.getElementById("guarantor-addres-input");
  ID_number_input = document.getElementById("ID-number-input");
  phone_input = document.getElementById("phone-input");
  operation_addres_input = document.getElementById("operation-addres-input");
  mother_name_input = document.getElementById("mother-name-input");
  date_of_birtht_input = document.getElementById("date-of-birtht-input");

  machine_type_inputs = [
    document.getElementById("machine-type-input-1"),
    document.getElementById("machine-type-input-2"),
    document.getElementById("machine-type-input-3"),
  ];
  machine_piece_inputs = [
    document.getElementById("machine-piece-input-1"),
    document.getElementById("machine-piece-input-2"),
    document.getElementById("machine-piece-input-3"),
  ];
  machine_accessories_inputs = [
    document.getElementById("machine-accessories-input-1"),
    document.getElementById("machine-accessories-input-2"),
    document.getElementById("machine-accessories-input-3"),
  ];
  machine_accessories_type_selects = [
    document.getElementById("machine-accessories-type-select-1"),
    document.getElementById("machine-accessories-type-select-2"),
    document.getElementById("machine-accessories-type-select-3"),
  ];
  machine_value_inputs = [
    document.getElementById("machine-value-input-1"),
    document.getElementById("machine-value-input-2"),
    document.getElementById("machine-value-input-3"),
  ];
  machine_fee_per_day_inputs = [
    document.getElementById("machine-fee-per-day-input-1"),
    document.getElementById("machine-fee-per-day-input-2"),
    document.getElementById("machine-fee-per-day-input-3"),
  ];
  machine_fee_per_3h_inputs = [
    document.getElementById("machine-fee-per-3h-input-1"),
    document.getElementById("machine-fee-per-3h-input-2"),
    document.getElementById("machine-fee-per-3h-input-3"),
  ];
  machine_rent_time_day_inputs = [
    document.getElementById("machine-rent-time-day-input-1"),
    document.getElementById("machine-rent-time-day-input-2"),
    document.getElementById("machine-rent-time-day-input-3"),
  ];
  machine_rent_time_3h_inputs = [
    document.getElementById("machine-rent-time-3h-input-1"),
    document.getElementById("machine-rent-time-3h-input-2"),
    document.getElementById("machine-rent-time-3h-input-3"),
  ];
  machine_discount_value_inputs = [
    document.getElementById("machine-discount-input-1"),
    document.getElementById("machine-discount-input-2"),
    document.getElementById("machine-discount-input-3"),
  ];
  machine_discount_day_selects = [
    document.getElementById("machine-discount-day-select-1"),
    document.getElementById("machine-discount-day-select-2"),
    document.getElementById("machine-discount-day-select-3"),
  ];
  machine_discount_value_inputs = [
    document.getElementById("machine-discount-value-input-1"),
    document.getElementById("machine-discount-value-input-2"),
    document.getElementById("machine-discount-value-input-3"),
  ];

  tool_type_input = document.getElementById("tool-type-input");
  tool_piece_input = document.getElementById("tool-piece-input");
  tool_wear_per_mm_input = document.getElementById("tool-wear-per-mm-input");
  tool_fee_per_day_input = document.getElementById("tool-fee-per-day-input");
  tool_fee_per_3h_input = document.getElementById("tool-fee-per-3h-input");
  tool_rent_time_input = document.getElementById("tool-rent-time-input");
  tool_rent_time_3h_input = document.getElementById("tool-rent-time-3h-input");

  machine_checkbox = document.getElementById("machine-checkbox");
  tool_checkbox = document.getElementById("tool-checkbox");

  number_of_renting_machines_select = document.getElementById(
    "number-of-renting-machines-select"
  );

  summary_fee_input = document.getElementById("summary-fee-input");
  summary_deposit_input = document.getElementById("summary-deposit-input");
  summary_deposit_with_letters_input = document.getElementById(
    "summary-deposit-with-letters-input"
  );
  summary_comment_input = document.getElementById("summary-comment-input");

  client_name_select = document.getElementById("client-name-select");
  machine_type_selects = [
    document.getElementById("machine-type-select-1"),
    document.getElementById("machine-type-select-2"),
    document.getElementById("machine-type-select-3"),
  ];
  tool_type_select = document.getElementById("tool-type-select");

  rent_start_year_input = document.getElementById("rent-start-year-input");
  rent_start_month_input = document.getElementById("rent-start-month-input");
  rent_start_day_input = document.getElementById("rent-start-day-input");
  rent_start_hour_input = document.getElementById("rent-start-hour-input");
  rent_start_minute_input = document.getElementById("rent-start-minute-input");
  rent_end_year_input = document.getElementById("rent-end-year-input");
  rent_end_month_input = document.getElementById("rent-end-month-input");
  rent_end_day_input = document.getElementById("rent-end-day-input");
  rent_end_hour_input = document.getElementById("rent-end-hour-input");
  rent_end_minute_input = document.getElementById("rent-end-minute-input");

  client_name_input_edit = document.getElementById("client-name-input-edit");
  guarantor_name_input_edit = document.getElementById("guarantor-name-input-edit");
  client_addres_input_edit = document.getElementById("client-addres-input-edit");
  guarantor_addres_input_edit = document.getElementById("guarantor-addres-input-edit");
  ID_number_input_edit = document.getElementById("ID-number-input-edit");
  phone_input_edit = document.getElementById("phone-input-edit");
  operation_addres_input_edit = document.getElementById("operation-addres-input-edit");
  mother_name_input_edit = document.getElementById("mother-name-input-edit");
  date_of_birtht_input_edit = document.getElementById("date-of-birtht-input-edit");

  client_name_input_add = document.getElementById("client-name-input-add");
  guarantor_name_input_add = document.getElementById("guarantor-name-input-add");
  client_addres_input_add = document.getElementById("client-addres-input-add");
  guarantor_addres_input_add = document.getElementById("guarantor-addres-input-add");
  ID_number_input_add = document.getElementById("ID-number-input-add");
  phone_input_add = document.getElementById("phone-input-add");
  operation_addres_input_add = document.getElementById("operation-addres-input-add");
  mother_name_input_add = document.getElementById("mother-name-input-add");
  date_of_birtht_input_add = document.getElementById("date-of-birtht-input-add");

  machine_type_input_edit = document.getElementById("machine-type-input-edit");
  machine_value_input_edit = document.getElementById("machine-value-input-edit");
  machine_fee_per_day_input_edit = document.getElementById("machine-fee-per-day-input-edit");
  machine_fee_per_3h_input_edit = document.getElementById("machine-fee-per-3h-input-edit");
  machine_type_input_add = document.getElementById("machine-type-input-add");
  machine_value_input_add = document.getElementById("machine-value-input-add");
  machine_fee_per_day_input_add = document.getElementById("machine-fee-per-day-input-add");
  machine_fee_per_3h_input_add = document.getElementById("machine-fee-per-3h-input-add");
  tool_type_input_edit = document.getElementById("tool-type-input-edit");
  tool_wear_per_mm_input_edit = document.getElementById("tool-wear-per-mm-input-edit");
  tool_fee_per_day_input_edit = document.getElementById("tool-fee-per-day-input-edit");
  tool_fee_per_3h_input_edit = document.getElementById("tool-fee-per-3h-input-edit");
  tool_type_input_add = document.getElementById("tool-type-input-add");
  tool_wear_per_mm_input_add = document.getElementById("tool-wear-per-mm-input-add");
  tool_fee_per_day_input_add = document.getElementById("tool-fee-per-day-input-add");
  tool_fee_per_3h_input_add = document.getElementById("tool-fee-per-3h-input-add");

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    darkTheme = false;
    //function override this to true
    switchTheme();
  } else {
    darkTheme = true;
    //function override this to false
    switchTheme();
  }

  $(".admin-edit-clients").hide();
  $(".admin-add-clients").hide();
  $(".admin-edit-machines").hide();
  $(".admin-add-machines").hide();
  $(".admin-edit-tools").hide();
  $(".admin-add-tools").hide();

  admin = false;
  showAdmin();
});

var holidays = {
  "2020-1-1": "Új Év",
  "2020-3-15": "Március 15",
  "2020-4-10": "Nagypéntek",
  "2020-4-13": "Húsvét",
  "2020-4-13": "Húsvét hétfő",
  "2020-5-1": "Munka ünnepe",
  "2020-4-31": "Pünkösd",
  "2020-6-1": "Pünkösd",
  "2020-8-20": "Államalapítás ünnepe",
  "2020-10-23": "1956-os Forradalom Ünnepe",
  "2020-11-1": "Mindenszentek",
  "2020-12-24": "Szenteste",
  "2020-12-25": "Karácsony",
  "2020-12-26": "Karácsony",

  "2021-1-1": "Új Év",
  "2021-3-15": "Március 15",
  "2021-4-2": "Nagypéntek",
  "2021-4-4": "Húsvét",
  "2021-4-5": "Húsvét hétfő",
  "2021-5-1": "Munka ünnepe",
  "2021-5-23": "Pünkösd",
  "2021-5-24": "Pünkösd",
  "2021-8-20": "Államalapítás ünnepe",
  "2021-10-23": "1956-os Forradalom Ünnepe",
  "2021-11-1": "Mindenszentek",
  "2021-12-24": "Szenteste",
  "2021-12-25": "Karácsony",
  "2021-12-26": "Karácsony",

  "2022-1-1": "Új Év",
  "2022-3-15": "Március 15",
  "2022-4-15": "Nagypéntek",
  "2022-4-17": "Húsvét",
  "2022-4-18": "Húsvét hétfő",
  "2022-5-1": "Munka ünnepe",
  "2022-5-5": "Pünkösd",
  "2022-5-6": "Pünkösd",
  "2022-8-20": "Államalapítás ünnepe",
  "2022-10-23": "1956-os Forradalom Ünnepe",
  "2022-11-1": "Mindenszentek",
  "2022-12-24": "Szenteste",
  "2022-12-25": "Karácsony",
  "2022-12-26": "Karácsony",

  "2023-1-1": "Új Év",
  "2023-3-15": "Március 15",
  "2023-4-7": "Nagypéntek",
  "2023-4-9": "Húsvét",
  "2023-4-10": "Húsvét hétfő",
  "2023-5-1": "Munka ünnepe",
  "2023-5-28": "Pünkösd",
  "2023-5-29": "Pünkösd",
  "2023-8-20": "Államalapítás ünnepe",
  "2023-10-23": "1956-os Forradalom Ünnepe",
  "2023-11-1": "Mindenszentek",
  "2023-12-24": "Szenteste",
  "2023-12-25": "Karácsony",
  "2023-12-26": "Karácsony",
};

var docDefinition = {
  content: [
    {
      columns: [
        {
          text: [
            {
              text: "Gladiátor Team Kft.\n",
              bold: true,
              fontSize: 12,
            },
            {
              text: "Bp.,1047 Váci út 59\nTel.: ",
              fontSize: 9,
            },
            {
              text: "+361/389-0460",
              bold: true,
              fontSize: 9,
            },
            {
              text: ", Mobil: +36/309-488-021\n",
              fontSize: 9,
            },
            {
              text: "www.gladiator-gepkolcsonzo.hu",
              bold: true,
              decoration: "underline",
            },
          ],
        },
        {
          text: [
            {
              text:
                "\n\nNyitva tartás: hétköznap:   7:00 - 16:30\nszombat-vasárnap:   zárva",
              alignment: "right",
              fontSize: 9,
            },
          ],
        },
      ],
    },
    {
      text: [
        {
          text: "Bérleti szerződés\n\n",
          bold: true,
          fontSize: 13,
          alignment: "center",
        },
        {
          text: "Mely létrejött a ",
        },
        {
          text: "Gladiátor Team Kft",
          bold: true,
        },
        {
          text: "., mint Bérbeadó, valamint ",
        },
        {
          text: "Bérlő",
          bold: true,
        },
        {
          text: " között.\n\n",
        },
      ],
    },
    {
      columns: [
        {
          text: [
            {
              text: "Bérlő neve: ",
            },
            {
              text: "",
            }, //Text added by javascript
            {
              text: "\n",
            },
            {
              text: "(bélyegzőlenyomat)\n",
              lineHeight: 1.5,
            },
            {
              text: "Címe: ",
              lineHeight: 1.5,
            },
            {
              text: "",
              lineHeight: 1.5,
            }, //Text added by javascript
            {
              text: "\n",
              lineHeight: 1.5,
            },
            {
              text: "Sz. ig. szám: ",
              lineHeight: 1.5,
            },
            {
              text: "",
              lineHeight: 1.5,
            }, //Text added by javascript
            {
              text: "\n",
              lineHeight: 1.5,
            },
            {
              text: "(a. n., szül. dátum:) ",
            },
          ],
        },
        {
          text: [
            {
              text: "\n",
            },
            {
              text: "\n\n",
              lineHeight: 1.5,
            },
            {
              text: "Tel.: ",
            },
            {
              text: "",
              lineHeight: 1.5,
            }, //Text added by javascript
            {
              text: "\n",
            },
            {
              text: "",
            }, //Text added by javascript, motherName
          ],
        },
        {
          text: [
            {
              text: "Meghatalmazott / Kezes: \n",
            },
            {
              text: "",
              lineHeight: 1.5,
            }, //Text added by javascript
            {
              text: "\n",
              lineHeight: 1.5,
            },
            {
              text: "Címe: ",
              lineHeight: 1.5,
            },
            {
              text: "",
              lineHeight: 1.5,
            }, //Text added by javascript
            {
              text: "\n",
              lineHeight: 1.5,
            },
            {
              text: "A gép üzemeltetési helye: ",
              lineHeight: 1.5,
            },
            {
              text: "",
              lineHeight: 1.5,
            }, //Text added by javascript
            {
              text: "\n",
              lineHeight: 1.5,
            },
          ],
        },
      ],
    },
    {
      text: [
        {
          text: "\nBérleti idő kezdete: ",
        },
        {
          text: "",
        }, //Year. Text added by javascript
        {
          text: " év ",
        },
        {
          text: "",
        }, //Month. Text added by javascript
        {
          text: " hó ",
        },
        {
          text: "",
        }, //Day. Text added by javascript
        {
          text: " nap ",
        },
        {
          text: "",
        }, //Hour. Text added by javascript
        {
          text: /*" óra*/"\n\n",
        },
        {
          text: "Bérleti idő vége: ",
        },
        {
          text: "",
        }, //Year. Text added by javascript
        {
          text: " év ",
        },
        {
          text: "",
        }, //Month. Text added by javascript
        {
          text: " hó ",
        },
        {
          text: "",
        }, //Day. Text added by javascript
        {
          text: " nap ",
        },
        {
          text: "",
        }, //Hour. Text added by javascript
        {
          text: /*" óra*/"\n\n",
        },
        {
          text: "Hosszabítás: ",
        },
        {
          text: ".....",
        }, //Year
        {
          text: " év ",
        },
        {
          text: ".....",
        }, //Month
        {
          text: " hó ",
        },
        {
          text: ".....",
        }, //Day
        {
          text: " nap ",
        },
        {
          text: ".....",
        }, //Hour
        {
          text: " óra ",
        }
      ],
    },
    {
      style: "tableExample",
      table: {
        "dontBreakRows": false,
        heights: ["auto", 25, 25, 25, "auto", 25],
        widths: ["auto", "auto", "auto", "auto", "*", "*", "*", "*"],
        body: [
          [
            {
              text: "Bérleti tárgy típusa,\nazonosító jele",
              alignment: "center",
            },
            {
              text: "db",
              alignment: "center",
            },
            {
              text: "Tartozékai",
              alignment: "center",
            },
            {
              text: "Bérleti tárgy\nnettó értéke",
              alignment: "center",
            },
            {
              text: "Bérleti díj",
              alignment: "center",
              colSpan: 4,
            },
            {},
            {},
            {},
          ],
          [
            "",
            "",
            "",
            "",
            "",
            "",
            {
              text: "",
              colSpan: 2,
            },
            {},
          ],
          [
            "",
            "",
            "",
            "",
            "",
            "",
            {
              text: "",
              colSpan: 2,
            },
            {},
          ],
          [
            "",
            "",
            "",
            "",
            "",
            "",
            {
              text: "",
              colSpan: 2,
            },
            {},
          ],
          [
            "Szerszám,\nkopóeszközök",
            "db",
            "Kopás díja\n(Ft/mm)",
            {
              text: "Bérleti díj",
              colSpan: 2,
              alignment: "center",
            },
            "",
            {
              text: "",
              colSpan: 3,
              border: [false, false, false, false],
            },
            "",
            "",
          ],
          [
            "",
            "",
            "",
            "",
            "",
            {
              text: "",
              colSpan: 3,
              border: [false, false, false, false],
            },
            "",
            "",
          ],
        ],
      },
    },
    {
      text: [
        {
          text: "\n",
        },
      ],
    },
    {
      style: "tableExample",
      table: {
        widths: ["auto", "auto", "auto", "auto", "auto", "*"],
        body: [
          [
            {
              text: "Díj a lejárat idejéig: ",
              bold: true,
            },
            {
              text: "",
            } /*Text added by javascript*/,
            {
              text: " Ft.",
            },
            {
              text: "Fizetett díj: ",
            },
            {
              text: "",
            } /*Text added by javascript*/,
            {
              text: " Ft.",
            },
          ],
          [
            {
              text: "Letét összege: ",
            },
            {
              text: "",
            } /*Text added by javascript*/,
            {
              text: " Ft., azaz: ",
            },
            {
              text: "",
            },
            {
              text: "Ft",
            },
            {},
          ],
        ],
      },
      layout: "noBorders",
    },
    {
      text: [
        {
          text: "\n Megjegyzés: ",
        },
        {
          text: "",
        },
        {
          text:
            "\nJelen bérleti szerződés megkötésével egy időben az „Általános szerződési feltételek” egy példányát mint Bérlő, mint Bérbeadó átvette, a benne foglaltakkal mindenben egyetért, rá nézve kötelező érvényűnek fogadja el.\n\n\n",
        },
      ],
    },
    {
      style: "tableExample",
      table: {
        widths: ["*", "*", "*", "*", "*"],
        body: [
          [
            {
              text: ".................................",
              border: [false, false, false, false],
            },
            {
              text: "",
              border: [false, false, false, false],
            },
            {
              text: ".................................",
              border: [false, false, false, false],
            },
            {
              text: "",
              border: [false, false, false, false],
            },
            {
              text: ".................................",
              border: [false, false, false, false],
            },
          ],
          [
            {
              text: "Bérbeadó",
              alignment: "center",
              border: [false, false, false, false],
            },
            {
              text: "",
              border: [false, false, false, false],
            },
            {
              text: "Kezes",
              alignment: "center",
              border: [false, false, false, false],
            },
            {
              text: "",
              border: [false, false, false, false],
            },
            {
              text: "Bérlő (Meghatalmazott)",
              alignment: "center",
              border: [false, false, false, false],
            },
          ],
          [
            {
              text: "",
              border: [false, false, false, true],
            },
            {
              text: "",
              border: [false, false, false, true],
            },
            {
              text: "",
              border: [false, false, false, true],
            },
            {
              text: "",
              border: [false, false, false, true],
            },
            {
              text: "",
              border: [false, false, false, true],
            },
          ],
        ],
      },
    },
    {
      text: [
        {
          text: "\n",
        },
      ],
    },
    {
      style: "tableExample",
      table: {
        widths: ["auto", "*"],
        body: [
          [
            {
              text:
                "A bérleti tárgy visszaszolgáltatásának időpontja: 2020. ....... hó .......nap ...... óra",
            },
            {
              text: "Díjkülönbözet: ..................Ft",
              alignment: "right",
            },
          ],
        ],
      },
      layout: "noBorders",
    },
    {
      style: "tableExample",
      table: {
        widths: ["auto", 90, "auto", 90],
        body: [
          [
            {
              text: "\n",
              margin: [0, 0, 0, 0],
            },
            {
              text: "\n",
            },
            {
              text: "\n",
            },
            {
              text: "\n",
            },
          ],
          [
            {
              text: "A bérleti tárgyat hiánytalanul átvettem: ",
            },
            {
              text: ".............................",
              alignment: "center",
            },
            {
              text: "A letéti díjat átvettem: ",
              alignment: "right",
            },
            {
              text: "..........................",
              alignment: "center",
            },
          ],
          [
            {},
            {
              text: "Bérbeadó",
              alignment: "center",
            },
            {},
            {
              text: "Bérlő",
              alignment: "center",
            },
          ],
          [
            {
              text:
                "A bérleti tárgyat hiányosan, megrongálva stb. átvettem. Hibafelvételi jegyzőkönyv felvétele szükséges. Bérlőnek felróható okból a letéti díj teljes összegét vagy egy részét Bérbeadó visszatartja.",
              colSpan: 4,
            },
            {},
            {},
            {},
          ],
          [
            {
              text: "\n",
              margin: [0, 0, 0, 0],
            },
            {
              text: "\n",
            },
            {
              text: "\n",
            },
            {
              text: "\n",
            },
          ],
          [
            {},
            {
              text: "............................",
              alignment: "center",
            },
            {},
            {
              text: "..............................",
              alignment: "center",
            },
          ],
          [
            {},
            {
              text: "Bérbeadó",
              alignment: "center",
            },
            {},
            {
              text: "Bérlő",
              alignment: "center",
            },
          ],
        ],
      },
      layout: "noBorders",
    },
    //ÁSZF
    [
      /*{
        columns: [
          [
            {
              text: "Gladiátor Team Kft.",
              bold: true,
              fontSize: 12
            },
            {
              text: "www.gladiator-gepkolcsonzo.hu",
              bold: true,
              fontSize: 10,
              decoration: "underline",
              alignment: "left"
            }
          ],
          {
            text: "Bp., 1047 Váci út 59.    Bp., 1182 Üllői út 541.",
            alignment: "right",
            fontSize: 10
          }
        ],
      },
      {
        text: "\nÁltalános szerződési feltételek",
        alignment: "center",
        bold: true,
        fontSize: 13
      },
      {
        text: [
          {
            text: "\na "
          },
          {
            text: "Gladiátor Team Kft.",
            bold: true
          },
          {
            text: "-től bérbe vett eszközök és azok tartozékaira vonatkozóan:"
          },
          {
            text: "\n\u200B 1. Bérbeadó az eszközt tartozékaival együtt, komplett, üzemképes, a Bérlő jelenlétében kipróbált, sérülésmentes és letisztított állapotban bocsátja a Bérlő rendelkezésére. Az eszköz rendelkezik a szükséges felülvizsgálatokkal, villamos mérésekkel.\n\u200B 2. Bérlő elismeri, hogy az eszközt használó személy rendelkezik az eszköz kezeléséhez szükséges, az idevonatkozó munkavédelmi törvény előírásai szerint érvényes kezelői jogosítvánnyal és szakképesítéssel.\n\u200B 3. Bérlő köteles a bérelt eszközt rendeltetésszerűen, az állagmegóvás követelményeinek eleget téve használni. Az előírások be nem tartása miatt bekövetkezett baleset, anyagi kár esetén a felelősség a Bérlőt terheli.\n\u200B 4. A bérelt eszközök vagyonvédelméről és vagyonbiztosításáról a Bérlő köteles gondoskodni.\n\u200B 5. Bérleti megállapodás a Bérleti Szerződésben foglalt időpontig áll fenn, de azt a Bérlő és a Bérbeadó kölcsönös megállapodással meghosszabbíthatja, új bérleti szerződés megkötése formájában.\n\u200B 6. Bérbeadó jogosult a Bérlőtől az esetleges káresemények fedezetéül letéti díjat kérni.\n\u200B 7. A bérleti idő lejártával a Bérleti Szerződés megszűnik és a Bérlő a bérelt eszközt, azok tartozékait, üzemképes, tiszta állapotban köteles visszaszállítani. Az esetleges meghibásodásokat, sérüléseket az eszköz átadásakor hibafelvételi jegyzőkönyvben rögzítik, amely alapján a Bérbeadónak joga van a Bérlo felé az okozott kárt áthárítani. Amennyiben az okozott kár a letéti díjból nem fedezhető, úgy a Bérlő köteles a fennmaradó kárösszeget megfizetni. \n\u200B 8. A Bérleti Szerződés fennállása alatt a Bérbeadó saját költségén gondoskodik a rendeltetésszerű használat ellenére bekövetkezett hibák javításáról. A javítás idejére a bérleti díjat fizetni nem kell.\n\u200B 9. A bérelt eszköz meghibásodása esetén a Bérbeadó nem vállal felelősséget a Bérlő által elvégzendő munka elkészítéséért, a Bérlő kártérítési igénnyel nem lép fel.\n\u200B 10. A meghibásodás vagy megrongálódás esetén a Bérlő tartozik a bérelt gépet a Bérbeadónak visszaszállítani, vagy a hibát ugyanitt haladéktalanul bejelenteni. Ha a bérelt gép a Bérlőnek felróható okból meghibásodik, megrongálódik (gondatlan kezelés szakszerűtlen munkavégzés, túlterhelés stb.) a Bérlő köteles a javítási költséget, a Bérbeadó egyéb igazolt kárát megtéríteni. A Bérlő a meghibásodott gépet csak a Bérbeadó hozzájárulásával javíthatja vagy javíttathatja.\n\u200B 11. A  Bérbeadó jogosult – a Bérlő háborítása nélkül – a gépe üzemeltetési körülményeit ellenőrizni.\n\u200B 12. A gép használatáért a szerződésben megjelölt díjat számítja fel a Bérbeadó. "
          },
          {
            text: "A számla kiegyenlítése a Gladiátor Team Kft. pénztárába, szerződéskötéskor,  készpénzes fizetés formájában történik.\n\u200B",
            bold: true
          },
          {
            text: "\u200B 13. A bérleti tárgy három órán belüli késedelmes visszaszolgáltatása esetén (minimum egy napi bérlés után) a napi díj 70%-át, három órán túli késés esetén a napi díjat számítja fel a Bérbeadó.\n\u200B 14. Késedelmes fizetés esetén a Bérbeadó kamatot számít fel. A kamat mértéke a mindenkori jegybanki alapkamat kétszerese. \n\u200B 15. Ha a Bérlő a bérleti idő lejártakor a bérelt eszközt és tartozékait felszólítás ellenére sem szállítja vissza, a Bérbeadó jogosult a bérelt eszközt tartozékaival együtt a Bérlőtől elszállítani. Az emiatt felmerült költségek a Bérlőt terhelik.\n\u200B 16. Ha a bérelt eszköz és tartozékainak visszaadása meghiúsul, elvész, megsemmisül, használhatatlanná válik a Bérlő köteles a bérelt eszköz és tartozékainak szerződésben meghatározott értékét, a szerződés lejártától számítva 10 naptári napon belül, megfizetni. \n\u200B 17. A Bérleti Szerződés fennállása alatt a bérelt eszköz és tartozékai másra nem ruházhatók át, nem idegeníthetők el és nem terhelhetők meg. A bérelt eszközt a Bérlő nem adhatja tovább bérletbe. \n\u200B 18. Amennyiben a Bérlő meghatalmazott által eszközt bérel, úgy a Bérlő (cég) aláírásra, cégüket korlátozás nélküli képviselésre jogosult személye kijelenti, hogy az általa meghatalmazott személy Bérlő számára minden tekintetben kötelező érvényű szerződést köt.\n\u200B 19. Amennyiben a Bérleti szerződés Kezes bevonásával jön létre, úgy Kezes kijelenti, hogy számára jelen szerződési feltételek éppoly kötelező érvényűek mint Bérlőre nézve. \n\u200B 20. Felek a Bérleti Szerződésből származó per esetére kikötik a Budapest Központi Bíróság kizárólagos illetékességét."
          }
        ]
      },
      {
        table: {
          widths: ["*", "*", "*"],
          body: [
            [
              {
                text: "\n\n\n. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . \nBérlő  (aláírás, szig.szám)\n\n\n\n. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . \nBérbeadó",
                alignment: "center"
              },
              {},
              {
                text: "\n\n\n. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . \nBérlő (név, bélyegző)\n\n\n\n. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . \nKezes",
                alignment: "center"
              }
            ]
          ]
        },
        layout: "noBorders"
      }*/
    ]
  ],

  defaultStyle: {
    fontSize: 10,
  },

  pageMargins: [30, 20, 30, 20],

  dontBreakRows: false
};

//#region
var ddClientName = (docDefinition["content"][2]["columns"][0]["text"][1][
  "text"
] = "");
var ddClientAddres = (docDefinition["content"][2]["columns"][0]["text"][5][
  "text"
] = "");
var ddIDNumber = docDefinition["content"][2]["columns"][0]["text"][8]["text"];
var ddMotherName_ddDateOfBirth = (docDefinition["content"][2]["columns"][1][
  "text"
][5]["text"] = "");
var ddPhone = (docDefinition["content"][2]["columns"][1]["text"][3]["text"] =
  "");
var ddGuarantorName = (docDefinition["content"][2]["columns"][2]["text"][1][
  "text"
] = "");
var ddGuarantorAddres = (docDefinition["content"][2]["columns"][2]["text"][4][
  "text"
] = "");
var ddOperationAddres = (docDefinition["content"][2]["columns"][2]["text"][7][
  "text"
] = "");
var ddRentStartYear = (docDefinition["content"][3]["text"][1]["text"] = "");
var ddRentStartMonth = (docDefinition["content"][3]["text"][3]["text"] = "");
var ddRentStartDay = (docDefinition["content"][3]["text"][5]["text"] = "");
var ddRentStartHour = (docDefinition["content"][3]["text"][7]["text"] = "");
var ddRentEndYear = (docDefinition["content"][3]["text"][10]["text"] = "");
var ddRentEndMonth = (docDefinition["content"][3]["text"][12]["text"] = "");
var ddRentEndDay = (docDefinition["content"][3]["text"][14]["text"] = "");
var ddRentEndHour = (docDefinition["content"][3]["text"][16]["text"] = "");
var ddMachineType1 = (docDefinition["content"][4]["table"]["body"][1][0] = "");
var ddMachineType2 = (docDefinition["content"][4]["table"]["body"][2][0] = "");
var ddMachineType3 = (docDefinition["content"][4]["table"]["body"][3][0] = "");
var ddMachinePiece1 = (docDefinition["content"][4]["table"]["body"][1][1] = "");
var ddMachinePiece2 = (docDefinition["content"][4]["table"]["body"][2][1] = "");
var ddMachinePiece3 = (docDefinition["content"][4]["table"]["body"][3][1] = "");
var ddMachineAccessories1 = (docDefinition["content"][4]["table"][
  "body"
][1][2] = "");
var ddMachineAccessories2 = (docDefinition["content"][4]["table"][
  "body"
][2][2] = "");
var ddMachineAccessories3 = (docDefinition["content"][4]["table"][
  "body"
][3][2] = "");
var ddMachineValue1 = (docDefinition["content"][4]["table"]["body"][1][3] = "");
var ddMachineValue2 = (docDefinition["content"][4]["table"]["body"][2][3] = "");
var ddMachineValue3 = (docDefinition["content"][4]["table"]["body"][3][3] = "");
var ddMachineRentTime24h1 = (docDefinition["content"][4]["table"][
  "body"
][1][4] = "");
var ddMachineRentTime24h2 = (docDefinition["content"][4]["table"][
  "body"
][2][4] = "");
var ddMachineRentTime24h3 = (docDefinition["content"][4]["table"][
  "body"
][3][4] = "");
var ddMachineRentTime3h1 = (docDefinition["content"][4]["table"]["body"][1][5] =
  "");
var ddMachineRentTime3h2 = (docDefinition["content"][4]["table"]["body"][2][5] =
  "");
var ddMachineRentTime3h3 = (docDefinition["content"][4]["table"]["body"][3][5] =
  "");
var ddMachineDiscount1_1 = (docDefinition["content"][4]["table"]["body"][1][6][
  "text"
] = "");
var ddMachineDiscount2_1 = (docDefinition["content"][4]["table"]["body"][2][6][
  "text"
] = "");
var ddMachineDiscount3_1 = (docDefinition["content"][4]["table"]["body"][3][6][
  "text"
] = "");
var ddToolType = (docDefinition["content"][4]["table"]["body"][5][0] = "");
var ddToolPiece = (docDefinition["content"][4]["table"]["body"][5][1] = "");
var ddToolWearPerMm = (docDefinition["content"][4]["table"]["body"][5][2] = "");
var ddToolRentTimeDay = (docDefinition["content"][4]["table"]["body"][5][3] =
  "");
var ddToolRentTime3h = (docDefinition["content"][4]["table"]["body"][5][4] =
  "");
var ddFee = (docDefinition["content"][6]["table"]["body"][0][1]["text"] = "");
var ddFeeDeposit = (docDefinition["content"][6]["table"]["body"][1][1]["text"] =
  "");
var ddFeeDepositWithLetters = (docDefinition["content"][6]["table"][
  "body"
][1][3]["text"] = "");
var ddComment = (docDefinition["content"][7]["text"][1]["text"] = "");
//#endregion

//#region
function newClient() {
  $.post("server.js", {
    myMethod: "newClient",
    client: client_name_input.value,
    guarantorName: guarantor_name_input.value,
    clientAddres: client_addres_input.value,
    guarantorAddres: guarantor_addres_input.value,
    IDNumber: ID_number_input.value,
    phone: phone_input.value,
    operationAddres: operation_addres_input.value,
    motherName: mother_name_input.value,
    dateOfBirth: date_of_birtht_input.value,
  });
}

function updateClient() {
  $.post("server.js", {
    myMethod: "updateClient",
    client: client_name_input.value,
    guarantorName: guarantor_name_input.value,
    clientAddres: client_addres_input.value,
    guarantorAddres: guarantor_addres_input.value,
    IDNumber: ID_number_input.value,
    phone: phone_input.value,
    operationAddres: operation_addres_input.value,
    motherName: mother_name_input.value,
    dateOfBirth: date_of_birtht_input.value,
  });
}

function newMachine(number) {
  $.post("server.js", {
    myMethod: "newMachine",
    machine: machine_type_inputs[number - 1].value,
    machineValue: machine_value_inputs[number - 1].value,
    machineFeePerDay: machine_fee_per_day_inputs[number - 1].value,
    machineFeePer3h: machine_fee_per_3h_inputs[number - 1].value
  });
}

function updateMachine(number) {
  $.post("server.js", {
    myMethod: "updateMachine",
    machine: machine_type_inputs[number - 1].value,
    machineValue: machine_value_inputs[number - 1].value,
    machineFeePerDay: machine_fee_per_day_inputs[number - 1].value,
    machineFeePer3h: machine_fee_per_3h_inputs[number - 1].value,
  });
}

function newAccessorie(number) {
  $.post("server.js", {
    myMethod: "newAccessorie",
    accessorie: machine_accessories_inputs[number - 1].value,
  });
}

function updateAccessorie(number) {
  $.post("server.js", {
    myMethod: "updateAccessorie",
    accessorie: machine_accessories_inputs[number - 1].value,
  });
}

function newTool() {
  $.post("server.js", {
    myMethod: "newTool",
    tool: tool_type_input.value,
    toolWearPerMm: tool_wear_per_mm_input.value,
    toolFeePerDay: tool_fee_per_day_input.value,
    toolFeePer3h: tool_fee_per_3h_input.value,
  });
}

function updateTool() {
  $.post("server.js", {
    myMethod: "updateTool",
    tool: tool_type_input.value,
    toolWearPerMm: tool_wear_per_mm_input.value,
    toolFeePerDay: tool_fee_per_day_input.value,
    toolFeePer3h: tool_fee_per_3h_input.value,
  });
}

function checkMachine(number) {
  switch (number) {
    case 1:
      $.post("server.js", {
        myMethod: "changeMachine",
        machine: machine_type_inputs[0].value,
      }).done(function (data) {
        if (processResponse(data, "array")[0] == undefined) {
          if (
            confirm(
              "Az adatbázisban nem szerepel az első gép. Regisztrálja új gépként? (Ok=igen, Mégse=nem)"
            )
          ) {
            newMachine(1);
          }
        } else if (
          machine_value_inputs[0].value != processResponse(data, "array")[1] ||
          machine_fee_per_day_inputs[0].value !=
          processResponse(data, "array")[2] ||
          machine_fee_per_3h_inputs[0].value !=
          processResponse(data, "array")[3]
        ) {
          if (
            confirm(
              "Az első beírt gép adatai nem egyeznek az adatbázisban lévőkkel. Frissíti az adatokat? (Ok=igen, Mégse=nem)"
            )
          ) {
            updateMachine(1);
          }
        }
      });
      break;
    case 2:
      $.post("server.js", {
        myMethod: "changeMachine",
        machine: machine_type_inputs[1].value,
      }).done(function (data) {
        if (processResponse(data, "array")[0] == undefined) {
          if (
            confirm(
              "Az adatbázisban nem szerepel a második gép. Regisztrálja új gépként? (Ok=igen, Mégse=nem)"
            )
          ) {
            newMachine(2);
          }
        } else if (
          machine_value_inputs[1].value != processResponse(data, "array")[1] ||
          machine_fee_per_day_inputs[1].value !=
          processResponse(data, "array")[2] ||
          machine_fee_per_3h_inputs[1].value !=
          processResponse(data, "array")[3]
        ) {
          if (
            confirm(
              "A második beírt gép adatai nem egyeznek az adatbázisban lévőkkel. Frissíti az adatokat? (Ok=igen, Mégse=nem)"
            )
          ) {
            updateMachine(2);
          }
        }
      });
      break;
    case 3:
      $.post("server.js", {
        myMethod: "changeMachine",
        machine: machine_type_inputs[2].value,
      }).done(function (data) {
        if (processResponse(data, "array")[0] == undefined) {
          if (
            confirm(
              "Az adatbázisban nem szerepel a harmadik gép. Regisztrálja új gépként? (Ok=igen, Mégse=nem)"
            )
          ) {
            newMachine(3);
          }
        } else if (
          machine_value_inputs[2].value != processResponse(data, "array")[1] ||
          machine_fee_per_day_inputs[2].value !=
          processResponse(data, "array")[2] ||
          machine_fee_per_3h_inputs[2].value !=
          processResponse(data, "array")[3]
        ) {
          if (
            confirm(
              "A harmadik beírt gép adatai nem egyeznek az adatbázisban lévőkkel. Frissíti az adatokat? (Ok=igen, Mégse=nem)"
            )
          ) {
            updateMachine(3);
          }
        }
      });
      break;
  }
}

function checkAccessorie(number) {
  switch (number) {
    case 1:
      $.post("server.js", {
        myMethod: "changeAccessorie",
        accessorie: machine_accessories_inputs[0].value,
      }).done(function (data) {
        if (processResponse(data, "array")[0] == undefined) {
          if (
            confirm(
              "Az adatbázisban nem szerepel az első tartozék. Regisztrálja új tartozékként? (Ok=igen, Mégse=nem)"
            )
          ) {
            newAccessorie(1);
          }
        }
      });
      break;
    case 2:
      $.post("server.js", {
        myMethod: "changeAccessorie",
        accessorie: machine_accessories_inputs[1].value,
      }).done(function (data) {
        if (processResponse(data, "array")[0] == undefined) {
          if (
            confirm(
              "Az adatbázisban nem szerepel a második tartozék. Regisztrálja új tartozékként? (Ok=igen, Mégse=nem)"
            )
          ) {
            newAccessorie(2);
          }
        }
      });
      break;
    case 3:
      $.post("server.js", {
        myMethod: "changeAccessorie",
        accessorie: machine_accessories_inputs[2].value,
      }).done(function (data) {
        if (processResponse(data, "array")[0] == undefined) {
          if (
            confirm(
              "Az adatbázisban nem szerepel a harmadik tartozék. Regisztrálja új tartozékként? (Ok=igen, Mégse=nem)"
            )
          ) {
            newAccessorie(3);
          }
        }
      });
      break;
  }
}

function print() {
  if (machine_checkbox.checked) {
    if (
      number_of_renting_machines_select.options.namedItem("1-renting-machine")
        .selected
    ) {
      if (machine_type_inputs[0].value != "") {
        checkMachine(1);
      }
    } else if (
      number_of_renting_machines_select.options.namedItem("2-renting-machine")
        .selected
    ) {
      if (machine_type_inputs[0].value != "") {
        checkMachine(1);
      }
      if (machine_type_inputs[1].value != "") {
        checkMachine(2);
      }
    } else if (
      number_of_renting_machines_select.options.namedItem("3-renting-machine")
        .selected
    ) {
      if (machine_type_inputs[0].value != "") {
        checkMachine(1);
      }
      if (machine_type_inputs[1].value != "") {
        checkMachine(2);
      }
      if (machine_type_inputs[2].value != "") {
        checkMachine(3);
      }
    }
  }

  if (machine_checkbox.checked) {
    if (
      number_of_renting_machines_select.options.namedItem("1-renting-machine")
        .selected
    ) {
      if (machine_accessories_inputs[0].value != "") {
        checkAccessorie(1);
      }
    } else if (
      number_of_renting_machines_select.options.namedItem("2-renting-machine")
        .selected
    ) {
      if (machine_accessories_inputs[0].value != "") {
        checkAccessorie(1);
      }
      if (machine_accessories_inputs[1].value != "") {
        checkAccessorie(2);
      }
    } else if (
      number_of_renting_machines_select.options.namedItem("3-renting-machine")
        .selected
    ) {
      if (machine_accessories_inputs[0].value != "") {
        checkAccessorie(1);
      }
      if (machine_accessories_inputs[1].value != "") {
        checkAccessorie(2);
      }
      if (machine_accessories_inputs[2].value != "") {
        checkAccessorie(3);
      }
    }
  }
  docDefinition["content"][12] = "";
  if (client_name_input.value != "") {
    $.post("server.js", {
      myMethod: "changeClient",
      client: client_name_input.value,
    }).done(function (data) {
      if (processResponse(data, "array")[0] == undefined) {
        if (
          confirm(
            "Az adatbázisban nincs ilyen személy. Regisztrálja új személyként? (Ok=igen, Mégse=nem)"
          )
        ) {
          newClient();
        }
        if (
          confirm(
            "Szeretné kinyomtatni az Általános Szerződési Feltételeket? (Ok=igen, Mégse=nem)"
          )
        ) {
          docDefinition["content"][12] = [{
            columns: [
              [
                {
                  text: "Gladiátor Team Kft.",
                  bold: true,
                  fontSize: 12
                },
                {
                  text: "www.gladiator-gepkolcsonzo.hu",
                  bold: true,
                  fontSize: 10,
                  decoration: "underline",
                  alignment: "left"
                }
              ],
              {
                text: "Bp., 1047 Váci út 59.    Bp., 1182 Üllői út 541.",
                alignment: "right",
                fontSize: 10
              }
            ],
          },
          {
            text: "\nÁltalános szerződési feltételek",
            alignment: "center",
            bold: true,
            fontSize: 13
          },
          {
            text: [
              {
                text: "\na "
              },
              {
                text: "Gladiátor Team Kft.",
                bold: true
              },
              {
                text: "-től bérbe vett eszközök és azok tartozékaira vonatkozóan:"
              },
              {
                text: "\n\u200B 1. Bérbeadó az eszközt tartozékaival együtt, komplett, üzemképes, a Bérlő jelenlétében kipróbált, sérülésmentes és letisztított állapotban bocsátja a Bérlő rendelkezésére. Az eszköz rendelkezik a szükséges felülvizsgálatokkal, villamos mérésekkel.\n\u200B 2. Bérlő elismeri, hogy az eszközt használó személy rendelkezik az eszköz kezeléséhez szükséges, az idevonatkozó munkavédelmi törvény előírásai szerint érvényes kezelői jogosítvánnyal és szakképesítéssel.\n\u200B 3. Bérlő köteles a bérelt eszközt rendeltetésszerűen, az állagmegóvás követelményeinek eleget téve használni. Az előírások be nem tartása miatt bekövetkezett baleset, anyagi kár esetén a felelősség a Bérlőt terheli.\n\u200B 4. A bérelt eszközök vagyonvédelméről és vagyonbiztosításáról a Bérlő köteles gondoskodni.\n\u200B 5. Bérleti megállapodás a Bérleti Szerződésben foglalt időpontig áll fenn, de azt a Bérlő és a Bérbeadó kölcsönös megállapodással meghosszabbíthatja, új bérleti szerződés megkötése formájában.\n\u200B 6. Bérbeadó jogosult a Bérlőtől az esetleges káresemények fedezetéül letéti díjat kérni.\n\u200B 7. A bérleti idő lejártával a Bérleti Szerződés megszűnik és a Bérlő a bérelt eszközt, azok tartozékait, üzemképes, tiszta állapotban köteles visszaszállítani. Az esetleges meghibásodásokat, sérüléseket az eszköz átadásakor hibafelvételi jegyzőkönyvben rögzítik, amely alapján a Bérbeadónak joga van a Bérlo felé az okozott kárt áthárítani. Amennyiben az okozott kár a letéti díjból nem fedezhető, úgy a Bérlő köteles a fennmaradó kárösszeget megfizetni. \n\u200B 8. A Bérleti Szerződés fennállása alatt a Bérbeadó saját költségén gondoskodik a rendeltetésszerű használat ellenére bekövetkezett hibák javításáról. A javítás idejére a bérleti díjat fizetni nem kell.\n\u200B 9. A bérelt eszköz meghibásodása esetén a Bérbeadó nem vállal felelősséget a Bérlő által elvégzendő munka elkészítéséért, a Bérlő kártérítési igénnyel nem lép fel.\n\u200B 10. A meghibásodás vagy megrongálódás esetén a Bérlő tartozik a bérelt gépet a Bérbeadónak visszaszállítani, vagy a hibát ugyanitt haladéktalanul bejelenteni. Ha a bérelt gép a Bérlőnek felróható okból meghibásodik, megrongálódik (gondatlan kezelés szakszerűtlen munkavégzés, túlterhelés stb.) a Bérlő köteles a javítási költséget, a Bérbeadó egyéb igazolt kárát megtéríteni. A Bérlő a meghibásodott gépet csak a Bérbeadó hozzájárulásával javíthatja vagy javíttathatja.\n\u200B 11. A  Bérbeadó jogosult – a Bérlő háborítása nélkül – a gépe üzemeltetési körülményeit ellenőrizni.\n\u200B 12. A gép használatáért a szerződésben megjelölt díjat számítja fel a Bérbeadó. "
              },
              {
                text: "A számla kiegyenlítése a Gladiátor Team Kft. pénztárába, szerződéskötéskor,  készpénzes fizetés formájában történik.\n\u200B",
                bold: true
              },
              {
                text: "\u200B 13. A bérleti tárgy három órán belüli késedelmes visszaszolgáltatása esetén (minimum egy napi bérlés után) a napi díj 70%-át, három órán túli késés esetén a napi díjat számítja fel a Bérbeadó.\n\u200B 14. Késedelmes fizetés esetén a Bérbeadó kamatot számít fel. A kamat mértéke a mindenkori jegybanki alapkamat kétszerese. \n\u200B 15. Ha a Bérlő a bérleti idő lejártakor a bérelt eszközt és tartozékait felszólítás ellenére sem szállítja vissza, a Bérbeadó jogosult a bérelt eszközt tartozékaival együtt a Bérlőtől elszállítani. Az emiatt felmerült költségek a Bérlőt terhelik.\n\u200B 16. Ha a bérelt eszköz és tartozékainak visszaadása meghiúsul, elvész, megsemmisül, használhatatlanná válik a Bérlő köteles a bérelt eszköz és tartozékainak szerződésben meghatározott értékét, a szerződés lejártától számítva 10 naptári napon belül, megfizetni. \n\u200B 17. A Bérleti Szerződés fennállása alatt a bérelt eszköz és tartozékai másra nem ruházhatók át, nem idegeníthetők el és nem terhelhetők meg. A bérelt eszközt a Bérlő nem adhatja tovább bérletbe. \n\u200B 18. Amennyiben a Bérlő meghatalmazott által eszközt bérel, úgy a Bérlő (cég) aláírásra, cégüket korlátozás nélküli képviselésre jogosult személye kijelenti, hogy az általa meghatalmazott személy Bérlő számára minden tekintetben kötelező érvényű szerződést köt.\n\u200B 19. Amennyiben a Bérleti szerződés Kezes bevonásával jön létre, úgy Kezes kijelenti, hogy számára jelen szerződési feltételek éppoly kötelező érvényűek mint Bérlőre nézve. \n\u200B 20. Felek a Bérleti Szerződésből származó per esetére kikötik a Budapest Központi Bíróság kizárólagos illetékességét."
              }
            ]
          },
          {
            table: {
              widths: ["*", "*", "*"],
              body: [
                [
                  {
                    text: "\n\n\n. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . \nBérlő  (aláírás, szig.szám)\n\n\n\n. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . \nBérbeadó",
                    alignment: "center"
                  },
                  {},
                  {
                    text: "\n\n\n. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . \nBérlő (név, bélyegző)\n\n\n\n. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . \nKezes",
                    alignment: "center"
                  }
                ]
              ]
            },
            layout: "noBorders"
          }];
          pdfDocGenerator = pdfMake.createPdf(docDefinition);
          pdfDocGenerator.getDataUrl((dataUrl) => {
            const targetElement = document.querySelector("#iframeContainer");
            const iframe = document.createElement("iframe");
            iframe.src = dataUrl;
            targetElement.appendChild(iframe);
            document.getElementsByTagName("iframe");
          });
        } else {
          pdfDocGenerator = pdfMake.createPdf(docDefinition);
          pdfDocGenerator.getDataUrl((dataUrl) => {
            const targetElement = document.querySelector("#iframeContainer");
            const iframe = document.createElement("iframe");
            iframe.src = dataUrl;
            targetElement.appendChild(iframe);
            document.getElementsByTagName("iframe");
          });
        }
      } else if (
        guarantor_name_input.value != processResponse(data, "array")[1] ||
        client_addres_input.value != processResponse(data, "array")[2] ||
        guarantor_addres_input.value != processResponse(data, "array")[3] ||
        ID_number_input.value != processResponse(data, "array")[4] ||
        phone_input.value != processResponse(data, "array")[5] ||
        operation_addres_input.value != processResponse(data, "array")[6] ||
        mother_name_input.value != processResponse(data, "array")[7] ||
        date_of_birtht_input.value != processResponse(data, "array")[8]
      ) {
        if (
          confirm(
            "A beírt név adatai nem egyeznek az adatbázisban lévőkkel. Frissíti az adatokat? (Ok=igen, Mégse=nem)"
          )
        ) {
          updateClient();
        }
      }
    });
  }

  if (tool_checkbox.checked && tool_type_input.value != "") {
    $.post("server.js", {
      myMethod: "changeTool",
      tool: tool_type_input.value,
    }).done(function (data) {
      if (processResponse(data, "array")[0] == undefined) {
        if (
          confirm(
            "Az adatbázisban nincs ilyen szerszám. Regisztrálja új szerszámként? (Ok=igen, Mégse=nem)"
          )
        ) {
          newTool();
        }
      } else if (
        tool_wear_per_mm_input.value != processResponse(data, "array")[1] ||
        tool_fee_per_day_input.value != processResponse(data, "array")[2] ||
        tool_fee_per_3h_input.value != processResponse(data, "array")[3]
      ) {
        if (
          confirm(
            "Az beírt szerszám adatai nem egyeznek az adatbázisban lévőkkel. Frissíti az adatokat? (Ok=igen, Mégse=nem)"
          )
        ) {
          updateTool();
        }
      }
    });
  }

  refreshPdf();
}
//#endregion

function refreshPdf() {
  docDefinition["content"][12]["text"] = "";
  ddClientName = client_name_input.value;
  ddClientAddres = client_addres_input.value;
  ddIDNumber = ID_number_input.value;
  ddMotherName_ddDateOfBirth =
    mother_name_input.value + "    " + date_of_birtht_input.value;
  ddPhone = phone_input.value;
  ddGuarantorName = guarantor_name_input.value;
  ddGuarantorAddres = guarantor_addres_input.value;
  ddOperationAddres = operation_addres_input.value;
  if (rent_start_year_input.value != "") {
    ddRentStartYear = rent_start_year_input.value;
  } else {
    ddRentStartYear = ".....";
  }
  if (rent_start_month_input.value != "") {
    ddRentStartMonth = rent_start_month_input.value;
  } else {
    ddRentStartMonth = ".....";
  }
  if (rent_start_day_input.value != "") {
    ddRentStartDay = rent_start_day_input.value;
  } else {
    ddRentStartDay = ".....";
  }
  if (rent_start_hour_input.value != "") {
    ddRentStartHour = rent_start_hour_input.value + " óra";
    if (rent_start_minute_input.value != "") {
      ddRentStartHour += " " + rent_start_minute_input.value + " perc";
    }
  } else {
    ddRentStartHour = "..... óra";
  }
  if (rent_end_year_input.value != "") {
    ddRentEndYear = rent_end_year_input.value;
  } else {
    ddRentEndYear = ".....";
  }
  if (rent_end_month_input.value != "") {
    ddRentEndMonth = rent_end_month_input.value;
  } else {
    ddRentEndMonth = ".....";
  }
  if (rent_end_day_input.value != "") {
    ddRentEndDay = rent_end_day_input.value;
  } else {
    ddRentEndDay = ".....";
  }
  if (rent_end_hour_input.value != "") {
    ddRentEndHour = rent_end_hour_input.value + " óra";
    if (rent_end_minute_input.value != "") {
      ddRentEndHour += " " + rent_end_minute_input.value + " perc";
    }
  } else {
    ddRentEndHour = "..... óra";
  }

  docDefinition["content"][2]["columns"][0]["text"][1]["text"] = ddClientName;
  docDefinition["content"][2]["columns"][0]["text"][5]["text"] = ddClientAddres;
  docDefinition["content"][2]["columns"][0]["text"][8]["text"] = ddIDNumber;
  docDefinition["content"][2]["columns"][1]["text"][5][
    "text"
  ] = ddMotherName_ddDateOfBirth;
  docDefinition["content"][2]["columns"][1]["text"][3]["text"] = ddPhone;
  docDefinition["content"][2]["columns"][2]["text"][1][
    "text"
  ] = ddGuarantorName;
  docDefinition["content"][2]["columns"][2]["text"][4][
    "text"
  ] = ddGuarantorAddres;
  docDefinition["content"][2]["columns"][2]["text"][7][
    "text"
  ] = ddOperationAddres;
  docDefinition["content"][3]["text"][1]["text"] = ddRentStartYear;
  docDefinition["content"][3]["text"][3]["text"] = ddRentStartMonth;
  docDefinition["content"][3]["text"][5]["text"] = ddRentStartDay;
  docDefinition["content"][3]["text"][7]["text"] = ddRentStartHour;
  docDefinition["content"][3]["text"][10]["text"] = ddRentEndYear;
  docDefinition["content"][3]["text"][12]["text"] = ddRentEndMonth;
  docDefinition["content"][3]["text"][14]["text"] = ddRentEndDay;
  docDefinition["content"][3]["text"][16]["text"] = ddRentEndHour;

  docDefinition["content"][4]["table"]["body"][1][4] = ".... x 24h";
  docDefinition["content"][4]["table"]["body"][1][5] = ".... x 3h";
  docDefinition["content"][4]["table"]["body"][1][6]["text"] =
    "..........kedv ..........napra";

  docDefinition["content"][4]["table"]["body"][2][4] = ".... x 24h";
  docDefinition["content"][4]["table"]["body"][2][5] = ".... x 3h";
  docDefinition["content"][4]["table"]["body"][2][6]["text"] =
    "..........kedv ..........napra";

  docDefinition["content"][4]["table"]["body"][3][4] = ".... x 24h";
  docDefinition["content"][4]["table"]["body"][3][5] = ".... x 3h";
  docDefinition["content"][4]["table"]["body"][3][6]["text"] =
    "..........kedv ..........napra";

  docDefinition["content"][4]["table"]["body"][5][3] = ".... x 24h";
  docDefinition["content"][4]["table"]["body"][5][4] = ".... x 3h";

  if (machine_checkbox.checked) {
    if (
      number_of_renting_machines_select.options.namedItem("1-renting-machine")
        .selected
    ) {
      if (machine_type_inputs[0].value != "") {
        completeMachinesFields(1);
      }
    } else if (
      number_of_renting_machines_select.options.namedItem("2-renting-machine")
        .selected
    ) {
      if (machine_type_inputs[0].value != "") {
        completeMachinesFields(1);
      }
      if (machine_type_inputs[1].value != "") {
        completeMachinesFields(2);
      }
    } else if (
      number_of_renting_machines_select.options.namedItem("3-renting-machine")
        .selected
    ) {
      if (machine_type_inputs[0].value != "") {
        completeMachinesFields(1);
      }
      if (machine_type_inputs[1].value != "") {
        completeMachinesFields(2);
      }
      if (machine_type_inputs[2].value != "") {
        completeMachinesFields(3);
      }
    }
  }

  if (tool_checkbox.checked && tool_type_input.value != "") {
    ddToolType = tool_type_input.value;
    ddToolPiece = tool_piece_input.value;
    ddToolWearPerMm = tool_wear_per_mm_input.value;
    if (tool_rent_time_input.value != "") {
      ddToolRentTimeDay = tool_rent_time_input.value + " x 24h";
    } else {
      ddToolRentTimeDay = ".... x 24h";
    }
    if (tool_rent_time_3h_input.value != "") {
      ddToolRentTime3h = tool_rent_time_3h_input.value + " x 3h";
    } else {
      ddToolRentTime3h = ".... x 3h";
    }

    docDefinition["content"][4]["table"]["body"][5][0] = ddToolType;
    docDefinition["content"][4]["table"]["body"][5][1] = ddToolPiece;
    docDefinition["content"][4]["table"]["body"][5][2] = ddToolWearPerMm;
    docDefinition["content"][4]["table"]["body"][5][3] = ddToolRentTimeDay;
    docDefinition["content"][4]["table"]["body"][5][4] = ddToolRentTime3h;
  }

  ddFee = summary_fee_input.value;
  ddFeeDeposit = summary_deposit_input.value;
  ddFeeDepositWithLetters = summary_deposit_with_letters_input.value;
  ddComment = summary_comment_input.value;

  docDefinition["content"][6]["table"]["body"][0][1]["text"] = ddFee;
  docDefinition["content"][6]["table"]["body"][1][1]["text"] = ddFeeDeposit;
  docDefinition["content"][6]["table"]["body"][1][3][
    "text"
  ] = ddFeeDepositWithLetters;
  docDefinition["content"][7]["text"][1]["text"] = ddComment;

  pdfDocGenerator = pdfMake.createPdf(docDefinition);
  pdfDocGenerator.getDataUrl((dataUrl) => {
    const targetElement = document.querySelector("#iframeContainer");
    const iframe = document.createElement("iframe");
    iframe.src = dataUrl;
    targetElement.appendChild(iframe);
    document.getElementsByTagName("iframe");

    //setIframeHeight();
  });
}

function calculateFeeAndDeposit() {
  summary_fee_input.value = "";
  if (machine_checkbox.checked) {
    if (
      number_of_renting_machines_select.options.namedItem("1-renting-machine")
        .selected
    ) {
      if (machine_type_inputs[0].value != "") {
        summary_fee_input.value =
          Number(summary_fee_input.value) + Number(calculateMachineFee(1));
      }
    } else if (
      number_of_renting_machines_select.options.namedItem("2-renting-machine")
        .selected
    ) {
      if (machine_type_inputs[0].value != "") {
        summary_fee_input.value =
          Number(summary_fee_input.value) + Number(calculateMachineFee(1));
      }
      if (machine_type_inputs[1].value != "") {
        summary_fee_input.value =
          Number(summary_fee_input.value) + Number(calculateMachineFee(2));
      }
    } else if (
      number_of_renting_machines_select.options.namedItem("3-renting-machine")
        .selected
    ) {
      if (machine_type_inputs[0].value != "") {
        summary_fee_input.value =
          Number(summary_fee_input.value) + Number(calculateMachineFee(1));
      }
      if (machine_type_inputs[1].value != "") {
        summary_fee_input.value =
          Number(summary_fee_input.value) + Number(calculateMachineFee(2));
      }
      if (machine_type_inputs[2].value != "") {
        summary_fee_input.value =
          Number(summary_fee_input.value) + Number(calculateMachineFee(3));
      }
    }
  }

  if (tool_checkbox.checked && tool_type_input.value != "") {
    summary_fee_input.value =
      Number(summary_fee_input.value) + Number(calculateToolFee());
  }
}

function calculateMachineFee(number) {
  var fee =
    ((upLoadWithZero(machine_rent_time_day_inputs[number - 1].value) -
      upLoadWithZero(machine_discount_day_selects[number - 1].value)) *
      upLoadWithZero(machine_fee_per_day_inputs[number - 1].value) +
      upLoadWithZero(machine_discount_day_selects[number - 1].value) *
      ((upLoadWithZero(machine_fee_per_day_inputs[number - 1].value) / 100) *
        (100 -
          upLoadWithZero(machine_discount_value_inputs[number - 1].value))) +
      upLoadWithZero(machine_fee_per_3h_inputs[number - 1].value) *
      upLoadWithZero(machine_rent_time_3h_inputs[number - 1].value)) *
    upLoadWithOne(machine_piece_inputs[number - 1].value);
  return fee;
}

function upLoadWithZero(input) {
  if (input == "") {
    return 0;
  } else {
    return input.replace(/ /g, "").replace(/,/g, ".");
  }
}

function upLoadWithOne(input) {
  if (input == "") {
    return 1;
  } else {
    return input.replace(/ /g, "").replace(/,/g, ".");
  }
}

function calculateToolFee() {
  var fee =
    upLoadWithZero(tool_rent_time_input.value) *
    upLoadWithZero(tool_fee_per_day_input.value) +
    upLoadWithZero(tool_rent_time_3h_input.value) *
    upLoadWithZero(tool_fee_per_3h_input.value);
  return fee;
}

function completeMachinesFields(number) {
  switch (number) {
    case 1:
      ddMachineType1 = machine_type_inputs[0].value;
      ddMachinePiece1 = machine_piece_inputs[0].value;
      ddMachineAccessories1 = machine_accessories_inputs[0].value;
      ddMachineValue1 = machine_value_inputs[0].value;
      ddMachineRentTime24h1 = machine_rent_time_day_inputs[0].value;
      ddMachineRentTime3h1 = machine_rent_time_3h_inputs[0].value;
      if (
        machine_discount_value_inputs[0].value != "" &&
        machine_discount_day_selects[0].value != ""
      ) {
        ddMachineDiscount1_1 =
          machine_discount_value_inputs[0].value +
          "% kedv\n" +
          machine_discount_day_selects[0].value +
          " napra";
      } else {
        ddMachineDiscount1_1 = "..........kedv ..........napra";
      }

      docDefinition["content"][4]["table"]["body"][1][0] = ddMachineType1;
      docDefinition["content"][4]["table"]["body"][1][1] = ddMachinePiece1;
      docDefinition["content"][4]["table"][
        "body"
      ][1][2] = ddMachineAccessories1;
      docDefinition["content"][4]["table"]["body"][1][3] = ddMachineValue1;
      if (ddMachineRentTime24h1 != "") {
        docDefinition["content"][4]["table"]["body"][1][4] =
          ddMachineRentTime24h1 + " x 24h";
      } else {
        docDefinition["content"][4]["table"]["body"][1][4] = ".... x 24h";
      }
      if (machine_fee_per_day_inputs[0].value != "") {
        docDefinition["content"][4]["table"]["body"][1][4] +=
          "\n24h: " + machine_fee_per_day_inputs[0].value + "Ft";
      } else {
        docDefinition["content"][4]["table"]["body"][1][4] +=
          "\n24h: .......Ft";
      }
      if (ddMachineRentTime3h1 != "") {
        docDefinition["content"][4]["table"]["body"][1][5] =
          ddMachineRentTime3h1 + " x 3h";
      } else {
        docDefinition["content"][4]["table"]["body"][1][5] = ".... x 3h";
      }
      if (machine_fee_per_3h_inputs[0].value != "") {
        docDefinition["content"][4]["table"]["body"][1][5] +=
          "\n3h: " + machine_fee_per_3h_inputs[0].value + "Ft";
      } else {
        docDefinition["content"][4]["table"]["body"][1][5] += "\n3h: .......Ft";
      }
      docDefinition["content"][4]["table"]["body"][1][6][
        "text"
      ] = ddMachineDiscount1_1;

      const pdfDocGenerator = pdfMake.createPdf(docDefinition);
      pdfDocGenerator.getDataUrl((dataUrl) => {
        const targetElement = document.querySelector("#iframeContainer");
        const iframe = document.createElement("iframe");
        iframe.src = dataUrl;
        targetElement.appendChild(iframe);
        document.getElementsByTagName("iframe");
      });
      break;
    case 2:
      ddMachineType2 = machine_type_inputs[1].value;
      ddMachinePiece2 = machine_piece_inputs[1].value;
      ddMachineAccessories2 = machine_accessories_inputs[1].value;
      ddMachineValue2 = machine_value_inputs[1].value;
      ddMachineRentTime24h2 = machine_rent_time_day_inputs[1].value;
      ddMachineRentTime3h2 = machine_rent_time_3h_inputs[1].value;
      if (
        machine_discount_value_inputs[1].value != "" &&
        machine_discount_day_selects[1].value != ""
      ) {
        ddMachineDiscount2_1 =
          machine_discount_value_inputs[1].value +
          "% kedv\n" +
          machine_discount_day_selects[1].value +
          " napra";
      } else {
        ddMachineDiscount2_1 = "..........kedv ..........napra";
      }

      docDefinition["content"][4]["table"]["body"][2][0] = ddMachineType2;
      docDefinition["content"][4]["table"]["body"][2][1] = ddMachinePiece2;
      docDefinition["content"][4]["table"][
        "body"
      ][2][2] = ddMachineAccessories2;
      docDefinition["content"][4]["table"]["body"][2][3] = ddMachineValue2;
      if (ddMachineRentTime24h2 != "") {
        docDefinition["content"][4]["table"]["body"][2][4] =
          ddMachineRentTime24h2 + " x 24h";
      } else {
        docDefinition["content"][4]["table"]["body"][2][4] = ".... x 24h";
      }
      if (machine_fee_per_day_inputs[1].value != "") {
        docDefinition["content"][4]["table"]["body"][2][4] +=
          "\n24h: " + machine_fee_per_day_inputs[1].value + "Ft";
      } else {
        docDefinition["content"][4]["table"]["body"][2][4] +=
          "\n24h: .......Ft";
      }
      if (ddMachineRentTime3h2 != "") {
        docDefinition["content"][4]["table"]["body"][2][5] =
          ddMachineRentTime3h2 + " x 3h";
      } else {
        docDefinition["content"][4]["table"]["body"][2][5] = ".... x 3h";
      }
      if (machine_fee_per_3h_inputs[1].value != "") {
        docDefinition["content"][4]["table"]["body"][2][5] +=
          "\n3h: " + machine_fee_per_3h_inputs[1].value + "Ft";
      } else {
        docDefinition["content"][4]["table"]["body"][2][5] += "\n3h: .......Ft";
      }
      docDefinition["content"][4]["table"]["body"][2][6][
        "text"
      ] = ddMachineDiscount2_1;

      const pdfDocGenerator2 = pdfMake.createPdf(docDefinition);
      pdfDocGenerator2.getDataUrl((dataUrl) => {
        const targetElement2 = document.querySelector("#iframeContainer");
        const iframe2 = document.createElement("iframe");
        iframe2.src = dataUrl;
        targetElement2.appendChild(iframe2);
        document.getElementsByTagName("iframe");
      });
      break;
    case 3:
      ddMachineType3 = machine_type_inputs[2].value;
      ddMachinePiece3 = machine_piece_inputs[2].value;
      ddMachineAccessories3 = machine_accessories_inputs[2].value;
      ddMachineValue3 = machine_value_inputs[2].value;
      ddMachineRentTime24h3 = machine_rent_time_day_inputs[2].value;
      ddMachineRentTime3h3 = machine_rent_time_3h_inputs[2].value;
      if (
        machine_discount_value_inputs[2].value != "" &&
        machine_discount_day_selects[2].value != ""
      ) {
        ddMachineDiscount3_1 =
          machine_discount_value_inputs[2].value +
          "% kedv\n" +
          machine_discount_day_selects[2].value +
          " napra";
      } else {
        ddMachineDiscount3_1 = "..........kedv ..........napra";
      }

      docDefinition["content"][4]["table"]["body"][3][0] = ddMachineType3;
      docDefinition["content"][4]["table"]["body"][3][1] = ddMachinePiece3;
      docDefinition["content"][4]["table"][
        "body"
      ][3][2] = ddMachineAccessories3;
      docDefinition["content"][4]["table"]["body"][3][3] = ddMachineValue3;
      if (ddMachineRentTime24h3 != "") {
        docDefinition["content"][4]["table"]["body"][3][4] =
          ddMachineRentTime24h3 + " x 24h";
      } else {
        docDefinition["content"][4]["table"]["body"][3][4] = ".... x 24h";
      }
      if (machine_fee_per_day_inputs[2].value != "") {
        docDefinition["content"][4]["table"]["body"][3][4] +=
          "\n24h: " + machine_fee_per_day_inputs[2].value + "Ft";
      } else {
        docDefinition["content"][4]["table"]["body"][3][4] +=
          "\n24h: .......Ft";
      }
      if (ddMachineRentTime3h3 != "") {
        docDefinition["content"][4]["table"]["body"][3][5] =
          ddMachineRentTime3h3 + " x 3h";
      } else {
        docDefinition["content"][4]["table"]["body"][3][5] = ".... x 3h";
      }
      if (machine_fee_per_3h_inputs[2].value != "") {
        docDefinition["content"][4]["table"]["body"][3][5] +=
          "\n3h: " + machine_fee_per_3h_inputs[2].value + "Ft";
      } else {
        docDefinition["content"][4]["table"]["body"][3][5] += "\n3h: .......Ft";
      }
      docDefinition["content"][4]["table"]["body"][3][6][
        "text"
      ] = ddMachineDiscount3_1;

      const pdfDocGenerator3 = pdfMake.createPdf(docDefinition);
      pdfDocGenerator3.getDataUrl((dataUrl) => {
        const targetElement3 = document.querySelector("#iframeContainer");
        const iframe3 = document.createElement("iframe");
        iframe3.src = dataUrl;
        targetElement3.appendChild(iframe3);
        document.getElementsByTagName("iframe");
      });
      break;
  }
}

function switchTheme() {
  if (darkTheme == false) {
    darkTheme = true;
    $(".billingo-logo").attr("src", "./images/billingo_logo_white.gif");

    $(":root, .billingo-logo, .footer, .custom-control-label, .preview, :root, .operation-icon, .admin-new-client, .admin-new-machine, .admin-new-tool").css({
      filter: "invert(100%)"
    });

    $(".custom-control-label b, .preview-title").css({
      color: "white"
    });

    $(".custom-control-label b").css({
      "font-weight": "normal"
    });
  } else {
    darkTheme = false;
    $(".billingo-logo").attr("src", "./images/billingo_logo.gif");
    $(":root, .billingo-logo, .footer, .custom-control-label, .preview, .operation-icon, .admin-new-client, .admin-new-machine, .admin-new-tool").css({
      filter: ""
    });

    $(".custom-control-label b, .preview-title").css({
      color: ""
    });

    $(".custom-control-label b").css({
      "font-weight": ""
    });

    $(".operation-icon").css({
      filter: "invert(0%) brightness(0.5) saturate(100%)"
    });
  }
}

function hundred(x) {
  switch (x) {
    case 0:
      return "";
    case 1:
      return "egyszáz";
    case 2:
      return "kettőszáz";
    case 3:
      return "háromszáz";
    case 4:
      return "négyszáz";
    case 5:
      return "ötszáz";
    case 6:
      return "hatszáz";
    case 7:
      return "hétszáz";
    case 8:
      return "nyolcszáz";
    case 9:
      return "kilencszáz";
  }
}

function decimal(x) {
  switch (x) {
    case 0:
      return "";
    case 1:
      return "tizen";
    case 2:
      return "huszon";
    case 3:
      return "harminc";
    case 4:
      return "negyven";
    case 5:
      return "ötven";
    case 6:
      return "hatvan";
    case 7:
      return "hetven";
    case 8:
      return "nyolcvan";
    case 9:
      return "kilencven";
  }
}

function decimal2(x) {
  switch (x) {
    case 0:
      return "";
    case 1:
      return "tíz";
    case 2:
      return "húsz";
    case 3:
      return "harminc";
    case 4:
      return "negyven";
    case 5:
      return "ötven";
    case 6:
      return "hatvan";
    case 7:
      return "hetven";
    case 8:
      return "nyolcvan";
    case 9:
      return "kilencven";
  }
}

function some(x) {
  switch (x) {
    case 0:
      return "";
    case 1:
      return "egy";
    case 2:
      return "kettő";
    case 3:
      return "három";
    case 4:
      return "négy";
    case 5:
      return "öt";
    case 6:
      return "hat";
    case 7:
      return "hét";
    case 8:
      return "nyolc";
    case 9:
      return "kilenc";
  }
}

function convertNumToString(input, output) {
  var checkString = input.value;
  checkString = checkString.replace(/0|1|2|3|4|5|6|7|8|9| /g, "");
  if (checkString != "") {
    output.value = "Hiba!";
  } else {
    var out = "";
    var currentInputVal = input.value;
    currentInputVal = currentInputVal.replace(/ /g, "");

    if (currentInputVal.length > 9) {
      output.value = "Túl hosszú a szám!";
    } else {
      var i = 1;
      // szamjegyszámláló
      var prev = 0;
      // előző számjegy
      while (currentInputVal.length > 0) {
        var p = parseInt(currentInputVal.charAt(currentInputVal.length - 1));
        if (i == 7) out = "millió-" + out;
        if (i == 4) out = "ezer-" + out;
        if (i % 3 == 1) out = some(p) + out;
        if (i % 3 == 2) {
          if (prev == 0) out = decimal2(p) + out;
          else out = decimal(p) + out;
        }
        if (i % 3 == 0) out = hundred(p) + out;
        i++;
        prev = p;
        currentInputVal = currentInputVal.substring(
          0,
          currentInputVal.length - 1
        );
      }
      if (parseInt(input) % 1000000 == 0)
        out = out.substring(0, out.length - 5);
      // ezer- le
      if (out.indexOf("-ezer-") > -1) {
        out =
          out.substring(0, out.indexOf("-ezer-") + 1) +
          out.substring(out.indexOf("-ezer-") + 6, out.length);
      }
      if (out.charAt(out.length - 1) == "-")
        out = out.substring(0, out.length - 1);
      // milliós - le
      output.value = out;
    }
  }
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

function differeneInDays(date1, date2) {
  // To set two dates to two variables

  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  //To display the final no. of days (result)
  return Difference_In_Days;
}

function discountRecommendation() {
  var startYear = rent_start_year_input.value;
  var startMonth = rent_start_month_input.value - 1;
  var startDay = rent_start_day_input.value;
  var endYear = rent_end_year_input.value;
  var endMonth = rent_end_month_input.value - 1;
  var endDay = rent_end_day_input.value;
  var dStart = new Date(startYear, startMonth, startDay);
  var dEnd = new Date(endYear, endMonth, endDay);
  if (
    startYear != "" &&
    endYear != "" &&
    startYear <= endYear &&
    startMonth != "" &&
    endMonth != "" &&
    startDay != "" &&
    endDay != "" &&
    Number(dStart) < Number(dEnd)
  ) {
    if (startMonth != endMonth) {
      endMonth++;
      startMonth++;
    }
    var days = Math.round(differeneInDays(dStart, dEnd));
    $("span").remove();
    for (var i = days; i != 0; i--) {
      var currentDate = new Date(dStart.addDays(i));

      var displayedMonth = currentDate.getMonth();
      displayedMonth++;

      if (currentDate.getDay() == 0) {
        if ($(".discount-info").length == 0) {
          $(".machine-discount").after(
            '<span class="discount-info discount-after"><b><i class="fas fa-info-circle" style="color: royalblue"></i> Kedvezményadáskor az alábbiakat érdemes figyelembe venni: </b><br/></span>'
          );
        }
        $(".discount-info").after(
          '<span class="discount-after"><li>' +
          currentDate.getFullYear() +
          "-" +
          displayedMonth +
          "-" +
          currentDate.getDate() +
          " egy vasárnapi nap (100% kedv.)</li></span>"
        );
      }

      if (
        holidays[
        currentDate.getFullYear() +
        "-" +
        displayedMonth +
        "-" +
        currentDate.getDate()
        ] != undefined
      ) {
        if ($(".discount-info").length == 0) {
          $(".machine-discount").after(
            '<span class="discount-info discount-after"><b><i class="fas fa-info-circle"></i>Kedvezményadáskor az alábbiakat érdemes figyelembe venni: </b></span>'
          );
        }
        $(".discount-info").after(
          '<span class="discount-after"><li>' +
          currentDate.getFullYear() +
          "-" +
          displayedMonth +
          "-" +
          currentDate.getDate() +
          ": " +
          holidays[
          currentDate.getFullYear() +
          "-" +
          displayedMonth +
          "-" +
          currentDate.getDate()
          ] +
          " (50% kedv.)</li></span>"
        );
      }
    }
    if (days > 5) {
      if ($(".discount-info").length == 0) {
        $(".machine-discount").after(
          '<span class="discount-info discount-after"><b><i class="fas fa-info-circle" style="color: royalblue"></i>Kedvezményadáskor az alábbiakat érdemes figyelembe venni: </b></span>'
        );
      }
      $(".discount-info").after(
        '<span class="discount-after"><li>5 napot meghaladó folyamatos bérlés (10% kedv.)</li></span>'
      );
    }
  }
}

function isRentingMachineOrTool() {
  if (machine_checkbox.checked) {
    $(".machine").show();
  } else {
    $(".machine").hide();
  }
  if (tool_checkbox.checked) {
    $(".tool").show();
  } else {
    $(".tool").hide();
  }
}
function changeNumberOfMachines() {
  if (
    number_of_renting_machines_select.options.namedItem("1-renting-machine")
      .selected
  ) {
    $(".rental-machine-1").show();
    $(".rental-machine-2").hide();
    $(".rental-machine-3").hide();
  } else if (
    number_of_renting_machines_select.options.namedItem("2-renting-machine")
      .selected
  ) {
    $(".rental-machine-1").show();
    $(".rental-machine-2").show();
    $(".rental-machine-3").hide();
  } else if (
    number_of_renting_machines_select.options.namedItem("3-renting-machine")
      .selected
  ) {
    $(".rental-machine-1").show();
    $(".rental-machine-2").show();
    $(".rental-machine-3").show();
  }
}
function resetPage() {
  if (
    confirm("Biztosan újratöltöd a lapot? Minden beírt adat el fog veszni.")
  ) {
    location.reload();
  }
}

function charCount(str, letter) {
  var letterCount = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}

function processResponse(data, outputType) {
  var dataArray = [];
  var lastNumber = 0;
  var dataHtml = "";
  for (var dataNumber = 0; dataNumber != charCount(data, ":"); dataNumber++) {
    lastNumber = data.indexOf(":", lastNumber + 1);
    var toBePushed = data.slice(
      data.indexOf(":", lastNumber) + 2,
      data.indexOf('"', lastNumber + 2)
    );
    if (toBePushed == "ull," || toBePushed == "ull}") {
      toBePushed = "";
    }
    dataArray.push(toBePushed);
    dataHtml += '<option value="' + dataArray[dataNumber] + '" />';
    // Storing options in variable
  }
  if (outputType == "array") {
    return dataArray;
  } else if (outputType == "html") {
    return dataHtml;
  } else {
    return "err";
  }
}

function changeClient() {
  $.post("server.js", {
    myMethod: "changeClient",
    client: client_name_input.value,
  }).done(function (data) {
    if (processResponse(data, "array")[0] != undefined) {
      guarantor_name_input.value = processResponse(data, "array")[1];
      client_addres_input.value = processResponse(data, "array")[2];
      guarantor_addres_input.value = processResponse(data, "array")[3];
      ID_number_input.value = processResponse(data, "array")[4];
      phone_input.value = processResponse(data, "array")[5];
      operation_addres_input.value = processResponse(data, "array")[6];
      mother_name_input.value = processResponse(data, "array")[7];
      date_of_birtht_input.value = processResponse(data, "array")[8];
    }
  });
}

function changeMachine(number) {
  $.post("server.js", {
    myMethod: "changeMachine",
    machine: machine_type_inputs[number - 1].value,
  }).done(function (data) {
    if (processResponse(data, "array")[0] != undefined) {
      machine_value_inputs[number - 1].value = processResponse(
        data,
        "array"
      )[1];
      machine_fee_per_day_inputs[number - 1].value = processResponse(
        data,
        "array"
      )[2];
      machine_fee_per_3h_inputs[number - 1].value = processResponse(
        data,
        "array"
      )[3];
    }
  });
}

function changeAccessorie(number) {
  $.post("server.js", {
    myMethod: "changeAccessorie",
    accessorie: machine_accessories_inputs[number - 1].value,
  }).done(function (data) { });
}

function changeTool() {
  $.post("server.js", {
    myMethod: "changeTool",
    tool: tool_type_input.value,
  }).done(function (data) {
    if (processResponse(data, "array")[0] != undefined) {
      tool_wear_per_mm_input.value = processResponse(data, "array")[1];
      tool_fee_per_day_input.value = processResponse(data, "array")[2];
      tool_fee_per_3h_input.value = processResponse(data, "array")[3];
    }
  });
}

function showAdmin() {
  refreshAdminClients();
  refreshAdminMachines();
  refreshAdminTools();
  if (admin == true) {
    $(".page-container").hide();
    $(".preview").hide();
    $(".admin").show();
    $(".admin-select").show();
    admin = false;
  } else {
    $(".page-container").show();
    $(".preview").show();
    $(".admin").hide();
    $(".admin-select").hide();
    admin = true;
  }
  showAdminOption(0);
}

function showAdminOption(adminOption) {
  if (adminOption == 2) {
    $(".admin-list-tools, .admin-new-tool").show();
    $(".admin-list-machines, .admin-list-clients, .admin-new-client, .admin-new-machine").hide();
    $(".admin-select-option-2").addClass("current");
    $(".admin-select-option-1, .admin-select-option-0").removeClass("current");
  } else if (adminOption == 1) {
    $(".admin-list-tools, .admin-list-clients, .admin-new-client, .admin-new-tool").hide();
    $(".admin-list-machines, .admin-new-machine").show();
    $(".admin-select-option-1").addClass("current");
    $(".admin-select-option-2, .admin-select-option-0").removeClass("current");
  } else {
    $(".admin-list-tools, .admin-list-machines, .admin-new-machine, .admin-new-tool").hide();
    $(".admin-list-clients, .admin-new-client").show();
    $(".admin-select-option-0").addClass("current");
    $(".admin-select-option-2, .admin-select-option-1").removeClass("current");
  }
}

function upLoadAdminClients(array) {
  for (var i = 0; i != array.length; i++) {
    $.post("server.js", {
      myMethod: "changeClient",
      client: array[i],
    }).done(function (data) {
      if (processResponse(data, "array")[0] != undefined) {
        $(".admin-table-clients").append(
          "<tr><td>" +
          processResponse(data, "array")[0] +
          "</td><td>" +
          processResponse(data, "array")[1] +
          "</td><td>" +
          processResponse(data, "array")[2] +
          "</td><td>" +
          processResponse(data, "array")[3] +
          "</td><td>" +
          processResponse(data, "array")[4] +
          "</td><td>" +
          processResponse(data, "array")[5] +
          "</td><td>" +
          processResponse(data, "array")[6] +
          "</td><td>" +
          processResponse(data, "array")[7] +
          "</td><td>" +
          processResponse(data, "array")[8] +
          '</td><td><img class="operation-icon first" src="images/icon_edit.png" onclick="showEditFromAdminClients(this)"/><img class="operation-icon last" src="images/icon_delete.png" onclick="deleteFromAdminClients(this)"/></td>'
        );
      }
    });
  }
}

function upLoadAdminMachines(array) {
  for (var i = 0; i != array.length; i++) {
    $.post("server.js", {
      myMethod: "changeMachine",
      machine: array[i],
    }).done(function (data) {
      if (processResponse(data, "array")[0] != undefined) {
        $(".admin-table-machines").append(
          "<tr><td>" +
          processResponse(data, "array")[0] +
          "</td><td>" +
          processResponse(data, "array")[1] +
          "</td><td>" +
          processResponse(data, "array")[2] +
          "</td><td>" +
          processResponse(data, "array")[3] +
          '</td><td><img class="operation-icon first" src="images/icon_edit.png" onclick="showEditFromAdminMachines(this)"/><img class="operation-icon last" src="images/icon_delete.png" onclick="deleteFromAdminMachines(this)"/></td>'
        );
      }
    });
  }
}

function upLoadAdminTools(array) {
  for (var i = 0; i != array.length; i++) {
    $.post("server.js", {
      myMethod: "changeTool",
      tool: array[i],
    }).done(function (data) {
      if (processResponse(data, "array")[0] != undefined) {
        $(".admin-table-tools").append(
          "<tr><td>" +
          processResponse(data, "array")[0] +
          "</td><td>" +
          processResponse(data, "array")[1] +
          "</td><td>" +
          processResponse(data, "array")[2] +
          "</td><td>" +
          processResponse(data, "array")[3] +
          '</td><td><img class="operation-icon first" src="images/icon_edit.png" onclick="showEditFromAdminTools(this)"/><img class="operation-icon last" src="images/icon_delete.png" onclick="deleteFromAdminTools(this)"/></td>'
        );
      }
    });
  }
}

function deleteFromAdminClients(caller) {
  if (confirm("Biztosan törli az ügyfelet? (Ok=igen, Mégse=nem)")) {
    $.post("server.js", {
      myMethod: "deleteClient",
      client: caller.parentNode.parentNode.childNodes[0].innerHTML,
    });
    refreshAdminClients();
  }
}

function deleteFromAdminMachines(caller) {
  if (confirm("Biztosan törli a gépet? (Ok=igen, Mégse=nem)")) {
    $.post("server.js", {
      myMethod: "deleteMachine",
      machine: caller.parentNode.parentNode.childNodes[0].innerHTML,
    });
    caller.parentNode.parentNode.remove();
  }
}

function deleteFromAdminTools(caller) {
  if (confirm("Biztosan törli a szerszámot/kopóeszközt? (Ok=igen, Mégse=nem)")) {
    $.post("server.js", {
      myMethod: "deleteTool",
      tool: caller.parentNode.parentNode.childNodes[0].innerHTML,
    });
    caller.parentNode.parentNode.remove();
  }
}

function showEditFromAdminClients(caller) {
  $(".admin-select, .admin-view-clients, .admin-new-client").hide();
  $(".admin-edit-clients").show();
  editingElement = caller.parentNode.parentNode.childNodes[0].innerHTML;
  $.post("server.js", {
    myMethod: "changeClient",
    client: editingElement
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    client_name_input_edit.value = dataArray[0];
    guarantor_name_input_edit.value = dataArray[1];
    client_addres_input_edit.value = dataArray[2];
    guarantor_addres_input_edit.value = dataArray[3];
    ID_number_input_edit.value = dataArray[4];
    phone_input_edit.value = dataArray[5];
    operation_addres_input_edit.value = dataArray[6];
    mother_name_input_edit.value = dataArray[7];
    date_of_birtht_input_edit.value = dataArray[8];
  });
}

function showEditFromAdminMachines(caller) {
  $(".admin-select, .admin-view-machines, .admin-new-machine").hide();
  $(".admin-edit-machines").show();
  editingElement = caller.parentNode.parentNode.childNodes[0].innerHTML;
  $.post("server.js", {
    myMethod: "changeMachine",
    machine: editingElement
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    machine_type_input_edit.value = dataArray[0];
    machine_value_input_edit.value = dataArray[1];
    machine_fee_per_day_input_edit.value = dataArray[2];
    machine_fee_per_3h_input_edit.value = dataArray[3];
  });
}

function showEditFromAdminTools(caller) {
  $(".admin-select, .admin-view-tools, .admin-new-tool").hide();
  $(".admin-edit-tools").show();
  editingElement = caller.parentNode.parentNode.childNodes[0].innerHTML;
  $.post("server.js", {
    myMethod: "changeTool",
    tool: editingElement
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    tool_type_input_edit.value = dataArray[0];
    tool_wear_per_mm_input_edit.value = dataArray[1];
    tool_fee_per_day_input_edit.value = dataArray[2];
    tool_fee_per_3h_input_edit.value = dataArray[3];
  });
}

function showAddFromAdminClients(caller) {
  $(".admin-select, .admin-view-clients, .admin-new-client").hide();
  $(".admin-add-clients").show();
  client_name_input_edit.value =
    guarantor_name_input_edit.value =
    client_addres_input_edit.value =
    guarantor_addres_input_edit.value =
    ID_number_input_edit.value =
    phone_input_edit.value =
    operation_addres_input_edit.value =
    mother_name_input_edit.value =
    date_of_birtht_input_edit.value = "";
}

function showAddFromAdminMachines(caller) {
  $(".admin-select, .admin-view-machines, .admin-new-machine").hide();
  $(".admin-add-machines").show();
  machine_type_input_edit.value =
    machine_value_input_edit.value =
    machine_fee_per_day_input_edit.value =
    machine_fee_per_3h_input_edit.value = "";
}

function showAddFromAdminTools(caller) {
  $(".admin-select, .admin-view-tools, .admin-new-tool").hide();
  $(".admin-add-tools").show();
  tool_type_input_edit.value =
    tool_wear_per_mm_input_edit.value =
    tool_fee_per_day_input_edit.value =
    tool_fee_per_3h_input_edit.value = "";
}

function dontSaveEditedClient() {
  $(".admin-select, .admin-view-clients, .admin-new-client").show();
  $(".admin-edit-clients").hide();
  editingElement = "";
  client_name_input_edit.value =
    guarantor_name_input_edit.value =
    client_addres_input_edit.value =
    guarantor_addres_input_edit.value =
    ID_number_input_edit.value =
    phone_input_edit.value =
    operation_addres_input_edit.value =
    mother_name_input_edit.value =
    date_of_birtht_input_edit.value = "";
  refreshAdminClients();
}

function dontSaveEditedMachine() {
  $(".admin-select, .admin-view-machines, .admin-new-machine").show();
  $(".admin-edit-machines").hide();
  editingElement =
    machine_type_input_edit.value =
    machine_value_input_edit.value =
    machine_fee_per_day_input_edit.value =
    machine_fee_per_3h_input_edit.value = "";
  refreshAdminMachines();
}

function dontSaveEditedTool() {
  $(".admin-select, .admin-view-tools, .admin-new-tool").show();
  $(".admin-edit-tools").hide();
  editingElement =
    tool_type_input_edit.value =
    tool_wear_per_mm_input_edit.value =
    tool_fee_per_day_input_edit.value =
    tool_fee_per_3h_input_edit.value = "";
  refreshAdminMachines();
}

function saveEditedMachine() {
  var exit = false;
  $.post("server.js", {
    myMethod: "startDataMachines",
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    for (var i = 0; i != dataArray.length; i++) {
      if (dataArray[i] == machine_type_input_edit.value && machine_type_input_edit.value != editingElement) {
        alert("Hiba: Az adatbázisban már van ilyen nevű gép!");
        exit = true;
      }
    }
    if (machine_type_input_edit.value.replace(/ /g, "") == "") {
      alert("Hiba: A gép neve nem lehet üres!");
      exit = true;
    }
    if (exit == false) {
      $.post("server.js", {
        myMethod: "deleteMachine",
        machine: editingElement,
      }).done(function (data) {
      });
      $.post("server.js", {
        myMethod: "newMachine",
        machine: machine_type_input_edit.value,
        machineValue: machine_value_input_edit.value,
        machineFeePerDay: machine_fee_per_day_input_edit.value,
        machineFeePer3h: machine_fee_per_3h_input_edit.value
      });
      editingElement =
        machine_type_input_edit.value =
        machine_value_input_edit.value =
        machine_fee_per_day_input_edit.value =
        machine_fee_per_3h_input_edit.value = "";
      refreshAdminMachines();
      $(".admin-view-machines, .admin-new-machine, .admin-select").show();
      $(".admin-edit-machines").hide();
    }
  });
}

function saveEditedClient() {
  var exit = false;
  $.post("server.js", {
    myMethod: "startDataClients",
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    for (var i = 0; i != dataArray.length; i++) {
      if (dataArray[i] == client_name_input_edit.value && client_name_input_edit.value != editingElement) {
        alert("Hiba: Az adatbázisban már van ilyen nevű ügyfél!");
        exit = true;
      }
    }
    if (client_name_input_edit.value.replace(/ /g, "") == "") {
      alert("Hiba: Az ügyfél neve nem lehet üres!");
      exit = true;
    }
    if (exit == false) {
      $.post("server.js", {
        myMethod: "deleteClient",
        client: editingElement,
      });
      $.post("server.js", {
        myMethod: "newClient",
        client: client_name_input_edit.value,
        guarantorName: guarantor_name_input_edit.value,
        clientAddres: client_addres_input_edit.value,
        guarantorAddres: guarantor_addres_input_edit.value,
        IDNumber: ID_number_input_edit.value,
        phone: phone_input_edit.value,
        operationAddres: operation_addres_input_edit.value,
        motherName: mother_name_input_edit.value,
        dateOfBirth: date_of_birtht_input_edit.value
      });
      editingElement =
        client_name_input_edit.value =
        guarantor_name_input_edit.value =
        client_addres_input_edit.value =
        guarantor_addres_input_edit.value =
        ID_number_input_edit.value =
        phone_input_edit.value =
        operation_addres_input_edit.value =
        mother_name_input_edit.value =
        date_of_birtht_input_edit.value = "";
      refreshAdminClients();
      $(".admin-view-clients, .admin-new-client, .admin-select").show();
      $(".admin-edit-clients").hide();
    }
  });
}

function saveEditedTool() {
  var exit = false;
  $.post("server.js", {
    myMethod: "startDataTools",
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    for (var i = 0; i != dataArray.length; i++) {
      if (dataArray[i] == tool_type_input_edit.value && tool_type_input_edit.value != editingElement) {
        alert("Hiba: Az adatbázisban már van ilyen nevű szerszám/kopóeszköz!");
        exit = true;
      }
    }
    if (tool_type_input_edit.value.replace(/ /g, "") == "") {
      alert("Hiba: A szerszám/kopóeszköz neve nem lehet üres!");
      exit = true;
    }
    if (exit == false) {
      $.post("server.js", {
        myMethod: "deleteTool",
        tool: editingElement,
      });
      $.post("server.js", {
        myMethod: "newTool",
        tool: tool_type_input_edit.value,
        toolWearPerMm: tool_wear_per_mm_input_edit.value,
        toolFeePerDay: tool_fee_per_day_input_edit.value,
        toolFeePer3h: tool_fee_per_3h_input_edit.value
      });
      editingElement =
        tool_type_input_edit.value =
        tool_wear_per_mm_input_edit.value =
        tool_fee_per_day_input_edit.value =
        tool_fee_per_3h_input_edit.value = "";
      refreshAdminTools();
      $(".admin-select, .admin-view-tools, .admin-new-tool").show();
      $(".admin-edit-tools").hide();
    }
  });
}


function addClientFromAdmin() {
  var exit = false;
  $.post("server.js", {
    myMethod: "startDataClients",
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    for (var i = 0; i != dataArray.length; i++) {
      if (dataArray[i] == client_name_input_add.value) {
        alert("Hiba: Az adatbázisban már van ilyen nevű ügyfél!");
        exit = true;
      }
    }
    if (client_name_input_add.value.replace(/ /g, "") == "") {
      alert("Hiba: Az ügyfél neve nem lehet üres!");
      exit = true;
    }
    if (exit == false) {
      $.post("server.js", {
        myMethod: "newClient",
        client: client_name_input_add.value,
        guarantorName: guarantor_name_input_add.value,
        clientAddres: client_addres_input_add.value,
        guarantorAddres: guarantor_addres_input_add.value,
        IDNumber: ID_number_input_add.value,
        phone: phone_input_add.value,
        operationAddres: operation_addres_input_add.value,
        motherName: mother_name_input_add.value,
        dateOfBirth: date_of_birtht_input_add.value
      });
      client_name_input_add.value =
        guarantor_name_input_add.value =
        client_addres_input_add.value =
        guarantor_addres_input_add.value =
        ID_number_input_add.value =
        phone_input_add.value =
        operation_addres_input_add.value =
        mother_name_input_add.value =
        date_of_birtht_input_add.value = "";
      refreshAdminClients();
      $(".admin-view-clients, .admin-new-client, .admin-select").show();
      $(".admin-add-clients").hide();
    }
  });
}

function addMachineFromAdmin() {
  var exit = false;
  $.post("server.js", {
    myMethod: "startDataMachines",
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    for (var i = 0; i != dataArray.length; i++) {
      if (dataArray[i] == machine_type_input_add.value) {
        alert("Hiba: Az adatbázisban már van ilyen nevű gép!");
        exit = true;
      }
    }
    if (machine_type_input_add.value.replace(/ /g, "") == "") {
      alert("Hiba: A gép neve nem lehet üres!");
      exit = true;
    }
    if (exit == false) {
      $.post("server.js", {
        myMethod: "newMachine",
        machine: machine_type_input_add.value,
        machineValue: machine_value_input_add.value,
        machineFeePerDay: machine_fee_per_day_input_add.value,
        machineFeePer3h: machine_fee_per_3h_input_add.value
      });
      editingElement =
        machine_type_input_add.value =
        machine_value_input_add.value =
        machine_fee_per_day_input_add.value =
        machine_fee_per_3h_input_add.value = "";
      refreshAdminMachines();
      $(".admin-view-machines, .admin-new-machine, .admin-select").show();
      $(".admin-add-machines").hide();
    }
  });
}

function addToolFromAdmin() {
  var exit = false;
  $.post("server.js", {
    myMethod: "startDataTools",
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    for (var i = 0; i != dataArray.length; i++) {
      if (dataArray[i] == tool_type_input_add.value) {
        alert("Hiba: Az adatbázisban már van ilyen nevű szerszám/kopóeszköz!");
        exit = true;
      }
    }
    if (tool_type_input_add.value.replace(/ /g, "") == "") {
      alert("Hiba: A szerszám/kopóeszköz neve nem lehet üres!");
      exit = true;
    }
    if (exit == false) {
      $.post("server.js", {
        myMethod: "newTool",
        tool: tool_type_input_add.value,
        toolWearPerMm: tool_wear_per_mm_input_add.value,
        toolFeePerDay: tool_fee_per_day_input_add.value,
        toolFeePer3h: tool_fee_per_3h_input_add.value
      });
      editingElement =
        tool_type_input_add.value =
        tool_wear_per_mm_input_add.value =
        tool_fee_per_day_input_add.value =
        tool_fee_per_3h_input_add.value = "";
      refreshAdminTools();
      $(".admin-view-tools, .admin-new-tool, .admin-select").show();
      $(".admin-add-tools").hide();
    }
  });
}

function dontAddClientFromAdmin() {
  $(".admin-view-clients, .admin-new-client, .admin-select").show();
  $(".admin-add-clients").hide();
  client_name_input_add.value =
    guarantor_name_input_add.value =
    client_addres_input_add.value =
    guarantor_addres_input_add.value =
    ID_number_input_add.value =
    phone_input_add.value =
    operation_addres_input_add.value =
    mother_name_input_add.value =
    date_of_birtht_input_add.value = "";
  refreshAdminClients();
}

function dontAddMachineFromAdmin() {
  $(".admin-view-machines, .admin-new-machine, .admin-select").show();
  $(".admin-add-machines").hide();
  machine_type_input_add.value =
    machine_value_input_add.value =
    machine_fee_per_day_input_add.value =
    machine_fee_per_3h_input_add.value = "";
  refreshAdminMachines();
}

function dontAddToolFromAdmin() {
  $(".admin-view-tools, .admin-new-tool, .admin-select").show();
  $(".admin-add-tools").hide();
  editingElement =
    tool_type_input_edit.value =
    tool_wear_per_mm_input_edit.value =
    tool_fee_per_day_input_edit.value =
    tool_fee_per_3h_input_edit.value = "";
  refreshAdminTools();
}

function refreshAdminClients() {
  const myNode = document.getElementById("admin-table-clients");
  myNode.innerHTML =
    '<tr><th class="table-title-clients">Bérlő neve</th><th class="table-title-clients">Meghatalmazott/kezes</th><th class="table-title-clients">Címe (bérlő)</th><th class="table-title-clients">Címe (meghatalmazott/kezes)</th><th class="table-title-clients">Sz. ig. szám</th><th class="table-title-clients">Tel.</th><th class="table-title-clients">Gép üzemeltetési helye</th><th class="table-title-clients">Anyja neve</th><th class="table-title-clients">Születési dátum</th><th class="table-title-clients last">Műveletek</th></tr>';
  $.post("server.js", {
    myMethod: "startDataClients",
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    upLoadAdminClients(dataArray);
  });
  $.post("server.js", {
    myMethod: "startDataClients",
  }).done(function (data) {
    var dataHtml = processResponse(data, "html");
    client_name_select.innerHTML = dataHtml;
  });
}

function refreshAdminMachines() {
  const myNode = document.getElementById("admin-table-machines");
  myNode.innerHTML =
    '<tr><th class="table-title-machines">Gép neve</th><th class="table-title-machines">Bérleti tárgy nettó értéke (Ft)</th><th class="table-title-machines">Napi díj (Ft)</th><th class="table-title-machines ">3 órás (Ft)</th><th class="table-title-machines last">Műveletek</th></tr>';
  $.post("server.js", {
    myMethod: "startDataMachines",
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    upLoadAdminMachines(dataArray);
  });
  $.post("server.js", {
    myMethod: "startDataMachines",
  }).done(function (data) {
    var dataHtml = processResponse(data, "html");
    machine_type_selects[0].innerHTML =
      machine_type_selects[1].innerHTML =
      machine_type_selects[2].innerHTML = dataHtml;
  });
}

function refreshAdminTools() {
  const myNode = document.getElementById("admin-table-tools");
  myNode.innerHTML =
    '<tr><th class="table-title-tools">Szerszám/kopóeszköz neve</th><th class="table-title-tools">Kopásdíj (Ft/mm)</th><th class="table-title-tools">Napi díj (Ft)</th><th class="table-title-tools ">3 órás (Ft)</th><th class="table-title-tools last">Műveletek</th></tr>';
  $.post("server.js", {
    myMethod: "startDataTools",
  }).done(function (data) {
    var dataArray = processResponse(data, "array");
    upLoadAdminTools(dataArray);
  });
  $.post("server.js", {
    myMethod: "startDataTools",
  }).done(function (data) {
    var dataHtml = processResponse(data, "html");
    tool_type_select.innerHTML = dataHtml;
  });
}

$(document).ready(function () {
  isRentingMachineOrTool();
  changeNumberOfMachines();

  $.post("server.js", {
    myMethod: "startDataClients",
  }).done(function (data) {
    var dataHtml = processResponse(data, "html");
    client_name_select.innerHTML = dataHtml;
  });

  $.post("server.js", {
    myMethod: "startDataMachines",
  }).done(function (data) {
    var dataHtml = processResponse(data, "html");
    machine_type_selects[0].innerHTML = dataHtml;
    machine_type_selects[1].innerHTML = dataHtml;
    machine_type_selects[2].innerHTML = dataHtml;
  });

  $.post("server.js", {
    myMethod: "startDataAccessories",
  }).done(function (data) {
    var dataHtml = processResponse(data, "html");
    machine_accessories_type_selects[0].innerHTML = dataHtml;
    machine_accessories_type_selects[1].innerHTML = dataHtml;
    machine_accessories_type_selects[2].innerHTML = dataHtml;
  });

  $.post("server.js", {
    myMethod: "startDataTools",
  }).done(function (data) {
    var dataHtml = processResponse(data, "html");
    tool_type_select.innerHTML = dataHtml;
  });

  refreshPdf();
});