(this.webpackJsonpsairoopastudios=this.webpackJsonpsairoopastudios||[]).push([[7],{105:function(e,t,a){e.exports={model:"Msgbox_model__2RzR1","cancel-btn":"Msgbox_cancel-btn__7-LTE"}},106:function(e,t,a){e.exports={"contact-page":"Contactpage_contact-page__3lcaC","contact-page-container":"Contactpage_contact-page-container__JF274","left-block":"Contactpage_left-block__1YFdy","left-block-text":"Contactpage_left-block-text__jXRMM",contacts:"Contactpage_contacts__2nMK1","contacts-item":"Contactpage_contacts-item__28Kvb","left-block-svg":"Contactpage_left-block-svg__Nd1zB","right-block":"Contactpage_right-block__264DK","contact-card":"Contactpage_contact-card__1OeK2","card-heading":"Contactpage_card-heading__2sHpw","rocket-img":"Contactpage_rocket-img__1zbmr",floating:"Contactpage_floating__jM_ZQ","card-section":"Contactpage_card-section__2YOGQ","name-section":"Contactpage_name-section__1slqp","mail-section":"Contactpage_mail-section__1YbGu","message-section":"Contactpage_message-section__3iGu5","phone-section":"Contactpage_phone-section__GOQoa","upload-section":"Contactpage_upload-section__2d-eH","submit-btn":"Contactpage_submit-btn__3Q5hH","submit-btn-spinner":"Contactpage_submit-btn-spinner__377Il",spinner:"Contactpage_spinner__16lza","mail-underline":"Contactpage_mail-underline__1rmCc","name-underline":"Contactpage_name-underline__151o2","phone-underline":"Contactpage_phone-underline__1kv1v","mail-underline-focus":"Contactpage_mail-underline-focus__9L2r7","name-underline-focus":"Contactpage_name-underline-focus__3Vcpt","phone-underline-focus":"Contactpage_phone-underline-focus__OyoU1"}},107:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/contact_illustration.ecb4de26.svg"},108:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/paper_rocket_illustration.317d9171.svg"},117:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var s=a(2),n=a(3),c=a(5),i=a(4),o=a(1),l=a.n(o),r=a(7),u=a(105),m=a.n(u),d=a(0),p=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).closeModel=function(){n.modelRef.current.removeAttribute("data-open"),n.modelRef.current.setAttribute("data-close","")},n.openModel=function(){n.modelRef.current.removeAttribute("data-close"),n.modelRef.current.setAttribute("data-open","")},n.modelRef=l.a.createRef(),n.cancelBtnRef=l.a.createRef(),n.state={msgType:n.props.msgType,msgText:n.props.msgText},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;"success"===this.state.msgType?(this.modelRef.current.removeAttribute("data-danger"),this.modelRef.current.removeAttribute("data-warning"),this.modelRef.current.setAttribute("data-success","")):"warning"===this.state.msgType?(this.modelRef.current.removeAttribute("data-success"),this.modelRef.current.removeAttribute("data-danger"),this.modelRef.current.setAttribute("data-warning","")):"danger"===this.state.msgType&&(this.modelRef.current.removeAttribute("data-success"),this.modelRef.current.removeAttribute("data-warning"),this.modelRef.current.setAttribute("data-danger","")),this.openModel(),this.cancelBtnRef.current.onclick=function(){e.closeModel(),e.props.onClose&&setTimeout((function(){return e.props.onClose()}),1e3)},this.props.timeOutToClose&&setTimeout((function(){e.closeModel(),e.props.onClose&&setTimeout((function(){return e.props.onClose()}),1e3)}),this.props.timeOutToClose)}},{key:"render",value:function(){return Object(d.jsxs)("div",{ref:this.modelRef,className:m.a.model,children:[Object(d.jsx)("p",{className:m.a.text,children:this.state.msgText}),Object(d.jsx)("span",{ref:this.cancelBtnRef,className:m.a["cancel-btn"]})]})}}]),a}(l.a.Component),g=a(106),f=a.n(g),h=a(25),b=a(24),j=function(e){Object(c.a)(o,e);var t=Object(i.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).showMsgBox=function(e,t){t?n.setState({msgBoxText:t}):"success"===e?n.setState({msgBoxText:"Successfully message sent. We will get back to you soon. "}):"danger"===e&&n.setState({msgBoxText:"Oops something went wrong, Unable to send message !"}),n.setState({msgBoxType:e,showMsgBox:!0})},n.validateEmail=function(e){var t=e.target.value;n.setState({isValidEmail:Object(h.validEmail)(t),userEmail:t})},n.validName=function(e){var t=e.target.value;n.setState({}),n.setState({isValidName:Object(h.validName)(t),name:t})},n.Submit=function(){try{if(n.state.isValidEmail)if(n.state.isValidName){n.submitBtnSpinnerRef.current.style.display="block";var e=""===n.state.name?null:n.state.name,t=""===n.state.userEmail?null:n.state.userEmail,a=""===n.state.message?null:n.state.message,s="https://charansrinivas-apis.herokuapp.com/srstudio/mail/send",c=n.imageInputRef.current.files[0],i=new FileReader,o={email:"sairoopastudio@gmail.com",appPwd:"auqdpsvjqnajzojj",name:e,user_mail:t,subject:"Message From "+e,message:a,base64_img:null,img_type:null,img_name:null};null!=c&&void 0!==c?(o.img_name=c.name,i.readAsDataURL(c),i.onload=function(){try{o.base64_img=i.result.split(",")[1],o.img_type=i.result.split(";")[0].split("/")[1],fetch(s,{method:"POST",body:JSON.stringify(o)}).then((function(e){200===e.status?n.showMsgBox("success"):500===e.status?n.showMsgBox("warning","Invalid email address,try again!"):n.showMsgBox("danger"),n.submitBtnSpinnerRef.current.style.display="none"})).catch((function(e){n.showMsgBox("danger"),n.submitBtnSpinnerRef.current.style.display="none"}))}catch(e){n.showMsgBox("danger"),n.submitBtnSpinnerRef.current.style.display="none"}}):(c=null,fetch(s,{method:"POST",body:JSON.stringify(o)}).then((function(e){200===e.status?n.showMsgBox("success"):500===e.status?n.showMsgBox("warning","Invalid email address,try again!"):n.showMsgBox("danger"),n.submitBtnSpinnerRef.current.style.display="none"})).catch((function(e){n.showMsgBox("danger"),n.submitBtnSpinnerRef.current.style.display="none"})))}else n.showMsgBox("warning","No of characters in name should be greater than 5");else n.showMsgBox("warning","Invalid email address, Please check again!")}catch(l){n.submitBtnSpinnerRef.current.style.display="none"}},n.leftBlock=function(){return Object(d.jsxs)("div",{className:f.a["left-block"],children:[Object(d.jsxs)("div",{className:f.a["left-block-text"],children:[Object(d.jsx)("h1",{children:"Fell free to contact"}),Object(d.jsx)("p",{children:"Give us a call or send us an email with any questions.We will get back to you. "})]}),Object(d.jsxs)("div",{className:f.a.contacts,children:[Object(d.jsxs)("div",{className:"".concat(f.a.phone," ").concat(f.a["contacts-item"]),children:[Object(d.jsx)("img",{alt:"phone",className:f.a["contacts-item-image"],src:a(32).default}),Object(d.jsx)("p",{className:f.a["contacts-item-text"],children:b.phNo})]}),Object(d.jsxs)("div",{className:"".concat(f.a.mail," ").concat(f.a["contacts-item"]),children:[Object(d.jsx)("img",{alt:"mail",className:f.a["contacts-item-image"],src:a(31).default}),Object(d.jsx)("p",{className:f.a["contacts-item-text"],children:b.email})]}),Object(d.jsxs)("div",{className:"".concat(f.a.location," ").concat(f.a["contacts-item"]),children:[Object(d.jsx)("img",{alt:"location",className:f.a["contacts-item-image"],src:a(30).default}),Object(d.jsx)("p",{className:f.a["contacts-item-text"],children:b.address})]})]}),Object(d.jsx)("img",{className:f.a["left-block-svg"],alt:"contact_illustration",src:a(107).default})]})},n.rightBlock=function(){return Object(d.jsx)("div",{className:f.a["right-block"],children:Object(d.jsxs)("div",{className:f.a["contact-card"],children:[Object(d.jsx)("img",{alt:"img_illustration",className:f.a["rocket-img"],src:a(108).default}),Object(d.jsx)("p",{className:f.a["card-heading"],children:"Message us!"}),Object(d.jsxs)("form",{id:"contact-card-form",children:[Object(d.jsxs)("div",{className:"".concat(f.a["name-section"]," ").concat(f.a["card-section"]),children:[Object(d.jsx)("p",{children:"Your name"}),Object(d.jsxs)("div",{className:f.a["card-input-item"],children:[Object(d.jsx)("input",{ref:n.nameInputRef,id:"name-input",onKeyUp:n.validName,type:"name",placeholder:"Name"}),Object(d.jsx)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:f.a["person-outline-svg"],children:Object(d.jsx)("path",{d:"M18 4.275C20.61 4.275 22.725 6.39 22.725 9C22.725 11.61 20.61 13.725 18 13.725C15.39 13.725 13.275 11.61 13.275 9C13.275 6.39 15.39 4.275 18 4.275ZM18 24.525C24.6825 24.525 31.725 27.81 31.725 29.25V31.725H4.275V29.25C4.275 27.81 11.3175 24.525 18 24.525ZM18 0C13.0275 0 9 4.0275 9 9C9 13.9725 13.0275 18 18 18C22.9725 18 27 13.9725 27 9C27 4.0275 22.9725 0 18 0ZM18 20.25C11.9925 20.25 0 23.265 0 29.25V36H36V29.25C36 23.265 24.0075 20.25 18 20.25Z",fill:"#868686"})}),Object(d.jsx)("span",{className:f.a["name-underline-focus"]}),Object(d.jsx)("span",{className:f.a["name-underline"]})]})]}),Object(d.jsxs)("div",{className:"".concat(f.a["mail-section"]," ").concat(f.a["card-section"]),children:[Object(d.jsx)("p",{children:"E-Mail"}),Object(d.jsxs)("div",{className:f.a["card-input-item"],children:[Object(d.jsx)("input",{ref:n.mailInputRef,type:"email",onKeyUp:n.validateEmail,id:"email",placeholder:"example@example.com"}),Object(d.jsx)("svg",{width:"36",height:"29",viewBox:"0 0 36 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:f.a["mail-outline-svg"],children:Object(d.jsx)("path",{d:"M32.4 0H3.6C1.62 0 0.018 1.62 0.018 3.6L0 25.2C0 27.18 1.62 28.8 3.6 28.8H32.4C34.38 28.8 36 27.18 36 25.2V3.6C36 1.62 34.38 0 32.4 0ZM32.4 25.2H3.6V7.2L18 16.2L32.4 7.2V25.2ZM18 12.6L3.6 3.6H32.4L18 12.6Z",fill:"#868686"})}),Object(d.jsx)("span",{className:f.a["mail-underline-focus"]}),Object(d.jsx)("span",{className:f.a["mail-underline"]})]})]}),Object(d.jsxs)("div",{className:"".concat(f.a["message-section"]," ").concat(f.a["card-section"]),children:[Object(d.jsx)("p",{children:"Message"}),Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{ref:n.messageTextInputRef,onKeyUp:function(e){n.setState({message:e.target.value})},placeholder:"Type your message to us",spellCheck:"true"})})]}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{ref:n.imageInputRef,type:"file",accept:"image/*",id:"upload-img",style:{display:"none"}}),Object(d.jsxs)("label",{htmlFor:"upload-img",className:f.a["upload-section"],children:[Object(d.jsx)("img",{alt:"link",src:a(33).default}),Object(d.jsx)("p",{children:"Upload image"})]})]}),Object(d.jsxs)("div",{onClick:n.Submit,className:f.a["submit-btn"],children:[Object(d.jsx)("span",{className:f.a["submit-btn-text"],children:"Submit"}),Object(d.jsx)("span",{ref:n.submitBtnSpinnerRef,className:f.a["submit-btn-spinner"]})]})]})]})})},n.desktoptView=function(){return Object(d.jsxs)(d.Fragment,{children:[n.leftBlock(),n.rightBlock()]})},n.nameInputRef=l.a.createRef(),n.mailInputRef=l.a.createRef(),n.messageInputRef=l.a.createRef(),n.imageInputRef=l.a.createRef(),n.phoneInputRef=l.a.createRef(),n.submitBtnSpinnerRef=l.a.createRef(),n.msgBoxCloseTimeout=5e3,n.maxMobileWidth=901,n.state={isMobile:window.innerWidth<n.maxMobileWidth,showMsgBox:!1,msgBoxText:"",msgBoxType:"",userEmail:"",name:"",message:"",isValidEmail:!1,isValidName:!1},n}return Object(n.a)(o,[{key:"componentDidMount",value:function(){var e=this;Object(r.a)((function(){e.setState({isMobile:window.innerWidth<e.maxMobileWidth})}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:f.a["contact-page"],children:[this.state.showMsgBox&&Object(d.jsx)(p,{msgText:this.state.msgBoxText,msgType:this.state.msgBoxType,onClose:function(){e.setState({showMsgBox:!1})},timeOutToClose:this.msgBoxCloseTimeout}),Object(d.jsx)("div",{className:f.a["contact-page-container"],children:this.desktoptView()})]})}}]),o}(o.Component)},24:function(e,t,a){"use strict";a.r(t),a.d(t,"primary",(function(){return s})),a.d(t,"secondary",(function(){return n})),a.d(t,"black",(function(){return c})),a.d(t,"light_green",(function(){return i})),a.d(t,"green",(function(){return o})),a.d(t,"red",(function(){return l})),a.d(t,"phNo",(function(){return r})),a.d(t,"address",(function(){return u})),a.d(t,"email",(function(){return m}));var s="#ef7512",n="#a34d07",c="#1d353f",i="#19a890",o="#1f766c",l="#cd3f1c",r="9299655518",u="Shop No:-13-6-616/i, Pk Layout, Tirupati - 517501",m="sairoopastudio@gmail.com"},30:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/location_outline.8769bd90.svg"},31:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/mail_outline.fc31e679.svg"},32:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/phone_outline.ae5e8f79.svg"},33:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/upload_outline.5ebfcf71.svg"}}]);
//# sourceMappingURL=7.30e6aa5e.chunk.js.map