"use strict";

// SLIP Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdNB9rHCk84RWeHL65eQt6Vf4yVuaDVLU",
  authDomain: "slip-special-needs-service.firebaseapp.com",
  databaseURL: "https://slip-special-needs-service-default-rtdb.firebaseio.com",
  projectId: "slip-special-needs-service",
  storageBucket: "slip-special-needs-service.appspot.com",
  messagingSenderId: "562781119842",
  appId: "1:562781119842:web:560af6facdb9c7d5f2f83b",
};

const other = document.querySelector(".clean"),
  food = document.querySelector(".food"),
  transp = document.querySelector(".transp"),
  doc = document.querySelector(".doc"),
  overlay = document.querySelector(".overlay"),
  closeEl = document.querySelectorAll(".close"),
  mainModal = document.querySelectorAll(".modal"),
  otherModal = document.querySelector(".other"),
  foodModal = document.querySelector(".food-m"),
  docModal = document.querySelector(".doc-m"),
  transpModal = document.querySelector(".prevoz"),
  openModal = (e) => {
    e.classList.add("open"), overlay.classList.add("open");
  },
  closeModal = () => {
    mainModal.forEach((e) => e.classList.remove("open")),
      overlay.classList.remove("open"),
      success.forEach((e) => {
        (e.style.opacity = 0), (e.style.pointerEvents = "none");
      }),
      fail.forEach((e) => {
        (e.style.opacity = 0), (e.style.pointerEvents = "none");
      });
  };
closeEl.forEach((e) => {
  e.addEventListener("click", closeModal);
}),
  other.addEventListener("click", function () {
    openModal(otherModal);
  }),
  food.addEventListener("click", function () {
    openModal(foodModal);
  }),
  transp.addEventListener("click", function () {
    openModal(transpModal);
  }),
  doc.addEventListener("click", function () {
    openModal(docModal);
  }),
  overlay.addEventListener("click", closeModal),
  document.addEventListener("keydown", function (e) {
    "Escape" === e.key && closeModal();
  });
const success = document.querySelectorAll(".success"),
  fail = document.querySelectorAll(".fail"),
  otherName = document.querySelector(".other_ime"),
  otherPrezime = document.querySelector(".other_prezime"),
  otherAddr = document.querySelector(".other_adresa"),
  otherUsluga = document.querySelector(".other_usluga"),
  otherTel = document.querySelector(".other_tel"),
  otherBtn = document.querySelector(".other_check"),
  foodName = document.querySelector(".food_ime"),
  foodPrezime = document.querySelector(".food_prezime"),
  foodAddr = document.querySelector(".food_adresa"),
  foodUsluga = document.querySelector(".food_usluga"),
  foodTel = document.querySelector(".food_tel"),
  foodBtn = document.querySelector(".food_check"),
  prevozName = document.querySelector(".prevoz_ime"),
  prevozPrezime = document.querySelector(".prevoz_prezime"),
  prevozAddr = document.querySelector(".prevoz_adresa"),
  prevozUsluga = document.querySelector(".prevoz_usluga"),
  prevozTel = document.querySelector(".prevoz_tel"),
  prevozBtn = document.querySelector(".prevoz_check"),
  docName = document.querySelector(".doc_ime"),
  docPrezime = document.querySelector(".doc_prezime"),
  docAddr = document.querySelector(".doc_adresa"),
  docUsluga = document.querySelector(".doc_usluga"),
  docTel = document.querySelector(".doc_tel"),
  docBtn = document.querySelector(".doc_check"),
  showSuccess = () => {
    success.forEach((e) => {
      (e.style.opacity = 1), (e.style.pointerEvents = "auto");
    }),
      fail.forEach((e) => {
        (e.style.opacity = 0), (e.style.pointerEvents = "none");
      });
  },
  showFail = () => {
    fail.forEach((e) => {
      (e.style.opacity = 1), (e.style.pointerEvents = "auto");
    }),
      success.forEach((e) => {
        (e.style.opacity = 0), (e.style.pointerEvents = "none");
      });
  },
  test = function (e, o, t, r, c) {
    if (
      "" == e.value ||
      "" == o.value ||
      "" == t.value ||
      "" == r.value ||
      "" == c.value
    ) {
      showFail();
    } else {
      showSuccess();
      saveMessages(e.value, o.value, t.value, r.value, c.value);
    }
  };

const saveMessages = (ime, prezime, adresa, tip, tel) => {
  let newOrderForm = SLIPFormDB.push();

  newOrderForm.set({
    ime: ime,
    prezime: prezime,
    adresa: adresa,
    tip: tip,
    tel: tel,
  });
};

// init Firebase service
firebase.initializeApp(firebaseConfig);

let prevozSvc = false;
// database ref
var SLIPFormDB = firebase.database().ref("SLIP-Form");

otherBtn.addEventListener("click", function (e) {
  e.preventDefault(),
    test(otherName, otherPrezime, otherAddr, otherUsluga, otherTel);
}),
  foodBtn.addEventListener("click", function (e) {
    e.preventDefault(),
      test(foodName, foodPrezime, foodAddr, foodUsluga, foodTel);
  }),
  prevozBtn.addEventListener("click", function (e) {
    e.preventDefault(),
      test(prevozName, prevozPrezime, prevozAddr, prevozUsluga, prevozTel);
  }),
  docBtn.addEventListener("click", function (e) {
    e.preventDefault(), test(docName, docPrezime, docAddr, docUsluga, docTel);
  });

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//TimeListener - checking the time of the day, and adjusting the greetings accordingly
var danas = new Date();
var trenSati = danas.getHours();
const timeListener = document.querySelector(".time-welcome");

if (trenSati < 12) {
  timeListener.textContent = "Dobro jutro,";
} else if (trenSati < 18) {
  timeListener.textContent = "Dobar dan,";
} else {
  timeListener.textContent = "Dobro veče,";
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// id:

//FORM - orderForm

// ime
// prezime
// adresa
// tel

// other_tip
// food_tip
// prevoz_destinacija
// doc_tip
