import{r as i,j as e,A as p,m as u}from"./index-YRbH5Cpt.js";function d({children:r,translation:a,className:s=""}){const[o,t]=i.useState(!1);return a?e.jsxs("span",{className:`relative cursor-help border-b border-dotted border-current ${s}`,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),onTouchStart:n=>{n.preventDefault(),t(l=>!l)},children:[r,e.jsx(p,{children:o&&e.jsxs(u.span,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},transition:{duration:.15},className:`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5
                       bg-gray-900/95 border border-gray-600/50 text-white text-xs
                       rounded-lg whitespace-nowrap z-50 pointer-events-none
                       shadow-xl shadow-black/50`,children:[a,e.jsx("span",{className:`absolute top-full left-1/2 -translate-x-1/2 -mt-px
                             border-4 border-transparent border-t-gray-900/95`})]})})]}):e.jsx("span",{className:s,children:r})}export{d as H};
