(self.webpackChunk=self.webpackChunk||[]).push([[518],{64413:function(de,se,f){"use strict";f.r(se),f.d(se,{default:function(){return Ga}});var Ce=f(15009),Q=f.n(Ce),je=f(99289),oe=f.n(je),m=f(958),be=[(0,m.F)("a23654bdc84f2b9").d("\u661F\u671F\u65E5"),(0,m.F)("2e4d0b3dd708930").d("\u661F\u671F\u4E00"),(0,m.F)("abf3e3e4c49e13c").d("\u661F\u671F\u4E8C"),(0,m.F)("791f5c5d3817522").d("\u661F\u671F\u4E09"),(0,m.F)("5fcf5174527fcf0").d("\u661F\u671F\u56DB"),(0,m.F)("41128c67d7aee99").d("\u661F\u671F\u4E94"),(0,m.F)("ae81f0697d5a8d8").d("\u661F\u671F\u516D")],Ja=function(d){return d.UNCLOSE_ALL="\u672A\u5173\u95EDBug\u603B\u6570",d.TO_BE_VERIFIED="\u5F85\u9A8C\u8BC1",d.PENDING="\u5F85\u5904\u7406",d}({}),w="LOCAK_KEY",K="VERSION",ie="1.1",ue=function(d){return d[d.DETE_ROW=0]="DETE_ROW",d[d.DETE_COL=0]="DETE_COL",d[d.SUMMARY_LABAL_COL=0]="SUMMARY_LABAL_COL",d[d.SUMMARY_NUM_COL=1]="SUMMARY_NUM_COL",d[d.PM_NAME_COL=15]="PM_NAME_COL",d[d.PM_FIRST_MODULE_COL=16]="PM_FIRST_MODULE_COL",d[d.PM_SECOND_MODULE_COL=17]="PM_SECOND_MODULE_COL",d}({}),Y=function(d){return d[d.NO_COL=0]="NO_COL",d[d.MODULE_COL=2]="MODULE_COL",d[d.BUG_TITLE_COL=7]="BUG_TITLE_COL",d[d.BUG_STATUS_COL=15]="BUG_STATUS_COL",d[d.BUG_CREATOR_COL=20]="BUG_CREATOR_COL",d[d.BUG_CREATE_TIME_COL=21]="BUG_CREATE_TIME_COL",d[d.BUG_RESOLVE_TIME_COL=28]="BUG_RESOLVE_TIME_COL",d[d.BUG_ASSIGNOR_COL=23]="BUG_ASSIGNOR_COL",d}({}),Fe={DATE_REG:/(\d{1,2})[月月](\d{1,2})[日日]/},ce=function(d){return d[d.MOUDLE=0]="MOUDLE",d[d.PEOPLE=1]="PEOPLE",d[d.BUG=2]="BUG",d}({}),pe=f(81354),ve=f.n(pe),Me=f(27484),I=f.n(Me),k=function(e){var t=ve().MD5(e);return t.toString(ve().enc.Hex)},Pa=function(e){var t=dayjs(e);return t.startOf("week").add(1,"day")},fe=function(e){var t=I()("1899-12-30"),a=Math.floor(e),r=e-a,s=t.add(a,"day"),o=86400,n=r*o,u=I()("1970-01-01 00:00:00").add(n,"second"),i=s.set("hour",u.hour()).set("minute",u.minute()).set("second",u.second());return i},$=function(e){return e.format("YYYY-MM-DD")},De=function(e){var t=[];return Object.keys(e).forEach(function(a){var r=e[a];t.push(r)}),t},Se=function(e,t){var a=e.filter(function(o){return o!==null}),r=a.reduce(function(o,n){return o[n.date.dateValue]=n,o},{}),s=t.filter(function(o){return!r[o.date.dateValue]});return a=Object.keys(r).map(function(o){return r[o]}).concat(s),a.sort(function(o,n){return I()(n.date.dateValue).valueOf()-I()(o.date.dateValue).valueOf()})},J=f(17030),Le=f(22144),Ne=f(93967),_=f.n(Ne),j=f(67294),Ae=f(5574),B=f.n(Ae),l=f(85893),Ve=function(){var e=(0,j.useState)(["0","0",":","0","0",":","0","0"]),t=B()(e,2),a=t[0],r=t[1],s=function(){var n=I()().format("HH:mm:ss");r(n.split(""))};return(0,j.useEffect)(function(){var o=setInterval(function(){s()},1e3);return function(){clearInterval(o)}},[]),(0,l.jsx)("div",{className:"time-clock",children:a.map(function(o,n){return(0,l.jsx)("div",{className:_()("time-clock-item",{"digit-bg":n!==2&&n!==5}),children:o},n)})})},Ie=Ve,ee=I()(),Te=be[ee.day()],Re=ee.format("YYYY-MM-DD"),Be=function(){var e=(0,J.useModel)("store"),t=e.allData,a=e.period,r=e.setPeriod,s=t.map(function(u){return u.date.dateValue}),o=(0,j.useRef)(null);(0,j.useEffect)(function(){s.length>0&&r(s[0])},[t]);var n=function(i){r($(i))};return(0,l.jsxs)("div",{className:_()("header","T2-header"),children:[(0,l.jsx)("div",{className:"header-left",children:(0,l.jsxs)("div",{className:"date-picker",ref:o,children:[(0,l.jsx)("div",{className:"label",children:(0,m.F)("f7b7b27fb396d88").d("\u9009\u62E9\u65E5\u671F\uFF1A")}),(0,l.jsx)("div",{className:"range-picker",children:(0,l.jsx)(Le.Z,{onChange:n,value:I()(a),disabledDate:function(i){var c=s.indexOf(i.format("YYYY-MM-DD"))===-1;return i.isAfter(ee)||c},allowClear:!1})})]})}),(0,l.jsx)("div",{className:"header-title",children:(0,l.jsx)("div",{className:"text",children:(0,m.F)("6392f0a7ab889e4").d("\u6FB3\u95E8111\u9879\u76EE\u6D4B\u8BD5\u603B\u89C8")})}),(0,l.jsxs)("div",{className:"header-right",children:[(0,l.jsx)(Ie,{}),(0,l.jsxs)("div",{className:"date",children:[(0,l.jsx)("div",{children:Te}),(0,l.jsx)("div",{children:Re})]})]})]})},Ye=Be,Oe=function(e){var t=e.title,a=e.bodyStyle,r=e.headerStyle,s=e.style,o=e.children,n=e.className;return(0,l.jsxs)("div",{className:_()("pannel-card","T2",n),style:s,children:[(0,l.jsx)("div",{className:"pannel-card-title",style:r,children:t}),(0,l.jsx)("div",{className:"pannel-card-body",style:a,children:o})]})},X=Oe,Ue=f(19632),q=f.n(Ue),ke=f(88484),Ge=f(10932),Ze=function(e){var t=(0,j.useRef)(null),a=e.onFile,r=function(){var n;(n=t.current)===null||n===void 0||n.click()},s=function(n){if(n.target.files&&!(n.target.files.length<1)){var u=q()(n.target.files);a&&a(u)}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Ge.ZP,{style:{background:"#0070ef",color:"#FFF",border:"none"},icon:(0,l.jsx)(ke.Z,{}),onClick:r,children:(0,m.F)("d6aff18816f5581").d("\u70B9\u51FB\u4E0A\u4F20")}),(0,l.jsx)("input",{type:"file",accept:".xlsx",ref:t,style:{display:"none"},onChange:s,multiple:!0})]})},ze=Ze,ae=f(84105),He=function(e){for(var t=[],a=1;a<e.length;a++){var r=e[a],s=parseInt(r[Y.NO_COL]);if(!s)break;var o=r[Y.MODULE_COL]||(0,m.F)("5de9fe27aae39b2").d("/\u672A\u77E5\u6A21\u584A/"),n=r[Y.BUG_TITLE_COL],u=r[Y.BUG_STATUS_COL]==="\u6FC0\u6D3B"?0:1,i=r[Y.BUG_CREATOR_COL],c=fe(parseFloat(r[Y.BUG_CREATE_TIME_COL]+"")),h=fe(parseFloat(r[Y.BUG_RESOLVE_TIME_COL]+"")),y=r[Y.BUG_ASSIGNOR_COL],v={NO:s,bugModule:o,title:n,status:u,creator:i,createTime:$(c),resolveTime:$(h),assignor:y};t.push(v)}return t},we=function(e){var t={unClose:0,needVerify:0,needHandle:0};t.unClose=e.length;for(var a=0;a<e.length;a++){var r=e[a].status;r===0?t.needHandle++:t.needVerify++}return t},Je=f(64599),Pe=f.n(Je),Ee=function(e,t){var a=Xe(e),r=qe(e),s=We(e,t.dateValue),o=Qe(a,r,s);return o},Qe=function(e,t,a){var r=Object.keys(t).map(function(o){var n=t[o],u=n.origin.code,i=a[u],c={name:n.name,code:n.code,unClose:0,needVerify:0,needHandle:0,today_increase:0,today_resolve:0,child:a[u],parent:n.parent},h=me(i);return c.needHandle=h.needHandle,c.needVerify=h.needVerify,c.unClose=h.unClose,c.today_increase=h.today_increase,c.today_resolve=h.today_resolve,c}),s=Object.keys(e).map(function(o){var n=e[o],u=n.code,i=r.filter(function(y){var v;return((v=y.parent)===null||v===void 0?void 0:v.code)===u}),c={name:n.name,code:n.code,unClose:0,needVerify:0,needHandle:0,today_increase:0,today_resolve:0,child:i},h=me(i);return c.needHandle=h.needHandle,c.needVerify=h.needVerify,c.unClose=h.unClose,c.today_increase=h.today_increase,c.today_resolve=h.today_resolve,c});return s},Xe=function(e){for(var t=new Set,a=/\/([^/()]+)(?:\/|\()/,r={},s=0;s<e.length;s++){var o=e[s].bugModule,n=a.exec(o),u=n?n[1]:(0,m.F)("c0387ff20981d7a").d("\u672A\u77E5\u6A21\u584A");t.add(u)}var i=Pe()(t),c;try{for(i.s();!(c=i.n()).done;){var h=c.value,y=k(h);r[y]={code:y,name:h}}}catch(v){i.e(v)}finally{i.f()}return r},qe=function(e){for(var t={},a=0;a<e.length;a++){var r=e[a].bugModule,s=/\/([^/()]+)(?:\/|\()/,o=k(r),n=s.exec(r),u=n?n[1]:(0,m.F)("c0387ff20981d7a").d("\u672A\u77E5\u6A21\u584A"),i=Ke(r),c=$e(u,i);c.origin={name:r,code:o},t[c.code]=c}return t},We=function(e,t){for(var a={},r=0;r<e.length;r++){var s=e[r].bugModule,o=k(s);a[o]===void 0&&(a[o]={});var n=a[o],u=e[r].assignor,i=k(e[r].assignor),c=e[r].status,h=e[r].createTime;if(!n[i]){var y={name:u,code:i,needHandle:0,needVerify:0,unClose:0,today_increase:0,today_resolve:0,parent:{code:o,name:s}};n[i]=y}c===0?n[i].needHandle++:(n[i].needVerify++,h===t&&(n[i].today_resolve+=1)),n[i].unClose++,h===t&&(n[i].today_increase+=1)}var v={};return Object.keys(a).forEach(function(g){var b=a[g],M=De(b);v[g]=M}),v},Ke=function(e){var t=/\/([^/()]+)(?:\/|\()/,a=e.lastIndexOf("/D"),r=e.lastIndexOf("/P"),s="";if(a!==-1)s=e.substring(a+1);else if(r!==-1)s=e.substring(r+1);else{var o=t.exec(e);s=o?o[1]:(0,m.F)("c0387ff20981d7a").d("\u672A\u77E5\u6A21\u584A")}return s},$e=function(e,t){var a=k(t),r=k(e);if(r!==a)return{code:a,name:t,parent:{code:r,name:e}};var s=k("".concat(t,"-sub"));return{code:s,name:t,parent:{code:r,name:e}}},me=function(e){var t=e.reduce(function(a,r){return a.unClose+=r.unClose,a.needVerify+=r.needVerify,a.needHandle+=r.needHandle,a.today_increase+=r.today_increase,a.today_resolve+=r.today_resolve,a},{unClose:0,needVerify:0,needHandle:0,today_increase:0,today_resolve:0});return t},_e=function(e){var t=Fe.DATE_REG.exec(e[ue.DETE_ROW][ue.DETE_COL]);if(!t)throw new Error("date error");return{text:(0,m.F)("3a55e69cc36e493",{arg0:t[0]}).d("\u622A\u81F3".concat(t[0],"Bug\u60C5\u51B5")),dateValue:I()("2024-".concat(t[1],"-").concat(t[2])).format("YYYY-MM-DD")}},ea=function(e,t){for(var a={today_increase:0,today_resolve:0,today_unhandle:0},r=0;r<e.length;r++){var s=e[r];s.createTime===t&&a.today_increase++,s.resolveTime===t&&s.status===1&&a.today_resolve++,s.createTime===t&&s.status===0&&a.today_unhandle++}return a},aa=function(e){for(var t=[],a=0;a<e.length;a++)if(e[a][19]){var r={title:e[a][19],discription:e[a][20]};t.push(r)}return t},ta=function(e){if(!e)throw new Error("complieFile Error");return new Promise(function(t){var a=new FileReader;a.readAsArrayBuffer(e),a.onload=function(r){var s,o=(s=r.target)===null||s===void 0?void 0:s.result,n=ae.ij(o,{type:"binary"});t({workbook:n,sheetNames:n.SheetNames,sheets:n.Sheets})}})},ra=function(e){for(var t=e.workbook,a=[],r=0;r<t.SheetNames.length;r++){var s=t.SheetNames[r],o=t.Sheets[s];a.push(o)}var n=ae.P6.sheet_to_json(a[ce.PEOPLE],{header:1}),u=ae.P6.sheet_to_json(a[ce.BUG],{header:1}),i=_e(n),c=He(u),h=we(c),y=Ee(c,i),v=ea(c,i.dateValue),g=aa(n);return{date:i,summaryData:h,moduleData:y,dayBugTrendData:v,riskData:g,bugWorkbookData:c}},na=function(){var d=oe()(Q()().mark(function e(t){var a;return Q()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t){s.next=2;break}throw new Error("file error");case 2:return s.next=4,ta(t);case 4:return a=s.sent,s.abrupt("return",ra(a));case 6:case"end":return s.stop()}},e)}));return function(t){return d.apply(this,arguments)}}(),he=f(46837),la=f(85673),da=function(e){var t=e.data,a=function(n){e.onClick(n)},r=t.map(function(o,n){return{title:(0,l.jsx)("a",{onClick:function(){return a(n+1)},children:o})}}),s=r.length>0?q()(r):[{title:(0,m.F)("f095d7f25abb7eb").d("\u6A21\u5757Bug")}];return(0,l.jsx)(la.Z,{items:s})},sa=da,oa=f(10010),ia=f(39398),ua=f(66600),ca=f(66829),va=function(e,t,a){return e<t?(0,l.jsxs)("div",{className:"cell-icon",children:[(0,l.jsx)("span",{className:"text",children:a}),(0,l.jsx)(oa.Z,{style:{fontSize:"16px",color:"#cc4e57"}}),(0,l.jsx)("span",{style:{color:"#cc4e57"},children:Math.abs(t-e)})]}):e>t?(0,l.jsxs)("div",{className:"cell-icon",children:[(0,l.jsx)("span",{className:"text",children:a}),(0,l.jsx)(ia.Z,{style:{fontSize:"16px",color:"#61d069"}}),(0,l.jsx)("span",{style:{color:"#61d069"},children:Math.abs(t-e)})]}):(0,l.jsxs)("div",{className:"cell-icon",children:[(0,l.jsx)("span",{className:"text",children:a}),(0,l.jsx)(ua.Z,{style:{fontSize:"16px",color:"#406ddf"}})]})},Ea=function(e,t){var a=t.module,r=_jsxs("div",{className:"name-popper-content",children:[_jsxs("div",{className:"name",children:[getMessage("789501f6e5fea1f").d("\u59D3\u540D\uFF1A"),e]}),_jsxs("div",{className:"name",children:[getMessage("f830a2c56d482f6").d("\u4E00\u7D1A\u6A21\u584A\uFF1A"),(a==null?void 0:a.top)||getMessage("ea1ca1f384267a4").d("\u66AB\u7121\u4FE1\u606F")]}),_jsxs("div",{className:"name",children:[getMessage("700dfe7c99bf3a3").d("\u4E8C\u7D1A\u6A21\u584A\uFF1A"),(a==null?void 0:a.sub)||getMessage("ea1ca1f384267a4").d("\u66AB\u7121\u4FE1\u606F")]})]});return _jsx("div",{className:"name-popper",children:_jsx(Popover,{content:r,arrow:!1,placement:"bottomRight",trigger:"hover",destroyTooltipOnHide:!0,children:e})})},fa=function(e){var t=e.columns,a=e.tableRenderData,r=e.tableRef;return(0,l.jsx)("div",{className:"table-container",children:(0,l.jsx)(ca.Z,{columns:t,dataSource:a,pagination:!1,scroll:{y:595},expandable:{defaultExpandAllRows:!0},ref:r})})},ma=fa,te=function(e,t){return function(a,r){var s=r.code,o=r[e],n=o;if(t){var u;n=(u=t[s])===null||u===void 0?void 0:u[e]}return va(n,o,a)}},ha=function(e){if(!e)return;var t=e.moduleData,a={};function r(s){if(!(s.length<1))for(var o=0;o<s.length;o++){var n=s[o],u=n.code;a[u]=n,n.child&&n.child.length>0&&r(n.child)}}return r(t),a},ge=function(e){e.sort(function(t,a){return a.unClose-t.unClose})},ga=function(e){var t=e.data,a=e.previous,r=(0,j.useRef)(),s=(0,j.useState)(1),o=B()(s,2),n=o[0],u=o[1],i=(0,j.useState)([]),c=B()(i,2),h=c[0],y=c[1],v=(0,j.useState)([]),g=B()(v,2),b=g[0],M=g[1],S=ha(a);(0,j.useEffect)(function(){var x=t.map(function(C,F){return{key:"".concat(F),name:C.name,needHandle:C.needHandle,needVerify:C.needVerify,unClose:C.unClose,child:C.child,code:C.code,today_increase:C.today_increase,today_resolve:C.today_resolve,children:C.child}});ge(x),y([x]),u(1)},[t]);var R=[{title:(0,m.F)("60b31ddc49ac2f1").d("\u6A21\u5757\u540D\u79F0"),key:"name",dataIndex:"name",filterSearch:!0,width:"35%",render:function(C,F){return(0,l.jsx)("div",{className:"name-cell-col",onClick:function(){return V(F)},children:C})}},{title:"\u4ECA\u65E5\u65B0\u589E",dataIndex:"today_increase",key:"today_increase",sorter:function(C,F){return F.unClose-C.unClose}},{title:"\u4ECA\u65E5\u5DF2\u89E3\u51B3",dataIndex:"today_resolve",key:"today_resolve",sorter:function(C,F){return F.unClose-C.unClose}},{title:(0,m.F)("99dbe10ddbd2e03").d("\u5F85\u5904\u7406"),dataIndex:"needHandle",key:"needHandle",render:te("needHandle",S),sorter:function(C,F){return F.needHandle-C.needHandle}},{title:(0,m.F)("59ee4c65abccfb8").d("\u5F85\u9A8C\u8BC1"),dataIndex:"needVerify",key:"needVerify",render:te("needVerify",S),sorter:function(C,F){return F.needVerify-C.needVerify}},{title:(0,m.F)("14dbf3ee4dbe603").d("\u672A\u5173\u95EDBug"),dataIndex:"unClose",key:"unClose",render:te("unClose",S),sorter:function(C,F){return F.unClose-C.unClose}}],V=function(C){var F;if(!(n>=3)){var T;T=(F=C.child)===null||F===void 0?void 0:F.map(function(N,le){return{key:"".concat(le),code:N.code,name:N.name,needHandle:N.needHandle,needVerify:N.needVerify,unClose:N.unClose,child:N.child,parent:N.parent,today_increase:N.today_increase,today_resolve:N.today_resolve,children:N.child}}),T&&(ge(T),y([].concat(q()(h),[T])),u(function(N){return N+1}),M([].concat(q()(b),[C.name])))}},Z=function(C){for(var F=[],T=0;T<C-1;T++)F.push(b[T]);M(F),u(C)};return(0,j.useEffect)(function(){var x=h.slice(0,n);y(x)},[n]),(0,l.jsxs)("div",{className:"module-rank",children:[(0,l.jsxs)("div",{className:"right-title",children:[(0,l.jsx)("div",{className:"bread",children:(0,l.jsx)(sa,{data:b,onClick:Z})}),(0,l.jsx)("div",{className:"compare-time",children:(a==null?void 0:a.date)&&(0,m.F)("48d8322560fb9a0",{arg0:a.date.dateValue}).d("\uFF08\u76F8\u8F83\u4E8E".concat(a.date.dateValue,"\uFF09"))})]}),(0,l.jsx)("div",{className:"module-rank-table",children:(0,l.jsx)(ma,{columns:R,tableRenderData:h[h.length-1],tableRef:r})})]})},ya=ga,xa=function(e,t){var a=(0,j.useState)(!1),r=B()(a,2),s=r[0],o=r[1],n=function(){o(!0)},u=function(){o(!1)};return(0,j.useEffect)(function(){var i,c,h=!0,y=!s,v=e==null?void 0:e.current,g=v==null||(i=v.querySelector(".ant-list"))===null||i===void 0?void 0:i.offsetHeight,b=v==null?void 0:v.offsetHeight,M=v==null||(c=v.querySelector(".ant-list"))===null||c===void 0?void 0:c.scrollTop;console.log(g,b,M);var S=!0,R=function V(){v&&S&&(y=!0,h?(M+=.3,v.scrollTo({top:M}),M>=g-b&&(h=!1)):(M=0,v.scrollTo({top:0}),h=!0),requestAnimationFrame(function(){y=!1,V()}))};return s||R(),function(){S=!1}},[s,t]),{handleTableMouseEnter:n,handleTableMouseLeave:u,isSelt:s}},re=f(69618),Ca=function(){var e=(0,J.useModel)("store"),t=e.formatedData,a=t.riskData,r=(0,j.useRef)(null),s=function(){var v={title:(0,m.F)("7799fdb1da37695").d("\u6807\u9898"),discription:(0,m.F)("32110e57d22a75e").d("\u5185\u5BB9")};c()},o=(0,j.useState)(!1),n=B()(o,2),u=n[0],i=n[1],c=function(){i(!0)},h=function(){i(!1)};return xa(r,[]),(0,l.jsx)("div",{className:"risk-list",ref:r,children:(0,l.jsx)(re.Z,{itemLayout:"horizontal",dataSource:a,renderItem:function(v,g){return(0,l.jsx)(re.Z.Item,{children:(0,l.jsx)(re.Z.Item.Meta,{title:v.title,description:v.discription})},g)}})})},ja=Ca,ba=function(){var e=(0,J.useModel)("store"),t=e.formatedData,a=e.period,r=t.summaryData,s=[{title:(0,m.F)("34d65f83eacbcf8").d("\u4ECA\u65E5\u65B0\u589EBug\u6570"),value:t.dayBugTrendData.today_increase,unit:(0,m.F)("37b6545a355f5c5").d("\u4E2A")},{title:(0,m.F)("d25da750240a0a3").d("\u4ECA\u65E5\u5DF2\u89E3\u51B3Bug\u6570"),value:t.dayBugTrendData.today_resolve,unit:(0,m.F)("37b6545a355f5c5").d("\u4E2A")}],o=[{title:(0,m.F)("a22c9d966fd2479").d("\u672A\u5173\u95EDBug\u603B\u6570"),value:r.unClose,unit:(0,m.F)("37b6545a355f5c5").d("\u4E2A")},{title:(0,m.F)("36d18af18ee85ca").d("\u5F85\u9A8C\u8BC1Bug\u603B\u6570"),value:r.needVerify,unit:(0,m.F)("37b6545a355f5c5").d("\u4E2A")},{title:(0,m.F)("f556bb1bd1766f6").d("\u5F85\u5904\u7406Bug\u603B\u6570"),value:r.needHandle,unit:(0,m.F)("37b6545a355f5c5").d("\u4E2A")}];return(0,l.jsxs)("div",{className:"summary-info",children:[(0,l.jsxs)("div",{className:"summary-info-left",children:[(0,l.jsx)("div",{className:"pic",children:(0,l.jsx)("img",{src:f(29034),alt:""})}),(0,l.jsx)("div",{className:"date",children:t.date.dateValue})]}),(0,l.jsxs)("div",{className:"summary-info-right",children:[(0,l.jsxs)("div",{className:"week-summary",children:[(0,l.jsx)("div",{className:"category",children:(0,m.F)("ffb98cd32bfec6f").d("\u4ECA\u65E5\u6570\u636E")}),(0,l.jsx)("div",{className:"content",children:s.map(function(n,u){return(0,l.jsxs)("div",{className:"info-item",children:[(0,l.jsx)("div",{className:"title",children:n.title}),(0,l.jsxs)("div",{className:"value",children:[n.value,(0,l.jsx)("span",{className:"unit",children:n.unit})]})]},u)})})]}),(0,l.jsxs)("div",{className:"all-summary",children:[(0,l.jsx)("div",{className:"category",children:(0,m.F)("55ce10cc39fef07").d("\u603B\u89C8")}),(0,l.jsx)("div",{className:"content",children:o.map(function(n,u){return(0,l.jsxs)("div",{className:"info-item",children:[(0,l.jsx)("div",{className:"title",children:n.title}),(0,l.jsxs)("div",{className:"value",children:[n.value,(0,l.jsx)("span",{className:"unit",children:n.unit})]})]},u)})})]})]})]})},Fa=ba,pa=f(87155),Ma=f(97369),Da=f(64665),Sa=f(75171),La=f(41151),Na=f(78537),Aa=f(55793),Va=f(35183),Ia=f(78264),Ta=f(6228),Ra=f(96486),Qa=function(e){var t="",a=e.length,r=5,s=Math.ceil(a/r);if(a>r)for(var o=0;o<s;o++){var n="",u=o*r,i=u+r;o===s-1?n=e.substring(u,a):n=e.substring(u,i)+`
`,t+=n}else t=e;return t},Ba={grid:{left:5,right:10,top:25,bottom:10,containLabel:!0},xAxis:[{type:"category",data:[I()().format("YYYY-MM-DD")],axisTick:{},axisLine:{lineStyle:{color:"#353842"}},axisLabel:{interval:0,fontSize:16,color:"#FFF",padding:10}}],yAxis:{type:"value",nameTextStyle:{color:"#FFF",padding:[0,35,5,0]},splitLine:{lineStyle:{type:"dashed",color:"#465167"}},axisLabel:{fontSize:16,color:"#FFF",interval:3}},series:[{name:"",data:[],type:"line",emphasis:{focus:"series"},smooth:!0,itemStyle:{color:"#01F1E3"},zlevel:11},{data:[],name:(0,m.F)("a027216de51002d").d("\u7D2F\u8A08\u8655\u7406bug\u6578"),type:"line",emphasis:{focus:"series"},smooth:!0,itemStyle:{borderRadius:[6,6,0,0],color:"#ffc000"},zlevel:11}],tooltip:{show:!0,trigger:"axis",axisPointer:{type:"shadow"}}},ye=Ba;Va.D([Sa.N,La.N,Na.N,Aa.N,Ma.N,Da.N,Ta.N]);var Ya=[(0,m.F)("7863aaa84f47e80").d("\u5F85\u5904\u7406Bug"),(0,m.F)("3406daeab82193b").d("\u5F85\u9A8C\u8BC1Bug"),(0,m.F)("14dbf3ee4dbe603").d("\u672A\u5173\u95EDBug")].map(function(d,e){return{value:"".concat(e),label:d}}),Oa=["#01F1E3","#7D40FF","#406ddf"],Ua=function(e){var t=e.dataIndex,a=(0,J.useModel)("store"),r=a.allData,s=a.period,o=(0,j.useRef)(null),n=(0,j.useRef)(null),u=(0,j.useState)([]),i=B()(u,2),c=i[0],h=i[1],y=(0,j.useState)(0),v=B()(y,2),g=v[0],b=v[1],M=(0,j.useState)("0"),S=B()(M,2),R=S[0],V=S[1],Z=function(){var p;(p=o.current)===null||p===void 0||p.getEchartsInstance().dispatchAction({type:"showTip",dataIndex:g,seriesIndex:0})},x=function(){n.current&&clearInterval(n.current),Z()},C=function(p){x(),Z();var A=setInterval(function(){b(function(D){return(D+1)%p})},2e3);n.current=A};(0,j.useEffect)(function(){C(c.length)},[c]),(0,j.useEffect)(function(){if(g%7===0){var L;(L=o.current)===null||L===void 0||L.getEchartsInstance().dispatchAction({type:"dataZoom",startValue:g,endValue:g+6})}Z()},[g]);var F=function(p){V(p),N(p)},T=function(){for(var p=[],A=0;A<c.length;A++){var D=c[A],P=D.summaryData.needHandle,G=D.summaryData.needVerify,O=D.summaryData.unClose,z={date:D.date.dateValue,numData:[P,G,O]};p.push(z)}for(var E={},H=[0,0,0],U=r.length-1;U>=0;U--){var W=r[U],za=W.dayBugTrendData.today_increase,Ha=W.dayBugTrendData.today_unhandle,wa=W.dayBugTrendData.today_resolve;H[0]+=Ha,H[1]+=wa,H[2]+=za,E[W.date.dateValue]=[].concat(H)}return{seriesData:p,dayBugMap:E}},N=function(p){var A,D=T(),P=D.seriesData,G=D.dayBugMap,O=(0,Ra.cloneDeep)(ye),z=parseInt(p),E=[],H=c.map(function(U){return U.date.dateValue});O.xAxis[0].data=H,O.series[0].data=P.map(function(U){return E.push(G[U.date][z]),U.numData[z]}),O.series[0].itemStyle.color=Oa[z],O.series[0].name=Ya[z].label,O.series[1].data=E,(A=o.current)===null||A===void 0||A.getEchartsInstance().setOption(O)};(0,j.useEffect)(function(){var L=r.findIndex(function(P){var G;return((G=P.date)===null||G===void 0?void 0:G.dateValue)===s}),p=L,A=Math.min(L+7,r.length),D=r.slice(p,A).reverse();h(D)},[r,s]);var le=function(p,A){var D;(D=o.current)===null||D===void 0||D.getEchartsInstance().on(p,A)},Za=function(p,A){var D;(D=o.current)===null||D===void 0||D.getEchartsInstance().off(p,A)},xe=function(p){b(p.batch[0].dataIndex)};return(0,j.useEffect)(function(){return b(0),N(t),le("highlight",xe),function(){Za("highlight",xe)}},[c]),(0,l.jsx)("div",{className:"charts",onMouseEnter:x,onMouseLeave:function(){return C(c.length)},children:(0,l.jsx)(pa.Z,{style:{height:"100%"},echarts:Ia,ref:o,option:ye})})},ne=Ua,ka=function(){var e=(0,J.useModel)("store"),t=e.allData,a=e.setAllData,r=e.formatedData,s=e.setFormatedData,o=e.period,n=e.setPeriod,u=function(){var y=oe()(Q()().mark(function v(g){var b,M,S,R,V;return Q()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:x.prev=0,b=[],M=0;case 3:if(!(M<g.length)){x.next=12;break}return S=g[M],x.next=7,na(S);case 7:R=x.sent,b.push(R);case 9:M++,x.next=3;break;case 12:if(!(!b||b.length<1)){x.next=14;break}return x.abrupt("return");case 14:V=Se(b,t),s(V[0]),a(V),i(V),n(V[0].date.dateValue),he.ZP.success((0,m.F)("da1cf0b7ac072f4").d("\u89E3\u6790\u6210\u529F")),x.next=26;break;case 22:x.prev=22,x.t0=x.catch(0),console.log(x.t0),he.ZP.error((0,m.F)("8feb1a279c6a6f7").d("\u89E3\u6790\u5931\u6557"));case 26:case"end":return x.stop()}},v,null,[[0,22]])}));return function(g){return y.apply(this,arguments)}}(),i=function(v){var g=localStorage.getItem(w);g&&localStorage.removeItem(w),localStorage.setItem(w,JSON.stringify(v))};(0,j.useEffect)(function(){var y=localStorage.getItem(K);(!y||y!==ie)&&(localStorage.removeItem(K),localStorage.removeItem(w),localStorage.setItem(K,ie));var v=localStorage.getItem(w);if(v){var g=JSON.parse(v);g.length>0&&(a(g),s(g[0]))}},[]),(0,j.useEffect)(function(){var y=t.find(function(v){var g;return((g=v.date)===null||g===void 0?void 0:g.dateValue)===o});y&&s(y)},[o]);var c=function(){for(var v=r.date.dateValue,g=v,b=0;b<t.length;b++){var M=t[b],S=I()(M.date.dateValue),R=I()(v);S.isBefore(R)&&R.diff(S,"day")<=7&&(g=S.format("YYYY-MM-DD"))}return t.find(function(V){return V.date.dateValue===g})},h=c();return(0,l.jsxs)("div",{className:"bug-view",children:[(0,l.jsx)(Ye,{}),(0,l.jsx)("div",{className:"uploadbtn",children:(0,l.jsx)(ze,{onFile:u})}),(0,l.jsxs)("div",{className:"main",children:[(0,l.jsxs)("div",{className:"left",children:[(0,l.jsx)("div",{className:"left_1",children:(0,l.jsx)(Fa,{})}),(0,l.jsx)("div",{className:"left_3",children:(0,l.jsx)(X,{title:(0,m.F)("cd10664d898196f").d("\u5F85\u89E3\u51B3Bug"),className:"bg2",children:(0,l.jsx)(ne,{data:r.moduleData,dataIndex:"0"})})}),(0,l.jsx)("div",{className:"left_3",children:(0,l.jsx)(X,{title:(0,m.F)("7863aaa84f47e80").d("\u5F85\u5904\u7406Bug"),className:"bg2",children:(0,l.jsx)(ne,{data:r.moduleData,dataIndex:"1"})})}),(0,l.jsx)("div",{className:"left_3",children:(0,l.jsx)(X,{title:(0,m.F)("14dbf3ee4dbe603").d("\u672A\u5173\u95EDBug"),className:"bg2",children:(0,l.jsx)(ne,{data:r.moduleData,dataIndex:"2"})})})]}),(0,l.jsxs)("div",{className:"right",children:[(0,l.jsx)("div",{className:"info",children:(0,l.jsx)(X,{title:(0,m.F)("b3dccaeae73afad").d("\u8D44\u8BAF"),className:"bg2",children:(0,l.jsx)(ja,{})})}),(0,l.jsx)("div",{className:"module",children:(0,l.jsx)(ya,{data:r.moduleData,previous:h})})]})]})]})},Ga=ka},29034:function(de){"use strict";de.exports="data:image/jpeg;base64,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"},42480:function(){},20067:function(){}}]);
