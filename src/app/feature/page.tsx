import React from "react";
import FeatureCard from ".././components/FeatureCard";

const Feature = () => {
  return (
    <div className="p-6">
      <div>
        <p className="text-center text-3xl p-4 font-mono font-bold">Feature</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-rows-2  h-80">
          <div className="grid">
            <div className="grid grid-cols-3 gap-9 text-center">
              <div className="grid">
                <FeatureCard
                  image="./assets/premiummaterials.png"
                  title="Premium Material"
                  body="Learning material contains Downloaded File, Video Tutorial, PowerPoint."
                ></FeatureCard>
              </div>
              <div className="grid">
                <FeatureCard
                  image="./assets/notes.png"
                  title="Notes"
                  body="You can add notes to help you 
                  remember the learning materials."
                ></FeatureCard>
              </div>
              <div className="grid">
                <FeatureCard
                  image="./assets/experttutors.png"
                  title="Expert Tutors"
                  body="We provide the best tutor for you,
                    so you can learn more from the tutors. "
                ></FeatureCard>
              </div>
            </div>
          </div>
          <div className="grid justify-center">
            <div className="grid grid-cols-2 text-center gap-9">
              <div className="grid">
                <FeatureCard
                  image="./assets/lowfee.png"
                  title="Low Fee Cost"
                  body="Free courses, Trial, and Subscription.
                  And Promo or Discount."
                ></FeatureCard>
              </div>
              <div className="grid">
                <FeatureCard
                  image="./assets/achievement.png"
                  title="Achievement"
                  body="Make a students have 
                  many achievements."
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
