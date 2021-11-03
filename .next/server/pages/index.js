module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massageie a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");

var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\components\\ChallengeBox.tsx";




function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__["ChallengesContext"]);
  const {
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_4__["CountdownContext"]);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `icons/${activeChallenge.type}.svg`,
          alt: "body"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: " Novo desafio "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: handleChallengeFailed,
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.challengeFailedButton,
          children: " Falhei "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: handleChallengeSucceeded,
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.challengeSucceededButton,
          children: " Completei "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Finalize um ciclo para receber um desafio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level-up.svg",
          alt: "Level Up Desafios"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, this), "Avance de level completando desafios."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/CompletedChallenges.tsx":
/*!************************************************!*\
  !*** ./src/components/CompletedChallenges.tsx ***!
  \************************************************/
/*! exports provided: CompleteChallenges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteChallenges", function() { return CompleteChallenges; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/CompletedChallenges.module.css */ "./src/styles/components/CompletedChallenges.module.css");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\components\\CompletedChallenges.tsx";



function CompleteChallenges() {
  const {
    challengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.completedChallengesContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Desafios completos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: challengesCompleted
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\components\\Countdown.tsx";



function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__["CountdownContext"]);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
      children: ["Ciclo terminado ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.check,
        src: "/icons/check.png",
        alt: "Imagem ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: resetCountdown,
        className: `${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton} ${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButtonActive}`,
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: startCountdown,
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
        children: "Iniciar um ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBar", function() { return ExperienceBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ "./src/styles/components/ExperienceBar.module.css");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\components\\ExperienceBar.tsx";



/*export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  
    const percertToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);
  
    return (
      <header className={styles.ExperienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: `${percertToNextLevel}%` }}></div>
  
          <span className={styles.CurrentExperience} style={{ left: `${percentToNextLevel}%` }}>
            {currentExperience} xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
    );
  }*/

function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const percentToNextLevel = Math.floor(currentExperience * 100) / experienceToNextLevel;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: " 0 xp "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: `${percentToNextLevel}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: `${percentToNextLevel}%`
        },
        children: [" ", currentExperience, " xp "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [" ", experienceToNextLevel, " xp "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/LevelUpModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/LevelUpModal.tsx ***!
  \*****************************************/
/*! exports provided: LevelUpModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelUpModal", function() { return LevelUpModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/LevelUpModal.module.css */ "./src/styles/components/LevelUpModal.module.css");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\components\\LevelUpModal.tsx";



function LevelUpModal() {
  const {
    closeLevelUpModal,
    level
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: [" ", level, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: " Parab\xE9ns! "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: " Voc\xEA alcan\xE7ou um novo level. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: closeLevelUpModal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/close.svg",
          alt: "Fechar modal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 67
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Profile.module.css */ "./src/styles/components/Profile.module.css");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\components\\Profile.tsx";



function Profile() {
  const {
    level
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profileContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "https://github.com/MTitoS.png",
      alt: "Matheus Tito Foto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Matheus Tito"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level.svg",
          alt: "Icone Level UP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 20
        }, this), " N\xEDvel ", level, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Sidebar.tsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.tsx ***!
  \************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Sidebar.module.css */ "./src/styles/components/Sidebar.module.css");
/* harmony import */ var _styles_components_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeSwitcher */ "./src/components/ThemeSwitcher.tsx");

var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\components\\Sidebar.tsx";


function Sidebar({
  toggleTheme
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/sidebarLogo.svg",
      alt: "Sidebar logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.switcher,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__["ThemeSwitcher"], {
        handleToggleTheme: toggleTheme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/ThemeSwitcher.tsx":
/*!******************************************!*\
  !*** ./src/components/ThemeSwitcher.tsx ***!
  \******************************************/
/*! exports provided: ThemeSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcher", function() { return ThemeSwitcher; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\components\\ThemeSwitcher.tsx";



function ThemeSwitcher({
  handleToggleTheme
}) {
  const {
    title
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onChange: handleToggleTheme,
      checked: title === 'dark',
      height: 20,
      width: 40,
      handleDiameter: 16,
      onColor: "#1b1b1b",
      offColor: "#1b1b1b",
      activeBoxShadow: "0 0 2px 3px #5965e0",
      uncheckedIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/sun.png",
          alt: "sun icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this)
      }, void 0, false),
      checkedIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/moon.png",
          alt: "moon icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this)
      }, void 0, false),
      uncheckedHandleIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        viewBox: "0 0 10 10",
        height: "100%",
        width: "100%",
        fill: "white",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
          r: 5,
          cx: 5,
          cy: 5
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, this),
      checkedHandleIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        viewBox: "0 0 10 10",
        height: "100%",
        width: "100%",
        fill: "white",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
          r: 5,
          cx: 5,
          cy: 5
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");

var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\contexts\\ChallengesContext.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1);
  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0);
  const {
    0: challengesCompleted,
    1: setChallengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const {
    0: isLevelUpModalOpen,
    1: setIsLevelUpModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const RandomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[RandomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio!', {
        body: `Valendo ${challenge.amount} xp!`
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const {
      amount
    } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level,
      currentExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChallenge,
      closeLevelUpModal
    },
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 36
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\contexts\\CountdownContext.tsx";


let countdownTimeout;
const CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function CountdownProvider({
  children
}) {
  const {
    startNewChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.1 * 60);
  const {
    0: isActive,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function startCountdown() {
    setActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setActive(false);
    setTime(25 * 60);
    setHasFinished(false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CompletedChallenges */ "./src/components/CompletedChallenges.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/globals */ "./src/styles/globals.ts");
/* harmony import */ var _styles_themes_light__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/themes/light */ "./src/styles/themes/light.ts");
/* harmony import */ var _styles_themes_dark__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/themes/dark */ "./src/styles/themes/dark.ts");
/* harmony import */ var _utils_usePersistedState__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/usePersistedState */ "./src/utils/usePersistedState.ts");

var _jsxFileName = "C:\\Users\\mthsi\\OneDrive\\\xC1rea de Trabalho\\Code\\portfolio\\Move-V1\\src\\pages\\index.tsx";
















function Home(props) {
  const [theme, setTheme] = Object(_utils_usePersistedState__WEBPACK_IMPORTED_MODULE_16__["default"])("theme", _styles_themes_light__WEBPACK_IMPORTED_MODULE_14__["default"]);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? _styles_themes_dark__WEBPACK_IMPORTED_MODULE_15__["default"] : _styles_themes_light__WEBPACK_IMPORTED_MODULE_14__["default"]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
    theme: theme,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_10__["ChallengesProvider"], {
      level: props.level,
      currentExperience: props.currentExperience,
      challengesCompleted: props.challengesCompleted,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_globals__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_8__["Sidebar"], {
        toggleTheme: toggleTheme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.grid,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "In\xEDcio | MoveIt"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_6__["ExperienceBar"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_9__["CountdownProvider"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.leftContainer,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_7__["Profile"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_4__["CompleteChallenges"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_5__["Countdown"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.rightContainer,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_3__["ChallengeBox"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
const getServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};

/***/ }),

/***/ "./src/styles/components/ChallengeBox.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/ChallengeBox.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengeBoxContainer": "ChallengeBox_challengeBoxContainer__53AkF",
	"challengeNotActive": "ChallengeBox_challengeNotActive__35ixK",
	"challengeActive": "ChallengeBox_challengeActive__3mO_D",
	"challengeFailedButton": "ChallengeBox_challengeFailedButton__u8aFS",
	"challengeSucceededButton": "ChallengeBox_challengeSucceededButton__18bu2"
};


/***/ }),

/***/ "./src/styles/components/CompletedChallenges.module.css":
/*!**************************************************************!*\
  !*** ./src/styles/components/CompletedChallenges.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"completedChallengesContainer": "CompletedChallenges_completedChallengesContainer__T9k4b"
};


/***/ }),

/***/ "./src/styles/components/Countdown.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/Countdown.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countdownContainer": "Countdown_countdownContainer__3pqLs",
	"countdownButton": "Countdown_countdownButton__2cSHU",
	"countdownButtonActive": "Countdown_countdownButtonActive__37GOc",
	"check": "Countdown_check__1pTBL"
};


/***/ }),

/***/ "./src/styles/components/ExperienceBar.module.css":
/*!********************************************************!*\
  !*** ./src/styles/components/ExperienceBar.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "ExperienceBar_experienceBar__2JbAX",
	"currentExperience": "ExperienceBar_currentExperience__2XATR"
};


/***/ }),

/***/ "./src/styles/components/LevelUpModal.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/LevelUpModal.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"overlay": "LevelUpModal_overlay__1huQl",
	"container": "LevelUpModal_container__1dM18"
};


/***/ }),

/***/ "./src/styles/components/Profile.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/Profile.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileContainer": "Profile_profileContainer__3iYlY"
};


/***/ }),

/***/ "./src/styles/components/Sidebar.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/Sidebar.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Sidebar_container__qAilH",
	"switcher": "Sidebar_switcher__3lumb",
	"icons": "Sidebar_icons__DN214"
};


/***/ }),

/***/ "./src/styles/globals.ts":
/*!*******************************!*\
  !*** ./src/styles/globals.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  :root {
    --white: ${props => props.theme.colors.white};
    --background: ${props => props.theme.colors.background};
    --gray-line: ${props => props.theme.colors.grayLine};
    --text: ${props => props.theme.colors.text};
    --title: ${props => props.theme.colors.title};
    --red: ${props => props.theme.colors.red};
    --green: ${props => props.theme.colors.green};
    --blue: ${props => props.theme.colors.blue};
    --blue-dark: ${props => props.theme.colors.blueDark};
    --blue-twitter: ${props => props.theme.colors.blueTwitter};
    --box-shadow: ${props => props.theme.colors.boxShadow};
    --border-bottom: ${props => props.theme.colors.borderBottom};
    --lateral-border: ${props => props.theme.colors.lateralBorder};
    --level-up-background: ${props => props.theme.colors.levelUpBackground};
  }
  body {
    background: var(--background);
    color: var(--text);
  }
  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`);

/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__HbJEc"
};


