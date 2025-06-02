import React from "react";
import ReviewSection from "../components/InternTrainee/ReviewSection";
import ProgramCurriculum from "../components/InternTrainee/ProgramCurriculum";
import VedioFile from "../components/InternTrainee/VedioFile";
import FAQSection from "../components/InternTrainee/FAQSection";
import Home from "../components/InternTrainee/Home";
import EmailSection from "../components/InternTrainee/EmailSection";
import MultiStepForm from "../components/InternTrainee/MultiStepForm";
import FormSection from "../components/InternTrainee/FormSection";
import { questionsData } from "../components/InternTrainee/FaqQuestion";

const InternTrainee = () => {
  return (
    <div>
      <FormSection />
      <Home />
      <ReviewSection />
      <ProgramCurriculum />
      <VedioFile />
      <FAQSection data={questionsData} />
      <EmailSection />
    </div>
  );
};

export default InternTrainee;
