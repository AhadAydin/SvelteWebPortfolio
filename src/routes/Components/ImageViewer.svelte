<script>
    import { nonpassive } from "svelte/legacy";

  let {active, images,index, imageViewFunc} = $props();
</script>

<!-- Frame -->
{#if active}
  <div class="fixed inset-0 border-t-0 border-12 z-47 flex flex-col"> 
    <nav class=" w-full h-12 bg-black z-48 flex justify-between items-center p-1 "> 
      <p href="/" class=" text-3xl ">A</p> 
    </nav> 
    
    
    <!-- Image Viewer -->
    <div class="relative w-full h-full bg-black/60 z-70 overflow-hidden flex items-center justify-center p-6">
      <button onclick={() => imageViewFunc(null,null,false)} class="absolute right-0 top-0 z-71 text-white hover:text-amber-200 px-4 py-2 bg-black border border-gray-400 ">Close Image View</button>
      {#if index > 0}
        <button onclick={() => imageViewFunc(images,index-1,true)} class="absolute left-0 top-1/2 z-71 text-white hover:text-amber-200 px-8 py-2 bg-black border border-gray-400 ">{"<"}</button>
      {/if}
      {#if index < images.length-1}
        <button onclick={() => imageViewFunc(images,index+1,true)} class="absolute right-0 top-1/2 z-71 text-white hover:text-amber-200 px-8 py-2 bg-black border border-gray-400">{">"}</button>
      {/if}
      <img src={images[index]} alt="" class="max-w-full max-h-full object-contain rounded-xs" />
    </div>

  </div> 
{/if}
