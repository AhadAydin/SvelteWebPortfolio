<script>

  let {header,texts,images,imageViewFunc,link,contribs} = $props();

  let active = $state(true);
  let hovered = $state(false);

  let btn;
  let frame;
  let rotx = $state(0);
  let roty = $state(0);

  function handleMove(e) {
    hovered = true;
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // -1 ile 1 arası normalize et
      const rotateX = ((y - centerY) / centerY) * -2; // dikey hareket
      const rotateY = ((x - centerX) / centerX) * 2;  // yatay hareket

      rotx=rotateX;
      roty=rotateY;

      btn.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }

  function reset() {
    hovered = false;
    btn.style.transition = "transform 0.2s ease";
    btn.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
    setTimeout(() => (btn.style.transition = ""), 500);
  }
</script>

<main>
  <div role="button" class="button-container  w-full h-fit " tabindex="0" on:mousemove={handleMove} on:mouseleave={reset}>  
    <div class="relative">
      <!-- Button -->
      <button bind:this={btn} class="border border-gray-600 backdrop-blur-lg bg-black/60 rounded-xs relative z-10 w-full h-auto  transform transition-transform duration-100 hover:scale-102 shadow-xl overflow-hidden" 
      style="box-shadow: 10px 10px 25px rgba(180,180,255,0.0);" >

        {#if active}
          <div class="flex flex-col h-full w-full justify-center items-center">

            <!-- Content % Images -->
            <div class="flex h-full w-full justify-center items-center flex-col md:flex-row">
              <!-- Content -->
              <div class="w-full md:w-[60%] h-full flex flex-col p-6 justify-start items-start">
                <h2 on:click={() => {active = !active; reset();}} class="w-full text-left text-3xl font-bold mb-6 hover:text-amber-200">{header}</h2>
                {#each texts as text}
                  <p class="w-full text-left text-md font-thin grow mb-2 cursor-text select-text" on:click|stopPropagation>{@html text}</p>
                {/each}
              </div>
              <!-- Images -->
              <div class="flex  flex-col h-full  justify-start items-center  space-y-2 
               w-full md:w-[40%] py-6
               pr-3 md:pr-6 pl-3 md:pl-0">
                {#if images}
                <img src={images[0]} alt="Project Image" class="w-full rounded-xs cursor-pointer border border-white/0 hover:border-amber-200" on:click={() => imageViewFunc(images,0,true)} on:click|stopPropagation />
                <div class="grid grid-cols-3 gap-2 h-auto w-full  justify-end items-start">
                  {#each images as image,i}
                    {#if i > 0}
                      <img src={image} alt="Project Image" class="w-full h-auto object-cover rounded-xs cursor-pointer border border-white/0 hover:border-amber-200" on:click={() => imageViewFunc(images,i,true)} on:click|stopPropagation />
                    {/if}
                  {/each}
                </div>
                {/if}
              </div>
            </div>

            <!--Link & Contributers-->
            {#if link}
              <div class="flex justify-between items-end w-full px-6 pb-6 text-amber-200">
                <div class="flex flex-col md:flex-row justify-center items-start md:items-center ">
                  <i class="no-underline fa-brands fa-github mr-2"></i>
                  <a class="underline hover:text-blue-200" href={link} target="_blank" rel="noopener noreferrer"> Project Link</a>
                </div>

                {#if contribs}
                  <div class="flex flex-col md:flex-row justify-center items-end md:items-center ">
                    <p class="text-white">Contributers: </p>
                    {#each contribs as contrib}
                      <a class="underline hover:text-blue-200 ml-2" href={contrib.link} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> {contrib.name}</a>
                    {/each}
                  </div>
                {/if}
              </div>
            {/if}
          </div>


        {:else}
          <div on:click={() => {active = !active; reset();}} class="w-full flex h-full justify-between items-center px-6 py-3">
            <h2  class="text-3xl font-bold text-left {hovered ? 'text-amber-200' : ''} ">{header} </h2>
            <h2 class="text-3xl font-bold ">+</h2>
          </div>
        {/if}

      </button>
    </div>
  </div>
</main>
<!-- box-shadow: 10px 10px 25px rgba(255,0,255,0.4); -->