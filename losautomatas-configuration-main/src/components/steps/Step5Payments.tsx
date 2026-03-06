import FormField from "@/components/FormField";
import { FormData } from "@/lib/form-schema";

interface StepProps {
  data: FormData;
  onChange: (name: string, value: any) => void;
}

const Step5Payments = ({ data, onChange }: StepProps) => (
  <div className="space-y-6">
    <div className="mb-8">
      <h2 className="text-2xl font-display font-medium mb-2">Información de Pagos</h2>
      <p className="text-sm text-muted-foreground">Configura los métodos de pago que tu asistente comunicará.</p>
    </div>
    <FormField label="Yape" name="yape" value={data.yape} onChange={onChange} placeholder="Número de Yape" />
    <FormField label="Plin" name="plin" value={data.plin} onChange={onChange} placeholder="Número de Plin" />
    <FormField label="Banco" name="bank" value={data.bank} onChange={onChange} placeholder="Nombre del banco" />
    <FormField label="Cuenta / CCI" name="accountNumber" value={data.accountNumber} onChange={onChange} placeholder="Número de cuenta o CCI" />
    <FormField label="Titular" name="accountHolder" value={data.accountHolder} onChange={onChange} placeholder="Nombre del titular de la cuenta" />
  </div>
);

export default Step5Payments;
