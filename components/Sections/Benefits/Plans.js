import React from "react";
import ServiceInfo from "@/components/UI/Information/ServiceInfo";
import MapPinIcon from "@/components/UI/Icons/MapPinIcon";
import GlobeAmericasIcon from "@/components/UI/Icons/GlobeAmericasIcon";
import classes from "./Plans.module.css";
import FireIcon from "@/components/UI/Icons/FireIcon";
import HeartIcon from "@/components/UI/Icons/HeartIcon";
import BookIcon from "@/components/UI/Icons/BookIcon";
import SettingIcon from "@/components/UI/Icons/SettingIcon";
import PaintBrushIcon from "@/components/UI/Icons/PainBrushIcon";
import BeakerIcon from "@/components/UI/Icons/BeakerIcon";

const Plans = (props) => {
  return (
    <div className={classes.container}>
      <ServiceInfo
        title="Plan Presencial"
        items={[
          "Plan entrenamiento",
          "Plan nutrición",
          "Libro de recetas",
          "Ajustes constantes",
          "En el gimnasio del instructor",
        ]}
        icon={<MapPinIcon />}
        itemsIcons={[
          <FireIcon />,
          <HeartIcon />,
          <BookIcon />,
          <SettingIcon />,
          <MapPinIcon />,
        ]}
        linkText="Consultá precios"
        link="https://wa.me/5492615436947?text=Hola%20Santi!%20Quiero%20consultar%20los%20precios%20del%20Plan%20Presencial."
        image="/assets/img/backgrounds/gym4.webp"
      />
      <ServiceInfo
        title="Plan Online"
        items={[
          "Plan entrenamiento",
          "Plan nutrición",
          "Libro de recetas",
          "Ajustes constantes",
          "Desde tu gimnasio local",
        ]}
        icon={<GlobeAmericasIcon />}
        itemsIcons={[
          <FireIcon />,
          <HeartIcon />,
          <BookIcon />,
          <SettingIcon />,
          <GlobeAmericasIcon />,
        ]}
        linkText="Consultá precios"
        link="https://wa.me/5492615436947?text=Hola%20Santi!%20Quiero%20consultar%20los%20precios%20del%20Plan%20Online."
        image="/assets/img/backgrounds/gym5.webp"
      />
      <ServiceInfo
        title="Construí Tu Plan"
        items={[
          "Guía de inicio rápido",
          "6 pasos concretos y basados en evidencia científica",
        ]}
        icon={<PaintBrushIcon />}
        itemsIcons={[<BookIcon />, <BeakerIcon />]}
        linkText="Consultá precios"
        link="https://wa.me/5492615436947?text=Hola%20Santi!%20Quiero%20consultar%20los%20precios%20de%20la%20Guia%20de%20Diseña%20tu %20Plan."
        image="/assets/img/backgrounds/gym6.webp"
      />
    </div>
  );
};

export default Plans;
