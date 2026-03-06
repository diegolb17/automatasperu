import FormField from "@/components/settings/FormField";
import { FormData } from "@/lib/form-schema";

interface StepProps {
  data: FormData;
  onChange: (name: string, value: any) => void;
}

const Step2Audience = ({ data, onChange }: StepProps) => (
  <div className="space-y-6">
    <div className="mb-8">
      <h2 className="text-2xl font-display font-medium mb-2">Audiencia y Estrategia</h2>
      <p className="text-sm text-muted-foreground">Aquí definimos cómo tu asistente convierte conversaciones en oportunidades.</p>
    </div>
    <FormField label="Buyer Persona" name="buyerPersona" value={data.buyerPersona} onChange={onChange} placeholder="Describe a tu cliente ideal: edad, intereses, necesidades, nivel socioeconómico..." multiline required />
    <FormField label="Instrucciones especiales de venta" name="salesInstructions" value={data.salesInstructions} onChange={onChange} placeholder="¿Hay reglas, promociones o flujos de venta específicos que el asistente debe seguir?" multiline />
  </div>
);

export default Step2Audience;
