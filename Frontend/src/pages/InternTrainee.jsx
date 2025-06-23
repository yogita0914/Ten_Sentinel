import React from "react";
import ReviewSection from "../components/InternTrainee/ReviewSection";
import ProgramCurriculum from "../components/InternTrainee/ProgramCurriculum";
import VideoFile from "../components/InternTrainee/VideoFile";
import FAQSection from "../components/InternTrainee/FAQSection";
import Home from "../components/InternTrainee/Home";
import EmailSection from "../components/InternTrainee/EmailSection";
import FormSection from "../components/InternTrainee/FormSection";
import { questionsData } from "../components/InternTrainee/FaqQuestion";

const InternTrainee = () => {
  return (
    <div>
      <FormSection />
      <Home />
      <ReviewSection />
      <ProgramCurriculum />
      <VideoFile />
      <FAQSection data={questionsData} />
      <EmailSection />
    </div>
  );
};

export default InternTrainee;
