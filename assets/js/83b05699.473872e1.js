"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[2857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4173:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={id:"user_guide_intro",title:"Introduction",sidebar_position:1},o="Introduction",s={unversionedId:"guide/user_guide_intro",id:"guide/user_guide_intro",isDocsHomePage:!1,title:"Introduction",description:"Serenity BDD is an open source library that aims to make the idea of living documentation a reality.",source:"@site/docs/guide/intro.md",sourceDirName:"guide",slug:"/guide/user_guide_intro",permalink:"/docs/guide/user_guide_intro",editUrl:"https://github.com/serenity-bdd/serenity-bdd.github.io/blob/master/docs/guide/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"user_guide_intro",title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to Do Parallel Test Execution in Cucumber with Serenity",permalink:"/docs/tutorials/running_cucumber_scenarios_in_parallel"},next:{title:"Creating A New Project",permalink:"/docs/guide/getting_started"}},u=[],l={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Serenity BDD is an open source library that aims to make the idea of living documentation a reality."),(0,i.kt)("p",null,"Serenity BDD helps you write cleaner and more maintainable automated acceptance and regression tests faster. Serenity also uses the test results to produce illustrated, narrative reports that document and describe what your application does and how it works. Serenity tells you not only what tests have been executed, but more importantly, what requirements have been tested."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6446).Z})),(0,i.kt)("p",null,"One key advantage of using Serenity BDD is that you do not have to invest time in building and maintaining your own automation framework. Serenity BDD provides strong support for different types of automated acceptance testing, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Web testing with Selenium."),(0,i.kt)("li",{parentName:"ul"},"REST API testing with RestAssured."),(0,i.kt)("li",{parentName:"ul"},"Highly readable, maintainable and scalable automated testing with the Screenplay pattern."),(0,i.kt)("li",{parentName:"ul"},"BDD-style executable specifications with Cucumber")),(0,i.kt)("p",null,"Serenity not only reports on what requirements were tested, it also reports on ",(0,i.kt)("em",{parentName:"p"},"how")," they were tested. It includes step-by-step details of how a test played out, including optional screenshots, so your tests truly document what your application does."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6365).Z})),(0,i.kt)("p",null,"But Serenity is not just about reporting. The underlying aim of Serenity is to make it easy to quickly write well-structured, maintainable automated acceptance criteria, using your favourite BDD or conventional testing library. You can work with Behaviour-Driven-Development tools like Cucumber, or simply use JUnit (4 or 5). You can integrate with requirements stored in an external source (such as JIRA or any other test cases management tool), or just use a simple directory-based approach to organise your requirements."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1736).Z})),(0,i.kt)("p",null,"Serenity also provides a host of built-in features that make coding your test automation faster and more reliable. Testers working with Serenity typically report automating tests with less than half the code they would need for a conventional Selenium test."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Up until November 2014, Serenity went by the name of Thucydides. Thucydides was an Ancient Greek historian who wrote about the Peloponnesian War in the late 5th Century BCE. He was the first historian to write about events that he actually participated in, and in many cases, he wrote down the events that he directly witnessed."),(0,i.kt)("p",{parentName:"div"},"In a similar way Serenity BDD not only reports on test outcomes, but also records and documents how each scenario plays out, giving a particularly rich form of test reporting and living documentation."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6538).Z})))}c.isMDXComponent=!0},6446:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/intro-functional-coverage-c5e00a9cb3934c95180d52eb759546f8.png"},6538:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/intro-hoplites-85b048d25348e05c8bfda5cb3ec042b6.jpeg"},1736:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/intro-scenario-59cf31c744cdf53f45156c70676177d8.png"},6365:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/intro-step-details-6d3780258da747646a6da905b2f4e9b8.png"}}]);