"use client";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListIcon from "@mui/icons-material/List";
import useStepStore from "@/core/stepper-store";

const steps = [
  { label: "Informações Pessoais", key: "step-1" },
  { label: "Informações de Endereço", key: "step-2" },
  { label: "Informações Profissionais", key: "step-3" },
  { label: "Preferências e Interesses", key: "step-4" },
  { label: "Finalização e Confirmação", key: "step-5" }
];

export default function SidebarStepper() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { step } = useStepStore();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <Box
        className={`fixed top-0 left-0 z-50 bg-white h-full w-64 shadow-lg transition-transform transform ${
          isSidebarOpen || !isMobile ? "translate-x-0" : "-translate-x-full"
        } md:static md:w-2/5 flex  items-center flex-col justify-center gap-5`}
      >
        {isMobile && (
          <button
            type="button"
            className="absolute right-4 top-4"
            onClick={toggleSidebar}
          >
            x
          </button>
        )}
        {/* Logo */}
        <Image
          src={"/logo.png"}
          width={250}
          height={100}
          alt="Logo ConectaCorp"
        />

        {/* Stepper */}
        <Stepper orientation="vertical" className="p-4">
          {steps.map((stepArg) => (
            <Step active={stepArg.key === step} key={stepArg.key}>
              <StepLabel>{stepArg.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Toggle Button for Mobile */}
      {isMobile && (
        <button
          type="button"
          className="absolute top-4 left-4 z-[2] h-10 w-10 rounded-full border hover:shadow-lg bg-[#1565C0]"
          onClick={toggleSidebar}
        >
          <ListIcon className="text-white" />
        </button>
      )}
    </>
  );
}
