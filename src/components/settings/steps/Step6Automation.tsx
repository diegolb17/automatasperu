import FormField from "@/components/settings/FormField";
import { FormData } from "@/lib/form-schema";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface StepProps {
  data: FormData;
  onChange: (name: string, value: any) => void;
}

const Step6Automation = ({ data, onChange }: StepProps) => (
  <div className="space-y-6">
    <div className="mb-8">
      <h2 className="text-2xl font-display font-medium mb-2">Gestión de Datos y Automatización</h2>
      <p className="text-sm text-muted-foreground">Precisión hoy. Conversión mañana.</p>
    </div>
    <FormField label="Registro de datos (NocoDB / CRM propio)" name="dataRegistration" value={data.dataRegistration} onChange={onChange} placeholder="¿Dónde se registrarán los datos del cliente? ¿Usas algún CRM?" multiline />

    {/* Email Summary Toggle */}
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium text-foreground/80">Envío de resumen por correo</Label>
        <Switch checked={data.sendEmailSummary} onCheckedChange={(val) => onChange("sendEmailSummary", val)} />
      </div>
      {data.sendEmailSummary && (
        <div className="space-y-4 pl-4 border-l-2 border-primary/30">
          <FormField label="Correo electrónico" name="summaryEmail" value={data.summaryEmail} onChange={onChange} placeholder="correo@empresa.com" type="email" required />
          <FormField label="Contraseña del correo" name="emailPassword" value={data.emailPassword} onChange={onChange} placeholder="Contraseña de aplicación" type="password" required />
        </div>
      )}
    </div>

    {/* Schedule Reminder */}
    <div className="flex items-center justify-between">
      <Label className="text-sm font-medium text-foreground/80">Agendar recordatorio</Label>
      <Switch checked={data.scheduleReminder} onCheckedChange={(val) => onChange("scheduleReminder", val)} />
    </div>

    {/* Send Catalog PDF */}
    <div className="flex items-center justify-between">
      <Label className="text-sm font-medium text-foreground/80">Enviar catálogo PDF</Label>
      <Switch checked={data.sendCatalogPDF} onCheckedChange={(val) => onChange("sendCatalogPDF", val)} />
    </div>
  </div>
);

export default Step6Automation;
