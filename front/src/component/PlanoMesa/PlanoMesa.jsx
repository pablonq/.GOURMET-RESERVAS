/* eslint-disable react/prop-types */
import Mesa2pers from "../../assets/Mesa2pers";
import Mesa4pers from "../../assets/Mesa4pers";
import Mesa6mas from "../../assets/Mesa6mas";
import Mesa6pers from "../../assets/Mesa6pers";
import ColumnaMesa from "../ColumnaMesa/ColumnaMesa";

const PlanoMesa = ({ mesas2, mesas4, mesas6, mesasMas6 }) => {
  return (
    <div className=" w-3/3 m-2 p-4 flex border-b border-t border-[#DC493A]">
      <ColumnaMesa
        title="Mesas 2 Personas"
        numTables={mesas2}
        MesaComponent={Mesa2pers}
      />
      <ColumnaMesa
        title="Mesas 4 Personas"
        numTables={mesas4}
        MesaComponent={Mesa4pers}
      />
      <ColumnaMesa
        title="Mesas 6 Personas"
        numTables={mesas6}
        MesaComponent={Mesa6pers}
      />
      <ColumnaMesa
        title="Mesas +6 Personas"
        numTables={mesasMas6}
        MesaComponent={Mesa6mas}
      />
    </div>
  );
};
export default PlanoMesa;
