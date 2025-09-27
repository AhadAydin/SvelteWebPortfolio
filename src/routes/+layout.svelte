<script>
  import "../app.css";
  import { slide } from "svelte/transition";

  let menu_active = $state(false);
</script>

<!-- Frame -->
<div class="fixed inset-0 border-t-0 border-12 border-black z-49 {menu_active ? 'pointer-events-auto' : 'pointer-events-none'} flex flex-col">
  <div class="flex flex-col">
    <nav class="w-full h-12 bg-black z-50 flex justify-between items-center p-1 pointer-events-auto
      text-white">
      <a href="/" class="font-thin text-3xl hover:text-amber-200">Ahad Aydın</a> 
      <ul class="hidden md:flex space-x-6"> 
        <li><a href="/Robotics" class="hover:text-amber-200">Robotics</a></li> 
        <li><a href="/Software" class="hover:text-amber-200">Software</a></li> 
        <li><a href="/Game" class="hover:text-amber-200">Game Dev & Art</a></li> 
      </ul> 
      <button class=" w-[30%] text-right inline md:hidden text-2xl hover:text-amber-200" aria-label="open/close menu" onclick={() => menu_active = !menu_active}>
        <i class={menu_active ? "fa-solid fa-ellipsis-vertical" : "fa-solid fa-bars"}></i>
      </button>
    </nav> 
    
    {#if menu_active}
      <nav
        transition:slide={{ duration: 250 }}
        class="w-full bg-black z-50 flex justify-end items-center pointer-events-auto text-white text-2xl border border-black"
      >
        <ul class="flex flex-col gap-4 pb-2 w-full"> 
          <li class="w-full text-right px-4"><a href="/Robotics" class="hover:text-amber-200">Robotics</a></li> 
          <li class="w-full text-right px-4"><a href="/Software" class="hover:text-amber-200">Software</a></li> 
          <li class="w-full text-right px-4"><a href="/Game" class="hover:text-amber-200">Game Dev & Art</a></li> 
        </ul> 
      </nav> 
    {/if}
  </div>
  
  <button
    class="relative w-full h-full border border-gray-500 z-49 {menu_active ? 'pointer-events-auto' : 'pointer-events-none'}"
    onclick={() => menu_active = false}
  > </button> 
</div>

<main> <slot /> </main>
