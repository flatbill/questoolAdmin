"use strict";
(self["webpackChunkdev4"] = self["webpackChunkdev4"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiSupabase */ 2979);
/* harmony import */ var src_utils_getEnvVars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/getEnvVars */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _qncmen_qncmen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qncmen/qncmen.component */ 8130);
/* harmony import */ var _qncpro_qncpro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qncpro/qncpro.component */ 172);
/* harmony import */ var _qncwwg_qncwwg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qncwwg/qncwwg.component */ 8266);
/* harmony import */ var _qncwwgd_qncwwgd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qncwwgd/qncwwgd.component */ 6244);
/* harmony import */ var _qncwwq_qncwwq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qncwwq/qncwwq.component */ 7290);
/* harmony import */ var _qncwwqd_qncwwqd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./qncwwqd/qncwwqd.component */ 6081);
/* harmony import */ var _qncwwr_qncwwr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./qncwwr/qncwwr.component */ 8191);
/* harmony import */ var _qncwwrd_qncwwrd_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./qncwwrd/qncwwrd.component */ 301);
/* harmony import */ var _qncwwi_qncwwi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./qncwwi/qncwwi.component */ 6755);
/* harmony import */ var _qncwwu_qncwwu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./qncwwu/qncwwu.component */ 7377);
/* harmony import */ var _qncwws_qncwws_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./qncwws/qncwws.component */ 2930);
/* harmony import */ var _qncconv_qncconv_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./qncconv/qncconv.component */ 2152);
/* harmony import */ var _qncwwsr_qncwwsr_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./qncwwsr/qncwwsr.component */ 3377);
/* harmony import */ var _qncwwsrd_qncwwsrd_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./qncwwsrd/qncwwsrd.component */ 1092);





















function AppComponent_app_qncmen_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncmen", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("wwqJumpOut", function AppComponent_app_qncmen_0_Template_app_qncmen_wwqJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r15.showWwqFun($event); })("wwgJumpOut", function AppComponent_app_qncmen_0_Template_app_qncmen_wwgJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r17.showWwgFun($event); })("wwrJumpOut", function AppComponent_app_qncmen_0_Template_app_qncmen_wwrJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r18.showWwrFun($event); })("wwiJumpOut", function AppComponent_app_qncmen_0_Template_app_qncmen_wwiJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r19.showWwiFun($event); })("wwuJumpOut", function AppComponent_app_qncmen_0_Template_app_qncmen_wwuJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r20.showWwuFun($event); })("wwsJumpOut", function AppComponent_app_qncmen_0_Template_app_qncmen_wwsJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r21.showWwsFun($event); })("proJumpOut", function AppComponent_app_qncmen_0_Template_app_qncmen_proJumpOut_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r22.showProFun(); })("wwsrJumpOut", function AppComponent_app_qncmen_0_Template_app_qncmen_wwsrJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r23.showWwsrFun($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("authIn", ctx_r0.qncAuthorized)("showMenButsIn", ctx_r0.menuButsAlive)("showSurveyMenButsIn", ctx_r0.surveyMenuButsAlive)("compTitleIn", ctx_r0.compTitle)("surveyNameIn", ctx_r0.surveyName)("loadingDataMsg", ctx_r0.loadingDataMsg);
} }
function AppComponent_app_qnc_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-qnc", 16);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("subsetsIn", ctx_r1.subsetArray)("questionsIn", ctx_r1.questArray)("showQnc", ctx_r1.showQnc);
} }
function AppComponent_app_qncpro_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncpro", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("surveySelectOut", function AppComponent_app_qncpro_2_Template_app_qncpro_surveySelectOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r24.surveySelected($event); })("qidArrayOut", function AppComponent_app_qncpro_2_Template_app_qncpro_qidArrayOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r26.qidArrayWasBuilt($event); })("subscriptionObjOut", function AppComponent_app_qncpro_2_Template_app_qncpro_subscriptionObjOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r27.subscriptionObjWasBuilt($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("subscriberInternalIdIn", ctx_r2.subscriberInternalId)("subscriptionObjIn", ctx_r2.subscriptionObj)("teamMemberObjIn", ctx_r2.teamMemberObj)("custIn", ctx_r2.cust)("qidIn", ctx_r2.qid)("qidArrayIn", ctx_r2.qidArray)("loadingDataBusyIn", ctx_r2.loadingDataBusy)("faunaOrSupabaseIn", ctx_r2.faunaOrSupabase);
} }
function AppComponent_app_qncwwg_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncwwg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("wwgdJumpOut", function AppComponent_app_qncwwg_3_Template_app_qncwwg_wwgdJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r28.showWwgdFun($event); })("groupsOut", function AppComponent_app_qncwwg_3_Template_app_qncwwg_groupsOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r30.setGroupsFromWwgFun($event); })("groupNbrOut", function AppComponent_app_qncwwg_3_Template_app_qncwwg_groupNbrOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r31.setGroupNbrFromWwgFun($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("questionsIn", ctx_r3.questArray)("groupsIn", ctx_r3.groupArray)("filterResetIn", ctx_r3.wwgFilterReset);
} }
function AppComponent_app_qncwwgd_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncwwgd", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("wwgJumpOut", function AppComponent_app_qncwwgd_4_Template_app_qncwwgd_wwgJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r32.showWwgFun($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("custIn", ctx_r4.cust)("qidIn", ctx_r4.qid)("groupNbrIn", ctx_r4.daGroupNbr)("groupsIn", ctx_r4.groupArray)("faunaOrSupabaseIn", ctx_r4.faunaOrSupabase);
} }
function AppComponent_app_qncwwq_5_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncwwq", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("wwqdJumpOut", function AppComponent_app_qncwwq_5_Template_app_qncwwq_wwqdJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r34.showWwqdFun($event); })("questionNbrOut", function AppComponent_app_qncwwq_5_Template_app_qncwwq_questionNbrOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r36.setQuestionFromWwqFun($event); })("questionsOut", function AppComponent_app_qncwwq_5_Template_app_qncwwq_questionsOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r37.setQuestionsFromWwqFun($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("custIn", ctx_r5.cust)("qidIn", ctx_r5.qid)("subsetIn", ctx_r5.subset)("subsetsQncWwq", ctx_r5.subsetsQncWwq)("questionsIn", ctx_r5.questArray)("rulesIn", ctx_r5.rulesArray)("groupsIn", ctx_r5.groupArray)("filterResetIn", ctx_r5.wwqFilterReset);
} }
function AppComponent_app_qncwwqd_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncwwqd", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("wwqJumpOut", function AppComponent_app_qncwwqd_6_Template_app_qncwwqd_wwqJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r38.showWwqFun($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("custIn", ctx_r6.cust)("qidIn", ctx_r6.qid)("questionNbrIn", ctx_r6.daQuestion)("questionsIn", ctx_r6.questArray)("rulesIn", ctx_r6.rulesArray)("subsetsIn", ctx_r6.subsetArray)("faunaOrSupabaseIn", ctx_r6.faunaOrSupabase);
} }
function AppComponent_app_qncwwr_7_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncwwr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("rulesOut", function AppComponent_app_qncwwr_7_Template_app_qncwwr_rulesOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r40.setRulesFromWwrFun($event); })("ruleNbrOut", function AppComponent_app_qncwwr_7_Template_app_qncwwr_ruleNbrOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r42.setRuleNbrFromWwrFun($event); })("wwrdJumpOut", function AppComponent_app_qncwwr_7_Template_app_qncwwr_wwrdJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r43.showWwrdFun($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("questionsIn", ctx_r7.questArray)("rulesIn", ctx_r7.rulesArray)("subsetsIn", ctx_r7.subsetArray)("filterResetIn", ctx_r7.wwrFilterReset);
} }
function AppComponent_app_qncwwrd_8_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncwwrd", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("wwrJumpOut", function AppComponent_app_qncwwrd_8_Template_app_qncwwrd_wwrJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r44.showWwrFun($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("custIn", ctx_r8.cust)("qidIn", ctx_r8.qid)("ruleNbrIn", ctx_r8.daRuleNbr)("rulesIn", ctx_r8.rulesArray)("groupsIn", ctx_r8.groupArray)("scoreboardsIn", ctx_r8.scoreboardsArray)("questionsIn", ctx_r8.questArray)("faunaOrSupabaseIn", ctx_r8.faunaOrSupabase);
} }
function AppComponent_app_qncwwi_9_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncwwi", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("qncJumpOut", function AppComponent_app_qncwwi_9_Template_app_qncwwi_qncJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r46.showQncFun($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("custIn", ctx_r9.cust)("qidIn", ctx_r9.qid);
} }
function AppComponent_app_qncwwu_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-qncwwu", 25);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("custIn", ctx_r10.cust)("qidIn", ctx_r10.qid)("scoreboardsIn", ctx_r10.scoreboardsArray)("scoreboardRangesIn", ctx_r10.scoreboardRangesArray)("surveyNameIn", ctx_r10.surveyName)("xxAnswersIn", ctx_r10.answersArrayForEtl)("faunaOrSupabaseIn", ctx_r10.faunaOrSupabase);
} }
function AppComponent_app_qncwws_11_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncwws", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("qncSetAuthOnOut", function AppComponent_app_qncwws_11_Template_app_qncwws_qncSetAuthOnOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r48.setAuthOnFun($event); })("proJumpOut", function AppComponent_app_qncwws_11_Template_app_qncwws_proJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r50.showProFun($event); })("teamMemberObjOut", function AppComponent_app_qncwws_11_Template_app_qncwws_teamMemberObjOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r51.teamMemberObjWasBuilt($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("firstLoginIn", ctx_r11.firstLogin)("authIn", ctx_r11.qncAuthorized)("faunaOrSupabaseIn", ctx_r11.faunaOrSupabase);
} }
function AppComponent_app_qncconv_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-qncconv");
} }
function AppComponent_app_qncwwsr_13_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncwwsr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("scoreboardNbrOut", function AppComponent_app_qncwwsr_13_Template_app_qncwwsr_scoreboardNbrOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r52.setScoreboardNbrFromWwsrFun($event); })("scoreboardsOut", function AppComponent_app_qncwwsr_13_Template_app_qncwwsr_scoreboardsOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r54.setScoreboardsFromWwsrFun($event); })("wwsrdJumpOut", function AppComponent_app_qncwwsr_13_Template_app_qncwwsr_wwsrdJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r53); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r55.showWwsrdFun($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("custIn", ctx_r13.cust)("qidIn", ctx_r13.qid)("scoreboardNbrIn", ctx_r13.daScoreboardNbr)("scoreboardsIn", ctx_r13.scoreboardsArray)("scoreboardRangesIn", ctx_r13.scoreboardRangesArray)("filterResetIn", ctx_r13.wwsrFilterReset)("questionsIn", ctx_r13.questArray);
} }
function AppComponent_app_qncwwsrd_14_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "app-qncwwsrd", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("wwsrJumpOut", function AppComponent_app_qncwwsrd_14_Template_app_qncwwsrd_wwsrJumpOut_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r56.showWwsrFun($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("custIn", ctx_r14.cust)("qidIn", ctx_r14.qid)("scoreboardNbrIn", ctx_r14.daScoreboardNbr)("scoreboardsIn", ctx_r14.scoreboardsArray)("scoreboardRangesIn", ctx_r14.scoreboardRangesArray)("rulesIn", ctx_r14.rulesArray)("subsetsIn", ctx_r14.subsetArray)("faunaOrSupabaseIn", ctx_r14.faunaOrSupabase);
} }
class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        // faunaOrSupabase = 'supabase' // 'fauna' or 'supabase'. tells us where our data is hosted
        this.faunaOrSupabase = 'fauna'; // 'fauna' or 'supabase'. tells us where our data is hosted
        this.compTitle = 'Admin Login';
        this.loadingDataMsg = '';
        this.loadingDataBusy = false;
        this.showQnc = false;
        this.showQncWwq = false;
        this.showQncWwqd = false;
        this.showQncWwg = false;
        this.showQncWwgd = false;
        this.showQncWwr = false;
        this.showQncWwrd = false;
        this.showQncWwi = false;
        this.showQncWwu = false;
        this.showQncWws = true; // start with a login
        this.showQncConv = false; // set this true for ed338 conversion
        this.showQncMen = true; // jun2021 menu always true
        this.showQncPro = false; // profile
        this.showQncWwsr = false; // scoreboards
        this.showQncWwsrd = false; // scoreboards detail
        this.showAppComponent = false; // set this true for debugging
        this.groupArray = [];
        this.rulesArray = [];
        this.questArray = []; // master list of questions
        this.scoreboardsArray = [];
        this.scoreboardRangesArray = [];
        this.daQuestion = 'no Question yet';
        this.wwqdCaller = 'no wwqdCaller yet';
        this.qid = '?';
        this.cust = '?';
        this.qncAuthorized = false;
        this.menuButsAlive = false; // show buts on the menu component
        this.surveyMenuButsAlive = false; // show buts for questions,rules, etc
        this.firstLogin = true;
        this.teamMemberUserId = '';
        this.subscriberInternalId = '';
        this.dbReadCount = 0;
        this.qidArray = [];
        this.usersArray = [];
        this.scoresArray = [];
        this.subscribersArray = [];
        this.teamMembersArray = [];
        this.subscriptionObj = {}; //new Object
        this.teamMemberObj = {}; //new Object
        this.daScoreboardNbr = '';
        this.wwsrdCaller = 'no caller yet.';
        this.wwsrFilterReset = true;
        this.wwqFilterReset = true;
        this.wwrFilterReset = true;
        this.wwgFilterReset = true;
        this.surveyName = '';
        this.daRuleNbr = '';
        this.daGroupNbr = '';
        this.msg1 = '???';
        this.supaFlds = {};
        this.supaKeyFlds = {};
        this.supaEtlEnabled = false;
        this.supaData = [];
        this.faunaData = [];
        this.answersArrayForEtl = []; // read fauna write supabase
        this.surveysArrayForEtl = []; // read fauna write supabase
    }
    onKeydownHandler(event) {
        if (event.key === "Escape") {
            this.escKeyWasHit();
        }
    } // end onKeydownHandler
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running app ngOnInit');
            this.titleService.setTitle('Qna Admin');
            this.faunaOrSupabase = yield src_utils_getEnvVars__WEBPACK_IMPORTED_MODULE_2__["default"].getFaunaOrSupabase();
            console.log(this.faunaOrSupabase);
        });
    } // end ngInit 
    setQueryStringParms() {
        console.log('running setQueryStringParms');
        let locSearchResult = new URLSearchParams(location.search);
        let locSearchResultCust = locSearchResult.get('cust');
        let locSearchResultQid = locSearchResult.get('qid');
        let locSearchResultIcode = locSearchResult.get('icode');
        if (locSearchResultCust != null) {
            this.cust = locSearchResultCust;
        }
        if (locSearchResultQid != null) {
            this.qid = locSearchResultQid;
        }
        // if (locSearchResultIcode != null) {
        //   this.icode = locSearchResultIcode
        // }
        if (this.cust == '?') {
            this.cust = '2';
        }
        if (this.qid == '?') {
            this.qid = '1';
        }
    } // end setQueryStringParms
    setAuthOnFun() {
        console.log('running 158 app component setAuthOnFun');
        this.qncAuthorized = true;
        this.menuButsAlive = true; //make menu alive
    } // end setAuthOnFun
    surveySelected(surveyNameParm) {
        console.log('165 app running  surveySelected.surveyNameParm:');
        console.log(surveyNameParm);
        this.surveyName = surveyNameParm;
        // get here from profile screen. user has selected a qid.
        //  pro already set querystring.
        // blank out arrays, prior to fetching data
        this.groupArray = [];
        this.rulesArray = [];
        this.questArray = [];
        this.scoreboardsArray = [];
        this.scoreboardRangesArray = [];
        this.setQueryStringParms(); //set  cust & qid from querystring
        // read lotsa db tables cuz qid is now selected.
        if (this.faunaOrSupabase == 'fauna') {
            this.readManyFaunaDbTables();
        } // end if 
        if (this.faunaOrSupabase == 'supabase') {
            this.readManySupabaseDbTables();
        } // end if
    } // end surveySelected
    qidArrayWasBuilt(qidArrayParmIn) {
        console.log('running 193 app qidArrayWasBuilt');
        // get here from profile screen. 
        // profile screen looks up the subscriber's qids,
        // and has built the qidArray.
        // let's keep a copy of qidArray in app component,
        // just to carry it around once per login,
        // instead of re-reading the qidArray
        // every time he views the profile.
        this.qidArray = qidArrayParmIn;
        console.log('199 app qidArrayWasBuilt. app qidArray: ');
        console.table(this.qidArray);
    } // end qidArrayWasBuilt
    subscriptionObjWasBuilt(subscriptObjParm) {
        console.log('running app subscriptionObjWasBuilt');
        this.subscriptionObj = subscriptObjParm;
    } // end subscriptionObjWasBuilt
    teamMemberObjWasBuilt(teamMemberObjParm) {
        this.teamMemberObj = teamMemberObjParm;
    } // end teamMemberObjWasBuilt
    showQncFun() {
        this.setAllShowCompFalse();
        this.showQnc = true;
    } //end showQncFun
    showWwqFun() {
        this.compTitle = 'Qna Questions';
        if (this.showQncWwqd) {
            // jumping from wwqd to wwq
            this.wwqFilterReset = false;
        }
        else {
            this.wwqFilterReset = true;
        }
        this.setAllShowCompFalse();
        this.showQncWwq = true;
    } // end showWwqFun
    showWwqdFun(ev) {
        this.compTitle = 'Qna Question Detail';
        this.setAllShowCompFalse();
        this.showQncWwqd = true;
    } // end showWwqdFun
    showWwgFun() {
        this.compTitle = 'Qna Groups';
        if (this.showQncWwgd) {
            // jumping from wwgd to wwg
            this.wwgFilterReset = false;
        }
        else {
            this.wwgFilterReset = true;
        }
        this.setAllShowCompFalse();
        this.showQncWwg = true;
    } // end showWwgFun
    showWwgdFun(ev) {
        this.compTitle = 'Qna Group Details';
        this.setAllShowCompFalse();
        this.showQncWwgd = true;
    } // end showWwgdFun
    showWwrFun() {
        this.compTitle = 'Qna Rules';
        if (this.showQncWwrd) {
            // jumping from wwrd to wwr
            this.wwrFilterReset = false;
        }
        else {
            this.wwrFilterReset = true;
        }
        this.setAllShowCompFalse();
        this.showQncWwr = true;
    } // end showWwrFun
    showWwrdFun(ev) {
        this.compTitle = 'Qna Rule Details';
        this.setAllShowCompFalse();
        this.showQncWwrd = true;
    } // end showWwrdFun
    showWwiFun(ev) {
        this.compTitle = 'Qna Invitations';
        this.setAllShowCompFalse();
        this.showQncWwi = true;
    } // end showWwiFun
    showWwuFun(ev) {
        this.compTitle = 'Qna Participants';
        this.setAllShowCompFalse();
        this.showQncWwu = true;
    } // end showWwuFun
    showWwsFun(ev) {
        console.log('running showWwsFun');
        this.compTitle = 'Qna Admin Login';
        this.qncAuthorized = false;
        this.menuButsAlive = false;
        this.surveyMenuButsAlive = false;
        this.groupArray = [];
        this.rulesArray = [];
        this.questArray = [];
        this.scoreboardsArray = [];
        this.scoreboardRangesArray = [];
        this.daQuestion = 'no Question yet';
        this.wwqdCaller = 'no wwqdCaller yet';
        this.qid = '?';
        this.cust = '?';
        // this.accumObj = {}
        this.teamMemberUserId = '';
        this.subscriberInternalId = '';
        this.dbReadCount = 0;
        this.qidArray = [];
        this.usersArray = [];
        this.subscriptionObj = {};
        this.teamMemberObj = {};
        this.daScoreboardNbr = '';
        this.wwsrdCaller = 'no caller yet, sir.';
        this.firstLogin = false;
        this.setAllShowCompFalse();
        this.showQncWws = true;
    } // end showWwsFun
    showProFun() {
        //alert('239 showProFun')
        this.compTitle = 'Qna Profile';
        //this.whichMenuOptionToHighlight = 'profile'
        this.setAllShowCompFalse();
        this.showQncPro = true;
    } // end showProFun
    showWwsrFun() {
        console.log('running showWwsrFun');
        this.compTitle = 'Qna Scoreboards';
        if (this.showQncWwsrd) {
            // jumping from wwsrd to wwsr
            this.wwsrFilterReset = false;
        }
        else {
            this.wwsrFilterReset = true;
        }
        this.setAllShowCompFalse();
        this.showQncWwsr = true;
    } // end showWwsrFun
    showWwsrdFun(ev) {
        console.log('running showWwsrdFun');
        this.compTitle = 'Qna Scoreboard Detail';
        this.setAllShowCompFalse();
        this.showQncWwsrd = true;
    } // end showWwsrdFun
    setAllShowCompFalse() {
        this.showQnc = false;
        this.showQncWwg = false;
        this.showQncWwgd = false;
        this.showQncWwq = false;
        this.showQncWwqd = false;
        this.showQncWwr = false;
        this.showQncWwrd = false;
        this.showQncWwi = false;
        this.showQncWwu = false;
        this.showQncWws = false;
        this.showQncPro = false;
        this.showQncWwsr = false;
        this.showQncWwsrd = false;
        this.showQncConv = false;
    } // end setAllShowCompFalse
    setQuestionFromWwqFun(ev) {
        console.log('running app setQuestionFromWwqFun');
        // user selected a question from wwq
        // pass it into daquestion
        // to get ready to call wwqd
        this.daQuestion = ev;
        this.wwqdCaller = 'wwq';
    } // end setQuestionFromWwqFun
    setQuestionsFromWwqFun(ev) {
        console.log('running app setQuestionsFromWwqFun');
        this.questArray = ev;
    } // end setQuestionsFromWwqFun
    setScoreboardNbrFromWwsrFun(ev) {
        console.log('running app setScoreboardNbrFromWwsrFun');
        // user selected a scoreboard from wwsr
        // pass it into daScoreboard
        // to get ready to call wwsrd
        this.daScoreboardNbr = ev;
        this.wwsrdCaller = 'wwsr';
    } // end setScoreboardNbrFromWwsrFun
    setScoreboardsFromWwsrFun(ev) {
        console.log('running app setScoreboardsFromWwsrFun');
        // he is jumping from scoreboard list to scoreboard detail
        this.scoreboardsArray = ev;
    } // end setScoreboardsFromWwsrFun
    setRuleNbrFromWwrFun(ev) {
        // he is jumping from rule list to rule detail
        console.log('running app setRuleNbrFromWwrFun');
        this.daRuleNbr = ev;
        console.log('app 309 rule nbr:', this.daRuleNbr);
    } // end setRuleNbrFromWwrFun
    setRulesFromWwrFun(ev) {
        console.log('running app setRulesFromWwrFun');
        // he is jumping from rule list to rule detail
        this.rulesArray = ev;
    } // end setRulesFromWwrFun
    setGroupNbrFromWwgFun(ev) {
        // he is jumping from rule list to rule detail
        console.log('running app setGroupNbrFromWwgFun');
        this.daGroupNbr = ev;
        console.log('app 319 group nbr:', this.daGroupNbr);
    } // end setGroupNbrFromWwgFun
    setGroupsFromWwgFun(ev) {
        console.log('running app setRulesFromWwrFun');
        // he is jumping from group list to group detail
        this.groupArray = ev;
    } // end setGroupsFromWwgFun
    escKeyWasHit() {
        console.log('running app escKeyWasHit');
        if (this.showQncWwqd) { // he was in wwqd
            this.showWwqFun();
            return;
        }
        if (this.showQncWwgd) { // he was in wwgd
            this.showWwgFun();
            return;
        }
        if (this.showQncWwrd) { // he was in wwrd
            this.showWwrFun();
            return;
        }
        if (this.showQncWwsrd) { // he was in wwsrd
            this.showWwsrFun();
            return;
        }
        if (this.showQncWws) {
            return;
        }
        // default jump to pro
        this.showProFun();
        // alert('i wanna turn menu pro green, man.')
    } // end escKeyWasHit
    readManyFaunaDbTables() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.surveyMenuButsAlive = false; //set true after table reads
            this.loadingDataMsg = 'loading survey ...';
            this.loadingDataBusy = true;
            yield this.launchReadFaunaQuestions();
            yield this.launchReadFaunaRules();
            yield this.launchReadFaunaGroups();
            yield this.launchReadFaunaScoreboards();
            yield this.launchReadFaunaRanges();
            this.surveyMenuButsAlive = true;
            this.loadingDataMsg = '';
            this.loadingDataBusy = false;
            console.log('done with readManyFaunaDbTables');
        });
    } // end readManyFaunaDbTables
    launchReadFaunaQuestions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchReadFaunaQuestions');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadQuestions(this.cust, this.qid);
            this.faunaData = faunaRes.map(f => f.data);
            this.questArray = this.faunaData;
            console.log('list of faunaData questions we just read:');
            console.table(this.faunaData);
        });
    } // end launchReadFaunaQuestions
    launchReadFaunaRules() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchReadFaunaRules');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadRules(this.cust, this.qid);
            this.faunaData = faunaRes.map(f => f.data);
            this.rulesArray = this.faunaData;
            console.log('list of faunaData rules we just read:');
            console.table(this.faunaData);
        });
    } // end launchReadFaunaRules
    launchReadFaunaGroups() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadGroups(this.cust, this.qid);
            console.log('running launchReadFaunaGroups');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadGroups(this.cust, this.qid);
            this.faunaData = faunaRes.map(f => f.data);
            this.groupArray = this.faunaData;
            console.log('list of faunaData groups we just read:');
            console.table(this.faunaData);
        });
    } // end launchReadFaunaGroups
    launchReadFaunaScoreboards() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadScoreboards(this.cust, this.qid);
            console.log('running launchReadFaunaScoreboards');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadScoreboards(this.cust, this.qid);
            this.faunaData = faunaRes.map(f => f.data);
            this.scoreboardsArray = this.faunaData;
            console.log('list of faunaData scoreboards we just read:');
            console.table(this.faunaData);
        });
    } // end launchReadFaunaScoreboards
    launchReadFaunaRanges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadScoreboardRanges(this.cust, this.qid);
            console.log('running launchReadFaunaRanges');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadScoreboardRanges(this.cust, this.qid);
            this.faunaData = faunaRes.map(f => f.data);
            this.scoreboardRangesArray = this.faunaData;
            console.log('list of faunaData ranges we just read:');
            console.table(this.faunaData);
        });
    } // end launchReadFaunaRanges
    readFaunaTablesForEtl() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running readFaunaTablesForEtl');
            // launch this function via an html button marked: readFaunaTablesForEtl
            // run this when you need to etl one of the tables 
            // that are not part of the mass read of different tables at startup.
            // await this.launchFaunaReadMultAnswers()  //one cust, one qid
            // await this.launchFaunaReadMultScores()   //one cust, one qid
            // await this.launchFaunaReadUsers()       //one cust, one qid
            // await this.launchFaunaReadMultSubscribers() // all 
            // await this.launchFaunaReadMultTeamMembers() // all
            // await this.launchFaunaReadMultSurveys()     // all
            this.supaEtlEnabled = false; // turn on the button to enable launchEtl
        });
    } // end readFaunaTablesForEtl
    launchFaunaReadMultAnswers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchFaunaReadMultAnswers');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadMultAnswers(this.cust, this.qid);
            this.faunaData = faunaRes.map(f => f.data);
            this.answersArrayForEtl = this.faunaData;
            console.log('list of faunaData answers we just read:');
            console.table(this.faunaData);
        });
    } // end launchFaunaReadMultAnswers
    launchFaunaReadMultScores() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchFaunaReadMultScores');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadMultScores(this.cust, this.qid);
            this.faunaData = faunaRes.map(f => f.data);
            this.scoresArray = this.faunaData;
            console.log('list of faunaData scores we just read:');
            console.table(this.faunaData);
        });
    } // end launchFaunaReadMultScores
    launchFaunaReadUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchFaunaReadUsers');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadUsers(this.cust, this.qid);
            this.faunaData = faunaRes.map(f => f.data);
            this.usersArray = this.faunaData;
            console.log('list of faunaData users we just read:');
            console.table(this.faunaData);
        });
    } // end launchFaunaReadUsers
    launchFaunaReadMultSubscribers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchFaunaReadMultSubscribers');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadMultSubscribers();
            this.faunaData = faunaRes.map(f => f.data);
            this.subscribersArray = this.faunaData;
            console.log('list of faunaData subscribers we just read:');
            console.table(this.faunaData);
        });
    } // end launchFaunaReadMultSubscribers
    launchFaunaReadMultTeamMembers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchFaunaReadMultTeamMembers');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadMultTeamMembers();
            this.faunaData = faunaRes.map(f => f.data);
            this.teamMembersArray = this.faunaData;
            console.log('list of faunaData teamMembers we just read:');
            console.table(this.faunaData);
        });
    } // end launchFaunaReadMultTeamMembers
    launchFaunaReadMultSurveys() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchFaunaReadMultSurveys');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadMultSurveys();
            this.faunaData = faunaRes.map(f => f.data);
            this.surveysArrayForEtl = this.faunaData;
            console.log('list of faunaData surveys we just read:');
            console.table(this.faunaData);
        });
    } // endlaunchFaunaReadMultSurveys
    sortGroupsByNbr() {
        this.groupArray
            .sort((a, b) => (Number(a.groupNbr) > Number(b.groupNbr))
            ? 1 : (a.groupNbr == b.groupNbr)
            ? ((a.groupName > b.groupName) ? 1 : -1) : -1);
    } // end sortGroupsByNbr
    sortScoreboards() {
        console.log('522 running sortScoreboards');
        this.scoreboardsArray
            .sort((a, b) => a.scoreboardName > b.scoreboardName
            ? 1 : (Number(a.scoreboardNbr) == Number(b.scoreboardNbr))
            ? (Number(a.scoreboardNbr) > Number(b.scoreboardNbr) ? 1 : -1) : -1);
    } // end sortScoreboards
    sortScoreboardRanges() {
        console.log('669 running sortScoreboardRanges');
        this.scoreboardRangesArray
            .sort((a, b) => (Number(a.scoreboardNbr) > Number(b.scoreboardNbr))
            ? 1 : (Number(a.scoreboardNbr) == Number(b.scoreboardNbr))
            ? ((a.rangeNbr > b.rangeNbr) ? 1 : -1) : -1);
        console.table(this.scoreboardRangesArray);
        console.log('853 sorted');
    } // end sortScoreboardRanges
    ////////////////////////////////////////////////////////////
    readManySupabaseDbTables() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('193 running readManySupabaseDbTables');
            this.surveyMenuButsAlive = false;
            this.loadingDataMsg = 'loading survey...';
            this.loadingDataBusy = true;
            this.supaKeyFlds = { "cust": this.cust, "qid": this.qid };
            yield this.launchReadSupabase('qtQuestions', this.supaKeyFlds);
            yield this.launchReadSupabase('qtRules', this.supaKeyFlds);
            yield this.launchReadSupabase('qtGroups', this.supaKeyFlds);
            yield this.launchReadSupabase('qtScoreboards', this.supaKeyFlds);
            yield this.launchReadSupabase('qtScoreboardRanges', this.supaKeyFlds);
            this.surveyMenuButsAlive = true;
            this.loadingDataMsg = '';
            this.loadingDataBusy = false;
            console.log('done with readManySupabaseDbTables');
        });
    } // end readManySupabaseDbTables
    launchReadSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log(Date.now() / 10000, '730 running launchReadSupabase...');
            console.table(flds);
            let supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].readSupabase(tbl, flds);
            console.log(Date.now() / 10000, '733 done waiting for apiSupabase.  supaRes:');
            console.log(supaRes); //supaRes is only a promise unless I await. 
            //supaRes is null if fieldname is wrong.
            //supaRes is an empty object if not found.
            this.supaData = supaRes.supabaseData;
            if (tbl == 'qtQuestions') {
                this.questArray = this.supaData.slice();
            }
            if (tbl == 'qtRules') {
                this.rulesArray = this.supaData.slice();
            }
            if (tbl == 'qtGroups') {
                this.groupArray = this.supaData.slice();
            }
            if (tbl == 'qtScoreboards') {
                this.scoreboardsArray = this.supaData.slice();
            }
            if (tbl == 'qtScoreboardRanges') {
                this.scoreboardRangesArray = this.supaData.slice();
            }
            console.log(Date.now() / 10000, '741 end of launchReadSupabase.');
        });
    } // end launchReadSupabase
    launchAddSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchAddSupabase.  flds:');
            console.table(flds);
            // this para works. appends more rows to supabase. 
            let supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].addSupabase(tbl, flds);
        });
    }
    launchEtl() {
        console.log('running launchEtl');
        this.supaEtlEnabled = false; // turn off button that enables launchEtl
        // 1 comment in/out the table reads in para readFaunaTablesForEtl
        // 2 review the live etlSupabase functions below (those not commented out)
        // 3 select a survey you want to etl to supabase
        // 4 hit button to read fauna tables into arrays 
        // 5 hit button to launch Etl  (run this func)
        // someday might want to zero load the tables before etl.
        // this would allow doing a fresh etl after day to day fauna work,
        // without having to delete-all via supabase table editor.
        // this.etlSupabaseQuestions() 
        // this.etlSupabaseRules()
        // this.etlSupabaseGroups()
        // this.etlSupabaseScoreboards()
        // this.etlSupabaseScoreboardRanges() 
        // =================================
        // this.etlSupabaseUsers()    // all participants for a cust qid
        // this.etlSupabaseAnswers()  // all participants' answers for a cust qid
        // this.etlSupabaseScores()   // all participants' scores for a cust qid
        // =================================
        // april 2023 probably want to run these three tables separately.
        // these tables are NOT keyed by cust + qid.
        // comment-out these tables after a separate etl.
        // this.etlSupabaseSubscribers() // all custs
        // this.etlSupabaseTeamMembers() // all custs
        // this.etlSupabaseSurveys()     // all custs
    } // end launchEtl
    etlSupabaseQuestions() {
        console.log('504 running etlSupabaseQuestions');
        for (let i = 0; i < this.questArray.length; i++) {
            this.supaFlds = this.questArray[i];
            this.launchAddSupabase('qtQuestions', this.supaFlds);
        } // end for
    } // end  etlSupabaseQuestions()
    etlSupabaseRules() {
        console.log('509 running etlSupabaseRules');
        for (let i = 0; i < this.rulesArray.length; i++) {
            this.supaFlds = this.rulesArray[i];
            this.launchAddSupabase('qtRules', this.supaFlds);
        } // end for
    } // end  etlSupabaseRules()
    etlSupabaseGroups() {
        console.log('518 running etlSupabaseGroups');
        for (let i = 0; i < this.groupArray.length; i++) {
            this.supaFlds = this.groupArray[i];
            this.launchAddSupabase('qtGroups', this.supaFlds);
        } // end for
    } // end etlSupabaseGroups
    etlSupabaseScoreboards() {
        console.log('518 running etlSupabaseScoreboards');
        for (let i = 0; i < this.scoreboardsArray.length; i++) {
            this.supaFlds = this.scoreboardsArray[i];
            this.launchAddSupabase('qtScoreboards', this.supaFlds);
        } // end for
    } // end etlSupabaseScoreboards
    etlSupabaseScoreboardRanges() {
        console.log('745 running etlSupabaseScoreboardRanges');
        for (let i = 0; i < this.scoreboardRangesArray.length; i++) {
            this.supaFlds = this.scoreboardRangesArray[i];
            this.launchAddSupabase('qtScoreboardRanges', this.supaFlds);
        } // end for
    }
    etlSupabaseAnswers() {
        console.log('822 running etlSupabaseAnswers');
        // we alread fetched all the fauna answers for cust qid, 
        // so now write answersArrayForEtl
        console.log('826 answersArrayForEtl:');
        console.table(this.answersArrayForEtl);
        for (let i = 0; i < this.answersArrayForEtl.length; i++) {
            this.supaFlds = this.answersArrayForEtl[i];
            this.launchAddSupabase('qtAnswers', this.supaFlds);
        } // end for
    } // end etlSupabaseAnswers
    etlSupabaseSurveys() {
        console.log('842 running etlSupabaseSurveys');
        for (let i = 0; i < this.surveysArrayForEtl.length; i++) {
            this.supaFlds = this.surveysArrayForEtl[i];
            this.launchAddSupabase('qtSurveys', this.supaFlds);
        } // end for
    } // end etlSupabaseSurveys
    etlSupabaseUsers() {
        console.log('890 running etlSupabaseUsers');
        for (let i = 0; i < this.usersArray.length; i++) {
            this.supaFlds = this.usersArray[i];
            this.launchAddSupabase('qtUsers', this.supaFlds);
        } // end for
    } // end etlSupabaseUsers
    etlSupabaseScores() {
        console.log('890 running etlSupabaseScores');
        for (let i = 0; i < this.scoresArray.length; i++) {
            this.supaFlds = this.scoresArray[i];
            this.launchAddSupabase('qtScores', this.supaFlds);
        } // end for
    } // end etlSupabaseScores
    etlSupabaseSubscribers() {
        console.log('969 running etlSupabaseSubscribers');
        for (let i = 0; i < this.subscribersArray.length; i++) {
            this.supaFlds = this.subscribersArray[i];
            this.launchAddSupabase('qtSubscribers', this.supaFlds);
        } // end for
    } // end etlSupabaseSubscribers
    etlSupabaseTeamMembers() {
        console.log('994 running etlSupabaseTeamMembers');
        for (let i = 0; i < this.teamMembersArray.length; i++) {
            this.supaFlds = this.teamMembersArray[i];
            this.launchAddSupabase('qtTeamMembers', this.supaFlds);
        } // end for
    } // end etlSupabaseTeamMembers
} // end export AppComponent
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.Title)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveDocument"]);
    } }, decls: 15, vars: 15, consts: [[3, "authIn", "showMenButsIn", "showSurveyMenButsIn", "compTitleIn", "surveyNameIn", "loadingDataMsg", "wwqJumpOut", "wwgJumpOut", "wwrJumpOut", "wwiJumpOut", "wwuJumpOut", "wwsJumpOut", "proJumpOut", "wwsrJumpOut", 4, "ngIf"], [3, "subsetsIn", "questionsIn", "showQnc", 4, "ngIf"], [3, "subscriberInternalIdIn", "subscriptionObjIn", "teamMemberObjIn", "custIn", "qidIn", "qidArrayIn", "loadingDataBusyIn", "faunaOrSupabaseIn", "surveySelectOut", "qidArrayOut", "subscriptionObjOut", 4, "ngIf"], [3, "questionsIn", "groupsIn", "filterResetIn", "wwgdJumpOut", "groupsOut", "groupNbrOut", 4, "ngIf"], [3, "custIn", "qidIn", "groupNbrIn", "groupsIn", "faunaOrSupabaseIn", "wwgJumpOut", 4, "ngIf"], [3, "custIn", "qidIn", "subsetIn", "subsetsQncWwq", "questionsIn", "rulesIn", "groupsIn", "filterResetIn", "wwqdJumpOut", "questionNbrOut", "questionsOut", 4, "ngIf"], [3, "custIn", "qidIn", "questionNbrIn", "questionsIn", "rulesIn", "subsetsIn", "faunaOrSupabaseIn", "wwqJumpOut", 4, "ngIf"], [3, "questionsIn", "rulesIn", "subsetsIn", "filterResetIn", "rulesOut", "ruleNbrOut", "wwrdJumpOut", 4, "ngIf"], [3, "custIn", "qidIn", "ruleNbrIn", "rulesIn", "groupsIn", "scoreboardsIn", "questionsIn", "faunaOrSupabaseIn", "wwrJumpOut", 4, "ngIf"], [3, "custIn", "qidIn", "qncJumpOut", 4, "ngIf"], [3, "custIn", "qidIn", "scoreboardsIn", "scoreboardRangesIn", "surveyNameIn", "xxAnswersIn", "faunaOrSupabaseIn", 4, "ngIf"], [3, "firstLoginIn", "authIn", "faunaOrSupabaseIn", "qncSetAuthOnOut", "proJumpOut", "teamMemberObjOut", 4, "ngIf"], [4, "ngIf"], [3, "custIn", "qidIn", "scoreboardNbrIn", "scoreboardsIn", "scoreboardRangesIn", "filterResetIn", "questionsIn", "scoreboardNbrOut", "scoreboardsOut", "wwsrdJumpOut", 4, "ngIf"], [3, "custIn", "qidIn", "scoreboardNbrIn", "scoreboardsIn", "scoreboardRangesIn", "rulesIn", "subsetsIn", "faunaOrSupabaseIn", "wwsrJumpOut", 4, "ngIf"], [3, "authIn", "showMenButsIn", "showSurveyMenButsIn", "compTitleIn", "surveyNameIn", "loadingDataMsg", "wwqJumpOut", "wwgJumpOut", "wwrJumpOut", "wwiJumpOut", "wwuJumpOut", "wwsJumpOut", "proJumpOut", "wwsrJumpOut"], [3, "subsetsIn", "questionsIn", "showQnc"], [3, "subscriberInternalIdIn", "subscriptionObjIn", "teamMemberObjIn", "custIn", "qidIn", "qidArrayIn", "loadingDataBusyIn", "faunaOrSupabaseIn", "surveySelectOut", "qidArrayOut", "subscriptionObjOut"], [3, "questionsIn", "groupsIn", "filterResetIn", "wwgdJumpOut", "groupsOut", "groupNbrOut"], [3, "custIn", "qidIn", "groupNbrIn", "groupsIn", "faunaOrSupabaseIn", "wwgJumpOut"], [3, "custIn", "qidIn", "subsetIn", "subsetsQncWwq", "questionsIn", "rulesIn", "groupsIn", "filterResetIn", "wwqdJumpOut", "questionNbrOut", "questionsOut"], [3, "custIn", "qidIn", "questionNbrIn", "questionsIn", "rulesIn", "subsetsIn", "faunaOrSupabaseIn", "wwqJumpOut"], [3, "questionsIn", "rulesIn", "subsetsIn", "filterResetIn", "rulesOut", "ruleNbrOut", "wwrdJumpOut"], [3, "custIn", "qidIn", "ruleNbrIn", "rulesIn", "groupsIn", "scoreboardsIn", "questionsIn", "faunaOrSupabaseIn", "wwrJumpOut"], [3, "custIn", "qidIn", "qncJumpOut"], [3, "custIn", "qidIn", "scoreboardsIn", "scoreboardRangesIn", "surveyNameIn", "xxAnswersIn", "faunaOrSupabaseIn"], [3, "firstLoginIn", "authIn", "faunaOrSupabaseIn", "qncSetAuthOnOut", "proJumpOut", "teamMemberObjOut"], [3, "custIn", "qidIn", "scoreboardNbrIn", "scoreboardsIn", "scoreboardRangesIn", "filterResetIn", "questionsIn", "scoreboardNbrOut", "scoreboardsOut", "wwsrdJumpOut"], [3, "custIn", "qidIn", "scoreboardNbrIn", "scoreboardsIn", "scoreboardRangesIn", "rulesIn", "subsetsIn", "faunaOrSupabaseIn", "wwsrJumpOut"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, AppComponent_app_qncmen_0_Template, 1, 6, "app-qncmen", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, AppComponent_app_qnc_1_Template, 1, 3, "app-qnc", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, AppComponent_app_qncpro_2_Template, 1, 8, "app-qncpro", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, AppComponent_app_qncwwg_3_Template, 1, 3, "app-qncwwg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, AppComponent_app_qncwwgd_4_Template, 1, 5, "app-qncwwgd", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, AppComponent_app_qncwwq_5_Template, 1, 8, "app-qncwwq", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, AppComponent_app_qncwwqd_6_Template, 1, 7, "app-qncwwqd", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, AppComponent_app_qncwwr_7_Template, 1, 4, "app-qncwwr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, AppComponent_app_qncwwrd_8_Template, 1, 8, "app-qncwwrd", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, AppComponent_app_qncwwi_9_Template, 1, 2, "app-qncwwi", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, AppComponent_app_qncwwu_10_Template, 1, 7, "app-qncwwu", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, AppComponent_app_qncwws_11_Template, 1, 3, "app-qncwws", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, AppComponent_app_qncconv_12_Template, 1, 0, "app-qncconv", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, AppComponent_app_qncwwsr_13_Template, 1, 7, "app-qncwwsr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](14, AppComponent_app_qncwwsrd_14_Template, 1, 8, "app-qncwwsrd", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncMen);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQnc);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncPro);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWwg);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWwgd);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWwq);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWwqd);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWwr);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWwrd);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWwi);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWwu);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWws);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncConv);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWwsr);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showQncWwsrd);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _qncmen_qncmen_component__WEBPACK_IMPORTED_MODULE_3__.QncmenComponent, _qncpro_qncpro_component__WEBPACK_IMPORTED_MODULE_4__.QncproComponent, _qncwwg_qncwwg_component__WEBPACK_IMPORTED_MODULE_5__.QncwwgComponent, _qncwwgd_qncwwgd_component__WEBPACK_IMPORTED_MODULE_6__.QncwwgdComponent, _qncwwq_qncwwq_component__WEBPACK_IMPORTED_MODULE_7__.QncwwqComponent, _qncwwqd_qncwwqd_component__WEBPACK_IMPORTED_MODULE_8__.QncwwqdComponent, _qncwwr_qncwwr_component__WEBPACK_IMPORTED_MODULE_9__.QncwwrComponent, _qncwwrd_qncwwrd_component__WEBPACK_IMPORTED_MODULE_10__.QncwwrdComponent, _qncwwi_qncwwi_component__WEBPACK_IMPORTED_MODULE_11__.QncwwiComponent, _qncwwu_qncwwu_component__WEBPACK_IMPORTED_MODULE_12__.QncwwuComponent, _qncwws_qncwws_component__WEBPACK_IMPORTED_MODULE_13__.QncwwsComponent, _qncconv_qncconv_component__WEBPACK_IMPORTED_MODULE_14__.QncconvComponent, _qncwwsr_qncwwsr_component__WEBPACK_IMPORTED_MODULE_15__.QncwwsrComponent, _qncwwsrd_qncwwsrd_component__WEBPACK_IMPORTED_MODULE_16__.QncwwsrdComponent], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _qncwwg_qncwwg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qncwwg/qncwwg.component */ 8266);
/* harmony import */ var _qncwwq_qncwwq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qncwwq/qncwwq.component */ 7290);
/* harmony import */ var _qncwwqd_qncwwqd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qncwwqd/qncwwqd.component */ 6081);
/* harmony import */ var _qncconv_qncconv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qncconv/qncconv.component */ 2152);
/* harmony import */ var _qncwwr_qncwwr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qncwwr/qncwwr.component */ 8191);
/* harmony import */ var _qncwwgd_qncwwgd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qncwwgd/qncwwgd.component */ 6244);
/* harmony import */ var _qncwwrd_qncwwrd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qncwwrd/qncwwrd.component */ 301);
/* harmony import */ var _qncwwi_qncwwi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./qncwwi/qncwwi.component */ 6755);
/* harmony import */ var _qncwwu_qncwwu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./qncwwu/qncwwu.component */ 7377);
/* harmony import */ var _qncwws_qncwws_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./qncwws/qncwws.component */ 2930);
/* harmony import */ var _qncmen_qncmen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./qncmen/qncmen.component */ 8130);
/* harmony import */ var _qncpro_qncpro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./qncpro/qncpro.component */ 172);
/* harmony import */ var _qncwwsr_qncwwsr_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./qncwwsr/qncwwsr.component */ 3377);
/* harmony import */ var _qncwwsrd_qncwwsrd_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./qncwwsrd/qncwwsrd.component */ 1092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);


//import { QncComponent } from './qnc/qnc.component';















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _qncwwg_qncwwg_component__WEBPACK_IMPORTED_MODULE_1__.QncwwgComponent,
        _qncwwq_qncwwq_component__WEBPACK_IMPORTED_MODULE_2__.QncwwqComponent,
        _qncwwqd_qncwwqd_component__WEBPACK_IMPORTED_MODULE_3__.QncwwqdComponent,
        _qncconv_qncconv_component__WEBPACK_IMPORTED_MODULE_4__.QncconvComponent,
        _qncwwr_qncwwr_component__WEBPACK_IMPORTED_MODULE_5__.QncwwrComponent,
        _qncwwgd_qncwwgd_component__WEBPACK_IMPORTED_MODULE_6__.QncwwgdComponent,
        _qncwwrd_qncwwrd_component__WEBPACK_IMPORTED_MODULE_7__.QncwwrdComponent,
        _qncwwi_qncwwi_component__WEBPACK_IMPORTED_MODULE_8__.QncwwiComponent,
        _qncwwu_qncwwu_component__WEBPACK_IMPORTED_MODULE_9__.QncwwuComponent,
        _qncwws_qncwws_component__WEBPACK_IMPORTED_MODULE_10__.QncwwsComponent,
        _qncmen_qncmen_component__WEBPACK_IMPORTED_MODULE_11__.QncmenComponent,
        _qncpro_qncpro_component__WEBPACK_IMPORTED_MODULE_12__.QncproComponent,
        _qncwwsr_qncwwsr_component__WEBPACK_IMPORTED_MODULE_13__.QncwwsrComponent,
        _qncwwsrd_qncwwsrd_component__WEBPACK_IMPORTED_MODULE_14__.QncwwsrdComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule] }); })();


/***/ }),

/***/ 2152:
/*!**********************************************!*\
  !*** ./src/app/qncconv/qncconv.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncconvComponent": () => (/* binding */ QncconvComponent)
/* harmony export */ });
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class QncconvComponent {
    constructor() {
        this.showConvTf = false; // set false after converting questions.
        this.edArray338 = [];
        this.edRuleArray338 = [];
        this.newQuestArray = [];
        this.newQuestObj = {};
        this.qtDbDataObj = {};
        this.newSubsetArrayTemp = [];
        this.newSubsetArray = [];
        this.newSubsetObj = {};
        this.newRuleObj = {};
        this.newRulesArray = [];
        this.new338Obj = {};
    }
    ngOnInit() {
        console.log('running ngOnInit qncconv');
        this.setEdArray338();
        this.setEdRuleArray338();
        //console.table(this.edArray338)
        console.table(this.edRuleArray338);
    }
    fileWasChosen(ev) {
        // alert ('running fileWasChosen')
        //console.table(ev)
        alert('file import disabled. too may commas and double quotes.');
        //this.readMyFile(ev) // uncomment this line to try to fix import.
    } // end of fileWasChosen
    readMyFile(ev) {
        console.log('running readMyFile');
        var file = ev.target.files[0];
        ///alert(file.name)
        var reader = new FileReader();
        reader.readAsText(file);
        //reader.onload = function(e) { // this duznt allow func refs.
        reader.onload = () => {
            console.log('The file text will be output here:');
            let myCsvTxt = reader.result.toString();
            //console.log(e.target.result)
            console.log(myCsvTxt);
            // this.transformCsvToJson(e.target.result)
            // Feb 2021 cant seem to make this work, 
            // easier if I  hardcoded the damn text into edArray338.
            let allTextLines = myCsvTxt.split(/\r\n|\n/);
            let objHead = allTextLines[0].split(',');
            let new338Array = [];
            for (let i = 1; i < 334; i++) { //334 to filter out into/brk/fin
                console.log(i);
                this.build338Object(allTextLines[i]); //builds newObj338
                //console.log(this.new338Obj)
                new338Array.push(this.new338Obj);
                //console.table(new338Array)
            }
            // over write the hard coded edArray338:
            this.edArray338 = new338Array;
            console.log('end reader onload');
        }; // end reader.onload 
    } // end readMyFile
    build338Object(tl) {
        // set vals in one new338Obj
        let x = tl.split(', ').join('^ ');
        x = x.split('"""').join('***');
        x = x.split('" "').join('""');
        x = x.split('" "').join('""');
        x = x.split('""').join('**');
        x = x.split('"').join('*');
        x = x.split('*{').join('{');
        x = x.split('.*').join('.');
        x = x.split(',');
        console.log(x);
        //x = x.split('|').join(',')
        // trade karat for comma billy
        this.new338Obj = {
            "quest_id": x[0],
            "qid": x[1],
            "quest": x[2].replace('^', ',').replace('^', ','),
            "subset": x[3].replace('**', ''),
            "accum1": x[4].replace('**', ''),
            "accum2": x[5].replace('**', ''),
            "accum3": x[6].replace('**', ''),
            "seq": x[7].replace('**', ''),
            "answer_dt": x[8].replace('**', ''),
            "cor_ans": x[9],
            "weight": x[10],
            "qstyle": x[11]
        };
        console.log('104..................');
        console.table(this.new338Obj);
    }
    setEdArray338() {
        // hard coded quest array is big, and can be disabled after use.
        // instead of this para, I tried to import a text file, but gave up.
        // too many dbl quotes and commas.
        this.edArray338 = []; // make an empty array when ready to build.
        // this.edArray338 =     // disable this block when ready to build.
        // [
        //   {
        //     "quest_id": 26,
        //     "qid": 1,
        //     "quest": "{Style}It would not surprise me if others felt that I was very organized and disciplined.",
        //     "subset": "MAIN",
        //     "accum1": "DA3",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.12,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 27,
        //     "qid": 1,
        //     "quest": "{Style}I do believe that one of my strengths is to recall small details, even if significant time has passed.",
        //     "subset": "MAIN",
        //     "accum1": "DA3",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.88,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 28,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that I am a perfectionist so I usually spend the extra time required to do things extremely well.",
        //     "subset": "MAIN",
        //     "accum1": "DA3",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.18,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 29,
        //     "qid": 1,
        //     "quest": "{Style}I feel better and I'm less anxious with a clear plan of action and well defined goals.",
        //     "subset": "MAIN",
        //     "accum1": "DA3",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.86,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 30,
        //     "qid": 1,
        //     "quest": "{Style}I function much better when I'm clear about my role and the expectations are well defined.",
        //     "subset": "MAIN",
        //     "accum1": "DA3",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.86,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 31,
        //     "qid": 1,
        //     "quest": "{Style}I feel very strongly about my values, so I run the risk of being too demanding or even rigid.",
        //     "subset": "MAIN",
        //     "accum1": "DA3",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.01,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 32,
        //     "qid": 1,
        //     "quest": "{Style}I wouldn't be surprised if others felt that I always appear to be in control and seldom seem very relaxed.",
        //     "subset": "MAIN",
        //     "accum1": "DA3",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 284,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 33,
        //     "qid": 1,
        //     "quest": "{Style}I enjoy learning and reading about things that interest me.",
        //     "subset": "MAIN",
        //     "accum1": "DA4",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 887,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.93,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 34,
        //     "qid": 1,
        //     "quest": "{Style}I have a need to understand the world and what \"makes things tick\".",
        //     "subset": "MAIN",
        //     "accum1": "DA4",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 882,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.03,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 35,
        //     "qid": 1,
        //     "quest": "{Style}For the most part, I'd rather read a good book or work on a project than socialize with others.",
        //     "subset": "MAIN",
        //     "accum1": "DA4",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 851,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 36,
        //     "qid": 1,
        //     "quest": "{Style}Some people have said that I am too theoretical or make my explanations too complex.",
        //     "subset": "MAIN",
        //     "accum1": "DA4",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.04,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 37,
        //     "qid": 1,
        //     "quest": "{Style}I can get so involved in a project that I lose track of time.",
        //     "subset": "MAIN",
        //     "accum1": "DA4",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 38,
        //     "qid": 1,
        //     "quest": "{Style}When I am interested in a subject, I can learn best on my own.",
        //     "subset": "MAIN",
        //     "accum1": "DA4",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.98,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 39,
        //     "qid": 1,
        //     "quest": "{Style}I have no trouble working on problems or puzzles, just for the enjoyment of finding a solution.",
        //     "subset": "MAIN",
        //     "accum1": "DA4",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.86,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 40,
        //     "qid": 1,
        //     "quest": "{Style}I seldom limit myself to a \"casual understanding\" of subjects in which I have an interest.",
        //     "subset": "MAIN",
        //     "accum1": "DA4",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 41,
        //     "qid": 1,
        //     "quest": "{Style}Relating to others and having close friends is extremely important to me.",
        //     "subset": "MAIN",
        //     "accum1": "DB1",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.96,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 42,
        //     "qid": 1,
        //     "quest": "{Style}Others have mentioned that I'm too willing \"to meet the needs of others\" even at the expense of my own welfare.",
        //     "subset": "MAIN",
        //     "accum1": "DB1",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.12,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 43,
        //     "qid": 1,
        //     "quest": "{Style}Typically, my social style is to develop very strong emotional bonds to the people who are close to me.",
        //     "subset": "MAIN",
        //     "accum1": "DB1",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.93,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 44,
        //     "qid": 1,
        //     "quest": "{Style}I will \"go out of my way\" to meet the needs of others even if they take me for granted.",
        //     "subset": "MAIN",
        //     "accum1": "DB1",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 851,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.24,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 45,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that there are times when I feel that I become too jealous or possessive in my relationships.",
        //     "subset": "MAIN",
        //     "accum1": "DB1",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.66,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 46,
        //     "qid": 1,
        //     "quest": "{Style}When things are left undone, I feel I should take care of them so others don't look bad.",
        //     "subset": "MAIN",
        //     "accum1": "DB1",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.93,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 47,
        //     "qid": 1,
        //     "quest": "{Style}I feel that my close friends don't always appreciate all that I do for them.",
        //     "subset": "MAIN",
        //     "accum1": "DB1",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.02,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 48,
        //     "qid": 1,
        //     "quest": "{Style}I feel best when I have the opportunity to help others meet their needs.",
        //     "subset": "MAIN",
        //     "accum1": "DB1",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.14,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 49,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that being loyal to others or an organization gives me a strong positive sense of well-being.",
        //     "subset": "MAIN",
        //     "accum1": "DB2",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.21,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 50,
        //     "qid": 1,
        //     "quest": "{Style}I feel most secure when I maintain a positive relationship with those who are in authority.",
        //     "subset": "MAIN",
        //     "accum1": "DB2",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.17,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 51,
        //     "qid": 1,
        //     "quest": "{Style}I would rather have an ongoing relationship, even if I had to give up my own sense of autonomy.",
        //     "subset": "MAIN",
        //     "accum1": "DB2",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.92,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 52,
        //     "qid": 1,
        //     "quest": "{Style}Honestly I'd rather be part of a team than to take responsibility for leading others.",
        //     "subset": "MAIN",
        //     "accum1": "DB2",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.61,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 53,
        //     "qid": 1,
        //     "quest": "{Style}The need to be part of a group or an organization is very important to my sense of well-being.",
        //     "subset": "MAIN",
        //     "accum1": "DB2",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.12,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 54,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that I feel more secure or at my best when I am committed to a group effort.",
        //     "subset": "MAIN",
        //     "accum1": "DB2",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 55,
        //     "qid": 1,
        //     "quest": "{Style}It's a key principle that in a well-functioning company people should defer to those in authority.",
        //     "subset": "MAIN",
        //     "accum1": "DB2",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.86,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 56,
        //     "qid": 1,
        //     "quest": "{Style}Tradition, a sense of respect for authority and patriotism are all very important for a strong country.",
        //     "subset": "MAIN",
        //     "accum1": "DB2",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.03,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 57,
        //     "qid": 1,
        //     "quest": "{Style}The key to maintaining positive relationships is to avoid most conflict and maintain peace.",
        //     "subset": "MAIN",
        //     "accum1": "DB3",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.18,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 58,
        //     "qid": 1,
        //     "quest": "{Style}A good leader is a person who can minimize strife and conflict while keeping the peace at all cost.",
        //     "subset": "MAIN",
        //     "accum1": "DB3",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.01,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 59,
        //     "qid": 1,
        //     "quest": "{Style}When people have a conflict, I understand both sides so it is hard for me to decide who is right.",
        //     "subset": "MAIN",
        //     "accum1": "DB3",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.8,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 60,
        //     "qid": 1,
        //     "quest": "{Style}Sometimes it is better to give in so you can maintain harmonious and peaceful relationships.",
        //     "subset": "MAIN",
        //     "accum1": "DB3",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.13,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 61,
        //     "qid": 1,
        //     "quest": "{Style}When I get angry, I often \"stuff my feelings\" so others don't see my anger or feel that I create conflict.",
        //     "subset": "MAIN",
        //     "accum1": "DB3",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.01,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 62,
        //     "qid": 1,
        //     "quest": "{Style}I enjoy environments where team members compromise and everyone feels comfortable with the final outcome.",
        //     "subset": "MAIN",
        //     "accum1": "DB3",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.68,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 63,
        //     "qid": 1,
        //     "quest": "{Style}Given the choice, it is better to \"give in to others\" than create conflict because people get along better when harmony is maintained.",
        //     "subset": "MAIN",
        //     "accum1": "DB3",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.16,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 64,
        //     "qid": 1,
        //     "quest": "{Style}I feel that I am willing to accommodate to the needs of others in order to keep peace and avoid conflict.",
        //     "subset": "MAIN",
        //     "accum1": "DB3",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.03,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 65,
        //     "qid": 1,
        //     "quest": "{Style}I find myself daydreaming or wondering how things in the world could be better.",
        //     "subset": "MAIN",
        //     "accum1": "DB4",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.14,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 66,
        //     "qid": 1,
        //     "quest": "{Style}At times, I am self-absorbed and wonder how we could make the world a better place.",
        //     "subset": "MAIN",
        //     "accum1": "DB4",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 67,
        //     "qid": 1,
        //     "quest": "{Style}Personally I feel that beauty and ideals make people different from animals and more \"God-like.",
        //     "subset": "MAIN",
        //     "accum1": "DB4",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 0.87,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 68,
        //     "qid": 1,
        //     "quest": "{Style}In my more quiet moments, I am disturbed by all the pain and strife in the world.",
        //     "subset": "MAIN",
        //     "accum1": "DB4",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.16,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 69,
        //     "qid": 1,
        //     "quest": "{Style}In spite of all the beauty in the world, it can be a dreadful and hurtful place.",
        //     "subset": "MAIN",
        //     "accum1": "DB4",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 70,
        //     "qid": 1,
        //     "quest": "{Style}At times, I withdraw and feel melancholy as I ponder the world problems.",
        //     "subset": "MAIN",
        //     "accum1": "DB4",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 71,
        //     "qid": 1,
        //     "quest": "{Style}I feel a sense of creativity, where I have an urge to leave something positive behind.",
        //     "subset": "MAIN",
        //     "accum1": "DB4",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 0.69,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 72,
        //     "qid": 1,
        //     "quest": "{Style}I am pretty sure that we are all part of something larger and more transcendent than just ourselves.",
        //     "subset": "MAIN",
        //     "accum1": "DB4",
        //     "accum2": "A2",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 0.96,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 73,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that at times, I have felt so angry that I wanted to yell at someone.",
        //     "subset": "MAIN",
        //     "accum1": "N-AN",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 851,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.01,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 74,
        //     "qid": 1,
        //     "quest": "{Style}When people disappoint me, I would like to tell them exactly how I feel, even if it hurts their feelings.",
        //     "subset": "MAIN",
        //     "accum1": "N-AN",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.88,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 75,
        //     "qid": 1,
        //     "quest": "{Style}When I am focusing on a complex or difficult task, I get pretty irritated if I am distracted.",
        //     "subset": "MAIN",
        //     "accum1": "N-AN",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.03,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 76,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit I have a \"quick temper\" so I let others know how I feel or I am silently bothered and irritated.",
        //     "subset": "MAIN",
        //     "accum1": "N-AN",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.21,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 77,
        //     "qid": 1,
        //     "quest": "{Style}When I am under pressure, I worry about getting things done or not having enough time.",
        //     "subset": "MAIN",
        //     "accum1": "N-AX",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 78,
        //     "qid": 1,
        //     "quest": "{Style}When I am unsure of what others want, I can't relax until I clarify their expectations.",
        //     "subset": "MAIN",
        //     "accum1": "N-AX",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.82,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 79,
        //     "qid": 1,
        //     "quest": "{Style}Even if I know the people in the audience, I still get nervous about giving a formal presentation.",
        //     "subset": "MAIN",
        //     "accum1": "N-AX",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.96,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 80,
        //     "qid": 1,
        //     "quest": "{Style}If I am honest, I find new or unusual situations to be more anxiety provoking than challenging.",
        //     "subset": "MAIN",
        //     "accum1": "N-AX",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.05,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 81,
        //     "qid": 1,
        //     "quest": "{Style}Sometimes I feel sad or \"down\" and become a little concerned that I don't know why.",
        //     "subset": "MAIN",
        //     "accum1": "N-D",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.09,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 82,
        //     "qid": 1,
        //     "quest": "{Style}I must admit, I have periods where I seem to lack energy and vigor.",
        //     "subset": "MAIN",
        //     "accum1": "N-D",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.91,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 83,
        //     "qid": 1,
        //     "quest": "{Style}At times, for no apparent reason, I feel dejected or concerned about my future.",
        //     "subset": "MAIN",
        //     "accum1": "N-D",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 84,
        //     "qid": 1,
        //     "quest": "{Style}If I am honest, I am more pessimistic than most of my friends.",
        //     "subset": "MAIN",
        //     "accum1": "N-D",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.86,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 85,
        //     "qid": 1,
        //     "quest": "{Style}It is better to keep control in situations by, \"not tipping your hand too soon.",
        //     "subset": "N-PA",
        //     "accum1": "N-PA",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "Seldom True                      Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.97,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 86,
        //     "qid": 1,
        //     "quest": "{Style}Usually, if you want to be successful, you have to be pretty careful about the people you trust.",
        //     "subset": "N-PA",
        //     "accum1": "N-PA",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 87,
        //     "qid": 1,
        //     "quest": "{Style}I'm willing to admit that I'm a little too suspicious about other's motives but it works for me.",
        //     "subset": "N-PA",
        //     "accum1": "N-PA",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 284,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.97,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 88,
        //     "qid": 1,
        //     "quest": "{Style}Personally I feel that it is better to understand the motives of others than to trust people too much.",
        //     "subset": "N-PA",
        //     "accum1": "N-PA",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 887,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.96,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 89,
        //     "qid": 1,
        //     "quest": "{Style}I am silently ashamed of some of my behavior.",
        //     "subset": "MAIN",
        //     "accum1": "N-SH",
        //     "accum2": "X1",
        //     "accum3": "",
        //     "seq": 851,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 90,
        //     "qid": 1,
        //     "quest": "{Style}In my heart of hearts, I know that I should have set higher goals or worked harder.",
        //     "subset": "MAIN",
        //     "accum1": "N-SH",
        //     "accum2": "X1",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.91,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 91,
        //     "qid": 1,
        //     "quest": "{Style}If I'm honest, a real fear that I have is making a major social blunder and being totally embarrassed.",
        //     "subset": "MAIN",
        //     "accum1": "N-SH",
        //     "accum2": "A7",
        //     "accum3": "X1",
        //     "seq": 909,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 92,
        //     "qid": 1,
        //     "quest": "{Style}I'm not afraid to admit that I feel self-conscious when I am around very important or powerful people.",
        //     "subset": "MAIN",
        //     "accum1": "N-SH",
        //     "accum2": "A7",
        //     "accum3": "X1",
        //     "seq": 833,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.11,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 93,
        //     "qid": 1,
        //     "quest": "{Style}If my superior's boss unexpectedly called me, I'd be concerned that I might have made a mistake.",
        //     "subset": "MAIN",
        //     "accum1": "N-GU",
        //     "accum2": "A7",
        //     "accum3": "X1",
        //     "seq": 244,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.92,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 94,
        //     "qid": 1,
        //     "quest": "{Style}I must admit, I feel guilty if my behavior is offensive to others who I respect.",
        //     "subset": "MAIN",
        //     "accum1": "N-GU",
        //     "accum2": "A7",
        //     "accum3": "X1",
        //     "seq": 769,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.16,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 95,
        //     "qid": 1,
        //     "quest": "{Style}Personally I feel that when others criticize me, if I am realistic I know that I deserved it.",
        //     "subset": "MAIN",
        //     "accum1": "N-GU",
        //     "accum2": "X1",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.92,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 96,
        //     "qid": 1,
        //     "quest": "{Style}If things are going well, I get a nagging feeling that \"bad news\" is around the corner.",
        //     "subset": "MAIN",
        //     "accum1": "N-GU",
        //     "accum2": "X1",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.25,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 97,
        //     "qid": 1,
        //     "quest": "{Style}When I reflect on my behavior, I know I've been impulsive and it seemed okay at that time but I regretted my behavior.",
        //     "subset": "N-IM",
        //     "accum1": "N-IM",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 851,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 98,
        //     "qid": 1,
        //     "quest": "{Style}Sometimes I blurt out my feelings or views and wish that I had spent more time thinking.",
        //     "subset": "N-IM",
        //     "accum1": "N-IM",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.97,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 99,
        //     "qid": 1,
        //     "quest": "{Style}I'm willing to admit that I have been so caught up in the excitement of the moment that I ate or drank too much.",
        //     "subset": "N-IM",
        //     "accum1": "N-IM",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.92,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 100,
        //     "qid": 1,
        //     "quest": "{Style}There have been times in my life when I did something without thinking, that was a little wild or crazy.",
        //     "subset": "N-IM",
        //     "accum1": "N-IM",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.05,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 101,
        //     "qid": 1,
        //     "quest": "{Style}I really like to structure my work or plan ahead because it lowers my fear of making mistakes.",
        //     "subset": "N-CO",
        //     "accum1": "N-CO",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.85,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 102,
        //     "qid": 1,
        //     "quest": "{Style}Sometimes I just have to clean out a closet or a garage because I can't stand the mess any longer.",
        //     "subset": "N-CO",
        //     "accum1": "N-CO",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.88,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 103,
        //     "qid": 1,
        //     "quest": "{Style}I try to keep my valuables neat and orderly, since it bothers me when I cannot find things easily.",
        //     "subset": "N-CO",
        //     "accum1": "N-CO",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.21,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 104,
        //     "qid": 1,
        //     "quest": "{Style}I must admit that I need to organize things because I feel better when things are where they belong.",
        //     "subset": "N-CO",
        //     "accum1": "N-CO",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.24,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 105,
        //     "qid": 1,
        //     "quest": "{Style}Sometimes I have trouble falling asleep since my mind keeps running.",
        //     "subset": "N-OB",
        //     "accum1": "N-OB",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.93,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 106,
        //     "qid": 1,
        //     "quest": "{Style}Sometimes when I get a song or thought in my head it is hard for me to forget it.",
        //     "subset": "N-OB",
        //     "accum1": "N-OB",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.89,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 107,
        //     "qid": 1,
        //     "quest": "{Style}I probably spend too much time thinking and planning and I should be more spontaneous.",
        //     "subset": "N-OB",
        //     "accum1": "N-OB",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.77,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 108,
        //     "qid": 1,
        //     "quest": "{Style}When important things are left unfinished they rattle around in my mind and bother me.",
        //     "subset": "N-OB",
        //     "accum1": "N-OB",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.26,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 109,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that I cover up my negative and painful feelings but then they don't bother me as much.",
        //     "subset": "N-HY",
        //     "accum1": "N-HY",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.88,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 110,
        //     "qid": 1,
        //     "quest": "{Style}Sometimes I experience \"waves of feelings\" for no apparent reason.",
        //     "subset": "N-HY",
        //     "accum1": "N-HY",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.33,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 111,
        //     "qid": 1,
        //     "quest": "{Style}If I feel sad or down, I get involved in a fun activity and the painful feelings go away.",
        //     "subset": "N-HY",
        //     "accum1": "N-HY",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.74,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 112,
        //     "qid": 1,
        //     "quest": "{Style}If someone upsets me, I avoid seeing them, hide my pain and just \"think happy thoughts.",
        //     "subset": "N-HY",
        //     "accum1": "N-HY",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 284,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 113,
        //     "qid": 1,
        //     "quest": "{Style}I tend to get headaches or stomach pains when I am under stress.",
        //     "subset": "N-SO",
        //     "accum1": "N-SO",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 887,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.02,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 114,
        //     "qid": 1,
        //     "quest": "{Style}When I am under stress, I develop physical symptoms that tell me to slow down.",
        //     "subset": "N-SO",
        //     "accum1": "N-SO",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 882,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 1.15,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 115,
        //     "qid": 1,
        //     "quest": "{Style}If someone creates conflict that I'm involved in, I seldom confront them but then I worry about it.",
        //     "subset": "N-SO",
        //     "accum1": "N-SO",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 646,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.85,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 116,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that if I become openly angry and speak my mind, I worry that I went too far and lost control.",
        //     "subset": "N-SO",
        //     "accum1": "N-SO",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 619,
        //     "answer_dt": "Never                             Sometimes                             Often",
        //     "cor_ans": 0,
        //     "weight": 0.89,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 117,
        //     "qid": 1,
        //     "quest": "{Style}I usually like most of the people that I meet.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E1",
        //     "accum3": "",
        //     "seq": 851,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.06,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 118,
        //     "qid": 1,
        //     "quest": "{Style}Most people would say that I am a warm and friendly person.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E1",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 119,
        //     "qid": 1,
        //     "quest": "{Style}I find it easy to relate to strangers and usually have something nice to say.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E1",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 120,
        //     "qid": 1,
        //     "quest": "{Style}I am truly concerned about the people that I work for or associate with.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E1",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.89,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 121,
        //     "qid": 1,
        //     "quest": "{Style}For the most part, very few people would say that I am cold or unconcerned about others.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E1",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Disagree                          Sometimes                             Agree",
        //     "cor_ans": 0,
        //     "weight": 0.94,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 122,
        //     "qid": 1,
        //     "quest": "{Style}I enjoy relating to others, so I seek out friends and renew old contacts.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E1",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.04,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 123,
        //     "qid": 1,
        //     "quest": "{Style}I thoroughly enjoy working with others on projects or as part of a team.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E2",
        //     "accum3": "",
        //     "seq": 331,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.02,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 124,
        //     "qid": 1,
        //     "quest": "{Style}I usually feel at ease with others even if there are strangers in the group.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E2",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.89,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 125,
        //     "qid": 1,
        //     "quest": "{Style}Parties or the chance to meet new people are usually fun, so I look forward to the event.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E2",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.99,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 126,
        //     "qid": 1,
        //     "quest": "{Style}My preference is to work with others even if there are people that I don't know.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E2",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.14,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 1,
        //     "qid": 1,
        //     "quest": "{Style}I know that I have an extremely high energy and intensity level.",
        //     "subset": "MAIN",
        //     "accum1": "DA0",
        //     "accum2": "A1",
        //     "accum3": "A55",
        //     "seq": 555,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.29,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 2,
        //     "qid": 1,
        //     "quest": "{Style}I am very optimistic and upbeat, so it takes a great deal to \"shake me up or set me back.",
        //     "subset": "MAIN",
        //     "accum1": "DA0",
        //     "accum2": "A1",
        //     "accum3": "DA1C",
        //     "seq": 833,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.04,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 3,
        //     "qid": 1,
        //     "quest": "{Style}I can get so involved in what I am doing, that I may be unaware of what is going on around me.",
        //     "subset": "MAIN",
        //     "accum1": "DA0",
        //     "accum2": "A1",
        //     "accum3": "DA1C",
        //     "seq": 851,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.39,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 4,
        //     "qid": 1,
        //     "quest": "{Style}The thought of not being able to accomplish my goals seldom enters my mind, since I have so much energy.",
        //     "subset": "MAIN",
        //     "accum1": "DA0",
        //     "accum2": "A1",
        //     "accum3": "DA1C",
        //     "seq": 555,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.95,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 5,
        //     "qid": 1,
        //     "quest": "{Style}For the most part, I do not require very much sleep or rest.",
        //     "subset": "MAIN",
        //     "accum1": "DA0",
        //     "accum2": "A1",
        //     "accum3": "DA1C",
        //     "seq": 909,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.98,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 6,
        //     "qid": 1,
        //     "quest": "{Style}I am so active, that for relaxation I just change the type of activity that I am involved in.",
        //     "subset": "MAIN",
        //     "accum1": "DA0",
        //     "accum2": "A1",
        //     "accum3": "DA1C",
        //     "seq": 833,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.21,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 7,
        //     "qid": 1,
        //     "quest": "{Style}I have a strong need to experience all that life has to offer so I am an extremely active person.",
        //     "subset": "MAIN",
        //     "accum1": "DA0",
        //     "accum2": "A1",
        //     "accum3": "A55",
        //     "seq": 244,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.02,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 8,
        //     "qid": 1,
        //     "quest": "{Style}People who know me, feel I have an unquenchable zest for life.",
        //     "subset": "MAIN",
        //     "accum1": "DA0",
        //     "accum2": "A1",
        //     "accum3": "DA1C",
        //     "seq": 769,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.12,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 9,
        //     "qid": 1,
        //     "quest": "{Style}I believe that focusing on my own needs is more important than helping others.",
        //     "subset": "MAIN",
        //     "accum1": "DA1",
        //     "accum2": "A55",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.44,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 10,
        //     "qid": 1,
        //     "quest": "{Style}I am a very competitive person so I establish aggressive goals.",
        //     "subset": "MAIN",
        //     "accum1": "DA1",
        //     "accum2": "A1",
        //     "accum3": "DA1C",
        //     "seq": 558,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.77,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 11,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that how I'm viewed by others is important so I push myself to be successful.",
        //     "subset": "MAIN",
        //     "accum1": "DA1",
        //     "accum2": "A7",
        //     "accum3": "A55",
        //     "seq": 244,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.35,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 12,
        //     "qid": 1,
        //     "quest": "{Style}I am concerned about my appearance since my image is important to my overall sense of success.",
        //     "subset": "MAIN",
        //     "accum1": "DA1",
        //     "accum2": "A7",
        //     "accum3": "A55",
        //     "seq": 381,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.17,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 13,
        //     "qid": 1,
        //     "quest": "{Style}I believe that status and prestige is an important and obvious measure of success.",
        //     "subset": "MAIN",
        //     "accum1": "DA1",
        //     "accum2": "A1",
        //     "accum3": "DA1C",
        //     "seq": 851,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.31,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 14,
        //     "qid": 1,
        //     "quest": "{Style}The knowledge that I am respected by my peers or held in esteem is a major driver of my behavior.",
        //     "subset": "MAIN",
        //     "accum1": "DA1",
        //     "accum2": "A7",
        //     "accum3": "A55",
        //     "seq": 555,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.29,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 15,
        //     "qid": 1,
        //     "quest": "{Style}Some people may feel that I am self-centered but I think that they underestimate my actual abilities.",
        //     "subset": "MAIN",
        //     "accum1": "DA1",
        //     "accum2": "A1",
        //     "accum3": "DA1C",
        //     "seq": 909,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.5,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 16,
        //     "qid": 1,
        //     "quest": "{Style}When I compete with others and lose, if I am honest, it bothers me quite a bit.",
        //     "subset": "MAIN",
        //     "accum1": "DA1",
        //     "accum2": "A1",
        //     "accum3": "DA1C",
        //     "seq": 833,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.17,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 17,
        //     "qid": 1,
        //     "quest": "{Style}I am very confident in my ability to lead others, so when I get the chance, I'm willing to take the lead in a social setting.",
        //     "subset": "MAIN",
        //     "accum1": "DA2",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.16,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 18,
        //     "qid": 1,
        //     "quest": "{Style}I realize that when I drive toward a goal in a social setting, I can intimidate others.",
        //     "subset": "MAIN",
        //     "accum1": "DA2",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 19,
        //     "qid": 1,
        //     "quest": "{Style}I am entrepreneurial in my actions, so I don't always fit into established organizations.",
        //     "subset": "MAIN",
        //     "accum1": "DA2",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.79,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 20,
        //     "qid": 1,
        //     "quest": "{Style}The process of leading others, where I take on the risk, is a challenge that I truly enjoy.",
        //     "subset": "MAIN",
        //     "accum1": "DA2",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.2,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 21,
        //     "qid": 1,
        //     "quest": "{Style}It doesn't bother me to take a strong stand when it's necessary to get things done.",
        //     "subset": "MAIN",
        //     "accum1": "DA2",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 22,
        //     "qid": 1,
        //     "quest": "{Style}I am not surprised that others look for me to provide guidance and direction.",
        //     "subset": "MAIN",
        //     "accum1": "DA2",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.05,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 23,
        //     "qid": 1,
        //     "quest": "{Style}I would rather go \"off in my own direction\" than \"fold in with others\" because it is easier or causes less strife.",
        //     "subset": "MAIN",
        //     "accum1": "DA2",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.85,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 24,
        //     "qid": 1,
        //     "quest": "{Style}What we really need are more people who are willing to take the tough risks and lead others.",
        //     "subset": "MAIN",
        //     "accum1": "DA2",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 0.77,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 25,
        //     "qid": 1,
        //     "quest": "{Style}I believe it is important for one's success to have a good sense of structure and order.",
        //     "subset": "MAIN",
        //     "accum1": "DA3",
        //     "accum2": "A1",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 1.01,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 127,
        //     "qid": 1,
        //     "quest": "{Style}Usually, I do not enjoy working by myself for extended time periods.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E2",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.87,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 128,
        //     "qid": 1,
        //     "quest": "{Style}Given the option, I would like to spend my time interacting with others.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E2",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.09,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 129,
        //     "qid": 1,
        //     "quest": "{Style}I am very capable of standing up for my own views and stating my opinion.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E3",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.96,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 130,
        //     "qid": 1,
        //     "quest": "{Style}I'm not afraid to voice my opinion even if I don't always agree with others.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E3",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.01,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 131,
        //     "qid": 1,
        //     "quest": "{Style}In meetings, even with strangers, I am very willing to speak up and share my views.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E3",
        //     "accum3": "",
        //     "seq": 284,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.09,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 132,
        //     "qid": 1,
        //     "quest": "{Style}People seek my advice or support because they know I can deal with tough social issues.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E3",
        //     "accum3": "",
        //     "seq": 887,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.85,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 133,
        //     "qid": 1,
        //     "quest": "{Style}I find it easy to \"rise to the occasion\" and take charge even if there are conflicting views.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E3",
        //     "accum3": "",
        //     "seq": 882,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.13,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 134,
        //     "qid": 1,
        //     "quest": "{Style}I feel that I am assertive or even aggressive in sharing my opinions.",
        //     "subset": "MAIN",
        //     "accum1": "T-E",
        //     "accum2": "T-E3",
        //     "accum3": "",
        //     "seq": 646,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.96,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 135,
        //     "qid": 1,
        //     "quest": "{Style}Usually, I fully trust the intentions of others unless I have contrary information.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A1",
        //     "accum3": "",
        //     "seq": 851,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.09,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 136,
        //     "qid": 1,
        //     "quest": "{Style}I disagree with people who feel that most people will take advantage of you if they get the chance.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A1",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "Never True                       Sometimes                       Usually True",
        //     "cor_ans": 0,
        //     "weight": 0.9,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 137,
        //     "qid": 1,
        //     "quest": "{Style}Most people are honest and trustworthy, if you give them the chance.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A1",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.12,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 138,
        //     "qid": 1,
        //     "quest": "{Style}I am not a skeptical and cynical person.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A1",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.01,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 139,
        //     "qid": 1,
        //     "quest": "{Style}I assume the best about people unless I've had a bad experience or have reliable data to the contrary.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A1",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.04,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 140,
        //     "qid": 1,
        //     "quest": "{Style}For the most part, I believe that most people would help me if I asked.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A1",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.84,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 141,
        //     "qid": 1,
        //     "quest": "{Style}My usual approach is to cooperate with others and be helpful.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A2",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 142,
        //     "qid": 1,
        //     "quest": "{Style}Even if I feel that I have the right to be upset, I control my feelings in social settings because they lead to poor relationships.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A2",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Seldom True                       Sometimes                       Always True",
        //     "cor_ans": 0,
        //     "weight": 0.95,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 143,
        //     "qid": 1,
        //     "quest": "{Style}If others insult me, my philosophy is to \"forgive and forget.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A2",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.81,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 144,
        //     "qid": 1,
        //     "quest": "{Style}Sarcastic and opinionated people are hard to work with, so I don't \"take them on\" but try to improve the situation by keeping quiet.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A2",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.97,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 145,
        //     "qid": 1,
        //     "quest": "{Style}I seldom get into arguments with others or create interpersonal strife.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A2",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.09,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 146,
        //     "qid": 1,
        //     "quest": "{Style}I am glad that there is an emphasis on teamwork even if it slows decisions down a little.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A2",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.11,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 147,
        //     "qid": 1,
        //     "quest": "{Style}I believe that most accomplishments involve others so I feel very comfortable with a group effort.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A3",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 148,
        //     "qid": 1,
        //     "quest": "{Style}I believe that we all can make a contribution even if our motivations are very different.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A3",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.04,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 149,
        //     "qid": 1,
        //     "quest": "{Style}I feel more comfortable praising others than being in the limelight.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A3",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.76,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 150,
        //     "qid": 1,
        //     "quest": "{Style}I am very straightforward and easy to read so what you see is what you get.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A3",
        //     "accum3": "",
        //     "seq": 284,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.05,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 151,
        //     "qid": 1,
        //     "quest": "{Style}People who are political irritate me because I feel it is unnecessary and seldom helps teamwork.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A3",
        //     "accum3": "",
        //     "seq": 887,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.16,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 152,
        //     "qid": 1,
        //     "quest": "{Style}Even if I wanted to deceive or trick others, I couldn't because it would show in my face.",
        //     "subset": "MAIN",
        //     "accum1": "T-A",
        //     "accum2": "T-A3",
        //     "accum3": "",
        //     "seq": 882,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.92,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 153,
        //     "qid": 1,
        //     "quest": "{Style}Planning and providing structure is the one of the most critical parts of getting the job done.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C1",
        //     "accum3": "",
        //     "seq": 646,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.97,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 154,
        //     "qid": 1,
        //     "quest": "{Style}It is important to have a strong sense of order and regulation.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C1",
        //     "accum3": "",
        //     "seq": 619,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.06,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 155,
        //     "qid": 1,
        //     "quest": "{Style}I feel most comfortable when everything is in its proper place and organized.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C1",
        //     "accum3": "",
        //     "seq": 518,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.02,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 156,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that some people have accused me of being too fastidious or too organized and structured.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C1",
        //     "accum3": "",
        //     "seq": 396,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 157,
        //     "qid": 1,
        //     "quest": "{Style}I've always felt that if you really want to be efficient you can never be too organized.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C1",
        //     "accum3": "",
        //     "seq": 388,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.02,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 158,
        //     "qid": 1,
        //     "quest": "{Style}I am a very methodical person who likes structure.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C1",
        //     "accum3": "",
        //     "seq": 105,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.93,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 159,
        //     "qid": 1,
        //     "quest": "{Style}I work on my assignments in an extremely conscientious manner.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C2",
        //     "accum3": "",
        //     "seq": 725,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.14,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 160,
        //     "qid": 1,
        //     "quest": "{Style}I am very willing to make whatever personal sacrifices are necessary to meet my commitments.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C2",
        //     "accum3": "",
        //     "seq": 383,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.12,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 161,
        //     "qid": 1,
        //     "quest": "{Style}I feel it is critical to stick to your principles at almost any cost.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C2",
        //     "accum3": "",
        //     "seq": 306,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.66,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 162,
        //     "qid": 1,
        //     "quest": "{Style}Even if I knew that I could get away with it, I would never cheat or lie.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C2",
        //     "accum3": "",
        //     "seq": 242,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.12,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 163,
        //     "qid": 1,
        //     "quest": "{Style}My sense of commitment is so important that even if I was sick, I would still try to go to work.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C2",
        //     "accum3": "",
        //     "seq": 890,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.04,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 164,
        //     "qid": 1,
        //     "quest": "{Style}I am so dependable that people who know me never worry that I'll forget what I promised to do.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C2",
        //     "accum3": "",
        //     "seq": 17,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.92,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 165,
        //     "qid": 1,
        //     "quest": "{Style}I set aggressive goals and strive to complete or exceed them.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C3",
        //     "accum3": "",
        //     "seq": 89,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.92,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 166,
        //     "qid": 1,
        //     "quest": "{Style}I'll work hard to meet my goals even at the expense of my personal time and interests.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C3",
        //     "accum3": "",
        //     "seq": 804,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.13,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 167,
        //     "qid": 1,
        //     "quest": "{Style}Some people have called me a \"workaholic\" but it fits my style.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C3",
        //     "accum3": "",
        //     "seq": 941,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.15,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 168,
        //     "qid": 1,
        //     "quest": "{Style}I am so driven to achieve that at times it impacts my personal life in negative ways.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C3",
        //     "accum3": "",
        //     "seq": 427,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.74,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 169,
        //     "qid": 1,
        //     "quest": "{Style}I'd rather finish a job and postpone my pleasure than worry about not getting it done.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C3",
        //     "accum3": "",
        //     "seq": 699,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.02,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 170,
        //     "qid": 1,
        //     "quest": "{Style}\"Doing what I said I would do\" is so critical to my self-esteem, that I may drive myself too hard to get things done.",
        //     "subset": "MAIN",
        //     "accum1": "T-C",
        //     "accum2": "T-C3",
        //     "accum3": "",
        //     "seq": 52,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.04,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 171,
        //     "qid": 1,
        //     "quest": "{Style}If people were more willing to live their lives according to their own desires, they would be happier.",
        //     "subset": "T1",
        //     "accum1": "T1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 406,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.72,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 172,
        //     "qid": 1,
        //     "quest": "{Style}As a child, I felt comfortable \"doing my own thing without others.",
        //     "subset": "T1",
        //     "accum1": "T1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 805,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.25,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 173,
        //     "qid": 1,
        //     "quest": "{Style}I'm very comfortable doing things by myself so I have minimal need for others.",
        //     "subset": "T1",
        //     "accum1": "T1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 804,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.24,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 174,
        //     "qid": 1,
        //     "quest": "{Style}I would rather lead a quiet life with a strong sense of personal autonomy.",
        //     "subset": "T1",
        //     "accum1": "T1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 732,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 175,
        //     "qid": 1,
        //     "quest": "{Style}In order to stay up with important news, I would just as soon read the paper as talk to others.",
        //     "subset": "T1",
        //     "accum1": "T1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 269,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.89,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 176,
        //     "qid": 1,
        //     "quest": "{Style}I like to have time to plan and think alone because I feel it makes me more efficient.",
        //     "subset": "T1",
        //     "accum1": "T1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 954,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.83,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 177,
        //     "qid": 1,
        //     "quest": "{Style}I am willing to try new things even if I incur significant risk.",
        //     "subset": "T2",
        //     "accum1": "T2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 629,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 178,
        //     "qid": 1,
        //     "quest": "{Style}If I invested in stocks, I'd invest in risky or aggressive stocks even if I might lose money.",
        //     "subset": "T2",
        //     "accum1": "T2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 622,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.98,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 179,
        //     "qid": 1,
        //     "quest": "{Style}If I was bored living in the same city, I would move even if I didn't have a job.",
        //     "subset": "T2",
        //     "accum1": "T2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 192,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 0.8,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 180,
        //     "qid": 1,
        //     "quest": "{Style}I still would take an aggressive career risk, even if I knew that if it failed I would have to leave my firm.",
        //     "subset": "T2",
        //     "accum1": "T2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 928,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 1.23,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 181,
        //     "qid": 1,
        //     "quest": "{Style}Stability in one's life may be nice but it is boring.",
        //     "subset": "T2",
        //     "accum1": "T2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 948,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.97,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 182,
        //     "qid": 1,
        //     "quest": "{Style}In my dating experiences, I'd gamble and ask someone out even if I knew I might get rejected.",
        //     "subset": "T2",
        //     "accum1": "T2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 41,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 0.94,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 183,
        //     "qid": 1,
        //     "quest": "{Style}I have a very active imagination.",
        //     "subset": "T3",
        //     "accum1": "T3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 939,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.14,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 184,
        //     "qid": 1,
        //     "quest": "{Style}It is fine to be practical and down-to-earth but I like to think about possibilities.",
        //     "subset": "T3",
        //     "accum1": "T3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.72,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 185,
        //     "qid": 1,
        //     "quest": "{Style}When I was bored in school I would wonder or daydream about things.",
        //     "subset": "T3",
        //     "accum1": "T3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 145,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.21,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 186,
        //     "qid": 1,
        //     "quest": "{Style}As a child, I liked to exercise my imagination or think about being like those whom I admired.",
        //     "subset": "T3",
        //     "accum1": "T3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 283,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 187,
        //     "qid": 1,
        //     "quest": "{Style}Delving into new areas or thinking about possibilities are things which I find exciting.",
        //     "subset": "T3",
        //     "accum1": "T3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 78,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.93,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 188,
        //     "qid": 1,
        //     "quest": "{Style}If I am not focused on the task at hand, my mind starts to wander into more interesting areas.",
        //     "subset": "T3",
        //     "accum1": "T3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 118,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.93,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 189,
        //     "qid": 1,
        //     "quest": "{Control}In order to get the best job, you have to be in the right place at the right time.",
        //     "subset": "MAIN",
        //     "accum1": "LOC1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 581,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.01,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 190,
        //     "qid": 1,
        //     "quest": "{Control}The person who is promoted is usually just lucky or knows someone.",
        //     "subset": "MAIN",
        //     "accum1": "LOC1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 405,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.17,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 191,
        //     "qid": 1,
        //     "quest": "{Control}Most people are unaware that their lives are controlled by random or unexpected events and people.",
        //     "subset": "MAIN",
        //     "accum1": "LOC1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 291,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.98,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 192,
        //     "qid": 1,
        //     "quest": "{Control}Most of the time people have very little control over their life's events.",
        //     "subset": "MAIN",
        //     "accum1": "LOC1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.11,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 193,
        //     "qid": 1,
        //     "quest": "{Control}It is not a good idea to plan too far ahead since you never know what will happen.",
        //     "subset": "MAIN",
        //     "accum1": "LOC1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 675,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.05,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 194,
        //     "qid": 1,
        //     "quest": "{Control}I believe there are few major events in one's life that you can control or dramatically influence.",
        //     "subset": "MAIN",
        //     "accum1": "LOC1",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 243,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.68,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 195,
        //     "qid": 1,
        //     "quest": "{Authority}The world is run by a few powerful people, so it is hard to get ahead.",
        //     "subset": "LOC2",
        //     "accum1": "LOC2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 868,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 1.37,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 196,
        //     "qid": 1,
        //     "quest": "{Authority}When it comes to politics, there is little that you can do so you should learn how to live with it.",
        //     "subset": "LOC2",
        //     "accum1": "LOC2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 377,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 0.89,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 197,
        //     "qid": 1,
        //     "quest": "{Authority}Most people's careers are controlled by a few people who you may not even know.",
        //     "subset": "LOC2",
        //     "accum1": "LOC2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 453,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 1.13,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 198,
        //     "qid": 1,
        //     "quest": "{Authority}If I find myself stuck in political turmoil, I try to find the person in control.",
        //     "subset": "LOC2",
        //     "accum1": "LOC2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "Seldom True                       Sometimes                      Usually True",
        //     "cor_ans": 0,
        //     "weight": 0.26,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 199,
        //     "qid": 1,
        //     "quest": "{Authority}For the most part, we are all \"day workers\" who work for pay, so it is best to accept our lot in life.",
        //     "subset": "LOC2",
        //     "accum1": "LOC2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "Seldom True                       Sometimes                      Usually True",
        //     "cor_ans": 0,
        //     "weight": 1.11,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 200,
        //     "qid": 1,
        //     "quest": "{Authority}If we are realistic, we are 'victims of events' that politicians or 'power brokers' control.",
        //     "subset": "LOC2",
        //     "accum1": "LOC2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "Seldom True                       Sometimes                      Usually True",
        //     "cor_ans": 0,
        //     "weight": 1.24,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 201,
        //     "qid": 1,
        //     "quest": "{Religion}Personally, I feel there is a divine plan for the world.",
        //     "subset": "LOC3",
        //     "accum1": "LOC3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 1.1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 202,
        //     "qid": 1,
        //     "quest": "{Religion}My life's direction is guided by my religious beliefs.",
        //     "subset": "LOC3",
        //     "accum1": "LOC3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 203,
        //     "qid": 1,
        //     "quest": "{Religion}Usually what happens is for the best because it is God's plan.",
        //     "subset": "LOC3",
        //     "accum1": "LOC3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 1.01,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 204,
        //     "qid": 1,
        //     "quest": "{Religion}Humankind may think that they run things but I believe there is a supreme all-knowing power with final control.",
        //     "subset": "LOC3",
        //     "accum1": "LOC3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 205,
        //     "qid": 1,
        //     "quest": "{Religion}We would all be better off if we truly believed in God's destiny for our lives.",
        //     "subset": "LOC3",
        //     "accum1": "LOC3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 1.09,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 206,
        //     "qid": 1,
        //     "quest": "{Religion}Much of our life is predestined, so we may have to follow a life plan that we don't fully understand.",
        //     "subset": "LOC3",
        //     "accum1": "LOC3",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Very Doubtful                      Perhaps                        Fully Agree",
        //     "cor_ans": 0,
        //     "weight": 0.65,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 207,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} ADAMANT       is most like...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VS",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "unyielding      jewel-like     blue colored     wholesome         clear",
        //     "cor_ans": 1,
        //     "weight": 0.87,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 208,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} PROFLIGATE     is most like...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VS",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "fertile       imaginative     extravagant       cautious        fearful",
        //     "cor_ans": 3,
        //     "weight": 1.2,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 209,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} DERELICT       is most like...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VS",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "improper       neglectful      thoughtless       obnoxious        amazing",
        //     "cor_ans": 2,
        //     "weight": 1.08,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 210,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} SPONTANEOUSLY    is most like...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VS",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "freely       innocently       willfully        actively       clumsily",
        //     "cor_ans": 1,
        //     "weight": 0.8,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 211,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} FERVID        is most like...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VS",
        //     "accum3": "",
        //     "seq": 284,
        //     "answer_dt": "improper      thoughtless     impassioned        bitter         obliging",
        //     "cor_ans": 3,
        //     "weight": 0.92,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 212,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} VIBRANT       is most like...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VS",
        //     "accum3": "",
        //     "seq": 887,
        //     "answer_dt": "tactfully       wholesome       beautiful       indulgent       vigorously",
        //     "cor_ans": 5,
        //     "weight": 1.23,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 213,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} NAIVE         is most like...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VS",
        //     "accum3": "",
        //     "seq": 882,
        //     "answer_dt": "youthful        clever       unsophisticated      sad          diverting",
        //     "cor_ans": 3,
        //     "weight": 1.13,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 214,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} PLETHORA       is most like...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VS",
        //     "accum3": "",
        //     "seq": 646,
        //     "answer_dt": "hard rain         power         indignant        abundant       happiness",
        //     "cor_ans": 4,
        //     "weight": 0.83,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 215,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} REPLICA        is most like...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VS",
        //     "accum3": "",
        //     "seq": 619,
        //     "answer_dt": "inlaid floor     replacement  french cookware   reproduction    small socket",
        //     "cor_ans": 4,
        //     "weight": 0.78,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 216,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} GEYSER        is most like...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VS",
        //     "accum3": "",
        //     "seq": 518,
        //     "answer_dt": "spray of water    volcano          spring         waterfall       rain storm",
        //     "cor_ans": 1,
        //     "weight": 1.16,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 217,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} RECLUSIVE      is most OPPOSITE to ...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VO",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "hopeful        supportive     unfaithful        sociable       aggressive",
        //     "cor_ans": 4,
        //     "weight": 0.86,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 218,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} PARSIMONIOUS      is most OPPOSITE to ...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VO",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "munificent      relaxed         impartial       corpulant       courageous",
        //     "cor_ans": 1,
        //     "weight": 1.29,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 219,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} FLAUNT      is most OPPOSITE to ...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VO",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "prepare         pander          remark          request          cover",
        //     "cor_ans": 5,
        //     "weight": 0.86,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 220,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} EMPIRICAL      is most OPPOSITE to ...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VO",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "farsighted     theoretical      completed        radical         farcical",
        //     "cor_ans": 2,
        //     "weight": 1.21,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 221,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} CONCEAL      is most OPPOSITE to ...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VO",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "deny             air           stiffen          insert         advance",
        //     "cor_ans": 2,
        //     "weight": 0.91,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 222,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} DEPLORE       is most OPPOSITE to ...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VO",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "indulge         approve        separate        entertain        weaken",
        //     "cor_ans": 2,
        //     "weight": 0.98,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 223,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} FEROCIOUS     is most OPPOSITE to ...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VO",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "meek          fragile         injurious        youthful         quick",
        //     "cor_ans": 1,
        //     "weight": 0.91,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 224,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} ATROPHY       is most OPPOSITE to ...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VO",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "whisper         flourish        criticize       reject        overthrow",
        //     "cor_ans": 2,
        //     "weight": 0.88,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 225,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} INVEIGLE     is most OPPOSITE to ...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VO",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "malinger       bombard         dissuade         expire           falter",
        //     "cor_ans": 3,
        //     "weight": 1.29,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 226,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} HUMID        is most OPPOSITE to ...",
        //     "subset": "MAIN",
        //     "accum1": "I-V1",
        //     "accum2": "Y-VO",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "fresh           mild            cool             dry            feeble",
        //     "cor_ans": 4,
        //     "weight": 0.81,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 228,
        //     "qid": 1,
        //     "quest": "{FEEDBACK - CLICK to Agree or Disagree}You enjoy expressing powerful MOTIVES. This suggests you seek CONTROL in what you do. This is often a positive trait in Business.",
        //     "subset": "Z1POW",
        //     "accum1": "ZFB",
        //     "accum2": "Z1POW",
        //     "accum3": "",
        //     "seq": 1,
        //     "answer_dt": "Disagree                           Possible                             Agree",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 230,
        //     "qid": 1,
        //     "quest": "{FEEDBACK - CLICK to Agree or Disagree}You have a well developed vocabulary, so LOOK OUT because I'll search my memory banks to better challenge you!",
        //     "subset": "Z3V-H",
        //     "accum1": "ZFB",
        //     "accum2": "Z3V-H",
        //     "accum3": "",
        //     "seq": 3,
        //     "answer_dt": "Disagree                           Possible                             Agree",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 231,
        //     "qid": 1,
        //     "quest": "{FEEDBACK - CLICK to Agree or Disagree}You are very optimistic and positive in evaluating yourself. You lean toward disclosing a style on how you would like others to see you.",
        //     "subset": "Z4E-H",
        //     "accum1": "ZFB",
        //     "accum2": "Z4E-H",
        //     "accum3": "",
        //     "seq": 4,
        //     "answer_dt": "Disagree                           Possible                             Agree",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 235,
        //     "qid": 1,
        //     "quest": "{FEEDBACK - CLICK to Agree or Disagree}You are assertive and usually speak your mind, so I guess I don't have to pull any punches with my wording!",
        //     "subset": "Z8-AS",
        //     "accum1": "ZFB",
        //     "accum2": "Z8-AS",
        //     "accum3": "",
        //     "seq": 6,
        //     "answer_dt": "Disagree                           Possible                             Agree",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 236,
        //     "qid": 1,
        //     "quest": "{FEEDBACK - CLICK to Agree or Disagree}You are very socially outgoing, so I am sorry that you have to spend time with this computer when you would rather be interacting with humans!",
        //     "subset": "Z90EX",
        //     "accum1": "ZFB",
        //     "accum2": "Z90EX",
        //     "accum3": "",
        //     "seq": 9,
        //     "answer_dt": "Disagree                           Possible                             Agree",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 229,
        //     "qid": 1,
        //     "quest": "{FEEDBACK - CLICK to Agree or Disagree}You enjoy expressing the warmer, more sensitive MOTIVES. This suggests you enjoy developing relationships and supports strong social and interpersonal experiences.",
        //     "subset": "Z2BON",
        //     "accum1": "ZFB",
        //     "accum2": "Z2BON",
        //     "accum3": "",
        //     "seq": 2,
        //     "answer_dt": "Disagree                           Possible                             Agree",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 232,
        //     "qid": 1,
        //     "quest": "{FEEDBACK - CLICK to Agree or Disagree}Your Image is very important which can be a positive trait. This can suggest an ability to \"adjust your style\" to fit your reading of one's \"Company culture.",
        //     "subset": "Z5I-H",
        //     "accum1": "ZFB",
        //     "accum2": "Z5I-H",
        //     "accum3": "",
        //     "seq": 7,
        //     "answer_dt": "Disagree                           Possible                             Agree",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 233,
        //     "qid": 1,
        //     "quest": "{FEEDBACK - CLICK to Agree or Disagree}You are answering the questions in a very truthful manner so you may run the risk of being too open where you have little interest in political positioning.",
        //     "subset": "Z6E-L",
        //     "accum1": "ZFB",
        //     "accum2": "Z6E-L",
        //     "accum3": "",
        //     "seq": 5,
        //     "answer_dt": "Disagree                           Possible                             Agree",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 234,
        //     "qid": 1,
        //     "quest": "{FEEDBACK - CLICK to Agree or Disagree}Image is not as important to you as others. Hence, you are more likely to \"be yourself in most settings\" so you usually act in a more direct and candid fashion.",
        //     "subset": "Z7I-L",
        //     "accum1": "ZFB",
        //     "accum2": "Z7I-L",
        //     "accum3": "",
        //     "seq": 8,
        //     "answer_dt": "Disagree                           Possible                             Agree",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 237,
        //     "qid": 1,
        //     "quest": "{Final FEEDBACK - CLICK on 2 to continue}I appreciate your efforts to this point. You are about 65% to 75% finished, so...",
        //     "subset": "Z99",
        //     "accum1": "Z99",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 11,
        //     "answer_dt": "",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 238,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} ETERNAL  is to  END  as:   [Indecent : Exposure  Ephemeral : Meaning  Intrinsic : Sight  Indiscriminate : AIM  Amicable : Companionship]",
        //     "subset": "MAIN",
        //     "accum1": "I-A",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "",
        //     "cor_ans": 4,
        //     "weight": 1.09,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 239,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} TRUNK  is to  TREE  as:   [Valley : Mountain  Cavern : Cave  Petal : Flower  Torso : Body  Animal : Fence]",
        //     "subset": "MAIN",
        //     "accum1": "I-A",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 238,
        //     "answer_dt": "",
        //     "cor_ans": 4,
        //     "weight": 0.89,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 240,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} URGE  is to  COERCE  as:   [Acknowledge : Confirm  Defeat : Vanquish  Summon : Rally  Pressure : Cook  Create : Destroy]",
        //     "subset": "MAIN",
        //     "accum1": "I-A",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "",
        //     "cor_ans": 2,
        //     "weight": 1.17,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 241,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} MERITORIOUS  is to  PRAISE  as:   [Captious : Criticism  Incredible : Ecstasy  Questionable : Response  Reprehensible : Censure  Kind : Admiration]",
        //     "subset": "MAIN",
        //     "accum1": "I-A",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "",
        //     "cor_ans": 4,
        //     "weight": 1.11,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 242,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} TUNE  is to  PIANO  as:   [Eat : Food  Sharpen : Knife  Record : Song  Display : Painting  Listen : Radio]",
        //     "subset": "MAIN",
        //     "accum1": "I-A",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "",
        //     "cor_ans": 2,
        //     "weight": 0.69,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 243,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} CENSUS  is to  POPULATION  as:   [Catalog : Pictures  Inventory : Supplies  Detonation : Explosion  Dictionary : Words  Election : Tally]",
        //     "subset": "MAIN",
        //     "accum1": "I-A",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "",
        //     "cor_ans": 2,
        //     "weight": 0.89,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 244,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} CONSTELLATION  is to  STAR  as:   [Earth : Moon  Center : Circle  Archipelago : Island  Rain : Water  Maverick : Herd]",
        //     "subset": "MAIN",
        //     "accum1": "I-A",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "",
        //     "cor_ans": 3,
        //     "weight": 0.91,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 245,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} PERSPICACIOUS  is to  INSIGHT  as:   [Zealous : Freedom  Audacious : Hearing  Delicious : Taste  Avaricious : Generosity  Amiable : Friendliness]",
        //     "subset": "MAIN",
        //     "accum1": "I-A",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "",
        //     "cor_ans": 3,
        //     "weight": 1.3,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 246,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} REFINE  is to  OIL  as:   [Winnow : Wheat  Harness : Energy  Mine : Coal  Mold : Plastic  Grow : Corn]",
        //     "subset": "MAIN",
        //     "accum1": "I-A",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 284,
        //     "answer_dt": "",
        //     "cor_ans": 1,
        //     "weight": 1.17,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 247,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer} IMMORTAL  is to  DEATH  as:   [Anonymous : Fame  Hopeless : Situation  Vital : Life  Indisputable : Agreement  Daily : Yearly]",
        //     "subset": "MAIN",
        //     "accum1": "I-A",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 887,
        //     "answer_dt": "",
        //     "cor_ans": 1,
        //     "weight": 0.77,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 248,
        //     "qid": 1,
        //     "quest": "{Style}I am willing to state that I have never had feelings where I felt sad, discouraged or dejected.",
        //     "subset": "MAIN",
        //     "accum1": "A6",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 646,
        //     "answer_dt": "False                             Sometimes                              True",
        //     "cor_ans": 0,
        //     "weight": 0.78,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 249,
        //     "qid": 1,
        //     "quest": "{Style}I never really have any \"ill feelings\" toward people that I disliked, where I wished them harm.",
        //     "subset": "MAIN",
        //     "accum1": "A6",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 619,
        //     "answer_dt": "False                             Sometimes                              True",
        //     "cor_ans": 0,
        //     "weight": 1.17,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 250,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer - are you serious!}    LUGUBRIOUS       is most like...",
        //     "subset": "I-V2",
        //     "accum1": "I-V2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 518,
        //     "answer_dt": "ludicrous     disappointed      lustful         mournful        euphoric",
        //     "cor_ans": 4,
        //     "weight": 0.99,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 251,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer - tough one!}                  APOTHEOSIS       is most like...",
        //     "subset": "I-V2",
        //     "accum1": "I-V2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "zenith        incarnation     glorification     prowess        euphoric",
        //     "cor_ans": 3,
        //     "weight": 1,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 252,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer - so difficult!}               ATAVISTIC        is most like...",
        //     "subset": "I-V2",
        //     "accum1": "I-V2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "greedy     ancestral trait      savage       degenerate         terse",
        //     "cor_ans": 2,
        //     "weight": 1.09,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 253,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer - super hard!}                 EXCORIATE        is most like...",
        //     "subset": "I-V2",
        //     "accum1": "I-V2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "eliminate     easily forgive     degrade       make whole    strip off skin",
        //     "cor_ans": 5,
        //     "weight": 1.1,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 254,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer - is that a real word!}              CICERONE          is most like...",
        //     "subset": "I-V2",
        //     "accum1": "I-V2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "teacher         guide         Greek god     classic book     fancy noodle",
        //     "cor_ans": 2,
        //     "weight": 0.92,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 255,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer - bad and only 4 letters!}              OPUS             is most like...",
        //     "subset": "I-V2",
        //     "accum1": "I-V2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "review           mural        manuscript     literary work       aria",
        //     "cor_ans": 4,
        //     "weight": 1.04,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 256,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer - no way that's a word!}         BATHOS           is most like...",
        //     "subset": "I-V2",
        //     "accum1": "I-V2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "pity            humor       false pathos      culpable        wash basin",
        //     "cor_ans": 3,
        //     "weight": 1.05,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 257,
        //     "qid": 1,
        //     "quest": "{CLICK on the RIGHT Answer - could be a freebie!}        DOGMA            is most like...",
        //     "subset": "I-V2",
        //     "accum1": "I-V2",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "doctrine         zeal       interpretation     happiness      mother dog",
        //     "cor_ans": 1,
        //     "weight": 0.82,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 258,
        //     "qid": 1,
        //     "quest": "{Style}I believe that focusing on my own needs is more important than helping others.",
        //     "subset": "MAIN",
        //     "accum1": "A1",
        //     "accum2": "A5",
        //     "accum3": "DA1C",
        //     "seq": 337,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.44,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 259,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that how I'm viewed by others is important so I push myself to be successful.",
        //     "subset": "MAIN",
        //     "accum1": "A1",
        //     "accum2": "A5",
        //     "accum3": "DA1C",
        //     "seq": 402,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.35,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 260,
        //     "qid": 1,
        //     "quest": "{Style}I have a strong need to experience all that life has to offer so I am a very active person.",
        //     "subset": "MAIN",
        //     "accum1": "A5",
        //     "accum2": "DA1C",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.02,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 261,
        //     "qid": 1,
        //     "quest": "{Style}I know that I have an extremely high energy and intensity level.",
        //     "subset": "MAIN",
        //     "accum1": "A5",
        //     "accum2": "DA1C",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.29,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 262,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}A person should always make sure that their actions never intentionally harm others.",
        //     "subset": "MAIN",
        //     "accum1": "V-ID",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 851,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.17,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 263,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}One should never hurt the feelings of others, even if you are right and feel a need to state your views.",
        //     "subset": "MAIN",
        //     "accum1": "V-ID",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 0.89,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 264,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}You should always make sure that 'in what you do' you never cause a sense of pain for another person.",
        //     "subset": "MAIN",
        //     "accum1": "V-ID",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.19,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 265,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}You should never act in any way that threatens the dignity or welfare of others.",
        //     "subset": "MAIN",
        //     "accum1": "V-ID",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.21,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 266,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}If an action could potentially harm an innocent person it should never be considered as an option.",
        //     "subset": "MAIN",
        //     "accum1": "V-ID",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.04,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 267,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}The collective dignity and welfare of the people is the most important concern of any moral society.",
        //     "subset": "MAIN",
        //     "accum1": "V-ID",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 0.79,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 268,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}In all that you do, it is never necessary to sacrifice the welfare of others.",
        //     "subset": "MAIN",
        //     "accum1": "V-ID",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.03,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 269,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}Moral actions are those actions that are most 'helpful and supportive of others.'",
        //     "subset": "MAIN",
        //     "accum1": "V-ID",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 0.68,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 270,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}What is ultimately ethical or moral varies from one society to another.",
        //     "subset": "MAIN",
        //     "accum1": "V-RE",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.16,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 271,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}Moral or ethical standards, except for the most basic ones, should be individualistic or determined by the person.",
        //     "subset": "MAIN",
        //     "accum1": "V-RE",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.18,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 272,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}Different types of 'moralities' (e.g., diverse cultures) cannot be compared in terms of \"right and wrong\".",
        //     "subset": "MAIN",
        //     "accum1": "V-RE",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.05,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 273,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}What is ethical for all people cannot be resolved since it depends upon the society and situation.",
        //     "subset": "MAIN",
        //     "accum1": "V-RE",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.24,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 274,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}Moral standards, for the most part, are just personal rules that help guide behavior and should not be used to judge others.",
        //     "subset": "MAIN",
        //     "accum1": "V-RE",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 0.98,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 275,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}Ethical and moral behavior is so complex that beyond some basic rules, most people should formulate their own views.",
        //     "subset": "MAIN",
        //     "accum1": "V-RE",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.05,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 276,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}Rigidly enforcing an ethical position could stand in the way of better and smoother human relations so you should always be tolerant of others' views.",
        //     "subset": "MAIN",
        //     "accum1": "V-RE",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 284,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 0.52,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 277,
        //     "qid": 1,
        //     "quest": "{Personal VALUE}Religion does not have to be the basis for making ethical and moral value judgments.",
        //     "subset": "MAIN",
        //     "accum1": "V-RE",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 887,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 0.82,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 278,
        //     "qid": 1,
        //     "quest": "{Business VALUE}You are more effective if you don't always tell the real reason why you do things but 'go with the flow.'",
        //     "subset": "V-MA",
        //     "accum1": "V-MA",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 882,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.13,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 279,
        //     "qid": 1,
        //     "quest": "{Business VALUE}Usually, the best way to handle people is to 'tell them what they want to hear.'",
        //     "subset": "V-MA",
        //     "accum1": "V-MA",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 646,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.09,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 280,
        //     "qid": 1,
        //     "quest": "{Business VALUE}Honesty, in spite of 'what your mother told you' or what you may believe is not always the best policy.",
        //     "subset": "V-MA",
        //     "accum1": "V-MA",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 619,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.09,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 281,
        //     "qid": 1,
        //     "quest": "{Business VALUE}When you ask someone to do something, it is a smart tactic to 'sell them on the idea.'",
        //     "subset": "V-MA",
        //     "accum1": "V-MA",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 518,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 0.28,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 282,
        //     "qid": 1,
        //     "quest": "{Business VALUE}If the truth be known about the business world, it is hard to get ahead without 'cutting some corners here and there.'",
        //     "subset": "V-MA",
        //     "accum1": "V-MA",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 396,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.2,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 283,
        //     "qid": 1,
        //     "quest": "{Business VALUE}From a career viewpoint it is wise to flatter powerful and important people, especially if they have big egos.",
        //     "subset": "V-MA",
        //     "accum1": "V-MA",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 388,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 284,
        //     "qid": 1,
        //     "quest": "{Business VALUE}A naive policy, from a business view, is to 'trust all people' because you believe that they will do the right thing.",
        //     "subset": "V-MA",
        //     "accum1": "V-MA",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 105,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 0.97,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 285,
        //     "qid": 1,
        //     "quest": "{Business VALUE}Realistically, most businesspeople who are successful are into 'power, politics, control and money.'",
        //     "subset": "V-MA",
        //     "accum1": "V-MA",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 725,
        //     "answer_dt": "Totally Disagree                   Perhaps                      Totally Agree",
        //     "cor_ans": 0,
        //     "weight": 1.17,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 286,
        //     "qid": 1,
        //     "quest": "{Style}I will admit that I get upset much faster than most people.",
        //     "subset": "MAIN",
        //     "accum1": "N-AN",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.13,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 287,
        //     "qid": 1,
        //     "quest": "{Style}I get irritated with people who are too slow but I deal with the problem and move on.",
        //     "subset": "MAIN",
        //     "accum1": "N-AN",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.74,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 288,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit it, I get anxious or bothered in unfamiliar surroundings.",
        //     "subset": "MAIN",
        //     "accum1": "N-AX",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 289,
        //     "qid": 1,
        //     "quest": "{Style}I am easily distressed by life events or experience an 'inner sense of uneasiness.'",
        //     "subset": "MAIN",
        //     "accum1": "N-AX",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 290,
        //     "qid": 1,
        //     "quest": "{Style}I have periods where I feel 'down in the dumps' or very sad for no apparent reason.",
        //     "subset": "MAIN",
        //     "accum1": "N-D",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.09,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 291,
        //     "qid": 1,
        //     "quest": "{Style}I am not very optimistic so small things get to me more than they should.",
        //     "subset": "MAIN",
        //     "accum1": "N-D",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.98,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 292,
        //     "qid": 1,
        //     "quest": "{Style}When people are in trouble, you need to be careful believing what they tell you.",
        //     "subset": "N-PA",
        //     "accum1": "N-PA",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.99,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 293,
        //     "qid": 1,
        //     "quest": "{Style}At times, I am very skeptical of the \"stated reason\" behind why people do things.",
        //     "subset": "N-PA",
        //     "accum1": "N-PA",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.04,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 294,
        //     "qid": 1,
        //     "quest": "{Style}I am sometimes embarrassed at what I said in the \"heat of the discussion\" and wished I gave it more thought.",
        //     "subset": "MAIN",
        //     "accum1": "N-SH",
        //     "accum2": "X1",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.85,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 295,
        //     "qid": 1,
        //     "quest": "{Style}As an adolescent, I was rather ashamed by some of my social mistakes or thoughts I had regarding the opposite sex.",
        //     "subset": "MAIN",
        //     "accum1": "N-SH",
        //     "accum2": "X1",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 0.98,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 296,
        //     "qid": 1,
        //     "quest": "{Style}Reflecting back on when I was a child, I felt guilty about some of my behavior when my parents were absent.",
        //     "subset": "MAIN",
        //     "accum1": "N-GU",
        //     "accum2": "X1",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.17,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 297,
        //     "qid": 1,
        //     "quest": "{Style}Even if I could get away with it, I would not steal or lie because the guilt would be too great.",
        //     "subset": "MAIN",
        //     "accum1": "N-GU",
        //     "accum2": "X1",
        //     "accum3": "",
        //     "seq": 887,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.58,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 298,
        //     "qid": 1,
        //     "quest": "{Style}I'll admit that I can be quite impulsive or even impetuous in some of my behavior.",
        //     "subset": "N-IM",
        //     "accum1": "N-IM",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 882,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.06,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 299,
        //     "qid": 1,
        //     "quest": "{Style}Sometimes I feel like breaking with tradition and doing something very different or unusual.",
        //     "subset": "N-IM",
        //     "accum1": "N-IM",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 646,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.93,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 300,
        //     "qid": 1,
        //     "quest": "{Style}My friends tell me that I am one of the most organized people that they know.",
        //     "subset": "N-CO",
        //     "accum1": "N-CO",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 619,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.04,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 301,
        //     "qid": 1,
        //     "quest": "{Style}I like to collect things (e.g., cards, antiques, tools, hobby items, knick-knacks).",
        //     "subset": "N-CO",
        //     "accum1": "N-CO",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 396,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.78,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 302,
        //     "qid": 1,
        //     "quest": "{Style}If I have to leave an important task unfinished, I do worry about getting it done.",
        //     "subset": "N-OB",
        //     "accum1": "N-OB",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 388,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.18,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 303,
        //     "qid": 1,
        //     "quest": "{Style}If I had a problem that bothered me, it would stay in my mind until I solved it.",
        //     "subset": "N-OB",
        //     "accum1": "N-OB",
        //     "accum2": "A3",
        //     "accum3": "",
        //     "seq": 105,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.97,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 304,
        //     "qid": 1,
        //     "quest": "{Style}Sometimes, for no apparent reason, I become so happy that I almost start to cry.",
        //     "subset": "N-HY",
        //     "accum1": "N-HY",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 725,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.26,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 305,
        //     "qid": 1,
        //     "quest": "{Style}My friends have told me that I have intense feelings or emotions but that is just part of who I am.",
        //     "subset": "N-HY",
        //     "accum1": "N-HY",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 383,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.79,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 306,
        //     "qid": 1,
        //     "quest": "{Style}When things are not going well or I am under significant pressure, I may develop \"physical stress symptoms.",
        //     "subset": "N-SO",
        //     "accum1": "N-SO",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 306,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.17,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 307,
        //     "qid": 1,
        //     "quest": "{Style}I'm willing to admit it, I seldom take people \"head on\" or aggressively move on them but I have my ways to \"even the score.",
        //     "subset": "N-SO",
        //     "accum1": "N-SO",
        //     "accum2": "A4",
        //     "accum3": "",
        //     "seq": 17,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 0.92,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 308,
        //     "qid": 1,
        //     "quest": "{View}In making decisions, it is usually better to go with...",
        //     "subset": "MB-S",
        //     "accum1": "MB-S",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 851,
        //     "answer_dt": "the concrete data                 Balanced                 your gut instinct",
        //     "cor_ans": 0,
        //     "weight": 0.86,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 309,
        //     "qid": 1,
        //     "quest": "{View}If I am not constrained by my position, I am more interested in what is ...",
        //     "subset": "MB-S",
        //     "accum1": "MB-S",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "actual                             Balanced                        possible",
        //     "cor_ans": 0,
        //     "weight": 0.97,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 310,
        //     "qid": 1,
        //     "quest": "{View}In reading for pleasure, I prefer writers who ...",
        //     "subset": "MB-S",
        //     "accum1": "MB-S",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "say what they mean                Balanced                 express by analogy",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 311,
        //     "qid": 1,
        //     "quest": "{View}For the most part facts usually ...",
        //     "subset": "MB-S",
        //     "accum1": "MB-S",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "speak for themselves              Balanced             illustrate principles",
        //     "cor_ans": 0,
        //     "weight": 1.1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 312,
        //     "qid": 1,
        //     "quest": "{View}Common sense, for the most part is ...",
        //     "subset": "MB-S",
        //     "accum1": "MB-S",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "rarely questionable               Balanced                often questionable",
        //     "cor_ans": 0,
        //     "weight": 0.54,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 313,
        //     "qid": 1,
        //     "quest": "{View}I find that I am more interested in ...",
        //     "subset": "MB-S",
        //     "accum1": "MB-S",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "Practical/applied material        Balanced           Theory, concepts, ideas",
        //     "cor_ans": 0,
        //     "weight": 1.25,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 314,
        //     "qid": 1,
        //     "quest": "{View}When I am thinking or considering options I go more by ...",
        //     "subset": "MB-S",
        //     "accum1": "MB-S",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "facts & figures                   Balanced              principles & thoughts",
        //     "cor_ans": 0,
        //     "weight": 1.1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 315,
        //     "qid": 1,
        //     "quest": "{View}I respect as a trait in myself and others, a ...",
        //     "subset": "MB-S",
        //     "accum1": "MB-S",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 135,
        //     "answer_dt": "strong sense of reality            Balanced                 vivid imagination",
        //     "cor_ans": 0,
        //     "weight": 1.1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 316,
        //     "qid": 1,
        //     "quest": "{View}In general, I feel I'm more guided by my ...",
        //     "subset": "MB-T",
        //     "accum1": "MB-T",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 381,
        //     "answer_dt": "principles                        Balanced                          emotions",
        //     "cor_ans": 0,
        //     "weight": 0.94,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 317,
        //     "qid": 1,
        //     "quest": "{View}In approaching others, I would say my style is ...",
        //     "subset": "MB-T",
        //     "accum1": "MB-T",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 578,
        //     "answer_dt": "objective & factual               Balanced               personal & engaging",
        //     "cor_ans": 0,
        //     "weight": 1.01,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 318,
        //     "qid": 1,
        //     "quest": "{View}In relating to others, I feel my style emphasizes ...",
        //     "subset": "MB-T",
        //     "accum1": "MB-T",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 337,
        //     "answer_dt": "consistent thought pattern        Balanced               harmonious relations",
        //     "cor_ans": 0,
        //     "weight": 1.18,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 319,
        //     "qid": 1,
        //     "quest": "{View}I usually feel most comfortable making ...",
        //     "subset": "MB-T",
        //     "accum1": "MB-T",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 673,
        //     "answer_dt": "logical judgments                 Balanced                    value judgments",
        //     "cor_ans": 0,
        //     "weight": 0.99,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 320,
        //     "qid": 1,
        //     "quest": "{View}My friends would best describe me as ...",
        //     "subset": "MB-T",
        //     "accum1": "MB-T",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 402,
        //     "answer_dt": "cool-headed                       Balanced                       warm-hearted",
        //     "cor_ans": 0,
        //     "weight": 1.1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 321,
        //     "qid": 1,
        //     "quest": "{View}For the most part, I see myself as ...",
        //     "subset": "MB-T",
        //     "accum1": "MB-T",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 823,
        //     "answer_dt": "firm & structured                  Balanced            gentle & understanding",
        //     "cor_ans": 0,
        //     "weight": 1.12,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 322,
        //     "qid": 1,
        //     "quest": "{View}When I have the option or time, I feel it is most enjoyable to ...",
        //     "subset": "MB-T",
        //     "accum1": "MB-T",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 208,
        //     "answer_dt": "debate the issue                  Balanced                arrive at agreement",
        //     "cor_ans": 0,
        //     "weight": 0.78,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 323,
        //     "qid": 1,
        //     "quest": "{View}Which is the greatest error in making complex decisions, being too ...",
        //     "subset": "MB-T",
        //     "accum1": "MB-T",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "passionate                         Balanced                         objective",
        //     "cor_ans": 0,
        //     "weight": 0.88,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 324,
        //     "qid": 1,
        //     "quest": "{Style}When I think about my behavior, I always focus on the needs of others and then feel best about my decision.",
        //     "subset": "MAIN",
        //     "accum1": "A6",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 851,
        //     "answer_dt": "False                             Sometimes                              True",
        //     "cor_ans": 0,
        //     "weight": 1.08,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 325,
        //     "qid": 1,
        //     "quest": "{Style}I never criticize people who are offensive nor do I make bad remarks behind their backs.",
        //     "subset": "MAIN",
        //     "accum1": "A6",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 555,
        //     "answer_dt": "False                             Sometimes                              True",
        //     "cor_ans": 0,
        //     "weight": 1.1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 326,
        //     "qid": 1,
        //     "quest": "{Style}I have never really found it hard or \"anxiety provoking\" to speak to a large group of people.",
        //     "subset": "MAIN",
        //     "accum1": "A6",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 909,
        //     "answer_dt": "False                             Sometimes                              True",
        //     "cor_ans": 0,
        //     "weight": 0.92,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 327,
        //     "qid": 1,
        //     "quest": "{Style}I have never made sarcastic remarks that have offended others.",
        //     "subset": "MAIN",
        //     "accum1": "A6",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 833,
        //     "answer_dt": "False                             Sometimes                              True",
        //     "cor_ans": 0,
        //     "weight": 1.25,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 328,
        //     "qid": 1,
        //     "quest": "{Style}I believe that all criticism is an opportunity to improve so it honestly doesn't bother me.",
        //     "subset": "MAIN",
        //     "accum1": "A6",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 244,
        //     "answer_dt": "False                             Sometimes                              True",
        //     "cor_ans": 0,
        //     "weight": 0.88,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 329,
        //     "qid": 1,
        //     "quest": "{Style}I am always careful with everything that I do so I never rush to get things done.",
        //     "subset": "MAIN",
        //     "accum1": "A6",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 769,
        //     "answer_dt": "False                             Sometimes                              True",
        //     "cor_ans": 0,
        //     "weight": 0.82,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 330,
        //     "qid": 1,
        //     "quest": "{Style}I am always very careful when I go out to make sure that I am neat and presentable.",
        //     "subset": "MAIN",
        //     "accum1": "A7",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 558,
        //     "answer_dt": "False                             Sometimes                              True",
        //     "cor_ans": 0,
        //     "weight": 0.07,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 331,
        //     "qid": 1,
        //     "quest": "{Analogy Example - Answer = 3 or COW : MOO }DOG  is to  BARK  as:           [Tree : Bark  Tiger : Claws  COW : MOO  Ocean : Waves  Plane : Wings]",
        //     "subset": "MAIN",
        //     "accum1": "",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 134,
        //     "answer_dt": "",
        //     "cor_ans": 3,
        //     "weight": 1,
        //     "qstyle": "V"
        //   },
        //   {
        //     "quest_id": 332,
        //     "qid": 1,
        //     "quest": "{Style}I am concerned about my appearance since my image is important to my overall sense of success.",
        //     "subset": "MAIN",
        //     "accum1": "A1",
        //     "accum2": "A5",
        //     "accum3": "DA1C",
        //     "seq": 851,
        //     "answer_dt": "Seldom True                       Sometimes                        Often True",
        //     "cor_ans": 0,
        //     "weight": 1.17,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 333,
        //     "qid": 1,
        //     "quest": "{Style}The knowledge that I am respected by my peers or held in esteem is a major driver of my behavior",
        //     "subset": "MAIN",
        //     "accum1": "A1",
        //     "accum2": "A5",
        //     "accum3": "DA1C",
        //     "seq": 890,
        //     "answer_dt": "Not Descriptive                   Sometimes                  Very Descriptive",
        //     "cor_ans": 0,
        //     "weight": 1.29,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 334,
        //     "qid": 1,
        //     "quest": "{OPTION - Answer or don't answer Questions - Your choice}You'll see 10 questions with Religion along the TOP. You DON'T have to answer them if they bother you in any way. Answer '1' to move on. However, if they are okay, PLEASE answer them.",
        //     "subset": "Z75-L",
        //     "accum1": "Z75-L",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 10,
        //     "answer_dt": "",
        //     "cor_ans": 0,
        //     "weight": 1,
        //     "qstyle": "S8"
        //   },
        //   {
        //     "quest_id": 338,
        //     "qid": 1,
        //     "quest": "Enter a 5 digit Invite Code in the Seq column. The Invite Code should be put in the link in the email invitation:  Dear Test Taker, Follow this link to start the test: http://www.digital-couch.com/dcEntry?icode=19461 Change the icode value occasionally. This will prevent anyone from taking the test with an old ICODE.",
        //     "subset": "ICODE",
        //     "accum1": "",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 19461,
        //     "answer_dt": "",
        //     "cor_ans": 0,
        //     "weight": 0,
        //     "qstyle": ""
        //   },
        //   {
        //     "quest_id": 339,
        //     "qid": 1,
        //     "quest": "a 5 character Invite Code for future Short-Test Takers www.digital-couch.com?ICODS=91246.    The Vocabulary questions are eliminated.  Make sure it is ICODS!",
        //     "subset": "ICODS",
        //     "accum1": "",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 91246,
        //     "answer_dt": "",
        //     "cor_ans": 0,
        //     "weight": 0,
        //     "qstyle": ""
        //   },
        //   {
        //     "quest_id": 335,
        //     "qid": 1,
        //     "quest": "The DIGITAL COUCH evaluates your Personal Style.\n \nQuestions seldom have a correct answer. \nBe careful answering because you can't change your answers. \n\n      If you see VOCABULARY Words - DO NOT look them up.\n\n\n\n      The exercise has TWO parts (I = 75% - II = 25%)\n\n         ** SEE % Complete Indicator - After each LOAD ** \n\n      If you get interrupted, return to website and re-enter \n      your NAME/SPONSOR. It starts about where you left off.    \n\n                 Click Continue to Start.....",
        //     "subset": "INTRO",
        //     "accum1": "",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 11111,
        //     "answer_dt": "",
        //     "cor_ans": 0,
        //     "weight": 0,
        //     "qstyle": "H"
        //   },
        //   {
        //     "quest_id": 336,
        //     "qid": 1,
        //     "quest": "Your initial responses were recorded, new questions\n      were added and inappropriate questions eliminated.\n                        \n          WOW !!    You are 70% - 75% done.... \"Phew....\n\n            You didn't know it would be this hard!\"\n\n    The next few \"items\" give FEEDBACK, If a Bias was \n    detected you may modify responding style.  \n\n                         \n                        Click on Continue ....",
        //     "subset": "BREAK",
        //     "accum1": "",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 11111,
        //     "answer_dt": "",
        //     "cor_ans": 0,
        //     "weight": 0,
        //     "qstyle": "H"
        //   },
        //   {
        //     "quest_id": 337,
        //     "qid": 1,
        //     "quest": "You finished the most sophisticated assessment\n            available.  I'll bet you are glad it is over! \n            \n            Your results are submitted for review.\n            Questions/comments can be emailed to: \n\n            edmurray17@comcast.net\n\n            \n            Thank you and have a GREAT Day!\n            DIGITAL COUCH, LLC",
        //     "subset": "FINISH",
        //     "accum1": "",
        //     "accum2": "",
        //     "accum3": "",
        //     "seq": 11111,
        //     "answer_dt": "",
        //     "cor_ans": 0,
        //     "weight": 0,
        //     "qstyle": "H"
        //   }
        // ]
    }
    convertEd338ToDbLayout() {
        console.log('running convertEd338ToDbLayout');
        for (let i = 0; i < this.edArray338.length; i++) {
            //console.log('4790 ',this.edArray338[i].subset)
            this.buildOneQuestFrom338(this.edArray338[i]);
            this.newQuestArray.push(this.newQuestObj);
        }
        console.table(this.newQuestArray);
        // now build newRuleArray:
        for (let i = 0; i < this.edRuleArray338.length; i++) {
            //console.log('4806 ',this.edRuleArray338[i].subset)
            this.buildOneRuleFrom338(this.edRuleArray338[i]);
            this.newRulesArray.push(this.newRuleObj);
        }
        // console.log('------- newRulesArray: -----------')
        // console.table(this.newRulesArray)
        alert('done convertEd338ToDbLayout.  now click button write to db.');
    } // end convertEd338ToDbLayout
    buildOneQuestFrom338(oneEd) {
        //console.log('running ')
        //console.log(oneEd.subset)
        // quest_id,qid,quest,subset,accum1,accum2,accum3,
        // seq,answer_dt,cor_ans,weight,qstyle
        this.newQuestObj =
            {
                cust: "1",
                qid: "1",
                questNbr: oneEd.quest_id.toString(),
                questSeq: oneEd.seq.toString(),
                preQuest: this.formatpreQuest(oneEd.quest),
                questTxt: this.formatQuest(oneEd.quest),
                acaFrame: this.formatAcaFrame(oneEd.qstyle, oneEd.answer_dt),
                aca: this.formatAca(oneEd.qstyle, oneEd.answer_dt, oneEd.quest, oneEd.cor_ans),
                acaPointVals: this.formatAcaPointVals(oneEd.qstyle, oneEd.cor_ans),
                accum: this.formatAccum(oneEd.accum1, oneEd.accum2, oneEd.accum3),
                //accum: [oneEd.accum1,oneEd.accum2,oneEd.accum3],
                subset: oneEd.subset,
                qstyle: oneEd.qstyle
            };
    } // end buildOneQuestFrom338
    formatpreQuest(x) {
        if (x.substring(0, 7) == '{Style}') {
            return '{Style}';
        }
        if (x.substring(0, 9) == '{Control}') {
            return '{Control}';
        }
        if (x.substring(0, 11) == '{Authority}') {
            return '{Authority}';
        }
        if (x.substring(0, 10) == '{Religion}') {
            return '{Religion}';
        }
        if (x.substring(0, 27) == '{CLICK on the RIGHT Answer}') {
            return '{CLICK on the RIGHT Answer}';
        }
        if (x.substring(0, 39) == '{FEEDBACK - CLICK to Agree or Disagree}') {
            return '{FEEDBACK - CLICK to Agree or Disagree}';
        }
        if (x.substring(0, 41) == '{Final FEEDBACK - CLICK on 2 to continue}') {
            return '{Final FEEDBACK - CLICK on 2 to continue}';
        }
        if (x.substring(0, 46) == '{CLICK on the RIGHT Answer - are you serious!}') {
            return x.substring(0, 46);
        }
        if (x.substring(0, 40) == '{CLICK on the RIGHT Answer - tough one!}') {
            return x.substring(0, 40);
        }
        if (x.substring(0, 43) == '{CLICK on the RIGHT Answer - so difficult!}') {
            return x.substring(0, 43);
        }
        if (x.substring(0, 41) == '{CLICK on the RIGHT Answer - super hard!}') {
            return x.substring(0, 41);
        }
        if (x.substring(0, 50) == '{CLICK on the RIGHT Answer - is that a real word!}') {
            return x.substring(0, 50);
        }
        if (x.substring(0, 53) == '{CLICK on the RIGHT Answer - bad and only 4 letters!}') {
            return x.substring(0, 53);
        }
        if (x.substring(0, 51) == "{CLICK on the RIGHT Answer - no way that's a word!}") {
            return x.substring(0, 51);
        }
        if (x.substring(0, 49) == '{CLICK on the RIGHT Answer - could be a freebie!}') {
            return x.substring(0, 49);
        }
        if (x.substring(0, 16) == '{Personal VALUE}') {
            return x.substring(0, 16);
        }
        if (x.substring(0, 16) == '{Business VALUE}') {
            return x.substring(0, 16);
        }
        if (x.substring(0, 6) == '{View}') {
            return x.substring(0, 6);
        }
        if (x.substring(0, 44) == '{Analogy Example - Answer = 3 or COW : MOO }') {
            return x.substring(0, 44);
        }
        if (x.substring(0, 57) == "{OPTION - Answer or don't answer Questions - Your choice}") {
            return x.substring(0, 57);
        }
        return ''; //no pre quest found  
    } // end formatpreQuest
    formatQuest(x) {
        if (x.substring(0, 7) == '{Style}') {
            return x.substring(7, 222);
        }
        if (x.substring(0, 9) == '{Control}') {
            return x.substring(9, 222);
        }
        if (x.substring(0, 11) == '{Authority}') {
            return x.substring(11, 222);
        }
        if (x.substring(0, 10) == '{Religion}') {
            return x.substring(10, 222);
        }
        if (x.substring(0, 27) == '{CLICK on the RIGHT Answer}'
            && x.includes("[") == false) {
            return x.substring(27, 222);
        }
        if (x.substring(0, 39) == '{FEEDBACK - CLICK to Agree or Disagree}') {
            return x.substring(39, 222);
        }
        if (x.substring(0, 41) == '{Final FEEDBACK - CLICK on 2 to continue}') {
            return x.substring(41, 222);
        }
        if (x.substring(0, 46) == '{CLICK on the RIGHT Answer - are you serious!}') {
            return x.substring(47, 222);
        }
        if (x.substring(0, 40) == '{CLICK on the RIGHT Answer - tough one!}') {
            return x.substring(40, 222);
        }
        if (x.substring(0, 43) == '{CLICK on the RIGHT Answer - so difficult!}') {
            return x.substring(43, 222);
        }
        if (x.substring(0, 41) == '{CLICK on the RIGHT Answer - super hard!}') {
            return x.substring(41, 222);
        }
        if (x.substring(0, 50) == '{CLICK on the RIGHT Answer - is that a real word!}') {
            return x.substring(50, 222);
        }
        if (x.substring(0, 53) == '{CLICK on the RIGHT Answer - bad and only 4 letters!}') {
            return x.substring(53, 222);
        }
        if (x.substring(0, 51) == "{CLICK on the RIGHT Answer - no way that's a word!}") {
            return x.substring(51, 222);
        }
        if (x.substring(0, 49) == '{CLICK on the RIGHT Answer - could be a freebie!}') {
            return x.substring(49, 222);
        }
        if (x.substring(0, 16) == '{Personal VALUE}') {
            return x.substring(16, 222);
        }
        if (x.substring(0, 16) == '{Business VALUE}') {
            return x.substring(16, 222);
        }
        if (x.substring(0, 6) == '{View}') {
            return x.substring(6, 222);
        }
        if (x.substring(0, 44) == '{Analogy Example - Answer = 3 or COW : MOO }') {
            return x.substring(44, 222);
        }
        if (x.substring(0, 57) == "{OPTION - Answer or don't answer Questions - Your choice}") {
            return x.substring(57, 222);
        }
        //////
        let lCurlyPos = x.indexOf('{');
        let rCurlyPos = x.indexOf('}');
        let lBrackPos = x.indexOf('[');
        // console.log(x)
        //xa = x.substring(0,rCurlyPos) 
        //xb = x.substring(0,lBrackPos)
        x = x.substring(rCurlyPos + 1, lBrackPos);
        //x = rCurlyPos.toString() + ' ' + lBrackPos.toString()
        return x;
    } // end formatQuest
    formatAca(qStyle, answer_dt, questTxt, corAns) {
        if (qStyle == 'S8') {
            return ['1', '2', '3', '4', '5', '6', '7', '8'];
        }
        if (qStyle == 'V' && corAns > 0) {
            // see ed 237 for yet another flavor of aca (has corAns)
            let lBrackPos = questTxt.indexOf('[') + 1;
            let rBrackPos = questTxt.indexOf(']');
            if (lBrackPos > -1 && rBrackPos > -1) {
                let a = questTxt.substring(lBrackPos, rBrackPos);
                let ax = a.split('  ');
                return ax;
            }
            //return ['condor','duck','robin','jay','finch']
            let kk = (answer_dt.split('   ').join('|'));
            kk = kk.replaceAll('  ', '|');
            kk = kk.replaceAll('|||', '|');
            kk = kk.replaceAll('||', '|');
            kk = kk.replaceAll('||', '|');
            let kkArray = kk.split('|');
            //console.log(kkArray)
            return kkArray;
            // "malinger       bombard         dissuade         expire           falter",
        }
        //let moo = "{CLICK on the RIGHT Answer} IMMORTAL  is to  DEATH  as:   [Anonymous : Fame  Hopeless : Situation  Vital : Life  Indisputable : Agreement  Daily : Yearly]"
        // see ed 248 for where ya might get aca
    } // end formatAca
    formatAcaFrame(qStyle, answerDt) {
        if (qStyle == 'V') {
            return [];
        } // <-no frame needed.
        if (answerDt.length == 0) {
            return [];
        } // <-no frame-ish input.
        ///////////////////////////
        // need a descriptive frame: (like disagree,maybe,agree)
        let xx = (answerDt.split('   ').join('|'));
        xx = xx.replaceAll('  ', '|');
        xx = xx.replaceAll('|||', '|');
        xx = xx.replaceAll('||', '|');
        xx = xx.replaceAll('||', '|');
        let xArray = xx.split('|');
        //console.log(xArray)
        return xArray;
    } // end formatAcaFrame
    formatAcaPointVals(qStyle, corAns) {
        if (qStyle == 'S8') {
            return [1, 2, 3, 4, 5, 6, 7, 8];
        }
        if (qStyle == 'V') {
            let b = [];
            for (let i = 0; i < 5; i++) {
                if (i + 1 == corAns) { // array is zeroBased, corAns is oneBased.
                    b.push(1);
                }
                else {
                    b.push(0);
                } // end if
            } //end for
            return b;
        }
        return []; //default, hope I never get here.
    }
    formatAccum(ac1, ac2, ac3) {
        if (ac2.length > 0 && ac3.length > 0) {
            return [ac1, ac2, ac3];
        }
        if (ac2.length > 0) {
            return [ac1, ac2];
        }
        if (ac1.length > 0) {
            return [ac1];
        }
        return [];
    }
    writeNewDbTables() {
        // he hit the button to Write All Quest to DB
        // alert(this.newQuestArray.length)
        for (let i = 0; i < this.newQuestArray.length; i++) {
            this.newQuestObj = this.newQuestArray[i];
            this.launchQtWriteQuestion(i);
        } // end for
        // now build subsets, write to subset db
        this.buildSubsetArrayTemp();
        this.convertSubsetsToDbLayout();
        this.launchQtUpdateSubsets(); //assume fauna db subset already exists
        // now build rules, write to rules db
        //for (let i = 0; i<2; i++){ //billy 5 temp
        for (let i = 0; i < this.newRulesArray.length; i++) {
            this.newRuleObj = this.newRulesArray[i];
            this.launchQtWriteRule();
        } // end for
    } // end writeNewDbTables
    launchQtWriteQuestion(i) {
        console.log('running  conv launchQtWriteQuestion');
        // billy temp ... write a sampling of questions
        // let mar = ['26','189','195','201','206','225','226','236','238','248','306','332',
        //  '126','289','295','301','306','325','326','336','38','48','27','32']
        // console.log(this.newQuestArray[i])
        // let bar =  this.newQuestArray[i].questNbr
        // let narTf = mar.includes(bar)
        // if (narTf == false){return}
        //billy temp
        src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtWriteQuestion(this.newQuestObj)
            .then((qtDbRtnObj) => {
            this.qtDbDataObj = qtDbRtnObj.data;
            // return from this on-the-fly function is implied  
        }) // done with .then
            .catch(() => {
            console.log('launchQtWriteQuestion error. questObj:' + this.newQuestObj);
        });
    } //end launchQtWriteQuestion
    buildSubsetArrayTemp() {
        this.newSubsetArrayTemp = [];
        let si = -1;
        // read all possible subsets in newQuestArray.
        for (let i = 0; i < this.newQuestArray.length; i++) {
            // in newSubsetArray so far, look for newQuestArray subset.
            // if not yet found in newSubsetArray, push it into newSubsetArray
            //console.log(this.newQuestArray[i].subset)
            si = this.newSubsetArrayTemp.findIndex((vvv) => {
                return vvv == this.newQuestArray[i].subset;
            });
            if (si < 0) {
                this.newSubsetArrayTemp.push(this.newQuestArray[i].subset);
            } // end if
        } // end for
        //console.table(this.newSubsetArrayTemp)
    }
    convertSubsetsToDbLayout() {
        this.newSubsetObj =
            {
                cust: "1",
                qid: "1",
                subsets: this.formatSubsets()
            };
    } // end convertSubsetsTDbLayout
    formatSubsets() {
        // like ["main1", "parakeetFollowOn", "main2", "iqFollowOn", "main3"]
        let s = [];
        for (let i = 0; i < this.newSubsetArrayTemp.length; i++) {
            s.push(this.newSubsetArrayTemp[i]);
        }
        return s;
    }
    launchQtUpdateSubsets() {
        console.log('running  conv launchQtUpdateSubsets');
        // update the subset list
        // in the existing fauna rec for cust1 qid1.
        // using the just-built newSubsetObj.
        src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtUpdateSubset(this.newSubsetObj)
            .then((qtDbRtnObj) => {
            this.qtDbDataObj = qtDbRtnObj.data;
            // return from this on-the-fly function is implied  
        }) // done with .then
            .catch(() => {
            console.log('launchQtUpdateSubsets error. newSubsetObj:' + this.newSubsetObj);
        });
    } // end launchQtUpdateSubsets 
    setEdRuleArray338() {
        this.edRuleArray338 = [];
        // billy enable this to run conv for real
        // this.edRuleArray338 = [
        //     {
        //       "rule_id": 11,
        //       "qid": 1,
        //       "subset": "N-PA",
        //       "accum": "DA1",
        //       "oper": ">",
        //       "thresh": 5
        //     },
        //     {
        //       "rule_id": 12,
        //       "qid": 1,
        //       "subset": "N-IM",
        //       "accum": "DA0",
        //       "oper": ">",
        //       "thresh": 5
        //     },
        //     {
        //       "rule_id": 13,
        //       "qid": 1,
        //       "subset": "N-CO",
        //       "accum": "DA3",
        //       "oper": ">",
        //       "thresh": 5
        //     },
        //     {
        //       "rule_id": 14,
        //       "qid": 1,
        //       "subset": "N-OB",
        //       "accum": "DA4",
        //       "oper": ">",
        //       "thresh": 5
        //     },
        //     {
        //       "rule_id": 15,
        //       "qid": 1,
        //       "subset": "N-HY",
        //       "accum": "DB1",
        //       "oper": ">",
        //       "thresh": 5
        //     },
        //     {
        //       "rule_id": 16,
        //       "qid": 1,
        //       "subset": "N-SO",
        //       "accum": "DB3",
        //       "oper": ">",
        //       "thresh": 5
        //     },
        //     {
        //       "rule_id": 17,
        //       "qid": 1,
        //       "subset": "T1",
        //       "accum": "T-E",
        //       "oper": ">",
        //       "thresh": 10
        //     },
        //     {
        //       "rule_id": 18,
        //       "qid": 1,
        //       "subset": "T2",
        //       "accum": "T-E",
        //       "oper": ">",
        //       "thresh": 10
        //     },
        //     {
        //       "rule_id": 19,
        //       "qid": 1,
        //       "subset": "T3",
        //       "accum": "T-E",
        //       "oper": ">",
        //       "thresh": 10
        //     },
        //     {
        //       "rule_id": 20,
        //       "qid": 1,
        //       "subset": "LOC2",
        //       "accum": "LOC1",
        //       "oper": ">",
        //       "thresh": 20
        //     },
        //     {
        //       "rule_id": 21,
        //       "qid": 1,
        //       "subset": "LOC3",
        //       "accum": "LOC1",
        //       "oper": ">",
        //       "thresh": 20
        //     },
        //     {
        //       "rule_id": 22,
        //       "qid": 1,
        //       "subset": "Z2BON",
        //       "accum": "A2",
        //       "oper": ">",
        //       "thresh": 165
        //     },
        //     {
        //       "rule_id": 23,
        //       "qid": 1,
        //       "subset": "Z3V-H",
        //       "accum": "I-V1",
        //       "oper": ">",
        //       "thresh": 14
        //     },
        //     {
        //       "rule_id": 24,
        //       "qid": 1,
        //       "subset": "Z1POW",
        //       "accum": "A1",
        //       "oper": ">",
        //       "thresh": 210
        //     },
        //     {
        //       "rule_id": 25,
        //       "qid": 1,
        //       "subset": "Z4E-H",
        //       "accum": "A6",
        //       "oper": ">",
        //       "thresh": 41
        //     },
        //     {
        //       "rule_id": 26,
        //       "qid": 1,
        //       "subset": "Z5I-H",
        //       "accum": "A7",
        //       "oper": ">",
        //       "thresh": 43
        //     },
        //     {
        //       "rule_id": 27,
        //       "qid": 1,
        //       "subset": "Z6E-L",
        //       "accum": "A6",
        //       "oper": "<",
        //       "thresh": 32
        //     },
        //     {
        //       "rule_id": 28,
        //       "qid": 1,
        //       "subset": "Z7I-L",
        //       "accum": "A7",
        //       "oper": "<",
        //       "thresh": 31
        //     },
        //     {
        //       "rule_id": 29,
        //       "qid": 1,
        //       "subset": "Z8-AS",
        //       "accum": "T-E3",
        //       "oper": ">",
        //       "thresh": 42
        //     },
        //     {
        //       "rule_id": 30,
        //       "qid": 1,
        //       "subset": "Z90EX",
        //       "accum": "T-E2",
        //       "oper": ">",
        //       "thresh": 40
        //     },
        //     {
        //       "rule_id": 31,
        //       "qid": 1,
        //       "subset": "Z99",
        //       "accum": "DA0",
        //       "oper": ">",
        //       "thresh": 5
        //     },
        //     {
        //       "rule_id": 32,
        //       "qid": 1,
        //       "subset": "I-V2",
        //       "accum": "I-V1",
        //       "oper": ">",
        //       "thresh": 14
        //     },
        //     {
        //       "rule_id": 33,
        //       "qid": 1,
        //       "subset": "V-MA",
        //       "accum": "DA1C",
        //       "oper": ">",
        //       "thresh": 10
        //     },
        //     {
        //       "rule_id": 34,
        //       "qid": 1,
        //       "subset": "MB-S",
        //       "accum": "DA0",
        //       "oper": ">",
        //       "thresh": 5
        //     },
        //     {
        //       "rule_id": 35,
        //       "qid": 1,
        //       "subset": "MB-T",
        //       "accum": "DA0",
        //       "oper": ">",
        //       "thresh": 5
        //     },
        //     {
        //       "rule_id": 36,
        //       "qid": 1,
        //       "subset": "Z75-L",
        //       "accum": "LOC1",
        //       "oper": ">",
        //       "thresh": 20
        //     }
        // ]
    } // end setEdRuleArray338
    buildOneRuleFrom338(oneEdRule) {
        this.newRuleObj =
            {
                cust: "1",
                qid: "1",
                subset: oneEdRule.subset,
                accum: oneEdRule.accum,
                oper: oneEdRule.oper,
                thresh: oneEdRule.thresh
            };
    } // end buildOneRuleFrom338
    launchQtWriteRule() {
        console.log('running  conv launchQtWriteRule');
        src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtWriteRule(this.newRuleObj)
            .then((qtDbRtnObj) => {
            this.qtDbDataObj = qtDbRtnObj.data;
            // return from this on-the-fly function is implied  
        }) // done with .then
            .catch(() => {
            console.log('launchQtWriteRule error. newRuleObj:' + this.newRuleObj);
        });
    }
    massDeleteQuestAndRulesClick() {
        alert('running massDeleteQuestAndRulesClick');
        this.launchQtMassDeleteQuestions();
        this.launchQtMassDeleteRules();
    }
    launchQtMassDeleteQuestions() {
        let myCust = '1';
        let myQid = '1';
        console.log('running conv launchQtMassDeleteQuestions');
        src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtMassDeleteQuestions(myCust, myQid)
            .then((qtDbRtnObj) => {
            this.qtDbDataObj = qtDbRtnObj.data;
            // return from this on-the-fly function is implied  
        }) // done with .then
            .catch(() => {
            console.log('qtMassDeleteQuestions error.');
        });
    }
    launchQtMassDeleteRules() {
        let myCust = '1';
        let myQid = '1';
        console.log('running conv launchQtMassDeleteRules');
        src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtMassDeleteRules(myCust, myQid)
            .then((qtDbRtnObj) => {
            this.qtDbDataObj = qtDbRtnObj.data;
            // return from this on-the-fly function is implied  
        }) // done with .then
            .catch(() => {
            console.log('qtMassDeleteRules error.');
        });
    }
}
QncconvComponent.ɵfac = function QncconvComponent_Factory(t) { return new (t || QncconvComponent)(); };
QncconvComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QncconvComponent, selectors: [["app-qncconv"]], decls: 14, vars: 0, consts: [["type", "file", 3, "change"], [1, "button", "is-info", 3, "click"]], template: function QncconvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " --- cncconv component --- Convert json to quest arrays, upload to db ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br")(4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function QncconvComponent_Template_input_change_5_listener($event) { return ctx.fileWasChosen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncconvComponent_Template_button_click_6_listener() { return ctx.massDeleteQuestAndRulesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " mass delete questions & Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncconvComponent_Template_button_click_9_listener() { return ctx.convertEd338ToDbLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " convert Ed338 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncconvComponent_Template_button_click_12_listener() { return ctx.writeNewDbTables(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Write New Questool Arrays to DB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, encapsulation: 2 });


/***/ }),

/***/ 8130:
/*!********************************************!*\
  !*** ./src/app/qncmen/qncmen.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncmenComponent": () => (/* binding */ QncmenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



function QncmenComponent_span_6_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QncmenComponent_span_6_span_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.jumpToWwsr(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "scoreboards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QncmenComponent_span_6_span_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.jumpToWwg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QncmenComponent_span_6_span_1_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.jumpToWwr(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QncmenComponent_span_6_span_1_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.jumpToWwq(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QncmenComponent_span_6_span_1_Template_span_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.jumpToWwu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function QncmenComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QncmenComponent_span_6_span_1_Template, 13, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showSurveyMenButsIn);
} }
function QncmenComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QncmenComponent_span_8_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.jumpToWws(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QncmenComponent_span_8_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.jumpToPro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function QncmenComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.msg1);
} }
class QncmenComponent {
    constructor() {
        // @Input()  whichMenuOptionToHighlightIn
        this.wwgJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.wwqJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.wwrJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.wwiJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.wwqdJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.wwuJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.wwsJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.proJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.wwsrJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // 
        //  qnc menu component.
        //  shows at the top of every screen.
        //  
        //menuOptionTitle = 'Qnc men'  
        this.msg1 = '';
        this.showMsg1 = false;
    }
    //showMenButs = false
    ngOnInit() {
        console.log('running men ngOnInit===');
        // if (this.whichMenuOptionToHighlightIn  > ''){
        //   this.setMenuHighlight(this.whichMenuOptionToHighlightIn)
        // }
        //console.log('authIn:',this.authIn)
        // if (this.authIn){
        //   this.showMenButs = true
        // }
    } // end ngOnInit
    jumpToWwg() {
        this.setMenuHighlight('groups');
        this.wwgJumpOut.emit();
    }
    jumpToWwq() {
        this.setMenuHighlight('questions');
        this.wwqJumpOut.emit();
    }
    jumpToWwr() {
        this.setMenuHighlight('rules');
        this.wwrJumpOut.emit();
    }
    jumpToWwi() {
        this.setMenuHighlight('invitations');
        this.wwiJumpOut.emit();
    }
    jumpToWwu() {
        if (this.authIn) {
            this.showMsg1 = false;
            this.setMenuHighlight('users');
            this.wwuJumpOut.emit();
        }
        else {
            this.showMsg1 = true;
            this.msg1 = 'login first, pal. hey?';
        }
    }
    jumpToWws() {
        this.setMenuHighlight('logout');
        this.wwsJumpOut.emit();
    }
    jumpToPro() {
        console.log('74 men jump to pro');
        this.setMenuHighlight('profile');
        this.proJumpOut.emit();
    }
    jumpToWwsr() {
        this.setMenuHighlight('scoreboards');
        this.wwsrJumpOut.emit();
    }
    showHideHelp() {
        alert('men show help for ' + this.compTitleIn);
    }
    // setMenuOptionsOff(){
    //   let el = document.getElementById('profile')
    //   el.classList.add("has-background-grey")  
    //   el.classList.add('has-text-grey-light')  
    //   el = document.getElementById('questions')
    //   el.classList.add("has-background-grey")  
    //   el.classList.add('has-text-grey-light') 
    //   el = document.getElementById('groups')
    //   el.classList.add("has-background-grey")  
    //   el.classList.add('has-text-grey-light') 
    //   el = document.getElementById('rules')
    //   el.classList.add("has-background-grey")  
    //   el.classList.add('has-text-grey-light') 
    //   el = document.getElementById('invitations')
    //   el.classList.add("has-background-grey")  
    //   el.classList.add('has-text-grey-light') 
    //   el = document.getElementById('users')
    //   el.classList.add("has-background-grey")  
    //   el.classList.add('has-text-grey-light') 
    // } // end setMenuOptionsOff
    // setMenuOptionsOn(){
    //   let el = document.getElementById('profile')
    //   el.classList.remove("has-background-grey")  
    //   el.classList.remove('has-text-grey-light')  
    //   el = document.getElementById('questions')
    //   el.classList.remove("has-background-grey")  
    //   el.classList.remove('has-text-grey-light') 
    //   el = document.getElementById('groups')
    //   el.classList.remove("has-background-grey")  
    //   el.classList.remove('has-text-grey-light') 
    //   el = document.getElementById('rules')
    //   el.classList.remove("has-background-grey")  
    //   el.classList.remove('has-text-grey-light') 
    //   el = document.getElementById('invitations')
    //   el.classList.remove("has-background-grey")  
    //   el.classList.remove('has-text-grey-light') 
    //   el = document.getElementById('users')
    //   el.classList.remove("has-background-grey")  
    //   el.classList.remove('has-text-grey-light') 
    // } // end setMenuOptionsOn
    setMenuHighlight(mel) {
        console.log('running men  132 setMenuHighlight');
        // first make all menu options not-selected
        let el = document.getElementById('profile');
        el.classList.remove("has-background-primary");
        if (this.showSurveyMenButsIn) { // he previously chose a survey.
            // these buts are not rendered until a survey is chosen.
            el = document.getElementById('questions');
            el.classList.remove("has-background-primary");
            el = document.getElementById('groups');
            el.classList.remove("has-background-primary");
            // el = document.getElementById('invitations')
            // el.classList.remove("has-background-primary") 
            el = document.getElementById('users');
            el.classList.remove("has-background-primary");
            el = document.getElementById('groups');
            el.classList.remove("has-background-primary");
            el = document.getElementById('rules');
            el.classList.remove("has-background-primary");
            el = document.getElementById('scoreboards');
            el.classList.remove("has-background-primary");
        }
        el = document.getElementById('logout');
        el.classList.remove("has-background-primary");
        // now highlight the selected menu option
        el = document.getElementById(mel);
        console.log('mel:', mel);
        el.classList.add("has-background-primary");
    } // end setMenuHighlight
} // end export
QncmenComponent.ɵfac = function QncmenComponent_Factory(t) { return new (t || QncmenComponent)(); };
QncmenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QncmenComponent, selectors: [["app-qncmen"]], inputs: { authIn: "authIn", showMenButsIn: "showMenButsIn", showSurveyMenButsIn: "showSurveyMenButsIn", compTitleIn: "compTitleIn", surveyNameIn: "surveyNameIn", loadingDataMsg: "loadingDataMsg" }, outputs: { wwgJumpOut: "wwgJumpOut", wwqJumpOut: "wwqJumpOut", wwrJumpOut: "wwrJumpOut", wwiJumpOut: "wwiJumpOut", wwqdJumpOut: "wwqdJumpOut", wwuJumpOut: "wwuJumpOut", wwsJumpOut: "wwsJumpOut", proJumpOut: "proJumpOut", wwsrJumpOut: "wwsrJumpOut" }, decls: 13, vars: 6, consts: [[1, "selz-sticky-top"], [1, "columns", "has-background-warning", "is-marginless", "is-gapless"], [1, "column", "is-two-fifths"], [1, ""], [4, "ngIf"], [1, "column", "is-one-fifth"], [1, "button", "has-background-warning", "is-small", "is-pulled-right", 3, "click"], ["class", "tag is-small is-dark", 4, "ngIf"], ["id", "scoreboards", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["id", "groups", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["id", "rules", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["id", "questions", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["id", "users", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["id", "logout", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["id", "profile", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", "has-background-primary", 3, "click"], [1, "tag", "is-small", "is-dark"]], template: function QncmenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QncmenComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QncmenComponent_span_8_Template, 5, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QncmenComponent_Template_span_click_9_listener() { return ctx.showHideHelp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Help \u2754 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QncmenComponent_div_12_Template, 2, 1, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" \u00A0 ", ctx.surveyNameIn, " \u00A0\u00A0 ", ctx.compTitleIn, " \u00A0\u00A0 ", ctx.loadingDataMsg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenButsIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenButsIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMsg1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 172:
/*!********************************************!*\
  !*** ./src/app/qncpro/qncpro.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncproComponent": () => (/* binding */ QncproComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiSupabase */ 2979);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function QncproComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncproComponent_tr_14_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u274F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QncproComponent_tr_14_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QncproComponent_tr_14_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u2705 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QncproComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncproComponent_tr_14_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ix_r4 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.qidChosen(ix_r4); })("mouseover", function QncproComponent_tr_14_Template_tr_mouseover_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ix_r4 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.qidMouseOver(ix_r4); })("mouseout", function QncproComponent_tr_14_Template_tr_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ix_r4 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.qidMouseOut(ix_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QncproComponent_tr_14_td_1_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QncproComponent_tr_14_td_2_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QncproComponent_tr_14_td_3_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u00A0\u00A0 \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncproComponent_tr_14_Template_td_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ix_r4 = restoredCtx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.copyTxt(ix_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Copy Invitation Link to Clipboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncproComponent_tr_14_Template_td_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ix_r4 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.setIcode(ix_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " set Invitation Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ix_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "qlink-", ix_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r3.qid != ctx_r1.qid && i_r3.surveyStatus == "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r3.surveyStatus == "inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r3.qid == ctx_r1.qid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r3.qid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r3.surveyName, " ");
} }
function QncproComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "        Hello from Profile component.\n        shows info about this subscriber.\n        shows info about this teamMember.  (the admin) (the user)\n        (for now, only one team member per subscriber)\n\n  subscriber (pays for Qnc, has a team of people)\n  list of surveys for a subscriber\n  list of teamMembers for a subscriber\n   \n  admin  (teamMember whose name is on this page)\n  sets up surveys\n  invites participants to take a specific survey\n  reviews survey results from a participant\n\n\n        show the survey list for this subscriber.\n        let him select a survey from the list.\n         \n        build querystring, based on his selection.\n        gotta block menu options until he selects a survey....\n        \n        part1 view my profile (the team member who works for the subscriber)\n        part2 update my profile (reset info about my profile)\n        part3 update my subscription someday\n        \n\nmight need an auto email when he wants to reset password.\n\nfor June 2021, maybe two subscribers:  digital Couch and bs \nmanually enter into fauna subscriber table.\nEd is subscriber 1. \nbs is subscriber 2.\n   ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
// make sure ya dont have runaway reads like june23,
// but show user a message on profile screen
// when he hits a read limit.
// eventually set read limit to something.
// see app component readManyDbTables.
// billy, maybe rethink invite code and promo.
// invitation model A is wedding invitation set.
// promo model B is gift certificate.
// do ya really need an invitation screen?
// hey, how about used-up gift certificates? (promo expired?)
// billy, you are not consistent with obj and arrays for
// subscription info, subscriber, subscription array.
// the new convention is to make subscribersIn an array
// (even though it will likely be only subscriber).
// then build a subscriberObj from the array.
// why do this?  consistence, or fix whats not broken?
// ... same with teamMember?
//===========================================================
// - this profile page is about a subscriber & teamMember.
// - and list of surveys for this subscriber. (qidArrayIn)
// we get here to the profile page when he logs on as an admin.
// that means he entered a teamMember user id,
// ad we previously found him on the teamMember table.
// 
// app component keeps trak of teamMember table fields in teamMemberObj.
// app component keeps trak of subscriber table fields in subscriberObj.
// 
// subscriberInternalId is passed-into this pro component via its obj.
// we use subscriberInternalId as a key, to read subscriber table.
// we should hit a single subscription record, with info about this subscription.
// subscription table has multiple qid objects.
// there's something evil about just setting querystring,
// instead of the angular way of signaling app component with 
// cust and qid input and output.  oh well, it's an evil world.
class QncproComponent {
    constructor() {
        this.surveySelectOut = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.qidArrayOut = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.subscriptionObjOut = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.teamMemberObjOut = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.msg1 = '';
        this.teamMemberUserId = '';
        this.teamMemberUserName = '';
        this.teamMemberSubscriberInternalId = '';
        this.subscriberUserId = '';
        this.subscriberUserName = '';
        this.subscriberPlan = '';
        this.subscriberPlanExpDate = new Date();
        this.subscriberPlanExpDateTxt = '';
        this.subscriberInternalId = '';
        // qidArray = []
        this.cust = '';
        this.qid = '';
        this.showdevNotes = false;
        this.copyingTxt = false; // remember when he copies invite text
        this.surveyObj = {};
        this.qtDbDataObj = {};
        this.supaData = [];
        this.faunaData = [];
        this.subscriptionsArray = [];
        this.supaKeyFlds = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running pro ngOnInit');
            // console.log(this.qidArrayIn)    
            this.msg1 = 'Qna List';
            // console.table(this.qidArray) 
            console.log(' pro init subscriptionObjIn:');
            console.table(this.subscriptionObjIn);
            //console.log(this.teamMemberSubscriberInternalId)
            this.qid = this.qidIn;
            this.cust = this.custIn;
            if (Object.keys(this.teamMemberObjIn).length > 0) {
                // console.log('86 pro init teamMemberObjIn > 0')
                // we are carrying around teamMember object
                // from prior runs of pro 
                this.teamMemberUserId = this.teamMemberObjIn.userId;
                this.teamMemberUserName = this.teamMemberObjIn.userName;
                this.teamMemberSubscriberInternalId = this.teamMemberObjIn.subscriberInternalId;
            } //end if 
            if (Object.keys(this.subscriptionObjIn).length > 0) {
                //console.log('95 pro init subscriptionObjIn > zero ')
                //console.table(this.subscriptionObjIn)
                // we are carrying around subscription object
                // from prior runs of pro.  
                this.subscriberUserName = this.subscriptionObjIn.userName;
                this.subscriberUserId = this.subscriptionObjIn.userId;
                this.subscriberPlan = this.subscriptionObjIn.plan;
                this.subscriberPlanExpDateTxt = this.subscriptionObjIn.planExpDate;
                this.subscriberInternalId = this.subscriptionObjIn.internalId;
            } //end if
            if (this.qidIn == '?') { // first time in
                if (this.faunaOrSupabaseIn == 'fauna') {
                    yield this.launchReadFaunaSubscribers();
                    yield this.buildSubscriptionInfo();
                    yield this.launchReadFaunaSurveys();
                    this.sortSurveyArraybyNbr();
                } // end if
                if (this.faunaOrSupabaseIn == 'supabase') {
                    this.supaKeyFlds = { "internalId": this.teamMemberSubscriberInternalId };
                    yield this.launchReadSupabase('qtSubscribers', this.supaKeyFlds);
                    yield this.buildSubscriptionInfo();
                    this.supaKeyFlds = { "cust": this.cust };
                    yield this.launchReadSupabase('qtSurveys', this.supaKeyFlds);
                    this.sortSurveyArraybyNbr();
                } // end if
                this.qidChosen(0); // default to the first qid
                this.qidArrayOut.emit(this.qidArrayIn);
            } // end if
        });
    } // end ngOnInit
    qidMouseOver(ix) {
        if (this.loadingDataBusyIn) {
            return;
        } //no surveys are clickable
        // mouseOver + mouseOut feels like a hack.
        // can we do a better bulma way to make rows selectable?
        let qlink = 'qlink-' + ix;
        let el = document.getElementById(qlink);
        if (this.qidArrayIn[ix].surveyStatus == 'active'
            && !this.loadingDataBusyIn) {
            el.classList.remove("has-background-success-light");
            el.classList.add("is-clickable");
            el.classList.add("has-background-link-light");
            //el.classList.add("has-text-white") //duznt work?
            //el.removeAttribute("disabled")
        }
    } // end qidMouseOver
    qidMouseOut(ix) {
        let qlink = 'qlink-' + ix;
        let el = document.getElementById(qlink);
        el.classList.add("has-background-success-light");
        el.classList.remove("has-background-link-light");
        // el.classList.remove("has-text-white") // duznt work?
    } // end qidMouseOut
    qidChosen(ix) {
        console.log('running pro qidChosen');
        //loop all el.classList.remove("is-clickable") ??
        if (this.loadingDataBusyIn) {
            return;
        } //cant select right now cuz we r busy
        if (this.copyingTxt == true) { // a hack, to prevent qidChosen 
            // when he is just copying text.  (return now!)
            // fix this hack someday, by changing
            // the survey list table html. but html tables are tricky.
            this.copyingTxt = false;
            return;
        }
        if (this.qidArrayIn[ix].qid == this.qid) {
            // this.msg1='this Qna is already selected.' 
            return;
        }
        // this user has selected a qid from the screen list.
        // each qid has status of active/inactive.
        // only active qids are selectable on pro screen.
        // billy, this active/inactive thing is kinda confusing,
        // and the need is questionable.
        // the need might be OK if ya make all his surveys inactive
        // if he duznt pay the bill.
        // maybe make em all active by default, except for ed's.
        if (this.qidArrayIn[ix].surveyStatus == 'active') {
            // change querystring:
            this.setQueryString(ix);
            this.msg1 = 'selected Qna: '
                + this.qidArrayIn[ix].surveyName;
            // we put a green check on the survey row he selects.
            // keep the green check on, until he selects another.
            // control the html green check with this.qid and *ngIf
            this.qid = this.qidArrayIn[ix].qid;
            // tell app component which Qid Selected:
            this.surveySelectOut.emit(this.qidArrayIn[ix].surveyName);
        }
        else {
            this.msg1 = 'this Qna is inactive, and cannot be selected.';
        } // end if
        // Mar2022 set surveyObj to test updateSurvey fauna function
        // this.surveyObj = this.surveysArray[ix]
        // dec 2021 temp. hard code promo:
        // if (this.qidArray[ix].surveyName == 'Digital Couch Survey'){}
        // if (this.qidArray[ix].surveyName == 'forest city Survey'){}
    } // end qidChosen
    setQueryString(ix) {
        console.log('running pro setQueryString');
        let myUrl = new URL(window.location.href);
        this.qid = this.qidArrayIn[ix].qid;
        let leftUrl = myUrl.toString().split("?")[0]; //take off old querystring
        let myNewUrl = leftUrl // + '?qid=4&cust=1'
            + '?qid=' + this.qid
            + '&cust=' + this.cust;
        history.pushState({}, null, myNewUrl);
    } // end setQueryString
    launchReadFaunaSubscribers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchReadFaunaSubscribers');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadSubscribers(this.teamMemberSubscriberInternalId);
            this.faunaData = faunaRes.map(f => f.data);
            this.subscriptionsArray = this.faunaData;
            console.log('list of faunaData subscribers we just read:'); // (likey just one)
            console.table(this.faunaData);
        });
    } // end launchReadFaunaSubscribers
    launchReadFaunaSurveys() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchReadFaunaSurveys');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadSurveys(this.cust);
            this.faunaData = faunaRes.map(f => f.data);
            this.qidArrayIn = this.faunaData;
            console.log('list of faunaData surveys we just read:');
            console.table(this.faunaData);
        });
    } // end launchReadFaunaSurveys
    launchReadSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(Date.now() / 10000, 'running  pro launchReadSupabase...');
            // flds = {"rango":"trango"}
            console.table(flds);
            let supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].readSupabase(tbl, flds);
            console.log(Date.now() / 10000, 'done pro waiting for apiSupabase.  supaRes:');
            console.log(supaRes); //supaRes is only a promise unless I await. 
            //supaRes is null if fieldname is wrong.
            //supaRes is an empty object if not found.
            this.supaData = supaRes.supabaseData;
            if (this.supaData == null)
                alert('supabase read fail ' + tbl + flds);
            // billy, checking for null is not great error handling.
            if (tbl == 'qtSubscribers') {
                this.subscriptionsArray = this.supaData.slice();
            }
            if (tbl == 'qtSurveys') {
                this.qidArrayIn = this.supaData.slice();
            }
            console.log(Date.now() / 10000, 'end pro launchReadSupabase.');
        });
    } // end launchReadSupabase
    buildSubscriptionInfo() {
        console.log('running  pro buildSubscriptionInfo');
        // subscriptionsArray has already been built.
        // there is likely only one rec in subscriptionsArray.
        let si = this.subscriptionsArray[0];
        this.cust = si.cust;
        this.subscriberUserId = si.userId;
        this.subscriberUserName = si.userName;
        this.subscriberPlan = si.plan;
        let myDateString = si.planExpDate + 'T00:00:00';
        // let myDateString =   '2040-12-31T00:00:00'
        this.subscriberPlanExpDate = new Date(myDateString);
        this.subscriberPlanExpDateTxt = si.planExpDate;
        this.subscriberInternalId = si.internalId;
        console.log('256 subscriber int:', this.subscriberInternalId);
        let d = new Date(Date.now());
        if (d.getTime() < this.subscriberPlanExpDate.getTime()) {
            console.log('pro buildSubscription info, subscription not yet expired');
        }
        if (d.getTime() > this.subscriberPlanExpDate.getTime()) {
            console.log('pro buildSubscription info, subscription is expired');
        }
        this.subscriptionObjOut.emit(this.subscriptionsArray[0]);
    } // end buildSubscriptionInfo
    sortSurveyArraybyNbr() {
        console.log('running sortSurveyArraybyNbr');
        this.qidArrayIn
            .sort((a, b) => (Number(a.qid) > Number(b.qid))
            ? 1 : (a.qid == b.qid)
            ? ((a.qid > b.qid) ? 1 : -1) : -1);
    } // end sortSurveyArraybyNbr
    setIcode(ix) {
        let icodeN = Math.floor((Math.random() * 10000) + 1000);
        this.qidArrayIn[ix].icode = icodeN.toString();
        this.launchQtUpdateSurvey(ix);
    } // end setIcode
    launchQtUpdateSurvey(ix) {
        console.log('running  pro launchQtUpdateSurvey');
        // Mar2022 this func maybe should be in some other component
        this.msg1 = 'updating survey info ...';
        this.copyingTxt = true; // a hack to prevent qidChosen again
        this.surveyObj['cust'] = this.cust;
        this.surveyObj['qid'] = this.qidArrayIn[ix].qid;
        this.surveyObj['surveyName'] = this.qidArrayIn[ix].surveyName;
        this.surveyObj['surveyStatus'] = this.qidArrayIn[ix].surveyStatus;
        this.surveyObj['icode'] = this.qidArrayIn[ix].icode;
        src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtUpdateSurvey(this.surveyObj)
            .then((qtDbRtnObj) => {
            console.log(' 342 pro running .then of apiFauna.qtUpdateSurvey');
            this.msg1 = 'updated Qna info.  '
                + 'Please copy invitation link to paste into invitation emails.';
        }) // end then
            .catch(() => {
            console.log('apiFauna.qtUpdateSurvey error. surveyObj: ');
            console.table(this.surveyObj);
        }); // end catch
    } // end launchQtUpdateSurvey
    copyTxt(ix) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running pro copyTxt');
            this.msg1 = 'copying invitation text...';
            this.copyingTxt = true;
            let myUrl = 'https://qna.flyTechFree.com/' // april 2022
                + '?cust=' + this.cust // we already loaded cust
                + '&qid=' + this.qidArrayIn[ix].qid // he is selecting this qid
                + '&icode=' + this.qidArrayIn[ix].icode //  invite code
                + '&promo=' + 'promo711'; //  temp promo
            //console.log('pro copyTxt, qid:', qidParm )
            //console.log('pro copyTxt, cust:', this.cust )
            try {
                yield navigator.clipboard.writeText(myUrl);
            }
            catch (err) {
                console.error('copyText Failed to copy: ', err);
            }
            this.msg1 = 'text copied to clipboard---> ' + myUrl;
        });
    } // end copyTxt
} // end export QncproComponent
QncproComponent.ɵfac = function QncproComponent_Factory(t) { return new (t || QncproComponent)(); };
QncproComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QncproComponent, selectors: [["app-qncpro"]], inputs: { custIn: "custIn", qidIn: "qidIn", qidArrayIn: "qidArrayIn", subscriptionObjIn: "subscriptionObjIn", teamMemberObjIn: "teamMemberObjIn", loadingDataBusyIn: "loadingDataBusyIn", faunaOrSupabaseIn: "faunaOrSupabaseIn" }, outputs: { surveySelectOut: "surveySelectOut", qidArrayOut: "qidArrayOut", subscriptionObjOut: "subscriptionObjOut", teamMemberObjOut: "teamMemberObjOut" }, decls: 59, vars: 9, consts: [["class", "tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], [1, "table", "ml-3", "mb-3"], ["class", "has-background-success-light ", 3, "id", "click", "mouseover", "mouseout", 4, "ngFor", "ngForOf"], [1, "columns", "ml-3", "mr-3", "pt-6"], [1, "column", "box", "mr-3", "mb-3", "has-background-info-light"], [1, "is-pulled-right", "has-text-weight-semibold"], [1, "sss"], [1, "is-pulled-right"], ["class", "box mt-3 ml-3 mr-3 has-background-danger-light", 4, "ngIf"], [1, "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, "has-background-success-light", 3, "id", "click", "mouseover", "mouseout"], [4, "ngIf"], [1, "mt-1", "mb-1", "tag", "is-info", 3, "click"], [1, "mt-1", "mb-1", "ml-3", "tag", "is-info", 3, "click"], [1, "box", "mt-3", "ml-3", "mr-3", "has-background-danger-light"], ["cols", "130", "rows", "20", 1, "has-background-danger-light"]], template: function QncproComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QncproComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1)(2, "thead")(3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select \u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nbr \u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Qna Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Invitation to Participants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, QncproComponent_tr_14_Template, 14, 6, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3)(16, "table", 4)(17, "tbody")(18, "tr")(19, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Subscriber Id: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Subscriber Name: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tr")(29, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Subscription Level: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tr")(34, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Good Until: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "table", 4)(39, "tbody")(40, "tr")(41, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Team Member Id: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr")(46, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Team Member Name: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "tr")(51, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tr")(55, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, QncproComponent_div_58_Template, 3, 0, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.qidArrayIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.subscriberUserId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.subscriberUserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.subscriberPlan);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.subscriberPlanExpDateTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.teamMemberUserId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.teamMemberUserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showdevNotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 8266:
/*!********************************************!*\
  !*** ./src/app/qncwwg/qncwwg.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwgComponent": () => (/* binding */ QncwwgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/colSortFilt */ 4362);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function QncwwgComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwgComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_6_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.colSort("qCount", "des", "Count"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_6_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.colSort("qCount", "asc", "Count"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_6_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.colFilt("qCount", "qCount"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symFilt, " ");
} }
function QncwwgComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_10_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.colSort("groupNbr", "des", "Group Nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_10_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.colSort("groupNbr", "asc", "Group Nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_10_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.colFilt("groupNbr", "groupNbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symFilt, " ");
} }
function QncwwgComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_14_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.colSort("groupName", "des", "Group Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_14_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.colSort("groupName", "asc", "Group Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_14_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.colFilt("groupName", "groupName"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symFilt, " ");
} }
function QncwwgComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_18_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.colSort("seq", "des", "Round"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_18_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.colSort("seq", "asc", "Round"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_span_18_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.colFilt("seq", "Round"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symFilt, " ");
} }
function QncwwgComponent_tr_23_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td")(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td")(11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_tr_23_ng_container_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const g_r22 = ctx_r26.$implicit; const gx_r23 = ctx_r26.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.detailButclick(g_r22.groupNbr, gx_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const g_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", g_r22.qCount, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](g_r22.groupNbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](g_r22.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](g_r22.seq);
} }
function QncwwgComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QncwwgComponent_tr_23_ng_container_1_Template, 13, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", g_r22.filterInOut == "in");
} }
class QncwwgComponent {
    constructor() {
        this.groupsOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.groupNbrOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.wwgdJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.msg1 = '';
        this.symArUp = '\u{2191}';
        this.symArDn = '\u{2193}';
        this.symFilt = '\u{2207}';
        this.colHeadSf = false;
        this.colSortByArray = [];
    }
    ngOnInit() {
        this.msg1 = 'group list';
        this.countQuestionsPerGroup();
        if (this.groupsIn.length == 0) {
            this.msg1 = "No groups exist. Click the 'add new' button.";
        }
        if (this.filterResetIn) {
            this.resetGroupsFilter();
        }
    } // end ngOnInit
    colHeadclick(c) {
        // hide/show sort & filter icons in the table header (lower part)
        if (this.colHeadSf == true) {
            this.colHeadSf = false;
            if (this.msg1 == 'click an icon to sort or filter.') {
                this.msg1 = '';
            }
        }
        else {
            this.colHeadSf = true;
            this.msg1 = 'click an icon to sort or filter.';
        }
    } // end colHeadclick
    colSort(fieldName, ascDes, fieldMsg) {
        let colSortOut = src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__["default"].colSort(this.groupsIn, fieldName, ascDes, fieldMsg);
        this.groupsIn = colSortOut[0]; // not really needed cuz shallow/deep copy rules
        this.msg1 = colSortOut[3];
    } // end colSort
    colFilt(fn, pt) {
        console.log('running colFilt ', fn, pt);
        let filtWord = prompt('Filter ' + pt);
        this.resetGroupsFilter();
        let colFiltOut = src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__["default"].colFilt(this.groupsIn, fn, pt, filtWord);
        this.groupsIn = colFiltOut[0]; // not really needed cuz shallow/deep copy rules
        this.msg1 = colFiltOut[1];
    } // end colFilt 
    addButclick() {
        console.log('running wwg addButclick');
        this.groupNbrOut.emit(-1); //  -1 means add new rec
        this.wwgdJumpOut.emit(); // jump to wwgd
    } // end addButclick
    detailButclick(groupNbrParmIn, gx) {
        this.wwgdJumpOut.emit();
        this.groupsOut.emit(this.groupsIn);
        this.groupNbrOut.emit(groupNbrParmIn);
    }
    // setPopState(){
    //   console.log('running wwg setPopState')
    //   window.onpopstate = function (ev) {  
    //     console.log('running window.onpopstate')
    //     //this.doneWwg() // ??billy?
    //   }
    // } // end setPopState
    countQuestionsPerGroup() {
        console.log('running wwg countQuestionsPerGroup');
        let qCnt = 0;
        for (let i = 0; i < this.groupsIn.length; i++) {
            qCnt = this.questionsIn
                .filter(q => q.subset.toLowerCase().trim() == this.groupsIn[i].groupName.toLowerCase().trim())
                .length;
            // billy, change q.subset to q.groupName after ya fix questions
            this.groupsIn[i].qCount = qCnt.toString();
            //qCnt.toString().padStart(3,'0')
        } // end  for
    } // end countQuestionsPerGroup
    resetGroupsFilter() {
        //this.msg1 = 'Filter is reset.'  
        for (let i = 0; i < this.groupsIn.length; i++) {
            this.groupsIn[i]['filterInOut'] = 'in';
        }
    } // end resetGroupsFilter
} // end export class
QncwwgComponent.ɵfac = function QncwwgComponent_Factory(t) { return new (t || QncwwgComponent)(); };
QncwwgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QncwwgComponent, selectors: [["app-qncwwg"]], inputs: { groupNbrIn: "groupNbrIn", questionsIn: "questionsIn", groupsIn: "groupsIn", filterResetIn: "filterResetIn" }, outputs: { groupsOut: "groupsOut", groupNbrOut: "groupNbrOut", wwgdJumpOut: "wwgdJumpOut" }, decls: 24, vars: 6, consts: [["class", "tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], [1, "table", "is-fullwidth", "ml-3", "mr-3", "mb-3"], [1, "is-clickable", 3, "click"], ["class", "tags has-addons is-flex-wrap-nowrap", 4, "ngIf"], [1, "button", "is-small", "is-info", 3, "click"], ["class", "has-background-success-light", 4, "ngFor", "ngForOf"], [1, "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, "tags", "has-addons", "is-flex-wrap-nowrap"], [1, "tag", "is-link", "is-light", 3, "click"], [1, "has-background-success-light"], [4, "ngIf"], [1, "tag", "is-small", "is-rounded"]], template: function QncwwgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QncwwgComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1)(2, "thead")(3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_Template_th_click_3_listener() { return ctx.colHeadclick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Question Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QncwwgComponent_span_6_Template, 7, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_Template_th_click_7_listener() { return ctx.colHeadclick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nbr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, QncwwgComponent_span_10_Template, 7, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_Template_th_click_11_listener() { return ctx.colHeadclick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, QncwwgComponent_span_14_Template, 7, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_Template_th_click_15_listener() { return ctx.colHeadclick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Round ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, QncwwgComponent_span_18_Template, 7, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th")(20, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwgComponent_Template_button_click_20_listener() { return ctx.addButclick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " add new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, QncwwgComponent_tr_23_Template, 2, 1, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groupsIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 6244:
/*!**********************************************!*\
  !*** ./src/app/qncwwgd/qncwwgd.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwgdComponent": () => (/* binding */ QncwwgdComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiSupabase */ 2979);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function QncwwgdComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwgdComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " are you sure you want to delete? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwgdComponent_span_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.proceedWithDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " delete now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwgdComponent_span_1_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.cancelDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class QncwwgdComponent {
    constructor() {
        this.wwgJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.msg1 = 'edit group.';
        this.gx = -1;
        this.groupObj = {};
        this.qtDbDataObj = {};
        this.verifyDelete = false;
        this.fieldsDisabled = false;
        this.someFieldWasChanged = false;
        this.supaFlds = {};
        this.supaRes = {};
        this.supaDataObj = {};
        this.faunaDataObj = {};
    }
    ngOnInit() {
        console.log('running wwgd ngOnInit');
        console.log('faunaOrSupabase: ', this.faunaOrSupabaseIn);
        if (this.groupNbrIn == -1) { //he clicked add New on prior screen
            this.addButClick();
        }
        else {
            this.gx = this.groupsIn.findIndex(g => g.groupNbr == this.groupNbrIn);
        } // end if
    } // end ngOnInit
    // findGroupIx(){
    //   this.gx = this.groupsIn
    //   .findIndex(g => g.groupNbr == this.groupNbrIn)
    // }
    prevButClick() {
        console.log('running prevButClick');
        console.table(this.groupsIn);
        this.msg1 = 'first group shown.';
        let loopGx = this.gx;
        while (loopGx > 0) {
            loopGx = loopGx - 1;
            if (this.groupsIn[loopGx].filterInOut == 'in') {
                console.log('63');
                this.gx = loopGx;
                this.msg1 = 'previous group shown.';
                // this is a rec we want to show. gx is set.
                loopGx = 0; // lets exit the while loop
            }
        } // end while
    } // end prevButClick
    nextButClick() {
        this.msg1 = 'last group shown.';
        console.log('groupsIn:');
        console.table(this.groupsIn);
        let loopGx = this.gx;
        while (loopGx < this.groupsIn.length - 1) {
            loopGx = loopGx + 1;
            if (this.groupsIn[loopGx].filterInOut == 'in') {
                this.gx = loopGx;
                this.msg1 = 'next group shown.';
                // this is a rec we want to show. gx is set.
                loopGx = 9999; // lets exit the while loop
            }
        } // end while
    } // end nextButClick
    addButClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running wwgd addButClick');
            this.fieldsDisabled = true;
            this.msg1 = 'adding a group...';
            let newGroupNbr = '01';
            if (this.groupsIn.length > 0) {
                //  set new group nbr to one bigger than max group nbr
                let groupNbrMax = Math.max.apply(Math, this.groupsIn.map(function (g) { return g.groupNbr; }));
                newGroupNbr = (groupNbrMax + 1).toString().padStart(2, '0');
                console.log('new group nbr:', newGroupNbr);
            } //end if
            let newSeq = '1';
            let newGroupName = 'main';
            if (this.groupsIn.findIndex(g => g.groupName == 'groupMain') > -1) {
                // group name: groupMain already exists.
                newGroupName = 'group' + newGroupNbr; //.padStart(3, '0')
                newSeq = '1'; // Dec 2021 set default to all the same seq: 1
            } // end if
            // 1 add a group row to the group array,
            // 2 then add a rec to the db. 
            // 3 after db add, set group[gx].id from supaDataObj
            this.groupObj = {
                cust: this.custIn,
                qid: this.qidIn,
                groupNbr: newGroupNbr,
                groupName: newGroupName,
                seq: newSeq,
                filterInOut: 'in'
            }; // end set groupObj 
            this.groupsIn.push(this.groupObj);
            this.gx = this.groupsIn.length - 1;
            if (this.faunaOrSupabaseIn == 'fauna') {
                this.launchAddFaunaGroup();
            }
            if (this.faunaOrSupabaseIn == 'supabase') {
                this.supaFlds = this.groupObj;
                yield this.launchAddSupabase('qtGroups', this.supaFlds);
                // id is from supabase (after supabase add, supaDataObj is set)
                // we gotta wait for launchAddSupabase to finish,
                // cuz supaDataObj will be blank until then,
                // and we want to get the new supabase id.
                this.groupsIn[this.gx]['id'] = this.supaDataObj['id'];
            } // end if supabase
            this.msg1 = 'added group nbr: ' + this.groupsIn[this.gx].groupNbr;
            this.groupNbrIn = newGroupNbr;
            this.fieldsDisabled = false;
        });
    } // end addButClick
    delButClick() {
        // dec 2022 cant delete if groupMain, or if any questions
        // already add to this scoreboard.
        // though, we let him delete dups -- all but the last rec.
        // if (this.groupsIn[this.gx].groupName=='groupMain'){
        //   this.msg1='cannot delete group:  groupMain.'
        //   return
        // } // end 
        // console.log('123')
        // console.table(this.groupsIn)
        // console.log(this.gx)
        // console.log(this.groupsIn[this.gx].qCount)
        // console.log('127 group name:' )
        // console.log(this.groupsIn[this.gx].groupName)
        let grpCount = this.groupsIn
            .filter(g => g.groupName.toLowerCase() == this.groupsIn[this.gx].groupName.toLowerCase()).length;
        if (grpCount == 1) {
            // this is the only group rec with this groupName
            if (this.groupsIn[this.gx].qCount > 0) {
                this.msg1 = 'cannot delete group: '
                    + this.groupsIn[this.gx].groupName
                    + '. There are questions that belong to this group.';
                // console.table(this.groupsIn)
                return;
            } // end if
            // if (this.groupsIn[this.gx].groupName=='groupMain'){
            //   this.msg1='cannot delete group:  groupMain.'
            //   return
            // } // end 
        }
        this.msg1 = '';
        this.verifyDelete = true;
        this.fieldsDisabled = true;
    } // end delButClick
    proceedWithDelete() {
        console.log('running proceedWithDelete');
        this.msg1 = 'deleting...';
        // notice no await here, cuz we don't use anything from supabase response.
        // 2 delete the group rec from the db
        // 3 remove group from groupIn array.
        // 4 re-position groupIn to show an adjacent group on-screen
        this.verifyDelete = false;
        this.fieldsDisabled = false;
        let groupNbrWork = this.groupsIn[this.gx].groupNbr; // remember group
        //  delete the db group
        this.buildGroupObj();
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchDelFaunaGroup();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.supaFlds = this.groupObj;
            this.launchDelSupabase('qtGroups', this.supaFlds);
        }
        // remove the group from the groupsIn array:
        this.groupsIn.splice(this.gx, 1);
        // after he dels a group, show adjacent group on screen.
        //gx is all set, cuz splice was done.
        if (this.gx > this.groupsIn.length - 1) { // he deleted last rec.
            this.gx = this.groupsIn.length - 1;
        } // end if
        this.msg1 = 'group ' + groupNbrWork + ' deleted.';
        if (this.groupsIn.length == 0) {
            //billy, maybe tell him nicer, that we will jump to the list screen.
            alert('no groups left. Leaving this screen.');
            this.wwgJumpOut.emit();
        } // end if, no groups left
    } // end proceedWithDelete
    cancelDelete() {
        this.verifyDelete = false;
        this.fieldsDisabled = false;
    } // end cancelDelete
    saveGroup() {
        console.log('running wwgd saveGroup');
        this.someFieldWasChanged = true;
        this.buildGroupObj(); // uses current gx  
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchUpdateFaunaGroup();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.supaFlds = this.groupObj;
            this.launchChgSupabase('qtGroups', this.supaFlds);
        }
        this.msg1 = 'group saved.';
    } //end saveGroup   
    buildGroupObj() {
        this.groupObj =
            {
                cust: this.custIn,
                qid: this.qidIn,
                groupNbr: this.groupsIn[this.gx].groupNbr,
                groupName: this.groupsIn[this.gx].groupName,
                seq: this.groupsIn[this.gx].seq
            };
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.groupObj['id'] = this.groupsIn[this.gx].id;
        } // end if supabase
    } // end buildGroupObj
    groupNameChg(newGroupName, gx) {
        console.log('running groupNameChg to ', newGroupName);
        // dec 2022 don't let him change the group to a name that already exists.
        let ix = this.groupsIn.findIndex(g => g.groupName == newGroupName.trim());
        let el = document.getElementById('groupName');
        el.classList.remove("has-background-warning");
        if (ix > -1) {
            el.classList.add('has-background-warning');
            this.msg1 = 'cannot change to a group that already exists.';
            return;
        }
        this.msg1 = 'group changed. ';
        this.groupsIn[gx].groupName = newGroupName.trim();
        this.saveGroup();
    } // end groupNameChg
    groupSeqChg(newSeq, gx) {
        console.log('running groupSeqChg to ', newSeq);
        // we started calling sequence 'a round'.  like a boxing round.
        this.msg1 = 'round changed. ';
        this.groupsIn[gx].seq = newSeq.trim();
        this.saveGroup();
    } // end groupSeqChg
    launchAddFaunaGroup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running wwgd launchAddFaunaGroup');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtAddGroup(this.groupObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj group we just added:');
            console.table(this.faunaDataObj);
        });
    } // end launchAddFaunaGroup
    launchDelFaunaGroup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwgd launchQtDeleteFaunaGroup');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtDeleteGroup(this.groupObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj group we just deleted:');
            console.table(this.faunaDataObj);
        });
    } // end launchDelFaunaGroup
    launchUpdateFaunaGroup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwrd launchUpdateFaunaGroup');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtUpdateGroup(this.groupObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj group we just updated:');
            console.table(this.faunaDataObj);
        });
    } // end launchUpdateFaunaGroup
    launchAddSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchAddSupabase.  flds:');
            // console.table(flds)
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].addSupabase(tbl, flds);
            this.supaDataObj = this.supaRes['supabaseData'][0];
            // supaRes has mult components, one is a supabaseData array.
            // the first entry in the supabaseData array is the object.
            // we want this data cuz it has the new id.
        });
    } // end launchAddSupabase
    launchDelSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchDelSupabase.  flds:');
            // console.table(flds)
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].delSupabase(tbl, flds);
        });
    } // end launchDelSupabase
    launchChgSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchChgSupabase.  flds:');
            // console.table(flds)
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].chgSupabase(tbl, flds);
        });
    } // end launchChgSupabase
    handleBlur(inputFieldNameParmIn) {
        console.log('running handleBlur');
        // lotsa work just to set msg1 when he exits a field (blur)
        if (this.someFieldWasChanged) {
            this.someFieldWasChanged = false;
        }
        else {
            if (this.msg1.length == 0) {
                this.msg1 = 'edit group.';
            }
        }
        this.someFieldWasChanged = false;
    } // end handleBlur
} // end export component
QncwwgdComponent.ɵfac = function QncwwgdComponent_Factory(t) { return new (t || QncwwgdComponent)(); };
QncwwgdComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QncwwgdComponent, selectors: [["app-qncwwgd"]], inputs: { custIn: "custIn", qidIn: "qidIn", groupNbrIn: "groupNbrIn", groupsIn: "groupsIn", faunaOrSupabaseIn: "faunaOrSupabaseIn" }, outputs: { wwgJumpOut: "wwgJumpOut" }, decls: 37, vars: 7, consts: [["class", "mt-1 tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "mt-3", "ml-3", 3, "disabled"], [1, "button", "is-info", 3, "click"], [1, "table", "has-background-success-light", "is-narrow"], ["disabled", "", "size", "4", "autocomplete", "off", 1, "has-background-success-light", 3, "value"], ["id", "groupName"], ["size", "20", "autocomplete", "off", 1, "is-small", 3, "value", "change", "blur"], ["groupName", ""], ["size", "4", "autocomplete", "off", 3, "value", "change", "blur"], ["seq", ""], [1, "mt-1", "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, ""], [1, "ml-3"], [1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"]], template: function QncwwgdComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QncwwgdComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QncwwgdComponent_span_1_Template, 7, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "fieldset", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwgdComponent_Template_button_click_3_listener() { return ctx.prevButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u1438 prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwgdComponent_Template_button_click_6_listener() { return ctx.nextButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " next \u1433 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwgdComponent_Template_button_click_9_listener() { return ctx.addButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwgdComponent_Template_button_click_12_listener() { return ctx.delButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "fieldset", 2)(16, "table", 4)(17, "tr")(18, "td")(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "group Nbr: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td")(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Group: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td", 6)(28, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwgdComponent_Template_input_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29); return ctx.groupNameChg(_r2.value, ctx.gx); })("blur", function QncwwgdComponent_Template_input_blur_28_listener() { return ctx.handleBlur("groupName"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tr")(31, "td")(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Round: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td")(35, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwgdComponent_Template_input_change_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36); return ctx.groupSeqChg(_r3.value, ctx.gx); })("blur", function QncwwgdComponent_Template_input_blur_35_listener() { return ctx.handleBlur("seq"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.verifyDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fieldsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fieldsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.groupsIn[ctx.gx].groupNbr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.groupsIn[ctx.gx].groupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.groupsIn[ctx.gx].seq);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 6755:
/*!********************************************!*\
  !*** ./src/app/qncwwi/qncwwi.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwiComponent": () => (/* binding */ QncwwiComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function QncwwiComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwiComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 6)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td")(6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwiComponent_tr_10_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.copyButClick(i_r2.ilink); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " copy Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td")(9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwiComponent_tr_10_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.detailButClick(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    const ix_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r2.icode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "ilink-", ix_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r2.ilink);
} }
class QncwwiComponent {
    constructor() {
        this.msg1 = '?';
        this.invitesArray = [];
        this.qncJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.launchQtReadInvitations = () => {
            console.log('running LaunchQtReadInvitations');
            src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadInvitations(this.custIn, this.qidIn)
                .then((qtDbRtnObj) => {
                console.log(' running .then of apiFauna.qtReadInvitations');
                this.buildListOfInvites(qtDbRtnObj);
            })
                .catch(() => {
                console.log('apiFauna.qtReadInvitations error. cust & qid', this.custIn, ' ', this.qidIn);
            });
        };
    }
    ngOnInit() {
        //this.initInvites()
        this.msg1 = 'loading invitations...';
        alert('wwi 22 running invitations');
        this.launchQtReadInvitations();
    }
    initInvites() {
        this.invitesArray =
            [
                {
                    cust: this.custIn,
                    qid: this.qidIn,
                    icode: "90210",
                    ilink: "https://qncsurvey.netlify.app/?qid=2&cust=1"
                }
            ];
    }
    detailButClick(ix) {
        this.msg1 = 'wwi detail button clicked...';
    }
    jumpToQnc() { this.qncJumpOut.emit(); }
    showHideHelp() { }
    copyButClick(ct) {
        this.copyText(ct);
    }
    copyText(ct) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield navigator.clipboard.writeText(ct);
            }
            catch (err) {
                console.error('copyText Failed to copy: ', err);
            }
        });
    }
    buildListOfInvites(qtDbObj) {
        console.log('running buildListOfInvites');
        // we have returned from the awaited promise of invitations fetch.
        // dbRtnObj contains all the invitations objects for this user+date.
        // console.log('here is qtDbObj:')
        // console.table(qtDbObj)
        this.invitesArray = [];
        for (let i = 0; i < qtDbObj.length; i++) {
            this.invitesArray.push(qtDbObj[i].data);
        }
        console.log('invitesArray:');
        console.table(this.invitesArray);
        this.invitesArray
            .sort((a, b) => (a.qid > b.qid) ? 1 : -1);
        this.msg1 = 'invitations shown.';
    }
} // end export
QncwwiComponent.ɵfac = function QncwwiComponent_Factory(t) { return new (t || QncwwiComponent)(); };
QncwwiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QncwwiComponent, selectors: [["app-qncwwi"]], inputs: { InvitesIn: "InvitesIn", custIn: "custIn", qidIn: "qidIn" }, outputs: { qncJumpOut: "qncJumpOut" }, decls: 22, vars: 2, consts: [["class", "tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], [1, "table", "is-fullwidth"], ["class", "has-background-success-light", 4, "ngFor", "ngForOf"], [1, "box", "mt-3", "ml-3", "has-background-danger-light"], ["cols", "120", "rows", "20", 1, "ml-3", "pl-3", "has-background-danger-light"], [1, "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, "has-background-success-light"], [3, "id"], [1, "button", "is-small", "is-info", 3, "click"]], template: function QncwwiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QncwwiComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1)(2, "thead")(3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "invite code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "invitation link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "th")(8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, QncwwiComponent_tr_10_Template, 11, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3)(12, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "  ed emails a link, link has imbedded icode, \n  icode must have matching data\n  maybe a fauna table that has 'invitation' info.\n  this is an edit screen for invitation info?\n  what does an invitation rec look like?\n  icode field. 90210. a key so that a user can take the survey.\n  ilink field. a URL.  https:\\\\bla.com?cust=1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "qid=1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "icode=90210\n  so, who is this customer? 1 2 3\n  and what survey is he working on?  1 2 3\n  icode is just a key. dont tie other things to it.\n  when a participant uses the ilink, prompt the participant to identify himself.\n  this will append the participant to the user list.\n  ------\n  -- invitations\nwhat is the mission?  why have a database table for this?\nwe want to provide the admin with a single link to send to participants.\nwhat about a button on the profile screen for this? similar to existing Copy Link button?\nclick here to copy an invite code into computer memory. He can paste it into an email.\nwhat about invite code?  maybe we need someplace to store an invite code.\nmaybe the invitations table houses a couple hundred guids,\nand when creating a new survey, we tie one of those guids to it, as an invite code.\nlike a set of wedding invitations, they are ready to be sent out to individual participants.\nat the time of sending, each wedding invitation is the same.\nwhen a person receives the invitation, he can go to the wedding.\nbut a person might clone his invitation, and give it to strangers!\nSo, maybe we need two models for guids in the invitation.\nmodel A: a guid is unique to a survey.  Many people can take the survey with the same guid.\nmodel A is similar to Ed's invite code.  like a wedding invitation.\nmodel B: a guid is unique to a (survey + survey taker).  \nmodel B is more like a gift certificate, targeting only one person. used up on its first use.\nhttps://www.uuidgenerator.net/guid\n0718439f-3438-4a2c-a784-0333d497127c\n\n\thttps://stupefied-elion-621b07.netlify.app/?qid=4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "cust=1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "icode=90210\n\tor instead:\n\t\thttps://stupefied-elion-621b07.netlify.app/?icode=0718439f-3438-4a2c-a784-0333d497127c\n\t\tthe survey should look up the guid in the invitations table,\n\t\tand deduce the cust and qid.\n\nmaybe investigate known survey tools for a model for invitations or gift certificates.\nmaybe model B (gift certificate) can be table-designed now, but a future feature.\n\nJune17 idea on guid :  invitation Expiration Date\nusually one invitation per survey.  have the invitation EXPIRE.\nthe survey admin can control the expiration date.\n\nsurvey model A)  a subscriber-controlled survey\n    participants need an invite code\n\nsurvey model B)  a free-form  survey \n    participants dont need an invite code\n    they might even start a survey without sign on?\n    \n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.invitesArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 7290:
/*!********************************************!*\
  !*** ./src/app/qncwwq/qncwwq.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwqComponent": () => (/* binding */ QncwwqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/colSortFilt */ 4362);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function QncwwqComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwqComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_5_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.colSort("groupRound", "des", "Round"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_5_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.colSort("groupRound", "asc", "Round"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_5_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.colFilt("groupRound", "Round"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symFilt, " ");
} }
function QncwwqComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_8_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.colSort("questSeq", "des", "Sequence"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_8_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.colSort("questSeq", "asc", "Sequence"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_8_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.colFilt("questSeq", "Sequence"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symFilt, " ");
} }
function QncwwqComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_11_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.colSort("subset", "des", "Group"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_11_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.colSort("subset", "asc", "Group"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_11_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.colFilt("subset", "Group"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symFilt, " ");
} }
function QncwwqComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_14_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.colSort("preQuest", "des", "pre-Question"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_14_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.colSort("preQuest", "asc", "pre-Question"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_14_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.colFilt("preQuest", "Pre-Quest"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symFilt, " ");
} }
function QncwwqComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_18_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.colSort("questNbr", "des", "question nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_18_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.colSort("questNbr", "asc", "question nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_18_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.colFilt("questNbr", "question nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.symFilt, " ");
} }
function QncwwqComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_21_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.colSort("questTxt", "des", "Question Text"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_21_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.colSort("questTxt", "asc", "Question Text"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_21_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.colFilt("questTxt", "Question Text"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.symFilt, " ");
} }
function QncwwqComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_24_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.colSort("accum", "des", "Scoreboard"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_24_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.colSort("accum", "asc", "Scoreboard"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_span_24_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.colFilt("accum", "Scoreboard"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.symFilt, " ");
} }
function QncwwqComponent_tr_31_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 13)(20, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_tr_31_ng_container_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const q_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.detailButClick(q_r37.questNbr); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const q_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", q_r37.groupRound, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", q_r37.questSeq, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", q_r37.subset, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", q_r37.preQuest, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", q_r37.questNbr, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", q_r37.questTxt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", q_r37.accum[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", q_r37.accum[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", q_r37.accum[2], " ");
} }
function QncwwqComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QncwwqComponent_tr_31_ng_container_1_Template, 22, 9, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", q_r37.filterInOut == "in");
} }
class QncwwqComponent {
    constructor() {
        this.wwqdJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.questionNbrOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.questionsOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.symArUp = '\u{2191}';
        this.symArDn = '\u{2193}';
        this.symFilt = '\u{2207}';
        this.colHeadSf = false;
        this.msg1 = '';
        this.colSortByArray = [];
    }
    ngOnInit() {
        console.log('running wwq ngOnInit============');
        this.msg1 = 'question list ';
        if (this.questionsIn.length == 0) {
            this.msg1 = 'No questions exist. Click the add button.';
        }
        if (this.filterResetIn) {
            this.resetQuestionFilter();
        }
        this.setQuestionsGroupInfo();
        this.sortQuestionsIn();
    } //end ngOnInit
    setQuestionsGroupInfo() {
        console.log('running setQuestionsGroupInfo');
        let gx = -1;
        for (let i = 0; i < this.questionsIn.length; i++) {
            this.questionsIn[i].groupRound = '1'; //default
            console.log(this.questionsIn[i].subset);
            gx = this.groupsIn //which round is this question's group in?
                .findIndex(g => g.groupName
                == this.questionsIn[i].subset);
            if (gx > -1) {
                this.questionsIn[i].groupRound = this.groupsIn[gx].seq;
            }
        } //end for      
    } // end setQuestionsGroupInfo
    sortQuestionsIn() {
        console.log('running 49 wwq sortQuestionsIn');
        this.questionsIn.sort(function sorter(a, b) {
            if (Number(a.groupRound) > Number(b.groupRound)) {
                return 1;
            }
            if (Number(a.groupRound) < Number(b.groupRound)) {
                return -1;
            }
            if (a.groupRound > b.groupRound) {
                return 1;
            }
            if (a.groupRound < b.groupRound) {
                return -1;
            }
            if (Number(a.questSeq) > Number(b.questSeq)) {
                return 1;
            }
            if (Number(a.questSeq) < Number(b.questSeq)) {
                return -1;
            }
            if (a.questSeq > b.questSeq) {
                return 1;
            }
            if (a.questSeq < b.questSeq) {
                return -1;
            }
            return 0; //a & b are equal.
        }); //end sort
    } // end sortQuestionsIn
    colHeadClick(c) {
        // hide/show sort & filter icons in the table header (lower part)
        if (this.colHeadSf == true) {
            this.colHeadSf = false;
            if (this.msg1 == 'click an icon to sort or filter.') {
                this.msg1 = '';
            }
        }
        else {
            this.colHeadSf = true;
            this.msg1 = 'click an icon to sort or filter.';
        }
    } // end colHeadClick
    colSort(fieldName, ascDes, fieldMsg) {
        let colSortOut = src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__["default"].colSort(this.questionsIn, fieldName, ascDes, fieldMsg);
        this.questionsIn = colSortOut[0]; // not really needed cuz shallow/deep copy rules
        this.msg1 = colSortOut[3];
    } // end colSort
    colFilt(fn, pt) {
        this.msg1 = '';
        console.log('running colFilt ', fn, pt);
        let filtWord = prompt('Filter ' + pt);
        this.resetQuestionFilter();
        let colFiltOut = src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__["default"].colFilt(this.questionsIn, fn, pt, filtWord);
        console.log(colFiltOut[0]);
        this.questionsIn = colFiltOut[0]; // probably cuz of shallow/deep copy.
        this.msg1 = colFiltOut[1];
    } // end colFilt 
    addButClick() {
        console.log('running wwq addButClick');
        this.questionNbrOut.emit(-1); //tell detail to add row
        this.wwqdJumpOut.emit();
    }
    detailButClick(qNbr) {
        console.log('running wwq detailButClick:', qNbr);
        //  jump out of wwq and tell caller quests we are working on
        this.questionNbrOut.emit(qNbr);
        this.questionsOut.emit(this.questionsIn);
        this.wwqdJumpOut.emit();
    }
    resetQuestionFilter() {
        for (let i = 0; i < this.questionsIn.length; i++) {
            this.questionsIn[i]['filterInOut'] = 'in';
            // this.questionsIn[i].filterInOut = 'in'  
        } // end for
    } //end resetQuestionFilter
} // end export class
QncwwqComponent.ɵfac = function QncwwqComponent_Factory(t) { return new (t || QncwwqComponent)(); };
QncwwqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QncwwqComponent, selectors: [["app-qncwwq"]], inputs: { custIn: "custIn", qidIn: "qidIn", questionsIn: "questionsIn", filterResetIn: "filterResetIn", rulesIn: "rulesIn", groupsIn: "groupsIn" }, outputs: { wwqdJumpOut: "wwqdJumpOut", questionNbrOut: "questionNbrOut", questionsOut: "questionsOut" }, decls: 32, vars: 9, consts: [["class", "tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], [1, "table", "is-fullwidth", "ml-3", "mr-3", "mb-3"], [1, "none"], [1, "is-clickable", 3, "click"], ["class", "tags has-addons is-flex-wrap-nowrap", 4, "ngIf"], [1, "button", "is-small", "is-info", 3, "click"], ["class", "has-background-success-light", 4, "ngFor", "ngForOf"], [1, "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, "tags", "has-addons", "is-flex-wrap-nowrap"], [1, "tag", "is-link", "is-light", 3, "click"], [1, "has-background-success-light"], [4, "ngIf"], [1, "pl-3", "pr-3"], [1, "mr-2"]], template: function QncwwqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QncwwqComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1)(2, "thead", 2)(3, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_Template_th_click_3_listener() { return ctx.colHeadClick("grp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Round ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, QncwwqComponent_span_5_Template, 7, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_Template_th_click_6_listener() { return ctx.colHeadClick("seq"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Seq ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, QncwwqComponent_span_8_Template, 7, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_Template_th_click_9_listener() { return ctx.colHeadClick("grp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, QncwwqComponent_span_11_Template, 7, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_Template_th_click_12_listener() { return ctx.colHeadClick("pre"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Pre-Question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, QncwwqComponent_span_14_Template, 7, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_Template_th_click_15_listener() { return ctx.colHeadClick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Nbr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, QncwwqComponent_span_18_Template, 7, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_Template_th_click_19_listener() { return ctx.colHeadClick("qTxt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, QncwwqComponent_span_21_Template, 7, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_Template_th_click_22_listener() { return ctx.colHeadClick("accum"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Scoreboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, QncwwqComponent_span_24_Template, 7, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "th")(26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th")(28, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwqComponent_Template_button_click_28_listener() { return ctx.addButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " add new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, QncwwqComponent_tr_31_Template, 2, 1, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questionsIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 6081:
/*!**********************************************!*\
  !*** ./src/app/qncwwqd/qncwwqd.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwqdComponent": () => (/* binding */ QncwwqdComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiSupabase */ 2979);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function QncwwqdComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwqdComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " are you sure you want to delete? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_span_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.proceedWithDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " delete now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_span_1_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.cancelDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function QncwwqdComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Rely on Scoreboard: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r6.fullRuleWords);
} }
function QncwwqdComponent_tr_94_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwqdComponent_tr_94_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ax_r16 = restoredCtx.index; const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.questAcaChg(_r17.value, ctx_r19.qx, ax_r16); })("blur", function QncwwqdComponent_tr_94_Template_input_blur_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.handleBlur("aca"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwqdComponent_tr_94_Template_input_change_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ax_r16 = restoredCtx.index; const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.questAcaPointValChg(_r18.value, ctx_r22.qx, ax_r16); })("blur", function QncwwqdComponent_tr_94_Template_input_blur_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.handleBlur("pointVal"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_tr_94_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ax_r16 = restoredCtx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.delAnswerChoice(ax_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " delete choice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ax_r16 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r11.questionsIn[ctx_r11.qx].aca[ax_r16]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r11.questionsIn[ctx_r11.qx].acaPointVals[ax_r16]);
} }
class QncwwqdComponent {
    constructor() {
        this.wwqJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.msg1 = 'edit question.';
        this.qx = -1;
        this.rulesArrayThisSubset = [];
        this.fullRuleWords = '(none)';
        // todaysDate = new Date().toJSON().split("T")[0]
        this.questObj = {};
        this.qtDbDataObj = {};
        this.rangeTxtCols = 72;
        this.rangeTxtRows = 4;
        this.verifyDelete = false;
        this.fieldsDisabled = false;
        this.someFieldWasChanged = false;
        this.supaFlds = {};
        this.supaRes = {};
        this.supaDataObj = {};
        this.faunaDataObj = {};
    }
    ngOnInit() {
        if (this.questionNbrIn == -1) { //he clicked add New on prior screen
            this.addButClick();
        }
        else {
            this.qx = this.questionsIn.findIndex(q => q.questNbr == this.questionNbrIn);
        } // end else if
        this.chkSubsetAccumMatch(this.questionsIn[this.qx].subset);
    } // end ngOnInit
    prevButClick() {
        // console.log('running prevButClick')
        this.msg1 = 'first question shown.';
        let loopQx = this.qx;
        while (loopQx > 0) {
            loopQx = loopQx - 1;
            if (this.questionsIn[loopQx].filterInOut == 'in') {
                this.qx = loopQx;
                this.msg1 = 'previous question shown.';
                // this is a rec we want to show. qx is set.
                this.chkSubsetAccumMatch(this.questionsIn[this.qx].subset);
                loopQx = 0; // lets exit the while loop
            }
        } // end while
    } // end prevButClick
    nextButClick() {
        this.msg1 = 'last question shown.';
        let loopQx = this.qx;
        while (loopQx < this.questionsIn.length - 1) {
            loopQx = loopQx + 1;
            if (this.questionsIn[loopQx].filterInOut == 'in') {
                this.qx = loopQx;
                this.msg1 = 'next question shown.';
                // this is a rec we want to show. qx is set.
                this.chkSubsetAccumMatch(this.questionsIn[this.qx].subset);
                loopQx = 9999; // lets exit the while loop
            }
        } // end while
    } // end nextButClick
    addButClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running wwqd addButClick');
            this.fieldsDisabled = true;
            this.msg1 = 'adding a question...';
            let newQuestNbr = '01';
            if (this.questionsIn.length > 0) {
                //  set new quest nbr to one bigger than max quest nbr
                let questNbrMax = Math.max.apply(Math, this.questionsIn.map(function (q) { return q.questNbr; }));
                newQuestNbr = (questNbrMax + 1).toString().padStart(2, '0');
            } // end if questionsIn.length > 0
            let newSeq = '' + newQuestNbr;
            // 1 add a question row to the questionsIn array,
            // 2 then add a rec to the db. 
            // 3 after db add, set questionsIn[gx].id from supaDataObj
            this.questObj =
                {
                    cust: this.custIn,
                    qid: this.qidIn,
                    questNbr: newQuestNbr,
                    questSeq: newSeq,
                    questTxt: "new question text",
                    preQuest: "new pre-question text",
                    aca: ["answer choice text"],
                    acaPointVals: [0],
                    acaFrame: [],
                    accum: ["scoreboard01"],
                    subset: 'main',
                    filterInOut: 'in'
                };
            this.questionsIn.push(this.questObj);
            console.log('wwqd 109 questionIn:');
            console.table(this.questionsIn);
            this.qx = this.questionsIn.length - 1;
            this.chkSubsetAccumMatch(this.questionsIn[this.qx].subset);
            if (this.faunaOrSupabaseIn == 'fauna') {
                this.launchAddFaunaQuestion();
            }
            if (this.faunaOrSupabaseIn == 'supabase') {
                this.supaFlds = this.questObj;
                yield this.launchAddSupabase('qtQuestions', this.supaFlds);
                // id is from supabase (after supabase add, supaDataObj is set)
                // we gotta wait for launchAddSupabase to finish,
                // cuz supaDataObj will be blank until then,
                // and we want to get the new supabase id.
                this.questionsIn[this.qx]['id'] = this.supaDataObj['id'];
            } // end if supabase
            this.msg1 = 'added question nbr: ' + this.questionsIn[this.qx].questNbr;
            this.questionNbrIn = newQuestNbr;
            this.fieldsDisabled = false;
            // // questionsIn has one more question than the db.
            // this.msg1 = 'adding question nbr: ' + this.questionsIn[this.qx].questNbr
            // this.saveQuestion() //auto save
            // this.msg1 ='New starter question created. Ready for your changes.'
            // this.questionsIn[this.qx].filterInOut = 'in'
            // billy also add subset to subSetsIn if needed
            //alert('added new question to questionsIn with subset: group1')
        });
    } // end addButClick
    delButClick() {
        this.msg1 = '';
        this.verifyDelete = true;
        this.fieldsDisabled = true;
    } // end delButClick
    proceedWithDelete() {
        console.log('running proceedWithDelete');
        this.msg1 = 'deleting...';
        // notice no await here, cuz we don't use anything from supabase response.
        // 2 delete the  rec from the db
        // 3 remove question from questionIn array.
        // 4 re-position questionIn to show an adjacent question on-screen
        this.verifyDelete = false;
        this.fieldsDisabled = false;
        let questNbrWork = this.questionsIn[this.qx].questNbr;
        this.qx = this.questionsIn
            .findIndex(q => q.questNbr == questNbrWork);
        //  delete the db question
        this.buildQuestObj();
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchDeleteFaunaQuestion();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.supaFlds = this.questObj;
            this.launchDelSupabase('qtQuestions', this.supaFlds);
        }
        // remove the question from the questionsIn array:
        this.questionsIn.splice(this.qx, 1);
        // after he deletes a question, show adjacent group on screen.
        // gx is all set, cuz splice was done.
        if (this.qx > this.questionsIn.length - 1) { // he deleted last rec.
            this.qx = this.questionsIn.length - 1;
        } // end if
        this.msg1 = 'question ' + questNbrWork + ' deleted.';
        if (this.questionsIn.length == 0) {
            //billy, maybe tell him nicer, that we will jump to the list screen.
            alert('no questions left. Leaving this screen.');
            this.wwqJumpOut.emit();
        } // end if, no questions left
        // delete old subset from subsetsIn if this is last quest of subset:
        // is it weird though, what if we just left the old subset hanging?
        // i mean, he has a hanging subset when he 'adds a new group'
        // on the other screen.
        //this.chkDelSubsetForSubsets(this.questionsIn[this.qx].subset) 
        //  delete the db question
        //  this.buildQuestionObj()
        //  this.launchQtDeleteQuestion()
        //  // delete the array question:
        //  this.questionsIn.splice(this.qx,1) 
        //  // after he deletes a quest, show adjacent question on screen.
        //  this.qx = this.qx + 1 
        //  if(this.qx > this.questionsIn.length -1 ) {
        //     this.qx = this.questionsIn.length -1  
        //   }
        //   this.msg1 = 'question ' + questNbrWork + ' deleted.'
        //   if (this.questionsIn.length==0){
        //     //billy, maybe tell him nicer, that we will jump to the list screen.
        //     alert('no questions left. Leaving this screen.')
        //     this.jumpToWwq()
        //   }
    } // end proceedWithDelete
    cancelDelete() {
        this.verifyDelete = false;
        this.fieldsDisabled = false;
    } // end cancelDelete
    saveQuestion() {
        console.log('running wwqd saveQuestion');
        this.someFieldWasChanged = true;
        this.msg1 = 'saving...';
        this.buildQuestObj(); // uses current qx
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchUpdateFaunaQuestion();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.supaFlds = this.questObj;
            this.launchChgSupabase('qtQuestions', this.supaFlds);
        }
        this.msg1 = 'question changed.';
    } // end saveQuestion
    buildQuestObj() {
        console.log(this.questionsIn[this.qx].aca);
        this.questObj =
            {
                cust: this.custIn,
                qid: this.qidIn,
                questNbr: this.questionsIn[this.qx].questNbr,
                questSeq: this.questionsIn[this.qx].questSeq,
                questTxt: this.questionsIn[this.qx].questTxt,
                preQuest: this.questionsIn[this.qx].preQuest,
                subset: this.questionsIn[this.qx].subset,
                aca: this.questionsIn[this.qx].aca,
                acaPointVals: this.questionsIn[this.qx].acaPointVals,
                accum: this.questionsIn[this.qx].accum,
                acaFrame: this.questionsIn[this.qx].acaFrame
                // aca:          '[' + this.questionsIn[this.qx].aca + ']',
                // acaPointVals: '[' + this.questionsIn[this.qx].acaPointVals+ ']',
                // accum:   '[' + this.questionsIn[this.qx].accum+ ']',
                // acaFrame:  '[' + this.questionsIn[this.qx].acaFrame + ']'
            };
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.questObj['id'] = this.questionsIn[this.qx]['id'];
            this.questObj['aca'] = '[' + this.questObj['aca'] + ']';
            this.questObj['acaPointVals'] = '[' + this.questObj['acaPointVals'] + ']';
            this.questObj['accum'] = '[' + this.questObj['accum'] + ']';
            this.questObj['acaFrame'] = '[' + this.questObj['acaFrame'] + ']';
        } // end if
    } // end buildQuestObj
    ranSeqButClick(qx) {
        this.msg1 = 'question sequence randomized. ';
        this.questionsIn[qx].questSeq =
            (Math.floor(Math.random() * Math.floor(9999))).toString();
        this.saveQuestion();
    }
    questTxtChg(newQuestTxt, qx) {
        console.log('running questTxtChg to ', newQuestTxt);
        this.msg1 = 'question text changed. ';
        this.questionsIn[qx].questTxt = newQuestTxt;
        this.saveQuestion();
        // console.table(this.questionsIn)
        // think about subset stuff too.
    } // end questTxtChg
    questSeqChg(newQuestSeq, qx) {
        this.msg1 = 'question sequence changed. ';
        this.questionsIn[qx].questSeq = newQuestSeq.trim();
        this.saveQuestion();
    } // end questSeqChg
    subsetChg(newSubset, qx) {
        this.msg1 = 'group changed. ';
        // he changed the subset on the screen.  now its complicated.  
        // a. we assume he is changing the subset this question belongs to.
        // b. we assume he is NOT renaming the old subset to a new name.
        // if a rule already exist for the old name, we dont care.
        // if a rule already exist for the new name, let's show it.
        // if a rule does not exist for the new name, show blank
        // change rulesIn.subset to newly changed subset (not wanted)
        //this.setSubsetForRules(this.questionsIn[qx].subset,ev.target.value)
        // add new subset to subsetsIn if its not there already:
        //this.setSubsetForSubsets(newSubset)
        // delete old subset from subsetsIn if no questions any more:
        //this.chkDelSubsetForSubsets(this.questionsIn[qx].subset)
        this.questionsIn[qx].subset = newSubset.trim();
        this.saveQuestion();
        this.chkSubsetAccumMatch(this.questionsIn[qx].subset);
    } // end subsetChg
    preQuestChg(newPreQuest, qx) {
        this.msg1 = 'pre-question changed. ';
        this.questionsIn[qx].preQuest = newPreQuest.trim();
        this.saveQuestion();
    } // end preQuestChg
    questAcaChg(newAca, qx, ax) {
        this.msg1 = 'answer choice changed. ';
        this.questionsIn[qx].aca[ax] = newAca;
        this.saveQuestion();
    } // end questAcaChg
    questAccumChg(newScoreboard, qx, accumNbr) {
        console.log('running questAccumChg');
        this.msg1 = 'scoreboard changed. ';
        newScoreboard = newScoreboard.trim();
        if (newScoreboard.length == 0) {
            this.questionsIn[qx].accum.splice(accumNbr, 1); //delete accum
        }
        else {
            this.questionsIn[qx].accum[accumNbr] = newScoreboard;
        }
        this.saveQuestion();
    } // end questAccumChg
    questAcaPointValChg(newAcaPoints, qx, ax) {
        this.msg1 = 'point value changed. ';
        if (Number(newAcaPoints) > -1
            && Number(newAcaPoints) <= 99999) {
            // he entered a nice number
            this.questionsIn[qx].acaPointVals[ax] = newAcaPoints;
            // html input formats PointVal field as a string,
            // so parseInt the pointval into a number.
            if (typeof (newAcaPoints) == 'string') {
                this.questionsIn[qx].acaPointVals[ax] = parseInt(newAcaPoints);
            }
        }
        else {
            // billy, duznt work?
            this.msg1 = 'you entered a wrong value into Points.';
        }
        this.saveQuestion();
    } // end questAcaPointValChg
    acaFrameChg(newAcaFrame, qx) {
        this.msg1 = 'answer choice frame changed. ';
        this.questionsIn[qx].acaFrame = newAcaFrame.split(",");
        this.saveQuestion();
    }
    findQuestIx() {
        this.qx = this.questionsIn
            .findIndex(q => q.questNbr == this.questionNbrIn);
    } // end findQuestIx
    chkSubsetAccumMatch(subsetParmIn) {
        console.log('running chkSubsetAccumMatch');
        console.log('rulesIn: ');
        console.table(this.rulesIn);
        //set fullRuleWords like 'accum1 > 13'
        // console.log('running chkSubsetAccumMatch',  subsetParmIn)
        let subsetTempVarr = subsetParmIn, //clever way to pass into .filter
        rulesTempArray = this.rulesIn
            .filter(function (r) { return r.subset == subsetTempVarr; });
        this.rulesArrayThisSubset = rulesTempArray;
        // console.table(this.rulesArrayThisSubset)
        if (this.rulesArrayThisSubset.length > 0) {
            this.fullRuleWords = this.rulesArrayThisSubset[0].accum + ' '
                + this.rulesArrayThisSubset[0].oper + ' '
                + this.rulesArrayThisSubset[0].thresh;
            // console.log('247 hit set fullRuleWords to a real rule ', this.fullRuleWords)
        }
        else {
            this.fullRuleWords = '(none)';
            // console.log('251 hit set fullRuleWords to blank ')
        }
    } // end chkSubsetAccumMatch
    addAnswerChoice() {
        console.log('running addAnswerChoice');
        // append into question.aca array and append into question.acaPoints
        this.msg1 = 'edit this new answer choice.';
        this.questionsIn[this.qx].aca.push('newChoice');
        this.questionsIn[this.qx].acaPointVals.push(0);
        this.saveQuestion(); // 
        let elId = document.getElementById('htmlIdBottomOfPage');
        elId.scrollIntoView();
    }
    setAnswerChoice13() {
        console.log('running setAnswerChoice13');
        // append into question.aca array and append into question.acaPoints
        this.msg1 = 'answer choices set to 1-3. ';
        this.questionsIn[this.qx].aca = [];
        this.questionsIn[this.qx].aca[0] = '1';
        this.questionsIn[this.qx].aca[1] = '2';
        this.questionsIn[this.qx].aca[2] = '3';
        this.questionsIn[this.qx].acaPointVals = [];
        this.questionsIn[this.qx].acaPointVals[0] = 1;
        this.questionsIn[this.qx].acaPointVals[1] = 2;
        this.questionsIn[this.qx].acaPointVals[2] = 3;
        this.saveQuestion(); // 
        let elId = document.getElementById('htmlIdBottomOfPage');
        elId.scrollIntoView();
    }
    setAnswerChoice15() {
        console.log('running setAnswerChoice15');
        // append into question.aca array and append into question.acaPoints
        this.msg1 = 'answer choices set to 1-5. ';
        this.questionsIn[this.qx].aca = [];
        this.questionsIn[this.qx].aca[0] = '1';
        this.questionsIn[this.qx].aca[1] = '2';
        this.questionsIn[this.qx].aca[2] = '3';
        this.questionsIn[this.qx].aca[3] = '4';
        this.questionsIn[this.qx].aca[4] = '5';
        this.questionsIn[this.qx].acaPointVals = [];
        this.questionsIn[this.qx].acaPointVals[0] = 1;
        this.questionsIn[this.qx].acaPointVals[1] = 2;
        this.questionsIn[this.qx].acaPointVals[2] = 3;
        this.questionsIn[this.qx].acaPointVals[3] = 4;
        this.questionsIn[this.qx].acaPointVals[4] = 5;
        this.saveQuestion(); // 
        let elId = document.getElementById('htmlIdBottomOfPage');
        elId.scrollIntoView();
    }
    setAnswerChoice18() {
        console.log('running setAnswerChoice18');
        // append into question.aca array and append into question.acaPoints
        this.msg1 = 'answer choices set to 1-8. ';
        this.questionsIn[this.qx].aca = [];
        this.questionsIn[this.qx].aca[0] = '1';
        this.questionsIn[this.qx].aca[1] = '2';
        this.questionsIn[this.qx].aca[2] = '3';
        this.questionsIn[this.qx].aca[3] = '4';
        this.questionsIn[this.qx].aca[4] = '5';
        this.questionsIn[this.qx].aca[5] = '6';
        this.questionsIn[this.qx].aca[6] = '7';
        this.questionsIn[this.qx].aca[7] = '8';
        this.questionsIn[this.qx].acaPointVals = [];
        this.questionsIn[this.qx].acaPointVals[0] = 1;
        this.questionsIn[this.qx].acaPointVals[1] = 2;
        this.questionsIn[this.qx].acaPointVals[2] = 3;
        this.questionsIn[this.qx].acaPointVals[3] = 4;
        this.questionsIn[this.qx].acaPointVals[4] = 5;
        this.questionsIn[this.qx].acaPointVals[5] = 6;
        this.questionsIn[this.qx].acaPointVals[6] = 7;
        this.questionsIn[this.qx].acaPointVals[7] = 8;
        this.saveQuestion(); // 
        let elId = document.getElementById('htmlIdBottomOfPage');
        elId.scrollIntoView();
    }
    delAnswerChoice(ax) {
        console.log('running delChoice. qx: ', this.qx, 'ax: ', ax);
        // delete-splice from the aca from this question
        this.questionsIn[this.qx].aca.splice(ax, 1);
        this.questionsIn[this.qx].acaPointVals.splice(ax, 1);
        this.saveQuestion(); // 
    }
    launchAddFaunaQuestion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwqd launchQtAddFaunaQuestion');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtWriteQuestion(this.questObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj question we just added:');
            console.table(this.faunaDataObj);
        });
    } //end launchQtAddFaunaQuestion
    launchDeleteFaunaQuestion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwqd launchQtDeleteFaunaQuestion');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtDeleteQuestion(this.questObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj question we just deleted:');
            console.table(this.faunaDataObj);
        });
    } //end launchQtDeleteFaunaQuestion
    launchUpdateFaunaQuestion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwqd launchUpdateFaunaQuestion');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtUpdateQuestion(this.questObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj question we just updated:');
            console.table(this.faunaDataObj);
        });
    } //end launchUpdateFaunaQuestion
    launchAddSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchAddSupabase.  flds:');
            // console.table(flds)
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].addSupabase(tbl, flds);
            this.supaDataObj = this.supaRes['supabaseData'][0];
            // supaRes has mult components, one is a supabaseData array.
            // the first entry in the supabaseData array is the object.
            // we want this data cuz it has the new id.
        });
    } // end launchAddSupabase
    launchDelSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchDelSupabase.  flds:');
            // console.table(flds)
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].delSupabase(tbl, flds);
        });
    } // end launchDelSupabase
    launchChgSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchChgSupabase.  flds:');
            console.log(tbl);
            console.table(flds);
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].chgSupabase(tbl, flds);
        });
    } // end launchChgSupabase
    handleBlur(inputFieldNameParmIn) {
        console.log('running handleBlur');
        // lotsa work just to set msg1 when he exits a field (blur)
        if (this.someFieldWasChanged) {
            this.someFieldWasChanged = false;
        }
        else {
            this.msg1 = 'edit question';
        }
        this.someFieldWasChanged = false;
    } // end handleBlur
} // end class QncwwqdComponent
QncwwqdComponent.ɵfac = function QncwwqdComponent_Factory(t) { return new (t || QncwwqdComponent)(); };
QncwwqdComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QncwwqdComponent, selectors: [["app-qncwwqd"]], inputs: { custIn: "custIn", qidIn: "qidIn", questionNbrIn: "questionNbrIn", questionsIn: "questionsIn", rulesIn: "rulesIn", subsetsIn: "subsetsIn", faunaOrSupabaseIn: "faunaOrSupabaseIn" }, outputs: { wwqJumpOut: "wwqJumpOut" }, decls: 98, vars: 17, consts: [["class", "mt-1 tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "mt-3", "ml-3", 3, "disabled"], [1, "button", "is-info", 3, "click"], [1, "table", "has-background-success-light", "is-narrow"], ["disabled", "", "size", "4", "autocomplete", "off", 1, "has-background-success-light", 3, "value"], ["size", "7", "autocomplete", "off", 1, "is-small", 3, "value", "change", "blur"], ["questSeq", ""], [1, "tag", "is-clickable", "is-small", "is-info", "is-clickable", "ml-3", 3, "click"], ["size", "110", "autocomplete", "off", 1, "is-small", 3, "value", "change", "blur"], ["preQuest", ""], ["overflow", "auto", "autocomplete", "off", 1, "textarea", "has-text-weight-semibold", 3, "rows", "cols", "value", "change", "blur"], ["questTxt", ""], ["type", "text", "size", "20", "autocomplete", "off", 1, "is-small", 3, "value", "change", "blur"], ["subset", ""], [4, "ngIf"], ["size", "20", "autocomplete", "off", 1, "is-small", 3, "value", "change", "blur"], ["questAccum0", ""], ["questAccum1", ""], ["questAccum2", ""], [1, "mt-3", "table", "has-background-info-light", "is-narrow"], ["size", "45", "autocomplete", "off", 1, "is-small", 3, "value", "change", "blur"], ["acaFrame", ""], [1, "button", "is-info", "is-small", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "htmlIdBottomOfPage"], [1, "mt-1", "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, ""], [1, "ml-3"], [1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["disabled", "", "size", "30", 1, "is-small", 3, "value"], ["size", "15", "autocomplete", "off", 1, "is-small", 3, "value", "change", "blur"], ["aca", ""], ["size", "2", "autocomplete", "off", 1, "is-small", 3, "value", "change", "blur"], ["pointVal", ""]], template: function QncwwqdComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QncwwqdComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QncwwqdComponent_span_1_Template, 7, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "fieldset", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_Template_button_click_3_listener() { return ctx.prevButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u1438 prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_Template_button_click_6_listener() { return ctx.nextButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " next \u1433 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_Template_button_click_9_listener() { return ctx.addButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_Template_button_click_12_listener() { return ctx.delButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "fieldset", 2)(16, "table", 4)(17, "tr")(18, "td")(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Question nbr: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td")(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Sequence: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td")(29, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwqdComponent_Template_input_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30); return ctx.questSeqChg(_r2.value, ctx.qx); })("blur", function QncwwqdComponent_Template_input_blur_29_listener() { return ctx.handleBlur("questSeq"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_Template_span_click_31_listener() { return ctx.ranSeqButClick(ctx.qx); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " randomize");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tr")(34, "td")(35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Pre-Question: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td")(38, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwqdComponent_Template_input_change_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39); return ctx.preQuestChg(_r3.value, ctx.qx); })("blur", function QncwwqdComponent_Template_input_blur_38_listener() { return ctx.handleBlur("preQuest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tr")(41, "td")(42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Question: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td")(45, "textarea", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwqdComponent_Template_textarea_change_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46); return ctx.questTxtChg(_r4.value, ctx.qx); })("blur", function QncwwqdComponent_Template_textarea_blur_45_listener() { return ctx.handleBlur("questTxt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tr")(49, "td")(50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Group: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "td")(53, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwqdComponent_Template_input_change_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](54); return ctx.subsetChg(_r5.value, ctx.qx); })("blur", function QncwwqdComponent_Template_input_blur_53_listener() { return ctx.handleBlur("subset"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, QncwwqdComponent_tr_55_Template, 6, 1, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr")(57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Add to ScoreBoards:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td")(60, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwqdComponent_Template_input_change_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](61); return ctx.questAccumChg(_r7.value, ctx.qx, 0); })("blur", function QncwwqdComponent_Template_input_blur_60_listener() { return ctx.handleBlur("questAccum0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "input", 16, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwqdComponent_Template_input_change_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](64); return ctx.questAccumChg(_r8.value, ctx.qx, 1); })("blur", function QncwwqdComponent_Template_input_blur_63_listener() { return ctx.handleBlur("questAccum1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "input", 16, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwqdComponent_Template_input_change_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](67); return ctx.questAccumChg(_r9.value, ctx.qx, 2); })("blur", function QncwwqdComponent_Template_input_blur_66_listener() { return ctx.handleBlur("questAccum2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "table", 20)(69, "thead")(70, "tr")(71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Answer choice frame:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "td")(74, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwqdComponent_Template_input_change_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](75); return ctx.acaFrameChg(_r10.value, ctx.qx); })("blur", function QncwwqdComponent_Template_input_blur_74_listener() { return ctx.handleBlur("acaFrame"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "tr")(77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Answer Choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "td")(82, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_Template_button_click_82_listener() { return ctx.addAnswerChoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " append choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "th")(85, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_Template_button_click_85_listener() { return ctx.setAnswerChoice13(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " set 1-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "th")(88, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_Template_button_click_88_listener() { return ctx.setAnswerChoice15(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " set 1-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "th")(91, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwqdComponent_Template_button_click_91_listener() { return ctx.setAnswerChoice18(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " set 1-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, QncwwqdComponent_tr_94_Template, 10, 2, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "br")(96, "br")(97, "span", 25);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.verifyDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fieldsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fieldsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.questionsIn[ctx.qx].questNbr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.questionsIn[ctx.qx].questSeq);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.questionsIn[ctx.qx].preQuest);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("rows", ctx.rangeTxtRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cols", ctx.rangeTxtCols);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.questionsIn[ctx.qx].questTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.questionsIn[ctx.qx].subset);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fullRuleWords.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.questionsIn[ctx.qx].accum[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.questionsIn[ctx.qx].accum[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.questionsIn[ctx.qx].accum[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.questionsIn[ctx.qx].acaFrame);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.questionsIn[ctx.qx].aca);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 8191:
/*!********************************************!*\
  !*** ./src/app/qncwwr/qncwwr.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwrComponent": () => (/* binding */ QncwwrComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/colSortFilt */ 4362);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function QncwwrComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwrComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_6_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.colSort("questCount", "des", "Count"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_6_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.colSort("questCount", "asc", "Count"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_6_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.colFilt("questCount", "Count"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symFilt, " ");
} }
function QncwwrComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_10_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.colSort("ruleNbr", "des", "Rule Nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_10_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.colSort("ruleNbr", "asc", "Rule Nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_10_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.colFilt("ruleNbr", "Rule Nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symFilt, " ");
} }
function QncwwrComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_14_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.colSort("accum", "des", "Scoreboard Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_14_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.colSort("accum", "asc", "Scoreboard Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_14_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.colFilt("accum", "Scoreboard"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symFilt, " ");
} }
function QncwwrComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_18_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.colSort("oper", "des", "Oper"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_18_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.colSort("oper", "asc", "Oper"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_18_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.colFilt("oper", "comparison"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symFilt, " ");
} }
function QncwwrComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_22_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.colSort("thresh", "des", "Threshold"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_22_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.colSort("thresh", "asc", "Threshold"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_22_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.colFilt("thresh", "Threshold"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.symFilt, " ");
} }
function QncwwrComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_26_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.colSort("subset", "des", "Group Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_26_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.colSort("subset", "asc", "Group Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_span_26_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.colFilt("subset", "Group Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.symFilt, " ");
} }
function QncwwrComponent_tr_33_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td")(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td")(17, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_tr_33_ng_container_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const r_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.detailButClick(r_r32.ruleNbr); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const r_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r32.questCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r32.ruleNbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r32.accum);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r32.oper);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r32.thresh);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r32.subset);
} }
function QncwwrComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QncwwrComponent_tr_33_ng_container_1_Template, 19, 6, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", r_r32.filterInOut == "in");
} }
class QncwwrComponent {
    constructor() {
        // rulesArray = []
        this.msg1 = '?';
        this.ruleNbrOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.wwrdJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.symArUp = '\u{2191}';
        this.symArDn = '\u{2193}';
        this.symFilt = '\u{2207}';
        this.colHeadSf = false;
        this.filterInOut = 'in';
        this.colSortByArray = [];
    }
    ngOnInit() {
        console.log('running wwr ngOnInit');
        // this.rulesArray = this.rulesIn
        if (this.rulesIn.length == 0) {
            this.msg1 = 'No rules exist yet for this Qna.';
        }
        else {
            this.msg1 = 'rule list';
            this.countQuestionsPerRule();
        }
        if (this.rulesIn.length == 0) {
            this.msg1 = 'No rules exist. Click the add button.';
        }
        if (this.filterResetIn) {
            this.resetRuleFilter();
        }
    } // end ngInit
    colHeadClick(c) {
        // hide/show sort & filter icons in the table header (lower part)
        if (this.colHeadSf == true) {
            this.colHeadSf = false;
            if (this.msg1 == 'click an icon to sort or filter.') {
                this.msg1 = '';
            }
        }
        else {
            this.colHeadSf = true;
            this.msg1 = 'click an icon to sort or filter.';
        }
    } // end colHeadClick
    colSort(fieldName, ascDes, fieldMsg) {
        let colSortOut = src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__["default"].colSort(this.rulesIn, fieldName, ascDes, fieldMsg);
        this.rulesIn = colSortOut[0]; // not really needed cuz shallow/deep copy rules
        this.msg1 = colSortOut[3];
    } // end colSort
    colFilt(fn, pt) {
        console.log('running colFilt ', fn, pt);
        let filtWord = prompt('Filter ' + pt);
        this.resetRuleFilter();
        let colFiltOut = src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__["default"].colFilt(this.rulesIn, fn, pt, filtWord);
        this.rulesIn = colFiltOut[0]; // not really needed cuz shallow/deep copy rules
        this.msg1 = colFiltOut[1];
    } // end colFilt 
    addButClick() {
        console.log('running wwr addButClick');
        this.ruleNbrOut.emit(-1); //-1  no rules yet
        this.wwrdJumpOut.emit();
    } // end addButClick
    showHideHelp() { }
    doneWwr() { }
    detailButClick(ruleNbrParmIn) {
        console.log('running wwr detailButClick:', ruleNbrParmIn);
        //  jump out of wwsr and tell caller what we were working on
        this.ruleNbrOut.emit(ruleNbrParmIn);
        this.wwrdJumpOut.emit();
    }
    countQuestionsPerRule() {
        console.log('running countQuestionsPerRule');
        let qCnt = 0;
        for (let i = 0; i < this.rulesIn.length; i++) {
            qCnt = 0;
            //=== mostly works, duznt catch case misMatch
            for (let j = 0; j < this.questionsIn.length; j++) {
                for (let k = 0; k < this.questionsIn[j].accum.length; k++) {
                    if (this.questionsIn[j].accum[k] == this.rulesIn[i].accum) {
                        qCnt = qCnt + 1;
                    } // end if
                } //end inner for
            } // end middle for
            //===
            this.rulesIn[i].questCount = qCnt.toString(); //.padStart(3,'0') 
        } // end outer for
    } // end countQuestionsPerRule
    resetRuleFilter() {
        console.log('running resetRuleFilter');
        for (let i = 0; i < this.rulesIn.length; i++) {
            this.rulesIn[i]['filterInOut'] = 'in';
        }
    } // end resetRuleFilter
} // end of export component
QncwwrComponent.ɵfac = function QncwwrComponent_Factory(t) { return new (t || QncwwrComponent)(); };
QncwwrComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QncwwrComponent, selectors: [["app-qncwwr"]], inputs: { rulesIn: "rulesIn", questionsIn: "questionsIn", subsetsIn: "subsetsIn", filterResetIn: "filterResetIn" }, outputs: { ruleNbrOut: "ruleNbrOut", wwrdJumpOut: "wwrdJumpOut" }, decls: 34, vars: 8, consts: [["class", "tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], [1, "table", "is-fullwidth", "ml-3", "mr-3", "mb-3"], [1, "is-clickable", 3, "click"], ["class", "tags has-addons is-flex-wrap-nowrap", 4, "ngIf"], [1, "is-clickable", "has-background-info-light", 3, "click"], [1, "button", "is-small", "is-info", 3, "click"], ["class", "has-background-success-light", 4, "ngFor", "ngForOf"], [1, "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, "tags", "has-addons", "is-flex-wrap-nowrap"], [1, "tag", "is-link", "is-light", 3, "click"], [1, "has-background-success-light"], [4, "ngIf"], [1, "tag", "is-small", "is-rounded"]], template: function QncwwrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QncwwrComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1)(2, "thead")(3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_Template_th_click_3_listener() { return ctx.colHeadClick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Question Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QncwwrComponent_span_6_Template, 7, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_Template_th_click_7_listener() { return ctx.colHeadClick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Nbr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, QncwwrComponent_span_10_Template, 7, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_Template_th_click_11_listener() { return ctx.colHeadClick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Scoreboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, QncwwrComponent_span_14_Template, 7, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_Template_th_click_15_listener() { return ctx.colHeadClick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "is");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, QncwwrComponent_span_18_Template, 7, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_Template_th_click_19_listener() { return ctx.colHeadClick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Threshold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, QncwwrComponent_span_22_Template, 7, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_Template_th_click_23_listener() { return ctx.colHeadClick("nbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "will trigger Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, QncwwrComponent_span_26_Template, 7, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th")(30, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwrComponent_Template_button_click_30_listener() { return ctx.addButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " add new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, QncwwrComponent_tr_33_Template, 2, 1, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rulesIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 301:
/*!**********************************************!*\
  !*** ./src/app/qncwwrd/qncwwrd.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwrdComponent": () => (/* binding */ QncwwrdComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiSupabase */ 2979);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function QncwwrdComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwrdComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " are you sure you want to delete? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwrdComponent_span_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.proceedWithDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " delete now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwrdComponent_span_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.cancelDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function QncwwrdComponent_span_30_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusout", function QncwwrdComponent_span_30_li_4_Template_button_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.screenFieldLostFocus("scoreboardListItem", $event); })("click", function QncwwrdComponent_span_30_li_4_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const sx_r14 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.scoreboardChosen(ctx_r17.scoreboardsIn[sx_r14].scoreboardName, ctx_r17.rx); })("focus", function QncwwrdComponent_span_30_li_4_Template_button_focus_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.screenFieldGotFocus("scoreboardListItem"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sx_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "scoreboardListItem" + sx_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r12.scoreboardsIn[sx_r14].scoreboardName, " ");
} }
function QncwwrdComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22)(1, "ul", 23)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "--scoreboard list--");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QncwwrdComponent_span_30_li_4_Template, 3, 2, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.scoreboardsIn);
} }
function QncwwrdComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwrdComponent_button_39_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const jx_r20 = restoredCtx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.operButClick(ctx_r21.operArray[jx_r20], ctx_r21.rx); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jx_r20 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", jx_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.operArray[jx_r20], " ");
} }
function QncwwrdComponent_span_54_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function QncwwrdComponent_span_54_li_4_Template_button_focus_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r26.screenFieldGotFocus("groupListItem"); })("focusout", function QncwwrdComponent_span_54_li_4_Template_button_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r28.screenFieldLostFocus("groupListItem", $event); })("click", function QncwwrdComponent_span_54_li_4_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const gx_r25 = restoredCtx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r29.groupChosen(ctx_r29.groupsIn[gx_r25].groupName, ctx_r29.rx); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const gx_r25 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "groupListItem" + gx_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r23.groupsIn[gx_r25].groupName, " ");
} }
function QncwwrdComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22)(1, "ul", 23)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "--group list--");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QncwwrdComponent_span_54_li_4_Template, 3, 2, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.groupsIn);
} }
class QncwwrdComponent {
    constructor() {
        this.wwrJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.msg1 = 'edit rule details.';
        this.rx = -1;
        this.gx = -1;
        this.ruleObj = {};
        this.qtDbDataObj = {};
        this.pendingAddRx = -1;
        this.symDropDown = '\u{25BC}';
        this.verifyDelete = false;
        this.fieldsDisabled = false;
        this.operArray = [
            'less than',
            'equal to',
            'greater than'
        ];
        this.showScoreboardList = false;
        this.showGroupList = false;
        this.groupRound = '?';
        this.groupQuestCount = '?';
        this.wordAnswerOrAnswers = 'answers';
        this.wordQuestionOrQuestions = 'questions';
        this.wordsAboutGroup = 'group words';
        this.supaFlds = {};
        this.supaRes = {};
        this.supaDataObj = {};
        this.faunaDataObj = {};
    }
    ngOnInit() {
        console.log('running wwrd ngOnInit');
        if (this.ruleNbrIn == -1) { // he clicked add new on list screen.
            this.addButClick();
        }
        else {
            this.rx = this.rulesIn.findIndex(r => r.ruleNbr == this.ruleNbrIn);
            this.setRuleInfo();
            this.setGroupInfo();
            this.fieldValidations();
        }
    } // end ngOnInit
    findRuleIx() {
    } // end findRuleIx
    setRuleInfo() {
        console.log('running setRuleInfo');
        // this is part of the info about this rule.  see html.
        if (this.rulesIn[this.rx].questCount == 1) {
            this.wordAnswerOrAnswers = 'answer';
            this.wordQuestionOrQuestions = 'question adds';
        }
        else {
            this.wordAnswerOrAnswers = 'answers';
            this.wordQuestionOrQuestions = 'questions add';
        } // end if
    } // end setRuleInfo
    setGroupInfo() {
        console.log('running setGroupInfo');
        // count questions per group:
        let qCnt = 0;
        for (let i = 0; i < this.groupsIn.length; i++) {
            qCnt = this.questionsIn
                .filter(q => q.subset.toLowerCase().trim() == this.groupsIn[i].groupName.toLowerCase().trim())
                .length;
            this.groupsIn[i].qCount = qCnt;
        } // end for
        this.gx = this.groupsIn.findIndex(g => g.groupName == this.rulesIn[this.rx].subset);
        if (this.gx > -1) {
            this.groupRound = this.groupsIn[this.gx].seq;
            this.groupQuestCount = this.groupsIn[this.gx].qCount;
            this.wordsAboutGroup = ' questions and is in round ';
        }
        else {
            this.groupRound = '';
            this.groupQuestCount = '0';
            this.wordsAboutGroup = ' questions. This group does not exist';
        }
    } // end setGroupInfo
    prevButClick() {
        console.log('running prevButClick');
        this.msg1 = 'first rule shown.'; //might be overwritten below
        let loopRx = this.rx;
        while (loopRx > 0) {
            loopRx = loopRx - 1;
            if (this.rulesIn[loopRx].filterInOut == 'in') {
                this.rx = loopRx;
                this.msg1 = 'previous rule shown.';
                // this is a rec we want to show. rx is set.
                loopRx = 0; // lets exit the while loop
            }
        } // end while
        this.setRuleInfo();
        this.setGroupInfo();
        this.fieldValidations();
    } // end prevButClick
    nextButClick() {
        this.msg1 = 'last rule shown.';
        let loopRx = this.rx;
        while (loopRx < this.rulesIn.length - 1) {
            loopRx = loopRx + 1;
            if (this.rulesIn[loopRx].filterInOut == 'in') {
                this.rx = loopRx;
                this.msg1 = 'next rule shown.';
                // this is a rec we want to show. rx is set.
                loopRx = 9999; // lets exit the while loop
            } // end if
        } // end while
        this.setRuleInfo();
        this.setGroupInfo();
        this.fieldValidations();
    } // end nextButClick
    fieldValidations() {
        let x = this.validateScoreboard(this.rulesIn[this.rx].accum);
        let y = this.validateGroup(this.rulesIn[this.rx].subset);
    }
    saveRule() {
        console.log('140 wwrd running  saveRule');
        this.msg1 = 'saving rule...';
        this.buildRuleObj();
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchFaunaUpdateRule();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.supaFlds = this.ruleObj;
            this.launchChgSupabase('qtRules', this.supaFlds);
        }
        this.msg1 = 'rule saved.';
    } // end saveRule
    buildRuleObj() {
        this.ruleObj =
            {
                cust: this.custIn,
                qid: this.qidIn,
                ruleNbr: this.rulesIn[this.rx].ruleNbr,
                accum: this.rulesIn[this.rx].accum,
                oper: this.rulesIn[this.rx].oper,
                thresh: this.rulesIn[this.rx].thresh,
                subset: this.rulesIn[this.rx].subset
            };
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.ruleObj['id'] = this.rulesIn[this.rx].id;
        } // end if supabase
        console.table(this.ruleObj);
    } // end buildRuleObj
    addButClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running wwrd addButClick');
            this.fieldsDisabled = true;
            this.msg1 = 'adding a rule...';
            this.fieldsDisabled = true;
            let newRuleNbr = '01';
            if (this.rulesIn.length > 0) {
                //  set new rule nbr to one bigger than max rule nbr
                let ruleNbrMax = Math.max.apply(Math, this.rulesIn.map(function (r) { return r.ruleNbr; }));
                newRuleNbr = (ruleNbrMax + 1).toString();
            } //end if
            let newRuleScoreboardName = 'scoreboard1';
            let newRuleGroupName = 'group1';
            this.ruleObj = {
                cust: this.custIn,
                qid: this.qidIn,
                ruleNbr: newRuleNbr,
                accum: newRuleScoreboardName,
                oper: 'greater than',
                thresh: 0,
                subset: newRuleGroupName
            }; // end set ruleObj
            this.rulesIn.push(this.ruleObj);
            console.log('wwrd 151 rulesIn:');
            console.table(this.rulesIn);
            this.rx = this.rulesIn.length - 1;
            if (this.faunaOrSupabaseIn == 'fauna') {
                this.launchFaunaAddRule();
            }
            if (this.faunaOrSupabaseIn == 'supabase') {
                this.supaFlds = this.ruleObj;
                yield this.launchAddSupabase('qtRules', this.supaFlds);
                // id is from supabase (after supabase add, supaDataObj is set)
                // we gotta wait for launchAddSupabase to finish,
                // cuz supaDataObj will be blank until then,
                // and we want to get the new id from scoreboardObj.
                this.rulesIn[this.rx]['id'] = this.supaDataObj['id'];
            } // end if supabase
            this.rulesIn[this.rx].filterInOut = 'in';
            this.ruleNbrIn = newRuleNbr;
            this.fieldValidations(); // reset any prior rec fields marked as invalid.
            this.msg1 = 'new rule added.';
            this.fieldsDisabled = false;
        });
    } // end addButClick
    delButClick() {
        this.msg1 = '';
        this.verifyDelete = true;
        this.fieldsDisabled = true;
    } // end delButClick
    proceedWithDelete() {
        console.log('running proceedWithDelete');
        this.msg1 = 'deleting...';
        this.verifyDelete = false;
        this.fieldsDisabled = false;
        let ruleNbrWork = this.rulesIn[this.rx].ruleNbr;
        // this.rx = this.rulesIn.findIndex(q => q.ruleNbr == ruleNbrWork)
        this.buildRuleObj();
        //  delete the db rule
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchFaunaDeleteRule();
        } // end if fauna
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.supaFlds = this.ruleObj;
            this.launchDelSupabase('qtRules', this.supaFlds);
        } // end if supabase
        // remove the rule from the rules array:
        this.rulesIn.splice(this.rx, 1);
        // after he deletes a rule, show adjacent rule on screen.
        // rx is almost set cuz splice was done.
        if (this.rx > this.rulesIn.length - 1) {
            this.rx = this.rulesIn.length - 1;
        }
        console.table(this.rulesIn);
        this.msg1 = 'rule ' + ruleNbrWork + ' deleted.';
        if (this.rulesIn.length == 0) {
            //billy, maybe tell him nicer, that we will jump to the list screen.
            alert('no rules left. Leaving this screen.');
            this.wwrJumpOut.emit();
        }
    } // end proceedWithDelete
    cancelDelete() {
        this.verifyDelete = false;
        this.fieldsDisabled = false;
    } // end cancelDelete
    ruleScoreboardChg(newScoreboard, rx) {
        console.log('running ruleScoreboardChg to ', newScoreboard);
        let validScoreboard = this.validateScoreboard(newScoreboard);
        if (!validScoreboard) {
            return;
        }
        this.rulesIn[rx].accum = newScoreboard.trim();
        this.saveRule();
    } // end ruleScoreboardChg
    ruleOperChg(newOper, rx) {
        console.log('running ruleOperChg to ', newOper);
        let validOper = this.validateOper(newOper);
        if (!validOper) {
            this.msg1 = 'oper invalid. ';
            return;
        }
        this.rulesIn[rx].oper = newOper.trim();
        this.saveRule();
    }
    validateScoreboard(newScoreboard) {
        console.log('running validateScoreboard');
        let el = document.getElementById('ruleScoreboard');
        el.classList.remove('has-background-warning');
        if (newScoreboard.trim().length < 1) {
            el.classList.add('has-background-warning');
            this.msg1 = "Invalid Scoreboard.  Can't be blank.";
            return false;
        } // end if
        let position = this.scoreboardsIn.map(function (s) { return s.scoreboardName; })
            .indexOf(newScoreboard);
        if (position < 0) {
            el.classList.add('has-background-warning');
            this.msg1 = "Invalid Scoreboard.  Not in scoreboard list.";
            return false;
        } // end if
        return true; // fall here when all scoreboard validations are OK
    } // end validateScoreboard
    validateOper(newOper) {
        console.log('running validateOper');
        let position = this.operArray.map(function (a) { return a; })
            .indexOf(newOper);
        if (position > -1) {
            return true;
        }
        else {
            return false;
        }
        // if (newOper == 'less than'
        // ||  newOper == 'less than or equal'
        // ||  newOper == 'equals'
        // ||  newOper == 'greater than'
        // ||  newOper == 'greater than or equal') {
    } // end validateOper
    validateThresh(newThresh) {
        console.log('running validateThresh');
        let el = document.getElementById('ruleThresh');
        el.classList.remove('has-background-warning');
        if (Number(newThresh) >= 0 && newThresh.trim().length > 0) {
            return true;
        }
        else {
            el.classList.add('has-background-warning');
            this.msg1 = 'threshold invalid. Must be 0-99999';
            return false;
        } // end if
    } // end validateThresh
    validateGroup(newGroup) {
        console.log('running validateGroup');
        let el = document.getElementById('ruleGroup');
        el.classList.remove('has-background-warning');
        if (newGroup.trim().length < 1) {
            el.classList.add('has-background-warning');
            this.msg1 = "Invalid Group.  Can't be blank.";
            return false;
        } // end if
        let position = this.groupsIn.map(function (s) { return s.groupName; })
            .indexOf(newGroup);
        if (position < 0) {
            el.classList.add('has-background-warning');
            this.msg1 = "Invalid Group.  Not in group list.";
            return false;
        } // end if
        return true; // fall here when all group validations are OK
    } // end validateScoreboard
    screenFieldGotFocus(focusFieldParmIn) {
        console.log('running screenFieldGotFocus', focusFieldParmIn);
        if (focusFieldParmIn == 'ruleScoreboard' || focusFieldParmIn == 'scoreboardListItem') {
            this.showScoreboardList = true;
        }
        else {
            this.showScoreboardList = false;
        } //end if
        if (focusFieldParmIn == 'ruleGroup' || focusFieldParmIn == 'groupListItem') {
            this.showGroupList = true;
        }
        else {
            this.showGroupList = false;
        } //end if
    } // end screenFieldGotFocus
    screenFieldLostFocus(whichField, ev) {
        console.log('running screenFieldLostFocus', whichField);
        if (ev.relatedTarget == null) { // he is moving cursor off fields
            this.showScoreboardList = false;
            this.showGroupList = false;
        } // end if
        if (ev.relatedTarget != null
            && !ev.relatedTarget.id.includes('scoreboardListItem')) {
            // he is moving to a different input field
            this.showScoreboardList = false;
        } // end if
        if (ev.relatedTarget != null
            && !ev.relatedTarget.id.includes('groupListItem')) {
            // he is moving to a different input field
            this.showGroupList = false;
        }
    } // end screenFieldLostFocus
    operButClick(ruleOperParmIn, rx) {
        console.log('running operButClick');
        console.log(ruleOperParmIn);
        this.ruleOperChg(ruleOperParmIn, rx);
    } //operButClick
    scoreboardChosen(newScoreboard, rx) {
        console.log('running scoreboardChosen');
        this.showScoreboardList = false;
        this.ruleScoreboardChg(newScoreboard, rx);
    } // end scoreboardChosen
    groupChosen(newGroup, rx) {
        console.log('running groupChosen');
        this.showGroupList = false;
        this.ruleGroupChg(newGroup, rx);
        this.setGroupInfo();
    } // end groupChosen
    ruleThreshChg(newThresh, rx) {
        console.log('running ruleThreshChg to ', newThresh);
        let validThresh = this.validateThresh(newThresh);
        if (!validThresh) {
            return;
        }
        this.rulesIn[rx].thresh = newThresh.trim();
        this.saveRule();
    }
    ruleGroupChg(newGroup, rx) {
        console.log('running ruleGroupChg to ', newGroup);
        let validGroup = this.validateGroup(newGroup);
        if (!validGroup) {
            return;
        }
        this.rulesIn[rx].subset = newGroup.trim();
        this.saveRule();
    }
    launchFaunaAddRule() {
        console.log('running  wwrd launchFaunaAddRule');
        src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtWriteRule(this.ruleObj)
            .then((qtDbRtnObj) => { this.qtDbDataObj = qtDbRtnObj.data; })
            // return from this on-the-fly function is implied  
            .catch(() => {
            console.log('launchFaunaAddRule error. ruleObj:' + this.ruleObj);
        });
    } // end launchFaunaAddRule
    launchFaunaDeleteRule() {
        console.log('running  wwrd launchFaunaDeleteRule');
        src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtDeleteRule(this.ruleObj)
            .then((qtDbRtnObj) => { this.qtDbDataObj = qtDbRtnObj.data; })
            // return from this on-the-fly function is implied  
            .catch(() => {
            console.log('launchFaunaDeleteRule error. ruleObj:' + this.ruleObj);
        });
    } // end launchFaunaDeleteRule
    launchFaunaUpdateRule() {
        console.log('running  wwrd launchFaunaUpdateRule');
        src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtUpdateRule(this.ruleObj)
            .then((qtDbRtnObj) => { this.qtDbDataObj = qtDbRtnObj.data; })
            .catch(() => {
            console.log('launchFaunaUpdateRule error. ruleObj:', this.ruleObj);
        });
    } //  end launchFaunaUpdateRule
    launchAddSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchAddSupabase.  flds:');
            console.table(flds);
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].addSupabase(tbl, flds);
            this.supaDataObj = this.supaRes['supabaseData'][0];
            // supaRes has mult components, one is a supabaseData array.
            // the first entry in the supabaseData array is the object.
            // we want this data cuz it has the new id.
        });
    } // end launchAddSupabase
    launchDelSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchDelSupabase.  flds:');
            console.table(flds);
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].delSupabase(tbl, flds);
        });
    } // end launchDelSupabase
    launchChgSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchChgSupabase.  flds:');
            console.table(flds);
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].chgSupabase(tbl, flds);
        });
    } // end launchChgSupabase
} // end export class
QncwwrdComponent.ɵfac = function QncwwrdComponent_Factory(t) { return new (t || QncwwrdComponent)(); };
QncwwrdComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QncwwrdComponent, selectors: [["app-qncwwrd"]], inputs: { custIn: "custIn", qidIn: "qidIn", ruleNbrIn: "ruleNbrIn", rulesIn: "rulesIn", groupsIn: "groupsIn", scoreboardsIn: "scoreboardsIn", questionsIn: "questionsIn", faunaOrSupabaseIn: "faunaOrSupabaseIn" }, outputs: { wwrJumpOut: "wwrJumpOut" }, decls: 90, vars: 24, consts: [["class", "mt-1 tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "mt-3", "ml-3", 3, "disabled"], [1, "button", "is-info", "is-small", 3, "click"], [1, "table", "has-background-success-light", "is-narrow"], ["disabled", "", "size", "4", "autocomplete", "off", 1, "has-background-success-light", 3, "value"], ["readonly", "", "id", "ruleScoreboard", "size", "20", "autocomplete", "off", 1, "is-small", "has-background-success-light", 3, "value", "focusout", "focus", "change"], ["ruleScoreboard", ""], ["class", "menu box mr-2", 4, "ngIf"], ["readonly", "", "id", "ruleOperHtmlId", "autocomplete", "off", 1, "mr-2", "has-background-success-light", 3, "value", "change"], ["ruleOper", ""], ["class", "button is-small is-info mt-1 mr-2", 3, "id", "click", 4, "ngFor", "ngForOf"], ["id", "ruleThresh", "type", "text", "size", "20", "autocomplete", "off", 1, "is-small", 3, "value", "focus", "change"], ["ruleThresh", ""], ["readonly", "", "id", "ruleGroup", "type", "text", "size", "20", "autocomplete", "off", 1, "is-small", "has-background-success-light", 3, "value", "focus", "focusout", "change"], ["ruleGroup", ""], [1, "box", "mr-6", "ml-2", "mt-2", "has-background-info-light"], ["id", "htmlIdBottomOfPage"], [1, "mt-1", "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, ""], [1, "ml-3"], [1, "button", "is-small", "is-info", "m-1", 3, "click"], [1, "menu", "box", "mr-2"], [1, "menu-list", "has-text-centered"], [4, "ngFor", "ngForOf"], [1, "button", "is-info", "is-small", "mt-1", "is-fullwidth", 3, "id", "focusout", "click", "focus"], [1, "button", "is-small", "is-info", "mt-1", "mr-2", 3, "id", "click"], [1, "button", "is-info", "is-small", "mt-1", "is-fullwidth", 3, "id", "focus", "focusout", "click"]], template: function QncwwrdComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QncwwrdComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QncwwrdComponent_span_1_Template, 7, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "fieldset", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwrdComponent_Template_button_click_3_listener() { return ctx.prevButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u1438 prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwrdComponent_Template_button_click_6_listener() { return ctx.nextButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " next \u1433 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwrdComponent_Template_button_click_9_listener() { return ctx.addButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwrdComponent_Template_button_click_12_listener() { return ctx.delButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "fieldset", 2)(16, "table", 4)(17, "tr")(18, "td")(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Rule nbr: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td")(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Scoreboard: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td")(28, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusout", function QncwwrdComponent_Template_input_focusout_28_listener($event) { return ctx.screenFieldLostFocus("ruleScoreboard", $event); })("focus", function QncwwrdComponent_Template_input_focus_28_listener() { return ctx.screenFieldGotFocus("ruleScoreboard"); })("change", function QncwwrdComponent_Template_input_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29); return ctx.ruleScoreboardChg(_r2.value, ctx.rx); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, QncwwrdComponent_span_30_Template, 5, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "tr")(33, "td")(34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Operation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td")(37, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwrdComponent_Template_input_change_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](38); return ctx.ruleOperChg(_r4.value, ctx.rx); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, QncwwrdComponent_button_39_Template, 2, 2, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tr")(41, "td")(42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Threshold: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td")(45, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function QncwwrdComponent_Template_input_focus_45_listener() { return ctx.screenFieldGotFocus("ruleThresh"); })("change", function QncwwrdComponent_Template_input_change_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46); return ctx.ruleThreshChg(_r6.value, ctx.rx); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr")(48, "td")(49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "will trigger Group: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td")(52, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function QncwwrdComponent_Template_input_focus_52_listener() { return ctx.screenFieldGotFocus("ruleGroup"); })("focusout", function QncwwrdComponent_Template_input_focusout_52_listener($event) { return ctx.screenFieldLostFocus("ruleGroup", $event); })("change", function QncwwrdComponent_Template_input_change_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](53); return ctx.ruleGroupChg(_r7.value, ctx.rx); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, QncwwrdComponent_span_54_Template, 5, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " When scoreboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " total points are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " the point threshold of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, ", then we will follow up with questions in group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "br")(78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Triggered group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " has ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.verifyDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fieldsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fieldsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.rulesIn[ctx.rx].ruleNbr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.rulesIn[ctx.rx].accum);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showScoreboardList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.rulesIn[ctx.rx].oper);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.operArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.rulesIn[ctx.rx].thresh);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.rulesIn[ctx.rx].subset);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showGroupList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" When a participant takes the survey, his ", ctx.wordAnswerOrAnswers, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.rulesIn[ctx.rx].questCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.wordQuestionOrQuestions, " points to scoreboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.rulesIn[ctx.rx].accum);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.rulesIn[ctx.rx].accum);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.rulesIn[ctx.rx].oper);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.rulesIn[ctx.rx].thresh);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.rulesIn[ctx.rx].subset);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.rulesIn[ctx.rx].subset);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.groupQuestCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.wordsAboutGroup, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.groupRound);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 2930:
/*!********************************************!*\
  !*** ./src/app/qncwws/qncwws.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwsComponent": () => (/* binding */ QncwwsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiSupabase */ 2979);
/* harmony import */ var gotrue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gotrue-js */ 6700);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







function QncwwsComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwsComponent_section_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 13)(1, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "wws  Login.\nshown as first screen, and shown after Logout.   \n\n Login for customers like Ed, Bill, Fred, Barney\nAppears as start page for  qnc.netlify.app \n\nafter login, jump to Profile.\nJun2021 dont show menu buttons until qncAuthorized. controlled by app component.\nsignHtml has a GO button, will launch validateUser()\nvalidateUser() will read fauna cust db by name, match encrypted pass\ncust 1 is user ed        Ed Murray       pass: --------  has tests 1,2,3,4,5\ncust 2 is user bill\t     Bill Selzer     pass: --------\n \n  ===================\n  prompt for cust credentials\n  validate credentials against cust table.\n  cust means customer of qnc.\n  the customer needs to sign on this screen,\n  to enable him to edit questions, etc.\n\n  auth0 hints:\n  https://docs.netlify.com/visitor-access/oauth-provider-tokens/\n  might need app name finalized \n  before i can tie it to netlify auth0.\n\nbare bones cust table in fauna:\nSelzer Software Services will add a rec to the fauna cust table,\neverytime SSS gets a new cust, or wants a subscription.\nin the cust table, there is a cust id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "&");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " pass.\nedMurray    (his userId. his choice.)\nedMurray17@comcast.com (his email address. his choice.)\npass: use decoder to store a passwd.\n--------\nYour missing an important concept here.\nMultiple Admins can work for one company.\nA company has a subscription,\nbut an admin is part of the cust team.\nNetlify has a higher price tag on their\nmulti-person subscription. (they call it 'team')\n?? will my customers have more than one admin??\n?? should I charge more for multiple admins??\nmaybe early on, i expect a cust will have a\nsingle admin.  If there are multiple people involved,\nthen can share the same login.\n\n \nthe cust is the company that has a subscription.\nthe admin is the user of qnc Admin app.\nmaybe I need two tables.\n\nthe cust table has info about the subscribing company.\nthe admin table has info about a specific person,\nor for cheapskates, the admin is a shared account.\n\nsubscriber:  the company that is a customer of SSS\nteamMember:  the admin that works for a subscriber.\nfor small companies, subscriber and teamMember are the same person.\n\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class QncwwsComponent {
    constructor() {
        //componentTitle = 'login or logout wws'
        this.msg1 = '???';
        this.proJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.teamMemberObjOut = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.qncSetAuthOnOut = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.passEnc = '';
        this.passDec = '';
        this.teamMemberUserId = '';
        this.teamMemberUserIdLowerCase = '';
        this.teamMemberPass = '';
        this.teamMemberObj = new Object;
        this.showdevNotes = false;
        this.eyeToolTipText = '';
        this.passwordShown = 'no';
        this.supaKeyFlds = {};
        this.supaData = [];
        this.faunaData = [];
        this.teamMembersArray = [];
        this.authGoTrue = new gotrue_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
            APIUrl: "https://qnaadmin.flytechfree.com/.netlify/identity",
            audience: "", setCookie: false
        });
    }
    // https://gotruejs-playground.netlify.app/#log-in <-- learn here
    ngOnInit() {
        console.log('running wws ngOnInit =====');
        this.truncUrl(); //remove any old querystring.
        // are you starting up or logging off?
        //console.log('firstLoginIn: ', this.firstLoginIn)
        window.scrollTo(0, 0);
        //this.teamMemberUserId = sessionStorage.getItem("ssUserId") //cursor woes
        document.getElementById("teamMemberUserId").focus();
        if (this.firstLoginIn == true) {
            this.msg1 = 'Welcome to Qna Admin.'
                + '\xa0' + '\xa0' + '\xa0' + '\xa0' + ' Please Login.';
        }
        if (this.firstLoginIn == false) {
            this.msg1 = 'You are now logging out...';
            this.goTrueSignOff();
            this.msg1 = 'You are now logged out.';
        } // end if firstLogIn false
    } // end ngOnInit
    goTrueSignOff() {
        console.log('running goTrueSignOff');
        let myUser = this.authGoTrue.currentUser();
        // alert(typeof myUser)
        myUser
            .logout()
            .then(response => console.log("User logged out"))
            .catch(err => {
            console.log("Failed to logout user: %o", err);
            throw err;
        });
    }
    truncUrl() {
        console.log('running wws truncUrl');
        let myUrl = new URL(window.location.origin); //.href)
        let urlParams = new URLSearchParams(myUrl.search);
        let myQid = urlParams.get('qid');
        let leftUrl = myUrl.toString().split("?")[0]; //take off any querystring
        let myNewUrl = leftUrl + '';
        history.pushState({}, null, myNewUrl);
        console.log('wws has set myNewUrl: ', myNewUrl);
    } // end truncUrl
    teamMemberUserIdChg(ev) {
        console.log('running wws teamMemberUserIdChg');
        this.teamMemberUserId = ev.target.value;
        this.teamMemberUserIdLowerCase = this.teamMemberUserId.toLocaleLowerCase();
        // he entered user id on the login screen
        //sessionStorage.setItem("ssUserId", ev.target.value) //cursor woes
    } // end teamMemberUserIdChg
    teamMemberPassChg(ev) {
        console.log('running wws passChg');
        this.teamMemberPass = ev.target.value;
    } // end teamMemberPassChg
    doSign() {
        console.log('^^^running wws doSign');
        this.msg1 = 'attempting login ...';
        if (this.teamMemberUserId.length == 0) {
            this.msg1 = 'please enter your User Id.';
        }
        else {
            if (this.teamMemberPass.length == 0) {
                this.msg1 = 'please enter your password.';
            }
            else {
                this.goTrueSignOn(); // dec 2022 has chaining
            }
        }
    } // end doSign
    goTrueSignOn() {
        console.log('running goTrueSignOn');
        this.authGoTrue.login(this.teamMemberUserId, this.teamMemberPass)
            .then(() => {
            this.msg1 = 'Login OK, looking up Team Member info...';
            console.log(this.msg1);
            if (this.faunaOrSupabaseIn == 'fauna') {
                this.launchReadFaunaTeamMember();
            }
            if (this.faunaOrSupabaseIn == 'supabase') {
                this.supaKeyFlds = { 'userId': this.teamMemberUserIdLowerCase };
                this.launchReadSupabase('qtTeamMembers', this.supaKeyFlds);
            }
        }) // end then
            .catch((err) => {
            let myErrDesc = JSON.stringify(err.json.error_description);
            myErrDesc = myErrDesc.replace('"', '').replace('"', '');
            this.msg1 = myErrDesc;
        }); // end catch
        console.log('end goTrueSignon');
        // let myErr = '???'
    } // end goTrueSignOn
    // goTrue has .login and .catch -- tried to convert to async await,
    // but .catch is needed for invalid signon. For wider use catch, nice tutorial here:
    // https://wesbos.com/javascript/12-advanced-flow-control/71-async-await-error-handling
    launchReadFaunaTeamMember() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchReadFaunaTeamMember');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadTeamMembers(this.teamMemberUserIdLowerCase);
            this.faunaData = faunaRes.map(f => f.data);
            this.teamMembersArray = this.faunaData;
            console.log('list of faunaData teamMembers we just read:'); // (likey just one)
            console.table(this.faunaData);
            this.teamMemberObj = this.faunaData[0];
            this.authIn = true;
            this.teamMemberObjOut.emit(this.teamMemberObj);
            this.qncSetAuthOnOut.emit();
            this.proJumpOut.emit();
        });
    } // end launchReadFaunaTeamMember
    launchReadSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(Date.now() / 10000, '149 wws running launchReadSupabase...');
            console.table(flds);
            let supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].readSupabase(tbl, flds);
            console.log(Date.now() / 10000, 'done waiting for apiSupabase.  supaRes:');
            console.log(supaRes); //supaRes is only a promise unless I await. 
            //supaRes is null if fieldname is wrong.
            //supaRes is an empty object if not found.
            this.supaData = supaRes.supabaseData;
            this.teamMembersArray = this.supaData.slice();
            this.teamMemberObj = this.teamMembersArray[0];
            // console.log('162 wws teamMemberObj:')
            // console.table(this.teamMemberObj)
            this.authIn = true;
            this.teamMemberObjOut.emit(this.teamMemberObj);
            this.qncSetAuthOnOut.emit();
            this.proJumpOut.emit();
            console.log(Date.now() / 10000, '164 wws end of launchReadSupabase.');
        });
    } // end launchReadSupabase
    togglePasswordEye(ev) {
        let el = document.getElementById('password');
        let elType = el.getAttribute('type');
        if (elType == 'password') {
            el.setAttribute('type', 'text');
            this.passwordShown = 'yes';
        }
        else {
            el.setAttribute('type', 'password');
            this.passwordShown = 'no';
        } // end if
        // he clicked the eye, turn off the tooltip
        this.eyeToolTipText = '';
    } // endtogglePasswordEye
    tooltipsy(ev) {
        console.log('running tooltipsy'); // launched from html mouseover, mouseout
        if (ev.type == 'mouseover') {
            if (this.passwordShown == 'yes') {
                this.eyeToolTipText = ' <- hide password';
            }
            else {
                this.eyeToolTipText = ' <- show password';
            } // end inner if
        } // end outer if
        if (ev.type == 'mouseout') {
            this.eyeToolTipText = '';
        } // end if
    } // end tooltipsy
} // end export QncwwsComponent
QncwwsComponent.ɵfac = function QncwwsComponent_Factory(t) { return new (t || QncwwsComponent)(); };
QncwwsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QncwwsComponent, selectors: [["app-qncwws"]], inputs: { authIn: "authIn", firstLoginIn: "firstLoginIn", faunaOrSupabaseIn: "faunaOrSupabaseIn" }, outputs: { proJumpOut: "proJumpOut", teamMemberObjOut: "teamMemberObjOut", qncSetAuthOnOut: "qncSetAuthOnOut" }, decls: 21, vars: 5, consts: [["class", "ml-3 mt-1 tag is-dark is-small is-vcentered", 4, "ngIf"], [1, "columns"], [1, "column", "is-5-tablet", "is-4-desktop", "is-3-widescreen"], [1, "box", "ml-3", "mt-3", "has-background-success-light"], [1, "field"], ["for", "", 1, "label"], ["id", "teamMemberUserId", "placeholder", "my user Id", 1, "input", 3, "value", "change"], ["type", "password", "id", "password", "placeholder", "my Qnc password", 1, "input", 3, "value", "change"], [1, "is-clickable", 3, "click", "mouseover", "mouseout"], ["id", "eyeToolTip", 1, "noClass"], [1, "button", "is-link", "is-left", "is-small", "is-outlined", 3, "click"], ["class", "ml-3 mr-3 mt-3 box has-background-danger-light", 4, "ngIf"], [1, "ml-3", "mt-1", "tag", "is-dark", "is-small", "is-vcentered"], [1, "ml-3", "mr-3", "mt-3", "box", "has-background-danger-light"], ["cols", "120", "rows", "20", 1, "has-background-danger-light", "ml-3", "pl-3"]], template: function QncwwsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, QncwwsComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section")(2, "div", 1)(3, "div", 2)(4, "span", 3)(5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function QncwwsComponent_Template_input_change_8_listener($event) { return ctx.teamMemberUserIdChg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function QncwwsComponent_Template_input_change_12_listener($event) { return ctx.teamMemberPassChg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QncwwsComponent_Template_span_click_13_listener($event) { return ctx.togglePasswordEye($event); })("mouseover", function QncwwsComponent_Template_span_mouseover_13_listener($event) { return ctx.tooltipsy($event); })("mouseout", function QncwwsComponent_Template_span_mouseout_13_listener($event) { return ctx.tooltipsy($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\uD83D\uDC41\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 4)(18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QncwwsComponent_Template_button_click_18_listener() { return ctx.doSign(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, QncwwsComponent_section_20_Template, 5, 0, "section", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.teamMemberUserId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.teamMemberPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.eyeToolTipText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showdevNotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 3377:
/*!**********************************************!*\
  !*** ./src/app/qncwwsr/qncwwsr.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwsrComponent": () => (/* binding */ QncwwsrComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/colSortFilt */ 4362);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function QncwwsrComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwsrComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_5_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.colSort("qCnt", "des", "qCnt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_5_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.colSort("qCnt", "asc", "qCnt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_5_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.colFilt("qCnt", "question count"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.symFilt, " ");
} }
function QncwwsrComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_8_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.colSort("maxPoints", "des", "maxPoints"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_8_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.colSort("maxPoints", "asc", "maxPoints"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_8_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.colFilt("maxPoints", "max points"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.symFilt, " ");
} }
function QncwwsrComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_11_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.colSort("scoreboardNbr", "des", "Scoreboard Nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_11_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.colSort("scoreboardNbr", "asc", "Scoreboard Nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_11_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.colFilt("scoreboardNbr", "scoreboard Nbr"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.symFilt, " ");
} }
function QncwwsrComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_14_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.colSort("scoreboardName", "des", "Scoreboard Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_14_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.colSort("scoreboardName", "asc", "Scoreboard Name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_div_14_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.colFilt("scoreboardName", "scoreboard"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symArDn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symArUp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.symFilt, " ");
} }
function QncwwsrComponent_tr_21_ng_container_1_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const r_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", r_r25.rangeName, " ");
} }
function QncwwsrComponent_tr_21_ng_container_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QncwwsrComponent_tr_21_ng_container_1_ng_container_12_ng_container_1_Template, 3, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const r_r25 = ctx.$implicit;
    const s_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", r_r25.scoreboardNbr == s_r22.scoreboardNbr && r_r25.rCnt <= 4);
} }
function QncwwsrComponent_tr_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td")(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td")(5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, QncwwsrComponent_tr_21_ng_container_1_ng_container_12_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_tr_21_ng_container_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const s_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.detailButClick(s_r22.scoreboardNbr); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const s_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r22.qCnt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r22.maxPoints, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r22.scoreboardNbr, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r22.scoreboardName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.scoreboardRangesIn);
} }
function QncwwsrComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QncwwsrComponent_tr_21_ng_container_1_Template, 16, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r22.filterInOut == "in");
} }
class QncwwsrComponent {
    constructor() {
        this.rulesArray = [];
        this.msg1 = '?';
        this.scoreboardNbrOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.scoreboardsOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.scoreboardRangesOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.wwsrdJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.colHeadSf = false;
        this.colSortByArray = [];
        this.symArUp = '\u{2191}';
        this.symArDn = '\u{2193}';
        this.symFilt = '\u{2207}';
    }
    ngOnInit() {
        console.log('running wwsr ngOnInit');
        this.msg1 = 'scoreboard list ';
        if (this.scoreboardsIn.length == 0) {
            this.msg1 = "No scoreboards exist. Click the 'add new' button.";
        }
        if (this.filterResetIn) {
            this.resetScoreboardFilter();
        }
        this.countQuestionsPerScoreboard();
        this.countRanges(); // hack to keep track of range counts on-screen
    } // end ngOnInit
    detailButClick(scoreboardNbrParmIn) {
        console.log('running wwsr detailButClick:', scoreboardNbrParmIn);
        //  jump out of wwsr and tell caller what we were working on
        this.scoreboardNbrOut.emit(scoreboardNbrParmIn);
        this.scoreboardsOut.emit(this.scoreboardsIn);
        this.scoreboardRangesOut.emit(this.scoreboardRangesIn);
        this.wwsrdJumpOut.emit();
    }
    colHeadClick(c) {
        // hide/show sort & filter icons in  table header  
        if (this.colHeadSf == true) {
            this.colHeadSf = false;
            if (this.msg1 == 'click an icon to sort or filter.') {
                this.msg1 = '';
            }
        }
        else {
            this.colHeadSf = true;
            this.msg1 = 'click an icon to sort or filter.';
        } // end if
    } // end colHeadClick
    colSort(fieldName, ascDes, fieldMsg) {
        let colSortOut = src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__["default"].colSort(this.scoreboardsIn, fieldName, ascDes, fieldMsg);
        this.scoreboardsIn = colSortOut[0]; // not really needed cuz shallow/deep copy rules
        this.msg1 = colSortOut[3];
    } // end colSort
    colFilt(fn, pt) {
        console.log('running colFilt ', fn, pt);
        let filtWord = prompt('Filter ' + pt);
        this.resetScoreboardFilter();
        let colFiltOut = src_utils_colSortFilt__WEBPACK_IMPORTED_MODULE_0__["default"].colFilt(this.scoreboardsIn, fn, pt, filtWord);
        this.scoreboardsIn = colFiltOut[0]; // not really needed cuz shallow/deep copy rules
        this.msg1 = colFiltOut[1];
    } // end colFilt 
    addButClick() {
        console.log('running addButClick');
        this.scoreboardNbrOut.emit(-1); //-1  no questions yet
        this.wwsrdJumpOut.emit();
    }
    resetScoreboardFilter() {
        //this.msg1 = 'Filter is reset.'  
        for (let i = 0; i < this.scoreboardsIn.length; i++) {
            this.scoreboardsIn[i]['filterInOut'] = 'in';
        }
    } // end resetScoreboardFilter
    countQuestionsPerScoreboard() {
        console.log('running wwg countQuestionsPerScoreboard');
        // for each scoreboard, find all questions that add to this scoreboard.
        // for each question that adds to this scoreboard,
        // look thru the question's accum array.
        // for each question's accum, find the max val that can be added.
        let qCnt = 0;
        let biggestNbr = 0;
        let maxPoints = 0;
        for (let i = 0; i < this.scoreboardsIn.length; i++) {
            qCnt = 0;
            maxPoints = 0;
            biggestNbr = 0;
            for (let j = 0; j < this.questionsIn.length; j++) {
                for (let k = 0; k < this.questionsIn[j].accum.length; k++) {
                    if (this.questionsIn[j].accum[k] == this.scoreboardsIn[i].scoreboardName) {
                        qCnt = qCnt + 1;
                        // max is complicated.  sheesh.
                        biggestNbr = Math.max.apply(Math, this.questionsIn[j].acaPointVals);
                        maxPoints = maxPoints + biggestNbr;
                    } // end if
                } // end inner for
            } // end middle for
            this.scoreboardsIn[i].qCnt = qCnt.toString();
            this.scoreboardsIn[i].maxPoints = maxPoints.toString();
        } // end outer for
    } // end fun countQuestionsPerScoreboard
    countRanges() {
        let priorScoreboardNbr = 'none';
        let rangeCount = 1;
        for (let i = 0; i < this.scoreboardRangesIn.length; i++) {
            if (this.scoreboardRangesIn[i].scoreboardNbr == priorScoreboardNbr) {
                rangeCount = rangeCount + 1;
            }
            else { // new scoreboard nbr
                priorScoreboardNbr = this.scoreboardRangesIn[i].scoreboardNbr;
                rangeCount = 1;
            }
            this.scoreboardRangesIn[i]['rCnt'] = rangeCount;
        } // end for
    }
} // end export component
QncwwsrComponent.ɵfac = function QncwwsrComponent_Factory(t) { return new (t || QncwwsrComponent)(); };
QncwwsrComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QncwwsrComponent, selectors: [["app-qncwwsr"]], inputs: { custIn: "custIn", qidIn: "qidIn", scoreboardsIn: "scoreboardsIn", scoreboardRangesIn: "scoreboardRangesIn", filterResetIn: "filterResetIn", questionsIn: "questionsIn" }, outputs: { scoreboardNbrOut: "scoreboardNbrOut", scoreboardsOut: "scoreboardsOut", scoreboardRangesOut: "scoreboardRangesOut", wwsrdJumpOut: "wwsrdJumpOut" }, decls: 22, vars: 6, consts: [["class", "tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], [1, "table", "is-fullwidth", "ml-3", "mr-3", "mb-3"], [1, "is-clickable", 3, "click"], ["class", "tags has-addons is-flex-wrap-nowrap", 4, "ngIf"], [1, "button", "is-small", "is-info", 3, "click"], ["class", "has-background-success-light", 4, "ngFor", "ngForOf"], [1, "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, "tags", "has-addons", "is-flex-wrap-nowrap"], [1, "tag", "is-link", "is-light", 3, "click"], [1, "has-background-success-light"], [4, "ngIf"], [1, "tag"], [4, "ngFor", "ngForOf"], [1, "has-text-weight-semiboldy"]], template: function QncwwsrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QncwwsrComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1)(2, "thead")(3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_Template_th_click_3_listener() { return ctx.colHeadClick("qCnt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Question Count ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, QncwwsrComponent_div_5_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_Template_th_click_6_listener() { return ctx.colHeadClick("maxPoints"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Max Points ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, QncwwsrComponent_div_8_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_Template_th_click_9_listener() { return ctx.colHeadClick("scoreboardNbr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Nbr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, QncwwsrComponent_div_11_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_Template_th_click_12_listener() { return ctx.colHeadClick("scoreboard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Scoreboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, QncwwsrComponent_div_14_Template, 8, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_Template_th_click_15_listener() { return ctx.colHeadClick("rangeTxt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Ranges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th")(18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QncwwsrComponent_Template_button_click_18_listener() { return ctx.addButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " add new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, QncwwsrComponent_tr_21_Template, 2, 1, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.colHeadSf);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.scoreboardsIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 1092:
/*!************************************************!*\
  !*** ./src/app/qncwwsrd/qncwwsrd.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwsrdComponent": () => (/* binding */ QncwwsrdComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiSupabase */ 2979);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function QncwwsrdComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwsrdComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " are you sure you want to delete? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwsrdComponent_span_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.proceedWithDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " delete now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwsrdComponent_span_1_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.cancelDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function QncwwsrdComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Scoreboard Seq: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "input", 6, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwsrdComponent_tr_30_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.scoreboardSeqChg(_r8.value, ctx_r9.sx); })("blur", function QncwwsrdComponent_tr_30_Template_input_blur_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.handleBlur("scoreboardSeq"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r3.scoreboardsIn[ctx_r3.sx].scoreboardSeq);
} }
function QncwwsrdComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwsrdComponent_tr_49_Template_input_change_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const rx_r13 = restoredCtx.index; const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.rangeNameChg(_r14.value, rx_r13); })("blur", function QncwwsrdComponent_tr_49_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.handleBlur("rangeName"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td")(7, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwsrdComponent_tr_49_Template_input_change_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const rx_r13 = restoredCtx.index; const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.rangeStartChg(_r15.value, rx_r13); })("blur", function QncwwsrdComponent_tr_49_Template_input_blur_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.handleBlur("rangeStart"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "input", 21, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwsrdComponent_tr_49_Template_input_change_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const rx_r13 = restoredCtx.index; const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.rangeEndChg(_r16.value, rx_r13); })("blur", function QncwwsrdComponent_tr_49_Template_input_blur_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.handleBlur("rangeEnd"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td")(13, "textarea", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwsrdComponent_tr_49_Template_textarea_change_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const rx_r13 = restoredCtx.index; const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.rangeTxtChg(_r17.value, rx_r13); })("blur", function QncwwsrdComponent_tr_49_Template_textarea_blur_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.handleBlur("rangeTxt"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td")(17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwsrdComponent_tr_49_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const rx_r13 = restoredCtx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.delRangeButClick(rx_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " delete range");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const r_r12 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", r_r12.rangeNbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", r_r12.rangeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", r_r12.rangeStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", r_r12.rangeEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("rows", ctx_r4.rangeTxtRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cols", ctx_r4.rangeTxtCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", r_r12.rangeTxt);
} }
class QncwwsrdComponent {
    constructor() {
        this.wwsrJumpOut = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.msg1 = 'edit scoreboard.';
        this.sx = -1;
        this.scoreboardObj = {};
        this.rangeObj = {};
        this.rangeTxtCols = 75;
        this.rangeTxtRows = 3;
        this.verifyDelete = false;
        this.fieldsDisabled = false;
        this.someFieldWasChanged = false;
        this.rangeArray = [];
        this.supaFlds = {};
        this.supaRes = {};
        this.supaDataObj = {};
        this.faunaDataObj = {};
    }
    ngOnInit() {
        console.log('running wwsrd ngOnInit');
        this.sx = this.scoreboardsIn.length - 1;
        if (this.scoreboardNbrIn == -1) { //he clicked add New on prior screen
            this.addButClick();
        }
        else {
            this.sx = this.scoreboardsIn
                .findIndex(s => s.scoreboardNbr == this.scoreboardNbrIn);
            this.rangeArray = this.scoreboardRangesIn
                .filter(r => r.scoreboardNbr == this.scoreboardNbrIn);
        } // end if
    } // end ngOnInit
    prevButClick() {
        console.log('running prevButClick');
        this.msg1 = 'first scoreboard shown.'; //might be overwritten below
        let loopSx = this.sx;
        while (loopSx > 0) {
            loopSx = loopSx - 1;
            if (this.scoreboardsIn[loopSx].filterInOut == 'in') {
                this.sx = loopSx;
                this.msg1 = 'previous scoreboard shown.';
                // this is a rec we want to show. sx is set.
                this.rangeArray = this.scoreboardRangesIn
                    .filter(r => r.scoreboardNbr == this.scoreboardsIn[this.sx].scoreboardNbr);
                loopSx = 0; // exit the while loop
            } // end if filter
        } // end while loopSx
    } // end prevButClick
    nextButClick() {
        console.log('running nextButClick');
        this.msg1 = 'last scoreboard shown.'; //might be overwritten below
        let loopSx = this.sx;
        while (loopSx < this.scoreboardsIn.length - 1) {
            loopSx = loopSx + 1;
            if (this.scoreboardsIn[loopSx].filterInOut == 'in') {
                this.sx = loopSx;
                this.msg1 = 'next scoreboard shown.';
                // this is a rec we want to show. sx is set.
                this.rangeArray = this.scoreboardRangesIn
                    .filter(r => r.scoreboardNbr == this.scoreboardsIn[this.sx].scoreboardNbr);
                loopSx = 9999; // exit the while loop
            } // end if filter
        } // end while loopSx
    } // end nextButClick
    addButClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running addButClick');
            this.fieldsDisabled = true;
            this.msg1 = 'adding a scoreboard ...';
            let newScoreboardNbr = '01'; // might be overwritten below
            if (this.scoreboardsIn.length > 0) {
                //  set new scoreboard nbr to one bigger than max scoreboard nbr
                let scoreboardNbrMax = Math.max.apply(Math, this.scoreboardsIn.map(function (s) { return s.scoreboardNbr; }));
                newScoreboardNbr = (scoreboardNbrMax + 1).toString().padStart(2, '0');
            } // end if scoreboardsIn.length > 0
            let newScoreboardName = 'newBoard' + newScoreboardNbr;
            let newScoreboardSeq = newScoreboardNbr; // why seq? assess report shows scoreboards in sequence.
            // someday setDefaultRanges here
            // 1 add a scoreboard row to the scoreboardsIn array,
            // 2 then add a rec to the db. 
            // 3 after db add, set scoreboardsIn[sx].id from supaDataObj
            this.scoreboardObj = {
                cust: this.custIn,
                qid: this.qidIn,
                scoreboardNbr: newScoreboardNbr,
                scoreboardName: newScoreboardName,
                filterInOut: 'in',
                scoreboardSeq: newScoreboardSeq // seq might be an extra unused field
            }; // end set scoreboardObj 
            this.scoreboardsIn.push(this.scoreboardObj);
            this.sx = this.scoreboardsIn.length - 1;
            console.log('104 adding a new scoreboard');
            if (this.faunaOrSupabaseIn == 'fauna') {
                this.launchAddFaunaScoreboard();
            }
            if (this.faunaOrSupabaseIn == 'supabase') {
                this.supaFlds = this.scoreboardObj;
                yield this.launchAddSupabase('qtScoreboards', this.supaFlds);
                // id is from supabase (after supabase add, supaDataObj is set)
                // we gotta wait for launchAddSupabase to finish,
                // cuz supaDataObj will be blank until then,
                // and we want to get the new id from scoreboardObj.
                console.log('114 wsrd supaDataObj id:');
                console.log(this.supaDataObj['id']);
                console.log(this.sx);
                // if(this.supaDataObj['id'] === undefined ){ alert() }
                this.scoreboardsIn[this.sx]['id'] = this.supaDataObj['id'];
                console.table(this.scoreboardsIn); // billy kill this after debug.
            } // end if supabase
            this.scoreboardNbrIn = newScoreboardNbr;
            this.rangeArray = []; // show blank ranges for the newly added scoreboard:
            this.msg1 = 'scoreboard added.';
            this.fieldsDisabled = false;
            console.table(this.scoreboardsIn);
        });
    } // end addButClick
    delButClick() {
        this.msg1 = '';
        this.verifyDelete = true;
        this.fieldsDisabled = true;
        window.scrollTo(0, 0); // 'are you sure?' shows at the top
    } // end delButClick
    proceedWithDelete() {
        console.log('running proceedWithDelete');
        this.msg1 = 'deleting...';
        this.verifyDelete = false;
        this.fieldsDisabled = false;
        // notice no await here, cuz we don't use anything from supabase response.
        // 1 for the scoreboard we are deleting, kill all ranges from two range arrays & db
        // 2 delete the scoreboard rec from the db
        // 3 remove scoreboard from scoreboardsIn array.
        // 4 re-position scoreboardsIn to show an adjacent scoreboard on-screen
        // 5 re-establish rangeArray for the adjacent scoreboard.
        // remember the scoreboard we are deleting:
        let scoreboardNbrWork = this.scoreboardsIn[this.sx].scoreboardNbr;
        // kill all the ranges for this scoreboard: 
        let rl = this.rangeArray.length;
        for (let i = rl - 1; i >= 0; i--) {
            console.log('152 deleting a range');
            this.delRange(i);
        } // end for
        //  delete the db scoreboard 
        this.buildScoreboardObj(this.sx);
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchDeleteFaunaScoreboard();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.supaFlds = this.scoreboardObj;
            this.launchDelSupabase('qtScoreboards', this.supaFlds);
            // this.launchDelSupabase('qtScoreboardRanges',this.supaFlds)
        }
        // remove the scoreboard from the scoreboardsIn array:
        this.scoreboardsIn.splice(this.sx, 1);
        // after he deletes a scoreboard, show adjacent scoreboard on screen.
        //sx is all set, cuz splice was done.
        if (this.sx > this.scoreboardsIn.length - 1) { // he deleted last rec.
            this.sx = this.scoreboardsIn.length - 1;
        } // end 
        if (this.scoreboardsIn.length == 0) {
            //billy, maybe tell him nicer, that we will jump to the list screen.
            alert('no scoreboards left. Leaving this screen.');
            this.wwsrJumpOut.emit();
        } // end if, no scoreboards left
        // show ranges for the newly shown adjacent scoreboard
        this.rangeArray = this.scoreboardRangesIn
            .filter(r => r.scoreboardNbr == this.scoreboardsIn[this.sx].scoreboardNbr);
        this.msg1 = 'scoreboard ' + scoreboardNbrWork + ' deleted.';
    } // end proceedWithDelete
    cancelDelete() {
        this.verifyDelete = false;
        this.fieldsDisabled = false;
    } // end cancelDelete
    saveScoreboard(sx) {
        console.log('running wwsrd saveScoreboard');
        this.msg1 = 'saving...';
        this.someFieldWasChanged = true;
        this.buildScoreboardObj(sx);
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchUpdateFaunaScoreboard();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.supaFlds = this.scoreboardObj;
            this.launchChgSupabase('qtScoreboards', this.supaFlds);
        }
        this.msg1 = 'scoreboard saved.';
    } // end saveScoreboard
    saveRange(rx) {
        console.log('231 running saveRange');
        this.buildRangeObj(rx);
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchUpdateFaunaScoreboardRange();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.supaFlds = this.rangeObj;
            this.launchChgSupabase('qtScoreboardRanges', this.supaFlds);
        }
        // a range is uniquely identified by 
        // cust + qid + scoreboardNbr + rangeNbr
    } // end saveRange
    buildScoreboardObj(i) {
        console.log('running buildScoreboardObj');
        this.scoreboardObj =
            {
                cust: this.custIn,
                qid: this.qidIn,
                scoreboardNbr: this.scoreboardsIn[i].scoreboardNbr,
                scoreboardName: this.scoreboardsIn[i].scoreboardName,
                scoreboardSeq: this.scoreboardsIn[i].scoreboardSeq,
            };
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.scoreboardObj['id'] = this.scoreboardsIn[this.sx]['id'];
        } // end if
        console.table(this.scoreboardObj);
    } // end buildScoreboardObj
    buildRangeObj(rx) {
        console.log('running buildRangeObj');
        console.table(this.rangeArray);
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.rangeObj =
                {
                    id: this.rangeArray[rx].id,
                    cust: this.custIn,
                    qid: this.qidIn,
                    scoreboardNbr: this.rangeArray[rx].scoreboardNbr,
                    rangeNbr: this.rangeArray[rx].rangeNbr,
                    rangeName: this.rangeArray[rx].rangeName,
                    rangeStart: this.rangeArray[rx].rangeStart,
                    rangeEnd: this.rangeArray[rx].rangeEnd,
                    rangeTxt: this.rangeArray[rx].rangeTxt
                };
        } // end if
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.rangeObj =
                {
                    cust: this.custIn,
                    qid: this.qidIn,
                    scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                    rangeNbr: this.rangeArray[rx].rangeNbr,
                    rangeName: this.rangeArray[rx].rangeName,
                    rangeStart: this.rangeArray[rx].rangeStart,
                    rangeEnd: this.rangeArray[rx].rangeEnd,
                    rangeTxt: this.rangeArray[rx].rangeTxt
                };
        } // end if
        // default rangeObj values from screen display. 
        // one of these values will change after calling this func.
    } // end buildRangeObj
    addRangeButClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running addRangeButClick');
            // he wants to add a range.
            //  we want to push a range object into scoreboardRanges table.
            // set max:
            let newRangeNbr = '01';
            if (this.rangeArray.length > 0) {
                let rangeNbrMax = Math.max.apply(Math, this.rangeArray.map(function (r) { return r.rangeNbr; }));
                newRangeNbr = (rangeNbrMax + 1).toString().padStart(2, '0');
            }
            this.rangeObj = {
                cust: this.custIn,
                qid: this.qidIn,
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeNbr: newRangeNbr,
                rangeName: 'range' + newRangeNbr,
                rangeStart: '0',
                rangeEnd: '999',
                rangeTxt: 'the meaning of this range is _____.'
            };
            if (this.faunaOrSupabaseIn == 'fauna') {
                this.launchAddFaunaScoreboardRange();
            }
            if (this.faunaOrSupabaseIn == 'supabase') {
                this.supaFlds = this.rangeObj;
                yield this.launchAddSupabase('qtScoreboardRanges', this.supaFlds);
                // id is from supabase (after supabase add, supaData is set)
                // we gotta wait for launchAddSupabase to finish,
                // cuz supaDataObj will be blank until then,
                // and we want to get the new id into rangeObj.
                this.rangeObj = this.supaDataObj;
            } // end if supabase
            this.scoreboardRangesIn.push(this.rangeObj);
            this.rangeArray.push(this.rangeObj);
            this.msg1 = 'range added.';
        });
    } // end addRange
    delRangeButClick(rx) {
        console.log('running delRangeButClick');
        this.delRange(rx);
    } // end delRangeButClick
    delRange(rx) {
        console.log('running delRange');
        // console.log(this.rangeArray[rx].id)
        this.buildRangeObj(rx);
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchDeleteFaunaScoreboardRange();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.supaFlds = this.rangeObj;
            this.launchDelSupabase('qtScoreboardRanges', this.supaFlds);
        }
        let rrx = this.scoreboardRangesIn
            .findIndex(rr => rr.scoreboardNbr == this.scoreboardNbrIn
            && rr.rangeNbr == this.rangeArray[rx].rangeNbr);
        this.scoreboardRangesIn.splice(rrx, 1);
        // console.log('293 scoreboardRangesIn:')
        // console.table(this.scoreboardRangesIn)
        this.rangeArray.splice(rx, 1); //removes one row from rangeArray
        this.msg1 = 'range deleted.';
    } //end delRange
    launchAddFaunaScoreboard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwsrd launchAddScoreboard');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtAddScoreboard(this.scoreboardObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj scoreboard we just added:');
            console.table(this.faunaDataObj);
        });
    } // end launchAddFaunaScoreboard
    launchUpdateFaunaScoreboard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwsrd launchUpdateFaunaScoreboard');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtUpdateScoreboard(this.scoreboardObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj scoreboard we just updated:');
            console.table(this.faunaDataObj);
        });
    } // end launchUpdateFaunaScoreboard
    launchDeleteFaunaScoreboard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwsrd launchDeleteFaunaScoreboard');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtDeleteScoreboard(this.scoreboardObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj scoreboard we just deleted:');
            console.table(this.faunaDataObj);
        });
    } // end launchDeleteFaunaScoreboard
    launchAddFaunaScoreboardRange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwsrd launchAddFaunaScoreboardRange');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtAddScoreboardRange(this.rangeObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj range we just added:');
            console.table(this.faunaDataObj);
        });
    } // end launchAddFaunaScoreboardRange
    launchUpdateFaunaScoreboardRange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwsrd launchUpdateScoreboardRange');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtUpdateScoreboardRange(this.rangeObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj range we just updated:');
            console.table(this.faunaDataObj);
        });
    } // end launchUpdateScoreboardRange
    launchDeleteFaunaScoreboardRange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwsrd launchDeleteScoreboardRange');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtDeleteScoreboardRange(this.rangeObj);
            this.faunaDataObj = faunaRes.data;
            console.log('faunaDataObj range we just deleted:');
            console.table(this.faunaDataObj);
        });
    } // end launchDeleteFaunaScoreboardRange
    launchAddSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchAddSupabase.  flds:');
            console.table(flds);
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].addSupabase(tbl, flds);
            this.supaDataObj = this.supaRes['supabaseData'][0];
            // supaRes has mult components, one is a supabaseData array.
            // the first entry in the supabaseData array is the object.
            // we want this data cuz it has the new id.
        });
    } // end launchAddSupabase
    launchDelSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchDelSupabase.  flds:');
            console.table(flds);
            console.table(this.scoreboardsIn);
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].delSupabase(tbl, flds);
        });
    } // end launchDelSupabase
    launchChgSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchChgSupabase.  flds:');
            console.table(flds);
            this.supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].chgSupabase(tbl, flds);
        });
    } // end launchChgSupabase
    scoreboardNameChg(newScoreboardName, sx) {
        console.log('running scoreboardNameChg');
        this.msg1 = 'scoreboard name changed. ';
        this.scoreboardsIn[sx].scoreboardName = newScoreboardName.trim();
        this.saveScoreboard(sx);
    } // end scoreboardNameChg
    scoreboardSeqChg(newScoreboardSeq, sx) {
        console.log('running scoreboardSeqChg');
        this.msg1 = 'scoreboard seq changed. ';
        this.scoreboardsIn[sx].scoreboardSeq = newScoreboardSeq.trim();
        this.saveScoreboard(sx);
    } // end scoreboardSeqChg
    rangeNameChg(newRangeName, rx) {
        console.log('running rangeNameChg');
        this.msg1 = 'range name changed. ';
        this.rangeArray[rx].rangeName = newRangeName.trim();
        this.saveRange(rx);
    } // end rangeNameChg
    rangeStartChg(newRangeStart, rx) {
        // he changed the range start  
        console.log('running wwsrd rangeStartChg');
        this.msg1 = 'range start changed. ';
        this.rangeArray[rx].rangeStart = newRangeStart.trim();
        this.saveRange(rx);
    } // end rangeStartChg
    rangeEndChg(newRangeEnd, rx) {
        // he changed the range end  
        console.log('running wwsrd rangeEndChg');
        this.msg1 = 'range end changed. ';
        this.rangeArray[rx].rangeEnd = newRangeEnd.trim();
        this.saveRange(rx);
    } // end rangeEndChg
    rangeTxtChg(newRangeTxt, rx) {
        // he changed the range txt  
        console.log('running wwsrd rangeTxtChg');
        this.msg1 = 'range text changed. ';
        this.rangeArray[rx].rangeTxt = newRangeTxt.trim();
        this.saveRange(rx);
    } // end rangeTxtChg
    handleBlur(inputFieldNameParmIn) {
        console.log('running handleBlur');
        // lotsa work just to set msg1 when he exits a field (blur)
        if (this.someFieldWasChanged) {
            this.someFieldWasChanged = false;
        }
        else {
            this.msg1 = 'edit scoreboard.';
        }
        this.someFieldWasChanged = false;
    } // end handleBlur
    setDefaultRanges(questCount, biggestChoice) {
        // selzer Dec 2022 automatically compute ranges,
        // based on the questions that are already setup
        // how many questions add to this scoreboard?
        // if he hits the biggest choice, how many points is this?
        // (assume all questions have the same biggest choice)
        // assume he will first setup questions,
        // then setup scoreboards for these questions,
        // then setup ranges for the scoreboards.
        questCount = 10; // temp, kill later
        biggestChoice = 8; // temp, kill later
        let maxPoints = questCount * biggestChoice;
        // count questions for this scoreboard
        // look thru all questions, find biggestChoice
        let vlBottom = 0;
        let vlTop = maxPoints * .25; //20
        let qlBottom = maxPoints * .25 + .001; //around 20 
        let qlTop = maxPoints * .3125; //25
        let rlBottom = maxPoints * .3125 + .001; //around 25
        let rlTop = maxPoints * .4375; //35
        let mlBottom = maxPoints * .4375; //35
        let mlTop = maxPoints * .5 - .001; //around 40
        let mllBottom = maxPoints * .5; //40
        let mllTop = maxPoints * .5625 - .001; // around 45
        let emBottom = maxPoints * .5625; //45
        let emTop = maxPoints * .5625; //45
        let mlhBottom = maxPoints * .5625 + .001; // around 45
        let mlhTop = maxPoints - (maxPoints * .375); //50
        let mhBottom = maxPoints - (maxPoints * .375) + .001; //around 50
        let mhTop = maxPoints - (maxPoints * .3125); //55
        let rhBottom = maxPoints - (maxPoints * .3125) + .001; //around 55
        let rhTop = maxPoints - (maxPoints * .1875); //65 
        let qhBottom = maxPoints - (maxPoints * .1875) + .001; //around 65
        let qhTop = maxPoints - (maxPoints * .125) - .001; //around 70
        let vhBottom = maxPoints - (maxPoints * .125); // 70 
        let vhTop = maxPoints;
        // console.log('vl range: ',vlBottom,vlTop)
        // console.log('ql range: ',qlBottom,qlTop)
        // console.log('rl range: ',rlBottom,rlTop)
        console.log('mlh range: ', mlhBottom, mlhTop);
        // console.log('em range: ',emBottom,emTop)
        this.rangeArray = [
            {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'very low',
                rangeNbr: '01',
                rangeStart: '00',
                rangeEnd: vlTop.toString(),
                rangeTxt: 'very low'
            }, {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'quite low',
                rangeNbr: '02',
                rangeStart: qlBottom.toString(),
                rangeEnd: qlTop.toString(),
                rangeTxt: 'quite low'
            }, {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'reasonably low',
                rangeNbr: '03',
                rangeStart: rlBottom.toString(),
                rangeEnd: rlTop.toString(),
                rangeTxt: 'reasonably low'
            }, {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'middle low',
                rangeNbr: '04',
                rangeStart: mlBottom.toString(),
                rangeEnd: mlTop.toString(),
                rangeTxt: 'middle low'
            }, {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'middle leaning low',
                rangeNbr: '05',
                rangeStart: mllBottom.toString(),
                rangeEnd: mllTop.toString(),
                rangeTxt: 'middle leaning low'
            }, {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'exact middle',
                rangeNbr: '06',
                rangeStart: emBottom.toString(),
                rangeEnd: emTop.toString(),
                rangeTxt: 'exact middle'
            }, {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'middle leaning high',
                rangeNbr: '07',
                rangeStart: mlhBottom.toString(),
                rangeEnd: mlhTop.toString(),
                rangeTxt: 'middle leaning high'
            }, {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'middle high',
                rangeNbr: '08',
                rangeStart: mhBottom.toString(),
                rangeEnd: mhTop.toString(),
                rangeTxt: 'middle high'
            }, {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'reasonably high',
                rangeNbr: '09',
                rangeStart: rhBottom.toString(),
                rangeEnd: rhTop.toString(),
                rangeTxt: 'reasonably high'
            }, {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'quite high',
                rangeNbr: '10',
                rangeStart: qhBottom.toString(),
                rangeEnd: qhTop.toString(),
                rangeTxt: 'quite high'
            }, {
                scoreboardNbr: this.scoreboardsIn[this.sx].scoreboardNbr,
                rangeName: 'very high',
                rangeNbr: '11',
                rangeStart: vhBottom.toString(),
                rangeEnd: vhTop.toString(),
                rangeTxt: 'very high'
            }
            //billy, now ya have to create range recs in the database.
        ]; // end of rangeArray
    } // end fun setDefaultRanges
} // end export
QncwwsrdComponent.ɵfac = function QncwwsrdComponent_Factory(t) { return new (t || QncwwsrdComponent)(); };
QncwwsrdComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QncwwsrdComponent, selectors: [["app-qncwwsrd"]], inputs: { custIn: "custIn", qidIn: "qidIn", scoreboardNbrIn: "scoreboardNbrIn", scoreboardsIn: "scoreboardsIn", scoreboardRangesIn: "scoreboardRangesIn", faunaOrSupabaseIn: "faunaOrSupabaseIn" }, outputs: { wwsrJumpOut: "wwsrJumpOut" }, decls: 53, vars: 8, consts: [["class", "mt-1 tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "mt-3", "ml-3", 3, "disabled"], [1, "button", "is-info", 3, "click"], [1, "table", "has-background-success-light", "is-narrow"], ["disabled", "", "size", "4", 1, "has-background-success-light", 3, "value"], ["size", "14", "autocomplete", "off", 3, "value", "change", "blur"], ["scoreboardName", ""], [4, "ngIf"], [1, "mt-3", "table", "has-background-info-light", "is-narrow"], [1, "button", "is-info", "is-small", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "htmlIdBottomOfPage"], [1, "mt-1", "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, ""], [1, "ml-3"], [1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["scoreboardSeq", ""], ["disabled", "", "size", "2", "autocomplete", "off", 1, "is-small", 3, "value"], ["size", "11", "autocomplete", "off", 1, "is-small", 3, "value", "change", "blur"], ["rangeName", ""], ["size", "3", "autocomplete", "off", 1, "is-small", 3, "value", "change", "blur"], ["rangeStart", ""], ["rangeEnd", ""], ["overflow", "auto", "autocomplete", "off", 1, "textarea", 3, "rows", "cols", "value", "change", "blur"], ["rangeTxt", ""]], template: function QncwwsrdComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QncwwsrdComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QncwwsrdComponent_span_1_Template, 7, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "fieldset", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwsrdComponent_Template_button_click_3_listener() { return ctx.prevButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u1438 prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwsrdComponent_Template_button_click_6_listener() { return ctx.nextButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " next \u1433 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwsrdComponent_Template_button_click_9_listener() { return ctx.addButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwsrdComponent_Template_button_click_12_listener() { return ctx.delButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "fieldset", 2)(16, "table", 4)(17, "tr")(18, "td")(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Scoreboard nbr: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td")(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Scoreboard Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td")(28, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QncwwsrdComponent_Template_input_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29); return ctx.scoreboardNameChg(_r2.value, ctx.sx); })("blur", function QncwwsrdComponent_Template_input_blur_28_listener() { return ctx.handleBlur("scoreboardName"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, QncwwsrdComponent_tr_30_Template, 7, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "table", 9)(32, "thead")(33, "tr")(34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " End ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Text \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwsrdComponent_Template_button_click_44_listener() { return ctx.addRangeButClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " add range");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, QncwwsrdComponent_tr_49_Template, 19, 7, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br")(51, "br")(52, "span", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.verifyDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fieldsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fieldsDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.scoreboardsIn[ctx.sx].scoreboardNbr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.scoreboardsIn[ctx.sx].scoreboardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.msg1.length == -666);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rangeArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 7377:
/*!********************************************!*\
  !*** ./src/app/qncwwu/qncwwu.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QncwwuComponent": () => (/* binding */ QncwwuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/apiFauna */ 4238);
/* harmony import */ var src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiSupabase */ 2979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function QncwwuComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.msg1, " ");
} }
function QncwwuComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QncwwuComponent_tr_18_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwuComponent_tr_18_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ux_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.delButClick(ux_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ux_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ux_r4);
} }
function QncwwuComponent_tr_18_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwuComponent_tr_18_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.proceedWithDelClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " delete now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QncwwuComponent_tr_18_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwuComponent_tr_18_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.cancelDelClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QncwwuComponent_tr_18_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r3.userId);
} }
function QncwwuComponent_tr_18_span_17_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwuComponent_tr_18_span_17_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ux_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.scoresCsvButClick(ux_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " get scores csv ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QncwwuComponent_tr_18_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QncwwuComponent_tr_18_span_19_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ux_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.assCsvButClick(ux_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " get assessment csv ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QncwwuComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 5)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QncwwuComponent_tr_18_span_2_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QncwwuComponent_tr_18_span_3_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QncwwuComponent_tr_18_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, QncwwuComponent_tr_18_td_5_Template, 2, 1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, QncwwuComponent_tr_18_span_17_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, QncwwuComponent_tr_18_span_19_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const u_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.verifyDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.verifyDelete && u_r3.userId == ctx_r2.userToDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.verifyDelete && u_r3.userId == ctx_r2.userToDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.verifyDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r3.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r3.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r3.localUserDateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r3.answerCnt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.verifyDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.verifyDelete);
} }
//import jsPDF from 'jspdf'
class QncwwuComponent {
    constructor() {
        this.msg1 = 'participant list';
        this.usersArray = [];
        this.scoresArray = [];
        this.answersArray = [];
        this.myFileName = 'someFileName.csv';
        this.myTxt = '';
        this.userId = '';
        this.firstName = '';
        this.lastName = '';
        this.userDateTime = '';
        this.lowScoreThresh = 0;
        this.hiScoreThresh = 0;
        this.assTxt = '';
        this.hisScore = 0;
        this.hisScoreStr = '';
        this.cellBrk = "\n" + "\"" + "\n";
        this.verifyDelete = false;
        this.deleteIx = -1;
        this.myLocalDateTime = new Date('December 17, 2022 03:24:00');
        // supaFlds = {}
        this.supaFldsCustQid = {};
        this.supaFldsCustQidUser = {};
        this.supaData = [];
        this.faunaData = [];
        this.userToDelete = ' ';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running wwu ngOnInit===');
            this.msg1 = 'loading participants...';
            if (this.faunaOrSupabaseIn == 'fauna') {
                yield this.launchReadFaunaUsers(); // get db users (participants).
                this.buildListOfUsers(this.faunaData);
            }
            if (this.faunaOrSupabaseIn == 'supabase') {
                this.supaFldsCustQid = { "cust": this.custIn, "qid": this.qidIn };
                yield this.launchReadSupabase('qtUsers', this.supaFldsCustQid);
                this.buildListOfUsers(this.supaData);
            }
        });
    } // end ngOnInit
    buildListOfUsers(qtDbObj) {
        console.log('running buildListOfUsers');
        this.usersArray = qtDbObj.slice();
        for (let i = 0; i < this.usersArray.length; i++) {
            // read usersArray[i].userDateTime string, convert to local dateTime)
            let mydate = new Date(this.usersArray[i].userDateTime);
            this.usersArray[i]['localUserDateTime'] = mydate.toLocaleString().replace(',', '');
            // hack July2023 fauna has userId , supabase has qUserId
            if (this.usersArray[i]['qUserId'] == undefined
                && this.usersArray[i]['userId'] != undefined) { // copy userId to qUserId
                this.usersArray[i]['qUserId'] = this.usersArray[i]['userId'];
            } // end if 
            if (this.usersArray[i]['userId'] == undefined
                && this.usersArray[i]['qUserId'] != undefined) { // copy qUserId to userId
                this.usersArray[i]['userId'] = this.usersArray[i]['qUserId'];
            } // end if
        } //end for
        this.usersArray.sort((a, b) => (a.userDateTime > b.userDateTime) ? -1 : +1);
        this.msg1 = 'participant list';
        console.log('end of buildListOfUsers.  usersArray:');
        console.table(this.usersArray);
    } //end buildListOfUsers
    scoresCsvButClick(ux) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.msg1 = 'building scores csv to download...';
            this.userId = this.usersArray[ux].userId;
            this.firstName = this.usersArray[ux].firstName;
            this.lastName = this.usersArray[ux].lastName;
            this.userDateTime = this.usersArray[ux].userDateTime;
            this.myLocalDateTime = this.usersArray[ux]['localUserDateTime']; //.localUserDateTime
            this.myFileName = this.userId + '.csv';
            this.supaFldsCustQidUser = { "cust": this.custIn, "qid": this.qidIn, "qUserId": this.userId };
            if (this.faunaOrSupabaseIn == 'supabase') {
                yield this.launchReadSupabase('qtScores', this.supaFldsCustQidUser);
                this.scoresArray = this.supaData;
                yield this.launchReadSupabase('qtAnswers', this.supaFldsCustQidUser);
                this.answersArray = this.supaData;
            }
            if (this.faunaOrSupabaseIn == 'fauna') {
                yield this.launchReadFaunaScores();
                this.scoresArray = this.faunaData;
                yield this.launchReadFaunaAnswers();
                this.answersArray = this.faunaData;
            }
            this.buildScoresCsv();
            this.dnLoadTheFile(this.myFileName, this.myTxt);
        });
    } // end scoresCsvButClick
    buildScoresCsv() {
        console.log('running buildScoresCsv');
        this.scoresArray.sort((a, b) => (a.accum.toLowerCase() > b.accum.toLowerCase()) ? +1 : -1);
        this.answersArray.sort((a, b) => (Number(a.questNbr) > Number(b.questNbr)) ? +1 : -1);
        console.table(this.scoresArray);
        console.table(this.answersArray);
        if (this.scoresArray.length == 0) {
            this.msg1 = 'no scores for this user. ';
        }
        if (this.answersArray.length == 0) {
            this.msg1 = 'no answers for this user. ';
        }
        this.myTxt =
            this.firstName + ' ' + this.lastName
                + ',,, phone ext: '
                + this.userId.substring(this.userId.length - 4)
                + ',, ' + this.myLocalDateTime
                + ',,,'
                + this.surveyNameIn
                + ',,,'
                + 'Scores and Answers'
                //+ ',,,promo code?'
                + "\r\n"
                + "\r\n";
        this.myTxt = this.myTxt +
            // 'Scoreboard,Score,Wscore,Quest Cnt,Time Gap' + "\r\n"
            'Scoreboard,,Score,Quest Cnt,Time Gap' + "\r\n";
        //let csvContent = "data:text/csv;charset=utf-8,"
        let rowX = '';
        for (let i = 0; i < this.scoresArray.length; i++) {
            rowX =
                this.scoresArray[i].accum + ',,'
                    // + this.scoresArray[i].score + ',' 
                    + this.scoresArray[i].wscore + ','
                    + this.scoresArray[i].questCnt + ','
                    + this.scoresArray[i].timeGap;
            this.myTxt = this.myTxt + rowX + "\r\n";
        } // end for
        // done putting scores into csv, now put answers into csv:
        this.myTxt = this.myTxt + "\r\n" + "\r\n";
        this.myTxt = this.myTxt + 'Quest Nbr, Answer, Time Gap , Question Text' + "\r\n";
        rowX = '';
        for (let i = 0; i < this.answersArray.length; i++) {
            //  Apr2022 if questTxt not defined, then set it to blank.
            // let dbq = '"' // adjust more chars in csv?
            //adjQuestTxt = dbq + adjQuestTxt + dbq // adds extra dbl quotes.
            if (this.answersArray[i].questTxt === undefined) {
                this.answersArray[i].questTxt = '';
            }
            let adjQuestTxt = this.answersArray[i].questTxt.replaceAll(',', ' ');
            adjQuestTxt = adjQuestTxt.replaceAll('=', '-'); //some csv readers hate eq sign.
            adjQuestTxt = adjQuestTxt.replaceAll(/(\r\n|\r|\n)/g, '');
            rowX =
                this.answersArray[i].questNbr + ','
                    + this.answersArray[i].answerPoints + ','
                    + this.answersArray[i].timeGap + ','
                    + adjQuestTxt;
            this.myTxt = this.myTxt + rowX + "\r\n";
        } // end for
    } // end buildScoresCsv
    assCsvButClick(ux) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('wwu running assCsvButClick');
            this.msg1 = 'building assessment csv to download...';
            this.userId = this.usersArray[ux].userId;
            this.firstName = this.usersArray[ux].firstName;
            this.lastName = this.usersArray[ux].lastName;
            this.userDateTime = this.usersArray[ux].userDateTime;
            this.myLocalDateTime = this.usersArray[ux]['localUserDateTime']; //.localUserDateTime
            this.myFileName = this.userId + '.csv';
            this.supaFldsCustQidUser = { "cust": this.custIn, "qid": this.qidIn, "qUserId": this.userId };
            if (this.faunaOrSupabaseIn == 'fauna') {
                yield this.launchReadFaunaScores();
                this.scoresArray = this.faunaData;
                yield this.launchReadFaunaAnswers();
                this.answersArray = this.faunaData;
            }
            if (this.faunaOrSupabaseIn == 'supabase') {
                yield this.launchReadSupabase('qtScores', this.supaFldsCustQidUser);
                this.scoresArray = this.supaData;
                yield this.launchReadSupabase('qtAnswers', this.supaFldsCustQidUser);
                this.answersArray = this.supaData;
            }
            console.log('scoreboardsIn:');
            console.table(this.scoreboardsIn);
            this.buildAssCsv();
            this.dnLoadTheFile(this.myFileName, this.myTxt);
        });
    } // end assCsvButClick
    buildAssCsv() {
        console.log('292 running buildAssCsv');
        this.scoreboardsIn.sort((a, b) => (a.scoreboardName.toLowerCase() > b.scoreboardName.toLowerCase()) ? +1 : -1);
        this.myTxt = 'Assessment Report ' + ',,,'
            + this.surveyNameIn + "\r\n"
            + this.firstName + ' ' + this.lastName
            + ',,,Participant: '
            + this.userId + "\r\n" + "\r\n"
            + 'Scoreboard   '
            + ',,,'
            + 'Score   ' + ','
            + 'Range Text   ' + "\r\n";
        let scoresIx = 0;
        for (let i = 0; i < this.scoreboardsIn.length; i++) {
            this.hisScore = 0;
            this.hisScoreStr = '';
            this.assTxt = '';
            this.myTxt = this.myTxt
                + this.scoreboardsIn[i].scoreboardName + ',';
            // lookup his score that matches current scoreboard:
            scoresIx = this.scoresArray
                .findIndex(s => s.accum.toLowerCase() == this.scoreboardsIn[i].scoreboardName.toLowerCase());
            if (scoresIx > -1) { // we found scoreboardName in the scoresArray
                this.hisScore = this.scoresArray[scoresIx].wscore;
                this.hisScoreStr = this.scoresArray[scoresIx].wscore.toString();
                this.setScoresArrayAssTxt(this.scoresArray[scoresIx].accum, this.hisScore);
            }
            this.myTxt = this.myTxt
                + ',,' + this.hisScoreStr + ','
                + this.assTxt + "\r\n";
        } // end for
        let rptName = 'Assessment Report ' + this.userId + '.csv';
        this.msg1 = 'built an assessment report for '
            + this.firstName + ' ' + this.lastName + '.';
        console.log('349 end buildAssCsv');
    } // end buildAssCsv
    setScoresArrayAssTxt(accum, hisScore) {
        console.log('running setScoresArrayAssTxt');
        // find the range that matches hisScore.  set assTxt.
        let sx = this.scoreboardsIn
            .findIndex(s => s.scoreboardName.toLowerCase() == accum.toLowerCase());
        if (sx >= 0) { // we found accum in scoreboardsArray
            for (let i = 0; i < this.scoreboardRangesIn.length; i++) {
                if (hisScore >= this.scoreboardRangesIn[i].rangeStart
                    && hisScore <= this.scoreboardRangesIn[i].rangeEnd
                    && this.scoreboardsIn[sx].scoreboardNbr == this.scoreboardRangesIn[i].scoreboardNbr) {
                    this.assTxt = this.scoreboardRangesIn[i].rangeTxt;
                    i = 9999; //exit this loop
                } // end if
            } // end for
        } // end if
    } // end setScoresArrayAssTxt
    dnLoadTheFile(myFileName, txt) {
        console.log('running dnLoadTheFile');
        // hacky way to  download, but it's common.
        // create an invisible screen element,
        // give it attributes, and fake click it.
        var elem = document.createElement('a');
        elem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt));
        elem.setAttribute('download', myFileName);
        elem.style.display = 'none';
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
        if (this.msg1.includes('...')) {
            this.msg1 = 'file downloaded.';
        }
        else {
            this.msg1 += ' file downloaded.';
        }
    } // end dnLoadTheFile
    launchReadMultFaunaScores() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchReadMultFaunaScores');
            // test this someday.
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadMultScores(this.custIn, this.qidIn);
            this.faunaData = [];
            for (let i = 0; i < faunaRes.length; i++) {
                this.faunaData.push(faunaRes[i].data);
            } //end for
            console.log('list of faunaData scores we just read:');
            console.table(this.faunaData);
        });
    } // end launchReadMultFaunaScores
    launchReadFaunaUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchReadFaunaUsers');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadUsers(this.custIn, this.qidIn);
            console.table(faunaRes);
            this.faunaData = [];
            for (let i = 0; i < faunaRes.length; i++) {
                this.faunaData.push(faunaRes[i].data);
            } //end for
            console.log('list of faunaData users we just read:');
            console.table(this.faunaData);
        });
    } //end launchReadFaunaUsers
    launchReadFaunaAnswers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchReadFaunaAnswers');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadAnswers(this.custIn, this.qidIn, this.userId);
            // console.table(faunaRes)
            this.faunaData = [];
            for (let i = 0; i < faunaRes.length; i++) {
                this.faunaData.push(faunaRes[i].data);
            }
            console.log('list of faunaData answers we just read:');
            console.table(this.faunaData);
        });
    } //end launchReadFaunaAnswers 
    launchReadFaunaScores() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchReadFaunaScores');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtReadScores(this.custIn, this.qidIn, this.userId);
            // console.table(faunaRes)
            this.faunaData = [];
            for (let i = 0; i < faunaRes.length; i++) {
                this.faunaData.push(faunaRes[i].data);
            }
            console.log('list of faunaData scores we just read:');
            console.table(this.faunaData);
        });
    } //end launchReadFaunaScores
    launchDelAllFaunaAnswersForOneUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchDeleteAllFaunaAnswersForOneUser');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtMassDeleteAnswers(this.custIn, this.qidIn, this.userId);
            this.faunaData = [];
            for (let i = 0; i < faunaRes.length; i++) {
                this.faunaData.push(faunaRes[i].data);
            } // end for
            console.log('list of faunaData answers we just deleted:');
            console.table(this.faunaData);
        });
    } // end launchDelAllFaunaAnswersForOneUser
    launchDelAllFaunaScoresForOneUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchDeleteAllFaunaScoresForOneUser');
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtMassDeleteScores(this.custIn, this.qidIn, this.userId);
            this.faunaData = [];
            for (let i = 0; i < faunaRes.length; i++) {
                this.faunaData.push(faunaRes[i].data);
            }
            console.log('list of faunaData scores we just deleted:');
            console.table(this.faunaData);
        });
    } // end launchDelAllFaunaScoresForOneUser
    launchDelFaunaParticipant() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running  wwu launchDeleteParticipant');
            console.log(this.custIn, this.qidIn, this.userId);
            let faunaRes = yield src_utils_apiFauna__WEBPACK_IMPORTED_MODULE_0__["default"].qtDeleteParticipant(this.custIn, this.qidIn, this.userId);
            this.faunaData = [];
            for (let i = 0; i < faunaRes.length; i++) {
                this.faunaData.push(faunaRes[i].data);
            }
            console.log('faunaData participant we just deleted:');
            console.table(this.faunaData);
        });
    } // end launchDelParticipant
    buildAnswersCsv() {
        this.myTxt = this.myTxt + "\r\n" + "\r\n";
        this.myTxt = this.myTxt + 'Quest Nbr, Answer, Time Gap , Question Text' + "\r\n";
        let rowX = '';
        for (let i = 0; i < this.answersArray.length; i++) {
            //  Apr2022 if questTxt not defined, then set it to blank.
            if (this.answersArray[i].questTxt === undefined) {
                this.answersArray[i].questTxt = '';
            }
            let adjQuestTxt = this.answersArray[i].questTxt.replaceAll(',', ' ');
            adjQuestTxt = adjQuestTxt.replaceAll(/(\r\n|\r|\n)/g, '');
            rowX =
                this.answersArray[i].questNbr + ','
                    + this.answersArray[i].answerPoints + ','
                    + this.answersArray[i].timeGap + ','
                    + adjQuestTxt;
            this.myTxt = this.myTxt + rowX + "\r\n";
        } // end for
    } // end buildAnswersCsv
    delButClick(ix) {
        console.log('running delButClick');
        this.deleteIx = ix;
        this.userToDelete = this.usersArray[ix].userId;
        this.verifyDelete = true;
        this.msg1 = 'confirm delete';
    } // end delButClick
    proceedWithDelClick() {
        console.log('running proceedWithDelClick');
        this.supaFldsCustQidUser = { "cust": this.custIn, "qid": this.qidIn, "qUserId": this.userToDelete };
        this.msg1 = 'deleting...';
        this.delOneUsersScores(this.deleteIx);
        this.delOneUsersAnswers(this.deleteIx);
        this.delOneUsersParticipant(this.deleteIx);
        this.usersArray.splice(this.deleteIx, 1); //removes particpant from array
        this.verifyDelete = false;
        this.msg1 = 'deleted participant: ' + this.userToDelete;
    } // end proceedWithDelClick
    cancelDelClick() {
        this.verifyDelete = false;
        this.deleteIx = -1;
        this.msg1 = 'delete cancelled.';
    } // end cancelDelClick
    delOneUsersParticipant(ux) {
        console.log('running deleteOneUsersParticipant');
        this.userId = this.usersArray[ux].userId;
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchDelFaunaParticipant();
        } // end if fauna
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.launchDelSupabaseMulti('qtUsers', this.supaFldsCustQidUser);
            console.table(this.supaData);
        } // end if supabase
    } // end delOneUsersParticipant
    delOneUsersScores(ux) {
        console.log('running delOneUsersScores');
        this.userId = this.usersArray[ux].userId;
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchDelAllFaunaScoresForOneUser();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.launchDelSupabaseMulti('qtScores', this.supaFldsCustQidUser);
        }
    } // end delOneUsersScores
    delOneUsersAnswers(ux) {
        console.log('running delOneUsersAnswers');
        this.userId = this.usersArray[ux].userId;
        if (this.faunaOrSupabaseIn == 'fauna') {
            this.launchDelAllFaunaAnswersForOneUser();
        }
        if (this.faunaOrSupabaseIn == 'supabase') {
            this.launchDelSupabaseMulti('qtAnswers', this.supaFldsCustQidUser);
        } // end if supabase
    } // end delOneUsersAnswers
    launchReadSupabase(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(Date.now() / 10000, '500 running launchReadSupabase...');
            console.table(flds);
            let supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].readSupabase(tbl, flds);
            console.log(Date.now() / 10000, '503 done waiting for apiSupabase.  supaRes:');
            console.log(supaRes); //supaRes is only a promise unless I await. 
            //supaRes is null if fieldname is wrong.
            //supaRes is an empty object if no data found.
            //supaRes.supaData is null if no data found.
            this.supaData = supaRes.supabaseData;
            if (this.supaData === null) {
                this.supaData = [];
            }
            console.log(Date.now() / 10000, '509 end of launchReadSupabase.');
        });
    } // end launchReadSupabase
    launchDelSupabaseMulti(tbl, flds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running launchDelSupabaseMulti.  flds:');
            console.table(flds);
            let supaRes = yield src_utils_apiSupabase__WEBPACK_IMPORTED_MODULE_1__["default"].delSupabaseMulti(tbl, flds);
            this.supaData = supaRes.supabaseData;
            if (this.supaData === null) {
                this.supaData = [];
            }
        });
    } // end launchDelSupabase 
} // end export qncwwu
QncwwuComponent.ɵfac = function QncwwuComponent_Factory(t) { return new (t || QncwwuComponent)(); };
QncwwuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QncwwuComponent, selectors: [["app-qncwwu"]], inputs: { custIn: "custIn", qidIn: "qidIn", scoreboardsIn: "scoreboardsIn", scoreboardRangesIn: "scoreboardRangesIn", surveyNameIn: "surveyNameIn", xxAnswersIn: "xxAnswersIn", faunaOrSupabaseIn: "faunaOrSupabaseIn" }, decls: 19, vars: 3, consts: [["class", "tag is-dark is-small is-vcentered ml-3", 4, "ngIf"], [1, "table", "is-fullwidth", "ml-3", "mr-3", "mb-3"], [4, "ngIf"], ["class", "has-background-success-light", 4, "ngFor", "ngForOf"], [1, "tag", "is-dark", "is-small", "is-vcentered", "ml-3"], [1, "has-background-success-light"], ["class", "tag is-clickable is-small is-info", 3, "id", "click", 4, "ngIf"], ["class", "tag is-clickable is-small is-info", 3, "click", 4, "ngIf"], ["class", "tag is-clickable is-small is-info ml-1", 3, "click", 4, "ngIf"], [1, "tag", "is-clickable", "is-small", "is-info", 3, "id", "click"], [1, "tag", "is-clickable", "is-small", "is-info", 3, "click"], [1, "tag", "is-clickable", "is-small", "is-info", "ml-1", 3, "click"]], template: function QncwwuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QncwwuComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1)(2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QncwwuComponent_th_4_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "first name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "date time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "count");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "th")(16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, QncwwuComponent_tr_18_Template, 20, 11, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.msg1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.verifyDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.usersArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 4238:
/*!*******************************!*\
  !*** ./src/utils/apiFauna.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Api methods to call /functions */

const create = (data) => {
  return fetch('/.netlify/functions/todos-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const readAll = () => {
  return fetch('/.netlify/functions/todos-read-all').then((response) => {
    return response.json()
  })
}

const update = (todoId, data) => {
  return fetch(`/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const deleteTodo = (todoId) => {
  return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

const batchDeleteTodo = (todoIds) => {
  return fetch(`/.netlify/functions/todos-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
// const qtRead01 = (todoId, data) => {
//   return fetch(`/.netlify/functions/qtRead01/${todoId}`, {
//     body: JSON.stringify(data),
//     //method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }
// const qtRead02 = (todoId, data) => {
//   return fetch(`/.netlify/functions/qtRead02/${todoId}`, {
//     body: JSON.stringify(data),
//     //method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }
// const qtRead03 = (faunaRecId, data) => {
//   //return fetch(`/.netlify/functions/qtRead03/${todoId}`, {
//     return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtRead03/${faunaRecId}`, {
//     body: JSON.stringify(data),
//     //method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }

const qtWriteAnswer = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteAnswer`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtWriteQuestion = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteQuestion`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

// const qtWriteSubset = (data) => {
//   return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteSubset`, {
//     body: JSON.stringify(data),
//     method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }

const qtDeleteQuestion = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtDeleteQuestion`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtUpdateQuestion = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateQuestion`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtUpdateRule = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateRule`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

// const qtUpdateSubset = (data) => {
//   return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateSubset`, {
//     body: JSON.stringify(data),
//     method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }

const qtDeleteRule = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtDeleteRule`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtReadQuestions = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadQuestions'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

// const qtReadSubsets = (custParmIn,qidParmIn) => {
//   let myUrl = 
//   'https://qncsurvey.netlify.app/.netlify/functions/qtReadSubsets'
//   +'?cust=' + custParmIn
//   +'&qid=' + qidParmIn
//   return fetch(myUrl)
//    .then((response) => {
//     return response.json()
//   })
// }

const qtReadRules= (custParmIn,qidParmIn) => {
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtReadRules'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}

const qtWriteScore = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteScore`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtWriteRule = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteRule`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtMassDeleteAnswers = (custParmIn,qidParmIn,userParmIn) => {
  //alert('api.js 194'+userParmIn)
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtMassDeleteAnswers'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&user=' + userParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}
const qtMassDeleteScores = (custParmIn,qidParmIn,userParmIn) => {
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtMassDeleteScores'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&user=' + userParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}
const qtMassDeleteQuestions = (custParmIn,qidParmIn) => {
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtMassDeleteQuestions'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}

const qtMassDeleteRules = (custParmIn,qidParmIn) => {
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtMassDeleteRules'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
}

const qtReadScores = (custParmIn,qidParmIn,quserIdParmin,userDateTimeParmin) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadScores'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&userId=' + quserIdParmin
  + '&userDateTime=' + userDateTimeParmin
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
// const qtReadMultScores = (custParmIn,qidParmIn,quserIdParmin,userDateTimeParmin) => {
const qtReadMultScores = (custParmIn,qidParmIn) => {
    let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadMultScores'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}


const qtReadAnswers = (custParmIn,qidParmIn,quserIdParmin,userDateTimeParmin) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadAnswers'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&userId=' + quserIdParmin
  + '&userDateTime=' + userDateTimeParmin
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadInvitations = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadInvitations'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadUsers = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadUsers'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadSubscribers = (subscriberParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadSubscribers'
  + '?subscriber=' + subscriberParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadTeamMembers = (teamMemberParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadTeamMembers'
  + '?teamMember=' + teamMemberParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
} 
const qtReadScoreboards = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadScoreboards'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtUpdateScoreboard = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateScoreboard`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtDeleteScoreboard = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtDeleteScoreboard`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtAddScoreboard = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtAddScoreboard`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtAddParticipant = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtAddParticipant`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtUpdateParticipant = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateParticipant`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtReadUser = (custParmIn,qidParmIn,userParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadUser'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&user=' + userParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
const qtReadGroups = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadGroups'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtAddGroup = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtAddGroup`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtUpdateGroup = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateGroup`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtDeleteGroup = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtDeleteGroup`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtDeleteParticipant = (custParmIn,qidParmIn,userParmIn) => {
  let myUrl = 
  'https://qncsurvey.netlify.app/.netlify/functions/qtDeleteParticipant'
  + '?cust=' + custParmIn
  + '&qid='  + qidParmIn
  + '&user=' + userParmIn
  return fetch(myUrl)
   .then((response) => {
     return response.json()
  })
} // end qtDeleteParticipant

const qtUpdateScore = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateScore`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtReadScore = (custParmIn,qidParmIn,userParmIn,scoreboardNameParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadScore'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  + '&user=' + userParmIn
  + '&scoreboardName=' + scoreboardNameParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
const qtAddSurvey = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtAddSurvey`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtReadSurveys = (custParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadSurveys'
  + '?cust=' + custParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
const qtReadSurvey = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadSurvey'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => { return response.json() })
}
const qtUpdateSurvey = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateSurvey`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtReadScoreboardRanges = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadScoreboardRanges'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => { return response.json() })
}
 
const qtAddScoreboardRange = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtAddScoreboardRange`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtUpdateScoreboardRange = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtUpdateScoreboardRange`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const qtDeleteScoreboardRange = (data) => {
  return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtDeleteScoreboardRange`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const qtReadMultAnswers = (custParmIn,qidParmIn) => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadMultAnswers'
  + '?cust=' + custParmIn
  + '&qid=' + qidParmIn
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}

const qtReadMultSubscribers = () => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadMultSubscribers'
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
const qtReadMultTeamMembers = () => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadMultTeamMembers'
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
}
const qtReadMultSurveys = () => {
  let myUrl =  'https://qncsurvey.netlify.app/.netlify/functions/qtReadMultSurveys'
  return fetch(myUrl)
   .then((response) => {
    return response.json()
  })
} // end qtReadMultSurveys

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: create,
  readAll: readAll,
  update: update,
  delete: deleteTodo,
  batchDelete: batchDeleteTodo,
  qtWriteQuestion: qtWriteQuestion,
  qtDeleteQuestion: qtDeleteQuestion,
  qtDeleteRule: qtDeleteRule,
  qtWriteAnswer: qtWriteAnswer,
  qtReadQuestions: qtReadQuestions,
  qtWriteScore: qtWriteScore,
  qtReadRules: qtReadRules,
  qtWriteRule: qtWriteRule,
  qtUpdateQuestion: qtUpdateQuestion,
  qtUpdateRule: qtUpdateRule,
  qtMassDeleteAnswers: qtMassDeleteAnswers,
  qtMassDeleteScores: qtMassDeleteScores,
  qtMassDeleteQuestions: qtMassDeleteQuestions,
  qtMassDeleteRules: qtMassDeleteRules,
  qtReadScores: qtReadScores,
  qtReadAnswers: qtReadAnswers,
  qtReadInvitations: qtReadInvitations,
  qtReadUsers: qtReadUsers,
  qtReadUser: qtReadUser,
  qtReadSubscribers: qtReadSubscribers,
  qtReadTeamMembers: qtReadTeamMembers,
  qtReadScoreboards: qtReadScoreboards,
  qtAddScoreboard: qtAddScoreboard,
  qtAddParticipant:qtAddParticipant,
  qtUpdateScoreboard: qtUpdateScoreboard,
  qtUpdateParticipant: qtUpdateParticipant,
  qtDeleteScoreboard: qtDeleteScoreboard,
  qtReadGroups: qtReadGroups,
  qtAddGroup: qtAddGroup,
  qtUpdateGroup: qtUpdateGroup,
  qtDeleteGroup: qtDeleteGroup,
  qtUpdateScore: qtUpdateScore,
  qtReadScore: qtReadScore,
  qtDeleteParticipant: qtDeleteParticipant,
  qtAddSurvey: qtAddSurvey,
  qtReadSurveys: qtReadSurveys,
  qtReadSurvey: qtReadSurvey,
  qtUpdateSurvey: qtUpdateSurvey,
  qtReadMultScores: qtReadMultScores,
  qtReadScoreboardRanges : qtReadScoreboardRanges,
  qtAddScoreboardRange : qtAddScoreboardRange,
  qtUpdateScoreboardRange : qtUpdateScoreboardRange,
  qtDeleteScoreboardRange : qtDeleteScoreboardRange,
  qtReadMultAnswers : qtReadMultAnswers,
  qtReadMultSubscribers : qtReadMultSubscribers,
  qtReadMultTeamMembers : qtReadMultTeamMembers,
  qtReadMultSurveys :qtReadMultSurveys
}); 

/***/ }),

/***/ 2979:
/*!**********************************!*\
  !*** ./src/utils/apiSupabase.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Bill_flyNewSky2020_dev4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


// to call a supabase function, pass-in tbl and fields.
// tbl: string. the name of the supabase table.  
// flds: object. a list of field names (keys) along with their values.
// the downstream netlify aws lambda functions are called via fetch url here.
// callers of funcs in this here apiSupabase 
// must await fetch-promise  to resolve.
// example from a caller:
// this.supaRes = await apiSupabase.addSupabase(tbl,flds)
// grand parent and great grandparent func will have to wait,
// if they use fetch response.
let readSupabase = (tbl, flds) => {
  console.log(Date.now() / 10000, 'running readSupabase in apiSupabase');
  let myFldNamesArray = Object.keys(flds); //.map(x => x )

  let myFldValsArray = Object.values(flds); //.map(x => x + 'fee' )

  let myUrl = 'https://play.flytechfree.com/.netlify/functions/readSupabase';
  myUrl += '?tbl=' + tbl;

  for (let i = 0; i < myFldNamesArray.length; i++) {
    myUrl += '&' + myFldNamesArray[i];
    myUrl += '=' + myFldValsArray[i];
  } // end for loop


  console.log('12 apiSupabase readSupabase myUrl: ', myUrl);
  return fetch(myUrl).then(response => {
    console.log(Date.now() / 10000, '15 readSupabase .then of fetch');
    return response.json();
  }); // end .then
}; // end readSupabase //////////////////////////////////////////////////////


function addSupabase(_x, _x2) {
  return _addSupabase.apply(this, arguments);
} // end addSupabase //////////////////////////////////////////////////////////


function _addSupabase() {
  _addSupabase = (0,C_Users_Bill_flyNewSky2020_dev4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tbl, flds) {
    console.log(Date.now() / 10000, '21 running addSupabase in apiSupabase.js');
    let myFldNamesArray = Object.keys(flds); //.map(x => x )

    let myFldValsArray = Object.values(flds); //.map(x => x )

    let myUrl = new URL("https://play.flytechfree.com/.netlify/functions/addSupabase");
    let myType = '';
    let tmpFldVal = '';
    myUrl.searchParams.append("tbl", tbl);

    for (let i = 0; i < myFldNamesArray.length; i++) {
      myType = typeof myFldValsArray[i];
      tmpFldVal = '' + myFldValsArray[i];

      if (tmpFldVal.includes('"')) {
        console.log('tmpFldVal includes a dbl quote.'); //chg double quotes cuz supabase chokes.

        tmpFldVal = '' + myFldValsArray[i].replaceAll('"', "'");
        myFldValsArray[i] = tmpFldVal;
        console.log('myFldValsArray[i]', myFldValsArray[i]);
      } // end if


      if (tmpFldVal.includes('\n')) {
        console.log('tmpFldVal includes a newline.'); //chg newline cuz supabase chokes.

        tmpFldVal = '' + myFldValsArray[i].replaceAll('\n', "\\n");
        myFldValsArray[i] = tmpFldVal;
        console.log('myFldValsArray[i]', myFldValsArray[i]);
      } // end if


      if (myType == 'object') {
        //console.log('yes myType is an object.').  in this case, it means this is a sub-array.
        myFldValsArray[i] = '{' + myFldValsArray[i] + '}'; // postGres wants brackets on sub-array.
      } // end if


      myUrl.searchParams.append(myFldNamesArray[i], myFldValsArray[i]); // magic url append
    } // end for


    let response = yield fetch(myUrl); // first return is a promise,

    return response.json(); // caller of api.addSupbase must wait also.
  });
  return _addSupabase.apply(this, arguments);
}

function delSupabase(_x3, _x4) {
  return _delSupabase.apply(this, arguments);
} // end delSupabase //////////////////////////////////////////////////////


function _delSupabase() {
  _delSupabase = (0,C_Users_Bill_flyNewSky2020_dev4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tbl, flds) {
    console.log(Date.now() / 10000, 'running delSupabase in apiSupabase');
    let myFldNamesArray = Object.keys(flds); //.map(x => x )

    let myFldValsArray = Object.values(flds); //.map(x => x + 'fee' )

    let myUrl = 'https://play.flytechfree.com/.netlify/functions/delSupabase';
    myUrl += '?tbl=' + tbl;

    for (let i = 0; i < myFldNamesArray.length; i++) {
      myUrl += '&' + myFldNamesArray[i];
      myUrl += '=' + myFldValsArray[i];
    } // end for loop


    console.log('69 apiSupabase delSupabase myUrl: ', myUrl);
    let response = yield fetch(myUrl);
    return response.json();
  });
  return _delSupabase.apply(this, arguments);
}

let chgSupabase = (tbl, flds) => {
  console.log(Date.now() / 10000, 'running chgSupabase in apiSupabase');
  let myFldNamesArray = Object.keys(flds); //.map(x => x )

  let myFldValsArray = Object.values(flds); //.map(x => x + 'fee' )

  let myUrl = 'https://play.flytechfree.com/.netlify/functions/chgSupabase';
  myUrl += '?tbl=' + tbl;

  for (let i = 0; i < myFldNamesArray.length; i++) {
    myUrl += '&' + myFldNamesArray[i];
    myUrl += '=' + myFldValsArray[i];
  } // end for loop


  console.log('87 apiSupabase chgSupabase myUrl: ', myUrl);
  return fetch(myUrl).then(response => {
    console.log(Date.now() / 10000, '90 chgSupabase .then of fetch');
    return response.json();
  }); // end .then
}; // end chgSupabase //////////////////////////////////////////////////////


let delSupabaseMulti = (tbl, flds) => {
  console.log(Date.now() / 10000, 'running delSupabaseMulti in apiSupabase');
  let myFldNamesArray = Object.keys(flds); //.map(x => x )

  let myFldValsArray = Object.values(flds); //.map(x => x + 'fee' )

  let myUrl = 'https://play.flytechfree.com/.netlify/functions/delSupabaseMulti';
  myUrl += '?tbl=' + tbl;

  for (let i = 0; i < myFldNamesArray.length; i++) {
    myUrl += '&' + myFldNamesArray[i];
    myUrl += '=' + myFldValsArray[i];
  } // end for loop


  console.log('12 apiSupabase delSupabaseMulti myUrl: ', myUrl);
  return fetch(myUrl).then(response => {
    console.log(Date.now() / 10000, '15 delSupabaseMulti .then of fetch');
    return response.json();
  }); // end .then
}; // end delSupabaseMulti //////////////////////////////////////////////////////


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  readSupabase: readSupabase,
  addSupabase: addSupabase,
  chgSupabase: chgSupabase,
  delSupabase: delSupabase,
  delSupabaseMulti: delSupabaseMulti
}); // end export

/***/ }),

/***/ 4362:
/*!**********************************!*\
  !*** ./src/utils/colSortFilt.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function colSort(tableToSort,fieldName,ascOrDes,fieldMsg) {
  console.log('running colSortFilt.colsort')
  let colSortByArray = []
  let neg1OrPos1  = 666 // set neg1OrPos1 to -1 or +1
  let mySortField = '??'

  console.log('table to sort:')
  console.table(tableToSort)
  console.log(fieldName)
  console.log(ascOrDes)
  console.log(fieldMsg)

  if (ascOrDes == 'des' )   {neg1OrPos1 = -1} else {neg1OrPos1 = +1}   

  colSortByArray.push( {sortField: fieldName , ascOrDes: ascOrDes, fieldMsg: fieldMsg} )
  // billy, someday provide addition sorts (up to 3 columns)
  // before this was a util in May2023, we used to remember his prior col sorts,
  // and store them in colSortByArray
  // Maybe pass colSortByArray in and out.
  // That means changing the callers, to carry around colSortByArray (set of cols and words)
  //
  // if ( colSortByArray.length == 2  && colSortByArray[1].sortField == colSortByArray[0].sortField ) {colSortByArray.splice(0,1)}
  // if ( colSortByArray.length == 3  && colSortByArray[2].sortField == colSortByArray[0].sortField ) {colSortByArray.splice(0,1)}
  // if ( colSortByArray.length == 3  && colSortByArray[2].sortField == colSortByArray[1].sortField ) {colSortByArray.splice(1,1)}
  // if ( colSortByArray.length == 4  && colSortByArray[3].sortField == colSortByArray[2].sortField ) {colSortByArray.splice(2,1)}
  // if ( colSortByArray.length == 4  && colSortByArray[3].sortField == colSortByArray[1].sortField ) {colSortByArray.splice(1,1)}
  // if ( colSortByArray.length>3) { colSortByArray.splice(0,1) }
  console.log('col sort by:')
  console.table(colSortByArray)

  tableToSort.sort((a, b) => { 
    for (let i = colSortByArray.length-1; i >= 0; i--) {
      mySortField = colSortByArray[i].sortField  
      // -------------------------------------------- 
      for (let [prop, objVal] of Object.entries(a)) {
        if (prop === mySortField) {
          // null things are Nan illogical. test those first:
          if ( a[prop] == '' && b[prop] == '') { return 0 } 
          if ( a[prop] != '' && b[prop] == '') { return -1 * neg1OrPos1} 
          if ( b[prop] != '' && a[prop] == '') { return +1 * neg1OrPos1} 

          if (isNaN(a[prop]) && isNaN(b[prop]) ){ // comparing two strings
            console.log('comparing two strings')
            if (a[prop].toString().toLowerCase() > b[prop].toString().toLowerCase()) { return -1 * neg1OrPos1}
            if (a[prop].toString().toLowerCase() < b[prop].toString().toLowerCase()) { return +1 * neg1OrPos1}
            return 0
          }

          if (isNaN(a[prop]) == false && isNaN(b[prop]) == false ){ // comparing two numbers
            console.log('comparing two numbers')
            // console.log(a[prop],b[prop])
            if (Number(a[prop]) > Number(b[prop])) {  return -1 * neg1OrPos1}
            if (Number(a[prop]) < Number(b[prop])) {  return +1 * neg1OrPos1}
            return 0
          }
          if (typeof a[prop] != typeof b[prop] ){ // comparing type mix
            console.log('comparing type mix')            
            if (a[prop] > b[prop]) {  return -1 * neg1OrPos1}
            if (a[prop] < b[prop]) {  return +1 * neg1OrPos1}
            return 0
          }
        } // end if prop == mySortField
      } // end inner for loop
      // --------------------------------------------- 
    } // end outer for loop
  }) // end inline custom sort function
  fieldMsg = 'sorted by ' + fieldMsg
  return [tableToSort,fieldName,ascOrDes,fieldMsg]
} // end colSort function

function colFilt(tableToFilter,fn, pt, fw) {
  console.log('running colSortFilt.colFilt',fn,fw)
  if (fw === null) {return [tableToFilter,'filter cancelled']} // when prompted, he hit cancel 
  if (fw.length==0) {return [tableToFilter,'filter cancelled']} // when promted, he set filt to blank.
  for (let i = 0; i < tableToFilter.length; i++) {
    tableToFilter[i]['filterInOut'] = 'out' //default out
    if (typeof(tableToFilter[i][fn]) == 'string') { // field is a string
      if (tableToFilter[i][fn].toLowerCase().includes(fw.toLowerCase())) {
        tableToFilter[i]['filterInOut'] = 'in'
      } // end if includes(fw)
    } //end if type of string
    if (typeof(tableToFilter[i][fn]) == 'object') {  //field is an array
          for (let j = 0; j < tableToFilter[i][fn].length; j++) {
            if (tableToFilter[i][fn][j].toLowerCase().includes(fw.toLowerCase()) ) {  
              tableToFilter[i]['filterInOut'] = 'in'
            } // end if 
          } // end for 
    } // end if typeof object
  } // end for
  let msgOut = 'filtered by: ' + pt + ' contains ' + fw
  return  [tableToFilter,msgOut]
} // end colFilt function

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  colSort: colSort,
  colFilt: colFilt
}); // end export
// about sort & filter Mar1 2021
// wws, wwq, wwg is a column list of records from the database.
// html shows 3 icons for each column header.
// icons for sort descending, sort ascending, filter.
// html calls functions for these icons, with parms.
// colSort function is controlled by an array of sortFields.
// colSortByArray is this list of sort fields.
// when a user clicks on a sort icon,
// we push a sortfields row into colSortByArray
// one of these parms is the sortField, which must be the real field name.
// colSort reads the sortfields in colSortByArray
// and then sorts on muliple fields, using javascript .sort
// because colSort uses an appended-to array of sortFields,
// each append adds another layer of sorting.  (another sortField)
// So, colSort uses his prior icon clicks as secondary sort fields.  (worked before May2023)
// colSort is only 25 lines of code, and can be re-used in other projects.
// ---
// when a user clicks on a col heading filter icon, call colFilt function.
// html that calls colFlit must pass-in the filter field name.
// colFilt prompts for filter criteria, captures user input into filtWord.
// colFilt then filters on filtWord.
// ColFilt overlays the prior filter with a new filter.
// ---

/***/ }),

/***/ 9075:
/*!*********************************!*\
  !*** ./src/utils/getEnvVars.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Bill_flyNewSky2020_dev4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


function getFaunaOrSupabase() {
  return _getFaunaOrSupabase.apply(this, arguments);
} // end  fetchEnvFaunaOrSupabase


function _getFaunaOrSupabase() {
  _getFaunaOrSupabase = (0,C_Users_Bill_flyNewSky2020_dev4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    console.log('running getFaunaOrSupabase');
    let myUrl = 'https://qna.flytechfree.com/.netlify/functions/getFaunaOrSupabase'; // alert('getEnvVars.js 4')

    let response = yield fetch(myUrl); // magic double-await, promise / result

    let resObj = yield response.json(); // resObj is like: {faunaOrSupabase: 'fauna'}
    // let resTxt   =   await response.text() // .text() or .json() cant do both! 
    // looking at the reponse can only be done once !!!!

    console.log('resObj from getFaunaOrSupabase:');
    console.log(resObj); // resObj is like: {faunaOrSupabase: 'fauna'}

    let myResponseString = resObj.faunaOrSupabase;

    if (myResponseString != 'fauna' && myResponseString != 'supabase') {
      myResponseString = 'fauna'; // default
    } // selz Oct2024 can't figure out why supabase?
    // set to fauna all the time til you figure this out.


    myResponseString = 'fauna'; // default

    return myResponseString; // a string 'fauna' or 'supabase'
    // let faunaOrSupabase  =  process.env.faunaOrSupabase
  });
  return _getFaunaOrSupabase.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getFaunaOrSupabase: getFaunaOrSupabase
}); // end export

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map