/***/ }),

/***/ "./src/styles/themes/dark.ts":
/*!***********************************!*\
  !*** ./src/styles/themes/dark.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'dark',
  colors: {
    white: '#000',
    grayLine: '#dcdde0',
    title: '#5965e0',
    red: '#e83f5b',
    green: '#4cd62b',
    blue: '#5965e0',
    blueDark: '#4953b8',
    background: '#090a0a',
    text: '#a8a095',
    blueTwitter: '#2aa9e0',
    borderBottom: '#d7d8da',
    lateralBorder: '#090a0a',
    levelUpBackground: '#181a1bcc',
    boxShadow: 'rgba(0, 0, 0, 0.05)'
  }
});

/***/ }),

/***/ "./src/styles/themes/light.ts":
/*!************************************!*\
  !*** ./src/styles/themes/light.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'light',
  colors: {
    white: '#fff',
    grayLine: '#dcdde0',
    title: '#2e384d',
    red: '#e83f5b',
    green: '#4cd62b',
    blue: '#5965e0',
    blueDark: '#4953b8',
    background: '#f2f3f5',
    text: '#666666',
    blueTwitter: '#2aa9e0',
    borderBottom: '#d7d8da',
    lateralBorder: '#f0f1f3',
    levelUpBackground: 'rgba(242, 243, 245, 0.8)',
    boxShadow: 'rgba(0, 0, 0, 0.05)'
  }
});

/***/ }),

