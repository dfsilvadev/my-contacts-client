import { HTMLAttributes, ReactNode } from "react";

import * as S from "./styles";

const Flex = ({
  children,
  display = "flex",
  direction = "row",
  align = "flex-start",
  justify = "flex-start",
  content = "stretch",
  wrap = "wrap",
  gap = "$0",
  ...props
}: IFlexProps) => {
  const selectedGap = EGap[gap];

  return (
    <S.FlexContent
      display={display}
      direction={direction}
      align={align}
      justify={justify}
      content={content}
      wrap={wrap}
      gap={selectedGap}
      {...props}
    >
      {children}
    </S.FlexContent>
  );
};

export default Flex;

enum EGap {
  $0 = "0",
  $1 = "0.25rem",
  $2 = "0.5rem",
  $3 = "1rem",
  $4 = "1.125rem",
  $5 = "1.25rem",
  $6 = "1.375rem",
  $7 = "1.5rem",
  $8 = "1.625rem",
  $9 = "1.75rem",
  $10 = "1.185rem",
  $11 = "2rem"
}

export interface IFlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  display?: "none" | "inline-flex" | "flex";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  content?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: keyof typeof EGap;
}
