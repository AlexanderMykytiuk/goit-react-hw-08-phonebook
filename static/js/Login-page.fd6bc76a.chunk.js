(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{187:function(e,a,t){e.exports={LoginRegistrationPage:"common_LoginRegistrationPage__el0LV",textField:"common_textField__21lNN",margin:"common_margin__3_xRf",button:"common_button__280oC",mainTitle:"common_mainTitle__1qAgw",image:"common_image__3x1HD"}},218:function(e,a,t){"use strict";t.r(a);var n=t(3),i=t(54),o=t(31),s=t(57),l=t(56),r=t(0),c=t(12),m=t(41),h=t(187),d=t.n(h),g=t(220),u=t(222),b=t(2),j=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:""},e.handleChange=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return Object(b.jsxs)("div",{className:d.a.LoginRegistrationPage,children:[Object(b.jsx)("h2",{children:"Please sign in to your account"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("div",{className:d.a.margin,children:Object(b.jsx)(g.a,{label:"E-mail",variant:"outlined",className:d.a.textField,size:"small",type:"email",name:"email",value:a,onChange:this.handleChange})}),Object(b.jsx)("div",{className:d.a.margin,children:Object(b.jsx)(g.a,{label:"Password",variant:"outlined",className:d.a.textField,size:"small",type:"password",name:"password",value:t,onChange:this.handleChange})}),Object(b.jsx)("div",{children:Object(b.jsx)(u.a,{variant:"outlined",color:"primary",className:d.a.button,type:"submit",children:"Sign In"})})]})]})}}]),t}(r.Component),p={onLogin:m.a.login};a.default=Object(c.b)(null,p)(j)}}]);
//# sourceMappingURL=Login-page.fd6bc76a.chunk.js.map