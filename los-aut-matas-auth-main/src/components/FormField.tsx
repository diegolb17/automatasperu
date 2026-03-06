import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  multiline?: boolean;
  required?: boolean;
  type?: string;
}

const FormField = ({ label, name, value, onChange, placeholder, multiline, required, type = "text" }: FormFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-sm font-medium text-foreground/80">
      {label}
      {required && <span className="text-primary ml-1">*</span>}
    </Label>
    {multiline ? (
      <Textarea
        id={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className="min-h-[100px] bg-secondary/50 border-border/60 focus:border-primary/50 focus:ring-primary/20 transition-elegant resize-none"
      />
    ) : (
      <Input
        id={name}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className="bg-secondary/50 border-border/60 focus:border-primary/50 focus:ring-primary/20 transition-elegant"
      />
    )}
  </div>
);

export default FormField;
