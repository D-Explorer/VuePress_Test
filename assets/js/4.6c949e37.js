(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{404:function(t,e,r){"use strict";r.r(e);var a=r(402),n=r(400),i=r(401),o=r(403),s=(r(26),r(97),r(181),r(96),r(182),r(67),r(45),r(351),r(68),r(352),r(99),/#.*$/),u=/\.(md|html)$/,h=/\/$/,c=/^[a-z]+:/i;function l(t){return decodeURI(t).replace(s,"").replace(u,"")}function p(t){return c.test(t)}function d(t){if(p(t))return t;var e=t.match(s),r=e?e[0]:"",a=l(t);return h.test(a)?t:a+".html"+r}function f(t,e,r){if(p(e))return{type:"external",path:e};r&&(e=function(t,e,r){var a=t.charAt(0);if("/"===a)return t;if("?"===a||"#"===a)return e+t;var n=e.split("/");r&&n[n.length-1]||n.pop();for(var i=t.replace(/^\//,"").split("/"),o=0;o<i.length;o++){var s=i[o];".."===s?n.pop():"."!==s&&n.push(s)}""!==n[0]&&n.unshift("");return n.join("/")}(e,r));for(var a=l(e),n=0;n<t.length;n++)if(l(t[n].regularPath)===a)return Object.assign({},t[n],{type:"page",path:d(t[n].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function b(t,e,r,a){var n=r.pages,i=r.themeConfig,o=a&&i.locales&&i.locales[a]||i;if("auto"===(t.frontmatter.sidebar||o.sidebar||i.sidebar))return g(t);var s=o.sidebar||i.sidebar;if(s){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var r in e)if(0===(a=t,/(\.html|\/)$/.test(a)?a:a+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var a;return{}}(e,s),h=u.base,c=u.config;return"auto"===c?g(t):c?c.map((function(t){return function t(e,r,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return f(r,e,a);if(Array.isArray(e))return Object.assign(f(r,e[0],a),{title:e[1]});var i=e.children||[];return 0===i.length&&e.path?Object.assign(f(r,e.path,a),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:i.map((function(e){return t(e,r,a,n+1)})),collapsable:!1!==e.collapsable}}(t,n,h)})):[]}return[]}function g(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}var m={name:"Layout",components:{Home:a.a,Page:i.a,Sidebar:o.a,Navbar:n.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return b(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,r=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(r)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},v=r(44),S=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?r("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),r("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),r("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?r("Home"):r("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom"),t._v(" "),r("Vssue",{staticClass:"theme-default-content content_default",attrs:{options:{locale:"zh"}}})]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=S.exports}}]);