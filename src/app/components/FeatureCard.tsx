import React from "react";

type Props = {
  image: string;
  title: string;
  body: string;
};
const Feature = (props: Props) => {
  return (
    <div className="grid grid-rows-3 max-w-64 gap-8">
      <div>
        <div className="grid justify-center">
          <img className="max-w-20" src={props.image} />
        </div>
        <div className="grid font-bold text-md  row-span-1 max-h-14">
          {props.title}
        </div>
        <div className="grid text-sm  ">{props.body}</div>
      </div>
    </div>
  );
};

export default Feature;
