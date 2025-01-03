import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { TextParallaxContent } from "../components/TextParallexContent";
import { DragCloseDrawer } from "../components/DragCloseDrawer";

const BlogPage = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent1 setOpen={setOpen} />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent2 setOpen={setOpen2} />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best."
      >
        <ExampleContent3 setOpen={setOpen3} />
      </TextParallaxContent>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-white">
          <h2 className="text-4xl font-bold text-white">
            Revolutionizing Healthcare
          </h2>
          <p>
            The healthcare industry faces countless challenges, from early
            diagnosis to patient management. Neura Nova AI is bridging the gap
            between cutting-edge technology and patient-centric care.
          </p>
          <p>
            **Advanced Diagnostics:** Neura Nova AI employs machine learning
            models to detect diseases at early stages, ensuring timely
            intervention.
          </p>
          <p>
            **Personalized Medicine:** By analyzing patient data, Neura Nova AI
            tailors treatments for individuals, enhancing effectiveness.
          </p>
          <p>
            **Operational Efficiency:** Hospitals leverage Neura Nova AI to
            streamline workflows, reducing burnout and improving patient
            experiences.
          </p>
        </div>
      </DragCloseDrawer>
      <DragCloseDrawer open={open2} setOpen2={setOpen2}>
        <div className="mx-auto max-w-2xl space-y-4 text-white">
          <h2 className="text-4xl font-bold text-white">
            Neura Nova AI in Creative Industries
          </h2>
          <p>
            Creativity meets technology with Neura Nova AI, offering tools that
            inspire artists and streamline production.
          </p>
          <p>
            **Visual Generation:** With AI-driven tools, designers can produce
            breathtaking visuals in minutes.
          </p>
          <p>
            **Workflow Optimization:** Automating mundane tasks allows creators
            to focus on innovation.
          </p>
          <p>
            **Real-time Collaboration:** Teams worldwide can collaborate
            seamlessly through AI-enhanced platforms.
          </p>
        </div>
      </DragCloseDrawer>
      <DragCloseDrawer open={open3} setOpen3={setOpen3}>
        <div className="mx-auto max-w-2xl space-y-4 text-white">
          <h2 className="text-4xl font-bold text-white">
            The Ethical Path of Neura Nova AI
          </h2>
          <p>
            As AI grows, ethical considerations become paramount. Neura Nova AI
            leads by example with responsible development practices.
          </p>
          <p>
            **Fairness and Transparency:** Neura Nova AI ensures its algorithms
            are unbiased and explainable.
          </p>
          <p>
            **Data Privacy:** Advanced encryption and secure frameworks protect
            user data.
          </p>
          <p>
            **Community Impact:** Neura Nova AI supports initiatives that
            promote societal well-being.
          </p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const ExampleContent1 = ({ setOpen }) => {
  return (
    <div className="ml-[26vw] grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-pretty">
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          The healthcare industry faces countless challenges, from early diagnosis to patient management. Neura Nova AI is bridging the gap between cutting-edge technology and patient-centric care.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Neura Nova AI employs machine learning models to detect diseases at early stages, ensuring timely intervention. It also tailors treatments for individuals, enhancing effectiveness.
        </p>
        <button
          onClick={(prev) => setOpen((prev) => !prev)}
          className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        >
          Learn more <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  );
};

const ExampleContent2 = ({ setOpen }) => {
  return (
    <div className="ml-[26vw] grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-pretty">
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          Creativity meets technology with Neura Nova AI, offering tools that inspire artists and streamline production.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          With AI-driven tools, designers can produce breathtaking visuals in minutes. Automating mundane tasks allows creators to focus on innovation and real-time collaboration.
        </p>
        <button
          onClick={(prev) => setOpen((prev) => !prev)}
          className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        >
          Learn more <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  );
};

const ExampleContent3 = ({ setOpen }) => {
  return (
    <div className="ml-[26vw] grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-pretty">
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          As AI grows, ethical considerations become paramount. Neura Nova AI leads by example with responsible development practices.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Neura Nova AI ensures its algorithms are unbiased and explainable. With advanced encryption, secure frameworks protect user data, supporting societal well-being.
        </p>
        <button
          onClick={(prev) => setOpen((prev) => !prev)}
          className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        >
          Learn more <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  );
};




export default BlogPage;
