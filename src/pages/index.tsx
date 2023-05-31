import { type NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useEffect, useState } from "react";
import { questions } from "~/data/questions.data";

type formTypes = {
  name: string;
  lastName: string;
  answers: {
    questionId: string;
    answer: string;
  }[];
};

const Home: NextPage = () => {
  const [formData, setFormData] = useState<formTypes>({
    name: "",
    lastName: "",
    answers: [],
  });

  const handleNames = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const existingAnswerIndex = formData.answers.findIndex(
      (answer) => answer.questionId === name
    );
    if (existingAnswerIndex != -1) {
      const updatedAnswers = [...formData.answers];
      updatedAnswers[existingAnswerIndex] = {
        questionId: name,
        answer: value,
      };
      setFormData((formData) => ({
        ...formData,
        answers: [...updatedAnswers],
      }));
      return;
    }
    setFormData((formData) => ({
      ...formData,
      answers: [
        ...formData.answers,
        {
          questionId: name,
          answer: value,
        },
      ],
    }));
  };
  useEffect(() => {
    console.log({ ...formData.answers });
  }, [formData]);

  return (
    <>
      <Head>
        <title>Drivesafe Form</title>
        <meta name="description" content="VAS-F Form to log user fatigue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen bg-gradient-to-b from-[#411c72] to-[#070b65] text-white">
        <div className="container mx-auto flex flex-col gap-2 px-4 py-12 ">
          <h1 className=" pb-2 text-6xl font-extrabold  ">
            DriveSafe Fatigue Form
            <br />
          </h1>
          <h1 className=" pb-6 text-3xl font-extrabold  ">
            Visual Analogue Scale for Fatigue
            <br />
            <span className="text-[hsl(280,100%,70%)]">VAS-F</span>
          </h1>
          <div className="grid gap-5">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`rounded-lg bg-[hsl(0,0%,0%,0.33)] px-6 py-4 ring-2  ${
                  formData.answers.find(
                    (a) => question.questionId == a.questionId
                  )
                    ? "ring-green-500"
                    : "ring-blue-500"
                }`}
              >
                <h3 className="pb-4 text-2xl font-semibold tracking-tight">
                  {question.question}
                </h3>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={
                    formData.answers[index]?.answer
                      ? formData.answers[index]?.answer
                      : 50
                  }
                  className="w-full"
                  name={question.questionId}
                  onChange={handleAnswer}
                />
                <div className="flex justify-between text-sm font-semibold text-white">
                  <p className="max-w-[180px]">{question.left}</p>
                  <p className="max-w-[180px]">{question.rigth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
