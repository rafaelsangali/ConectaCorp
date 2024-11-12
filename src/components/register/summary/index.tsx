import { fieldTranslations } from "@/constants/summary";
import useFormStore from "@/core/form-store";
import { Button } from "@mui/material";
import moment from "moment";

export default function Summary() {
  const { forms } = useFormStore();
  return (
    <div className="p-6 space-y-4 max-w-lg mx-auto w-full bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4 text-center">Resumo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(forms).map((key) => {
          const translatedKey = fieldTranslations[key];
          let value = forms[key];

          if (key === "birthDate" && value) {
            value = moment(value).format("DD/MM/YYYY");
          }

          return (
            <div key={key} className="flex flex-col">
              <span className="font-semibold text-sm">{translatedKey}:</span>
              <span className="text-gray-700 text-xs truncate">
                {Array.isArray(value) ? value.join(", ") : value}
              </span>
            </div>
          );
        })}
      </div>
      <Button
        type="button"
        onClick={() => {
          alert("Confira o console");
          console.log(forms);
        }}
        variant="contained"
        color="primary"
        fullWidth
      >
        Enviar
      </Button>
    </div>
  );
}
