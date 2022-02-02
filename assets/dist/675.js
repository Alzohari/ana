"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[675],{2464:(e,t,s)=>{s.d(t,{H:()=>l});class i extends salla.AppHelpers{setHost(e){this.host=e}getElement(e){return this.host.querySelector(e)}getAttribute(e,t){var s;return null===(s=this.getElement(e))||void 0===s?void 0:s.getAttribute(t)}val(e){return this.getAttribute(e,"value")}isUser(){return"user"===salla.config.get("user.type")}}const l=new i},4675:(e,t,s)=>{s.r(t),s.d(t,{salla_login:()=>a});var i=s(1208),l=s(2464);const a=class{constructor(e){(0,i.r)(this,e),this.regType="sms",this.isLoginByMail=!0,this.loginTypeTitle=salla.lang.get("blocks.header.select_login_way"),this.loginText=salla.lang.get("blocks.header.login"),this.smsLabel=salla.lang.get("blocks.header.sms"),this.mobileLabel=salla.lang.get("common.elements.mobile"),this.emailLabel=salla.lang.get("common.elements.email"),this.enterText=salla.lang.get("blocks.header.enter"),this.bySMSText=salla.lang.get("blocks.header.login_by_sms"),this.byEmailText=salla.lang.get("blocks.header.login_by_email"),this.backText=salla.lang.get("common.elements.back"),this.title=this.host.title||salla.lang.get("blocks.header.login"),this.host.removeAttribute("title"),salla.auth.event.onVerificationFailed((()=>{}))}onVerified(e){if(e.detail.case){if("new_customer"===e.detail.case)return this.showTab(this.tab5);if("redirect"===salla.auth.event.getTypeActionOnVerified())return e.redirect_url?window.location.href=e.redirect_url:void window.location.reload()}else console.log("verified but without case!")}onbackClicked(){"sms"==this.regType?this.showTab(this.tab2):this.showTab(this.tab3)}async show(){return this.showTab(this.isLoginByMail?this.tab1:this.tab2),this.modal.show()}showTab(e){[this.tab1,this.tab2,this.tab3,this.tab4,this.tab5].map((t=>l.H.toggleElement(t,"visible","hidden",(()=>t==e)))),setTimeout((()=>{[this.tab1,this.tab2,this.tab3,this.tab4,this.tab5].map((t=>l.H.toggleElement(t,"s-login-active","s-login-unactive",(()=>t==e))))}),200),setTimeout((()=>{this.host.querySelector(".s-login-wrapper").setAttribute("style","height:"+(null==e?void 0:e.scrollHeight)+"px")})),[this.tab2,this.tab3].includes(e)&&(this.regType=e===this.tab2?"sms":"email");let t=e==this.tab5;return this.modal.setTitle(t?salla.lang.get("common.titles.registration"):this.title),t||l.H.toggleElement(this.regMobileBlock,"s-hidden","s-block",(()=>"sms"===this.regType)).toggleElement(this.regEmailBlock,"s-hidden","s-block",(()=>"email"===this.regType)),this}loginByEmail(){if(!l.H.isValidEmail(this.email.value))return this.email.classList.add("s-has-error"),void(this.email.nextElementSibling.innerText="* "+salla.lang.get("common.elements.email_is_valid"));this.email.nextElementSibling.innerText="",this.email.classList.remove("s-has-error"),salla.auth.api.login({type:"email",email:this.email.value}).then((()=>this.showTab(this.tab4))).then((()=>(this.tab4.by="email")&&(this.tab4.url="auth/email/verify"))).then((()=>this.tab4.show({email:this.email.value})))}loginBySMS(){if(this.mobile.value.length<6)return this.mobile.classList.add("s-has-error"),void(this.mobile.nextElementSibling.innerText="* "+salla.lang.get("mobile_app.strings.incorrect_mobile"));this.mobile.nextElementSibling.innerText="",this.mobile.classList.remove("s-has-error"),salla.auth.api.login({type:"sms",mobile:this.mobile.value}).then((()=>this.showTab(this.tab4))).then((()=>(this.tab4.by="sms")&&(this.tab4.url="auth/mobile/verify"))).then((()=>this.tab4.show({mobile:this.mobile.value,country_code:"SA"})))}typing({target:e}){"tel"===e.type&&salla.helpers.digitsOnly(e),e.classList.remove("s-has-error"),e.nextElementSibling.innerText=""}newUser(){this.tab4.getCode().then((e=>salla.auth.api.register({first_name:this.firstName.value,last_name:this.lastName.value,phone:this.regMobile.value||this.mobile.value,email:this.regEmail.value||this.email.value,country_code:"",country_key:"",code:e,verified_by:this.regType})))}render(){return(0,i.h)("salla-modal",{id:"salla-login",title:this.title,ref:e=>this.modal=e,width:"xs"},(0,i.h)("div",{class:"s-login-wrapper"},this.isLoginByMail?(0,i.h)("div",{class:"s-login-tab",ref:e=>this.tab1=e},(0,i.h)("p",{class:"s-login-sub-title"},this.loginTypeTitle),(0,i.h)("a",{href:"#",class:"s-login-main-btn",onClick:()=>this.showTab(this.tab2)},(0,i.h)("i",{class:"s-login-main-btn-icon sicon-phone"}),(0,i.h)("span",{class:"s-login-main-btn-text"},this.smsLabel),(0,i.h)("i",{class:"main-btn-arrow sicon-keyboard_arrow_left"})),(0,i.h)("a",{href:"#",class:"s-login-main-btn",onClick:()=>this.showTab(this.tab3)},(0,i.h)("i",{class:"s-login-main-btn-icon sicon-mail"}),(0,i.h)("span",{class:"s-login-main-btn-text"},this.emailLabel),(0,i.h)("i",{class:"main-btn-arrow sicon-keyboard_arrow_left"}))):"",(0,i.h)("div",{class:"s-login-tab",ref:e=>this.tab2=e},(0,i.h)("label",{class:"s-login-label"},this.mobileLabel),(0,i.h)("salla-tel-input",null),(0,i.h)("input",{onChange:()=>this.loginBySMS(),type:"tel",ref:e=>this.mobile=e,onInput:this.typing,placeholder:"5xx xxx xxx",class:"s-login-input  tel-input s-ltr"}),(0,i.h)("span",{class:"s-login-error-message"}),(0,i.h)("salla-button",{wide:!0,onClick:()=>this.loginBySMS()},this.enterText),this.isLoginByMail?(0,i.h)("a",{href:"#",onClick:()=>this.showTab(this.tab3),class:"s-login-link"},this.byEmailText):""),this.isLoginByMail?(0,i.h)("div",{class:"s-login-tab",ref:e=>this.tab3=e},(0,i.h)("label",{class:"s-login-label"},this.emailLabel),(0,i.h)("input",{onChange:()=>this.loginByEmail(),type:"email",ref:e=>this.email=e,onInput:this.typing,placeholder:"your@email.com",class:"s-login-input s-ltr"}),(0,i.h)("span",{class:"s-login-error-message"}),(0,i.h)("salla-button",{wide:!0,onClick:()=>this.loginByEmail()},this.enterText),(0,i.h)("a",{href:"#",onClick:()=>this.showTab(this.tab2),class:"s-login-link"},this.bySMSText)):"",(0,i.h)("salla-verify",{"without-modal":!0,ref:e=>this.tab4=e,autoReload:!1,"back-text":this.backText}),(0,i.h)("div",{ref:e=>this.tab5=e},(0,i.h)("label",{class:"s-login-label"},salla.lang.get("blocks.header.your_name")),(0,i.h)("input",{type:"text",class:"s-login-input",ref:e=>this.firstName=e,placeholder:salla.lang.get("pages.profile.first_name")}),(0,i.h)("label",{class:"s-login-label"},salla.lang.get("pages.profile.last_name")),(0,i.h)("input",{type:"text",class:"s-login-input",ref:e=>this.lastName=e,placeholder:salla.lang.get("pages.profile.last_name")}),(0,i.h)("div",{ref:e=>this.regMobileBlock=e},(0,i.h)("label",{class:"s-login-label"},this.mobileLabel),(0,i.h)("input",{type:"tel",ref:e=>this.regMobile=e,onInput:this.typing,placeholder:"5xx xxx xxx",class:"s-login-input s-ltr"}),(0,i.h)("span",{class:"s-login-error-message"})),(0,i.h)("div",{ref:e=>this.regEmailBlock=e},(0,i.h)("label",{class:"s-login-label"},this.emailLabel),(0,i.h)("input",{type:"email",ref:e=>this.regEmail=e,onInput:this.typing,placeholder:"your@email.com",class:"s-login-input s-ltr"}),(0,i.h)("span",{class:"s-login-error-message"})),(0,i.h)("salla-button",{wide:!0,onClick:()=>this.newUser()},salla.lang.get("blocks.header.register")))))}get host(){return(0,i.g)(this)}};a.style="salla-verify{display:block}"}}]);