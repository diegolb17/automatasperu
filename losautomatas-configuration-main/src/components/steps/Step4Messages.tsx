import FormField from "@/components/FormField";
import { FormData } from "@/lib/form-schema";

interface StepProps {
  data: FormData;
  onChange: (name: string, value: any) => void;
}

const Step4Messages = ({ data, onChange }: StepProps) => (
  <div className="space-y-6">
    <div className="mb-8">
      <h2 className="text-2xl font-display font-medium mb-2">Flujo de Mensajes Clave</h2>
      <p className="text-sm text-muted-foreground">Cada campo define una decisión estratégica.</p>
    </div>
    <FormField label="Mensaje de bienvenida" name="welcomeMessage" value={data.welcomeMessage} onChange={onChange} placeholder="El primer mensaje que verá el usuario al iniciar conversación" multiline required />
    <FormField label="Confirmación de venta" name="saleConfirmation" value={data.saleConfirmation} onChange={onChange} placeholder="Mensaje que envía el asistente al confirmar una venta" multiline required />
    <FormField label="Derivación a humano" name="humanHandoff" value={data.humanHandoff} onChange={onChange} placeholder="¿Cuándo y cómo debe transferir la conversación a un agente humano?" multiline />
  </div>
);

export default Step4Messages;
