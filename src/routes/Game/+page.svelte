<script>
  import PerspectiveCard from "../Components/PerspectiveCard.svelte";
  import PerspectiveEntry from "../Components/PerspectiveEntry.svelte";
  import FluidBackground from "../Components/FluidBackground.svelte";
    import ImageViewer from "../Components/ImageViewer.svelte";
    import Footer from "../Components/Footer.svelte";


  const welcomeHeader = "Game Development & Art Projects";
  const welcomeSubheader = "Game Development";
  const welcomeSubheader2 = "Art & Design";
  const welcomeMessage = "I’ve been working with Unity for a few years, focusing mainly on 2D projects. Some of my creations are available to play on itch.io.";

    let view_image = $state(false);
    let current_images = $state([]);
    let current_idx = $state(0);
    function imageViewFunc(images,idx,active) {
        view_image = active;
        if (images) {  
            current_images = images;
            current_idx = idx;
            console.log("imgs - ", images);
            console.log("idx - ", idx);
            console.log(current_images);
        }
    }

  let projects = [
    {header: "Topdown Chevalier's Unforgiving Mayhem", texts:["I developed this game using Unity in 2022. In this top-down view game, our character casts spells with a magical flute to fend off monsters trying to kill us. As monsters are defeated, XP is earned, which can be used to select upgrades from an upgrade screen, continuing the game loop. At certain XP intervals, bosses appear, and with well-combined upgrades, these bosses can be defeated within seconds. As the game progresses, more enemies appear on the screen, leading to more XP gain.",
    "This project allowed me to better understand Unity 2D, create 2D assets, learn about state machines and C# interfaces. Similarly, I learned to implement sound effects and musics in Unity."],images:["ss1.png","ss2.png","ss4.png","ss3.png","ss5.png"] ,link: "/Robotics/Arduino", tc: "bg-teal-800/40"},
    {header: "Procedural Terrain Generation & Grass Rendering", texts:["In 2023, I developed this simulation using Unity. Initially, it generates chunked heightmaps using Perlin noise, then creates meshes based on these heightmaps and colors them based on the height of each point to produce a textured terrain. Continuously monitoring the character's position, it loads only the surrounding chunks and uses Level Of Detail (LOD) to decrease the detail of distant chunks while loading water models.",
    "Next, it randomly adds tree and rock models to the surrounding and visible chunks based on the character's position. Then, utilizing Unity's GPU Instancing feature, it renders millions of grass instances directly on the GPU.","This project taught me Unity3D, mesh manipulation, texturing, procedural world generation, GPU Instancing, and shaders."
    ],images:["ss1 (1).png", "ss2 (1).png","ss3 (1).png","ss4 (1).png","ss5 (1).png"] ,link: "/Robotics/Arduino", tc: "bg-teal-800/40"},
    {header: "Nothing Island", texts:["In 2023, I developed this game where players assume the role of a character stranded on the \"Nothing Island\". The reason behind working on this rather simple game was to create its stylistic appearance. I aimed to explore how 2D textures could be rendered in a 3D environment and how various environmental effects could be achieved using 2D textures. This experimentation led to the creation of an intriguing visual style."],images:["ss1 (2).png","ss2 (2).png","ss3 (2).png","ss4 (2).png","ss5 (2).png"] ,link: "/Robotics/Arduino", tc: "bg-teal-800/40"},
  ];
  let art_projects = [{header:"Work in progress...",texts:[""]}]
</script>

<ImageViewer active={view_image} images={current_images} index={current_idx} imageViewFunc={imageViewFunc} />

<main class="overflow-hidden">
    <FluidBackground speed={0.1} r={-0.35} g={0.05} b={-0.35} />
    <div class="min-h-screen flex flex-col justify-center items-center text-white">

        <h1 class="w-[90%] text-center text-white font-bold z-1 
        text-5xl sm:text-6xl md:text-7xl lg:text-8xl
        mt-[40%] sm:mt-[33%] md:mt-[28%] lg:mt-[14%]
        mb-[26%] sm:mb-[26%] md:mb-[16%] lg:mb-[10%] ">{welcomeHeader}</h1>

        <div class="w-[88%] sm:w-[82%] md:w-[76%] lg:w-[60%] flex flex-col justify-center items-center">
          <h2 class="w-full text-4xl text-left mb-4 text-white font-bold  z-1 ">{welcomeSubheader}</h2>

          <p class="w-full text-center text-thin text-lg z-1 mb-4 bg-black/30 backdrop-blur-xl rounded-xs px-4 py-4 ">{welcomeMessage}</p>

          <div class="flex flex-col space-y-4 mb-16 w-full ">
              {#each projects as project}
                  <PerspectiveEntry header={project.header} texts={project.texts} images={project.images} imageViewFunc={imageViewFunc}/>
              {/each}
          </div>

          <h2 class="w-full text-4xl text-left mb-4 text-white font-bold  z-1 ">{welcomeSubheader2}</h2>

          <div class="w-full flex flex-col justify-center items-center md:items-start  mb-4">
            <div class="w-[80%] sm:w-[65%] md:w-[46%] lg:w-[30%] ">
              <PerspectiveCard header="Navi İDA" icon={`<i class="fa-brands fa-linkedin"></i>`} link="https://www.linkedin.com/in/navi-ida-060194333/" tc="h-30 bg-amber-200/20" target_blank=true/>
            </div>
          </div>
          <!-- <p class="w-full text-center text-thin text-lg z-1 mb-4 bg-black/30 backdrop-blur-xl rounded-xs px-4 py-4 ">{welcomeMessage}</p> -->

          <div class="flex flex-col space-y-4 mb-16 w-full ">
              {#each art_projects as project}
                  <PerspectiveEntry header={project.header} texts={project.texts} images={project.images} imageViewFunc={imageViewFunc}/>
              {/each}
          </div>
          
        </div>

        

    </div>
    <Footer/>
</main>
