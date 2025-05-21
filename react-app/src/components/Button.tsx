import React from "react";
interface Props {
  name: string;
}

export default function Button({ name }: Props) {
  return <div className="btn btn-primary">{name}</div>;
}
