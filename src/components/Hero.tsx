import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import { Benefit } from "./Benefits";
import {
  DevicePhoneMobileIcon,
  FaceSmileIcon,
  SunIcon,
} from "@heroicons/react/16/solid";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-primary lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-secondary">
              EJERCICIOS OROFARÍNGEOS
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Los ejercicios orofaríngeos son una serie de actividades para
              fortalecer los músculos de la lengua, el paladar blando, la pared
              faríngea y otras estructuras asociadas en la vía aérea superior.
              Estas técnicas son utilizadas como intervención no invasiva para
              tratar trastornos como la apnea obstructiva del sueño (AOS) leve a
              moderada en pacientes que rechazan al CPAP.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-blue lg:leading-tight lg:text-4xl dark:text-white">
                Tratamiento y Recomendaciones
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Los ejercicios 1 al 9 deben ser realizados 3 veces al día, todos
                los días durante 3 meses. Son 10 minutos de ejercicios por vez;
                se puede realizar mientras se está haciendo otras actividades
                como leer un libro, cocinar, mirar la televisión, manejar,
                viajar en el tren!
              </p>
            </div>

            <div className="w-full mt-5">
              <Benefit title={"Recomendado"} icon={<FaceSmileIcon />}>
                Para asegurar una constancia completa, utilizar el calendario
                facilitado aquí:
              </Benefit>
              <Benefit
                title={"Formulario online"}
                icon={<DevicePhoneMobileIcon />}
              >
                Completar la primera vez: https://forms.gle/fh3ffhVEq6qk4Fxz6
                Completar en el seguimiento: https://forms.gle/WcT5Twe5ThZpfPnf7
              </Benefit>
              <Benefit title={"Recordatorios"} icon={<SunIcon />}>
                Hacer recordatorios diarios en el teléfono celular.
              </Benefit>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <></>
      </Container>
    </>
  );
};