/***/ "./src/utils/usePersistedState.ts":
/*!****************************************!*\
  !*** ./src/utils/usePersistedState.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);



function usePersistedState(key, initialState) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => {
    const cookiesValue = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(key);

    if (cookiesValue) {
      return JSON.parse(cookiesValue);
    } else {
      return initialState;
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

/* harmony default export */ __webpack_exports__["default"] = (usePersistedState);

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-switch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL1Byb2ZpbGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvU2lkZWJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lcy9kYXJrLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWVzL2xpZ2h0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91c2VQZXJzaXN0ZWRTdGF0ZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQ2hhbGxlbmdlQm94IiwiYWN0aXZlQ2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInJlc2V0Q291bnRkb3duIiwiQ291bnRkb3duQ29udGV4dCIsImhhbmRsZUNoYWxsZW5nZVN1Y2NlZWRlZCIsImhhbmRsZUNoYWxsZW5nZUZhaWxlZCIsInN0eWxlcyIsImNoYWxsZW5nZUJveENvbnRhaW5lciIsImNoYWxsZW5nZUFjdGl2ZSIsImFtb3VudCIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImNoYWxsZW5nZUZhaWxlZEJ1dHRvbiIsImNoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvbiIsImNoYWxsZW5nZU5vdEFjdGl2ZSIsIkNvbXBsZXRlQ2hhbGxlbmdlcyIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJjb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyIiwiQ291bnRkb3duIiwibWludXRlcyIsInNlY29uZHMiLCJoYXNGaW5pc2hlZCIsImlzQWN0aXZlIiwic3RhcnRDb3VudGRvd24iLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0Iiwic2Vjb25kTGVmdCIsInNlY29uZFJpZ2h0IiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bnRkb3duQnV0dG9uIiwiY2hlY2siLCJjb3VudGRvd25CdXR0b25BY3RpdmUiLCJFeHBlcmllbmNlQmFyIiwiY3VycmVudEV4cGVyaWVuY2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJwZXJjZW50VG9OZXh0TGV2ZWwiLCJNYXRoIiwiZmxvb3IiLCJleHBlcmllbmNlQmFyIiwid2lkdGgiLCJsZWZ0IiwiTGV2ZWxVcE1vZGFsIiwiY2xvc2VMZXZlbFVwTW9kYWwiLCJsZXZlbCIsIm92ZXJsYXkiLCJjb250YWluZXIiLCJQcm9maWxlIiwicHJvZmlsZUNvbnRhaW5lciIsIlNpZGViYXIiLCJ0b2dnbGVUaGVtZSIsInN3aXRjaGVyIiwiVGhlbWVTd2l0Y2hlciIsImhhbmRsZVRvZ2dsZVRoZW1lIiwidGl0bGUiLCJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXN0Iiwic2V0TGV2ZWwiLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldEFjdGl2ZUNoYWxsZW5nZSIsInBvdyIsImlzTGV2ZWxVcE1vZGFsT3BlbiIsInNldElzTGV2ZWxVcE1vZGFsT3BlbiIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsIlJhbmRvbUNoYWxsZW5nZUluZGV4IiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiZmluYWxFeHBlcmllbmNlIiwiY291bnRkb3duVGltZW91dCIsIkNvdW50ZG93blByb3ZpZGVyIiwidGltZSIsInNldFRpbWUiLCJzZXRBY3RpdmUiLCJzZXRIYXNGaW5pc2hlZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJIb21lIiwicHJvcHMiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlUGVyc2lzdGVkU3RhdGUiLCJsaWdodCIsImRhcmsiLCJncmlkIiwibGVmdENvbnRhaW5lciIsInJpZ2h0Q29udGFpbmVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwicmVxIiwiY29va2llcyIsIk51bWJlciIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiY29sb3JzIiwid2hpdGUiLCJiYWNrZ3JvdW5kIiwiZ3JheUxpbmUiLCJ0ZXh0IiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmx1ZURhcmsiLCJibHVlVHdpdHRlciIsImJveFNoYWRvdyIsImJvcmRlckJvdHRvbSIsImxhdGVyYWxCb3JkZXIiLCJsZXZlbFVwQmFja2dyb3VuZCIsImtleSIsImluaXRpYWxTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjb29raWVzVmFsdWUiLCJnZXQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3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LHlEQUFTLENBQUMsTUFBTTtBQUNkRyxvREFBTyxDQUFDQyxHQUFSLENBQVltRCxHQUFaLEVBQWlCTSxJQUFJLENBQUNFLFNBQUwsQ0FBZU4sS0FBZixDQUFqQjtBQUNELEdBRlEsRUFFTixDQUFDRixHQUFELEVBQU1FLEtBQU4sQ0FGTSxDQUFUO0FBSUEsU0FBTyxDQUFDQSxLQUFELEVBQVFDLFFBQVIsQ0FBUDtBQUNEOztBQUVjN0IsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7QUNyQkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VCb3goKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZUNoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2UsIGNvbXBsZXRlQ2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuICAgIGNvbnN0IHtyZXNldENvdW50ZG93bn0gPSB1c2VDb250ZXh0KENvdW50ZG93bkNvbnRleHQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZVN1Y2NlZWRlZCgpIHtcclxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSgpO1xyXG4gICAgICAgIHJlc2V0Q291bnRkb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbGxlbmdlRmFpbGVkICgpIHtcclxuICAgICAgICByZXNldENoYWxsZW5nZSgpO1xyXG4gICAgICAgIHJlc2V0Q291bnRkb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHthY3RpdmVDaGFsbGVuZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FuaGUge2FjdGl2ZUNoYWxsZW5nZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0gYWx0PVwiYm9keVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+IE5vdm8gZGVzYWZpbyA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FjdGl2ZUNoYWxsZW5nZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNoYWxsZW5nZUZhaWxlZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlRmFpbGVkQnV0dG9ufT4gRmFsaGVpIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDaGFsbGVuZ2VTdWNjZWVkZWR9IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvbn0+IENvbXBsZXRlaSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZU5vdEFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmluYWxpemUgdW0gY2ljbG8gcGFyYSByZWNlYmVyIHVtIGRlc2FmaW88L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwtdXAuc3ZnXCIgYWx0PVwiTGV2ZWwgVXAgRGVzYWZpb3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdmFuY2UgZGUgbGV2ZWwgY29tcGxldGFuZG8gZGVzYWZpb3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbXBsZXRlQ2hhbGxlbmdlcygpIHtcclxuXHJcbiAgICBjb25zdCB7Y2hhbGxlbmdlc0NvbXBsZXRlZH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2FmaW9zIGNvbXBsZXRvczwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2NoYWxsZW5nZXNDb21wbGV0ZWR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb3VudGRvd25Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XHJcbiAgICBjb25zdCB7IG1pbnV0ZXMsc2Vjb25kcywgaGFzRmluaXNoZWQsIGlzQWN0aXZlLCBzdGFydENvdW50ZG93biwgcmVzZXRDb3VudGRvd24gfSA9IHVzZUNvbnRleHQoQ291bnRkb3duQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgW21pbnV0ZUxlZnQsbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xyXG4gICAgY29uc3QgW3NlY29uZExlZnQsc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuPjo8L3NwYW4+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3NlY29uZExlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7IGhhc0ZpbmlzaGVkID8gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZCBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259PlxyXG4gICAgICAgICAgICBDaWNsbyB0ZXJtaW5hZG8gPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jaGVja30gc3JjPVwiL2ljb25zL2NoZWNrLnBuZ1wiIGFsdD1cIkltYWdlbSBjaWNsb1wiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZXNldENvdW50ZG93bn0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnRkb3duQnV0dG9ufSAke3N0eWxlcy5jb3VudGRvd25CdXR0b25BY3RpdmV9YH0+XHJcbiAgICAgICAgICAgICAgICBBYmFuZG9uYXIgY2ljbG9cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzdGFydENvdW50ZG93bn0gY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIEluaWNpYXIgdW0gY2ljbG9cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci5tb2R1bGUuY3NzJztcclxuXHJcbi8qZXhwb3J0IGZ1bmN0aW9uIEV4cGVyaWVuY2VCYXIoKSB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnRFeHBlcmllbmNlLCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gIFxyXG4gICAgY29uc3QgcGVyY2VydFRvTmV4dExldmVsID0gTWF0aC5yb3VuZCgoY3VycmVudEV4cGVyaWVuY2UgKiAxMDApIC8gZXhwZXJpZW5jZVRvTmV4dExldmVsKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuRXhwZXJpZW5jZUJhcn0+XHJcbiAgICAgICAgPHNwYW4+MCB4cDwvc3Bhbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogYCR7cGVyY2VydFRvTmV4dExldmVsfSVgIH19PjwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuQ3VycmVudEV4cGVyaWVuY2V9IHN0eWxlPXt7IGxlZnQ6IGAke3BlcmNlbnRUb05leHRMZXZlbH0lYCB9fT5cclxuICAgICAgICAgICAge2N1cnJlbnRFeHBlcmllbmNlfSB4cFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuPntleHBlcmllbmNlVG9OZXh0TGV2ZWx9IHhwPC9zcGFuPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbiAgfSovXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4cGVyaWVuY2VCYXIoKSB7XHJcblxyXG4gICAgY29uc3Qge2N1cnJlbnRFeHBlcmllbmNlLGV4cGVyaWVuY2VUb05leHRMZXZlbH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBwZXJjZW50VG9OZXh0TGV2ZWwgPSBNYXRoLmZsb29yKChjdXJyZW50RXhwZXJpZW5jZSAqIDEwMCkpIC8gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5leHBlcmllbmNlQmFyfT5cclxuICAgICAgICAgICAgPHNwYW4+IDAgeHAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBgJHtwZXJjZW50VG9OZXh0TGV2ZWx9JWB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFeHBlcmllbmNlfSBzdHlsZT17e2xlZnQ6IGAke3BlcmNlbnRUb05leHRMZXZlbH0lYH19PiB7Y3VycmVudEV4cGVyaWVuY2V9IHhwIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj4ge2V4cGVyaWVuY2VUb05leHRMZXZlbH0geHAgPC9zcGFuPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExldmVsVXBNb2RhbCgpIHtcclxuXHJcbiAgICBjb25zdCB7Y2xvc2VMZXZlbFVwTW9kYWwsbGV2ZWx9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+IHtsZXZlbH0gPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPiBQYXJhYsOpbnMhIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHA+IFZvY8OqIGFsY2Fuw6dvdSB1bSBub3ZvIGxldmVsLiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZUxldmVsVXBNb2RhbH0+PGltZyBzcmM9XCIvaWNvbnMvY2xvc2Uuc3ZnXCIgYWx0PVwiRmVjaGFyIG1vZGFsXCIvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9maWxlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG5cclxuICAgIGNvbnN0IHtsZXZlbH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL01UaXRvUy5wbmdcIiBhbHQ9XCJNYXRoZXVzIFRpdG8gRm90b1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPk1hdGhldXMgVGl0bzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHA+PGltZyBzcmM9XCJpY29ucy9sZXZlbC5zdmdcIiBhbHQ9XCJJY29uZSBMZXZlbCBVUFwiIC8+IE7DrXZlbCB7bGV2ZWx9IDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL1NpZGViYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IFRoZW1lU3dpdGNoZXIgfSBmcm9tICcuL1RoZW1lU3dpdGNoZXInO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0b2dnbGVUaGVtZSgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcih7IHRvZ2dsZVRoZW1lIH06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGltZyBzcmM9XCIvc2lkZWJhckxvZ28uc3ZnXCIgYWx0PVwiU2lkZWJhciBsb2dvXCIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN3aXRjaGVyfT5cclxuICAgICAgICA8VGhlbWVTd2l0Y2hlciBoYW5kbGVUb2dnbGVUaGVtZT17dG9nZ2xlVGhlbWV9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBoYW5kbGVUb2dnbGVUaGVtZSgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVTd2l0Y2hlcih7IGhhbmRsZVRvZ2dsZVRoZW1lIH06IFByb3BzKSB7XHJcbiAgY29uc3QgeyB0aXRsZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U3dpdGNoXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZVRoZW1lfVxyXG4gICAgICAgIGNoZWNrZWQ9e3RpdGxlID09PSAnZGFyayd9XHJcbiAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgaGFuZGxlRGlhbWV0ZXI9ezE2fVxyXG4gICAgICAgIG9uQ29sb3I9XCIjMWIxYjFiXCJcclxuICAgICAgICBvZmZDb2xvcj1cIiMxYjFiMWJcIlxyXG4gICAgICAgIGFjdGl2ZUJveFNoYWRvdz1cIjAgMCAycHggM3B4ICM1OTY1ZTBcIlxyXG4gICAgICAgIHVuY2hlY2tlZEljb249e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc3VuLnBuZ1wiIGFsdD1cInN1biBpY29uXCIvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrZWRJY29uPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL21vb24ucG5nXCIgYWx0PVwibW9vbiBpY29uXCIvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuY2hlY2tlZEhhbmRsZUljb249e1xyXG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIHI9ezV9IGN4PXs1fSBjeT17NX0gLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja2VkSGFuZGxlSWNvbj17XHJcbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCI+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgcj17NX0gY3g9ezV9IGN5PXs1fSAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LHVzZVN0YXRlLFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVXBNb2RhbCc7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICAgIGxldmVsOiBudW1iZXIsXHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyLFxyXG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xyXG4gICAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcclxuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGNsb3NlTGV2ZWxVcE1vZGFsOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyICh7Y2hpbGRyZW4sLi4ucmVzdH0pIHtcclxuXHJcbiAgICBjb25zdCBbbGV2ZWwsc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUocmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKHJlc3QuY2hhbGxlbmdlc0NvbXBsZXRlZCA/PyAwKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xyXG5cclxuICAgIGNvbnN0W2lzTGV2ZWxVcE1vZGFsT3BlbixzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsU3RyaW5nKGxldmVsKSk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJyxTdHJpbmcoY3VycmVudEV4cGVyaWVuY2UpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY2hhbGxlbmdlc0NvbXBsZXRlZCcsU3RyaW5nKGNoYWxsZW5nZXNDb21wbGV0ZWQpKTtcclxuICAgIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsKCkge1xyXG4gICAgICAgIHNldElzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IFJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbUmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG5cclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcclxuXHJcbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvIScsIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH0geHAhYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuXHJcbiAgICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XHJcbiAgICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgICAgICAgbGV2ZWxVcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgIHtsZXZlbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgICAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcclxuICAgICAgICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZUxldmVsVXBNb2RhbCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAge2lzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUNvbnRleHQsXHJcbiAgUmVhY3ROb2RlLFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZVN0YXRlLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5cclxubGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcclxuICBtaW51dGVzOiBudW1iZXI7XHJcbiAgc2Vjb25kczogbnVtYmVyO1xyXG4gIGhhc0ZpbmlzaGVkOiBib29sZWFuO1xyXG4gIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gIHN0YXJ0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG4gIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KFxyXG4gIHt9IGFzIENvdW50ZG93bkNvbnRleHREYXRhXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiBDb3VudGRvd25Qcm92aWRlclByb3BzKSB7XHJcbiAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMSAqIDYwKTtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xyXG5cclxuICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XHJcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgIHNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICBzZXRUaW1lKDI1ICogNjApO1xyXG4gICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCkge1xyXG4gICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZSh0aW1lIC0gMSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XHJcbiAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICBzZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0FjdGl2ZSwgdGltZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvdW50ZG93bkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgc3RhcnRDb3VudGRvd24sXHJcbiAgICAgICAgcmVzZXRDb3VudGRvd24sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ291bnRkb3duQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbGxlbmdlQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94XCI7XHJcbmltcG9ydCB7IENvbXBsZXRlQ2hhbGxlbmdlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXNcIjtcclxuaW1wb3J0IHsgQ291bnRkb3duIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRkb3duXCI7XHJcbmltcG9ydCB7IEV4cGVyaWVuY2VCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQmFyXCI7XHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlXCI7XHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XHJcbmltcG9ydCB7XHJcbiAgQ291bnRkb3duQ29udGV4dCxcclxuICBDb3VudGRvd25Qcm92aWRlcixcclxufSBmcm9tIFwiLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dFwiO1xyXG5pbXBvcnQge1xyXG4gIENoYWxsZW5nZXNDb250ZXh0LFxyXG4gIENoYWxsZW5nZXNQcm92aWRlcixcclxufSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHRcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgbGlnaHQgZnJvbSBcIi4uL3N0eWxlcy90aGVtZXMvbGlnaHRcIjtcclxuaW1wb3J0IGRhcmsgZnJvbSBcIi4uL3N0eWxlcy90aGVtZXMvZGFya1wiO1xyXG5pbXBvcnQgdXNlUGVyc2lzdGVkU3RhdGUgZnJvbSBcIi4uL3V0aWxzL3VzZVBlcnNpc3RlZFN0YXRlXCI7XHJcblxyXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VQZXJzaXN0ZWRTdGF0ZShcInRoZW1lXCIsIGxpZ2h0KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBzZXRUaGVtZSh0aGVtZS50aXRsZSA9PT0gXCJsaWdodFwiID8gZGFyayA6IGxpZ2h0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPENoYWxsZW5nZXNQcm92aWRlclxyXG4gICAgICAgIGxldmVsPXtwcm9wcy5sZXZlbH1cclxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZT17cHJvcHMuY3VycmVudEV4cGVyaWVuY2V9XHJcbiAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZD17cHJvcHMuY2hhbGxlbmdlc0NvbXBsZXRlZH1cclxuICAgICAgPlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgICA8U2lkZWJhciB0b2dnbGVUaGVtZT17dG9nZ2xlVGhlbWV9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkluw61jaW8gfCBNb3ZlSXQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZUJhciAvPlxyXG5cclxuICAgICAgICAgICAgPENvdW50ZG93blByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICAgICAgPENvbXBsZXRlQ2hhbGxlbmdlcyAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q291bnRkb3duIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2hhbGxlbmdlQm94IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQ291bnRkb3duUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DaGFsbGVuZ2VzUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKFxyXG4gIGN0eFxyXG4pID0+IHtcclxuICBjb25zdCB7IGxldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZCB9ID1cclxuICAgIGN0eC5yZXEuY29va2llcztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGxldmVsOiBOdW1iZXIobGV2ZWwpLFxyXG4gICAgICBjdXJyZW50RXhwZXJpZW5jZTogTnVtYmVyKGN1cnJlbnRFeHBlcmllbmNlKSxcclxuICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogTnVtYmVyKGNoYWxsZW5nZXNDb21wbGV0ZWQpLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGFsbGVuZ2VCb3hDb250YWluZXJcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlQm94Q29udGFpbmVyX181M0FrRlwiLFxuXHRcImNoYWxsZW5nZU5vdEFjdGl2ZVwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VOb3RBY3RpdmVfXzM1aXhLXCIsXG5cdFwiY2hhbGxlbmdlQWN0aXZlXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZUFjdGl2ZV9fM21PX0RcIixcblx0XCJjaGFsbGVuZ2VGYWlsZWRCdXR0b25cIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlRmFpbGVkQnV0dG9uX191OGFGU1wiLFxuXHRcImNoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvblwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b25fXzE4YnUyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyXCI6IFwiQ29tcGxldGVkQ2hhbGxlbmdlc19jb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyX19UOWs0YlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY291bnRkb3duQ29udGFpbmVyXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHNcIixcblx0XCJjb3VudGRvd25CdXR0b25cIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVVwiLFxuXHRcImNvdW50ZG93bkJ1dHRvbkFjdGl2ZVwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jXCIsXG5cdFwiY2hlY2tcIjogXCJDb3VudGRvd25fY2hlY2tfXzFwVEJMXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJleHBlcmllbmNlQmFyXCI6IFwiRXhwZXJpZW5jZUJhcl9leHBlcmllbmNlQmFyX18ySmJBWFwiLFxuXHRcImN1cnJlbnRFeHBlcmllbmNlXCI6IFwiRXhwZXJpZW5jZUJhcl9jdXJyZW50RXhwZXJpZW5jZV9fMlhBVFJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm92ZXJsYXlcIjogXCJMZXZlbFVwTW9kYWxfb3ZlcmxheV9fMWh1UWxcIixcblx0XCJjb250YWluZXJcIjogXCJMZXZlbFVwTW9kYWxfY29udGFpbmVyX18xZE0xOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZmlsZUNvbnRhaW5lclwiOiBcIlByb2ZpbGVfcHJvZmlsZUNvbnRhaW5lcl9fM2lZbFlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNpZGViYXJfY29udGFpbmVyX19xQWlsSFwiLFxuXHRcInN3aXRjaGVyXCI6IFwiU2lkZWJhcl9zd2l0Y2hlcl9fM2x1bWJcIixcblx0XCJpY29uc1wiOiBcIlNpZGViYXJfaWNvbnNfX0ROMjE0XCJcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgOnJvb3Qge1xyXG4gICAgLS13aGl0ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgICAtLWJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XHJcbiAgICAtLWdyYXktbGluZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmF5TGluZX07XHJcbiAgICAtLXRleHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XHJcbiAgICAtLXRpdGxlOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRpdGxlfTtcclxuICAgIC0tcmVkOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnJlZH07XHJcbiAgICAtLWdyZWVuOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZWVufTtcclxuICAgIC0tYmx1ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibHVlfTtcclxuICAgIC0tYmx1ZS1kYXJrOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsdWVEYXJrfTtcclxuICAgIC0tYmx1ZS10d2l0dGVyOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsdWVUd2l0dGVyfTtcclxuICAgIC0tYm94LXNoYWRvdzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ib3hTaGFkb3d9O1xyXG4gICAgLS1ib3JkZXItYm90dG9tOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMudGhlbWUuY29sb3JzLmJvcmRlckJvdHRvbX07XHJcbiAgICAtLWxhdGVyYWwtYm9yZGVyOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMudGhlbWUuY29sb3JzLmxhdGVyYWxCb3JkZXJ9O1xyXG4gICAgLS1sZXZlbC11cC1iYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMudGhlbWUuY29sb3JzLmxldmVsVXBCYWNrZ3JvdW5kfTtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB9XHJcbiAgYm9keSwgaW5wdXQsIHRleHRhcmVhLCBidXR0b24ge1xyXG4gICAgZm9udDogNDAwIDFyZW0gXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBhIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBAbWVkaWEobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICBmb250LXNpemU6IDkzLjc1JTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICBmb250LXNpemU6IDg3LjUlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX0hiSkVjXCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aXRsZTogJ2RhcmsnLFxyXG4gIFxyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgIHdoaXRlOiAnIzAwMCcsXHJcbiAgICAgIGdyYXlMaW5lOiAnI2RjZGRlMCcsXHJcbiAgICAgIHRpdGxlOiAnIzU5NjVlMCcsXHJcbiAgICAgIHJlZDogJyNlODNmNWInLFxyXG4gICAgICBncmVlbjogJyM0Y2Q2MmInLFxyXG4gICAgICBibHVlOiAnIzU5NjVlMCcsXHJcbiAgICAgIGJsdWVEYXJrOiAnIzQ5NTNiOCcsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjMDkwYTBhJyxcclxuICAgICAgdGV4dDogJyNhOGEwOTUnLFxyXG4gICAgICBibHVlVHdpdHRlcjogJyMyYWE5ZTAnLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcjZDdkOGRhJyxcclxuICAgICAgbGF0ZXJhbEJvcmRlcjogJyMwOTBhMGEnLFxyXG4gICAgICBsZXZlbFVwQmFja2dyb3VuZDogJyMxODFhMWJjYycsXHJcbiAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC4wNSknLFxyXG4gICAgfVxyXG4gIH0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdGl0bGU6ICdsaWdodCcsXHJcblxyXG4gIGNvbG9yczoge1xyXG4gICAgd2hpdGU6ICcjZmZmJyxcclxuICAgIGdyYXlMaW5lOiAnI2RjZGRlMCcsXHJcbiAgICB0aXRsZTogJyMyZTM4NGQnLFxyXG4gICAgcmVkOiAnI2U4M2Y1YicsXHJcbiAgICBncmVlbjogJyM0Y2Q2MmInLFxyXG4gICAgYmx1ZTogJyM1OTY1ZTAnLFxyXG4gICAgYmx1ZURhcms6ICcjNDk1M2I4JyxcclxuICAgIGJhY2tncm91bmQ6ICcjZjJmM2Y1JyxcclxuICAgIHRleHQ6ICcjNjY2NjY2JyxcclxuICAgIGJsdWVUd2l0dGVyOiAnIzJhYTllMCcsXHJcbiAgICBib3JkZXJCb3R0b206ICcjZDdkOGRhJyxcclxuICAgIGxhdGVyYWxCb3JkZXI6ICcjZjBmMWYzJyxcclxuICAgIGxldmVsVXBCYWNrZ3JvdW5kOiAncmdiYSgyNDIsIDI0MywgMjQ1LCAwLjgpJyxcclxuICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC4wNSknLFxyXG4gIH1cclxufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmZ1bmN0aW9uIHVzZVBlcnNpc3RlZFN0YXRlKGtleTogc3RyaW5nLCBpbml0aWFsU3RhdGU6IGFueSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llc1ZhbHVlID0gQ29va2llcy5nZXQoa2V5KTtcclxuXHJcbiAgICBpZiAoY29va2llc1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGNvb2tpZXNWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llcy5zZXQoa2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG4gIH0sIFtrZXksIHN0YXRlXSk7XHJcblxyXG4gIHJldHVybiBbc3RhdGUsIHNldFN0YXRlXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUGVyc2lzdGVkU3RhdGU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=