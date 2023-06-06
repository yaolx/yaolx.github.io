import{r as a,R as E}from"./react.207e1340.js";import{y as ce,i as Ee,g as Re,m as $e,M as ze,O as We,P as je,Q as He,b as O,o as me,j as Z,R as ge,C as re,w as ue,r as Me,T as Fe,V as ae,W as xe}from"./index.7fa81305.js";import{l as fe}from"./lodash.b2cd96a7.js";import{D as Ve}from"./index.fe6afac3.js";import"./markmap.34840b8b.js";function ve(e){let n;const r=o=>()=>{n=null,e.apply(void 0,Ee(o))},t=function(){if(n==null){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];n=ce(r(i))}};return t.cancel=()=>{ce.cancel(n),n=null},t}const Ue=e=>{const{componentCls:n}=e;return{[n]:{position:"fixed",zIndex:e.zIndexPopup}}};var Xe=Re("Affix",e=>{const n=$e(e,{zIndexPopup:e.zIndexBase+10});return[Ue(n)]});function se(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ye(e,n,r){if(r!==void 0&&n.top>e.top-r)return r+n.top}function we(e,n,r){if(r!==void 0&&n.bottom<e.bottom+r){const t=window.innerHeight-n.bottom;return r+t}}var ee="/home/runner/work/yaolx.github.io/yaolx.github.io/node_modules/antd/es/affix/index.js";const Ce=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function Ye(){return typeof window!="undefined"?window:null}var te;(function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"})(te||(te={}));let _e=function(e){ze(r,e);var n=We(r);function r(){var t;return je(this,r),t=n.apply(this,arguments),t.state={status:te.None,lastAffix:!1,prevTarget:null},t.placeholderNodeRef=a.exports.createRef(),t.fixedNodeRef=a.exports.createRef(),t.addListeners=()=>{const o=t.getTargetFunc(),i=o==null?void 0:o(),{prevTarget:s}=t.state;s!==i&&(Ce.forEach(l=>{s==null||s.removeEventListener(l,t.lazyUpdatePosition),i==null||i.addEventListener(l,t.lazyUpdatePosition)}),t.updatePosition(),t.setState({prevTarget:i}))},t.removeListeners=()=>{t.timer&&(clearTimeout(t.timer),t.timer=null);const{prevTarget:o}=t.state,i=t.getTargetFunc(),s=i==null?void 0:i();Ce.forEach(l=>{s==null||s.removeEventListener(l,t.lazyUpdatePosition),o==null||o.removeEventListener(l,t.lazyUpdatePosition)}),t.updatePosition.cancel(),t.lazyUpdatePosition.cancel()},t.getOffsetTop=()=>{const{offsetBottom:o,offsetTop:i}=t.props;return o===void 0&&i===void 0?0:i},t.getOffsetBottom=()=>t.props.offsetBottom,t.measure=()=>{const{status:o,lastAffix:i}=t.state,{onChange:s}=t.props,l=t.getTargetFunc();if(o!==te.Prepare||!t.fixedNodeRef.current||!t.placeholderNodeRef.current||!l)return;const d=t.getOffsetTop(),x=t.getOffsetBottom(),p=l();if(p){const f={status:te.None},h=se(t.placeholderNodeRef.current);if(h.top===0&&h.left===0&&h.width===0&&h.height===0)return;const v=se(p),g=ye(h,v,d),b=we(h,v,x);g!==void 0?(f.affixStyle={position:"fixed",top:g,width:h.width,height:h.height},f.placeholderStyle={width:h.width,height:h.height}):b!==void 0&&(f.affixStyle={position:"fixed",bottom:b,width:h.width,height:h.height},f.placeholderStyle={width:h.width,height:h.height}),f.lastAffix=!!f.affixStyle,s&&i!==f.lastAffix&&s(f.lastAffix),t.setState(f)}},t.prepareMeasure=()=>{t.setState({status:te.Prepare,affixStyle:void 0,placeholderStyle:void 0});{const{onTestUpdatePosition:o}=t.props;o==null||o()}},t.updatePosition=ve(()=>{t.prepareMeasure()}),t.lazyUpdatePosition=ve(()=>{const o=t.getTargetFunc(),{affixStyle:i}=t.state;if(o&&i){const s=t.getOffsetTop(),l=t.getOffsetBottom(),d=o();if(d&&t.placeholderNodeRef.current){const x=se(d),p=se(t.placeholderNodeRef.current),f=ye(p,x,s),h=we(p,x,l);if(f!==void 0&&i.top===f||h!==void 0&&i.bottom===h)return}}t.prepareMeasure()}),t}return He(r,[{key:"getTargetFunc",value:function(){const{getTargetContainer:o}=this.context,{target:i}=this.props;return i!==void 0?i:o!=null?o:Ye}},{key:"componentDidMount",value:function(){this.timer=setTimeout(this.addListeners)}},{key:"componentDidUpdate",value:function(o){this.addListeners(),(o.offsetTop!==this.props.offsetTop||o.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"render",value:function(){const{affixStyle:o,placeholderStyle:i}=this.state,{affixPrefixCls:s,rootClassName:l,children:d}=this.props,x=O(o&&l,{[s]:!!o});let p=me(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls","rootClassName"]);return p=me(p,["onTestUpdatePosition"]),Z.exports.jsxDEV(ge,{onResize:this.updatePosition,children:Z.exports.jsxDEV("div",{...Object.assign({},p,{ref:this.placeholderNodeRef}),children:[o&&Z.exports.jsxDEV("div",{style:i,"aria-hidden":"true"},void 0,!1,{fileName:ee,lineNumber:240,columnNumber:38},this),Z.exports.jsxDEV("div",{className:x,ref:this.fixedNodeRef,style:o,children:Z.exports.jsxDEV(ge,{onResize:this.updatePosition,children:d},void 0,!1,{fileName:ee,lineNumber:247,columnNumber:23},this)},void 0,!1,{fileName:ee,lineNumber:243,columnNumber:24},this)]},void 0,!0,{fileName:ee,lineNumber:238,columnNumber:23},this)},void 0,!1,{fileName:ee,lineNumber:236,columnNumber:27},this)}}]),r}(E.Component);_e.contextType=re;const Pe=a.exports.forwardRef((e,n)=>{const{prefixCls:r,rootClassName:t}=e,{getPrefixCls:o}=a.exports.useContext(re),i=o("affix",r),[s,l]=Xe(i),d=Object.assign(Object.assign({},e),{affixPrefixCls:i,rootClassName:O(t,l)});return s(Z.exports.jsxDEV(_e,{...Object.assign({},d,{ref:n})},void 0,!1,{fileName:ee,lineNumber:269,columnNumber:32},globalThis))});Pe.displayName="Affix";var Ge=Pe;const be=e=>typeof e=="object"&&e!=null&&e.nodeType===1,ke=(e,n)=>(!n||e!=="hidden")&&e!=="visible"&&e!=="clip",de=(e,n)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return ke(r.overflowY,n)||ke(r.overflowX,n)||(t=>{const o=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}})(t);return!!o&&(o.clientHeight<t.scrollHeight||o.clientWidth<t.scrollWidth)})(e)}return!1},le=(e,n,r,t,o,i,s,l)=>i<e&&s>n||i>e&&s<n?0:i<=e&&l<=r||s>=n&&l>=r?i-e-t:s>n&&l<r||i<e&&l>r?s-n+o:0,qe=e=>{const n=e.parentElement;return n==null?e.getRootNode().host||null:n},Ne=(e,n)=>{var r,t,o,i;if(typeof document=="undefined")return[];const{scrollMode:s,block:l,inline:d,boundary:x,skipOverflowHiddenElements:p}=n,f=typeof x=="function"?x:$=>$!==x;if(!be(e))throw new TypeError("Invalid target");const h=document.scrollingElement||document.documentElement,v=[];let g=e;for(;be(g)&&f(g);){if(g=qe(g),g===h){v.push(g);break}g!=null&&g===document.body&&de(g)&&!de(document.documentElement)||g!=null&&de(g,p)&&v.push(g)}const b=(t=(r=window.visualViewport)==null?void 0:r.width)!=null?t:innerWidth,k=(i=(o=window.visualViewport)==null?void 0:o.height)!=null?i:innerHeight,{scrollX:y,scrollY:R}=window,{height:A,width:T,top:M,right:z,bottom:F,left:L}=e.getBoundingClientRect();let w=l==="start"||l==="nearest"?M:l==="end"?F:M+A/2,S=d==="center"?L+T/2:d==="end"?z:L;const ne=[];for(let $=0;$<v.length;$++){const m=v[$],{height:V,width:U,top:X,right:oe,bottom:W,left:B}=m.getBoundingClientRect();if(s==="if-needed"&&M>=0&&L>=0&&F<=k&&z<=b&&M>=X&&F<=W&&L>=B&&z<=oe)return ne;const j=getComputedStyle(m),Y=parseInt(j.borderLeftWidth,10),G=parseInt(j.borderTopWidth,10),q=parseInt(j.borderRightWidth,10),J=parseInt(j.borderBottomWidth,10);let _=0,P=0;const Q="offsetWidth"in m?m.offsetWidth-m.clientWidth-Y-q:0,c="offsetHeight"in m?m.offsetHeight-m.clientHeight-G-J:0,u="offsetWidth"in m?m.offsetWidth===0?0:U/m.offsetWidth:0,N="offsetHeight"in m?m.offsetHeight===0?0:V/m.offsetHeight:0;if(h===m)_=l==="start"?w:l==="end"?w-k:l==="nearest"?le(R,R+k,k,G,J,R+w,R+w+A,A):w-k/2,P=d==="start"?S:d==="center"?S-b/2:d==="end"?S-b:le(y,y+b,b,Y,q,y+S,y+S+T,T),_=Math.max(0,_+R),P=Math.max(0,P+y);else{_=l==="start"?w-X-G:l==="end"?w-W+J+c:l==="nearest"?le(X,W,V,G,J+c,w,w+A,A):w-(X+V/2)+c/2,P=d==="start"?S-B-Y:d==="center"?S-(B+U/2)+Q/2:d==="end"?S-oe+q+Q:le(B,oe,U,Y,q+Q,S,S+T,T);const{scrollLeft:C,scrollTop:K}=m;_=Math.max(0,Math.min(K+_/N,m.scrollHeight-V/N+c)),P=Math.max(0,Math.min(C+P/u,m.scrollWidth-U/u+Q)),w+=K-_,S+=C-P}ne.push({el:m,top:_,left:P})}return ne},Je=e=>e===!1?{block:"end",inline:"nearest"}:(n=>n===Object(n)&&Object.keys(n).length!==0)(e)?e:{block:"start",inline:"nearest"};function Qe(e,n){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(e))return;if((t=>typeof t=="object"&&typeof t.behavior=="function")(n))return n.behavior(Ne(e,n));const r=typeof n=="boolean"||n==null?void 0:n.behavior;for(const{el:t,top:o,left:i}of Ne(e,Je(n)))t.scroll({top:o,left:i,behavior:r})}function pe(e){return e!=null&&e===e.window}function Ae(e,n){var r,t;if(typeof window=="undefined")return 0;const o=n?"scrollTop":"scrollLeft";let i=0;return pe(e)?i=e[n?"pageYOffset":"pageXOffset"]:e instanceof Document?i=e.documentElement[o]:(e instanceof HTMLElement||e)&&(i=e[o]),e&&!pe(e)&&typeof i!="number"&&(i=(t=((r=e.ownerDocument)!==null&&r!==void 0?r:e).documentElement)===null||t===void 0?void 0:t[o]),i}function Ke(e,n,r,t){const o=r-n;return e/=t/2,e<1?o/2*e*e*e+n:o/2*((e-=2)*e*e+2)+n}function Ze(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:r=()=>window,callback:t,duration:o=450}=n,i=r(),s=Ae(i,!0),l=Date.now(),d=()=>{const p=Date.now()-l,f=Ke(p>o?o:p,s,e,o);pe(i)?i.scrollTo(window.pageXOffset,f):i instanceof Document||i.constructor.name==="HTMLDocument"?i.documentElement.scrollTop=f:i.scrollTop=f,p<o?ce(d):typeof t=="function"&&t()};ce(d)}const et=a.exports.createContext(void 0);var Le=et;const tt=e=>{const{href:n="#",title:r,prefixCls:t,children:o,className:i,target:s}=e,l=a.exports.useContext(Le),{registerLink:d,unregisterLink:x,scrollTo:p,onClick:f,activeLink:h,direction:v}=l||{};a.exports.useEffect(()=>(d==null||d(n),()=>{x==null||x(n)}),[n]);const g=T=>{f==null||f(T,{title:r,href:n}),p==null||p(n)};ue(!o||v!=="horizontal","Anchor.Link","`Anchor.Link children` is not supported when `Anchor` direction is horizontal");const{getPrefixCls:b}=a.exports.useContext(re),k=b("anchor",t),y=h===n,R=O(`${k}-link`,i,{[`${k}-link-active`]:y}),A=O(`${k}-link-title`,{[`${k}-link-title-active`]:y});return a.exports.createElement("div",{className:R},a.exports.createElement("a",{className:A,href:n,title:typeof r=="string"?r:"",target:s,onClick:g},r),v!=="horizontal"?o:null)};var Be=tt;const nt=e=>{const{componentCls:n,holderOffsetBlock:r,motionDurationSlow:t,lineWidthBold:o,colorPrimary:i,lineType:s,colorSplit:l}=e;return{[`${n}-wrapper`]:{marginBlockStart:-r,paddingBlockStart:r,backgroundColor:"transparent",[n]:Object.assign(Object.assign({},Me(e)),{position:"relative",paddingInlineStart:o,[`${n}-link`]:{paddingBlock:e.anchorPaddingBlock,paddingInline:`${e.anchorPaddingInline}px 0`,"&-title":Object.assign(Object.assign({},Fe),{position:"relative",display:"block",marginBlockEnd:e.anchorTitleBlock,color:e.colorText,transition:`all ${e.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${n}-link-title`]:{color:e.colorPrimary},[`${n}-link`]:{paddingBlock:e.anchorPaddingBlockSecondary}}}),[`&:not(${n}-wrapper-horizontal)`]:{[n]:{"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:`${o}px ${s} ${l}`,content:'" "'},[`${n}-ink`]:{position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:`top ${t} ease-in-out`,width:o,backgroundColor:i,[`&${n}-ink-visible`]:{display:"inline-block"}}}},[`${n}-fixed ${n}-ink ${n}-ink`]:{display:"none"}}}},ot=e=>{const{componentCls:n,motionDurationSlow:r,lineWidthBold:t,colorPrimary:o}=e;return{[`${n}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`1px ${e.lineType} ${e.colorSplit}`,content:'" "'},[n]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${n}-link:first-of-type`]:{paddingInline:0},[`${n}-ink`]:{position:"absolute",bottom:0,transition:`left ${r} ease-in-out, width ${r} ease-in-out`,height:t,backgroundColor:o}}}}};var it=Re("Anchor",e=>{const{fontSize:n,fontSizeLG:r,padding:t,paddingXXS:o}=e,i=$e(e,{holderOffsetBlock:o,anchorPaddingBlock:o,anchorPaddingBlockSecondary:o/2,anchorPaddingInline:t,anchorTitleBlock:n/14*3,anchorBallSize:r/2});return[nt(i),ot(i)]});function rt(){return window}function Te(e,n){if(!e.getClientRects().length)return 0;const r=e.getBoundingClientRect();return r.width||r.height?n===window?(n=e.ownerDocument.documentElement,r.top-n.clientTop):r.top-n.getBoundingClientRect().top:r.top}const Se=/#([\S ]+)$/,st=e=>{var n;const{rootClassName:r,anchorPrefixCls:t,className:o="",style:i,offsetTop:s,affix:l=!0,showInkInFixed:d=!1,children:x,items:p,direction:f="vertical",bounds:h,targetOffset:v,onClick:g,onChange:b,getContainer:k,getCurrentAnchor:y}=e;ue(!x,"Anchor","`Anchor children` is deprecated. Please use `items` instead."),ue(!(f==="horizontal"&&(p==null?void 0:p.some(c=>"children"in c))),"Anchor","`Anchor items#children` is not supported when `Anchor` direction is horizontal.");const[R,A]=a.exports.useState([]),[T,M]=a.exports.useState(null),z=a.exports.useRef(T),F=a.exports.useRef(null),L=a.exports.useRef(null),w=a.exports.useRef(!1),{direction:S,getTargetContainer:ne}=a.exports.useContext(re),$=(n=k!=null?k:ne)!==null&&n!==void 0?n:rt,m=JSON.stringify(R),V=ae(c=>{R.includes(c)||A(u=>[].concat(Ee(u),[c]))}),U=ae(c=>{R.includes(c)&&A(u=>u.filter(N=>N!==c))}),X=()=>{var c;const u=(c=F.current)===null||c===void 0?void 0:c.querySelector(`.${t}-link-title-active`);if(u&&L.current){const{style:N}=L.current,C=f==="horizontal";N.top=C?"":`${u.offsetTop+u.clientHeight/2}px`,N.height=C?"":`${u.clientHeight}px`,N.left=C?`${u.offsetLeft}px`:"",N.width=C?`${u.clientWidth}px`:"",C&&Qe(u,{scrollMode:"if-needed",block:"nearest"})}},oe=function(c){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;const C=[],K=$();return c.forEach(H=>{const I=Se.exec(H==null?void 0:H.toString());if(!I)return;const ie=document.getElementById(I[1]);if(ie){const he=Te(ie,K);he<u+N&&C.push({link:H,top:he})}}),C.length?C.reduce((I,ie)=>ie.top>I.top?ie:I).link:""},W=ae(c=>{if(z.current===c)return;const u=typeof y=="function"?y(c):c;M(u),z.current=u,b==null||b(c)}),B=a.exports.useCallback(()=>{if(w.current||typeof y=="function")return;const c=oe(R,v!==void 0?v:s||0,h);W(c)},[m,v,s]),j=a.exports.useCallback(c=>{W(c);const u=Se.exec(c);if(!u)return;const N=document.getElementById(u[1]);if(!N)return;const C=$(),K=Ae(C,!0),H=Te(N,C);let I=K+H;I-=v!==void 0?v:s||0,w.current=!0,Ze(I,{getContainer:$,callback(){w.current=!1}})},[v,s]),Y=O(r,`${t}-wrapper`,{[`${t}-wrapper-horizontal`]:f==="horizontal",[`${t}-rtl`]:S==="rtl"},o),G=O(t,{[`${t}-fixed`]:!l&&!d}),q=O(`${t}-ink`,{[`${t}-ink-visible`]:T}),J=Object.assign({maxHeight:s?`calc(100vh - ${s}px)`:"100vh"},i),_=c=>Array.isArray(c)?c.map(u=>a.exports.createElement(Be,Object.assign({},u,{key:u.key}),f==="vertical"&&_(u.children))):null,P=a.exports.createElement("div",{ref:F,className:Y,style:J},a.exports.createElement("div",{className:G},a.exports.createElement("span",{className:q,ref:L}),"items"in e?_(p):x));a.exports.useEffect(()=>{const c=$();return B(),c==null||c.addEventListener("scroll",B),()=>{c==null||c.removeEventListener("scroll",B)}},[m]),a.exports.useEffect(()=>{typeof y=="function"&&W(y(z.current||""))},[y]),a.exports.useEffect(()=>{X()},[f,y,m,T]);const Q=a.exports.useMemo(()=>({registerLink:V,unregisterLink:U,scrollTo:j,activeLink:T,onClick:g,direction:f}),[T,g,j,f]);return a.exports.createElement(Le.Provider,{value:Q},l?a.exports.createElement(Ge,{offsetTop:s,target:$},P):P)},Ie=e=>{const{prefixCls:n,rootClassName:r}=e,{getPrefixCls:t}=a.exports.useContext(re),o=t("anchor",n),[i,s]=it(o);return i(a.exports.createElement(st,Object.assign({},e,{rootClassName:O(s,r),anchorPrefixCls:o})))};Ie.displayName="Anchor";var lt=Ie;const De=lt;De.Link=Be;var Oe=De;const ct=new URL("/assets/avatar.d0686986.jpg",self.location);function at(e){const{src:n,defaultSrc:r=ct.href,...t}=e,o=E.useRef(null);return a.exports.useEffect(()=>{const{current:i}=o;if(i){const s=new Image;s.onload=()=>{i.src=n},n&&(s.src=n)}},[n]),E.createElement("img",{ref:o,src:r,...t})}const ft="_site_16y90_1",dt="_category_16y90_9",ut="_content_16y90_21",pt="_item_16y90_25",ht="_img_16y90_36",mt="_title_16y90_45",gt="_search_16y90_53",xt="_left_16y90_56",vt="_anchor_16y90_59";var D={site:ft,category:dt,content:ut,item:pt,img:ht,title:mt,search:gt,left:xt,anchor:vt};const{Link:yt}=Oe;function Tt(){const e=a.exports.useRef(null),n=(r,t)=>{r.preventDefault();const o=e.current,i=document.querySelector(`#${t.href}`);o&&i&&(o.scrollTop=i.offsetTop)};return E.createElement("div",{className:D.site,ref:e},E.createElement("div",{className:D.left},fe.exports.map(xe,r=>E.createElement("div",{className:D.category,key:r.id,id:r.id},E.createElement(Ve,{orientation:"left"},r.title),E.createElement("div",{className:D.content},fe.exports.map(r.children,t=>E.createElement("a",{href:t.href,key:t.id,className:D.item,target:"_blank",rel:"noreferrer"},E.createElement(at,{src:t.icon||"",className:D.img}),E.createElement("div",{className:D.title},t.title)))))),E.createElement(Oe,{affix:!1,onClick:n,className:D.anchor},fe.exports.map(xe,r=>E.createElement(yt,{href:`${r.id}`,title:r.title,key:r.id})))))}export{Tt as default};
