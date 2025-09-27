<script>
    import PerspectiveCard from "./Components/PerspectiveCard.svelte";
    import FluidBackground from "./Components/FluidBackground.svelte";
    import Footer from "./Components/Footer.svelte";

    const welcomeHeader = "Welcome";
    const welcomeMessage = "I am Ahad, a Junior Software Developer with a strong interest in backend development, computer vision, and game design. I enjoy gaining knowledge across multiple domains, and I take great satisfaction in designing systems that are both functional and efficient. Visual quality also plays a key role in everything I build, as I believe aesthetics are just as important as functionality.";
    const welcomeMessage2 = "Feel free to explore my work in Robotics, Software Development, and Game Development & Art below.";

    const cb = "{ }";


</script>

<FluidBackground speed={0.1} r={0} g={0} b={0} />

<main class="z-1 overflow-hidden">

    <div class="w-full min-h-screen flex flex-col justify-center items-center text-white">
        <h1 class="w-[95%] text-center text-white font-bold z-1 
        text-7xl sm:text-7xl md:text-8xl lg:text-9xl
        mt-[40%] sm:mt-[32%] md:mt-[26%] lg:mt-[14%]
        mb-[26%] sm:mb-[24%] md:mb-[14%] lg:mb-[10%]">{welcomeHeader}</h1>
 
        <div class="w-[92%] sm:w-[86%] md:w-[80%] lg:w-[64%] flex flex-col justify-center items-center">
            <p class="w-full text-center text-thin  z-1 mb-24 bg-black/30 backdrop-blur-xl rounded-xs px-4 py-4 
            text-md md:text-lg">{welcomeMessage}</p>

            <div class="w-full grid grid-cols-2 justify-between mb-24 
            gap-2 sm:gap-3 md:gap-6 lg:gap-8 
            px-0 md:px-6 lg:px-8">
                <PerspectiveCard header="Linkedin" icon={`<i class="fa-brands fa-linkedin"></i>`} link="https://www.linkedin.com/in/ahad-aydin/" tc="h-30 bg-amber-200/20" target_blank=true/>
                <PerspectiveCard header="Github" icon={`<i class="fa-brands fa-square-github"></i>`} link="https://github.com/AhadAydin" tc="h-30 bg-amber-200/20" target_blank=true/>
                <PerspectiveCard header="itch.io" icon={`<i class="fa-brands fa-itch-io"></i>`} link="https://bdb-games.itch.io/" tc="h-30 bg-amber-200/20" target_blank=true/>
                <PerspectiveCard header="Instagram" icon={`<i class="fa-brands fa-instagram"></i>`} link="https://www.instagram.com/iko.vitriol/" tc="h-30 bg-amber-200/20" target_blank=true/>

            </div>

            <p class="w-full text-center text-thin text-lg z-1 mb-24 bg-black/30 backdrop-blur-xl rounded-xs px-4 py-4  ">{welcomeMessage2}</p>

            <div class="w-[80%] sm:w-[94%] md:w-full h-full flex mb-24 justify-between 
            flex-col md:flex-row gap-8 sm:gap-6 md:gap-2 md:gap-0">
                <div class="w-full md:w-[31%] h-full">
                    <PerspectiveCard header="Robotics" icon= {`<i class="fa-solid fa-ship"></i>`} link="/Robotics" tc="h-28 sm:h-34 md:h-50 lg:h-50 bg-teal-800/40"/>
                </div>
                <div class="w-full md:w-[31%] h-full">
                    <PerspectiveCard header="Software Development" icon={cb} link="/Software" tc="h-28 sm:h-34 md:h-50 lg:h-50 bg-rose-800/40"/>
                </div>
                <div class="w-full md:w-[31%] h-full">
                    <PerspectiveCard header='Game Development & Art Projects' icon={`<i class="fa-brands fa-artstation"></i>`}     link="/Game" tc="h-28 sm:h-34 md:h-50 lg:h-50 bg-lime-800/40"/>
                </div>
            </div>

        </div>
        


    </div>

    <Footer/>
</main>
