(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{156:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(163),c=a.n(l),o=a(164),m=a(161),p=(a(76),a(168)),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.category;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(i.a.createElement(p.a,{data:t,key:t.node.fields.slug}))}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},i.a.createElement("div",{className:"page"},i.a.createElement("h1",{className:"page__title"},t),i.a.createElement("div",{className:"page__body"},e))))},t}(i.a.Component);a.d(t,"pageQuery",function(){return d});var _=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.category;return i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement(c.a,{title:t+" - "+e}),i.a.createElement(m.a,this.props),i.a.createElement(u,this.props)))},t}(i.a.Component),d=(t.default=_,"1381222334")},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){e.exports=a.p+"static/profile-854916e6061a90e93f0ec2590dea5b91.jpg"},160:function(e,t,a){},161:function(e,t,a){"use strict";a(165);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(166),c=a.n(l),o=a(36),m=(a(157),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(o.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),p=(a(158),a(162),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.facebook,a=e.telegram,n=e.twitter,r=e.github,s=e.email;return i.a.createElement("div",{className:"links"},i.a.createElement("ul",{className:"links__list"},i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.facebook.com/"+t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-facebook"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.twitter.com/"+n,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-twitter"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.github.com/"+r,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-github"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"mailto:"+s},i.a.createElement("i",{className:"icon-mail"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://t.me/"+a},i.a.createElement("i",{className:"icon-paper-plane"})))))},t}(i.a.Component)),u=a(159),_=a.n(u),d=(a(160),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=(t.copyright,t.menu),s="/"===c()(e,"pathname","/"),l=i.a.createElement("div",null,i.a.createElement(o.Link,{to:"/"},i.a.createElement("img",{src:_.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),s?i.a.createElement("h1",{className:"sidebar__author-title"},i.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},n));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},l),i.a.createElement("div",null,i.a.createElement(p,{data:a}),i.a.createElement(m,{data:r}))))},t}(i.a.Component));t.a=d},168:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(36),c=a(170),o=a.n(c),m=(a(169),a(162),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,s=this.props.data.node.fields,c=s.slug,m=s.categorySlug;return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__meta"},i.a.createElement("time",{className:"post__meta-time",dateTime:o()(a).format("MMMM DD, YYYY")},o()(a).format("DD MMMM YYYY")),i.a.createElement("span",{className:"post__meta-divider"}),i.a.createElement("span",{className:"post__meta-category",key:m},i.a.createElement(l.Link,{to:m,className:"post__meta-category-link"},n))),i.a.createElement("h2",{className:"post__title"},i.a.createElement(l.Link,{className:"post__title-link",to:c},t)),i.a.createElement("p",{className:"post__description"},r),i.a.createElement(l.Link,{className:"post__readmore",to:c},"Read More"))},t}(i.a.Component));t.a=m},169:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-54df2c109e344c774e54.js.map