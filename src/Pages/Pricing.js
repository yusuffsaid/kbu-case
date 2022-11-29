import React, { useState } from "react";
import BadgeLayout from "../Components/BadgeCart/BadgeLayout";
import PageTitle from "../Components/PageTitle";
import CardLayout from "../Components/PriceCard/CardLayout";
import * as Icon from "../Assets/Svg/Svg"
const Pricing = () => {
  const [cardProps, setCardProps] = useState([
    {
      title: "Basic",
      description: "Most Popular",
      price: "4,95",
      falseItemIndex: [3, 4, 5],
      isSelected: false,
    },
    {
      title: "Professional",
      description: "Recommended",
      price: "9,95",
      falseItemIndex: [5],
      isSelected: true,
    },
    {
      title: "Ultimate",
      description: "Best value",
      price: "12,95",
      falseItemIndex: [],
      isSelected: false,
    },
  ]);

  const [badgeProps, setBadgeProps] = useState([
    {
      title: "Best quality",
      text: "A team of experts passionate about product management.",
      Icon: Icon["Heart"],
      color: "bg-badge-green",
    },
    {
      title: "Fastest delivery",
      text: "A team of experts passionate about product management",
      Icon: Icon["Zap"],
      color: "bg-badge-orange",
    },
    {
      title: "Great support",
      text: "A team of experts passionate about product management",
      Icon: Icon["Handphone"],
      color: "bg-badge-blue",
    },
    {
      title: "Rich documentation",
      text: "A team of experts passionate about product management",
      Icon: Icon["Document"],
      color: "bg-badge-purple",
    },
    {
      title: "Multiple Layouts",
      text: "A team of experts passionate about product management",
      Icon: Icon["Wall"],
      color: "bg-badge-dark",
    },
    {
      title: "Lifetime Updates ",
      text: "A team of experts passionate about product management",
      Icon: Icon["Infinity"],
      color: "bg-badge-red",
    },
  ]);
  return (
    <>
      <PageTitle
        title="Pricing Plans"
        text="We are an industry-leading company that values honesty, integrity, and efficiency. Building quality products and caring."
      />
      <section className="wrapper flex flex-col bg-background-color">
        <CardLayout property={cardProps} />
        <BadgeLayout property={badgeProps} />

      </section>
    </>
  );
};

export default Pricing;
