import { screenSizes } from "utils/responsive";
import { ProfileCardData } from "utils/cardData";
import ProfileCard from "components/Card/ProfileCard";
import ProfileIcon from "components/Icons/Profile";

export default function Profile() {
  return (
    <main className="flex flex-col items-center justify-start overflow-y-auto h-almost-screen pt-[8%]">
      <div className={screenSizes}>
        <div className="flex flex-row mb-11 items-center">
          <ProfileIcon className="text-red-700 fill-current" />
          <h1 className="pl-2 text-xl font-bold text-left">Perfil</h1>
        </div>

        <div className="grid grid-cols-1 gap-10 mx-16 sm:mx-36 place-content-center lg:mx-0 lg:grid-cols-3 lg:gap-20 2xl:gap-28">
          {ProfileCardData.map((card) => (
            <ProfileCard
              key={card.id}
              titulo={card.titulo}
              descripcion={card.descripcion}
              toPath={card.toPath}
            >
              {card.children}
            </ProfileCard>
          ))}
        </div>
      </div>
    </main>
  );
}
