import{t as G,j as x,k as R,a7 as M,a8 as z,z as y,a9 as N,aa as V,ab as H,ac as I,M as A,n as W,L as Y,O as g,a4 as q,f as S,b as T,a5 as j,g as n,ad as X,ae as k,e as J}from"./chCDLEpG.js";import"./DsnmJJEf.js";import{i as K}from"./BcyGDtR8.js";import{o as Q}from"./BTqCB52j.js";import{p as b,b as Z}from"./BrzmBaiC.js";function lt(f,o,c=!1,d=!1,v=!1){var h=f,s="";G(()=>{var e=M;if(s===(s=o()??"")){x&&R();return}if(e.nodes_start!==null&&(z(e.nodes_start,e.nodes_end),e.nodes_start=e.nodes_end=null),s!==""){if(x){y.data;for(var a=R(),t=a;a!==null&&(a.nodeType!==N||a.data!=="");)t=a,a=V(a);if(a===null)throw H(),I;A(y,t),h=W(a);return}var i=s+"";c?i=`<svg>${i}</svg>`:d&&(i=`<math>${i}</math>`);var l=Y(i);if((c||d)&&(l=g(l)),A(g(l),l.lastChild),c||d)for(;g(l);)h.before(g(l));else h.before(l)}})}var $=S('<canvas class="fixed inset-0 w-full h-full -z-1 pointer-events-none"></canvas>');function nt(f,o){q(o,!1);let c=b(o,"r",8,1),d=b(o,"g",8,1),v=b(o,"b",8,1),h=b(o,"speed",8,.01);const s=Math.random()*1e3;let e=X();Q(()=>{const t=n(e).getContext("webgl");if(!t){console.error("WebGL not supported");return}const i=()=>{k(e,n(e).width=window.innerWidth),k(e,n(e).height=window.innerHeight),t.viewport(0,0,n(e).width,n(e).height)};window.addEventListener("resize",i),i();const l=`
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `,L=`
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

        for(int i=0;i<12;i++) {
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
    `,m=t.createShader(t.VERTEX_SHADER);t.shaderSource(m,l),t.compileShader(m);const u=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(u,L),t.compileShader(u);const r=t.createProgram();t.attachShader(r,m),t.attachShader(r,u),t.linkProgram(r),t.useProgram(r);const p=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,p);const F=[-1,-1,1,-1,-1,1,1,1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(F),t.STATIC_DRAW);const _=t.getAttribLocation(r,"aVertexPosition");t.enableVertexAttribArray(_),t.vertexAttribPointer(_,2,t.FLOAT,!1,0,0);const E=t.getUniformLocation(r,"iTime"),P=t.getUniformLocation(r,"iResolution"),U=t.getUniformLocation(r,"uR"),B=t.getUniformLocation(r,"uG"),C=t.getUniformLocation(r,"uB");let D=Date.now();const w=()=>{const O=(Date.now()-D)/1e3*h()+s;t.uniform1f(E,O),t.uniform2f(P,n(e).width,n(e).height),t.uniform1f(U,c()),t.uniform1f(B,d()),t.uniform1f(C,v()),t.drawArrays(t.TRIANGLE_STRIP,0,4),requestAnimationFrame(w)};return w(),()=>{window.removeEventListener("resize",i),t.deleteProgram(r),t.deleteShader(m),t.deleteShader(u),t.deleteBuffer(p)}}),K();var a=$();Z(a,t=>J(e,t),()=>n(e)),T(f,a),j()}var tt=S('<div class="w-full bg-black/30 h-full backdrop-blur-lg flex gap-4  px-16 pt-12 pb-14 border border-gray-400 text-white text-3xl "><h2 class="text-xl grow ">Powered by <a rel="external" target="_blank" aria-label="https://svelte.dev/" href="https://svelte.dev/" class="font-extrabold hover:text-amber-200">Svelte</a></h2> <a class="text-3xl hover:text-amber-200" rel="external" target="_blank" aria-label="https://www.linkedin.com/in/ahad-aydin/" href="https://www.linkedin.com/in/ahad-aydin/"><i class="fa-brands fa-linkedin"></i></a> <a class="text-3xl hover:text-amber-200" rel="external" target="_blank" aria-label="https://github.com/AhadAydin" href="https://github.com/AhadAydin"><i class="fa-brands fa-square-github"></i></a> <a class="text-3xl hover:text-amber-200" rel="external" target="_blank" aria-label="https://bdb-games.itch.io/" href="https://bdb-games.itch.io/"><i class="fa-brands fa-itch-io"></i></a> <a class="text-3xl hover:text-amber-200" rel="external" target="_blank" aria-label="https://www.instagram.com/iko.vitriol/" href="https://www.instagram.com/iko.vitriol/"><i class="fa-brands fa-instagram"></i></a></div>');function st(f){var o=tt();T(f,o)}export{nt as F,st as a,lt as h};
