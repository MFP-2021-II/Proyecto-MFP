import LandingCard from 'components/Card/LandingCard';

export default function aboutUs () {
  return (
    <main>
      <div>
        <img src="/aboutusbg.png" alt="ilustración" className="w-full hidden lg:inline-block"/>
      </div>

      <div className="flex flex-col justify-center align-middle text-center max-w-[27%] mx-auto py-16">
      
          <h3 className="text-[#C36C7D] font-bold text-2xl pb-2">
            ¿Por qué elegir Homy?
          </h3>
          <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et viverra ligula. Donec sit amet nunc nec velit vestibulum blandit. Sed gravida tincidunt est ac vestibulum. Pellentesque vitae diam magna. 
          </p>
      
      </div>
      <div className="flex flex-row justify-center w-screen  max-h-[35%] flex-wrap md:space-x-16">
          <LandingCard
            titulo="Misión"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et viverra ligula. Donec sit amet nunc nec velit vestibulum blandit. Sed gravida tincidunt est ac vestibulum. Pellentesque vitae diam magna. 
          </LandingCard>
          <LandingCard
            titulo="Visión"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et viverra ligula. Donec sit amet nunc nec velit vestibulum blandit. Sed gravida tincidunt est ac vestibulum. Pellentesque vitae diam magna. 
          </LandingCard>
      </div>
    </main>
  )
}