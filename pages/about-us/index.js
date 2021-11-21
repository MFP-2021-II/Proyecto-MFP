import LandingCard from 'components/Card/LandingCard';

export default function aboutUs () {
  return (
    <main>
      <div>
        {/* imagen
        el por qué */}
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