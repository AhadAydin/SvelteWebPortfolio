<script>

  let {header,icon,link,tc,target_blank} = $props();

  let btn;
  let frame;
  let rotx = $state(0);
  let roty = $state(0);
  

  function handleMove(e) {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // -1 ile 1 arası normalize et
      const rotateX = ((y - centerY) / centerY) * -24; // dikey hareket
      const rotateY = ((x - centerX) / centerX) * 24;  // yatay hareket

      rotx=rotateX;
      roty=rotateY;

      btn.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }

  function reset() {

    btn.style.transition = "transform 0.2s ease";
    btn.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
    setTimeout(() => (btn.style.transition = ""), 500);
  }
</script>

<a href="{link}" role="button" class="block button-container w-[100%] h-full " target={target_blank ? "_blank" : ""} tabindex="0" on:mousemove={handleMove} on:mouseleave={reset}>  
  <div class="relative">
    <!-- Button -->
    <button  bind:this={btn} class="backdrop-blur-sm {tc} rounded-xs relative z-10 w-[100%] text-3xl font-bold cursor-pointer transform transition-transform duration-100 hover:scale-105 shadow-xl "
    style="box-shadow: 10px 10px 25px rgba(0,0,60,0.4);">
      <div class="w-full h-full flex flex-col px-6 py-4">
        <h2 class="w-full  text-left grow">{@html header}</h2>
        <p class="w-full  text-right  ">{@html icon}</p>
      </div>
    </button>

  </div>
</a>
<!-- box-shadow: 10px 10px 25px rgba(255,0,255,0.4); -->