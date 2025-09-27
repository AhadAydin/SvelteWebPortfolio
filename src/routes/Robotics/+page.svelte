<script>
  import PerspectiveCard from "../Components/PerspectiveCard.svelte";
  import PerspectiveEntry from "../Components/PerspectiveEntry.svelte";
  import FluidBackground from "../Components/FluidBackground.svelte";
  import ImageViewer from "../Components/ImageViewer.svelte";
  import Footer from "../Components/Footer.svelte";

  const welcomeHeader = "Robotics";
  const welcomeSubheader = "Our Team Navida";
  const welcomeSubheader2 = "Technologies & Tools";
  const welcomeMessage = `Since 2024, I have been part of Bahçeşehir University’s <a class="text-amber-200 hover:text-blue-200" href="https://www.linkedin.com/in/navi-ida-060194333/" target="_blank" rel="noopener noreferrer" >Navi İDA </a>team, participating in various unmanned surface vehicle competitions. As a software developer on the team, I work on areas such as computer vision and simulation environments.`;

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
    {header: "Teknofest 2025", texts:[`Participated in the <a class="text-amber-200 hover:text-blue-200" href="https://www.linkedin.com/company/teknofest/posts/?feedView=all" target="_blank" rel="noopener noreferrer">Teknofest 2025</a> Unmanned Surface Vehicle competition as part of the Navi İDA team.`],images:["navi2.jpeg"] ,link: "/Robotics/Arduino", tc: "bg-teal-800/40"},

    {header: "Njord Challenge 2025 (NTNU)", texts:[`Competed in the <a class="text-amber-200 hover:text-blue-200" href="https://www.linkedin.com/company/teknofest/posts/?feedView=all" target="_blank" rel="noopener noreferrer">Njord Challenge 2025</a>, organized by NTNU in Norway, where our Navi İDA team placed 4th globally.`
    ],images:["navi1.jfif"] ,link: "/Robotics/Arduino", tc: "bg-teal-800/40"},

    {header: "Teknofest 2024", texts:[`Joined the <a class="text-amber-200 hover:text-blue-200" href="https://www.linkedin.com/company/teknofest/posts/?feedView=all" target="_blank" rel="noopener noreferrer">Teknofest 2024</a>  Unmanned Surface Vehicle competition with the Navi İDA team and received the Most Original Software award.`],images:["navi0.jfif"] ,link: "/Robotics/Arduino", tc: "bg-teal-800/40"},
  ];
    let projects2 = [
    {header: "AI Based Computer Vision", texts:['● Used <a class="text-amber-200 hover:text-blue-200" href="https://docs.ultralytics.com/tr/models/yolo11/" target="_blank" rel="noopener noreferrer">YOLOv11</a> to detect buoys.',`● Built a custom dataset using both online sources and self-collected buoy images, then trained the model.`],images:["vision.PNG"]},

    {header: "Traditional Computer Vision", texts:[`<span class="font-bold text-lg">● Edge Detection & Contouring: </span>Identified static obstacles other than buoys.`,`<span class="font-bold text-lg">● Frame Differencing & Optical Flow: </span>Identified static obstacles other than buoys.`,`<span class="font-bold text-lg">● Custom Harbor Algorithm: </span>Applied edge detection and a custom-developed algorithm to recognize harbor structures and locate available docking ports.`
    ],images:["travis.jpeg","travis1.jpeg"]},

    {header: "Mapping & Navigation", texts:['● Implemented <a class="text-amber-200 hover:text-blue-200" href="https://docs.ros.org/en/foxy/index.html">ROS2</a> <a class="text-amber-200 hover:text-blue-200" href="https://docs.nav2.org/">Nav2</a> for mapping and path planning.','● Generated costmaps based on detected obstacles.','● Applied the A* algorithm to enable the vessel to autonomously plan collision-free routes.'
    ],images:["map&nav.PNG"]},

    {header: "Simulation", texts:['● Used <a class="text-amber-200 hover:text-blue-200" href="https://gazebosim.org/home">Gazebo</a> + <a class="text-amber-200 hover:text-blue-200" href="https://github.com/osrf/vrx">VRX</a> as the simulation environment.','● <a class="text-amber-200 hover:text-blue-200" href="https://github.com/osrf/vrx">VRX</a> provided key maritime components such as surface vehicles and buoys.','● Created additional 3D models in <a class="text-amber-200 hover:text-blue-200" href="https://www.blender.org/">Blender</a> and integrated them into the <a class="text-amber-200 hover:text-blue-200" href="https://gazebosim.org/home">Gazebo</a> environment.'
    ],images:["sim.jpeg","sim1.jpeg"]},
  ];
</script>


<ImageViewer active={view_image} images={current_images} index={current_idx} imageViewFunc={imageViewFunc} />

<main class="overflow-hidden">
    <FluidBackground speed={0.1} r={-0.35} g={-0.35} b={0.05} />
    <div class="min-h-screen flex flex-col justify-center items-center text-white">

        <h1 class="w-[90%] text-center text-white font-bold z-1 
        text-6xl sm:text-6xl md:text-7xl lg:text-8xl
        mt-[40%] sm:mt-[33%] md:mt-[28%] lg:mt-[14%]
        mb-[26%] sm:mb-[26%] md:mb-[16%] lg:mb-[10%]">{@html welcomeHeader}</h1>
        
        <div class="w-[88%] sm:w-[82%] md:w-[76%] lg:w-[60%] flex flex-col justify-center items-center">

          <h2 class="w-full text-4xl text-left mb-4 text-white font-bold  z-1 ">{welcomeSubheader}</h2>
          <p class="w-full text-center text-thin text-lg z-1 mb-4 bg-black/30 backdrop-blur-xl rounded-xs px-4 py-4 ">{@html welcomeMessage}</p>
          <div class="w-full flex flex-col justify-center items-center md:items-start  mb-4">
            <div class="w-[80%] sm:w-[65%] md:w-[46%] lg:w-[30%] ">
              <PerspectiveCard header="Navi İDA" icon={`<i class="fa-brands fa-linkedin"></i>`} link="https://www.linkedin.com/in/navi-ida-060194333/" tc="h-30 bg-amber-200/20" target_blank=true/>
            </div>
          </div>
          
          <div class="flex flex-col space-y-4 mb-16 w-full">
              {#each projects as project}
                  <PerspectiveEntry header={project.header} texts={project.texts} images={project.images} imageViewFunc={imageViewFunc}/>
              {/each}
          </div>

          <h2 class="w-full text-4xl text-left mb-4 text-white font-bold  z-1 ">{welcomeSubheader2}</h2>

          <div class="flex flex-col space-y-4 mb-16 w-full">
              {#each projects2 as project}
                  <PerspectiveEntry header={project.header} texts={project.texts} images={project.images} imageViewFunc={imageViewFunc}/>
              {/each}
          </div>

        </div>
        
    </div>
    <Footer/>
</main>
