import FormField from "@/components/settings/FormField";
import { FormData } from "@/lib/form-schema";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

interface StepProps {
  data: FormData;
  onChange: (name: string, value: any) => void;
}

const LANGUAGE_OPTIONS = ["Español", "Inglés", "Portugués", "Francés"];

const Step1Identity = ({ data, onChange }: StepProps) => {
  const handleLanguageToggle = (lang: string) => {
    const current = data.languages || [];
    const updated = current.includes(lang)
      ? current.filter((l) => l !== lang)
      : [...current, lang];
    onChange("languages", updated);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-display font-medium mb-2">Identidad de la Empresa</h2>
        <p className="text-sm text-muted-foreground">Define la identidad base sobre la que construiremos tu asistente.</p>
      </div>
      <FormField label="Nombre de la empresa" name="companyName" value={data.companyName} onChange={onChange} placeholder="Ej: Los Autómatas" required />
      <FormField label="Nombre del asistente / vendedor" name="assistantName" value={data.assistantName} onChange={onChange} placeholder="Ej: Aria, Max, Nova..." required />
      <FormField label="Rubro / Giro" name="industry" value={data.industry} onChange={onChange} placeholder="Ej: Tecnología, E-commerce, Salud..." required />
      <FormField label="Descripción estratégica" name="brandDescription" value={data.brandDescription} onChange={onChange} placeholder="¿Qué hace tu empresa? ¿Cuál es su propuesta de valor?" multiline required />
      <FormField label="Ciudad / País" name="cityCountry" value={data.cityCountry} onChange={onChange} placeholder="Ej: Lima, Perú" />

      {/* Voice Gender */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground/80">Género de voz</Label>
        <RadioGroup value={data.voiceGender} onValueChange={(val) => onChange("voiceGender", val)} className="flex gap-6">
          {["Masculino", "Femenino", "Neutro"].map((opt) => (
            <div key={opt} className="flex items-center gap-2">
              <RadioGroupItem value={opt.toLowerCase()} id={`voice-${opt}`} />
              <Label htmlFor={`voice-${opt}`} className="text-sm cursor-pointer">{opt}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Languages */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground/80">Idiomas</Label>
        <div className="flex flex-wrap gap-4">
          {LANGUAGE_OPTIONS.map((lang) => (
            <div key={lang} className="flex items-center gap-2">
              <Checkbox
                id={`lang-${lang}`}
                checked={(data.languages || []).includes(lang)}
                onCheckedChange={() => handleLanguageToggle(lang)}
              />
              <Label htmlFor={`lang-${lang}`} className="text-sm cursor-pointer">{lang}</Label>
            </div>
          ))}
        </div>
        <FormField label="Otro idioma" name="customLanguage" value={data.customLanguage} onChange={onChange} placeholder="Especificar otro idioma..." />
      </div>
    </div>
  );
};

export default Step1Identity;
