import FormField from "@/components/settings/FormField";
import { FormData } from "@/lib/form-schema";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface StepProps {
  data: FormData;
  onChange: (name: string, value: any) => void;
}

const Step3Personality = ({ data, onChange }: StepProps) => (
  <div className="space-y-6">
    <div className="mb-8">
      <h2 className="text-2xl font-display font-medium mb-2">Personalidad y Tono</h2>
      <p className="text-sm text-muted-foreground">La personalidad es lo que transforma una IA en un vendedor estratégico.</p>
    </div>
    <FormField label="Estilo de comunicación" name="communicationStyle" value={data.communicationStyle} onChange={onChange} placeholder="Ej: Formal, casual, empático, técnico..." required />
    <FormField label="Estilo de ventas" name="salesStyle" value={data.salesStyle} onChange={onChange} placeholder="Ej: Consultivo, directo, storytelling..." required />

    {/* Emoji Usage */}
    <div className="space-y-3">
      <Label className="text-sm font-medium text-foreground/80">Uso de emojis</Label>
      <RadioGroup value={data.emojiUsage} onValueChange={(val) => onChange("emojiUsage", val)} className="flex flex-wrap gap-6">
        {["Sí, muchos", "Solo algunos", "No usar"].map((opt) => (
          <div key={opt} className="flex items-center gap-2">
            <RadioGroupItem value={opt} id={`emoji-${opt}`} />
            <Label htmlFor={`emoji-${opt}`} className="text-sm cursor-pointer">{opt}</Label>
          </div>
        ))}
      </RadioGroup>
      <p className="text-xs text-muted-foreground">Preferencia: predominancia de emojis rojos ❤️🔴</p>
    </div>

    <FormField label="Palabras prohibidas" name="forbiddenWords" value={data.forbiddenWords} onChange={onChange} placeholder="Palabras o frases que el asistente nunca debe usar" multiline />
  </div>
);

export default Step3Personality;
