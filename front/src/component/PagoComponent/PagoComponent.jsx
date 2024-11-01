import { useEffect } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

// eslint-disable-next-line react/prop-types
const PagoComponent = ({ preferenceId}) => {
  useEffect(() => {
    initMercadoPago("APP_USR-66f616fe-bb01-4406-a524-7c8b71dd0ccf"); //  reemplazar esto con tu clave pública real
  }, [preferenceId]);

  return (
    <div>
      <h2 className="font-bold text-center">Completa tu pago</h2>
      <Wallet
        initialization={{ preferenceId }}
        customization={{
          texts: {
            action: 'pay', 
            valueProp: 'security_safety', 
          },
        }}
        onPaymentFailure={(error) => console.error("Error de pago:", error)}
      />
    </div>
  );
};

export default PagoComponent;
