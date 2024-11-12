"use client";
import React from "react";
import AddressInfo from "@/components/register/forms/AddressInfo";
import SidebarStepper from "@/components/register/stepper";
import PersonalInfoForm from "@/components/register/forms/PersonalInfo";
import ProfessionalInfoForm from "@/components/register/forms/ProfessionalInfo";
import PreferencesInfo from "@/components/register/forms/PreferencesInfo";
import useStepStore from "@/core/stepper-store";
import Summary from "@/components/register/summary";

export default function Home() {
  const { step } = useStepStore();
  const forms = {
    "step-1": <PersonalInfoForm />,
    "step-2": <AddressInfo />,
    "step-3": <ProfessionalInfoForm />,
    "step-4": <PreferencesInfo />,
    "step-5": <Summary />
  };
  return (
    <>
      <main className="h-screen flex flex-col md:flex-row rounded-md">
        <SidebarStepper />
        <section className="h-full w-full p-3 flex flex-col items-center justify-center max-h-screen overflow-auto">
          {forms[step]}
        </section>
      </main>
    </>
  );
}
