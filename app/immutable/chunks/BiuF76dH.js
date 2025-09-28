import{t as D,j as _,k as A,ae as I,an as G,z as y,ao as H,ap as z,aq as V,ar as Y,M as S,n as q,L as W,O as p,as as j,at as K,au as X,av as J,a4 as Q,f as L,b as k,a5 as Z,g as h,aw as $,ax as R,e as tt}from"./Bu7sSwRO.js";import"./DsnmJJEf.js";import{i as et}from"./ImPtTzOv.js";import{o as at}from"./uQkkEogR.js";import{p as v,b as rt}from"./C44H1ABD.js";function gt(a,e,r=!1,l=!1,s=!1){var m=a,f="";D(()=>{var o=I;if(f===(f=e()??"")){_&&A();return}if(o.nodes_start!==null&&(G(o.nodes_start,o.nodes_end),o.nodes_start=o.nodes_end=null),f!==""){if(_){y.data;for(var i=A(),t=i;i!==null&&(i.nodeType!==H||i.data!=="");)t=i,i=z(i);if(i===null)throw V(),Y;S(y,t),m=q(i);return}var c=f+"";r?c=`<svg>${c}</svg>`:l&&(c=`<math>${c}</math>`);var d=W(c);if((r||l)&&(d=p(d)),S(p(d),d.lastChild),r||l)for(;p(d);)m.before(p(d));else m.before(d)}})}const ot=Symbol("is custom element"),it=Symbol("is html");function pt(a,e,r,l){var s=st(a);_&&(s[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||s[e]!==(s[e]=r)&&(e==="loading"&&(a[j]=r),r==null?a.removeAttribute(e):typeof r!="string"&&nt(a).includes(e)?a[e]=r:a.setAttribute(e,r))}function st(a){return a.__attributes??={[ot]:a.nodeName.includes("-"),[it]:a.namespaceURI===K}}var T=new Map;function nt(a){var e=a.getAttribute("is")||a.nodeName,r=T.get(e);if(r)return r;T.set(e,r=[]);for(var l,s=a,m=Element.prototype;m!==s;){l=J(s);for(var f in l)l[f].set&&r.push(f);s=X(s)}return r}var lt=L('<canvas class="fixed inset-0 w-full h-full -z-1 pointer-events-none"></canvas>');function vt(a,e){Q(e,!1);let r=v(e,"r",8,1),l=v(e,"g",8,1),s=v(e,"b",8,1),m=v(e,"speed",8,.1);const f=Math.random()*1e3;let o=$();at(()=>{const t=h(o).getContext("webgl");if(!t){console.error("WebGL not supported");return}const c=()=>{R(o,h(o).width=window.innerWidth),R(o,h(o).height=window.innerHeight),t.viewport(0,0,h(o).width,h(o).height)};window.addEventListener("resize",c),c();const d=`
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `,E=`
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uR;
      uniform float uG;
      uniform float uB;

      vec3 spectral_colour(float l) {
        float r=0.0,g=0.0,b=0.0;
        if ((l>=400.0)&&(l<410.0)) { float t=(l-400.0)/(410.0-400.0); r=+(0.33*t)-(0.20*t*t); }
        else if ((l>=410.0)&&(l<475.0)) { float t=(l-410.0)/(475.0-410.0); r=0.14-(0.13*t*t); }
        else if ((l>=545.0)&&(l<595.0)) { float t=(l-545.0)/(595.0-545.0); r=+(1.98*t)-(t*t); }
        else if ((l>=595.0)&&(l<650.0)) { float t=(l-595.0)/(650.0-595.0); r=0.98+(0.06*t)-(0.40*t*t); }
        else if ((l>=650.0)&&(l<700.0)) { float t=(l-650.0)/(700.0-650.0); r=0.65-(0.84*t)+(0.20*t*t); }
        if ((l>=415.0)&&(l<475.0)) { float t=(l-415.0)/(475.0-415.0); g=+(0.80*t*t); }
        else if ((l>=475.0)&&(l<590.0)) { float t=(l-475.0)/(590.0-475.0); g=0.8+(0.76*t)-(0.80*t*t); }
        else if ((l>=585.0)&&(l<639.0)) { float t=(l-585.0)/(639.0-585.0); g=0.82-(0.80*t); }
        if ((l>=400.0)&&(l<475.0)) { float t=(l-400.0)/(475.0-400.0); b=+(2.20*t)-(1.50*t*t); }
        else if ((l>=475.0)&&(l<560.0)) { float t=(l-475.0)/(560.0-475.0); b=0.7-(t)+(0.30*t*t); }
        return vec3(r,g,b);
      }

      vec3 shiftColor(vec3 col, vec3 target, float factor) {
        // factor 0 -> col, 1 -> target tamamen
        return mix(col, target, factor);
      }

      void main() {
        vec2 p = (2.0*gl_FragCoord.xy - iResolution.xy) / min(iResolution.x, iResolution.y);
        p *= 2.0;

        for(int i=0;i<8;i++) {
          vec2 newp = vec2(
            p.y + cos(p.x + iTime) - sin(p.y * cos(iTime * 0.2)),
            p.x - sin(p.y - iTime) - cos(p.x * sin(iTime * 0.3))
          );
          p = newp;
        }

        vec3 col = spectral_colour(p.y * 50.0 + 500.0 + sin(iTime * 0.6));

        // user tarafından belirlenen r,g,b hedefleri
        vec3 target = vec3(uR, uG, uB);

        // shift faktörü: ne kadar temaya kaydırmak istediğin
        float shiftFactor = 0.7; // 0.0-1.0 arası
        col = shiftColor(col, target, shiftFactor);

        col *= 2.5; // darkness effect
        gl_FragColor = vec4(col, 1.0);
      }
    `,u=t.createShader(t.VERTEX_SHADER);t.shaderSource(u,d),t.compileShader(u);const g=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(g,E),t.compileShader(g);const n=t.createProgram();t.attachShader(n,u),t.attachShader(n,g),t.linkProgram(n),t.useProgram(n);const b=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,b);const F=[-1,-1,1,-1,-1,1,1,1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(F),t.STATIC_DRAW);const w=t.getAttribLocation(n,"aVertexPosition");t.enableVertexAttribArray(w),t.vertexAttribPointer(w,2,t.FLOAT,!1,0,0);const U=t.getUniformLocation(n,"iTime"),M=t.getUniformLocation(n,"iResolution"),P=t.getUniformLocation(n,"uR"),N=t.getUniformLocation(n,"uG"),B=t.getUniformLocation(n,"uB");let C=Date.now();const x=()=>{const O=(Date.now()-C)/1e3*m()+f;t.uniform1f(U,O),t.uniform2f(M,h(o).width,h(o).height),t.uniform1f(P,r()),t.uniform1f(N,l()),t.uniform1f(B,s()),t.drawArrays(t.TRIANGLE_STRIP,0,4),requestAnimationFrame(x)};return x(),()=>{window.removeEventListener("resize",c),t.deleteProgram(n),t.deleteShader(u),t.deleteShader(g),t.deleteBuffer(b)}}),et();var i=lt();rt(i,t=>tt(o,t),()=>h(o)),k(a,i),Z()}var ft=L('<div class="w-full bg-black/30 h-full backdrop-blur-lg flex gap-4  px-16 pt-12 pb-14 border border-gray-400 text-white text-3xl "><h2 class="text-xl grow ">Powered by <a target="_blank" aria-label="https://svelte.dev/" href="https://svelte.dev/" class="font-extrabold hover:text-amber-200">Svelte</a></h2> <a class="text-3xl hover:text-amber-200" target="_blank" aria-label="https://www.linkedin.com/in/ahad-aydin/" href="https://www.linkedin.com/in/ahad-aydin/"><i class="fa-brands fa-linkedin"></i></a> <a class="text-3xl hover:text-amber-200" target="_blank" aria-label="https://github.com/AhadAydin" href="https://github.com/AhadAydin"><i class="fa-brands fa-square-github"></i></a> <a class="text-3xl hover:text-amber-200" target="_blank" aria-label="https://bdb-games.itch.io/" href="https://bdb-games.itch.io/"><i class="fa-brands fa-itch-io"></i></a> <a class="text-3xl hover:text-amber-200" target="_blank" aria-label="https://www.instagram.com/iko.vitriol/" href="https://www.instagram.com/iko.vitriol/"><i class="fa-brands fa-instagram"></i></a></div>');function _t(a){var e=ft();k(a,e)}export{vt as F,_t as a,gt as h,pt as s};
