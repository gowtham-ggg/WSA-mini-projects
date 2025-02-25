import CardLayout from "./ui/card-layout";
import SunMini from "../assets/images/sun-mini.svg";

const UnitMetrixComp = ({label,value, unit}) => {
  return (
    <CardLayout className="unit-metrix-main-div flex items-start">
        <img src={SunMini} style={{paddingTop:'2px'}}/>
        <div>
          <p className="label-18 uppercase">{label}</p>
          <p className="label-18 font-30">{value ?? 'N/A'} {unit ?? ''}</p>
        </div>
    </CardLayout>
  );
};

export default UnitMetrixComp;
